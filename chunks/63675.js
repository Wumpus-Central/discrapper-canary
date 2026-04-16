n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(33851),
    a = n.n(r),
    o = n(827734),
    d = n(397927),
    c = n(654107),
    u = n(950191),
    m = n(101928),
    g = n(927578),
    _ = n(911180),
    x = n(128450),
    h = n(985018),
    A = n(362656);
function p(e) {
    let {
            user: t,
            pendingAvatarSrc: n,
            pendingColors: s,
            onThemeColorsChange: r,
            preventDisabled: p,
            guildId: T,
            className: f,
            showPremiumIcon: S = !0,
            showResetThemeButton: E = !1,
            forcedDivider: b,
        } = e,
        C = (0, u.Ay)(t.id, T),
        { primaryColor: v, secondaryColor: N } = (0, m.A)({
            user: t,
            displayProfile: C,
            pendingThemeColors: s,
            isPreview: !0,
        }),
        I = g.Ay.canUsePremiumProfileCustomization(t),
        j = null != n ? n : t.getAvatarURL(T, 80),
        y = (0, d.rdh)(o.A.unsafe_rawColors.PRIMARY_530).hex(),
        O = (0, c.rh)(j, y, !1);
    if (null == v || null == N) return null;
    let R = (e) => {
        r(a()(e, C?.themeColors) ? void 0 : e);
    };
    return (0, i.jsx)(x.A, {
        title: h.intl.string(h.t.DMeO2X),
        disabled: !I && !p,
        className: l()(A.__invalid_profileThemesSection, f),
        showPremiumIcon: S,
        forcedDivider: b,
        children: (0, i.jsxs)("div", {
            className: A.hd,
            children: [
                (0, i.jsx)("div", {
                    className: A.YX,
                    children: (0, i.jsx)(_.A, {
                        onChange: (e) => R([e, N]),
                        color: v,
                        suggestedColors: O,
                        showEyeDropper: !0,
                        label: (0, i.jsx)(d.Text, {
                            className: A.yz,
                            color: "text-default",
                            variant: "text-xs/normal",
                            "aria-hidden": !0,
                            children: h.intl.string(h.t.C3KTQk),
                        }),
                    }),
                }),
                (0, i.jsx)("div", {
                    className: A.YX,
                    children: (0, i.jsx)(_.A, {
                        onChange: (e) => R([v, e]),
                        color: N,
                        suggestedColors: O,
                        showEyeDropper: !0,
                        label: (0, i.jsx)(d.Text, {
                            className: A.yz,
                            color: "text-default",
                            variant: "text-xs/normal",
                            "aria-hidden": !0,
                            children: h.intl.string(h.t["8elvy6"]),
                        }),
                    }),
                }),
                E &&
                    null != T &&
                    (0, i.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: A.WA,
                        children: (0, i.jsx)(d.Button, {
                            variant: "secondary",
                            size: "sm",
                            text: h.intl.string(h.t["L+GmoR"]),
                            onClick: () => R([null, null]),
                        }),
                    }),
            ],
        }),
    });
}
