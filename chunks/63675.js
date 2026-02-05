n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var s = n(503698),
    r = n.n(s),
    a = n(33851),
    l = n.n(a),
    o = n(827734),
    c = n(397927),
    d = n(654107),
    u = n(950191),
    _ = n(101928),
    m = n(927578),
    A = n(911180),
    g = n(128450),
    E = n(985018),
    h = n(114403);
function p(e) {
    let {
            user: t,
            pendingAvatarSrc: n,
            pendingColors: s,
            onThemeColorsChange: a,
            preventDisabled: p,
            guildId: C,
            className: x,
            showPremiumIcon: T = !0,
            showResetThemeButton: I = !1,
            forcedDivider: S,
        } = e,
        f = (0, u.Ay)(t.id, C),
        { primaryColor: N, secondaryColor: b } = (0, _.A)({
            user: t,
            displayProfile: f,
            pendingThemeColors: s,
            isPreview: !0,
        }),
        R = m.Ay.canUsePremiumProfileCustomization(t),
        v = null != n ? n : t.getAvatarURL(C, 80),
        O = (0, c.rdh)(o.A.unsafe_rawColors.PRIMARY_530).hex(),
        j = (0, d.rh)(v, O, !1);
    if (null == N || null == b) return null;
    let P = (e) => {
        a(l()(e, f?.themeColors) ? void 0 : e);
    };
    return (0, i.jsx)(g.A, {
        title: E.intl.string(E.t.DMeO2X),
        disabled: !R && !p,
        className: r()(h.__invalid_profileThemesSection, x),
        showPremiumIcon: T,
        forcedDivider: S,
        children: (0, i.jsxs)("div", {
            className: h.hd,
            children: [
                (0, i.jsx)("div", {
                    className: h.YX,
                    children: (0, i.jsx)(A.A, {
                        onChange: (e) => P([e, b]),
                        color: N,
                        suggestedColors: j,
                        showEyeDropper: !0,
                        label: (0, i.jsx)(c.Text, {
                            className: h.yz,
                            color: "text-default",
                            variant: "text-xs/normal",
                            "aria-hidden": !0,
                            children: E.intl.string(E.t.C3KTQk),
                        }),
                    }),
                }),
                (0, i.jsx)("div", {
                    className: h.YX,
                    children: (0, i.jsx)(A.A, {
                        onChange: (e) => P([N, e]),
                        color: b,
                        suggestedColors: j,
                        showEyeDropper: !0,
                        label: (0, i.jsx)(c.Text, {
                            className: h.yz,
                            color: "text-default",
                            variant: "text-xs/normal",
                            "aria-hidden": !0,
                            children: E.intl.string(E.t["8elvy6"]),
                        }),
                    }),
                }),
                I &&
                    null != C &&
                    (0, i.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: h.WA,
                        children: (0, i.jsx)(c.Button, {
                            variant: "secondary",
                            size: "sm",
                            text: E.intl.string(E.t["L+GmoR"]),
                            onClick: () => P([null, null]),
                        }),
                    }),
            ],
        }),
    });
}
