let l, i, a, s, r, o;
n.d(t, { A: () => N });
var d = n(311907),
    u = n(73153),
    c = n(174768),
    g = n(21119),
    h = n(403362),
    A = n(735547),
    p = n(734057),
    I = n(576705),
    x = n(994500),
    m = n(652215),
    S = n(172799);
let v = new Set(),
    f = [],
    y = new Map(),
    E = { numFriends: 0, numDms: 0, numGroupDms: 0, numChannels: 0 };
function _(e) {
    let t = new Set(),
        n = s?.type === m.rbe.GUILD_VOICE,
        l = null;
    null == a || o === S.yV.EMBEDDED_APPLICATION || n || (l = a.id);
    let i = (0, A.oW)(v, l);
    for (let e of (null == i || x.A.isBlockedOrIgnored(i.id) || t.add(i.id), g.A.getUserAffinities()))
        t.add(e.otherUserId);
    let r = new Set();
    return (
        o === S.yV.EMBEDDED_APPLICATION &&
            c.A.getChannelHistory()
                .map((e) => p.A.getChannel(e))
                .filter(h.Vq)
                .filter((e) => e.type === m.rbe.GUILD_TEXT)
                .filter((e) => I.A.can(m.xBc.SEND_MESSAGES, e))
                .slice(0, 3)
                .forEach((e) => r.add(e.id)),
        (0, A.Us)({
            query: e,
            omitUserIds: v,
            suggestedUserIds: t,
            maxRowsWithoutQuery: 100,
            omitGuildId: l,
            suggestedChannelIds: r,
            inviteTargetType: o,
        })
    );
}
function C(e) {
    (f = e),
        (y = new Map()),
        e.forEach((e, t) => {
            y.set(e, { index: t });
        });
}
class T extends d.Ay.Store {
    static displayName = "InviteSuggestionsStore";
    initialize() {
        this.waitFor(p.A, I.A, c.A, x.A, g.A);
    }
    getInviteSuggestionRows() {
        return f;
    }
    getTotalSuggestionsCount() {
        return l;
    }
    getInitialCounts() {
        return E;
    }
    getSelectedInviteMetadata(e) {
        let t = y.get(e),
            n = g.A.getUserAffinities().map((e) => e.otherUserId);
        if (null != t)
            return {
                rowNum: t.index,
                isAffinitySuggestion: e.isSuggested,
                numTotal: f.length,
                numAffinityConnections: n.length,
                isFiltered: i,
            };
    }
}
let N = new T(u.h, {
    LOAD_INVITE_SUGGESTIONS: function (e) {
        let { omitUserIds: t, guild: n, channel: d, applicationId: u, inviteTargetType: c } = e;
        (a = null != d ? n : null),
            (s = d),
            (r = u),
            (o = c),
            (v = new Set([
                ...t,
                ...x.A.getBlockedOrIgnoredIDs(),
                ...(0, A.Uo)({ channel: s, applicationId: r, inviteTargetType: c }),
            ])),
            (i = !1);
        let { rows: g, counts: h } = _("");
        C(g), (E = h), (l = f.length);
    },
    INVITE_SUGGESTIONS_SEARCH: function (e) {
        let { query: t } = e;
        i = "" !== t;
        let { rows: n } = _(t);
        n.sort((e, t) => (null != e.score && null != t.score ? e.score - t.score : 0)), C(n);
    },
});
