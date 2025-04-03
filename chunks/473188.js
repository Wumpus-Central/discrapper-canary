r.d(t, { _: () => s });
var n = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    i = r(481060),
    l = r(259173);
function s(e) {
    let { rank: t, hideInnerBorder: r = !1 } = e;
    return (0, n.jsx)('div', {
        className: o()(l.rankContainer, {
            [l.goldBorder]: 1 === t,
            [l.silverBorder]: 2 === t,
            [l.bronzeBorder]: 3 === t,
            [l.defaultBorder]: t > 3
        }),
        children: (0, n.jsx)(i.Text, {
            tabularNumbers: !0,
            variant: t <= 3 ? 'text-xs/semibold' : 'text-xs/medium',
            className: o()(l.rank, {
                [l.rankWithBorder]: !r,
                [l.goldText]: 1 === t,
                [l.silverText]: 2 === t,
                [l.bronzeText]: 3 === t,
                [l.rankNoBorder]: r
            }),
            children: t
        })
    });
}
