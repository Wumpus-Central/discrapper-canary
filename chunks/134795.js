n.d(t, { Z: () => m });
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    l = n(481060),
    a = n(654904),
    o = n(993413),
    c = n(486324),
    d = n(388032),
    u = n(771066);
function m(e) {
    let { showRemoveBannerButton: t, errors: n, onBannerChange: r, guildId: m, className: g, disabled: p = !1, showPremiumIcon: h = !0, isTryItOutFlow: f = !1, forcedDivider: b, withHighlight: _ = !1 } = e,
        x = _ ? l.gtL : l.zxk;
    return (0, i.jsx)(o.Z, {
        className: g,
        title: d.intl.string(d.t.Vgdusr),
        showPremiumIcon: h,
        errors: n,
        disabled: p,
        forcedDivider: b,
        children: (0, i.jsxs)('div', {
            className: u.buttonsContainer,
            children: [
                (0, i.jsx)(x, {
                    className: s()({ [u.buttonHighlighted]: _ }),
                    size: l.zxk.Sizes.SMALL,
                    onClick: () => (0, a.$r)(c.pC.BANNER, m, f, void 0),
                    children: d.intl.string(d.t.N0bC3N)
                }),
                t &&
                    (0, i.jsx)(l.zxk, {
                        className: u.removeButton,
                        color: l.zxk.Colors.PRIMARY,
                        look: l.zxk.Looks.LINK,
                        size: l.zxk.Sizes.SMALL,
                        onClick: () => r(null),
                        children: null != m ? d.intl.string(d.t.jHlJNT) : d.intl.string(d.t.tT9n7O)
                    })
            ]
        })
    });
}
