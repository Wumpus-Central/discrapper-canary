n.d(t, {
    D5: () => D,
    ZP: () => q,
    uZ: () => T
});
var r,
    i = n(873546),
    a = n(442837),
    o = n(570140),
    s = n(171900),
    l = n(518944),
    c = n(897473),
    u = n(585483),
    d = n(709054),
    f = n(592125),
    _ = n(496675),
    p = n(944486),
    h = n(914010),
    m = n(594174),
    g = n(981631),
    E = n(176505),
    b = n(231338);
function y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                y(e, t, n[t]);
            }));
    }
    return e;
}
function v(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let T = 'message_requests',
    S = !1,
    A = !1,
    N = !0,
    C = !1,
    R = {},
    P = {};
function w(e) {
    if (null == e) return null;
    if ((0, E.AB)(e)) {
        let t = h.Z.getGuildId();
        return null == t ? null : (0, E.Qk)(e, t);
    }
    return e;
}
function D(e) {
    return [c.tI.VIEW_CHANNEL, c.tI.VIEW_THREAD, c.tI.VIEW_MESSAGE_REQUEST, c.tI.VIEW_MOD_REPORT].includes(e.type);
}
function L(e) {
    let t = !1;
    C && ((C = !1), (t = !0));
    let n = w(p.Z.getChannelId());
    return (null != n && n in R && (delete R[n], (t = !0)), t && e ? e : !e);
}
function x() {
    (C && u.S.dispatch(g.CkL.SEARCH_RESULTS_CLOSE), A && (A = L(A)), (S = L(S)));
}
function M() {
    (S && (S = L(S)), (A = L(A)));
}
function k() {
    (N || u.S.dispatch(g.CkL.SEARCH_RESULTS_CLOSE), (N = L(N)));
}
function j(e) {
    let { sidebarType: t, guildId: n, baseChannelId: r, details: i } = e;
    C = !1;
    let a = w(r);
    return (
        null != a &&
        ((P[n] = {
            type: t,
            baseChannelId: a,
            guildId: n,
            details: i
        }),
        !0)
    );
}
function U(e) {
    let { guildId: t } = e;
    return null != P[t] && (delete P[t], !0);
}
function G(e) {
    let { sidebarType: t, baseChannelId: n, channelId: r, details: i } = e;
    C = !1;
    let a = w(n);
    if (null == a) return !1;
    let o = {
        type: t,
        channelId: r,
        details: i
    };
    return (t === c.tI.VIEW_MOD_REPORT && (o = I(O({}, o), { baseChannelId: n })), (R[a] = o), !0);
}
function B(e) {
    let { parentChannelId: t, parentMessageId: n, location: r } = e;
    C = !1;
    let i = w(t);
    null != i &&
        (R[i] = {
            type: c.tI.CREATE_THREAD,
            parentChannelId: t,
            parentMessageId: n,
            location: r
        });
}
function V(e) {
    let { channel: t } = e;
    if (t.id in R) return (delete R[t.id], !0);
    let n = !1;
    for (let e in R) {
        let r = R[e];
        null != r && r.type === c.tI.VIEW_CHANNEL && r.channelId === t.id && (delete R[e], (n = !0));
    }
    return n;
}
function F(e) {
    let { channel: t } = e,
        n = R[t.parent_id];
    if (null == n || n.type !== c.tI.VIEW_THREAD || n.channelId !== t.id) return !1;
    delete R[t.parent_id];
}
function Z(e) {
    var t;
    let { channel: n } = e;
    if (n.ownerId === (null == (t = m.default.getCurrentUser()) ? void 0 : t.id)) return !1;
    let r = R[n.parent_id];
    null != r &&
        r.type === c.tI.CREATE_THREAD &&
        r.parentMessageId === d.default.castChannelIdAsMessageId(n.id) &&
        (R[n.parent_id] = {
            type: c.tI.VIEW_THREAD,
            channelId: n.id
        });
}
function H() {
    let e = !1;
    for (let t in R) {
        let n = R[t];
        if (n.type === c.tI.VIEW_THREAD || n.type === c.tI.VIEW_CHANNEL) {
            let r = f.Z.getChannel(n.channelId);
            (null != r && _.Z.can(b.Pl.VIEW_CHANNEL, r)) || (delete R[t], (e = !0));
        }
    }
    return e;
}
function Y(e) {
    let { baseChannelId: t } = e,
        n = w(t);
    null != n && delete R[n];
}
function W() {
    let e = l.Z.getCurrentSearchId();
    if (null == e) return !1;
    let t = s.Z.hasSearchState(e);
    if (C === t) return !1;
    C = t;
}
function K() {
    i.tq && S && ((S = !1), (A = !1));
}
class z extends (r = a.ZP.PersistedStore) {
    initialize(e) {
        if (null != e) {
            var t, n, r, i, a;
            ((S = null != (t = e.isMembersOpen) && t), (A = null != (n = e.isSummariesOpen) && n), (N = null == (r = e.isProfileOpen) || r), (R = null != (i = e.sidebars) ? i : {}), (P = null != (a = e.guildSidebars) ? a : {}));
        }
        (this.syncWith([s.Z, l.Z], W), this.syncWith([_.Z], H), this.waitFor(l.Z, s.Z));
    }
    getState() {
        return {
            isMembersOpen: S,
            isSummariesOpen: A,
            isProfileOpen: N,
            sidebars: R,
            guildSidebars: P
        };
    }
    getSection(e, t) {
        if (C) return g.ULH.SEARCH;
        let n = w(e);
        return null != n && null != R[n] ? g.ULH.SIDEBAR_CHAT : t && N ? g.ULH.PROFILE : A ? g.ULH.SUMMARIES : S ? g.ULH.MEMBERS : g.ULH.NONE;
    }
    getSidebarState(e) {
        let t = w(e);
        return null == t ? void 0 : R[t];
    }
    getGuildSidebarState(e) {
        return null == e ? void 0 : P[e];
    }
    getCurrentSidebarChannelId(e) {
        let t = w(e);
        if (null == t || C) return null;
        let n = R[t];
        return null == n ? null : n.type === c.tI.VIEW_THREAD || n.type === c.tI.VIEW_CHANNEL || n.type === c.tI.VIEW_MOD_REPORT ? n.channelId : null;
    }
    getCurrentSidebarMessageId(e) {
        var t;
        let n = w(e);
        if (null == n || C) return null;
        let r = R[n];
        return null == r ? null : r.type === c.tI.VIEW_THREAD || r.type === c.tI.VIEW_CHANNEL || r.type === c.tI.VIEW_MOD_REPORT ? (null == (t = r.details) ? void 0 : t.initialMessageId) : null;
    }
}
(y(z, 'displayName', 'ChannelSectionStore'), y(z, 'persistKey', 'ChannelSectionStore2'));
let q = new z(o.Z, {
    CHANNEL_TOGGLE_MEMBERS_SECTION: x,
    USER_PROFILE_SIDEBAR_TOGGLE_SECTION: k,
    CHANNEL_TOGGLE_SUMMARIES_SECTION: M,
    SIDEBAR_VIEW_CHANNEL: G,
    SIDEBAR_VIEW_GUILD: j,
    SIDEBAR_CREATE_THREAD: B,
    SIDEBAR_CLOSE: Y,
    SIDEBAR_CLOSE_GUILD: U,
    CHANNEL_DELETE: V,
    CHANNEL_SELECT: K,
    THREAD_CREATE: Z,
    THREAD_DELETE: F
});
