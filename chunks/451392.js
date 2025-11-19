n.d(t, { Z: () => E });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(498607),
    s = n.n(o),
    l = n(692547),
    c = n(481060),
    u = n(220082),
    d = n(687158),
    f = n(576635),
    _ = n(74538),
    p = n(193528),
    h = n(993413),
    m = n(388032),
    g = n(818210);
function E(e) {
    let {
            user: t,
            pendingAvatarSrc: n,
            pendingColors: i,
            onThemeColorsChange: o,
            preventDisabled: E,
            guildId: b,
            className: y,
            showPremiumIcon: O = !0,
            showResetThemeButton: v = !1,
            forcedDivider: I,
        } = e,
        T = (0, d.ZP)(t.id, b),
        { primaryColor: S, secondaryColor: A } = (0, f.Z)({
            user: t,
            displayProfile: T,
            pendingThemeColors: i,
            isPreview: !0,
        }),
        C = _.ZP.canUsePremiumProfileCustomization(t),
        N = null != n ? n : t.getAvatarURL(b, 80),
        R = (0, c.dQu)(l.Z.unsafe_rawColors.PRIMARY_530).hex(),
        P = (0, u.Cf)(N, R, !1);
    if (null == S || null == A) return null;
    let D = (e) => {
        o(s()(e, null == T ? void 0 : T.themeColors) ? void 0 : e);
    };
    return (0, r.jsx)(h.Z, {
        title: m.intl.string(m.t.DMeO2X),
        disabled: !C && !E,
        className: a()(g.__invalid_profileThemesSection, y),
        showPremiumIcon: O,
        forcedDivider: I,
        children: (0, r.jsxs)("div", {
            className: g.sectionContainer,
            children: [
                (0, r.jsx)("div", {
                    className: g.sparkleContainer,
                    children: (0, r.jsx)(p.Z, {
                        onChange: (e) => D([e, A]),
                        color: S,
                        suggestedColors: P,
                        showEyeDropper: !0,
                        label: (0, r.jsx)(c.Text, {
                            className: g.colorSwatchLabel,
                            color: "header-secondary",
                            variant: "text-xs/normal",
                            "aria-hidden": !0,
                            children: m.intl.string(m.t.C3KTQk),
                        }),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: g.sparkleContainer,
                    children: (0, r.jsx)(p.Z, {
                        onChange: (e) => D([S, e]),
                        color: A,
                        suggestedColors: P,
                        showEyeDropper: !0,
                        label: (0, r.jsx)(c.Text, {
                            className: g.colorSwatchLabel,
                            color: "header-secondary",
                            variant: "text-xs/normal",
                            "aria-hidden": !0,
                            children: m.intl.string(m.t["8elvy6"]),
                        }),
                    }),
                }),
                v &&
                    null != b &&
                    (0, r.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: g.resetButton,
                        children: (0, r.jsx)(c.Button, {
                            variant: "secondary",
                            size: "sm",
                            text: m.intl.string(m.t["L+GmoR"]),
                            onClick: () => D([null, null]),
                        }),
                    }),
            ],
        }),
    });
}
