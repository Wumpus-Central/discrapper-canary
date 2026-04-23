n.d(t, { Ay: () => v, JU: () => U, fe: () => R });
var i = n(607399),
    r = n(17928),
    a = n(228366),
    s = n(736056),
    _ = n(517381),
    l = n(940382),
    o = n(625494),
    E = n(935208),
    d = n(734057),
    c = n(71393),
    u = n(576705),
    I = n(309010),
    A = n(967198),
    T = n(287809),
    S = n(652215),
    N = n(746080),
    O = n(818348);
let R = "message_requests",
    f = !1,
    C = !1,
    p = !1,
    m = !0,
    L = {},
    D = {},
    h = !1,
    g = null;
function b(e) {
    if (null == e) return null;
    if ((0, N.jq)(e)) {
        let t = A.A.getGuildId();
        return null == t ? null : (0, N.Gr)(e, t);
    }
    return e;
}
function U(e) {
    return [l.PE.VIEW_CHANNEL, l.PE.VIEW_THREAD, l.PE.VIEW_MESSAGE_REQUEST, l.PE.VIEW_MOD_REPORT].includes(e.type);
}
function P(e) {
    let t = !1;
    h && ((h = !1), (t = !0));
    let n = b(I.A.getChannelId());
    return null != n && n in L && (delete L[n], (t = !0)), t && e ? e : !e;
}
function M() {
    let e = !1;
    for (let t in L) {
        let n = L[t];
        if (n.type === l.PE.VIEW_THREAD || n.type === l.PE.VIEW_CHANNEL) {
            let i = d.A.getChannel(n.channelId);
            (null != i && u.A.can(O.xB.VIEW_CHANNEL, i)) || (delete L[t], (e = !0));
        }
    }
    return e;
}
function y() {
    let e = null != g && _.A.hasSearchState(g);
    if (e === h) return !1;
    h = e;
}
class G extends r.Ay.PersistedStore {
    static displayName = "ChannelSectionStore";
    static persistKey = "ChannelSectionStore2";
    initialize(e) {
        null != e &&
            ((f = e.isMembersOpen ?? !1),
            (C = e.isSummariesOpen ?? !1),
            (m = e.isProfileOpen ?? !0),
            (L = e.sidebars ?? {}),
            (D = e.guildSidebars ?? {})),
            this.syncWith([_.A], y),
            this.syncWith([u.A], M),
            this.waitFor(d.A, s.A, c.A, u.A, _.A, I.A, A.A, T.default);
    }
    getState() {
        return { isMembersOpen: f, isSummariesOpen: C, isProfileOpen: m, sidebars: L, guildSidebars: D };
    }
    getSection(e, t) {
        if (h) return S.YvQ.SEARCH;
        let n = b(e);
        return null != n && null != L[n]
            ? S.YvQ.SIDEBAR_CHAT
            : t && m
              ? S.YvQ.PROFILE
              : C
                ? S.YvQ.SUMMARIES
                : f
                  ? S.YvQ.MEMBERS
                  : p
                    ? S.YvQ.CONVERSATIONS
                    : S.YvQ.NONE;
    }
    getSidebarState(e) {
        let t = b(e);
        return null == t ? void 0 : L[t];
    }
    getGuildSidebarState(e) {
        return null == e ? void 0 : D[e];
    }
    getCurrentSidebarChannelId(e) {
        let t = b(e);
        if (null == t || h) return null;
        let n = L[t];
        return null == n
            ? null
            : n.type === l.PE.VIEW_THREAD || n.type === l.PE.VIEW_CHANNEL || n.type === l.PE.VIEW_MOD_REPORT
              ? n.channelId
              : null;
    }
    getCurrentSidebarMessageId(e) {
        let t = b(e);
        if (null == t || h) return null;
        let n = L[t];
        return null == n
            ? null
            : n.type === l.PE.VIEW_THREAD || n.type === l.PE.VIEW_CHANNEL || n.type === l.PE.VIEW_MOD_REPORT
              ? n.details?.initialMessageId
              : null;
    }
    getCurrentSearchContextId() {
        return g;
    }
}
let v = new G(a.h, {
    SIDEBAR_SET_SELECTED_SEARCH_CONTEXT: function (e) {
        return (g = e.searchContextId), y();
    },
    CHANNEL_TOGGLE_MEMBERS_SECTION: function () {
        h && o._.dispatch(S.jej.SEARCH_RESULTS_CLOSE), C && (C = P(C)), p && (p = P(p)), (f = P(f));
    },
    USER_PROFILE_SIDEBAR_TOGGLE_SECTION: function () {
        m || o._.dispatch(S.jej.SEARCH_RESULTS_CLOSE), (m = P(m));
    },
    CHANNEL_TOGGLE_SUMMARIES_SECTION: function () {
        f && (f = P(f)), p && (p = P(p)), (C = P(C));
    },
    CHANNEL_TOGGLE_CONVERSATIONS_SECTION: function () {
        h && o._.dispatch(S.jej.SEARCH_RESULTS_CLOSE), (f = !1), (C = !1), (p = P(p));
    },
    CHANNEL_OPEN_CONVERSATIONS_SECTION: function () {
        return !p && (h && o._.dispatch(S.jej.SEARCH_RESULTS_CLOSE), (f = !1), (C = !1), (p = !0), !0);
    },
    SIDEBAR_VIEW_CHANNEL: function (e) {
        let { sidebarType: t, baseChannelId: n, channelId: i, details: r } = e;
        h = !1;
        let a = b(n);
        if (null == a) return !1;
        let s = { type: t, channelId: i, details: r };
        return t === l.PE.VIEW_MOD_REPORT && (s = { ...s, baseChannelId: n }), (L[a] = s), !0;
    },
    SIDEBAR_VIEW_GUILD: function (e) {
        let { sidebarType: t, guildId: n, baseChannelId: i, details: r } = e;
        h = !1;
        let a = b(i);
        return null != a && ((D[n] = { type: t, baseChannelId: a, guildId: n, details: r }), !0);
    },
    SIDEBAR_CREATE_THREAD: function (e) {
        let { parentChannelId: t, parentMessageId: n, location: i } = e;
        h = !1;
        let r = b(t);
        null != r && (L[r] = { type: l.PE.CREATE_THREAD, parentChannelId: t, parentMessageId: n, location: i });
    },
    SIDEBAR_CLOSE: function (e) {
        let { baseChannelId: t } = e,
            n = b(t);
        null != n && delete L[n];
    },
    SIDEBAR_CLOSE_GUILD: function (e) {
        let { guildId: t } = e;
        return null != D[t] && (delete D[t], !0);
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        if (t.id in L) return delete L[t.id], !0;
        let n = !1;
        for (let e in L) {
            let i = L[e];
            null != i && i.type === l.PE.VIEW_CHANNEL && i.channelId === t.id && (delete L[e], (n = !0));
        }
        return n;
    },
    CHANNEL_SELECT: function () {
        i.Fr && f && ((f = !1), (C = !1), (p = !1));
    },
    THREAD_CREATE: function (e) {
        let { channel: t } = e;
        if (t.ownerId === T.default.getCurrentUser()?.id) return !1;
        let n = L[t.parent_id];
        null != n &&
            n.type === l.PE.CREATE_THREAD &&
            n.parentMessageId === E.default.castChannelIdAsMessageId(t.id) &&
            (L[t.parent_id] = { type: l.PE.VIEW_THREAD, channelId: t.id });
    },
    THREAD_DELETE: function (e) {
        let { channel: t } = e,
            n = L[t.parent_id];
        if (null == n || n.type !== l.PE.VIEW_THREAD || n.channelId !== t.id) return !1;
        delete L[t.parent_id];
    },
});
