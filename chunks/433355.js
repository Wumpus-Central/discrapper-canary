n.d(t, {
    D5: () => R,
    ZP: () => Y,
    uZ: () => y
});
var i,
    r = n(873546),
    a = n(442837),
    s = n(570140),
    o = n(897473),
    l = n(585483),
    u = n(709054),
    c = n(592125),
    d = n(496675),
    f = n(768119),
    _ = n(944486),
    p = n(914010),
    h = n(594174),
    m = n(981631),
    g = n(176505),
    E = n(231338);
function v(e, t, n) {
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
let y = 'message_requests',
    I = !1,
    T = !1,
    b = !0,
    S = !1,
    A = {},
    N = {};
function C(e) {
    if (null == e) return null;
    if ((0, g.AB)(e)) {
        let t = p.Z.getGuildId();
        return null == t ? null : (0, g.Qk)(e, t);
    }
    return e;
}
function R(e) {
    return [o.tI.VIEW_CHANNEL, o.tI.VIEW_THREAD, o.tI.VIEW_MESSAGE_REQUEST].includes(e.type);
}
function O(e) {
    let t = !1;
    S && ((S = !1), (t = !0));
    let n = C(_.Z.getChannelId());
    return null != n && n in A && (delete A[n], (t = !0)), t && e ? e : !e;
}
function D() {
    T && (T = O(T)), (I = O(I));
}
function x() {
    I && (I = O(I)), (T = O(T));
}
function L() {
    b || l.S.dispatch(m.CkL.SEARCH_RESULTS_CLOSE), (b = O(b));
}
function P(e) {
    let { sidebarType: t, guildId: n, baseChannelId: i, details: r } = e;
    S = !1;
    let a = C(i);
    return (
        null != a &&
        ((N[n] = {
            type: t,
            baseChannelId: a,
            guildId: n,
            details: r
        }),
        !0)
    );
}
function w(e) {
    let { guildId: t } = e;
    return null != N[t] && (delete N[t], !0);
}
function M(e) {
    let { sidebarType: t, baseChannelId: n, channelId: i, details: r } = e;
    S = !1;
    let a = C(n);
    return (
        null != a &&
        ((A[a] = {
            type: t,
            channelId: i,
            details: r
        }),
        !0)
    );
}
function k(e) {
    let { parentChannelId: t, parentMessageId: n, location: i } = e;
    S = !1;
    let r = C(t);
    null != r &&
        (A[r] = {
            type: o.tI.CREATE_THREAD,
            parentChannelId: t,
            parentMessageId: n,
            location: i
        });
}
function U(e) {
    let { channel: t } = e;
    if (t.id in A) return delete A[t.id], !0;
    let n = !1;
    for (let e in A) {
        let i = A[e];
        null != i && i.type === o.tI.VIEW_CHANNEL && i.channelId === t.id && (delete A[e], (n = !0));
    }
    return n;
}
function G(e) {
    let { channel: t } = e,
        n = A[t.parent_id];
    if (null == n || n.type !== o.tI.VIEW_THREAD || n.channelId !== t.id) return !1;
    delete A[t.parent_id];
}
function B(e) {
    var t;
    let { channel: n } = e;
    if (n.ownerId === (null === (t = h.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return !1;
    let i = A[n.parent_id];
    null != i &&
        i.type === o.tI.CREATE_THREAD &&
        i.parentMessageId === u.default.castChannelIdAsMessageId(n.id) &&
        (A[n.parent_id] = {
            type: o.tI.VIEW_THREAD,
            channelId: n.id
        });
}
function Z() {
    let e = !1;
    for (let t in A) {
        let n = A[t];
        if (n.type === o.tI.VIEW_THREAD || n.type === o.tI.VIEW_CHANNEL) {
            let i = c.Z.getChannel(n.channelId);
            (null != i && d.Z.can(E.Pl.VIEW_CHANNEL, i)) || (delete A[t], (e = !0));
        }
    }
    return e;
}
function F(e) {
    let { baseChannelId: t } = e,
        n = C(t);
    null != n && delete A[n];
}
function V() {
    if (S === f.Z.isActive()) return !1;
    S = f.Z.isActive();
}
function j() {
    r.tq && I && ((I = !1), (T = !1));
}
class H extends (i = a.ZP.PersistedStore) {
    initialize(e) {
        if (null != e) {
            var t, n, i, r, a;
            (I = null !== (t = e.isMembersOpen) && void 0 !== t && t), (T = null !== (n = e.isSummariesOpen) && void 0 !== n && n), (b = null === (i = e.isProfileOpen) || void 0 === i || i), (A = null !== (r = e.sidebars) && void 0 !== r ? r : {}), (N = null !== (a = e.guildSidebars) && void 0 !== a ? a : {});
        }
        this.syncWith([f.Z], V), this.syncWith([d.Z], Z);
    }
    getState() {
        return {
            isMembersOpen: I,
            isSummariesOpen: T,
            isProfileOpen: b,
            sidebars: A,
            guildSidebars: N
        };
    }
    getSection(e, t) {
        if (S) return m.ULH.SEARCH;
        let n = C(e);
        return null != n && null != A[n] ? m.ULH.SIDEBAR_CHAT : t && b ? m.ULH.PROFILE : T ? m.ULH.SUMMARIES : I ? m.ULH.MEMBERS : m.ULH.NONE;
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
        return null == n ? null : n.type === o.tI.VIEW_THREAD || n.type === o.tI.VIEW_CHANNEL ? n.channelId : null;
    }
    getCurrentSidebarMessageId(e) {
        var t;
        let n = C(e);
        if (null == n || S) return null;
        let i = A[n];
        return null == i ? null : i.type === o.tI.VIEW_THREAD || i.type === o.tI.VIEW_CHANNEL ? (null === (t = i.details) || void 0 === t ? void 0 : t.initialMessageId) : null;
    }
}
v(H, 'displayName', 'ChannelSectionStore'), v(H, 'persistKey', 'ChannelSectionStore2');
let Y = new H(s.Z, {
    CHANNEL_TOGGLE_MEMBERS_SECTION: D,
    PROFILE_PANEL_TOGGLE_SECTION: L,
    CHANNEL_TOGGLE_SUMMARIES_SECTION: x,
    SIDEBAR_VIEW_CHANNEL: M,
    SIDEBAR_VIEW_GUILD: P,
    SIDEBAR_CREATE_THREAD: k,
    SIDEBAR_CLOSE: F,
    SIDEBAR_CLOSE_GUILD: w,
    CHANNEL_DELETE: U,
    CHANNEL_SELECT: j,
    THREAD_CREATE: B,
    THREAD_DELETE: G
});
