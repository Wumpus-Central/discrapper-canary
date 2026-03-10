"use strict";
n.d(t, { Ay: () => q, JU: () => D, fe: () => I });
var r = n(607399),
    i = n(311907),
    s = n(73153),
    a = n(49463),
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
    E = n(652215),
    g = n(746080),
    A = n(818348);
let I = "message_requests",
    T = !1,
    S = !1,
    y = !1,
    v = !0,
    N = {},
    C = {},
    R = !1,
    O = null;
function b(e) {
    if (null == e) return null;
    if ((0, g.jq)(e)) {
        let t = h.A.getGuildId();
        return null == t ? null : (0, g.Gr)(e, t);
    }
    return e;
}
function D(e) {
    return [l.PE.VIEW_CHANNEL, l.PE.VIEW_THREAD, l.PE.VIEW_MESSAGE_REQUEST, l.PE.VIEW_MOD_REPORT].includes(e.type);
}
function L(e) {
    let t = !1;
    R && ((R = !1), (t = !0));
    let n = b(p.A.getChannelId());
    return null != n && n in N && (delete N[n], (t = !0)), t && e ? e : !e;
}
function w() {
    R && u._.dispatch(E.jej.SEARCH_RESULTS_CLOSE), S && (S = L(S)), y && (y = L(y)), (T = L(T));
}
function M() {
    T && (T = L(T)), y && (y = L(y)), (S = L(S));
}
function x() {
    R && u._.dispatch(E.jej.SEARCH_RESULTS_CLOSE), (T = !1), (S = !1), (y = L(y));
}
function P() {
    v || u._.dispatch(E.jej.SEARCH_RESULTS_CLOSE), (v = L(v));
}
function k(e) {
    let { sidebarType: t, guildId: n, baseChannelId: r, details: i } = e;
    R = !1;
    let s = b(r);
    return null != s && ((C[n] = { type: t, baseChannelId: s, guildId: n, details: i }), !0);
}
function U(e) {
    let { guildId: t } = e;
    return null != C[t] && (delete C[t], !0);
}
function G(e) {
    let { sidebarType: t, baseChannelId: n, channelId: r, details: i } = e;
    R = !1;
    let s = b(n);
    if (null == s) return !1;
    let a = { type: t, channelId: r, details: i };
    return t === l.PE.VIEW_MOD_REPORT && (a = { ...a, baseChannelId: n }), (N[s] = a), !0;
}
function F(e) {
    let { parentChannelId: t, parentMessageId: n, location: r } = e;
    R = !1;
    let i = b(t);
    null != i && (N[i] = { type: l.PE.CREATE_THREAD, parentChannelId: t, parentMessageId: n, location: r });
}
function V(e) {
    let { channel: t } = e;
    if (t.id in N) return delete N[t.id], !0;
    let n = !1;
    for (let e in N) {
        let r = N[e];
        null != r && r.type === l.PE.VIEW_CHANNEL && r.channelId === t.id && (delete N[e], (n = !0));
    }
    return n;
}
function B(e) {
    let { channel: t } = e,
        n = N[t.parent_id];
    if (null == n || n.type !== l.PE.VIEW_THREAD || n.channelId !== t.id) return !1;
    delete N[t.parent_id];
}
function H(e) {
    let { channel: t } = e;
    if (t.ownerId === m.default.getCurrentUser()?.id) return !1;
    let n = N[t.parent_id];
    null != n &&
        n.type === l.PE.CREATE_THREAD &&
        n.parentMessageId === c.default.castChannelIdAsMessageId(t.id) &&
        (N[t.parent_id] = { type: l.PE.VIEW_THREAD, channelId: t.id });
}
function j() {
    let e = !1;
    for (let t in N) {
        let n = N[t];
        if (n.type === l.PE.VIEW_THREAD || n.type === l.PE.VIEW_CHANNEL) {
            let r = d.A.getChannel(n.channelId);
            (null != r && f.A.can(A.xB.VIEW_CHANNEL, r)) || (delete N[t], (e = !0));
        }
    }
    return e;
}
function Y(e) {
    let { baseChannelId: t } = e,
        n = b(t);
    null != n && delete N[n];
}
function W() {
    let e = null != O && o.A.hasSearchState(O);
    if (e === R) return !1;
    R = e;
}
function K() {
    r.Fr && T && ((T = !1), (S = !1), (y = !1));
}
function $(e) {
    return (O = e.searchContextId), W();
}
class z extends i.Ay.PersistedStore {
    static displayName = "ChannelSectionStore";
    static persistKey = "ChannelSectionStore2";
    initialize(e) {
        null != e &&
            ((T = e.isMembersOpen ?? !1),
            (S = e.isSummariesOpen ?? !1),
            (v = e.isProfileOpen ?? !0),
            (N = e.sidebars ?? {}),
            (C = e.guildSidebars ?? {})),
            this.syncWith([o.A], W),
            this.syncWith([f.A], j),
            this.waitFor(d.A, a.A, _.A, f.A, o.A, p.A, h.A, m.default);
    }
    getState() {
        return { isMembersOpen: T, isSummariesOpen: S, isProfileOpen: v, sidebars: N, guildSidebars: C };
    }
    getSection(e, t) {
        if (R) return E.YvQ.SEARCH;
        let n = b(e);
        return null != n && null != N[n]
            ? E.YvQ.SIDEBAR_CHAT
            : t && v
              ? E.YvQ.PROFILE
              : S
                ? E.YvQ.SUMMARIES
                : T
                  ? E.YvQ.MEMBERS
                  : y
                    ? E.YvQ.CONVERSATIONS
                    : E.YvQ.NONE;
    }
    getSidebarState(e) {
        let t = b(e);
        return null == t ? void 0 : N[t];
    }
    getGuildSidebarState(e) {
        return null == e ? void 0 : C[e];
    }
    getCurrentSidebarChannelId(e) {
        let t = b(e);
        if (null == t || R) return null;
        let n = N[t];
        return null == n
            ? null
            : n.type === l.PE.VIEW_THREAD || n.type === l.PE.VIEW_CHANNEL || n.type === l.PE.VIEW_MOD_REPORT
              ? n.channelId
              : null;
    }
    getCurrentSidebarMessageId(e) {
        let t = b(e);
        if (null == t || R) return null;
        let n = N[t];
        return null == n
            ? null
            : n.type === l.PE.VIEW_THREAD || n.type === l.PE.VIEW_CHANNEL || n.type === l.PE.VIEW_MOD_REPORT
              ? n.details?.initialMessageId
              : null;
    }
    getCurrentSearchContextId() {
        return O;
    }
}
let q = new z(s.h, {
    SIDEBAR_SET_SELECTED_SEARCH_CONTEXT: $,
    CHANNEL_TOGGLE_MEMBERS_SECTION: w,
    USER_PROFILE_SIDEBAR_TOGGLE_SECTION: P,
    CHANNEL_TOGGLE_SUMMARIES_SECTION: M,
    CHANNEL_TOGGLE_CONVERSATIONS_SECTION: x,
    SIDEBAR_VIEW_CHANNEL: G,
    SIDEBAR_VIEW_GUILD: k,
    SIDEBAR_CREATE_THREAD: F,
    SIDEBAR_CLOSE: Y,
    SIDEBAR_CLOSE_GUILD: U,
    CHANNEL_DELETE: V,
    CHANNEL_SELECT: K,
    THREAD_CREATE: H,
    THREAD_DELETE: B,
});
