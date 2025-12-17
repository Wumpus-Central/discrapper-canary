l.d(t, { Z: () => o }), l(388685);
var n = l(348327),
    a = l.n(n),
    s = l(442837),
    i = l(566006),
    r = l(542578),
    c = l(981631);
function o(e) {
    var t, l;
    let { channelId: n, messageId: o, reaction: d } = e,
        u = (0, s.e7)(
            [r.Z],
            () => {
                var e;
                let t = r.Z.getReactions(n, o, d.emoji, c.pTL, i.O.VOTE);
                return Array.from(null != (e = null == t ? void 0 : t.values()) ? e : []);
            },
            [n, o, d.emoji],
            a(),
        );
    return {
        reactors: u,
        hasMore: (null != (l = null == (t = d.count_details) ? void 0 : t.vote) ? l : 0) > u.length,
    };
}
