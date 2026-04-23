l.d(t, { A: () => o });
var s = l(812729),
    n = l.n(s),
    a = l(311907),
    i = l(505527),
    r = l(956703),
    c = l(652215);
function o(e) {
    let { channelId: t, messageId: l, reaction: s } = e,
        o = (0, a.bG)(
            [r.A],
            () => {
                let e = r.A.getReactions(t, l, s.emoji, c.WxW, i.v.VOTE);
                return Array.from(e?.values() ?? []);
            },
            [t, l, s.emoji],
            n(),
        );
    return { reactors: o, hasMore: (s.count_details?.vote ?? 0) > o.length };
}
