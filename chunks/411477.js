n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var a = n(120356),
    o = n.n(a),
    r = n(481060),
    l = n(436774),
    c = n(118012),
    s = n(237844);
function d(e) {
    let { text: t, textSize: n = c.Z.Sizes.SIZE_12, textColor: a = c.Z.Colors.STANDARD, className: d, button: u, reducedRightPadding: f = !1 } = e;
    return (0, i.jsxs)('div', {
        className: o()(f ? s.noticeWithoutRightPadding : s.noticeWithRightPadding, d),
        children: [
            (0, i.jsxs)('div', {
                className: s.noticeLeft,
                children: [
                    (0, i.jsx)(r.SrA, {
                        size: 'md',
                        className: s.icon,
                        color: l.JX.PREMIUM_TIER_2
                    }),
                    (0, i.jsx)(c.Z, {
                        className: s.text,
                        size: n,
                        color: a,
                        children: t
                    })
                ]
            }),
            u
        ]
    });
}
