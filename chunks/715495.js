n.d(t, { Z: () => _ }), n(47120), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648), n(653041);
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
    g = n(996746),
    p = n(711325),
    h = n(852630),
    f = n(731994),
    b = n(178389);
function N(e) {
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
function x(e, t) {
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
function _() {
    var e;
    let [t, n] = (0, i.useState)(!1),
        [s, a] = (0, i.useState)(!1),
        [l, c] = (0, i.useState)(null),
        [m, g] = (0, i.useState)([]),
        h = (0, i.useCallback)((e) => {
            c((t) => (null == t ? { src: e } : x(N({}, t), { src: e })));
        }, []),
        _ = (0, i.useCallback)((e) => {
            c((t) => (null == t ? { animatedSrc: e } : x(N({}, t), { animatedSrc: e })));
        }, []),
        T = (0, i.useCallback)((e) => {
            g((t) => t.filter((t) => t !== e));
        }, []);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: b.controls,
                children: [
                    (0, r.jsxs)('div', {
                        className: b.toggles,
                        children: [
                            (0, r.jsx)(o.zxk, {
                                className: b.toggleButton,
                                size: o.PhG.SMALL,
                                onClick: () => {
                                    a(!1), n((e) => !e);
                                },
                                color: o.Ttl.PRIMARY,
                                children: 'Toggle Themes'
                            }),
                            (0, r.jsx)(o.zxk, {
                                className: b.toggleButton,
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
                        className: b.themePicker,
                        children: [
                            t && (0, r.jsx)(u.i, {}),
                            ' ',
                            s &&
                                (0, r.jsx)(p.Z, {
                                    selected: null == l ? void 0 : null === (e = l.palette) || void 0 === e ? void 0 : e.name,
                                    onSelect: (e) => {
                                        c((t) => (null == t ? { palette: e } : x(N({}, t), { palette: e })));
                                    }
                                })
                        ]
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: b.main,
                children: [
                    (0, r.jsxs)('div', {
                        className: b.previews,
                        children: [
                            (0, r.jsx)(o.Text, {
                                variant: 'text-sm/semibold',
                                children: 'Memberlist'
                            }),
                            (0, r.jsx)(O, { nameplate: l }),
                            (0, r.jsx)(o.Text, {
                                variant: 'text-sm/semibold',
                                children: 'DMs'
                            }),
                            (0, r.jsx)(v, { nameplate: l }),
                            (0, r.jsx)(o.Text, {
                                variant: 'text-sm/semibold',
                                children: 'RTC'
                            }),
                            (0, r.jsx)(S, { nameplate: l })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: b.buttons,
                        children: [
                            (0, r.jsx)(o.Text, {
                                variant: 'text-sm/semibold',
                                children: 'Drag background image to screen'
                            }),
                            (0, r.jsx)(d.Z, {
                                title: 'upload image',
                                description: 'upload the background',
                                icons: f.pA,
                                onDrop: (e) => {
                                    let t = URL.createObjectURL(e[0]);
                                    g((e) => {
                                        let n = Array.from(e);
                                        return n.push(t), n;
                                    });
                                }
                            }),
                            (0, r.jsx)('div', {
                                className: b.uploadedArea,
                                children: m.map((e) =>
                                    (0, r.jsx)(
                                        E,
                                        {
                                            src: e,
                                            onSetStatic: h,
                                            onSetAnimated: _,
                                            removeAsset: T
                                        },
                                        e
                                    )
                                )
                            }),
                            (0, r.jsx)(C, {
                                label: 'border color',
                                onChange: (e) => c((t) => (null == t ? { borderColor: e } : x(N({}, t), { borderColor: e })))
                            }),
                            (0, r.jsx)(j, {
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
function E(e) {
    let { src: t, onSetStatic: n, onSetAnimated: i, removeAsset: s } = e;
    return (0, r.jsxs)('div', {
        className: b.uploaded,
        children: [
            (0, r.jsx)(o.P3F, {
                onClick: () => s(t),
                className: b.xicon,
                children: (0, r.jsx)(o.Dio, {
                    size: 'custom',
                    width: 16,
                    height: 16,
                    name: 'x'
                })
            }),
            (0, r.jsx)('img', {
                className: b.uploadedImg,
                src: t,
                alt: ''
            }),
            (0, r.jsxs)('div', {
                className: b.uploadedControls,
                children: [
                    (0, r.jsx)(o.zxk, {
                        onClick: () => n(t),
                        size: o.PhG.TINY,
                        color: o.Ttl.PRIMARY,
                        children: 'set static'
                    }),
                    (0, r.jsx)(o.zxk, {
                        onClick: () => i(t),
                        size: o.PhG.TINY,
                        color: o.Ttl.PRIMARY,
                        children: 'set animated'
                    })
                ]
            })
        ]
    });
}
function j(e) {
    let { label: t, onClick: n } = e;
    return (0, r.jsxs)('div', {
        className: b.flex,
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
function C(e) {
    let { label: t, onChange: n } = e;
    return (0, r.jsxs)('div', {
        className: b.hexInput,
        children: [
            (0, r.jsx)(o.Text, {
                variant: 'text-sm/normal',
                children: t
            }),
            (0, r.jsx)('input', {
                onChange: (e) => {
                    n(e.target.value);
                },
                className: b.inputs,
                placeholder: '#000000'
            })
        ]
    });
}
function O(e) {
    let { nameplate: t } = e,
        n = (0, l.e7)([m.default], () => m.default.getCurrentUser());
    return (0, r.jsx)('div', {
        className: b.preview,
        children: (0, r.jsxs)('div', {
            className: b.simArea,
            children: [
                (0, r.jsx)(o.Text, {
                    className: b.label,
                    variant: 'text-sm/semibold',
                    children: 'DEFAULT'
                }),
                (0, r.jsx)(c.Z, {
                    nameplate: t,
                    user: n,
                    currentUser: n
                }),
                (0, r.jsx)(o.Text, {
                    className: b.label,
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
function v(e) {
    let { nameplate: t } = e;
    return (0, r.jsx)('div', {
        className: a()(b.preview, b.resizer),
        children: (0, r.jsxs)('div', {
            className: b.simArea,
            children: [
                (0, r.jsx)(o.Text, {
                    className: b.label,
                    variant: 'text-sm/semibold',
                    children: 'DEFAULT'
                }),
                (0, r.jsx)(h.Z, { nameplate: t }),
                (0, r.jsx)(o.Text, {
                    className: b.label,
                    variant: 'text-sm/semibold',
                    children: 'FOCUSED'
                }),
                (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsx)(h.Z, {
                            selected: !0,
                            nameplate: t
                        }),
                        (0, r.jsx)(h.Z, { selected: !0 })
                    ]
                })
            ]
        })
    });
}
function S(e) {
    let { nameplate: t } = e;
    return (0, r.jsx)('div', {
        className: b.rtcSim,
        children: (0, r.jsx)(g.Z, { nameplate: t })
    });
}
