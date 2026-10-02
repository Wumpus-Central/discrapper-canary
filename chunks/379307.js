l.d(t, { A: () => w });
var n = l(477900),
    a = l(582128),
    i = l(503698),
    r = l.n(i),
    s = l(900797),
    u = l(320448),
    o = l(834730),
    d = l(922016),
    c = l(866665),
    f = l(939249),
    m = l(783977),
    h = l(673724),
    g = l(107698),
    x = l(704855),
    p = l(98115),
    v = l(856795),
    b = l(50617),
    j = l(375708),
    y = l(752065);
function k(e) {
    let [t, l] = a.useState(e),
        [n, i] = a.useState(!1),
        [r, s] = a.useState(e);
    return (
        r !== e && (s(e), e ? l(!0) : i(!1)),
        a.useEffect(() => {
            if (e || !t) return;
            let n = setTimeout(() => l(!1), 150);
            return () => clearTimeout(n);
        }, [e, t]),
        a.useEffect(() => {
            if (!t || !e) return;
            let l = 0,
                n = requestAnimationFrame(() => {
                    l = requestAnimationFrame(() => i(!0));
                });
            return () => {
                (cancelAnimationFrame(n), cancelAnimationFrame(l));
            };
        }, [t, e]),
        { mounted: t, entered: n }
    );
}
function N(e) {
    let { settings: t, tiers: l, choices: i, disabled: d, onChange: c, placement: f, open: m, entered: N } = e,
        [w, A] = a.useState(!1),
        S = k(w),
        C = h.ks.indexOf(t.tier),
        E = w ? s.t : u._,
        I = h.ks.map(g.eQ),
        T = (0, g.is)(t.tier),
        { text: M, phase: _ } = (0, v.Q)(T);
    return (0, n.jsx)("div", {
        className: y.qd,
        "data-placement": f ?? void 0,
        children: (0, n.jsxs)("div", {
            className: r()(y.t$, { [y.Zr]: m && N, [y.GF]: !m }),
            role: "dialog",
            "aria-label": j.intl.string(b.default["2NWMqY"]),
            children: [
                S.mounted
                    ? (0, n.jsx)("div", {
                          className: r()(y.Nr, y.uO, { [y.Zr]: w && S.entered, [y.GF]: !w }),
                          children: (0, n.jsx)(p.u1, { settings: t, tiers: l, choices: i, disabled: d, onChange: c }),
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
                                    "aria-expanded": w,
                                    "aria-label": j.intl.string(b.default.IaLFoX),
                                    onClick: () => A((e) => !e),
                                    children: [
                                        (0, n.jsx)(o.E, {
                                            tag: "span",
                                            variant: "text-md/medium",
                                            color: "none",
                                            children: j.intl.string(b.default.GDs9Vq),
                                        }),
                                        (0, n.jsx)(E, {
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
                                    className: r()(y.Z, { [y.xQ]: "exit" === _, [y.lm]: "enter" === _ }),
                                    children: M,
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
                                            children: j.intl.string(b.default["5DOL2g"]),
                                        }),
                                        (0, n.jsx)(o.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: j.intl.string(b.default.OJIfkn),
                                        }),
                                    ],
                                }),
                                (0, n.jsx)(x.A, {
                                    activeIndex: C,
                                    stops: I,
                                    ariaLabel: j.intl.string(b.default.GDs9Vq),
                                    disabled: d,
                                    onSelect: function (e) {
                                        let l = h.ks[e];
                                        null != l && l !== t.tier && c((0, g.zy)((0, g.gc)(t, l)));
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
function w(e) {
    let { settings: t, tiers: l, choices: i, disabled: r, onChange: s, className: u, icon: o } = e,
        h = a.useRef(null),
        [g, x] = (0, p.kn)(t, s),
        [v, w] = a.useState(!1),
        { mounted: A, entered: S } = k(v);
    return (0, n.jsx)(d.Y, {
        targetElementRef: h,
        position: "top",
        align: "right",
        shouldShow: A,
        onRequestClose: () => w(!1),
        animation: d.Y.Animation.NONE,
        renderPopout: (e) => {
            let { position: t } = e;
            return (0, n.jsx)(N, {
                settings: g,
                tiers: l ?? null,
                choices: i,
                disabled: r,
                onChange: x,
                placement: t,
                open: v,
                entered: S,
            });
        },
        children: (e, t) => {
            let { isShown: l } = t;
            return (0, n.jsx)(c.m, {
                text: j.intl.string(b.default.GoSNDN),
                shouldShow: !l,
                ariaHidden: !0,
                children: (0, n.jsx)(f.D, {
                    innerRef: h,
                    className: u ?? y.hZ,
                    "aria-label": j.intl.string(b.default.GoSNDN),
                    ...e,
                    onClick: () => w((e) => !e),
                    "aria-expanded": v,
                    children: o ?? (0, n.jsx)(m.R, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                }),
            });
        },
    });
}
