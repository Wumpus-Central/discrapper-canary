n.d(t, { Z: () => L }), n(704826), n(35282), n(388685), n(361932), n(187205);
var i = n(255367),
    r = n(73800),
    s = n(120356),
    l = n.n(s),
    a = n(971809),
    o = n(442837),
    c = n(844477),
    d = n(257465),
    u = n(369585),
    m = n(530392),
    g = n(37148),
    p = n(481060),
    h = n(240872),
    f = n(514361),
    b = n(705262),
    _ = n(526156),
    x = n(706705),
    E = n(726985),
    C = n(981631),
    j = n(231338),
    O = n(426617);
function S(e) {
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
function v(e, t) {
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
let T = Object.keys(p.zxk.Colors).filter((e) => 'CUSTOM' !== e),
    I = Object.keys(p.zxk.Looks).filter((e) => 'BLANK' !== e),
    N = Object.keys(p.zxk.Sizes).filter((e) => 'NONE' !== e);
function y() {
    return (0, i.jsxs)('div', {
        className: O.root,
        children: [
            (0, i.jsx)(p.Qjf, {
                variant: 'primary',
                text: 'Testing',
                external: !0
            }),
            (0, i.jsx)(c.z, {
                variant: 'destructive-secondary',
                text: 'Testing',
                iconPosition: 'end',
                icon: p.XHJ
            }),
            (0, i.jsx)(B, {}),
            (0, i.jsx)(z, {}),
            (0, i.jsx)(Y, {}),
            (0, i.jsx)(F, {}),
            (0, i.jsx)(G, {}),
            (0, i.jsx)(V, {}),
            (0, i.jsx)(U, {}),
            (0, i.jsx)(X, {}),
            (0, i.jsx)(A, {}),
            (0, i.jsx)(Q, {})
        ]
    });
}
function A() {
    let e = Object.keys(p.DM8);
    return (0, i.jsxs)('div', {
        className: O.section,
        children: [
            (0, i.jsx)(p.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Notice'
            }),
            (0, i.jsx)(p.Kqy, {
                gap: 16,
                children: e.map((e) =>
                    (0, i.jsx)(
                        p.qXd,
                        {
                            color: p.DM8[e],
                            children: (0, i.jsxs)('code', {
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
let P = ['neutral', 'blue_new', 'blurple', 'green_new', 'red_new', 'teal_new', 'yellow_new', 'orange_new', 'pink', 'purple'],
    R = ['background-surface-highest', 'background-surface-higher', 'background-surface-high', 'background-base-low', 'background-base-lower', 'background-base-lowest'],
    D = ['', 'background-mod-subtle', 'background-mod-normal', 'background-mod-strong'],
    Z = ['critical', 'warning', 'positive', 'info'],
    w = ['text-default', 'text-primary', 'text-secondary', 'text-tertiary', 'text-feedback-critical', 'text-feedback-warning', 'text-feedback-positive', 'text-feedback-info', 'premium-nitro-pink-text'];
function k() {
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(p.X6q, {
                variant: 'heading-xl/semibold',
                className: O.heading,
                children: 'Background Colors'
            }),
            R.map((e) =>
                (0, i.jsxs)(
                    'div',
                    {
                        className: O.palette,
                        style: {
                            backgroundColor: 'var(--'.concat(e, ')'),
                            padding: 24
                        },
                        children: [
                            (0, i.jsx)(p.Text, {
                                variant: 'text-md/medium',
                                children: e
                            }),
                            (0, i.jsx)('div', {
                                style: {
                                    display: 'grid',
                                    gap: 8,
                                    gridTemplateColumns: 'repeat(3, 1fr)'
                                },
                                children: D.map((e) =>
                                    (0, i.jsxs)(
                                        'div',
                                        {
                                            className: O.color,
                                            style: {
                                                padding: 16,
                                                background: 'var(--'.concat(e, ')')
                                            },
                                            children: [
                                                (0, i.jsx)(p.Text, {
                                                    variant: 'text-xs/semibold',
                                                    color: 'header-secondary',
                                                    children: e
                                                }),
                                                (0, i.jsx)('hr', { className: O.sectionDivider }),
                                                w.map((e) =>
                                                    (0, i.jsx)(
                                                        p.Text,
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
                            (0, i.jsx)('hr', { className: O.sectionDivider }),
                            (0, i.jsx)('div', {
                                style: {
                                    display: 'grid',
                                    gap: 8,
                                    gridTemplateColumns: 'repeat(3, 1fr)'
                                },
                                children: Z.map((e) => {
                                    let t = 'var(--text-feedback-'.concat(e, ')');
                                    return (0, i.jsxs)(
                                        'div',
                                        {
                                            className: O.color,
                                            style: {
                                                padding: 16,
                                                background: 'var(--background-feedback-'.concat(e, ')')
                                            },
                                            children: [
                                                (0, i.jsx)(p.Text, {
                                                    variant: 'text-xs/semibold',
                                                    color: 'header-secondary'
                                                }),
                                                (0, i.jsxs)(p.Kqy, {
                                                    children: [
                                                        (0, i.jsxs)(p.Text, {
                                                            variant: 'text-xs/semibold',
                                                            style: { color: t },
                                                            children: ['background-feedback-', e]
                                                        }),
                                                        (0, i.jsx)(p.Text, {
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
            (0, i.jsx)(p.X6q, {
                variant: 'heading-xl/semibold',
                className: O.heading,
                children: 'Scales'
            }),
            P.map((e) =>
                (0, i.jsxs)(
                    'div',
                    {
                        className: O.palette,
                        children: [
                            (0, i.jsx)(p.Text, {
                                variant: 'text-lg/semibold',
                                children: e
                            }),
                            (0, i.jsx)('div', {
                                className: O.colors,
                                children: Array.from({ length: 100 }, (t, n) =>
                                    (0, i.jsx)(
                                        'div',
                                        {
                                            className: O.color,
                                            style: { background: 'var(--'.concat(e.replace('_', '-'), '-').concat(n + 1, ')') },
                                            children: (0, i.jsx)(p.f6W, {
                                                theme: n < 50 ? 'light' : 'dark',
                                                children: (t) =>
                                                    (0, i.jsxs)(p.Text, {
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
function L() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(_.Z, {
                parentSetting: E.s6.DESIGN_SYSTEMS,
                settingsSection: C.oAB.DESIGN_SYSTEMS,
                tabs: [
                    {
                        title: 'Components',
                        component: () => (0, i.jsx)(y, {}),
                        setting: E.s6.DESIGN_SYSTEMS_COMPONENTS
                    },
                    {
                        title: 'Colors',
                        component: () => (0, i.jsx)(k, {}),
                        setting: E.s6.DESIGN_SYSTEMS_COLORS
                    },
                    {
                        title: 'Animations',
                        component: () => (0, i.jsx)(x.Z, {}),
                        setting: E.s6.ANIMATION_TESTING
                    }
                ]
            }),
            (0, i.jsx)('div', {
                className: O.themes,
                children: (0, i.jsx)(b.ZP, {
                    type: b.yH.SETTINGS,
                    children: (0, i.jsx)(b.ZP.Basic, { className: O.themeSelectionGroup })
                })
            })
        ]
    });
}
function B() {
    let [e, t] = r.useState(!1),
        n = T.flatMap((e) => [
            ...I.map((t) =>
                (0, i.jsxs)(
                    p.zxk,
                    {
                        color: p.zxk.Colors[e],
                        look: p.zxk.Looks[t],
                        fullWidth: !0,
                        style: { textTransform: 'capitalize' },
                        children: [e.toLowerCase(), ' - ', t.toLowerCase()]
                    },
                    e + t
                )
            ),
            (0, i.jsx)('hr', { className: O.sectionDivider }, e + 'divider')
        ]),
        s = N.flatMap((e) =>
            (0, i.jsx)(p.zxk, {
                color: p.zxk.Colors.BRAND,
                look: p.zxk.Looks.FILLED,
                size: p.zxk.Sizes[e],
                fullWidth: !0,
                style: { textTransform: 'capitalize' },
                children: e.toLowerCase()
            })
        );
    return (0, i.jsxs)('div', {
        className: O.section,
        children: [
            (0, i.jsx)(p.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Buttons'
            }),
            (0, i.jsx)(p.XZJ, {
                value: e,
                onChange: (e, n) => t(n),
                children: (0, i.jsx)(p.Text, {
                    variant: 'text-md/medium',
                    children: 'Show all buttons (WIP)'
                })
            }),
            e
                ? (0, i.jsxs)('div', {
                      className: O.buttons,
                      children: [
                          (0, i.jsx)(p.f6W, {
                              theme: j.BR.DARKER,
                              children: (e) =>
                                  (0, i.jsx)('div', {
                                      className: l()(e, O.section),
                                      children: n
                                  })
                          }),
                          (0, i.jsx)(p.f6W, {
                              theme: j.BR.LIGHT,
                              children: (e) =>
                                  (0, i.jsx)('div', {
                                      className: l()(e, O.section),
                                      children: n
                                  })
                          }),
                          (0, i.jsx)(p.f6W, {
                              theme: j.BR.DARKER,
                              children: (e) =>
                                  (0, i.jsxs)('div', {
                                      className: l()(e, O.section),
                                      children: [
                                          (0, i.jsx)(p.zxk, {
                                              color: p.zxk.Colors.BRAND,
                                              look: p.zxk.Looks.FILLED,
                                              disabled: !0,
                                              children: 'Disabled'
                                          }),
                                          s
                                      ]
                                  })
                          }),
                          (0, i.jsx)(p.f6W, {
                              theme: j.BR.LIGHT,
                              children: (e) =>
                                  (0, i.jsxs)('div', {
                                      className: l()(e, O.section),
                                      children: [
                                          (0, i.jsx)(p.zxk, {
                                              color: p.zxk.Colors.BRAND,
                                              look: p.zxk.Looks.FILLED,
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
            (0, i.jsx)('div', {
                style: { display: 'flex' },
                children: (0, i.jsx)(p.zxk, {
                    color: p.zxk.Colors.BRAND,
                    look: p.zxk.Looks.FILLED,
                    size: p.zxk.Sizes.TINY,
                    children: 'Tiny'
                })
            }),
            (0, i.jsx)('div', {
                style: { display: 'flex' },
                children: (0, i.jsx)(p.zxk, {
                    color: p.zxk.Colors.BRAND,
                    look: p.zxk.Looks.FILLED,
                    size: p.zxk.Sizes.SMALL,
                    children: 'Small'
                })
            }),
            (0, i.jsx)('div', {
                style: { display: 'flex' },
                children: (0, i.jsx)(p.zxk, {
                    color: p.zxk.Colors.BRAND,
                    look: p.zxk.Looks.FILLED,
                    size: p.zxk.Sizes.MEDIUM,
                    children: 'Medium'
                })
            }),
            (0, i.jsx)('div', {
                style: { display: 'flex' },
                children: (0, i.jsx)(p.zxk, {
                    color: p.zxk.Colors.BRAND,
                    look: p.zxk.Looks.FILLED,
                    size: p.zxk.Sizes.LARGE,
                    children: 'Large'
                })
            }),
            (0, i.jsx)(H, {}),
            (0, i.jsx)(M, {})
        ]
    });
}
function M() {
    return (0, i.jsx)('div', {
        style: {
            display: 'flex',
            gap: 16
        },
        children: (0, i.jsx)(c.z, {
            variant: 'expressive',
            text: 'Expressive button'
        })
    });
}
function U() {
    let [e, t] = r.useState('1');
    return (0, i.jsxs)('div', {
        className: O.section,
        children: [
            (0, i.jsx)(p.X6q, {
                variant: 'heading-xl/semibold',
                children: 'TabBar'
            }),
            (0, i.jsxs)(p.njP, {
                type: 'top',
                look: 'brand',
                selectedItem: e,
                onItemSelect: (e) => t(e),
                className: O.tabBar,
                children: [
                    (0, i.jsx)(p.njP.Item, {
                        id: '1',
                        children: 'Tab 1'
                    }),
                    (0, i.jsx)(p.njP.Item, {
                        id: '2',
                        children: 'Tab 2'
                    }),
                    (0, i.jsx)(p.njP.Item, {
                        id: '3',
                        children: 'Tab 3'
                    })
                ]
            }),
            (0, i.jsxs)(p.Text, {
                variant: 'text-md/medium',
                children: ['Selected tab: ', e]
            })
        ]
    });
}
function V() {
    let [e, t] = r.useState(1),
        [n, s] = r.useState(!1),
        [l, a] = r.useState(5),
        [o, c] = r.useState(!1),
        d = r.useRef(null);
    return (0, i.jsxs)('div', {
        className: O.section,
        children: [
            (0, i.jsx)(p.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Context Menus'
            }),
            (0, i.jsx)('span', {
                children: (0, i.jsx)(p.yRy, {
                    targetElementRef: d,
                    shouldShow: o,
                    renderPopout: () =>
                        (0, i.jsxs)(p.v2r, {
                            navId: 'demo',
                            'aria-label': 'Demo Actions',
                            onClose: () => null,
                            onSelect: () => null,
                            children: [
                                (0, i.jsxs)(p.kSQ, {
                                    label: 'Basic items',
                                    children: [
                                        (0, i.jsx)(p.sNh, {
                                            id: 'first',
                                            label: 'An option'
                                        }),
                                        (0, i.jsx)(p.sNh, {
                                            id: 'second',
                                            label: 'An option with an icon',
                                            icon: p.kBi
                                        }),
                                        (0, i.jsxs)(p.sNh, {
                                            id: 'item-with-submenu',
                                            label: 'Item with submenu',
                                            children: [
                                                (0, i.jsx)(p.sNh, {
                                                    id: 'subitem-1',
                                                    label: 'Subitem 1'
                                                }),
                                                (0, i.jsx)(p.sNh, {
                                                    id: 'subitem-2',
                                                    label: 'Subitem 2'
                                                }),
                                                (0, i.jsx)(p.sNh, {
                                                    id: 'subitem-3',
                                                    label: 'Subitem 3'
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, i.jsxs)(p.kSQ, {
                                    label: 'Inputs',
                                    children: [
                                        (0, i.jsx)(p.S89, {
                                            id: 'checkable',
                                            label: 'Checkbox',
                                            checked: n,
                                            action: () => s(!n)
                                        }),
                                        (0, i.jsx)(p.k5B, {
                                            id: 'radio-one',
                                            group: 'a-group',
                                            label: 'Radio 1',
                                            action: () => t(1),
                                            checked: 1 === e
                                        }),
                                        (0, i.jsx)(p.k5B, {
                                            id: 'radio-two',
                                            group: 'a-group',
                                            label: 'Radio 2',
                                            action: () => t(2),
                                            checked: 2 === e
                                        }),
                                        (0, i.jsx)(p.k5B, {
                                            id: 'radio-three',
                                            group: 'a-group',
                                            label: 'Radio 3',
                                            action: () => t(3),
                                            checked: 3 === e
                                        }),
                                        (0, i.jsx)(p.II_, {
                                            id: 'slider',
                                            label: 'Slider',
                                            control: (e, t) =>
                                                (0, i.jsx)(p._wy, {
                                                    ref: t,
                                                    value: l,
                                                    minValue: 0,
                                                    maxValue: 100,
                                                    onChange: (e) => a(e),
                                                    'aria-label': 'Slider'
                                                })
                                        })
                                    ]
                                }),
                                (0, i.jsx)(p.Clw, {}),
                                (0, i.jsx)(p.sNh, {
                                    id: 'danger',
                                    label: 'A destructive option',
                                    color: 'danger',
                                    icon: p.XHJ
                                })
                            ]
                        }),
                    children: () =>
                        (0, i.jsx)(p.zxk, {
                            buttonRef: d,
                            onClick: () => c(!o),
                            children: 'Toggle context menu'
                        })
                })
            })
        ]
    });
}
function G() {
    return (0, i.jsxs)('div', {
        className: O.section,
        children: [
            (0, i.jsx)(p.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Tooltips'
            }),
            (0, i.jsxs)('div', {
                style: {
                    display: 'flex',
                    gap: 8,
                    flexWrap: 'wrap'
                },
                children: [
                    (0, i.jsx)(p.ua7, {
                        text: "Here's top aligned tooltip text!",
                        position: 'top',
                        children: (e) => (0, i.jsx)(p.zxk, v(S({}, e), { children: 'Tooltip on the top' }))
                    }),
                    (0, i.jsx)(p.ua7, {
                        text: "Here's right aligned tooltip text!",
                        position: 'left',
                        children: (e) => (0, i.jsx)(p.zxk, v(S({}, e), { children: 'Tooltip on the left' }))
                    }),
                    (0, i.jsx)(p.ua7, {
                        text: "Here's bottom aligned tooltip text!",
                        position: 'bottom',
                        children: (e) => (0, i.jsx)(p.zxk, v(S({}, e), { children: 'Tooltip on the bottom' }))
                    }),
                    (0, i.jsx)(p.ua7, {
                        text: "Here's right aligned tooltip text!",
                        position: 'right',
                        children: (e) => (0, i.jsx)(p.zxk, v(S({}, e), { children: 'Tooltip on the right' }))
                    })
                ]
            }),
            (0, i.jsx)('div', {})
        ]
    });
}
function F() {
    let [e, t] = r.useState(!1),
        [n, s] = r.useState(!1),
        [l, a] = r.useState('auto');
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: O.section,
                children: [
                    (0, i.jsx)(p.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Checkboxes'
                    }),
                    (0, i.jsx)(p.XZJ, {
                        value: e,
                        onChange: (e, n) => t(n),
                        children: (0, i.jsx)(p.Text, {
                            variant: 'text-md/medium',
                            children: 'Checkbox input'
                        })
                    }),
                    (0, i.jsx)(p.XZJ, {
                        value: e,
                        onChange: (e, n) => t(n),
                        disabled: !0,
                        children: (0, i.jsx)(p.Text, {
                            variant: 'text-md/medium',
                            children: 'Disabled checkbox'
                        })
                    }),
                    (0, i.jsx)(p.XZJ, {
                        value: e,
                        onChange: (e, n) => t(n),
                        readOnly: !0,
                        children: (0, i.jsx)(p.Text, {
                            variant: 'text-md/medium',
                            children: 'Read-only checkbox'
                        })
                    }),
                    (0, i.jsx)(p.XZJ, {
                        value: e,
                        onChange: (e, n) => t(n),
                        type: p.XZJ.Types.ROW,
                        children: (0, i.jsx)(p.Text, {
                            variant: 'text-md/medium',
                            children: 'Checkbox row'
                        })
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: O.section,
                children: [
                    (0, i.jsx)(p.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Switches'
                    }),
                    (0, i.jsx)(p.j7V, {
                        hideBorder: !0,
                        value: n,
                        onChange: (e) => s(e),
                        children: 'FormSwitch with a label'
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: O.section,
                children: [
                    (0, i.jsx)(p.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Radio Buttons'
                    }),
                    (0, i.jsx)(p.xJW, {
                        children: (0, i.jsx)(p.FXm, {
                            onChange: (e) => {
                                let { value: t } = e;
                                return a(t);
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
                            value: l
                        })
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: O.section,
                children: [
                    (0, i.jsx)(p.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Slider'
                    }),
                    (0, i.jsxs)('div', {
                        className: O.slider,
                        children: [
                            (0, i.jsx)(p.Text, {
                                variant: 'text-md/medium',
                                children: 'Standard slider'
                            }),
                            (0, i.jsx)(p.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                defaultValue: 50,
                                markers: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: O.slider,
                        children: [
                            (0, i.jsx)(p.Text, {
                                variant: 'text-md/medium',
                                children: 'Sticky markers'
                            }),
                            (0, i.jsx)(p.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                markers: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
                                stickToMarkers: !0
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: O.slider,
                        children: [
                            (0, i.jsx)(p.Text, {
                                variant: 'text-md/medium',
                                children: 'Non-uniform markers'
                            }),
                            (0, i.jsx)(p.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                markers: [0, 20, 50, 100],
                                equidistant: !1
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: O.slider,
                        children: [
                            (0, i.jsx)(p.Text, {
                                variant: 'text-md/medium',
                                children: 'Non-uniform equidistant markers'
                            }),
                            (0, i.jsx)(p.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                markers: [0, 20, 50, 100],
                                equidistant: !0
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: O.slider,
                        children: [
                            (0, i.jsx)(p.Text, {
                                variant: 'text-md/medium',
                                children: 'No markers'
                            }),
                            (0, i.jsx)(p.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: O.slider,
                        children: [
                            (0, i.jsx)(p.Text, {
                                variant: 'text-md/medium',
                                children: 'Mini slider'
                            }),
                            (0, i.jsx)(p.iRW, {
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
function H() {
    return (0, i.jsxs)('div', {
        className: O.shinyButtonExamples,
        children: [
            (0, i.jsx)(p.gtL, {
                size: p.zxk.Sizes.MEDIUM,
                shineSize: p.gtL.ShineSizes.SMALL,
                onClick: () => {},
                children: 'Shiny Button'
            }),
            (0, i.jsx)(p.gtL, {
                size: p.zxk.Sizes.MEDIUM,
                shineSize: p.gtL.ShineSizes.SMALL,
                onlyShineOnHover: !0,
                onClick: () => {},
                children: 'Shine on Hover'
            })
        ]
    });
}
function z() {
    let [e, t] = r.useState(null),
        [n, s] = r.useState(null),
        [l, o] = r.useState([]),
        [c, d] = r.useState([]),
        [u, m] = r.useState([]);
    return (0, i.jsxs)('div', {
        className: O.searchableSelectExamples,
        children: [
            (0, i.jsx)(p.X6q, {
                variant: 'heading-xl/semibold',
                children: 'SearchableSelect'
            }),
            (0, i.jsx)(p.VcW, {
                placeholder: 'Single select',
                value: e,
                onChange: (e) => t(e),
                options: a.G
            }),
            (0, i.jsx)(p.VcW, {
                placeholder: 'Single select (clearable)',
                clearable: !0,
                value: n,
                onChange: (e) => s(e),
                options: a.G
            }),
            (0, i.jsx)(p.VcW, {
                placeholder: 'Multi select',
                multi: !0,
                value: l,
                onChange: (e) => o(e),
                options: a.G
            }),
            (0, i.jsx)(p.VcW, {
                placeholder: 'Multi select (clearable)',
                multi: !0,
                clearable: !0,
                value: u,
                onChange: (e) => m(e),
                options: a.G
            }),
            (0, i.jsx)(p.VcW, {
                placeholder: 'Multi select (custom pills)',
                multi: !0,
                value: c,
                onChange: (e) => d(e),
                options: a.G,
                hidePills: !0,
                customPillContainerClassName: O.customPillContainer,
                renderCustomPill: (e) =>
                    (0, i.jsx)('div', {
                        style: {
                            padding: 8,
                            border: '1px solid var(--bg-brand)',
                            borderRadius: 8
                        },
                        children: (0, i.jsx)(p.Text, {
                            variant: 'text-md/bold',
                            children: e.label
                        })
                    })
            })
        ]
    });
}
function Y() {
    let [e, t] = r.useState(''),
        [n, s] = r.useState(''),
        [l, a] = r.useState('');
    return (0, i.jsxs)('div', {
        className: O.section,
        children: [
            (0, i.jsx)(p.X6q, {
                variant: 'heading-xl/semibold',
                children: 'TextInput'
            }),
            (0, i.jsx)(p.xJW, {
                children: (0, i.jsx)(p.E1j, {
                    size: p.E1j.Sizes.MEDIUM,
                    placeholder: 'Search...',
                    onChange: (e) => a(e),
                    query: l,
                    onClear: () => a('')
                })
            }),
            (0, i.jsx)(p.xJW, {
                title: 'Disabled',
                disabled: !0,
                children: (0, i.jsx)(p.oil, {
                    placeholder: 'Disabled',
                    disabled: !0
                })
            }),
            (0, i.jsx)(p.xJW, {
                title: 'Error',
                children: (0, i.jsx)(p.oil, {
                    required: !0,
                    error: 'This must have a value'
                })
            }),
            (0, i.jsx)(p.xJW, {
                title: 'Error',
                children: (0, i.jsx)(p.oil, {
                    defaultValue: 'Not a valid value',
                    error: 'This has an error.'
                })
            }),
            (0, i.jsx)(p.xJW, {
                title: 'Read only',
                children: (0, i.jsx)(p.oil, {
                    value: 'Read-only, not-editable field',
                    editable: !1
                })
            }),
            (0, i.jsx)(p.xJW, {
                title: 'Input with a label',
                children: (0, i.jsx)(p.oil, {
                    placeholder: 'Real placeholder',
                    value: e,
                    onChange: t
                })
            }),
            (0, i.jsx)(p.xJW, {
                title: 'Text area',
                children: (0, i.jsx)(p.Kx8, {
                    placeholder: 'Text area placeholder',
                    showCharacterCount: !0,
                    value: n,
                    onChange: s
                })
            })
        ]
    });
}
function W(e) {
    let { transitionState: t } = e,
        [n, s] = r.useState(!1),
        [l, a] = r.useState(p.CgR.SMALL),
        [o, c] = r.useState(!1),
        d = n ? O.modalOutlines : '';
    return (0, i.jsxs)(p.Y0X, {
        transitionState: t,
        size: l,
        parentComponent: 'UserSettingsDesignSystem',
        children: [
            (0, i.jsx)(p.xBx, {
                className: d,
                children: (0, i.jsx)(p.X6q, {
                    variant: 'heading-xl/semibold',
                    children: 'Modal'
                })
            }),
            (0, i.jsx)(p.hzk, {
                className: d,
                children: (0, i.jsxs)(p.Kqy, {
                    gap: 16,
                    children: [
                        (0, i.jsx)(p.xJW, {
                            title: 'Modal Size',
                            children: (0, i.jsx)(p.q4e, {
                                value: l,
                                onChange: a,
                                options: Object.entries(p.CgR).map((e) => {
                                    let [t, n] = e;
                                    return {
                                        label: t,
                                        value: n
                                    };
                                })
                            })
                        }),
                        (0, i.jsx)(p.hjN, {
                            title: 'Options',
                            children: (0, i.jsxs)(p.Kqy, {
                                gap: 16,
                                children: [
                                    (0, i.jsx)(p.XZJ, {
                                        value: n,
                                        onChange: (e, t) => s(t),
                                        children: (0, i.jsx)(p.Text, {
                                            variant: 'text-md/medium',
                                            children: 'Show Section Outlines'
                                        })
                                    }),
                                    (0, i.jsx)(p.XZJ, {
                                        value: o,
                                        onChange: (e, t) => c(t),
                                        children: (0, i.jsx)(p.Text, {
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
            (0, i.jsx)(p.mzw, {
                className: d,
                children: (0, i.jsxs)(p.Kqy, {
                    direction: 'horizontal',
                    justify: 'end',
                    gap: 8,
                    children: [
                        o &&
                            (0, i.jsx)(p.zxk, {
                                color: p.zxk.Colors.PRIMARY,
                                look: p.zxk.Looks.FILLED,
                                children: 'Secondary Action'
                            }),
                        (0, i.jsx)(p.zxk, { children: 'Close' })
                    ]
                })
            })
        ]
    });
}
function K(e) {
    let { transitionState: t, onClose: n } = e;
    function r(e) {
        let { children: t } = e;
        return (0, i.jsx)('div', {
            className: O.modalOutlines,
            style: { padding: '16px' },
            children: t
        });
    }
    return (0, i.jsxs)(d.IX, {
        transitionState: t,
        onClose: n,
        children: [
            (0, i.jsx)('div', {
                className: O.modalOutlines,
                children: (0, i.jsx)(g.x, {
                    title: 'Demo Modal',
                    body: 'The ModalHeader can have leading and trailing items on either side of the text',
                    leading: (0, i.jsx)(r, {}),
                    trailing: (0, i.jsx)(r, {})
                })
            }),
            (0, i.jsx)('div', {
                className: O.modalOutlines,
                children: (0, i.jsx)(m.h, {
                    controls: (0, i.jsx)(r, { children: 'This ModalContent renders any controls here' }),
                    children: (0, i.jsx)(r, { children: 'This is the main ModalContent. This area scrolls if there is enough content' })
                })
            }),
            (0, i.jsx)('div', {
                className: O.modalOutlines,
                children: (0, i.jsx)(m.m, { children: (0, i.jsx)(r, { children: 'This is the ModalFooter' }) })
            }),
            (0, i.jsx)('div', {
                className: O.modalOutlines,
                children: (0, i.jsx)(u.G, {
                    leading: (0, i.jsx)(r, { children: 'ModalActionBar leading' }),
                    actions: [
                        {
                            variant: 'secondary',
                            text: 'Cancel',
                            onClick: n
                        },
                        {
                            variant: 'primary',
                            text: 'Submit',
                            onClick: n
                        }
                    ]
                })
            })
        ]
    });
}
function q(e) {
    let { transitionState: t, onClose: n } = e,
        [s, l] = r.useState('md'),
        [a, o] = r.useState('Demo Modal'),
        [c, h] = r.useState('Header body copy'),
        [f, b] = r.useState(!1),
        [_, x] = r.useState(!1),
        [E, C] = r.useState(!1),
        [j, O] = r.useState(!1),
        [S, v] = r.useState(!1);
    return (0, i.jsxs)(d.IX, {
        transitionState: t,
        onClose: n,
        size: s,
        children: [
            (0, i.jsx)(g.x, {
                title: a,
                body: c,
                alignCenter: f
            }),
            (0, i.jsx)(m.h, {
                controls: _
                    ? (0, i.jsx)(p.E1j, {
                          size: p.E1j.Sizes.MEDIUM,
                          placeholder: 'Search',
                          onChange: () => null,
                          query: ''
                      })
                    : void 0,
                children: (0, i.jsxs)(p.Kqy, {
                    gap: 16,
                    children: [
                        (0, i.jsx)(p.xJW, {
                            title: 'Modal Size',
                            children: (0, i.jsx)(p.q4e, {
                                value: s,
                                onChange: l,
                                options: [
                                    {
                                        label: 'Small',
                                        value: 'sm'
                                    },
                                    {
                                        label: 'Medium',
                                        value: 'md'
                                    },
                                    {
                                        label: 'Large',
                                        value: 'lg'
                                    },
                                    {
                                        label: 'XLarge',
                                        value: 'xl'
                                    }
                                ]
                            })
                        }),
                        (0, i.jsx)(p.xJW, {
                            title: 'Header Title',
                            children: (0, i.jsx)(p.oil, {
                                onChange: o,
                                defaultValue: a
                            })
                        }),
                        (0, i.jsx)(p.xJW, {
                            title: 'Header body',
                            children: (0, i.jsx)(p.oil, {
                                onChange: h,
                                defaultValue: c
                            })
                        }),
                        (0, i.jsx)(p.xJW, {
                            title: 'Optional Content',
                            children: (0, i.jsxs)(p.Kqy, {
                                gap: 12,
                                children: [
                                    (0, i.jsx)(p.XZJ, {
                                        value: f,
                                        onChange: (e, t) => b(t),
                                        children: (0, i.jsx)(p.Text, {
                                            variant: 'text-md/medium',
                                            children: 'Header Align Center'
                                        })
                                    }),
                                    (0, i.jsx)(p.XZJ, {
                                        value: _,
                                        onChange: (e, t) => x(t),
                                        children: (0, i.jsx)(p.Text, {
                                            variant: 'text-md/medium',
                                            children: 'Show Search Input'
                                        })
                                    }),
                                    (0, i.jsx)(p.XZJ, {
                                        value: E,
                                        onChange: (e, t) => C(t),
                                        children: (0, i.jsx)(p.Text, {
                                            variant: 'text-md/medium',
                                            children: 'Show Preview Content'
                                        })
                                    }),
                                    (0, i.jsx)(p.XZJ, {
                                        value: j,
                                        onChange: (e, t) => O(t),
                                        children: (0, i.jsx)(p.Text, {
                                            variant: 'text-md/medium',
                                            children: 'Show Action Bar Leading Input'
                                        })
                                    }),
                                    (0, i.jsx)(p.XZJ, {
                                        value: S,
                                        onChange: (e, t) => v(t),
                                        children: (0, i.jsx)(p.Text, {
                                            variant: 'text-md/medium',
                                            children: 'Full Width Actions'
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            E &&
                (0, i.jsxs)(m.m, {
                    children: [
                        (0, i.jsx)(p.X6q, {
                            variant: 'heading-lg/semibold',
                            children: 'Celebration Station'
                        }),
                        (0, i.jsx)(p.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-secondary',
                            children: '32 Members \u25CF 19 Online'
                        })
                    ]
                }),
            (0, i.jsx)(u.G, {
                leading: j
                    ? (0, i.jsx)(p.XZJ, {
                          value: !1,
                          onChange: () => {},
                          children: (0, i.jsx)(p.Text, {
                              variant: 'text-sm/normal',
                              children: "Don't show this again?"
                          })
                      })
                    : void 0,
                actionsFullWidth: S,
                actions: [
                    {
                        variant: 'secondary',
                        text: 'Cancel',
                        onClick: n
                    },
                    {
                        variant: 'primary',
                        text: 'Submit',
                        onClick: n
                    }
                ]
            })
        ]
    });
}
function X() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: O.section,
                children: [
                    (0, i.jsx)(p.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Modals (Void)'
                    }),
                    (0, i.jsx)(p.zxk, {
                        onClick: () => {
                            (0, p.h7j)((e) => (0, i.jsx)(W, S({}, e)));
                        },
                        children: 'Open modal'
                    }),
                    (0, i.jsx)(p.zxk, {
                        onClick: () => {
                            h.Z.show({
                                title: 'Alert',
                                body: 'This is an alert',
                                confirmText: 'Confirm Text',
                                cancelText: 'Cancel Text'
                            });
                        },
                        children: 'Show Alert'
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: O.section,
                children: [
                    (0, i.jsx)(p.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Modals (Mana)'
                    }),
                    (0, i.jsx)(p.zxk, {
                        onClick: () => {
                            (0, p.h7j)((e) => (0, i.jsx)(K, S({}, e)));
                        },
                        children: 'Open modal section visualizer'
                    }),
                    (0, i.jsx)(p.zxk, {
                        onClick: () => {
                            (0, p.h7j)((e) => (0, i.jsx)(q, S({}, e)));
                        },
                        children: 'Open demo modal'
                    })
                ]
            })
        ]
    });
}
function Q() {
    let e = (0, o.e7)([f.Z], () => f.Z.gradientPreset);
    return (0, i.jsx)(p.f6W, {
        theme: j.BR.DARKER,
        disableAdaptiveTheme: !0,
        children: (t) =>
            (0, i.jsxs)('div', {
                className: l()(t, O.section),
                children: [
                    (0, i.jsx)(p.zxk, {
                        color: p.zxk.Colors.PRIMARY,
                        look: p.zxk.Looks.FILLED,
                        fullWidth: !0,
                        children: 'Button'
                    }),
                    (0, i.jsx)(p.f6W, {
                        theme: j.BR.LIGHT,
                        children: (t) =>
                            (0, i.jsxs)('div', {
                                className: l()(t, O.section),
                                children: [
                                    (0, i.jsx)(p.zxk, {
                                        color: p.zxk.Colors.PRIMARY,
                                        look: p.zxk.Looks.FILLED,
                                        fullWidth: !0,
                                        children: 'Button'
                                    }),
                                    (0, i.jsx)(p.f6W, {
                                        theme: j.BR.DARKER,
                                        children: (e) =>
                                            (0, i.jsx)('div', {
                                                className: l()(e, O.section),
                                                children: (0, i.jsx)(p.zxk, {
                                                    color: p.zxk.Colors.PRIMARY,
                                                    look: p.zxk.Looks.FILLED,
                                                    fullWidth: !0,
                                                    children: 'Button'
                                                })
                                            })
                                    }),
                                    (0, i.jsx)(p.f6W, {
                                        gradient: e,
                                        children: (e) =>
                                            (0, i.jsx)('div', {
                                                className: l()(e, O.section),
                                                children: (0, i.jsx)(p.zxk, {
                                                    color: p.zxk.Colors.PRIMARY,
                                                    look: p.zxk.Looks.FILLED,
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
