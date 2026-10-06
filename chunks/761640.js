n.d(t, { Ay: () => W, JU: () => G, fe: () => N });
var i = n(607399),
    r = n(17928),
    a = n(73153),
    s = n(736056),
    l = n(945810),
    o = n(925166),
    d = n(517381),
    c = n(940382),
    u = n(95701),
    _ = n(625494),
    E = n(935208),
    A = n(734057),
    h = n(71393),
    f = n(576705),
    I = n(309010),
    p = n(967198),
    T = n(287809),
    m = n(652215),
    g = n(746080),
    S = n(818348);
let N = "message_requests",
    C = !1,
    O = !1,
    R = !1,
    L = !0,
    y = !0,
    D = !1,
    v = !1,
    b = {},
    M = {},
    P = !1,
    U = null;
function w(e) {
    if (null == e) return null;
    if ((0, g.jq)(e)) {
        let t = p.A.getGuildId();
        return null == t ? null : (0, g.Gr)(e, t);
    }
    return e;
}
function G(e) {
    return [c.PE.VIEW_CHANNEL, c.PE.VIEW_MESSAGE_REQUEST, c.PE.VIEW_MOD_REPORT].includes(e.type);
}
function x() {
    return o.A.getConfig({ location: "ChannelSectionStore" }).sidebarEnabled;
}
function k() {
    return o.A.getConfig({ location: "ChannelSectionStore" }).appBarToggleEnabled;
}
function F(e) {
    k() ? (D = e) : (y = e);
}
function B(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = !1;
    P && ((P = !1), (n = !0));
    let i = w(I.Ay.getChannelId());
    (null != i && i in b && (delete b[i], (n = !0)), t && (k() ? D : y) && x() && (n = !0));
    let r = n && e ? e : !e;
    return (r && t && F(!1), r);
}
function V() {
    let e = !1;
    for (let t in b) {
        let n = b[t];
        if (n.type === c.PE.VIEW_CHANNEL) {
            let i = A.A.getChannel(n.channelId);
            (null != i && f.A.can(S.xB.VIEW_CHANNEL, i)) || (delete b[t], (e = !0));
        }
    }
    return e;
}
function H() {
    let e = null != U && d.A.hasSearchState(U);
    return e !== P && ((P = e), !0);
}
class j extends r.Ay.PersistedStore {
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
            ((C = e.isMembersOpen ?? !1),
            (O = e.isSummariesOpen ?? !1),
            (L = e.isProfileOpen ?? !0),
            (y = e.isFriendsOpen ?? !0),
            (D = e.isAppBarToggleOpen ?? !1),
            (b = e.sidebars ?? {}),
            (M = e.guildSidebars ?? {})),
            this.syncWith([f.A], V),
            this.waitFor(A.A, s.A, l.Bt, h.A, f.A, d.A, I.Ay, p.A, T.default));
    }
    getState() {
        return {
            isMembersOpen: C,
            isSummariesOpen: O,
            isProfileOpen: L,
            isFriendsOpen: y,
            isAppBarToggleOpen: D,
            sidebars: b,
            guildSidebars: M,
        };
    }
    getSection(e, t) {
        if (P) return m.YvQ.SEARCH;
        let n = w(e);
        return null != n && null != b[n]
            ? m.YvQ.SIDEBAR_CHAT
            : (k() ? D : y) && x()
              ? m.YvQ.FRIENDS
              : t && L
                ? m.YvQ.PROFILE
                : O
                  ? m.YvQ.SUMMARIES
                  : C && !t
                    ? m.YvQ.MEMBERS
                    : R
                      ? m.YvQ.CONVERSATIONS
                      : m.YvQ.NONE;
    }
    getSidebarState(e) {
        let t = w(e);
        return null == t ? void 0 : b[t];
    }
    getGuildSidebarState(e) {
        return null == e ? void 0 : M[e];
    }
    isFriendsSidebarAvailable() {
        return v;
    }
    getCurrentSidebarChannelId(e) {
        let t = w(e);
        if (null == t || P) return null;
        let n = b[t];
        return null == n ? null : n.type === c.PE.VIEW_CHANNEL || n.type === c.PE.VIEW_MOD_REPORT ? n.channelId : null;
    }
    getCurrentSidebarMessageId(e) {
        let t = w(e);
        if (null == t || P) return null;
        let n = b[t];
        return null == n
            ? null
            : n.type === c.PE.VIEW_CHANNEL || n.type === c.PE.VIEW_MOD_REPORT
              ? n.details?.initialMessageId
              : null;
    }
    getCurrentSearchContextId() {
        return U;
    }
}
let W = new j(a.h, {
    SIDEBAR_SET_SELECTED_SEARCH_CONTEXT: function (e) {
        return ((U = e.searchContextId), H());
    },
    SEARCH_MESSAGES_START: function (e) {
        let { ids: t } = e;
        return null != U && !!t.includes(U) && !P && ((P = !0), !0);
    },
    SEARCH_MESSAGES_CLEAR: function (e) {
        let { id: t } = e;
        return t === U && !!P && ((P = !1), !0);
    },
    CONNECTION_OPEN: function () {
        return !!P && ((P = !1), !0);
    },
    CHANNEL_TOGGLE_MEMBERS_SECTION: function () {
        (P && _._.dispatch(m.jej.SEARCH_RESULTS_CLOSE), O && (O = B(O)), R && (R = B(R)), (C = B(C, !0)));
    },
    USER_PROFILE_SIDEBAR_TOGGLE_SECTION: function () {
        (L || _._.dispatch(m.jej.SEARCH_RESULTS_CLOSE), (L = B(L, !0)));
    },
    CHANNEL_TOGGLE_SUMMARIES_SECTION: function () {
        (C && (C = B(C)), R && (R = B(R)), (O = B(O, !0)));
    },
    CHANNEL_TOGGLE_CONVERSATIONS_SECTION: function () {
        (P && _._.dispatch(m.jej.SEARCH_RESULTS_CLOSE), (C = !1), (O = !1), (R = B(R, !0)));
    },
    CHANNEL_OPEN_CONVERSATIONS_SECTION: function () {
        return !R && (P && _._.dispatch(m.jej.SEARCH_RESULTS_CLOSE), (C = !1), (O = !1), (R = !0), F(!1), !0);
    },
    SIDEBAR_VIEW_CHANNEL: function (e) {
        let { sidebarType: t, baseChannelId: n, channelId: i, details: r } = e;
        P = !1;
        let a = w(n);
        if (null == a) return !1;
        let s = { type: t, channelId: i, details: r };
        return (t === c.PE.VIEW_MOD_REPORT && (s = { ...s, baseChannelId: n }), (b[a] = s), !0);
    },
    SIDEBAR_VIEW_GUILD: function (e) {
        let { sidebarType: t, guildId: n, baseChannelId: i, details: r } = e;
        P = !1;
        let a = w(i);
        return null != a && ((M[n] = { type: t, baseChannelId: a, guildId: n, details: r }), !0);
    },
    SIDEBAR_CREATE_THREAD: function (e) {
        let { parentChannelId: t, parentMessageId: n, location: i } = e;
        P = !1;
        let r = w(t);
        null != r && (b[r] = { type: c.PE.CREATE_THREAD, parentChannelId: t, parentMessageId: n, location: i });
    },
    SIDEBAR_CLOSE: function (e) {
        let { baseChannelId: t } = e,
            n = w(t);
        null != n && (delete b[n], H());
    },
    SIDEBAR_CLOSE_GUILD: function (e) {
        let { guildId: t } = e;
        return null != M[t] && (delete M[t], H(), !0);
    },
    FRIENDS_SIDEBAR_SET_COLLAPSED: function (e) {
        let { collapsed: t } = e;
        if ((F(!t), !t)) {
            let e = I.Ay.getChannelId();
            (null != e && delete b[e], P && (_._.dispatch(m.jej.SEARCH_RESULTS_CLOSE), (P = !1)));
        }
    },
    FRIENDS_SIDEBAR_SET_AVAILABLE: function (e) {
        let { available: t } = e;
        return v !== t && ((v = t), !0);
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e,
            n = !1;
        for (let e in (t.id in b && (delete b[t.id], (n = !0)), b)) {
            let i = b[e];
            null != i && G(i) && i.channelId === t.id && (delete b[e], (n = !0));
        }
        return n;
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t, messageId: n } = e,
            r = !1;
        if ((i.Fr && C && ((C = !1), (O = !1), (R = !1), (r = !0)), null == t || null == n)) return r;
        let a = b[t];
        if (a?.type === c.PE.VIEW_CHANNEL && a.channelId === t) return r;
        let s = A.A.getChannel(t);
        return null != s && (0, u.ZV)(s.type)
            ? ((b[t] = { type: c.PE.VIEW_CHANNEL, channelId: t, details: { type: c.kk.CHAT, initialMessageId: n } }),
              !0)
            : r;
    },
    THREAD_CREATE: function (e) {
        let { channel: t } = e;
        if (t.ownerId === T.default.getCurrentUser()?.id) return !1;
        let n = b[t.parent_id];
        null != n &&
            n.type === c.PE.CREATE_THREAD &&
            n.parentMessageId === E.default.castChannelIdAsMessageId(t.id) &&
            (b[t.parent_id] = { type: c.PE.VIEW_CHANNEL, channelId: t.id, details: { type: c.kk.CHAT } });
    },
    THREAD_DELETE: function (e) {
        let { channel: t } = e,
            n = b[t.parent_id];
        if (!(null != n && G(n)) || n.channelId !== t.id) return !1;
        delete b[t.parent_id];
    },
});
