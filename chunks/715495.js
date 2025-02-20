n.d(t, { Z: () => E }), n(47120), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648);
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
    p = n(996746),
    h = n(711325),
    f = n(852630),
    b = n(731994),
    N = n(178389);
function x(e) {
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
function _(e, t) {
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
function E() {
    var e;
    let [t, n] = (0, i.useState)(!1),
        [s, a] = (0, i.useState)(!1),
        [l, c] = (0, i.useState)(null),
        m = (0, g.ZP)((e) => e.toolsCache),
        { setToolsCache: p, removeToolsCache: f } = (0, g.L3)(),
        E = (0, i.useCallback)(
            (e) => {
                let t = m[e];
                null != t &&
                    c({
                        src: t.url,
                        palette: t.palette
                    }),
                    c((t) => (null == t ? { src: e } : _(x({}, t), { src: e })));
            },
            [m]
        ),
        I = (0, i.useCallback)(
            (e) => {
                f(e);
            },
            [f]
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: N.controls,
                children: [
                    (0, r.jsxs)('div', {
                        className: N.toggles,
                        children: [
                            (0, r.jsx)(o.zxk, {
                                className: N.toggleButton,
                                size: o.PhG.SMALL,
                                onClick: () => {
                                    a(!1), n((e) => !e);
                                },
                                color: o.Ttl.PRIMARY,
                                children: 'Toggle Themes'
                            }),
                            (0, r.jsx)(o.zxk, {
                                className: N.toggleButton,
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
                        className: N.themePicker,
                        children: [
                            t && (0, r.jsx)(u.i, {}),
                            ' ',
                            s &&
                                (0, r.jsx)(h.Z, {
                                    selected: null == l ? void 0 : null === (e = l.palette) || void 0 === e ? void 0 : e.name,
                                    onSelect: (e) => {
                                        (null == l ? void 0 : l.src) != null && p(l.src, l.src, e), c((t) => (null == t ? { palette: e } : _(x({}, t), { palette: e })));
                                    }
                                })
                        ]
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: N.main,
                children: [
                    (0, r.jsxs)('div', {
                        className: N.previews,
                        children: [
                            (0, r.jsx)(o.Text, {
                                variant: 'text-sm/semibold',
                                children: 'Memberlist'
                            }),
                            (0, r.jsx)(v, { nameplate: l }),
                            (0, r.jsx)(o.Text, {
                                variant: 'text-sm/semibold',
                                children: 'DMs'
                            }),
                            (0, r.jsx)(S, { nameplate: l }),
                            (0, r.jsx)(o.Text, {
                                variant: 'text-sm/semibold',
                                children: 'RTC'
                            }),
                            (0, r.jsx)(T, { nameplate: l })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: N.buttons,
                        children: [
                            (0, r.jsx)(o.Text, {
                                variant: 'text-sm/semibold',
                                children: 'Drag background image to screen'
                            }),
                            (0, r.jsx)(d.Z, {
                                title: 'upload image',
                                description: 'upload the background',
                                icons: b.pA,
                                onDrop: (e) => {
                                    let t = URL.createObjectURL(e[0]);
                                    p(t, t);
                                }
                            }),
                            (0, r.jsx)('div', {
                                className: N.uploadedArea,
                                children: Object.values(m).map((e) => {
                                    let { url: t } = e;
                                    return (0, r.jsx)(
                                        j,
                                        {
                                            src: t,
                                            onSetStatic: E,
                                            removeAsset: I
                                        },
                                        t
                                    );
                                })
                            }),
                            (0, r.jsx)(O, {
                                label: 'gradient override',
                                onChange: (e) =>
                                    c((t) =>
                                        null == t
                                            ? {
                                                  palette: {
                                                      name: 'custom',
                                                      darkBackground: e,
                                                      lightBackground: e
                                                  }
                                              }
                                            : _(x({}, t), {
                                                  palette: {
                                                      name: 'custom',
                                                      darkBackground: e,
                                                      lightBackground: e
                                                  }
                                              })
                                    )
                            }),
                            (0, r.jsx)(C, {
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
function j(e) {
    let { src: t, onSetStatic: n, removeAsset: i } = e;
    return (0, r.jsxs)('div', {
        className: N.uploaded,
        children: [
            (0, r.jsx)(o.P3F, {
                onClick: () => i(t),
                className: N.xicon,
                children: (0, r.jsx)(o.Dio, {
                    size: 'custom',
                    width: 16,
                    height: 16,
                    name: 'x'
                })
            }),
            (0, r.jsx)('img', {
                className: N.uploadedImg,
                src: t,
                alt: ''
            }),
            (0, r.jsx)('div', {
                className: N.uploadedControls,
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
function C(e) {
    let { label: t, onClick: n } = e;
    return (0, r.jsxs)('div', {
        className: N.flex,
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
function O(e) {
    let { label: t, onChange: n } = e;
    return (0, r.jsxs)('div', {
        className: N.hexInput,
        children: [
            (0, r.jsx)(o.Text, {
                variant: 'text-sm/normal',
                children: t
            }),
            (0, r.jsx)('input', {
                onChange: (e) => {
                    n(e.target.value);
                },
                className: N.inputs,
                placeholder: '#000000'
            })
        ]
    });
}
function v(e) {
    let { nameplate: t } = e,
        n = (0, l.e7)([m.default], () => m.default.getCurrentUser());
    return (0, r.jsx)('div', {
        className: N.preview,
        children: (0, r.jsxs)('div', {
            className: N.simArea,
            children: [
                (0, r.jsx)(o.Text, {
                    className: N.label,
                    variant: 'text-sm/semibold',
                    children: 'DEFAULT'
                }),
                (0, r.jsx)(c.Z, {
                    nameplate: t,
                    user: n,
                    currentUser: n
                }),
                (0, r.jsx)(o.Text, {
                    className: N.label,
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
function S(e) {
    let { nameplate: t } = e;
    return (0, r.jsx)('div', {
        className: a()(N.preview, N.resizer),
        children: (0, r.jsxs)('div', {
            className: N.simArea,
            children: [
                (0, r.jsx)(o.Text, {
                    className: N.label,
                    variant: 'text-sm/semibold',
                    children: 'DEFAULT'
                }),
                (0, r.jsx)(f.Z, { nameplate: t }),
                (0, r.jsx)(o.Text, {
                    className: N.label,
                    variant: 'text-sm/semibold',
                    children: 'FOCUSED'
                }),
                (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsx)(f.Z, {
                            selected: !0,
                            nameplate: t
                        }),
                        (0, r.jsx)(f.Z, { selected: !0 })
                    ]
                })
            ]
        })
    });
}
function T(e) {
    let { nameplate: t } = e;
    return (0, r.jsx)('div', {
        className: N.rtcSim,
        children: (0, r.jsx)(p.Z, { nameplate: t })
    });
}
