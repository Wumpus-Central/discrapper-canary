(n.d(t, { Z: () => Y }), n(704826), n(35282), n(388685), n(361932), n(187205));
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
    x = n(82659),
    _ = n(369585),
    E = n(530392),
    j = n(37148),
    C = n(907862),
    O = n(466590),
    S = n(481060),
    v = n(240872),
    T = n(514361),
    N = n(705262),
    I = n(526156),
    y = n(706705),
    A = n(726985),
    P = n(981631),
    R = n(231338),
    D = n(426617),
    Z = n(177475),
    w = n(715720);
function k(e) {
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
function L(e, t) {
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
function B() {
    return (0, i.jsxs)('div', {
        className: D.root,
        children: [(0, i.jsx)(K, {}), (0, i.jsx)(en, {}), (0, i.jsx)(ei, {}), (0, i.jsx)(et, {}), (0, i.jsx)($, {}), (0, i.jsx)(ee, {}), (0, i.jsx)(J, {}), (0, i.jsx)(Q, {}), (0, i.jsx)(em, {}), (0, i.jsx)(M, {}), (0, i.jsx)(eg, {})]
    });
}
function M() {
    let e = Object.keys(S.DM8);
    return (0, i.jsxs)('div', {
        className: D.section,
        children: [
            (0, i.jsx)(S.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Notice'
            }),
            (0, i.jsx)(S.Kqy, {
                gap: 16,
                children: e.map((e) =>
                    (0, i.jsx)(
                        S.qXd,
                        {
                            color: S.DM8[e],
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
let U = ['neutral', 'blue_new', 'blurple', 'green_new', 'red_new', 'teal_new', 'yellow_new', 'orange_new', 'pink', 'purple'],
    V = ['background-surface-highest', 'background-surface-higher', 'background-surface-high', 'background-base-low', 'background-base-lower', 'background-base-lowest'],
    G = ['', 'background-mod-subtle', 'background-mod-normal', 'background-mod-strong'],
    F = ['critical', 'warning', 'positive', 'info'],
    H = ['text-default', 'text-primary', 'text-secondary', 'text-tertiary', 'text-feedback-critical', 'text-feedback-warning', 'text-feedback-positive', 'text-feedback-info', 'premium-nitro-pink-text'];
function z() {
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(S.X6q, {
                variant: 'heading-xl/semibold',
                className: D.heading,
                children: 'Background Colors'
            }),
            V.map((e) =>
                (0, i.jsxs)(
                    'div',
                    {
                        className: D.palette,
                        style: {
                            backgroundColor: 'var(--'.concat(e, ')'),
                            padding: 24
                        },
                        children: [
                            (0, i.jsx)(S.Text, {
                                variant: 'text-md/medium',
                                children: e
                            }),
                            (0, i.jsx)('div', {
                                style: {
                                    display: 'grid',
                                    gap: 8,
                                    gridTemplateColumns: 'repeat(3, 1fr)'
                                },
                                children: G.map((e) =>
                                    (0, i.jsxs)(
                                        'div',
                                        {
                                            className: D.color,
                                            style: {
                                                padding: 16,
                                                background: 'var(--'.concat(e, ')')
                                            },
                                            children: [
                                                (0, i.jsx)(S.Text, {
                                                    variant: 'text-xs/semibold',
                                                    color: 'header-secondary',
                                                    children: e
                                                }),
                                                (0, i.jsx)('hr', { className: D.sectionDivider }),
                                                H.map((e) =>
                                                    (0, i.jsx)(
                                                        S.Text,
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
                            (0, i.jsx)('hr', { className: D.sectionDivider }),
                            (0, i.jsx)('div', {
                                style: {
                                    display: 'grid',
                                    gap: 8,
                                    gridTemplateColumns: 'repeat(3, 1fr)'
                                },
                                children: F.map((e) => {
                                    let t = 'var(--text-feedback-'.concat(e, ')');
                                    return (0, i.jsxs)(
                                        'div',
                                        {
                                            className: D.color,
                                            style: {
                                                padding: 16,
                                                background: 'var(--background-feedback-'.concat(e, ')')
                                            },
                                            children: [
                                                (0, i.jsx)(S.Text, {
                                                    variant: 'text-xs/semibold',
                                                    color: 'header-secondary'
                                                }),
                                                (0, i.jsxs)(S.Kqy, {
                                                    children: [
                                                        (0, i.jsxs)(S.Text, {
                                                            variant: 'text-xs/semibold',
                                                            style: { color: t },
                                                            children: ['background-feedback-', e]
                                                        }),
                                                        (0, i.jsx)(S.Text, {
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
            (0, i.jsx)(S.X6q, {
                variant: 'heading-xl/semibold',
                className: D.heading,
                children: 'Scales'
            }),
            U.map((e) =>
                (0, i.jsxs)(
                    'div',
                    {
                        className: D.palette,
                        children: [
                            (0, i.jsx)(S.Text, {
                                variant: 'text-lg/semibold',
                                children: e
                            }),
                            (0, i.jsx)('div', {
                                className: D.colors,
                                children: Array.from({ length: 100 }, (t, n) =>
                                    (0, i.jsx)(
                                        'div',
                                        {
                                            className: D.color,
                                            style: { background: 'var(--'.concat(e.replace('_', '-'), '-').concat(n + 1, ')') },
                                            children: (0, i.jsx)(S.f6W, {
                                                theme: n < 50 ? 'light' : 'dark',
                                                children: (t) =>
                                                    (0, i.jsxs)(S.Text, {
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
function Y() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(I.Z, {
                parentSetting: A.s6.DESIGN_SYSTEMS,
                settingsSection: P.oAB.DESIGN_SYSTEMS,
                tabs: [
                    {
                        title: 'Components',
                        component: () => (0, i.jsx)(B, {}),
                        setting: A.s6.DESIGN_SYSTEMS_COMPONENTS
                    },
                    {
                        title: 'Colors',
                        component: () => (0, i.jsx)(z, {}),
                        setting: A.s6.DESIGN_SYSTEMS_COLORS
                    },
                    {
                        title: 'Animations',
                        component: () => (0, i.jsx)(y.Z, {}),
                        setting: A.s6.ANIMATION_TESTING
                    }
                ]
            }),
            (0, i.jsx)('div', {
                className: D.themes,
                children: (0, i.jsx)(N.ZP, {
                    type: N.yH.SETTINGS,
                    children: (0, i.jsx)(N.ZP.Basic, { className: D.themeSelectionGroup })
                })
            })
        ]
    });
}
function W(e) {
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
            L(k({}, s), {
                loading: n ? l : void 0,
                onClick: () => a(!l)
            })
        )
    );
}
function K() {
    let [e, t] = r.useState('md'),
        [n, s] = r.useState('start'),
        [l, o] = r.useState(!0),
        c = ['primary', 'secondary', 'critical-primary', 'critical-secondary', 'active', 'overlay-primary', 'overlay-secondary'],
        g = [...c, 'expressive'].map((t) =>
            (0, i.jsx)(
                W,
                {
                    component: d.z,
                    variant: t,
                    text: ''.concat((0, a.capitalize)(t), ' ').concat(e.toUpperCase()),
                    size: e,
                    icon: 'none' !== n ? S.gw7 : void 0,
                    iconPosition: n,
                    showLoadingAnimation: l
                },
                t + e
            )
        ),
        h = [...c, 'icon-only'].map((t) =>
            (0, i.jsx)(
                W,
                {
                    component: m.h,
                    variant: t,
                    icon: S.gw7,
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
        className: D.section,
        children: [
            (0, i.jsx)(S.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Buttons'
            }),
            (0, i.jsxs)(X, {
                title: 'Button Options',
                children: [
                    (0, i.jsx)(S.xJW, {
                        title: 'Button size',
                        children: (0, i.jsx)(S.FXm, {
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
                    (0, i.jsx)(S.xJW, {
                        title: 'Icon position',
                        children: (0, i.jsx)(S.FXm, {
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
                    (0, i.jsx)(S.xJW, {
                        title: 'Loading animation',
                        children: (0, i.jsx)(S.FXm, {
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
            (0, i.jsxs)(S.Kqy, {
                gap: 16,
                padding: { top: 16 },
                children: [
                    (0, i.jsx)(S.X6q, {
                        variant: 'heading-lg/semibold',
                        children: 'Button Groups'
                    }),
                    (0, i.jsx)(S.Text, {
                        variant: 'text-lg/medium',
                        children: 'Horizontal'
                    }),
                    (0, i.jsxs)(S.Kqy, {
                        gap: 16,
                        direction: 'horizontal',
                        children: [
                            (0, i.jsxs)(S.Kqy, {
                                gap: 16,
                                children: [
                                    (0, i.jsxs)(u.h, {
                                        size: e,
                                        children: [
                                            (0, i.jsx)(W, {
                                                component: d.z,
                                                variant: 'secondary',
                                                text: 'Cancel',
                                                showLoadingAnimation: l
                                            }),
                                            (0, i.jsx)(W, {
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
                                            (0, i.jsx)(W, {
                                                component: d.z,
                                                variant: 'primary',
                                                text: 'Submit',
                                                showLoadingAnimation: l
                                            }),
                                            (0, i.jsx)(W, {
                                                component: m.h,
                                                variant: 'secondary',
                                                icon: S.gw7,
                                                'aria-label': 'Clyde',
                                                showLoadingAnimation: l
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, i.jsx)(S.Kqy, {
                                gap: 16,
                                children: (0, i.jsxs)(u.h, {
                                    size: e,
                                    fullWidth: !0,
                                    children: [
                                        (0, i.jsx)(W, {
                                            component: d.z,
                                            variant: 'secondary',
                                            text: 'Cancel',
                                            showLoadingAnimation: l
                                        }),
                                        (0, i.jsx)(W, {
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
                    (0, i.jsx)(S.Text, {
                        variant: 'text-lg/medium',
                        children: 'Vertical'
                    }),
                    (0, i.jsxs)(S.Kqy, {
                        gap: 16,
                        direction: 'horizontal',
                        children: [
                            (0, i.jsx)(S.Kqy, {
                                gap: 16,
                                children: (0, i.jsxs)(u.h, {
                                    direction: 'vertical',
                                    size: e,
                                    children: [
                                        (0, i.jsx)(W, {
                                            component: d.z,
                                            variant: 'secondary',
                                            text: 'Cancel',
                                            showLoadingAnimation: l
                                        }),
                                        (0, i.jsx)(W, {
                                            component: d.z,
                                            variant: 'primary',
                                            text: 'Submit',
                                            showLoadingAnimation: l
                                        })
                                    ]
                                })
                            }),
                            (0, i.jsx)(S.Kqy, {
                                gap: 16,
                                children: (0, i.jsxs)(u.h, {
                                    fullWidth: !0,
                                    direction: 'vertical',
                                    size: e,
                                    children: [
                                        (0, i.jsx)(W, {
                                            component: d.z,
                                            variant: 'secondary',
                                            text: 'Cancel',
                                            showLoadingAnimation: l
                                        }),
                                        (0, i.jsx)(W, {
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
                    (0, i.jsx)(q, { buttonSize: e })
                ]
            })
        ]
    });
}
function q(e) {
    let { buttonSize: t } = e,
        [n, s] = r.useState(!1);
    return (0, i.jsxs)(S.Kqy, {
        gap: 16,
        children: [
            (0, i.jsx)(S.X6q, {
                variant: 'heading-xl/semibold',
                children: 'PlayButton'
            }),
            (0, i.jsx)(S.Kqy, {
                direction: 'horizontal',
                gap: 16,
                children: ['dark', 'mid', 'light'].map((e) =>
                    (0, i.jsx)(
                        'div',
                        {
                            className: D.video,
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
function X(e) {
    let { children: t, title: n } = e,
        [s, a] = r.useState(!1);
    return (0, i.jsxs)(S.Kqy, {
        direction: 'vertical',
        gap: 0,
        padding: 16,
        className: D.floatingControls,
        children: [
            (0, i.jsxs)(S.Kqy, {
                direction: 'horizontal',
                gap: 16,
                align: 'center',
                justify: 'space-between',
                children: [
                    (0, i.jsx)(S.X6q, {
                        variant: 'heading-lg/semibold',
                        children: n
                    }),
                    (0, i.jsx)(h.Q, {
                        icon: s ? S.hic : S.sXD,
                        onClick: () => a(!s),
                        pressed: s,
                        'aria-label': 'Show controls'
                    })
                ]
            }),
            (0, i.jsx)(S.Kqy, {
                gap: 16,
                className: l()(D.floatingControlsContent, { [D.floatingControlsContentHidden]: !s }),
                children: t
            })
        ]
    });
}
function Q() {
    let [e, t] = r.useState('1');
    return (0, i.jsxs)('div', {
        className: D.section,
        children: [
            (0, i.jsx)(S.X6q, {
                variant: 'heading-xl/semibold',
                children: 'TabBar'
            }),
            (0, i.jsxs)(S.njP, {
                type: 'top',
                look: 'brand',
                selectedItem: e,
                onItemSelect: (e) => t(e),
                className: D.tabBar,
                children: [
                    (0, i.jsx)(S.njP.Item, {
                        id: '1',
                        children: 'Tab 1'
                    }),
                    (0, i.jsx)(S.njP.Item, {
                        id: '2',
                        children: 'Tab 2'
                    }),
                    (0, i.jsx)(S.njP.Item, {
                        id: '3',
                        children: 'Tab 3'
                    })
                ]
            }),
            (0, i.jsxs)(S.Text, {
                variant: 'text-md/medium',
                children: ['Selected tab: ', e]
            })
        ]
    });
}
function J() {
    let [e, t] = r.useState(1),
        [n, s] = r.useState(!1),
        [l, a] = r.useState(5),
        [o, c] = r.useState(!1),
        d = r.useRef(null);
    return (0, i.jsxs)('div', {
        className: D.section,
        children: [
            (0, i.jsx)(S.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Context Menus'
            }),
            (0, i.jsx)('span', {
                children: (0, i.jsx)(S.yRy, {
                    targetElementRef: d,
                    shouldShow: o,
                    renderPopout: () =>
                        (0, i.jsxs)(S.v2r, {
                            navId: 'demo',
                            'aria-label': 'Demo Actions',
                            onClose: () => null,
                            onSelect: () => null,
                            children: [
                                (0, i.jsxs)(S.kSQ, {
                                    label: 'Basic items',
                                    children: [
                                        (0, i.jsx)(S.sNh, {
                                            id: 'first',
                                            label: 'An option'
                                        }),
                                        (0, i.jsx)(S.sNh, {
                                            id: 'second',
                                            label: 'An option with an icon',
                                            icon: S.kBi
                                        }),
                                        (0, i.jsxs)(S.sNh, {
                                            id: 'item-with-submenu',
                                            label: 'Item with submenu',
                                            children: [
                                                (0, i.jsx)(S.sNh, {
                                                    id: 'subitem-1',
                                                    label: 'Subitem 1'
                                                }),
                                                (0, i.jsx)(S.sNh, {
                                                    id: 'subitem-2',
                                                    label: 'Subitem 2'
                                                }),
                                                (0, i.jsx)(S.sNh, {
                                                    id: 'subitem-3',
                                                    label: 'Subitem 3'
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, i.jsxs)(S.kSQ, {
                                    label: 'Inputs',
                                    children: [
                                        (0, i.jsx)(S.S89, {
                                            id: 'checkable',
                                            label: 'Checkbox',
                                            checked: n,
                                            action: () => s(!n)
                                        }),
                                        (0, i.jsx)(S.k5B, {
                                            id: 'radio-one',
                                            group: 'a-group',
                                            label: 'Radio 1',
                                            action: () => t(1),
                                            checked: 1 === e
                                        }),
                                        (0, i.jsx)(S.k5B, {
                                            id: 'radio-two',
                                            group: 'a-group',
                                            label: 'Radio 2',
                                            action: () => t(2),
                                            checked: 2 === e
                                        }),
                                        (0, i.jsx)(S.k5B, {
                                            id: 'radio-three',
                                            group: 'a-group',
                                            label: 'Radio 3',
                                            action: () => t(3),
                                            checked: 3 === e
                                        }),
                                        (0, i.jsx)(S.II_, {
                                            id: 'slider',
                                            label: 'Slider',
                                            control: (e, t) =>
                                                (0, i.jsx)(S._wy, {
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
                                (0, i.jsx)(S.Clw, {}),
                                (0, i.jsx)(S.sNh, {
                                    id: 'danger',
                                    label: 'A destructive option',
                                    color: 'danger',
                                    icon: S.XHJ
                                })
                            ]
                        }),
                    children: () =>
                        (0, i.jsx)(S.zxk, {
                            buttonRef: d,
                            onClick: () => c(!o),
                            children: 'Toggle context menu'
                        })
                })
            })
        ]
    });
}
function $() {
    let [e, t] = r.useState(S.FGA.PRIMARY),
        n = r.useMemo(
            () =>
                Object.entries(S.FGA).map((e) => {
                    let [t, n] = e;
                    return {
                        label: t,
                        value: n
                    };
                }),
            []
        );
    return (0, i.jsxs)('div', {
        className: D.section,
        children: [
            (0, i.jsx)(S.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Tooltips'
            }),
            (0, i.jsx)(S.xJW, {
                title: 'Color',
                children: (0, i.jsx)(S.q4e, {
                    value: e,
                    onChange: t,
                    options: n
                })
            }),
            (0, i.jsxs)('div', {
                style: {
                    display: 'flex',
                    gap: 8,
                    flexWrap: 'wrap'
                },
                children: [
                    (0, i.jsx)(S.ua7, {
                        color: e,
                        text: "Here's top aligned tooltip text!",
                        position: 'top',
                        children: (e) => (0, i.jsx)(S.zxk, L(k({}, e), { children: 'Tooltip on the top' }))
                    }),
                    (0, i.jsx)(S.ua7, {
                        color: e,
                        text: "Here's right aligned tooltip text!",
                        position: 'left',
                        children: (e) => (0, i.jsx)(S.zxk, L(k({}, e), { children: 'Tooltip on the left' }))
                    }),
                    (0, i.jsx)(S.ua7, {
                        color: e,
                        text: "Here's bottom aligned tooltip text!",
                        position: 'bottom',
                        children: (e) => (0, i.jsx)(S.zxk, L(k({}, e), { children: 'Tooltip on the bottom' }))
                    }),
                    (0, i.jsx)(S.ua7, {
                        color: e,
                        text: "Here's right aligned tooltip text!",
                        position: 'right',
                        children: (e) => (0, i.jsx)(S.zxk, L(k({}, e), { children: 'Tooltip on the right' }))
                    })
                ]
            }),
            (0, i.jsx)('div', {})
        ]
    });
}
function ee() {
    let [e, t] = r.useState(!1),
        [n, s] = r.useState(!1),
        [l, a] = r.useState(!1),
        [o, c] = r.useState(!1),
        [d, u] = r.useState(!1),
        [m, g] = r.useState(!1),
        [p, h] = r.useState(!1),
        [f, b] = r.useState(!1),
        [x, _] = r.useState(!1),
        [E, j] = r.useState(!1),
        [v, T] = r.useState(!1),
        [N, I] = r.useState(!1),
        [y, A] = r.useState(!1),
        [P, R] = r.useState(!1),
        [Z, k] = r.useState(!1),
        [L, B] = r.useState(!1),
        [M, U] = r.useState(!1),
        V = r.useRef(null),
        G = r.useRef(null),
        F = r.useRef(null),
        H = r.useRef(null),
        z = r.useRef(null),
        Y = r.useRef(null),
        W = r.useRef(null),
        K = r.useRef(null),
        q = r.useRef(null),
        X = r.useRef(null),
        Q = r.useRef(null),
        J = r.useRef(null),
        $ = r.useRef(null),
        ee = r.useRef(null),
        et = r.useRef(null),
        en = r.useRef(null),
        ei = r.useRef(null),
        er = r.useCallback(() => {
            (t(!1), s(!1), a(!1), c(!1), u(!1), g(!1), h(!1), b(!1), _(!1), j(!1), T(!1), I(!1), A(!1), R(!1), k(!1), B(!1), U(!1));
        }, []);
    return (0, i.jsxs)('div', {
        className: D.section,
        children: [
            (0, i.jsx)(S.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Popovers'
            }),
            (0, i.jsx)(C.J2, {
                targetElementRef: V,
                shouldShow: e,
                onRequestClose: er,
                caretConfig: {
                    position: 'bottom',
                    align: 'center'
                },
                title: 'Header',
                body: 'Body',
                size: 'sm',
                badge: 'new',
                buttons: [
                    {
                        text: 'Button',
                        onClick: er
                    }
                ]
            }),
            (0, i.jsx)(C.J2, {
                targetElementRef: G,
                shouldShow: n,
                onRequestClose: er,
                caretConfig: {
                    position: 'bottom',
                    align: 'center'
                },
                title: 'Header',
                body: 'Body',
                badge: 'new',
                buttons: [
                    {
                        text: 'Button',
                        onClick: er
                    }
                ]
            }),
            (0, i.jsx)(C.J2, {
                targetElementRef: F,
                shouldShow: l,
                onRequestClose: er,
                caretConfig: {
                    position: 'bottom',
                    align: 'center'
                },
                title: 'Ipsum Dolor',
                body: 'Lorem ipsum dolor sit amet, consectetur elit. Sed do eiusmod.',
                badge: 'new',
                buttons: [
                    {
                        text: 'Button',
                        onClick: er
                    }
                ],
                footerLink: {
                    text: 'Learn More',
                    link: 'https://discord.com',
                    external: !0
                }
            }),
            (0, i.jsx)(C.J2, {
                targetElementRef: H,
                shouldShow: o,
                onRequestClose: er,
                caretConfig: {
                    position: 'bottom',
                    align: 'center'
                },
                title: 'Header',
                body: 'Body',
                badge: 'new',
                buttons: [
                    {
                        text: 'Primary',
                        onClick: er,
                        variant: 'primary'
                    },
                    {
                        text: 'Secondary',
                        onClick: er,
                        variant: 'secondary'
                    }
                ]
            }),
            (0, i.jsx)(C.J2, {
                targetElementRef: z,
                shouldShow: d,
                onRequestClose: er,
                caretConfig: {
                    position: 'top',
                    align: 'end'
                },
                title: 'Custom Caret API',
                body: 'Using CaretConfig with END placement',
                badge: 'new',
                buttons: [
                    {
                        text: 'Got it',
                        onClick: er
                    }
                ]
            }),
            (0, i.jsx)(C.J2, {
                targetElementRef: Y,
                shouldShow: m,
                onRequestClose: er,
                caretConfig: {
                    position: 'left',
                    align: 'start'
                },
                title: 'Left Side Caret',
                body: 'Caret positioned on the left side at start',
                badge: 'early_access',
                buttons: [
                    {
                        text: 'Close',
                        onClick: er
                    }
                ]
            }),
            (0, i.jsx)(C.J2, {
                targetElementRef: W,
                shouldShow: p,
                onRequestClose: er,
                caretConfig: {
                    position: 'bottom',
                    align: 'custom',
                    customOffset: 50
                },
                title: 'Custom Offset',
                body: 'Caret positioned 50px from center with custom offset',
                badge: 'beta',
                buttons: [
                    {
                        text: 'Amazing!',
                        onClick: er
                    }
                ]
            }),
            (0, i.jsx)(C.J2, {
                targetElementRef: K,
                shouldShow: f,
                onRequestClose: er,
                position: 'right',
                caretConfig: {
                    position: 'left',
                    align: 'center'
                },
                title: 'Left Center Positioning',
                body: 'Popover appears to the right with caret centered on the left side',
                badge: 'new',
                buttons: [
                    {
                        text: 'Perfect!',
                        onClick: er
                    }
                ]
            }),
            (0, i.jsx)(C.J2, {
                targetElementRef: q,
                shouldShow: x,
                onRequestClose: er,
                caretConfig: {
                    position: 'bottom',
                    align: 'center'
                },
                title: 'Purple Gradient',
                body: 'This popover has a beautiful purple gradient background',
                gradientColor: 'purple',
                badge: 'new',
                buttons: [
                    {
                        text: 'Looks Great!',
                        onClick: er
                    }
                ]
            }),
            (0, i.jsx)(C.J2, {
                targetElementRef: X,
                shouldShow: E,
                onRequestClose: er,
                caretConfig: {
                    position: 'bottom',
                    align: 'center'
                },
                title: 'Blue Gradient',
                body: 'This popover showcases the blue gradient option',
                gradientColor: 'blue',
                badge: 'beta',
                buttons: [
                    {
                        text: 'Nice!',
                        onClick: er
                    }
                ]
            }),
            (0, i.jsx)(C.J2, {
                targetElementRef: Q,
                shouldShow: v,
                onRequestClose: er,
                caretConfig: {
                    position: 'bottom',
                    align: 'center'
                },
                title: 'Nitro Pink Gradient',
                body: 'Experience the premium nitro-pink gradient effect',
                gradientColor: 'nitro-pink',
                footerLink: {
                    text: 'Learn about Nitro',
                    link: 'https://discord.com/nitro',
                    external: !0
                },
                buttons: [
                    {
                        text: 'Get Nitro',
                        onClick: er
                    }
                ]
            }),
            (0, i.jsx)(C.J2, {
                targetElementRef: J,
                shouldShow: N,
                onRequestClose: er,
                caretConfig: {
                    position: 'bottom',
                    align: 'center'
                },
                title: 'Voice Filters',
                body: 'Experience enhanced voice quality with our latest filtering technology. Perfect for gaming and streaming.',
                asset: (0, i.jsx)('img', {
                    src: w.Z,
                    alt: 'Voice Filters'
                }),
                badge: 'new',
                gradientColor: 'purple',
                buttons: [
                    {
                        text: 'Try it now',
                        onClick: er
                    }
                ]
            }),
            (0, i.jsx)(C.Mb, {
                targetElementRef: $,
                shouldShow: y,
                onRequestClose: er,
                caretConfig: {
                    position: 'bottom',
                    align: 'center'
                },
                title: 'With Video Asset',
                body: 'Click the video to view it in the media viewer!',
                assetUrl: 'https://cdn.discordapp.com/assets/server-subscription-tier-template/upsell.mov',
                badge: 'new',
                gradientColor: 'blue',
                button: {
                    text: 'Learn More',
                    onClick: er
                }
            }),
            (0, i.jsx)(O.e, {
                targetElementRef: ee,
                shouldShow: P,
                onRequestClose: er,
                caretConfig: {
                    position: 'bottom',
                    align: 'center'
                },
                steps: [
                    {
                        title: 'Welcome to Quests!',
                        body: 'Journey to Quest Home in Discover to start earning Orbs.',
                        badge: 'new',
                        button: { text: 'Next' },
                        gradientColor: 'blue'
                    },
                    {
                        title: 'Earn Rewards',
                        body: 'Complete quests to earn Orbs and unlock exclusive rewards.',
                        asset: (0, i.jsx)('img', {
                            src: w.Z,
                            alt: 'Quest Rewards'
                        }),
                        button: { text: 'Next' },
                        gradientColor: 'blue'
                    },
                    {
                        title: 'Quest Complete!',
                        body: "You're all set to start your quest adventure. Good luck!",
                        button: { text: 'Get Started' },
                        gradientColor: 'blue',
                        footerLink: {
                            text: 'Learn More',
                            link: 'https://discord.com/quests',
                            external: !0
                        }
                    }
                ],
                onStepChange: (e) => {}
            }),
            (0, i.jsx)(C.J2, {
                targetElementRef: et,
                shouldShow: Z,
                onRequestClose: er,
                caretConfig: {
                    position: 'bottom',
                    align: 'center'
                },
                title: 'Experience Voice Filters',
                body: 'Enhanced voice quality with our latest filtering technology. Try the expressive button!',
                asset: (0, i.jsx)('img', {
                    src: w.Z,
                    alt: 'Voice Filters'
                }),
                badge: 'new',
                gradientColor: 'nitro-pink',
                buttons: [
                    {
                        text: 'Subscribe to Nitro',
                        onClick: er,
                        variant: 'expressive'
                    }
                ]
            }),
            (0, i.jsx)(O.e, {
                targetElementRef: en,
                shouldShow: L,
                onRequestClose: er,
                caretConfig: {
                    position: 'bottom',
                    align: 'center'
                },
                steps: [
                    {
                        title: 'Discover Features',
                        body: 'Explore amazing new capabilities in Discord.',
                        badge: 'new',
                        button: { text: 'Continue' },
                        gradientColor: 'purple'
                    },
                    {
                        title: 'Unlock Potential',
                        body: 'Learn how to make the most of your Discord experience.',
                        asset: (0, i.jsx)('img', {
                            src: w.Z,
                            alt: 'Features'
                        }),
                        button: { text: 'Almost There' },
                        gradientColor: 'blue'
                    },
                    {
                        title: 'Ready to Go!',
                        body: "You're all set! Notice the expressive button animation.",
                        button: {
                            text: 'Get Started',
                            variant: 'expressive'
                        },
                        gradientColor: 'nitro-pink',
                        footerLink: {
                            text: 'Learn More',
                            link: 'https://discord.com',
                            external: !0
                        }
                    }
                ],
                onStepChange: (e) => {}
            }),
            (0, i.jsx)(C.Mb, {
                targetElementRef: ei,
                shouldShow: M,
                onRequestClose: er,
                caretConfig: {
                    position: 'bottom',
                    align: 'center'
                },
                title: 'Expressive Video Experience',
                body: 'Watch this video with our expressive button design!',
                assetUrl: 'https://cdn.discordapp.com/assets/server-subscription-tier-template/upsell.mov',
                badge: 'new',
                button: {
                    text: 'Experience More',
                    onClick: er,
                    variant: 'expressive'
                }
            }),
            (0, i.jsxs)('div', {
                style: { marginTop: 16 },
                children: [
                    (0, i.jsx)(S.X6q, {
                        variant: 'heading-lg/semibold',
                        children: 'Size Examples'
                    }),
                    (0, i.jsxs)('div', {
                        style: {
                            display: 'flex',
                            gap: 16,
                            flexWrap: 'wrap',
                            marginTop: 8
                        },
                        children: [
                            (0, i.jsx)(S.zxk, {
                                buttonRef: V,
                                onClick: () => {
                                    (er(), t(!0));
                                },
                                children: 'Small Content'
                            }),
                            (0, i.jsx)(S.zxk, {
                                buttonRef: G,
                                onClick: () => {
                                    (er(), s(!0));
                                },
                                children: 'Medium Content'
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                style: { marginTop: 16 },
                children: [
                    (0, i.jsx)(S.X6q, {
                        variant: 'heading-lg/semibold',
                        children: 'Actions Examples'
                    }),
                    (0, i.jsxs)('div', {
                        style: {
                            display: 'flex',
                            gap: 16,
                            flexWrap: 'wrap',
                            marginTop: 8
                        },
                        children: [
                            (0, i.jsx)(S.zxk, {
                                buttonRef: F,
                                onClick: () => {
                                    (er(), a(!0));
                                },
                                children: 'External Link'
                            }),
                            (0, i.jsx)(S.zxk, {
                                buttonRef: H,
                                onClick: () => {
                                    (er(), c(!0));
                                },
                                children: 'Two Actions'
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                style: { marginTop: 16 },
                children: [
                    (0, i.jsx)(S.X6q, {
                        variant: 'heading-lg/semibold',
                        children: 'Caret API Examples'
                    }),
                    (0, i.jsxs)('div', {
                        style: {
                            display: 'flex',
                            gap: 16,
                            flexWrap: 'wrap',
                            marginTop: 8
                        },
                        children: [
                            (0, i.jsx)(S.zxk, {
                                buttonRef: z,
                                onClick: () => {
                                    (er(), u(!0));
                                },
                                children: 'Custom Caret API'
                            }),
                            (0, i.jsx)(S.zxk, {
                                buttonRef: Y,
                                onClick: () => {
                                    (er(), g(!0));
                                },
                                children: 'Left Side Caret'
                            }),
                            (0, i.jsx)(S.zxk, {
                                buttonRef: W,
                                onClick: () => {
                                    (er(), h(!0));
                                },
                                children: 'Custom Offset'
                            }),
                            (0, i.jsx)(S.zxk, {
                                buttonRef: K,
                                onClick: () => {
                                    (er(), b(!0));
                                },
                                children: 'Left Center'
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                style: { marginTop: 16 },
                children: [
                    (0, i.jsx)(S.X6q, {
                        variant: 'heading-lg/semibold',
                        children: 'Gradient Examples'
                    }),
                    (0, i.jsxs)('div', {
                        style: {
                            display: 'flex',
                            gap: 16,
                            flexWrap: 'wrap',
                            marginTop: 8
                        },
                        children: [
                            (0, i.jsx)(S.zxk, {
                                buttonRef: q,
                                onClick: () => {
                                    (er(), _(!0));
                                },
                                children: 'Purple Gradient'
                            }),
                            (0, i.jsx)(S.zxk, {
                                buttonRef: X,
                                onClick: () => {
                                    (er(), j(!0));
                                },
                                children: 'Blue Gradient'
                            }),
                            (0, i.jsx)(S.zxk, {
                                buttonRef: Q,
                                onClick: () => {
                                    (er(), T(!0));
                                },
                                children: 'Nitro Pink Gradient'
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                style: { marginTop: 16 },
                children: [
                    (0, i.jsx)(S.X6q, {
                        variant: 'heading-lg/semibold',
                        children: 'With Asset'
                    }),
                    (0, i.jsxs)('div', {
                        style: {
                            display: 'flex',
                            gap: 16,
                            flexWrap: 'wrap',
                            marginTop: 8
                        },
                        children: [
                            (0, i.jsx)(S.zxk, {
                                buttonRef: J,
                                onClick: () => {
                                    (er(), I(!0));
                                },
                                children: 'Voice Filters'
                            }),
                            (0, i.jsx)(S.zxk, {
                                buttonRef: $,
                                onClick: () => {
                                    (er(), A(!0));
                                },
                                children: 'Video Media Viewer'
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                style: { marginTop: 16 },
                children: [
                    (0, i.jsx)(S.X6q, {
                        variant: 'heading-lg/semibold',
                        children: 'Multi-Step'
                    }),
                    (0, i.jsx)('div', {
                        style: {
                            display: 'flex',
                            gap: 16,
                            flexWrap: 'wrap',
                            marginTop: 8
                        },
                        children: (0, i.jsx)(S.zxk, {
                            buttonRef: ee,
                            onClick: () => {
                                (er(), R(!0));
                            },
                            children: 'Multi-Step'
                        })
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                style: { marginTop: 16 },
                children: [
                    (0, i.jsx)(S.X6q, {
                        variant: 'heading-lg/semibold',
                        children: 'Expressive'
                    }),
                    (0, i.jsxs)('div', {
                        style: {
                            display: 'flex',
                            gap: 16,
                            flexWrap: 'wrap',
                            marginTop: 8
                        },
                        children: [
                            (0, i.jsx)(S.zxk, {
                                buttonRef: et,
                                onClick: () => {
                                    (er(), k(!0));
                                },
                                children: 'Expressive Popover'
                            }),
                            (0, i.jsx)(S.zxk, {
                                buttonRef: en,
                                onClick: () => {
                                    (er(), B(!0));
                                },
                                children: 'Expressive Multi-Step'
                            }),
                            (0, i.jsx)(S.zxk, {
                                buttonRef: ei,
                                onClick: () => {
                                    (er(), U(!0));
                                },
                                children: 'Expressive Video'
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function et() {
    let [e, t] = r.useState(!1),
        [n, s] = r.useState(!1),
        [l, a] = r.useState('auto');
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: D.section,
                children: [
                    (0, i.jsx)(S.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Checkboxes'
                    }),
                    (0, i.jsx)(S.XZJ, {
                        value: e,
                        onChange: (e, n) => t(n),
                        children: (0, i.jsx)(S.Text, {
                            variant: 'text-md/medium',
                            children: 'Checkbox input'
                        })
                    }),
                    (0, i.jsx)(S.XZJ, {
                        value: e,
                        onChange: (e, n) => t(n),
                        disabled: !0,
                        children: (0, i.jsx)(S.Text, {
                            variant: 'text-md/medium',
                            children: 'Disabled checkbox'
                        })
                    }),
                    (0, i.jsx)(S.XZJ, {
                        value: e,
                        onChange: (e, n) => t(n),
                        readOnly: !0,
                        children: (0, i.jsx)(S.Text, {
                            variant: 'text-md/medium',
                            children: 'Read-only checkbox'
                        })
                    }),
                    (0, i.jsx)(S.XZJ, {
                        value: e,
                        onChange: (e, n) => t(n),
                        type: S.XZJ.Types.ROW,
                        children: (0, i.jsx)(S.Text, {
                            variant: 'text-md/medium',
                            children: 'Checkbox row'
                        })
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: D.section,
                children: [
                    (0, i.jsx)(S.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Switches'
                    }),
                    (0, i.jsx)(S.j7V, {
                        hideBorder: !0,
                        value: n,
                        onChange: (e) => s(e),
                        children: 'FormSwitch with a label'
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: D.section,
                children: [
                    (0, i.jsx)(S.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Radio Buttons'
                    }),
                    (0, i.jsx)(S.xJW, {
                        children: (0, i.jsx)(S.FXm, {
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
                className: D.section,
                children: [
                    (0, i.jsx)(S.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Slider'
                    }),
                    (0, i.jsxs)('div', {
                        className: D.slider,
                        children: [
                            (0, i.jsx)(S.Text, {
                                variant: 'text-md/medium',
                                children: 'Standard slider'
                            }),
                            (0, i.jsx)(S.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                defaultValue: 50,
                                markers: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: D.slider,
                        children: [
                            (0, i.jsx)(S.Text, {
                                variant: 'text-md/medium',
                                children: 'Sticky markers'
                            }),
                            (0, i.jsx)(S.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                markers: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
                                stickToMarkers: !0
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: D.slider,
                        children: [
                            (0, i.jsx)(S.Text, {
                                variant: 'text-md/medium',
                                children: 'Non-uniform markers'
                            }),
                            (0, i.jsx)(S.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                markers: [0, 20, 50, 100],
                                equidistant: !1
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: D.slider,
                        children: [
                            (0, i.jsx)(S.Text, {
                                variant: 'text-md/medium',
                                children: 'Non-uniform equidistant markers'
                            }),
                            (0, i.jsx)(S.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                markers: [0, 20, 50, 100],
                                equidistant: !0
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: D.slider,
                        children: [
                            (0, i.jsx)(S.Text, {
                                variant: 'text-md/medium',
                                children: 'No markers'
                            }),
                            (0, i.jsx)(S.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: D.slider,
                        children: [
                            (0, i.jsx)(S.Text, {
                                variant: 'text-md/medium',
                                children: 'Mini slider'
                            }),
                            (0, i.jsx)(S.iRW, {
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
function en() {
    let [e, t] = r.useState(null),
        [n, s] = r.useState(null),
        [l, a] = r.useState([]),
        [c, d] = r.useState([]),
        [u, m] = r.useState([]);
    return (0, i.jsxs)('div', {
        className: D.searchableSelectExamples,
        children: [
            (0, i.jsx)(S.X6q, {
                variant: 'heading-xl/semibold',
                children: 'SearchableSelect'
            }),
            (0, i.jsx)(S.VcW, {
                placeholder: 'Single select',
                value: e,
                onChange: (e) => t(e),
                options: o.G
            }),
            (0, i.jsx)(S.VcW, {
                placeholder: 'Single select (clearable)',
                clearable: !0,
                value: n,
                onChange: (e) => s(e),
                options: o.G
            }),
            (0, i.jsx)(S.VcW, {
                placeholder: 'Multi select',
                multi: !0,
                value: l,
                onChange: (e) => a(e),
                options: o.G
            }),
            (0, i.jsx)(S.VcW, {
                placeholder: 'Multi select (clearable)',
                multi: !0,
                clearable: !0,
                value: u,
                onChange: (e) => m(e),
                options: o.G
            }),
            (0, i.jsx)(S.VcW, {
                placeholder: 'Multi select (custom pills)',
                multi: !0,
                value: c,
                onChange: (e) => d(e),
                options: o.G,
                hidePills: !0,
                customPillContainerClassName: D.customPillContainer,
                renderCustomPill: (e) =>
                    (0, i.jsx)('div', {
                        style: {
                            padding: 8,
                            border: '1px solid var(--bg-brand)',
                            borderRadius: 8
                        },
                        children: (0, i.jsx)(S.Text, {
                            variant: 'text-md/bold',
                            children: e.label
                        })
                    })
            })
        ]
    });
}
function ei() {
    let [e, t] = r.useState(''),
        [n, s] = r.useState(''),
        [l, a] = r.useState('');
    return (0, i.jsxs)('div', {
        className: D.section,
        children: [
            (0, i.jsx)(S.X6q, {
                variant: 'heading-xl/semibold',
                children: 'TextInput'
            }),
            (0, i.jsx)(S.xJW, {
                children: (0, i.jsx)(S.E1j, {
                    size: S.E1j.Sizes.MEDIUM,
                    placeholder: 'Search...',
                    onChange: (e) => a(e),
                    query: l,
                    onClear: () => a('')
                })
            }),
            (0, i.jsx)(S.xJW, {
                title: 'Disabled',
                disabled: !0,
                children: (0, i.jsx)(S.oil, {
                    placeholder: 'Disabled',
                    disabled: !0
                })
            }),
            (0, i.jsx)(S.xJW, {
                title: 'Error',
                children: (0, i.jsx)(S.oil, {
                    required: !0,
                    error: 'This must have a value'
                })
            }),
            (0, i.jsx)(S.xJW, {
                title: 'Error',
                children: (0, i.jsx)(S.oil, {
                    defaultValue: 'Not a valid value',
                    error: 'This has an error.'
                })
            }),
            (0, i.jsx)(S.xJW, {
                title: 'Read only',
                children: (0, i.jsx)(S.oil, {
                    value: 'Read-only, not-editable field',
                    editable: !1
                })
            }),
            (0, i.jsx)(S.xJW, {
                title: 'Input with a label',
                children: (0, i.jsx)(S.oil, {
                    placeholder: 'Real placeholder',
                    value: e,
                    onChange: t
                })
            }),
            (0, i.jsx)(S.xJW, {
                title: 'Text area',
                children: (0, i.jsx)(S.Kx8, {
                    placeholder: 'Text area placeholder',
                    showCharacterCount: !0,
                    value: n,
                    onChange: s
                })
            })
        ]
    });
}
function er(e) {
    let { transitionState: t } = e,
        [n, s] = r.useState(!1),
        [l, a] = r.useState(S.CgR.SMALL),
        [o, c] = r.useState(!1),
        d = n ? D.modalOutlines : '';
    return (0, i.jsxs)(S.Y0X, {
        transitionState: t,
        size: l,
        parentComponent: 'UserSettingsDesignSystem',
        children: [
            (0, i.jsx)(S.xBx, {
                className: d,
                children: (0, i.jsx)(S.X6q, {
                    variant: 'heading-xl/semibold',
                    children: 'Modal'
                })
            }),
            (0, i.jsx)(S.hzk, {
                className: d,
                children: (0, i.jsxs)(S.Kqy, {
                    gap: 16,
                    children: [
                        (0, i.jsx)(S.xJW, {
                            title: 'Modal Size',
                            children: (0, i.jsx)(S.q4e, {
                                value: l,
                                onChange: a,
                                options: Object.entries(S.CgR).map((e) => {
                                    let [t, n] = e;
                                    return {
                                        label: t,
                                        value: n
                                    };
                                })
                            })
                        }),
                        (0, i.jsx)(S.hjN, {
                            title: 'Options',
                            children: (0, i.jsxs)(S.Kqy, {
                                gap: 16,
                                children: [
                                    (0, i.jsx)(S.XZJ, {
                                        value: n,
                                        onChange: (e, t) => s(t),
                                        children: (0, i.jsx)(S.Text, {
                                            variant: 'text-md/medium',
                                            children: 'Show Section Outlines'
                                        })
                                    }),
                                    (0, i.jsx)(S.XZJ, {
                                        value: o,
                                        onChange: (e, t) => c(t),
                                        children: (0, i.jsx)(S.Text, {
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
            (0, i.jsx)(S.mzw, {
                className: d,
                children: (0, i.jsxs)(S.Kqy, {
                    direction: 'horizontal',
                    justify: 'end',
                    gap: 8,
                    children: [
                        o &&
                            (0, i.jsx)(S.zxk, {
                                color: S.zxk.Colors.PRIMARY,
                                look: S.zxk.Looks.FILLED,
                                children: 'Secondary Action'
                            }),
                        (0, i.jsx)(S.zxk, { children: 'Close' })
                    ]
                })
            })
        ]
    });
}
function es(e) {
    let { transitionState: t, onClose: n, modalCount: s = 1 } = e,
        [l, a] = r.useState('replace'),
        o = s < 3;
    return (0, i.jsxs)(S.Y0X, {
        transitionState: t,
        size: 1 === s ? S.CgR.LARGE : 2 === s ? S.CgR.MEDIUM : S.CgR.SMALL,
        parentComponent: 'UserSettingsDesignSystem',
        children: [
            (0, i.jsx)(S.xBx, {
                children: (0, i.jsx)(S.X6q, {
                    variant: 'heading-xl/semibold',
                    children: 'Modal Stacking Demo'
                })
            }),
            (0, i.jsx)(S.hzk, {
                children: (0, i.jsxs)(S.Kqy, {
                    gap: 16,
                    children: [
                        (0, i.jsxs)(S.Text, {
                            variant: 'text-md/medium',
                            children: ['This is modal level ', s, '.']
                        }),
                        o &&
                            (0, i.jsx)(S.xJW, {
                                title: 'Stacking Behavior',
                                children: (0, i.jsx)(S.q4e, {
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
                        (0, i.jsxs)(S.Kqy, {
                            gap: 8,
                            children: [
                                (0, i.jsxs)(S.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-muted',
                                    children: [(0, i.jsx)('strong', { children: 'Replace One:' }), ' The modal directly below is hidden (default behavior)']
                                }),
                                (0, i.jsxs)(S.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-muted',
                                    children: [(0, i.jsx)('strong', { children: 'Replace All:' }), ' All modals below are hidden']
                                }),
                                (0, i.jsxs)(S.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-muted',
                                    children: [(0, i.jsx)('strong', { children: 'Stack:' }), ' The modal directly below remains visible']
                                })
                            ]
                        })
                    ]
                })
            }),
            (0, i.jsx)(S.mzw, {
                children: (0, i.jsxs)(S.Kqy, {
                    direction: 'horizontal',
                    justify: 'end',
                    gap: 8,
                    children: [
                        (0, i.jsx)(S.zxk, {
                            color: S.zxk.Colors.PRIMARY,
                            look: S.zxk.Looks.FILLED,
                            onClick: n,
                            children: 'Close'
                        }),
                        o &&
                            (0, i.jsx)(S.zxk, {
                                onClick: () => {
                                    let e = s + 1;
                                    (0, S.h7j)((t) => (0, i.jsx)(es, L(k({}, t), { modalCount: e })), { stackingBehavior: l });
                                },
                                children: 'Open Next Modal'
                            })
                    ]
                })
            })
        ]
    });
}
function el(e) {
    let { transitionState: t, onClose: n } = e;
    function r(e) {
        let { children: t } = e;
        return (0, i.jsx)('div', {
            className: D.modalOutlines,
            style: { padding: '24px' },
            children: t
        });
    }
    return (0, i.jsxs)(f.IX, {
        transitionState: t,
        onClose: n,
        children: [
            (0, i.jsx)('div', {
                className: D.modalOutlines,
                children: (0, i.jsx)(j.x, {
                    title: 'Demo Modal',
                    body: 'The ModalHeader can have leading and trailing items on either side of the text',
                    leading: (0, i.jsx)(r, {}),
                    trailing: (0, i.jsx)(r, {})
                })
            }),
            (0, i.jsx)('div', {
                className: D.modalOutlines,
                children: (0, i.jsx)(E.h, {
                    controls: (0, i.jsx)(r, { children: 'This ModalContent renders any controls here' }),
                    children: (0, i.jsx)(r, { children: 'This is the main ModalContent. This area scrolls if there is enough content' })
                })
            }),
            (0, i.jsx)('div', {
                className: D.modalOutlines,
                children: (0, i.jsx)(E.m, { children: (0, i.jsx)(r, { children: 'This is the ModalFooter' }) })
            }),
            (0, i.jsx)('div', {
                className: D.modalOutlines,
                children: (0, i.jsx)(_.G, {
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
function ea(e) {
    let { transitionState: t, onClose: n } = e,
        [s, l] = r.useState('md'),
        [a, o] = r.useState('Demo Modal'),
        [c, d] = r.useState('Header body copy'),
        [u, m] = r.useState(!1),
        [g, p] = r.useState(!1),
        [h, b] = r.useState(!1),
        [x, C] = r.useState(!1),
        [O, v] = r.useState(!1);
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
                    ? (0, i.jsx)(S.E1j, {
                          size: S.E1j.Sizes.MEDIUM,
                          placeholder: 'Search',
                          onChange: () => null,
                          query: ''
                      })
                    : void 0,
                children: (0, i.jsxs)(S.Kqy, {
                    gap: 16,
                    children: [
                        (0, i.jsx)(S.xJW, {
                            title: 'Modal Size',
                            children: (0, i.jsx)(S.q4e, {
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
                        (0, i.jsx)(S.xJW, {
                            title: 'Header Title',
                            children: (0, i.jsx)(S.oil, {
                                onChange: o,
                                defaultValue: a
                            })
                        }),
                        (0, i.jsx)(S.xJW, {
                            title: 'Header body',
                            children: (0, i.jsx)(S.oil, {
                                onChange: d,
                                defaultValue: c
                            })
                        }),
                        (0, i.jsx)(S.xJW, {
                            title: 'Optional Content',
                            children: (0, i.jsxs)(S.Kqy, {
                                gap: 12,
                                children: [
                                    (0, i.jsx)(S.XZJ, {
                                        value: u,
                                        onChange: (e, t) => m(t),
                                        children: (0, i.jsx)(S.Text, {
                                            variant: 'text-md/medium',
                                            children: 'Header Align Center'
                                        })
                                    }),
                                    (0, i.jsx)(S.XZJ, {
                                        value: g,
                                        onChange: (e, t) => p(t),
                                        children: (0, i.jsx)(S.Text, {
                                            variant: 'text-md/medium',
                                            children: 'Show Search Input'
                                        })
                                    }),
                                    (0, i.jsx)(S.XZJ, {
                                        value: h,
                                        onChange: (e, t) => b(t),
                                        children: (0, i.jsx)(S.Text, {
                                            variant: 'text-md/medium',
                                            children: 'Show Preview Content'
                                        })
                                    }),
                                    (0, i.jsx)(S.XZJ, {
                                        value: x,
                                        onChange: (e, t) => C(t),
                                        children: (0, i.jsx)(S.Text, {
                                            variant: 'text-md/medium',
                                            children: 'Show Action Bar Leading Input'
                                        })
                                    }),
                                    (0, i.jsx)(S.XZJ, {
                                        value: O,
                                        onChange: (e, t) => v(t),
                                        children: (0, i.jsx)(S.Text, {
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
                        (0, i.jsx)(S.X6q, {
                            variant: 'heading-lg/semibold',
                            children: 'Celebration Station'
                        }),
                        (0, i.jsx)(S.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-secondary',
                            children: '32 Members \u25CF 19 Online'
                        })
                    ]
                }),
            (0, i.jsx)(_.G, {
                leading: x
                    ? (0, i.jsx)(_.B, {
                          value: !1,
                          onChange: () => {}
                      })
                    : void 0,
                actionsFullWidth: O,
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
function eo(e) {
    let { transitionState: t, onClose: n } = e;
    function s(e) {
        let { text: t } = e,
            [n, s] = r.useState(!1);
        return (0, i.jsx)('div', {
            style: { padding: '8px 0' },
            children: (0, i.jsx)(S.XZJ, {
                value: n,
                onChange: (e, t) => s(t),
                children: (0, i.jsx)(S.Text, {
                    variant: 'text-md/medium',
                    children: t
                })
            })
        });
    }
    return (0, i.jsxs)(x.u, {
        transitionState: t,
        onClose: n,
        size: 'md',
        title: 'Invite to server',
        input: (0, i.jsx)(S.E1j, {
            size: S.E1j.Sizes.MEDIUM,
            placeholder: 'Search',
            onChange: () => null,
            query: ''
        }),
        preview: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(S.X6q, {
                    variant: 'heading-lg/semibold',
                    children: 'Celebration Station'
                }),
                (0, i.jsx)(S.Text, {
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
                icon: S.kBi,
                iconPosition: 'end',
                onClick: n
            }
        ],
        children: [(0, i.jsx)(s, { text: 'John Doe' }), (0, i.jsx)(s, { text: 'Mark' }), (0, i.jsx)(s, { text: 'KawaiiHermit' }), (0, i.jsx)(s, { text: 'YurBruhGio' }), (0, i.jsx)(s, { text: 'John Doe' }), (0, i.jsx)(s, { text: 'Mark' }), (0, i.jsx)(s, { text: 'KawaiiHermit' }), (0, i.jsx)(s, { text: 'YurBruhGio' }), (0, i.jsx)(s, { text: 'John Doe' }), (0, i.jsx)(s, { text: 'Mark' }), (0, i.jsx)(s, { text: 'KawaiiHermit' }), (0, i.jsx)(s, { text: 'YurBruhGio' }), (0, i.jsx)(s, { text: 'John Doe' }), (0, i.jsx)(s, { text: 'Mark' }), (0, i.jsx)(s, { text: 'KawaiiHermit' }), (0, i.jsx)(s, { text: 'YurBruhGio' })]
    });
}
function ec(e) {
    let { transitionState: t, onClose: n } = e;
    return (0, i.jsx)(x.u, {
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
function ed(e) {
    let { transitionState: t, onClose: n } = e;
    return (0, i.jsx)(b.I, {
        transitionState: t,
        onClose: n,
        image: Z,
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
function eu(e) {
    let { transitionState: t, onClose: n, modalCount: s = 1 } = e,
        [l, a] = r.useState('replace'),
        o = s < 3;
    return (0, i.jsx)(x.u, {
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
                              (0, S.h7j)((t) => (0, i.jsx)(eu, L(k({}, t), { modalCount: e })), { stackingBehavior: l });
                          }
                      }
                  ]
                : [])
        ],
        children: (0, i.jsxs)(S.Kqy, {
            gap: 16,
            children: [
                o &&
                    (0, i.jsx)(S.xJW, {
                        title: 'Stacking Behavior',
                        children: (0, i.jsx)(S.q4e, {
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
                (0, i.jsxs)(S.Kqy, {
                    gap: 8,
                    children: [
                        (0, i.jsxs)(S.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-muted',
                            children: [(0, i.jsx)('strong', { children: 'Replace One:' }), ' The modal directly below is hidden (default behavior)']
                        }),
                        (0, i.jsxs)(S.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-muted',
                            children: [(0, i.jsx)('strong', { children: 'Replace All:' }), ' All modals below are hidden']
                        }),
                        (0, i.jsxs)(S.Text, {
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
function em() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: D.section,
                children: [
                    (0, i.jsx)(S.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Modals (Void)'
                    }),
                    (0, i.jsx)(S.zxk, {
                        onClick: () => {
                            (0, S.h7j)((e) => (0, i.jsx)(er, k({}, e)));
                        },
                        children: 'Open modal'
                    }),
                    (0, i.jsx)(S.zxk, {
                        onClick: () => {
                            v.Z.show({
                                title: 'Alert',
                                body: 'This is an alert',
                                confirmText: 'Confirm Text',
                                cancelText: 'Cancel Text'
                            });
                        },
                        children: 'Show Alert'
                    }),
                    (0, i.jsx)(S.zxk, {
                        onClick: () => {
                            (0, S.h7j)((e) => (0, i.jsx)(es, k({}, e)));
                        },
                        children: 'Open modal stacking demo'
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: D.section,
                children: [
                    (0, i.jsx)(S.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Modals (Mana)'
                    }),
                    (0, i.jsx)(S.zxk, {
                        onClick: () => {
                            (0, S.h7j)((e) => (0, i.jsx)(el, k({}, e)));
                        },
                        children: 'Open modal section visualizer'
                    }),
                    (0, i.jsx)(S.zxk, {
                        onClick: () => {
                            (0, S.h7j)((e) => (0, i.jsx)(ea, k({}, e)));
                        },
                        children: 'Open demo modal'
                    }),
                    (0, i.jsx)(S.zxk, {
                        onClick: () => {
                            (0, S.h7j)((e) => (0, i.jsx)(eo, k({}, e)));
                        },
                        children: 'Open sample invite modal'
                    }),
                    (0, i.jsx)(S.zxk, {
                        onClick: () => {
                            (0, S.h7j)((e) => (0, i.jsx)(ec, k({}, e)));
                        },
                        children: 'Open sample alert modal'
                    }),
                    (0, i.jsx)(S.zxk, {
                        onClick: () => {
                            (0, S.h7j)((e) => (0, i.jsx)(ed, k({}, e)));
                        },
                        children: 'Open expressive modal'
                    }),
                    (0, i.jsx)(S.zxk, {
                        onClick: () => {
                            (0, S.h7j)((e) => (0, i.jsx)(eu, k({}, e)));
                        },
                        children: 'Open Mana modal stacking demo'
                    })
                ]
            })
        ]
    });
}
function eg() {
    let e = (0, c.e7)([T.Z], () => T.Z.gradientPreset);
    return (0, i.jsx)(S.f6W, {
        theme: R.BR.DARKER,
        disableAdaptiveTheme: !0,
        children: (t) =>
            (0, i.jsxs)('div', {
                className: l()(t, D.section),
                children: [
                    (0, i.jsx)(S.zxk, {
                        color: S.zxk.Colors.PRIMARY,
                        look: S.zxk.Looks.FILLED,
                        fullWidth: !0,
                        children: 'Button'
                    }),
                    (0, i.jsx)(S.f6W, {
                        theme: R.BR.LIGHT,
                        children: (t) =>
                            (0, i.jsxs)('div', {
                                className: l()(t, D.section),
                                children: [
                                    (0, i.jsx)(S.zxk, {
                                        color: S.zxk.Colors.PRIMARY,
                                        look: S.zxk.Looks.FILLED,
                                        fullWidth: !0,
                                        children: 'Button'
                                    }),
                                    (0, i.jsx)(S.f6W, {
                                        theme: R.BR.DARKER,
                                        children: (e) =>
                                            (0, i.jsx)('div', {
                                                className: l()(e, D.section),
                                                children: (0, i.jsx)(S.zxk, {
                                                    color: S.zxk.Colors.PRIMARY,
                                                    look: S.zxk.Looks.FILLED,
                                                    fullWidth: !0,
                                                    children: 'Button'
                                                })
                                            })
                                    }),
                                    (0, i.jsx)(S.f6W, {
                                        gradient: e,
                                        children: (e) =>
                                            (0, i.jsx)('div', {
                                                className: l()(e, D.section),
                                                children: (0, i.jsx)(S.zxk, {
                                                    color: S.zxk.Colors.PRIMARY,
                                                    look: S.zxk.Looks.FILLED,
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
