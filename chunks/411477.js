n.d(i, { Z: () => d });
var o = n(200651);
n(192379);
var t = n(120356),
    a = n.n(t),
    l = n(481060),
    r = n(436774),
    c = n(118012),
    s = n(822996);
function d(e) {
    let { text: i, textSize: n = c.Z.Sizes.SIZE_12, textColor: t = c.Z.Colors.STANDARD, className: d, button: u, reducedRightPadding: _ = !1 } = e;
    return (0, o.jsxs)('div', {
        className: a()(_ ? s.noticeWithoutRightPadding : s.noticeWithRightPadding, d),
        children: [
            (0, o.jsxs)('div', {
                className: s.noticeLeft,
                children: [
                    (0, o.jsx)(l.SrA, {
                        size: 'md',
                        className: s.icon,
                        color: r.JX.PREMIUM_TIER_2
                    }),
                    (0, o.jsx)(c.Z, {
                        className: s.text,
                        size: n,
                        color: t,
                        children: i
                    })
                ]
            }),
            u
        ]
    });
}
