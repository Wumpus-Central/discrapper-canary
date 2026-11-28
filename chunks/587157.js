var n = r(477900),
    l = r(582128),
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
    x = r(822313),
    g = r(2372),
    b = r(590221),
    j = r(359589),
    v = r(258576),
    w = r(792996),
    y = r(254575);
function C(e) {
    let [t, r] = l.useState(e),
        [n, a] = l.useState(!1),
        [i, s] = l.useState(e);
    return (
        i !== e && (s(e), e ? r(!0) : a(!1)),
        l.useEffect(() => {
            if (e || !t) return;
            let n = setTimeout(() => r(!1), 150);
            return () => clearTimeout(n);
        }, [e, t]),
        l.useEffect(() => {
            if (!t || !e) return;
            let r = 0,
                n = requestAnimationFrame(() => {
                    r = requestAnimationFrame(() => a(!0));
                });
            return () => {
                (cancelAnimationFrame(n), cancelAnimationFrame(r));
            };
        }, [t, e]),
        { mounted: t, entered: n }
    );
}
function N(e) {
    let { settings: t, tiers: r, choices: a, disabled: c, onChange: u, placement: d, open: f, entered: x } = e,
        [N, R] = l.useState(!1),
        k = C(N),
        S = h.P.indexOf(t.tier),
        I = (0, p.hl)(a),
        T = h.P.map(p.pL),
        A = (0, p.Tc)(t.tier),
        { text: E, phase: O } = (0, m.Q)(A);
    return (0, n.jsx)("div", {
        className: y.qd,
        "data-placement": d ?? void 0,
        children: (0, n.jsxs)("div", {
            className: i()(y.t$, { [y.Zr]: f && x, [y.GF]: !f }),
            role: "dialog",
            "aria-label": w.intl.string(v.default["3E7Yc0"]),
            children: [
                I && k.mounted
                    ? (0, n.jsx)("div", {
                          className: i()(y.Nr, y.uO, { [y.Zr]: N && k.entered, [y.GF]: !N }),
                          children: (0, n.jsx)(j.b, { settings: t, tiers: r, choices: a, disabled: c, onChange: u }),
                      })
                    : null,
                (0, n.jsxs)("div", {
                    className: `${y.Nr} ${y.rF}`,
                    children: [
                        (0, n.jsxs)("div", {
                            className: y.wx,
                            children: [
                                (0, n.jsx)(s.E, {
                                    tag: "span",
                                    variant: "body-md/medium",
                                    color: "text-default",
                                    children: w.intl.string(v.default.aBPQxX),
                                }),
                                (0, n.jsx)(s.E, {
                                    tag: "span",
                                    variant: "body-sm/normal",
                                    color: "text-muted",
                                    className: i()(y.Z, { [y.xQ]: "exit" === O, [y.lm]: "enter" === O }),
                                    children: E,
                                }),
                            ],
                        }),
                        (0, n.jsxs)("div", {
                            className: y.hs,
                            children: [
                                (0, n.jsx)(g.A, {}),
                                (0, n.jsx)(b.A, {
                                    activeIndex: S,
                                    stops: T,
                                    lockedStops: p.bt,
                                    ariaLabel: w.intl.string(v.default.aBPQxX),
                                    disabled: c,
                                    onSelect: function (e) {
                                        let r = h.P[e];
                                        null != r && r !== t.tier && (0, p.g_)(r) && u((0, p.CM)((0, p.j6)(t, r)));
                                    },
                                }),
                            ],
                        }),
                        I
                            ? (0, n.jsx)("div", {
                                  className: y.XF,
                                  children: (0, n.jsx)(o.Q, {
                                      text: w.intl.string(v.default.YLHRzA),
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
r.d(
    t,
    {},
    {
        A: function (e) {
            let { settings: t, tiers: r, choices: a, disabled: i, onChange: s, className: o, icon: m } = e,
                p = l.useRef(null),
                [h, g] = (0, x.A)(t, s),
                [b, j] = l.useState(!1),
                { mounted: R, entered: k } = C(b);
            return (0, n.jsx)(c.Y, {
                targetElementRef: p,
                position: "top",
                align: "right",
                shouldShow: R,
                onRequestClose: () => j(!1),
                animation: c.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { position: t } = e;
                    return (0, n.jsx)(N, {
                        settings: h,
                        tiers: r ?? null,
                        choices: a,
                        disabled: i,
                        onChange: g,
                        placement: t,
                        open: b,
                        entered: k,
                    });
                },
                children: (e, t) => {
                    let { isShown: r } = t;
                    return (0, n.jsx)(u.m, {
                        text: w.intl.string(v.default["k2JN/p"]),
                        shouldShow: !r,
                        ariaHidden: !0,
                        children: (0, n.jsx)(d.D, {
                            innerRef: p,
                            className: o ?? y.hZ,
                            "aria-label": w.intl.string(v.default["k2JN/p"]),
                            ...e,
                            onClick: () => j((e) => !e),
                            "aria-expanded": b,
                            children:
                                m ??
                                (0, n.jsx)(f.FiltersHorizontalIcon, {
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
