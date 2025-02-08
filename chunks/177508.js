n.d(t, { Z: () => A }), n(757143), n(47120), n(390547);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(971809),
    o = n(442837),
    c = n(844477),
    d = n(481060),
    u = n(240872),
    m = n(514361),
    g = n(526156),
    h = n(726985),
    x = n(981631),
    _ = n(231338),
    p = n(161309);
let E = Object.keys(d.zxk.Colors).filter((e) => 'CUSTOM' !== e),
    C = Object.keys(d.zxk.Looks).filter((e) => 'BLANK' !== e),
    f = Object.keys(d.zxk.Sizes).filter((e) => 'NONE' !== e);
function T() {
    return (0, i.jsxs)('div', {
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
            (0, i.jsx)(O, {}),
            (0, i.jsx)(k, {}),
            (0, i.jsx)(L, {}),
            (0, i.jsx)(y, {}),
            (0, i.jsx)(D, {}),
            (0, i.jsx)(P, {}),
            (0, i.jsx)(R, {}),
            (0, i.jsx)(M, {}),
            (0, i.jsx)(w, {})
        ]
    });
}
let N = ['neutral', 'blue_new', 'blurple', 'green_new', 'red_new', 'teal_new', 'yellow_new', 'orange_new'],
    I = ['background-surface-highest', 'background-surface-higher', 'background-surface-high', 'background-base-low', 'background-base-lower', 'background-base-lowest'],
    S = ['background-mod-subtle', 'background-mod-normal', 'background-mod-strong'],
    b = ['critical', 'warning', 'positive', 'info'],
    v = ['text-default', 'text-primary', 'text-secondary', 'text-tertiary', 'text-feedback-critical', 'text-feedback-warning', 'text-feedback-positive', 'text-feedback-info'];
function j() {
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(d.X6q, {
                variant: 'heading-xl/semibold',
                className: p.heading,
                children: 'Background Colors'
            }),
            I.map((e) =>
                (0, i.jsxs)(
                    'div',
                    {
                        className: p.palette,
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
                                children: S.map((e) =>
                                    (0, i.jsxs)(
                                        'div',
                                        {
                                            className: p.color,
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
                                                (0, i.jsx)('hr', { className: p.sectionDivider }),
                                                v.map((e) =>
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
                            (0, i.jsx)('hr', { className: p.sectionDivider }),
                            (0, i.jsx)('div', {
                                style: {
                                    display: 'grid',
                                    gap: 8,
                                    gridTemplateColumns: 'repeat(3, 1fr)'
                                },
                                children: b.map((e) => {
                                    let t = 'var(--text-feedback-'.concat(e, ')');
                                    return (0, i.jsxs)(
                                        'div',
                                        {
                                            className: p.color,
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
                className: p.heading,
                children: 'Scales'
            }),
            N.map((e) =>
                (0, i.jsxs)(
                    'div',
                    {
                        className: p.palette,
                        children: [
                            (0, i.jsx)(d.Text, {
                                variant: 'text-lg/semibold',
                                children: e
                            }),
                            (0, i.jsx)('div', {
                                className: p.colors,
                                children: Array.from({ length: 100 }, (t, n) =>
                                    (0, i.jsx)(
                                        'div',
                                        {
                                            className: p.color,
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
function A() {
    return (0, i.jsx)(g.Z, {
        parentSetting: h.s6.DESIGN_SYSTEMS,
        settingsSection: x.oAB.DESIGN_SYSTEMS,
        tabs: [
            {
                title: 'Components',
                component: () => (0, i.jsx)(T, {}),
                setting: h.s6.DESIGN_SYSTEMS_COMPONENTS
            },
            {
                title: 'Colors',
                component: () => (0, i.jsx)(j, {}),
                setting: h.s6.DESIGN_SYSTEMS_COLORS
            }
        ]
    });
}
function O() {
    let [e, t] = s.useState(!1),
        n = E.flatMap((e) => [
            ...C.map((t) =>
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
            (0, i.jsx)('hr', { className: p.sectionDivider }, e + 'divider')
        ]),
        r = f.flatMap((e) =>
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
        className: p.section,
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
                      className: p.buttons,
                      children: [
                          (0, i.jsx)(d.f6W, {
                              theme: _.BR.DARKER,
                              children: (e) =>
                                  (0, i.jsx)('div', {
                                      className: l()(e, p.section),
                                      children: n
                                  })
                          }),
                          (0, i.jsx)(d.f6W, {
                              theme: _.BR.LIGHT,
                              children: (e) =>
                                  (0, i.jsx)('div', {
                                      className: l()(e, p.section),
                                      children: n
                                  })
                          }),
                          (0, i.jsx)(d.f6W, {
                              theme: _.BR.DARKER,
                              children: (e) =>
                                  (0, i.jsxs)('div', {
                                      className: l()(e, p.section),
                                      children: [
                                          (0, i.jsx)(d.zxk, {
                                              color: d.zxk.Colors.BRAND,
                                              look: d.zxk.Looks.FILLED,
                                              disabled: !0,
                                              children: 'Disabled'
                                          }),
                                          r
                                      ]
                                  })
                          }),
                          (0, i.jsx)(d.f6W, {
                              theme: _.BR.LIGHT,
                              children: (e) =>
                                  (0, i.jsxs)('div', {
                                      className: l()(e, p.section),
                                      children: [
                                          (0, i.jsx)(d.zxk, {
                                              color: d.zxk.Colors.BRAND,
                                              look: d.zxk.Looks.FILLED,
                                              disabled: !0,
                                              children: 'Disabled'
                                          }),
                                          r
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
            (0, i.jsx)(Z, {})
        ]
    });
}
function R() {
    let [e, t] = s.useState('1');
    return (0, i.jsxs)('div', {
        className: p.section,
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
                className: p.tabBar,
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
function P() {
    let [e, t] = s.useState(1),
        [n, r] = s.useState(!1),
        [l, a] = s.useState(5),
        [o, c] = s.useState(!1);
    return (0, i.jsxs)('div', {
        className: p.section,
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
                                            action: () => r(!n)
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
function D() {
    return (0, i.jsxs)('div', {
        className: p.section,
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
                        children: (e) =>
                            (0, i.jsx)(d.zxk, {
                                ...e,
                                children: 'Tooltip on the top'
                            })
                    }),
                    (0, i.jsx)(d.ua7, {
                        text: "Here's right aligned tooltip text!",
                        position: 'left',
                        children: (e) =>
                            (0, i.jsx)(d.zxk, {
                                ...e,
                                children: 'Tooltip on the left'
                            })
                    }),
                    (0, i.jsx)(d.ua7, {
                        text: "Here's bottom aligned tooltip text!",
                        position: 'bottom',
                        children: (e) =>
                            (0, i.jsx)(d.zxk, {
                                ...e,
                                children: 'Tooltip on the bottom'
                            })
                    }),
                    (0, i.jsx)(d.ua7, {
                        text: "Here's right aligned tooltip text!",
                        position: 'right',
                        children: (e) =>
                            (0, i.jsx)(d.zxk, {
                                ...e,
                                children: 'Tooltip on the right'
                            })
                    })
                ]
            }),
            (0, i.jsx)('div', {})
        ]
    });
}
function y() {
    let [e, t] = s.useState(!1),
        [n, r] = s.useState(!1),
        [l, a] = s.useState('auto');
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: p.section,
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
                className: p.section,
                children: [
                    (0, i.jsx)(d.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Switches'
                    }),
                    (0, i.jsx)(d.j7V, {
                        hideBorder: !0,
                        value: n,
                        onChange: (e) => r(e),
                        children: 'FormSwitch with a label'
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: p.section,
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
                className: p.section,
                children: [
                    (0, i.jsx)(d.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Slider'
                    }),
                    (0, i.jsxs)('div', {
                        className: p.slider,
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
                        className: p.slider,
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
                        className: p.slider,
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
                        className: p.slider,
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
                        className: p.slider,
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
                        className: p.slider,
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
function Z() {
    return (0, i.jsxs)('div', {
        className: p.shinyButtonExamples,
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
function k() {
    let [e, t] = s.useState(null),
        [n, r] = s.useState(null),
        [l, o] = s.useState([]),
        [c, u] = s.useState([]),
        [m, g] = s.useState([]);
    return (0, i.jsxs)('div', {
        className: p.searchableSelectExamples,
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
                onChange: (e) => r(e),
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
                onChange: (e) => g(e),
                options: a.G
            }),
            (0, i.jsx)(d.VcW, {
                placeholder: 'Multi select (custom pills)',
                multi: !0,
                value: c,
                onChange: (e) => u(e),
                options: a.G,
                hidePills: !0,
                customPillContainerClassName: p.customPillContainer,
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
function L() {
    let [e, t] = s.useState(''),
        [n, r] = s.useState(''),
        [l, a] = s.useState('');
    return (0, i.jsxs)('div', {
        className: p.section,
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
                    onChange: r
                })
            })
        ]
    });
}
function B(e) {
    let { transitionState: t } = e,
        [n, r] = s.useState(!1),
        [l, a] = s.useState(d.CgR.SMALL),
        [o, c] = s.useState(!1),
        u = n ? p.modalOutlines : '';
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
                                        onChange: (e, t) => r(t),
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
function M() {
    return (0, i.jsxs)('div', {
        className: p.section,
        children: [
            (0, i.jsx)(d.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Modals'
            }),
            (0, i.jsx)(d.zxk, {
                onClick: () => {
                    (0, d.h7j)((e) => (0, i.jsx)(B, { ...e }));
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
function w() {
    let e = (0, o.e7)([m.Z], () => m.Z.gradientPreset);
    return (0, i.jsx)(d.f6W, {
        theme: _.BR.DARKER,
        disableAdaptiveTheme: !0,
        children: (t) =>
            (0, i.jsxs)('div', {
                className: l()(t, p.section),
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
                                className: l()(t, p.section),
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
                                                className: l()(e, p.section),
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
                                                className: l()(e, p.section),
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
