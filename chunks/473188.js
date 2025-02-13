n.d(t, { _: () => c });
var i = n(200651);
n(192379);
var a = n(120356),
    o = n.n(a),
    r = n(481060),
    l = n(179663);
function c(e) {
    let { rank: t, hideInnerBorder: n = !1 } = e;
    return (0, i.jsx)('div', {
        className: o()(l.rankContainer, {
            [l.goldBorder]: 1 === t,
            [l.silverBorder]: 2 === t,
            [l.bronzeBorder]: 3 === t,
            [l.defaultBorder]: t > 3
        }),
        children: (0, i.jsx)(r.Text, {
            tabularNumbers: !0,
            variant: t <= 3 ? 'text-xs/semibold' : 'text-xs/medium',
            className: o()(l.rank, {
                [l.rankWithBorder]: !n,
                [l.goldText]: 1 === t,
                [l.silverText]: 2 === t,
                [l.bronzeText]: 3 === t,
                [l.rankNoBorder]: n
            }),
            children: t
        })
    });
}
