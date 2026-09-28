l.d(t, { A: () => w });
var n = l(477900),
    a = l(582128),
    r = l(503698),
    i = l.n(r),
    s = l(900797),
    o = l(320448),
    u = l(834730),
    d = l(922016),
    c = l(866665),
    f = l(939249),
    m = l(783977),
    h = l(673724),
    x = l(107698),
    g = l(704855),
    p = l(98115),
    v = l(856795),
    j = l(50617),
    b = l(375708),
    y = l(752065);
function k(e) {
    let [t, l] = a.useState(e),
        [n, r] = a.useState(!1),
        [i, s] = a.useState(e);
    return (
        i !== e && (s(e), e ? l(!0) : r(!1)),
        a.useEffect(() => {
            if (e || !t) return;
            let n = setTimeout(() => l(!1), 150);
            return () => clearTimeout(n);
        }, [e, t]),
        a.useEffect(() => {
            if (!t || !e) return;
            let l = 0,
                n = requestAnimationFrame(() => {
                    l = requestAnimationFrame(() => r(!0));
                });
            return () => {
                (cancelAnimationFrame(n), cancelAnimationFrame(l));
            };
        }, [t, e]),
        { mounted: t, entered: n }
    );
}
function N(e) {
    let { settings: t, tiers: l, choices: r, disabled: d, onChange: c, placement: f, open: m, entered: N } = e,
        [w, A] = a.useState(!1),
        S = k(w),
        E = h.ks.indexOf(t.tier),
        C = w ? s.t : o._,
        I = h.ks.map(x.eQ),
        M = (0, x.is)(t.tier),
        { text: T, phase: R } = (0, v.Q)(M);
    return (0, n.jsx)("div", {
        className: y.qd,
        "data-placement": f ?? void 0,
        children: (0, n.jsxs)("div", {
            className: i()(y.t$, { [y.Zr]: m && N, [y.GF]: !m }),
            role: "dialog",
            "aria-label": b.intl.string(j.default["2NWMqY"]),
            children: [
                S.mounted
                    ? (0, n.jsx)("div", {
                          className: i()(y.Nr, y.uO, { [y.Zr]: w && S.entered, [y.GF]: !w }),
                          children: (0, n.jsx)(p.u1, { settings: t, tiers: l, choices: r, disabled: d, onChange: c }),
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
                                    "aria-label": b.intl.string(j.default.IaLFoX),
                                    onClick: () => A((e) => !e),
                                    children: [
                                        (0, n.jsx)(u.E, {
                                            tag: "span",
                                            variant: "text-md/medium",
                                            color: "none",
                                            children: b.intl.string(j.default.GDs9Vq),
                                        }),
                                        (0, n.jsx)(C, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: "currentColor",
                                            className: y.vg,
                                        }),
                                    ],
                                }),
                                (0, n.jsx)(u.E, {
                                    tag: "span",
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    className: i()(y.Z, { [y.xQ]: "exit" === R, [y.lm]: "enter" === R }),
                                    children: T,
                                }),
                            ],
                        }),
                        (0, n.jsxs)("div", {
                            className: y.hs,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: y.Nb,
                                    children: [
                                        (0, n.jsx)(u.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: b.intl.string(j.default["5DOL2g"]),
                                        }),
                                        (0, n.jsx)(u.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: b.intl.string(j.default.OJIfkn),
                                        }),
                                    ],
                                }),
                                (0, n.jsx)(g.A, {
                                    activeIndex: E,
                                    stops: I,
                                    ariaLabel: b.intl.string(j.default.GDs9Vq),
                                    disabled: d,
                                    onSelect: function (e) {
                                        let l = h.ks[e];
                                        null != l && l !== t.tier && c((0, x.zy)((0, x.gc)(t, l)));
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
    let { settings: t, tiers: l, choices: r, disabled: i, onChange: s, className: o, icon: u } = e,
        h = a.useRef(null),
        [x, g] = (0, p.kn)(t, s),
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
                settings: x,
                tiers: l ?? null,
                choices: r,
                disabled: i,
                onChange: g,
                placement: t,
                open: v,
                entered: S,
            });
        },
        children: (e, t) => {
            let { isShown: l } = t;
            return (0, n.jsx)(c.m, {
                text: b.intl.string(j.default.GoSNDN),
                shouldShow: !l,
                ariaHidden: !0,
                children: (0, n.jsx)(f.D, {
                    innerRef: h,
                    className: o ?? y.hZ,
                    "aria-label": b.intl.string(j.default.GoSNDN),
                    ...e,
                    onClick: () => w((e) => !e),
                    "aria-expanded": v,
                    children: u ?? (0, n.jsx)(m.R, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                }),
            });
        },
    });
}
