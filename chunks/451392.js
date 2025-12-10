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
    p = n(74538),
    _ = n(193528),
    m = n(993413),
    h = n(388032),
    g = n(190941);
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
            forcedDivider: S,
        } = e,
        I = (0, d.ZP)(t.id, b),
        { primaryColor: T, secondaryColor: C } = (0, f.Z)({
            user: t,
            displayProfile: I,
            pendingThemeColors: i,
            isPreview: !0,
        }),
        A = p.ZP.canUsePremiumProfileCustomization(t),
        N = null != n ? n : t.getAvatarURL(b, 80),
        P = (0, c.dQu)(l.Z.unsafe_rawColors.PRIMARY_530).hex(),
        R = (0, u.Cf)(N, P, !1);
    if (null == T || null == C) return null;
    let D = (e) => {
        o(s()(e, null == I ? void 0 : I.themeColors) ? void 0 : e);
    };
    return (0, r.jsx)(m.Z, {
        title: h.intl.string(h.t.DMeO2X),
        disabled: !A && !E,
        className: a()(g.__invalid_profileThemesSection, y),
        showPremiumIcon: O,
        forcedDivider: S,
        children: (0, r.jsxs)("div", {
            className: g.sectionContainer,
            children: [
                (0, r.jsx)("div", {
                    className: g.sparkleContainer,
                    children: (0, r.jsx)(_.Z, {
                        onChange: (e) => D([e, C]),
                        color: T,
                        suggestedColors: R,
                        showEyeDropper: !0,
                        label: (0, r.jsx)(c.Text, {
                            className: g.colorSwatchLabel,
                            color: "text-default",
                            variant: "text-xs/normal",
                            "aria-hidden": !0,
                            children: h.intl.string(h.t.C3KTQk),
                        }),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: g.sparkleContainer,
                    children: (0, r.jsx)(_.Z, {
                        onChange: (e) => D([T, e]),
                        color: C,
                        suggestedColors: R,
                        showEyeDropper: !0,
                        label: (0, r.jsx)(c.Text, {
                            className: g.colorSwatchLabel,
                            color: "text-default",
                            variant: "text-xs/normal",
                            "aria-hidden": !0,
                            children: h.intl.string(h.t["8elvy6"]),
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
                            text: h.intl.string(h.t["L+GmoR"]),
                            onClick: () => D([null, null]),
                        }),
                    }),
            ],
        }),
    });
}
