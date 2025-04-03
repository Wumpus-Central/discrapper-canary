n.d(t, { Z: () => m });
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(481060),
    l = n(654904),
    o = n(993413),
    c = n(486324),
    d = n(388032),
    u = n(771066);
function m(e) {
    let { showRemoveBannerButton: t, errors: n, onBannerChange: i, guildId: m, className: g, disabled: p = !1, showPremiumIcon: h = !0, isTryItOutFlow: f = !1, forcedDivider: b, withHighlight: N = !1 } = e,
        x = N ? a.gtL : a.zxk;
    return (0, r.jsx)(o.Z, {
        className: g,
        title: d.NW.string(d.t.Vgdusr),
        showPremiumIcon: h,
        errors: n,
        disabled: p,
        forcedDivider: b,
        children: (0, r.jsxs)('div', {
            className: u.buttonsContainer,
            children: [
                (0, r.jsx)(x, {
                    className: s()({ [u.buttonHighlighted]: N }),
                    size: a.zxk.Sizes.SMALL,
                    onClick: () => (0, l.$r)(c.pC.BANNER, m, f, void 0),
                    children: d.NW.string(d.t.N0bC3N)
                }),
                t &&
                    (0, r.jsx)(a.zxk, {
                        className: u.removeButton,
                        color: a.zxk.Colors.PRIMARY,
                        look: a.zxk.Looks.LINK,
                        size: a.zxk.Sizes.SMALL,
                        onClick: () => i(null),
                        children: null != m ? d.NW.string(d.t.jHlJNT) : d.NW.string(d.t.tT9n7O)
                    })
            ]
        })
    });
}
