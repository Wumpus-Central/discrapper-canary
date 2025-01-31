let n, l, a, r, s, o, I;
i.d(t, { Z: () => M }), i(47120);
var u,
    d,
    _,
    c = i(442837),
    T = i(570140),
    N = i(823385),
    m = i(814443),
    S = i(823379),
    E = i(971130),
    O = i(592125),
    f = i(496675),
    g = i(699516),
    p = i(981631),
    P = i(245335);
let h = new Set(),
    D = [],
    x = new Map();
function v(e) {
    let t = new Set(),
        i = null == r || I === P.Iq.EMBEDDED_APPLICATION ? void 0 : r.id,
        n = (0, E.rh)(h, i);
    for (let e of (null == n || g.Z.isBlocked(n.id) || t.add(n.id), m.Z.getUserAffinitiesUserIds())) t.add(e);
    let l = new Set();
    return (
        I === P.Iq.EMBEDDED_APPLICATION &&
            N.Z.getChannelHistory()
                .map((e) => O.Z.getChannel(e))
                .filter(S.lm)
                .filter((e) => e.type === p.d4z.GUILD_TEXT)
                .filter((e) => f.Z.can(p.Plq.SEND_MESSAGES, e))
                .slice(0, 3)
                .forEach((e) => l.add(e.id)),
        (0, E.an)({
            query: e,
            omitUserIds: h,
            suggestedUserIds: t,
            maxRowsWithoutQuery: 100,
            omitGuildId: i,
            suggestedChannelIds: l,
            inviteTargetType: I
        })
    );
}
function C(e) {
    (D = e),
        (x = new Map()),
        e.forEach((e, t) => {
            x.set(e, { index: t });
        });
}
class y extends (u = c.ZP.Store) {
    initialize() {
        this.waitFor(g.Z, m.Z);
    }
    getInviteSuggestionRows() {
        return D;
    }
    getTotalSuggestionsCount() {
        return l;
    }
    getInitialCounts() {
        return n;
    }
    getSelectedInviteMetadata(e) {
        let t = x.get(e),
            i = m.Z.getUserAffinitiesUserIds();
        return null != t
            ? {
                  rowNum: t.index,
                  isAffinitySuggestion: e.isSuggested,
                  numTotal: D.length,
                  numAffinityConnections: i.size,
                  isFiltered: a
              }
            : null;
    }
}
(_ = 'InviteSuggestionsStore'),
    (d = 'displayName') in y
        ? Object.defineProperty(y, d, {
              value: _,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (y[d] = _);
let M = new y(T.Z, {
    LOAD_INVITE_SUGGESTIONS: function (e) {
        let { omitUserIds: t, guild: i, channel: u, applicationId: d, inviteTargetType: _ } = e;
        (r = null != u ? i : null),
            (s = u),
            (o = d),
            (I = _),
            (h = new Set([
                ...t,
                ...g.Z.getBlockedOrIgnoredIDs(),
                ...(0, E.Sz)({
                    channel: s,
                    applicationId: o,
                    inviteTargetType: _
                })
            ])),
            (a = !1);
        let { rows: c, counts: T } = v('');
        C(c), (n = T), (l = D.length);
    },
    INVITE_SUGGESTIONS_SEARCH: function (e) {
        let { query: t } = e;
        a = '' !== t;
        let { rows: i } = v(t);
        C(i);
    }
});
