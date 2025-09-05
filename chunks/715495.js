n.d(t, { Z: () => I }), n(388685), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749);
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(481060),
    s = n(276264),
    l = n(205822),
    c = n(329013),
    u = n(594174),
    d = n(396821),
    f = n(780771),
    _ = n(4242),
    p = n(996746),
    h = n(711325),
    m = n(852630),
    g = n(731994),
    E = n(761804);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function I() {
    var e;
    let [t, n] = (0, i.useState)(!1),
        [a, s] = (0, i.useState)(!1),
        [u, p] = (0, i.useState)(null),
        [m, b] = (0, i.useState)(320),
        O = (0, i.useRef)(null),
        I = (0, i.useRef)(null),
        P = (0, i.useRef)(null),
        w = (0, d.ZP)((e) => e.toolsCache),
        { setToolsCache: D, removeToolsCache: x } = (0, d.L3)(),
        { setImgCache: L } = (0, d.W_)(),
        j = (0, i.useCallback)(
            (e) => {
                let t = w[e];
                null != t &&
                    p({
                        src: t.url,
                        palette: t.palette,
                        preview: !0,
                    }),
                    p((t) =>
                        null == t
                            ? {
                                  src: e,
                                  palette: f.jD,
                                  preview: !0,
                              }
                            : v(y({}, t), {
                                  src: e,
                                  preview: !0,
                              }),
                    );
            },
            [w],
        ),
        k = (0, i.useCallback)((e) => {
            p((t) =>
                null == t
                    ? null
                    : v(y({}, t), {
                          palette: e,
                          preview: !0,
                      }),
            );
        }, []),
        M = (0, i.useCallback)(
            (e) => {
                x(e);
            },
            [x],
        ),
        U = (0, i.useCallback)((e) => {
            if (null != O.current) {
                let t = O.current.getBoundingClientRect();
                b(Math.max(264, Math.min(432, e.clientX - t.left)));
            }
        }, []),
        G = (0, i.useCallback)(
            (e) => {
                e.preventDefault(), e.stopPropagation();
                let t = (e) => {
                        e.preventDefault(), U(e);
                    },
                    n = () => {
                        null != I.current && (document.removeEventListener("mousemove", I.current), (I.current = null)),
                            null != P.current &&
                                (document.removeEventListener("mouseup", P.current), (P.current = null));
                    };
                (I.current = t),
                    (P.current = n),
                    document.addEventListener("mousemove", t),
                    document.addEventListener("mouseup", n);
            },
            [U],
        );
    return (
        (0, i.useEffect)(
            () => () => {
                null != I.current && (document.removeEventListener("mousemove", I.current), (I.current = null)),
                    null != P.current && (document.removeEventListener("mouseup", P.current), (P.current = null));
            },
            [],
        ),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: E.controls,
                    children: [
                        (0, r.jsxs)("div", {
                            className: E.toggles,
                            children: [
                                (0, r.jsx)(o.zxk, {
                                    size: "sm",
                                    onClick: () => {
                                        s(!1), n((e) => !e);
                                    },
                                    variant: "secondary",
                                    text: "Toggle Themes",
                                }),
                                (0, r.jsx)(o.zxk, {
                                    size: "sm",
                                    onClick: () => {
                                        n(!1), s((e) => !e);
                                    },
                                    variant: "secondary",
                                    text: "Toggle Gradients",
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: E.themePicker,
                            children: [
                                t && (0, r.jsx)(c.i, {}),
                                a &&
                                    (0, r.jsx)(h.Z, {
                                        selected: null == u || null == (e = u.palette) ? void 0 : e.name,
                                        onSelect: (e) => {
                                            (null == u ? void 0 : u.src) != null && D(u.src, u.src, e), k(e);
                                        },
                                    }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: E.main,
                    children: [
                        (0, r.jsxs)("div", {
                            ref: O,
                            className: E.previews,
                            style: { width: "".concat(m, "px") },
                            children: [
                                (0, r.jsx)(o.Text, {
                                    variant: "text-sm/semibold",
                                    children: "Memberlist",
                                }),
                                (0, r.jsx)(C, { nameplate: u }),
                                (0, r.jsx)(o.Text, {
                                    variant: "text-sm/semibold",
                                    children: "DMs",
                                }),
                                (0, r.jsx)(N, { nameplate: u }),
                                (0, r.jsx)(o.Text, {
                                    variant: "text-sm/semibold",
                                    children: "RTC",
                                }),
                                (0, r.jsx)(R, { nameplate: u }),
                                (0, r.jsx)("div", {
                                    className: E.resizeHandle,
                                    onMouseDown: G,
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: E.buttons,
                            children: [
                                (0, r.jsx)(o.Text, {
                                    variant: "text-sm/semibold",
                                    children: "Drag background image to screen",
                                }),
                                (0, r.jsx)(l.Z, {
                                    title: "upload image",
                                    description: "upload the background",
                                    icons: g.pA,
                                    onDrop: async (e) => {
                                        let t = URL.createObjectURL(e[0]),
                                            n = e[0],
                                            r = await n.arrayBuffer();
                                        L(t, t, (0, _.xh)(r)), D(t, t, f.jD);
                                    },
                                }),
                                (0, r.jsx)("div", {
                                    className: E.uploadedArea,
                                    children: Object.values(w).map((e) => {
                                        let { url: t } = e;
                                        return (0, r.jsx)(
                                            T,
                                            {
                                                src: t,
                                                onSetStatic: j,
                                                removeAsset: M,
                                            },
                                            t,
                                        );
                                    }),
                                }),
                                (0, r.jsx)(A, {
                                    label: "gradient override",
                                    onChange: (e) =>
                                        k({
                                            name: f._j,
                                            darkBackground: e,
                                            lightBackground: e,
                                        }),
                                }),
                                (0, r.jsx)(S, {
                                    label: "set",
                                    onClick: () => {},
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
}
function T(e) {
    let { src: t, onSetStatic: n, removeAsset: i } = e;
    return (0, r.jsxs)("div", {
        className: E.uploaded,
        children: [
            (0, r.jsx)(o.P3F, {
                onClick: () => i(t),
                className: E.xicon,
                children: (0, r.jsx)(o.Dio, {
                    size: "custom",
                    width: 16,
                    height: 16,
                    name: "x",
                }),
            }),
            (0, r.jsx)("img", {
                className: E.uploadedImg,
                src: t,
                alt: "",
            }),
            (0, r.jsx)("div", {
                className: E.uploadedControls,
                children: (0, r.jsx)(o.zxk, {
                    onClick: () => n(t),
                    size: "sm",
                    variant: "secondary",
                    text: "set nameplate",
                }),
            }),
        ],
    });
}
function S(e) {
    let { label: t, onClick: n } = e;
    return (0, r.jsxs)("div", {
        className: E.flex,
        children: [
            (0, r.jsx)(o.Text, {
                variant: "text-sm/normal",
                children: "coming soon",
            }),
            (0, r.jsx)(o.zxk, {
                variant: "secondary",
                size: "sm",
                text: t,
                disabled: !0,
                onClick: n,
            }),
        ],
    });
}
function A(e) {
    let { label: t, onChange: n } = e;
    return (0, r.jsxs)("div", {
        className: E.hexInput,
        children: [
            (0, r.jsx)(o.Text, {
                variant: "text-sm/normal",
                children: t,
            }),
            (0, r.jsx)("input", {
                onChange: (e) => {
                    n(e.target.value);
                },
                className: E.inputs,
                placeholder: "#000000",
            }),
        ],
    });
}
function C(e) {
    let { nameplate: t } = e,
        n = (0, a.e7)([u.default], () => u.default.getCurrentUser());
    return (0, r.jsx)("div", {
        className: E.preview,
        children: (0, r.jsxs)("div", {
            className: E.simArea,
            children: [
                (0, r.jsx)(o.Text, {
                    className: E.label,
                    variant: "text-sm/semibold",
                    children: "DEFAULT",
                }),
                (0, r.jsx)(s.Z, {
                    nameplate: t,
                    user: n,
                    currentUser: n,
                }),
                (0, r.jsx)(o.Text, {
                    className: E.label,
                    variant: "text-sm/semibold",
                    children: "FOCUSED",
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(s.Z, {
                            nameplate: t,
                            selected: !0,
                            user: n,
                            currentUser: n,
                        }),
                        (0, r.jsx)(s.Z, {
                            selected: !0,
                            user: n,
                            currentUser: n,
                        }),
                    ],
                }),
            ],
        }),
    });
}
function N(e) {
    let { nameplate: t } = e;
    return (0, r.jsx)("div", {
        className: E.preview,
        children: (0, r.jsxs)("div", {
            className: E.simArea,
            children: [
                (0, r.jsx)(o.Text, {
                    className: E.label,
                    variant: "text-sm/semibold",
                    children: "DEFAULT",
                }),
                (0, r.jsx)(m.Z, { nameplate: t }),
                (0, r.jsx)(o.Text, {
                    className: E.label,
                    variant: "text-sm/semibold",
                    children: "FOCUSED",
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(m.Z, {
                            selected: !0,
                            nameplate: t,
                        }),
                        (0, r.jsx)(m.Z, { selected: !0 }),
                    ],
                }),
            ],
        }),
    });
}
function R(e) {
    let { nameplate: t } = e;
    return (0, r.jsx)("div", {
        className: E.preview,
        children: (0, r.jsx)("div", {
            className: E.rtcSim,
            children: (0, r.jsx)(p.Z, { nameplate: t }),
        }),
    });
}
