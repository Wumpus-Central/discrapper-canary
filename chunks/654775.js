"use strict";
n.d(t, { A: () => R });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(650809),
    l = n(17928),
    _ = n(554146),
    d = n(661531),
    u = n(366010),
    c = n(777666),
    E = n(736653),
    h = n(826673),
    m = n(617617),
    f = n(74396),
    g = n(653523),
    A = n(771781),
    I = n(367727),
    p = n(49999),
    T = n(693227),
    S = n(985018),
    N = n(645603);
function O() {
    return (0, i.jsxs)("svg", {
        className: N.JR,
        width: "68",
        height: "68",
        viewBox: "0 0 68 68",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            (0, i.jsx)("rect", {
                x: "4",
                y: "4",
                width: "60",
                height: "60",
                rx: "8",
                stroke: "url(#paint0_linear_1368_16544)",
                strokeWidth: "2",
            }),
            (0, i.jsx)("defs", {
                children: (0, i.jsxs)("linearGradient", {
                    id: "paint0_linear_1368_16544",
                    x1: "33.875",
                    y1: "2",
                    x2: "33.875",
                    y2: "65.75",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        (0, i.jsx)("stop", { stopColor: "#B473F5" }),
                        (0, i.jsx)("stop", { offset: "1", stopColor: "#E292AA" }),
                    ],
                }),
            }),
        ],
    });
}
function R(e) {
    let t,
        { isDisabled: n, onSelect: s, size: R } = e,
        C = (0, l.bG)([m.A], () => m.A.settings.appearance?.clientThemeSettings?.customUserThemeSettings),
        { shouldShowNewBadge: y, markNewBadgeAsDismissed: D } =
            ((t = (0, h.JZ)(_.M.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE)),
            r.useEffect(() => {
                if (!t)
                    return (
                        (0, I.Vh)(_.M.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE),
                        () => {
                            (0, A.pd)({ content: _.M.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE }, !1);
                        }
                    );
            }, [t]),
            {
                shouldShowNewBadge: !t,
                markNewBadgeAsDismissed: r.useCallback(() => {
                    (0, h.Dr)(_.M.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE, { dismissAction: p.i.TAKE_ACTION });
                }, []),
            }),
        L = (0, h.JZ)(_.M.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
        v = (0, E.Ay)(),
        w = (0, u.M)(v) ? N.Xu : N.VO,
        P = null != C && null != C.colors && C.colors.length > 0,
        b = (0, l.bG)([f.A], () => f.A.getSavedCustomTheme()),
        k = P || null != b,
        U = r.useMemo(() => {
            let e, t;
            if (P) (e = C.colors), (t = C.gradientAngle);
            else {
                if (null === b) return;
                (e = b.colors), (t = b.gradient_angle);
            }
            let n = e[0];
            return (
                e.length > 1 && (n = `linear-gradient(${t}deg, ${e.join(", ")})`),
                { background: `var(--background-gradient), ${n}` }
            );
        }, [P, C, b]),
        M = k ? d.A.unsafe_rawColors.WHITE.css : void 0,
        G = r.useCallback(() => {
            y && D(), s?.();
        }, [y, D, s]);
    return (0, i.jsxs)("div", {
        className: N.fC,
        children: [
            (0, i.jsxs)(g.S4, {
                onSelect: n ? void 0 : G,
                isSelected: !1,
                showSelectionCircle: P,
                size: R,
                name: S.intl.string(T.default.KSBBpC),
                className: a()(N.kL, k && w, n && N.r9),
                tabIndex: 0,
                showBadge: !1,
                showLockedBadge: !1,
                style: U,
                children: [
                    !L && !k && (0, i.jsx)(O, {}),
                    (0, i.jsx)("div", { className: N.JU }),
                    (0, i.jsx)(o.B, { color: M, className: N.vL }),
                ],
            }),
            y &&
                (0, i.jsx)(c.Lp, {
                    className: N.Ad,
                    text: S.intl.string(S.t.y2b7CA),
                    color: d.A.unsafe_rawColors.RED_430.css,
                }),
        ],
    });
}
