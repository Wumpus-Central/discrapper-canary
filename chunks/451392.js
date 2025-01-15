n.d(t, {
    Z: function () {
        return _;
    }
});
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    a = n(498607),
    l = n.n(a),
    o = n(692547),
    c = n(481060),
    d = n(220082),
    u = n(687158),
    m = n(576635),
    g = n(74538),
    h = n(193528),
    p = n(993413),
    x = n(388032),
    f = n(139019);
function _(e) {
    let { user: t, pendingAvatar: n, pendingColors: s, onThemeColorsChange: a, preventDisabled: _, guildId: E, className: C, showPremiumIcon: T = !0, showResetThemeButton: S = !1, forcedDivider: b } = e,
        I = (0, u.ZP)(t.id, E),
        { primaryColor: N, secondaryColor: v } = (0, m.Z)({
            user: t,
            displayProfile: I,
            pendingThemeColors: s,
            isPreview: !0
        }),
        A = g.ZP.canUsePremiumProfileCustomization(t),
        j = null != n ? n : t.getAvatarURL(E, 80),
        R = (0, c.useToken)(o.Z.unsafe_rawColors.PRIMARY_530).hex(),
        O = (0, d.Cf)(j, R, !1);
    if (null == N || null == v) return null;
    let P = (e) => {
        a(l()(e, null == I ? void 0 : I.themeColors) ? void 0 : e);
    };
    return (0, i.jsx)(p.Z, {
        title: x.intl.string(x.t.DMeO2d),
        disabled: !A && !_,
        className: r()(f.__invalid_profileThemesSection, C),
        showPremiumIcon: T,
        forcedDivider: b,
        children: (0, i.jsxs)('div', {
            className: f.sectionContainer,
            children: [
                (0, i.jsx)('div', {
                    className: f.sparkleContainer,
                    children: (0, i.jsx)(h.Z, {
                        onChange: (e) => P([e, v]),
                        color: N,
                        suggestedColors: O,
                        showEyeDropper: !0,
                        label: (0, i.jsx)(c.Text, {
                            className: f.colorSwatchLabel,
                            color: 'header-secondary',
                            variant: 'text-xs/normal',
                            'aria-hidden': !0,
                            children: x.intl.string(x.t.C3KTQk)
                        })
                    })
                }),
                (0, i.jsx)('div', {
                    className: f.sparkleContainer,
                    children: (0, i.jsx)(h.Z, {
                        onChange: (e) => P([N, e]),
                        color: v,
                        suggestedColors: O,
                        showEyeDropper: !0,
                        label: (0, i.jsx)(c.Text, {
                            className: f.colorSwatchLabel,
                            color: 'header-secondary',
                            variant: 'text-xs/normal',
                            'aria-hidden': !0,
                            children: x.intl.string(x.t['8elvy8'])
                        })
                    })
                }),
                S &&
                    null != E &&
                    (0, i.jsx)(c.Button, {
                        className: f.resetButton,
                        color: c.Button.Colors.PRIMARY,
                        look: c.Button.Looks.LINK,
                        size: c.Button.Sizes.SMALL,
                        onClick: () => P([null, null]),
                        children: x.intl.string(x.t['L+Gmoa'])
                    })
            ]
        })
    });
}
