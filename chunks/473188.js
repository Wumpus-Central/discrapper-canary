n.d(t, { _: () => s });
var a = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    i = n(481060),
    o = n(744877);
function s(e) {
    let { rank: t, hideInnerBorder: n = !1 } = e;
    return (0, a.jsx)('div', {
        className: l()(o.rankContainer, {
            [o.goldBorder]: 1 === t,
            [o.silverBorder]: 2 === t,
            [o.bronzeBorder]: 3 === t,
            [o.defaultBorder]: t > 3
        }),
        children: (0, a.jsx)(i.Text, {
            tabularNumbers: !0,
            variant: t <= 3 ? 'text-xs/semibold' : 'text-xs/medium',
            className: l()(o.rank, {
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
