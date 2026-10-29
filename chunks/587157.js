n.d(t, { A: () => A });
var s = n(477900),
    a = n(582128),
    l = n(503698),
    r = n.n(l),
    i = n(900797),
    o = n(320448),
    c = n(834730),
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
    N = n(248675),
    b = n(105292),
    y = n(254575);
function w(e) {
    let [t, n] = a.useState(e),
        [s, l] = a.useState(!1),
        [r, i] = a.useState(e);
    return (
        r !== e && (i(e), e ? n(!0) : l(!1)),
        a.useEffect(() => {
            if (e || !t) return;
            let s = setTimeout(() => n(!1), 150);
            return () => clearTimeout(s);
        }, [e, t]),
        a.useEffect(() => {
            if (!t || !e) return;
            let n = 0,
                s = requestAnimationFrame(() => {
                    n = requestAnimationFrame(() => l(!0));
                });
            return () => {
                (cancelAnimationFrame(s), cancelAnimationFrame(n));
            };
        }, [t, e]),
        { mounted: t, entered: s }
    );
}
function C(e) {
    let { settings: t, tiers: n, choices: l, disabled: u, onChange: d, placement: m, open: f, entered: p } = e,
        [C, A] = a.useState(!1),
        E = w(C),
        R = g.P.indexOf(t.tier),
        I = C ? i.t : o._,
        S = g.P.map(x.D0),
        k = (0, x.Tc)(t.tier),
        { text: L, phase: P } = (0, h.Q)(k);
    return (0, s.jsx)("div", {
        className: y.qd,
        "data-placement": m ?? void 0,
        children: (0, s.jsxs)("div", {
            className: r()(y.t$, { [y.Zr]: f && p, [y.GF]: !f }),
            role: "dialog",
            "aria-label": b.intl.string(N.default["3E7Yc0"]),
            children: [
                E.mounted
                    ? (0, s.jsx)("div", {
                          className: r()(y.Nr, y.uO, { [y.Zr]: C && E.entered, [y.GF]: !C }),
                          children: (0, s.jsx)(j.b, { settings: t, tiers: n, choices: l, disabled: u, onChange: d }),
                      })
                    : null,
                (0, s.jsxs)("div", {
                    className: `${y.Nr} ${y.rF}`,
                    children: [
                        (0, s.jsxs)("div", {
                            className: y.wx,
                            children: [
                                (0, s.jsxs)("button", {
                                    type: "button",
                                    className: y.y6,
                                    "aria-expanded": C,
                                    "aria-label": b.intl.string((0, x.FC)(l)),
                                    onClick: () => A((e) => !e),
                                    children: [
                                        (0, s.jsx)(c.E, {
                                            tag: "span",
                                            variant: "text-md/medium",
                                            color: "none",
                                            children: b.intl.string(N.default.aBPQxX),
                                        }),
                                        (0, s.jsx)(I, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: "currentColor",
                                            className: y.vg,
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(c.E, {
                                    tag: "span",
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    className: r()(y.Z, { [y.xQ]: "exit" === P, [y.lm]: "enter" === P }),
                                    children: L,
                                }),
                            ],
                        }),
                        (0, s.jsxs)("div", {
                            className: y.hs,
                            children: [
                                (0, s.jsxs)("div", {
                                    className: y.Nb,
                                    children: [
                                        (0, s.jsx)(c.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: b.intl.string(N.default["/tlOR5"]),
                                        }),
                                        (0, s.jsx)(c.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: b.intl.string(N.default.FxoUwB),
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(v.A, {
                                    activeIndex: R,
                                    stops: S,
                                    ariaLabel: b.intl.string(N.default.aBPQxX),
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
function A(e) {
    let { settings: t, tiers: n, choices: l, disabled: r, onChange: i, className: o, icon: c } = e,
        h = a.useRef(null),
        [x, g] = (0, p.A)(t, i),
        [v, j] = a.useState(!1),
        { mounted: A, entered: E } = w(v);
    return (0, s.jsx)(u.Y, {
        targetElementRef: h,
        position: "top",
        align: "right",
        shouldShow: A,
        onRequestClose: () => j(!1),
        animation: u.Y.Animation.NONE,
        renderPopout: (e) => {
            let { position: t } = e;
            return (0, s.jsx)(C, {
                settings: x,
                tiers: n ?? null,
                choices: l,
                disabled: r,
                onChange: g,
                placement: t,
                open: v,
                entered: E,
            });
        },
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, s.jsx)(d.m, {
                text: b.intl.string(N.default["k2JN/p"]),
                shouldShow: !n,
                ariaHidden: !0,
                children: (0, s.jsx)(m.D, {
                    innerRef: h,
                    className: o ?? y.hZ,
                    "aria-label": b.intl.string(N.default["k2JN/p"]),
                    ...e,
                    onClick: () => j((e) => !e),
                    "aria-expanded": v,
                    children: c ?? (0, s.jsx)(f.R, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                }),
            });
        },
    });
}
