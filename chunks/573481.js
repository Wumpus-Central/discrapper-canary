l.d(t, { A: () => c });
var s = l(812729),
    a = l.n(s),
    n = l(311907),
    i = l(505527),
    r = l(956703),
    o = l(652215);
function c(e) {
    let { channelId: t, messageId: l, reaction: s } = e,
        c = (0, n.bG)(
            [r.A],
            () => {
                let e = r.A.getReactions(t, l, s.emoji, o.WxW, i.v.VOTE);
                return Array.from(e?.values() ?? []);
            },
            [t, l, s.emoji],
            a(),
        );
    return { reactors: c, hasMore: (s.count_details?.vote ?? 0) > c.length };
}
