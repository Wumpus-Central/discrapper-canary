"use strict";
n.d(t, { Ay: () => w, JU: () => v, fe: () => m });
var i = n(607399),
    r = n(17928),
    a = n(228366),
    s = n(736056),
    l = n(517381),
    o = n(940382),
    d = n(625494),
    c = n(935208),
    u = n(734057),
    _ = n(71393),
    E = n(576705),
    A = n(309010),
    h = n(967198),
    I = n(287809),
    f = n(652215),
    p = n(746080),
    T = n(818348);
let m = "message_requests",
    g = !1,
    S = !1,
    N = !1,
    C = !0,
    R = {},
    O = {},
    L = !1,
    y = null;
function D(e) {
    if (null == e) return null;
    if ((0, p.jq)(e)) {
        let t = h.A.getGuildId();
        return null == t ? null : (0, p.Gr)(e, t);
    }
    return e;
}
function v(e) {
    return [o.PE.VIEW_CHANNEL, o.PE.VIEW_THREAD, o.PE.VIEW_MESSAGE_REQUEST, o.PE.VIEW_MOD_REPORT].includes(e.type);
}
function b(e) {
    let t = !1;
    L && ((L = !1), (t = !0));
    let n = D(A.Ay.getChannelId());
    return null != n && n in R && (delete R[n], (t = !0)), t && e ? e : !e;
}
function M() {
    let e = !1;
    for (let t in R) {
        let n = R[t];
        if (n.type === o.PE.VIEW_THREAD || n.type === o.PE.VIEW_CHANNEL) {
            let i = u.A.getChannel(n.channelId);
            (null != i && E.A.can(T.xB.VIEW_CHANNEL, i)) || (delete R[t], (e = !0));
        }
    }
    return e;
}
function P() {
    let e = null != y && l.A.hasSearchState(y);
    if (e === L) return !1;
    L = e;
}
class U extends r.Ay.PersistedStore {
    static displayName = "ChannelSectionStore";
    static persistKey = "ChannelSectionStore2";
    initialize(e) {
        null != e &&
            ((g = e.isMembersOpen ?? !1),
            (S = e.isSummariesOpen ?? !1),
            (C = e.isProfileOpen ?? !0),
            (R = e.sidebars ?? {}),
            (O = e.guildSidebars ?? {})),
            this.syncWith([l.A], P),
            this.syncWith([E.A], M),
            this.waitFor(u.A, s.A, _.A, E.A, l.A, A.Ay, h.A, I.default);
    }
    getState() {
        return { isMembersOpen: g, isSummariesOpen: S, isProfileOpen: C, sidebars: R, guildSidebars: O };
    }
    getSection(e, t) {
        if (L) return f.YvQ.SEARCH;
        let n = D(e);
        return null != n && null != R[n]
            ? f.YvQ.SIDEBAR_CHAT
            : t && C
              ? f.YvQ.PROFILE
              : S
                ? f.YvQ.SUMMARIES
                : g
                  ? f.YvQ.MEMBERS
                  : N
                    ? f.YvQ.CONVERSATIONS
                    : f.YvQ.NONE;
    }
    getSidebarState(e) {
        let t = D(e);
        return null == t ? void 0 : R[t];
    }
    getGuildSidebarState(e) {
        return null == e ? void 0 : O[e];
    }
    getCurrentSidebarChannelId(e) {
        let t = D(e);
        if (null == t || L) return null;
        let n = R[t];
        return null == n
            ? null
            : n.type === o.PE.VIEW_THREAD || n.type === o.PE.VIEW_CHANNEL || n.type === o.PE.VIEW_MOD_REPORT
              ? n.channelId
              : null;
    }
    getCurrentSidebarMessageId(e) {
        let t = D(e);
        if (null == t || L) return null;
        let n = R[t];
        return null == n
            ? null
            : n.type === o.PE.VIEW_THREAD || n.type === o.PE.VIEW_CHANNEL || n.type === o.PE.VIEW_MOD_REPORT
              ? n.details?.initialMessageId
              : null;
    }
    getCurrentSearchContextId() {
        return y;
    }
}
let w = new U(a.h, {
    SIDEBAR_SET_SELECTED_SEARCH_CONTEXT: function (e) {
        return (y = e.searchContextId), P();
    },
    CHANNEL_TOGGLE_MEMBERS_SECTION: function () {
        L && d._.dispatch(f.jej.SEARCH_RESULTS_CLOSE), S && (S = b(S)), N && (N = b(N)), (g = b(g));
    },
    USER_PROFILE_SIDEBAR_TOGGLE_SECTION: function () {
        C || d._.dispatch(f.jej.SEARCH_RESULTS_CLOSE), (C = b(C));
    },
    CHANNEL_TOGGLE_SUMMARIES_SECTION: function () {
        g && (g = b(g)), N && (N = b(N)), (S = b(S));
    },
    CHANNEL_TOGGLE_CONVERSATIONS_SECTION: function () {
        L && d._.dispatch(f.jej.SEARCH_RESULTS_CLOSE), (g = !1), (S = !1), (N = b(N));
    },
    CHANNEL_OPEN_CONVERSATIONS_SECTION: function () {
        return !N && (L && d._.dispatch(f.jej.SEARCH_RESULTS_CLOSE), (g = !1), (S = !1), (N = !0), !0);
    },
    SIDEBAR_VIEW_CHANNEL: function (e) {
        let { sidebarType: t, baseChannelId: n, channelId: i, details: r } = e;
        L = !1;
        let a = D(n);
        if (null == a) return !1;
        let s = { type: t, channelId: i, details: r };
        return t === o.PE.VIEW_MOD_REPORT && (s = { ...s, baseChannelId: n }), (R[a] = s), !0;
    },
    SIDEBAR_VIEW_GUILD: function (e) {
        let { sidebarType: t, guildId: n, baseChannelId: i, details: r } = e;
        L = !1;
        let a = D(i);
        return null != a && ((O[n] = { type: t, baseChannelId: a, guildId: n, details: r }), !0);
    },
    SIDEBAR_CREATE_THREAD: function (e) {
        let { parentChannelId: t, parentMessageId: n, location: i } = e;
        L = !1;
        let r = D(t);
        null != r && (R[r] = { type: o.PE.CREATE_THREAD, parentChannelId: t, parentMessageId: n, location: i });
    },
    SIDEBAR_CLOSE: function (e) {
        let { baseChannelId: t } = e,
            n = D(t);
        null != n && delete R[n];
    },
    SIDEBAR_CLOSE_GUILD: function (e) {
        let { guildId: t } = e;
        return null != O[t] && (delete O[t], !0);
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
        i.Fr && g && ((g = !1), (S = !1), (N = !1));
    },
    THREAD_CREATE: function (e) {
        let { channel: t } = e;
        if (t.ownerId === I.default.getCurrentUser()?.id) return !1;
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
