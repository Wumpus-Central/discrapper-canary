(n.d(t, { Z: () => v }), n(388685), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(755721),
    c = n(481060),
    d = n(276264),
    u = n(205822),
    m = n(329013),
    p = n(594174),
    g = n(396821),
    h = n(780771),
    f = n(4242),
    b = n(996746),
    x = n(711325),
    _ = n(852630),
    j = n(731994),
    E = n(396921);
function O(e) {
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
function C(e, t) {
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
function v() {
    var e;
    let [t, n] = (0, r.useState)(!1),
        [s, a] = (0, r.useState)(!1),
        [l, d] = (0, r.useState)(null),
        p = (0, g.ZP)((e) => e.toolsCache),
        { setToolsCache: b, removeToolsCache: _ } = (0, g.L3)(),
        { setImgCache: v } = (0, g.W_)(),
        P = (0, r.useCallback)(
            (e) => {
                let t = p[e];
                (null != t &&
                    d({
                        src: t.url,
                        palette: t.palette,
                        preview: !0
                    }),
                    d((t) =>
                        null == t
                            ? {
                                  src: e,
                                  palette: h.jD,
                                  preview: !0
                              }
                            : C(O({}, t), {
                                  src: e,
                                  preview: !0
                              })
                    ));
            },
            [p]
        ),
        R = (0, r.useCallback)((e) => {
            d((t) =>
                null == t
                    ? null
                    : C(O({}, t), {
                          palette: e,
                          preview: !0
                      })
            );
        }, []),
        D = (0, r.useCallback)(
            (e) => {
                _(e);
            },
            [_]
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: E.controls,
                children: [
                    (0, i.jsxs)('div', {
                        className: E.toggles,
                        children: [
                            (0, i.jsx)(o.zx, {
                                className: E.toggleButton,
                                size: o.Ph.SMALL,
                                onClick: () => {
                                    (a(!1), n((e) => !e));
                                },
                                color: o.Tt.PRIMARY,
                                children: 'Toggle Themes'
                            }),
                            (0, i.jsx)(o.zx, {
                                className: E.toggleButton,
                                size: o.Ph.SMALL,
                                onClick: () => {
                                    (n(!1), a((e) => !e));
                                },
                                color: o.Tt.PRIMARY,
                                children: 'Toggle Gradients'
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: E.themePicker,
                        children: [
                            t && (0, i.jsx)(m.i, {}),
                            ' ',
                            s &&
                                (0, i.jsx)(x.Z, {
                                    selected: null == l || null == (e = l.palette) ? void 0 : e.name,
                                    onSelect: (e) => {
                                        ((null == l ? void 0 : l.src) != null && b(l.src, l.src, e), R(e));
                                    }
                                })
                        ]
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: E.main,
                children: [
                    (0, i.jsxs)('div', {
                        className: E.previews,
                        children: [
                            (0, i.jsx)(c.Text, {
                                variant: 'text-sm/semibold',
                                children: 'Memberlist'
                            }),
                            (0, i.jsx)(I, { nameplate: l }),
                            (0, i.jsx)(c.Text, {
                                variant: 'text-sm/semibold',
                                children: 'DMs'
                            }),
                            (0, i.jsx)(y, { nameplate: l }),
                            (0, i.jsx)(c.Text, {
                                variant: 'text-sm/semibold',
                                children: 'RTC'
                            }),
                            (0, i.jsx)(A, { nameplate: l })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: E.buttons,
                        children: [
                            (0, i.jsx)(c.Text, {
                                variant: 'text-sm/semibold',
                                children: 'Drag background image to screen'
                            }),
                            (0, i.jsx)(u.Z, {
                                title: 'upload image',
                                description: 'upload the background',
                                icons: j.pA,
                                onDrop: async (e) => {
                                    let t = URL.createObjectURL(e[0]),
                                        n = e[0],
                                        i = await n.arrayBuffer();
                                    (v(t, t, (0, f.xh)(i)), b(t, t, h.jD));
                                }
                            }),
                            (0, i.jsx)('div', {
                                className: E.uploadedArea,
                                children: Object.values(p).map((e) => {
                                    let { url: t } = e;
                                    return (0, i.jsx)(
                                        S,
                                        {
                                            src: t,
                                            onSetStatic: P,
                                            removeAsset: D
                                        },
                                        t
                                    );
                                })
                            }),
                            (0, i.jsx)(N, {
                                label: 'gradient override',
                                onChange: (e) =>
                                    R({
                                        name: h._j,
                                        darkBackground: e,
                                        lightBackground: e
                                    })
                            }),
                            (0, i.jsx)(T, {
                                label: 'set',
                                onClick: () => {}
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function S(e) {
    let { src: t, onSetStatic: n, removeAsset: r } = e;
    return (0, i.jsxs)('div', {
        className: E.uploaded,
        children: [
            (0, i.jsx)(c.P3F, {
                onClick: () => r(t),
                className: E.xicon,
                children: (0, i.jsx)(c.Dio, {
                    size: 'custom',
                    width: 16,
                    height: 16,
                    name: 'x'
                })
            }),
            (0, i.jsx)('img', {
                className: E.uploadedImg,
                src: t,
                alt: ''
            }),
            (0, i.jsx)('div', {
                className: E.uploadedControls,
                children: (0, i.jsx)(o.zx, {
                    onClick: () => n(t),
                    size: o.Ph.TINY,
                    color: o.Tt.PRIMARY,
                    children: 'set nameplate'
                })
            })
        ]
    });
}
function T(e) {
    let { label: t, onClick: n } = e;
    return (0, i.jsxs)('div', {
        className: E.flex,
        children: [
            (0, i.jsx)(c.Text, {
                variant: 'text-sm/normal',
                children: 'coming soon'
            }),
            (0, i.jsx)(c.zxk, {
                variant: 'secondary',
                size: 'sm',
                text: t,
                disabled: !0,
                onClick: n
            })
        ]
    });
}
function N(e) {
    let { label: t, onChange: n } = e;
    return (0, i.jsxs)('div', {
        className: E.hexInput,
        children: [
            (0, i.jsx)(c.Text, {
                variant: 'text-sm/normal',
                children: t
            }),
            (0, i.jsx)('input', {
                onChange: (e) => {
                    n(e.target.value);
                },
                className: E.inputs,
                placeholder: '#000000'
            })
        ]
    });
}
function I(e) {
    let { nameplate: t } = e,
        n = (0, l.e7)([p.default], () => p.default.getCurrentUser());
    return (0, i.jsx)('div', {
        className: E.preview,
        children: (0, i.jsxs)('div', {
            className: E.simArea,
            children: [
                (0, i.jsx)(c.Text, {
                    className: E.label,
                    variant: 'text-sm/semibold',
                    children: 'DEFAULT'
                }),
                (0, i.jsx)(d.Z, {
                    nameplate: t,
                    user: n,
                    currentUser: n
                }),
                (0, i.jsx)(c.Text, {
                    className: E.label,
                    variant: 'text-sm/semibold',
                    children: 'FOCUSED'
                }),
                (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(d.Z, {
                            nameplate: t,
                            selected: !0,
                            user: n,
                            currentUser: n
                        }),
                        (0, i.jsx)(d.Z, {
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
function y(e) {
    let { nameplate: t } = e;
    return (0, i.jsx)('div', {
        className: a()(E.preview, E.resizer),
        children: (0, i.jsxs)('div', {
            className: E.simArea,
            children: [
                (0, i.jsx)(c.Text, {
                    className: E.label,
                    variant: 'text-sm/semibold',
                    children: 'DEFAULT'
                }),
                (0, i.jsx)(_.Z, { nameplate: t }),
                (0, i.jsx)(c.Text, {
                    className: E.label,
                    variant: 'text-sm/semibold',
                    children: 'FOCUSED'
                }),
                (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(_.Z, {
                            selected: !0,
                            nameplate: t
                        }),
                        (0, i.jsx)(_.Z, { selected: !0 })
                    ]
                })
            ]
        })
    });
}
function A(e) {
    let { nameplate: t } = e;
    return (0, i.jsx)('div', {
        className: E.rtcSim,
        children: (0, i.jsx)(b.Z, { nameplate: t })
    });
}
