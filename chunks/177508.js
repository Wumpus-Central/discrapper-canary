n.d(t, { Z: () => D }), n(704826), n(35282), n(388685), n(361932), n(187205);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(971809),
    o = n(442837),
    c = n(844477),
    d = n(481060),
    u = n(240872),
    m = n(514361),
    p = n(705262),
    g = n(526156),
    h = n(706705),
    f = n(726985),
    b = n(981631),
    _ = n(231338),
    x = n(426617);
function E(e) {
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
function j(e, t) {
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
let C = Object.keys(d.zxk.Colors).filter((e) => 'CUSTOM' !== e),
    O = Object.keys(d.zxk.Looks).filter((e) => 'BLANK' !== e),
    S = Object.keys(d.zxk.Sizes).filter((e) => 'NONE' !== e);
function v() {
    return (0, i.jsxs)('div', {
        className: x.root,
        children: [
            (0, i.jsx)(d.Qjf, {
                variant: 'primary',
                text: 'Testing',
                external: !0
            }),
            (0, i.jsx)(c.z, {
                variant: 'destructive-secondary',
                text: 'Testing',
                iconPosition: 'end',
                icon: d.XHJ
            }),
            (0, i.jsx)(Z, {}),
            (0, i.jsx)(U, {}),
            (0, i.jsx)(V, {}),
            (0, i.jsx)(M, {}),
            (0, i.jsx)(L, {}),
            (0, i.jsx)(k, {}),
            (0, i.jsx)(w, {}),
            (0, i.jsx)(F, {}),
            (0, i.jsx)(T, {}),
            (0, i.jsx)(H, {})
        ]
    });
}
function T() {
    let e = Object.keys(d.DM8);
    return (0, i.jsxs)('div', {
        className: x.section,
        children: [
            (0, i.jsx)(d.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Notice'
            }),
            (0, i.jsx)(d.Kqy, {
                gap: 16,
                children: e.map((e) =>
                    (0, i.jsx)(
                        d.qXd,
                        {
                            color: d.DM8[e],
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
let I = ['neutral', 'blue_new', 'blurple', 'green_new', 'red_new', 'teal_new', 'yellow_new', 'orange_new', 'pink', 'purple'],
    N = ['background-surface-highest', 'background-surface-higher', 'background-surface-high', 'background-base-low', 'background-base-lower', 'background-base-lowest'],
    y = ['', 'background-mod-subtle', 'background-mod-normal', 'background-mod-strong'],
    A = ['critical', 'warning', 'positive', 'info'],
    P = ['text-default', 'text-primary', 'text-secondary', 'text-tertiary', 'text-feedback-critical', 'text-feedback-warning', 'text-feedback-positive', 'text-feedback-info', 'premium-nitro-pink-text'];
function R() {
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(d.X6q, {
                variant: 'heading-xl/semibold',
                className: x.heading,
                children: 'Background Colors'
            }),
            N.map((e) =>
                (0, i.jsxs)(
                    'div',
                    {
                        className: x.palette,
                        style: {
                            backgroundColor: 'var(--'.concat(e, ')'),
                            padding: 24
                        },
                        children: [
                            (0, i.jsx)(d.Text, {
                                variant: 'text-md/medium',
                                children: e
                            }),
                            (0, i.jsx)('div', {
                                style: {
                                    display: 'grid',
                                    gap: 8,
                                    gridTemplateColumns: 'repeat(3, 1fr)'
                                },
                                children: y.map((e) =>
                                    (0, i.jsxs)(
                                        'div',
                                        {
                                            className: x.color,
                                            style: {
                                                padding: 16,
                                                background: 'var(--'.concat(e, ')')
                                            },
                                            children: [
                                                (0, i.jsx)(d.Text, {
                                                    variant: 'text-xs/semibold',
                                                    color: 'header-secondary',
                                                    children: e
                                                }),
                                                (0, i.jsx)('hr', { className: x.sectionDivider }),
                                                P.map((e) =>
                                                    (0, i.jsx)(
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
                            (0, i.jsx)('hr', { className: x.sectionDivider }),
                            (0, i.jsx)('div', {
                                style: {
                                    display: 'grid',
                                    gap: 8,
                                    gridTemplateColumns: 'repeat(3, 1fr)'
                                },
                                children: A.map((e) => {
                                    let t = 'var(--text-feedback-'.concat(e, ')');
                                    return (0, i.jsxs)(
                                        'div',
                                        {
                                            className: x.color,
                                            style: {
                                                padding: 16,
                                                background: 'var(--background-feedback-'.concat(e, ')')
                                            },
                                            children: [
                                                (0, i.jsx)(d.Text, {
                                                    variant: 'text-xs/semibold',
                                                    color: 'header-secondary'
                                                }),
                                                (0, i.jsxs)(d.Kqy, {
                                                    children: [
                                                        (0, i.jsxs)(d.Text, {
                                                            variant: 'text-xs/semibold',
                                                            style: { color: t },
                                                            children: ['background-feedback-', e]
                                                        }),
                                                        (0, i.jsx)(d.Text, {
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
            (0, i.jsx)(d.X6q, {
                variant: 'heading-xl/semibold',
                className: x.heading,
                children: 'Scales'
            }),
            I.map((e) =>
                (0, i.jsxs)(
                    'div',
                    {
                        className: x.palette,
                        children: [
                            (0, i.jsx)(d.Text, {
                                variant: 'text-lg/semibold',
                                children: e
                            }),
                            (0, i.jsx)('div', {
                                className: x.colors,
                                children: Array.from({ length: 100 }, (t, n) =>
                                    (0, i.jsx)(
                                        'div',
                                        {
                                            className: x.color,
                                            style: { background: 'var(--'.concat(e.replace('_', '-'), '-').concat(n + 1, ')') },
                                            children: (0, i.jsx)(d.f6W, {
                                                theme: n < 50 ? 'light' : 'dark',
                                                children: (t) =>
                                                    (0, i.jsxs)(d.Text, {
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
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(g.Z, {
                parentSetting: f.s6.DESIGN_SYSTEMS,
                settingsSection: b.oAB.DESIGN_SYSTEMS,
                tabs: [
                    {
                        title: 'Components',
                        component: () => (0, i.jsx)(v, {}),
                        setting: f.s6.DESIGN_SYSTEMS_COMPONENTS
                    },
                    {
                        title: 'Colors',
                        component: () => (0, i.jsx)(R, {}),
                        setting: f.s6.DESIGN_SYSTEMS_COLORS
                    },
                    {
                        title: 'Animations',
                        component: () => (0, i.jsx)(h.Z, {}),
                        setting: f.s6.ANIMATION_TESTING
                    }
                ]
            }),
            (0, i.jsx)('div', {
                className: x.themes,
                children: (0, i.jsx)(p.ZP, {
                    type: p.yH.SETTINGS,
                    children: (0, i.jsx)(p.ZP.Basic, { className: x.themeSelectionGroup })
                })
            })
        ]
    });
}
function Z() {
    let [e, t] = r.useState(!1),
        n = C.flatMap((e) => [
            ...O.map((t) =>
                (0, i.jsxs)(
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
            (0, i.jsx)('hr', { className: x.sectionDivider }, e + 'divider')
        ]),
        s = S.flatMap((e) =>
            (0, i.jsx)(d.zxk, {
                color: d.zxk.Colors.BRAND,
                look: d.zxk.Looks.FILLED,
                size: d.zxk.Sizes[e],
                fullWidth: !0,
                style: { textTransform: 'capitalize' },
                children: e.toLowerCase()
            })
        );
    return (0, i.jsxs)('div', {
        className: x.section,
        children: [
            (0, i.jsx)(d.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Buttons'
            }),
            (0, i.jsx)(d.XZJ, {
                value: e,
                onChange: (e, n) => t(n),
                children: (0, i.jsx)(d.Text, {
                    variant: 'text-md/medium',
                    children: 'Show all buttons (WIP)'
                })
            }),
            e
                ? (0, i.jsxs)('div', {
                      className: x.buttons,
                      children: [
                          (0, i.jsx)(d.f6W, {
                              theme: _.BR.DARKER,
                              children: (e) =>
                                  (0, i.jsx)('div', {
                                      className: l()(e, x.section),
                                      children: n
                                  })
                          }),
                          (0, i.jsx)(d.f6W, {
                              theme: _.BR.LIGHT,
                              children: (e) =>
                                  (0, i.jsx)('div', {
                                      className: l()(e, x.section),
                                      children: n
                                  })
                          }),
                          (0, i.jsx)(d.f6W, {
                              theme: _.BR.DARKER,
                              children: (e) =>
                                  (0, i.jsxs)('div', {
                                      className: l()(e, x.section),
                                      children: [
                                          (0, i.jsx)(d.zxk, {
                                              color: d.zxk.Colors.BRAND,
                                              look: d.zxk.Looks.FILLED,
                                              disabled: !0,
                                              children: 'Disabled'
                                          }),
                                          s
                                      ]
                                  })
                          }),
                          (0, i.jsx)(d.f6W, {
                              theme: _.BR.LIGHT,
                              children: (e) =>
                                  (0, i.jsxs)('div', {
                                      className: l()(e, x.section),
                                      children: [
                                          (0, i.jsx)(d.zxk, {
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
            (0, i.jsx)('div', {
                style: { display: 'flex' },
                children: (0, i.jsx)(d.zxk, {
                    color: d.zxk.Colors.BRAND,
                    look: d.zxk.Looks.FILLED,
                    size: d.zxk.Sizes.TINY,
                    children: 'Tiny'
                })
            }),
            (0, i.jsx)('div', {
                style: { display: 'flex' },
                children: (0, i.jsx)(d.zxk, {
                    color: d.zxk.Colors.BRAND,
                    look: d.zxk.Looks.FILLED,
                    size: d.zxk.Sizes.SMALL,
                    children: 'Small'
                })
            }),
            (0, i.jsx)('div', {
                style: { display: 'flex' },
                children: (0, i.jsx)(d.zxk, {
                    color: d.zxk.Colors.BRAND,
                    look: d.zxk.Looks.FILLED,
                    size: d.zxk.Sizes.MEDIUM,
                    children: 'Medium'
                })
            }),
            (0, i.jsx)('div', {
                style: { display: 'flex' },
                children: (0, i.jsx)(d.zxk, {
                    color: d.zxk.Colors.BRAND,
                    look: d.zxk.Looks.FILLED,
                    size: d.zxk.Sizes.LARGE,
                    children: 'Large'
                })
            }),
            (0, i.jsx)(B, {})
        ]
    });
}
function w() {
    let [e, t] = r.useState('1');
    return (0, i.jsxs)('div', {
        className: x.section,
        children: [
            (0, i.jsx)(d.X6q, {
                variant: 'heading-xl/semibold',
                children: 'TabBar'
            }),
            (0, i.jsxs)(d.njP, {
                type: 'top',
                look: 'brand',
                selectedItem: e,
                onItemSelect: (e) => t(e),
                className: x.tabBar,
                children: [
                    (0, i.jsx)(d.njP.Item, {
                        id: '1',
                        children: 'Tab 1'
                    }),
                    (0, i.jsx)(d.njP.Item, {
                        id: '2',
                        children: 'Tab 2'
                    }),
                    (0, i.jsx)(d.njP.Item, {
                        id: '3',
                        children: 'Tab 3'
                    })
                ]
            }),
            (0, i.jsxs)(d.Text, {
                variant: 'text-md/medium',
                children: ['Selected tab: ', e]
            })
        ]
    });
}
function k() {
    let [e, t] = r.useState(1),
        [n, s] = r.useState(!1),
        [l, a] = r.useState(5),
        [o, c] = r.useState(!1);
    return (0, i.jsxs)('div', {
        className: x.section,
        children: [
            (0, i.jsx)(d.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Context Menus'
            }),
            (0, i.jsx)('span', {
                children: (0, i.jsx)(d.yRy, {
                    shouldShow: o,
                    renderPopout: () =>
                        (0, i.jsxs)(d.v2r, {
                            navId: 'demo',
                            'aria-label': 'Demo Actions',
                            onClose: () => null,
                            onSelect: () => null,
                            children: [
                                (0, i.jsxs)(d.kSQ, {
                                    label: 'Basic items',
                                    children: [
                                        (0, i.jsx)(d.sNh, {
                                            id: 'first',
                                            label: 'An option'
                                        }),
                                        (0, i.jsx)(d.sNh, {
                                            id: 'second',
                                            label: 'An option with an icon',
                                            icon: d.kBi
                                        }),
                                        (0, i.jsxs)(d.sNh, {
                                            id: 'item-with-submenu',
                                            label: 'Item with submenu',
                                            children: [
                                                (0, i.jsx)(d.sNh, {
                                                    id: 'subitem-1',
                                                    label: 'Subitem 1'
                                                }),
                                                (0, i.jsx)(d.sNh, {
                                                    id: 'subitem-2',
                                                    label: 'Subitem 2'
                                                }),
                                                (0, i.jsx)(d.sNh, {
                                                    id: 'subitem-3',
                                                    label: 'Subitem 3'
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, i.jsxs)(d.kSQ, {
                                    label: 'Inputs',
                                    children: [
                                        (0, i.jsx)(d.S89, {
                                            id: 'checkable',
                                            label: 'Checkbox',
                                            checked: n,
                                            action: () => s(!n)
                                        }),
                                        (0, i.jsx)(d.k5B, {
                                            id: 'radio-one',
                                            group: 'a-group',
                                            label: 'Radio 1',
                                            action: () => t(1),
                                            checked: 1 === e
                                        }),
                                        (0, i.jsx)(d.k5B, {
                                            id: 'radio-two',
                                            group: 'a-group',
                                            label: 'Radio 2',
                                            action: () => t(2),
                                            checked: 2 === e
                                        }),
                                        (0, i.jsx)(d.k5B, {
                                            id: 'radio-three',
                                            group: 'a-group',
                                            label: 'Radio 3',
                                            action: () => t(3),
                                            checked: 3 === e
                                        }),
                                        (0, i.jsx)(d.II_, {
                                            id: 'slider',
                                            label: 'Slider',
                                            control: (e, t) =>
                                                (0, i.jsx)(d._wy, {
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
                                (0, i.jsx)(d.Clw, {}),
                                (0, i.jsx)(d.sNh, {
                                    id: 'danger',
                                    label: 'A destructive option',
                                    color: 'danger',
                                    icon: d.XHJ
                                })
                            ]
                        }),
                    children: () =>
                        (0, i.jsx)(d.zxk, {
                            onClick: () => c(!o),
                            children: 'Toggle context menu'
                        })
                })
            })
        ]
    });
}
function L() {
    return (0, i.jsxs)('div', {
        className: x.section,
        children: [
            (0, i.jsx)(d.X6q, {
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
                    (0, i.jsx)(d.ua7, {
                        text: "Here's top aligned tooltip text!",
                        position: 'top',
                        children: (e) => (0, i.jsx)(d.zxk, j(E({}, e), { children: 'Tooltip on the top' }))
                    }),
                    (0, i.jsx)(d.ua7, {
                        text: "Here's right aligned tooltip text!",
                        position: 'left',
                        children: (e) => (0, i.jsx)(d.zxk, j(E({}, e), { children: 'Tooltip on the left' }))
                    }),
                    (0, i.jsx)(d.ua7, {
                        text: "Here's bottom aligned tooltip text!",
                        position: 'bottom',
                        children: (e) => (0, i.jsx)(d.zxk, j(E({}, e), { children: 'Tooltip on the bottom' }))
                    }),
                    (0, i.jsx)(d.ua7, {
                        text: "Here's right aligned tooltip text!",
                        position: 'right',
                        children: (e) => (0, i.jsx)(d.zxk, j(E({}, e), { children: 'Tooltip on the right' }))
                    })
                ]
            }),
            (0, i.jsx)('div', {})
        ]
    });
}
function M() {
    let [e, t] = r.useState(!1),
        [n, s] = r.useState(!1),
        [l, a] = r.useState('auto');
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: x.section,
                children: [
                    (0, i.jsx)(d.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Checkboxes'
                    }),
                    (0, i.jsx)(d.XZJ, {
                        value: e,
                        onChange: (e, n) => t(n),
                        children: (0, i.jsx)(d.Text, {
                            variant: 'text-md/medium',
                            children: 'Checkbox input'
                        })
                    }),
                    (0, i.jsx)(d.XZJ, {
                        value: e,
                        onChange: (e, n) => t(n),
                        disabled: !0,
                        children: (0, i.jsx)(d.Text, {
                            variant: 'text-md/medium',
                            children: 'Disabled checkbox'
                        })
                    }),
                    (0, i.jsx)(d.XZJ, {
                        value: e,
                        onChange: (e, n) => t(n),
                        readOnly: !0,
                        children: (0, i.jsx)(d.Text, {
                            variant: 'text-md/medium',
                            children: 'Read-only checkbox'
                        })
                    }),
                    (0, i.jsx)(d.XZJ, {
                        value: e,
                        onChange: (e, n) => t(n),
                        type: d.XZJ.Types.ROW,
                        children: (0, i.jsx)(d.Text, {
                            variant: 'text-md/medium',
                            children: 'Checkbox row'
                        })
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: x.section,
                children: [
                    (0, i.jsx)(d.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Switches'
                    }),
                    (0, i.jsx)(d.j7V, {
                        hideBorder: !0,
                        value: n,
                        onChange: (e) => s(e),
                        children: 'FormSwitch with a label'
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: x.section,
                children: [
                    (0, i.jsx)(d.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Radio Buttons'
                    }),
                    (0, i.jsx)(d.xJW, {
                        children: (0, i.jsx)(d.FXm, {
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
                className: x.section,
                children: [
                    (0, i.jsx)(d.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Slider'
                    }),
                    (0, i.jsxs)('div', {
                        className: x.slider,
                        children: [
                            (0, i.jsx)(d.Text, {
                                variant: 'text-md/medium',
                                children: 'Standard slider'
                            }),
                            (0, i.jsx)(d.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                defaultValue: 50,
                                markers: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: x.slider,
                        children: [
                            (0, i.jsx)(d.Text, {
                                variant: 'text-md/medium',
                                children: 'Sticky markers'
                            }),
                            (0, i.jsx)(d.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                markers: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
                                stickToMarkers: !0
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: x.slider,
                        children: [
                            (0, i.jsx)(d.Text, {
                                variant: 'text-md/medium',
                                children: 'Non-uniform markers'
                            }),
                            (0, i.jsx)(d.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                markers: [0, 20, 50, 100],
                                equidistant: !1
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: x.slider,
                        children: [
                            (0, i.jsx)(d.Text, {
                                variant: 'text-md/medium',
                                children: 'Non-uniform equidistant markers'
                            }),
                            (0, i.jsx)(d.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                markers: [0, 20, 50, 100],
                                equidistant: !0
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: x.slider,
                        children: [
                            (0, i.jsx)(d.Text, {
                                variant: 'text-md/medium',
                                children: 'No markers'
                            }),
                            (0, i.jsx)(d.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: x.slider,
                        children: [
                            (0, i.jsx)(d.Text, {
                                variant: 'text-md/medium',
                                children: 'Mini slider'
                            }),
                            (0, i.jsx)(d.iRW, {
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
    return (0, i.jsxs)('div', {
        className: x.shinyButtonExamples,
        children: [
            (0, i.jsx)(d.gtL, {
                size: d.zxk.Sizes.MEDIUM,
                shineSize: d.gtL.ShineSizes.SMALL,
                onClick: () => {},
                children: 'Shiny Button'
            }),
            (0, i.jsx)(d.gtL, {
                size: d.zxk.Sizes.MEDIUM,
                shineSize: d.gtL.ShineSizes.SMALL,
                onlyShineOnHover: !0,
                onClick: () => {},
                children: 'Shine on Hover'
            })
        ]
    });
}
function U() {
    let [e, t] = r.useState(null),
        [n, s] = r.useState(null),
        [l, o] = r.useState([]),
        [c, u] = r.useState([]),
        [m, p] = r.useState([]);
    return (0, i.jsxs)('div', {
        className: x.searchableSelectExamples,
        children: [
            (0, i.jsx)(d.X6q, {
                variant: 'heading-xl/semibold',
                children: 'SearchableSelect'
            }),
            (0, i.jsx)(d.VcW, {
                placeholder: 'Single select',
                value: e,
                onChange: (e) => t(e),
                options: a.G
            }),
            (0, i.jsx)(d.VcW, {
                placeholder: 'Single select (clearable)',
                clearable: !0,
                value: n,
                onChange: (e) => s(e),
                options: a.G
            }),
            (0, i.jsx)(d.VcW, {
                placeholder: 'Multi select',
                multi: !0,
                value: l,
                onChange: (e) => o(e),
                options: a.G
            }),
            (0, i.jsx)(d.VcW, {
                placeholder: 'Multi select (clearable)',
                multi: !0,
                clearable: !0,
                value: m,
                onChange: (e) => p(e),
                options: a.G
            }),
            (0, i.jsx)(d.VcW, {
                placeholder: 'Multi select (custom pills)',
                multi: !0,
                value: c,
                onChange: (e) => u(e),
                options: a.G,
                hidePills: !0,
                customPillContainerClassName: x.customPillContainer,
                renderCustomPill: (e) =>
                    (0, i.jsx)('div', {
                        style: {
                            padding: 8,
                            border: '1px solid var(--bg-brand)',
                            borderRadius: 8
                        },
                        children: (0, i.jsx)(d.Text, {
                            variant: 'text-md/bold',
                            children: e.label
                        })
                    })
            })
        ]
    });
}
function V() {
    let [e, t] = r.useState(''),
        [n, s] = r.useState(''),
        [l, a] = r.useState('');
    return (0, i.jsxs)('div', {
        className: x.section,
        children: [
            (0, i.jsx)(d.X6q, {
                variant: 'heading-xl/semibold',
                children: 'TextInput'
            }),
            (0, i.jsx)(d.xJW, {
                children: (0, i.jsx)(d.E1j, {
                    size: d.E1j.Sizes.MEDIUM,
                    placeholder: 'Search...',
                    onChange: (e) => a(e),
                    query: l,
                    onClear: () => a('')
                })
            }),
            (0, i.jsx)(d.xJW, {
                title: 'Disabled',
                disabled: !0,
                children: (0, i.jsx)(d.oil, {
                    placeholder: 'Disabled',
                    disabled: !0
                })
            }),
            (0, i.jsx)(d.xJW, {
                title: 'Error',
                children: (0, i.jsx)(d.oil, {
                    required: !0,
                    error: 'This must have a value'
                })
            }),
            (0, i.jsx)(d.xJW, {
                title: 'Error',
                children: (0, i.jsx)(d.oil, {
                    defaultValue: 'Not a valid value',
                    error: 'This has an error.'
                })
            }),
            (0, i.jsx)(d.xJW, {
                title: 'Read only',
                children: (0, i.jsx)(d.oil, {
                    value: 'Read-only, not-editable field',
                    editable: !1
                })
            }),
            (0, i.jsx)(d.xJW, {
                title: 'Input with a label',
                children: (0, i.jsx)(d.oil, {
                    placeholder: 'Real placeholder',
                    value: e,
                    onChange: t
                })
            }),
            (0, i.jsx)(d.xJW, {
                title: 'Text area',
                children: (0, i.jsx)(d.Kx8, {
                    placeholder: 'Text area placeholder',
                    showCharacterCount: !0,
                    value: n,
                    onChange: s
                })
            })
        ]
    });
}
function G(e) {
    let { transitionState: t } = e,
        [n, s] = r.useState(!1),
        [l, a] = r.useState(d.CgR.SMALL),
        [o, c] = r.useState(!1),
        u = n ? x.modalOutlines : '';
    return (0, i.jsxs)(d.Y0X, {
        transitionState: t,
        size: l,
        children: [
            (0, i.jsx)(d.xBx, {
                className: u,
                children: (0, i.jsx)(d.X6q, {
                    variant: 'heading-xl/semibold',
                    children: 'Modal'
                })
            }),
            (0, i.jsx)(d.hzk, {
                className: u,
                children: (0, i.jsxs)(d.Kqy, {
                    gap: 16,
                    children: [
                        (0, i.jsx)(d.xJW, {
                            title: 'Modal Size',
                            children: (0, i.jsx)(d.q4e, {
                                value: l,
                                onChange: a,
                                options: Object.entries(d.CgR).map((e) => {
                                    let [t, n] = e;
                                    return {
                                        label: t,
                                        value: n
                                    };
                                })
                            })
                        }),
                        (0, i.jsx)(d.hjN, {
                            title: 'Options',
                            children: (0, i.jsxs)(d.Kqy, {
                                gap: 16,
                                children: [
                                    (0, i.jsx)(d.XZJ, {
                                        value: n,
                                        onChange: (e, t) => s(t),
                                        children: (0, i.jsx)(d.Text, {
                                            variant: 'text-md/medium',
                                            children: 'Show Section Outlines'
                                        })
                                    }),
                                    (0, i.jsx)(d.XZJ, {
                                        value: o,
                                        onChange: (e, t) => c(t),
                                        children: (0, i.jsx)(d.Text, {
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
            (0, i.jsx)(d.mzw, {
                className: u,
                children: (0, i.jsxs)(d.Kqy, {
                    direction: 'horizontal',
                    justify: 'end',
                    gap: 8,
                    children: [
                        o &&
                            (0, i.jsx)(d.zxk, {
                                color: d.zxk.Colors.PRIMARY,
                                look: d.zxk.Looks.FILLED,
                                children: 'Secondary Action'
                            }),
                        (0, i.jsx)(d.zxk, { children: 'Close' })
                    ]
                })
            })
        ]
    });
}
function F() {
    return (0, i.jsxs)('div', {
        className: x.section,
        children: [
            (0, i.jsx)(d.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Modals'
            }),
            (0, i.jsx)(d.zxk, {
                onClick: () => {
                    (0, d.h7j)((e) => (0, i.jsx)(G, E({}, e)));
                },
                children: 'Open modal'
            }),
            (0, i.jsx)(d.zxk, {
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
function H() {
    let e = (0, o.e7)([m.Z], () => m.Z.gradientPreset);
    return (0, i.jsx)(d.f6W, {
        theme: _.BR.DARKER,
        disableAdaptiveTheme: !0,
        children: (t) =>
            (0, i.jsxs)('div', {
                className: l()(t, x.section),
                children: [
                    (0, i.jsx)(d.zxk, {
                        color: d.zxk.Colors.PRIMARY,
                        look: d.zxk.Looks.FILLED,
                        fullWidth: !0,
                        children: 'Button'
                    }),
                    (0, i.jsx)(d.f6W, {
                        theme: _.BR.LIGHT,
                        children: (t) =>
                            (0, i.jsxs)('div', {
                                className: l()(t, x.section),
                                children: [
                                    (0, i.jsx)(d.zxk, {
                                        color: d.zxk.Colors.PRIMARY,
                                        look: d.zxk.Looks.FILLED,
                                        fullWidth: !0,
                                        children: 'Button'
                                    }),
                                    (0, i.jsx)(d.f6W, {
                                        theme: _.BR.DARKER,
                                        children: (e) =>
                                            (0, i.jsx)('div', {
                                                className: l()(e, x.section),
                                                children: (0, i.jsx)(d.zxk, {
                                                    color: d.zxk.Colors.PRIMARY,
                                                    look: d.zxk.Looks.FILLED,
                                                    fullWidth: !0,
                                                    children: 'Button'
                                                })
                                            })
                                    }),
                                    (0, i.jsx)(d.f6W, {
                                        gradient: e,
                                        children: (e) =>
                                            (0, i.jsx)('div', {
                                                className: l()(e, x.section),
                                                children: (0, i.jsx)(d.zxk, {
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
