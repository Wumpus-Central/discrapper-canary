l.d(t, { A: () => w });
var n = l(477900),
    a = l(582128),
    r = l(503698),
    i = l.n(r),
    s = l(900797),
    u = l(320448),
    o = l(834730),
    d = l(922016),
    c = l(866665),
    m = l(939249),
    f = l(783977),
    h = l(673724),
    x = l(107698),
    g = l(704855),
    p = l(98115),
    v = l(856795),
    b = l(50617),
    j = l(375708),
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
    let { settings: t, tiers: l, choices: r, disabled: d, onChange: c, placement: m, open: f, entered: N } = e,
        [w, A] = a.useState(!1),
        E = k(w),
        S = h.ks.indexOf(t.tier),
        C = w ? s.t : u._,
        I = h.ks.map(x.eQ),
        M = (0, x.is)(t.tier),
        { text: T, phase: R } = (0, v.Q)(M);
    return (0, n.jsx)("div", {
        className: y.qd,
        "data-placement": m ?? void 0,
        children: (0, n.jsxs)("div", {
            className: i()(y.t$, { [y.Zr]: f && N, [y.GF]: !f }),
            role: "dialog",
            "aria-label": j.intl.string(b.default["2NWMqY"]),
            children: [
                E.mounted
                    ? (0, n.jsx)("div", {
                          className: i()(y.Nr, y.uO, { [y.Zr]: w && E.entered, [y.GF]: !w }),
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
                                    "aria-label": j.intl.string(b.default.IaLFoX),
                                    onClick: () => A((e) => !e),
                                    children: [
                                        (0, n.jsx)(o.E, {
                                            tag: "span",
                                            variant: "text-md/medium",
                                            color: "none",
                                            children: j.intl.string(b.default.GDs9Vq),
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
                                (0, n.jsx)(o.E, {
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
                                (0, n.jsx)(g.A, {
                                    activeIndex: S,
                                    stops: I,
                                    ariaLabel: j.intl.string(b.default.GDs9Vq),
                                    disabled: d,
                                    onSelect: function (e) {
                                        let n = h.ks[e];
                                        null != n && n !== t.tier && c((0, x.zy)((0, x.gc)(t, n), l, r.main));
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
    let { settings: t, tiers: l, choices: r, disabled: i, onChange: s, className: u, icon: o } = e,
        h = a.useRef(null),
        [x, g] = (0, p.kn)(t, s),
        [v, w] = a.useState(!1),
        { mounted: A, entered: E } = k(v);
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
                entered: E,
            });
        },
        children: (e, t) => {
            let { isShown: l } = t;
            return (0, n.jsx)(c.m, {
                text: j.intl.string(b.default.GoSNDN),
                shouldShow: !l,
                ariaHidden: !0,
                children: (0, n.jsx)(m.D, {
                    innerRef: h,
                    className: u ?? y.hZ,
                    "aria-label": j.intl.string(b.default.GoSNDN),
                    ...e,
                    onClick: () => w((e) => !e),
                    "aria-expanded": v,
                    children: o ?? (0, n.jsx)(f.R, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                }),
            });
        },
    });
}
