n.d(t, { Z: () => x });
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    a = n(498607),
    l = n.n(a),
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
function x(e) {
    let { user: t, pendingAvatarSrc: n, pendingColors: r, onThemeColorsChange: a, preventDisabled: x, guildId: _, className: j, showPremiumIcon: C = !0, showResetThemeButton: O = !1, forcedDivider: E } = e,
        v = (0, u.ZP)(t.id, _),
        { primaryColor: S, secondaryColor: T } = (0, m.Z)({
            user: t,
            displayProfile: v,
            pendingThemeColors: r,
            isPreview: !0
        }),
        N = p.ZP.canUsePremiumProfileCustomization(t),
        I = null != n ? n : t.getAvatarURL(_, 80),
        y = (0, c.dQu)(o.Z.unsafe_rawColors.PRIMARY_530).hex(),
        A = (0, d.Cf)(I, y, !1);
    if (null == S || null == T) return null;
    let P = (e) => {
        a(l()(e, null == v ? void 0 : v.themeColors) ? void 0 : e);
    };
    return (0, i.jsx)(h.Z, {
        title: f.intl.string(f.t.DMeO2d),
        disabled: !N && !x,
        className: s()(b.__invalid_profileThemesSection, j),
        showPremiumIcon: C,
        forcedDivider: E,
        children: (0, i.jsxs)('div', {
            className: b.sectionContainer,
            children: [
                (0, i.jsx)('div', {
                    className: b.sparkleContainer,
                    children: (0, i.jsx)(g.Z, {
                        onChange: (e) => P([e, T]),
                        color: S,
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
                        onChange: (e) => P([S, e]),
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
                O &&
                    null != _ &&
                    (0, i.jsx)('div', {
                        'data-button-hoisted-classname-wrapper': !0,
                        className: b.resetButton,
                        children: (0, i.jsx)(c.zxk, {
                            variant: 'secondary',
                            size: 'sm',
                            text: f.intl.string(f.t['L+Gmoa']),
                            onClick: () => P([null, null])
                        })
                    })
            ]
        })
    });
}
