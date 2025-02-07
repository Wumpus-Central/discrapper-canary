n.d(t, { Z: () => p }), n(47120), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648), n(653041);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(442837),
    o = n(481060),
    c = n(276264),
    d = n(205822),
    u = n(329013),
    m = n(594174),
    h = n(190624),
    g = n(459657),
    _ = n(731994),
    x = n(421794);
function p() {
    var e;
    let [t, n] = (0, s.useState)(!1),
        [r, l] = (0, s.useState)(!1),
        [a, c] = (0, s.useState)(null),
        [m, g] = (0, s.useState)([]),
        p = (0, s.useCallback)((e) => {
            c((t) =>
                null == t
                    ? { src: e }
                    : {
                          ...t,
                          src: e
                      }
            );
        }, []),
        S = (0, s.useCallback)((e) => {
            c((t) =>
                null == t
                    ? { animatedSrc: e }
                    : {
                          ...t,
                          animatedSrc: e
                      }
            );
        }, []),
        I = (0, s.useCallback)((e) => {
            g((t) => t.filter((t) => t !== e));
        }, []);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: x.controls,
                children: [
                    (0, i.jsxs)('div', {
                        className: x.toggles,
                        children: [
                            (0, i.jsx)(o.zxk, {
                                className: x.toggleButton,
                                size: o.PhG.SMALL,
                                onClick: () => {
                                    l(!1), n((e) => !e);
                                },
                                color: o.Ttl.PRIMARY,
                                children: 'Toggle Themes'
                            }),
                            (0, i.jsx)(o.zxk, {
                                className: x.toggleButton,
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
                        className: x.themePicker,
                        children: [
                            t && (0, i.jsx)(u.i, {}),
                            ' ',
                            r &&
                                (0, i.jsx)(h.Z, {
                                    selected: null == a ? void 0 : null === (e = a.palette) || void 0 === e ? void 0 : e.name,
                                    onSelect: (e) => {
                                        c((t) =>
                                            null == t
                                                ? { palette: e }
                                                : {
                                                      ...t,
                                                      palette: e
                                                  }
                                        );
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
                        className: x.previews,
                        children: [
                            (0, i.jsx)(o.Text, {
                                variant: 'text-sm/semibold',
                                children: 'Memberlist'
                            }),
                            (0, i.jsx)(T, { namePlate: a }),
                            (0, i.jsx)(o.Text, {
                                variant: 'text-sm/semibold',
                                children: 'DMs'
                            }),
                            (0, i.jsx)(N, { namePlate: a })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: x.buttons,
                        children: [
                            (0, i.jsx)(o.Text, {
                                variant: 'text-sm/semibold',
                                children: 'Drag background image to screen'
                            }),
                            (0, i.jsx)(d.Z, {
                                title: 'upload image',
                                description: 'upload the background',
                                icons: _.pA,
                                onDrop: (e) => {
                                    let t = URL.createObjectURL(e[0]);
                                    g((e) => {
                                        let n = Array.from(e);
                                        return n.push(t), n;
                                    });
                                }
                            }),
                            (0, i.jsx)('div', {
                                className: x.uploadedArea,
                                children: m.map((e) =>
                                    (0, i.jsx)(
                                        E,
                                        {
                                            src: e,
                                            onSetStatic: p,
                                            onSetAnimated: S,
                                            removeAsset: I
                                        },
                                        e
                                    )
                                )
                            }),
                            (0, i.jsx)(f, {
                                label: 'border color',
                                onChange: (e) =>
                                    c((t) =>
                                        null == t
                                            ? { borderColor: e }
                                            : {
                                                  ...t,
                                                  borderColor: e
                                              }
                                    )
                            }),
                            (0, i.jsx)(C, {
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
    let { src: t, onSetStatic: n, onSetAnimated: s, removeAsset: r } = e;
    return (0, i.jsxs)('div', {
        className: x.uploaded,
        children: [
            (0, i.jsx)(o.P3F, {
                onClick: () => r(t),
                className: x.xicon,
                children: (0, i.jsx)(o.Dio, {
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
            (0, i.jsxs)('div', {
                className: x.uploadedControls,
                children: [
                    (0, i.jsx)(o.zxk, {
                        onClick: () => n(t),
                        size: o.PhG.TINY,
                        color: o.Ttl.PRIMARY,
                        children: 'set static'
                    }),
                    (0, i.jsx)(o.zxk, {
                        onClick: () => s(t),
                        size: o.PhG.TINY,
                        color: o.Ttl.PRIMARY,
                        children: 'set animated'
                    })
                ]
            })
        ]
    });
}
function C(e) {
    let { label: t, onClick: n } = e;
    return (0, i.jsxs)('div', {
        className: x.flex,
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
function f(e) {
    let { label: t, onChange: n } = e;
    return (0, i.jsxs)('div', {
        className: x.hexInput,
        children: [
            (0, i.jsx)(o.Text, {
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
function T(e) {
    let { namePlate: t } = e,
        n = (0, a.e7)([m.default], () => m.default.getCurrentUser());
    return (0, i.jsx)('div', {
        className: x.preview,
        children: (0, i.jsxs)('div', {
            className: x.simArea,
            children: [
                (0, i.jsx)(o.Text, {
                    className: x.label,
                    variant: 'text-sm/semibold',
                    children: 'DEFAULT'
                }),
                (0, i.jsx)(c.Z, {
                    namePlate: t,
                    user: n,
                    currentUser: n
                }),
                (0, i.jsx)(o.Text, {
                    className: x.label,
                    variant: 'text-sm/semibold',
                    children: 'FOCUSED'
                }),
                (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(c.Z, {
                            namePlate: t,
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
    let { namePlate: t } = e;
    return (0, i.jsx)('div', {
        className: l()(x.preview, x.resizer),
        children: (0, i.jsxs)('div', {
            className: x.simArea,
            children: [
                (0, i.jsx)(o.Text, {
                    className: x.label,
                    variant: 'text-sm/semibold',
                    children: 'DEFAULT'
                }),
                (0, i.jsx)(g.Z, { nameplate: t }),
                (0, i.jsx)(o.Text, {
                    className: x.label,
                    variant: 'text-sm/semibold',
                    children: 'FOCUSED'
                }),
                (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(g.Z, {
                            selected: !0,
                            nameplate: t
                        }),
                        (0, i.jsx)(g.Z, { selected: !0 })
                    ]
                })
            ]
        })
    });
}
