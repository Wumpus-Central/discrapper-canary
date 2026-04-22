"use strict";
n.d(t, { A: () => y });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(650809),
    l = n(311907),
    u = n(554146),
    d = n(827734),
    c = n(366010),
    _ = n(777666),
    f = n(736653),
    E = n(826673),
    h = n(617617),
    p = n(74396),
    m = n(653523),
    g = n(62504),
    A = n(693227),
    I = n(985018),
    T = n(645603);
function S() {
    return (0, r.jsxs)("svg", {
        className: T.JR,
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
    let { isDisabled: t, onSelect: n, size: s } = e,
        y = (0, l.bG)([h.A], () => h.A.settings.appearance?.clientThemeSettings?.customUserThemeSettings),
        { shouldShowNewBadge: N, markNewBadgeAsDismissed: O } = (0, g.L)(),
        R = (0, E.JZ)(u.M.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
        v = (0, f.Ay)(),
        C = (0, c.M)(v) ? T.Xu : T.VO,
        b = null != y && null != y.colors && y.colors.length > 0,
        D = (0, l.bG)([p.A], () => p.A.getSavedCustomTheme()),
        L = b || null != D,
        w = i.useMemo(() => {
            let e, t;
            if (b) (e = y.colors), (t = y.gradientAngle);
            else {
                if (null === D) return;
                (e = D.colors), (t = D.gradient_angle);
            }
            let n = e[0];
            return (
                e.length > 1 && (n = `linear-gradient(${t}deg, ${e.join(", ")})`),
                { background: `var(--background-gradient), ${n}` }
            );
        }, [b, y, D]),
        M = L ? d.A.unsafe_rawColors.WHITE.css : void 0,
        P = i.useCallback(() => {
            N && O(), n?.();
        }, [N, O, n]);
    return (0, r.jsxs)("div", {
        className: T.fC,
        children: [
            (0, r.jsxs)(m.S4, {
                onSelect: t ? void 0 : P,
                isSelected: !1,
                showSelectionCircle: b,
                size: s,
                name: I.intl.string(A.default.KSBBpC),
                className: a()(T.kL, L && C, t && T.r9),
                tabIndex: 0,
                showBadge: !1,
                showLockedBadge: !1,
                style: w,
                children: [
                    !R && !L && (0, r.jsx)(S, {}),
                    (0, r.jsx)("div", { className: T.JU }),
                    (0, r.jsx)(o.B, { color: M, className: T.vL }),
                ],
            }),
            N &&
                (0, r.jsx)(_.Lp, {
                    className: T.Ad,
                    text: I.intl.string(I.t.y2b7CA),
                    color: d.A.unsafe_rawColors.RED_430.css,
                }),
        ],
    });
}
