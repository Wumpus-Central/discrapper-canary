var r = n(988665),
    s = n(822382),
    u = n(743175);
(n(160963), n(163839));
var l = n(652215),
    i = n(768570);
let a = new Set([l.LWr.FILTER_IN, l.LWr.ANSWER_IN]);
function c(e) {
    return e.type !== r.dL && !a.has(e.type);
}
n.d(
    t,
    {},
    {
        E2: function (e) {
            return /\/(\d+)$/.exec(e)?.[1] ?? e;
        },
        Ij: function (e) {
            return e.split("|");
        },
        Ty: function (e) {
            return [...e].sort().join("|");
        },
        Vw: function (e, t, n) {
            let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : u.A,
                l = (0, s.mt)(e);
            if (null == l) return 0;
            let a = r.getAnswer(l, (0, s.T4)(e, i.$H.MESSAGES, t))?.citations.length ?? 0;
            return n ? Math.min(a, 3) : a;
        },
        qi: function (e, t) {
            var n;
            if ((n = e).type !== l.I4_.GUILD && n.type !== l.I4_.GUILD_CHANNEL) return null;
            let r = (0, s.mt)(e);
            if (null == r) return null;
            let u = (0, s.T4)(e, i.$H.MESSAGES, t),
                a = (0, s._o)(t),
                d = (0, s.Zf)(a),
                g = (0, s.Pp)(a);
            return a.some(c)
                ? null
                : {
                      queryText: g,
                      requestKey: u,
                      guildId: r,
                      channelIds: d.channel_id ?? [],
                      searchContext: e,
                      searchQueryString: t,
                  };
        },
    },
);
