n.d(t, { Z: () => m });
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(481060),
    a = n(654904),
    o = n(993413),
    c = n(486324),
    d = n(388032),
    u = n(25836);
function m(e) {
    let { showRemoveBannerButton: t, errors: n, onBannerChange: s, guildId: m, className: h, disabled: g = !1, showPremiumIcon: _ = !0, isTryItOutFlow: x = !1, forcedDivider: p, withHighlight: E = !1 } = e,
        C = E ? l.gtL : l.zxk;
    return (0, i.jsx)(o.Z, {
        className: h,
        title: d.intl.string(d.t.Vgdusr),
        showPremiumIcon: _,
        errors: n,
        disabled: g,
        forcedDivider: p,
        children: (0, i.jsxs)('div', {
            className: u.buttonsContainer,
            children: [
                (0, i.jsx)(C, {
                    className: r()({ [u.buttonHighlighted]: E }),
                    size: l.zxk.Sizes.SMALL,
                    onClick: () => (0, a.$r)(c.pC.BANNER, m, x, void 0),
                    children: d.intl.string(d.t.N0bC3N)
                }),
                t &&
                    (0, i.jsx)(l.zxk, {
                        className: u.removeButton,
                        color: l.zxk.Colors.PRIMARY,
                        look: l.zxk.Looks.LINK,
                        size: l.zxk.Sizes.SMALL,
                        onClick: () => s(null),
                        children: null != m ? d.intl.string(d.t.jHlJNT) : d.intl.string(d.t.tT9n7O)
                    })
            ]
        })
    });
}
