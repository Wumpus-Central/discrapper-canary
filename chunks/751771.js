let l, i, r, s, a, o;
(n.d(t, { Z: () => P }), n(388685), n(642613));
var u,
    d,
    c,
    h = n(442837),
    g = n(570140),
    m = n(823385),
    p = n(752048),
    v = n(823379),
    I = n(971130),
    x = n(592125),
    f = n(496675),
    j = n(699516),
    N = n(981631),
    _ = n(245335);
let E = new Set(),
    S = [],
    b = new Map(),
    T = {
        numFriends: 0,
        numDms: 0,
        numGroupDms: 0,
        numChannels: 0
    };
function O(e) {
    let t = new Set(),
        n = null == r || o === _.Iq.EMBEDDED_APPLICATION ? void 0 : r.id,
        l = (0, I.rh)(E, n);
    for (let e of (null == l || j.Z.isBlockedOrIgnored(l.id) || t.add(l.id), p.Z.getUserAffinities())) t.add(e.otherUserId);
    let i = new Set();
    return (
        o === _.Iq.EMBEDDED_APPLICATION &&
            m.Z.getChannelHistory()
                .map((e) => x.Z.getChannel(e))
                .filter(v.lm)
                .filter((e) => e.type === N.d4z.GUILD_TEXT)
                .filter((e) => f.Z.can(N.Plq.SEND_MESSAGES, e))
                .slice(0, 3)
                .forEach((e) => i.add(e.id)),
        (0, I.an)({
            query: e,
            omitUserIds: E,
            suggestedUserIds: t,
            maxRowsWithoutQuery: 100,
            omitGuildId: n,
            suggestedChannelIds: i,
            inviteTargetType: o
        })
    );
}
function y(e) {
    ((S = e),
        (b = new Map()),
        e.forEach((e, t) => {
            b.set(e, { index: t });
        }));
}
class C extends (u = h.ZP.Store) {
    initialize() {
        this.waitFor(j.Z, p.Z);
    }
    getInviteSuggestionRows() {
        return S;
    }
    getTotalSuggestionsCount() {
        return l;
    }
    getInitialCounts() {
        return T;
    }
    getSelectedInviteMetadata(e) {
        let t = b.get(e),
            n = p.Z.getUserAffinities().map((e) => e.otherUserId);
        return null != t
            ? {
                  rowNum: t.index,
                  isAffinitySuggestion: e.isSuggested,
                  numTotal: S.length,
                  numAffinityConnections: n.length,
                  isFiltered: i
              }
            : null;
    }
}
((c = 'InviteSuggestionsStore'),
    (d = 'displayName') in C
        ? Object.defineProperty(C, d, {
              value: c,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (C[d] = c));
let P = new C(g.Z, {
    LOAD_INVITE_SUGGESTIONS: function (e) {
        let { omitUserIds: t, guild: n, channel: u, applicationId: d, inviteTargetType: c } = e;
        ((r = null != u ? n : null),
            (s = u),
            (a = d),
            (o = c),
            (E = new Set([
                ...t,
                ...j.Z.getBlockedOrIgnoredIDs(),
                ...(0, I.Sz)({
                    channel: s,
                    applicationId: a,
                    inviteTargetType: c
                })
            ])),
            (i = !1));
        let { rows: h, counts: g } = O('');
        (y(h), (T = g), (l = S.length));
    },
    INVITE_SUGGESTIONS_SEARCH: function (e) {
        let { query: t } = e;
        i = '' !== t;
        let { rows: n } = O(t);
        (n.sort((e, t) => (null != e.score && null != t.score ? e.score - t.score : 0)), y(n));
    }
});
