n.d(i, {
    Z: function () {
        return d;
    }
});
var t = n(200651);
n(192379);
var o = n(120356),
    r = n.n(o),
    l = n(481060),
    a = n(436774),
    c = n(118012),
    s = n(392842);
function d(e) {
    let { text: i, textSize: n = c.Z.Sizes.SIZE_12, textColor: o = c.Z.Colors.STANDARD, className: d, button: u, reducedRightPadding: g = !1 } = e;
    return (0, t.jsxs)('div', {
        className: r()(g ? s.noticeWithoutRightPadding : s.noticeWithRightPadding, d),
        children: [
            (0, t.jsxs)('div', {
                className: s.noticeLeft,
                children: [
                    (0, t.jsx)(l.NitroWheelIcon, {
                        size: 'md',
                        className: s.icon,
                        color: a.JX.PREMIUM_TIER_2
                    }),
                    (0, t.jsx)(c.Z, {
                        className: s.text,
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
