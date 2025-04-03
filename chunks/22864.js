n.d(t, { Z: () => u });
var l = n(348327),
    a = n.n(l),
    s = n(392711),
    r = n.n(s),
    i = n(442837),
    o = n(566006),
    c = n(542578),
    d = n(981631);
function u(e) {
    var t, n;
    let { channelId: l, messageId: s, reaction: u } = e,
        m = (0, i.e7)(
            [c.Z],
            () => {
                let e = c.Z.getReactions(l, s, u.emoji, d.pTL, o.O.VOTE);
                return r().map(e, (e) => e);
            },
            [l, s, u.emoji],
            a()
        );
    return {
        reactors: m,
        hasMore: (null != (n = null == (t = u.count_details) ? void 0 : t.vote) ? n : 0) > m.length
    };
}
