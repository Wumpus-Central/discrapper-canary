n.d(t, { Z: () => p }), n(47120), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648), n(653041);
var i = n(200651),
    s = n(192379),
    l = n(120356),
    r = n.n(l),
    a = n(442837),
    o = n(481060),
    c = n(276264),
    d = n(205822),
    u = n(329013),
    h = n(594174),
    m = n(190624),
    g = n(459657),
    x = n(731994),
    _ = n(769689);
function p() {
    var e;
    let [t, n] = (0, s.useState)(!1),
        [l, r] = (0, s.useState)(!1),
        [a, c] = (0, s.useState)(null),
        [h, g] = (0, s.useState)([]),
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
        T = (0, s.useCallback)((e) => {
            c((t) =>
                null == t
                    ? { animatedSrc: e }
                    : {
                          ...t,
                          animatedSrc: e
                      }
            );
        }, []),
        S = (0, s.useCallback)((e) => {
            g((t) => t.filter((t) => t !== e));
        }, []);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: _.controls,
                children: [
                    (0, i.jsxs)('div', {
                        className: _.toggles,
                        children: [
                            (0, i.jsx)(o.zxk, {
                                className: _.toggleButton,
                                size: o.PhG.SMALL,
                                onClick: () => {
                                    r(!1), n((e) => !e);
                                },
                                color: o.Ttl.PRIMARY,
                                children: 'Toggle Themes'
                            }),
                            (0, i.jsx)(o.zxk, {
                                className: _.toggleButton,
                                size: o.PhG.SMALL,
                                onClick: () => {
                                    n(!1), r((e) => !e);
                                },
                                color: o.Ttl.PRIMARY,
                                children: 'Toggle Gradients'
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: _.themePicker,
                        children: [
                            t && (0, i.jsx)(u.i, {}),
                            ' ',
                            l &&
                                (0, i.jsx)(m.Z, {
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
                className: _.main,
                children: [
                    (0, i.jsxs)('div', {
                        className: _.previews,
                        children: [
                            (0, i.jsx)(o.Text, {
                                variant: 'text-sm/semibold',
                                children: 'Memberlist'
                            }),
                            (0, i.jsx)(f, { namePlate: a }),
                            (0, i.jsx)(o.Text, {
                                variant: 'text-sm/semibold',
                                children: 'DMs'
                            }),
                            (0, i.jsx)(I, { namePlate: a })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: _.buttons,
                        children: [
                            (0, i.jsx)(o.Text, {
                                variant: 'text-sm/semibold',
                                children: 'Drag background image to screen'
                            }),
                            (0, i.jsx)(d.Z, {
                                title: 'upload image',
                                description: 'upload the background',
                                icons: x.pA,
                                onDrop: (e) => {
                                    let t = URL.createObjectURL(e[0]);
                                    g((e) => {
                                        let n = Array.from(e);
                                        return n.push(t), n;
                                    });
                                }
                            }),
                            (0, i.jsx)('div', {
                                className: _.uploadedArea,
                                children: h.map((e) =>
                                    (0, i.jsx)(
                                        E,
                                        {
                                            src: e,
                                            onSetStatic: p,
                                            onSetAnimated: T,
                                            removeAsset: S
                                        },
                                        e
                                    )
                                )
                            }),
                            (0, i.jsx)(N, {
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
    let { src: t, onSetStatic: n, onSetAnimated: s, removeAsset: l } = e;
    return (0, i.jsxs)('div', {
        className: _.uploaded,
        children: [
            (0, i.jsx)(o.P3F, {
                onClick: () => l(t),
                className: _.xicon,
                children: (0, i.jsx)(o.Dio, {
                    size: 'custom',
                    width: 16,
                    height: 16,
                    name: 'x'
                })
            }),
            (0, i.jsx)('img', {
                className: _.uploadedImg,
                src: t,
                alt: ''
            }),
            (0, i.jsxs)('div', {
                className: _.uploadedControls,
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
        className: _.flex,
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
function N(e) {
    let { label: t, onChange: n } = e;
    return (0, i.jsxs)('div', {
        className: _.hexInput,
        children: [
            (0, i.jsx)(o.Text, {
                variant: 'text-sm/normal',
                children: t
            }),
            (0, i.jsx)('input', {
                onChange: (e) => {
                    n(e.target.value);
                },
                className: _.inputs,
                placeholder: '#000000'
            })
        ]
    });
}
function f(e) {
    let { namePlate: t } = e,
        n = (0, a.e7)([h.default], () => h.default.getCurrentUser());
    return (0, i.jsx)('div', {
        className: _.preview,
        children: (0, i.jsxs)('div', {
            className: _.simArea,
            children: [
                (0, i.jsx)(o.Text, {
                    className: _.label,
                    variant: 'text-sm/semibold',
                    children: 'DEFAULT'
                }),
                (0, i.jsx)(c.Z, {
                    namePlate: t,
                    user: n,
                    currentUser: n
                }),
                (0, i.jsx)(o.Text, {
                    className: _.label,
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
function I(e) {
    let { namePlate: t } = e;
    return (0, i.jsx)('div', {
        className: r()(_.preview, _.resizer),
        children: (0, i.jsxs)('div', {
            className: _.simArea,
            children: [
                (0, i.jsx)(o.Text, {
                    className: _.label,
                    variant: 'text-sm/semibold',
                    children: 'DEFAULT'
                }),
                (0, i.jsx)(g.Z, { nameplate: t }),
                (0, i.jsx)(o.Text, {
                    className: _.label,
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
