n.d(e, { Z: () => s });
var o = n(255367);
n(73800);
var r = n(120356),
    i = n.n(r),
    a = n(481060),
    l = n(436774),
    c = n(237844);
function s(t) {
    let { text: e, className: n, button: r, reducedRightPadding: s = !1 } = t;
    return (0, o.jsxs)('div', {
        className: i()(s ? c.noticeWithoutRightPadding : c.noticeWithRightPadding, n),
        children: [
            (0, o.jsxs)('div', {
                className: c.noticeLeft,
                children: [
                    (0, o.jsx)(a.SrA, {
                        size: 'md',
                        className: c.icon,
                        color: l.JX.PREMIUM_TIER_2
                    }),
                    (0, o.jsx)(a.Text, {
                        className: c.text,
                        variant: 'text-md/normal',
                        color: 'header-primary',
                        children: e
                    })
                ]
            }),
            r
        ]
    });
}
