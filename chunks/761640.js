n.d(t, { Ay: () => V, JU: () => U, fe: () => N });
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
    D = {},
    v = {},
    b = !1,
    M = null;
function P(e) {
    if (null == e) return null;
    if ((0, g.jq)(e)) {
        let t = p.A.getGuildId();
        return null == t ? null : (0, g.Gr)(e, t);
    }
    return e;
}
function U(e) {
    return [c.PE.VIEW_CHANNEL, c.PE.VIEW_MESSAGE_REQUEST, c.PE.VIEW_MOD_REPORT].includes(e.type);
}
function w() {
    return o.A.getConfig({ location: "ChannelSectionStore" }).sidebarEnabled;
}
function G(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = !1;
    b && ((b = !1), (n = !0));
    let i = P(f.Ay.getChannelId());
    null != i && i in D && (delete D[i], (n = !0)), t && y && w() && (n = !0);
    let r = n && e ? e : !e;
    return r && t && (y = !1), r;
}
function x() {
    let e = !1;
    for (let t in D) {
        let n = D[t];
        if (n.type === c.PE.VIEW_CHANNEL) {
            let i = A.A.getChannel(n.channelId);
            (null != i && I.A.can(S.xB.VIEW_CHANNEL, i)) || (delete D[t], (e = !0));
        }
    }
    return e;
}
function k() {
    let e = null != M && d.A.hasSearchState(M);
    if (e === b) return !1;
    b = e;
}
class F extends r.Ay.PersistedStore {
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
            ((C = e.isMembersOpen ?? !1),
            (O = e.isSummariesOpen ?? !1),
            (L = e.isProfileOpen ?? !0),
            (y = e.isFriendsOpen ?? !0),
            (D = e.sidebars ?? {}),
            (v = e.guildSidebars ?? {})),
            this.syncWith([d.A], k),
            this.syncWith([I.A], x),
            this.waitFor(A.A, s.A, l.Bt, h.A, I.A, d.A, f.Ay, p.A, T.default);
    }
    getState() {
        return {
            isMembersOpen: C,
            isSummariesOpen: O,
            isProfileOpen: L,
            isFriendsOpen: y,
            sidebars: D,
            guildSidebars: v,
        };
    }
    getSection(e, t) {
        if (b) return m.YvQ.SEARCH;
        let n = P(e);
        return null != n && null != D[n]
            ? m.YvQ.SIDEBAR_CHAT
            : y && w()
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
        let t = P(e);
        return null == t ? void 0 : D[t];
    }
    getGuildSidebarState(e) {
        return null == e ? void 0 : v[e];
    }
    getCurrentSidebarChannelId(e) {
        let t = P(e);
        if (null == t || b) return null;
        let n = D[t];
        return null == n ? null : n.type === c.PE.VIEW_CHANNEL || n.type === c.PE.VIEW_MOD_REPORT ? n.channelId : null;
    }
    getCurrentSidebarMessageId(e) {
        let t = P(e);
        if (null == t || b) return null;
        let n = D[t];
        return null == n
            ? null
            : n.type === c.PE.VIEW_CHANNEL || n.type === c.PE.VIEW_MOD_REPORT
              ? n.details?.initialMessageId
              : null;
    }
    getCurrentSearchContextId() {
        return M;
    }
}
let V = new F(a.h, {
    SIDEBAR_SET_SELECTED_SEARCH_CONTEXT: function (e) {
        return (M = e.searchContextId), k();
    },
    CHANNEL_TOGGLE_MEMBERS_SECTION: function () {
        b && _._.dispatch(m.jej.SEARCH_RESULTS_CLOSE), O && (O = G(O)), R && (R = G(R)), (C = G(C, !0));
    },
    USER_PROFILE_SIDEBAR_TOGGLE_SECTION: function () {
        L || _._.dispatch(m.jej.SEARCH_RESULTS_CLOSE), (L = G(L, !0));
    },
    CHANNEL_TOGGLE_SUMMARIES_SECTION: function () {
        C && (C = G(C)), R && (R = G(R)), (O = G(O, !0));
    },
    CHANNEL_TOGGLE_CONVERSATIONS_SECTION: function () {
        b && _._.dispatch(m.jej.SEARCH_RESULTS_CLOSE), (C = !1), (O = !1), (R = G(R, !0));
    },
    CHANNEL_OPEN_CONVERSATIONS_SECTION: function () {
        return !R && (b && _._.dispatch(m.jej.SEARCH_RESULTS_CLOSE), (C = !1), (O = !1), (R = !0), (y = !1), !0);
    },
    SIDEBAR_VIEW_CHANNEL: function (e) {
        let { sidebarType: t, baseChannelId: n, channelId: i, details: r } = e;
        b = !1;
        let a = P(n);
        if (null == a) return !1;
        let s = { type: t, channelId: i, details: r };
        return t === c.PE.VIEW_MOD_REPORT && (s = { ...s, baseChannelId: n }), (D[a] = s), !0;
    },
    SIDEBAR_VIEW_GUILD: function (e) {
        let { sidebarType: t, guildId: n, baseChannelId: i, details: r } = e;
        b = !1;
        let a = P(i);
        return null != a && ((v[n] = { type: t, baseChannelId: a, guildId: n, details: r }), !0);
    },
    SIDEBAR_CREATE_THREAD: function (e) {
        let { parentChannelId: t, parentMessageId: n, location: i } = e;
        b = !1;
        let r = P(t);
        null != r && (D[r] = { type: c.PE.CREATE_THREAD, parentChannelId: t, parentMessageId: n, location: i });
    },
    SIDEBAR_CLOSE: function (e) {
        let { baseChannelId: t } = e,
            n = P(t);
        null != n && delete D[n];
    },
    SIDEBAR_CLOSE_GUILD: function (e) {
        let { guildId: t } = e;
        return null != v[t] && (delete v[t], !0);
    },
    FRIENDS_SIDEBAR_SET_COLLAPSED: function (e) {
        let { collapsed: t } = e;
        if (((y = !t), !t)) {
            let e = f.Ay.getChannelId();
            null != e && delete D[e], b && (_._.dispatch(m.jej.SEARCH_RESULTS_CLOSE), (b = !1));
        }
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e,
            n = !1;
        for (let e in (t.id in D && (delete D[t.id], (n = !0)), D)) {
            let i = D[e];
            null != i && U(i) && i.channelId === t.id && (delete D[e], (n = !0));
        }
        return n;
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t, messageId: n } = e,
            r = !1;
        if ((i.Fr && C && ((C = !1), (O = !1), (R = !1), (r = !0)), null == t || null == n)) return r;
        let a = D[t];
        if (a?.type === c.PE.VIEW_CHANNEL && a.channelId === t) return r;
        let s = A.A.getChannel(t);
        return null != s && (0, u.ZV)(s.type)
            ? ((D[t] = { type: c.PE.VIEW_CHANNEL, channelId: t, details: { type: c.kk.CHAT, initialMessageId: n } }),
              !0)
            : r;
    },
    THREAD_CREATE: function (e) {
        let { channel: t } = e;
        if (t.ownerId === T.default.getCurrentUser()?.id) return !1;
        let n = D[t.parent_id];
        null != n &&
            n.type === c.PE.CREATE_THREAD &&
            n.parentMessageId === E.default.castChannelIdAsMessageId(t.id) &&
            (D[t.parent_id] = { type: c.PE.VIEW_CHANNEL, channelId: t.id, details: { type: c.kk.CHAT } });
    },
    THREAD_DELETE: function (e) {
        let { channel: t } = e,
            n = D[t.parent_id];
        if (!(null != n && U(n)) || n.channelId !== t.id) return !1;
        delete D[t.parent_id];
    },
});
