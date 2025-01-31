n.d(e, { Z: () => _ });
var i = n(200651);
n(192379);
var o = n(120356),
    a = n.n(o),
    r = n(481060),
    c = n(436774),
    l = n(118012),
    s = n(392842);
function _(t) {
    let { text: e, textSize: n = l.Z.Sizes.SIZE_12, textColor: o = l.Z.Colors.STANDARD, className: _, button: d, reducedRightPadding: u = !1 } = t;
    return (0, i.jsxs)('div', {
        className: a()(u ? s.noticeWithoutRightPadding : s.noticeWithRightPadding, _),
        children: [
            (0, i.jsxs)('div', {
                className: s.noticeLeft,
                children: [
                    (0, i.jsx)(r.SrA, {
                        size: 'md',
                        className: s.icon,
                        color: c.JX.PREMIUM_TIER_2
                    }),
                    (0, i.jsx)(l.Z, {
                        className: s.text,
                        size: n,
                        color: o,
                        children: e
                    })
                ]
            }),
            d
        ]
    });
}
