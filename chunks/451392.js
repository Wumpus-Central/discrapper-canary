n.d(t, { Z: () => E });
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(498607),
    a = n.n(l),
    o = n(692547),
    c = n(481060),
    d = n(220082),
    u = n(687158),
    m = n(576635),
    g = n(74538),
    h = n(193528),
    x = n(993413),
    _ = n(388032),
    p = n(480548);
function E(e) {
    let { user: t, pendingAvatar: n, pendingColors: s, onThemeColorsChange: l, preventDisabled: E, guildId: C, className: f, showPremiumIcon: T = !0, showResetThemeButton: N = !1, forcedDivider: S } = e,
        I = (0, u.ZP)(t.id, C),
        { primaryColor: b, secondaryColor: v } = (0, m.Z)({
            user: t,
            displayProfile: I,
            pendingThemeColors: s,
            isPreview: !0
        }),
        j = g.ZP.canUsePremiumProfileCustomization(t),
        A = null != n ? n : t.getAvatarURL(C, 80),
        O = (0, c.dQu)(o.Z.unsafe_rawColors.PRIMARY_530).hex(),
        R = (0, d.Cf)(A, O, !1);
    if (null == b || null == v) return null;
    let P = (e) => {
        l(a()(e, null == I ? void 0 : I.themeColors) ? void 0 : e);
    };
    return (0, i.jsx)(x.Z, {
        title: _.intl.string(_.t.DMeO2d),
        disabled: !j && !E,
        className: r()(p.__invalid_profileThemesSection, f),
        showPremiumIcon: T,
        forcedDivider: S,
        children: (0, i.jsxs)('div', {
            className: p.sectionContainer,
            children: [
                (0, i.jsx)('div', {
                    className: p.sparkleContainer,
                    children: (0, i.jsx)(h.Z, {
                        onChange: (e) => P([e, v]),
                        color: b,
                        suggestedColors: R,
                        showEyeDropper: !0,
                        label: (0, i.jsx)(c.Text, {
                            className: p.colorSwatchLabel,
                            color: 'header-secondary',
                            variant: 'text-xs/normal',
                            'aria-hidden': !0,
                            children: _.intl.string(_.t.C3KTQk)
                        })
                    })
                }),
                (0, i.jsx)('div', {
                    className: p.sparkleContainer,
                    children: (0, i.jsx)(h.Z, {
                        onChange: (e) => P([b, e]),
                        color: v,
                        suggestedColors: R,
                        showEyeDropper: !0,
                        label: (0, i.jsx)(c.Text, {
                            className: p.colorSwatchLabel,
                            color: 'header-secondary',
                            variant: 'text-xs/normal',
                            'aria-hidden': !0,
                            children: _.intl.string(_.t['8elvy8'])
                        })
                    })
                }),
                N &&
                    null != C &&
                    (0, i.jsx)(c.zxk, {
                        className: p.resetButton,
                        color: c.zxk.Colors.PRIMARY,
                        look: c.zxk.Looks.LINK,
                        size: c.zxk.Sizes.SMALL,
                        onClick: () => P([null, null]),
                        children: _.intl.string(_.t['L+Gmoa'])
                    })
            ]
        })
    });
}
