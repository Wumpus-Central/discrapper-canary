n.d(t, { Z: () => h }), n(47120), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648), n(653041);
var i = n(200651),
    s = n(192379),
    r = n(442837),
    l = n(481060),
    a = n(276264),
    o = n(205822),
    c = n(329013),
    d = n(594174),
    u = n(731994),
    m = n(421794);
function h() {
    let [e, t] = (0, s.useState)(!1),
        [n, r] = (0, s.useState)(null),
        [a, d] = (0, s.useState)([]),
        h = (0, s.useCallback)((e) => {
            r((t) =>
                null == t
                    ? { src: e }
                    : {
                          ...t,
                          src: e
                      }
            );
        }, []),
        E = (0, s.useCallback)((e) => {
            r((t) =>
                null == t
                    ? { animatedSrc: e }
                    : {
                          ...t,
                          animatedSrc: e
                      }
            );
        }, []),
        C = (0, s.useCallback)((e) => {
            d((t) => t.filter((t) => t !== e));
        }, []);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: m.controls,
                children: [
                    (0, i.jsx)(l.zxk, {
                        className: m.themesButton,
                        onClick: () => t((e) => !e),
                        color: l.Ttl.PRIMARY,
                        children: 'Toggle Themes'
                    }),
                    e &&
                        (0, i.jsx)('div', {
                            className: m.themePicker,
                            children: (0, i.jsx)(c.i, {})
                        })
                ]
            }),
            (0, i.jsxs)('div', {
                className: m.main,
                children: [
                    (0, i.jsx)('div', { children: (0, i.jsx)(p, { namePlate: n }) }),
                    (0, i.jsxs)('div', {
                        className: m.buttons,
                        children: [
                            (0, i.jsx)(l.Text, {
                                variant: 'text-sm/semibold',
                                children: 'Drag background image to screen'
                            }),
                            (0, i.jsx)(o.Z, {
                                title: 'upload image',
                                description: 'upload the background',
                                icons: u.pA,
                                onDrop: (e) => {
                                    let t = URL.createObjectURL(e[0]);
                                    d((e) => {
                                        let n = Array.from(e);
                                        return n.push(t), n;
                                    });
                                }
                            }),
                            (0, i.jsx)('div', {
                                className: m.uploadedArea,
                                children: a.map((e) =>
                                    (0, i.jsx)(
                                        g,
                                        {
                                            src: e,
                                            onSetStatic: h,
                                            onSetAnimated: E,
                                            removeAsset: C
                                        },
                                        e
                                    )
                                )
                            }),
                            (0, i.jsx)(x, {
                                label: 'border color',
                                onChange: (e) =>
                                    r((t) =>
                                        null == t
                                            ? { borderColor: e }
                                            : {
                                                  ...t,
                                                  borderColor: e
                                              }
                                    )
                            }),
                            (0, i.jsx)(_, {
                                label: 'set',
                                onClick: () => {}
                            }),
                            (0, i.jsx)(_, {
                                label: 'share',
                                onClick: () => {}
                            }),
                            (0, i.jsx)(_, {
                                label: 'save',
                                onClick: () => {}
                            }),
                            (0, i.jsx)(_, {
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
function g(e) {
    let { src: t, onSetStatic: n, onSetAnimated: s, removeAsset: r } = e;
    return (0, i.jsxs)('div', {
        className: m.uploaded,
        children: [
            (0, i.jsx)(l.P3F, {
                onClick: () => r(t),
                className: m.xicon,
                children: (0, i.jsx)(l.Dio, {
                    size: 'custom',
                    width: 16,
                    height: 16,
                    name: 'x'
                })
            }),
            (0, i.jsx)('img', {
                className: m.uploadedImg,
                src: t,
                alt: ''
            }),
            (0, i.jsxs)('div', {
                className: m.uploadedControls,
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
function _(e) {
    let { label: t, onClick: n } = e;
    return (0, i.jsxs)('div', {
        className: m.flex,
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
function x(e) {
    let { label: t, onChange: n } = e;
    return (0, i.jsxs)('div', {
        className: m.hexInput,
        children: [
            (0, i.jsx)(l.Text, {
                variant: 'text-sm/normal',
                children: t
            }),
            (0, i.jsx)('input', {
                onChange: (e) => {
                    n(e.target.value);
                },
                className: m.inputs,
                placeholder: '#000000'
            })
        ]
    });
}
function p(e) {
    let { namePlate: t } = e,
        n = (0, r.e7)([d.default], () => d.default.getCurrentUser());
    return (0, i.jsxs)('div', {
        className: m.preview,
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
