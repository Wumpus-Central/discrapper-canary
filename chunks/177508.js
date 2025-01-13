n.d(t, {
    Z: function () {
        return v;
    }
}),
    n(757143),
    n(47120),
    n(390547);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(971809),
    o = n(442837),
    c = n(844477),
    d = n(481060),
    u = n(514361),
    m = n(526156),
    h = n(726985),
    g = n(981631),
    p = n(231338),
    x = n(161309);
let S = Object.keys(d.Button.Colors).filter((e) => 'CUSTOM' !== e),
    T = Object.keys(d.Button.Looks).filter((e) => 'BLANK' !== e),
    E = Object.keys(d.Button.Sizes).filter((e) => 'NONE' !== e);
function C() {
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(d.LinkButton, {
                variant: 'primary',
                text: 'Testing',
                external: !0
            }),
            (0, i.jsx)(c.z, {
                variant: 'destructive-secondary',
                text: 'Testing',
                iconPosition: 'end',
                icon: d.TrashIcon
            }),
            (0, i.jsx)(j, {}),
            (0, i.jsx)(B, {}),
            (0, i.jsx)(L, {}),
            (0, i.jsx)(D, {}),
            (0, i.jsx)(P, {}),
            (0, i.jsx)(R, {}),
            (0, i.jsx)(O, {}),
            (0, i.jsx)(F, {}),
            (0, i.jsx)(M, {})
        ]
    });
}
let _ = ['neutral', 'blue_new', 'blurple', 'green_new', 'red_new', 'teal_new', 'yellow_new', 'orange_new'],
    f = ['background-surface-highest', 'background-surface-higher', 'background-surface-high', 'background-base-low', 'background-base-lower', 'background-base-lowest'],
    I = ['background-mod-subtle', 'background-mod-normal', 'background-mod-strong'],
    N = ['critical', 'warning', 'positive', 'info'],
    A = ['text-default', 'text-primary', 'text-secondary', 'text-tertiary', 'text-feedback-critical', 'text-feedback-warning', 'text-feedback-positive', 'text-feedback-info'];
function b() {
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(d.Heading, {
                variant: 'heading-xl/semibold',
                className: x.heading,
                children: 'Background Colors'
            }),
            f.map((e) =>
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
                                children: I.map((e) =>
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
                                                A.map((e) =>
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
                                children: N.map((e) => {
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
                                                (0, i.jsxs)(d.Stack, {
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
            (0, i.jsx)(d.Heading, {
                variant: 'heading-xl/semibold',
                className: x.heading,
                children: 'Scales'
            }),
            _.map((e) =>
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
                                            children: (0, i.jsx)(d.ThemeProvider, {
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
function v() {
    return (0, i.jsx)(m.Z, {
        parentSetting: h.s6.DESIGN_SYSTEMS,
        settingsSection: g.oAB.DESIGN_SYSTEMS,
        tabs: [
            {
                title: 'Components',
                component: () => (0, i.jsx)(C, {}),
                setting: h.s6.DESIGN_SYSTEMS_COMPONENTS
            },
            {
                title: 'Colors',
                component: () => (0, i.jsx)(b, {}),
                setting: h.s6.DESIGN_SYSTEMS_COLORS
            }
        ]
    });
}
function j() {
    let [e, t] = s.useState(!1),
        n = S.flatMap((e) => [
            ...T.map((t) =>
                (0, i.jsxs)(
                    d.Button,
                    {
                        color: d.Button.Colors[e],
                        look: d.Button.Looks[t],
                        fullWidth: !0,
                        style: { textTransform: 'capitalize' },
                        children: [e.toLowerCase(), ' - ', t.toLowerCase()]
                    },
                    e + t
                )
            ),
            (0, i.jsx)('hr', { className: x.sectionDivider }, e + 'divider')
        ]),
        r = E.flatMap((e) =>
            (0, i.jsx)(d.Button, {
                color: d.Button.Colors.BRAND,
                look: d.Button.Looks.FILLED,
                size: d.Button.Sizes[e],
                fullWidth: !0,
                style: { textTransform: 'capitalize' },
                children: e.toLowerCase()
            })
        );
    return (0, i.jsxs)('div', {
        className: x.section,
        children: [
            (0, i.jsx)(d.Heading, {
                variant: 'heading-xl/semibold',
                children: 'Buttons'
            }),
            (0, i.jsx)(d.Checkbox, {
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
                          (0, i.jsx)(d.ThemeProvider, {
                              theme: p.BR.DARKER,
                              children: (e) =>
                                  (0, i.jsx)('div', {
                                      className: l()(e, x.section),
                                      children: n
                                  })
                          }),
                          (0, i.jsx)(d.ThemeProvider, {
                              theme: p.BR.LIGHT,
                              children: (e) =>
                                  (0, i.jsx)('div', {
                                      className: l()(e, x.section),
                                      children: n
                                  })
                          }),
                          (0, i.jsx)(d.ThemeProvider, {
                              theme: p.BR.DARKER,
                              children: (e) =>
                                  (0, i.jsxs)('div', {
                                      className: l()(e, x.section),
                                      children: [
                                          (0, i.jsx)(d.Button, {
                                              color: d.Button.Colors.BRAND,
                                              look: d.Button.Looks.FILLED,
                                              disabled: !0,
                                              children: 'Disabled'
                                          }),
                                          r
                                      ]
                                  })
                          }),
                          (0, i.jsx)(d.ThemeProvider, {
                              theme: p.BR.LIGHT,
                              children: (e) =>
                                  (0, i.jsxs)('div', {
                                      className: l()(e, x.section),
                                      children: [
                                          (0, i.jsx)(d.Button, {
                                              color: d.Button.Colors.BRAND,
                                              look: d.Button.Looks.FILLED,
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
                children: (0, i.jsx)(d.Button, {
                    color: d.Button.Colors.BRAND,
                    look: d.Button.Looks.FILLED,
                    size: d.Button.Sizes.TINY,
                    children: 'Tiny'
                })
            }),
            (0, i.jsx)('div', {
                style: { display: 'flex' },
                children: (0, i.jsx)(d.Button, {
                    color: d.Button.Colors.BRAND,
                    look: d.Button.Looks.FILLED,
                    size: d.Button.Sizes.SMALL,
                    children: 'Small'
                })
            }),
            (0, i.jsx)('div', {
                style: { display: 'flex' },
                children: (0, i.jsx)(d.Button, {
                    color: d.Button.Colors.BRAND,
                    look: d.Button.Looks.FILLED,
                    size: d.Button.Sizes.MEDIUM,
                    children: 'Medium'
                })
            }),
            (0, i.jsx)('div', {
                style: { display: 'flex' },
                children: (0, i.jsx)(d.Button, {
                    color: d.Button.Colors.BRAND,
                    look: d.Button.Looks.FILLED,
                    size: d.Button.Sizes.LARGE,
                    children: 'Large'
                })
            }),
            (0, i.jsx)(y, {})
        ]
    });
}
function O() {
    let [e, t] = s.useState('1');
    return (0, i.jsxs)('div', {
        className: x.section,
        children: [
            (0, i.jsx)(d.Heading, {
                variant: 'heading-xl/semibold',
                children: 'TabBar'
            }),
            (0, i.jsxs)(d.TabBar, {
                type: 'top',
                look: 'brand',
                selectedItem: e,
                onItemSelect: (e) => t(e),
                className: x.tabBar,
                children: [
                    (0, i.jsx)(d.TabBar.Item, {
                        id: '1',
                        children: 'Tab 1'
                    }),
                    (0, i.jsx)(d.TabBar.Item, {
                        id: '2',
                        children: 'Tab 2'
                    }),
                    (0, i.jsx)(d.TabBar.Item, {
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
function R() {
    let [e, t] = s.useState(1),
        [n, r] = s.useState(!1),
        [l, a] = s.useState(5),
        [o, c] = s.useState(!1);
    return (0, i.jsxs)('div', {
        className: x.section,
        children: [
            (0, i.jsx)(d.Heading, {
                variant: 'heading-xl/semibold',
                children: 'Context Menus'
            }),
            (0, i.jsx)('span', {
                children: (0, i.jsx)(d.Popout, {
                    shouldShow: o,
                    renderPopout: () =>
                        (0, i.jsxs)(d.Menu, {
                            navId: 'demo',
                            'aria-label': 'Demo Actions',
                            onClose: () => null,
                            onSelect: () => null,
                            children: [
                                (0, i.jsxs)(d.MenuGroup, {
                                    label: 'Basic items',
                                    children: [
                                        (0, i.jsx)(d.MenuItem, {
                                            id: 'first',
                                            label: 'An option'
                                        }),
                                        (0, i.jsx)(d.MenuItem, {
                                            id: 'second',
                                            label: 'An option with an icon',
                                            icon: d.ChatIcon
                                        }),
                                        (0, i.jsxs)(d.MenuItem, {
                                            id: 'item-with-submenu',
                                            label: 'Item with submenu',
                                            children: [
                                                (0, i.jsx)(d.MenuItem, {
                                                    id: 'subitem-1',
                                                    label: 'Subitem 1'
                                                }),
                                                (0, i.jsx)(d.MenuItem, {
                                                    id: 'subitem-2',
                                                    label: 'Subitem 2'
                                                }),
                                                (0, i.jsx)(d.MenuItem, {
                                                    id: 'subitem-3',
                                                    label: 'Subitem 3'
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, i.jsxs)(d.MenuGroup, {
                                    label: 'Inputs',
                                    children: [
                                        (0, i.jsx)(d.MenuCheckboxItem, {
                                            id: 'checkable',
                                            label: 'Checkbox',
                                            checked: n,
                                            action: () => r(!n)
                                        }),
                                        (0, i.jsx)(d.MenuRadioItem, {
                                            id: 'radio-one',
                                            group: 'a-group',
                                            label: 'Radio 1',
                                            action: () => t(1),
                                            checked: 1 === e
                                        }),
                                        (0, i.jsx)(d.MenuRadioItem, {
                                            id: 'radio-two',
                                            group: 'a-group',
                                            label: 'Radio 2',
                                            action: () => t(2),
                                            checked: 2 === e
                                        }),
                                        (0, i.jsx)(d.MenuRadioItem, {
                                            id: 'radio-three',
                                            group: 'a-group',
                                            label: 'Radio 3',
                                            action: () => t(3),
                                            checked: 3 === e
                                        }),
                                        (0, i.jsx)(d.MenuControlItem, {
                                            id: 'slider',
                                            label: 'Slider',
                                            control: (e, t) =>
                                                (0, i.jsx)(d.MenuSliderControl, {
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
                                (0, i.jsx)(d.MenuSeparator, {}),
                                (0, i.jsx)(d.MenuItem, {
                                    id: 'danger',
                                    label: 'A destructive option',
                                    color: 'danger',
                                    icon: d.TrashIcon
                                })
                            ]
                        }),
                    children: () =>
                        (0, i.jsx)(d.Button, {
                            onClick: () => c(!o),
                            children: 'Toggle context menu'
                        })
                })
            })
        ]
    });
}
function P() {
    return (0, i.jsxs)('div', {
        className: x.section,
        children: [
            (0, i.jsx)(d.Heading, {
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
                    (0, i.jsx)(d.Tooltip, {
                        text: "Here's top aligned tooltip text!",
                        position: 'top',
                        children: (e) =>
                            (0, i.jsx)(d.Button, {
                                ...e,
                                children: 'Tooltip on the top'
                            })
                    }),
                    (0, i.jsx)(d.Tooltip, {
                        text: "Here's right aligned tooltip text!",
                        position: 'left',
                        children: (e) =>
                            (0, i.jsx)(d.Button, {
                                ...e,
                                children: 'Tooltip on the left'
                            })
                    }),
                    (0, i.jsx)(d.Tooltip, {
                        text: "Here's bottom aligned tooltip text!",
                        position: 'bottom',
                        children: (e) =>
                            (0, i.jsx)(d.Button, {
                                ...e,
                                children: 'Tooltip on the bottom'
                            })
                    }),
                    (0, i.jsx)(d.Tooltip, {
                        text: "Here's right aligned tooltip text!",
                        position: 'right',
                        children: (e) =>
                            (0, i.jsx)(d.Button, {
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
function D() {
    let [e, t] = s.useState(!1),
        [n, r] = s.useState(!1),
        [l, a] = s.useState('auto');
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: x.section,
                children: [
                    (0, i.jsx)(d.Heading, {
                        variant: 'heading-xl/semibold',
                        children: 'Checkboxes'
                    }),
                    (0, i.jsx)(d.Checkbox, {
                        value: e,
                        onChange: (e, n) => t(n),
                        children: (0, i.jsx)(d.Text, {
                            variant: 'text-md/medium',
                            children: 'Checkbox input'
                        })
                    }),
                    (0, i.jsx)(d.Checkbox, {
                        value: e,
                        onChange: (e, n) => t(n),
                        disabled: !0,
                        children: (0, i.jsx)(d.Text, {
                            variant: 'text-md/medium',
                            children: 'Disabled checkbox'
                        })
                    }),
                    (0, i.jsx)(d.Checkbox, {
                        value: e,
                        onChange: (e, n) => t(n),
                        readOnly: !0,
                        children: (0, i.jsx)(d.Text, {
                            variant: 'text-md/medium',
                            children: 'Read-only checkbox'
                        })
                    }),
                    (0, i.jsx)(d.Checkbox, {
                        value: e,
                        onChange: (e, n) => t(n),
                        type: d.Checkbox.Types.ROW,
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
                    (0, i.jsx)(d.Heading, {
                        variant: 'heading-xl/semibold',
                        children: 'Switches'
                    }),
                    (0, i.jsx)(d.FormSwitch, {
                        hideBorder: !0,
                        value: n,
                        onChange: (e) => r(e),
                        children: 'FormSwitch with a label'
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: x.section,
                children: [
                    (0, i.jsx)(d.Heading, {
                        variant: 'heading-xl/semibold',
                        children: 'Radio Buttons'
                    }),
                    (0, i.jsx)(d.FormItem, {
                        children: (0, i.jsx)(d.RadioGroup, {
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
                    (0, i.jsx)(d.Heading, {
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
                            (0, i.jsx)(d.Slider, {
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
                            (0, i.jsx)(d.Slider, {
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
                            (0, i.jsx)(d.Slider, {
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
                            (0, i.jsx)(d.Slider, {
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
                            (0, i.jsx)(d.Slider, {
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
                            (0, i.jsx)(d.Slider, {
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
function y() {
    return (0, i.jsxs)('div', {
        className: x.shinyButtonExamples,
        children: [
            (0, i.jsx)(d.ShinyButton, {
                size: d.Button.Sizes.MEDIUM,
                shineSize: d.ShinyButton.ShineSizes.SMALL,
                onClick: () => {},
                children: 'Shiny Button'
            }),
            (0, i.jsx)(d.ShinyButton, {
                size: d.Button.Sizes.MEDIUM,
                shineSize: d.ShinyButton.ShineSizes.SMALL,
                onlyShineOnHover: !0,
                onClick: () => {},
                children: 'Shine on Hover'
            })
        ]
    });
}
function B() {
    let [e, t] = s.useState(null),
        [n, r] = s.useState(null),
        [l, o] = s.useState([]),
        [c, u] = s.useState([]),
        [m, h] = s.useState([]);
    return (0, i.jsxs)('div', {
        className: x.searchableSelectExamples,
        children: [
            (0, i.jsx)(d.Heading, {
                variant: 'heading-xl/semibold',
                children: 'SearchableSelect'
            }),
            (0, i.jsx)(d.SearchableSelect, {
                placeholder: 'Single select',
                value: e,
                onChange: (e) => t(e),
                options: a.G
            }),
            (0, i.jsx)(d.SearchableSelect, {
                placeholder: 'Single select (clearable)',
                clearable: !0,
                value: n,
                onChange: (e) => r(e),
                options: a.G
            }),
            (0, i.jsx)(d.SearchableSelect, {
                placeholder: 'Multi select',
                multi: !0,
                value: l,
                onChange: (e) => o(e),
                options: a.G
            }),
            (0, i.jsx)(d.SearchableSelect, {
                placeholder: 'Multi select (clearable)',
                multi: !0,
                clearable: !0,
                value: m,
                onChange: (e) => h(e),
                options: a.G
            }),
            (0, i.jsx)(d.SearchableSelect, {
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
function L() {
    let [e, t] = s.useState(''),
        [n, r] = s.useState(''),
        [l, a] = s.useState('');
    return (0, i.jsxs)('div', {
        className: x.section,
        children: [
            (0, i.jsx)(d.Heading, {
                variant: 'heading-xl/semibold',
                children: 'TextInput'
            }),
            (0, i.jsx)(d.FormItem, {
                children: (0, i.jsx)(d.SearchBar, {
                    size: d.SearchBar.Sizes.MEDIUM,
                    placeholder: 'Search...',
                    onChange: (e) => a(e),
                    query: l,
                    onClear: () => a('')
                })
            }),
            (0, i.jsx)(d.FormItem, {
                title: 'Disabled',
                disabled: !0,
                children: (0, i.jsx)(d.TextInput, {
                    placeholder: 'Disabled',
                    disabled: !0
                })
            }),
            (0, i.jsx)(d.FormItem, {
                title: 'Error',
                children: (0, i.jsx)(d.TextInput, {
                    required: !0,
                    error: 'This must have a value'
                })
            }),
            (0, i.jsx)(d.FormItem, {
                title: 'Error',
                children: (0, i.jsx)(d.TextInput, {
                    defaultValue: 'Not a valid value',
                    error: 'This has an error.'
                })
            }),
            (0, i.jsx)(d.FormItem, {
                title: 'Read only',
                children: (0, i.jsx)(d.TextInput, {
                    value: 'Read-only, not-editable field',
                    editable: !1
                })
            }),
            (0, i.jsx)(d.FormItem, {
                title: 'Input with a label',
                children: (0, i.jsx)(d.TextInput, {
                    placeholder: 'Real placeholder',
                    value: e,
                    onChange: t
                })
            }),
            (0, i.jsx)(d.FormItem, {
                title: 'Text area',
                children: (0, i.jsx)(d.TextArea, {
                    placeholder: 'Text area placeholder',
                    showCharacterCount: !0,
                    value: n,
                    onChange: r
                })
            })
        ]
    });
}
function Z(e) {
    let { transitionState: t } = e,
        [n, r] = s.useState(!1),
        [l, a] = s.useState(d.ModalSize.SMALL),
        [o, c] = s.useState(!1),
        u = n ? x.modalOutlines : '';
    return (0, i.jsxs)(d.ModalRoot, {
        transitionState: t,
        size: l,
        children: [
            (0, i.jsx)(d.ModalHeader, {
                className: u,
                children: (0, i.jsx)(d.Heading, {
                    variant: 'heading-xl/semibold',
                    children: 'Modal'
                })
            }),
            (0, i.jsx)(d.ModalContent, {
                className: u,
                children: (0, i.jsxs)(d.Stack, {
                    gap: 16,
                    children: [
                        (0, i.jsx)(d.FormItem, {
                            title: 'Modal Size',
                            children: (0, i.jsx)(d.SingleSelect, {
                                value: l,
                                onChange: a,
                                options: Object.entries(d.ModalSize).map((e) => {
                                    let [t, n] = e;
                                    return {
                                        label: t,
                                        value: n
                                    };
                                })
                            })
                        }),
                        (0, i.jsx)(d.FormSection, {
                            title: 'Options',
                            children: (0, i.jsxs)(d.Stack, {
                                gap: 16,
                                children: [
                                    (0, i.jsx)(d.Checkbox, {
                                        value: n,
                                        onChange: (e, t) => r(t),
                                        children: (0, i.jsx)(d.Text, {
                                            variant: 'text-md/medium',
                                            children: 'Show Section Outlines'
                                        })
                                    }),
                                    (0, i.jsx)(d.Checkbox, {
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
            (0, i.jsx)(d.ModalFooter, {
                className: u,
                children: (0, i.jsxs)(d.Stack, {
                    direction: 'horizontal',
                    justify: 'end',
                    gap: 8,
                    children: [
                        o &&
                            (0, i.jsx)(d.Button, {
                                color: d.Button.Colors.PRIMARY,
                                look: d.Button.Looks.FILLED,
                                children: 'Secondary Action'
                            }),
                        (0, i.jsx)(d.Button, { children: 'Close' })
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
            (0, i.jsx)(d.Heading, {
                variant: 'heading-xl/semibold',
                children: 'Modals'
            }),
            (0, i.jsx)(d.Button, {
                onClick: () => {
                    (0, d.openModal)((e) => (0, i.jsx)(Z, { ...e }));
                },
                children: 'Open modal'
            })
        ]
    });
}
function M() {
    let e = (0, o.e7)([u.Z], () => u.Z.gradientPreset);
    return (0, i.jsx)(d.ThemeProvider, {
        theme: p.BR.DARKER,
        disableAdaptiveTheme: !0,
        children: (t) =>
            (0, i.jsxs)('div', {
                className: l()(t, x.section),
                children: [
                    (0, i.jsx)(d.Button, {
                        color: d.Button.Colors.PRIMARY,
                        look: d.Button.Looks.FILLED,
                        fullWidth: !0,
                        children: 'Button'
                    }),
                    (0, i.jsx)(d.ThemeProvider, {
                        theme: p.BR.LIGHT,
                        children: (t) =>
                            (0, i.jsxs)('div', {
                                className: l()(t, x.section),
                                children: [
                                    (0, i.jsx)(d.Button, {
                                        color: d.Button.Colors.PRIMARY,
                                        look: d.Button.Looks.FILLED,
                                        fullWidth: !0,
                                        children: 'Button'
                                    }),
                                    (0, i.jsx)(d.ThemeProvider, {
                                        theme: p.BR.DARKER,
                                        children: (e) =>
                                            (0, i.jsx)('div', {
                                                className: l()(e, x.section),
                                                children: (0, i.jsx)(d.Button, {
                                                    color: d.Button.Colors.PRIMARY,
                                                    look: d.Button.Looks.FILLED,
                                                    fullWidth: !0,
                                                    children: 'Button'
                                                })
                                            })
                                    }),
                                    (0, i.jsx)(d.ThemeProvider, {
                                        gradient: e,
                                        children: (e) =>
                                            (0, i.jsx)('div', {
                                                className: l()(e, x.section),
                                                children: (0, i.jsx)(d.Button, {
                                                    color: d.Button.Colors.PRIMARY,
                                                    look: d.Button.Looks.FILLED,
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
