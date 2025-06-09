n.d(t, { Z: () => k }), n(704826), n(35282), n(388685), n(361932), n(187205);
var i = n(255367),
    r = n(73800),
    s = n(120356),
    l = n.n(s),
    a = n(971809),
    o = n(442837),
    c = n(844477),
    d = n(257465),
    u = n(369585),
    m = n(988192),
    g = n(481060),
    p = n(240872),
    h = n(514361),
    f = n(705262),
    b = n(526156),
    _ = n(706705),
    x = n(726985),
    E = n(981631),
    C = n(231338),
    j = n(426617);
function O(e) {
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
function S(e, t) {
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
let v = Object.keys(g.zxk.Colors).filter((e) => 'CUSTOM' !== e),
    T = Object.keys(g.zxk.Looks).filter((e) => 'BLANK' !== e),
    I = Object.keys(g.zxk.Sizes).filter((e) => 'NONE' !== e);
function N() {
    return (0, i.jsxs)('div', {
        className: j.root,
        children: [
            (0, i.jsx)(g.Qjf, {
                variant: 'primary',
                text: 'Testing',
                external: !0
            }),
            (0, i.jsx)(c.z, {
                variant: 'destructive-secondary',
                text: 'Testing',
                iconPosition: 'end',
                icon: g.XHJ
            }),
            (0, i.jsx)(L, {}),
            (0, i.jsx)(H, {}),
            (0, i.jsx)(z, {}),
            (0, i.jsx)(G, {}),
            (0, i.jsx)(V, {}),
            (0, i.jsx)(U, {}),
            (0, i.jsx)(M, {}),
            (0, i.jsx)(K, {}),
            (0, i.jsx)(y, {}),
            (0, i.jsx)(q, {})
        ]
    });
}
function y() {
    let e = Object.keys(g.DM8);
    return (0, i.jsxs)('div', {
        className: j.section,
        children: [
            (0, i.jsx)(g.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Notice'
            }),
            (0, i.jsx)(g.Kqy, {
                gap: 16,
                children: e.map((e) =>
                    (0, i.jsx)(
                        g.qXd,
                        {
                            color: g.DM8[e],
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
let A = ['neutral', 'blue_new', 'blurple', 'green_new', 'red_new', 'teal_new', 'yellow_new', 'orange_new', 'pink', 'purple'],
    P = ['background-surface-highest', 'background-surface-higher', 'background-surface-high', 'background-base-low', 'background-base-lower', 'background-base-lowest'],
    R = ['', 'background-mod-subtle', 'background-mod-normal', 'background-mod-strong'],
    D = ['critical', 'warning', 'positive', 'info'],
    Z = ['text-default', 'text-primary', 'text-secondary', 'text-tertiary', 'text-feedback-critical', 'text-feedback-warning', 'text-feedback-positive', 'text-feedback-info', 'premium-nitro-pink-text'];
function w() {
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(g.X6q, {
                variant: 'heading-xl/semibold',
                className: j.heading,
                children: 'Background Colors'
            }),
            P.map((e) =>
                (0, i.jsxs)(
                    'div',
                    {
                        className: j.palette,
                        style: {
                            backgroundColor: 'var(--'.concat(e, ')'),
                            padding: 24
                        },
                        children: [
                            (0, i.jsx)(g.Text, {
                                variant: 'text-md/medium',
                                children: e
                            }),
                            (0, i.jsx)('div', {
                                style: {
                                    display: 'grid',
                                    gap: 8,
                                    gridTemplateColumns: 'repeat(3, 1fr)'
                                },
                                children: R.map((e) =>
                                    (0, i.jsxs)(
                                        'div',
                                        {
                                            className: j.color,
                                            style: {
                                                padding: 16,
                                                background: 'var(--'.concat(e, ')')
                                            },
                                            children: [
                                                (0, i.jsx)(g.Text, {
                                                    variant: 'text-xs/semibold',
                                                    color: 'header-secondary',
                                                    children: e
                                                }),
                                                (0, i.jsx)('hr', { className: j.sectionDivider }),
                                                Z.map((e) =>
                                                    (0, i.jsx)(
                                                        g.Text,
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
                            (0, i.jsx)('hr', { className: j.sectionDivider }),
                            (0, i.jsx)('div', {
                                style: {
                                    display: 'grid',
                                    gap: 8,
                                    gridTemplateColumns: 'repeat(3, 1fr)'
                                },
                                children: D.map((e) => {
                                    let t = 'var(--text-feedback-'.concat(e, ')');
                                    return (0, i.jsxs)(
                                        'div',
                                        {
                                            className: j.color,
                                            style: {
                                                padding: 16,
                                                background: 'var(--background-feedback-'.concat(e, ')')
                                            },
                                            children: [
                                                (0, i.jsx)(g.Text, {
                                                    variant: 'text-xs/semibold',
                                                    color: 'header-secondary'
                                                }),
                                                (0, i.jsxs)(g.Kqy, {
                                                    children: [
                                                        (0, i.jsxs)(g.Text, {
                                                            variant: 'text-xs/semibold',
                                                            style: { color: t },
                                                            children: ['background-feedback-', e]
                                                        }),
                                                        (0, i.jsx)(g.Text, {
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
            (0, i.jsx)(g.X6q, {
                variant: 'heading-xl/semibold',
                className: j.heading,
                children: 'Scales'
            }),
            A.map((e) =>
                (0, i.jsxs)(
                    'div',
                    {
                        className: j.palette,
                        children: [
                            (0, i.jsx)(g.Text, {
                                variant: 'text-lg/semibold',
                                children: e
                            }),
                            (0, i.jsx)('div', {
                                className: j.colors,
                                children: Array.from({ length: 100 }, (t, n) =>
                                    (0, i.jsx)(
                                        'div',
                                        {
                                            className: j.color,
                                            style: { background: 'var(--'.concat(e.replace('_', '-'), '-').concat(n + 1, ')') },
                                            children: (0, i.jsx)(g.f6W, {
                                                theme: n < 50 ? 'light' : 'dark',
                                                children: (t) =>
                                                    (0, i.jsxs)(g.Text, {
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
function k() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(b.Z, {
                parentSetting: x.s6.DESIGN_SYSTEMS,
                settingsSection: E.oAB.DESIGN_SYSTEMS,
                tabs: [
                    {
                        title: 'Components',
                        component: () => (0, i.jsx)(N, {}),
                        setting: x.s6.DESIGN_SYSTEMS_COMPONENTS
                    },
                    {
                        title: 'Colors',
                        component: () => (0, i.jsx)(w, {}),
                        setting: x.s6.DESIGN_SYSTEMS_COLORS
                    },
                    {
                        title: 'Animations',
                        component: () => (0, i.jsx)(_.Z, {}),
                        setting: x.s6.ANIMATION_TESTING
                    }
                ]
            }),
            (0, i.jsx)('div', {
                className: j.themes,
                children: (0, i.jsx)(f.ZP, {
                    type: f.yH.SETTINGS,
                    children: (0, i.jsx)(f.ZP.Basic, { className: j.themeSelectionGroup })
                })
            })
        ]
    });
}
function L() {
    let [e, t] = r.useState(!1),
        n = v.flatMap((e) => [
            ...T.map((t) =>
                (0, i.jsxs)(
                    g.zxk,
                    {
                        color: g.zxk.Colors[e],
                        look: g.zxk.Looks[t],
                        fullWidth: !0,
                        style: { textTransform: 'capitalize' },
                        children: [e.toLowerCase(), ' - ', t.toLowerCase()]
                    },
                    e + t
                )
            ),
            (0, i.jsx)('hr', { className: j.sectionDivider }, e + 'divider')
        ]),
        s = I.flatMap((e) =>
            (0, i.jsx)(g.zxk, {
                color: g.zxk.Colors.BRAND,
                look: g.zxk.Looks.FILLED,
                size: g.zxk.Sizes[e],
                fullWidth: !0,
                style: { textTransform: 'capitalize' },
                children: e.toLowerCase()
            })
        );
    return (0, i.jsxs)('div', {
        className: j.section,
        children: [
            (0, i.jsx)(g.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Buttons'
            }),
            (0, i.jsx)(g.XZJ, {
                value: e,
                onChange: (e, n) => t(n),
                children: (0, i.jsx)(g.Text, {
                    variant: 'text-md/medium',
                    children: 'Show all buttons (WIP)'
                })
            }),
            e
                ? (0, i.jsxs)('div', {
                      className: j.buttons,
                      children: [
                          (0, i.jsx)(g.f6W, {
                              theme: C.BR.DARKER,
                              children: (e) =>
                                  (0, i.jsx)('div', {
                                      className: l()(e, j.section),
                                      children: n
                                  })
                          }),
                          (0, i.jsx)(g.f6W, {
                              theme: C.BR.LIGHT,
                              children: (e) =>
                                  (0, i.jsx)('div', {
                                      className: l()(e, j.section),
                                      children: n
                                  })
                          }),
                          (0, i.jsx)(g.f6W, {
                              theme: C.BR.DARKER,
                              children: (e) =>
                                  (0, i.jsxs)('div', {
                                      className: l()(e, j.section),
                                      children: [
                                          (0, i.jsx)(g.zxk, {
                                              color: g.zxk.Colors.BRAND,
                                              look: g.zxk.Looks.FILLED,
                                              disabled: !0,
                                              children: 'Disabled'
                                          }),
                                          s
                                      ]
                                  })
                          }),
                          (0, i.jsx)(g.f6W, {
                              theme: C.BR.LIGHT,
                              children: (e) =>
                                  (0, i.jsxs)('div', {
                                      className: l()(e, j.section),
                                      children: [
                                          (0, i.jsx)(g.zxk, {
                                              color: g.zxk.Colors.BRAND,
                                              look: g.zxk.Looks.FILLED,
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
                children: (0, i.jsx)(g.zxk, {
                    color: g.zxk.Colors.BRAND,
                    look: g.zxk.Looks.FILLED,
                    size: g.zxk.Sizes.TINY,
                    children: 'Tiny'
                })
            }),
            (0, i.jsx)('div', {
                style: { display: 'flex' },
                children: (0, i.jsx)(g.zxk, {
                    color: g.zxk.Colors.BRAND,
                    look: g.zxk.Looks.FILLED,
                    size: g.zxk.Sizes.SMALL,
                    children: 'Small'
                })
            }),
            (0, i.jsx)('div', {
                style: { display: 'flex' },
                children: (0, i.jsx)(g.zxk, {
                    color: g.zxk.Colors.BRAND,
                    look: g.zxk.Looks.FILLED,
                    size: g.zxk.Sizes.MEDIUM,
                    children: 'Medium'
                })
            }),
            (0, i.jsx)('div', {
                style: { display: 'flex' },
                children: (0, i.jsx)(g.zxk, {
                    color: g.zxk.Colors.BRAND,
                    look: g.zxk.Looks.FILLED,
                    size: g.zxk.Sizes.LARGE,
                    children: 'Large'
                })
            }),
            (0, i.jsx)(F, {}),
            (0, i.jsx)(B, {})
        ]
    });
}
function B() {
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
function M() {
    let [e, t] = r.useState('1');
    return (0, i.jsxs)('div', {
        className: j.section,
        children: [
            (0, i.jsx)(g.X6q, {
                variant: 'heading-xl/semibold',
                children: 'TabBar'
            }),
            (0, i.jsxs)(g.njP, {
                type: 'top',
                look: 'brand',
                selectedItem: e,
                onItemSelect: (e) => t(e),
                className: j.tabBar,
                children: [
                    (0, i.jsx)(g.njP.Item, {
                        id: '1',
                        children: 'Tab 1'
                    }),
                    (0, i.jsx)(g.njP.Item, {
                        id: '2',
                        children: 'Tab 2'
                    }),
                    (0, i.jsx)(g.njP.Item, {
                        id: '3',
                        children: 'Tab 3'
                    })
                ]
            }),
            (0, i.jsxs)(g.Text, {
                variant: 'text-md/medium',
                children: ['Selected tab: ', e]
            })
        ]
    });
}
function U() {
    let [e, t] = r.useState(1),
        [n, s] = r.useState(!1),
        [l, a] = r.useState(5),
        [o, c] = r.useState(!1),
        d = r.useRef(null);
    return (0, i.jsxs)('div', {
        className: j.section,
        children: [
            (0, i.jsx)(g.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Context Menus'
            }),
            (0, i.jsx)('span', {
                children: (0, i.jsx)(g.yRy, {
                    targetElementRef: d,
                    shouldShow: o,
                    renderPopout: () =>
                        (0, i.jsxs)(g.v2r, {
                            navId: 'demo',
                            'aria-label': 'Demo Actions',
                            onClose: () => null,
                            onSelect: () => null,
                            children: [
                                (0, i.jsxs)(g.kSQ, {
                                    label: 'Basic items',
                                    children: [
                                        (0, i.jsx)(g.sNh, {
                                            id: 'first',
                                            label: 'An option'
                                        }),
                                        (0, i.jsx)(g.sNh, {
                                            id: 'second',
                                            label: 'An option with an icon',
                                            icon: g.kBi
                                        }),
                                        (0, i.jsxs)(g.sNh, {
                                            id: 'item-with-submenu',
                                            label: 'Item with submenu',
                                            children: [
                                                (0, i.jsx)(g.sNh, {
                                                    id: 'subitem-1',
                                                    label: 'Subitem 1'
                                                }),
                                                (0, i.jsx)(g.sNh, {
                                                    id: 'subitem-2',
                                                    label: 'Subitem 2'
                                                }),
                                                (0, i.jsx)(g.sNh, {
                                                    id: 'subitem-3',
                                                    label: 'Subitem 3'
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, i.jsxs)(g.kSQ, {
                                    label: 'Inputs',
                                    children: [
                                        (0, i.jsx)(g.S89, {
                                            id: 'checkable',
                                            label: 'Checkbox',
                                            checked: n,
                                            action: () => s(!n)
                                        }),
                                        (0, i.jsx)(g.k5B, {
                                            id: 'radio-one',
                                            group: 'a-group',
                                            label: 'Radio 1',
                                            action: () => t(1),
                                            checked: 1 === e
                                        }),
                                        (0, i.jsx)(g.k5B, {
                                            id: 'radio-two',
                                            group: 'a-group',
                                            label: 'Radio 2',
                                            action: () => t(2),
                                            checked: 2 === e
                                        }),
                                        (0, i.jsx)(g.k5B, {
                                            id: 'radio-three',
                                            group: 'a-group',
                                            label: 'Radio 3',
                                            action: () => t(3),
                                            checked: 3 === e
                                        }),
                                        (0, i.jsx)(g.II_, {
                                            id: 'slider',
                                            label: 'Slider',
                                            control: (e, t) =>
                                                (0, i.jsx)(g._wy, {
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
                                (0, i.jsx)(g.Clw, {}),
                                (0, i.jsx)(g.sNh, {
                                    id: 'danger',
                                    label: 'A destructive option',
                                    color: 'danger',
                                    icon: g.XHJ
                                })
                            ]
                        }),
                    children: () =>
                        (0, i.jsx)(g.zxk, {
                            buttonRef: d,
                            onClick: () => c(!o),
                            children: 'Toggle context menu'
                        })
                })
            })
        ]
    });
}
function V() {
    return (0, i.jsxs)('div', {
        className: j.section,
        children: [
            (0, i.jsx)(g.X6q, {
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
                    (0, i.jsx)(g.ua7, {
                        text: "Here's top aligned tooltip text!",
                        position: 'top',
                        children: (e) => (0, i.jsx)(g.zxk, S(O({}, e), { children: 'Tooltip on the top' }))
                    }),
                    (0, i.jsx)(g.ua7, {
                        text: "Here's right aligned tooltip text!",
                        position: 'left',
                        children: (e) => (0, i.jsx)(g.zxk, S(O({}, e), { children: 'Tooltip on the left' }))
                    }),
                    (0, i.jsx)(g.ua7, {
                        text: "Here's bottom aligned tooltip text!",
                        position: 'bottom',
                        children: (e) => (0, i.jsx)(g.zxk, S(O({}, e), { children: 'Tooltip on the bottom' }))
                    }),
                    (0, i.jsx)(g.ua7, {
                        text: "Here's right aligned tooltip text!",
                        position: 'right',
                        children: (e) => (0, i.jsx)(g.zxk, S(O({}, e), { children: 'Tooltip on the right' }))
                    })
                ]
            }),
            (0, i.jsx)('div', {})
        ]
    });
}
function G() {
    let [e, t] = r.useState(!1),
        [n, s] = r.useState(!1),
        [l, a] = r.useState('auto');
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: j.section,
                children: [
                    (0, i.jsx)(g.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Checkboxes'
                    }),
                    (0, i.jsx)(g.XZJ, {
                        value: e,
                        onChange: (e, n) => t(n),
                        children: (0, i.jsx)(g.Text, {
                            variant: 'text-md/medium',
                            children: 'Checkbox input'
                        })
                    }),
                    (0, i.jsx)(g.XZJ, {
                        value: e,
                        onChange: (e, n) => t(n),
                        disabled: !0,
                        children: (0, i.jsx)(g.Text, {
                            variant: 'text-md/medium',
                            children: 'Disabled checkbox'
                        })
                    }),
                    (0, i.jsx)(g.XZJ, {
                        value: e,
                        onChange: (e, n) => t(n),
                        readOnly: !0,
                        children: (0, i.jsx)(g.Text, {
                            variant: 'text-md/medium',
                            children: 'Read-only checkbox'
                        })
                    }),
                    (0, i.jsx)(g.XZJ, {
                        value: e,
                        onChange: (e, n) => t(n),
                        type: g.XZJ.Types.ROW,
                        children: (0, i.jsx)(g.Text, {
                            variant: 'text-md/medium',
                            children: 'Checkbox row'
                        })
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: j.section,
                children: [
                    (0, i.jsx)(g.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Switches'
                    }),
                    (0, i.jsx)(g.j7V, {
                        hideBorder: !0,
                        value: n,
                        onChange: (e) => s(e),
                        children: 'FormSwitch with a label'
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: j.section,
                children: [
                    (0, i.jsx)(g.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Radio Buttons'
                    }),
                    (0, i.jsx)(g.xJW, {
                        children: (0, i.jsx)(g.FXm, {
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
                className: j.section,
                children: [
                    (0, i.jsx)(g.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Slider'
                    }),
                    (0, i.jsxs)('div', {
                        className: j.slider,
                        children: [
                            (0, i.jsx)(g.Text, {
                                variant: 'text-md/medium',
                                children: 'Standard slider'
                            }),
                            (0, i.jsx)(g.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                defaultValue: 50,
                                markers: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: j.slider,
                        children: [
                            (0, i.jsx)(g.Text, {
                                variant: 'text-md/medium',
                                children: 'Sticky markers'
                            }),
                            (0, i.jsx)(g.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                markers: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
                                stickToMarkers: !0
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: j.slider,
                        children: [
                            (0, i.jsx)(g.Text, {
                                variant: 'text-md/medium',
                                children: 'Non-uniform markers'
                            }),
                            (0, i.jsx)(g.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                markers: [0, 20, 50, 100],
                                equidistant: !1
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: j.slider,
                        children: [
                            (0, i.jsx)(g.Text, {
                                variant: 'text-md/medium',
                                children: 'Non-uniform equidistant markers'
                            }),
                            (0, i.jsx)(g.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                markers: [0, 20, 50, 100],
                                equidistant: !0
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: j.slider,
                        children: [
                            (0, i.jsx)(g.Text, {
                                variant: 'text-md/medium',
                                children: 'No markers'
                            }),
                            (0, i.jsx)(g.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: j.slider,
                        children: [
                            (0, i.jsx)(g.Text, {
                                variant: 'text-md/medium',
                                children: 'Mini slider'
                            }),
                            (0, i.jsx)(g.iRW, {
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
function F() {
    return (0, i.jsxs)('div', {
        className: j.shinyButtonExamples,
        children: [
            (0, i.jsx)(g.gtL, {
                size: g.zxk.Sizes.MEDIUM,
                shineSize: g.gtL.ShineSizes.SMALL,
                onClick: () => {},
                children: 'Shiny Button'
            }),
            (0, i.jsx)(g.gtL, {
                size: g.zxk.Sizes.MEDIUM,
                shineSize: g.gtL.ShineSizes.SMALL,
                onlyShineOnHover: !0,
                onClick: () => {},
                children: 'Shine on Hover'
            })
        ]
    });
}
function H() {
    let [e, t] = r.useState(null),
        [n, s] = r.useState(null),
        [l, o] = r.useState([]),
        [c, d] = r.useState([]),
        [u, m] = r.useState([]);
    return (0, i.jsxs)('div', {
        className: j.searchableSelectExamples,
        children: [
            (0, i.jsx)(g.X6q, {
                variant: 'heading-xl/semibold',
                children: 'SearchableSelect'
            }),
            (0, i.jsx)(g.VcW, {
                placeholder: 'Single select',
                value: e,
                onChange: (e) => t(e),
                options: a.G
            }),
            (0, i.jsx)(g.VcW, {
                placeholder: 'Single select (clearable)',
                clearable: !0,
                value: n,
                onChange: (e) => s(e),
                options: a.G
            }),
            (0, i.jsx)(g.VcW, {
                placeholder: 'Multi select',
                multi: !0,
                value: l,
                onChange: (e) => o(e),
                options: a.G
            }),
            (0, i.jsx)(g.VcW, {
                placeholder: 'Multi select (clearable)',
                multi: !0,
                clearable: !0,
                value: u,
                onChange: (e) => m(e),
                options: a.G
            }),
            (0, i.jsx)(g.VcW, {
                placeholder: 'Multi select (custom pills)',
                multi: !0,
                value: c,
                onChange: (e) => d(e),
                options: a.G,
                hidePills: !0,
                customPillContainerClassName: j.customPillContainer,
                renderCustomPill: (e) =>
                    (0, i.jsx)('div', {
                        style: {
                            padding: 8,
                            border: '1px solid var(--bg-brand)',
                            borderRadius: 8
                        },
                        children: (0, i.jsx)(g.Text, {
                            variant: 'text-md/bold',
                            children: e.label
                        })
                    })
            })
        ]
    });
}
function z() {
    let [e, t] = r.useState(''),
        [n, s] = r.useState(''),
        [l, a] = r.useState('');
    return (0, i.jsxs)('div', {
        className: j.section,
        children: [
            (0, i.jsx)(g.X6q, {
                variant: 'heading-xl/semibold',
                children: 'TextInput'
            }),
            (0, i.jsx)(g.xJW, {
                children: (0, i.jsx)(g.E1j, {
                    size: g.E1j.Sizes.MEDIUM,
                    placeholder: 'Search...',
                    onChange: (e) => a(e),
                    query: l,
                    onClear: () => a('')
                })
            }),
            (0, i.jsx)(g.xJW, {
                title: 'Disabled',
                disabled: !0,
                children: (0, i.jsx)(g.oil, {
                    placeholder: 'Disabled',
                    disabled: !0
                })
            }),
            (0, i.jsx)(g.xJW, {
                title: 'Error',
                children: (0, i.jsx)(g.oil, {
                    required: !0,
                    error: 'This must have a value'
                })
            }),
            (0, i.jsx)(g.xJW, {
                title: 'Error',
                children: (0, i.jsx)(g.oil, {
                    defaultValue: 'Not a valid value',
                    error: 'This has an error.'
                })
            }),
            (0, i.jsx)(g.xJW, {
                title: 'Read only',
                children: (0, i.jsx)(g.oil, {
                    value: 'Read-only, not-editable field',
                    editable: !1
                })
            }),
            (0, i.jsx)(g.xJW, {
                title: 'Input with a label',
                children: (0, i.jsx)(g.oil, {
                    placeholder: 'Real placeholder',
                    value: e,
                    onChange: t
                })
            }),
            (0, i.jsx)(g.xJW, {
                title: 'Text area',
                children: (0, i.jsx)(g.Kx8, {
                    placeholder: 'Text area placeholder',
                    showCharacterCount: !0,
                    value: n,
                    onChange: s
                })
            })
        ]
    });
}
function Y(e) {
    let { transitionState: t } = e,
        [n, s] = r.useState(!1),
        [l, a] = r.useState(g.CgR.SMALL),
        [o, c] = r.useState(!1),
        d = n ? j.modalOutlines : '';
    return (0, i.jsxs)(g.Y0X, {
        transitionState: t,
        size: l,
        parentComponent: 'UserSettingsDesignSystem',
        children: [
            (0, i.jsx)(g.xBx, {
                className: d,
                children: (0, i.jsx)(g.X6q, {
                    variant: 'heading-xl/semibold',
                    children: 'Modal'
                })
            }),
            (0, i.jsx)(g.hzk, {
                className: d,
                children: (0, i.jsxs)(g.Kqy, {
                    gap: 16,
                    children: [
                        (0, i.jsx)(g.xJW, {
                            title: 'Modal Size',
                            children: (0, i.jsx)(g.q4e, {
                                value: l,
                                onChange: a,
                                options: Object.entries(g.CgR).map((e) => {
                                    let [t, n] = e;
                                    return {
                                        label: t,
                                        value: n
                                    };
                                })
                            })
                        }),
                        (0, i.jsx)(g.hjN, {
                            title: 'Options',
                            children: (0, i.jsxs)(g.Kqy, {
                                gap: 16,
                                children: [
                                    (0, i.jsx)(g.XZJ, {
                                        value: n,
                                        onChange: (e, t) => s(t),
                                        children: (0, i.jsx)(g.Text, {
                                            variant: 'text-md/medium',
                                            children: 'Show Section Outlines'
                                        })
                                    }),
                                    (0, i.jsx)(g.XZJ, {
                                        value: o,
                                        onChange: (e, t) => c(t),
                                        children: (0, i.jsx)(g.Text, {
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
            (0, i.jsx)(g.mzw, {
                className: d,
                children: (0, i.jsxs)(g.Kqy, {
                    direction: 'horizontal',
                    justify: 'end',
                    gap: 8,
                    children: [
                        o &&
                            (0, i.jsx)(g.zxk, {
                                color: g.zxk.Colors.PRIMARY,
                                look: g.zxk.Looks.FILLED,
                                children: 'Secondary Action'
                            }),
                        (0, i.jsx)(g.zxk, { children: 'Close' })
                    ]
                })
            })
        ]
    });
}
function W(e) {
    let { transitionState: t, onClose: n } = e;
    return (0, i.jsxs)(d.IX, {
        transitionState: t,
        onClose: n,
        children: [
            (0, i.jsx)(m.O, {
                title: 'Modal',
                body: 'This is some body text'
            }),
            (0, i.jsx)(u.G, {
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
function K() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: j.section,
                children: [
                    (0, i.jsx)(g.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Modals (Void)'
                    }),
                    (0, i.jsx)(g.zxk, {
                        onClick: () => {
                            (0, g.h7j)((e) => (0, i.jsx)(Y, O({}, e)));
                        },
                        children: 'Open modal'
                    }),
                    (0, i.jsx)(g.zxk, {
                        onClick: () => {
                            p.Z.show({
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
                className: j.section,
                children: [
                    (0, i.jsx)(g.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Modals (Mana)'
                    }),
                    (0, i.jsx)(g.zxk, {
                        onClick: () => {
                            (0, g.h7j)((e) => (0, i.jsx)(W, O({}, e)));
                        },
                        children: 'Open modal'
                    })
                ]
            })
        ]
    });
}
function q() {
    let e = (0, o.e7)([h.Z], () => h.Z.gradientPreset);
    return (0, i.jsx)(g.f6W, {
        theme: C.BR.DARKER,
        disableAdaptiveTheme: !0,
        children: (t) =>
            (0, i.jsxs)('div', {
                className: l()(t, j.section),
                children: [
                    (0, i.jsx)(g.zxk, {
                        color: g.zxk.Colors.PRIMARY,
                        look: g.zxk.Looks.FILLED,
                        fullWidth: !0,
                        children: 'Button'
                    }),
                    (0, i.jsx)(g.f6W, {
                        theme: C.BR.LIGHT,
                        children: (t) =>
                            (0, i.jsxs)('div', {
                                className: l()(t, j.section),
                                children: [
                                    (0, i.jsx)(g.zxk, {
                                        color: g.zxk.Colors.PRIMARY,
                                        look: g.zxk.Looks.FILLED,
                                        fullWidth: !0,
                                        children: 'Button'
                                    }),
                                    (0, i.jsx)(g.f6W, {
                                        theme: C.BR.DARKER,
                                        children: (e) =>
                                            (0, i.jsx)('div', {
                                                className: l()(e, j.section),
                                                children: (0, i.jsx)(g.zxk, {
                                                    color: g.zxk.Colors.PRIMARY,
                                                    look: g.zxk.Looks.FILLED,
                                                    fullWidth: !0,
                                                    children: 'Button'
                                                })
                                            })
                                    }),
                                    (0, i.jsx)(g.f6W, {
                                        gradient: e,
                                        children: (e) =>
                                            (0, i.jsx)('div', {
                                                className: l()(e, j.section),
                                                children: (0, i.jsx)(g.zxk, {
                                                    color: g.zxk.Colors.PRIMARY,
                                                    look: g.zxk.Looks.FILLED,
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
