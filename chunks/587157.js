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
    g = r(822313),
    x = r(2372),
    j = r(590221),
    b = r(359589),
    v = r(191850),
    C = r(792996),
    y = r(254575);
function w(e) {
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
    let { settings: t, tiers: r, choices: a, disabled: c, onChange: u, placement: d, open: f, entered: g } = e,
        [N, R] = l.useState(!1),
        k = w(N),
        S = h.P.indexOf(t.tier),
        A = (0, p.hl)(a),
        I = h.P.map(p.pL),
        T = (0, p.Tc)(t.tier),
        { text: L, phase: E } = (0, m.Q)(T);
    return (0, n.jsx)("div", {
        className: y.qd,
        "data-placement": d ?? void 0,
        children: (0, n.jsxs)("div", {
            className: i()(y.t$, { [y.Zr]: f && g, [y.GF]: !f }),
            role: "dialog",
            "aria-label": C.intl.string(v.default["3E7Yc0"]),
            children: [
                A && k.mounted
                    ? (0, n.jsx)("div", {
                          className: i()(y.Nr, y.uO, { [y.Zr]: N && k.entered, [y.GF]: !N }),
                          children: (0, n.jsx)(b.b, { settings: t, tiers: r, choices: a, disabled: c, onChange: u }),
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
                                    children: C.intl.string(v.default.aBPQxX),
                                }),
                                (0, n.jsx)(s.E, {
                                    tag: "span",
                                    variant: "body-sm/normal",
                                    color: "text-muted",
                                    className: i()(y.Z, { [y.xQ]: "exit" === E, [y.lm]: "enter" === E }),
                                    children: L,
                                }),
                            ],
                        }),
                        (0, n.jsxs)("div", {
                            className: y.hs,
                            children: [
                                (0, n.jsx)(x.A, {}),
                                (0, n.jsx)(j.A, {
                                    activeIndex: S,
                                    stops: I,
                                    lockedStops: p.bt,
                                    ariaLabel: C.intl.string(v.default.aBPQxX),
                                    disabled: c,
                                    onSelect: function (e) {
                                        let r = h.P[e];
                                        null != r && r !== t.tier && (0, p.g_)(r) && u((0, p.CM)((0, p.j6)(t, r)));
                                    },
                                }),
                            ],
                        }),
                        A
                            ? (0, n.jsx)("div", {
                                  className: y.XF,
                                  children: (0, n.jsx)(o.Q, {
                                      text: C.intl.string(v.default.YLHRzA),
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
                [h, x] = (0, g.A)(t, s),
                [j, b] = l.useState(!1),
                { mounted: R, entered: k } = w(j);
            return (0, n.jsx)(c.Y, {
                targetElementRef: p,
                position: "top",
                align: "right",
                shouldShow: R,
                onRequestClose: () => b(!1),
                animation: c.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { position: t } = e;
                    return (0, n.jsx)(N, {
                        settings: h,
                        tiers: r ?? null,
                        choices: a,
                        disabled: i,
                        onChange: x,
                        placement: t,
                        open: j,
                        entered: k,
                    });
                },
                children: (e, t) => {
                    let { isShown: r } = t;
                    return (0, n.jsx)(u.m, {
                        text: C.intl.string(v.default["k2JN/p"]),
                        shouldShow: !r,
                        ariaHidden: !0,
                        children: (0, n.jsx)(d.D, {
                            innerRef: p,
                            className: o ?? y.hZ,
                            "aria-label": C.intl.string(v.default["k2JN/p"]),
                            ...e,
                            onClick: () => b((e) => !e),
                            "aria-expanded": j,
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
