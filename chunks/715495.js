n.d(t, { Z: () => _ }), n(388685), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749);
var a = n(54381),
    l = n(473749),
    r = n(442837),
    i = n(481060),
    s = n(276264),
    o = n(205822),
    c = n(329013),
    d = n(594174),
    u = n(396821),
    m = n(780771),
    p = n(4242),
    h = n(996746),
    x = n(711325),
    g = n(852630),
    f = n(731994),
    b = n(30827);
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = a);
            });
    }
    return e;
}
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, a);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function _() {
    var e, t;
    let [n, r] = (0, l.useState)(!1),
        [s, d] = (0, l.useState)(!1),
        [h, g] = (0, l.useState)(null),
        _ = (0, u.ZP)((e) => e.toolsCache),
        { setToolsCache: O, removeToolsCache: T } = (0, u.L3)(),
        { setImgCache: N } = (0, u.W_)(),
        P = (0, l.useCallback)(
            (e) => {
                let t = _[e];
                null != t &&
                    g({
                        src: t.url,
                        palette: t.palette,
                        preview: !0,
                    }),
                    g((t) =>
                        null == t
                            ? {
                                  src: e,
                                  palette: m.jD,
                                  preview: !0,
                              }
                            : j(v({}, t), {
                                  src: e,
                                  preview: !0,
                              }),
                    );
            },
            [_],
        ),
        w = (0, l.useCallback)((e) => {
            g((t) =>
                null == t
                    ? null
                    : j(v({}, t), {
                          palette: e,
                          preview: !0,
                      }),
            );
        }, []),
        I = (0, l.useCallback)(
            (e) => {
                T(e);
            },
            [T],
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: b.controls,
                children: [
                    (0, a.jsxs)("div", {
                        className: b.toggles,
                        children: [
                            (0, a.jsx)(i.Button, {
                                size: "sm",
                                onClick: () => {
                                    d(!1), r((e) => !e);
                                },
                                variant: "secondary",
                                text: "Toggle Themes",
                            }),
                            (0, a.jsx)(i.Button, {
                                size: "sm",
                                onClick: () => {
                                    r(!1), d((e) => !e);
                                },
                                variant: "secondary",
                                text: "Toggle Gradients",
                            }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: b.themePicker,
                        children: [
                            n && (0, a.jsx)(c.i, {}),
                            s &&
                                (0, a.jsx)(x.Z, {
                                    selected: null == h || null == (e = h.palette) ? void 0 : e.name,
                                    onSelect: (e) => {
                                        (null == h ? void 0 : h.src) != null && O(h.src, h.src, e), w(e);
                                    },
                                }),
                        ],
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: b.main,
                children: [
                    (0, a.jsx)(y, { nameplate: h }, null == h || null == (t = h.palette) ? void 0 : t.name),
                    (0, a.jsxs)("div", {
                        className: b.buttons,
                        children: [
                            (0, a.jsx)(i.Text, {
                                variant: "text-sm/semibold",
                                children: "Drag background image to screen",
                            }),
                            (0, a.jsx)(o.Z, {
                                title: "upload image",
                                description: "upload the background",
                                icons: f.pA,
                                onDrop: async (e) => {
                                    let t = URL.createObjectURL(e[0]),
                                        n = e[0],
                                        a = await n.arrayBuffer();
                                    N(t, t, (0, p.xh)(a)), O(t, t, m.jD);
                                },
                            }),
                            (0, a.jsx)("div", {
                                className: b.uploadedArea,
                                children: Object.values(_).map((e) => {
                                    let { url: t } = e;
                                    return (0, a.jsx)(
                                        C,
                                        {
                                            src: t,
                                            onSetStatic: P,
                                            removeAsset: I,
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, a.jsx)(E, {
                                label: "gradient override",
                                onChange: (e) =>
                                    w({
                                        name: m._j,
                                        darkBackground: e,
                                        lightBackground: e,
                                    }),
                            }),
                            (0, a.jsx)(S, {
                                label: "set",
                                onClick: () => {},
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function y(e) {
    let { nameplate: t } = e,
        [n, r] = (0, l.useState)(320),
        s = (0, l.useRef)(null),
        o = (0, l.useRef)(null),
        c = (0, l.useRef)(null),
        d = (0, l.useRef)(document),
        u = (0, l.useCallback)((e) => {
            if (null != s.current) {
                let t = s.current.getBoundingClientRect();
                r(Math.max(264, Math.min(432, e.clientX - t.left)));
            }
        }, []),
        m = (0, l.useCallback)(
            (e) => {
                e.preventDefault(), e.stopPropagation();
                let t = e.currentTarget.ownerDocument;
                d.current = t;
                let n = (e) => {
                        e.preventDefault(), u(e);
                    },
                    a = () => {
                        null != o.current && (t.removeEventListener("mousemove", o.current), (o.current = null)),
                            null != c.current && (t.removeEventListener("mouseup", c.current), (c.current = null));
                    };
                (o.current = n), (c.current = a), t.addEventListener("mousemove", n), t.addEventListener("mouseup", a);
            },
            [u],
        );
    return (
        (0, l.useEffect)(
            () => () => {
                null != o.current && (d.current.removeEventListener("mousemove", o.current), (o.current = null)),
                    null != c.current && (d.current.removeEventListener("mouseup", c.current), (c.current = null));
            },
            [],
        ),
        (0, a.jsx)(i.zJl, {
            className: b.previewsContainer,
            orientation: "horizontal",
            children: (0, a.jsxs)("div", {
                ref: s,
                className: b.previews,
                style: { width: "".concat(n, "px") },
                children: [
                    (0, a.jsx)(i.Text, {
                        variant: "text-sm/semibold",
                        children: "Memberlist",
                    }),
                    (0, a.jsx)(O, { nameplate: t }),
                    (0, a.jsx)(i.Text, {
                        variant: "text-sm/semibold",
                        children: "DMs",
                    }),
                    (0, a.jsx)(T, { nameplate: t }),
                    (0, a.jsx)(i.Text, {
                        variant: "text-sm/semibold",
                        children: "RTC",
                    }),
                    (0, a.jsx)(N, { nameplate: t }),
                    (0, a.jsx)("div", {
                        className: b.resizeHandle,
                        onMouseDown: m,
                    }),
                ],
            }),
        })
    );
}
function C(e) {
    let { src: t, onSetStatic: n, removeAsset: l } = e;
    return (0, a.jsxs)("div", {
        className: b.uploaded,
        children: [
            (0, a.jsx)(i.P3F, {
                onClick: () => l(t),
                className: b.xicon,
                children: (0, a.jsx)(i.Dio, {
                    size: "custom",
                    width: 16,
                    height: 16,
                    name: "x",
                }),
            }),
            (0, a.jsx)("img", {
                className: b.uploadedImg,
                src: t,
                alt: "",
            }),
            (0, a.jsx)("div", {
                className: b.uploadedControls,
                children: (0, a.jsx)(i.Button, {
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
    return (0, a.jsxs)("div", {
        className: b.flex,
        children: [
            (0, a.jsx)(i.Text, {
                variant: "text-sm/normal",
                children: "coming soon",
            }),
            (0, a.jsx)(i.Button, {
                variant: "secondary",
                size: "sm",
                text: t,
                disabled: !0,
                onClick: n,
            }),
        ],
    });
}
function E(e) {
    let { label: t, onChange: n } = e;
    return (0, a.jsxs)("div", {
        className: b.hexInput,
        children: [
            (0, a.jsx)(i.Text, {
                variant: "text-sm/normal",
                children: t,
            }),
            (0, a.jsx)("input", {
                onChange: (e) => {
                    n(e.target.value);
                },
                className: b.inputs,
                placeholder: "#000000",
            }),
        ],
    });
}
function O(e) {
    let { nameplate: t } = e,
        n = (0, r.e7)([d.default], () => d.default.getCurrentUser());
    return (0, a.jsx)("div", {
        className: b.preview,
        children: (0, a.jsxs)("div", {
            className: b.simArea,
            children: [
                (0, a.jsx)(i.Text, {
                    className: b.label,
                    variant: "text-sm/semibold",
                    children: "DEFAULT",
                }),
                (0, a.jsx)(s.Z, {
                    nameplate: t,
                    user: n,
                    currentUser: n,
                }),
                (0, a.jsx)(i.Text, {
                    className: b.label,
                    variant: "text-sm/semibold",
                    children: "FOCUSED",
                }),
                (0, a.jsxs)("div", {
                    children: [
                        (0, a.jsx)(s.Z, {
                            nameplate: t,
                            selected: !0,
                            user: n,
                            currentUser: n,
                        }),
                        (0, a.jsx)(s.Z, {
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
function T(e) {
    let { nameplate: t } = e;
    return (0, a.jsx)("div", {
        className: b.preview,
        children: (0, a.jsxs)("div", {
            className: b.simArea,
            children: [
                (0, a.jsx)(i.Text, {
                    className: b.label,
                    variant: "text-sm/semibold",
                    children: "DEFAULT",
                }),
                (0, a.jsx)(g.Z, { nameplate: t }),
                (0, a.jsx)(i.Text, {
                    className: b.label,
                    variant: "text-sm/semibold",
                    children: "FOCUSED",
                }),
                (0, a.jsxs)("div", {
                    children: [
                        (0, a.jsx)(g.Z, {
                            selected: !0,
                            nameplate: t,
                        }),
                        (0, a.jsx)(g.Z, { selected: !0 }),
                    ],
                }),
            ],
        }),
    });
}
function N(e) {
    let { nameplate: t } = e;
    return (0, a.jsx)("div", {
        className: b.preview,
        children: (0, a.jsx)("div", {
            className: b.rtcSim,
            children: (0, a.jsx)(h.Z, { nameplate: t }),
        }),
    });
}
