var l = r(477900),
    n = r(582128),
    a = r(503698),
    i = r.n(a),
    s = r(834730),
    o = r(123292),
    c = r(265872),
    u = r(866665),
    d = r(939249),
    f = r(783977),
    m = r(344587),
    p = r(534554),
    h = r(392208),
    g = r(822313),
    x = r(2372),
    b = r(590221),
    j = r(359589),
    v = r(191850),
    y = r(792996),
    C = r(254575);
function w(e) {
    let [t, r] = n.useState(e),
        [l, a] = n.useState(!1),
        [i, s] = n.useState(e);
    return (
        i !== e && (s(e), e ? r(!0) : a(!1)),
        n.useEffect(() => {
            if (e || !t) return;
            let l = setTimeout(() => r(!1), 150);
            return () => clearTimeout(l);
        }, [e, t]),
        n.useEffect(() => {
            if (!t || !e) return;
            let r = 0,
                l = requestAnimationFrame(() => {
                    r = requestAnimationFrame(() => a(!0));
                });
            return () => {
                (cancelAnimationFrame(l), cancelAnimationFrame(r));
            };
        }, [t, e]),
        { mounted: t, entered: l }
    );
}
function N(e) {
    let { settings: t, tiers: r, choices: a, disabled: c, onChange: u, placement: d, open: f, entered: g } = e,
        [N, k] = n.useState(!1),
        R = w(N),
        S = h.P.indexOf(t.tier),
        A = (0, p.hl)(a),
        I = h.P.map(p.pL),
        T = (0, p.Tc)(t.tier),
        { text: E, phase: O } = (0, m.Q)(T);
    return (0, l.jsx)("div", {
        className: C.qd,
        "data-placement": d ?? void 0,
        children: (0, l.jsxs)("div", {
            className: i()(C.t$, { [C.Zr]: f && g, [C.GF]: !f }),
            role: "dialog",
            "aria-label": y.intl.string(v.default["3E7Yc0"]),
            children: [
                A && R.mounted
                    ? (0, l.jsx)("div", {
                          className: i()(C.Nr, C.uO, { [C.Zr]: N && R.entered, [C.GF]: !N }),
                          children: (0, l.jsx)(j.b, { settings: t, tiers: r, choices: a, disabled: c, onChange: u }),
                      })
                    : null,
                (0, l.jsxs)("div", {
                    className: `${C.Nr} ${C.rF}`,
                    children: [
                        (0, l.jsxs)("div", {
                            className: C.wx,
                            children: [
                                (0, l.jsx)(s.E, {
                                    tag: "span",
                                    variant: "body-md/medium",
                                    color: "text-default",
                                    children: y.intl.string(v.default.aBPQxX),
                                }),
                                (0, l.jsx)(s.E, {
                                    tag: "span",
                                    variant: "body-sm/normal",
                                    color: "text-muted",
                                    className: i()(C.Z, { [C.xQ]: "exit" === O, [C.lm]: "enter" === O }),
                                    children: E,
                                }),
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: C.hs,
                            children: [
                                (0, l.jsx)(x.A, {}),
                                (0, l.jsx)(b.A, {
                                    activeIndex: S,
                                    stops: I,
                                    lockedStops: p.bt,
                                    ariaLabel: y.intl.string(v.default.aBPQxX),
                                    disabled: c,
                                    onSelect: function (e) {
                                        let r = h.P[e];
                                        null != r && r !== t.tier && (0, p.g_)(r) && u((0, p.CM)((0, p.j6)(t, r)));
                                    },
                                }),
                            ],
                        }),
                        A
                            ? (0, l.jsx)("div", {
                                  className: C.XF,
                                  children: (0, l.jsx)(o.Q, {
                                      text: y.intl.string(v.default.YLHRzA),
                                      variant: "secondary",
                                      textVariant: "body-sm/medium",
                                      "aria-expanded": N,
                                      onClick: () => k((e) => !e),
                                  }),
                              })
                            : null,
                    ],
                }),
            ],
        }),
    });
}
r.d(
    t,
    {},
    {
        A: function (e) {
            let { settings: t, tiers: r, choices: a, disabled: i, onChange: s, className: o, icon: m } = e,
                p = n.useRef(null),
                [h, x] = (0, g.A)(t, s),
                [b, j] = n.useState(!1),
                { mounted: k, entered: R } = w(b);
            return (0, l.jsx)(c.Y, {
                targetElementRef: p,
                position: "top",
                align: "right",
                shouldShow: k,
                onRequestClose: () => j(!1),
                animation: c.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { position: t } = e;
                    return (0, l.jsx)(N, {
                        settings: h,
                        tiers: r ?? null,
                        choices: a,
                        disabled: i,
                        onChange: x,
                        placement: t,
                        open: b,
                        entered: R,
                    });
                },
                children: (e, t) => {
                    let { isShown: r } = t;
                    return (0, l.jsx)(u.m, {
                        text: y.intl.string(v.default["k2JN/p"]),
                        shouldShow: !r,
                        ariaHidden: !0,
                        children: (0, l.jsx)(d.D, {
                            innerRef: p,
                            className: o ?? C.hZ,
                            "aria-label": y.intl.string(v.default["k2JN/p"]),
                            ...e,
                            onClick: () => j((e) => !e),
                            "aria-expanded": b,
                            children:
                                m ??
                                (0, l.jsx)(f.FiltersHorizontalIcon, {
                                    size: "xxs",
                                    color: "currentColor",
                                    "aria-hidden": !0,
                                }),
                        }),
                    });
                },
            });
        },
    },
);
