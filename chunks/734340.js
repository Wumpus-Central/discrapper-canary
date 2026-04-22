n.d(t, { A: () => j }), n(323874), n(14289), n(35956);
var a = n(627968),
    i = n(64700),
    s = n(311907),
    l = n(397927),
    r = n(110574),
    o = n(65593),
    d = n(641324),
    c = n(669550),
    u = n(409658),
    m = n(287809),
    h = n(901139),
    x = n(641886),
    p = n(780898),
    g = n(28974),
    f = n(991347),
    v = n(871317),
    _ = n(698638),
    b = n(877203);
function j() {
    let [e, t] = (0, i.useState)(!1),
        [n, s] = (0, i.useState)(!1),
        [r, m] = (0, i.useState)(null),
        { node: g } = (0, c.Ay)(u.k, ""),
        v = (0, h.Ay)((e) => e.toolsCache),
        { setToolsCache: j, removeToolsCache: E } = (0, h.DE)(),
        { setImgCache: T } = (0, h.TW)(),
        N = (0, i.useCallback)(
            (e) => {
                let t = v[e];
                null != t
                    ? m({ previewToolKey: t.url, palette: t.palette, skuId: "0" })
                    : m((t) =>
                          null == t ? { previewToolKey: e, palette: x.Wj, skuId: "0" } : { ...t, previewToolKey: e },
                      );
            },
            [v],
        ),
        I = (0, i.useCallback)((e) => {
            m((t) => (null == t ? null : { ...t, palette: e }));
        }, []),
        k = (0, i.useCallback)(
            (e) => {
                E(e);
            },
            [E],
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: b.ne,
                children: [
                    (0, a.jsxs)("div", {
                        className: b.gO,
                        children: [
                            (0, a.jsx)(l.Button, {
                                size: "sm",
                                onClick: () => {
                                    s(!1), t((e) => !e);
                                },
                                variant: "secondary",
                                text: "Toggle Themes",
                            }),
                            (0, a.jsx)(l.Button, {
                                size: "sm",
                                onClick: () => {
                                    t(!1), s((e) => !e);
                                },
                                variant: "secondary",
                                text: "Toggle Gradients",
                            }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: b.uQ,
                        children: [
                            e && (0, a.jsx)(d.A, { node: g }),
                            n &&
                                (0, a.jsx)(f.A, {
                                    selected: r?.palette?.name,
                                    onSelect: (e) => {
                                        r?.previewToolKey != null && j(r.previewToolKey, r.previewToolKey, e), I(e);
                                    },
                                }),
                        ],
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: b.iW,
                children: [
                    (0, a.jsx)(A, { nameplate: r }, r?.palette?.name),
                    (0, a.jsxs)("div", {
                        className: b.Uo,
                        children: [
                            (0, a.jsx)(l.Text, {
                                variant: "text-sm/semibold",
                                children: "Drag background image to screen",
                            }),
                            (0, a.jsx)(o.A, {
                                title: "upload image",
                                description: "upload the background",
                                icons: _.xi,
                                onDrop: async (e) => {
                                    let t = URL.createObjectURL(e[0]),
                                        n = e[0],
                                        a = await n.arrayBuffer();
                                    T(t, t, (0, p.nI)(a)), j(t, t, x.Wj);
                                },
                            }),
                            (0, a.jsx)("div", {
                                className: b.is,
                                children: Object.values(v).map((e) => {
                                    let { url: t } = e;
                                    return (0, a.jsx)(C, { src: t, onSetStatic: N, removeAsset: k }, t);
                                }),
                            }),
                            (0, a.jsx)(S, {
                                label: "gradient override",
                                onChange: (e) => I({ name: x.AK, darkBackground: e, lightBackground: e }),
                            }),
                            (0, a.jsx)(y, { label: "set", onClick: () => {} }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function A(e) {
    let { nameplate: t } = e,
        [n, s] = (0, i.useState)(320),
        r = (0, i.useRef)(null),
        o = (0, i.useRef)(null),
        d = (0, i.useRef)(null),
        c = (0, i.useRef)(document),
        u = (0, i.useCallback)((e) => {
            if (null != r.current) {
                let t = r.current.getBoundingClientRect();
                s(Math.max(264, Math.min(432, e.clientX - t.left)));
            }
        }, []),
        m = (0, i.useCallback)(
            (e) => {
                e.preventDefault(), e.stopPropagation();
                let t = e.currentTarget.ownerDocument;
                c.current = t;
                let n = (e) => {
                        e.preventDefault(), u(e);
                    },
                    a = () => {
                        null != o.current && (t.removeEventListener("mousemove", o.current), (o.current = null)),
                            null != d.current && (t.removeEventListener("mouseup", d.current), (d.current = null));
                    };
                (o.current = n), (d.current = a), t.addEventListener("mousemove", n), t.addEventListener("mouseup", a);
            },
            [u],
        );
    return (
        (0, i.useEffect)(
            () => () => {
                null != o.current && (c.current.removeEventListener("mousemove", o.current), (o.current = null)),
                    null != d.current && (c.current.removeEventListener("mouseup", d.current), (d.current = null));
            },
            [],
        ),
        (0, a.jsx)(l.IpV, {
            className: b.Fp,
            orientation: "horizontal",
            children: (0, a.jsxs)("div", {
                ref: r,
                className: b.ey,
                style: { width: `${n}px` },
                children: [
                    (0, a.jsx)(l.Text, { variant: "text-sm/semibold", children: "Memberlist" }),
                    (0, a.jsx)(E, { nameplate: t }),
                    (0, a.jsx)(l.Text, { variant: "text-sm/semibold", children: "DMs" }),
                    (0, a.jsx)(T, { nameplate: t }),
                    (0, a.jsx)(l.Text, { variant: "text-sm/semibold", children: "RTC" }),
                    (0, a.jsx)(N, { nameplate: t }),
                    (0, a.jsx)("div", { className: b.Di, onMouseDown: m }),
                ],
            }),
        })
    );
}
function C(e) {
    let { src: t, onSetStatic: n, removeAsset: i } = e;
    return (0, a.jsxs)("div", {
        className: b.xO,
        children: [
            (0, a.jsx)(l.DUT, {
                onClick: () => i(t),
                className: b.yV,
                children: (0, a.jsx)(l.PGe, { size: "custom", width: 16, height: 16, name: "x" }),
            }),
            (0, a.jsx)("img", { className: b.Ez, src: t, alt: "" }),
            (0, a.jsx)("div", {
                className: b.Lu,
                children: (0, a.jsx)(l.Button, {
                    onClick: () => n(t),
                    size: "sm",
                    variant: "secondary",
                    text: "set nameplate",
                }),
            }),
        ],
    });
}
function y(e) {
    let { label: t, onClick: n } = e;
    return (0, a.jsxs)("div", {
        className: b.Uu,
        children: [
            (0, a.jsx)(l.Text, { variant: "text-sm/normal", children: "coming soon" }),
            (0, a.jsx)(l.Button, { variant: "secondary", size: "sm", text: t, disabled: !0, onClick: n }),
        ],
    });
}
function S(e) {
    let { label: t, onChange: n } = e;
    return (0, a.jsxs)("div", {
        className: b.Im,
        children: [
            (0, a.jsx)(l.Text, { variant: "text-sm/normal", children: t }),
            (0, a.jsx)("input", {
                onChange: (e) => {
                    n(e.target.value);
                },
                className: b.QL,
                placeholder: "#000000",
            }),
        ],
    });
}
function E(e) {
    let { nameplate: t } = e,
        n = (0, s.bG)([m.default], () => m.default.getCurrentUser());
    return (0, a.jsx)("div", {
        className: b.VH,
        children: (0, a.jsxs)("div", {
            className: b.H1,
            children: [
                (0, a.jsx)(l.Text, { className: b.Pf, variant: "text-sm/semibold", children: "DEFAULT" }),
                (0, a.jsx)(r.A, { nameplate: t, user: n, currentUser: n }),
                (0, a.jsx)(l.Text, { className: b.Pf, variant: "text-sm/semibold", children: "FOCUSED" }),
                (0, a.jsxs)("div", {
                    children: [
                        (0, a.jsx)(r.A, { nameplate: t, selected: !0, user: n, currentUser: n }),
                        (0, a.jsx)(r.A, { selected: !0, user: n, currentUser: n }),
                    ],
                }),
            ],
        }),
    });
}
function T(e) {
    let { nameplate: t } = e;
    return (0, a.jsx)("div", {
        className: b.VH,
        children: (0, a.jsxs)("div", {
            className: b.H1,
            children: [
                (0, a.jsx)(l.Text, { className: b.Pf, variant: "text-sm/semibold", children: "DEFAULT" }),
                (0, a.jsx)(v.A, { nameplate: t }),
                (0, a.jsx)(l.Text, { className: b.Pf, variant: "text-sm/semibold", children: "FOCUSED" }),
                (0, a.jsxs)("div", {
                    children: [(0, a.jsx)(v.A, { selected: !0, nameplate: t }), (0, a.jsx)(v.A, { selected: !0 })],
                }),
            ],
        }),
    });
}
function N(e) {
    let { nameplate: t } = e;
    return (0, a.jsx)("div", {
        className: b.VH,
        children: (0, a.jsx)("div", { className: b.X2, children: (0, a.jsx)(g.A, { nameplate: t }) }),
    });
}
