(n.d(t, { Z: () => F }), n(704826), n(35282), n(388685), n(361932), n(187205));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    l = n.n(s),
    a = n(392711),
    o = n(971809),
    c = n(442837),
    d = n(680018),
    u = n(374415),
    m = n(861066),
    g = n(780842),
    p = n(179538),
    h = n(279570),
    f = n(257465),
    b = n(667202),
    _ = n(82659),
    x = n(369585),
    E = n(530392),
    j = n(37148),
    C = n(481060),
    O = n(240872),
    S = n(514361),
    v = n(705262),
    T = n(526156),
    N = n(706705),
    I = n(726985),
    y = n(981631),
    A = n(231338),
    P = n(426617),
    R = n(177475);
function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
    }
    return e;
}
function Z(e, t) {
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
function w() {
    return (0, i.jsxs)('div', {
        className: P.root,
        children: [(0, i.jsx)(z, {}), (0, i.jsx)(J, {}), (0, i.jsx)($, {}), (0, i.jsx)(Q, {}), (0, i.jsx)(X, {}), (0, i.jsx)(q, {}), (0, i.jsx)(K, {}), (0, i.jsx)(eo, {}), (0, i.jsx)(k, {}), (0, i.jsx)(ec, {})]
    });
}
function k() {
    let e = Object.keys(C.DM8);
    return (0, i.jsxs)('div', {
        className: P.section,
        children: [
            (0, i.jsx)(C.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Notice'
            }),
            (0, i.jsx)(C.Kqy, {
                gap: 16,
                children: e.map((e) =>
                    (0, i.jsx)(
                        C.qXd,
                        {
                            color: C.DM8[e],
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
let L = ['neutral', 'blue_new', 'blurple', 'green_new', 'red_new', 'teal_new', 'yellow_new', 'orange_new', 'pink', 'purple'],
    B = ['background-surface-highest', 'background-surface-higher', 'background-surface-high', 'background-base-low', 'background-base-lower', 'background-base-lowest'],
    M = ['', 'background-mod-subtle', 'background-mod-normal', 'background-mod-strong'],
    U = ['critical', 'warning', 'positive', 'info'],
    V = ['text-default', 'text-primary', 'text-secondary', 'text-tertiary', 'text-feedback-critical', 'text-feedback-warning', 'text-feedback-positive', 'text-feedback-info', 'premium-nitro-pink-text'];
function G() {
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(C.X6q, {
                variant: 'heading-xl/semibold',
                className: P.heading,
                children: 'Background Colors'
            }),
            B.map((e) =>
                (0, i.jsxs)(
                    'div',
                    {
                        className: P.palette,
                        style: {
                            backgroundColor: 'var(--'.concat(e, ')'),
                            padding: 24
                        },
                        children: [
                            (0, i.jsx)(C.Text, {
                                variant: 'text-md/medium',
                                children: e
                            }),
                            (0, i.jsx)('div', {
                                style: {
                                    display: 'grid',
                                    gap: 8,
                                    gridTemplateColumns: 'repeat(3, 1fr)'
                                },
                                children: M.map((e) =>
                                    (0, i.jsxs)(
                                        'div',
                                        {
                                            className: P.color,
                                            style: {
                                                padding: 16,
                                                background: 'var(--'.concat(e, ')')
                                            },
                                            children: [
                                                (0, i.jsx)(C.Text, {
                                                    variant: 'text-xs/semibold',
                                                    color: 'header-secondary',
                                                    children: e
                                                }),
                                                (0, i.jsx)('hr', { className: P.sectionDivider }),
                                                V.map((e) =>
                                                    (0, i.jsx)(
                                                        C.Text,
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
                            (0, i.jsx)('hr', { className: P.sectionDivider }),
                            (0, i.jsx)('div', {
                                style: {
                                    display: 'grid',
                                    gap: 8,
                                    gridTemplateColumns: 'repeat(3, 1fr)'
                                },
                                children: U.map((e) => {
                                    let t = 'var(--text-feedback-'.concat(e, ')');
                                    return (0, i.jsxs)(
                                        'div',
                                        {
                                            className: P.color,
                                            style: {
                                                padding: 16,
                                                background: 'var(--background-feedback-'.concat(e, ')')
                                            },
                                            children: [
                                                (0, i.jsx)(C.Text, {
                                                    variant: 'text-xs/semibold',
                                                    color: 'header-secondary'
                                                }),
                                                (0, i.jsxs)(C.Kqy, {
                                                    children: [
                                                        (0, i.jsxs)(C.Text, {
                                                            variant: 'text-xs/semibold',
                                                            style: { color: t },
                                                            children: ['background-feedback-', e]
                                                        }),
                                                        (0, i.jsx)(C.Text, {
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
            (0, i.jsx)(C.X6q, {
                variant: 'heading-xl/semibold',
                className: P.heading,
                children: 'Scales'
            }),
            L.map((e) =>
                (0, i.jsxs)(
                    'div',
                    {
                        className: P.palette,
                        children: [
                            (0, i.jsx)(C.Text, {
                                variant: 'text-lg/semibold',
                                children: e
                            }),
                            (0, i.jsx)('div', {
                                className: P.colors,
                                children: Array.from({ length: 100 }, (t, n) =>
                                    (0, i.jsx)(
                                        'div',
                                        {
                                            className: P.color,
                                            style: { background: 'var(--'.concat(e.replace('_', '-'), '-').concat(n + 1, ')') },
                                            children: (0, i.jsx)(C.f6W, {
                                                theme: n < 50 ? 'light' : 'dark',
                                                children: (t) =>
                                                    (0, i.jsxs)(C.Text, {
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
function F() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(T.Z, {
                parentSetting: I.s6.DESIGN_SYSTEMS,
                settingsSection: y.oAB.DESIGN_SYSTEMS,
                tabs: [
                    {
                        title: 'Components',
                        component: () => (0, i.jsx)(w, {}),
                        setting: I.s6.DESIGN_SYSTEMS_COMPONENTS
                    },
                    {
                        title: 'Colors',
                        component: () => (0, i.jsx)(G, {}),
                        setting: I.s6.DESIGN_SYSTEMS_COLORS
                    },
                    {
                        title: 'Animations',
                        component: () => (0, i.jsx)(N.Z, {}),
                        setting: I.s6.ANIMATION_TESTING
                    }
                ]
            }),
            (0, i.jsx)('div', {
                className: P.themes,
                children: (0, i.jsx)(v.ZP, {
                    type: v.yH.SETTINGS,
                    children: (0, i.jsx)(v.ZP.Basic, { className: P.themeSelectionGroup })
                })
            })
        ]
    });
}
function H(e) {
    var { component: t, showLoadingAnimation: n } = e,
        s = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        s = Object.keys(e);
                    for (i = 0; i < s.length; i++) ((n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (i = 0; i < s.length; i++) ((n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
            }
            return r;
        })(e, ['component', 'showLoadingAnimation']);
    let [l, a] = r.useState(!1),
        o = r.useRef(-1);
    return (
        r.useEffect(
            () => (
                l &&
                    n &&
                    (o.current = setTimeout(() => {
                        a(!1);
                    }, 3000)),
                () => {
                    o.current >= 0 && clearTimeout(o.current);
                }
            ),
            [l, n]
        ),
        (0, i.jsx)(
            t,
            Z(D({}, s), {
                loading: n ? l : void 0,
                onClick: () => a(!l)
            })
        )
    );
}
function z() {
    let [e, t] = r.useState('md'),
        [n, s] = r.useState('start'),
        [l, o] = r.useState(!0),
        c = ['primary', 'secondary', 'critical-primary', 'critical-secondary', 'active', 'overlay-primary', 'overlay-secondary'],
        g = [...c, 'expressive'].map((t) =>
            (0, i.jsx)(
                H,
                {
                    component: d.z,
                    variant: t,
                    text: ''.concat((0, a.capitalize)(t), ' ').concat(e.toUpperCase()),
                    size: e,
                    icon: 'none' !== n ? C.gw7 : void 0,
                    iconPosition: n,
                    showLoadingAnimation: l
                },
                t + e
            )
        ),
        h = [...c, 'icon-only'].map((t) =>
            (0, i.jsx)(
                H,
                {
                    component: m.h,
                    variant: t,
                    icon: C.gw7,
                    size: e,
                    'aria-label': ''.concat(t, ' ').concat(e),
                    showLoadingAnimation: l
                },
                t + e
            )
        ),
        f = ['primary', 'secondary', 'always-white', 'critical'].map((e) =>
            (0, i.jsx)(
                r.Fragment,
                {
                    children: (0, i.jsx)(p.A, {
                        variant: e,
                        text: 'Text button'
                    })
                },
                e
            )
        );
    return (0, i.jsxs)('div', {
        className: P.section,
        children: [
            (0, i.jsx)(C.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Buttons'
            }),
            (0, i.jsxs)(W, {
                title: 'Button Options',
                children: [
                    (0, i.jsx)(C.xJW, {
                        title: 'Button size',
                        children: (0, i.jsx)(C.FXm, {
                            onChange: (e) => {
                                let { value: n } = e;
                                return t(n);
                            },
                            options: [
                                {
                                    value: 'sm',
                                    name: 'Small'
                                },
                                {
                                    value: 'md',
                                    name: 'Medium'
                                }
                            ],
                            value: e
                        })
                    }),
                    (0, i.jsx)(C.xJW, {
                        title: 'Icon position',
                        children: (0, i.jsx)(C.FXm, {
                            onChange: (e) => {
                                let { value: t } = e;
                                return s(t);
                            },
                            options: [
                                {
                                    value: 'none',
                                    name: 'None'
                                },
                                {
                                    value: 'start',
                                    name: 'Start'
                                },
                                {
                                    value: 'end',
                                    name: 'End'
                                }
                            ],
                            value: n
                        })
                    }),
                    (0, i.jsx)(C.xJW, {
                        title: 'Loading animation',
                        children: (0, i.jsx)(C.FXm, {
                            onChange: (e) => {
                                let { value: t } = e;
                                return o('on' === t);
                            },
                            options: [
                                {
                                    value: 'off',
                                    name: 'Off'
                                },
                                {
                                    value: 'on',
                                    name: 'On'
                                }
                            ],
                            value: l ? 'on' : 'off'
                        })
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                style: {
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: 16
                },
                children: [f, g, h]
            }),
            (0, i.jsxs)(C.Kqy, {
                gap: 16,
                padding: { top: 16 },
                children: [
                    (0, i.jsx)(C.X6q, {
                        variant: 'heading-lg/semibold',
                        children: 'Button Groups'
                    }),
                    (0, i.jsx)(C.Text, {
                        variant: 'text-lg/medium',
                        children: 'Horizontal'
                    }),
                    (0, i.jsxs)(C.Kqy, {
                        gap: 16,
                        direction: 'horizontal',
                        children: [
                            (0, i.jsxs)(C.Kqy, {
                                gap: 16,
                                children: [
                                    (0, i.jsxs)(u.h, {
                                        size: e,
                                        children: [
                                            (0, i.jsx)(H, {
                                                component: d.z,
                                                variant: 'secondary',
                                                text: 'Cancel',
                                                showLoadingAnimation: l
                                            }),
                                            (0, i.jsx)(H, {
                                                component: d.z,
                                                variant: 'primary',
                                                text: 'Submit',
                                                showLoadingAnimation: l
                                            })
                                        ]
                                    }),
                                    (0, i.jsxs)(u.h, {
                                        size: e,
                                        children: [
                                            (0, i.jsx)(H, {
                                                component: d.z,
                                                variant: 'primary',
                                                text: 'Submit',
                                                showLoadingAnimation: l
                                            }),
                                            (0, i.jsx)(H, {
                                                component: m.h,
                                                variant: 'secondary',
                                                icon: C.gw7,
                                                'aria-label': 'Clyde',
                                                showLoadingAnimation: l
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, i.jsx)(C.Kqy, {
                                gap: 16,
                                children: (0, i.jsxs)(u.h, {
                                    size: e,
                                    fullWidth: !0,
                                    children: [
                                        (0, i.jsx)(H, {
                                            component: d.z,
                                            variant: 'secondary',
                                            text: 'Cancel',
                                            showLoadingAnimation: l
                                        }),
                                        (0, i.jsx)(H, {
                                            component: d.z,
                                            variant: 'primary',
                                            text: 'Submit',
                                            showLoadingAnimation: l
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    (0, i.jsx)(C.Text, {
                        variant: 'text-lg/medium',
                        children: 'Vertical'
                    }),
                    (0, i.jsxs)(C.Kqy, {
                        gap: 16,
                        direction: 'horizontal',
                        children: [
                            (0, i.jsx)(C.Kqy, {
                                gap: 16,
                                children: (0, i.jsxs)(u.h, {
                                    direction: 'vertical',
                                    size: e,
                                    children: [
                                        (0, i.jsx)(H, {
                                            component: d.z,
                                            variant: 'secondary',
                                            text: 'Cancel',
                                            showLoadingAnimation: l
                                        }),
                                        (0, i.jsx)(H, {
                                            component: d.z,
                                            variant: 'primary',
                                            text: 'Submit',
                                            showLoadingAnimation: l
                                        })
                                    ]
                                })
                            }),
                            (0, i.jsx)(C.Kqy, {
                                gap: 16,
                                children: (0, i.jsxs)(u.h, {
                                    fullWidth: !0,
                                    direction: 'vertical',
                                    size: e,
                                    children: [
                                        (0, i.jsx)(H, {
                                            component: d.z,
                                            variant: 'secondary',
                                            text: 'Cancel',
                                            showLoadingAnimation: l
                                        }),
                                        (0, i.jsx)(H, {
                                            component: d.z,
                                            variant: 'primary',
                                            text: 'Submit',
                                            showLoadingAnimation: l
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    (0, i.jsx)(Y, { buttonSize: e })
                ]
            })
        ]
    });
}
function Y(e) {
    let { buttonSize: t } = e,
        [n, s] = r.useState(!1);
    return (0, i.jsxs)(C.Kqy, {
        gap: 16,
        children: [
            (0, i.jsx)(C.X6q, {
                variant: 'heading-xl/semibold',
                children: 'PlayButton'
            }),
            (0, i.jsx)(C.Kqy, {
                direction: 'horizontal',
                gap: 16,
                children: ['dark', 'mid', 'light'].map((e) =>
                    (0, i.jsx)(
                        'div',
                        {
                            className: P.video,
                            'data-luminance': e,
                            children: (0, i.jsx)(g.J, {
                                size: t,
                                playing: n,
                                onClick: () => s(!n)
                            })
                        },
                        e
                    )
                )
            })
        ]
    });
}
function W(e) {
    let { children: t, title: n } = e,
        [s, a] = r.useState(!1);
    return (0, i.jsxs)(C.Kqy, {
        direction: 'vertical',
        gap: 0,
        padding: 16,
        className: P.floatingControls,
        children: [
            (0, i.jsxs)(C.Kqy, {
                direction: 'horizontal',
                gap: 16,
                align: 'center',
                justify: 'space-between',
                children: [
                    (0, i.jsx)(C.X6q, {
                        variant: 'heading-lg/semibold',
                        children: n
                    }),
                    (0, i.jsx)(h.Q, {
                        icon: s ? C.hic : C.sXD,
                        onClick: () => a(!s),
                        pressed: s,
                        'aria-label': 'Show controls'
                    })
                ]
            }),
            (0, i.jsx)(C.Kqy, {
                gap: 16,
                className: l()(P.floatingControlsContent, { [P.floatingControlsContentHidden]: !s }),
                children: t
            })
        ]
    });
}
function K() {
    let [e, t] = r.useState('1');
    return (0, i.jsxs)('div', {
        className: P.section,
        children: [
            (0, i.jsx)(C.X6q, {
                variant: 'heading-xl/semibold',
                children: 'TabBar'
            }),
            (0, i.jsxs)(C.njP, {
                type: 'top',
                look: 'brand',
                selectedItem: e,
                onItemSelect: (e) => t(e),
                className: P.tabBar,
                children: [
                    (0, i.jsx)(C.njP.Item, {
                        id: '1',
                        children: 'Tab 1'
                    }),
                    (0, i.jsx)(C.njP.Item, {
                        id: '2',
                        children: 'Tab 2'
                    }),
                    (0, i.jsx)(C.njP.Item, {
                        id: '3',
                        children: 'Tab 3'
                    })
                ]
            }),
            (0, i.jsxs)(C.Text, {
                variant: 'text-md/medium',
                children: ['Selected tab: ', e]
            })
        ]
    });
}
function q() {
    let [e, t] = r.useState(1),
        [n, s] = r.useState(!1),
        [l, a] = r.useState(5),
        [o, c] = r.useState(!1),
        d = r.useRef(null);
    return (0, i.jsxs)('div', {
        className: P.section,
        children: [
            (0, i.jsx)(C.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Context Menus'
            }),
            (0, i.jsx)('span', {
                children: (0, i.jsx)(C.yRy, {
                    targetElementRef: d,
                    shouldShow: o,
                    renderPopout: () =>
                        (0, i.jsxs)(C.v2r, {
                            navId: 'demo',
                            'aria-label': 'Demo Actions',
                            onClose: () => null,
                            onSelect: () => null,
                            children: [
                                (0, i.jsxs)(C.kSQ, {
                                    label: 'Basic items',
                                    children: [
                                        (0, i.jsx)(C.sNh, {
                                            id: 'first',
                                            label: 'An option'
                                        }),
                                        (0, i.jsx)(C.sNh, {
                                            id: 'second',
                                            label: 'An option with an icon',
                                            icon: C.kBi
                                        }),
                                        (0, i.jsxs)(C.sNh, {
                                            id: 'item-with-submenu',
                                            label: 'Item with submenu',
                                            children: [
                                                (0, i.jsx)(C.sNh, {
                                                    id: 'subitem-1',
                                                    label: 'Subitem 1'
                                                }),
                                                (0, i.jsx)(C.sNh, {
                                                    id: 'subitem-2',
                                                    label: 'Subitem 2'
                                                }),
                                                (0, i.jsx)(C.sNh, {
                                                    id: 'subitem-3',
                                                    label: 'Subitem 3'
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, i.jsxs)(C.kSQ, {
                                    label: 'Inputs',
                                    children: [
                                        (0, i.jsx)(C.S89, {
                                            id: 'checkable',
                                            label: 'Checkbox',
                                            checked: n,
                                            action: () => s(!n)
                                        }),
                                        (0, i.jsx)(C.k5B, {
                                            id: 'radio-one',
                                            group: 'a-group',
                                            label: 'Radio 1',
                                            action: () => t(1),
                                            checked: 1 === e
                                        }),
                                        (0, i.jsx)(C.k5B, {
                                            id: 'radio-two',
                                            group: 'a-group',
                                            label: 'Radio 2',
                                            action: () => t(2),
                                            checked: 2 === e
                                        }),
                                        (0, i.jsx)(C.k5B, {
                                            id: 'radio-three',
                                            group: 'a-group',
                                            label: 'Radio 3',
                                            action: () => t(3),
                                            checked: 3 === e
                                        }),
                                        (0, i.jsx)(C.II_, {
                                            id: 'slider',
                                            label: 'Slider',
                                            control: (e, t) =>
                                                (0, i.jsx)(C._wy, {
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
                                (0, i.jsx)(C.Clw, {}),
                                (0, i.jsx)(C.sNh, {
                                    id: 'danger',
                                    label: 'A destructive option',
                                    color: 'danger',
                                    icon: C.XHJ
                                })
                            ]
                        }),
                    children: () =>
                        (0, i.jsx)(C.zxk, {
                            buttonRef: d,
                            onClick: () => c(!o),
                            children: 'Toggle context menu'
                        })
                })
            })
        ]
    });
}
function X() {
    return (0, i.jsxs)('div', {
        className: P.section,
        children: [
            (0, i.jsx)(C.X6q, {
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
                    (0, i.jsx)(C.ua7, {
                        text: "Here's top aligned tooltip text!",
                        position: 'top',
                        children: (e) => (0, i.jsx)(C.zxk, Z(D({}, e), { children: 'Tooltip on the top' }))
                    }),
                    (0, i.jsx)(C.ua7, {
                        text: "Here's right aligned tooltip text!",
                        position: 'left',
                        children: (e) => (0, i.jsx)(C.zxk, Z(D({}, e), { children: 'Tooltip on the left' }))
                    }),
                    (0, i.jsx)(C.ua7, {
                        text: "Here's bottom aligned tooltip text!",
                        position: 'bottom',
                        children: (e) => (0, i.jsx)(C.zxk, Z(D({}, e), { children: 'Tooltip on the bottom' }))
                    }),
                    (0, i.jsx)(C.ua7, {
                        text: "Here's right aligned tooltip text!",
                        position: 'right',
                        children: (e) => (0, i.jsx)(C.zxk, Z(D({}, e), { children: 'Tooltip on the right' }))
                    })
                ]
            }),
            (0, i.jsx)('div', {})
        ]
    });
}
function Q() {
    let [e, t] = r.useState(!1),
        [n, s] = r.useState(!1),
        [l, a] = r.useState('auto');
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: P.section,
                children: [
                    (0, i.jsx)(C.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Checkboxes'
                    }),
                    (0, i.jsx)(C.XZJ, {
                        value: e,
                        onChange: (e, n) => t(n),
                        children: (0, i.jsx)(C.Text, {
                            variant: 'text-md/medium',
                            children: 'Checkbox input'
                        })
                    }),
                    (0, i.jsx)(C.XZJ, {
                        value: e,
                        onChange: (e, n) => t(n),
                        disabled: !0,
                        children: (0, i.jsx)(C.Text, {
                            variant: 'text-md/medium',
                            children: 'Disabled checkbox'
                        })
                    }),
                    (0, i.jsx)(C.XZJ, {
                        value: e,
                        onChange: (e, n) => t(n),
                        readOnly: !0,
                        children: (0, i.jsx)(C.Text, {
                            variant: 'text-md/medium',
                            children: 'Read-only checkbox'
                        })
                    }),
                    (0, i.jsx)(C.XZJ, {
                        value: e,
                        onChange: (e, n) => t(n),
                        type: C.XZJ.Types.ROW,
                        children: (0, i.jsx)(C.Text, {
                            variant: 'text-md/medium',
                            children: 'Checkbox row'
                        })
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: P.section,
                children: [
                    (0, i.jsx)(C.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Switches'
                    }),
                    (0, i.jsx)(C.j7V, {
                        hideBorder: !0,
                        value: n,
                        onChange: (e) => s(e),
                        children: 'FormSwitch with a label'
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: P.section,
                children: [
                    (0, i.jsx)(C.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Radio Buttons'
                    }),
                    (0, i.jsx)(C.xJW, {
                        children: (0, i.jsx)(C.FXm, {
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
                className: P.section,
                children: [
                    (0, i.jsx)(C.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Slider'
                    }),
                    (0, i.jsxs)('div', {
                        className: P.slider,
                        children: [
                            (0, i.jsx)(C.Text, {
                                variant: 'text-md/medium',
                                children: 'Standard slider'
                            }),
                            (0, i.jsx)(C.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                defaultValue: 50,
                                markers: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: P.slider,
                        children: [
                            (0, i.jsx)(C.Text, {
                                variant: 'text-md/medium',
                                children: 'Sticky markers'
                            }),
                            (0, i.jsx)(C.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                markers: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
                                stickToMarkers: !0
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: P.slider,
                        children: [
                            (0, i.jsx)(C.Text, {
                                variant: 'text-md/medium',
                                children: 'Non-uniform markers'
                            }),
                            (0, i.jsx)(C.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                markers: [0, 20, 50, 100],
                                equidistant: !1
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: P.slider,
                        children: [
                            (0, i.jsx)(C.Text, {
                                variant: 'text-md/medium',
                                children: 'Non-uniform equidistant markers'
                            }),
                            (0, i.jsx)(C.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                markers: [0, 20, 50, 100],
                                equidistant: !0
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: P.slider,
                        children: [
                            (0, i.jsx)(C.Text, {
                                variant: 'text-md/medium',
                                children: 'No markers'
                            }),
                            (0, i.jsx)(C.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: P.slider,
                        children: [
                            (0, i.jsx)(C.Text, {
                                variant: 'text-md/medium',
                                children: 'Mini slider'
                            }),
                            (0, i.jsx)(C.iRW, {
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
function J() {
    let [e, t] = r.useState(null),
        [n, s] = r.useState(null),
        [l, a] = r.useState([]),
        [c, d] = r.useState([]),
        [u, m] = r.useState([]);
    return (0, i.jsxs)('div', {
        className: P.searchableSelectExamples,
        children: [
            (0, i.jsx)(C.X6q, {
                variant: 'heading-xl/semibold',
                children: 'SearchableSelect'
            }),
            (0, i.jsx)(C.VcW, {
                placeholder: 'Single select',
                value: e,
                onChange: (e) => t(e),
                options: o.G
            }),
            (0, i.jsx)(C.VcW, {
                placeholder: 'Single select (clearable)',
                clearable: !0,
                value: n,
                onChange: (e) => s(e),
                options: o.G
            }),
            (0, i.jsx)(C.VcW, {
                placeholder: 'Multi select',
                multi: !0,
                value: l,
                onChange: (e) => a(e),
                options: o.G
            }),
            (0, i.jsx)(C.VcW, {
                placeholder: 'Multi select (clearable)',
                multi: !0,
                clearable: !0,
                value: u,
                onChange: (e) => m(e),
                options: o.G
            }),
            (0, i.jsx)(C.VcW, {
                placeholder: 'Multi select (custom pills)',
                multi: !0,
                value: c,
                onChange: (e) => d(e),
                options: o.G,
                hidePills: !0,
                customPillContainerClassName: P.customPillContainer,
                renderCustomPill: (e) =>
                    (0, i.jsx)('div', {
                        style: {
                            padding: 8,
                            border: '1px solid var(--bg-brand)',
                            borderRadius: 8
                        },
                        children: (0, i.jsx)(C.Text, {
                            variant: 'text-md/bold',
                            children: e.label
                        })
                    })
            })
        ]
    });
}
function $() {
    let [e, t] = r.useState(''),
        [n, s] = r.useState(''),
        [l, a] = r.useState('');
    return (0, i.jsxs)('div', {
        className: P.section,
        children: [
            (0, i.jsx)(C.X6q, {
                variant: 'heading-xl/semibold',
                children: 'TextInput'
            }),
            (0, i.jsx)(C.xJW, {
                children: (0, i.jsx)(C.E1j, {
                    size: C.E1j.Sizes.MEDIUM,
                    placeholder: 'Search...',
                    onChange: (e) => a(e),
                    query: l,
                    onClear: () => a('')
                })
            }),
            (0, i.jsx)(C.xJW, {
                title: 'Disabled',
                disabled: !0,
                children: (0, i.jsx)(C.oil, {
                    placeholder: 'Disabled',
                    disabled: !0
                })
            }),
            (0, i.jsx)(C.xJW, {
                title: 'Error',
                children: (0, i.jsx)(C.oil, {
                    required: !0,
                    error: 'This must have a value'
                })
            }),
            (0, i.jsx)(C.xJW, {
                title: 'Error',
                children: (0, i.jsx)(C.oil, {
                    defaultValue: 'Not a valid value',
                    error: 'This has an error.'
                })
            }),
            (0, i.jsx)(C.xJW, {
                title: 'Read only',
                children: (0, i.jsx)(C.oil, {
                    value: 'Read-only, not-editable field',
                    editable: !1
                })
            }),
            (0, i.jsx)(C.xJW, {
                title: 'Input with a label',
                children: (0, i.jsx)(C.oil, {
                    placeholder: 'Real placeholder',
                    value: e,
                    onChange: t
                })
            }),
            (0, i.jsx)(C.xJW, {
                title: 'Text area',
                children: (0, i.jsx)(C.Kx8, {
                    placeholder: 'Text area placeholder',
                    showCharacterCount: !0,
                    value: n,
                    onChange: s
                })
            })
        ]
    });
}
function ee(e) {
    let { transitionState: t } = e,
        [n, s] = r.useState(!1),
        [l, a] = r.useState(C.CgR.SMALL),
        [o, c] = r.useState(!1),
        d = n ? P.modalOutlines : '';
    return (0, i.jsxs)(C.Y0X, {
        transitionState: t,
        size: l,
        parentComponent: 'UserSettingsDesignSystem',
        children: [
            (0, i.jsx)(C.xBx, {
                className: d,
                children: (0, i.jsx)(C.X6q, {
                    variant: 'heading-xl/semibold',
                    children: 'Modal'
                })
            }),
            (0, i.jsx)(C.hzk, {
                className: d,
                children: (0, i.jsxs)(C.Kqy, {
                    gap: 16,
                    children: [
                        (0, i.jsx)(C.xJW, {
                            title: 'Modal Size',
                            children: (0, i.jsx)(C.q4e, {
                                value: l,
                                onChange: a,
                                options: Object.entries(C.CgR).map((e) => {
                                    let [t, n] = e;
                                    return {
                                        label: t,
                                        value: n
                                    };
                                })
                            })
                        }),
                        (0, i.jsx)(C.hjN, {
                            title: 'Options',
                            children: (0, i.jsxs)(C.Kqy, {
                                gap: 16,
                                children: [
                                    (0, i.jsx)(C.XZJ, {
                                        value: n,
                                        onChange: (e, t) => s(t),
                                        children: (0, i.jsx)(C.Text, {
                                            variant: 'text-md/medium',
                                            children: 'Show Section Outlines'
                                        })
                                    }),
                                    (0, i.jsx)(C.XZJ, {
                                        value: o,
                                        onChange: (e, t) => c(t),
                                        children: (0, i.jsx)(C.Text, {
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
            (0, i.jsx)(C.mzw, {
                className: d,
                children: (0, i.jsxs)(C.Kqy, {
                    direction: 'horizontal',
                    justify: 'end',
                    gap: 8,
                    children: [
                        o &&
                            (0, i.jsx)(C.zxk, {
                                color: C.zxk.Colors.PRIMARY,
                                look: C.zxk.Looks.FILLED,
                                children: 'Secondary Action'
                            }),
                        (0, i.jsx)(C.zxk, { children: 'Close' })
                    ]
                })
            })
        ]
    });
}
function et(e) {
    let { transitionState: t, onClose: n, modalCount: s = 1 } = e,
        [l, a] = r.useState('replace'),
        o = s < 3;
    return (0, i.jsxs)(C.Y0X, {
        transitionState: t,
        size: 1 === s ? C.CgR.LARGE : 2 === s ? C.CgR.MEDIUM : C.CgR.SMALL,
        parentComponent: 'UserSettingsDesignSystem',
        children: [
            (0, i.jsx)(C.xBx, {
                children: (0, i.jsx)(C.X6q, {
                    variant: 'heading-xl/semibold',
                    children: 'Modal Stacking Demo'
                })
            }),
            (0, i.jsx)(C.hzk, {
                children: (0, i.jsxs)(C.Kqy, {
                    gap: 16,
                    children: [
                        (0, i.jsxs)(C.Text, {
                            variant: 'text-md/medium',
                            children: ['This is modal level ', s, '.']
                        }),
                        o &&
                            (0, i.jsx)(C.xJW, {
                                title: 'Stacking Behavior',
                                children: (0, i.jsx)(C.q4e, {
                                    value: l,
                                    onChange: a,
                                    options: [
                                        {
                                            label: 'Replace (default)',
                                            value: 'replace'
                                        },
                                        {
                                            label: 'Stack',
                                            value: 'stack'
                                        },
                                        {
                                            label: 'Replace All',
                                            value: 'replaceAll'
                                        }
                                    ]
                                })
                            }),
                        (0, i.jsxs)(C.Kqy, {
                            gap: 8,
                            children: [
                                (0, i.jsxs)(C.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-muted',
                                    children: [(0, i.jsx)('strong', { children: 'Replace One:' }), ' The modal directly below is hidden (default behavior)']
                                }),
                                (0, i.jsxs)(C.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-muted',
                                    children: [(0, i.jsx)('strong', { children: 'Replace All:' }), ' All modals below are hidden']
                                }),
                                (0, i.jsxs)(C.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-muted',
                                    children: [(0, i.jsx)('strong', { children: 'Stack:' }), ' The modal directly below remains visible']
                                })
                            ]
                        })
                    ]
                })
            }),
            (0, i.jsx)(C.mzw, {
                children: (0, i.jsxs)(C.Kqy, {
                    direction: 'horizontal',
                    justify: 'end',
                    gap: 8,
                    children: [
                        (0, i.jsx)(C.zxk, {
                            color: C.zxk.Colors.PRIMARY,
                            look: C.zxk.Looks.FILLED,
                            onClick: n,
                            children: 'Close'
                        }),
                        o &&
                            (0, i.jsx)(C.zxk, {
                                onClick: () => {
                                    let e = s + 1;
                                    (0, C.h7j)((t) => (0, i.jsx)(et, Z(D({}, t), { modalCount: e })), { stackingBehavior: l });
                                },
                                children: 'Open Next Modal'
                            })
                    ]
                })
            })
        ]
    });
}
function en(e) {
    let { transitionState: t, onClose: n } = e;
    function r(e) {
        let { children: t } = e;
        return (0, i.jsx)('div', {
            className: P.modalOutlines,
            style: { padding: '24px' },
            children: t
        });
    }
    return (0, i.jsxs)(f.IX, {
        transitionState: t,
        onClose: n,
        children: [
            (0, i.jsx)('div', {
                className: P.modalOutlines,
                children: (0, i.jsx)(j.x, {
                    title: 'Demo Modal',
                    body: 'The ModalHeader can have leading and trailing items on either side of the text',
                    leading: (0, i.jsx)(r, {}),
                    trailing: (0, i.jsx)(r, {})
                })
            }),
            (0, i.jsx)('div', {
                className: P.modalOutlines,
                children: (0, i.jsx)(E.h, {
                    controls: (0, i.jsx)(r, { children: 'This ModalContent renders any controls here' }),
                    children: (0, i.jsx)(r, { children: 'This is the main ModalContent. This area scrolls if there is enough content' })
                })
            }),
            (0, i.jsx)('div', {
                className: P.modalOutlines,
                children: (0, i.jsx)(E.m, { children: (0, i.jsx)(r, { children: 'This is the ModalFooter' }) })
            }),
            (0, i.jsx)('div', {
                className: P.modalOutlines,
                children: (0, i.jsx)(x.G, {
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
function ei(e) {
    let { transitionState: t, onClose: n } = e,
        [s, l] = r.useState('md'),
        [a, o] = r.useState('Demo Modal'),
        [c, d] = r.useState('Header body copy'),
        [u, m] = r.useState(!1),
        [g, p] = r.useState(!1),
        [h, b] = r.useState(!1),
        [_, O] = r.useState(!1),
        [S, v] = r.useState(!1);
    return (0, i.jsxs)(f.IX, {
        transitionState: t,
        onClose: n,
        size: s,
        children: [
            (0, i.jsx)(j.x, {
                title: a,
                body: c,
                alignCenter: u
            }),
            (0, i.jsx)(E.h, {
                controls: g
                    ? (0, i.jsx)(C.E1j, {
                          size: C.E1j.Sizes.MEDIUM,
                          placeholder: 'Search',
                          onChange: () => null,
                          query: ''
                      })
                    : void 0,
                children: (0, i.jsxs)(C.Kqy, {
                    gap: 16,
                    children: [
                        (0, i.jsx)(C.xJW, {
                            title: 'Modal Size',
                            children: (0, i.jsx)(C.q4e, {
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
                        (0, i.jsx)(C.xJW, {
                            title: 'Header Title',
                            children: (0, i.jsx)(C.oil, {
                                onChange: o,
                                defaultValue: a
                            })
                        }),
                        (0, i.jsx)(C.xJW, {
                            title: 'Header body',
                            children: (0, i.jsx)(C.oil, {
                                onChange: d,
                                defaultValue: c
                            })
                        }),
                        (0, i.jsx)(C.xJW, {
                            title: 'Optional Content',
                            children: (0, i.jsxs)(C.Kqy, {
                                gap: 12,
                                children: [
                                    (0, i.jsx)(C.XZJ, {
                                        value: u,
                                        onChange: (e, t) => m(t),
                                        children: (0, i.jsx)(C.Text, {
                                            variant: 'text-md/medium',
                                            children: 'Header Align Center'
                                        })
                                    }),
                                    (0, i.jsx)(C.XZJ, {
                                        value: g,
                                        onChange: (e, t) => p(t),
                                        children: (0, i.jsx)(C.Text, {
                                            variant: 'text-md/medium',
                                            children: 'Show Search Input'
                                        })
                                    }),
                                    (0, i.jsx)(C.XZJ, {
                                        value: h,
                                        onChange: (e, t) => b(t),
                                        children: (0, i.jsx)(C.Text, {
                                            variant: 'text-md/medium',
                                            children: 'Show Preview Content'
                                        })
                                    }),
                                    (0, i.jsx)(C.XZJ, {
                                        value: _,
                                        onChange: (e, t) => O(t),
                                        children: (0, i.jsx)(C.Text, {
                                            variant: 'text-md/medium',
                                            children: 'Show Action Bar Leading Input'
                                        })
                                    }),
                                    (0, i.jsx)(C.XZJ, {
                                        value: S,
                                        onChange: (e, t) => v(t),
                                        children: (0, i.jsx)(C.Text, {
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
            h &&
                (0, i.jsxs)(E.m, {
                    children: [
                        (0, i.jsx)(C.X6q, {
                            variant: 'heading-lg/semibold',
                            children: 'Celebration Station'
                        }),
                        (0, i.jsx)(C.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-secondary',
                            children: '32 Members \u25CF 19 Online'
                        })
                    ]
                }),
            (0, i.jsx)(x.G, {
                leading: _
                    ? (0, i.jsx)(x.B, {
                          value: !1,
                          onChange: () => {}
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
function er(e) {
    let { transitionState: t, onClose: n } = e;
    function s(e) {
        let { text: t } = e,
            [n, s] = r.useState(!1);
        return (0, i.jsx)('div', {
            style: { padding: '8px 0' },
            children: (0, i.jsx)(C.XZJ, {
                value: n,
                onChange: (e, t) => s(t),
                children: (0, i.jsx)(C.Text, {
                    variant: 'text-md/medium',
                    children: t
                })
            })
        });
    }
    return (0, i.jsxs)(_.u, {
        transitionState: t,
        onClose: n,
        size: 'md',
        title: 'Invite to server',
        input: (0, i.jsx)(C.E1j, {
            size: C.E1j.Sizes.MEDIUM,
            placeholder: 'Search',
            onChange: () => null,
            query: ''
        }),
        preview: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(C.X6q, {
                    variant: 'heading-lg/semibold',
                    children: 'Celebration Station'
                }),
                (0, i.jsx)(C.Text, {
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
                icon: C.kBi,
                iconPosition: 'end',
                onClick: n
            }
        ],
        children: [(0, i.jsx)(s, { text: 'John Doe' }), (0, i.jsx)(s, { text: 'Mark' }), (0, i.jsx)(s, { text: 'KawaiiHermit' }), (0, i.jsx)(s, { text: 'YurBruhGio' }), (0, i.jsx)(s, { text: 'John Doe' }), (0, i.jsx)(s, { text: 'Mark' }), (0, i.jsx)(s, { text: 'KawaiiHermit' }), (0, i.jsx)(s, { text: 'YurBruhGio' }), (0, i.jsx)(s, { text: 'John Doe' }), (0, i.jsx)(s, { text: 'Mark' }), (0, i.jsx)(s, { text: 'KawaiiHermit' }), (0, i.jsx)(s, { text: 'YurBruhGio' }), (0, i.jsx)(s, { text: 'John Doe' }), (0, i.jsx)(s, { text: 'Mark' }), (0, i.jsx)(s, { text: 'KawaiiHermit' }), (0, i.jsx)(s, { text: 'YurBruhGio' })]
    });
}
function es(e) {
    let { transitionState: t, onClose: n } = e;
    return (0, i.jsx)(_.u, {
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
                variant: 'critical-primary',
                text: 'Confirm',
                onClick: n
            }
        ]
    });
}
function el(e) {
    let { transitionState: t, onClose: n } = e;
    return (0, i.jsx)(b.I, {
        transitionState: t,
        onClose: n,
        image: R,
        title: 'Expressive Modal',
        headerBody: 'This is an expressive modal with a header image',
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
    });
}
function ea(e) {
    let { transitionState: t, onClose: n, modalCount: s = 1 } = e,
        [l, a] = r.useState('replace'),
        o = s < 3;
    return (0, i.jsx)(_.u, {
        transitionState: t,
        onClose: n,
        size: 1 === s ? 'md' : 'sm',
        title: 'Mana Modal Stacking Demo',
        headerBody: 'This is modal level '.concat(s, '.'),
        actions: [
            {
                variant: 'secondary',
                text: 'Close',
                onClick: n
            },
            ...(o
                ? [
                      {
                          variant: 'primary',
                          text: 'Open Next Modal',
                          onClick: () => {
                              let e = s + 1;
                              (0, C.h7j)((t) => (0, i.jsx)(ea, Z(D({}, t), { modalCount: e })), { stackingBehavior: l });
                          }
                      }
                  ]
                : [])
        ],
        children: (0, i.jsxs)(C.Kqy, {
            gap: 16,
            children: [
                o &&
                    (0, i.jsx)(C.xJW, {
                        title: 'Stacking Behavior',
                        children: (0, i.jsx)(C.q4e, {
                            value: l,
                            onChange: a,
                            options: [
                                {
                                    label: 'Replace (default)',
                                    value: 'replace'
                                },
                                {
                                    label: 'Stack',
                                    value: 'stack'
                                },
                                {
                                    label: 'Replace All',
                                    value: 'replaceAll'
                                }
                            ]
                        })
                    }),
                (0, i.jsxs)(C.Kqy, {
                    gap: 8,
                    children: [
                        (0, i.jsxs)(C.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-muted',
                            children: [(0, i.jsx)('strong', { children: 'Replace One:' }), ' The modal directly below is hidden (default behavior)']
                        }),
                        (0, i.jsxs)(C.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-muted',
                            children: [(0, i.jsx)('strong', { children: 'Replace All:' }), ' All modals below are hidden']
                        }),
                        (0, i.jsxs)(C.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-muted',
                            children: [(0, i.jsx)('strong', { children: 'Stack:' }), ' The modal directly below remains visible']
                        })
                    ]
                })
            ]
        })
    });
}
function eo() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: P.section,
                children: [
                    (0, i.jsx)(C.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Modals (Void)'
                    }),
                    (0, i.jsx)(C.zxk, {
                        onClick: () => {
                            (0, C.h7j)((e) => (0, i.jsx)(ee, D({}, e)));
                        },
                        children: 'Open modal'
                    }),
                    (0, i.jsx)(C.zxk, {
                        onClick: () => {
                            O.Z.show({
                                title: 'Alert',
                                body: 'This is an alert',
                                confirmText: 'Confirm Text',
                                cancelText: 'Cancel Text'
                            });
                        },
                        children: 'Show Alert'
                    }),
                    (0, i.jsx)(C.zxk, {
                        onClick: () => {
                            (0, C.h7j)((e) => (0, i.jsx)(et, D({}, e)));
                        },
                        children: 'Open modal stacking demo'
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: P.section,
                children: [
                    (0, i.jsx)(C.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Modals (Mana)'
                    }),
                    (0, i.jsx)(C.zxk, {
                        onClick: () => {
                            (0, C.h7j)((e) => (0, i.jsx)(en, D({}, e)));
                        },
                        children: 'Open modal section visualizer'
                    }),
                    (0, i.jsx)(C.zxk, {
                        onClick: () => {
                            (0, C.h7j)((e) => (0, i.jsx)(ei, D({}, e)));
                        },
                        children: 'Open demo modal'
                    }),
                    (0, i.jsx)(C.zxk, {
                        onClick: () => {
                            (0, C.h7j)((e) => (0, i.jsx)(er, D({}, e)));
                        },
                        children: 'Open sample invite modal'
                    }),
                    (0, i.jsx)(C.zxk, {
                        onClick: () => {
                            (0, C.h7j)((e) => (0, i.jsx)(es, D({}, e)));
                        },
                        children: 'Open sample alert modal'
                    }),
                    (0, i.jsx)(C.zxk, {
                        onClick: () => {
                            (0, C.h7j)((e) => (0, i.jsx)(el, D({}, e)));
                        },
                        children: 'Open expressive modal'
                    }),
                    (0, i.jsx)(C.zxk, {
                        onClick: () => {
                            (0, C.h7j)((e) => (0, i.jsx)(ea, D({}, e)));
                        },
                        children: 'Open Mana modal stacking demo'
                    })
                ]
            })
        ]
    });
}
function ec() {
    let e = (0, c.e7)([S.Z], () => S.Z.gradientPreset);
    return (0, i.jsx)(C.f6W, {
        theme: A.BR.DARKER,
        disableAdaptiveTheme: !0,
        children: (t) =>
            (0, i.jsxs)('div', {
                className: l()(t, P.section),
                children: [
                    (0, i.jsx)(C.zxk, {
                        color: C.zxk.Colors.PRIMARY,
                        look: C.zxk.Looks.FILLED,
                        fullWidth: !0,
                        children: 'Button'
                    }),
                    (0, i.jsx)(C.f6W, {
                        theme: A.BR.LIGHT,
                        children: (t) =>
                            (0, i.jsxs)('div', {
                                className: l()(t, P.section),
                                children: [
                                    (0, i.jsx)(C.zxk, {
                                        color: C.zxk.Colors.PRIMARY,
                                        look: C.zxk.Looks.FILLED,
                                        fullWidth: !0,
                                        children: 'Button'
                                    }),
                                    (0, i.jsx)(C.f6W, {
                                        theme: A.BR.DARKER,
                                        children: (e) =>
                                            (0, i.jsx)('div', {
                                                className: l()(e, P.section),
                                                children: (0, i.jsx)(C.zxk, {
                                                    color: C.zxk.Colors.PRIMARY,
                                                    look: C.zxk.Looks.FILLED,
                                                    fullWidth: !0,
                                                    children: 'Button'
                                                })
                                            })
                                    }),
                                    (0, i.jsx)(C.f6W, {
                                        gradient: e,
                                        children: (e) =>
                                            (0, i.jsx)('div', {
                                                className: l()(e, P.section),
                                                children: (0, i.jsx)(C.zxk, {
                                                    color: C.zxk.Colors.PRIMARY,
                                                    look: C.zxk.Looks.FILLED,
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
