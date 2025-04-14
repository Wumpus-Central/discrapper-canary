let l, i, r, s, a, o, u;
n.d(t, { Z: () => P }), n(388685);
var d,
    c,
    h,
    g = n(442837),
    m = n(570140),
    p = n(823385),
    v = n(814443),
    x = n(823379),
    I = n(971130),
    N = n(592125),
    f = n(496675),
    j = n(699516),
    _ = n(981631),
    E = n(245335);
let S = new Set(),
    b = [],
    T = new Map();
function O(e) {
    let t = new Set(),
        n = null == s || u === E.Iq.EMBEDDED_APPLICATION ? void 0 : s.id,
        l = (0, I.rh)(S, n);
    for (let e of (null == l || j.Z.isBlocked(l.id) || t.add(l.id), v.Z.getUserAffinitiesUserIds())) t.add(e);
    let i = new Set();
    return (
        u === E.Iq.EMBEDDED_APPLICATION &&
            p.Z.getChannelHistory()
                .map((e) => N.Z.getChannel(e))
                .filter(x.lm)
                .filter((e) => e.type === _.d4z.GUILD_TEXT)
                .filter((e) => f.Z.can(_.Plq.SEND_MESSAGES, e))
                .slice(0, 3)
                .forEach((e) => i.add(e.id)),
        (0, I.an)({
            query: e,
            omitUserIds: S,
            suggestedUserIds: t,
            maxRowsWithoutQuery: 100,
            omitGuildId: n,
            suggestedChannelIds: i,
            inviteTargetType: u
        })
    );
}
function y(e) {
    (b = e),
        (T = new Map()),
        e.forEach((e, t) => {
            T.set(e, { index: t });
        });
}
class C extends (d = g.ZP.Store) {
    initialize() {
        this.waitFor(j.Z, v.Z);
    }
    getInviteSuggestionRows() {
        return b;
    }
    getTotalSuggestionsCount() {
        return i;
    }
    getInitialCounts() {
        return l;
    }
    getSelectedInviteMetadata(e) {
        let t = T.get(e),
            n = v.Z.getUserAffinitiesUserIds();
        return null != t
            ? {
                  rowNum: t.index,
                  isAffinitySuggestion: e.isSuggested,
                  numTotal: b.length,
                  numAffinityConnections: n.size,
                  isFiltered: r
              }
            : null;
    }
}
(h = 'InviteSuggestionsStore'),
    (c = 'displayName') in C
        ? Object.defineProperty(C, c, {
              value: h,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (C[c] = h);
let P = new C(m.Z, {
    LOAD_INVITE_SUGGESTIONS: function (e) {
        let { omitUserIds: t, guild: n, channel: d, applicationId: c, inviteTargetType: h } = e;
        (s = null != d ? n : null),
            (a = d),
            (o = c),
            (u = h),
            (S = new Set([
                ...t,
                ...j.Z.getBlockedOrIgnoredIDs(),
                ...(0, I.Sz)({
                    channel: a,
                    applicationId: o,
                    inviteTargetType: h
                })
            ])),
            (r = !1);
        let { rows: g, counts: m } = O('');
        y(g), (l = m), (i = b.length);
    },
    INVITE_SUGGESTIONS_SEARCH: function (e) {
        let { query: t } = e;
        r = '' !== t;
        let { rows: n } = O(t);
        y(n);
    }
});
