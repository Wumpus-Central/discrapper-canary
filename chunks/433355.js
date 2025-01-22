r.d(n, {
    D5: function () {
        return O;
    },
    uZ: function () {
        return b;
    }
});
var i,
    a = r(873546),
    o = r(442837),
    s = r(570140),
    l = r(897473),
    u = r(585483),
    c = r(709054),
    d = r(592125),
    f = r(496675),
    p = r(768119),
    h = r(944486),
    _ = r(914010),
    m = r(594174),
    g = r(981631),
    E = r(176505),
    v = r(231338);
function y(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let b = 'message_requests',
    I = !1,
    T = !1,
    S = !0,
    A = !1,
    C = {},
    N = {};
function R(e) {
    if (null == e) return null;
    if ((0, E.AB)(e)) {
        let n = _.Z.getGuildId();
        return null == n ? null : (0, E.Qk)(e, n);
    }
    return e;
}
function O(e) {
    return [l.tI.VIEW_CHANNEL, l.tI.VIEW_THREAD, l.tI.VIEW_MESSAGE_REQUEST].includes(e.type);
}
function D(e) {
    let n = !1;
    A && ((A = !1), (n = !0));
    let r = R(h.Z.getChannelId());
    return null != r && r in C && (delete C[r], (n = !0)), n && e ? e : !e;
}
function L() {
    T && (T = D(T)), (I = D(I));
}
function x() {
    I && (I = D(I)), (T = D(T));
}
function w() {
    !S && u.S.dispatch(g.CkL.SEARCH_RESULTS_CLOSE), (S = D(S));
}
function P(e) {
    let { sidebarType: n, guildId: r, baseChannelId: i, details: a } = e;
    A = !1;
    let o = R(i);
    return (
        null != o &&
        ((N[r] = {
            type: n,
            baseChannelId: o,
            guildId: r,
            details: a
        }),
        !0)
    );
}
function M(e) {
    let { guildId: n } = e;
    return null != N[n] && (delete N[n], !0);
}
function k(e) {
    let { sidebarType: n, baseChannelId: r, channelId: i, details: a } = e;
    A = !1;
    let o = R(r);
    return (
        null != o &&
        ((C[o] = {
            type: n,
            channelId: i,
            details: a
        }),
        !0)
    );
}
function U(e) {
    let { parentChannelId: n, parentMessageId: r, location: i } = e;
    A = !1;
    let a = R(n);
    null != a &&
        (C[a] = {
            type: l.tI.CREATE_THREAD,
            parentChannelId: n,
            parentMessageId: r,
            location: i
        });
}
function B(e) {
    let { channel: n } = e;
    if (n.id in C) return delete C[n.id], !0;
    let r = !1;
    for (let e in C) {
        let i = C[e];
        null != i && i.type === l.tI.VIEW_CHANNEL && i.channelId === n.id && (delete C[e], (r = !0));
    }
    return r;
}
function G(e) {
    let { channel: n } = e,
        r = C[n.parent_id];
    if (null == r || r.type !== l.tI.VIEW_THREAD || r.channelId !== n.id) return !1;
    delete C[n.parent_id];
}
function Z(e) {
    var n;
    let { channel: r } = e;
    if (r.ownerId === (null === (n = m.default.getCurrentUser()) || void 0 === n ? void 0 : n.id)) return !1;
    let i = C[r.parent_id];
    null != i &&
        i.type === l.tI.CREATE_THREAD &&
        i.parentMessageId === c.default.castChannelIdAsMessageId(r.id) &&
        (C[r.parent_id] = {
            type: l.tI.VIEW_THREAD,
            channelId: r.id
        });
}
function F() {
    let e = !1;
    for (let n in C) {
        let r = C[n];
        if (r.type === l.tI.VIEW_THREAD || r.type === l.tI.VIEW_CHANNEL) {
            let i = d.Z.getChannel(r.channelId);
            (null == i || !f.Z.can(v.Pl.VIEW_CHANNEL, i)) && (delete C[n], (e = !0));
        }
    }
    return e;
}
function V(e) {
    let { baseChannelId: n } = e,
        r = R(n);
    null != r && delete C[r];
}
function j() {
    if (A === p.Z.isActive()) return !1;
    A = p.Z.isActive();
}
function H() {
    a.tq && I && ((I = !1), (T = !1));
}
class Y extends (i = o.ZP.PersistedStore) {
    initialize(e) {
        if (null != e) {
            var n, r, i, a, o;
            (I = null !== (n = e.isMembersOpen) && void 0 !== n && n), (T = null !== (r = e.isSummariesOpen) && void 0 !== r && r), (S = null === (i = e.isProfileOpen) || void 0 === i || i), (C = null !== (a = e.sidebars) && void 0 !== a ? a : {}), (N = null !== (o = e.guildSidebars) && void 0 !== o ? o : {});
        }
        this.syncWith([p.Z], j), this.syncWith([f.Z], F);
    }
    getState() {
        return {
            isMembersOpen: I,
            isSummariesOpen: T,
            isProfileOpen: S,
            sidebars: C,
            guildSidebars: N
        };
    }
    getSection(e, n) {
        if (A) return g.ULH.SEARCH;
        let r = R(e);
        return null != r && null != C[r] ? g.ULH.SIDEBAR_CHAT : n && S ? g.ULH.PROFILE : T ? g.ULH.SUMMARIES : I ? g.ULH.MEMBERS : g.ULH.NONE;
    }
    getSidebarState(e) {
        let n = R(e);
        return null == n ? void 0 : C[n];
    }
    getGuildSidebarState(e) {
        return null == e ? void 0 : N[e];
    }
    getCurrentSidebarChannelId(e) {
        let n = R(e);
        if (null == n || A) return null;
        let r = C[n];
        return null == r ? null : r.type === l.tI.VIEW_THREAD || r.type === l.tI.VIEW_CHANNEL ? r.channelId : null;
    }
    getCurrentSidebarMessageId(e) {
        var n;
        let r = R(e);
        if (null == r || A) return null;
        let i = C[r];
        return null == i ? null : i.type === l.tI.VIEW_THREAD || i.type === l.tI.VIEW_CHANNEL ? (null === (n = i.details) || void 0 === n ? void 0 : n.initialMessageId) : null;
    }
}
y(Y, 'displayName', 'ChannelSectionStore'),
    y(Y, 'persistKey', 'ChannelSectionStore2'),
    (n.ZP = new Y(s.Z, {
        CHANNEL_TOGGLE_MEMBERS_SECTION: L,
        PROFILE_PANEL_TOGGLE_SECTION: w,
        CHANNEL_TOGGLE_SUMMARIES_SECTION: x,
        SIDEBAR_VIEW_CHANNEL: k,
        SIDEBAR_VIEW_GUILD: P,
        SIDEBAR_CREATE_THREAD: U,
        SIDEBAR_CLOSE: V,
        SIDEBAR_CLOSE_GUILD: M,
        CHANNEL_DELETE: B,
        CHANNEL_SELECT: H,
        THREAD_CREATE: Z,
        THREAD_DELETE: G
    }));
