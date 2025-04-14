n.d(e, { Z: () => u });
var o = n(200651);
n(192379);
var r = n(120356),
    i = n.n(r),
    a = n(481060),
    l = n(436774),
    c = n(118012),
    s = n(237844);
function u(t) {
    let { text: e, textSize: n = c.Z.Sizes.SIZE_12, textColor: r = c.Z.Colors.STANDARD, className: u, button: _, reducedRightPadding: d = !1 } = t;
    return (0, o.jsxs)('div', {
        className: i()(d ? s.noticeWithoutRightPadding : s.noticeWithRightPadding, u),
        children: [
            (0, o.jsxs)('div', {
                className: s.noticeLeft,
                children: [
                    (0, o.jsx)(a.SrA, {
                        size: 'md',
                        className: s.icon,
                        color: l.JX.PREMIUM_TIER_2
                    }),
                    (0, o.jsx)(c.Z, {
                        className: s.text,
                        size: n,
                        color: r,
                        children: e
                    })
                ]
            }),
            _
        ]
    });
}
