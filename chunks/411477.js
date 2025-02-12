n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var o = n(120356),
    r = n.n(o),
    a = n(481060),
    l = n(436774),
    s = n(118012),
    c = n(575149);
function d(e) {
    let { text: t, textSize: n = s.Z.Sizes.SIZE_12, textColor: o = s.Z.Colors.STANDARD, className: d, button: u, reducedRightPadding: _ = !1 } = e;
    return (0, i.jsxs)('div', {
        className: r()(_ ? c.noticeWithoutRightPadding : c.noticeWithRightPadding, d),
        children: [
            (0, i.jsxs)('div', {
                className: c.noticeLeft,
                children: [
                    (0, i.jsx)(a.SrA, {
                        size: 'md',
                        className: c.icon,
                        color: l.JX.PREMIUM_TIER_2
                    }),
                    (0, i.jsx)(s.Z, {
                        className: c.text,
                        size: n,
                        color: o,
                        children: t
                    })
                ]
            }),
            u
        ]
    });
}
