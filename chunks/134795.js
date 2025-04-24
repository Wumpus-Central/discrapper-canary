n.d(t, { Z: () => p });
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    l = n(481060),
    a = n(906732),
    o = n(654904),
    c = n(993413),
    d = n(486324),
    u = n(388032),
    m = n(771066);
function p(e) {
    let { showRemoveBannerButton: t, errors: n, onBannerChange: r, guildId: p, className: g, disabled: h = !1, showPremiumIcon: f = !0, isTryItOutFlow: b = !1, forcedDivider: _, withHighlight: x = !1 } = e,
        { newestAnalyticsLocation: E } = (0, a.ZP)(),
        C = x ? l.gtL : l.zxk;
    return (0, i.jsx)(c.Z, {
        className: g,
        title: u.intl.string(u.t.Vgdusr),
        showPremiumIcon: f,
        errors: n,
        disabled: h,
        forcedDivider: _,
        children: (0, i.jsxs)('div', {
            className: m.buttonsContainer,
            children: [
                (0, i.jsx)(C, {
                    className: s()({ [m.buttonHighlighted]: x }),
                    size: l.zxk.Sizes.SMALL,
                    onClick: () =>
                        (0, o.$r)({
                            uploadType: d.pC.BANNER,
                            analyticsSource: E,
                            guildId: p,
                            isTryItOutFlow: b
                        }),
                    children: u.intl.string(u.t.N0bC3N)
                }),
                t &&
                    (0, i.jsx)(l.zxk, {
                        className: m.removeButton,
                        color: l.zxk.Colors.PRIMARY,
                        look: l.zxk.Looks.LINK,
                        size: l.zxk.Sizes.SMALL,
                        onClick: () => r(null),
                        children: null != p ? u.intl.string(u.t.jHlJNT) : u.intl.string(u.t.tT9n7O)
                    })
            ]
        })
    });
}
