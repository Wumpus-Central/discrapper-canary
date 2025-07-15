let a, i, r, l, s, o;
(n.d(t, { Z: () => x }), n(388685), n(642613));
var c,
    d,
    u,
    m = n(442837),
    p = n(570140),
    f = n(823385),
    g = n(752048),
    b = n(823379),
    h = n(971130),
    I = n(592125),
    y = n(496675),
    w = n(699516),
    _ = n(981631),
    S = n(245335);
let v = new Set(),
    E = [],
    O = new Map(),
    T = {
        numFriends: 0,
        numDms: 0,
        numGroupDms: 0,
        numChannels: 0
    };
function N(e) {
    let t = new Set(),
        n = null == r || o === S.Iq.EMBEDDED_APPLICATION ? void 0 : r.id,
        a = (0, h.rh)(v, n);
    for (let e of (null == a || w.Z.isBlockedOrIgnored(a.id) || t.add(a.id), g.Z.getUserAffinities())) t.add(e.otherUserId);
    let i = new Set();
    return (
        o === S.Iq.EMBEDDED_APPLICATION &&
            f.Z.getChannelHistory()
                .map((e) => I.Z.getChannel(e))
                .filter(b.lm)
                .filter((e) => e.type === _.d4z.GUILD_TEXT)
                .filter((e) => y.Z.can(_.Plq.SEND_MESSAGES, e))
                .slice(0, 3)
                .forEach((e) => i.add(e.id)),
        (0, h.an)({
            query: e,
            omitUserIds: v,
            suggestedUserIds: t,
            maxRowsWithoutQuery: 100,
            omitGuildId: n,
            suggestedChannelIds: i,
            inviteTargetType: o
        })
    );
}
function C(e) {
    ((E = e),
        (O = new Map()),
        e.forEach((e, t) => {
            O.set(e, { index: t });
        }));
}
class j extends (c = m.ZP.Store) {
    initialize() {
        this.waitFor(w.Z, g.Z);
    }
    getInviteSuggestionRows() {
        return E;
    }
    getTotalSuggestionsCount() {
        return a;
    }
    getInitialCounts() {
        return T;
    }
    getSelectedInviteMetadata(e) {
        let t = O.get(e),
            n = g.Z.getUserAffinities().map((e) => e.otherUserId);
        return null != t
            ? {
                  rowNum: t.index,
                  isAffinitySuggestion: e.isSuggested,
                  numTotal: E.length,
                  numAffinityConnections: n.length,
                  isFiltered: i
              }
            : null;
    }
}
((u = 'InviteSuggestionsStore'),
    (d = 'displayName') in j
        ? Object.defineProperty(j, d, {
              value: u,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (j[d] = u));
let x = new j(p.Z, {
    LOAD_INVITE_SUGGESTIONS: function (e) {
        let { omitUserIds: t, guild: n, channel: c, applicationId: d, inviteTargetType: u } = e;
        ((r = null != c ? n : null),
            (l = c),
            (s = d),
            (o = u),
            (v = new Set([
                ...t,
                ...w.Z.getBlockedOrIgnoredIDs(),
                ...(0, h.Sz)({
                    channel: l,
                    applicationId: s,
                    inviteTargetType: u
                })
            ])),
            (i = !1));
        let { rows: m, counts: p } = N('');
        (C(m), (T = p), (a = E.length));
    },
    INVITE_SUGGESTIONS_SEARCH: function (e) {
        let { query: t } = e;
        i = '' !== t;
        let { rows: n } = N(t);
        (n.sort((e, t) => (null != e.score && null != t.score ? e.score - t.score : 0)), C(n));
    }
});
