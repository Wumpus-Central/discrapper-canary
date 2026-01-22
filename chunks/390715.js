n.d(t, { A: () => c });
var r = n(627968);
n(64700);
var i = n(53594),
    l = n(767822),
    s = n(692467),
    a = n(690420);
function c(e) {
    let { guildId: t, rules: n, triggerType: c, initWithEdit: o } = e,
        { perGuildMaxCount: d } = i.i$[c],
        u = 0 === n.length,
        f = d > n.length && !u;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            u &&
                (0, r.jsx)(s.A, {
                    guildId: t,
                    triggerType: c,
                }),
            n.map((e) =>
                (0, r.jsx)(
                    a.A,
                    {
                        rule: e,
                        initWithEdit: o,
                    },
                    e.id,
                ),
            ),
            f &&
                (0, r.jsx)(l.A, {
                    guildId: t,
                    triggerType: c,
                }),
        ],
    });
}
