n.d(t, { Z: () => C }), n(388685), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(276264),
    d = n(205822),
    u = n(329013),
    m = n(594174),
    g = n(396821),
    p = n(780771),
    h = n(4242),
    f = n(996746),
    b = n(711325),
    _ = n(852630),
    N = n(731994),
    x = n(396921);
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
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
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function C() {
    var e;
    let [t, n] = (0, i.useState)(!1),
        [s, a] = (0, i.useState)(!1),
        [l, c] = (0, i.useState)(null),
        m = (0, g.ZP)((e) => e.toolsCache),
        { setToolsCache: f, removeToolsCache: _ } = (0, g.L3)(),
        { setImgCache: C } = (0, g.W_)(),
        A = (0, i.useCallback)(
            (e) => {
                let t = m[e];
                null != t &&
                    c({
                        src: t.url,
                        palette: t.palette,
                        preview: !0
                    }),
                    c((t) =>
                        null == t
                            ? {
                                  src: e,
                                  palette: p.jD,
                                  preview: !0
                              }
                            : j(E({}, t), {
                                  src: e,
                                  preview: !0
                              })
                    );
            },
            [m]
        ),
        P = (0, i.useCallback)((e) => {
            c((t) =>
                null == t
                    ? null
                    : j(E({}, t), {
                          palette: e,
                          preview: !0
                      })
            );
        }, []),
        R = (0, i.useCallback)(
            (e) => {
                _(e);
            },
            [_]
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: x.controls,
                children: [
                    (0, r.jsxs)('div', {
                        className: x.toggles,
                        children: [
                            (0, r.jsx)(o.zxk, {
                                className: x.toggleButton,
                                size: o.PhG.SMALL,
                                onClick: () => {
                                    a(!1), n((e) => !e);
                                },
                                color: o.Ttl.PRIMARY,
                                children: 'Toggle Themes'
                            }),
                            (0, r.jsx)(o.zxk, {
                                className: x.toggleButton,
                                size: o.PhG.SMALL,
                                onClick: () => {
                                    n(!1), a((e) => !e);
                                },
                                color: o.Ttl.PRIMARY,
                                children: 'Toggle Gradients'
                            })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: x.themePicker,
                        children: [
                            t && (0, r.jsx)(u.i, {}),
                            ' ',
                            s &&
                                (0, r.jsx)(b.Z, {
                                    selected: null == l || null == (e = l.palette) ? void 0 : e.name,
                                    onSelect: (e) => {
                                        (null == l ? void 0 : l.src) != null && f(l.src, l.src, e), P(e);
                                    }
                                })
                        ]
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: x.main,
                children: [
                    (0, r.jsxs)('div', {
                        className: x.previews,
                        children: [
                            (0, r.jsx)(o.Text, {
                                variant: 'text-sm/semibold',
                                children: 'Memberlist'
                            }),
                            (0, r.jsx)(T, { nameplate: l }),
                            (0, r.jsx)(o.Text, {
                                variant: 'text-sm/semibold',
                                children: 'DMs'
                            }),
                            (0, r.jsx)(I, { nameplate: l }),
                            (0, r.jsx)(o.Text, {
                                variant: 'text-sm/semibold',
                                children: 'RTC'
                            }),
                            (0, r.jsx)(y, { nameplate: l })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: x.buttons,
                        children: [
                            (0, r.jsx)(o.Text, {
                                variant: 'text-sm/semibold',
                                children: 'Drag background image to screen'
                            }),
                            (0, r.jsx)(d.Z, {
                                title: 'upload image',
                                description: 'upload the background',
                                icons: N.pA,
                                onDrop: async (e) => {
                                    let t = URL.createObjectURL(e[0]),
                                        n = e[0],
                                        r = await n.arrayBuffer();
                                    C(t, t, (0, h.xh)(r)), f(t, t, p.jD);
                                }
                            }),
                            (0, r.jsx)('div', {
                                className: x.uploadedArea,
                                children: Object.values(m).map((e) => {
                                    let { url: t } = e;
                                    return (0, r.jsx)(
                                        O,
                                        {
                                            src: t,
                                            onSetStatic: A,
                                            removeAsset: R
                                        },
                                        t
                                    );
                                })
                            }),
                            (0, r.jsx)(v, {
                                label: 'gradient override',
                                onChange: (e) =>
                                    P({
                                        name: p._j,
                                        darkBackground: e,
                                        lightBackground: e
                                    })
                            }),
                            (0, r.jsx)(S, {
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
function O(e) {
    let { src: t, onSetStatic: n, removeAsset: i } = e;
    return (0, r.jsxs)('div', {
        className: x.uploaded,
        children: [
            (0, r.jsx)(o.P3F, {
                onClick: () => i(t),
                className: x.xicon,
                children: (0, r.jsx)(o.Dio, {
                    size: 'custom',
                    width: 16,
                    height: 16,
                    name: 'x'
                })
            }),
            (0, r.jsx)('img', {
                className: x.uploadedImg,
                src: t,
                alt: ''
            }),
            (0, r.jsx)('div', {
                className: x.uploadedControls,
                children: (0, r.jsx)(o.zxk, {
                    onClick: () => n(t),
                    size: o.PhG.TINY,
                    color: o.Ttl.PRIMARY,
                    children: 'set nameplate'
                })
            })
        ]
    });
}
function S(e) {
    let { label: t, onClick: n } = e;
    return (0, r.jsxs)('div', {
        className: x.flex,
        children: [
            (0, r.jsx)(o.Text, {
                variant: 'text-sm/normal',
                children: 'coming soon'
            }),
            (0, r.jsx)(o.zxk, {
                disabled: !0,
                size: o.PhG.SMALL,
                color: o.Ttl.PRIMARY,
                onClick: n,
                children: t
            })
        ]
    });
}
function v(e) {
    let { label: t, onChange: n } = e;
    return (0, r.jsxs)('div', {
        className: x.hexInput,
        children: [
            (0, r.jsx)(o.Text, {
                variant: 'text-sm/normal',
                children: t
            }),
            (0, r.jsx)('input', {
                onChange: (e) => {
                    n(e.target.value);
                },
                className: x.inputs,
                placeholder: '#000000'
            })
        ]
    });
}
function T(e) {
    let { nameplate: t } = e,
        n = (0, l.e7)([m.default], () => m.default.getCurrentUser());
    return (0, r.jsx)('div', {
        className: x.preview,
        children: (0, r.jsxs)('div', {
            className: x.simArea,
            children: [
                (0, r.jsx)(o.Text, {
                    className: x.label,
                    variant: 'text-sm/semibold',
                    children: 'DEFAULT'
                }),
                (0, r.jsx)(c.Z, {
                    nameplate: t,
                    user: n,
                    currentUser: n
                }),
                (0, r.jsx)(o.Text, {
                    className: x.label,
                    variant: 'text-sm/semibold',
                    children: 'FOCUSED'
                }),
                (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsx)(c.Z, {
                            nameplate: t,
                            selected: !0,
                            user: n,
                            currentUser: n
                        }),
                        (0, r.jsx)(c.Z, {
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
function I(e) {
    let { nameplate: t } = e;
    return (0, r.jsx)('div', {
        className: a()(x.preview, x.resizer),
        children: (0, r.jsxs)('div', {
            className: x.simArea,
            children: [
                (0, r.jsx)(o.Text, {
                    className: x.label,
                    variant: 'text-sm/semibold',
                    children: 'DEFAULT'
                }),
                (0, r.jsx)(_.Z, { nameplate: t }),
                (0, r.jsx)(o.Text, {
                    className: x.label,
                    variant: 'text-sm/semibold',
                    children: 'FOCUSED'
                }),
                (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsx)(_.Z, {
                            selected: !0,
                            nameplate: t
                        }),
                        (0, r.jsx)(_.Z, { selected: !0 })
                    ]
                })
            ]
        })
    });
}
function y(e) {
    let { nameplate: t } = e;
    return (0, r.jsx)('div', {
        className: x.rtcSim,
        children: (0, r.jsx)(f.Z, { nameplate: t })
    });
}
