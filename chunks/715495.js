n.d(t, { Z: () => _ }), n(47120), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648), n(653041);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    a = n.n(r),
    l = n(442837),
    o = n(481060),
    c = n(276264),
    d = n(205822),
    u = n(329013),
    m = n(594174),
    h = n(996746),
    g = n(711325),
    N = n(852630),
    x = n(731994),
    p = n(355531);
function _() {
    var e;
    let [t, n] = (0, s.useState)(!1),
        [r, a] = (0, s.useState)(!1),
        [l, c] = (0, s.useState)(null),
        [m, h] = (0, s.useState)([]),
        N = (0, s.useCallback)((e) => {
            c((t) =>
                null == t
                    ? { src: e }
                    : {
                          ...t,
                          src: e
                      }
            );
        }, []),
        _ = (0, s.useCallback)((e) => {
            c((t) =>
                null == t
                    ? { animatedSrc: e }
                    : {
                          ...t,
                          animatedSrc: e
                      }
            );
        }, []),
        b = (0, s.useCallback)((e) => {
            h((t) => t.filter((t) => t !== e));
        }, []);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: p.controls,
                children: [
                    (0, i.jsxs)('div', {
                        className: p.toggles,
                        children: [
                            (0, i.jsx)(o.zxk, {
                                className: p.toggleButton,
                                size: o.PhG.SMALL,
                                onClick: () => {
                                    a(!1), n((e) => !e);
                                },
                                color: o.Ttl.PRIMARY,
                                children: 'Toggle Themes'
                            }),
                            (0, i.jsx)(o.zxk, {
                                className: p.toggleButton,
                                size: o.PhG.SMALL,
                                onClick: () => {
                                    n(!1), a((e) => !e);
                                },
                                color: o.Ttl.PRIMARY,
                                children: 'Toggle Gradients'
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: p.themePicker,
                        children: [
                            t && (0, i.jsx)(u.i, {}),
                            ' ',
                            r &&
                                (0, i.jsx)(g.Z, {
                                    selected: null == l ? void 0 : null === (e = l.palette) || void 0 === e ? void 0 : e.name,
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
                className: p.main,
                children: [
                    (0, i.jsxs)('div', {
                        className: p.previews,
                        children: [
                            (0, i.jsx)(o.Text, {
                                variant: 'text-sm/semibold',
                                children: 'Memberlist'
                            }),
                            (0, i.jsx)(T, { nameplate: l }),
                            (0, i.jsx)(o.Text, {
                                variant: 'text-sm/semibold',
                                children: 'DMs'
                            }),
                            (0, i.jsx)(S, { nameplate: l }),
                            (0, i.jsx)(o.Text, {
                                variant: 'text-sm/semibold',
                                children: 'RTC'
                            }),
                            (0, i.jsx)(I, { nameplate: l })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: p.buttons,
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
                                    h((e) => {
                                        let n = Array.from(e);
                                        return n.push(t), n;
                                    });
                                }
                            }),
                            (0, i.jsx)('div', {
                                className: p.uploadedArea,
                                children: m.map((e) =>
                                    (0, i.jsx)(
                                        E,
                                        {
                                            src: e,
                                            onSetStatic: N,
                                            onSetAnimated: _,
                                            removeAsset: b
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
        className: p.uploaded,
        children: [
            (0, i.jsx)(o.P3F, {
                onClick: () => r(t),
                className: p.xicon,
                children: (0, i.jsx)(o.Dio, {
                    size: 'custom',
                    width: 16,
                    height: 16,
                    name: 'x'
                })
            }),
            (0, i.jsx)('img', {
                className: p.uploadedImg,
                src: t,
                alt: ''
            }),
            (0, i.jsxs)('div', {
                className: p.uploadedControls,
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
        className: p.flex,
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
        className: p.hexInput,
        children: [
            (0, i.jsx)(o.Text, {
                variant: 'text-sm/normal',
                children: t
            }),
            (0, i.jsx)('input', {
                onChange: (e) => {
                    n(e.target.value);
                },
                className: p.inputs,
                placeholder: '#000000'
            })
        ]
    });
}
function T(e) {
    let { nameplate: t } = e,
        n = (0, l.e7)([m.default], () => m.default.getCurrentUser());
    return (0, i.jsx)('div', {
        className: p.preview,
        children: (0, i.jsxs)('div', {
            className: p.simArea,
            children: [
                (0, i.jsx)(o.Text, {
                    className: p.label,
                    variant: 'text-sm/semibold',
                    children: 'DEFAULT'
                }),
                (0, i.jsx)(c.Z, {
                    nameplate: t,
                    user: n,
                    currentUser: n
                }),
                (0, i.jsx)(o.Text, {
                    className: p.label,
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
function S(e) {
    let { nameplate: t } = e;
    return (0, i.jsx)('div', {
        className: a()(p.preview, p.resizer),
        children: (0, i.jsxs)('div', {
            className: p.simArea,
            children: [
                (0, i.jsx)(o.Text, {
                    className: p.label,
                    variant: 'text-sm/semibold',
                    children: 'DEFAULT'
                }),
                (0, i.jsx)(N.Z, { nameplate: t }),
                (0, i.jsx)(o.Text, {
                    className: p.label,
                    variant: 'text-sm/semibold',
                    children: 'FOCUSED'
                }),
                (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(N.Z, {
                            selected: !0,
                            nameplate: t
                        }),
                        (0, i.jsx)(N.Z, { selected: !0 })
                    ]
                })
            ]
        })
    });
}
function I(e) {
    let { nameplate: t } = e;
    return (0, i.jsx)('div', {
        className: p.rtcSim,
        children: (0, i.jsx)(h.Z, { nameplate: t })
    });
}
