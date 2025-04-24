n.d(t, { Z: () => O }), n(388685), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(442837),
    o = n(481060),
    c = n(276264),
    d = n(205822),
    u = n(329013),
    m = n(594174),
    p = n(396821),
    g = n(780771),
    h = n(4242),
    f = n(996746),
    b = n(711325),
    _ = n(852630),
    x = n(731994),
    E = n(396921);
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
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
function O() {
    var e;
    let [t, n] = (0, r.useState)(!1),
        [s, l] = (0, r.useState)(!1),
        [a, c] = (0, r.useState)(null),
        m = (0, p.ZP)((e) => e.toolsCache),
        { setToolsCache: f, removeToolsCache: _ } = (0, p.L3)(),
        { setImgCache: O } = (0, p.W_)(),
        A = (0, r.useCallback)(
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
                                  palette: g.jD,
                                  preview: !0
                              }
                            : j(C({}, t), {
                                  src: e,
                                  preview: !0
                              })
                    );
            },
            [m]
        ),
        P = (0, r.useCallback)((e) => {
            c((t) =>
                null == t
                    ? null
                    : j(C({}, t), {
                          palette: e,
                          preview: !0
                      })
            );
        }, []),
        R = (0, r.useCallback)(
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
                            (0, i.jsx)(o.zxk, {
                                className: E.toggleButton,
                                size: o.PhG.SMALL,
                                onClick: () => {
                                    l(!1), n((e) => !e);
                                },
                                color: o.Ttl.PRIMARY,
                                children: 'Toggle Themes'
                            }),
                            (0, i.jsx)(o.zxk, {
                                className: E.toggleButton,
                                size: o.PhG.SMALL,
                                onClick: () => {
                                    n(!1), l((e) => !e);
                                },
                                color: o.Ttl.PRIMARY,
                                children: 'Toggle Gradients'
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: E.themePicker,
                        children: [
                            t && (0, i.jsx)(u.i, {}),
                            ' ',
                            s &&
                                (0, i.jsx)(b.Z, {
                                    selected: null == a || null == (e = a.palette) ? void 0 : e.name,
                                    onSelect: (e) => {
                                        (null == a ? void 0 : a.src) != null && f(a.src, a.src, e), P(e);
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
                            (0, i.jsx)(o.Text, {
                                variant: 'text-sm/semibold',
                                children: 'Memberlist'
                            }),
                            (0, i.jsx)(I, { nameplate: a }),
                            (0, i.jsx)(o.Text, {
                                variant: 'text-sm/semibold',
                                children: 'DMs'
                            }),
                            (0, i.jsx)(N, { nameplate: a }),
                            (0, i.jsx)(o.Text, {
                                variant: 'text-sm/semibold',
                                children: 'RTC'
                            }),
                            (0, i.jsx)(y, { nameplate: a })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: E.buttons,
                        children: [
                            (0, i.jsx)(o.Text, {
                                variant: 'text-sm/semibold',
                                children: 'Drag background image to screen'
                            }),
                            (0, i.jsx)(d.Z, {
                                title: 'upload image',
                                description: 'upload the background',
                                icons: x.pA,
                                onDrop: async (e) => {
                                    let t = URL.createObjectURL(e[0]),
                                        n = e[0],
                                        i = await n.arrayBuffer();
                                    O(t, t, (0, h.xh)(i)), f(t, t, g.jD);
                                }
                            }),
                            (0, i.jsx)('div', {
                                className: E.uploadedArea,
                                children: Object.values(m).map((e) => {
                                    let { url: t } = e;
                                    return (0, i.jsx)(
                                        S,
                                        {
                                            src: t,
                                            onSetStatic: A,
                                            removeAsset: R
                                        },
                                        t
                                    );
                                })
                            }),
                            (0, i.jsx)(T, {
                                label: 'gradient override',
                                onChange: (e) =>
                                    P({
                                        name: g._j,
                                        darkBackground: e,
                                        lightBackground: e
                                    })
                            }),
                            (0, i.jsx)(v, {
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
            (0, i.jsx)(o.P3F, {
                onClick: () => r(t),
                className: E.xicon,
                children: (0, i.jsx)(o.Dio, {
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
                children: (0, i.jsx)(o.zxk, {
                    onClick: () => n(t),
                    size: o.PhG.TINY,
                    color: o.Ttl.PRIMARY,
                    children: 'set nameplate'
                })
            })
        ]
    });
}
function v(e) {
    let { label: t, onClick: n } = e;
    return (0, i.jsxs)('div', {
        className: E.flex,
        children: [
            (0, i.jsx)(o.Text, {
                variant: 'text-sm/normal',
                children: 'coming soon'
            }),
            (0, i.jsx)(o.zxk, {
                disabled: !0,
                size: o.PhG.SMALL,
                color: o.Ttl.PRIMARY,
                onClick: n,
                children: t
            })
        ]
    });
}
function T(e) {
    let { label: t, onChange: n } = e;
    return (0, i.jsxs)('div', {
        className: E.hexInput,
        children: [
            (0, i.jsx)(o.Text, {
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
        n = (0, a.e7)([m.default], () => m.default.getCurrentUser());
    return (0, i.jsx)('div', {
        className: E.preview,
        children: (0, i.jsxs)('div', {
            className: E.simArea,
            children: [
                (0, i.jsx)(o.Text, {
                    className: E.label,
                    variant: 'text-sm/semibold',
                    children: 'DEFAULT'
                }),
                (0, i.jsx)(c.Z, {
                    nameplate: t,
                    user: n,
                    currentUser: n
                }),
                (0, i.jsx)(o.Text, {
                    className: E.label,
                    variant: 'text-sm/semibold',
                    children: 'FOCUSED'
                }),
                (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(c.Z, {
                            nameplate: t,
                            selected: !0,
                            user: n,
                            currentUser: n
                        }),
                        (0, i.jsx)(c.Z, {
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
function N(e) {
    let { nameplate: t } = e;
    return (0, i.jsx)('div', {
        className: l()(E.preview, E.resizer),
        children: (0, i.jsxs)('div', {
            className: E.simArea,
            children: [
                (0, i.jsx)(o.Text, {
                    className: E.label,
                    variant: 'text-sm/semibold',
                    children: 'DEFAULT'
                }),
                (0, i.jsx)(_.Z, { nameplate: t }),
                (0, i.jsx)(o.Text, {
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
function y(e) {
    let { nameplate: t } = e;
    return (0, i.jsx)('div', {
        className: E.rtcSim,
        children: (0, i.jsx)(f.Z, { nameplate: t })
    });
}
