n.d(t, { Z: () => w }), n(704826), n(35282), n(388685), n(361932), n(187205);
var i = n(255367),
    r = n(73800),
    s = n(120356),
    l = n.n(s),
    a = n(971809),
    o = n(442837),
    c = n(844477),
    d = n(257465),
    u = n(988192),
    m = n(481060),
    g = n(240872),
    p = n(514361),
    h = n(705262),
    f = n(526156),
    b = n(706705),
    _ = n(726985),
    x = n(981631),
    E = n(231338),
    C = n(426617);
function j(e) {
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
function O(e, t) {
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
let S = Object.keys(m.zxk.Colors).filter((e) => 'CUSTOM' !== e),
    v = Object.keys(m.zxk.Looks).filter((e) => 'BLANK' !== e),
    T = Object.keys(m.zxk.Sizes).filter((e) => 'NONE' !== e);
function I() {
    return (0, i.jsxs)('div', {
        className: C.root,
        children: [
            (0, i.jsx)(m.Qjf, {
                variant: 'primary',
                text: 'Testing',
                external: !0
            }),
            (0, i.jsx)(c.z, {
                variant: 'destructive-secondary',
                text: 'Testing',
                iconPosition: 'end',
                icon: m.XHJ
            }),
            (0, i.jsx)(k, {}),
            (0, i.jsx)(F, {}),
            (0, i.jsx)(H, {}),
            (0, i.jsx)(V, {}),
            (0, i.jsx)(U, {}),
            (0, i.jsx)(M, {}),
            (0, i.jsx)(B, {}),
            (0, i.jsx)(W, {}),
            (0, i.jsx)(N, {}),
            (0, i.jsx)(K, {})
        ]
    });
}
function N() {
    let e = Object.keys(m.DM8);
    return (0, i.jsxs)('div', {
        className: C.section,
        children: [
            (0, i.jsx)(m.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Notice'
            }),
            (0, i.jsx)(m.Kqy, {
                gap: 16,
                children: e.map((e) =>
                    (0, i.jsx)(
                        m.qXd,
                        {
                            color: m.DM8[e],
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
let y = ['neutral', 'blue_new', 'blurple', 'green_new', 'red_new', 'teal_new', 'yellow_new', 'orange_new', 'pink', 'purple'],
    A = ['background-surface-highest', 'background-surface-higher', 'background-surface-high', 'background-base-low', 'background-base-lower', 'background-base-lowest'],
    P = ['', 'background-mod-subtle', 'background-mod-normal', 'background-mod-strong'],
    R = ['critical', 'warning', 'positive', 'info'],
    D = ['text-default', 'text-primary', 'text-secondary', 'text-tertiary', 'text-feedback-critical', 'text-feedback-warning', 'text-feedback-positive', 'text-feedback-info', 'premium-nitro-pink-text'];
function Z() {
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(m.X6q, {
                variant: 'heading-xl/semibold',
                className: C.heading,
                children: 'Background Colors'
            }),
            A.map((e) =>
                (0, i.jsxs)(
                    'div',
                    {
                        className: C.palette,
                        style: {
                            backgroundColor: 'var(--'.concat(e, ')'),
                            padding: 24
                        },
                        children: [
                            (0, i.jsx)(m.Text, {
                                variant: 'text-md/medium',
                                children: e
                            }),
                            (0, i.jsx)('div', {
                                style: {
                                    display: 'grid',
                                    gap: 8,
                                    gridTemplateColumns: 'repeat(3, 1fr)'
                                },
                                children: P.map((e) =>
                                    (0, i.jsxs)(
                                        'div',
                                        {
                                            className: C.color,
                                            style: {
                                                padding: 16,
                                                background: 'var(--'.concat(e, ')')
                                            },
                                            children: [
                                                (0, i.jsx)(m.Text, {
                                                    variant: 'text-xs/semibold',
                                                    color: 'header-secondary',
                                                    children: e
                                                }),
                                                (0, i.jsx)('hr', { className: C.sectionDivider }),
                                                D.map((e) =>
                                                    (0, i.jsx)(
                                                        m.Text,
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
                            (0, i.jsx)('hr', { className: C.sectionDivider }),
                            (0, i.jsx)('div', {
                                style: {
                                    display: 'grid',
                                    gap: 8,
                                    gridTemplateColumns: 'repeat(3, 1fr)'
                                },
                                children: R.map((e) => {
                                    let t = 'var(--text-feedback-'.concat(e, ')');
                                    return (0, i.jsxs)(
                                        'div',
                                        {
                                            className: C.color,
                                            style: {
                                                padding: 16,
                                                background: 'var(--background-feedback-'.concat(e, ')')
                                            },
                                            children: [
                                                (0, i.jsx)(m.Text, {
                                                    variant: 'text-xs/semibold',
                                                    color: 'header-secondary'
                                                }),
                                                (0, i.jsxs)(m.Kqy, {
                                                    children: [
                                                        (0, i.jsxs)(m.Text, {
                                                            variant: 'text-xs/semibold',
                                                            style: { color: t },
                                                            children: ['background-feedback-', e]
                                                        }),
                                                        (0, i.jsx)(m.Text, {
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
            (0, i.jsx)(m.X6q, {
                variant: 'heading-xl/semibold',
                className: C.heading,
                children: 'Scales'
            }),
            y.map((e) =>
                (0, i.jsxs)(
                    'div',
                    {
                        className: C.palette,
                        children: [
                            (0, i.jsx)(m.Text, {
                                variant: 'text-lg/semibold',
                                children: e
                            }),
                            (0, i.jsx)('div', {
                                className: C.colors,
                                children: Array.from({ length: 100 }, (t, n) =>
                                    (0, i.jsx)(
                                        'div',
                                        {
                                            className: C.color,
                                            style: { background: 'var(--'.concat(e.replace('_', '-'), '-').concat(n + 1, ')') },
                                            children: (0, i.jsx)(m.f6W, {
                                                theme: n < 50 ? 'light' : 'dark',
                                                children: (t) =>
                                                    (0, i.jsxs)(m.Text, {
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
function w() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(f.Z, {
                parentSetting: _.s6.DESIGN_SYSTEMS,
                settingsSection: x.oAB.DESIGN_SYSTEMS,
                tabs: [
                    {
                        title: 'Components',
                        component: () => (0, i.jsx)(I, {}),
                        setting: _.s6.DESIGN_SYSTEMS_COMPONENTS
                    },
                    {
                        title: 'Colors',
                        component: () => (0, i.jsx)(Z, {}),
                        setting: _.s6.DESIGN_SYSTEMS_COLORS
                    },
                    {
                        title: 'Animations',
                        component: () => (0, i.jsx)(b.Z, {}),
                        setting: _.s6.ANIMATION_TESTING
                    }
                ]
            }),
            (0, i.jsx)('div', {
                className: C.themes,
                children: (0, i.jsx)(h.ZP, {
                    type: h.yH.SETTINGS,
                    children: (0, i.jsx)(h.ZP.Basic, { className: C.themeSelectionGroup })
                })
            })
        ]
    });
}
function k() {
    let [e, t] = r.useState(!1),
        n = S.flatMap((e) => [
            ...v.map((t) =>
                (0, i.jsxs)(
                    m.zxk,
                    {
                        color: m.zxk.Colors[e],
                        look: m.zxk.Looks[t],
                        fullWidth: !0,
                        style: { textTransform: 'capitalize' },
                        children: [e.toLowerCase(), ' - ', t.toLowerCase()]
                    },
                    e + t
                )
            ),
            (0, i.jsx)('hr', { className: C.sectionDivider }, e + 'divider')
        ]),
        s = T.flatMap((e) =>
            (0, i.jsx)(m.zxk, {
                color: m.zxk.Colors.BRAND,
                look: m.zxk.Looks.FILLED,
                size: m.zxk.Sizes[e],
                fullWidth: !0,
                style: { textTransform: 'capitalize' },
                children: e.toLowerCase()
            })
        );
    return (0, i.jsxs)('div', {
        className: C.section,
        children: [
            (0, i.jsx)(m.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Buttons'
            }),
            (0, i.jsx)(m.XZJ, {
                value: e,
                onChange: (e, n) => t(n),
                children: (0, i.jsx)(m.Text, {
                    variant: 'text-md/medium',
                    children: 'Show all buttons (WIP)'
                })
            }),
            e
                ? (0, i.jsxs)('div', {
                      className: C.buttons,
                      children: [
                          (0, i.jsx)(m.f6W, {
                              theme: E.BR.DARKER,
                              children: (e) =>
                                  (0, i.jsx)('div', {
                                      className: l()(e, C.section),
                                      children: n
                                  })
                          }),
                          (0, i.jsx)(m.f6W, {
                              theme: E.BR.LIGHT,
                              children: (e) =>
                                  (0, i.jsx)('div', {
                                      className: l()(e, C.section),
                                      children: n
                                  })
                          }),
                          (0, i.jsx)(m.f6W, {
                              theme: E.BR.DARKER,
                              children: (e) =>
                                  (0, i.jsxs)('div', {
                                      className: l()(e, C.section),
                                      children: [
                                          (0, i.jsx)(m.zxk, {
                                              color: m.zxk.Colors.BRAND,
                                              look: m.zxk.Looks.FILLED,
                                              disabled: !0,
                                              children: 'Disabled'
                                          }),
                                          s
                                      ]
                                  })
                          }),
                          (0, i.jsx)(m.f6W, {
                              theme: E.BR.LIGHT,
                              children: (e) =>
                                  (0, i.jsxs)('div', {
                                      className: l()(e, C.section),
                                      children: [
                                          (0, i.jsx)(m.zxk, {
                                              color: m.zxk.Colors.BRAND,
                                              look: m.zxk.Looks.FILLED,
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
                children: (0, i.jsx)(m.zxk, {
                    color: m.zxk.Colors.BRAND,
                    look: m.zxk.Looks.FILLED,
                    size: m.zxk.Sizes.TINY,
                    children: 'Tiny'
                })
            }),
            (0, i.jsx)('div', {
                style: { display: 'flex' },
                children: (0, i.jsx)(m.zxk, {
                    color: m.zxk.Colors.BRAND,
                    look: m.zxk.Looks.FILLED,
                    size: m.zxk.Sizes.SMALL,
                    children: 'Small'
                })
            }),
            (0, i.jsx)('div', {
                style: { display: 'flex' },
                children: (0, i.jsx)(m.zxk, {
                    color: m.zxk.Colors.BRAND,
                    look: m.zxk.Looks.FILLED,
                    size: m.zxk.Sizes.MEDIUM,
                    children: 'Medium'
                })
            }),
            (0, i.jsx)('div', {
                style: { display: 'flex' },
                children: (0, i.jsx)(m.zxk, {
                    color: m.zxk.Colors.BRAND,
                    look: m.zxk.Looks.FILLED,
                    size: m.zxk.Sizes.LARGE,
                    children: 'Large'
                })
            }),
            (0, i.jsx)(G, {}),
            (0, i.jsx)(L, {})
        ]
    });
}
function L() {
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
function B() {
    let [e, t] = r.useState('1');
    return (0, i.jsxs)('div', {
        className: C.section,
        children: [
            (0, i.jsx)(m.X6q, {
                variant: 'heading-xl/semibold',
                children: 'TabBar'
            }),
            (0, i.jsxs)(m.njP, {
                type: 'top',
                look: 'brand',
                selectedItem: e,
                onItemSelect: (e) => t(e),
                className: C.tabBar,
                children: [
                    (0, i.jsx)(m.njP.Item, {
                        id: '1',
                        children: 'Tab 1'
                    }),
                    (0, i.jsx)(m.njP.Item, {
                        id: '2',
                        children: 'Tab 2'
                    }),
                    (0, i.jsx)(m.njP.Item, {
                        id: '3',
                        children: 'Tab 3'
                    })
                ]
            }),
            (0, i.jsxs)(m.Text, {
                variant: 'text-md/medium',
                children: ['Selected tab: ', e]
            })
        ]
    });
}
function M() {
    let [e, t] = r.useState(1),
        [n, s] = r.useState(!1),
        [l, a] = r.useState(5),
        [o, c] = r.useState(!1),
        d = r.useRef(null);
    return (0, i.jsxs)('div', {
        className: C.section,
        children: [
            (0, i.jsx)(m.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Context Menus'
            }),
            (0, i.jsx)('span', {
                children: (0, i.jsx)(m.yRy, {
                    targetElementRef: d,
                    shouldShow: o,
                    renderPopout: () =>
                        (0, i.jsxs)(m.v2r, {
                            navId: 'demo',
                            'aria-label': 'Demo Actions',
                            onClose: () => null,
                            onSelect: () => null,
                            children: [
                                (0, i.jsxs)(m.kSQ, {
                                    label: 'Basic items',
                                    children: [
                                        (0, i.jsx)(m.sNh, {
                                            id: 'first',
                                            label: 'An option'
                                        }),
                                        (0, i.jsx)(m.sNh, {
                                            id: 'second',
                                            label: 'An option with an icon',
                                            icon: m.kBi
                                        }),
                                        (0, i.jsxs)(m.sNh, {
                                            id: 'item-with-submenu',
                                            label: 'Item with submenu',
                                            children: [
                                                (0, i.jsx)(m.sNh, {
                                                    id: 'subitem-1',
                                                    label: 'Subitem 1'
                                                }),
                                                (0, i.jsx)(m.sNh, {
                                                    id: 'subitem-2',
                                                    label: 'Subitem 2'
                                                }),
                                                (0, i.jsx)(m.sNh, {
                                                    id: 'subitem-3',
                                                    label: 'Subitem 3'
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, i.jsxs)(m.kSQ, {
                                    label: 'Inputs',
                                    children: [
                                        (0, i.jsx)(m.S89, {
                                            id: 'checkable',
                                            label: 'Checkbox',
                                            checked: n,
                                            action: () => s(!n)
                                        }),
                                        (0, i.jsx)(m.k5B, {
                                            id: 'radio-one',
                                            group: 'a-group',
                                            label: 'Radio 1',
                                            action: () => t(1),
                                            checked: 1 === e
                                        }),
                                        (0, i.jsx)(m.k5B, {
                                            id: 'radio-two',
                                            group: 'a-group',
                                            label: 'Radio 2',
                                            action: () => t(2),
                                            checked: 2 === e
                                        }),
                                        (0, i.jsx)(m.k5B, {
                                            id: 'radio-three',
                                            group: 'a-group',
                                            label: 'Radio 3',
                                            action: () => t(3),
                                            checked: 3 === e
                                        }),
                                        (0, i.jsx)(m.II_, {
                                            id: 'slider',
                                            label: 'Slider',
                                            control: (e, t) =>
                                                (0, i.jsx)(m._wy, {
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
                                (0, i.jsx)(m.Clw, {}),
                                (0, i.jsx)(m.sNh, {
                                    id: 'danger',
                                    label: 'A destructive option',
                                    color: 'danger',
                                    icon: m.XHJ
                                })
                            ]
                        }),
                    children: () =>
                        (0, i.jsx)(m.zxk, {
                            buttonRef: d,
                            onClick: () => c(!o),
                            children: 'Toggle context menu'
                        })
                })
            })
        ]
    });
}
function U() {
    return (0, i.jsxs)('div', {
        className: C.section,
        children: [
            (0, i.jsx)(m.X6q, {
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
                    (0, i.jsx)(m.ua7, {
                        text: "Here's top aligned tooltip text!",
                        position: 'top',
                        children: (e) => (0, i.jsx)(m.zxk, O(j({}, e), { children: 'Tooltip on the top' }))
                    }),
                    (0, i.jsx)(m.ua7, {
                        text: "Here's right aligned tooltip text!",
                        position: 'left',
                        children: (e) => (0, i.jsx)(m.zxk, O(j({}, e), { children: 'Tooltip on the left' }))
                    }),
                    (0, i.jsx)(m.ua7, {
                        text: "Here's bottom aligned tooltip text!",
                        position: 'bottom',
                        children: (e) => (0, i.jsx)(m.zxk, O(j({}, e), { children: 'Tooltip on the bottom' }))
                    }),
                    (0, i.jsx)(m.ua7, {
                        text: "Here's right aligned tooltip text!",
                        position: 'right',
                        children: (e) => (0, i.jsx)(m.zxk, O(j({}, e), { children: 'Tooltip on the right' }))
                    })
                ]
            }),
            (0, i.jsx)('div', {})
        ]
    });
}
function V() {
    let [e, t] = r.useState(!1),
        [n, s] = r.useState(!1),
        [l, a] = r.useState('auto');
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: C.section,
                children: [
                    (0, i.jsx)(m.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Checkboxes'
                    }),
                    (0, i.jsx)(m.XZJ, {
                        value: e,
                        onChange: (e, n) => t(n),
                        children: (0, i.jsx)(m.Text, {
                            variant: 'text-md/medium',
                            children: 'Checkbox input'
                        })
                    }),
                    (0, i.jsx)(m.XZJ, {
                        value: e,
                        onChange: (e, n) => t(n),
                        disabled: !0,
                        children: (0, i.jsx)(m.Text, {
                            variant: 'text-md/medium',
                            children: 'Disabled checkbox'
                        })
                    }),
                    (0, i.jsx)(m.XZJ, {
                        value: e,
                        onChange: (e, n) => t(n),
                        readOnly: !0,
                        children: (0, i.jsx)(m.Text, {
                            variant: 'text-md/medium',
                            children: 'Read-only checkbox'
                        })
                    }),
                    (0, i.jsx)(m.XZJ, {
                        value: e,
                        onChange: (e, n) => t(n),
                        type: m.XZJ.Types.ROW,
                        children: (0, i.jsx)(m.Text, {
                            variant: 'text-md/medium',
                            children: 'Checkbox row'
                        })
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: C.section,
                children: [
                    (0, i.jsx)(m.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Switches'
                    }),
                    (0, i.jsx)(m.j7V, {
                        hideBorder: !0,
                        value: n,
                        onChange: (e) => s(e),
                        children: 'FormSwitch with a label'
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: C.section,
                children: [
                    (0, i.jsx)(m.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Radio Buttons'
                    }),
                    (0, i.jsx)(m.xJW, {
                        children: (0, i.jsx)(m.FXm, {
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
                className: C.section,
                children: [
                    (0, i.jsx)(m.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Slider'
                    }),
                    (0, i.jsxs)('div', {
                        className: C.slider,
                        children: [
                            (0, i.jsx)(m.Text, {
                                variant: 'text-md/medium',
                                children: 'Standard slider'
                            }),
                            (0, i.jsx)(m.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                defaultValue: 50,
                                markers: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: C.slider,
                        children: [
                            (0, i.jsx)(m.Text, {
                                variant: 'text-md/medium',
                                children: 'Sticky markers'
                            }),
                            (0, i.jsx)(m.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                markers: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
                                stickToMarkers: !0
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: C.slider,
                        children: [
                            (0, i.jsx)(m.Text, {
                                variant: 'text-md/medium',
                                children: 'Non-uniform markers'
                            }),
                            (0, i.jsx)(m.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                markers: [0, 20, 50, 100],
                                equidistant: !1
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: C.slider,
                        children: [
                            (0, i.jsx)(m.Text, {
                                variant: 'text-md/medium',
                                children: 'Non-uniform equidistant markers'
                            }),
                            (0, i.jsx)(m.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                markers: [0, 20, 50, 100],
                                equidistant: !0
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: C.slider,
                        children: [
                            (0, i.jsx)(m.Text, {
                                variant: 'text-md/medium',
                                children: 'No markers'
                            }),
                            (0, i.jsx)(m.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: C.slider,
                        children: [
                            (0, i.jsx)(m.Text, {
                                variant: 'text-md/medium',
                                children: 'Mini slider'
                            }),
                            (0, i.jsx)(m.iRW, {
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
function G() {
    return (0, i.jsxs)('div', {
        className: C.shinyButtonExamples,
        children: [
            (0, i.jsx)(m.gtL, {
                size: m.zxk.Sizes.MEDIUM,
                shineSize: m.gtL.ShineSizes.SMALL,
                onClick: () => {},
                children: 'Shiny Button'
            }),
            (0, i.jsx)(m.gtL, {
                size: m.zxk.Sizes.MEDIUM,
                shineSize: m.gtL.ShineSizes.SMALL,
                onlyShineOnHover: !0,
                onClick: () => {},
                children: 'Shine on Hover'
            })
        ]
    });
}
function F() {
    let [e, t] = r.useState(null),
        [n, s] = r.useState(null),
        [l, o] = r.useState([]),
        [c, d] = r.useState([]),
        [u, g] = r.useState([]);
    return (0, i.jsxs)('div', {
        className: C.searchableSelectExamples,
        children: [
            (0, i.jsx)(m.X6q, {
                variant: 'heading-xl/semibold',
                children: 'SearchableSelect'
            }),
            (0, i.jsx)(m.VcW, {
                placeholder: 'Single select',
                value: e,
                onChange: (e) => t(e),
                options: a.G
            }),
            (0, i.jsx)(m.VcW, {
                placeholder: 'Single select (clearable)',
                clearable: !0,
                value: n,
                onChange: (e) => s(e),
                options: a.G
            }),
            (0, i.jsx)(m.VcW, {
                placeholder: 'Multi select',
                multi: !0,
                value: l,
                onChange: (e) => o(e),
                options: a.G
            }),
            (0, i.jsx)(m.VcW, {
                placeholder: 'Multi select (clearable)',
                multi: !0,
                clearable: !0,
                value: u,
                onChange: (e) => g(e),
                options: a.G
            }),
            (0, i.jsx)(m.VcW, {
                placeholder: 'Multi select (custom pills)',
                multi: !0,
                value: c,
                onChange: (e) => d(e),
                options: a.G,
                hidePills: !0,
                customPillContainerClassName: C.customPillContainer,
                renderCustomPill: (e) =>
                    (0, i.jsx)('div', {
                        style: {
                            padding: 8,
                            border: '1px solid var(--bg-brand)',
                            borderRadius: 8
                        },
                        children: (0, i.jsx)(m.Text, {
                            variant: 'text-md/bold',
                            children: e.label
                        })
                    })
            })
        ]
    });
}
function H() {
    let [e, t] = r.useState(''),
        [n, s] = r.useState(''),
        [l, a] = r.useState('');
    return (0, i.jsxs)('div', {
        className: C.section,
        children: [
            (0, i.jsx)(m.X6q, {
                variant: 'heading-xl/semibold',
                children: 'TextInput'
            }),
            (0, i.jsx)(m.xJW, {
                children: (0, i.jsx)(m.E1j, {
                    size: m.E1j.Sizes.MEDIUM,
                    placeholder: 'Search...',
                    onChange: (e) => a(e),
                    query: l,
                    onClear: () => a('')
                })
            }),
            (0, i.jsx)(m.xJW, {
                title: 'Disabled',
                disabled: !0,
                children: (0, i.jsx)(m.oil, {
                    placeholder: 'Disabled',
                    disabled: !0
                })
            }),
            (0, i.jsx)(m.xJW, {
                title: 'Error',
                children: (0, i.jsx)(m.oil, {
                    required: !0,
                    error: 'This must have a value'
                })
            }),
            (0, i.jsx)(m.xJW, {
                title: 'Error',
                children: (0, i.jsx)(m.oil, {
                    defaultValue: 'Not a valid value',
                    error: 'This has an error.'
                })
            }),
            (0, i.jsx)(m.xJW, {
                title: 'Read only',
                children: (0, i.jsx)(m.oil, {
                    value: 'Read-only, not-editable field',
                    editable: !1
                })
            }),
            (0, i.jsx)(m.xJW, {
                title: 'Input with a label',
                children: (0, i.jsx)(m.oil, {
                    placeholder: 'Real placeholder',
                    value: e,
                    onChange: t
                })
            }),
            (0, i.jsx)(m.xJW, {
                title: 'Text area',
                children: (0, i.jsx)(m.Kx8, {
                    placeholder: 'Text area placeholder',
                    showCharacterCount: !0,
                    value: n,
                    onChange: s
                })
            })
        ]
    });
}
function z(e) {
    let { transitionState: t } = e,
        [n, s] = r.useState(!1),
        [l, a] = r.useState(m.CgR.SMALL),
        [o, c] = r.useState(!1),
        d = n ? C.modalOutlines : '';
    return (0, i.jsxs)(m.Y0X, {
        transitionState: t,
        size: l,
        children: [
            (0, i.jsx)(m.xBx, {
                className: d,
                children: (0, i.jsx)(m.X6q, {
                    variant: 'heading-xl/semibold',
                    children: 'Modal'
                })
            }),
            (0, i.jsx)(m.hzk, {
                className: d,
                children: (0, i.jsxs)(m.Kqy, {
                    gap: 16,
                    children: [
                        (0, i.jsx)(m.xJW, {
                            title: 'Modal Size',
                            children: (0, i.jsx)(m.q4e, {
                                value: l,
                                onChange: a,
                                options: Object.entries(m.CgR).map((e) => {
                                    let [t, n] = e;
                                    return {
                                        label: t,
                                        value: n
                                    };
                                })
                            })
                        }),
                        (0, i.jsx)(m.hjN, {
                            title: 'Options',
                            children: (0, i.jsxs)(m.Kqy, {
                                gap: 16,
                                children: [
                                    (0, i.jsx)(m.XZJ, {
                                        value: n,
                                        onChange: (e, t) => s(t),
                                        children: (0, i.jsx)(m.Text, {
                                            variant: 'text-md/medium',
                                            children: 'Show Section Outlines'
                                        })
                                    }),
                                    (0, i.jsx)(m.XZJ, {
                                        value: o,
                                        onChange: (e, t) => c(t),
                                        children: (0, i.jsx)(m.Text, {
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
            (0, i.jsx)(m.mzw, {
                className: d,
                children: (0, i.jsxs)(m.Kqy, {
                    direction: 'horizontal',
                    justify: 'end',
                    gap: 8,
                    children: [
                        o &&
                            (0, i.jsx)(m.zxk, {
                                color: m.zxk.Colors.PRIMARY,
                                look: m.zxk.Looks.FILLED,
                                children: 'Secondary Action'
                            }),
                        (0, i.jsx)(m.zxk, { children: 'Close' })
                    ]
                })
            })
        ]
    });
}
function Y(e) {
    let { onClose: t } = e;
    return (0, i.jsx)(d.I, {
        onClose: t,
        children: (0, i.jsx)(u.O, {
            title: 'Modal',
            body: 'This is some body text'
        })
    });
}
function W() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: C.section,
                children: [
                    (0, i.jsx)(m.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Modals (Void)'
                    }),
                    (0, i.jsx)(m.zxk, {
                        onClick: () => {
                            (0, m.h7j)((e) => (0, i.jsx)(z, j({}, e)));
                        },
                        children: 'Open modal'
                    }),
                    (0, i.jsx)(m.zxk, {
                        onClick: () => {
                            g.Z.show({
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
                className: C.section,
                children: [
                    (0, i.jsx)(m.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Modals (Mana)'
                    }),
                    (0, i.jsx)(m.zxk, {
                        onClick: () => {
                            (0, m.h7j)((e) => (0, i.jsx)(Y, j({}, e)));
                        },
                        children: 'Open modal'
                    })
                ]
            })
        ]
    });
}
function K() {
    let e = (0, o.e7)([p.Z], () => p.Z.gradientPreset);
    return (0, i.jsx)(m.f6W, {
        theme: E.BR.DARKER,
        disableAdaptiveTheme: !0,
        children: (t) =>
            (0, i.jsxs)('div', {
                className: l()(t, C.section),
                children: [
                    (0, i.jsx)(m.zxk, {
                        color: m.zxk.Colors.PRIMARY,
                        look: m.zxk.Looks.FILLED,
                        fullWidth: !0,
                        children: 'Button'
                    }),
                    (0, i.jsx)(m.f6W, {
                        theme: E.BR.LIGHT,
                        children: (t) =>
                            (0, i.jsxs)('div', {
                                className: l()(t, C.section),
                                children: [
                                    (0, i.jsx)(m.zxk, {
                                        color: m.zxk.Colors.PRIMARY,
                                        look: m.zxk.Looks.FILLED,
                                        fullWidth: !0,
                                        children: 'Button'
                                    }),
                                    (0, i.jsx)(m.f6W, {
                                        theme: E.BR.DARKER,
                                        children: (e) =>
                                            (0, i.jsx)('div', {
                                                className: l()(e, C.section),
                                                children: (0, i.jsx)(m.zxk, {
                                                    color: m.zxk.Colors.PRIMARY,
                                                    look: m.zxk.Looks.FILLED,
                                                    fullWidth: !0,
                                                    children: 'Button'
                                                })
                                            })
                                    }),
                                    (0, i.jsx)(m.f6W, {
                                        gradient: e,
                                        children: (e) =>
                                            (0, i.jsx)('div', {
                                                className: l()(e, C.section),
                                                children: (0, i.jsx)(m.zxk, {
                                                    color: m.zxk.Colors.PRIMARY,
                                                    look: m.zxk.Looks.FILLED,
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
