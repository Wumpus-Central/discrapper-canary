n.d(t, { _: () => l });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(259173);
function l(e) {
    let { rank: t, hideInnerBorder: n = !1 } = e,
        i = t <= 3 ? 'text-xs/semibold' : 'text-xs/medium';
    return (0, r.jsx)('div', {
        className: o()(s.rankContainer, {
            [s.goldBorder]: 1 === t,
            [s.silverBorder]: 2 === t,
            [s.bronzeBorder]: 3 === t,
            [s.defaultBorder]: t > 3
        }),
        children: (0, r.jsx)(a.Text, {
            tabularNumbers: !0,
            variant: i,
            className: o()(s.rank, {
                [s.rankWithBorder]: !n,
                [s.goldText]: 1 === t,
                [s.silverText]: 2 === t,
                [s.bronzeText]: 3 === t,
                [s.rankNoBorder]: n
            }),
            children: t
        })
    });
}
