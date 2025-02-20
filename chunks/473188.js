n.d(t, { _: () => s });
var r = n(200651);
n(192379);
var a = n(120356),
    i = n.n(a),
    l = n(481060),
    o = n(614743);
function s(e) {
    let { rank: t, hideInnerBorder: n = !1 } = e;
    return (0, r.jsx)('div', {
        className: i()(o.rankContainer, {
            [o.goldBorder]: 1 === t,
            [o.silverBorder]: 2 === t,
            [o.bronzeBorder]: 3 === t,
            [o.defaultBorder]: t > 3
        }),
        children: (0, r.jsx)(l.Text, {
            tabularNumbers: !0,
            variant: t <= 3 ? 'text-xs/semibold' : 'text-xs/medium',
            className: i()(o.rank, {
                [o.rankWithBorder]: !n,
                [o.goldText]: 1 === t,
                [o.silverText]: 2 === t,
                [o.bronzeText]: 3 === t,
                [o.rankNoBorder]: n
            }),
            children: t
        })
    });
}
