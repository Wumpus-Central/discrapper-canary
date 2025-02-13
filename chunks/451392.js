n.d(t, { Z: () => E });
var i = n(200651);
n(192379);
var s = n(120356),
    l = n.n(s),
    r = n(498607),
    a = n.n(r),
    o = n(692547),
    c = n(481060),
    d = n(220082),
    u = n(687158),
    h = n(576635),
    m = n(74538),
    g = n(193528),
    x = n(993413),
    _ = n(388032),
    p = n(155352);
function E(e) {
    let { user: t, pendingAvatar: n, pendingColors: s, onThemeColorsChange: r, preventDisabled: E, guildId: C, className: N, showPremiumIcon: f = !0, showResetThemeButton: I = !1, forcedDivider: T } = e,
        S = (0, u.ZP)(t.id, C),
        { primaryColor: j, secondaryColor: v } = (0, h.Z)({
            user: t,
            displayProfile: S,
            pendingThemeColors: s,
            isPreview: !0
        }),
        b = m.ZP.canUsePremiumProfileCustomization(t),
        A = null != n ? n : t.getAvatarURL(C, 80),
        O = (0, c.dQu)(o.Z.unsafe_rawColors.PRIMARY_530).hex(),
        R = (0, d.Cf)(A, O, !1);
    if (null == j || null == v) return null;
    let D = (e) => {
        r(a()(e, null == S ? void 0 : S.themeColors) ? void 0 : e);
    };
    return (0, i.jsx)(x.Z, {
        title: _.intl.string(_.t.DMeO2d),
        disabled: !b && !E,
        className: l()(p.__invalid_profileThemesSection, N),
        showPremiumIcon: f,
        forcedDivider: T,
        children: (0, i.jsxs)('div', {
            className: p.sectionContainer,
            children: [
                (0, i.jsx)('div', {
                    className: p.sparkleContainer,
                    children: (0, i.jsx)(g.Z, {
                        onChange: (e) => D([e, v]),
                        color: j,
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
                    children: (0, i.jsx)(g.Z, {
                        onChange: (e) => D([j, e]),
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
                I &&
                    null != C &&
                    (0, i.jsx)(c.zxk, {
                        className: p.resetButton,
                        color: c.zxk.Colors.PRIMARY,
                        look: c.zxk.Looks.LINK,
                        size: c.zxk.Sizes.SMALL,
                        onClick: () => D([null, null]),
                        children: _.intl.string(_.t['L+Gmoa'])
                    })
            ]
        })
    });
}
