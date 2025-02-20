n.d(t, { Z: () => N });
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(498607),
    l = n.n(a),
    o = n(692547),
    c = n(481060),
    d = n(220082),
    u = n(687158),
    m = n(576635),
    g = n(74538),
    p = n(193528),
    h = n(993413),
    f = n(388032),
    b = n(530398);
function N(e) {
    let { user: t, pendingAvatar: n, pendingColors: i, onThemeColorsChange: a, preventDisabled: N, guildId: x, className: _, showPremiumIcon: E = !0, showResetThemeButton: j = !1, forcedDivider: C } = e,
        O = (0, u.ZP)(t.id, x),
        { primaryColor: v, secondaryColor: S } = (0, m.Z)({
            user: t,
            displayProfile: O,
            pendingThemeColors: i,
            isPreview: !0
        }),
        T = g.ZP.canUsePremiumProfileCustomization(t),
        I = null != n ? n : t.getAvatarURL(x, 80),
        y = (0, c.dQu)(o.Z.unsafe_rawColors.PRIMARY_530).hex(),
        A = (0, d.Cf)(I, y, !1);
    if (null == v || null == S) return null;
    let P = (e) => {
        a(l()(e, null == O ? void 0 : O.themeColors) ? void 0 : e);
    };
    return (0, r.jsx)(h.Z, {
        title: f.NW.string(f.t.DMeO2d),
        disabled: !T && !N,
        className: s()(b.__invalid_profileThemesSection, _),
        showPremiumIcon: E,
        forcedDivider: C,
        children: (0, r.jsxs)('div', {
            className: b.sectionContainer,
            children: [
                (0, r.jsx)('div', {
                    className: b.sparkleContainer,
                    children: (0, r.jsx)(p.Z, {
                        onChange: (e) => P([e, S]),
                        color: v,
                        suggestedColors: A,
                        showEyeDropper: !0,
                        label: (0, r.jsx)(c.Text, {
                            className: b.colorSwatchLabel,
                            color: 'header-secondary',
                            variant: 'text-xs/normal',
                            'aria-hidden': !0,
                            children: f.NW.string(f.t.C3KTQk)
                        })
                    })
                }),
                (0, r.jsx)('div', {
                    className: b.sparkleContainer,
                    children: (0, r.jsx)(p.Z, {
                        onChange: (e) => P([v, e]),
                        color: S,
                        suggestedColors: A,
                        showEyeDropper: !0,
                        label: (0, r.jsx)(c.Text, {
                            className: b.colorSwatchLabel,
                            color: 'header-secondary',
                            variant: 'text-xs/normal',
                            'aria-hidden': !0,
                            children: f.NW.string(f.t['8elvy8'])
                        })
                    })
                }),
                j &&
                    null != x &&
                    (0, r.jsx)(c.zxk, {
                        className: b.resetButton,
                        color: c.zxk.Colors.PRIMARY,
                        look: c.zxk.Looks.LINK,
                        size: c.zxk.Sizes.SMALL,
                        onClick: () => P([null, null]),
                        children: f.NW.string(f.t['L+Gmoa'])
                    })
            ]
        })
    });
}
