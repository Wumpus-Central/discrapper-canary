let l, i, s, r, a, o;
n.d(t, { Z: () => P }), n(388685), n(642613);
var u,
    d,
    c = n(442837),
    g = n(570140),
    h = n(559310),
    m = n(823385),
    p = n(752048),
    v = n(823379),
    I = n(971130),
    x = n(592125),
    f = n(496675),
    N = n(699516),
    _ = n(981631),
    j = n(245335);
let S = new Set(),
    b = [],
    E = new Map(),
    y = {
        numFriends: 0,
        numDms: 0,
        numGroupDms: 0,
        numChannels: 0,
    };
function T(e) {
    let { isFriendsInVCInvitesEnabled: t } = (0, h.s6)({
            guildId: null == s ? void 0 : s.id,
            location: "InviteSuggestionsStore",
            autoTrackExposure: !1,
        }),
        n = new Set(),
        l = (null == r ? void 0 : r.type) === _.d4z.GUILD_VOICE,
        i = null;
    null == s || o === j.Iq.EMBEDDED_APPLICATION || (t && l) || (i = s.id);
    let a = (0, I.rh)(S, i);
    for (let e of (null == a || N.Z.isBlockedOrIgnored(a.id) || n.add(a.id), p.Z.getUserAffinities()))
        n.add(e.otherUserId);
    let u = new Set();
    return (
        o === j.Iq.EMBEDDED_APPLICATION &&
            m.Z.getChannelHistory()
                .map((e) => x.Z.getChannel(e))
                .filter(v.lm)
                .filter((e) => e.type === _.d4z.GUILD_TEXT)
                .filter((e) => f.Z.can(_.Plq.SEND_MESSAGES, e))
                .slice(0, 3)
                .forEach((e) => u.add(e.id)),
        (0, I.an)({
            query: e,
            omitUserIds: S,
            suggestedUserIds: n,
            maxRowsWithoutQuery: 100,
            omitGuildId: i,
            suggestedChannelIds: u,
            inviteTargetType: o,
        })
    );
}
function O(e) {
    (b = e),
        (E = new Map()),
        e.forEach((e, t) => {
            E.set(e, { index: t });
        });
}
class C extends (u = c.ZP.Store) {
    initialize() {
        this.waitFor(N.Z, p.Z);
    }
    getInviteSuggestionRows() {
        return b;
    }
    getTotalSuggestionsCount() {
        return l;
    }
    getInitialCounts() {
        return y;
    }
    getSelectedInviteMetadata(e) {
        let t = E.get(e),
            n = p.Z.getUserAffinities().map((e) => e.otherUserId);
        if (null != t)
            return {
                rowNum: t.index,
                isAffinitySuggestion: e.isSuggested,
                numTotal: b.length,
                numAffinityConnections: n.length,
                isFiltered: i,
            };
    }
}
(d = "displayName") in C
    ? Object.defineProperty(C, d, {
          value: "InviteSuggestionsStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (C[d] = "InviteSuggestionsStore");
let P = new C(g.Z, {
    LOAD_INVITE_SUGGESTIONS: function (e) {
        let { omitUserIds: t, guild: n, channel: u, applicationId: d, inviteTargetType: c } = e;
        (s = null != u ? n : null),
            (r = u),
            (a = d),
            (o = c),
            (S = new Set([
                ...t,
                ...N.Z.getBlockedOrIgnoredIDs(),
                ...(0, I.Sz)({
                    channel: r,
                    applicationId: a,
                    inviteTargetType: c,
                }),
            ])),
            (i = !1);
        let { rows: g, counts: h } = T("");
        O(g), (y = h), (l = b.length);
    },
    INVITE_SUGGESTIONS_SEARCH: function (e) {
        let { query: t } = e;
        i = "" !== t;
        let { rows: n } = T(t);
        n.sort((e, t) => (null != e.score && null != t.score ? e.score - t.score : 0)), O(n);
    },
});
