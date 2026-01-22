n.d(t, { A: () => A });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(934551),
    l = n(311907),
    c = n(554146),
    u = n(827734),
    d = n(397927),
    f = n(736653),
    p = n(826673),
    _ = n(617617),
    h = n(74396),
    m = n(653523),
    g = n(62504),
    E = n(520650),
    b = n(985018),
    y = n(387376);
function O() {
    return (0, r.jsxs)("svg", {
        className: y.JR,
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
                        (0, r.jsx)("stop", {
                            offset: "1",
                            stopColor: "#E292AA",
                        }),
                    ],
                }),
            }),
        ],
    });
}
function A(e) {
    let { isDisabled: t, onSelect: n } = e,
        a = (0, l.bG)([_.A], () => {
            var e, t;
            return null == (t = _.A.settings.appearance) || null == (e = t.clientThemeSettings)
                ? void 0
                : e.customUserThemeSettings;
        }),
        { shouldShowNewBadge: A, markNewBadgeAsDismissed: v } = (0, g.L)(),
        S = (0, p.JZ)(c.M.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
        I = (0, f.Ay)(),
        T = (0, d.Mwr)(I) ? y.Xu : y.VO,
        C = null != a && null != a.colors && a.colors.length > 0,
        N = (0, l.bG)([h.A], () => h.A.getSavedCustomTheme()),
        R = C,
        w = C || null != N,
        P = i.useMemo(() => {
            let e, t;
            if (C) (e = a.colors), (t = a.gradientAngle);
            else {
                if (null === N) return;
                (e = N.colors), (t = N.gradient_angle);
            }
            let n = e[0];
            return (
                e.length > 1 && (n = "linear-gradient(".concat(t, "deg, ").concat(e.join(", "), ")")),
                { background: "var(--background-gradient), ".concat(n) }
            );
        }, [C, a, N]),
        D = w ? u.A.unsafe_rawColors.WHITE.css : void 0,
        x = i.useCallback(() => {
            A && v(), null == n || n();
        }, [A, v, n]);
    return (0, r.jsxs)("div", {
        className: y.fC,
        children: [
            (0, r.jsxs)(m.S4, {
                onSelect: t ? void 0 : x,
                isSelected: !1,
                showSelectionCircle: R,
                name: b.intl.string(E.default.KSBBpC),
                className: s()(y.kL, w && T, t && y.r9),
                showBadge: !1,
                showLockedBadge: !1,
                style: P,
                children: [
                    !S && !w && (0, r.jsx)(O, {}),
                    (0, r.jsx)("div", { className: y.JU }),
                    (0, r.jsx)(o.PaintPaletteIcon, {
                        color: D,
                        className: y.vL,
                    }),
                ],
            }),
            A &&
                (0, r.jsx)(d.LpS, {
                    className: y.Ad,
                    text: b.intl.string(b.t.y2b7CA),
                    color: u.A.unsafe_rawColors.RED_430.css,
                }),
        ],
    });
}
