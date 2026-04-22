"use strict";
n.d(t, { Ay: () => U, JU: () => D, fe: () => I });
var r = n(607399),
    i = n(311907),
    s = n(73153),
    a = n(49463),
    o = n(517381),
    l = n(940382),
    u = n(203982),
    d = n(661191),
    c = n(734057),
    _ = n(71393),
    f = n(576705),
    E = n(309010),
    h = n(967198),
    p = n(287809),
    m = n(652215),
    g = n(746080),
    A = n(818348);
let I = "message_requests",
    T = !1,
    S = !1,
    y = !1,
    N = !0,
    O = {},
    R = {},
    v = !1,
    C = null;
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
    v && ((v = !1), (t = !0));
    let n = b(E.A.getChannelId());
    return null != n && n in O && (delete O[n], (t = !0)), t && e ? e : !e;
}
function w() {
    let e = !1;
    for (let t in O) {
        let n = O[t];
        if (n.type === l.PE.VIEW_THREAD || n.type === l.PE.VIEW_CHANNEL) {
            let r = c.A.getChannel(n.channelId);
            (null != r && f.A.can(A.xB.VIEW_CHANNEL, r)) || (delete O[t], (e = !0));
        }
    }
    return e;
}
function M() {
    let e = null != C && o.A.hasSearchState(C);
    if (e === v) return !1;
    v = e;
}
class P extends i.Ay.PersistedStore {
    static displayName = "ChannelSectionStore";
    static persistKey = "ChannelSectionStore2";
    initialize(e) {
        null != e &&
            ((T = e.isMembersOpen ?? !1),
            (S = e.isSummariesOpen ?? !1),
            (N = e.isProfileOpen ?? !0),
            (O = e.sidebars ?? {}),
            (R = e.guildSidebars ?? {})),
            this.syncWith([o.A], M),
            this.syncWith([f.A], w),
            this.waitFor(c.A, a.A, _.A, f.A, o.A, E.A, h.A, p.default);
    }
    getState() {
        return { isMembersOpen: T, isSummariesOpen: S, isProfileOpen: N, sidebars: O, guildSidebars: R };
    }
    getSection(e, t) {
        if (v) return m.YvQ.SEARCH;
        let n = b(e);
        return null != n && null != O[n]
            ? m.YvQ.SIDEBAR_CHAT
            : t && N
              ? m.YvQ.PROFILE
              : S
                ? m.YvQ.SUMMARIES
                : T
                  ? m.YvQ.MEMBERS
                  : y
                    ? m.YvQ.CONVERSATIONS
                    : m.YvQ.NONE;
    }
    getSidebarState(e) {
        let t = b(e);
        return null == t ? void 0 : O[t];
    }
    getGuildSidebarState(e) {
        return null == e ? void 0 : R[e];
    }
    getCurrentSidebarChannelId(e) {
        let t = b(e);
        if (null == t || v) return null;
        let n = O[t];
        return null == n
            ? null
            : n.type === l.PE.VIEW_THREAD || n.type === l.PE.VIEW_CHANNEL || n.type === l.PE.VIEW_MOD_REPORT
              ? n.channelId
              : null;
    }
    getCurrentSidebarMessageId(e) {
        let t = b(e);
        if (null == t || v) return null;
        let n = O[t];
        return null == n
            ? null
            : n.type === l.PE.VIEW_THREAD || n.type === l.PE.VIEW_CHANNEL || n.type === l.PE.VIEW_MOD_REPORT
              ? n.details?.initialMessageId
              : null;
    }
    getCurrentSearchContextId() {
        return C;
    }
}
let U = new P(s.h, {
    SIDEBAR_SET_SELECTED_SEARCH_CONTEXT: function (e) {
        return (C = e.searchContextId), M();
    },
    CHANNEL_TOGGLE_MEMBERS_SECTION: function () {
        v && u._.dispatch(m.jej.SEARCH_RESULTS_CLOSE), S && (S = L(S)), y && (y = L(y)), (T = L(T));
    },
    USER_PROFILE_SIDEBAR_TOGGLE_SECTION: function () {
        N || u._.dispatch(m.jej.SEARCH_RESULTS_CLOSE), (N = L(N));
    },
    CHANNEL_TOGGLE_SUMMARIES_SECTION: function () {
        T && (T = L(T)), y && (y = L(y)), (S = L(S));
    },
    CHANNEL_TOGGLE_CONVERSATIONS_SECTION: function () {
        v && u._.dispatch(m.jej.SEARCH_RESULTS_CLOSE), (T = !1), (S = !1), (y = L(y));
    },
    CHANNEL_OPEN_CONVERSATIONS_SECTION: function () {
        return !y && (v && u._.dispatch(m.jej.SEARCH_RESULTS_CLOSE), (T = !1), (S = !1), (y = !0), !0);
    },
    SIDEBAR_VIEW_CHANNEL: function (e) {
        let { sidebarType: t, baseChannelId: n, channelId: r, details: i } = e;
        v = !1;
        let s = b(n);
        if (null == s) return !1;
        let a = { type: t, channelId: r, details: i };
        return t === l.PE.VIEW_MOD_REPORT && (a = { ...a, baseChannelId: n }), (O[s] = a), !0;
    },
    SIDEBAR_VIEW_GUILD: function (e) {
        let { sidebarType: t, guildId: n, baseChannelId: r, details: i } = e;
        v = !1;
        let s = b(r);
        return null != s && ((R[n] = { type: t, baseChannelId: s, guildId: n, details: i }), !0);
    },
    SIDEBAR_CREATE_THREAD: function (e) {
        let { parentChannelId: t, parentMessageId: n, location: r } = e;
        v = !1;
        let i = b(t);
        null != i && (O[i] = { type: l.PE.CREATE_THREAD, parentChannelId: t, parentMessageId: n, location: r });
    },
    SIDEBAR_CLOSE: function (e) {
        let { baseChannelId: t } = e,
            n = b(t);
        null != n && delete O[n];
    },
    SIDEBAR_CLOSE_GUILD: function (e) {
        let { guildId: t } = e;
        return null != R[t] && (delete R[t], !0);
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        if (t.id in O) return delete O[t.id], !0;
        let n = !1;
        for (let e in O) {
            let r = O[e];
            null != r && r.type === l.PE.VIEW_CHANNEL && r.channelId === t.id && (delete O[e], (n = !0));
        }
        return n;
    },
    CHANNEL_SELECT: function () {
        r.Fr && T && ((T = !1), (S = !1), (y = !1));
    },
    THREAD_CREATE: function (e) {
        let { channel: t } = e;
        if (t.ownerId === p.default.getCurrentUser()?.id) return !1;
        let n = O[t.parent_id];
        null != n &&
            n.type === l.PE.CREATE_THREAD &&
            n.parentMessageId === d.default.castChannelIdAsMessageId(t.id) &&
            (O[t.parent_id] = { type: l.PE.VIEW_THREAD, channelId: t.id });
    },
    THREAD_DELETE: function (e) {
        let { channel: t } = e,
            n = O[t.parent_id];
        if (null == n || n.type !== l.PE.VIEW_THREAD || n.channelId !== t.id) return !1;
        delete O[t.parent_id];
    },
});
