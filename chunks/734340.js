a.d(t, { A: () => E }), a(323874), a(14289), a(35956);
var n = a(627968),
    l = a(64700),
    i = a(311907),
    s = a(821609),
    r = a(834730),
    o = a(573613),
    d = a(939249),
    c = a(789645),
    u = a(110574),
    m = a(65593),
    h = a(641324),
    p = a(669550),
    x = a(409658),
    g = a(287809),
    v = a(901139),
    b = a(641886),
    _ = a(780898),
    f = a(28974),
    j = a(991347),
    A = a(871317),
    y = a(698638),
    C = a(877203);
function E() {
    let [e, t] = (0, l.useState)(!1),
        [a, i] = (0, l.useState)(!1),
        [o, d] = (0, l.useState)(null),
        { node: c } = (0, p.Ay)(x.k, ""),
        u = (0, v.Ay)((e) => e.toolsCache),
        { setToolsCache: g, removeToolsCache: f } = (0, v.DE)(),
        { setImgCache: A } = (0, v.TW)(),
        E = (0, l.useCallback)(
            (e) => {
                let t = u[e];
                null != t
                    ? d({ previewToolKey: t.url, palette: t.palette, skuId: "0" })
                    : d((t) =>
                          null == t ? { previewToolKey: e, palette: b.Wj, skuId: "0" } : { ...t, previewToolKey: e },
                      );
            },
            [u],
        ),
        D = (0, l.useCallback)((e) => {
            d((t) => (null == t ? null : { ...t, palette: e }));
        }, []),
        T = (0, l.useCallback)(
            (e) => {
                f(e);
            },
            [f],
        );
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: C.ne,
                children: [
                    (0, n.jsxs)("div", {
                        className: C.gO,
                        children: [
                            (0, n.jsx)(s.$, {
                                size: "sm",
                                onClick: () => {
                                    i(!1), t((e) => !e);
                                },
                                variant: "secondary",
                                text: "Toggle Themes",
                            }),
                            (0, n.jsx)(s.$, {
                                size: "sm",
                                onClick: () => {
                                    t(!1), i((e) => !e);
                                },
                                variant: "secondary",
                                text: "Toggle Gradients",
                            }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: C.uQ,
                        children: [
                            e && (0, n.jsx)(h.A, { node: c }),
                            a &&
                                (0, n.jsx)(j.A, {
                                    selected: o?.palette?.name,
                                    onSelect: (e) => {
                                        o?.previewToolKey != null && g(o.previewToolKey, o.previewToolKey, e), D(e);
                                    },
                                }),
                        ],
                    }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: C.iW,
                children: [
                    (0, n.jsx)(S, { nameplate: o }, o?.palette?.name),
                    (0, n.jsxs)("div", {
                        className: C.Uo,
                        children: [
                            (0, n.jsx)(r.E, {
                                variant: "text-sm/semibold",
                                children: "Drag background image to screen",
                            }),
                            (0, n.jsx)(m.A, {
                                title: "upload image",
                                description: "upload the background",
                                icons: y.xi,
                                onDrop: async (e) => {
                                    let t = URL.createObjectURL(e[0]),
                                        a = e[0],
                                        n = await a.arrayBuffer();
                                    A(t, t, (0, _.nI)(n)), g(t, t, b.Wj);
                                },
                            }),
                            (0, n.jsx)("div", {
                                className: C.is,
                                children: Object.values(u).map((e) => {
                                    let { url: t } = e;
                                    return (0, n.jsx)(N, { src: t, onSetStatic: E, removeAsset: T }, t);
                                }),
                            }),
                            (0, n.jsx)(I, {
                                label: "gradient override",
                                onChange: (e) => D({ name: b.AK, darkBackground: e, lightBackground: e }),
                            }),
                            (0, n.jsx)(k, { label: "set", onClick: () => {} }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function S(e) {
    let { nameplate: t } = e,
        [a, i] = (0, l.useState)(320),
        s = (0, l.useRef)(null),
        d = (0, l.useRef)(null),
        c = (0, l.useRef)(null),
        u = (0, l.useRef)(document),
        m = (0, l.useCallback)((e) => {
            if (null != s.current) {
                let t = s.current.getBoundingClientRect();
                i(Math.max(264, Math.min(432, e.clientX - t.left)));
            }
        }, []),
        h = (0, l.useCallback)(
            (e) => {
                e.preventDefault(), e.stopPropagation();
                let t = e.currentTarget.ownerDocument;
                u.current = t;
                let a = (e) => {
                        e.preventDefault(), m(e);
                    },
                    n = () => {
                        null != d.current && (t.removeEventListener("mousemove", d.current), (d.current = null)),
                            null != c.current && (t.removeEventListener("mouseup", c.current), (c.current = null));
                    };
                (d.current = a), (c.current = n), t.addEventListener("mousemove", a), t.addEventListener("mouseup", n);
            },
            [m],
        );
    return (
        (0, l.useEffect)(
            () => () => {
                null != d.current && (u.current.removeEventListener("mousemove", d.current), (d.current = null)),
                    null != c.current && (u.current.removeEventListener("mouseup", c.current), (c.current = null));
            },
            [],
        ),
        (0, n.jsx)(o.Ip, {
            className: C.Fp,
            orientation: "horizontal",
            children: (0, n.jsxs)("div", {
                ref: s,
                className: C.ey,
                style: { width: `${a}px` },
                children: [
                    (0, n.jsx)(r.E, { variant: "text-sm/semibold", children: "Memberlist" }),
                    (0, n.jsx)(D, { nameplate: t }),
                    (0, n.jsx)(r.E, { variant: "text-sm/semibold", children: "DMs" }),
                    (0, n.jsx)(T, { nameplate: t }),
                    (0, n.jsx)(r.E, { variant: "text-sm/semibold", children: "RTC" }),
                    (0, n.jsx)(w, { nameplate: t }),
                    (0, n.jsx)("div", { className: C.Di, onMouseDown: h }),
                ],
            }),
        })
    );
}
function N(e) {
    let { src: t, onSetStatic: a, removeAsset: l } = e;
    return (0, n.jsxs)("div", {
        className: C.xO,
        children: [
            (0, n.jsx)(d.D, {
                onClick: () => l(t),
                className: C.yV,
                children: (0, n.jsx)(c.P, { size: "custom", width: 16, height: 16, name: "x" }),
            }),
            (0, n.jsx)("img", { className: C.Ez, src: t, alt: "" }),
            (0, n.jsx)("div", {
                className: C.Lu,
                children: (0, n.jsx)(s.$, {
                    onClick: () => a(t),
                    size: "sm",
                    variant: "secondary",
                    text: "set nameplate",
                }),
            }),
        ],
    });
}
function k(e) {
    let { label: t, onClick: a } = e;
    return (0, n.jsxs)("div", {
        className: C.Uu,
        children: [
            (0, n.jsx)(r.E, { variant: "text-sm/normal", children: "coming soon" }),
            (0, n.jsx)(s.$, { variant: "secondary", size: "sm", text: t, disabled: !0, onClick: a }),
        ],
    });
}
function I(e) {
    let { label: t, onChange: a } = e;
    return (0, n.jsxs)("div", {
        className: C.Im,
        children: [
            (0, n.jsx)(r.E, { variant: "text-sm/normal", children: t }),
            (0, n.jsx)("input", {
                onChange: (e) => {
                    a(e.target.value);
                },
                className: C.QL,
                placeholder: "#000000",
            }),
        ],
    });
}
function D(e) {
    let { nameplate: t } = e,
        a = (0, i.bG)([g.default], () => g.default.getCurrentUser());
    return (0, n.jsx)("div", {
        className: C.VH,
        children: (0, n.jsxs)("div", {
            className: C.H1,
            children: [
                (0, n.jsx)(r.E, { className: C.Pf, variant: "text-sm/semibold", children: "DEFAULT" }),
                (0, n.jsx)(u.A, { nameplate: t, user: a, currentUser: a }),
                (0, n.jsx)(r.E, { className: C.Pf, variant: "text-sm/semibold", children: "FOCUSED" }),
                (0, n.jsxs)("div", {
                    children: [
                        (0, n.jsx)(u.A, { nameplate: t, selected: !0, user: a, currentUser: a }),
                        (0, n.jsx)(u.A, { selected: !0, user: a, currentUser: a }),
                    ],
                }),
            ],
        }),
    });
}
function T(e) {
    let { nameplate: t } = e;
    return (0, n.jsx)("div", {
        className: C.VH,
        children: (0, n.jsxs)("div", {
            className: C.H1,
            children: [
                (0, n.jsx)(r.E, { className: C.Pf, variant: "text-sm/semibold", children: "DEFAULT" }),
                (0, n.jsx)(A.A, { nameplate: t }),
                (0, n.jsx)(r.E, { className: C.Pf, variant: "text-sm/semibold", children: "FOCUSED" }),
                (0, n.jsxs)("div", {
                    children: [(0, n.jsx)(A.A, { selected: !0, nameplate: t }), (0, n.jsx)(A.A, { selected: !0 })],
                }),
            ],
        }),
    });
}
function w(e) {
    let { nameplate: t } = e;
    return (0, n.jsx)("div", {
        className: C.VH,
        children: (0, n.jsx)("div", { className: C.X2, children: (0, n.jsx)(f.A, { nameplate: t }) }),
    });
}
