n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var l = n(53594),
    s = n(767822),
    r = n(692467),
    a = n(690420);
function o(e) {
    let { guildId: t, rules: n, triggerType: o, initWithEdit: d } = e,
        { perGuildMaxCount: c } = l.i$[o],
        u = 0 === n.length,
        m = c > n.length && !u;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            u && (0, i.jsx)(r.A, { guildId: t, triggerType: o }),
            n.map((e) => (0, i.jsx)(a.A, { rule: e, initWithEdit: d }, e.id)),
            m && (0, i.jsx)(s.A, { guildId: t, triggerType: o }),
        ],
    });
}
