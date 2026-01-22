n.d(t, {
    A: () => E,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(33851),
    o = n.n(s),
    l = n(827734),
    c = n(397927),
    u = n(654107),
    d = n(950191),
    f = n(101928),
    p = n(927578),
    _ = n(911180),
    h = n(128450),
    m = n(985018),
    g = n(114403);

function E(e) {
    let {
            user: t,
            pendingAvatarSrc: n,
            pendingColors: i,
            onThemeColorsChange: s,
            preventDisabled: E,
            guildId: b,
            className: y,
            showPremiumIcon: O = !0,
            showResetThemeButton: A = !1,
            forcedDivider: v,
        } = e,
        S = (0, d.Ay)(t.id, b),
        { primaryColor: I, secondaryColor: T } = (0, f.A)({
            user: t,
            displayProfile: S,
            pendingThemeColors: i,
            isPreview: !0,
        }),
        C = p.Ay.canUsePremiumProfileCustomization(t),
        N = null != n ? n : t.getAvatarURL(b, 80),
        R = (0, c.rdh)(l.A.unsafe_rawColors.PRIMARY_530).hex(),
        w = (0, u.rh)(N, R, !1);
    if (null == I || null == T) return null;
    let P = (e) => {
        s(o()(e, null == S ? void 0 : S.themeColors) ? void 0 : e);
    };
    return (0, r.jsx)(h.A, {
        title: m.intl.string(m.t.DMeO2X),
        disabled: !C && !E,
        className: a()(g.__invalid_profileThemesSection, y),
        showPremiumIcon: O,
        forcedDivider: v,
        children: (0, r.jsxs)("div", {
            className: g.hd,
            children: [
                (0, r.jsx)("div", {
                    className: g.YX,
                    children: (0, r.jsx)(_.A, {
                        onChange: (e) => P([e, T]),
                        color: I,
                        suggestedColors: w,
                        showEyeDropper: !0,
                        label: (0, r.jsx)(c.Text, {
                            className: g.yz,
                            color: "text-default",
                            variant: "text-xs/normal",
                            "aria-hidden": !0,
                            children: m.intl.string(m.t.C3KTQk),
                        }),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: g.YX,
                    children: (0, r.jsx)(_.A, {
                        onChange: (e) => P([I, e]),
                        color: T,
                        suggestedColors: w,
                        showEyeDropper: !0,
                        label: (0, r.jsx)(c.Text, {
                            className: g.yz,
                            color: "text-default",
                            variant: "text-xs/normal",
                            "aria-hidden": !0,
                            children: m.intl.string(m.t["8elvy6"]),
                        }),
                    }),
                }),
                A &&
                    null != b &&
                    (0, r.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: g.WA,
                        children: (0, r.jsx)(c.Button, {
                            variant: "secondary",
                            size: "sm",
                            text: m.intl.string(m.t["L+GmoR"]),
                            onClick: () => P([null, null]),
                        }),
                    }),
            ],
        }),
    });
}
