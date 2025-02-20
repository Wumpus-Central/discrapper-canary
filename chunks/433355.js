n.d(t, {
    D5: () => C,
    ZP: () => W,
    uZ: () => b
});
var r,
    i = n(873546),
    o = n(442837),
    a = n(570140),
    s = n(897473),
    l = n(585483),
    c = n(709054),
    u = n(592125),
    d = n(496675),
    f = n(768119),
    p = n(944486),
    _ = n(914010),
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
let b = 'message_requests',
    y = !1,
    O = !1,
    S = !0,
    I = !1,
    T = {},
    N = {};
function A(e) {
    if (null == e) return null;
    if ((0, g.AB)(e)) {
        let t = _.Z.getGuildId();
        return null == t ? null : (0, g.Qk)(e, t);
    }
    return e;
}
function C(e) {
    return [s.tI.VIEW_CHANNEL, s.tI.VIEW_THREAD, s.tI.VIEW_MESSAGE_REQUEST].includes(e.type);
}
function R(e) {
    let t = !1;
    I && ((I = !1), (t = !0));
    let n = A(p.Z.getChannelId());
    return null != n && n in T && (delete T[n], (t = !0)), t && e ? e : !e;
}
function P() {
    O && (O = R(O)), (y = R(y));
}
function w() {
    y && (y = R(y)), (O = R(O));
}
function D() {
    S || l.S.dispatch(m.CkL.SEARCH_RESULTS_CLOSE), (S = R(S));
}
function x(e) {
    let { sidebarType: t, guildId: n, baseChannelId: r, details: i } = e;
    I = !1;
    let o = A(r);
    return (
        null != o &&
        ((N[n] = {
            type: t,
            baseChannelId: o,
            guildId: n,
            details: i
        }),
        !0)
    );
}
function L(e) {
    let { guildId: t } = e;
    return null != N[t] && (delete N[t], !0);
}
function M(e) {
    let { sidebarType: t, baseChannelId: n, channelId: r, details: i } = e;
    I = !1;
    let o = A(n);
    return (
        null != o &&
        ((T[o] = {
            type: t,
            channelId: r,
            details: i
        }),
        !0)
    );
}
function k(e) {
    let { parentChannelId: t, parentMessageId: n, location: r } = e;
    I = !1;
    let i = A(t);
    null != i &&
        (T[i] = {
            type: s.tI.CREATE_THREAD,
            parentChannelId: t,
            parentMessageId: n,
            location: r
        });
}
function j(e) {
    let { channel: t } = e;
    if (t.id in T) return delete T[t.id], !0;
    let n = !1;
    for (let e in T) {
        let r = T[e];
        null != r && r.type === s.tI.VIEW_CHANNEL && r.channelId === t.id && (delete T[e], (n = !0));
    }
    return n;
}
function U(e) {
    let { channel: t } = e,
        n = T[t.parent_id];
    if (null == n || n.type !== s.tI.VIEW_THREAD || n.channelId !== t.id) return !1;
    delete T[t.parent_id];
}
function G(e) {
    var t;
    let { channel: n } = e;
    if (n.ownerId === (null === (t = h.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return !1;
    let r = T[n.parent_id];
    null != r &&
        r.type === s.tI.CREATE_THREAD &&
        r.parentMessageId === c.default.castChannelIdAsMessageId(n.id) &&
        (T[n.parent_id] = {
            type: s.tI.VIEW_THREAD,
            channelId: n.id
        });
}
function B() {
    let e = !1;
    for (let t in T) {
        let n = T[t];
        if (n.type === s.tI.VIEW_THREAD || n.type === s.tI.VIEW_CHANNEL) {
            let r = u.Z.getChannel(n.channelId);
            (null != r && d.Z.can(E.Pl.VIEW_CHANNEL, r)) || (delete T[t], (e = !0));
        }
    }
    return e;
}
function Z(e) {
    let { baseChannelId: t } = e,
        n = A(t);
    null != n && delete T[n];
}
function F() {
    if (I === f.Z.isActive()) return !1;
    I = f.Z.isActive();
}
function V() {
    i.tq && y && ((y = !1), (O = !1));
}
class H extends (r = o.ZP.PersistedStore) {
    initialize(e) {
        if (null != e) {
            var t, n, r, i, o;
            (y = null !== (t = e.isMembersOpen) && void 0 !== t && t), (O = null !== (n = e.isSummariesOpen) && void 0 !== n && n), (S = null === (r = e.isProfileOpen) || void 0 === r || r), (T = null !== (i = e.sidebars) && void 0 !== i ? i : {}), (N = null !== (o = e.guildSidebars) && void 0 !== o ? o : {});
        }
        this.syncWith([f.Z], F), this.syncWith([d.Z], B);
    }
    getState() {
        return {
            isMembersOpen: y,
            isSummariesOpen: O,
            isProfileOpen: S,
            sidebars: T,
            guildSidebars: N
        };
    }
    getSection(e, t) {
        if (I) return m.ULH.SEARCH;
        let n = A(e);
        return null != n && null != T[n] ? m.ULH.SIDEBAR_CHAT : t && S ? m.ULH.PROFILE : O ? m.ULH.SUMMARIES : y ? m.ULH.MEMBERS : m.ULH.NONE;
    }
    getSidebarState(e) {
        let t = A(e);
        return null == t ? void 0 : T[t];
    }
    getGuildSidebarState(e) {
        return null == e ? void 0 : N[e];
    }
    getCurrentSidebarChannelId(e) {
        let t = A(e);
        if (null == t || I) return null;
        let n = T[t];
        return null == n ? null : n.type === s.tI.VIEW_THREAD || n.type === s.tI.VIEW_CHANNEL ? n.channelId : null;
    }
    getCurrentSidebarMessageId(e) {
        var t;
        let n = A(e);
        if (null == n || I) return null;
        let r = T[n];
        return null == r ? null : r.type === s.tI.VIEW_THREAD || r.type === s.tI.VIEW_CHANNEL ? (null === (t = r.details) || void 0 === t ? void 0 : t.initialMessageId) : null;
    }
}
v(H, 'displayName', 'ChannelSectionStore'), v(H, 'persistKey', 'ChannelSectionStore2');
let W = new H(a.Z, {
    CHANNEL_TOGGLE_MEMBERS_SECTION: P,
    PROFILE_PANEL_TOGGLE_SECTION: D,
    CHANNEL_TOGGLE_SUMMARIES_SECTION: w,
    SIDEBAR_VIEW_CHANNEL: M,
    SIDEBAR_VIEW_GUILD: x,
    SIDEBAR_CREATE_THREAD: k,
    SIDEBAR_CLOSE: Z,
    SIDEBAR_CLOSE_GUILD: L,
    CHANNEL_DELETE: j,
    CHANNEL_SELECT: V,
    THREAD_CREATE: G,
    THREAD_DELETE: U
});
