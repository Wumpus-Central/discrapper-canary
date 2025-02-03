n.d(t, { Z: () => g }), n(47120), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648), n(653041);
var i = n(200651),
    s = n(192379),
    r = n(442837),
    l = n(481060),
    a = n(276264),
    o = n(205822),
    c = n(329013),
    d = n(594174),
    u = n(190624),
    m = n(731994),
    h = n(421794);
function g() {
    var e;
    let [t, n] = (0, s.useState)(!1),
        [r, a] = (0, s.useState)(!1),
        [d, g] = (0, s.useState)(null),
        [C, f] = (0, s.useState)([]),
        T = (0, s.useCallback)((e) => {
            g((t) =>
                null == t
                    ? { src: e }
                    : {
                          ...t,
                          src: e
                      }
            );
        }, []),
        N = (0, s.useCallback)((e) => {
            g((t) =>
                null == t
                    ? { animatedSrc: e }
                    : {
                          ...t,
                          animatedSrc: e
                      }
            );
        }, []),
        I = (0, s.useCallback)((e) => {
            f((t) => t.filter((t) => t !== e));
        }, []);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: h.controls,
                children: [
                    (0, i.jsxs)('div', {
                        className: h.toggles,
                        children: [
                            (0, i.jsx)(l.zxk, {
                                className: h.toggleButton,
                                size: l.PhG.SMALL,
                                onClick: () => {
                                    a(!1), n((e) => !e);
                                },
                                color: l.Ttl.PRIMARY,
                                children: 'Toggle Themes'
                            }),
                            (0, i.jsx)(l.zxk, {
                                className: h.toggleButton,
                                size: l.PhG.SMALL,
                                onClick: () => {
                                    n(!1), a((e) => !e);
                                },
                                color: l.Ttl.PRIMARY,
                                children: 'Toggle Gradients'
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: h.themePicker,
                        children: [
                            t && (0, i.jsx)(c.i, {}),
                            ' ',
                            r &&
                                (0, i.jsx)(u.Z, {
                                    selected: null == d ? void 0 : null === (e = d.palette) || void 0 === e ? void 0 : e.name,
                                    onSelect: (e) => {
                                        g((t) =>
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
                className: h.main,
                children: [
                    (0, i.jsx)('div', { children: (0, i.jsx)(E, { namePlate: d }) }),
                    (0, i.jsxs)('div', {
                        className: h.buttons,
                        children: [
                            (0, i.jsx)(l.Text, {
                                variant: 'text-sm/semibold',
                                children: 'Drag background image to screen'
                            }),
                            (0, i.jsx)(o.Z, {
                                title: 'upload image',
                                description: 'upload the background',
                                icons: m.pA,
                                onDrop: (e) => {
                                    let t = URL.createObjectURL(e[0]);
                                    f((e) => {
                                        let n = Array.from(e);
                                        return n.push(t), n;
                                    });
                                }
                            }),
                            (0, i.jsx)('div', {
                                className: h.uploadedArea,
                                children: C.map((e) =>
                                    (0, i.jsx)(
                                        _,
                                        {
                                            src: e,
                                            onSetStatic: T,
                                            onSetAnimated: N,
                                            removeAsset: I
                                        },
                                        e
                                    )
                                )
                            }),
                            (0, i.jsx)(p, {
                                label: 'border color',
                                onChange: (e) =>
                                    g((t) =>
                                        null == t
                                            ? { borderColor: e }
                                            : {
                                                  ...t,
                                                  borderColor: e
                                              }
                                    )
                            }),
                            (0, i.jsx)(x, {
                                label: 'set',
                                onClick: () => {}
                            }),
                            (0, i.jsx)(x, {
                                label: 'share',
                                onClick: () => {}
                            }),
                            (0, i.jsx)(x, {
                                label: 'save',
                                onClick: () => {}
                            }),
                            (0, i.jsx)(x, {
                                label: 'sell',
                                onClick: () => {}
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function _(e) {
    let { src: t, onSetStatic: n, onSetAnimated: s, removeAsset: r } = e;
    return (0, i.jsxs)('div', {
        className: h.uploaded,
        children: [
            (0, i.jsx)(l.P3F, {
                onClick: () => r(t),
                className: h.xicon,
                children: (0, i.jsx)(l.Dio, {
                    size: 'custom',
                    width: 16,
                    height: 16,
                    name: 'x'
                })
            }),
            (0, i.jsx)('img', {
                className: h.uploadedImg,
                src: t,
                alt: ''
            }),
            (0, i.jsxs)('div', {
                className: h.uploadedControls,
                children: [
                    (0, i.jsx)(l.zxk, {
                        onClick: () => n(t),
                        size: l.PhG.TINY,
                        color: l.Ttl.PRIMARY,
                        children: 'set static'
                    }),
                    (0, i.jsx)(l.zxk, {
                        onClick: () => s(t),
                        size: l.PhG.TINY,
                        color: l.Ttl.PRIMARY,
                        children: 'set animated'
                    })
                ]
            })
        ]
    });
}
function x(e) {
    let { label: t, onClick: n } = e;
    return (0, i.jsxs)('div', {
        className: h.flex,
        children: [
            (0, i.jsx)(l.Text, {
                variant: 'text-sm/normal',
                children: 'coming soon'
            }),
            (0, i.jsx)(l.zxk, {
                disabled: !0,
                size: l.PhG.SMALL,
                color: l.Ttl.PRIMARY,
                onClick: n,
                children: t
            })
        ]
    });
}
function p(e) {
    let { label: t, onChange: n } = e;
    return (0, i.jsxs)('div', {
        className: h.hexInput,
        children: [
            (0, i.jsx)(l.Text, {
                variant: 'text-sm/normal',
                children: t
            }),
            (0, i.jsx)('input', {
                onChange: (e) => {
                    n(e.target.value);
                },
                className: h.inputs,
                placeholder: '#000000'
            })
        ]
    });
}
function E(e) {
    let { namePlate: t } = e,
        n = (0, r.e7)([d.default], () => d.default.getCurrentUser());
    return (0, i.jsxs)('div', {
        className: h.preview,
        children: [
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(l.Text, {
                        variant: 'text-sm/semibold',
                        children: 'DEFAULT'
                    }),
                    (0, i.jsx)(a.Z, {
                        namePlate: t,
                        user: n,
                        currentUser: n
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(l.Text, {
                        variant: 'text-sm/semibold',
                        children: 'FOCUSED'
                    }),
                    (0, i.jsx)(a.Z, {
                        namePlate: t,
                        selected: !0,
                        user: n,
                        currentUser: n
                    })
                ]
            })
        ]
    });
}
