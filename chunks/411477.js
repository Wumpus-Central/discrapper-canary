n.d(i, { Z: () => s });
var t = n(200651);
n(192379);
var o = n(120356),
    r = n.n(o),
    a = n(481060),
    l = n(436774),
    c = n(118012),
    d = n(822996);
function s(e) {
    let { text: i, textSize: n = c.Z.Sizes.SIZE_12, textColor: o = c.Z.Colors.STANDARD, className: s, button: u, reducedRightPadding: _ = !1 } = e;
    return (0, t.jsxs)('div', {
        className: r()(_ ? d.noticeWithoutRightPadding : d.noticeWithRightPadding, s),
        children: [
            (0, t.jsxs)('div', {
                className: d.noticeLeft,
                children: [
                    (0, t.jsx)(a.SrA, {
                        size: 'md',
                        className: d.icon,
                        color: l.JX.PREMIUM_TIER_2
                    }),
                    (0, t.jsx)(c.Z, {
                        className: d.text,
                        size: n,
                        color: o,
                        children: i
                    })
                ]
            }),
            u
        ]
    });
}
