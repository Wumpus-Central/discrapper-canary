n.d(e, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var o = n(120356),
    a = n.n(o),
    r = n(481060),
    s = n(436774),
    l = n(118012),
    c = n(392842);
function u(t) {
    let { text: e, textSize: n = l.Z.Sizes.SIZE_12, textColor: o = l.Z.Colors.STANDARD, className: u, button: d, reducedRightPadding: b = !1 } = t;
    return (0, i.jsxs)('div', {
        className: a()(b ? c.noticeWithoutRightPadding : c.noticeWithRightPadding, u),
        children: [
            (0, i.jsxs)('div', {
                className: c.noticeLeft,
                children: [
                    (0, i.jsx)(r.NitroWheelIcon, {
                        size: 'md',
                        className: c.icon,
                        color: s.JX.PREMIUM_TIER_2
                    }),
                    (0, i.jsx)(l.Z, {
                        className: c.text,
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
