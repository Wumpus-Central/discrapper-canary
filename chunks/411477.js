n.d(e, { Z: () => c });
var i = n(200651);
n(192379);
var o = n(120356),
    a = n.n(o),
    r = n(481060),
    l = n(436774),
    s = n(118012),
    d = n(237844);
function c(t) {
    let { text: e, textSize: n = s.Z.Sizes.SIZE_12, textColor: o = s.Z.Colors.STANDARD, className: c, button: u, reducedRightPadding: _ = !1 } = t;
    return (0, i.jsxs)('div', {
        className: a()(_ ? d.noticeWithoutRightPadding : d.noticeWithRightPadding, c),
        children: [
            (0, i.jsxs)('div', {
                className: d.noticeLeft,
                children: [
                    (0, i.jsx)(r.SrA, {
                        size: 'md',
                        className: d.icon,
                        color: l.JX.PREMIUM_TIER_2
                    }),
                    (0, i.jsx)(s.Z, {
                        className: d.text,
                        size: n,
                        color: o,
                        children: e
                    })
                ]
            }),
            u
        ]
    });
}
