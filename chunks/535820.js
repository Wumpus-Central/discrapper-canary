let i, r, s, o, l, u;
var a = n(294630),
    d = n(855986),
    c = n(73153),
    I = n(989133),
    S = n(174768),
    A = n(812020),
    f = n(403362),
    g = n(735547),
    E = n(734057),
    h = n(949744),
    p = n(696451),
    m = n(576705),
    _ = n(994500),
    D = n(652215);
let T = new Set(),
    y = [],
    U = new Map(),
    w = { numFriends: 0, numDms: 0, numGroupDms: 0, numChannels: 0 },
    C = "";
function N(e, t) {
    return null == e.score || null == t.score ? 0 : (0, I.A)({ score: e.score }, { score: t.score });
}
function G() {
    return null == s || u === a.y.EMBEDDED_APPLICATION || o?.type === D.rbe.GUILD_VOICE ? null : s.id;
}
function O() {
    var e;
    r = "" !== C;
    let { rows: t, counts: n } = (function (e) {
        let t = new Set(),
            n = G(),
            i = (0, g.oW)(T, n);
        for (let e of (null == i || _.A.isBlockedOrIgnored(i.id) || t.add(i.id), A.A.getUserAffinities()))
            t.add(e.otherUserId);
        let r = new Set();
        return (
            u === a.y.EMBEDDED_APPLICATION &&
                S.A.getChannelHistory()
                    .map((e) => E.A.getChannel(e))
                    .filter(f.Vq)
                    .filter((e) => e.type === D.rbe.GUILD_TEXT)
                    .filter((e) => m.A.can(D.xBc.SEND_MESSAGES, e))
                    .slice(0, 3)
                    .forEach((e) => r.add(e.id)),
            (0, g.Us)({
                query: e,
                omitUserIds: T,
                suggestedUserIds: t,
                maxRowsWithoutQuery: 100,
                omitGuildId: n,
                suggestedChannelIds: r,
                inviteTargetType: u,
            })
        );
    })(C);
    return (
        r && t.sort(N),
        (y = e = t),
        (U = new Map()),
        e.forEach((e, t) => {
            U.set(e, { index: t });
        }),
        (function (e) {
            let t = G();
            if (null != t)
                for (let n of e) (n.type === g.OK.DM || n.type === g.OK.FRIEND) && h.A.requestMember(t, n.item.id);
        })(t),
        n
    );
}
class M extends d.Ay.Store {
    static displayName = "InviteSuggestionsStore";
    initialize() {
        this.waitFor(E.A, h.A, p.Ay, m.A, S.A, _.A, A.A);
    }
    getInviteSuggestionRows() {
        return y;
    }
    getTotalSuggestionsCount() {
        return i;
    }
    getInitialCounts() {
        return w;
    }
    getSelectedInviteMetadata(e) {
        let t = U.get(e),
            n = A.A.getUserAffinities().map((e) => e.otherUserId);
        if (null != t)
            return {
                rowNum: t.index,
                isAffinitySuggestion: e.isSuggested,
                numTotal: y.length,
                numAffinityConnections: n.length,
                isFiltered: r,
            };
    }
}
let B = new M(c.h, {
    LOAD_INVITE_SUGGESTIONS: function (e) {
        let { omitUserIds: t, guild: n, channel: r, applicationId: a, inviteTargetType: d } = e;
        ((s = n), (o = r), (l = a), (u = d), (C = ""));
        let c = _.A.getBlockedOrIgnoredIDs(),
            I = (0, g.Uo)({ channel: o, applicationId: l, inviteTargetType: d });
        ((T = new Set([...t, ...c, ...I])), (w = O()), (i = y.length));
    },
    INVITE_SUGGESTIONS_SEARCH: function (e) {
        let { query: t } = e;
        ((C = t), O());
    },
    GUILD_MEMBERS_CHUNK_BATCH: function (e) {
        let { chunks: t } = e,
            n = G();
        if (null == n) return !1;
        let i = new Set(y.map((e) => e.item.id));
        if (!t.some((e) => e.guildId === n && e.members.some((e) => i.has(e.user.id)))) return !1;
        O();
    },
});
n.d(t, {}, { A: B });
