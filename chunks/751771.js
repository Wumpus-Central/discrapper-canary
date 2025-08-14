let l, i, r, s, a, o;
n.d(t, { Z: () => C }), n(388685), n(642613);
var u,
    d,
    c = n(442837),
    g = n(570140),
    h = n(823385),
    m = n(752048),
    p = n(823379),
    v = n(971130),
    x = n(592125),
    I = n(496675),
    f = n(699516),
    j = n(981631),
    N = n(245335);
let _ = new Set(),
    S = [],
    E = new Map(),
    b = {
        numFriends: 0,
        numDms: 0,
        numGroupDms: 0,
        numChannels: 0,
    };
function T(e) {
    let t = new Set(),
        n = null == r || o === N.Iq.EMBEDDED_APPLICATION ? void 0 : r.id,
        l = (0, v.rh)(_, n);
    for (let e of (null == l || f.Z.isBlockedOrIgnored(l.id) || t.add(l.id), m.Z.getUserAffinities()))
        t.add(e.otherUserId);
    let i = new Set();
    return (
        o === N.Iq.EMBEDDED_APPLICATION &&
            h.Z.getChannelHistory()
                .map((e) => x.Z.getChannel(e))
                .filter(p.lm)
                .filter((e) => e.type === j.d4z.GUILD_TEXT)
                .filter((e) => I.Z.can(j.Plq.SEND_MESSAGES, e))
                .slice(0, 3)
                .forEach((e) => i.add(e.id)),
        (0, v.an)({
            query: e,
            omitUserIds: _,
            suggestedUserIds: t,
            maxRowsWithoutQuery: 100,
            omitGuildId: n,
            suggestedChannelIds: i,
            inviteTargetType: o,
        })
    );
}
function O(e) {
    (S = e),
        (E = new Map()),
        e.forEach((e, t) => {
            E.set(e, { index: t });
        });
}
class y extends (u = c.ZP.Store) {
    initialize() {
        this.waitFor(f.Z, m.Z);
    }
    getInviteSuggestionRows() {
        return S;
    }
    getTotalSuggestionsCount() {
        return l;
    }
    getInitialCounts() {
        return b;
    }
    getSelectedInviteMetadata(e) {
        let t = E.get(e),
            n = m.Z.getUserAffinities().map((e) => e.otherUserId);
        return null != t
            ? {
                  rowNum: t.index,
                  isAffinitySuggestion: e.isSuggested,
                  numTotal: S.length,
                  numAffinityConnections: n.length,
                  isFiltered: i,
              }
            : null;
    }
}
(d = "displayName") in y
    ? Object.defineProperty(y, d, {
          value: "InviteSuggestionsStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (y[d] = "InviteSuggestionsStore");
let C = new y(g.Z, {
    LOAD_INVITE_SUGGESTIONS: function (e) {
        let { omitUserIds: t, guild: n, channel: u, applicationId: d, inviteTargetType: c } = e;
        (r = null != u ? n : null),
            (s = u),
            (a = d),
            (o = c),
            (_ = new Set([
                ...t,
                ...f.Z.getBlockedOrIgnoredIDs(),
                ...(0, v.Sz)({
                    channel: s,
                    applicationId: a,
                    inviteTargetType: c,
                }),
            ])),
            (i = !1);
        let { rows: g, counts: h } = T("");
        O(g), (b = h), (l = S.length);
    },
    INVITE_SUGGESTIONS_SEARCH: function (e) {
        let { query: t } = e;
        i = "" !== t;
        let { rows: n } = T(t);
        n.sort((e, t) => (null != e.score && null != t.score ? e.score - t.score : 0)), O(n);
    },
});
