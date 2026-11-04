var r = n(477900),
    l = n(582128),
    a = n(503698),
    i = n.n(a),
    s = n(900797),
    o = n(320448),
    c = n(834730),
    u = n(265872),
    d = n(866665),
    f = n(939249),
    m = n(783977),
    p = n(344587),
    h = n(534554),
    g = n(392208),
    x = n(822313),
    b = n(590221),
    j = n(359589),
    v = n(191850),
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
    let { settings: t, tiers: n, choices: a, disabled: u, onChange: d, placement: f, open: m, entered: x } = e,
        [N, R] = l.useState(!1),
        E = C(N),
        U = g.P.indexOf(t.tier),
        A = N ? s.t : o._,
        S = g.P.map(h.D0),
        k = (0, h.Tc)(t.tier),
        { text: T, phase: O } = (0, p.Q)(k);
    return (0, r.jsx)("div", {
        className: w.qd,
        "data-placement": f ?? void 0,
        children: (0, r.jsxs)("div", {
            className: i()(w.t$, { [w.Zr]: m && x, [w.GF]: !m }),
            role: "dialog",
            "aria-label": y.intl.string(v.default["3E7Yc0"]),
            children: [
                E.mounted
                    ? (0, r.jsx)("div", {
                          className: i()(w.Nr, w.uO, { [w.Zr]: N && E.entered, [w.GF]: !N }),
                          children: (0, r.jsx)(j.b, { settings: t, tiers: n, choices: a, disabled: u, onChange: d }),
                      })
                    : null,
                (0, r.jsxs)("div", {
                    className: `${w.Nr} ${w.rF}`,
                    children: [
                        (0, r.jsxs)("div", {
                            className: w.wx,
                            children: [
                                (0, r.jsxs)("button", {
                                    type: "button",
                                    className: w.y6,
                                    "aria-expanded": N,
                                    "aria-label": y.intl.string((0, h.FC)(a)),
                                    onClick: () => R((e) => !e),
                                    children: [
                                        (0, r.jsx)(c.E, {
                                            tag: "span",
                                            variant: "body-md/medium",
                                            color: "none",
                                            children: y.intl.string(v.default.aBPQxX),
                                        }),
                                        (0, r.jsx)(A, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: "currentColor",
                                            className: w.vg,
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(c.E, {
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
                                (0, r.jsxs)("div", {
                                    className: w.Nb,
                                    children: [
                                        (0, r.jsx)(c.E, {
                                            tag: "span",
                                            variant: "body-sm/medium",
                                            color: "text-subtle",
                                            children: y.intl.string(v.default["/tlOR5"]),
                                        }),
                                        (0, r.jsx)(c.E, {
                                            tag: "span",
                                            variant: "body-sm/medium",
                                            color: "text-subtle",
                                            children: y.intl.string(v.default.FxoUwB),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(b.A, {
                                    activeIndex: U,
                                    stops: S,
                                    ariaLabel: y.intl.string(v.default.aBPQxX),
                                    disabled: u,
                                    onSelect: function (e) {
                                        let n = g.P[e];
                                        null != n && n !== t.tier && d((0, h.CM)((0, h.j6)(t, n)));
                                    },
                                }),
                            ],
                        }),
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
            let { settings: t, tiers: n, choices: a, disabled: i, onChange: s, className: o, icon: c } = e,
                p = l.useRef(null),
                [h, g] = (0, x.A)(t, s),
                [b, j] = l.useState(!1),
                { mounted: R, entered: E } = C(b);
            return (0, r.jsx)(u.Y, {
                targetElementRef: p,
                position: "top",
                align: "right",
                shouldShow: R,
                onRequestClose: () => j(!1),
                animation: u.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { position: t } = e;
                    return (0, r.jsx)(N, {
                        settings: h,
                        tiers: n ?? null,
                        choices: a,
                        disabled: i,
                        onChange: g,
                        placement: t,
                        open: b,
                        entered: E,
                    });
                },
                children: (e, t) => {
                    let { isShown: n } = t;
                    return (0, r.jsx)(d.m, {
                        text: y.intl.string(v.default["k2JN/p"]),
                        shouldShow: !n,
                        ariaHidden: !0,
                        children: (0, r.jsx)(f.D, {
                            innerRef: p,
                            className: o ?? w.hZ,
                            "aria-label": y.intl.string(v.default["k2JN/p"]),
                            ...e,
                            onClick: () => j((e) => !e),
                            "aria-expanded": b,
                            children: c ?? (0, r.jsx)(m.R, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                        }),
                    });
                },
            });
        },
    },
);
