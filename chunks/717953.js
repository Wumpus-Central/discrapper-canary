n.d(t, { Z: () => I });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(657707),
    l = n(442837),
    c = n(704215),
    u = n(481060),
    d = n(410030),
    f = n(44315),
    _ = n(266454),
    p = n(581883),
    h = n(36982),
    m = n(583901),
    g = n(576157),
    E = n(231338),
    b = n(994838),
    y = n(388032),
    O = n(617385);
function v() {
    return (0, r.jsxs)("svg", {
        className: O.newRing,
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
function I(e) {
    let { isDisabled: t, onSelect: n } = e,
        a = (0, l.e7)([p.Z], () => {
            var e, t;
            return null == (t = p.Z.settings.appearance) || null == (e = t.clientThemeSettings)
                ? void 0
                : e.customUserThemeSettings;
        }),
        { shouldShowNewBadge: I, markNewBadgeAsDismissed: T } = (0, g.w)(),
        S = (0, _.Nj)(c.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
        A = (0, d.ZP)(),
        C = (0, u.wjy)(A) ? O.darkOverlay : O.lightOverlay,
        N = null != a && null != a.colors && a.colors.length > 0,
        R = (0, l.e7)([h.Z], () => h.Z.getSavedCustomTheme()),
        P = N,
        D = N || null != R,
        w = i.useMemo(() => {
            let e, t;
            if (N) (e = a.colors), (t = a.gradientAngle);
            else {
                if (null === R) return;
                (e = R.colors), (t = R.gradient_angle);
            }
            let n = e[0];
            return (
                e.length > 1 && (n = "linear-gradient(".concat(t, "deg, ").concat(e.join(", "), ")")),
                { background: "var(--background-gradient), ".concat(n) }
            );
        }, [N, a, R]),
        L = (0, f.Sl)(E.Il.WHITE).hex,
        x = (0, f.Sl)(E.Il.RED_430).hex,
        M = D ? L : void 0,
        k = i.useCallback(() => {
            I && T(), null == n || n();
        }, [I, T, n]);
    return (0, r.jsxs)("div", {
        className: O.badgeContainer,
        children: [
            (0, r.jsxs)(m.S4, {
                onSelect: t ? void 0 : k,
                isSelected: !1,
                showSelectionCircle: P,
                name: y.intl.string(b.default.KSBBpC),
                className: o()(O.container, D && C, t && O.disabled),
                showBadge: !1,
                showLockedBadge: !1,
                style: w,
                children: [
                    !S && !D && (0, r.jsx)(v, {}),
                    (0, r.jsx)("div", { className: O.borderOverlay }),
                    (0, r.jsx)(s.V3v, {
                        color: M,
                        className: O.paletteIcon,
                    }),
                ],
            }),
            I &&
                (0, r.jsx)(u.IGR, {
                    className: O.newBadge,
                    text: y.intl.string(y.t.y2b7CA),
                    color: x,
                }),
        ],
    });
}
