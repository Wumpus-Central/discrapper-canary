r.d(n, {
    D5: function () {
        return O;
    },
    uZ: function () {
        return T;
    }
});
var i,
    a = r(873546),
    s = r(442837),
    o = r(570140),
    l = r(897473),
    u = r(585483),
    c = r(709054),
    d = r(592125),
    f = r(496675),
    _ = r(768119),
    h = r(944486),
    p = r(914010),
    m = r(594174),
    g = r(981631),
    E = r(176505),
    v = r(231338);
function I(e, n, r) {
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
let T = 'message_requests',
    b = !1,
    y = !1,
    S = !0,
    A = !1,
    N = {},
    C = {};
function R(e) {
    if (null == e) return null;
    if ((0, E.AB)(e)) {
        let n = p.Z.getGuildId();
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
    return null != r && r in N && (delete N[r], (n = !0)), n && e ? e : !e;
}
function L() {
    y && (y = D(y)), (b = D(b));
}
function x() {
    b && (b = D(b)), (y = D(y));
}
function w() {
    !S && u.S.dispatch(g.CkL.SEARCH_RESULTS_CLOSE), (S = D(S));
}
function P(e) {
    let { sidebarType: n, guildId: r, baseChannelId: i, details: a } = e;
    A = !1;
    let s = R(i);
    return (
        null != s &&
        ((C[r] = {
            type: n,
            baseChannelId: s,
            guildId: r,
            details: a
        }),
        !0)
    );
}
function M(e) {
    let { guildId: n } = e;
    return null != C[n] && (delete C[n], !0);
}
function k(e) {
    let { sidebarType: n, baseChannelId: r, channelId: i, details: a } = e;
    A = !1;
    let s = R(r);
    return (
        null != s &&
        ((N[s] = {
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
        (N[a] = {
            type: l.tI.CREATE_THREAD,
            parentChannelId: n,
            parentMessageId: r,
            location: i
        });
}
function B(e) {
    let { channel: n } = e;
    if (n.id in N) return delete N[n.id], !0;
    let r = !1;
    for (let e in N) {
        let i = N[e];
        null != i && i.type === l.tI.VIEW_CHANNEL && i.channelId === n.id && (delete N[e], (r = !0));
    }
    return r;
}
function G(e) {
    let { channel: n } = e,
        r = N[n.parent_id];
    if (null == r || r.type !== l.tI.VIEW_THREAD || r.channelId !== n.id) return !1;
    delete N[n.parent_id];
}
function Z(e) {
    var n;
    let { channel: r } = e;
    if (r.ownerId === (null === (n = m.default.getCurrentUser()) || void 0 === n ? void 0 : n.id)) return !1;
    let i = N[r.parent_id];
    null != i &&
        i.type === l.tI.CREATE_THREAD &&
        i.parentMessageId === c.default.castChannelIdAsMessageId(r.id) &&
        (N[r.parent_id] = {
            type: l.tI.VIEW_THREAD,
            channelId: r.id
        });
}
function F() {
    let e = !1;
    for (let n in N) {
        let r = N[n];
        if (r.type === l.tI.VIEW_THREAD || r.type === l.tI.VIEW_CHANNEL) {
            let i = d.Z.getChannel(r.channelId);
            (null == i || !f.Z.can(v.Pl.VIEW_CHANNEL, i)) && (delete N[n], (e = !0));
        }
    }
    return e;
}
function V(e) {
    let { baseChannelId: n } = e,
        r = R(n);
    null != r && delete N[r];
}
function j() {
    if (A === _.Z.isActive()) return !1;
    A = _.Z.isActive();
}
function H() {
    a.tq && b && ((b = !1), (y = !1));
}
class Y extends (i = s.ZP.PersistedStore) {
    initialize(e) {
        if (null != e) {
            var n, r, i, a, s;
            (b = null !== (n = e.isMembersOpen) && void 0 !== n && n), (y = null !== (r = e.isSummariesOpen) && void 0 !== r && r), (S = null === (i = e.isProfileOpen) || void 0 === i || i), (N = null !== (a = e.sidebars) && void 0 !== a ? a : {}), (C = null !== (s = e.guildSidebars) && void 0 !== s ? s : {});
        }
        this.syncWith([_.Z], j), this.syncWith([f.Z], F);
    }
    getState() {
        return {
            isMembersOpen: b,
            isSummariesOpen: y,
            isProfileOpen: S,
            sidebars: N,
            guildSidebars: C
        };
    }
    getSection(e, n) {
        if (A) return g.ULH.SEARCH;
        let r = R(e);
        return null != r && null != N[r] ? g.ULH.SIDEBAR_CHAT : n && S ? g.ULH.PROFILE : y ? g.ULH.SUMMARIES : b ? g.ULH.MEMBERS : g.ULH.NONE;
    }
    getSidebarState(e) {
        let n = R(e);
        return null == n ? void 0 : N[n];
    }
    getGuildSidebarState(e) {
        return null == e ? void 0 : C[e];
    }
    getCurrentSidebarChannelId(e) {
        let n = R(e);
        if (null == n || A) return null;
        let r = N[n];
        return null == r ? null : r.type === l.tI.VIEW_THREAD || r.type === l.tI.VIEW_CHANNEL ? r.channelId : null;
    }
    getCurrentSidebarMessageId(e) {
        var n;
        let r = R(e);
        if (null == r || A) return null;
        let i = N[r];
        return null == i ? null : i.type === l.tI.VIEW_THREAD || i.type === l.tI.VIEW_CHANNEL ? (null === (n = i.details) || void 0 === n ? void 0 : n.initialMessageId) : null;
    }
}
I(Y, 'displayName', 'ChannelSectionStore'),
    I(Y, 'persistKey', 'ChannelSectionStore2'),
    (n.ZP = new Y(o.Z, {
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
