"use strict";
n.d(t, { Ay: () => x, JU: () => D, fe: () => I });
var i = n(607399),
    r = n(17928),
    s = n(228366),
    a = n(736056),
    o = n(517381),
    l = n(940382),
    u = n(625494),
    c = n(935208),
    d = n(734057),
    _ = n(71393),
    f = n(576705),
    h = n(309010),
    p = n(967198),
    E = n(287809),
    m = n(652215),
    g = n(746080),
    A = n(818348);
let I = "message_requests",
    T = !1,
    S = !1,
    N = !1,
    y = !0,
    C = {},
    v = {},
    O = !1,
    R = null;
function b(e) {
    if (null == e) return null;
    if ((0, g.jq)(e)) {
        let t = p.A.getGuildId();
        return null == t ? null : (0, g.Gr)(e, t);
    }
    return e;
}
function D(e) {
    return [l.PE.VIEW_CHANNEL, l.PE.VIEW_THREAD, l.PE.VIEW_MESSAGE_REQUEST, l.PE.VIEW_MOD_REPORT].includes(e.type);
}
function L(e) {
    let t = !1;
    O && ((O = !1), (t = !0));
    let n = b(h.A.getChannelId());
    return null != n && n in C && (delete C[n], (t = !0)), t && e ? e : !e;
}
function w() {
    let e = !1;
    for (let t in C) {
        let n = C[t];
        if (n.type === l.PE.VIEW_THREAD || n.type === l.PE.VIEW_CHANNEL) {
            let i = d.A.getChannel(n.channelId);
            (null != i && f.A.can(A.xB.VIEW_CHANNEL, i)) || (delete C[t], (e = !0));
        }
    }
    return e;
}
function M() {
    let e = null != R && o.A.hasSearchState(R);
    if (e === O) return !1;
    O = e;
}
class P extends r.Ay.PersistedStore {
    static displayName = "ChannelSectionStore";
    static persistKey = "ChannelSectionStore2";
    initialize(e) {
        null != e &&
            ((T = e.isMembersOpen ?? !1),
            (S = e.isSummariesOpen ?? !1),
            (y = e.isProfileOpen ?? !0),
            (C = e.sidebars ?? {}),
            (v = e.guildSidebars ?? {})),
            this.syncWith([o.A], M),
            this.syncWith([f.A], w),
            this.waitFor(d.A, a.A, _.A, f.A, o.A, h.A, p.A, E.default);
    }
    getState() {
        return { isMembersOpen: T, isSummariesOpen: S, isProfileOpen: y, sidebars: C, guildSidebars: v };
    }
    getSection(e, t) {
        if (O) return m.YvQ.SEARCH;
        let n = b(e);
        return null != n && null != C[n]
            ? m.YvQ.SIDEBAR_CHAT
            : t && y
              ? m.YvQ.PROFILE
              : S
                ? m.YvQ.SUMMARIES
                : T
                  ? m.YvQ.MEMBERS
                  : N
                    ? m.YvQ.CONVERSATIONS
                    : m.YvQ.NONE;
    }
    getSidebarState(e) {
        let t = b(e);
        return null == t ? void 0 : C[t];
    }
    getGuildSidebarState(e) {
        return null == e ? void 0 : v[e];
    }
    getCurrentSidebarChannelId(e) {
        let t = b(e);
        if (null == t || O) return null;
        let n = C[t];
        return null == n
            ? null
            : n.type === l.PE.VIEW_THREAD || n.type === l.PE.VIEW_CHANNEL || n.type === l.PE.VIEW_MOD_REPORT
              ? n.channelId
              : null;
    }
    getCurrentSidebarMessageId(e) {
        let t = b(e);
        if (null == t || O) return null;
        let n = C[t];
        return null == n
            ? null
            : n.type === l.PE.VIEW_THREAD || n.type === l.PE.VIEW_CHANNEL || n.type === l.PE.VIEW_MOD_REPORT
              ? n.details?.initialMessageId
              : null;
    }
    getCurrentSearchContextId() {
        return R;
    }
}
let x = new P(s.h, {
    SIDEBAR_SET_SELECTED_SEARCH_CONTEXT: function (e) {
        return (R = e.searchContextId), M();
    },
    CHANNEL_TOGGLE_MEMBERS_SECTION: function () {
        O && u._.dispatch(m.jej.SEARCH_RESULTS_CLOSE), S && (S = L(S)), N && (N = L(N)), (T = L(T));
    },
    USER_PROFILE_SIDEBAR_TOGGLE_SECTION: function () {
        y || u._.dispatch(m.jej.SEARCH_RESULTS_CLOSE), (y = L(y));
    },
    CHANNEL_TOGGLE_SUMMARIES_SECTION: function () {
        T && (T = L(T)), N && (N = L(N)), (S = L(S));
    },
    CHANNEL_TOGGLE_CONVERSATIONS_SECTION: function () {
        O && u._.dispatch(m.jej.SEARCH_RESULTS_CLOSE), (T = !1), (S = !1), (N = L(N));
    },
    CHANNEL_OPEN_CONVERSATIONS_SECTION: function () {
        return !N && (O && u._.dispatch(m.jej.SEARCH_RESULTS_CLOSE), (T = !1), (S = !1), (N = !0), !0);
    },
    SIDEBAR_VIEW_CHANNEL: function (e) {
        let { sidebarType: t, baseChannelId: n, channelId: i, details: r } = e;
        O = !1;
        let s = b(n);
        if (null == s) return !1;
        let a = { type: t, channelId: i, details: r };
        return t === l.PE.VIEW_MOD_REPORT && (a = { ...a, baseChannelId: n }), (C[s] = a), !0;
    },
    SIDEBAR_VIEW_GUILD: function (e) {
        let { sidebarType: t, guildId: n, baseChannelId: i, details: r } = e;
        O = !1;
        let s = b(i);
        return null != s && ((v[n] = { type: t, baseChannelId: s, guildId: n, details: r }), !0);
    },
    SIDEBAR_CREATE_THREAD: function (e) {
        let { parentChannelId: t, parentMessageId: n, location: i } = e;
        O = !1;
        let r = b(t);
        null != r && (C[r] = { type: l.PE.CREATE_THREAD, parentChannelId: t, parentMessageId: n, location: i });
    },
    SIDEBAR_CLOSE: function (e) {
        let { baseChannelId: t } = e,
            n = b(t);
        null != n && delete C[n];
    },
    SIDEBAR_CLOSE_GUILD: function (e) {
        let { guildId: t } = e;
        return null != v[t] && (delete v[t], !0);
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        if (t.id in C) return delete C[t.id], !0;
        let n = !1;
        for (let e in C) {
            let i = C[e];
            null != i && i.type === l.PE.VIEW_CHANNEL && i.channelId === t.id && (delete C[e], (n = !0));
        }
        return n;
    },
    CHANNEL_SELECT: function () {
        i.Fr && T && ((T = !1), (S = !1), (N = !1));
    },
    THREAD_CREATE: function (e) {
        let { channel: t } = e;
        if (t.ownerId === E.default.getCurrentUser()?.id) return !1;
        let n = C[t.parent_id];
        null != n &&
            n.type === l.PE.CREATE_THREAD &&
            n.parentMessageId === c.default.castChannelIdAsMessageId(t.id) &&
            (C[t.parent_id] = { type: l.PE.VIEW_THREAD, channelId: t.id });
    },
    THREAD_DELETE: function (e) {
        let { channel: t } = e,
            n = C[t.parent_id];
        if (null == n || n.type !== l.PE.VIEW_THREAD || n.channelId !== t.id) return !1;
        delete C[t.parent_id];
    },
});
