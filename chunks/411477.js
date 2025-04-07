i.d(t, { Z: () => d });
var n = i(200651);
i(192379);
var o = i(120356),
    r = i.n(o),
    a = i(481060),
    l = i(436774),
    s = i(118012),
    c = i(237844);
function d(e) {
    let { text: t, textSize: i = s.Z.Sizes.SIZE_12, textColor: o = s.Z.Colors.STANDARD, className: d, button: u, reducedRightPadding: _ = !1 } = e;
    return (0, n.jsxs)('div', {
        className: r()(_ ? c.noticeWithoutRightPadding : c.noticeWithRightPadding, d),
        children: [
            (0, n.jsxs)('div', {
                className: c.noticeLeft,
                children: [
                    (0, n.jsx)(a.SrA, {
                        size: 'md',
                        className: c.icon,
                        color: l.JX.PREMIUM_TIER_2
                    }),
                    (0, n.jsx)(s.Z, {
                        className: c.text,
                        size: i,
                        color: o,
                        children: t
                    })
                ]
            }),
            u
        ]
    });
}
