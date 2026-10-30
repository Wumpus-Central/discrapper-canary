n.d(t, { JU: () => k, fe: () => R, Ay: () => $ });
var i = n(607399),
    r = n(17928),
    a = n(73153),
    s = n(631828),
    l = n(95701),
    o = n(734057),
    d = n(652215),
    c = n(587895),
    u = n(736056),
    _ = n(945810),
    E = n(925166),
    A = n(115504),
    h = n(517381),
    f = n(940382),
    I = n(625494),
    p = n(935208),
    T = n(71393),
    m = n(576705),
    g = n(309010),
    S = n(967198),
    N = n(287809),
    C = n(746080),
    O = n(818348);
let R = "message_requests",
    L = !1,
    y = !1,
    D = !0,
    v = !0,
    b = !1,
    M = !1,
    P = {},
    U = {},
    w = !1,
    G = null;
function x(e) {
    if (null == e) return null;
    if ((0, C.jq)(e)) {
        let t = S.A.getGuildId();
        return null == t ? null : (0, C.Gr)(e, t);
    }
    return e;
}
function k(e) {
    return [f.PE.VIEW_CHANNEL, f.PE.VIEW_MESSAGE_REQUEST, f.PE.VIEW_MOD_REPORT].includes(e.type);
}
function F() {
    return E.A.getConfig({ location: "ChannelSectionStore" }).sidebarEnabled;
}
function B() {
    return E.A.getConfig({ location: "ChannelSectionStore" }).appBarToggleEnabled;
}
function V() {
    return B() ? b : v;
}
function H(e, t) {
    (t?.trackClose === !0 && V() && !e && F() && (0, A.RQ)({ open: !1, source: A.TY.EXTERNAL, analyticsLocations: [] }),
        B() ? (b = e) : (v = e));
}
function j(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = !1;
    w && ((w = !1), (n = !0));
    let i = x(g.Ay.getChannelId());
    (null != i && i in P && (delete P[i], (n = !0)), t && V() && F() && (n = !0));
    let r = n && e ? e : !e;
    return (r && t && H(!1, { trackClose: !0 }), r);
}
function W() {
    let e = !1;
    for (let t in P) {
        let n = P[t];
        if (n.type === f.PE.VIEW_CHANNEL) {
            let i = o.A.getChannel(n.channelId);
            (null != i && m.A.can(O.xB.VIEW_CHANNEL, i)) || (delete P[t], (e = !0));
        }
    }
    return e;
}
function Y() {
    let e = null != G && h.A.hasSearchState(G);
    return e !== w && ((w = e), !0);
}
class K extends r.Ay.PersistedStore {
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
            (D = e.isProfileOpen ?? !0),
            (v = e.isFriendsOpen ?? !0),
            (b = e.isAppBarToggleOpen ?? !1),
            (P = e.sidebars ?? {}),
            (U = e.guildSidebars ?? {})),
            this.syncWith([m.A], W),
            this.waitFor(c.A, o.A, u.A, _.Bt, T.A, m.A, h.A, g.Ay, S.A, N.default));
    }
    getState() {
        return {
            isMembersOpen: L,
            isSummariesOpen: y,
            isProfileOpen: D,
            isFriendsOpen: v,
            isAppBarToggleOpen: b,
            sidebars: P,
            guildSidebars: U,
        };
    }
    getSection(e, t) {
        if (w) return d.YvQ.SEARCH;
        let n = x(e);
        return null != n && null != P[n]
            ? d.YvQ.SIDEBAR_CHAT
            : V() && F()
              ? d.YvQ.FRIENDS
              : t && D
                ? d.YvQ.PROFILE
                : y
                  ? d.YvQ.SUMMARIES
                  : L && !t
                    ? d.YvQ.MEMBERS
                    : d.YvQ.NONE;
    }
    getSidebarState(e) {
        let t = x(e);
        return null == t ? void 0 : P[t];
    }
    getGuildSidebarState(e) {
        return null == e ? void 0 : U[e];
    }
    isFriendsSidebarAvailable() {
        return M;
    }
    getCurrentSidebarChannelId(e) {
        let t = x(e);
        if (null == t || w) return null;
        let n = P[t];
        return null == n ? null : n.type === f.PE.VIEW_CHANNEL || n.type === f.PE.VIEW_MOD_REPORT ? n.channelId : null;
    }
    getCurrentSidebarMessageId(e) {
        let t = x(e);
        if (null == t || w) return null;
        let n = P[t];
        return null == n
            ? null
            : n.type === f.PE.VIEW_CHANNEL || n.type === f.PE.VIEW_MOD_REPORT
              ? n.details?.initialMessageId
              : null;
    }
    getCurrentSearchContextId() {
        return G;
    }
}
let $ = new K(a.h, {
    SIDEBAR_SET_SELECTED_SEARCH_CONTEXT: function (e) {
        return ((G = e.searchContextId), Y());
    },
    SEARCH_MESSAGES_START: function (e) {
        let { ids: t } = e;
        return null != G && !!t.includes(G) && !w && ((w = !0), !0);
    },
    SEARCH_MESSAGES_CLEAR: function (e) {
        let { id: t } = e;
        return t === G && !!w && ((w = !1), !0);
    },
    CONNECTION_OPEN: function () {
        return !!w && ((w = !1), !0);
    },
    CHANNEL_TOGGLE_MEMBERS_SECTION: function () {
        (w && I._.dispatch(d.jej.SEARCH_RESULTS_CLOSE), y && (y = j(y)), (L = j(L, !0)));
    },
    USER_PROFILE_SIDEBAR_TOGGLE_SECTION: function () {
        (D || I._.dispatch(d.jej.SEARCH_RESULTS_CLOSE), (D = j(D, !0)));
    },
    CHANNEL_TOGGLE_SUMMARIES_SECTION: function () {
        (L && (L = j(L)), (y = j(y, !0)));
    },
    SIDEBAR_VIEW_CHANNEL: function (e) {
        let { sidebarType: t, baseChannelId: n, channelId: i, details: r } = e;
        w = !1;
        let a = x(n);
        if (null == a) return !1;
        let s = { type: t, channelId: i, details: r };
        return (t === f.PE.VIEW_MOD_REPORT && (s = { ...s, baseChannelId: n }), (P[a] = s), !0);
    },
    SIDEBAR_VIEW_GUILD: function (e) {
        let { sidebarType: t, guildId: n, baseChannelId: i, details: r } = e;
        w = !1;
        let a = x(i);
        return null != a && ((U[n] = { type: t, baseChannelId: a, guildId: n, details: r }), !0);
    },
    SIDEBAR_CREATE_THREAD: function (e) {
        let { parentChannelId: t, parentMessageId: n, location: i } = e;
        w = !1;
        let r = x(t);
        null != r && (P[r] = { type: f.PE.CREATE_THREAD, parentChannelId: t, parentMessageId: n, location: i });
    },
    SIDEBAR_CLOSE: function (e) {
        let { baseChannelId: t } = e,
            n = x(t);
        null != n && (delete P[n], Y());
    },
    SIDEBAR_CLOSE_GUILD: function (e) {
        let { guildId: t } = e;
        return null != U[t] && (delete U[t], Y(), !0);
    },
    FRIENDS_SIDEBAR_SET_COLLAPSED: function (e) {
        let { collapsed: t } = e;
        if ((H(!t), !t)) {
            let e = g.Ay.getChannelId();
            (null != e && delete P[e], w && (I._.dispatch(d.jej.SEARCH_RESULTS_CLOSE), (w = !1)));
        }
    },
    FRIENDS_SIDEBAR_SET_AVAILABLE: function (e) {
        let { available: t } = e;
        return M !== t && ((M = t), !0);
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e,
            n = !1;
        for (let e in (t.id in P && (delete P[t.id], (n = !0)), P)) {
            let i = P[e];
            null != i && k(i) && i.channelId === t.id && (delete P[e], (n = !0));
        }
        return n;
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t, messageId: n } = e,
            r = !1;
        if ((i.Fr && L && ((L = !1), (y = !1), (r = !0)), null == t || null == n)) return r;
        let a = P[t];
        return (a?.type === f.PE.VIEW_CHANNEL && a.channelId === t) ||
            !(function (e) {
                let t = o.A.getBasicChannel(e);
                if (null != t) {
                    if ((0, l.ZV)(t.type)) return !0;
                    if (t.type !== d.rbe.DM) return !1;
                }
                let n = o.A.getChannel(e);
                return null != n && (0, s.M)(n);
            })(t)
            ? r
            : ((P[t] = { type: f.PE.VIEW_CHANNEL, channelId: t, details: { type: f.kk.CHAT, initialMessageId: n } }),
              !0);
    },
    THREAD_CREATE: function (e) {
        let { channel: t } = e;
        if (t.ownerId === N.default.getCurrentUser()?.id) return !1;
        let n = P[t.parent_id];
        null != n &&
            n.type === f.PE.CREATE_THREAD &&
            n.parentMessageId === p.default.castChannelIdAsMessageId(t.id) &&
            (P[t.parent_id] = { type: f.PE.VIEW_CHANNEL, channelId: t.id, details: { type: f.kk.CHAT } });
    },
    THREAD_DELETE: function (e) {
        let { channel: t } = e,
            n = P[t.parent_id];
        if (!(null != n && k(n)) || n.channelId !== t.id) return !1;
        delete P[t.parent_id];
    },
});
