a.d(l, {
    A: () => d,
}),
    a(896048);
var t = a(812729),
    s = a.n(t),
    n = a(311907),
    i = a(505527),
    r = a(956703),
    o = a(652215);

function d(e) {
    var l, a;
    let { channelId: t, messageId: d, reaction: c } = e,
        u = (0, n.bG)(
            [r.A],
            () => {
                var e;
                let l = r.A.getReactions(t, d, c.emoji, o.WxW, i.v.VOTE);
                return Array.from(null != (e = null == l ? void 0 : l.values()) ? e : []);
            },
            [t, d, c.emoji],
            s(),
        );
    return {
        reactors: u,
        hasMore: (null != (l = null == (a = c.count_details) ? void 0 : a.vote) ? l : 0) > u.length,
    };
}
