r.d(n, {
    _: function () {
        return u;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(481060),
    l = r(744877);
function u(e) {
    let { rank: n, hideInnerBorder: r = !1 } = e,
        a = n <= 3 ? 'text-xs/semibold' : 'text-xs/medium';
    return (0, i.jsx)('div', {
        className: o()(l.rankContainer, {
            [l.goldBorder]: 1 === n,
            [l.silverBorder]: 2 === n,
            [l.bronzeBorder]: 3 === n,
            [l.defaultBorder]: n > 3
        }),
        children: (0, i.jsx)(s.Text, {
            tabularNumbers: !0,
            variant: a,
            className: o()(l.rank, {
                [l.rankWithBorder]: !r,
                [l.goldText]: 1 === n,
                [l.silverText]: 2 === n,
                [l.bronzeText]: 3 === n,
                [l.rankNoBorder]: r
            }),
            children: n
        })
    });
}
