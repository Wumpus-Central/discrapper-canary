"use strict";
n.d(t, { A: () => S });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
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
    E = n(62504),
    g = n(674547),
    A = n(985018),
    I = n(866778);
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
function S(e) {
    let { isDisabled: t, onSelect: n, size: s } = e,
        S = (0, l.bG)([p.A], () => p.A.settings.appearance?.clientThemeSettings?.customUserThemeSettings),
        { shouldShowNewBadge: y, markNewBadgeAsDismissed: v } = (0, E.L)(),
        N = (0, f.JZ)(u.M.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
        C = (0, _.Ay)(),
        b = (0, d.Mwr)(C) ? I.Xu : I.VO,
        R = null != S && null != S.colors && S.colors.length > 0,
        O = (0, l.bG)([h.A], () => h.A.getSavedCustomTheme()),
        D = R,
        L = R || null != O,
        w = i.useMemo(() => {
            let e, t;
            if (R) (e = S.colors), (t = S.gradientAngle);
            else {
                if (null === O) return;
                (e = O.colors), (t = O.gradient_angle);
            }
            let n = e[0];
            return (
                e.length > 1 && (n = `linear-gradient(${t}deg, ${e.join(", ")})`),
                { background: `var(--background-gradient), ${n}` }
            );
        }, [R, S, O]),
        x = L ? c.A.unsafe_rawColors.WHITE.css : void 0,
        M = i.useCallback(() => {
            y && v(), n?.();
        }, [y, v, n]);
    return (0, r.jsxs)("div", {
        className: I.fC,
        children: [
            (0, r.jsxs)(m.S4, {
                onSelect: t ? void 0 : M,
                isSelected: !1,
                showSelectionCircle: D,
                size: s,
                name: A.intl.string(g.default.KSBBpC),
                className: a()(I.kL, L && b, t && I.r9),
                showBadge: !1,
                showLockedBadge: !1,
                style: w,
                children: [
                    !N && !L && (0, r.jsx)(T, {}),
                    (0, r.jsx)("div", { className: I.JU }),
                    (0, r.jsx)(o.PaintPaletteIcon, { color: x, className: I.vL }),
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
