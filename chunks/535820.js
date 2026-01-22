let l, i, s, r, a, o;
n.d(t, {
    A: () => M,
}),
    n(896048),
    n(638769);
var u,
    d,
    c = n(311907),
    g = n(73153),
    h = n(174768),
    p = n(21119),
    v = n(403362),
    A = n(735547),
    I = n(734057),
    m = n(576705),
    S = n(994500),
    x = n(652215),
    y = n(172799);
let f = new Set(),
    E = [],
    _ = new Map(),
    b = {
        numFriends: 0,
        numDms: 0,
        numGroupDms: 0,
        numChannels: 0,
    };

function C(e) {
    let t = new Set(),
        n = (null == r ? void 0 : r.type) === x.rbe.GUILD_VOICE,
        l = null;
    null == s || o === y.yV.EMBEDDED_APPLICATION || n || (l = s.id);
    let i = (0, A.oW)(f, l);
    for (let e of (null == i || S.A.isBlockedOrIgnored(i.id) || t.add(i.id), p.A.getUserAffinities()))
        t.add(e.otherUserId);
    let a = new Set();
    return (
        o === y.yV.EMBEDDED_APPLICATION &&
            h.A.getChannelHistory()
                .map((e) => I.A.getChannel(e))
                .filter(v.Vq)
                .filter((e) => e.type === x.rbe.GUILD_TEXT)
                .filter((e) => m.A.can(x.xBc.SEND_MESSAGES, e))
                .slice(0, 3)
                .forEach((e) => a.add(e.id)),
        (0, A.Us)({
            query: e,
            omitUserIds: f,
            suggestedUserIds: t,
            maxRowsWithoutQuery: 100,
            omitGuildId: l,
            suggestedChannelIds: a,
            inviteTargetType: o,
        })
    );
}

function T(e) {
    (E = e),
        (_ = new Map()),
        e.forEach((e, t) => {
            _.set(e, {
                index: t,
            });
        });
}
class N extends (u = c.Ay.Store) {
    initialize() {
        this.waitFor(I.A, m.A, h.A, S.A, p.A);
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
        let t = _.get(e),
            n = p.A.getUserAffinities().map((e) => e.otherUserId);
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
(d = "displayName") in N
    ? Object.defineProperty(N, d, {
          value: "InviteSuggestionsStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (N[d] = "InviteSuggestionsStore");
let M = new N(g.h, {
    LOAD_INVITE_SUGGESTIONS: function (e) {
        let { omitUserIds: t, guild: n, channel: u, applicationId: d, inviteTargetType: c } = e;
        (s = null != u ? n : null),
            (r = u),
            (a = d),
            (o = c),
            (f = new Set([
                ...t,
                ...S.A.getBlockedOrIgnoredIDs(),
                ...(0, A.Uo)({
                    channel: r,
                    applicationId: a,
                    inviteTargetType: c,
                }),
            ])),
            (i = !1);
        let { rows: g, counts: h } = C("");
        T(g), (b = h), (l = E.length);
    },
    INVITE_SUGGESTIONS_SEARCH: function (e) {
        let { query: t } = e;
        i = "" !== t;
        let { rows: n } = C(t);
        n.sort((e, t) => (null != e.score && null != t.score ? e.score - t.score : 0)), T(n);
    },
});
