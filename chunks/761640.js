"use strict";
n.d(t, { Ay: () => z, JU: () => O, fe: () => I });
var r = n(607399),
    i = n(311907),
    a = n(73153),
    s = n(49463),
    o = n(517381),
    l = n(940382),
    u = n(203982),
    c = n(661191),
    d = n(734057),
    _ = n(71393),
    f = n(576705),
    p = n(309010),
    h = n(967198),
    m = n(287809),
    g = n(652215),
    E = n(746080),
    A = n(818348);
let I = "message_requests",
    T = !1,
    y = !1,
    S = !0,
    v = {},
    C = {},
    b = !1,
    N = null;
function R(e) {
    if (null == e) return null;
    if ((0, E.jq)(e)) {
        let t = h.A.getGuildId();
        return null == t ? null : (0, E.Gr)(e, t);
    }
    return e;
}
function O(e) {
    return [l.PE.VIEW_CHANNEL, l.PE.VIEW_THREAD, l.PE.VIEW_MESSAGE_REQUEST, l.PE.VIEW_MOD_REPORT].includes(e.type);
}
function D(e) {
    let t = !1;
    b && ((b = !1), (t = !0));
    let n = R(p.A.getChannelId());
    return null != n && n in v && (delete v[n], (t = !0)), t && e ? e : !e;
}
function L() {
    b && u._.dispatch(g.jej.SEARCH_RESULTS_CLOSE), y && (y = D(y)), (T = D(T));
}
function w() {
    T && (T = D(T)), (y = D(y));
}
function x() {
    S || u._.dispatch(g.jej.SEARCH_RESULTS_CLOSE), (S = D(S));
}
function P(e) {
    let { sidebarType: t, guildId: n, baseChannelId: r, details: i } = e;
    b = !1;
    let a = R(r);
    return null != a && ((C[n] = { type: t, baseChannelId: a, guildId: n, details: i }), !0);
}
function M(e) {
    let { guildId: t } = e;
    return null != C[t] && (delete C[t], !0);
}
function k(e) {
    let { sidebarType: t, baseChannelId: n, channelId: r, details: i } = e;
    b = !1;
    let a = R(n);
    if (null == a) return !1;
    let s = { type: t, channelId: r, details: i };
    return t === l.PE.VIEW_MOD_REPORT && (s = { ...s, baseChannelId: n }), (v[a] = s), !0;
}
function U(e) {
    let { parentChannelId: t, parentMessageId: n, location: r } = e;
    b = !1;
    let i = R(t);
    null != i && (v[i] = { type: l.PE.CREATE_THREAD, parentChannelId: t, parentMessageId: n, location: r });
}
function G(e) {
    let { channel: t } = e;
    if (t.id in v) return delete v[t.id], !0;
    let n = !1;
    for (let e in v) {
        let r = v[e];
        null != r && r.type === l.PE.VIEW_CHANNEL && r.channelId === t.id && (delete v[e], (n = !0));
    }
    return n;
}
function V(e) {
    let { channel: t } = e,
        n = v[t.parent_id];
    if (null == n || n.type !== l.PE.VIEW_THREAD || n.channelId !== t.id) return !1;
    delete v[t.parent_id];
}
function F(e) {
    let { channel: t } = e;
    if (t.ownerId === m.default.getCurrentUser()?.id) return !1;
    let n = v[t.parent_id];
    null != n &&
        n.type === l.PE.CREATE_THREAD &&
        n.parentMessageId === c.default.castChannelIdAsMessageId(t.id) &&
        (v[t.parent_id] = { type: l.PE.VIEW_THREAD, channelId: t.id });
}
function B() {
    let e = !1;
    for (let t in v) {
        let n = v[t];
        if (n.type === l.PE.VIEW_THREAD || n.type === l.PE.VIEW_CHANNEL) {
            let r = d.A.getChannel(n.channelId);
            (null != r && f.A.can(A.xB.VIEW_CHANNEL, r)) || (delete v[t], (e = !0));
        }
    }
    return e;
}
function j(e) {
    let { baseChannelId: t } = e,
        n = R(t);
    null != n && delete v[n];
}
function H() {
    let e = null != N && o.A.hasSearchState(N);
    if (e === b) return !1;
    b = e;
}
function Y() {
    r.Fr && T && ((T = !1), (y = !1));
}
function W(e) {
    return (N = e.searchContextId), H();
}
class K extends i.Ay.PersistedStore {
    static displayName = "ChannelSectionStore";
    static persistKey = "ChannelSectionStore2";
    initialize(e) {
        null != e &&
            ((T = e.isMembersOpen ?? !1),
            (y = e.isSummariesOpen ?? !1),
            (S = e.isProfileOpen ?? !0),
            (v = e.sidebars ?? {}),
            (C = e.guildSidebars ?? {})),
            this.syncWith([o.A], H),
            this.syncWith([f.A], B),
            this.waitFor(d.A, s.A, _.A, f.A, o.A, p.A, h.A, m.default);
    }
    getState() {
        return { isMembersOpen: T, isSummariesOpen: y, isProfileOpen: S, sidebars: v, guildSidebars: C };
    }
    getSection(e, t) {
        if (b) return g.YvQ.SEARCH;
        let n = R(e);
        return null != n && null != v[n]
            ? g.YvQ.SIDEBAR_CHAT
            : t && S
              ? g.YvQ.PROFILE
              : y
                ? g.YvQ.SUMMARIES
                : T
                  ? g.YvQ.MEMBERS
                  : g.YvQ.NONE;
    }
    getSidebarState(e) {
        let t = R(e);
        return null == t ? void 0 : v[t];
    }
    getGuildSidebarState(e) {
        return null == e ? void 0 : C[e];
    }
    getCurrentSidebarChannelId(e) {
        let t = R(e);
        if (null == t || b) return null;
        let n = v[t];
        return null == n
            ? null
            : n.type === l.PE.VIEW_THREAD || n.type === l.PE.VIEW_CHANNEL || n.type === l.PE.VIEW_MOD_REPORT
              ? n.channelId
              : null;
    }
    getCurrentSidebarMessageId(e) {
        let t = R(e);
        if (null == t || b) return null;
        let n = v[t];
        return null == n
            ? null
            : n.type === l.PE.VIEW_THREAD || n.type === l.PE.VIEW_CHANNEL || n.type === l.PE.VIEW_MOD_REPORT
              ? n.details?.initialMessageId
              : null;
    }
    getCurrentSearchContextId() {
        return N;
    }
}
let z = new K(a.h, {
    SIDEBAR_SET_SELECTED_SEARCH_CONTEXT: W,
    CHANNEL_TOGGLE_MEMBERS_SECTION: L,
    USER_PROFILE_SIDEBAR_TOGGLE_SECTION: x,
    CHANNEL_TOGGLE_SUMMARIES_SECTION: w,
    SIDEBAR_VIEW_CHANNEL: k,
    SIDEBAR_VIEW_GUILD: P,
    SIDEBAR_CREATE_THREAD: U,
    SIDEBAR_CLOSE: j,
    SIDEBAR_CLOSE_GUILD: M,
    CHANNEL_DELETE: G,
    CHANNEL_SELECT: Y,
    THREAD_CREATE: F,
    THREAD_DELETE: V,
});
