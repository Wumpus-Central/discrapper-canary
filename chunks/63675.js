n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(33851),
    r = n.n(a),
    o = n(827734),
    d = n(397927),
    c = n(654107),
    u = n(950191),
    m = n(101928),
    _ = n(927578),
    g = n(911180),
    x = n(128450),
    A = n(985018),
    h = n(514245);
function p(e) {
    let {
            user: t,
            pendingAvatarSrc: n,
            pendingColors: s,
            onThemeColorsChange: a,
            preventDisabled: p,
            guildId: f,
            className: T,
            showPremiumIcon: S = !0,
            showResetThemeButton: E = !1,
            forcedDivider: b,
        } = e,
        C = (0, u.Ay)(t.id, f),
        { primaryColor: v, secondaryColor: N } = (0, m.A)({
            user: t,
            displayProfile: C,
            pendingThemeColors: s,
            isPreview: !0,
        }),
        I = _.Ay.canUsePremiumProfileCustomization(t),
        j = null != n ? n : t.getAvatarURL(f, 80),
        y = (0, d.rdh)(o.A.unsafe_rawColors.PRIMARY_530).hex(),
        O = (0, c.rh)(j, y, !1);
    if (null == v || null == N) return null;
    let R = (e) => {
        a(r()(e, C?.themeColors) ? void 0 : e);
    };
    return (0, i.jsx)(x.A, {
        title: A.intl.string(A.t.DMeO2X),
        disabled: !I && !p,
        className: l()(h.__invalid_profileThemesSection, T),
        showPremiumIcon: S,
        forcedDivider: b,
        children: (0, i.jsxs)("div", {
            className: h.hd,
            children: [
                (0, i.jsx)("div", {
                    className: h.YX,
                    children: (0, i.jsx)(g.A, {
                        onChange: (e) => R([e, N]),
                        color: v,
                        suggestedColors: O,
                        showEyeDropper: !0,
                        label: (0, i.jsx)(d.Text, {
                            className: h.yz,
                            color: "text-default",
                            variant: "text-xs/normal",
                            "aria-hidden": !0,
                            children: A.intl.string(A.t.C3KTQk),
                        }),
                    }),
                }),
                (0, i.jsx)("div", {
                    className: h.YX,
                    children: (0, i.jsx)(g.A, {
                        onChange: (e) => R([v, e]),
                        color: N,
                        suggestedColors: O,
                        showEyeDropper: !0,
                        label: (0, i.jsx)(d.Text, {
                            className: h.yz,
                            color: "text-default",
                            variant: "text-xs/normal",
                            "aria-hidden": !0,
                            children: A.intl.string(A.t["8elvy6"]),
                        }),
                    }),
                }),
                E &&
                    null != f &&
                    (0, i.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: h.WA,
                        children: (0, i.jsx)(d.Button, {
                            variant: "secondary",
                            size: "sm",
                            text: A.intl.string(A.t["L+GmoR"]),
                            onClick: () => R([null, null]),
                        }),
                    }),
            ],
        }),
    });
}
