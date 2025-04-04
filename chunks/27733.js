n.d(t, { Z: () => l });
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(929204),
    a = n(388032),
    s = n(909917);
function l(e) {
    let { analyticsSection: t, buttonText: n } = e;
    return (0, r.jsxs)(i.gtL, {
        className: s.premiumButton,
        innerClassName: s.premiumButtonInner,
        color: i.zxk.Colors.GREEN,
        size: i.zxk.Sizes.SMALL,
        onClick: () => (0, o.Z)({ section: t }),
        children: [
            (0, r.jsx)(i.SrA, {
                size: 'md',
                color: 'currentColor',
                className: s.premiumButtonNitroWheel
            }),
            null != n ? n : a.NW.string(a.t['8Sh5fn'])
        ]
    });
}
