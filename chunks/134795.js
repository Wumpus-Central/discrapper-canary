n.d(t, { Z: () => p });
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
    _ = n(808639);
function p(e) {
    let {
            showRemoveBannerButton: t,
            errors: n,
            onBannerChange: i,
            guildId: p,
            className: h,
            disabled: m = !1,
            showPremiumIcon: g = !0,
            isTryItOut: E = !1,
            forcedDivider: b,
            withHighlight: y = !1,
        } = e,
        { newestAnalyticsLocation: O } = (0, l.ZP)(),
        v = y ? s.gtL : o.zx;
    return (0, r.jsx)(u.Z, {
        className: h,
        title: f.intl.string(f.t.Vgdusv),
        showPremiumIcon: g,
        errors: n,
        disabled: m,
        forcedDivider: b,
        children: (0, r.jsxs)("div", {
            className: _.buttonsContainer,
            children: [
                (0, r.jsx)(v, {
                    className: a()({ [_.buttonHighlighted]: y }),
                    size: o.zx.Sizes.SMALL,
                    onClick: () =>
                        (0, c.$r)({
                            uploadType: d.pC.BANNER,
                            analyticsSource: O,
                            guildId: p,
                            isTryItOut: E,
                        }),
                    children: f.intl.string(f.t.N0bC3P),
                }),
                t &&
                    (0, r.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: _.removeButton,
                        children: (0, r.jsx)(s.Button, {
                            variant: "secondary",
                            size: "sm",
                            text: null != p ? f.intl.string(f.t.jHlJNS) : f.intl.string(f.t.tT9n7D),
                            onClick: () => i(null),
                        }),
                    }),
            ],
        }),
    });
}
