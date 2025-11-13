n.d(t, {
    D5: () => L,
    ZP: () => J,
    uZ: () => S,
});
var r,
    i = n(873546),
    a = n(442837),
    o = n(570140),
    s = n(353926),
    l = n(171900),
    c = n(897473),
    u = n(585483),
    d = n(709054),
    f = n(592125),
    _ = n(430824),
    p = n(496675),
    h = n(944486),
    m = n(914010),
    g = n(594174),
    E = n(981631),
    b = n(176505),
    y = n(231338);
function O(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                O(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let S = "message_requests",
    A = !1,
    C = !1,
    N = !0,
    R = {},
    P = {},
    D = !1,
    w = null;
function x(e) {
    if (null == e) return null;
    if ((0, b.AB)(e)) {
        let t = m.Z.getGuildId();
        return null == t ? null : (0, b.Qk)(e, t);
    }
    return e;
}
function L(e) {
    return [c.tI.VIEW_CHANNEL, c.tI.VIEW_THREAD, c.tI.VIEW_MESSAGE_REQUEST, c.tI.VIEW_MOD_REPORT].includes(e.type);
}
function M(e) {
    let t = !1;
    D && ((D = !1), (t = !0));
    let n = x(h.Z.getChannelId());
    return null != n && n in R && (delete R[n], (t = !0)), t && e ? e : !e;
}
function j() {
    D && u.S.dispatch(E.CkL.SEARCH_RESULTS_CLOSE), C && (C = M(C)), (A = M(A));
}
function k() {
    A && (A = M(A)), (C = M(C));
}
function U() {
    N || u.S.dispatch(E.CkL.SEARCH_RESULTS_CLOSE), (N = M(N));
}
function G(e) {
    let { sidebarType: t, guildId: n, baseChannelId: r, details: i } = e;
    D = !1;
    let a = x(r);
    return (
        null != a &&
        ((P[n] = {
            type: t,
            baseChannelId: a,
            guildId: n,
            details: i,
        }),
        !0)
    );
}
function B(e) {
    let { guildId: t } = e;
    return null != P[t] && (delete P[t], !0);
}
function Z(e) {
    let { sidebarType: t, baseChannelId: n, channelId: r, details: i } = e;
    D = !1;
    let a = x(n);
    if (null == a) return !1;
    let o = {
        type: t,
        channelId: r,
        details: i,
    };
    return t === c.tI.VIEW_MOD_REPORT && (o = T(v({}, o), { baseChannelId: n })), (R[a] = o), !0;
}
function F(e) {
    let { parentChannelId: t, parentMessageId: n, location: r } = e;
    D = !1;
    let i = x(t);
    null != i &&
        (R[i] = {
            type: c.tI.CREATE_THREAD,
            parentChannelId: t,
            parentMessageId: n,
            location: r,
        });
}
function V(e) {
    let { channel: t } = e;
    if (t.id in R) return delete R[t.id], !0;
    let n = !1;
    for (let e in R) {
        let r = R[e];
        null != r && r.type === c.tI.VIEW_CHANNEL && r.channelId === t.id && (delete R[e], (n = !0));
    }
    return n;
}
function H(e) {
    let { channel: t } = e,
        n = R[t.parent_id];
    if (null == n || n.type !== c.tI.VIEW_THREAD || n.channelId !== t.id) return !1;
    delete R[t.parent_id];
}
function Y(e) {
    var t;
    let { channel: n } = e;
    if (n.ownerId === (null == (t = g.default.getCurrentUser()) ? void 0 : t.id)) return !1;
    let r = R[n.parent_id];
    null != r &&
        r.type === c.tI.CREATE_THREAD &&
        r.parentMessageId === d.default.castChannelIdAsMessageId(n.id) &&
        (R[n.parent_id] = {
            type: c.tI.VIEW_THREAD,
            channelId: n.id,
        });
}
function W() {
    let e = !1;
    for (let t in R) {
        let n = R[t];
        if (n.type === c.tI.VIEW_THREAD || n.type === c.tI.VIEW_CHANNEL) {
            let r = f.Z.getChannel(n.channelId);
            (null != r && p.Z.can(y.Pl.VIEW_CHANNEL, r)) || (delete R[t], (e = !0));
        }
    }
    return e;
}
function K(e) {
    let { baseChannelId: t } = e,
        n = x(t);
    null != n && delete R[n];
}
function z() {
    let e = null != w && l.Z.hasSearchState(w);
    if (e === D) return !1;
    D = e;
}
function q() {
    i.tq && A && ((A = !1), (C = !1));
}
function X(e) {
    return (w = e.searchContextId), z();
}
class Q extends (r = a.ZP.PersistedStore) {
    initialize(e) {
        if (null != e) {
            var t, n, r, i, a;
            (A = null != (t = e.isMembersOpen) && t),
                (C = null != (n = e.isSummariesOpen) && n),
                (N = null == (r = e.isProfileOpen) || r),
                (R = null != (i = e.sidebars) ? i : {}),
                (P = null != (a = e.guildSidebars) ? a : {});
        }
        this.syncWith([l.Z], z), this.syncWith([p.Z], W), this.waitFor(f.Z, s.Z, _.Z, p.Z, l.Z, h.Z, m.Z, g.default);
    }
    getState() {
        return {
            isMembersOpen: A,
            isSummariesOpen: C,
            isProfileOpen: N,
            sidebars: R,
            guildSidebars: P,
        };
    }
    getSection(e, t) {
        if (D) return E.ULH.SEARCH;
        let n = x(e);
        return null != n && null != R[n]
            ? E.ULH.SIDEBAR_CHAT
            : t && N
              ? E.ULH.PROFILE
              : C
                ? E.ULH.SUMMARIES
                : A
                  ? E.ULH.MEMBERS
                  : E.ULH.NONE;
    }
    getSidebarState(e) {
        let t = x(e);
        return null == t ? void 0 : R[t];
    }
    getGuildSidebarState(e) {
        return null == e ? void 0 : P[e];
    }
    getCurrentSidebarChannelId(e) {
        let t = x(e);
        if (null == t || D) return null;
        let n = R[t];
        return null == n
            ? null
            : n.type === c.tI.VIEW_THREAD || n.type === c.tI.VIEW_CHANNEL || n.type === c.tI.VIEW_MOD_REPORT
              ? n.channelId
              : null;
    }
    getCurrentSidebarMessageId(e) {
        var t;
        let n = x(e);
        if (null == n || D) return null;
        let r = R[n];
        return null == r
            ? null
            : r.type === c.tI.VIEW_THREAD || r.type === c.tI.VIEW_CHANNEL || r.type === c.tI.VIEW_MOD_REPORT
              ? null == (t = r.details)
                  ? void 0
                  : t.initialMessageId
              : null;
    }
}
O(Q, "displayName", "ChannelSectionStore"), O(Q, "persistKey", "ChannelSectionStore2");
let J = new Q(o.Z, {
    SIDEBAR_SET_SELECTED_SEARCH_CONTEXT: X,
    CHANNEL_TOGGLE_MEMBERS_SECTION: j,
    USER_PROFILE_SIDEBAR_TOGGLE_SECTION: U,
    CHANNEL_TOGGLE_SUMMARIES_SECTION: k,
    SIDEBAR_VIEW_CHANNEL: Z,
    SIDEBAR_VIEW_GUILD: G,
    SIDEBAR_CREATE_THREAD: F,
    SIDEBAR_CLOSE: K,
    SIDEBAR_CLOSE_GUILD: B,
    CHANNEL_DELETE: V,
    CHANNEL_SELECT: q,
    THREAD_CREATE: Y,
    THREAD_DELETE: H,
});
