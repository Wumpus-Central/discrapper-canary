n.d(t, { A: () => C });
var s = n(477900),
    l = n(582128),
    r = n(503698),
    a = n.n(r),
    i = n(900797),
    c = n(320448),
    o = n(834730),
    u = n(265872),
    d = n(866665),
    m = n(939249),
    f = n(783977),
    h = n(344587),
    x = n(534554),
    g = n(392208),
    p = n(822313),
    v = n(837984),
    j = n(359589),
    N = n(809526),
    y = n(105292),
    b = n(254575);
function w(e) {
    let [t, n] = l.useState(e),
        [s, r] = l.useState(!1),
        [a, i] = l.useState(e);
    return (
        a !== e && (i(e), e ? n(!0) : r(!1)),
        l.useEffect(() => {
            if (e || !t) return;
            let s = setTimeout(() => n(!1), 150);
            return () => clearTimeout(s);
        }, [e, t]),
        l.useEffect(() => {
            if (!t || !e) return;
            let n = 0,
                s = requestAnimationFrame(() => {
                    n = requestAnimationFrame(() => r(!0));
                });
            return () => {
                (cancelAnimationFrame(s), cancelAnimationFrame(n));
            };
        }, [t, e]),
        { mounted: t, entered: s }
    );
}
function A(e) {
    let { settings: t, tiers: n, choices: r, disabled: u, onChange: d, placement: m, open: f, entered: p } = e,
        [A, C] = l.useState(!1),
        E = w(A),
        S = g.P.indexOf(t.tier),
        I = A ? i.t : c._,
        R = g.P.map(x.D0),
        k = (0, x.Tc)(t.tier),
        { text: P, phase: L } = (0, h.Q)(k);
    return (0, s.jsx)("div", {
        className: b.qd,
        "data-placement": m ?? void 0,
        children: (0, s.jsxs)("div", {
            className: a()(b.t$, { [b.Zr]: f && p, [b.GF]: !f }),
            role: "dialog",
            "aria-label": y.intl.string(N.default["3E7Yc0"]),
            children: [
                E.mounted
                    ? (0, s.jsx)("div", {
                          className: a()(b.Nr, b.uO, { [b.Zr]: A && E.entered, [b.GF]: !A }),
                          children: (0, s.jsx)(j.b, { settings: t, tiers: n, choices: r, disabled: u, onChange: d }),
                      })
                    : null,
                (0, s.jsxs)("div", {
                    className: `${b.Nr} ${b.rF}`,
                    children: [
                        (0, s.jsxs)("div", {
                            className: b.wx,
                            children: [
                                (0, s.jsxs)("button", {
                                    type: "button",
                                    className: b.y6,
                                    "aria-expanded": A,
                                    "aria-label": y.intl.string((0, x.FC)(r)),
                                    onClick: () => C((e) => !e),
                                    children: [
                                        (0, s.jsx)(o.E, {
                                            tag: "span",
                                            variant: "text-md/medium",
                                            color: "none",
                                            children: y.intl.string(N.default.aBPQxX),
                                        }),
                                        (0, s.jsx)(I, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: "currentColor",
                                            className: b.vg,
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(o.E, {
                                    tag: "span",
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    className: a()(b.Z, { [b.xQ]: "exit" === L, [b.lm]: "enter" === L }),
                                    children: P,
                                }),
                            ],
                        }),
                        (0, s.jsxs)("div", {
                            className: b.hs,
                            children: [
                                (0, s.jsxs)("div", {
                                    className: b.Nb,
                                    children: [
                                        (0, s.jsx)(o.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: y.intl.string(N.default["/tlOR5"]),
                                        }),
                                        (0, s.jsx)(o.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: y.intl.string(N.default.FxoUwB),
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(v.A, {
                                    activeIndex: S,
                                    stops: R,
                                    ariaLabel: y.intl.string(N.default.aBPQxX),
                                    disabled: u,
                                    onSelect: function (e) {
                                        let n = g.P[e];
                                        null != n && n !== t.tier && d((0, x.CM)((0, x.j6)(t, n)));
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
function C(e) {
    let { settings: t, tiers: n, choices: r, disabled: a, onChange: i, className: c, icon: o } = e,
        h = l.useRef(null),
        [x, g] = (0, p.A)(t, i),
        [v, j] = l.useState(!1),
        { mounted: C, entered: E } = w(v);
    return (0, s.jsx)(u.Y, {
        targetElementRef: h,
        position: "top",
        align: "right",
        shouldShow: C,
        onRequestClose: () => j(!1),
        animation: u.Y.Animation.NONE,
        renderPopout: (e) => {
            let { position: t } = e;
            return (0, s.jsx)(A, {
                settings: x,
                tiers: n ?? null,
                choices: r,
                disabled: a,
                onChange: g,
                placement: t,
                open: v,
                entered: E,
            });
        },
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, s.jsx)(d.m, {
                text: y.intl.string(N.default["k2JN/p"]),
                shouldShow: !n,
                ariaHidden: !0,
                children: (0, s.jsx)(m.D, {
                    innerRef: h,
                    className: c ?? b.hZ,
                    "aria-label": y.intl.string(N.default["k2JN/p"]),
                    ...e,
                    onClick: () => j((e) => !e),
                    "aria-expanded": v,
                    children: o ?? (0, s.jsx)(f.R, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                }),
            });
        },
    });
}
