n.d(e, { Z: () => s });
var i = n(255367);
n(73800);
var o = n(120356),
    r = n.n(o),
    a = n(481060),
    l = n(436774),
    c = n(237844);
function s(t) {
    let { text: e, className: n, button: o, reducedRightPadding: s = !1 } = t;
    return (0, i.jsxs)('div', {
        className: r()(s ? c.noticeWithoutRightPadding : c.noticeWithRightPadding, n),
        children: [
            (0, i.jsxs)('div', {
                className: c.noticeLeft,
                children: [
                    (0, i.jsx)(a.SrA, {
                        size: 'md',
                        className: c.icon,
                        color: l.JX.PREMIUM_TIER_2
                    }),
                    (0, i.jsx)(a.Text, {
                        className: c.text,
                        variant: 'text-md/normal',
                        color: 'header-primary',
                        children: e
                    })
                ]
            }),
            o
        ]
    });
}
