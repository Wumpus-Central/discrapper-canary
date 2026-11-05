var r = n(477900),
    l = n(582128),
    a = n(503698),
    i = n.n(a),
    s = n(834730),
    o = n(123292),
    c = n(265872),
    u = n(866665),
    d = n(939249),
    f = n(783977),
    m = n(344587),
    p = n(534554),
    h = n(392208),
    g = n(822313),
    x = n(2372),
    j = n(590221),
    v = n(359589),
    b = n(191850),
    y = n(792996),
    w = n(254575);
function C(e) {
    let [t, n] = l.useState(e),
        [r, a] = l.useState(!1),
        [i, s] = l.useState(e);
    return (
        i !== e && (s(e), e ? n(!0) : a(!1)),
        l.useEffect(() => {
            if (e || !t) return;
            let r = setTimeout(() => n(!1), 150);
            return () => clearTimeout(r);
        }, [e, t]),
        l.useEffect(() => {
            if (!t || !e) return;
            let n = 0,
                r = requestAnimationFrame(() => {
                    n = requestAnimationFrame(() => a(!0));
                });
            return () => {
                (cancelAnimationFrame(r), cancelAnimationFrame(n));
            };
        }, [t, e]),
        { mounted: t, entered: r }
    );
}
function N(e) {
    let { settings: t, tiers: n, choices: a, disabled: c, onChange: u, placement: d, open: f, entered: g } = e,
        [N, R] = l.useState(!1),
        A = C(N),
        S = h.P.indexOf(t.tier),
        k = (0, p.hl)(a),
        E = h.P.map(p.pL),
        U = (0, p.Tc)(t.tier),
        { text: T, phase: O } = (0, m.Q)(U);
    return (0, r.jsx)("div", {
        className: w.qd,
        "data-placement": d ?? void 0,
        children: (0, r.jsxs)("div", {
            className: i()(w.t$, { [w.Zr]: f && g, [w.GF]: !f }),
            role: "dialog",
            "aria-label": y.intl.string(b.default["3E7Yc0"]),
            children: [
                k && A.mounted
                    ? (0, r.jsx)("div", {
                          className: i()(w.Nr, w.uO, { [w.Zr]: N && A.entered, [w.GF]: !N }),
                          children: (0, r.jsx)(v.b, { settings: t, tiers: n, choices: a, disabled: c, onChange: u }),
                      })
                    : null,
                (0, r.jsxs)("div", {
                    className: `${w.Nr} ${w.rF}`,
                    children: [
                        (0, r.jsxs)("div", {
                            className: w.wx,
                            children: [
                                (0, r.jsx)(s.E, {
                                    tag: "span",
                                    variant: "body-md/medium",
                                    color: "text-default",
                                    children: y.intl.string(b.default.aBPQxX),
                                }),
                                (0, r.jsx)(s.E, {
                                    tag: "span",
                                    variant: "body-sm/normal",
                                    color: "text-muted",
                                    className: i()(w.Z, { [w.xQ]: "exit" === O, [w.lm]: "enter" === O }),
                                    children: T,
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: w.hs,
                            children: [
                                (0, r.jsx)(x.A, {}),
                                (0, r.jsx)(j.A, {
                                    activeIndex: S,
                                    stops: E,
                                    lockedStops: p.bt,
                                    ariaLabel: y.intl.string(b.default.aBPQxX),
                                    disabled: c,
                                    onSelect: function (e) {
                                        let n = h.P[e];
                                        null != n && n !== t.tier && (0, p.g_)(n) && u((0, p.CM)((0, p.j6)(t, n)));
                                    },
                                }),
                            ],
                        }),
                        k
                            ? (0, r.jsx)("div", {
                                  className: w.XF,
                                  children: (0, r.jsx)(o.Q, {
                                      text: y.intl.string(b.default.YLHRzA),
                                      variant: "secondary",
                                      textVariant: "body-sm/medium",
                                      "aria-expanded": N,
                                      onClick: () => R((e) => !e),
                                  }),
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
n.d(
    t,
    {},
    {
        A: function (e) {
            let { settings: t, tiers: n, choices: a, disabled: i, onChange: s, className: o, icon: m } = e,
                p = l.useRef(null),
                [h, x] = (0, g.A)(t, s),
                [j, v] = l.useState(!1),
                { mounted: R, entered: A } = C(j);
            return (0, r.jsx)(c.Y, {
                targetElementRef: p,
                position: "top",
                align: "right",
                shouldShow: R,
                onRequestClose: () => v(!1),
                animation: c.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { position: t } = e;
                    return (0, r.jsx)(N, {
                        settings: h,
                        tiers: n ?? null,
                        choices: a,
                        disabled: i,
                        onChange: x,
                        placement: t,
                        open: j,
                        entered: A,
                    });
                },
                children: (e, t) => {
                    let { isShown: n } = t;
                    return (0, r.jsx)(u.m, {
                        text: y.intl.string(b.default["k2JN/p"]),
                        shouldShow: !n,
                        ariaHidden: !0,
                        children: (0, r.jsx)(d.D, {
                            innerRef: p,
                            className: o ?? w.hZ,
                            "aria-label": y.intl.string(b.default["k2JN/p"]),
                            ...e,
                            onClick: () => v((e) => !e),
                            "aria-expanded": j,
                            children: m ?? (0, r.jsx)(f.R, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                        }),
                    });
                },
            });
        },
    },
);
