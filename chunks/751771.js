let i, l, s, a, r, o;
n.d(t, { Z: () => Z }), n(388685), n(642613);
var d,
    u,
    c = n(442837),
    g = n(570140),
    h = n(559310),
    m = n(823385),
    v = n(752048),
    p = n(823379),
    x = n(971130),
    I = n(592125),
    S = n(496675),
    f = n(699516),
    E = n(981631),
    y = n(245335);
let C = new Set(),
    _ = [],
    N = new Map(),
    T = {
        numFriends: 0,
        numDms: 0,
        numGroupDms: 0,
        numChannels: 0,
    };
function b(e) {
    let { isFriendsInVCInvitesEnabled: t } = (0, h.s6)({
            guildId: null == s ? void 0 : s.id,
            location: "InviteSuggestionsStore",
            autoTrackExposure: !1,
        }),
        n = new Set(),
        i = (null == a ? void 0 : a.type) === E.d4z.GUILD_VOICE,
        l = null;
    null == s || o === y.Iq.EMBEDDED_APPLICATION || (t && i) || (l = s.id);
    let r = (0, x.rh)(C, l);
    for (let e of (null == r || f.Z.isBlockedOrIgnored(r.id) || n.add(r.id), v.Z.getUserAffinities()))
        n.add(e.otherUserId);
    let d = new Set();
    return (
        o === y.Iq.EMBEDDED_APPLICATION &&
            m.Z.getChannelHistory()
                .map((e) => I.Z.getChannel(e))
                .filter(p.lm)
                .filter((e) => e.type === E.d4z.GUILD_TEXT)
                .filter((e) => S.Z.can(E.Plq.SEND_MESSAGES, e))
                .slice(0, 3)
                .forEach((e) => d.add(e.id)),
        (0, x.an)({
            query: e,
            omitUserIds: C,
            suggestedUserIds: n,
            maxRowsWithoutQuery: 100,
            omitGuildId: l,
            suggestedChannelIds: d,
            inviteTargetType: o,
        })
    );
}
function j(e) {
    (_ = e),
        (N = new Map()),
        e.forEach((e, t) => {
            N.set(e, { index: t });
        });
}
class A extends (d = c.ZP.Store) {
    initialize() {
        this.waitFor(f.Z, v.Z);
    }
    getInviteSuggestionRows() {
        return _;
    }
    getTotalSuggestionsCount() {
        return i;
    }
    getInitialCounts() {
        return T;
    }
    getSelectedInviteMetadata(e) {
        let t = N.get(e),
            n = v.Z.getUserAffinities().map((e) => e.otherUserId);
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
(u = "displayName") in A
    ? Object.defineProperty(A, u, {
          value: "InviteSuggestionsStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (A[u] = "InviteSuggestionsStore");
let Z = new A(g.Z, {
    LOAD_INVITE_SUGGESTIONS: function (e) {
        let { omitUserIds: t, guild: n, channel: d, applicationId: u, inviteTargetType: c } = e;
        (s = null != d ? n : null),
            (a = d),
            (r = u),
            (o = c),
            (C = new Set([
                ...t,
                ...f.Z.getBlockedOrIgnoredIDs(),
                ...(0, x.Sz)({
                    channel: a,
                    applicationId: r,
                    inviteTargetType: c,
                }),
            ])),
            (l = !1);
        let { rows: g, counts: h } = b("");
        j(g), (T = h), (i = _.length);
    },
    INVITE_SUGGESTIONS_SEARCH: function (e) {
        let { query: t } = e;
        l = "" !== t;
        let { rows: n } = b(t);
        n.sort((e, t) => (null != e.score && null != t.score ? e.score - t.score : 0)), j(n);
    },
});
