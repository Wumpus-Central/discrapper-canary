r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    s = r(929204),
    o = r(388032),
    l = r(200911);
function u(e) {
    let { analyticsSection: n, buttonText: r } = e;
    return (0, i.jsxs)(a.ShinyButton, {
        className: l.premiumButton,
        innerClassName: l.premiumButtonInner,
        color: a.Button.Colors.GREEN,
        size: a.Button.Sizes.SMALL,
        onClick: () => (0, s.Z)({ section: n }),
        children: [
            (0, i.jsx)(a.NitroWheelIcon, {
                size: 'md',
                color: 'currentColor',
                className: l.premiumButtonNitroWheel
            }),
            null != r ? r : o.intl.string(o.t['8Sh5fn'])
        ]
    });
}
