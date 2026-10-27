a.d(t, { A: () => A });
var s = a(477900),
    n = a(582128),
    l = a(503698),
    r = a.n(l),
    i = a(900797),
    o = a(320448),
    c = a(834730),
    u = a(265872),
    d = a(866665),
    m = a(939249),
    f = a(783977),
    h = a(344587),
    x = a(534554),
    g = a(392208),
    p = a(822313),
    v = a(837984),
    j = a(359589),
    N = a(248675),
    b = a(105292),
    y = a(254575);
function C(e) {
    let [t, a] = n.useState(e),
        [s, l] = n.useState(!1),
        [r, i] = n.useState(e);
    return (
        r !== e && (i(e), e ? a(!0) : l(!1)),
        n.useEffect(() => {
            if (e || !t) return;
            let s = setTimeout(() => a(!1), 150);
            return () => clearTimeout(s);
        }, [e, t]),
        n.useEffect(() => {
            if (!t || !e) return;
            let a = 0,
                s = requestAnimationFrame(() => {
                    a = requestAnimationFrame(() => l(!0));
                });
            return () => {
                (cancelAnimationFrame(s), cancelAnimationFrame(a));
            };
        }, [t, e]),
        { mounted: t, entered: s }
    );
}
function w(e) {
    let { settings: t, tiers: a, choices: l, disabled: u, onChange: d, placement: m, open: f, entered: p } = e,
        [w, A] = n.useState(!1),
        E = C(w),
        S = g.P.indexOf(t.tier),
        R = w ? i.t : o._,
        I = g.P.map(x.D0),
        k = (0, x.Tc)(t.tier),
        { text: O, phase: L } = (0, h.Q)(k);
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
                          className: r()(y.Nr, y.uO, { [y.Zr]: w && E.entered, [y.GF]: !w }),
                          children: (0, s.jsx)(j.b, { settings: t, tiers: a, choices: l, disabled: u, onChange: d }),
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
                                    "aria-expanded": w,
                                    "aria-label": b.intl.string((0, x.FC)(l)),
                                    onClick: () => A((e) => !e),
                                    children: [
                                        (0, s.jsx)(c.E, {
                                            tag: "span",
                                            variant: "text-md/medium",
                                            color: "none",
                                            children: b.intl.string(N.default.aBPQxX),
                                        }),
                                        (0, s.jsx)(R, {
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
                                    className: r()(y.Z, { [y.xQ]: "exit" === L, [y.lm]: "enter" === L }),
                                    children: O,
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
                                    activeIndex: S,
                                    stops: I,
                                    ariaLabel: b.intl.string(N.default.aBPQxX),
                                    disabled: u,
                                    onSelect: function (e) {
                                        let a = g.P[e];
                                        null != a && a !== t.tier && d((0, x.CM)((0, x.j6)(t, a)));
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
    let { settings: t, tiers: a, choices: l, disabled: r, onChange: i, className: o, icon: c } = e,
        h = n.useRef(null),
        [x, g] = (0, p.A)(t, i),
        [v, j] = n.useState(!1),
        { mounted: A, entered: E } = C(v);
    return (0, s.jsx)(u.Y, {
        targetElementRef: h,
        position: "top",
        align: "right",
        shouldShow: A,
        onRequestClose: () => j(!1),
        animation: u.Y.Animation.NONE,
        renderPopout: (e) => {
            let { position: t } = e;
            return (0, s.jsx)(w, {
                settings: x,
                tiers: a ?? null,
                choices: l,
                disabled: r,
                onChange: g,
                placement: t,
                open: v,
                entered: E,
            });
        },
        children: (e, t) => {
            let { isShown: a } = t;
            return (0, s.jsx)(d.m, {
                text: b.intl.string(N.default["k2JN/p"]),
                shouldShow: !a,
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
