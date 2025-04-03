n.d(t, { Z: () => D }), n(757143), n(301563), n(47120), n(13667), n(390547);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(971809),
    o = n(442837),
    c = n(844477),
    d = n(481060),
    u = n(240872),
    m = n(514361),
    g = n(705262),
    p = n(526156),
    h = n(706705),
    f = n(726985),
    b = n(981631),
    N = n(231338),
    x = n(426617);
function _(e) {
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
function E(e, t) {
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
let j = Object.keys(d.zxk.Colors).filter((e) => 'CUSTOM' !== e),
    O = Object.keys(d.zxk.Looks).filter((e) => 'BLANK' !== e),
    C = Object.keys(d.zxk.Sizes).filter((e) => 'NONE' !== e);
function S() {
    return (0, r.jsxs)('div', {
        className: x.root,
        children: [
            (0, r.jsx)(d.Qjf, {
                variant: 'primary',
                text: 'Testing',
                external: !0
            }),
            (0, r.jsx)(c.z, {
                variant: 'destructive-secondary',
                text: 'Testing',
                iconPosition: 'end',
                icon: d.XHJ
            }),
            (0, r.jsx)(Z, {}),
            (0, r.jsx)(M, {}),
            (0, r.jsx)(U, {}),
            (0, r.jsx)(L, {}),
            (0, r.jsx)(W, {}),
            (0, r.jsx)(k, {}),
            (0, r.jsx)(w, {}),
            (0, r.jsx)(G, {}),
            (0, r.jsx)(v, {}),
            (0, r.jsx)(F, {})
        ]
    });
}
function v() {
    let e = Object.keys(d.DM8);
    return (0, r.jsxs)('div', {
        className: x.section,
        children: [
            (0, r.jsx)(d.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Notice'
            }),
            (0, r.jsx)(d.Kqy, {
                gap: 16,
                children: e.map((e) =>
                    (0, r.jsx)(
                        d.qXd,
                        {
                            color: d.DM8[e],
                            children: (0, r.jsxs)('code', {
                                children: ['NoticeColors.', e]
                            })
                        },
                        e
                    )
                )
            })
        ]
    });
}
let T = ['neutral', 'blue_new', 'blurple', 'green_new', 'red_new', 'teal_new', 'yellow_new', 'orange_new', 'pink', 'purple'],
    I = ['background-surface-highest', 'background-surface-higher', 'background-surface-high', 'background-base-low', 'background-base-lower', 'background-base-lowest'],
    y = ['', 'background-mod-subtle', 'background-mod-normal', 'background-mod-strong'],
    A = ['critical', 'warning', 'positive', 'info'],
    P = ['text-default', 'text-primary', 'text-secondary', 'text-tertiary', 'text-feedback-critical', 'text-feedback-warning', 'text-feedback-positive', 'text-feedback-info', 'premium-nitro-pink-text'];
function R() {
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsx)(d.X6q, {
                variant: 'heading-xl/semibold',
                className: x.heading,
                children: 'Background Colors'
            }),
            I.map((e) =>
                (0, r.jsxs)(
                    'div',
                    {
                        className: x.palette,
                        style: {
                            backgroundColor: 'var(--'.concat(e, ')'),
                            padding: 24
                        },
                        children: [
                            (0, r.jsx)(d.Text, {
                                variant: 'text-md/medium',
                                children: e
                            }),
                            (0, r.jsx)('div', {
                                style: {
                                    display: 'grid',
                                    gap: 8,
                                    gridTemplateColumns: 'repeat(3, 1fr)'
                                },
                                children: y.map((e) =>
                                    (0, r.jsxs)(
                                        'div',
                                        {
                                            className: x.color,
                                            style: {
                                                padding: 16,
                                                background: 'var(--'.concat(e, ')')
                                            },
                                            children: [
                                                (0, r.jsx)(d.Text, {
                                                    variant: 'text-xs/semibold',
                                                    color: 'header-secondary',
                                                    children: e
                                                }),
                                                (0, r.jsx)('hr', { className: x.sectionDivider }),
                                                P.map((e) =>
                                                    (0, r.jsx)(
                                                        d.Text,
                                                        {
                                                            variant: 'text-xs/medium',
                                                            style: { color: 'var(--'.concat(e, ')') },
                                                            children: e
                                                        },
                                                        e
                                                    )
                                                )
                                            ]
                                        },
                                        e
                                    )
                                )
                            }),
                            (0, r.jsx)('hr', { className: x.sectionDivider }),
                            (0, r.jsx)('div', {
                                style: {
                                    display: 'grid',
                                    gap: 8,
                                    gridTemplateColumns: 'repeat(3, 1fr)'
                                },
                                children: A.map((e) => {
                                    let t = 'var(--text-feedback-'.concat(e, ')');
                                    return (0, r.jsxs)(
                                        'div',
                                        {
                                            className: x.color,
                                            style: {
                                                padding: 16,
                                                background: 'var(--background-feedback-'.concat(e, ')')
                                            },
                                            children: [
                                                (0, r.jsx)(d.Text, {
                                                    variant: 'text-xs/semibold',
                                                    color: 'header-secondary'
                                                }),
                                                (0, r.jsxs)(d.Kqy, {
                                                    children: [
                                                        (0, r.jsxs)(d.Text, {
                                                            variant: 'text-xs/semibold',
                                                            style: { color: t },
                                                            children: ['background-feedback-', e]
                                                        }),
                                                        (0, r.jsx)(d.Text, {
                                                            variant: 'text-xs/normal',
                                                            style: { color: t },
                                                            children: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Sem semper venenatis a quisque suspendisse urna litora.'
                                                        })
                                                    ]
                                                })
                                            ]
                                        },
                                        e
                                    );
                                })
                            })
                        ]
                    },
                    e
                )
            ),
            (0, r.jsx)(d.X6q, {
                variant: 'heading-xl/semibold',
                className: x.heading,
                children: 'Scales'
            }),
            T.map((e) =>
                (0, r.jsxs)(
                    'div',
                    {
                        className: x.palette,
                        children: [
                            (0, r.jsx)(d.Text, {
                                variant: 'text-lg/semibold',
                                children: e
                            }),
                            (0, r.jsx)('div', {
                                className: x.colors,
                                children: Array.from({ length: 100 }, (t, n) =>
                                    (0, r.jsx)(
                                        'div',
                                        {
                                            className: x.color,
                                            style: { background: 'var(--'.concat(e.replace('_', '-'), '-').concat(n + 1, ')') },
                                            children: (0, r.jsx)(d.f6W, {
                                                theme: n < 50 ? 'light' : 'dark',
                                                children: (t) =>
                                                    (0, r.jsxs)(d.Text, {
                                                        className: t,
                                                        variant: 'text-xs/medium',
                                                        children: [e, '.', n + 1]
                                                    })
                                            })
                                        },
                                        n
                                    )
                                )
                            })
                        ]
                    },
                    e
                )
            )
        ]
    });
}
function D() {
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(p.Z, {
                parentSetting: f.s6.DESIGN_SYSTEMS,
                settingsSection: b.oAB.DESIGN_SYSTEMS,
                tabs: [
                    {
                        title: 'Components',
                        component: () => (0, r.jsx)(S, {}),
                        setting: f.s6.DESIGN_SYSTEMS_COMPONENTS
                    },
                    {
                        title: 'Colors',
                        component: () => (0, r.jsx)(R, {}),
                        setting: f.s6.DESIGN_SYSTEMS_COLORS
                    },
                    {
                        title: 'Animations',
                        component: () => (0, r.jsx)(h.Z, {}),
                        setting: f.s6.ANIMATION_TESTING
                    }
                ]
            }),
            (0, r.jsx)('div', {
                className: x.themes,
                children: (0, r.jsx)(g.ZP, {
                    type: g.yH.SETTINGS,
                    children: (0, r.jsx)(g.ZP.Basic, { className: x.themeSelectionGroup })
                })
            })
        ]
    });
}
function Z() {
    let [e, t] = i.useState(!1),
        n = j.flatMap((e) => [
            ...O.map((t) =>
                (0, r.jsxs)(
                    d.zxk,
                    {
                        color: d.zxk.Colors[e],
                        look: d.zxk.Looks[t],
                        fullWidth: !0,
                        style: { textTransform: 'capitalize' },
                        children: [e.toLowerCase(), ' - ', t.toLowerCase()]
                    },
                    e + t
                )
            ),
            (0, r.jsx)('hr', { className: x.sectionDivider }, e + 'divider')
        ]),
        s = C.flatMap((e) =>
            (0, r.jsx)(d.zxk, {
                color: d.zxk.Colors.BRAND,
                look: d.zxk.Looks.FILLED,
                size: d.zxk.Sizes[e],
                fullWidth: !0,
                style: { textTransform: 'capitalize' },
                children: e.toLowerCase()
            })
        );
    return (0, r.jsxs)('div', {
        className: x.section,
        children: [
            (0, r.jsx)(d.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Buttons'
            }),
            (0, r.jsx)(d.XZJ, {
                value: e,
                onChange: (e, n) => t(n),
                children: (0, r.jsx)(d.Text, {
                    variant: 'text-md/medium',
                    children: 'Show all buttons (WIP)'
                })
            }),
            e
                ? (0, r.jsxs)('div', {
                      className: x.buttons,
                      children: [
                          (0, r.jsx)(d.f6W, {
                              theme: N.BR.DARKER,
                              children: (e) =>
                                  (0, r.jsx)('div', {
                                      className: a()(e, x.section),
                                      children: n
                                  })
                          }),
                          (0, r.jsx)(d.f6W, {
                              theme: N.BR.LIGHT,
                              children: (e) =>
                                  (0, r.jsx)('div', {
                                      className: a()(e, x.section),
                                      children: n
                                  })
                          }),
                          (0, r.jsx)(d.f6W, {
                              theme: N.BR.DARKER,
                              children: (e) =>
                                  (0, r.jsxs)('div', {
                                      className: a()(e, x.section),
                                      children: [
                                          (0, r.jsx)(d.zxk, {
                                              color: d.zxk.Colors.BRAND,
                                              look: d.zxk.Looks.FILLED,
                                              disabled: !0,
                                              children: 'Disabled'
                                          }),
                                          s
                                      ]
                                  })
                          }),
                          (0, r.jsx)(d.f6W, {
                              theme: N.BR.LIGHT,
                              children: (e) =>
                                  (0, r.jsxs)('div', {
                                      className: a()(e, x.section),
                                      children: [
                                          (0, r.jsx)(d.zxk, {
                                              color: d.zxk.Colors.BRAND,
                                              look: d.zxk.Looks.FILLED,
                                              disabled: !0,
                                              children: 'Disabled'
                                          }),
                                          s
                                      ]
                                  })
                          })
                      ]
                  })
                : null,
            (0, r.jsx)('div', {
                style: { display: 'flex' },
                children: (0, r.jsx)(d.zxk, {
                    color: d.zxk.Colors.BRAND,
                    look: d.zxk.Looks.FILLED,
                    size: d.zxk.Sizes.TINY,
                    children: 'Tiny'
                })
            }),
            (0, r.jsx)('div', {
                style: { display: 'flex' },
                children: (0, r.jsx)(d.zxk, {
                    color: d.zxk.Colors.BRAND,
                    look: d.zxk.Looks.FILLED,
                    size: d.zxk.Sizes.SMALL,
                    children: 'Small'
                })
            }),
            (0, r.jsx)('div', {
                style: { display: 'flex' },
                children: (0, r.jsx)(d.zxk, {
                    color: d.zxk.Colors.BRAND,
                    look: d.zxk.Looks.FILLED,
                    size: d.zxk.Sizes.MEDIUM,
                    children: 'Medium'
                })
            }),
            (0, r.jsx)('div', {
                style: { display: 'flex' },
                children: (0, r.jsx)(d.zxk, {
                    color: d.zxk.Colors.BRAND,
                    look: d.zxk.Looks.FILLED,
                    size: d.zxk.Sizes.LARGE,
                    children: 'Large'
                })
            }),
            (0, r.jsx)(B, {})
        ]
    });
}
function w() {
    let [e, t] = i.useState('1');
    return (0, r.jsxs)('div', {
        className: x.section,
        children: [
            (0, r.jsx)(d.X6q, {
                variant: 'heading-xl/semibold',
                children: 'TabBar'
            }),
            (0, r.jsxs)(d.njP, {
                type: 'top',
                look: 'brand',
                selectedItem: e,
                onItemSelect: (e) => t(e),
                className: x.tabBar,
                children: [
                    (0, r.jsx)(d.njP.Item, {
                        id: '1',
                        children: 'Tab 1'
                    }),
                    (0, r.jsx)(d.njP.Item, {
                        id: '2',
                        children: 'Tab 2'
                    }),
                    (0, r.jsx)(d.njP.Item, {
                        id: '3',
                        children: 'Tab 3'
                    })
                ]
            }),
            (0, r.jsxs)(d.Text, {
                variant: 'text-md/medium',
                children: ['Selected tab: ', e]
            })
        ]
    });
}
function k() {
    let [e, t] = i.useState(1),
        [n, s] = i.useState(!1),
        [a, l] = i.useState(5),
        [o, c] = i.useState(!1);
    return (0, r.jsxs)('div', {
        className: x.section,
        children: [
            (0, r.jsx)(d.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Context Menus'
            }),
            (0, r.jsx)('span', {
                children: (0, r.jsx)(d.yRy, {
                    shouldShow: o,
                    renderPopout: () =>
                        (0, r.jsxs)(d.v2r, {
                            navId: 'demo',
                            'aria-label': 'Demo Actions',
                            onClose: () => null,
                            onSelect: () => null,
                            children: [
                                (0, r.jsxs)(d.kSQ, {
                                    label: 'Basic items',
                                    children: [
                                        (0, r.jsx)(d.sNh, {
                                            id: 'first',
                                            label: 'An option'
                                        }),
                                        (0, r.jsx)(d.sNh, {
                                            id: 'second',
                                            label: 'An option with an icon',
                                            icon: d.kBi
                                        }),
                                        (0, r.jsxs)(d.sNh, {
                                            id: 'item-with-submenu',
                                            label: 'Item with submenu',
                                            children: [
                                                (0, r.jsx)(d.sNh, {
                                                    id: 'subitem-1',
                                                    label: 'Subitem 1'
                                                }),
                                                (0, r.jsx)(d.sNh, {
                                                    id: 'subitem-2',
                                                    label: 'Subitem 2'
                                                }),
                                                (0, r.jsx)(d.sNh, {
                                                    id: 'subitem-3',
                                                    label: 'Subitem 3'
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, r.jsxs)(d.kSQ, {
                                    label: 'Inputs',
                                    children: [
                                        (0, r.jsx)(d.S89, {
                                            id: 'checkable',
                                            label: 'Checkbox',
                                            checked: n,
                                            action: () => s(!n)
                                        }),
                                        (0, r.jsx)(d.k5B, {
                                            id: 'radio-one',
                                            group: 'a-group',
                                            label: 'Radio 1',
                                            action: () => t(1),
                                            checked: 1 === e
                                        }),
                                        (0, r.jsx)(d.k5B, {
                                            id: 'radio-two',
                                            group: 'a-group',
                                            label: 'Radio 2',
                                            action: () => t(2),
                                            checked: 2 === e
                                        }),
                                        (0, r.jsx)(d.k5B, {
                                            id: 'radio-three',
                                            group: 'a-group',
                                            label: 'Radio 3',
                                            action: () => t(3),
                                            checked: 3 === e
                                        }),
                                        (0, r.jsx)(d.II_, {
                                            id: 'slider',
                                            label: 'Slider',
                                            control: (e, t) =>
                                                (0, r.jsx)(d._wy, {
                                                    ref: t,
                                                    value: a,
                                                    minValue: 0,
                                                    maxValue: 100,
                                                    onChange: (e) => l(e),
                                                    'aria-label': 'Slider'
                                                })
                                        })
                                    ]
                                }),
                                (0, r.jsx)(d.Clw, {}),
                                (0, r.jsx)(d.sNh, {
                                    id: 'danger',
                                    label: 'A destructive option',
                                    color: 'danger',
                                    icon: d.XHJ
                                })
                            ]
                        }),
                    children: () =>
                        (0, r.jsx)(d.zxk, {
                            onClick: () => c(!o),
                            children: 'Toggle context menu'
                        })
                })
            })
        ]
    });
}
function W() {
    return (0, r.jsxs)('div', {
        className: x.section,
        children: [
            (0, r.jsx)(d.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Tooltips'
            }),
            (0, r.jsxs)('div', {
                style: {
                    display: 'flex',
                    gap: 8,
                    flexWrap: 'wrap'
                },
                children: [
                    (0, r.jsx)(d.ua7, {
                        text: "Here's top aligned tooltip text!",
                        position: 'top',
                        children: (e) => (0, r.jsx)(d.zxk, E(_({}, e), { children: 'Tooltip on the top' }))
                    }),
                    (0, r.jsx)(d.ua7, {
                        text: "Here's right aligned tooltip text!",
                        position: 'left',
                        children: (e) => (0, r.jsx)(d.zxk, E(_({}, e), { children: 'Tooltip on the left' }))
                    }),
                    (0, r.jsx)(d.ua7, {
                        text: "Here's bottom aligned tooltip text!",
                        position: 'bottom',
                        children: (e) => (0, r.jsx)(d.zxk, E(_({}, e), { children: 'Tooltip on the bottom' }))
                    }),
                    (0, r.jsx)(d.ua7, {
                        text: "Here's right aligned tooltip text!",
                        position: 'right',
                        children: (e) => (0, r.jsx)(d.zxk, E(_({}, e), { children: 'Tooltip on the right' }))
                    })
                ]
            }),
            (0, r.jsx)('div', {})
        ]
    });
}
function L() {
    let [e, t] = i.useState(!1),
        [n, s] = i.useState(!1),
        [a, l] = i.useState('auto');
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: x.section,
                children: [
                    (0, r.jsx)(d.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Checkboxes'
                    }),
                    (0, r.jsx)(d.XZJ, {
                        value: e,
                        onChange: (e, n) => t(n),
                        children: (0, r.jsx)(d.Text, {
                            variant: 'text-md/medium',
                            children: 'Checkbox input'
                        })
                    }),
                    (0, r.jsx)(d.XZJ, {
                        value: e,
                        onChange: (e, n) => t(n),
                        disabled: !0,
                        children: (0, r.jsx)(d.Text, {
                            variant: 'text-md/medium',
                            children: 'Disabled checkbox'
                        })
                    }),
                    (0, r.jsx)(d.XZJ, {
                        value: e,
                        onChange: (e, n) => t(n),
                        readOnly: !0,
                        children: (0, r.jsx)(d.Text, {
                            variant: 'text-md/medium',
                            children: 'Read-only checkbox'
                        })
                    }),
                    (0, r.jsx)(d.XZJ, {
                        value: e,
                        onChange: (e, n) => t(n),
                        type: d.XZJ.Types.ROW,
                        children: (0, r.jsx)(d.Text, {
                            variant: 'text-md/medium',
                            children: 'Checkbox row'
                        })
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: x.section,
                children: [
                    (0, r.jsx)(d.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Switches'
                    }),
                    (0, r.jsx)(d.j7V, {
                        hideBorder: !0,
                        value: n,
                        onChange: (e) => s(e),
                        children: 'FormSwitch with a label'
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: x.section,
                children: [
                    (0, r.jsx)(d.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Radio Buttons'
                    }),
                    (0, r.jsx)(d.xJW, {
                        children: (0, r.jsx)(d.FXm, {
                            onChange: (e) => {
                                let { value: t } = e;
                                return l(t);
                            },
                            options: [
                                {
                                    value: 'auto',
                                    name: 'Auto'
                                },
                                {
                                    value: '720p',
                                    name: '720p'
                                },
                                {
                                    value: '1080p',
                                    name: '1080p'
                                }
                            ],
                            value: a
                        })
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: x.section,
                children: [
                    (0, r.jsx)(d.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Slider'
                    }),
                    (0, r.jsxs)('div', {
                        className: x.slider,
                        children: [
                            (0, r.jsx)(d.Text, {
                                variant: 'text-md/medium',
                                children: 'Standard slider'
                            }),
                            (0, r.jsx)(d.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                defaultValue: 50,
                                markers: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
                            })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: x.slider,
                        children: [
                            (0, r.jsx)(d.Text, {
                                variant: 'text-md/medium',
                                children: 'Sticky markers'
                            }),
                            (0, r.jsx)(d.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                markers: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
                                stickToMarkers: !0
                            })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: x.slider,
                        children: [
                            (0, r.jsx)(d.Text, {
                                variant: 'text-md/medium',
                                children: 'Non-uniform markers'
                            }),
                            (0, r.jsx)(d.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                markers: [0, 20, 50, 100],
                                equidistant: !1
                            })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: x.slider,
                        children: [
                            (0, r.jsx)(d.Text, {
                                variant: 'text-md/medium',
                                children: 'Non-uniform equidistant markers'
                            }),
                            (0, r.jsx)(d.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                markers: [0, 20, 50, 100],
                                equidistant: !0
                            })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: x.slider,
                        children: [
                            (0, r.jsx)(d.Text, {
                                variant: 'text-md/medium',
                                children: 'No markers'
                            }),
                            (0, r.jsx)(d.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50
                            })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: x.slider,
                        children: [
                            (0, r.jsx)(d.Text, {
                                variant: 'text-md/medium',
                                children: 'Mini slider'
                            }),
                            (0, r.jsx)(d.iRW, {
                                mini: !0,
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function B() {
    return (0, r.jsxs)('div', {
        className: x.shinyButtonExamples,
        children: [
            (0, r.jsx)(d.gtL, {
                size: d.zxk.Sizes.MEDIUM,
                shineSize: d.gtL.ShineSizes.SMALL,
                onClick: () => {},
                children: 'Shiny Button'
            }),
            (0, r.jsx)(d.gtL, {
                size: d.zxk.Sizes.MEDIUM,
                shineSize: d.gtL.ShineSizes.SMALL,
                onlyShineOnHover: !0,
                onClick: () => {},
                children: 'Shine on Hover'
            })
        ]
    });
}
function M() {
    let [e, t] = i.useState(null),
        [n, s] = i.useState(null),
        [a, o] = i.useState([]),
        [c, u] = i.useState([]),
        [m, g] = i.useState([]);
    return (0, r.jsxs)('div', {
        className: x.searchableSelectExamples,
        children: [
            (0, r.jsx)(d.X6q, {
                variant: 'heading-xl/semibold',
                children: 'SearchableSelect'
            }),
            (0, r.jsx)(d.VcW, {
                placeholder: 'Single select',
                value: e,
                onChange: (e) => t(e),
                options: l.G
            }),
            (0, r.jsx)(d.VcW, {
                placeholder: 'Single select (clearable)',
                clearable: !0,
                value: n,
                onChange: (e) => s(e),
                options: l.G
            }),
            (0, r.jsx)(d.VcW, {
                placeholder: 'Multi select',
                multi: !0,
                value: a,
                onChange: (e) => o(e),
                options: l.G
            }),
            (0, r.jsx)(d.VcW, {
                placeholder: 'Multi select (clearable)',
                multi: !0,
                clearable: !0,
                value: m,
                onChange: (e) => g(e),
                options: l.G
            }),
            (0, r.jsx)(d.VcW, {
                placeholder: 'Multi select (custom pills)',
                multi: !0,
                value: c,
                onChange: (e) => u(e),
                options: l.G,
                hidePills: !0,
                customPillContainerClassName: x.customPillContainer,
                renderCustomPill: (e) =>
                    (0, r.jsx)('div', {
                        style: {
                            padding: 8,
                            border: '1px solid var(--bg-brand)',
                            borderRadius: 8
                        },
                        children: (0, r.jsx)(d.Text, {
                            variant: 'text-md/bold',
                            children: e.label
                        })
                    })
            })
        ]
    });
}
function U() {
    let [e, t] = i.useState(''),
        [n, s] = i.useState(''),
        [a, l] = i.useState('');
    return (0, r.jsxs)('div', {
        className: x.section,
        children: [
            (0, r.jsx)(d.X6q, {
                variant: 'heading-xl/semibold',
                children: 'TextInput'
            }),
            (0, r.jsx)(d.xJW, {
                children: (0, r.jsx)(d.E1j, {
                    size: d.E1j.Sizes.MEDIUM,
                    placeholder: 'Search...',
                    onChange: (e) => l(e),
                    query: a,
                    onClear: () => l('')
                })
            }),
            (0, r.jsx)(d.xJW, {
                title: 'Disabled',
                disabled: !0,
                children: (0, r.jsx)(d.oil, {
                    placeholder: 'Disabled',
                    disabled: !0
                })
            }),
            (0, r.jsx)(d.xJW, {
                title: 'Error',
                children: (0, r.jsx)(d.oil, {
                    required: !0,
                    error: 'This must have a value'
                })
            }),
            (0, r.jsx)(d.xJW, {
                title: 'Error',
                children: (0, r.jsx)(d.oil, {
                    defaultValue: 'Not a valid value',
                    error: 'This has an error.'
                })
            }),
            (0, r.jsx)(d.xJW, {
                title: 'Read only',
                children: (0, r.jsx)(d.oil, {
                    value: 'Read-only, not-editable field',
                    editable: !1
                })
            }),
            (0, r.jsx)(d.xJW, {
                title: 'Input with a label',
                children: (0, r.jsx)(d.oil, {
                    placeholder: 'Real placeholder',
                    value: e,
                    onChange: t
                })
            }),
            (0, r.jsx)(d.xJW, {
                title: 'Text area',
                children: (0, r.jsx)(d.Kx8, {
                    placeholder: 'Text area placeholder',
                    showCharacterCount: !0,
                    value: n,
                    onChange: s
                })
            })
        ]
    });
}
function V(e) {
    let { transitionState: t } = e,
        [n, s] = i.useState(!1),
        [a, l] = i.useState(d.CgR.SMALL),
        [o, c] = i.useState(!1),
        u = n ? x.modalOutlines : '';
    return (0, r.jsxs)(d.Y0X, {
        transitionState: t,
        size: a,
        children: [
            (0, r.jsx)(d.xBx, {
                className: u,
                children: (0, r.jsx)(d.X6q, {
                    variant: 'heading-xl/semibold',
                    children: 'Modal'
                })
            }),
            (0, r.jsx)(d.hzk, {
                className: u,
                children: (0, r.jsxs)(d.Kqy, {
                    gap: 16,
                    children: [
                        (0, r.jsx)(d.xJW, {
                            title: 'Modal Size',
                            children: (0, r.jsx)(d.q4e, {
                                value: a,
                                onChange: l,
                                options: Object.entries(d.CgR).map((e) => {
                                    let [t, n] = e;
                                    return {
                                        label: t,
                                        value: n
                                    };
                                })
                            })
                        }),
                        (0, r.jsx)(d.hjN, {
                            title: 'Options',
                            children: (0, r.jsxs)(d.Kqy, {
                                gap: 16,
                                children: [
                                    (0, r.jsx)(d.XZJ, {
                                        value: n,
                                        onChange: (e, t) => s(t),
                                        children: (0, r.jsx)(d.Text, {
                                            variant: 'text-md/medium',
                                            children: 'Show Section Outlines'
                                        })
                                    }),
                                    (0, r.jsx)(d.XZJ, {
                                        value: o,
                                        onChange: (e, t) => c(t),
                                        children: (0, r.jsx)(d.Text, {
                                            variant: 'text-md/medium',
                                            children: 'Show secondary action in footer'
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            (0, r.jsx)(d.mzw, {
                className: u,
                children: (0, r.jsxs)(d.Kqy, {
                    direction: 'horizontal',
                    justify: 'end',
                    gap: 8,
                    children: [
                        o &&
                            (0, r.jsx)(d.zxk, {
                                color: d.zxk.Colors.PRIMARY,
                                look: d.zxk.Looks.FILLED,
                                children: 'Secondary Action'
                            }),
                        (0, r.jsx)(d.zxk, { children: 'Close' })
                    ]
                })
            })
        ]
    });
}
function G() {
    return (0, r.jsxs)('div', {
        className: x.section,
        children: [
            (0, r.jsx)(d.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Modals'
            }),
            (0, r.jsx)(d.zxk, {
                onClick: () => {
                    (0, d.h7j)((e) => (0, r.jsx)(V, _({}, e)));
                },
                children: 'Open modal'
            }),
            (0, r.jsx)(d.zxk, {
                onClick: () => {
                    u.Z.show({
                        title: 'Alert',
                        body: 'This is an alert',
                        confirmText: 'Confirm Text',
                        cancelText: 'Cancel Text'
                    });
                },
                children: 'Show Alert'
            })
        ]
    });
}
function F() {
    let e = (0, o.e7)([m.Z], () => m.Z.gradientPreset);
    return (0, r.jsx)(d.f6W, {
        theme: N.BR.DARKER,
        disableAdaptiveTheme: !0,
        children: (t) =>
            (0, r.jsxs)('div', {
                className: a()(t, x.section),
                children: [
                    (0, r.jsx)(d.zxk, {
                        color: d.zxk.Colors.PRIMARY,
                        look: d.zxk.Looks.FILLED,
                        fullWidth: !0,
                        children: 'Button'
                    }),
                    (0, r.jsx)(d.f6W, {
                        theme: N.BR.LIGHT,
                        children: (t) =>
                            (0, r.jsxs)('div', {
                                className: a()(t, x.section),
                                children: [
                                    (0, r.jsx)(d.zxk, {
                                        color: d.zxk.Colors.PRIMARY,
                                        look: d.zxk.Looks.FILLED,
                                        fullWidth: !0,
                                        children: 'Button'
                                    }),
                                    (0, r.jsx)(d.f6W, {
                                        theme: N.BR.DARKER,
                                        children: (e) =>
                                            (0, r.jsx)('div', {
                                                className: a()(e, x.section),
                                                children: (0, r.jsx)(d.zxk, {
                                                    color: d.zxk.Colors.PRIMARY,
                                                    look: d.zxk.Looks.FILLED,
                                                    fullWidth: !0,
                                                    children: 'Button'
                                                })
                                            })
                                    }),
                                    (0, r.jsx)(d.f6W, {
                                        gradient: e,
                                        children: (e) =>
                                            (0, r.jsx)('div', {
                                                className: a()(e, x.section),
                                                children: (0, r.jsx)(d.zxk, {
                                                    color: d.zxk.Colors.PRIMARY,
                                                    look: d.zxk.Looks.FILLED,
                                                    fullWidth: !0,
                                                    children: 'Button'
                                                })
                                            })
                                    })
                                ]
                            })
                    })
                ]
            })
    });
}
