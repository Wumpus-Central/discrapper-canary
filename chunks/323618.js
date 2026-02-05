"use strict";
n.d(t, { A: () => y });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(934551),
    l = n(311907),
    u = n(554146),
    c = n(827734),
    d = n(397927),
    _ = n(736653),
    f = n(826673),
    p = n(617617),
    h = n(74396),
    m = n(653523),
    g = n(62504),
    E = n(520650),
    A = n(985018),
    I = n(387376);
function T() {
    return (0, r.jsxs)("svg", {
        className: I.JR,
        width: "68",
        height: "68",
        viewBox: "0 0 68 68",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            (0, r.jsx)("rect", {
                x: "4",
                y: "4",
                width: "60",
                height: "60",
                rx: "8",
                stroke: "url(#paint0_linear_1368_16544)",
                strokeWidth: "2",
            }),
            (0, r.jsx)("defs", {
                children: (0, r.jsxs)("linearGradient", {
                    id: "paint0_linear_1368_16544",
                    x1: "33.875",
                    y1: "2",
                    x2: "33.875",
                    y2: "65.75",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        (0, r.jsx)("stop", { stopColor: "#B473F5" }),
                        (0, r.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                    ],
                }),
            }),
        ],
    });
}
function y(e) {
    let { isDisabled: t, onSelect: n } = e,
        a = (0, l.bG)([p.A], () => p.A.settings.appearance?.clientThemeSettings?.customUserThemeSettings),
        { shouldShowNewBadge: y, markNewBadgeAsDismissed: S } = (0, g.L)(),
        v = (0, f.JZ)(u.M.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
        C = (0, _.Ay)(),
        b = (0, d.Mwr)(C) ? I.Xu : I.VO,
        N = null != a && null != a.colors && a.colors.length > 0,
        R = (0, l.bG)([h.A], () => h.A.getSavedCustomTheme()),
        O = N,
        D = N || null != R,
        L = i.useMemo(() => {
            let e, t;
            if (N) (e = a.colors), (t = a.gradientAngle);
            else {
                if (null === R) return;
                (e = R.colors), (t = R.gradient_angle);
            }
            let n = e[0];
            return (
                e.length > 1 && (n = `linear-gradient(${t}deg, ${e.join(", ")})`),
                { background: `var(--background-gradient), ${n}` }
            );
        }, [N, a, R]),
        w = D ? c.A.unsafe_rawColors.WHITE.css : void 0,
        x = i.useCallback(() => {
            y && S(), n?.();
        }, [y, S, n]);
    return (0, r.jsxs)("div", {
        className: I.fC,
        children: [
            (0, r.jsxs)(m.S4, {
                onSelect: t ? void 0 : x,
                isSelected: !1,
                showSelectionCircle: O,
                name: A.intl.string(E.default.KSBBpC),
                className: s()(I.kL, D && b, t && I.r9),
                showBadge: !1,
                showLockedBadge: !1,
                style: L,
                children: [
                    !v && !D && (0, r.jsx)(T, {}),
                    (0, r.jsx)("div", { className: I.JU }),
                    (0, r.jsx)(o.PaintPaletteIcon, { color: w, className: I.vL }),
                ],
            }),
            y &&
                (0, r.jsx)(d.LpS, {
                    className: I.Ad,
                    text: A.intl.string(A.t.y2b7CA),
                    color: c.A.unsafe_rawColors.RED_430.css,
                }),
        ],
    });
}
