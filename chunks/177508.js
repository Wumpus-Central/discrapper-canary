n.d(t, { Z: () => B }), n(704826), n(35282), n(388685), n(361932), n(187205);
var i = n(255367),
    r = n(73800),
    s = n(120356),
    l = n.n(s),
    a = n(971809),
    o = n(442837),
    c = n(844477),
    d = n(257465),
    u = n(82659),
    m = n(369585),
    g = n(530392),
    p = n(37148),
    h = n(481060),
    f = n(240872),
    b = n(514361),
    _ = n(705262),
    x = n(526156),
    E = n(706705),
    j = n(726985),
    C = n(981631),
    O = n(231338),
    S = n(426617);
function v(e) {
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
function T(e, t) {
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
let I = Object.keys(h.zxk.Colors).filter((e) => 'CUSTOM' !== e),
    N = Object.keys(h.zxk.Looks).filter((e) => 'BLANK' !== e),
    y = Object.keys(h.zxk.Sizes).filter((e) => 'NONE' !== e);
function A() {
    return (0, i.jsxs)('div', {
        className: S.root,
        children: [
            (0, i.jsx)(h.Qjf, {
                variant: 'primary',
                text: 'Testing',
                external: !0
            }),
            (0, i.jsx)(c.z, {
                variant: 'destructive-secondary',
                text: 'Testing',
                iconPosition: 'end',
                icon: h.XHJ
            }),
            (0, i.jsx)(M, {}),
            (0, i.jsx)(Y, {}),
            (0, i.jsx)(W, {}),
            (0, i.jsx)(H, {}),
            (0, i.jsx)(F, {}),
            (0, i.jsx)(G, {}),
            (0, i.jsx)(V, {}),
            (0, i.jsx)($, {}),
            (0, i.jsx)(P, {}),
            (0, i.jsx)(ee, {})
        ]
    });
}
function P() {
    let e = Object.keys(h.DM8);
    return (0, i.jsxs)('div', {
        className: S.section,
        children: [
            (0, i.jsx)(h.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Notice'
            }),
            (0, i.jsx)(h.Kqy, {
                gap: 16,
                children: e.map((e) =>
                    (0, i.jsx)(
                        h.qXd,
                        {
                            color: h.DM8[e],
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
let R = ['neutral', 'blue_new', 'blurple', 'green_new', 'red_new', 'teal_new', 'yellow_new', 'orange_new', 'pink', 'purple'],
    D = ['background-surface-highest', 'background-surface-higher', 'background-surface-high', 'background-base-low', 'background-base-lower', 'background-base-lowest'],
    Z = ['', 'background-mod-subtle', 'background-mod-normal', 'background-mod-strong'],
    w = ['critical', 'warning', 'positive', 'info'],
    k = ['text-default', 'text-primary', 'text-secondary', 'text-tertiary', 'text-feedback-critical', 'text-feedback-warning', 'text-feedback-positive', 'text-feedback-info', 'premium-nitro-pink-text'];
function L() {
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(h.X6q, {
                variant: 'heading-xl/semibold',
                className: S.heading,
                children: 'Background Colors'
            }),
            D.map((e) =>
                (0, i.jsxs)(
                    'div',
                    {
                        className: S.palette,
                        style: {
                            backgroundColor: 'var(--'.concat(e, ')'),
                            padding: 24
                        },
                        children: [
                            (0, i.jsx)(h.Text, {
                                variant: 'text-md/medium',
                                children: e
                            }),
                            (0, i.jsx)('div', {
                                style: {
                                    display: 'grid',
                                    gap: 8,
                                    gridTemplateColumns: 'repeat(3, 1fr)'
                                },
                                children: Z.map((e) =>
                                    (0, i.jsxs)(
                                        'div',
                                        {
                                            className: S.color,
                                            style: {
                                                padding: 16,
                                                background: 'var(--'.concat(e, ')')
                                            },
                                            children: [
                                                (0, i.jsx)(h.Text, {
                                                    variant: 'text-xs/semibold',
                                                    color: 'header-secondary',
                                                    children: e
                                                }),
                                                (0, i.jsx)('hr', { className: S.sectionDivider }),
                                                k.map((e) =>
                                                    (0, i.jsx)(
                                                        h.Text,
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
                            (0, i.jsx)('hr', { className: S.sectionDivider }),
                            (0, i.jsx)('div', {
                                style: {
                                    display: 'grid',
                                    gap: 8,
                                    gridTemplateColumns: 'repeat(3, 1fr)'
                                },
                                children: w.map((e) => {
                                    let t = 'var(--text-feedback-'.concat(e, ')');
                                    return (0, i.jsxs)(
                                        'div',
                                        {
                                            className: S.color,
                                            style: {
                                                padding: 16,
                                                background: 'var(--background-feedback-'.concat(e, ')')
                                            },
                                            children: [
                                                (0, i.jsx)(h.Text, {
                                                    variant: 'text-xs/semibold',
                                                    color: 'header-secondary'
                                                }),
                                                (0, i.jsxs)(h.Kqy, {
                                                    children: [
                                                        (0, i.jsxs)(h.Text, {
                                                            variant: 'text-xs/semibold',
                                                            style: { color: t },
                                                            children: ['background-feedback-', e]
                                                        }),
                                                        (0, i.jsx)(h.Text, {
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
            (0, i.jsx)(h.X6q, {
                variant: 'heading-xl/semibold',
                className: S.heading,
                children: 'Scales'
            }),
            R.map((e) =>
                (0, i.jsxs)(
                    'div',
                    {
                        className: S.palette,
                        children: [
                            (0, i.jsx)(h.Text, {
                                variant: 'text-lg/semibold',
                                children: e
                            }),
                            (0, i.jsx)('div', {
                                className: S.colors,
                                children: Array.from({ length: 100 }, (t, n) =>
                                    (0, i.jsx)(
                                        'div',
                                        {
                                            className: S.color,
                                            style: { background: 'var(--'.concat(e.replace('_', '-'), '-').concat(n + 1, ')') },
                                            children: (0, i.jsx)(h.f6W, {
                                                theme: n < 50 ? 'light' : 'dark',
                                                children: (t) =>
                                                    (0, i.jsxs)(h.Text, {
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
function B() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(x.Z, {
                parentSetting: j.s6.DESIGN_SYSTEMS,
                settingsSection: C.oAB.DESIGN_SYSTEMS,
                tabs: [
                    {
                        title: 'Components',
                        component: () => (0, i.jsx)(A, {}),
                        setting: j.s6.DESIGN_SYSTEMS_COMPONENTS
                    },
                    {
                        title: 'Colors',
                        component: () => (0, i.jsx)(L, {}),
                        setting: j.s6.DESIGN_SYSTEMS_COLORS
                    },
                    {
                        title: 'Animations',
                        component: () => (0, i.jsx)(E.Z, {}),
                        setting: j.s6.ANIMATION_TESTING
                    }
                ]
            }),
            (0, i.jsx)('div', {
                className: S.themes,
                children: (0, i.jsx)(_.ZP, {
                    type: _.yH.SETTINGS,
                    children: (0, i.jsx)(_.ZP.Basic, { className: S.themeSelectionGroup })
                })
            })
        ]
    });
}
function M() {
    let [e, t] = r.useState(!1),
        n = I.flatMap((e) => [
            ...N.map((t) =>
                (0, i.jsxs)(
                    h.zxk,
                    {
                        color: h.zxk.Colors[e],
                        look: h.zxk.Looks[t],
                        fullWidth: !0,
                        style: { textTransform: 'capitalize' },
                        children: [e.toLowerCase(), ' - ', t.toLowerCase()]
                    },
                    e + t
                )
            ),
            (0, i.jsx)('hr', { className: S.sectionDivider }, e + 'divider')
        ]),
        s = y.flatMap((e) =>
            (0, i.jsx)(h.zxk, {
                color: h.zxk.Colors.BRAND,
                look: h.zxk.Looks.FILLED,
                size: h.zxk.Sizes[e],
                fullWidth: !0,
                style: { textTransform: 'capitalize' },
                children: e.toLowerCase()
            })
        );
    return (0, i.jsxs)('div', {
        className: S.section,
        children: [
            (0, i.jsx)(h.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Buttons'
            }),
            (0, i.jsx)(h.XZJ, {
                value: e,
                onChange: (e, n) => t(n),
                children: (0, i.jsx)(h.Text, {
                    variant: 'text-md/medium',
                    children: 'Show all buttons (WIP)'
                })
            }),
            e
                ? (0, i.jsxs)('div', {
                      className: S.buttons,
                      children: [
                          (0, i.jsx)(h.f6W, {
                              theme: O.BR.DARKER,
                              children: (e) =>
                                  (0, i.jsx)('div', {
                                      className: l()(e, S.section),
                                      children: n
                                  })
                          }),
                          (0, i.jsx)(h.f6W, {
                              theme: O.BR.LIGHT,
                              children: (e) =>
                                  (0, i.jsx)('div', {
                                      className: l()(e, S.section),
                                      children: n
                                  })
                          }),
                          (0, i.jsx)(h.f6W, {
                              theme: O.BR.DARKER,
                              children: (e) =>
                                  (0, i.jsxs)('div', {
                                      className: l()(e, S.section),
                                      children: [
                                          (0, i.jsx)(h.zxk, {
                                              color: h.zxk.Colors.BRAND,
                                              look: h.zxk.Looks.FILLED,
                                              disabled: !0,
                                              children: 'Disabled'
                                          }),
                                          s
                                      ]
                                  })
                          }),
                          (0, i.jsx)(h.f6W, {
                              theme: O.BR.LIGHT,
                              children: (e) =>
                                  (0, i.jsxs)('div', {
                                      className: l()(e, S.section),
                                      children: [
                                          (0, i.jsx)(h.zxk, {
                                              color: h.zxk.Colors.BRAND,
                                              look: h.zxk.Looks.FILLED,
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
                children: (0, i.jsx)(h.zxk, {
                    color: h.zxk.Colors.BRAND,
                    look: h.zxk.Looks.FILLED,
                    size: h.zxk.Sizes.TINY,
                    children: 'Tiny'
                })
            }),
            (0, i.jsx)('div', {
                style: { display: 'flex' },
                children: (0, i.jsx)(h.zxk, {
                    color: h.zxk.Colors.BRAND,
                    look: h.zxk.Looks.FILLED,
                    size: h.zxk.Sizes.SMALL,
                    children: 'Small'
                })
            }),
            (0, i.jsx)('div', {
                style: { display: 'flex' },
                children: (0, i.jsx)(h.zxk, {
                    color: h.zxk.Colors.BRAND,
                    look: h.zxk.Looks.FILLED,
                    size: h.zxk.Sizes.MEDIUM,
                    children: 'Medium'
                })
            }),
            (0, i.jsx)('div', {
                style: { display: 'flex' },
                children: (0, i.jsx)(h.zxk, {
                    color: h.zxk.Colors.BRAND,
                    look: h.zxk.Looks.FILLED,
                    size: h.zxk.Sizes.LARGE,
                    children: 'Large'
                })
            }),
            (0, i.jsx)(z, {}),
            (0, i.jsx)(U, {})
        ]
    });
}
function U() {
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
function V() {
    let [e, t] = r.useState('1');
    return (0, i.jsxs)('div', {
        className: S.section,
        children: [
            (0, i.jsx)(h.X6q, {
                variant: 'heading-xl/semibold',
                children: 'TabBar'
            }),
            (0, i.jsxs)(h.njP, {
                type: 'top',
                look: 'brand',
                selectedItem: e,
                onItemSelect: (e) => t(e),
                className: S.tabBar,
                children: [
                    (0, i.jsx)(h.njP.Item, {
                        id: '1',
                        children: 'Tab 1'
                    }),
                    (0, i.jsx)(h.njP.Item, {
                        id: '2',
                        children: 'Tab 2'
                    }),
                    (0, i.jsx)(h.njP.Item, {
                        id: '3',
                        children: 'Tab 3'
                    })
                ]
            }),
            (0, i.jsxs)(h.Text, {
                variant: 'text-md/medium',
                children: ['Selected tab: ', e]
            })
        ]
    });
}
function G() {
    let [e, t] = r.useState(1),
        [n, s] = r.useState(!1),
        [l, a] = r.useState(5),
        [o, c] = r.useState(!1),
        d = r.useRef(null);
    return (0, i.jsxs)('div', {
        className: S.section,
        children: [
            (0, i.jsx)(h.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Context Menus'
            }),
            (0, i.jsx)('span', {
                children: (0, i.jsx)(h.yRy, {
                    targetElementRef: d,
                    shouldShow: o,
                    renderPopout: () =>
                        (0, i.jsxs)(h.v2r, {
                            navId: 'demo',
                            'aria-label': 'Demo Actions',
                            onClose: () => null,
                            onSelect: () => null,
                            children: [
                                (0, i.jsxs)(h.kSQ, {
                                    label: 'Basic items',
                                    children: [
                                        (0, i.jsx)(h.sNh, {
                                            id: 'first',
                                            label: 'An option'
                                        }),
                                        (0, i.jsx)(h.sNh, {
                                            id: 'second',
                                            label: 'An option with an icon',
                                            icon: h.kBi
                                        }),
                                        (0, i.jsxs)(h.sNh, {
                                            id: 'item-with-submenu',
                                            label: 'Item with submenu',
                                            children: [
                                                (0, i.jsx)(h.sNh, {
                                                    id: 'subitem-1',
                                                    label: 'Subitem 1'
                                                }),
                                                (0, i.jsx)(h.sNh, {
                                                    id: 'subitem-2',
                                                    label: 'Subitem 2'
                                                }),
                                                (0, i.jsx)(h.sNh, {
                                                    id: 'subitem-3',
                                                    label: 'Subitem 3'
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, i.jsxs)(h.kSQ, {
                                    label: 'Inputs',
                                    children: [
                                        (0, i.jsx)(h.S89, {
                                            id: 'checkable',
                                            label: 'Checkbox',
                                            checked: n,
                                            action: () => s(!n)
                                        }),
                                        (0, i.jsx)(h.k5B, {
                                            id: 'radio-one',
                                            group: 'a-group',
                                            label: 'Radio 1',
                                            action: () => t(1),
                                            checked: 1 === e
                                        }),
                                        (0, i.jsx)(h.k5B, {
                                            id: 'radio-two',
                                            group: 'a-group',
                                            label: 'Radio 2',
                                            action: () => t(2),
                                            checked: 2 === e
                                        }),
                                        (0, i.jsx)(h.k5B, {
                                            id: 'radio-three',
                                            group: 'a-group',
                                            label: 'Radio 3',
                                            action: () => t(3),
                                            checked: 3 === e
                                        }),
                                        (0, i.jsx)(h.II_, {
                                            id: 'slider',
                                            label: 'Slider',
                                            control: (e, t) =>
                                                (0, i.jsx)(h._wy, {
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
                                (0, i.jsx)(h.Clw, {}),
                                (0, i.jsx)(h.sNh, {
                                    id: 'danger',
                                    label: 'A destructive option',
                                    color: 'danger',
                                    icon: h.XHJ
                                })
                            ]
                        }),
                    children: () =>
                        (0, i.jsx)(h.zxk, {
                            buttonRef: d,
                            onClick: () => c(!o),
                            children: 'Toggle context menu'
                        })
                })
            })
        ]
    });
}
function F() {
    return (0, i.jsxs)('div', {
        className: S.section,
        children: [
            (0, i.jsx)(h.X6q, {
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
                    (0, i.jsx)(h.ua7, {
                        text: "Here's top aligned tooltip text!",
                        position: 'top',
                        children: (e) => (0, i.jsx)(h.zxk, T(v({}, e), { children: 'Tooltip on the top' }))
                    }),
                    (0, i.jsx)(h.ua7, {
                        text: "Here's right aligned tooltip text!",
                        position: 'left',
                        children: (e) => (0, i.jsx)(h.zxk, T(v({}, e), { children: 'Tooltip on the left' }))
                    }),
                    (0, i.jsx)(h.ua7, {
                        text: "Here's bottom aligned tooltip text!",
                        position: 'bottom',
                        children: (e) => (0, i.jsx)(h.zxk, T(v({}, e), { children: 'Tooltip on the bottom' }))
                    }),
                    (0, i.jsx)(h.ua7, {
                        text: "Here's right aligned tooltip text!",
                        position: 'right',
                        children: (e) => (0, i.jsx)(h.zxk, T(v({}, e), { children: 'Tooltip on the right' }))
                    })
                ]
            }),
            (0, i.jsx)('div', {})
        ]
    });
}
function H() {
    let [e, t] = r.useState(!1),
        [n, s] = r.useState(!1),
        [l, a] = r.useState('auto');
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: S.section,
                children: [
                    (0, i.jsx)(h.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Checkboxes'
                    }),
                    (0, i.jsx)(h.XZJ, {
                        value: e,
                        onChange: (e, n) => t(n),
                        children: (0, i.jsx)(h.Text, {
                            variant: 'text-md/medium',
                            children: 'Checkbox input'
                        })
                    }),
                    (0, i.jsx)(h.XZJ, {
                        value: e,
                        onChange: (e, n) => t(n),
                        disabled: !0,
                        children: (0, i.jsx)(h.Text, {
                            variant: 'text-md/medium',
                            children: 'Disabled checkbox'
                        })
                    }),
                    (0, i.jsx)(h.XZJ, {
                        value: e,
                        onChange: (e, n) => t(n),
                        readOnly: !0,
                        children: (0, i.jsx)(h.Text, {
                            variant: 'text-md/medium',
                            children: 'Read-only checkbox'
                        })
                    }),
                    (0, i.jsx)(h.XZJ, {
                        value: e,
                        onChange: (e, n) => t(n),
                        type: h.XZJ.Types.ROW,
                        children: (0, i.jsx)(h.Text, {
                            variant: 'text-md/medium',
                            children: 'Checkbox row'
                        })
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: S.section,
                children: [
                    (0, i.jsx)(h.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Switches'
                    }),
                    (0, i.jsx)(h.j7V, {
                        hideBorder: !0,
                        value: n,
                        onChange: (e) => s(e),
                        children: 'FormSwitch with a label'
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: S.section,
                children: [
                    (0, i.jsx)(h.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Radio Buttons'
                    }),
                    (0, i.jsx)(h.xJW, {
                        children: (0, i.jsx)(h.FXm, {
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
                className: S.section,
                children: [
                    (0, i.jsx)(h.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Slider'
                    }),
                    (0, i.jsxs)('div', {
                        className: S.slider,
                        children: [
                            (0, i.jsx)(h.Text, {
                                variant: 'text-md/medium',
                                children: 'Standard slider'
                            }),
                            (0, i.jsx)(h.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                defaultValue: 50,
                                markers: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: S.slider,
                        children: [
                            (0, i.jsx)(h.Text, {
                                variant: 'text-md/medium',
                                children: 'Sticky markers'
                            }),
                            (0, i.jsx)(h.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                markers: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
                                stickToMarkers: !0
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: S.slider,
                        children: [
                            (0, i.jsx)(h.Text, {
                                variant: 'text-md/medium',
                                children: 'Non-uniform markers'
                            }),
                            (0, i.jsx)(h.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                markers: [0, 20, 50, 100],
                                equidistant: !1
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: S.slider,
                        children: [
                            (0, i.jsx)(h.Text, {
                                variant: 'text-md/medium',
                                children: 'Non-uniform equidistant markers'
                            }),
                            (0, i.jsx)(h.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                markers: [0, 20, 50, 100],
                                equidistant: !0
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: S.slider,
                        children: [
                            (0, i.jsx)(h.Text, {
                                variant: 'text-md/medium',
                                children: 'No markers'
                            }),
                            (0, i.jsx)(h.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: S.slider,
                        children: [
                            (0, i.jsx)(h.Text, {
                                variant: 'text-md/medium',
                                children: 'Mini slider'
                            }),
                            (0, i.jsx)(h.iRW, {
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
function z() {
    return (0, i.jsxs)('div', {
        className: S.shinyButtonExamples,
        children: [
            (0, i.jsx)(h.gtL, {
                size: h.zxk.Sizes.MEDIUM,
                shineSize: h.gtL.ShineSizes.SMALL,
                onClick: () => {},
                children: 'Shiny Button'
            }),
            (0, i.jsx)(h.gtL, {
                size: h.zxk.Sizes.MEDIUM,
                shineSize: h.gtL.ShineSizes.SMALL,
                onlyShineOnHover: !0,
                onClick: () => {},
                children: 'Shine on Hover'
            })
        ]
    });
}
function Y() {
    let [e, t] = r.useState(null),
        [n, s] = r.useState(null),
        [l, o] = r.useState([]),
        [c, d] = r.useState([]),
        [u, m] = r.useState([]);
    return (0, i.jsxs)('div', {
        className: S.searchableSelectExamples,
        children: [
            (0, i.jsx)(h.X6q, {
                variant: 'heading-xl/semibold',
                children: 'SearchableSelect'
            }),
            (0, i.jsx)(h.VcW, {
                placeholder: 'Single select',
                value: e,
                onChange: (e) => t(e),
                options: a.G
            }),
            (0, i.jsx)(h.VcW, {
                placeholder: 'Single select (clearable)',
                clearable: !0,
                value: n,
                onChange: (e) => s(e),
                options: a.G
            }),
            (0, i.jsx)(h.VcW, {
                placeholder: 'Multi select',
                multi: !0,
                value: l,
                onChange: (e) => o(e),
                options: a.G
            }),
            (0, i.jsx)(h.VcW, {
                placeholder: 'Multi select (clearable)',
                multi: !0,
                clearable: !0,
                value: u,
                onChange: (e) => m(e),
                options: a.G
            }),
            (0, i.jsx)(h.VcW, {
                placeholder: 'Multi select (custom pills)',
                multi: !0,
                value: c,
                onChange: (e) => d(e),
                options: a.G,
                hidePills: !0,
                customPillContainerClassName: S.customPillContainer,
                renderCustomPill: (e) =>
                    (0, i.jsx)('div', {
                        style: {
                            padding: 8,
                            border: '1px solid var(--bg-brand)',
                            borderRadius: 8
                        },
                        children: (0, i.jsx)(h.Text, {
                            variant: 'text-md/bold',
                            children: e.label
                        })
                    })
            })
        ]
    });
}
function W() {
    let [e, t] = r.useState(''),
        [n, s] = r.useState(''),
        [l, a] = r.useState('');
    return (0, i.jsxs)('div', {
        className: S.section,
        children: [
            (0, i.jsx)(h.X6q, {
                variant: 'heading-xl/semibold',
                children: 'TextInput'
            }),
            (0, i.jsx)(h.xJW, {
                children: (0, i.jsx)(h.E1j, {
                    size: h.E1j.Sizes.MEDIUM,
                    placeholder: 'Search...',
                    onChange: (e) => a(e),
                    query: l,
                    onClear: () => a('')
                })
            }),
            (0, i.jsx)(h.xJW, {
                title: 'Disabled',
                disabled: !0,
                children: (0, i.jsx)(h.oil, {
                    placeholder: 'Disabled',
                    disabled: !0
                })
            }),
            (0, i.jsx)(h.xJW, {
                title: 'Error',
                children: (0, i.jsx)(h.oil, {
                    required: !0,
                    error: 'This must have a value'
                })
            }),
            (0, i.jsx)(h.xJW, {
                title: 'Error',
                children: (0, i.jsx)(h.oil, {
                    defaultValue: 'Not a valid value',
                    error: 'This has an error.'
                })
            }),
            (0, i.jsx)(h.xJW, {
                title: 'Read only',
                children: (0, i.jsx)(h.oil, {
                    value: 'Read-only, not-editable field',
                    editable: !1
                })
            }),
            (0, i.jsx)(h.xJW, {
                title: 'Input with a label',
                children: (0, i.jsx)(h.oil, {
                    placeholder: 'Real placeholder',
                    value: e,
                    onChange: t
                })
            }),
            (0, i.jsx)(h.xJW, {
                title: 'Text area',
                children: (0, i.jsx)(h.Kx8, {
                    placeholder: 'Text area placeholder',
                    showCharacterCount: !0,
                    value: n,
                    onChange: s
                })
            })
        ]
    });
}
function K(e) {
    let { transitionState: t } = e,
        [n, s] = r.useState(!1),
        [l, a] = r.useState(h.CgR.SMALL),
        [o, c] = r.useState(!1),
        d = n ? S.modalOutlines : '';
    return (0, i.jsxs)(h.Y0X, {
        transitionState: t,
        size: l,
        parentComponent: 'UserSettingsDesignSystem',
        children: [
            (0, i.jsx)(h.xBx, {
                className: d,
                children: (0, i.jsx)(h.X6q, {
                    variant: 'heading-xl/semibold',
                    children: 'Modal'
                })
            }),
            (0, i.jsx)(h.hzk, {
                className: d,
                children: (0, i.jsxs)(h.Kqy, {
                    gap: 16,
                    children: [
                        (0, i.jsx)(h.xJW, {
                            title: 'Modal Size',
                            children: (0, i.jsx)(h.q4e, {
                                value: l,
                                onChange: a,
                                options: Object.entries(h.CgR).map((e) => {
                                    let [t, n] = e;
                                    return {
                                        label: t,
                                        value: n
                                    };
                                })
                            })
                        }),
                        (0, i.jsx)(h.hjN, {
                            title: 'Options',
                            children: (0, i.jsxs)(h.Kqy, {
                                gap: 16,
                                children: [
                                    (0, i.jsx)(h.XZJ, {
                                        value: n,
                                        onChange: (e, t) => s(t),
                                        children: (0, i.jsx)(h.Text, {
                                            variant: 'text-md/medium',
                                            children: 'Show Section Outlines'
                                        })
                                    }),
                                    (0, i.jsx)(h.XZJ, {
                                        value: o,
                                        onChange: (e, t) => c(t),
                                        children: (0, i.jsx)(h.Text, {
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
            (0, i.jsx)(h.mzw, {
                className: d,
                children: (0, i.jsxs)(h.Kqy, {
                    direction: 'horizontal',
                    justify: 'end',
                    gap: 8,
                    children: [
                        o &&
                            (0, i.jsx)(h.zxk, {
                                color: h.zxk.Colors.PRIMARY,
                                look: h.zxk.Looks.FILLED,
                                children: 'Secondary Action'
                            }),
                        (0, i.jsx)(h.zxk, { children: 'Close' })
                    ]
                })
            })
        ]
    });
}
function q(e) {
    let { transitionState: t, onClose: n } = e;
    function r(e) {
        let { children: t } = e;
        return (0, i.jsx)('div', {
            className: S.modalOutlines,
            style: { padding: '16px' },
            children: t
        });
    }
    return (0, i.jsxs)(d.IX, {
        transitionState: t,
        onClose: n,
        children: [
            (0, i.jsx)('div', {
                className: S.modalOutlines,
                children: (0, i.jsx)(p.x, {
                    title: 'Demo Modal',
                    body: 'The ModalHeader can have leading and trailing items on either side of the text',
                    leading: (0, i.jsx)(r, {}),
                    trailing: (0, i.jsx)(r, {})
                })
            }),
            (0, i.jsx)('div', {
                className: S.modalOutlines,
                children: (0, i.jsx)(g.h, {
                    controls: (0, i.jsx)(r, { children: 'This ModalContent renders any controls here' }),
                    children: (0, i.jsx)(r, { children: 'This is the main ModalContent. This area scrolls if there is enough content' })
                })
            }),
            (0, i.jsx)('div', {
                className: S.modalOutlines,
                children: (0, i.jsx)(g.m, { children: (0, i.jsx)(r, { children: 'This is the ModalFooter' }) })
            }),
            (0, i.jsx)('div', {
                className: S.modalOutlines,
                children: (0, i.jsx)(m.G, {
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
function X(e) {
    let { transitionState: t, onClose: n } = e,
        [s, l] = r.useState('md'),
        [a, o] = r.useState('Demo Modal'),
        [c, u] = r.useState('Header body copy'),
        [f, b] = r.useState(!1),
        [_, x] = r.useState(!1),
        [E, j] = r.useState(!1),
        [C, O] = r.useState(!1),
        [S, v] = r.useState(!1);
    return (0, i.jsxs)(d.IX, {
        transitionState: t,
        onClose: n,
        size: s,
        children: [
            (0, i.jsx)(p.x, {
                title: a,
                body: c,
                alignCenter: f
            }),
            (0, i.jsx)(g.h, {
                controls: _
                    ? (0, i.jsx)(h.E1j, {
                          size: h.E1j.Sizes.MEDIUM,
                          placeholder: 'Search',
                          onChange: () => null,
                          query: ''
                      })
                    : void 0,
                children: (0, i.jsxs)(h.Kqy, {
                    gap: 16,
                    children: [
                        (0, i.jsx)(h.xJW, {
                            title: 'Modal Size',
                            children: (0, i.jsx)(h.q4e, {
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
                        (0, i.jsx)(h.xJW, {
                            title: 'Header Title',
                            children: (0, i.jsx)(h.oil, {
                                onChange: o,
                                defaultValue: a
                            })
                        }),
                        (0, i.jsx)(h.xJW, {
                            title: 'Header body',
                            children: (0, i.jsx)(h.oil, {
                                onChange: u,
                                defaultValue: c
                            })
                        }),
                        (0, i.jsx)(h.xJW, {
                            title: 'Optional Content',
                            children: (0, i.jsxs)(h.Kqy, {
                                gap: 12,
                                children: [
                                    (0, i.jsx)(h.XZJ, {
                                        value: f,
                                        onChange: (e, t) => b(t),
                                        children: (0, i.jsx)(h.Text, {
                                            variant: 'text-md/medium',
                                            children: 'Header Align Center'
                                        })
                                    }),
                                    (0, i.jsx)(h.XZJ, {
                                        value: _,
                                        onChange: (e, t) => x(t),
                                        children: (0, i.jsx)(h.Text, {
                                            variant: 'text-md/medium',
                                            children: 'Show Search Input'
                                        })
                                    }),
                                    (0, i.jsx)(h.XZJ, {
                                        value: E,
                                        onChange: (e, t) => j(t),
                                        children: (0, i.jsx)(h.Text, {
                                            variant: 'text-md/medium',
                                            children: 'Show Preview Content'
                                        })
                                    }),
                                    (0, i.jsx)(h.XZJ, {
                                        value: C,
                                        onChange: (e, t) => O(t),
                                        children: (0, i.jsx)(h.Text, {
                                            variant: 'text-md/medium',
                                            children: 'Show Action Bar Leading Input'
                                        })
                                    }),
                                    (0, i.jsx)(h.XZJ, {
                                        value: S,
                                        onChange: (e, t) => v(t),
                                        children: (0, i.jsx)(h.Text, {
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
                (0, i.jsxs)(g.m, {
                    children: [
                        (0, i.jsx)(h.X6q, {
                            variant: 'heading-lg/semibold',
                            children: 'Celebration Station'
                        }),
                        (0, i.jsx)(h.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-secondary',
                            children: '32 Members \u25CF 19 Online'
                        })
                    ]
                }),
            (0, i.jsx)(m.G, {
                leading: C
                    ? (0, i.jsx)(h.XZJ, {
                          value: !1,
                          onChange: () => {},
                          children: (0, i.jsx)(h.Text, {
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
function Q(e) {
    let { transitionState: t, onClose: n } = e;
    function s(e) {
        let { text: t } = e,
            [n, s] = r.useState(!1);
        return (0, i.jsx)('div', {
            style: { padding: '8px 0' },
            children: (0, i.jsx)(h.XZJ, {
                value: n,
                onChange: (e, t) => s(t),
                children: (0, i.jsx)(h.Text, {
                    variant: 'text-md/medium',
                    children: t
                })
            })
        });
    }
    return (0, i.jsxs)(u.u, {
        transitionState: t,
        onClose: n,
        size: 'md',
        title: 'Invite to server',
        input: (0, i.jsx)(h.E1j, {
            size: h.E1j.Sizes.MEDIUM,
            placeholder: 'Search',
            onChange: () => null,
            query: ''
        }),
        preview: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(h.X6q, {
                    variant: 'heading-lg/semibold',
                    children: 'Celebration Station'
                }),
                (0, i.jsx)(h.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-secondary',
                    children: '32 Members \u25CF 19 Online'
                })
            ]
        }),
        actions: [
            {
                variant: 'secondary',
                text: 'Cancel',
                onClick: n
            },
            {
                variant: 'primary',
                text: 'Send Invite',
                icon: h.kBi,
                iconPosition: 'end',
                onClick: n
            }
        ],
        children: [(0, i.jsx)(s, { text: 'John Doe' }), (0, i.jsx)(s, { text: 'Mark' }), (0, i.jsx)(s, { text: 'KawaiiHermit' }), (0, i.jsx)(s, { text: 'YurBruhGio' }), (0, i.jsx)(s, { text: 'John Doe' }), (0, i.jsx)(s, { text: 'Mark' }), (0, i.jsx)(s, { text: 'KawaiiHermit' }), (0, i.jsx)(s, { text: 'YurBruhGio' }), (0, i.jsx)(s, { text: 'John Doe' }), (0, i.jsx)(s, { text: 'Mark' }), (0, i.jsx)(s, { text: 'KawaiiHermit' }), (0, i.jsx)(s, { text: 'YurBruhGio' }), (0, i.jsx)(s, { text: 'John Doe' }), (0, i.jsx)(s, { text: 'Mark' }), (0, i.jsx)(s, { text: 'KawaiiHermit' }), (0, i.jsx)(s, { text: 'YurBruhGio' })]
    });
}
function J(e) {
    let { transitionState: t, onClose: n } = e;
    return (0, i.jsx)(u.u, {
        transitionState: t,
        onClose: n,
        size: 'sm',
        title: 'Alert Modal',
        headerBody: 'This is an alert',
        actions: [
            {
                variant: 'secondary',
                text: 'Cancel',
                onClick: n
            },
            {
                variant: 'destructive-primary',
                text: 'Confirm',
                onClick: n
            }
        ]
    });
}
function $() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: S.section,
                children: [
                    (0, i.jsx)(h.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Modals (Void)'
                    }),
                    (0, i.jsx)(h.zxk, {
                        onClick: () => {
                            (0, h.h7j)((e) => (0, i.jsx)(K, v({}, e)));
                        },
                        children: 'Open modal'
                    }),
                    (0, i.jsx)(h.zxk, {
                        onClick: () => {
                            f.Z.show({
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
                className: S.section,
                children: [
                    (0, i.jsx)(h.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Modals (Mana)'
                    }),
                    (0, i.jsx)(h.zxk, {
                        onClick: () => {
                            (0, h.h7j)((e) => (0, i.jsx)(q, v({}, e)));
                        },
                        children: 'Open modal section visualizer'
                    }),
                    (0, i.jsx)(h.zxk, {
                        onClick: () => {
                            (0, h.h7j)((e) => (0, i.jsx)(X, v({}, e)));
                        },
                        children: 'Open demo modal'
                    }),
                    (0, i.jsx)(h.zxk, {
                        onClick: () => {
                            (0, h.h7j)((e) => (0, i.jsx)(Q, v({}, e)));
                        },
                        children: 'Open sample invite modal'
                    }),
                    (0, i.jsx)(h.zxk, {
                        onClick: () => {
                            (0, h.h7j)((e) => (0, i.jsx)(J, v({}, e)));
                        },
                        children: 'Open sample alert modal'
                    })
                ]
            })
        ]
    });
}
function ee() {
    let e = (0, o.e7)([b.Z], () => b.Z.gradientPreset);
    return (0, i.jsx)(h.f6W, {
        theme: O.BR.DARKER,
        disableAdaptiveTheme: !0,
        children: (t) =>
            (0, i.jsxs)('div', {
                className: l()(t, S.section),
                children: [
                    (0, i.jsx)(h.zxk, {
                        color: h.zxk.Colors.PRIMARY,
                        look: h.zxk.Looks.FILLED,
                        fullWidth: !0,
                        children: 'Button'
                    }),
                    (0, i.jsx)(h.f6W, {
                        theme: O.BR.LIGHT,
                        children: (t) =>
                            (0, i.jsxs)('div', {
                                className: l()(t, S.section),
                                children: [
                                    (0, i.jsx)(h.zxk, {
                                        color: h.zxk.Colors.PRIMARY,
                                        look: h.zxk.Looks.FILLED,
                                        fullWidth: !0,
                                        children: 'Button'
                                    }),
                                    (0, i.jsx)(h.f6W, {
                                        theme: O.BR.DARKER,
                                        children: (e) =>
                                            (0, i.jsx)('div', {
                                                className: l()(e, S.section),
                                                children: (0, i.jsx)(h.zxk, {
                                                    color: h.zxk.Colors.PRIMARY,
                                                    look: h.zxk.Looks.FILLED,
                                                    fullWidth: !0,
                                                    children: 'Button'
                                                })
                                            })
                                    }),
                                    (0, i.jsx)(h.f6W, {
                                        gradient: e,
                                        children: (e) =>
                                            (0, i.jsx)('div', {
                                                className: l()(e, S.section),
                                                children: (0, i.jsx)(h.zxk, {
                                                    color: h.zxk.Colors.PRIMARY,
                                                    look: h.zxk.Looks.FILLED,
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
