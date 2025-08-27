n.d(t, {
    D5: () => M,
    ZP: () => en,
    uZ: () => A,
});
var r,
    i = n(873546),
    o = n(442837),
    a = n(570140),
    s = n(353926),
    l = n(171900),
    c = n(945577),
    u = n(897473),
    d = n(585483),
    f = n(709054),
    _ = n(592125),
    p = n(430824),
    h = n(496675),
    m = n(944486),
    g = n(914010),
    E = n(594174),
    b = n(981631),
    y = n(176505),
    O = n(231338);
function v(e, t, n) {
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
function I(e) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}
function T(e, t) {
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
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let A = "message_requests",
    C = !1,
    N = !1,
    R = !0,
    P = {},
    w = {},
    D = !1,
    x = !1,
    L = null;
function j(e) {
    if (null == e) return null;
    if ((0, y.AB)(e)) {
        let t = g.Z.getGuildId();
        return null == t ? null : (0, y.Qk)(e, t);
    }
    return e;
}
function M(e) {
    return [u.tI.VIEW_CHANNEL, u.tI.VIEW_THREAD, u.tI.VIEW_MESSAGE_REQUEST, u.tI.VIEW_MOD_REPORT].includes(e.type);
}
function k(e) {
    let t = !1;
    x && ((x = !1), (t = !0));
    let n = j(m.Z.getChannelId());
    return null != n && n in P && (delete P[n], (t = !0)), t && e ? e : !e;
}
function U() {
    x && d.S.dispatch(b.CkL.SEARCH_RESULTS_CLOSE), N && (N = k(N)), (C = k(C));
}
function G() {
    C && (C = k(C)), (N = k(N));
}
function B() {
    R || d.S.dispatch(b.CkL.SEARCH_RESULTS_CLOSE), (R = k(R));
}
function Z(e) {
    let { sidebarType: t, guildId: n, baseChannelId: r, details: i } = e;
    x = !1;
    let o = j(r);
    return (
        null != o &&
        ((w[n] = {
            type: t,
            baseChannelId: o,
            guildId: n,
            details: i,
        }),
        !0)
    );
}
function F(e) {
    let { guildId: t } = e;
    return null != w[t] && (delete w[t], !0);
}
function V(e) {
    let { sidebarType: t, baseChannelId: n, channelId: r, details: i } = e;
    x = !1;
    let o = j(n);
    if (null == o) return !1;
    let a = {
        type: t,
        channelId: r,
        details: i,
    };
    return t === u.tI.VIEW_MOD_REPORT && (a = S(I({}, a), { baseChannelId: n })), (P[o] = a), !0;
}
function H(e) {
    let { parentChannelId: t, parentMessageId: n, location: r } = e;
    x = !1;
    let i = j(t);
    null != i &&
        (P[i] = {
            type: u.tI.CREATE_THREAD,
            parentChannelId: t,
            parentMessageId: n,
            location: r,
        });
}
function Y(e) {
    let { channel: t } = e;
    if (t.id in P) return delete P[t.id], !0;
    let n = !1;
    for (let e in P) {
        let r = P[e];
        null != r && r.type === u.tI.VIEW_CHANNEL && r.channelId === t.id && (delete P[e], (n = !0));
    }
    return n;
}
function W(e) {
    let { channel: t } = e,
        n = P[t.parent_id];
    if (null == n || n.type !== u.tI.VIEW_THREAD || n.channelId !== t.id) return !1;
    delete P[t.parent_id];
}
function K(e) {
    var t;
    let { channel: n } = e;
    if (n.ownerId === (null == (t = E.default.getCurrentUser()) ? void 0 : t.id)) return !1;
    let r = P[n.parent_id];
    null != r &&
        r.type === u.tI.CREATE_THREAD &&
        r.parentMessageId === f.default.castChannelIdAsMessageId(n.id) &&
        (P[n.parent_id] = {
            type: u.tI.VIEW_THREAD,
            channelId: n.id,
        });
}
function z() {
    let e = !1;
    for (let t in P) {
        let n = P[t];
        if (n.type === u.tI.VIEW_THREAD || n.type === u.tI.VIEW_CHANNEL) {
            let r = _.Z.getChannel(n.channelId);
            (null != r && h.Z.can(O.Pl.VIEW_CHANNEL, r)) || (delete P[t], (e = !0));
        }
    }
    return e;
}
function q(e) {
    let { baseChannelId: t } = e,
        n = j(t);
    null != n && delete P[n];
}
function X() {
    if (null == L) return !1;
    let e = l.Z.hasSearchState(L);
    if (x === e) return !1;
    x = e;
}
function Q(e) {
    if (null == e);
    else if (e === b.aib.DMS) return b.aib.DMS;
    else if (e === b.I_8) return b.aib.FAVORITES;
    else if (null != p.Z.getGuild(e)) return b.aib.GUILD;
    else if (null != _.Z.getChannel(e)) return b.aib.CHANNEL;
    return null;
}
function J(e) {
    if (e === L) return !1;
    (L = e), X();
}
function $() {
    (D = !0),
        null != L &&
            Q(L) === b.aib.CHANNEL &&
            (0, c.ad)({ location: "SearchStore_handleConnectionOpen" }) &&
            J(b.aib.DMS);
}
function ee(e) {
    let { guildId: t, channelId: n } = e;
    i.tq && C && ((C = !1), (N = !1)),
        null != t
            ? J(t)
            : (0, c.ad)({
                    location: "ChannelSectionStore_handleChannelSelect",
                    autoTrackExposure: D,
                })
              ? J(b.aib.DMS)
              : J(n);
}
class et extends (r = o.ZP.PersistedStore) {
    initialize(e) {
        if (null != e) {
            var t, n, r, i, o;
            (C = null != (t = e.isMembersOpen) && t),
                (N = null != (n = e.isSummariesOpen) && n),
                (R = null == (r = e.isProfileOpen) || r),
                (P = null != (i = e.sidebars) ? i : {}),
                (w = null != (o = e.guildSidebars) ? o : {});
        }
        this.syncWith([l.Z], X), this.syncWith([h.Z], z), this.waitFor(l.Z, p.Z, _.Z, s.Z);
    }
    getState() {
        return {
            isMembersOpen: C,
            isSummariesOpen: N,
            isProfileOpen: R,
            sidebars: P,
            guildSidebars: w,
        };
    }
    getSection(e, t) {
        if (x) return b.ULH.SEARCH;
        let n = j(e);
        return null != n && null != P[n]
            ? b.ULH.SIDEBAR_CHAT
            : t && R
              ? b.ULH.PROFILE
              : N
                ? b.ULH.SUMMARIES
                : C
                  ? b.ULH.MEMBERS
                  : b.ULH.NONE;
    }
    getSidebarState(e) {
        let t = j(e);
        return null == t ? void 0 : P[t];
    }
    getGuildSidebarState(e) {
        return null == e ? void 0 : w[e];
    }
    getCurrentSidebarChannelId(e) {
        let t = j(e);
        if (null == t || x) return null;
        let n = P[t];
        return null == n
            ? null
            : n.type === u.tI.VIEW_THREAD || n.type === u.tI.VIEW_CHANNEL || n.type === u.tI.VIEW_MOD_REPORT
              ? n.channelId
              : null;
    }
    getCurrentSidebarMessageId(e) {
        var t;
        let n = j(e);
        if (null == n || x) return null;
        let r = P[n];
        return null == r
            ? null
            : r.type === u.tI.VIEW_THREAD || r.type === u.tI.VIEW_CHANNEL || r.type === u.tI.VIEW_MOD_REPORT
              ? null == (t = r.details)
                  ? void 0
                  : t.initialMessageId
              : null;
    }
}
v(et, "displayName", "ChannelSectionStore"), v(et, "persistKey", "ChannelSectionStore2");
let en = new et(a.Z, {
    CONNECTION_OPEN: $,
    CHANNEL_TOGGLE_MEMBERS_SECTION: U,
    USER_PROFILE_SIDEBAR_TOGGLE_SECTION: B,
    CHANNEL_TOGGLE_SUMMARIES_SECTION: G,
    SIDEBAR_VIEW_CHANNEL: V,
    SIDEBAR_VIEW_GUILD: Z,
    SIDEBAR_CREATE_THREAD: H,
    SIDEBAR_CLOSE: q,
    SIDEBAR_CLOSE_GUILD: F,
    CHANNEL_DELETE: Y,
    CHANNEL_SELECT: ee,
    THREAD_CREATE: K,
    THREAD_DELETE: W,
});
