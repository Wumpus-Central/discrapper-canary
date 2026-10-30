s.d(t, { A: () => A });
var n = s(477900),
    l = s(582128),
    r = s(503698),
    a = s.n(r),
    i = s(900797),
    c = s(320448),
    o = s(834730),
    u = s(265872),
    d = s(866665),
    m = s(939249),
    f = s(783977),
    h = s(344587),
    x = s(534554),
    g = s(392208),
    p = s(822313),
    j = s(837984),
    v = s(359589),
    N = s(809526),
    b = s(105292),
    y = s(254575);
function w(e) {
    let [t, s] = l.useState(e),
        [n, r] = l.useState(!1),
        [a, i] = l.useState(e);
    return (
        a !== e && (i(e), e ? s(!0) : r(!1)),
        l.useEffect(() => {
            if (e || !t) return;
            let n = setTimeout(() => s(!1), 150);
            return () => clearTimeout(n);
        }, [e, t]),
        l.useEffect(() => {
            if (!t || !e) return;
            let s = 0,
                n = requestAnimationFrame(() => {
                    s = requestAnimationFrame(() => r(!0));
                });
            return () => {
                (cancelAnimationFrame(n), cancelAnimationFrame(s));
            };
        }, [t, e]),
        { mounted: t, entered: n }
    );
}
function C(e) {
    let { settings: t, tiers: s, choices: r, disabled: u, onChange: d, placement: m, open: f, entered: p } = e,
        [C, A] = l.useState(!1),
        E = w(C),
        R = g.P.indexOf(t.tier),
        S = C ? i.t : c._,
        I = g.P.map(x.D0),
        P = (0, x.Tc)(t.tier),
        { text: k, phase: L } = (0, h.Q)(P);
    return (0, n.jsx)("div", {
        className: y.qd,
        "data-placement": m ?? void 0,
        children: (0, n.jsxs)("div", {
            className: a()(y.t$, { [y.Zr]: f && p, [y.GF]: !f }),
            role: "dialog",
            "aria-label": b.intl.string(N.default["3E7Yc0"]),
            children: [
                E.mounted
                    ? (0, n.jsx)("div", {
                          className: a()(y.Nr, y.uO, { [y.Zr]: C && E.entered, [y.GF]: !C }),
                          children: (0, n.jsx)(v.b, { settings: t, tiers: s, choices: r, disabled: u, onChange: d }),
                      })
                    : null,
                (0, n.jsxs)("div", {
                    className: `${y.Nr} ${y.rF}`,
                    children: [
                        (0, n.jsxs)("div", {
                            className: y.wx,
                            children: [
                                (0, n.jsxs)("button", {
                                    type: "button",
                                    className: y.y6,
                                    "aria-expanded": C,
                                    "aria-label": b.intl.string((0, x.FC)(r)),
                                    onClick: () => A((e) => !e),
                                    children: [
                                        (0, n.jsx)(o.E, {
                                            tag: "span",
                                            variant: "text-md/medium",
                                            color: "none",
                                            children: b.intl.string(N.default.aBPQxX),
                                        }),
                                        (0, n.jsx)(S, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: "currentColor",
                                            className: y.vg,
                                        }),
                                    ],
                                }),
                                (0, n.jsx)(o.E, {
                                    tag: "span",
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    className: a()(y.Z, { [y.xQ]: "exit" === L, [y.lm]: "enter" === L }),
                                    children: k,
                                }),
                            ],
                        }),
                        (0, n.jsxs)("div", {
                            className: y.hs,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: y.Nb,
                                    children: [
                                        (0, n.jsx)(o.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: b.intl.string(N.default["/tlOR5"]),
                                        }),
                                        (0, n.jsx)(o.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: b.intl.string(N.default.FxoUwB),
                                        }),
                                    ],
                                }),
                                (0, n.jsx)(j.A, {
                                    activeIndex: R,
                                    stops: I,
                                    ariaLabel: b.intl.string(N.default.aBPQxX),
                                    disabled: u,
                                    onSelect: function (e) {
                                        let s = g.P[e];
                                        null != s && s !== t.tier && d((0, x.CM)((0, x.j6)(t, s)));
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
    let { settings: t, tiers: s, choices: r, disabled: a, onChange: i, className: c, icon: o } = e,
        h = l.useRef(null),
        [x, g] = (0, p.A)(t, i),
        [j, v] = l.useState(!1),
        { mounted: A, entered: E } = w(j);
    return (0, n.jsx)(u.Y, {
        targetElementRef: h,
        position: "top",
        align: "right",
        shouldShow: A,
        onRequestClose: () => v(!1),
        animation: u.Y.Animation.NONE,
        renderPopout: (e) => {
            let { position: t } = e;
            return (0, n.jsx)(C, {
                settings: x,
                tiers: s ?? null,
                choices: r,
                disabled: a,
                onChange: g,
                placement: t,
                open: j,
                entered: E,
            });
        },
        children: (e, t) => {
            let { isShown: s } = t;
            return (0, n.jsx)(d.m, {
                text: b.intl.string(N.default["k2JN/p"]),
                shouldShow: !s,
                ariaHidden: !0,
                children: (0, n.jsx)(m.D, {
                    innerRef: h,
                    className: c ?? y.hZ,
                    "aria-label": b.intl.string(N.default["k2JN/p"]),
                    ...e,
                    onClick: () => v((e) => !e),
                    "aria-expanded": j,
                    children: o ?? (0, n.jsx)(f.R, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                }),
            });
        },
    });
}
