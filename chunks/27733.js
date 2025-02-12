n.d(t, { Z: () => l });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(929204),
    s = n(388032),
    o = n(59296);
function l(e) {
    let { analyticsSection: t, buttonText: n } = e;
    return (0, i.jsxs)(r.gtL, {
        className: o.premiumButton,
        innerClassName: o.premiumButtonInner,
        color: r.zxk.Colors.GREEN,
        size: r.zxk.Sizes.SMALL,
        onClick: () => (0, a.Z)({ section: t }),
        children: [
            (0, i.jsx)(r.SrA, {
                size: 'md',
                color: 'currentColor',
                className: o.premiumButtonNitroWheel
            }),
            null != n ? n : s.intl.string(s.t['8Sh5fn'])
        ]
    });
}
