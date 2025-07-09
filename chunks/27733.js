n.d(t, { Z: () => c });
var r = n(255367);
n(73800);
var i = n(755721),
    a = n(481060),
    o = n(929204),
    s = n(388032),
    l = n(909917);
function c(e) {
    let { analyticsSection: t, buttonText: n } = e;
    return (0, r.jsxs)(a.gtL, {
        className: l.premiumButton,
        innerClassName: l.premiumButtonInner,
        color: i.zx.Colors.GREEN,
        size: i.zx.Sizes.SMALL,
        onClick: () => (0, o.Z)({ section: t }),
        children: [
            (0, r.jsx)(a.SrA, {
                size: 'md',
                color: 'currentColor',
                className: l.premiumButtonNitroWheel
            }),
            null != n ? n : s.intl.string(s.t['8Sh5fn'])
        ]
    });
}
