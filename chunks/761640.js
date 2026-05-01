n.d(t, { Ay: () => G, JU: () => M, fe: () => f });
var i = n(607399),
    a = n(17928),
    r = n(228366),
    s = n(736056),
    l = n(517381),
    o = n(940382),
    d = n(625494),
    c = n(935208),
    _ = n(734057),
    E = n(71393),
    u = n(576705),
    A = n(309010),
    I = n(967198),
    T = n(287809),
    h = n(652215),
    S = n(746080),
    N = n(818348);
let f = "message_requests",
    p = !1,
    m = !1,
    O = !1,
    C = !0,
    R = {},
    g = {},
    L = !1,
    D = null;
function b(e) {
    if (null == e) return null;
    if ((0, S.jq)(e)) {
        let t = I.A.getGuildId();
        return null == t ? null : (0, S.Gr)(e, t);
    }
    return e;
}
function M(e) {
    return [o.PE.VIEW_CHANNEL, o.PE.VIEW_THREAD, o.PE.VIEW_MESSAGE_REQUEST, o.PE.VIEW_MOD_REPORT].includes(e.type);
}
function P(e) {
    let t = !1;
    L && ((L = !1), (t = !0));
    let n = b(A.A.getChannelId());
    return null != n && n in R && (delete R[n], (t = !0)), t && e ? e : !e;
}
function U() {
    let e = !1;
    for (let t in R) {
        let n = R[t];
        if (n.type === o.PE.VIEW_THREAD || n.type === o.PE.VIEW_CHANNEL) {
            let i = _.A.getChannel(n.channelId);
            (null != i && u.A.can(N.xB.VIEW_CHANNEL, i)) || (delete R[t], (e = !0));
        }
    }
    return e;
}
function v() {
    let e = null != D && l.A.hasSearchState(D);
    if (e === L) return !1;
    L = e;
}
class y extends a.Ay.PersistedStore {
    static displayName = "ChannelSectionStore";
    static persistKey = "ChannelSectionStore2";
    initialize(e) {
        null != e &&
            ((p = e.isMembersOpen ?? !1),
            (m = e.isSummariesOpen ?? !1),
            (C = e.isProfileOpen ?? !0),
            (R = e.sidebars ?? {}),
            (g = e.guildSidebars ?? {})),
            this.syncWith([l.A], v),
            this.syncWith([u.A], U),
            this.waitFor(_.A, s.A, E.A, u.A, l.A, A.A, I.A, T.default);
    }
    getState() {
        return { isMembersOpen: p, isSummariesOpen: m, isProfileOpen: C, sidebars: R, guildSidebars: g };
    }
    getSection(e, t) {
        if (L) return h.YvQ.SEARCH;
        let n = b(e);
        return null != n && null != R[n]
            ? h.YvQ.SIDEBAR_CHAT
            : t && C
              ? h.YvQ.PROFILE
              : m
                ? h.YvQ.SUMMARIES
                : p
                  ? h.YvQ.MEMBERS
                  : O
                    ? h.YvQ.CONVERSATIONS
                    : h.YvQ.NONE;
    }
    getSidebarState(e) {
        let t = b(e);
        return null == t ? void 0 : R[t];
    }
    getGuildSidebarState(e) {
        return null == e ? void 0 : g[e];
    }
    getCurrentSidebarChannelId(e) {
        let t = b(e);
        if (null == t || L) return null;
        let n = R[t];
        return null == n
            ? null
            : n.type === o.PE.VIEW_THREAD || n.type === o.PE.VIEW_CHANNEL || n.type === o.PE.VIEW_MOD_REPORT
              ? n.channelId
              : null;
    }
    getCurrentSidebarMessageId(e) {
        let t = b(e);
        if (null == t || L) return null;
        let n = R[t];
        return null == n
            ? null
            : n.type === o.PE.VIEW_THREAD || n.type === o.PE.VIEW_CHANNEL || n.type === o.PE.VIEW_MOD_REPORT
              ? n.details?.initialMessageId
              : null;
    }
    getCurrentSearchContextId() {
        return D;
    }
}
let G = new y(r.h, {
    SIDEBAR_SET_SELECTED_SEARCH_CONTEXT: function (e) {
        return (D = e.searchContextId), v();
    },
    CHANNEL_TOGGLE_MEMBERS_SECTION: function () {
        L && d._.dispatch(h.jej.SEARCH_RESULTS_CLOSE), m && (m = P(m)), O && (O = P(O)), (p = P(p));
    },
    USER_PROFILE_SIDEBAR_TOGGLE_SECTION: function () {
        C || d._.dispatch(h.jej.SEARCH_RESULTS_CLOSE), (C = P(C));
    },
    CHANNEL_TOGGLE_SUMMARIES_SECTION: function () {
        p && (p = P(p)), O && (O = P(O)), (m = P(m));
    },
    CHANNEL_TOGGLE_CONVERSATIONS_SECTION: function () {
        L && d._.dispatch(h.jej.SEARCH_RESULTS_CLOSE), (p = !1), (m = !1), (O = P(O));
    },
    CHANNEL_OPEN_CONVERSATIONS_SECTION: function () {
        return !O && (L && d._.dispatch(h.jej.SEARCH_RESULTS_CLOSE), (p = !1), (m = !1), (O = !0), !0);
    },
    SIDEBAR_VIEW_CHANNEL: function (e) {
        let { sidebarType: t, baseChannelId: n, channelId: i, details: a } = e;
        L = !1;
        let r = b(n);
        if (null == r) return !1;
        let s = { type: t, channelId: i, details: a };
        return t === o.PE.VIEW_MOD_REPORT && (s = { ...s, baseChannelId: n }), (R[r] = s), !0;
    },
    SIDEBAR_VIEW_GUILD: function (e) {
        let { sidebarType: t, guildId: n, baseChannelId: i, details: a } = e;
        L = !1;
        let r = b(i);
        return null != r && ((g[n] = { type: t, baseChannelId: r, guildId: n, details: a }), !0);
    },
    SIDEBAR_CREATE_THREAD: function (e) {
        let { parentChannelId: t, parentMessageId: n, location: i } = e;
        L = !1;
        let a = b(t);
        null != a && (R[a] = { type: o.PE.CREATE_THREAD, parentChannelId: t, parentMessageId: n, location: i });
    },
    SIDEBAR_CLOSE: function (e) {
        let { baseChannelId: t } = e,
            n = b(t);
        null != n && delete R[n];
    },
    SIDEBAR_CLOSE_GUILD: function (e) {
        let { guildId: t } = e;
        return null != g[t] && (delete g[t], !0);
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        if (t.id in R) return delete R[t.id], !0;
        let n = !1;
        for (let e in R) {
            let i = R[e];
            null != i && i.type === o.PE.VIEW_CHANNEL && i.channelId === t.id && (delete R[e], (n = !0));
        }
        return n;
    },
    CHANNEL_SELECT: function () {
        i.Fr && p && ((p = !1), (m = !1), (O = !1));
    },
    THREAD_CREATE: function (e) {
        let { channel: t } = e;
        if (t.ownerId === T.default.getCurrentUser()?.id) return !1;
        let n = R[t.parent_id];
        null != n &&
            n.type === o.PE.CREATE_THREAD &&
            n.parentMessageId === c.default.castChannelIdAsMessageId(t.id) &&
            (R[t.parent_id] = { type: o.PE.VIEW_THREAD, channelId: t.id });
    },
    THREAD_DELETE: function (e) {
        let { channel: t } = e,
            n = R[t.parent_id];
        if (null == n || n.type !== o.PE.VIEW_THREAD || n.channelId !== t.id) return !1;
        delete R[t.parent_id];
    },
});
