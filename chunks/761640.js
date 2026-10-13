n.d(t, { Ay: () => K, JU: () => x, fe: () => C });
var i = n(607399),
    r = n(17928),
    a = n(73153),
    s = n(736056),
    l = n(945810),
    o = n(925166),
    d = n(115504),
    c = n(517381),
    u = n(940382),
    _ = n(95701),
    E = n(625494),
    A = n(935208),
    h = n(734057),
    f = n(71393),
    I = n(576705),
    p = n(309010),
    T = n(967198),
    m = n(287809),
    g = n(652215),
    S = n(746080),
    N = n(818348);
let C = "message_requests",
    O = !1,
    R = !1,
    L = !1,
    y = !0,
    D = !0,
    v = !1,
    b = !1,
    M = {},
    P = {},
    U = !1,
    w = null;
function G(e) {
    if (null == e) return null;
    if ((0, S.jq)(e)) {
        let t = T.A.getGuildId();
        return null == t ? null : (0, S.Gr)(e, t);
    }
    return e;
}
function x(e) {
    return [u.PE.VIEW_CHANNEL, u.PE.VIEW_MESSAGE_REQUEST, u.PE.VIEW_MOD_REPORT].includes(e.type);
}
function k() {
    return o.A.getConfig({ location: "ChannelSectionStore" }).sidebarEnabled;
}
function F() {
    return o.A.getConfig({ location: "ChannelSectionStore" }).appBarToggleEnabled;
}
function B() {
    return F() ? v : D;
}
function V(e, t) {
    (t?.trackClose === !0 && B() && !e && k() && (0, d.RQ)({ open: !1, source: d.TY.EXTERNAL, analyticsLocations: [] }),
        F() ? (v = e) : (D = e));
}
function H(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = !1;
    U && ((U = !1), (n = !0));
    let i = G(p.Ay.getChannelId());
    (null != i && i in M && (delete M[i], (n = !0)), t && B() && k() && (n = !0));
    let r = n && e ? e : !e;
    return (r && t && V(!1, { trackClose: !0 }), r);
}
function j() {
    let e = !1;
    for (let t in M) {
        let n = M[t];
        if (n.type === u.PE.VIEW_CHANNEL) {
            let i = h.A.getChannel(n.channelId);
            (null != i && I.A.can(N.xB.VIEW_CHANNEL, i)) || (delete M[t], (e = !0));
        }
    }
    return e;
}
function W() {
    let e = null != w && c.A.hasSearchState(w);
    return e !== U && ((U = e), !0);
}
class Y extends r.Ay.PersistedStore {
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
            ((O = e.isMembersOpen ?? !1),
            (R = e.isSummariesOpen ?? !1),
            (y = e.isProfileOpen ?? !0),
            (D = e.isFriendsOpen ?? !0),
            (v = e.isAppBarToggleOpen ?? !1),
            (M = e.sidebars ?? {}),
            (P = e.guildSidebars ?? {})),
            this.syncWith([I.A], j),
            this.waitFor(h.A, s.A, l.Bt, f.A, I.A, c.A, p.Ay, T.A, m.default));
    }
    getState() {
        return {
            isMembersOpen: O,
            isSummariesOpen: R,
            isProfileOpen: y,
            isFriendsOpen: D,
            isAppBarToggleOpen: v,
            sidebars: M,
            guildSidebars: P,
        };
    }
    getSection(e, t) {
        if (U) return g.YvQ.SEARCH;
        let n = G(e);
        return null != n && null != M[n]
            ? g.YvQ.SIDEBAR_CHAT
            : B() && k()
              ? g.YvQ.FRIENDS
              : t && y
                ? g.YvQ.PROFILE
                : R
                  ? g.YvQ.SUMMARIES
                  : O && !t
                    ? g.YvQ.MEMBERS
                    : L
                      ? g.YvQ.CONVERSATIONS
                      : g.YvQ.NONE;
    }
    getSidebarState(e) {
        let t = G(e);
        return null == t ? void 0 : M[t];
    }
    getGuildSidebarState(e) {
        return null == e ? void 0 : P[e];
    }
    isFriendsSidebarAvailable() {
        return b;
    }
    getCurrentSidebarChannelId(e) {
        let t = G(e);
        if (null == t || U) return null;
        let n = M[t];
        return null == n ? null : n.type === u.PE.VIEW_CHANNEL || n.type === u.PE.VIEW_MOD_REPORT ? n.channelId : null;
    }
    getCurrentSidebarMessageId(e) {
        let t = G(e);
        if (null == t || U) return null;
        let n = M[t];
        return null == n
            ? null
            : n.type === u.PE.VIEW_CHANNEL || n.type === u.PE.VIEW_MOD_REPORT
              ? n.details?.initialMessageId
              : null;
    }
    getCurrentSearchContextId() {
        return w;
    }
}
let K = new Y(a.h, {
    SIDEBAR_SET_SELECTED_SEARCH_CONTEXT: function (e) {
        return ((w = e.searchContextId), W());
    },
    SEARCH_MESSAGES_START: function (e) {
        let { ids: t } = e;
        return null != w && !!t.includes(w) && !U && ((U = !0), !0);
    },
    SEARCH_MESSAGES_CLEAR: function (e) {
        let { id: t } = e;
        return t === w && !!U && ((U = !1), !0);
    },
    CONNECTION_OPEN: function () {
        return !!U && ((U = !1), !0);
    },
    CHANNEL_TOGGLE_MEMBERS_SECTION: function () {
        (U && E._.dispatch(g.jej.SEARCH_RESULTS_CLOSE), R && (R = H(R)), L && (L = H(L)), (O = H(O, !0)));
    },
    USER_PROFILE_SIDEBAR_TOGGLE_SECTION: function () {
        (y || E._.dispatch(g.jej.SEARCH_RESULTS_CLOSE), (y = H(y, !0)));
    },
    CHANNEL_TOGGLE_SUMMARIES_SECTION: function () {
        (O && (O = H(O)), L && (L = H(L)), (R = H(R, !0)));
    },
    CHANNEL_TOGGLE_CONVERSATIONS_SECTION: function () {
        (U && E._.dispatch(g.jej.SEARCH_RESULTS_CLOSE), (O = !1), (R = !1), (L = H(L, !0)));
    },
    CHANNEL_OPEN_CONVERSATIONS_SECTION: function () {
        return !L && (U && E._.dispatch(g.jej.SEARCH_RESULTS_CLOSE), (O = !1), (R = !1), (L = !0), V(!1), !0);
    },
    SIDEBAR_VIEW_CHANNEL: function (e) {
        let { sidebarType: t, baseChannelId: n, channelId: i, details: r } = e;
        U = !1;
        let a = G(n);
        if (null == a) return !1;
        let s = { type: t, channelId: i, details: r };
        return (t === u.PE.VIEW_MOD_REPORT && (s = { ...s, baseChannelId: n }), (M[a] = s), !0);
    },
    SIDEBAR_VIEW_GUILD: function (e) {
        let { sidebarType: t, guildId: n, baseChannelId: i, details: r } = e;
        U = !1;
        let a = G(i);
        return null != a && ((P[n] = { type: t, baseChannelId: a, guildId: n, details: r }), !0);
    },
    SIDEBAR_CREATE_THREAD: function (e) {
        let { parentChannelId: t, parentMessageId: n, location: i } = e;
        U = !1;
        let r = G(t);
        null != r && (M[r] = { type: u.PE.CREATE_THREAD, parentChannelId: t, parentMessageId: n, location: i });
    },
    SIDEBAR_CLOSE: function (e) {
        let { baseChannelId: t } = e,
            n = G(t);
        null != n && (delete M[n], W());
    },
    SIDEBAR_CLOSE_GUILD: function (e) {
        let { guildId: t } = e;
        return null != P[t] && (delete P[t], W(), !0);
    },
    FRIENDS_SIDEBAR_SET_COLLAPSED: function (e) {
        let { collapsed: t } = e;
        if ((V(!t), !t)) {
            let e = p.Ay.getChannelId();
            (null != e && delete M[e], U && (E._.dispatch(g.jej.SEARCH_RESULTS_CLOSE), (U = !1)));
        }
    },
    FRIENDS_SIDEBAR_SET_AVAILABLE: function (e) {
        let { available: t } = e;
        return b !== t && ((b = t), !0);
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e,
            n = !1;
        for (let e in (t.id in M && (delete M[t.id], (n = !0)), M)) {
            let i = M[e];
            null != i && x(i) && i.channelId === t.id && (delete M[e], (n = !0));
        }
        return n;
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t, messageId: n } = e,
            r = !1;
        if ((i.Fr && O && ((O = !1), (R = !1), (L = !1), (r = !0)), null == t || null == n)) return r;
        let a = M[t];
        if (a?.type === u.PE.VIEW_CHANNEL && a.channelId === t) return r;
        let s = h.A.getChannel(t);
        return null != s && (0, _.ZV)(s.type)
            ? ((M[t] = { type: u.PE.VIEW_CHANNEL, channelId: t, details: { type: u.kk.CHAT, initialMessageId: n } }),
              !0)
            : r;
    },
    THREAD_CREATE: function (e) {
        let { channel: t } = e;
        if (t.ownerId === m.default.getCurrentUser()?.id) return !1;
        let n = M[t.parent_id];
        null != n &&
            n.type === u.PE.CREATE_THREAD &&
            n.parentMessageId === A.default.castChannelIdAsMessageId(t.id) &&
            (M[t.parent_id] = { type: u.PE.VIEW_CHANNEL, channelId: t.id, details: { type: u.kk.CHAT } });
    },
    THREAD_DELETE: function (e) {
        let { channel: t } = e,
            n = M[t.parent_id];
        if (!(null != n && x(n)) || n.channelId !== t.id) return !1;
        delete M[t.parent_id];
    },
});
