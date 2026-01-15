n.d(t, { Z: () => v });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(657707),
    l = n(442837),
    c = n(704215),
    u = n(692547),
    d = n(481060),
    f = n(410030),
    p = n(266454),
    _ = n(581883),
    h = n(36982),
    m = n(583901),
    g = n(576157),
    E = n(831989),
    b = n(388032),
    y = n(485492);
function O() {
    return (0, r.jsxs)("svg", {
        className: y.newRing,
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
function v(e) {
    let { isDisabled: t, onSelect: n } = e,
        a = (0, l.e7)([_.Z], () => {
            var e, t;
            return null == (t = _.Z.settings.appearance) || null == (e = t.clientThemeSettings)
                ? void 0
                : e.customUserThemeSettings;
        }),
        { shouldShowNewBadge: v, markNewBadgeAsDismissed: S } = (0, g.w)(),
        I = (0, p.Nj)(c.z.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
        T = (0, f.ZP)(),
        C = (0, d.wjy)(T) ? y.darkOverlay : y.lightOverlay,
        A = null != a && null != a.colors && a.colors.length > 0,
        N = (0, l.e7)([h.Z], () => h.Z.getSavedCustomTheme()),
        P = A,
        w = A || null != N,
        R = i.useMemo(() => {
            let e, t;
            if (A) (e = a.colors), (t = a.gradientAngle);
            else {
                if (null === N) return;
                (e = N.colors), (t = N.gradient_angle);
            }
            let n = e[0];
            return (
                e.length > 1 && (n = "linear-gradient(".concat(t, "deg, ").concat(e.join(", "), ")")),
                { background: "var(--background-gradient), ".concat(n) }
            );
        }, [A, a, N]),
        D = w ? u.Z.unsafe_rawColors.WHITE.css : void 0,
        x = i.useCallback(() => {
            v && S(), null == n || n();
        }, [v, S, n]);
    return (0, r.jsxs)("div", {
        className: y.badgeContainer,
        children: [
            (0, r.jsxs)(m.S4, {
                onSelect: t ? void 0 : x,
                isSelected: !1,
                showSelectionCircle: P,
                name: b.intl.string(E.default.KSBBpC),
                className: o()(y.container, w && C, t && y.disabled),
                showBadge: !1,
                showLockedBadge: !1,
                style: R,
                children: [
                    !I && !w && (0, r.jsx)(O, {}),
                    (0, r.jsx)("div", { className: y.borderOverlay }),
                    (0, r.jsx)(s.PaintPaletteIcon, {
                        color: D,
                        className: y.paletteIcon,
                    }),
                ],
            }),
            v &&
                (0, r.jsx)(d.IGR, {
                    className: y.newBadge,
                    text: b.intl.string(b.t.y2b7CA),
                    color: u.Z.unsafe_rawColors.RED_430.css,
                }),
        ],
    });
}
