n.d(t, { Ay: () => G, JU: () => b, fe: () => g });
var i = n(607399),
    r = n(17928),
    a = n(228366),
    s = n(736056),
    l = n(517381),
    o = n(940382),
    d = n(95701),
    c = n(625494),
    u = n(935208),
    _ = n(734057),
    E = n(71393),
    A = n(576705),
    h = n(309010),
    I = n(967198),
    f = n(287809),
    p = n(652215),
    T = n(746080),
    m = n(818348);
let g = "message_requests",
    S = !1,
    N = !1,
    C = !1,
    O = !0,
    R = {},
    L = {},
    y = !1,
    D = null;
function v(e) {
    if (null == e) return null;
    if ((0, T.jq)(e)) {
        let t = I.A.getGuildId();
        return null == t ? null : (0, T.Gr)(e, t);
    }
    return e;
}
function b(e) {
    return [o.PE.VIEW_CHANNEL, o.PE.VIEW_MESSAGE_REQUEST, o.PE.VIEW_MOD_REPORT].includes(e.type);
}
function M(e) {
    let t = !1;
    y && ((y = !1), (t = !0));
    let n = v(h.Ay.getChannelId());
    return null != n && n in R && (delete R[n], (t = !0)), t && e ? e : !e;
}
function P() {
    let e = !1;
    for (let t in R) {
        let n = R[t];
        if (n.type === o.PE.VIEW_CHANNEL) {
            let i = _.A.getChannel(n.channelId);
            (null != i && A.A.can(m.xB.VIEW_CHANNEL, i)) || (delete R[t], (e = !0));
        }
    }
    return e;
}
function U() {
    let e = null != D && l.A.hasSearchState(D);
    if (e === y) return !1;
    y = e;
}
class w extends r.Ay.PersistedStore {
    static displayName = "ChannelSectionStore";
    static persistKey = "ChannelSectionStore2";
    static migrations = [
        (e) => ({
            ...e,
            sidebars: Object.fromEntries(
                Object.entries(e.sidebars ?? {}).filter((e) => {
                    let [t, n] = e;
                    return n?.type !== 1;
                }),
            ),
        }),
    ];
    initialize(e) {
        null != e &&
            ((S = e.isMembersOpen ?? !1),
            (N = e.isSummariesOpen ?? !1),
            (O = e.isProfileOpen ?? !0),
            (R = e.sidebars ?? {}),
            (L = e.guildSidebars ?? {})),
            this.syncWith([l.A], U),
            this.syncWith([A.A], P),
            this.waitFor(_.A, s.A, E.A, A.A, l.A, h.Ay, I.A, f.default);
    }
    getState() {
        return { isMembersOpen: S, isSummariesOpen: N, isProfileOpen: O, sidebars: R, guildSidebars: L };
    }
    getSection(e, t) {
        if (y) return p.YvQ.SEARCH;
        let n = v(e);
        return null != n && null != R[n]
            ? p.YvQ.SIDEBAR_CHAT
            : t && O
              ? p.YvQ.PROFILE
              : N
                ? p.YvQ.SUMMARIES
                : S
                  ? p.YvQ.MEMBERS
                  : C
                    ? p.YvQ.CONVERSATIONS
                    : p.YvQ.NONE;
    }
    getSidebarState(e) {
        let t = v(e);
        return null == t ? void 0 : R[t];
    }
    getGuildSidebarState(e) {
        return null == e ? void 0 : L[e];
    }
    getCurrentSidebarChannelId(e) {
        let t = v(e);
        if (null == t || y) return null;
        let n = R[t];
        return null == n ? null : n.type === o.PE.VIEW_CHANNEL || n.type === o.PE.VIEW_MOD_REPORT ? n.channelId : null;
    }
    getCurrentSidebarMessageId(e) {
        let t = v(e);
        if (null == t || y) return null;
        let n = R[t];
        return null == n
            ? null
            : n.type === o.PE.VIEW_CHANNEL || n.type === o.PE.VIEW_MOD_REPORT
              ? n.details?.initialMessageId
              : null;
    }
    getCurrentSearchContextId() {
        return D;
    }
}
let G = new w(a.h, {
    SIDEBAR_SET_SELECTED_SEARCH_CONTEXT: function (e) {
        return (D = e.searchContextId), U();
    },
    CHANNEL_TOGGLE_MEMBERS_SECTION: function () {
        y && c._.dispatch(p.jej.SEARCH_RESULTS_CLOSE), N && (N = M(N)), C && (C = M(C)), (S = M(S));
    },
    USER_PROFILE_SIDEBAR_TOGGLE_SECTION: function () {
        O || c._.dispatch(p.jej.SEARCH_RESULTS_CLOSE), (O = M(O));
    },
    CHANNEL_TOGGLE_SUMMARIES_SECTION: function () {
        S && (S = M(S)), C && (C = M(C)), (N = M(N));
    },
    CHANNEL_TOGGLE_CONVERSATIONS_SECTION: function () {
        y && c._.dispatch(p.jej.SEARCH_RESULTS_CLOSE), (S = !1), (N = !1), (C = M(C));
    },
    CHANNEL_OPEN_CONVERSATIONS_SECTION: function () {
        return !C && (y && c._.dispatch(p.jej.SEARCH_RESULTS_CLOSE), (S = !1), (N = !1), (C = !0), !0);
    },
    SIDEBAR_VIEW_CHANNEL: function (e) {
        let { sidebarType: t, baseChannelId: n, channelId: i, details: r } = e;
        y = !1;
        let a = v(n);
        if (null == a) return !1;
        let s = { type: t, channelId: i, details: r };
        return t === o.PE.VIEW_MOD_REPORT && (s = { ...s, baseChannelId: n }), (R[a] = s), !0;
    },
    SIDEBAR_VIEW_GUILD: function (e) {
        let { sidebarType: t, guildId: n, baseChannelId: i, details: r } = e;
        y = !1;
        let a = v(i);
        return null != a && ((L[n] = { type: t, baseChannelId: a, guildId: n, details: r }), !0);
    },
    SIDEBAR_CREATE_THREAD: function (e) {
        let { parentChannelId: t, parentMessageId: n, location: i } = e;
        y = !1;
        let r = v(t);
        null != r && (R[r] = { type: o.PE.CREATE_THREAD, parentChannelId: t, parentMessageId: n, location: i });
    },
    SIDEBAR_CLOSE: function (e) {
        let { baseChannelId: t } = e,
            n = v(t);
        null != n && delete R[n];
    },
    SIDEBAR_CLOSE_GUILD: function (e) {
        let { guildId: t } = e;
        return null != L[t] && (delete L[t], !0);
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e,
            n = !1;
        for (let e in (t.id in R && (delete R[t.id], (n = !0)), R)) {
            let i = R[e];
            null != i && b(i) && i.channelId === t.id && (delete R[e], (n = !0));
        }
        return n;
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t, messageId: n } = e,
            r = !1;
        if ((i.Fr && S && ((S = !1), (N = !1), (C = !1), (r = !0)), null == t || null == n)) return r;
        let a = R[t];
        if (a?.type === o.PE.VIEW_CHANNEL && a.channelId === t) return r;
        let s = _.A.getChannel(t);
        return null != s && (0, d.ZV)(s.type)
            ? ((R[t] = { type: o.PE.VIEW_CHANNEL, channelId: t, details: { type: o.kk.CHAT, initialMessageId: n } }),
              !0)
            : r;
    },
    THREAD_CREATE: function (e) {
        let { channel: t } = e;
        if (t.ownerId === f.default.getCurrentUser()?.id) return !1;
        let n = R[t.parent_id];
        null != n &&
            n.type === o.PE.CREATE_THREAD &&
            n.parentMessageId === u.default.castChannelIdAsMessageId(t.id) &&
            (R[t.parent_id] = { type: o.PE.VIEW_CHANNEL, channelId: t.id, details: { type: o.kk.CHAT } });
    },
    THREAD_DELETE: function (e) {
        let { channel: t } = e,
            n = R[t.parent_id];
        if (!(null != n && b(n)) || n.channelId !== t.id) return !1;
        delete R[t.parent_id];
    },
});
