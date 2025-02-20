i.d(n, { Z: () => d });
var t = i(200651);
i(192379);
var o = i(120356),
    r = i.n(o),
    a = i(481060),
    l = i(436774),
    c = i(118012),
    s = i(501126);
function d(e) {
    let { text: n, textSize: i = c.Z.Sizes.SIZE_12, textColor: o = c.Z.Colors.STANDARD, className: d, button: u, reducedRightPadding: g = !1 } = e;
    return (0, t.jsxs)('div', {
        className: r()(g ? s.noticeWithoutRightPadding : s.noticeWithRightPadding, d),
        children: [
            (0, t.jsxs)('div', {
                className: s.noticeLeft,
                children: [
                    (0, t.jsx)(a.SrA, {
                        size: 'md',
                        className: s.icon,
                        color: l.JX.PREMIUM_TIER_2
                    }),
                    (0, t.jsx)(c.Z, {
                        className: s.text,
                        size: i,
                        color: o,
                        children: n
                    })
                ]
            }),
            u
        ]
    });
}
