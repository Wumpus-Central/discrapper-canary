let i, l, s, r, a, o;
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
    C = n(245335);
let y = new Set(),
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
        i = (null == r ? void 0 : r.type) === E.d4z.GUILD_VOICE,
        l = null;
    null == s || o === C.Iq.EMBEDDED_APPLICATION || (t && i) || (l = s.id);
    let a = (0, x.rh)(y, l);
    for (let e of (null == a || f.Z.isBlockedOrIgnored(a.id) || n.add(a.id), v.Z.getUserAffinities()))
        n.add(e.otherUserId);
    let d = new Set();
    return (
        o === C.Iq.EMBEDDED_APPLICATION &&
            m.Z.getChannelHistory()
                .map((e) => I.Z.getChannel(e))
                .filter(p.lm)
                .filter((e) => e.type === E.d4z.GUILD_TEXT)
                .filter((e) => S.Z.can(E.Plq.SEND_MESSAGES, e))
                .slice(0, 3)
                .forEach((e) => d.add(e.id)),
        (0, x.an)({
            query: e,
            omitUserIds: y,
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
        this.waitFor(I.Z, S.Z, m.Z, f.Z, v.Z);
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
            (r = d),
            (a = u),
            (o = c),
            (y = new Set([
                ...t,
                ...f.Z.getBlockedOrIgnoredIDs(),
                ...(0, x.Sz)({
                    channel: r,
                    applicationId: a,
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
