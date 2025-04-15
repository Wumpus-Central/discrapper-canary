n.d(t, {
    D5: () => C,
    ZP: () => W,
    uZ: () => y
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
    _ = n(944486),
    p = n(914010),
    h = n(594174),
    m = n(981631),
    g = n(176505),
    E = n(231338);
function b(e, t, n) {
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
    v = !1,
    O = !1,
    I = !0,
    S = !1,
    T = {},
    N = {};
function A(e) {
    if (null == e) return null;
    if ((0, g.AB)(e)) {
        let t = p.Z.getGuildId();
        return null == t ? null : (0, g.Qk)(e, t);
    }
    return e;
}
function C(e) {
    return [s.tI.VIEW_CHANNEL, s.tI.VIEW_THREAD, s.tI.VIEW_MESSAGE_REQUEST].includes(e.type);
}
function R(e) {
    let t = !1;
    S && ((S = !1), (t = !0));
    let n = A(_.Z.getChannelId());
    return null != n && n in T && (delete T[n], (t = !0)), t && e ? e : !e;
}
function P() {
    O && (O = R(O)), (v = R(v));
}
function w() {
    v && (v = R(v)), (O = R(O));
}
function D() {
    I || l.S.dispatch(m.CkL.SEARCH_RESULTS_CLOSE), (I = R(I));
}
function L(e) {
    let { sidebarType: t, guildId: n, baseChannelId: r, details: i } = e;
    S = !1;
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
function x(e) {
    let { guildId: t } = e;
    return null != N[t] && (delete N[t], !0);
}
function M(e) {
    let { sidebarType: t, baseChannelId: n, channelId: r, details: i } = e;
    S = !1;
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
    S = !1;
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
    if (n.ownerId === (null == (t = h.default.getCurrentUser()) ? void 0 : t.id)) return !1;
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
function F(e) {
    let { baseChannelId: t } = e,
        n = A(t);
    null != n && delete T[n];
}
function V() {
    if (S === f.Z.isActive()) return !1;
    S = f.Z.isActive();
}
function Z() {
    i.tq && v && ((v = !1), (O = !1));
}
class H extends (r = o.ZP.PersistedStore) {
    initialize(e) {
        if (null != e) {
            var t, n, r, i, o;
            (v = null != (t = e.isMembersOpen) && t), (O = null != (n = e.isSummariesOpen) && n), (I = null == (r = e.isProfileOpen) || r), (T = null != (i = e.sidebars) ? i : {}), (N = null != (o = e.guildSidebars) ? o : {});
        }
        this.syncWith([f.Z], V), this.syncWith([d.Z], B);
    }
    getState() {
        return {
            isMembersOpen: v,
            isSummariesOpen: O,
            isProfileOpen: I,
            sidebars: T,
            guildSidebars: N
        };
    }
    getSection(e, t) {
        if (S) return m.ULH.SEARCH;
        let n = A(e);
        return null != n && null != T[n] ? m.ULH.SIDEBAR_CHAT : t && I ? m.ULH.PROFILE : O ? m.ULH.SUMMARIES : v ? m.ULH.MEMBERS : m.ULH.NONE;
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
        if (null == t || S) return null;
        let n = T[t];
        return null == n ? null : n.type === s.tI.VIEW_THREAD || n.type === s.tI.VIEW_CHANNEL ? n.channelId : null;
    }
    getCurrentSidebarMessageId(e) {
        var t;
        let n = A(e);
        if (null == n || S) return null;
        let r = T[n];
        return null == r ? null : r.type === s.tI.VIEW_THREAD || r.type === s.tI.VIEW_CHANNEL ? (null == (t = r.details) ? void 0 : t.initialMessageId) : null;
    }
}
b(H, 'displayName', 'ChannelSectionStore'), b(H, 'persistKey', 'ChannelSectionStore2');
let W = new H(a.Z, {
    CHANNEL_TOGGLE_MEMBERS_SECTION: P,
    PROFILE_PANEL_TOGGLE_SECTION: D,
    CHANNEL_TOGGLE_SUMMARIES_SECTION: w,
    SIDEBAR_VIEW_CHANNEL: M,
    SIDEBAR_VIEW_GUILD: L,
    SIDEBAR_CREATE_THREAD: k,
    SIDEBAR_CLOSE: F,
    SIDEBAR_CLOSE_GUILD: x,
    CHANNEL_DELETE: j,
    CHANNEL_SELECT: Z,
    THREAD_CREATE: G,
    THREAD_DELETE: U
});
