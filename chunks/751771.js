let l, i, r, a, s, o;
n.d(t, { Z: () => C }), n(388685), n(642613);
var u,
    d,
    c = n(442837),
    g = n(570140),
    h = n(823385),
    m = n(752048),
    p = n(823379),
    v = n(971130),
    I = n(592125),
    x = n(496675),
    f = n(699516),
    j = n(981631),
    N = n(245335);
let _ = new Set(),
    E = [],
    S = new Map(),
    b = {
        numFriends: 0,
        numDms: 0,
        numGroupDms: 0,
        numChannels: 0,
    };
function O(e) {
    let t = new Set(),
        n = null == r || o === N.Iq.EMBEDDED_APPLICATION ? void 0 : r.id,
        l = (0, v.rh)(_, n);
    for (let e of (null == l || f.Z.isBlockedOrIgnored(l.id) || t.add(l.id), m.Z.getUserAffinities()))
        t.add(e.otherUserId);
    let i = new Set();
    return (
        o === N.Iq.EMBEDDED_APPLICATION &&
            h.Z.getChannelHistory()
                .map((e) => I.Z.getChannel(e))
                .filter(p.lm)
                .filter((e) => e.type === j.d4z.GUILD_TEXT)
                .filter((e) => x.Z.can(j.Plq.SEND_MESSAGES, e))
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
function y(e) {
    (E = e),
        (S = new Map()),
        e.forEach((e, t) => {
            S.set(e, { index: t });
        });
}
class T extends (u = c.ZP.Store) {
    initialize() {
        this.waitFor(f.Z, m.Z);
    }
    getInviteSuggestionRows() {
        return E;
    }
    getTotalSuggestionsCount() {
        return l;
    }
    getInitialCounts() {
        return b;
    }
    getSelectedInviteMetadata(e) {
        let t = S.get(e),
            n = m.Z.getUserAffinities().map((e) => e.otherUserId);
        if (null != t)
            return {
                rowNum: t.index,
                isAffinitySuggestion: e.isSuggested,
                numTotal: E.length,
                numAffinityConnections: n.length,
                isFiltered: i,
            };
    }
}
(d = "displayName") in T
    ? Object.defineProperty(T, d, {
          value: "InviteSuggestionsStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (T[d] = "InviteSuggestionsStore");
let C = new T(g.Z, {
    LOAD_INVITE_SUGGESTIONS: function (e) {
        let { omitUserIds: t, guild: n, channel: u, applicationId: d, inviteTargetType: c } = e;
        (r = null != u ? n : null),
            (a = u),
            (s = d),
            (o = c),
            (_ = new Set([
                ...t,
                ...f.Z.getBlockedOrIgnoredIDs(),
                ...(0, v.Sz)({
                    channel: a,
                    applicationId: s,
                    inviteTargetType: c,
                }),
            ])),
            (i = !1);
        let { rows: g, counts: h } = O("");
        y(g), (b = h), (l = E.length);
    },
    INVITE_SUGGESTIONS_SEARCH: function (e) {
        let { query: t } = e;
        i = "" !== t;
        let { rows: n } = O(t);
        n.sort((e, t) => (null != e.score && null != t.score ? e.score - t.score : 0)), y(n);
    },
});
