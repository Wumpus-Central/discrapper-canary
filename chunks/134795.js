n.d(t, { Z: () => h });
var i = n(200651);
n(192379);
var s = n(120356),
    l = n.n(s),
    r = n(481060),
    a = n(654904),
    o = n(993413),
    c = n(486324),
    d = n(388032),
    u = n(651885);
function h(e) {
    let { showRemoveBannerButton: t, errors: n, onBannerChange: s, guildId: h, className: m, disabled: g = !1, showPremiumIcon: x = !0, isTryItOutFlow: _ = !1, forcedDivider: p, withHighlight: E = !1 } = e,
        C = E ? r.gtL : r.zxk;
    return (0, i.jsx)(o.Z, {
        className: m,
        title: d.intl.string(d.t.Vgdusr),
        showPremiumIcon: x,
        errors: n,
        disabled: g,
        forcedDivider: p,
        children: (0, i.jsxs)('div', {
            className: u.buttonsContainer,
            children: [
                (0, i.jsx)(C, {
                    className: l()({ [u.buttonHighlighted]: E }),
                    size: r.zxk.Sizes.SMALL,
                    onClick: () => (0, a.$r)(c.pC.BANNER, h, _, void 0),
                    children: d.intl.string(d.t.N0bC3N)
                }),
                t &&
                    (0, i.jsx)(r.zxk, {
                        className: u.removeButton,
                        color: r.zxk.Colors.PRIMARY,
                        look: r.zxk.Looks.LINK,
                        size: r.zxk.Sizes.SMALL,
                        onClick: () => s(null),
                        children: null != h ? d.intl.string(d.t.jHlJNT) : d.intl.string(d.t.tT9n7O)
                    })
            ]
        })
    });
}
