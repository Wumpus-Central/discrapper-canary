let i, r, a, l, s, o, u;
n(47120);
var I,
    c,
    d,
    _,
    T = n(442837),
    N = n(570140),
    m = n(823385),
    S = n(814443),
    f = n(823379),
    O = n(971130),
    E = n(592125),
    g = n(496675),
    p = n(699516),
    P = n(981631),
    h = n(245335);
let D = new Set(),
    C = [],
    v = new Map();
function A(e) {
    let t = new Set(),
        n = null == l || u === h.Iq.EMBEDDED_APPLICATION ? void 0 : l.id,
        i = (0, O.rh)(D, n);
    for (let e of (null != i && !p.Z.isBlocked(i.id) && t.add(i.id), S.Z.getUserAffinitiesUserIds())) t.add(e);
    let r = new Set();
    return (
        u === h.Iq.EMBEDDED_APPLICATION &&
            m.Z.getChannelHistory()
                .map((e) => E.Z.getChannel(e))
                .filter(f.lm)
                .filter((e) => e.type === P.d4z.GUILD_TEXT)
                .filter((e) => g.Z.can(P.Plq.SEND_MESSAGES, e))
                .slice(0, 3)
                .forEach((e) => r.add(e.id)),
        (0, O.an)({
            query: e,
            omitUserIds: D,
            suggestedUserIds: t,
            maxRowsWithoutQuery: 100,
            omitGuildId: n,
            suggestedChannelIds: r,
            inviteTargetType: u
        })
    );
}
function M(e) {
    (C = e),
        (v = new Map()),
        e.forEach((e, t) => {
            v.set(e, { index: t });
        });
}
class y extends (I = T.ZP.Store) {
    initialize() {
        this.waitFor(p.Z, S.Z);
    }
    getInviteSuggestionRows() {
        return C;
    }
    getTotalSuggestionsCount() {
        return r;
    }
    getInitialCounts() {
        return i;
    }
    getSelectedInviteMetadata(e) {
        let t = v.get(e),
            n = S.Z.getUserAffinitiesUserIds();
        return null != t
            ? {
                  rowNum: t.index,
                  isAffinitySuggestion: e.isSuggested,
                  numTotal: C.length,
                  numAffinityConnections: n.size,
                  isFiltered: a
              }
            : null;
    }
}
(_ = 'InviteSuggestionsStore'),
    (d = 'displayName') in (c = y)
        ? Object.defineProperty(c, d, {
              value: _,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (c[d] = _),
    (t.Z = new y(N.Z, {
        LOAD_INVITE_SUGGESTIONS: function (e) {
            let { omitUserIds: t, guild: n, channel: I, applicationId: c, inviteTargetType: d } = e;
            (l = null != I ? n : null), (s = I), (o = c), (u = d);
            let _ = p.Z.getBlockedOrIgnoredIDs();
            (D = new Set([
                ...t,
                ..._,
                ...(0, O.Sz)({
                    channel: s,
                    applicationId: o,
                    inviteTargetType: d
                })
            ])),
                (a = !1);
            let { rows: T, counts: N } = A('');
            M(T), (i = N), (r = C.length);
        },
        INVITE_SUGGESTIONS_SEARCH: function (e) {
            let { query: t } = e;
            a = '' !== t;
            let { rows: n } = A(t);
            M(n);
        }
    }));
