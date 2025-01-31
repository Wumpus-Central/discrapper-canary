n.d(t, { Z: () => h }), n(47120), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648);
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
        [n, r] = (0, s.useState)(null);
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
                    (0, i.jsx)('div', { children: (0, i.jsx)(_, { namePlate: n }) }),
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
                                    r((e) =>
                                        null == e
                                            ? { src: t }
                                            : {
                                                  ...e,
                                                  src: t
                                              }
                                    );
                                }
                            }),
                            (0, i.jsx)(g, {
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
                            (0, i.jsxs)('div', {
                                className: m.flex,
                                children: [
                                    (0, i.jsx)(l.Text, {
                                        variant: 'text-sm/normal',
                                        children: 'coming soon'
                                    }),
                                    (0, i.jsx)(l.zxk, {
                                        size: l.PhG.SMALL,
                                        color: l.Ttl.PRIMARY,
                                        disabled: !0,
                                        children: 'share'
                                    })
                                ]
                            }),
                            (0, i.jsxs)('div', {
                                className: m.flex,
                                children: [
                                    (0, i.jsx)(l.Text, {
                                        variant: 'text-sm/normal',
                                        children: 'coming soon'
                                    }),
                                    (0, i.jsx)(l.zxk, {
                                        size: l.PhG.SMALL,
                                        color: l.Ttl.PRIMARY,
                                        disabled: !0,
                                        children: 'save'
                                    })
                                ]
                            }),
                            (0, i.jsxs)('div', {
                                className: m.flex,
                                children: [
                                    (0, i.jsx)(l.Text, {
                                        variant: 'text-sm/normal',
                                        children: 'coming soon'
                                    }),
                                    (0, i.jsx)(l.zxk, {
                                        size: l.PhG.SMALL,
                                        color: l.Ttl.PRIMARY,
                                        disabled: !0,
                                        children: 'sell'
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function g(e) {
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
function _(e) {
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
