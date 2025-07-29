n.d(t, {
    D5: () => R,
    ZP: () => W,
    uZ: () => O
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
    _ = n(592125),
    f = n(496675),
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
let O = 'message_requests',
    v = !1,
    I = !1,
    T = !0,
    S = !1,
    A = {},
    N = {};
function C(e) {
    if (null == e) return null;
    if ((0, E.AB)(e)) {
        let t = h.Z.getGuildId();
        return null == t ? null : (0, E.Qk)(e, t);
    }
    return e;
}
function R(e) {
    return [c.tI.VIEW_CHANNEL, c.tI.VIEW_THREAD, c.tI.VIEW_MESSAGE_REQUEST].includes(e.type);
}
function P(e) {
    let t = !1;
    S && ((S = !1), (t = !0));
    let n = C(p.Z.getChannelId());
    return (null != n && n in A && (delete A[n], (t = !0)), t && e ? e : !e);
}
function w() {
    (S && u.S.dispatch(g.CkL.SEARCH_RESULTS_CLOSE), I && (I = P(I)), (v = P(v)));
}
function D() {
    (v && (v = P(v)), (I = P(I)));
}
function L() {
    (T || u.S.dispatch(g.CkL.SEARCH_RESULTS_CLOSE), (T = P(T)));
}
function x(e) {
    let { sidebarType: t, guildId: n, baseChannelId: r, details: i } = e;
    S = !1;
    let a = C(r);
    return (
        null != a &&
        ((N[n] = {
            type: t,
            baseChannelId: a,
            guildId: n,
            details: i
        }),
        !0)
    );
}
function M(e) {
    let { guildId: t } = e;
    return null != N[t] && (delete N[t], !0);
}
function k(e) {
    let { sidebarType: t, baseChannelId: n, channelId: r, details: i } = e;
    S = !1;
    let a = C(n);
    return (
        null != a &&
        ((A[a] = {
            type: t,
            channelId: r,
            details: i
        }),
        !0)
    );
}
function j(e) {
    let { parentChannelId: t, parentMessageId: n, location: r } = e;
    S = !1;
    let i = C(t);
    null != i &&
        (A[i] = {
            type: c.tI.CREATE_THREAD,
            parentChannelId: t,
            parentMessageId: n,
            location: r
        });
}
function U(e) {
    let { channel: t } = e;
    if (t.id in A) return (delete A[t.id], !0);
    let n = !1;
    for (let e in A) {
        let r = A[e];
        null != r && r.type === c.tI.VIEW_CHANNEL && r.channelId === t.id && (delete A[e], (n = !0));
    }
    return n;
}
function G(e) {
    let { channel: t } = e,
        n = A[t.parent_id];
    if (null == n || n.type !== c.tI.VIEW_THREAD || n.channelId !== t.id) return !1;
    delete A[t.parent_id];
}
function B(e) {
    var t;
    let { channel: n } = e;
    if (n.ownerId === (null == (t = m.default.getCurrentUser()) ? void 0 : t.id)) return !1;
    let r = A[n.parent_id];
    null != r &&
        r.type === c.tI.CREATE_THREAD &&
        r.parentMessageId === d.default.castChannelIdAsMessageId(n.id) &&
        (A[n.parent_id] = {
            type: c.tI.VIEW_THREAD,
            channelId: n.id
        });
}
function V() {
    let e = !1;
    for (let t in A) {
        let n = A[t];
        if (n.type === c.tI.VIEW_THREAD || n.type === c.tI.VIEW_CHANNEL) {
            let r = _.Z.getChannel(n.channelId);
            (null != r && f.Z.can(b.Pl.VIEW_CHANNEL, r)) || (delete A[t], (e = !0));
        }
    }
    return e;
}
function F(e) {
    let { baseChannelId: t } = e,
        n = C(t);
    null != n && delete A[n];
}
function Z() {
    let e = l.Z.getCurrentSearchId();
    if (null == e) return !1;
    let t = s.Z.hasSearchState(e);
    if (S === t) return !1;
    S = t;
}
function H() {
    i.tq && v && ((v = !1), (I = !1));
}
class Y extends (r = a.ZP.PersistedStore) {
    initialize(e) {
        if (null != e) {
            var t, n, r, i, a;
            ((v = null != (t = e.isMembersOpen) && t), (I = null != (n = e.isSummariesOpen) && n), (T = null == (r = e.isProfileOpen) || r), (A = null != (i = e.sidebars) ? i : {}), (N = null != (a = e.guildSidebars) ? a : {}));
        }
        (this.syncWith([s.Z, l.Z], Z), this.syncWith([f.Z], V), this.waitFor(l.Z, s.Z));
    }
    getState() {
        return {
            isMembersOpen: v,
            isSummariesOpen: I,
            isProfileOpen: T,
            sidebars: A,
            guildSidebars: N
        };
    }
    getSection(e, t) {
        if (S) return g.ULH.SEARCH;
        let n = C(e);
        return null != n && null != A[n] ? g.ULH.SIDEBAR_CHAT : t && T ? g.ULH.PROFILE : I ? g.ULH.SUMMARIES : v ? g.ULH.MEMBERS : g.ULH.NONE;
    }
    getSidebarState(e) {
        let t = C(e);
        return null == t ? void 0 : A[t];
    }
    getGuildSidebarState(e) {
        return null == e ? void 0 : N[e];
    }
    getCurrentSidebarChannelId(e) {
        let t = C(e);
        if (null == t || S) return null;
        let n = A[t];
        return null == n ? null : n.type === c.tI.VIEW_THREAD || n.type === c.tI.VIEW_CHANNEL ? n.channelId : null;
    }
    getCurrentSidebarMessageId(e) {
        var t;
        let n = C(e);
        if (null == n || S) return null;
        let r = A[n];
        return null == r ? null : r.type === c.tI.VIEW_THREAD || r.type === c.tI.VIEW_CHANNEL ? (null == (t = r.details) ? void 0 : t.initialMessageId) : null;
    }
}
(y(Y, 'displayName', 'ChannelSectionStore'), y(Y, 'persistKey', 'ChannelSectionStore2'));
let W = new Y(o.Z, {
    CHANNEL_TOGGLE_MEMBERS_SECTION: w,
    USER_PROFILE_SIDEBAR_TOGGLE_SECTION: L,
    CHANNEL_TOGGLE_SUMMARIES_SECTION: D,
    SIDEBAR_VIEW_CHANNEL: k,
    SIDEBAR_VIEW_GUILD: x,
    SIDEBAR_CREATE_THREAD: j,
    SIDEBAR_CLOSE: F,
    SIDEBAR_CLOSE_GUILD: M,
    CHANNEL_DELETE: U,
    CHANNEL_SELECT: H,
    THREAD_CREATE: B,
    THREAD_DELETE: G
});
