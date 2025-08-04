(n.d(t, { Z: () => E }), n(388685), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749));
var i = n(255367),
    r = n(73800),
    s = n(442837),
    a = n(481060),
    l = n(276264),
    o = n(205822),
    c = n(329013),
    d = n(594174),
    u = n(396821),
    m = n(780771),
    p = n(4242),
    g = n(996746),
    h = n(711325),
    f = n(852630),
    b = n(731994),
    x = n(396921);
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
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
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E() {
    var e;
    let [t, n] = (0, r.useState)(!1),
        [s, l] = (0, r.useState)(!1),
        [d, g] = (0, r.useState)(null),
        [f, E] = (0, r.useState)(320),
        N = (0, r.useRef)(null),
        y = (0, r.useRef)(null),
        A = (0, r.useRef)(null),
        P = (0, u.ZP)((e) => e.toolsCache),
        { setToolsCache: R, removeToolsCache: D } = (0, u.L3)(),
        { setImgCache: Z } = (0, u.W_)(),
        w = (0, r.useCallback)(
            (e) => {
                let t = P[e];
                (null != t &&
                    g({
                        src: t.url,
                        palette: t.palette,
                        preview: !0
                    }),
                    g((t) =>
                        null == t
                            ? {
                                  src: e,
                                  palette: m.jD,
                                  preview: !0
                              }
                            : j(_({}, t), {
                                  src: e,
                                  preview: !0
                              })
                    ));
            },
            [P]
        ),
        k = (0, r.useCallback)((e) => {
            g((t) =>
                null == t
                    ? null
                    : j(_({}, t), {
                          palette: e,
                          preview: !0
                      })
            );
        }, []),
        L = (0, r.useCallback)(
            (e) => {
                D(e);
            },
            [D]
        ),
        B = (0, r.useCallback)((e) => {
            if (null != N.current) {
                let t = N.current.getBoundingClientRect();
                E(Math.max(264, Math.min(432, e.clientX - t.left)));
            }
        }, []),
        M = (0, r.useCallback)(
            (e) => {
                (e.preventDefault(), e.stopPropagation());
                let t = (e) => {
                        (e.preventDefault(), B(e));
                    },
                    n = () => {
                        (null != y.current && (document.removeEventListener('mousemove', y.current), (y.current = null)), null != A.current && (document.removeEventListener('mouseup', A.current), (A.current = null)));
                    };
                ((y.current = t), (A.current = n), document.addEventListener('mousemove', t), document.addEventListener('mouseup', n));
            },
            [B]
        );
    return (
        (0, r.useEffect)(
            () => () => {
                (null != y.current && (document.removeEventListener('mousemove', y.current), (y.current = null)), null != A.current && (document.removeEventListener('mouseup', A.current), (A.current = null)));
            },
            []
        ),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: x.controls,
                    children: [
                        (0, i.jsxs)('div', {
                            className: x.toggles,
                            children: [
                                (0, i.jsx)(a.zxk, {
                                    size: 'sm',
                                    onClick: () => {
                                        (l(!1), n((e) => !e));
                                    },
                                    variant: 'secondary',
                                    text: 'Toggle Themes'
                                }),
                                (0, i.jsx)(a.zxk, {
                                    size: 'sm',
                                    onClick: () => {
                                        (n(!1), l((e) => !e));
                                    },
                                    variant: 'secondary',
                                    text: 'Toggle Gradients'
                                })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: x.themePicker,
                            children: [
                                t && (0, i.jsx)(c.i, {}),
                                s &&
                                    (0, i.jsx)(h.Z, {
                                        selected: null == d || null == (e = d.palette) ? void 0 : e.name,
                                        onSelect: (e) => {
                                            ((null == d ? void 0 : d.src) != null && R(d.src, d.src, e), k(e));
                                        }
                                    })
                            ]
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: x.main,
                    children: [
                        (0, i.jsxs)('div', {
                            ref: N,
                            className: x.previews,
                            style: { width: ''.concat(f, 'px') },
                            children: [
                                (0, i.jsx)(a.Text, {
                                    variant: 'text-sm/semibold',
                                    children: 'Memberlist'
                                }),
                                (0, i.jsx)(S, { nameplate: d }),
                                (0, i.jsx)(a.Text, {
                                    variant: 'text-sm/semibold',
                                    children: 'DMs'
                                }),
                                (0, i.jsx)(T, { nameplate: d }),
                                (0, i.jsx)(a.Text, {
                                    variant: 'text-sm/semibold',
                                    children: 'RTC'
                                }),
                                (0, i.jsx)(I, { nameplate: d }),
                                (0, i.jsx)('div', {
                                    className: x.resizeHandle,
                                    onMouseDown: M
                                })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: x.buttons,
                            children: [
                                (0, i.jsx)(a.Text, {
                                    variant: 'text-sm/semibold',
                                    children: 'Drag background image to screen'
                                }),
                                (0, i.jsx)(o.Z, {
                                    title: 'upload image',
                                    description: 'upload the background',
                                    icons: b.pA,
                                    onDrop: async (e) => {
                                        let t = URL.createObjectURL(e[0]),
                                            n = e[0],
                                            i = await n.arrayBuffer();
                                        (Z(t, t, (0, p.xh)(i)), R(t, t, m.jD));
                                    }
                                }),
                                (0, i.jsx)('div', {
                                    className: x.uploadedArea,
                                    children: Object.values(P).map((e) => {
                                        let { url: t } = e;
                                        return (0, i.jsx)(
                                            C,
                                            {
                                                src: t,
                                                onSetStatic: w,
                                                removeAsset: L
                                            },
                                            t
                                        );
                                    })
                                }),
                                (0, i.jsx)(v, {
                                    label: 'gradient override',
                                    onChange: (e) =>
                                        k({
                                            name: m._j,
                                            darkBackground: e,
                                            lightBackground: e
                                        })
                                }),
                                (0, i.jsx)(O, {
                                    label: 'set',
                                    onClick: () => {}
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    );
}
function C(e) {
    let { src: t, onSetStatic: n, removeAsset: r } = e;
    return (0, i.jsxs)('div', {
        className: x.uploaded,
        children: [
            (0, i.jsx)(a.P3F, {
                onClick: () => r(t),
                className: x.xicon,
                children: (0, i.jsx)(a.Dio, {
                    size: 'custom',
                    width: 16,
                    height: 16,
                    name: 'x'
                })
            }),
            (0, i.jsx)('img', {
                className: x.uploadedImg,
                src: t,
                alt: ''
            }),
            (0, i.jsx)('div', {
                className: x.uploadedControls,
                children: (0, i.jsx)(a.zxk, {
                    onClick: () => n(t),
                    size: 'sm',
                    variant: 'secondary',
                    text: 'set nameplate'
                })
            })
        ]
    });
}
function O(e) {
    let { label: t, onClick: n } = e;
    return (0, i.jsxs)('div', {
        className: x.flex,
        children: [
            (0, i.jsx)(a.Text, {
                variant: 'text-sm/normal',
                children: 'coming soon'
            }),
            (0, i.jsx)(a.zxk, {
                variant: 'secondary',
                size: 'sm',
                text: t,
                disabled: !0,
                onClick: n
            })
        ]
    });
}
function v(e) {
    let { label: t, onChange: n } = e;
    return (0, i.jsxs)('div', {
        className: x.hexInput,
        children: [
            (0, i.jsx)(a.Text, {
                variant: 'text-sm/normal',
                children: t
            }),
            (0, i.jsx)('input', {
                onChange: (e) => {
                    n(e.target.value);
                },
                className: x.inputs,
                placeholder: '#000000'
            })
        ]
    });
}
function S(e) {
    let { nameplate: t } = e,
        n = (0, s.e7)([d.default], () => d.default.getCurrentUser());
    return (0, i.jsx)('div', {
        className: x.preview,
        children: (0, i.jsxs)('div', {
            className: x.simArea,
            children: [
                (0, i.jsx)(a.Text, {
                    className: x.label,
                    variant: 'text-sm/semibold',
                    children: 'DEFAULT'
                }),
                (0, i.jsx)(l.Z, {
                    nameplate: t,
                    user: n,
                    currentUser: n
                }),
                (0, i.jsx)(a.Text, {
                    className: x.label,
                    variant: 'text-sm/semibold',
                    children: 'FOCUSED'
                }),
                (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(l.Z, {
                            nameplate: t,
                            selected: !0,
                            user: n,
                            currentUser: n
                        }),
                        (0, i.jsx)(l.Z, {
                            selected: !0,
                            user: n,
                            currentUser: n
                        })
                    ]
                })
            ]
        })
    });
}
function T(e) {
    let { nameplate: t } = e;
    return (0, i.jsx)('div', {
        className: x.preview,
        children: (0, i.jsxs)('div', {
            className: x.simArea,
            children: [
                (0, i.jsx)(a.Text, {
                    className: x.label,
                    variant: 'text-sm/semibold',
                    children: 'DEFAULT'
                }),
                (0, i.jsx)(f.Z, { nameplate: t }),
                (0, i.jsx)(a.Text, {
                    className: x.label,
                    variant: 'text-sm/semibold',
                    children: 'FOCUSED'
                }),
                (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(f.Z, {
                            selected: !0,
                            nameplate: t
                        }),
                        (0, i.jsx)(f.Z, { selected: !0 })
                    ]
                })
            ]
        })
    });
}
function I(e) {
    let { nameplate: t } = e;
    return (0, i.jsx)('div', {
        className: x.preview,
        children: (0, i.jsx)('div', {
            className: x.rtcSim,
            children: (0, i.jsx)(g.Z, { nameplate: t })
        })
    });
}
