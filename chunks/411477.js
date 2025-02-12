o.d(e, { Z: () => _ });
var n = o(200651);
o(192379);
var i = o(120356),
    a = o.n(i),
    r = o(481060),
    l = o(436774),
    s = o(118012),
    c = o(822996);
function _(t) {
    let { text: e, textSize: o = s.Z.Sizes.SIZE_12, textColor: i = s.Z.Colors.STANDARD, className: _, button: d, reducedRightPadding: u = !1 } = t;
    return (0, n.jsxs)('div', {
        className: a()(u ? c.noticeWithoutRightPadding : c.noticeWithRightPadding, _),
        children: [
            (0, n.jsxs)('div', {
                className: c.noticeLeft,
                children: [
                    (0, n.jsx)(r.SrA, {
                        size: 'md',
                        className: c.icon,
                        color: l.JX.PREMIUM_TIER_2
                    }),
                    (0, n.jsx)(s.Z, {
                        className: c.text,
                        size: o,
                        color: i,
                        children: e
                    })
                ]
            }),
            d
        ]
    });
}
