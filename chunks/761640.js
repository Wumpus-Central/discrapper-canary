n.d(t, { Ay: () => z, JU: () => F, fe: () => R });
var i = n(607399),
    r = n(17928),
    a = n(73153),
    s = n(587895),
    l = n(631828),
    o = n(736056),
    d = n(945810),
    c = n(925166),
    u = n(115504),
    _ = n(517381),
    E = n(940382),
    A = n(95701),
    h = n(625494),
    f = n(935208),
    I = n(734057),
    p = n(71393),
    T = n(576705),
    m = n(309010),
    g = n(967198),
    S = n(287809),
    N = n(652215),
    C = n(746080),
    O = n(818348);
let R = "message_requests",
    L = !1,
    y = !1,
    D = !1,
    v = !0,
    b = !0,
    M = !1,
    P = !1,
    U = {},
    w = {},
    G = !1,
    x = null;
function k(e) {
    if (null == e) return null;
    if ((0, C.jq)(e)) {
        let t = g.A.getGuildId();
        return null == t ? null : (0, C.Gr)(e, t);
    }
    return e;
}
function F(e) {
    return [E.PE.VIEW_CHANNEL, E.PE.VIEW_MESSAGE_REQUEST, E.PE.VIEW_MOD_REPORT].includes(e.type);
}
function B() {
    return c.A.getConfig({ location: "ChannelSectionStore" }).sidebarEnabled;
}
function V() {
    return c.A.getConfig({ location: "ChannelSectionStore" }).appBarToggleEnabled;
}
function H() {
    return V() ? M : b;
}
function j(e, t) {
    (t?.trackClose === !0 && H() && !e && B() && (0, u.RQ)({ open: !1, source: u.TY.EXTERNAL, analyticsLocations: [] }),
        V() ? (M = e) : (b = e));
}
function W(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = !1;
    G && ((G = !1), (n = !0));
    let i = k(m.Ay.getChannelId());
    (null != i && i in U && (delete U[i], (n = !0)), t && H() && B() && (n = !0));
    let r = n && e ? e : !e;
    return (r && t && j(!1, { trackClose: !0 }), r);
}
function Y() {
    let e = !1;
    for (let t in U) {
        let n = U[t];
        if (n.type === E.PE.VIEW_CHANNEL) {
            let i = I.A.getChannel(n.channelId);
            (null != i && T.A.can(O.xB.VIEW_CHANNEL, i)) || (delete U[t], (e = !0));
        }
    }
    return e;
}
function K() {
    let e = null != x && _.A.hasSearchState(x);
    return e !== G && ((G = e), !0);
}
class $ extends r.Ay.PersistedStore {
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
        (null != e &&
            ((L = e.isMembersOpen ?? !1),
            (y = e.isSummariesOpen ?? !1),
            (v = e.isProfileOpen ?? !0),
            (b = e.isFriendsOpen ?? !0),
            (M = e.isAppBarToggleOpen ?? !1),
            (U = e.sidebars ?? {}),
            (w = e.guildSidebars ?? {})),
            this.syncWith([T.A], Y),
            this.waitFor(s.A, I.A, o.A, d.Bt, p.A, T.A, _.A, m.Ay, g.A, S.default));
    }
    getState() {
        return {
            isMembersOpen: L,
            isSummariesOpen: y,
            isProfileOpen: v,
            isFriendsOpen: b,
            isAppBarToggleOpen: M,
            sidebars: U,
            guildSidebars: w,
        };
    }
    getSection(e, t) {
        if (G) return N.YvQ.SEARCH;
        let n = k(e);
        return null != n && null != U[n]
            ? N.YvQ.SIDEBAR_CHAT
            : H() && B()
              ? N.YvQ.FRIENDS
              : t && v
                ? N.YvQ.PROFILE
                : y
                  ? N.YvQ.SUMMARIES
                  : L && !t
                    ? N.YvQ.MEMBERS
                    : D
                      ? N.YvQ.CONVERSATIONS
                      : N.YvQ.NONE;
    }
    getSidebarState(e) {
        let t = k(e);
        return null == t ? void 0 : U[t];
    }
    getGuildSidebarState(e) {
        return null == e ? void 0 : w[e];
    }
    isFriendsSidebarAvailable() {
        return P;
    }
    getCurrentSidebarChannelId(e) {
        let t = k(e);
        if (null == t || G) return null;
        let n = U[t];
        return null == n ? null : n.type === E.PE.VIEW_CHANNEL || n.type === E.PE.VIEW_MOD_REPORT ? n.channelId : null;
    }
    getCurrentSidebarMessageId(e) {
        let t = k(e);
        if (null == t || G) return null;
        let n = U[t];
        return null == n
            ? null
            : n.type === E.PE.VIEW_CHANNEL || n.type === E.PE.VIEW_MOD_REPORT
              ? n.details?.initialMessageId
              : null;
    }
    getCurrentSearchContextId() {
        return x;
    }
}
let z = new $(a.h, {
    SIDEBAR_SET_SELECTED_SEARCH_CONTEXT: function (e) {
        return ((x = e.searchContextId), K());
    },
    SEARCH_MESSAGES_START: function (e) {
        let { ids: t } = e;
        return null != x && !!t.includes(x) && !G && ((G = !0), !0);
    },
    SEARCH_MESSAGES_CLEAR: function (e) {
        let { id: t } = e;
        return t === x && !!G && ((G = !1), !0);
    },
    CONNECTION_OPEN: function () {
        return !!G && ((G = !1), !0);
    },
    CHANNEL_TOGGLE_MEMBERS_SECTION: function () {
        (G && h._.dispatch(N.jej.SEARCH_RESULTS_CLOSE), y && (y = W(y)), D && (D = W(D)), (L = W(L, !0)));
    },
    USER_PROFILE_SIDEBAR_TOGGLE_SECTION: function () {
        (v || h._.dispatch(N.jej.SEARCH_RESULTS_CLOSE), (v = W(v, !0)));
    },
    CHANNEL_TOGGLE_SUMMARIES_SECTION: function () {
        (L && (L = W(L)), D && (D = W(D)), (y = W(y, !0)));
    },
    CHANNEL_TOGGLE_CONVERSATIONS_SECTION: function () {
        (G && h._.dispatch(N.jej.SEARCH_RESULTS_CLOSE), (L = !1), (y = !1), (D = W(D, !0)));
    },
    CHANNEL_OPEN_CONVERSATIONS_SECTION: function () {
        return !D && (G && h._.dispatch(N.jej.SEARCH_RESULTS_CLOSE), (L = !1), (y = !1), (D = !0), j(!1), !0);
    },
    SIDEBAR_VIEW_CHANNEL: function (e) {
        let { sidebarType: t, baseChannelId: n, channelId: i, details: r } = e;
        G = !1;
        let a = k(n);
        if (null == a) return !1;
        let s = { type: t, channelId: i, details: r };
        return (t === E.PE.VIEW_MOD_REPORT && (s = { ...s, baseChannelId: n }), (U[a] = s), !0);
    },
    SIDEBAR_VIEW_GUILD: function (e) {
        let { sidebarType: t, guildId: n, baseChannelId: i, details: r } = e;
        G = !1;
        let a = k(i);
        return null != a && ((w[n] = { type: t, baseChannelId: a, guildId: n, details: r }), !0);
    },
    SIDEBAR_CREATE_THREAD: function (e) {
        let { parentChannelId: t, parentMessageId: n, location: i } = e;
        G = !1;
        let r = k(t);
        null != r && (U[r] = { type: E.PE.CREATE_THREAD, parentChannelId: t, parentMessageId: n, location: i });
    },
    SIDEBAR_CLOSE: function (e) {
        let { baseChannelId: t } = e,
            n = k(t);
        null != n && (delete U[n], K());
    },
    SIDEBAR_CLOSE_GUILD: function (e) {
        let { guildId: t } = e;
        return null != w[t] && (delete w[t], K(), !0);
    },
    FRIENDS_SIDEBAR_SET_COLLAPSED: function (e) {
        let { collapsed: t } = e;
        if ((j(!t), !t)) {
            let e = m.Ay.getChannelId();
            (null != e && delete U[e], G && (h._.dispatch(N.jej.SEARCH_RESULTS_CLOSE), (G = !1)));
        }
    },
    FRIENDS_SIDEBAR_SET_AVAILABLE: function (e) {
        let { available: t } = e;
        return P !== t && ((P = t), !0);
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e,
            n = !1;
        for (let e in (t.id in U && (delete U[t.id], (n = !0)), U)) {
            let i = U[e];
            null != i && F(i) && i.channelId === t.id && (delete U[e], (n = !0));
        }
        return n;
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t, messageId: n } = e,
            r = !1;
        if ((i.Fr && L && ((L = !1), (y = !1), (D = !1), (r = !0)), null == t || null == n)) return r;
        let a = U[t];
        if (a?.type === E.PE.VIEW_CHANNEL && a.channelId === t) return r;
        let s = I.A.getChannel(t);
        return null != s && ((0, A.ZV)(s.type) || (0, l.M)(s))
            ? ((U[t] = { type: E.PE.VIEW_CHANNEL, channelId: t, details: { type: E.kk.CHAT, initialMessageId: n } }),
              !0)
            : r;
    },
    THREAD_CREATE: function (e) {
        let { channel: t } = e;
        if (t.ownerId === S.default.getCurrentUser()?.id) return !1;
        let n = U[t.parent_id];
        null != n &&
            n.type === E.PE.CREATE_THREAD &&
            n.parentMessageId === f.default.castChannelIdAsMessageId(t.id) &&
            (U[t.parent_id] = { type: E.PE.VIEW_CHANNEL, channelId: t.id, details: { type: E.kk.CHAT } });
    },
    THREAD_DELETE: function (e) {
        let { channel: t } = e,
            n = U[t.parent_id];
        if (!(null != n && F(n)) || n.channelId !== t.id) return !1;
        delete U[t.parent_id];
    },
});
