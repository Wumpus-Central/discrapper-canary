n.d(t, { Z: () => s });
var i = n(255367);
n(73800);
var a = n(120356),
    o = n.n(a),
    r = n(481060),
    l = n(436774),
    c = n(237844);
function s(e) {
    let { text: t, className: n, button: a, reducedRightPadding: s = !1 } = e;
    return (0, i.jsxs)('div', {
        className: o()(s ? c.noticeWithoutRightPadding : c.noticeWithRightPadding, n),
        children: [
            (0, i.jsxs)('div', {
                className: c.noticeLeft,
                children: [
                    (0, i.jsx)(r.SrA, {
                        size: 'md',
                        className: c.icon,
                        color: l.JX.PREMIUM_TIER_2
                    }),
                    (0, i.jsx)(r.Text, {
                        className: c.text,
                        variant: 'text-md/normal',
                        color: 'header-primary',
                        children: t
                    })
                ]
            }),
            a
        ]
    });
}
