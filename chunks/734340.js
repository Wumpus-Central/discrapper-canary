n.d(t, { A: () => _ }), n(323874), n(14289), n(35956);
var a = n(627968),
    i = n(64700),
    s = n(311907),
    l = n(397927),
    r = n(110574),
    o = n(65593),
    d = n(123857),
    c = n(287809),
    u = n(901139),
    m = n(641886),
    h = n(780898),
    x = n(28974),
    p = n(991347),
    g = n(871317),
    f = n(698638),
    v = n(324611);
function _() {
    let [e, t] = (0, i.useState)(!1),
        [n, s] = (0, i.useState)(!1),
        [r, c] = (0, i.useState)(null),
        x = (0, u.Ay)((e) => e.toolsCache),
        { setToolsCache: g, removeToolsCache: _ } = (0, u.DE)(),
        { setImgCache: y } = (0, u.TW)(),
        S = (0, i.useCallback)(
            (e) => {
                let t = x[e];
                null != t
                    ? c({ previewToolKey: t.url, palette: t.palette, skuId: "0" })
                    : c((t) =>
                          null == t ? { previewToolKey: e, palette: m.Wj, skuId: "0" } : { ...t, previewToolKey: e },
                      );
            },
            [x],
        ),
        E = (0, i.useCallback)((e) => {
            c((t) => (null == t ? null : { ...t, palette: e }));
        }, []),
        T = (0, i.useCallback)(
            (e) => {
                _(e);
            },
            [_],
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: v.ne,
                children: [
                    (0, a.jsxs)("div", {
                        className: v.gO,
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
                        className: v.uQ,
                        children: [
                            e && (0, a.jsx)(d.Ix, {}),
                            n &&
                                (0, a.jsx)(p.A, {
                                    selected: r?.palette?.name,
                                    onSelect: (e) => {
                                        r?.previewToolKey != null && g(r.previewToolKey, r.previewToolKey, e), E(e);
                                    },
                                }),
                        ],
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: v.iW,
                children: [
                    (0, a.jsx)(b, { nameplate: r }, r?.palette?.name),
                    (0, a.jsxs)("div", {
                        className: v.Uo,
                        children: [
                            (0, a.jsx)(l.Text, {
                                variant: "text-sm/semibold",
                                children: "Drag background image to screen",
                            }),
                            (0, a.jsx)(o.A, {
                                title: "upload image",
                                description: "upload the background",
                                icons: f.xi,
                                onDrop: async (e) => {
                                    let t = URL.createObjectURL(e[0]),
                                        n = e[0],
                                        a = await n.arrayBuffer();
                                    y(t, t, (0, h.nI)(a)), g(t, t, m.Wj);
                                },
                            }),
                            (0, a.jsx)("div", {
                                className: v.is,
                                children: Object.values(x).map((e) => {
                                    let { url: t } = e;
                                    return (0, a.jsx)(j, { src: t, onSetStatic: S, removeAsset: T }, t);
                                }),
                            }),
                            (0, a.jsx)(C, {
                                label: "gradient override",
                                onChange: (e) => E({ name: m.AK, darkBackground: e, lightBackground: e }),
                            }),
                            (0, a.jsx)(A, { label: "set", onClick: () => {} }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function b(e) {
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
            className: v.Fp,
            orientation: "horizontal",
            children: (0, a.jsxs)("div", {
                ref: r,
                className: v.ey,
                style: { width: `${n}px` },
                children: [
                    (0, a.jsx)(l.Text, { variant: "text-sm/semibold", children: "Memberlist" }),
                    (0, a.jsx)(y, { nameplate: t }),
                    (0, a.jsx)(l.Text, { variant: "text-sm/semibold", children: "DMs" }),
                    (0, a.jsx)(S, { nameplate: t }),
                    (0, a.jsx)(l.Text, { variant: "text-sm/semibold", children: "RTC" }),
                    (0, a.jsx)(E, { nameplate: t }),
                    (0, a.jsx)("div", { className: v.Di, onMouseDown: m }),
                ],
            }),
        })
    );
}
function j(e) {
    let { src: t, onSetStatic: n, removeAsset: i } = e;
    return (0, a.jsxs)("div", {
        className: v.xO,
        children: [
            (0, a.jsx)(l.DUT, {
                onClick: () => i(t),
                className: v.yV,
                children: (0, a.jsx)(l.PGe, { size: "custom", width: 16, height: 16, name: "x" }),
            }),
            (0, a.jsx)("img", { className: v.Ez, src: t, alt: "" }),
            (0, a.jsx)("div", {
                className: v.Lu,
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
function A(e) {
    let { label: t, onClick: n } = e;
    return (0, a.jsxs)("div", {
        className: v.Uu,
        children: [
            (0, a.jsx)(l.Text, { variant: "text-sm/normal", children: "coming soon" }),
            (0, a.jsx)(l.Button, { variant: "secondary", size: "sm", text: t, disabled: !0, onClick: n }),
        ],
    });
}
function C(e) {
    let { label: t, onChange: n } = e;
    return (0, a.jsxs)("div", {
        className: v.Im,
        children: [
            (0, a.jsx)(l.Text, { variant: "text-sm/normal", children: t }),
            (0, a.jsx)("input", {
                onChange: (e) => {
                    n(e.target.value);
                },
                className: v.QL,
                placeholder: "#000000",
            }),
        ],
    });
}
function y(e) {
    let { nameplate: t } = e,
        n = (0, s.bG)([c.default], () => c.default.getCurrentUser());
    return (0, a.jsx)("div", {
        className: v.VH,
        children: (0, a.jsxs)("div", {
            className: v.H1,
            children: [
                (0, a.jsx)(l.Text, { className: v.Pf, variant: "text-sm/semibold", children: "DEFAULT" }),
                (0, a.jsx)(r.A, { nameplate: t, user: n, currentUser: n }),
                (0, a.jsx)(l.Text, { className: v.Pf, variant: "text-sm/semibold", children: "FOCUSED" }),
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
function S(e) {
    let { nameplate: t } = e;
    return (0, a.jsx)("div", {
        className: v.VH,
        children: (0, a.jsxs)("div", {
            className: v.H1,
            children: [
                (0, a.jsx)(l.Text, { className: v.Pf, variant: "text-sm/semibold", children: "DEFAULT" }),
                (0, a.jsx)(g.A, { nameplate: t }),
                (0, a.jsx)(l.Text, { className: v.Pf, variant: "text-sm/semibold", children: "FOCUSED" }),
                (0, a.jsxs)("div", {
                    children: [(0, a.jsx)(g.A, { selected: !0, nameplate: t }), (0, a.jsx)(g.A, { selected: !0 })],
                }),
            ],
        }),
    });
}
function E(e) {
    let { nameplate: t } = e;
    return (0, a.jsx)("div", {
        className: v.VH,
        children: (0, a.jsx)("div", { className: v.X2, children: (0, a.jsx)(x.A, { nameplate: t }) }),
    });
}
