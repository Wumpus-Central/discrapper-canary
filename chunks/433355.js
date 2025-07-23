n.d(t, {
    D5: () => P,
    ZP: () => K,
    uZ: () => v
});
var r,
    i = n(873546),
    a = n(442837),
    o = n(570140),
    s = n(778877),
    l = n(903488),
    c = n(897473),
    u = n(585483),
    d = n(709054),
    _ = n(592125),
    f = n(496675),
    p = n(768119),
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
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let v = 'message_requests',
    I = !1,
    T = !1,
    S = !0,
    A = !1,
    N = {},
    C = {};
function R(e) {
    if (null == e) return null;
    if ((0, b.AB)(e)) {
        let t = m.Z.getGuildId();
        return null == t ? null : (0, b.Qk)(e, t);
    }
    return e;
}
function P(e) {
    return [c.tI.VIEW_CHANNEL, c.tI.VIEW_THREAD, c.tI.VIEW_MESSAGE_REQUEST].includes(e.type);
}
function w(e) {
    let t = !1;
    A && ((A = !1), (t = !0));
    let n = R(h.Z.getChannelId());
    return (null != n && n in N && (delete N[n], (t = !0)), t && e ? e : !e);
}
function D() {
    (A && u.S.dispatch(E.CkL.SEARCH_RESULTS_CLOSE), T && (T = w(T)), (I = w(I)));
}
function L() {
    (I && (I = w(I)), (T = w(T)));
}
function x() {
    (S || u.S.dispatch(E.CkL.SEARCH_RESULTS_CLOSE), (S = w(S)));
}
function M(e) {
    let { sidebarType: t, guildId: n, baseChannelId: r, details: i } = e;
    A = !1;
    let a = R(r);
    return (
        null != a &&
        ((C[n] = {
            type: t,
            baseChannelId: a,
            guildId: n,
            details: i
        }),
        !0)
    );
}
function k(e) {
    let { guildId: t } = e;
    return null != C[t] && (delete C[t], !0);
}
function j(e) {
    let { sidebarType: t, baseChannelId: n, channelId: r, details: i } = e;
    A = !1;
    let a = R(n);
    return (
        null != a &&
        ((N[a] = {
            type: t,
            channelId: r,
            details: i
        }),
        !0)
    );
}
function U(e) {
    let { parentChannelId: t, parentMessageId: n, location: r } = e;
    A = !1;
    let i = R(t);
    null != i &&
        (N[i] = {
            type: c.tI.CREATE_THREAD,
            parentChannelId: t,
            parentMessageId: n,
            location: r
        });
}
function G(e) {
    let { channel: t } = e;
    if (t.id in N) return (delete N[t.id], !0);
    let n = !1;
    for (let e in N) {
        let r = N[e];
        null != r && r.type === c.tI.VIEW_CHANNEL && r.channelId === t.id && (delete N[e], (n = !0));
    }
    return n;
}
function B(e) {
    let { channel: t } = e,
        n = N[t.parent_id];
    if (null == n || n.type !== c.tI.VIEW_THREAD || n.channelId !== t.id) return !1;
    delete N[t.parent_id];
}
function V(e) {
    var t;
    let { channel: n } = e;
    if (n.ownerId === (null == (t = g.default.getCurrentUser()) ? void 0 : t.id)) return !1;
    let r = N[n.parent_id];
    null != r &&
        r.type === c.tI.CREATE_THREAD &&
        r.parentMessageId === d.default.castChannelIdAsMessageId(n.id) &&
        (N[n.parent_id] = {
            type: c.tI.VIEW_THREAD,
            channelId: n.id
        });
}
function F() {
    let e = !1;
    for (let t in N) {
        let n = N[t];
        if (n.type === c.tI.VIEW_THREAD || n.type === c.tI.VIEW_CHANNEL) {
            let r = _.Z.getChannel(n.channelId);
            (null != r && f.Z.can(y.Pl.VIEW_CHANNEL, r)) || (delete N[t], (e = !0));
        }
    }
    return e;
}
function Z(e) {
    let { baseChannelId: t } = e,
        n = R(t);
    null != n && delete N[n];
}
function H() {
    let e = p.Z.getCurrentSearchId(),
        t = (0, s.a)({ location: 'handleSyncSearchStore' });
    if (e === E.aib.DMS && t) {
        let t = l.Z.hasSearchState(e);
        if (A === t) return !1;
        A = t;
    } else {
        let e = p.Z.isActive();
        if (A === e) return !1;
        A = e;
    }
}
function Y() {
    i.tq && I && ((I = !1), (T = !1));
}
class W extends (r = a.ZP.PersistedStore) {
    initialize(e) {
        if (null != e) {
            var t, n, r, i, a;
            ((I = null != (t = e.isMembersOpen) && t), (T = null != (n = e.isSummariesOpen) && n), (S = null == (r = e.isProfileOpen) || r), (N = null != (i = e.sidebars) ? i : {}), (C = null != (a = e.guildSidebars) ? a : {}));
        }
        (this.syncWith([l.Z, p.Z], H), this.syncWith([f.Z], F), this.waitFor(p.Z, l.Z));
    }
    getState() {
        return {
            isMembersOpen: I,
            isSummariesOpen: T,
            isProfileOpen: S,
            sidebars: N,
            guildSidebars: C
        };
    }
    getSection(e, t) {
        if (A) return E.ULH.SEARCH;
        let n = R(e);
        return null != n && null != N[n] ? E.ULH.SIDEBAR_CHAT : t && S ? E.ULH.PROFILE : T ? E.ULH.SUMMARIES : I ? E.ULH.MEMBERS : E.ULH.NONE;
    }
    getSidebarState(e) {
        let t = R(e);
        return null == t ? void 0 : N[t];
    }
    getGuildSidebarState(e) {
        return null == e ? void 0 : C[e];
    }
    getCurrentSidebarChannelId(e) {
        let t = R(e);
        if (null == t || A) return null;
        let n = N[t];
        return null == n ? null : n.type === c.tI.VIEW_THREAD || n.type === c.tI.VIEW_CHANNEL ? n.channelId : null;
    }
    getCurrentSidebarMessageId(e) {
        var t;
        let n = R(e);
        if (null == n || A) return null;
        let r = N[n];
        return null == r ? null : r.type === c.tI.VIEW_THREAD || r.type === c.tI.VIEW_CHANNEL ? (null == (t = r.details) ? void 0 : t.initialMessageId) : null;
    }
}
(O(W, 'displayName', 'ChannelSectionStore'), O(W, 'persistKey', 'ChannelSectionStore2'));
let K = new W(o.Z, {
    CHANNEL_TOGGLE_MEMBERS_SECTION: D,
    USER_PROFILE_SIDEBAR_TOGGLE_SECTION: x,
    CHANNEL_TOGGLE_SUMMARIES_SECTION: L,
    SIDEBAR_VIEW_CHANNEL: j,
    SIDEBAR_VIEW_GUILD: M,
    SIDEBAR_CREATE_THREAD: U,
    SIDEBAR_CLOSE: Z,
    SIDEBAR_CLOSE_GUILD: k,
    CHANNEL_DELETE: G,
    CHANNEL_SELECT: Y,
    THREAD_CREATE: V,
    THREAD_DELETE: B
});
