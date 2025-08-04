n.d(t, { Z: () => g });
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    a = n(755721),
    l = n(481060),
    o = n(906732),
    c = n(654904),
    d = n(993413),
    u = n(486324),
    m = n(388032),
    p = n(771066);
function g(e) {
    let { showRemoveBannerButton: t, errors: n, onBannerChange: r, guildId: g, className: h, disabled: f = !1, showPremiumIcon: b = !0, isTryItOutFlow: x = !1, forcedDivider: _, withHighlight: j = !1 } = e,
        { newestAnalyticsLocation: C } = (0, o.ZP)(),
        E = j ? l.gtL : a.zx;
    return (0, i.jsx)(d.Z, {
        className: h,
        title: m.intl.string(m.t.Vgdusr),
        showPremiumIcon: b,
        errors: n,
        disabled: f,
        forcedDivider: _,
        children: (0, i.jsxs)('div', {
            className: p.buttonsContainer,
            children: [
                (0, i.jsx)(E, {
                    className: s()({ [p.buttonHighlighted]: j }),
                    size: a.zx.Sizes.SMALL,
                    onClick: () =>
                        (0, c.$r)({
                            uploadType: u.pC.BANNER,
                            analyticsSource: C,
                            guildId: g,
                            isTryItOutFlow: x
                        }),
                    children: m.intl.string(m.t.N0bC3N)
                }),
                t &&
                    (0, i.jsx)('div', {
                        'data-button-hoisted-classname-wrapper': !0,
                        className: p.removeButton,
                        children: (0, i.jsx)(l.zxk, {
                            variant: 'secondary',
                            size: 'sm',
                            text: null != g ? m.intl.string(m.t.jHlJNT) : m.intl.string(m.t.tT9n7O),
                            onClick: () => r(null)
                        })
                    })
            ]
        })
    });
}
