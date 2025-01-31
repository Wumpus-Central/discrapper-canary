n.d(t, { Z: () => u });
var l = n(348327),
    a = n.n(l),
    s = n(392711),
    i = n.n(s),
    r = n(442837),
    o = n(566006),
    c = n(542578),
    d = n(981631);
function u(e) {
    var t, n;
    let { channelId: l, messageId: s, reaction: u } = e,
        m = (0, r.e7)(
            [c.Z],
            () => {
                let e = c.Z.getReactions(l, s, u.emoji, d.pTL, o.O.VOTE);
                return i().map(e, (e) => e);
            },
            [l, s, u.emoji],
            a()
        );
    return {
        reactors: m,
        hasMore: (null !== (n = null === (t = u.count_details) || void 0 === t ? void 0 : t.vote) && void 0 !== n ? n : 0) > m.length
    };
}
