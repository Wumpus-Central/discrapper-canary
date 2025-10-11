let l, i, a, r, s, o;
n.d(t, { Z: () => C }), n(388685), n(642613);
var u,
    c,
    d = n(442837),
    g = n(570140),
    m = n(559310),
    I = n(823385),
    p = n(752048),
    f = n(823379),
    v = n(971130),
    x = n(592125),
    h = n(496675),
    _ = n(699516),
    O = n(981631),
    b = n(245335);
let N = new Set(),
    E = [],
    j = new Map(),
    T = {
        numFriends: 0,
        numDms: 0,
        numGroupDms: 0,
        numChannels: 0,
    };
function S(e) {
    let { isFriendsInVCInvitesEnabled: t } = (0, m.s6)({
            guildId: null == a ? void 0 : a.id,
            location: "InviteSuggestionsStore",
            autoTrackExposure: !1,
        }),
        n = new Set(),
        l = (null == r ? void 0 : r.type) === O.d4z.GUILD_VOICE,
        i = null;
    null == a || o === b.Iq.EMBEDDED_APPLICATION || (t && l) || (i = a.id);
    let s = (0, v.rh)(N, i);
    for (let e of (null == s || _.Z.isBlockedOrIgnored(s.id) || n.add(s.id), p.Z.getUserAffinities()))
        n.add(e.otherUserId);
    let u = new Set();
    return (
        o === b.Iq.EMBEDDED_APPLICATION &&
            I.Z.getChannelHistory()
                .map((e) => x.Z.getChannel(e))
                .filter(f.lm)
                .filter((e) => e.type === O.d4z.GUILD_TEXT)
                .filter((e) => h.Z.can(O.Plq.SEND_MESSAGES, e))
                .slice(0, 3)
                .forEach((e) => u.add(e.id)),
        (0, v.an)({
            query: e,
            omitUserIds: N,
            suggestedUserIds: n,
            maxRowsWithoutQuery: 100,
            omitGuildId: i,
            suggestedChannelIds: u,
            inviteTargetType: o,
        })
    );
}
function P(e) {
    (E = e),
        (j = new Map()),
        e.forEach((e, t) => {
            j.set(e, { index: t });
        });
}
class y extends (u = d.ZP.Store) {
    initialize() {
        this.waitFor(_.Z, p.Z);
    }
    getInviteSuggestionRows() {
        return E;
    }
    getTotalSuggestionsCount() {
        return l;
    }
    getInitialCounts() {
        return T;
    }
    getSelectedInviteMetadata(e) {
        let t = j.get(e),
            n = p.Z.getUserAffinities().map((e) => e.otherUserId);
        if (null != t)
            return {
                rowNum: t.index,
                isAffinitySuggestion: e.isSuggested,
                numTotal: E.length,
                numAffinityConnections: n.length,
                isFiltered: i,
            };
    }
}
(c = "displayName") in y
    ? Object.defineProperty(y, c, {
          value: "InviteSuggestionsStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (y[c] = "InviteSuggestionsStore");
let C = new y(g.Z, {
    LOAD_INVITE_SUGGESTIONS: function (e) {
        let { omitUserIds: t, guild: n, channel: u, applicationId: c, inviteTargetType: d } = e;
        (a = null != u ? n : null),
            (r = u),
            (s = c),
            (o = d),
            (N = new Set([
                ...t,
                ..._.Z.getBlockedOrIgnoredIDs(),
                ...(0, v.Sz)({
                    channel: r,
                    applicationId: s,
                    inviteTargetType: d,
                }),
            ])),
            (i = !1);
        let { rows: g, counts: m } = S("");
        P(g), (T = m), (l = E.length);
    },
    INVITE_SUGGESTIONS_SEARCH: function (e) {
        let { query: t } = e;
        i = "" !== t;
        let { rows: n } = S(t);
        n.sort((e, t) => (null != e.score && null != t.score ? e.score - t.score : 0)), P(n);
    },
});
