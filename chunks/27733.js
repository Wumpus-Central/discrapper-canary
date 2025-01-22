r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    o = r(929204),
    s = r(388032),
    l = r(200911);
function u(e) {
    let { analyticsSection: n, buttonText: r } = e;
    return (0, i.jsxs)(a.ShinyButton, {
        className: l.premiumButton,
        innerClassName: l.premiumButtonInner,
        color: a.Button.Colors.GREEN,
        size: a.Button.Sizes.SMALL,
        onClick: () => (0, o.Z)({ section: n }),
        children: [
            (0, i.jsx)(a.NitroWheelIcon, {
                size: 'md',
                color: 'currentColor',
                className: l.premiumButtonNitroWheel
            }),
            null != r ? r : s.intl.string(s.t['8Sh5fn'])
        ]
    });
}
