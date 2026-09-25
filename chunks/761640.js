n.d(t, { Ay: () => V, JU: () => w, fe: () => N });
var i = n(607399),
    r = n(17928),
    a = n(228366),
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
    I = n(576705),
    f = n(309010),
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
    v = {},
    b = {},
    M = !1,
    P = null;
function U(e) {
    if (null == e) return null;
    if ((0, g.jq)(e)) {
        let t = p.A.getGuildId();
        return null == t ? null : (0, g.Gr)(e, t);
    }
    return e;
}
function w(e) {
    return [c.PE.VIEW_CHANNEL, c.PE.VIEW_MESSAGE_REQUEST, c.PE.VIEW_MOD_REPORT].includes(e.type);
}
function G() {
    return o.A.getConfig({ location: "ChannelSectionStore" }).sidebarEnabled;
}
function x(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = !1;
    M && ((M = !1), (n = !0));
    let i = U(f.Ay.getChannelId());
    (null != i && i in v && (delete v[i], (n = !0)), t && y && G() && (n = !0));
    let r = n && e ? e : !e;
    return (r && t && (y = !1), r);
}
function k() {
    let e = !1;
    for (let t in v) {
        let n = v[t];
        if (n.type === c.PE.VIEW_CHANNEL) {
            let i = A.A.getChannel(n.channelId);
            (null != i && I.A.can(S.xB.VIEW_CHANNEL, i)) || (delete v[t], (e = !0));
        }
    }
    return e;
}
function F() {
    let e = null != P && d.A.hasSearchState(P);
    return e !== M && ((M = e), !0);
}
class B extends r.Ay.PersistedStore {
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
            (v = e.sidebars ?? {}),
            (b = e.guildSidebars ?? {})),
            this.syncWith([I.A], k),
            this.waitFor(A.A, s.A, l.Bt, h.A, I.A, d.A, f.Ay, p.A, T.default));
    }
    getState() {
        return {
            isMembersOpen: C,
            isSummariesOpen: O,
            isProfileOpen: L,
            isFriendsOpen: y,
            sidebars: v,
            guildSidebars: b,
        };
    }
    getSection(e, t) {
        if (M) return m.YvQ.SEARCH;
        let n = U(e);
        return null != n && null != v[n]
            ? m.YvQ.SIDEBAR_CHAT
            : y && G()
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
        let t = U(e);
        return null == t ? void 0 : v[t];
    }
    getGuildSidebarState(e) {
        return null == e ? void 0 : b[e];
    }
    isFriendsSidebarAvailable() {
        return D;
    }
    getCurrentSidebarChannelId(e) {
        let t = U(e);
        if (null == t || M) return null;
        let n = v[t];
        return null == n ? null : n.type === c.PE.VIEW_CHANNEL || n.type === c.PE.VIEW_MOD_REPORT ? n.channelId : null;
    }
    getCurrentSidebarMessageId(e) {
        let t = U(e);
        if (null == t || M) return null;
        let n = v[t];
        return null == n
            ? null
            : n.type === c.PE.VIEW_CHANNEL || n.type === c.PE.VIEW_MOD_REPORT
              ? n.details?.initialMessageId
              : null;
    }
    getCurrentSearchContextId() {
        return P;
    }
}
let V = new B(a.h, {
    SIDEBAR_SET_SELECTED_SEARCH_CONTEXT: function (e) {
        return ((P = e.searchContextId), F());
    },
    SEARCH_MESSAGES_START: function (e) {
        let { ids: t } = e;
        return null != P && !!t.includes(P) && !M && ((M = !0), !0);
    },
    SEARCH_MESSAGES_CLEAR: function (e) {
        let { id: t } = e;
        return t === P && !!M && ((M = !1), !0);
    },
    CONNECTION_OPEN: function () {
        return !!M && ((M = !1), !0);
    },
    CHANNEL_TOGGLE_MEMBERS_SECTION: function () {
        (M && _._.dispatch(m.jej.SEARCH_RESULTS_CLOSE), O && (O = x(O)), R && (R = x(R)), (C = x(C, !0)));
    },
    USER_PROFILE_SIDEBAR_TOGGLE_SECTION: function () {
        (L || _._.dispatch(m.jej.SEARCH_RESULTS_CLOSE), (L = x(L, !0)));
    },
    CHANNEL_TOGGLE_SUMMARIES_SECTION: function () {
        (C && (C = x(C)), R && (R = x(R)), (O = x(O, !0)));
    },
    CHANNEL_TOGGLE_CONVERSATIONS_SECTION: function () {
        (M && _._.dispatch(m.jej.SEARCH_RESULTS_CLOSE), (C = !1), (O = !1), (R = x(R, !0)));
    },
    CHANNEL_OPEN_CONVERSATIONS_SECTION: function () {
        return !R && (M && _._.dispatch(m.jej.SEARCH_RESULTS_CLOSE), (C = !1), (O = !1), (R = !0), (y = !1), !0);
    },
    SIDEBAR_VIEW_CHANNEL: function (e) {
        let { sidebarType: t, baseChannelId: n, channelId: i, details: r } = e;
        M = !1;
        let a = U(n);
        if (null == a) return !1;
        let s = { type: t, channelId: i, details: r };
        return (t === c.PE.VIEW_MOD_REPORT && (s = { ...s, baseChannelId: n }), (v[a] = s), !0);
    },
    SIDEBAR_VIEW_GUILD: function (e) {
        let { sidebarType: t, guildId: n, baseChannelId: i, details: r } = e;
        M = !1;
        let a = U(i);
        return null != a && ((b[n] = { type: t, baseChannelId: a, guildId: n, details: r }), !0);
    },
    SIDEBAR_CREATE_THREAD: function (e) {
        let { parentChannelId: t, parentMessageId: n, location: i } = e;
        M = !1;
        let r = U(t);
        null != r && (v[r] = { type: c.PE.CREATE_THREAD, parentChannelId: t, parentMessageId: n, location: i });
    },
    SIDEBAR_CLOSE: function (e) {
        let { baseChannelId: t } = e,
            n = U(t);
        null != n && (delete v[n], F());
    },
    SIDEBAR_CLOSE_GUILD: function (e) {
        let { guildId: t } = e;
        return null != b[t] && (delete b[t], F(), !0);
    },
    FRIENDS_SIDEBAR_SET_COLLAPSED: function (e) {
        let { collapsed: t } = e;
        if (((y = !t), !t)) {
            let e = f.Ay.getChannelId();
            (null != e && delete v[e], M && (_._.dispatch(m.jej.SEARCH_RESULTS_CLOSE), (M = !1)));
        }
    },
    FRIENDS_SIDEBAR_SET_AVAILABLE: function (e) {
        let { available: t } = e;
        return D !== t && ((D = t), !0);
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e,
            n = !1;
        for (let e in (t.id in v && (delete v[t.id], (n = !0)), v)) {
            let i = v[e];
            null != i && w(i) && i.channelId === t.id && (delete v[e], (n = !0));
        }
        return n;
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t, messageId: n } = e,
            r = !1;
        if ((i.Fr && C && ((C = !1), (O = !1), (R = !1), (r = !0)), null == t || null == n)) return r;
        let a = v[t];
        if (a?.type === c.PE.VIEW_CHANNEL && a.channelId === t) return r;
        let s = A.A.getChannel(t);
        return null != s && (0, u.ZV)(s.type)
            ? ((v[t] = { type: c.PE.VIEW_CHANNEL, channelId: t, details: { type: c.kk.CHAT, initialMessageId: n } }),
              !0)
            : r;
    },
    THREAD_CREATE: function (e) {
        let { channel: t } = e;
        if (t.ownerId === T.default.getCurrentUser()?.id) return !1;
        let n = v[t.parent_id];
        null != n &&
            n.type === c.PE.CREATE_THREAD &&
            n.parentMessageId === E.default.castChannelIdAsMessageId(t.id) &&
            (v[t.parent_id] = { type: c.PE.VIEW_CHANNEL, channelId: t.id, details: { type: c.kk.CHAT } });
    },
    THREAD_DELETE: function (e) {
        let { channel: t } = e,
            n = v[t.parent_id];
        if (!(null != n && w(n)) || n.channelId !== t.id) return !1;
        delete v[t.parent_id];
    },
});
