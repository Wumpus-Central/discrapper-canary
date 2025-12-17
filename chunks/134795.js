n.d(t, { Z: () => _ });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(755721),
    s = n(481060),
    l = n(906732),
    c = n(654904),
    u = n(993413),
    d = n(486324),
    f = n(388032),
    p = n(154626);
function _(e) {
    let {
            showRemoveBannerButton: t,
            errors: n,
            onBannerChange: i,
            guildId: _,
            className: m,
            disabled: h = !1,
            showPremiumIcon: g = !0,
            isTryItOut: E = !1,
            forcedDivider: b,
            withHighlight: y = !1,
        } = e,
        { newestAnalyticsLocation: O } = (0, l.ZP)(),
        v = y ? s.gtL : o.zx;
    return (0, r.jsx)(u.Z, {
        className: m,
        title: f.intl.string(f.t.Vgdusv),
        showPremiumIcon: g,
        errors: n,
        disabled: h,
        forcedDivider: b,
        children: (0, r.jsxs)("div", {
            className: p.buttonsContainer,
            children: [
                (0, r.jsx)(v, {
                    className: a()({ [p.buttonHighlighted]: y }),
                    size: o.zx.Sizes.SMALL,
                    onClick: () =>
                        (0, c.$r)({
                            uploadType: d.pC.BANNER,
                            analyticsSource: O,
                            guildId: _,
                            isTryItOut: E,
                        }),
                    children: f.intl.string(f.t.N0bC3P),
                }),
                t &&
                    (0, r.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: p.removeButton,
                        children: (0, r.jsx)(s.Button, {
                            variant: "secondary",
                            size: "sm",
                            text: null != _ ? f.intl.string(f.t.jHlJNS) : f.intl.string(f.t.tT9n7D),
                            onClick: () => i(null),
                        }),
                    }),
            ],
        }),
    });
}
