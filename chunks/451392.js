n.d(t, { Z: () => _ });
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    l = n(498607),
    a = n.n(l),
    o = n(692547),
    c = n(481060),
    d = n(220082),
    u = n(687158),
    m = n(576635),
    p = n(74538),
    g = n(193528),
    h = n(993413),
    f = n(388032),
    b = n(732391);
function _(e) {
    let { user: t, pendingAvatarSrc: n, pendingColors: r, onThemeColorsChange: l, preventDisabled: _, guildId: x, className: E, showPremiumIcon: j = !0, showResetThemeButton: C = !1, forcedDivider: O } = e,
        S = (0, u.ZP)(t.id, x),
        { primaryColor: v, secondaryColor: T } = (0, m.Z)({
            user: t,
            displayProfile: S,
            pendingThemeColors: r,
            isPreview: !0
        }),
        N = p.ZP.canUsePremiumProfileCustomization(t),
        I = null != n ? n : t.getAvatarURL(x, 80),
        y = (0, c.dQu)(o.Z.unsafe_rawColors.PRIMARY_530).hex(),
        A = (0, d.Cf)(I, y, !1);
    if (null == v || null == T) return null;
    let P = (e) => {
        l(a()(e, null == S ? void 0 : S.themeColors) ? void 0 : e);
    };
    return (0, i.jsx)(h.Z, {
        title: f.intl.string(f.t.DMeO2d),
        disabled: !N && !_,
        className: s()(b.__invalid_profileThemesSection, E),
        showPremiumIcon: j,
        forcedDivider: O,
        children: (0, i.jsxs)('div', {
            className: b.sectionContainer,
            children: [
                (0, i.jsx)('div', {
                    className: b.sparkleContainer,
                    children: (0, i.jsx)(g.Z, {
                        onChange: (e) => P([e, T]),
                        color: v,
                        suggestedColors: A,
                        showEyeDropper: !0,
                        label: (0, i.jsx)(c.Text, {
                            className: b.colorSwatchLabel,
                            color: 'header-secondary',
                            variant: 'text-xs/normal',
                            'aria-hidden': !0,
                            children: f.intl.string(f.t.C3KTQk)
                        })
                    })
                }),
                (0, i.jsx)('div', {
                    className: b.sparkleContainer,
                    children: (0, i.jsx)(g.Z, {
                        onChange: (e) => P([v, e]),
                        color: T,
                        suggestedColors: A,
                        showEyeDropper: !0,
                        label: (0, i.jsx)(c.Text, {
                            className: b.colorSwatchLabel,
                            color: 'header-secondary',
                            variant: 'text-xs/normal',
                            'aria-hidden': !0,
                            children: f.intl.string(f.t['8elvy8'])
                        })
                    })
                }),
                C &&
                    null != x &&
                    (0, i.jsx)(c.zxk, {
                        className: b.resetButton,
                        color: c.zxk.Colors.PRIMARY,
                        look: c.zxk.Looks.LINK,
                        size: c.zxk.Sizes.SMALL,
                        onClick: () => P([null, null]),
                        children: f.intl.string(f.t['L+Gmoa'])
                    })
            ]
        })
    });
}
