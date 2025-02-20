let n, a, r, o, l, s, c;
i.d(t, { Z: () => T }), i(47120);
var d,
    u,
    m,
    p = i(442837),
    f = i(570140),
    _ = i(823385),
    I = i(814443),
    y = i(823379),
    g = i(971130),
    h = i(592125),
    v = i(496675),
    x = i(699516),
    N = i(981631),
    b = i(245335);
let w = new Set(),
    O = [],
    S = new Map();
function j(e) {
    let t = new Set(),
        i = null == o || c === b.Iq.EMBEDDED_APPLICATION ? void 0 : o.id,
        n = (0, g.rh)(w, i);
    for (let e of (null == n || x.Z.isBlocked(n.id) || t.add(n.id), I.Z.getUserAffinitiesUserIds())) t.add(e);
    let a = new Set();
    return (
        c === b.Iq.EMBEDDED_APPLICATION &&
            _.Z.getChannelHistory()
                .map((e) => h.Z.getChannel(e))
                .filter(y.lm)
                .filter((e) => e.type === N.d4z.GUILD_TEXT)
                .filter((e) => v.Z.can(N.Plq.SEND_MESSAGES, e))
                .slice(0, 3)
                .forEach((e) => a.add(e.id)),
        (0, g.an)({
            query: e,
            omitUserIds: w,
            suggestedUserIds: t,
            maxRowsWithoutQuery: 100,
            omitGuildId: i,
            suggestedChannelIds: a,
            inviteTargetType: c
        })
    );
}
function C(e) {
    (O = e),
        (S = new Map()),
        e.forEach((e, t) => {
            S.set(e, { index: t });
        });
}
class E extends (d = p.ZP.Store) {
    initialize() {
        this.waitFor(x.Z, I.Z);
    }
    getInviteSuggestionRows() {
        return O;
    }
    getTotalSuggestionsCount() {
        return a;
    }
    getInitialCounts() {
        return n;
    }
    getSelectedInviteMetadata(e) {
        let t = S.get(e),
            i = I.Z.getUserAffinitiesUserIds();
        return null != t
            ? {
                  rowNum: t.index,
                  isAffinitySuggestion: e.isSuggested,
                  numTotal: O.length,
                  numAffinityConnections: i.size,
                  isFiltered: r
              }
            : null;
    }
}
(m = 'InviteSuggestionsStore'),
    (u = 'displayName') in E
        ? Object.defineProperty(E, u, {
              value: m,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (E[u] = m);
let T = new E(f.Z, {
    LOAD_INVITE_SUGGESTIONS: function (e) {
        let { omitUserIds: t, guild: i, channel: d, applicationId: u, inviteTargetType: m } = e;
        (o = null != d ? i : null),
            (l = d),
            (s = u),
            (c = m),
            (w = new Set([
                ...t,
                ...x.Z.getBlockedOrIgnoredIDs(),
                ...(0, g.Sz)({
                    channel: l,
                    applicationId: s,
                    inviteTargetType: m
                })
            ])),
            (r = !1);
        let { rows: p, counts: f } = j('');
        C(p), (n = f), (a = O.length);
    },
    INVITE_SUGGESTIONS_SEARCH: function (e) {
        let { query: t } = e;
        r = '' !== t;
        let { rows: i } = j(t);
        C(i);
    }
});
