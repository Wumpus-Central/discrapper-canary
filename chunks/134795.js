n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    a = n(481060),
    l = n(654904),
    o = n(993413),
    c = n(486324),
    d = n(388032),
    u = n(25836);
function m(e) {
    let { showRemoveBannerButton: t, errors: n, onBannerChange: r, guildId: m, className: g, disabled: h = !1, showPremiumIcon: p = !0, isTryItOutFlow: x = !1, forcedDivider: f, withHighlight: _ = !1 } = e,
        E = _ ? a.ShinyButton : a.Button;
    return (0, i.jsx)(o.Z, {
        className: g,
        title: d.intl.string(d.t.Vgdusr),
        showPremiumIcon: p,
        errors: n,
        disabled: h,
        forcedDivider: f,
        children: (0, i.jsxs)('div', {
            className: u.buttonsContainer,
            children: [
                (0, i.jsx)(E, {
                    className: s()({ [u.buttonHighlighted]: _ }),
                    size: a.Button.Sizes.SMALL,
                    onClick: () => (0, l.$r)(c.pC.BANNER, m, x, void 0),
                    children: d.intl.string(d.t.N0bC3N)
                }),
                t &&
                    (0, i.jsx)(a.Button, {
                        className: u.removeButton,
                        color: a.Button.Colors.PRIMARY,
                        look: a.Button.Looks.LINK,
                        size: a.Button.Sizes.SMALL,
                        onClick: () => r(null),
                        children: null != m ? d.intl.string(d.t.jHlJNT) : d.intl.string(d.t.tT9n7O)
                    })
            ]
        })
    });
}
