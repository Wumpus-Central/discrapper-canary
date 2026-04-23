"use strict";
n.d(t, { A: () => R });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(650809),
    l = n(17928),
    d = n(554146),
    _ = n(661531),
    u = n(366010),
    c = n(777666),
    E = n(736653),
    h = n(826673),
    m = n(617617),
    f = n(74396),
    g = n(653523),
    p = n(771781),
    A = n(367727),
    I = n(49999),
    T = n(693227),
    S = n(985018),
    N = n(645603);
function C() {
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
        O = (0, l.bG)([m.A], () => m.A.settings.appearance?.clientThemeSettings?.customUserThemeSettings),
        { shouldShowNewBadge: y, markNewBadgeAsDismissed: v } =
            ((t = (0, h.JZ)(d.M.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE)),
            r.useEffect(() => {
                if (!t)
                    return (
                        (0, A.Vh)(d.M.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE),
                        () => {
                            (0, p.pd)({ content: d.M.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE }, !1);
                        }
                    );
            }, [t]),
            {
                shouldShowNewBadge: !t,
                markNewBadgeAsDismissed: r.useCallback(() => {
                    (0, h.Dr)(d.M.CUSTOM_THEME_ENTRYPOINT_NEW_BADGE, { dismissAction: I.i.TAKE_ACTION });
                }, []),
            }),
        D = (0, h.JZ)(d.M.CUSTOM_THEME_ENTRYPOINT_GRADIENT),
        L = (0, E.Ay)(),
        b = (0, u.M)(L) ? N.Xu : N.VO,
        w = null != O && null != O.colors && O.colors.length > 0,
        P = (0, l.bG)([f.A], () => f.A.getSavedCustomTheme()),
        k = w || null != P,
        M = r.useMemo(() => {
            let e, t;
            if (w) (e = O.colors), (t = O.gradientAngle);
            else {
                if (null === P) return;
                (e = P.colors), (t = P.gradient_angle);
            }
            let n = e[0];
            return (
                e.length > 1 && (n = `linear-gradient(${t}deg, ${e.join(", ")})`),
                { background: `var(--background-gradient), ${n}` }
            );
        }, [w, O, P]),
        U = k ? _.A.unsafe_rawColors.WHITE.css : void 0,
        x = r.useCallback(() => {
            y && v(), s?.();
        }, [y, v, s]);
    return (0, i.jsxs)("div", {
        className: N.fC,
        children: [
            (0, i.jsxs)(g.S4, {
                onSelect: n ? void 0 : x,
                isSelected: !1,
                showSelectionCircle: w,
                size: R,
                name: S.intl.string(T.default.KSBBpC),
                className: a()(N.kL, k && b, n && N.r9),
                tabIndex: 0,
                showBadge: !1,
                showLockedBadge: !1,
                style: M,
                children: [
                    !D && !k && (0, i.jsx)(C, {}),
                    (0, i.jsx)("div", { className: N.JU }),
                    (0, i.jsx)(o.B, { color: U, className: N.vL }),
                ],
            }),
            y &&
                (0, i.jsx)(c.Lp, {
                    className: N.Ad,
                    text: S.intl.string(S.t.y2b7CA),
                    color: _.A.unsafe_rawColors.RED_430.css,
                }),
        ],
    });
}
