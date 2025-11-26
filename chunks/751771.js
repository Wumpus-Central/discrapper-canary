let i, l, s, r, a, o;
n.d(t, { Z: () => P }), n(388685), n(642613);
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
    x = n(699516),
    f = n(981631),
    y = n(245335);
let E = new Set(),
    _ = [],
    C = new Map(),
    T = {
        numFriends: 0,
        numDms: 0,
        numGroupDms: 0,
        numChannels: 0,
    };
function b(e) {
    let t = new Set(),
        n = (null == r ? void 0 : r.type) === f.d4z.GUILD_VOICE,
        i = null;
    null == s || o === y.Iq.EMBEDDED_APPLICATION || n || (i = s.id);
    let l = (0, I.rh)(E, i);
    for (let e of (null == l || x.Z.isBlockedOrIgnored(l.id) || t.add(l.id), p.Z.getUserAffinities()))
        t.add(e.otherUserId);
    let a = new Set();
    return (
        o === y.Iq.EMBEDDED_APPLICATION &&
            h.Z.getChannelHistory()
                .map((e) => m.Z.getChannel(e))
                .filter(v.lm)
                .filter((e) => e.type === f.d4z.GUILD_TEXT)
                .filter((e) => S.Z.can(f.Plq.SEND_MESSAGES, e))
                .slice(0, 3)
                .forEach((e) => a.add(e.id)),
        (0, I.an)({
            query: e,
            omitUserIds: E,
            suggestedUserIds: t,
            maxRowsWithoutQuery: 100,
            omitGuildId: i,
            suggestedChannelIds: a,
            inviteTargetType: o,
        })
    );
}
function N(e) {
    (_ = e),
        (C = new Map()),
        e.forEach((e, t) => {
            C.set(e, { index: t });
        });
}
class A extends (u = c.ZP.Store) {
    initialize() {
        this.waitFor(m.Z, S.Z, h.Z, x.Z, p.Z);
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
        let t = C.get(e),
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
(d = "displayName") in A
    ? Object.defineProperty(A, d, {
          value: "InviteSuggestionsStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (A[d] = "InviteSuggestionsStore");
let P = new A(g.Z, {
    LOAD_INVITE_SUGGESTIONS: function (e) {
        let { omitUserIds: t, guild: n, channel: u, applicationId: d, inviteTargetType: c } = e;
        (s = null != u ? n : null),
            (r = u),
            (a = d),
            (o = c),
            (E = new Set([
                ...t,
                ...x.Z.getBlockedOrIgnoredIDs(),
                ...(0, I.Sz)({
                    channel: r,
                    applicationId: a,
                    inviteTargetType: c,
                }),
            ])),
            (l = !1);
        let { rows: g, counts: h } = b("");
        N(g), (T = h), (i = _.length);
    },
    INVITE_SUGGESTIONS_SEARCH: function (e) {
        let { query: t } = e;
        l = "" !== t;
        let { rows: n } = b(t);
        n.sort((e, t) => (null != e.score && null != t.score ? e.score - t.score : 0)), N(n);
    },
});
