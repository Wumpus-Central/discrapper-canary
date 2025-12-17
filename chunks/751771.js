let l, i, s, r, a, o;
n.d(t, { Z: () => M }), n(388685), n(642613);
var u,
    d,
    c = n(442837),
    g = n(570140),
    h = n(823385),
    p = n(752048),
    v = n(823379),
    I = n(971130),
    m = n(592125),
    S = n(496675),
    f = n(699516),
    x = n(981631),
    y = n(245335);
let E = new Set(),
    _ = [],
    b = new Map(),
    C = {
        numFriends: 0,
        numDms: 0,
        numGroupDms: 0,
        numChannels: 0,
    };
function T(e) {
    let t = new Set(),
        n = (null == r ? void 0 : r.type) === x.d4z.GUILD_VOICE,
        l = null;
    null == s || o === y.Iq.EMBEDDED_APPLICATION || n || (l = s.id);
    let i = (0, I.rh)(E, l);
    for (let e of (null == i || f.Z.isBlockedOrIgnored(i.id) || t.add(i.id), p.Z.getUserAffinities()))
        t.add(e.otherUserId);
    let a = new Set();
    return (
        o === y.Iq.EMBEDDED_APPLICATION &&
            h.Z.getChannelHistory()
                .map((e) => m.Z.getChannel(e))
                .filter(v.lm)
                .filter((e) => e.type === x.d4z.GUILD_TEXT)
                .filter((e) => S.Z.can(x.Plq.SEND_MESSAGES, e))
                .slice(0, 3)
                .forEach((e) => a.add(e.id)),
        (0, I.an)({
            query: e,
            omitUserIds: E,
            suggestedUserIds: t,
            maxRowsWithoutQuery: 100,
            omitGuildId: l,
            suggestedChannelIds: a,
            inviteTargetType: o,
        })
    );
}
function A(e) {
    (_ = e),
        (b = new Map()),
        e.forEach((e, t) => {
            b.set(e, { index: t });
        });
}
class N extends (u = c.ZP.Store) {
    initialize() {
        this.waitFor(m.Z, S.Z, h.Z, f.Z, p.Z);
    }
    getInviteSuggestionRows() {
        return _;
    }
    getTotalSuggestionsCount() {
        return l;
    }
    getInitialCounts() {
        return C;
    }
    getSelectedInviteMetadata(e) {
        let t = b.get(e),
            n = p.Z.getUserAffinities().map((e) => e.otherUserId);
        if (null != t)
            return {
                rowNum: t.index,
                isAffinitySuggestion: e.isSuggested,
                numTotal: _.length,
                numAffinityConnections: n.length,
                isFiltered: i,
            };
    }
}
(d = "displayName") in N
    ? Object.defineProperty(N, d, {
          value: "InviteSuggestionsStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (N[d] = "InviteSuggestionsStore");
let M = new N(g.Z, {
    LOAD_INVITE_SUGGESTIONS: function (e) {
        let { omitUserIds: t, guild: n, channel: u, applicationId: d, inviteTargetType: c } = e;
        (s = null != u ? n : null),
            (r = u),
            (a = d),
            (o = c),
            (E = new Set([
                ...t,
                ...f.Z.getBlockedOrIgnoredIDs(),
                ...(0, I.Sz)({
                    channel: r,
                    applicationId: a,
                    inviteTargetType: c,
                }),
            ])),
            (i = !1);
        let { rows: g, counts: h } = T("");
        A(g), (C = h), (l = _.length);
    },
    INVITE_SUGGESTIONS_SEARCH: function (e) {
        let { query: t } = e;
        i = "" !== t;
        let { rows: n } = T(t);
        n.sort((e, t) => (null != e.score && null != t.score ? e.score - t.score : 0)), A(n);
    },
});
