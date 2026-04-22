n.d(t, { A: () => T });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(33851),
    r = n.n(a),
    o = n(827734),
    d = n(602853),
    u = n(834730),
    c = n(821609),
    g = n(654107),
    m = n(950191),
    _ = n(101928),
    A = n(927578),
    h = n(911180),
    p = n(128450),
    x = n(985018),
    E = n(362656);
function T(e) {
    let {
            user: t,
            pendingAvatarSrc: n,
            pendingColors: s,
            onThemeColorsChange: a,
            preventDisabled: T,
            guildId: S,
            className: f,
            showPremiumIcon: b = !0,
            showResetThemeButton: C = !1,
            forcedDivider: v,
        } = e,
        N = (0, m.Ay)(t.id, S),
        { primaryColor: I, secondaryColor: y } = (0, _.A)({
            user: t,
            displayProfile: N,
            pendingThemeColors: s,
            isPreview: !0,
        }),
        j = A.Ay.canUsePremiumProfileCustomization(t),
        O = null != n ? n : t.getAvatarURL(S, 80),
        R = (0, d.r)(o.A.unsafe_rawColors.PRIMARY_530).hex(),
        L = (0, g.rh)(O, R, !1);
    if (null == I || null == y) return null;
    let D = (e) => {
        a(r()(e, N?.themeColors) ? void 0 : e);
    };
    return (0, i.jsx)(p.A, {
        title: x.intl.string(x.t.DMeO2X),
        disabled: !j && !T,
        className: l()(E.__invalid_profileThemesSection, f),
        showPremiumIcon: b,
        forcedDivider: v,
        children: (0, i.jsxs)("div", {
            className: E.hd,
            children: [
                (0, i.jsx)("div", {
                    className: E.YX,
                    children: (0, i.jsx)(h.A, {
                        onChange: (e) => D([e, y]),
                        color: I,
                        suggestedColors: L,
                        showEyeDropper: !0,
                        label: (0, i.jsx)(u.E, {
                            className: E.yz,
                            color: "text-default",
                            variant: "text-xs/normal",
                            "aria-hidden": !0,
                            children: x.intl.string(x.t.C3KTQk),
                        }),
                    }),
                }),
                (0, i.jsx)("div", {
                    className: E.YX,
                    children: (0, i.jsx)(h.A, {
                        onChange: (e) => D([I, e]),
                        color: y,
                        suggestedColors: L,
                        showEyeDropper: !0,
                        label: (0, i.jsx)(u.E, {
                            className: E.yz,
                            color: "text-default",
                            variant: "text-xs/normal",
                            "aria-hidden": !0,
                            children: x.intl.string(x.t["8elvy6"]),
                        }),
                    }),
                }),
                C &&
                    null != S &&
                    (0, i.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: E.WA,
                        children: (0, i.jsx)(c.$, {
                            variant: "secondary",
                            size: "sm",
                            text: x.intl.string(x.t["L+GmoR"]),
                            onClick: () => D([null, null]),
                        }),
                    }),
            ],
        }),
    });
}
