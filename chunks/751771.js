let i, l, s, r, a, o;
n.d(t, { Z: () => M }), n(388685), n(642613);
var u,
    d,
    c = n(442837),
    g = n(570140),
    h = n(559310),
    v = n(823385),
    p = n(752048),
    I = n(823379),
    m = n(971130),
    x = n(592125),
    S = n(496675),
    f = n(699516),
    E = n(981631),
    y = n(245335);
let C = new Set(),
    _ = [],
    T = new Map(),
    b = {
        numFriends: 0,
        numDms: 0,
        numGroupDms: 0,
        numChannels: 0,
    };
function N(e) {
    let { isFriendsInVCInvitesEnabled: t } = (0, h.s6)({
            guildId: null == s ? void 0 : s.id,
            location: "InviteSuggestionsStore",
            autoTrackExposure: !1,
        }),
        n = new Set(),
        i = (null == r ? void 0 : r.type) === E.d4z.GUILD_VOICE,
        l = null;
    null == s || o === y.Iq.EMBEDDED_APPLICATION || (t && i) || (l = s.id);
    let a = (0, m.rh)(C, l);
    for (let e of (null == a || f.Z.isBlockedOrIgnored(a.id) || n.add(a.id), p.Z.getUserAffinities()))
        n.add(e.otherUserId);
    let u = new Set();
    return (
        o === y.Iq.EMBEDDED_APPLICATION &&
            v.Z.getChannelHistory()
                .map((e) => x.Z.getChannel(e))
                .filter(I.lm)
                .filter((e) => e.type === E.d4z.GUILD_TEXT)
                .filter((e) => S.Z.can(E.Plq.SEND_MESSAGES, e))
                .slice(0, 3)
                .forEach((e) => u.add(e.id)),
        (0, m.an)({
            query: e,
            omitUserIds: C,
            suggestedUserIds: n,
            maxRowsWithoutQuery: 100,
            omitGuildId: l,
            suggestedChannelIds: u,
            inviteTargetType: o,
        })
    );
}
function A(e) {
    (_ = e),
        (T = new Map()),
        e.forEach((e, t) => {
            T.set(e, { index: t });
        });
}
class Z extends (u = c.ZP.Store) {
    initialize() {
        this.waitFor(x.Z, S.Z, v.Z, f.Z, p.Z);
    }
    getInviteSuggestionRows() {
        return _;
    }
    getTotalSuggestionsCount() {
        return i;
    }
    getInitialCounts() {
        return b;
    }
    getSelectedInviteMetadata(e) {
        let t = T.get(e),
            n = p.Z.getUserAffinities().map((e) => e.otherUserId);
        if (null != t)
            return {
                rowNum: t.index,
                isAffinitySuggestion: e.isSuggested,
                numTotal: _.length,
                numAffinityConnections: n.length,
                isFiltered: l,
            };
    }
}
(d = "displayName") in Z
    ? Object.defineProperty(Z, d, {
          value: "InviteSuggestionsStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (Z[d] = "InviteSuggestionsStore");
let M = new Z(g.Z, {
    LOAD_INVITE_SUGGESTIONS: function (e) {
        let { omitUserIds: t, guild: n, channel: u, applicationId: d, inviteTargetType: c } = e;
        (s = null != u ? n : null),
            (r = u),
            (a = d),
            (o = c),
            (C = new Set([
                ...t,
                ...f.Z.getBlockedOrIgnoredIDs(),
                ...(0, m.Sz)({
                    channel: r,
                    applicationId: a,
                    inviteTargetType: c,
                }),
            ])),
            (l = !1);
        let { rows: g, counts: h } = N("");
        A(g), (b = h), (i = _.length);
    },
    INVITE_SUGGESTIONS_SEARCH: function (e) {
        let { query: t } = e;
        l = "" !== t;
        let { rows: n } = N(t);
        n.sort((e, t) => (null != e.score && null != t.score ? e.score - t.score : 0)), A(n);
    },
});
