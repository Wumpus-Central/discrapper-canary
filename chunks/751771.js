let l, i, s, r, a, o, d;
n.d(t, { Z: () => P }), n(47120);
var u,
    c,
    h,
    g = n(442837),
    m = n(570140),
    x = n(823385),
    v = n(814443),
    p = n(823379),
    N = n(971130),
    I = n(592125),
    f = n(496675),
    j = n(699516),
    S = n(981631),
    E = n(245335);
let T = new Set(),
    C = [],
    b = new Map();
function _(e) {
    let t = new Set(),
        n = null == r || d === E.Iq.EMBEDDED_APPLICATION ? void 0 : r.id,
        l = (0, N.rh)(T, n);
    for (let e of (null == l || j.Z.isBlocked(l.id) || t.add(l.id), v.Z.getUserAffinitiesUserIds())) t.add(e);
    let i = new Set();
    return (
        d === E.Iq.EMBEDDED_APPLICATION &&
            x.Z.getChannelHistory()
                .map((e) => I.Z.getChannel(e))
                .filter(p.lm)
                .filter((e) => e.type === S.d4z.GUILD_TEXT)
                .filter((e) => f.Z.can(S.Plq.SEND_MESSAGES, e))
                .slice(0, 3)
                .forEach((e) => i.add(e.id)),
        (0, N.an)({
            query: e,
            omitUserIds: T,
            suggestedUserIds: t,
            maxRowsWithoutQuery: 100,
            omitGuildId: n,
            suggestedChannelIds: i,
            inviteTargetType: d
        })
    );
}
function y(e) {
    (C = e),
        (b = new Map()),
        e.forEach((e, t) => {
            b.set(e, { index: t });
        });
}
class O extends (u = g.ZP.Store) {
    initialize() {
        this.waitFor(j.Z, v.Z);
    }
    getInviteSuggestionRows() {
        return C;
    }
    getTotalSuggestionsCount() {
        return i;
    }
    getInitialCounts() {
        return l;
    }
    getSelectedInviteMetadata(e) {
        let t = b.get(e),
            n = v.Z.getUserAffinitiesUserIds();
        return null != t
            ? {
                  rowNum: t.index,
                  isAffinitySuggestion: e.isSuggested,
                  numTotal: C.length,
                  numAffinityConnections: n.size,
                  isFiltered: s
              }
            : null;
    }
}
(h = 'InviteSuggestionsStore'),
    (c = 'displayName') in O
        ? Object.defineProperty(O, c, {
              value: h,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (O[c] = h);
let P = new O(m.Z, {
    LOAD_INVITE_SUGGESTIONS: function (e) {
        let { omitUserIds: t, guild: n, channel: u, applicationId: c, inviteTargetType: h } = e;
        (r = null != u ? n : null),
            (a = u),
            (o = c),
            (d = h),
            (T = new Set([
                ...t,
                ...j.Z.getBlockedOrIgnoredIDs(),
                ...(0, N.Sz)({
                    channel: a,
                    applicationId: o,
                    inviteTargetType: h
                })
            ])),
            (s = !1);
        let { rows: g, counts: m } = _('');
        y(g), (l = m), (i = C.length);
    },
    INVITE_SUGGESTIONS_SEARCH: function (e) {
        let { query: t } = e;
        s = '' !== t;
        let { rows: n } = _(t);
        y(n);
    }
});
