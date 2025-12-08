n.d(t, { Z: () => c }), n(388685);
var l = n(348327),
    a = n.n(l),
    s = n(442837),
    r = n(566006),
    i = n(542578),
    o = n(981631);
function c(e) {
    var t, n;
    let { channelId: l, messageId: c, reaction: u } = e,
        d = (0, s.e7)(
            [i.Z],
            () => {
                var e;
                let t = i.Z.getReactions(l, c, u.emoji, o.pTL, r.O.VOTE);
                return Array.from(null != (e = null == t ? void 0 : t.values()) ? e : []);
            },
            [l, c, u.emoji],
            a(),
        );
    return {
        reactors: d,
        hasMore: (null != (n = null == (t = u.count_details) ? void 0 : t.vote) ? n : 0) > d.length,
    };
}
