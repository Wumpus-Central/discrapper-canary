(n.d(t, { Z: () => er }), n(704826), n(35282), n(388685), n(361932), n(187205));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(392711),
    o = n(971809),
    c = n(442837),
    d = n(836459),
    u = n(680018),
    m = n(374415),
    p = n(861066),
    g = n(780842),
    h = n(179538),
    f = n(279570),
    b = n(257465),
    x = n(667202),
    _ = n(82659),
    j = n(369585),
    E = n(103866),
    C = n(213734),
    O = n(37148),
    v = n(907862),
    S = n(466590),
    T = n(481060),
    I = n(240872),
    N = n(514361),
    y = n(705262),
    A = n(377089),
    P = n(581612),
    R = n(580747),
    D = n(526156),
    Z = n(799071),
    w = n(554042),
    k = n(706705),
    L = n(726985),
    B = n(981631),
    M = n(231338),
    U = n(426617),
    V = n(177475),
    G = n(691739),
    F = n(453707),
    H = n(315416),
    W = n(715720);
function z(e) {
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
function Y(e, t) {
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
function K() {
    return (0, i.jsxs)('div', {
        className: U.root,
        children: [(0, i.jsx)(q, {}), (0, i.jsx)(ea, {}), (0, i.jsx)(eg, {}), (0, i.jsx)(eh, {}), (0, i.jsx)(ep, {}), (0, i.jsx)(eu, {}), (0, i.jsx)(em, {}), (0, i.jsx)(ed, {}), (0, i.jsx)(ec, {}), (0, i.jsx)(ev, {}), (0, i.jsx)(X, {}), (0, i.jsx)(eS, {})]
    });
}
function q() {
    let e = (0, R.Z)('highlight_mana_components');
    return (0, i.jsx)(T.hjN, {
        title: 'Design System Controls',
        children: (0, i.jsx)(T.xJW, {
            children: (0, i.jsx)(T.j7V, {
                value: e,
                onChange: (e) => (0, P.Z)('highlight_mana_components', e),
                note: 'Highlights all mana components marked with data-mana-component',
                hideBorder: !0,
                children: 'Highlight Mana Components'
            })
        })
    });
}
function X() {
    let e = Object.keys(T.DM8);
    return (0, i.jsxs)('div', {
        className: U.section,
        children: [
            (0, i.jsx)(T.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Notice'
            }),
            (0, i.jsx)(T.Kqy, {
                gap: 16,
                children: e.map((e) =>
                    (0, i.jsx)(
                        T.qXd,
                        {
                            color: T.DM8[e],
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
let J = ['neutral', 'blue_new', 'blurple', 'green_new', 'red_new', 'teal_new', 'yellow_new', 'orange_new', 'pink', 'purple'],
    Q = ['background-surface-highest', 'background-surface-higher', 'background-surface-high', 'background-base-low', 'background-base-lower', 'background-base-lowest'],
    $ = ['background-gradient-lowest', 'background-gradient-lower', 'background-gradient-low', 'background-gradient-high', 'background-gradient-higher', 'background-gradient-highest'],
    ee = ['', 'background-mod-subtle', 'background-mod-normal', 'background-mod-strong'],
    et = ['critical', 'warning', 'positive', 'info'],
    en = ['text-default', 'text-primary', 'text-secondary', 'text-tertiary', 'text-feedback-critical', 'text-feedback-warning', 'text-feedback-positive', 'text-feedback-info', 'premium-nitro-pink-text'];
function ei() {
    let e = (0, c.e7)([N.Z], () => N.Z.gradientPreset);
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(T.X6q, {
                variant: 'heading-xl/semibold',
                className: U.heading,
                children: 'Background Colors'
            }),
            Q.map((e) =>
                (0, i.jsxs)(
                    'div',
                    {
                        className: U.palette,
                        style: {
                            backgroundColor: 'var(--'.concat(e, ')'),
                            padding: 24
                        },
                        children: [
                            (0, i.jsx)(T.Text, {
                                variant: 'text-md/medium',
                                children: e
                            }),
                            (0, i.jsx)('div', {
                                style: {
                                    display: 'grid',
                                    gap: 8,
                                    gridTemplateColumns: 'repeat(3, 1fr)'
                                },
                                children: ee.map((e) =>
                                    (0, i.jsxs)(
                                        'div',
                                        {
                                            className: U.color,
                                            style: {
                                                padding: 16,
                                                background: 'var(--'.concat(e, ')')
                                            },
                                            children: [
                                                (0, i.jsx)(T.Text, {
                                                    variant: 'text-xs/semibold',
                                                    color: 'header-secondary',
                                                    children: e
                                                }),
                                                (0, i.jsx)('hr', { className: U.sectionDivider }),
                                                en.map((e) =>
                                                    (0, i.jsx)(
                                                        T.Text,
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
                            (0, i.jsx)('hr', { className: U.sectionDivider }),
                            (0, i.jsx)('div', {
                                style: {
                                    display: 'grid',
                                    gap: 8,
                                    gridTemplateColumns: 'repeat(3, 1fr)'
                                },
                                children: et.map((e) => {
                                    let t = 'var(--text-feedback-'.concat(e, ')');
                                    return (0, i.jsxs)(
                                        'div',
                                        {
                                            className: U.color,
                                            style: {
                                                padding: 16,
                                                background: 'var(--background-feedback-'.concat(e, ')')
                                            },
                                            children: [
                                                (0, i.jsx)(T.Text, {
                                                    variant: 'text-xs/semibold',
                                                    color: 'header-secondary'
                                                }),
                                                (0, i.jsxs)(T.Kqy, {
                                                    children: [
                                                        (0, i.jsxs)(T.Text, {
                                                            variant: 'text-xs/semibold',
                                                            style: { color: t },
                                                            children: ['background-feedback-', e]
                                                        }),
                                                        (0, i.jsx)(T.Text, {
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
            null !== e &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(T.X6q, {
                            variant: 'heading-xl/semibold',
                            className: U.heading,
                            children: 'Gradient Background Colors'
                        }),
                        (0, i.jsx)('div', {
                            className: 'custom-theme-background',
                            style: {
                                display: 'grid',
                                gridTemplateColumns: 'repeat(6, 1fr)',
                                transform: 'translateZ(0)'
                            },
                            children: $.map((e) =>
                                (0, i.jsx)(
                                    'div',
                                    {
                                        className: U.palette,
                                        style: {
                                            background: 'var(--'.concat(e, ')'),
                                            height: 400
                                        },
                                        children: (0, i.jsx)(T.Text, {
                                            variant: 'text-xs/medium',
                                            children: e
                                        })
                                    },
                                    e
                                )
                            )
                        })
                    ]
                }),
            (0, i.jsx)(T.X6q, {
                variant: 'heading-xl/semibold',
                className: U.heading,
                children: 'Scales'
            }),
            J.map((e) =>
                (0, i.jsxs)(
                    'div',
                    {
                        className: U.palette,
                        children: [
                            (0, i.jsx)(T.Text, {
                                variant: 'text-lg/semibold',
                                children: e
                            }),
                            (0, i.jsx)('div', {
                                className: U.colors,
                                children: Array.from({ length: 100 }, (t, n) =>
                                    (0, i.jsx)(
                                        'div',
                                        {
                                            className: U.color,
                                            style: { background: 'var(--'.concat(e.replace('_', '-'), '-').concat(n + 1, ')') },
                                            children: (0, i.jsx)(T.f6W, {
                                                theme: n < 50 ? 'light' : 'dark',
                                                children: (t) =>
                                                    (0, i.jsxs)(T.Text, {
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
function er() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(D.Z, {
                parentSetting: L.s6.DESIGN_SYSTEMS,
                settingsSection: B.oAB.DESIGN_SYSTEMS,
                tabs: [
                    {
                        title: 'Components',
                        component: () => (0, i.jsx)(K, {}),
                        setting: L.s6.DESIGN_SYSTEMS_COMPONENTS
                    },
                    {
                        title: 'Colors',
                        component: () => (0, i.jsx)(ei, {}),
                        setting: L.s6.DESIGN_SYSTEMS_COLORS
                    },
                    {
                        title: 'Animations',
                        component: () => (0, i.jsx)(k.Z, {}),
                        setting: L.s6.ANIMATION_TESTING
                    },
                    {
                        title: 'Text Playground',
                        component: () => (0, i.jsx)(w.Z, {}),
                        setting: L.s6.TEXT_PLAYGROUND
                    },
                    {
                        title: 'Text Componnts',
                        component: () => (0, i.jsx)(Z.Z, {}),
                        setting: L.s6.TEXT_COMPONENTS
                    }
                ]
            }),
            (0, i.jsx)('div', {
                className: U.themes,
                children: (0, i.jsx)(y.ZP, {
                    type: y.yH.SETTINGS,
                    children: (0, i.jsx)(y.ZP.Basic, { className: U.themeSelectionGroup })
                })
            })
        ]
    });
}
function es(e) {
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
    let [a, l] = r.useState(!1),
        o = r.useRef(-1);
    return (
        r.useEffect(
            () => (
                a &&
                    n &&
                    (o.current = setTimeout(() => {
                        l(!1);
                    }, 3000)),
                () => {
                    o.current >= 0 && clearTimeout(o.current);
                }
            ),
            [a, n]
        ),
        (0, i.jsx)(
            t,
            Y(z({}, s), {
                loading: n ? a : void 0,
                onClick: () => l(!a)
            })
        )
    );
}
function ea() {
    let [e, t] = r.useState('md'),
        [n, s] = r.useState('start'),
        [a, o] = r.useState(!0),
        c = ['primary', 'secondary', 'critical-primary', 'critical-secondary', 'active', 'overlay-primary', 'overlay-secondary'],
        d = [...c, 'expressive'].map((t) =>
            (0, i.jsx)(
                es,
                {
                    component: u.z,
                    variant: t,
                    text: ''.concat((0, l.capitalize)(t), ' ').concat(e.toUpperCase()),
                    size: e,
                    icon: 'none' !== n ? T.gw7 : void 0,
                    iconPosition: n,
                    showLoadingAnimation: a
                },
                t + e
            )
        ),
        g = [...c, 'icon-only'].map((t) =>
            (0, i.jsx)(
                es,
                {
                    component: p.h,
                    variant: t,
                    icon: T.gw7,
                    size: e,
                    'aria-label': ''.concat(t, ' ').concat(e),
                    showLoadingAnimation: a
                },
                t + e
            )
        ),
        f = ['primary', 'secondary', 'always-white', 'critical'].map((e) =>
            (0, i.jsx)(
                r.Fragment,
                {
                    children: (0, i.jsx)(h.A, {
                        variant: e,
                        text: 'Text button'
                    })
                },
                e
            )
        );
    return (0, i.jsxs)('div', {
        className: U.section,
        children: [
            (0, i.jsx)(T.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Buttons'
            }),
            (0, i.jsxs)(eo, {
                title: 'Button Options',
                children: [
                    (0, i.jsx)(T.xJW, {
                        title: 'Button size',
                        children: (0, i.jsx)(T.FXm, {
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
                    (0, i.jsx)(T.xJW, {
                        title: 'Icon position',
                        children: (0, i.jsx)(T.FXm, {
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
                    (0, i.jsx)(T.xJW, {
                        title: 'Loading animation',
                        children: (0, i.jsx)(T.FXm, {
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
                            value: a ? 'on' : 'off'
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
                children: [f, d, g]
            }),
            (0, i.jsxs)(T.Kqy, {
                gap: 16,
                padding: { top: 16 },
                children: [
                    (0, i.jsx)(T.X6q, {
                        variant: 'heading-lg/semibold',
                        children: 'Button Groups'
                    }),
                    (0, i.jsx)(T.Text, {
                        variant: 'text-lg/medium',
                        children: 'Horizontal'
                    }),
                    (0, i.jsxs)(T.Kqy, {
                        gap: 16,
                        direction: 'horizontal',
                        children: [
                            (0, i.jsxs)(T.Kqy, {
                                gap: 16,
                                children: [
                                    (0, i.jsxs)(m.h, {
                                        size: e,
                                        children: [
                                            (0, i.jsx)(es, {
                                                component: u.z,
                                                variant: 'secondary',
                                                text: 'Cancel',
                                                showLoadingAnimation: a
                                            }),
                                            (0, i.jsx)(es, {
                                                component: u.z,
                                                variant: 'primary',
                                                text: 'Submit',
                                                showLoadingAnimation: a
                                            })
                                        ]
                                    }),
                                    (0, i.jsxs)(m.h, {
                                        size: e,
                                        children: [
                                            (0, i.jsx)(es, {
                                                component: u.z,
                                                variant: 'primary',
                                                text: 'Submit',
                                                showLoadingAnimation: a
                                            }),
                                            (0, i.jsx)(es, {
                                                component: p.h,
                                                variant: 'secondary',
                                                icon: T.gw7,
                                                'aria-label': 'Clyde',
                                                showLoadingAnimation: a
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, i.jsx)(T.Kqy, {
                                gap: 16,
                                children: (0, i.jsxs)(m.h, {
                                    size: e,
                                    fullWidth: !0,
                                    children: [
                                        (0, i.jsx)(es, {
                                            component: u.z,
                                            variant: 'secondary',
                                            text: 'Cancel',
                                            showLoadingAnimation: a
                                        }),
                                        (0, i.jsx)(es, {
                                            component: u.z,
                                            variant: 'primary',
                                            text: 'Submit',
                                            showLoadingAnimation: a
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    (0, i.jsx)(T.Text, {
                        variant: 'text-lg/medium',
                        children: 'Vertical'
                    }),
                    (0, i.jsxs)(T.Kqy, {
                        gap: 16,
                        direction: 'horizontal',
                        children: [
                            (0, i.jsx)(T.Kqy, {
                                gap: 16,
                                children: (0, i.jsxs)(m.h, {
                                    direction: 'vertical',
                                    size: e,
                                    children: [
                                        (0, i.jsx)(es, {
                                            component: u.z,
                                            variant: 'secondary',
                                            text: 'Cancel',
                                            showLoadingAnimation: a
                                        }),
                                        (0, i.jsx)(es, {
                                            component: u.z,
                                            variant: 'primary',
                                            text: 'Submit',
                                            showLoadingAnimation: a
                                        })
                                    ]
                                })
                            }),
                            (0, i.jsx)(T.Kqy, {
                                gap: 16,
                                children: (0, i.jsxs)(m.h, {
                                    fullWidth: !0,
                                    direction: 'vertical',
                                    size: e,
                                    children: [
                                        (0, i.jsx)(es, {
                                            component: u.z,
                                            variant: 'secondary',
                                            text: 'Cancel',
                                            showLoadingAnimation: a
                                        }),
                                        (0, i.jsx)(es, {
                                            component: u.z,
                                            variant: 'primary',
                                            text: 'Submit',
                                            showLoadingAnimation: a
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    (0, i.jsx)(el, { buttonSize: e })
                ]
            })
        ]
    });
}
function el(e) {
    let { buttonSize: t } = e,
        [n, s] = r.useState(!1);
    return (0, i.jsxs)(T.Kqy, {
        gap: 16,
        children: [
            (0, i.jsx)(T.X6q, {
                variant: 'heading-xl/semibold',
                children: 'PlayButton'
            }),
            (0, i.jsx)(T.Kqy, {
                direction: 'horizontal',
                gap: 16,
                children: ['dark', 'mid', 'light'].map((e) =>
                    (0, i.jsx)(
                        'div',
                        {
                            className: U.video,
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
function eo(e) {
    let { children: t, title: n } = e,
        [s, l] = r.useState(!1);
    return (0, i.jsxs)(T.Kqy, {
        direction: 'vertical',
        gap: 0,
        padding: 16,
        className: U.floatingControls,
        children: [
            (0, i.jsxs)(T.Kqy, {
                direction: 'horizontal',
                gap: 16,
                align: 'center',
                justify: 'space-between',
                children: [
                    (0, i.jsx)(T.X6q, {
                        variant: 'heading-lg/semibold',
                        children: n
                    }),
                    (0, i.jsx)(f.Q, {
                        icon: s ? T.hic : T.sXD,
                        onClick: () => l(!s),
                        pressed: s,
                        'aria-label': 'Show controls'
                    })
                ]
            }),
            (0, i.jsx)(T.Kqy, {
                gap: 16,
                className: a()(U.floatingControlsContent, { [U.floatingControlsContentHidden]: !s }),
                children: t
            })
        ]
    });
}
function ec() {
    let [e, t] = r.useState('1');
    return (0, i.jsxs)('div', {
        className: U.section,
        children: [
            (0, i.jsx)(T.X6q, {
                variant: 'heading-xl/semibold',
                children: 'TabBar'
            }),
            (0, i.jsxs)(T.njP, {
                type: 'top',
                look: 'brand',
                selectedItem: e,
                onItemSelect: (e) => t(e),
                className: U.tabBar,
                children: [
                    (0, i.jsx)(T.njP.Item, {
                        id: '1',
                        children: 'Tab 1'
                    }),
                    (0, i.jsx)(T.njP.Item, {
                        id: '2',
                        children: 'Tab 2'
                    }),
                    (0, i.jsx)(T.njP.Item, {
                        id: '3',
                        children: 'Tab 3'
                    })
                ]
            }),
            (0, i.jsxs)(T.Text, {
                variant: 'text-md/medium',
                children: ['Selected tab: ', e]
            })
        ]
    });
}
function ed() {
    let [e, t] = r.useState(1),
        [n, s] = r.useState(!1),
        [a, l] = r.useState(5),
        [o, c] = r.useState(!1),
        d = r.useRef(null);
    return (0, i.jsxs)('div', {
        className: U.section,
        children: [
            (0, i.jsx)(T.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Context Menus'
            }),
            (0, i.jsx)('span', {
                children: (0, i.jsx)(T.yRy, {
                    targetElementRef: d,
                    shouldShow: o,
                    renderPopout: () =>
                        (0, i.jsxs)(T.v2r, {
                            navId: 'demo',
                            'aria-label': 'Demo Actions',
                            onClose: () => null,
                            onSelect: () => null,
                            children: [
                                (0, i.jsxs)(T.kSQ, {
                                    label: 'Basic items',
                                    children: [
                                        (0, i.jsx)(T.sNh, {
                                            id: 'first',
                                            label: 'An option'
                                        }),
                                        (0, i.jsx)(T.sNh, {
                                            id: 'second',
                                            label: 'An option with an icon',
                                            icon: T.kBi
                                        }),
                                        (0, i.jsxs)(T.sNh, {
                                            id: 'item-with-submenu',
                                            label: 'Item with submenu',
                                            children: [
                                                (0, i.jsx)(T.sNh, {
                                                    id: 'subitem-1',
                                                    label: 'Subitem 1'
                                                }),
                                                (0, i.jsx)(T.sNh, {
                                                    id: 'subitem-2',
                                                    label: 'Subitem 2'
                                                }),
                                                (0, i.jsx)(T.sNh, {
                                                    id: 'subitem-3',
                                                    label: 'Subitem 3'
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, i.jsxs)(T.kSQ, {
                                    label: 'Inputs',
                                    children: [
                                        (0, i.jsx)(T.S89, {
                                            id: 'checkable',
                                            label: 'Checkbox',
                                            checked: n,
                                            action: () => s(!n)
                                        }),
                                        (0, i.jsx)(T.k5B, {
                                            id: 'radio-one',
                                            group: 'a-group',
                                            label: 'Radio 1',
                                            action: () => t(1),
                                            checked: 1 === e
                                        }),
                                        (0, i.jsx)(T.k5B, {
                                            id: 'radio-two',
                                            group: 'a-group',
                                            label: 'Radio 2',
                                            action: () => t(2),
                                            checked: 2 === e
                                        }),
                                        (0, i.jsx)(T.k5B, {
                                            id: 'radio-three',
                                            group: 'a-group',
                                            label: 'Radio 3',
                                            action: () => t(3),
                                            checked: 3 === e
                                        }),
                                        (0, i.jsx)(T.II_, {
                                            id: 'slider',
                                            label: 'Slider',
                                            control: (e, t) =>
                                                (0, i.jsx)(T._wy, {
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
                                (0, i.jsx)(T.Clw, {}),
                                (0, i.jsx)(T.sNh, {
                                    id: 'danger',
                                    label: 'A destructive option',
                                    color: 'danger',
                                    icon: T.XHJ
                                })
                            ]
                        }),
                    children: () =>
                        (0, i.jsx)(T.zxk, {
                            variant: 'primary',
                            text: 'Toggle context menu',
                            buttonRef: d,
                            onClick: () => c(!o)
                        })
                })
            })
        ]
    });
}
function eu() {
    let [e, t] = r.useState(T.FGA.PRIMARY),
        n = r.useMemo(
            () =>
                Object.entries(T.FGA).map((e) => {
                    let [t, n] = e;
                    return {
                        label: t,
                        value: n
                    };
                }),
            []
        );
    return (0, i.jsxs)('div', {
        className: U.section,
        children: [
            (0, i.jsx)(T.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Tooltips'
            }),
            (0, i.jsx)(T.xJW, {
                title: 'Color',
                children: (0, i.jsx)(T.q4e, {
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
                    (0, i.jsx)(T.ua7, {
                        color: e,
                        text: "Here's top aligned tooltip text!",
                        position: 'top',
                        children: (e) =>
                            (0, i.jsx)(
                                T.zxk,
                                z(
                                    {
                                        variant: 'primary',
                                        text: 'Tooltip on the top'
                                    },
                                    e
                                )
                            )
                    }),
                    (0, i.jsx)(T.ua7, {
                        color: e,
                        text: "Here's right aligned tooltip text!",
                        position: 'left',
                        children: (e) =>
                            (0, i.jsx)(
                                T.zxk,
                                z(
                                    {
                                        variant: 'primary',
                                        text: 'Tooltip on the left'
                                    },
                                    e
                                )
                            )
                    }),
                    (0, i.jsx)(T.ua7, {
                        color: e,
                        text: "Here's bottom aligned tooltip text!",
                        position: 'bottom',
                        children: (e) =>
                            (0, i.jsx)(
                                T.zxk,
                                z(
                                    {
                                        variant: 'primary',
                                        text: 'Tooltip on the bottom'
                                    },
                                    e
                                )
                            )
                    }),
                    (0, i.jsx)(T.ua7, {
                        color: e,
                        text: "Here's right aligned tooltip text!",
                        position: 'right',
                        children: (e) =>
                            (0, i.jsx)(
                                T.zxk,
                                z(
                                    {
                                        variant: 'primary',
                                        text: 'Tooltip on the right'
                                    },
                                    e
                                )
                            )
                    })
                ]
            }),
            (0, i.jsx)('div', {})
        ]
    });
}
function em() {
    let [e, t] = r.useState(!1),
        [n, s] = r.useState(!1),
        [a, l] = r.useState(!1),
        [o, c] = r.useState(!1),
        [d, u] = r.useState(!1),
        [m, p] = r.useState(!1),
        [g, h] = r.useState(!1),
        [f, b] = r.useState(!1),
        [x, _] = r.useState(!1),
        [j, E] = r.useState(!1),
        [C, O] = r.useState(!1),
        [I, N] = r.useState(!1),
        [y, A] = r.useState(!1),
        [P, R] = r.useState(!1),
        [D, Z] = r.useState(!1),
        [w, k] = r.useState(!1),
        [L, B] = r.useState(!1),
        [M, V] = r.useState(!1),
        [G, z] = r.useState(!1),
        Y = r.useRef(null),
        K = r.useRef(null),
        q = r.useRef(null),
        X = r.useRef(null),
        J = r.useRef(null),
        Q = r.useRef(null),
        $ = r.useRef(null),
        ee = r.useRef(null),
        et = r.useRef(null),
        en = r.useRef(null),
        ei = r.useRef(null),
        er = r.useRef(null),
        es = r.useRef(null),
        ea = r.useRef(null),
        el = r.useRef(null),
        eo = r.useRef(null),
        ec = r.useRef(null),
        ed = r.useRef(null),
        eu = r.useRef(null),
        em = r.useCallback(() => {
            (t(!1), s(!1), l(!1), c(!1), u(!1), p(!1), h(!1), b(!1), _(!1), E(!1), O(!1), N(!1), A(!1), R(!1), Z(!1), k(!1), B(!1), V(!1), z(!1));
        }, []);
    return (0, i.jsxs)('div', {
        className: U.section,
        children: [
            (0, i.jsx)(T.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Popovers'
            }),
            (0, i.jsx)(v.J2, {
                targetElementRef: Y,
                shouldShow: e,
                onRequestClose: em,
                caretConfig: {
                    position: 'bottom',
                    align: 'center'
                },
                title: 'Header',
                body: 'Body',
                size: 'sm',
                asset: (0, i.jsx)('img', {
                    src: H.Z,
                    alt: 'Small placeholder'
                }),
                badge: 'new',
                actions: [
                    {
                        text: 'Button',
                        onClick: em
                    }
                ]
            }),
            (0, i.jsx)(v.J2, {
                targetElementRef: K,
                shouldShow: n,
                onRequestClose: em,
                caretConfig: {
                    position: 'bottom',
                    align: 'center'
                },
                title: 'Header',
                body: 'Body',
                asset: (0, i.jsx)('img', {
                    src: F.Z,
                    alt: 'Medium placeholder'
                }),
                badge: 'new',
                actions: [
                    {
                        text: 'Button',
                        onClick: em
                    }
                ]
            }),
            (0, i.jsx)(v.J2, {
                targetElementRef: q,
                shouldShow: a,
                onRequestClose: em,
                caretConfig: {
                    position: 'bottom',
                    align: 'center'
                },
                title: 'Header',
                body: 'Lorem ipsum dolor sit amet, consectetur elit. Sed do eiusmod.',
                actions: [
                    {
                        text: 'Button',
                        onClick: em
                    }
                ]
            }),
            (0, i.jsx)(v.J2, {
                targetElementRef: X,
                shouldShow: o,
                onRequestClose: em,
                caretConfig: {
                    position: 'bottom',
                    align: 'center'
                },
                title: 'Ipsum Dolor',
                body: 'Lorem ipsum dolor sit amet, consectetur elit. Sed do eiusmod.',
                asset: (0, i.jsx)('img', {
                    src: F.Z,
                    alt: 'Medium placeholder'
                }),
                badge: 'new',
                actions: [
                    {
                        text: 'Button',
                        onClick: em
                    }
                ],
                textLink: {
                    text: 'Learn More',
                    link: 'https://discord.com',
                    external: !0
                }
            }),
            (0, i.jsx)(v.J2, {
                targetElementRef: J,
                shouldShow: d,
                onRequestClose: em,
                caretConfig: {
                    position: 'bottom',
                    align: 'center'
                },
                title: 'Header',
                body: 'Body',
                asset: (0, i.jsx)('img', {
                    src: F.Z,
                    alt: 'Medium placeholder'
                }),
                badge: 'new',
                actions: [
                    {
                        text: 'Primary',
                        onClick: em,
                        variant: 'primary'
                    },
                    {
                        text: 'Secondary',
                        onClick: em,
                        variant: 'secondary'
                    }
                ]
            }),
            (0, i.jsx)(v.J2, {
                targetElementRef: Q,
                shouldShow: m,
                onRequestClose: em,
                caretConfig: {
                    position: 'bottom',
                    align: 'center'
                },
                title: 'No Actions',
                body: 'This popover has no action buttons, just content to display.',
                asset: (0, i.jsx)('img', {
                    src: F.Z,
                    alt: 'Medium placeholder'
                }),
                badge: 'new'
            }),
            (0, i.jsx)(v.J2, {
                targetElementRef: $,
                shouldShow: g,
                onRequestClose: em,
                caretConfig: {
                    position: 'top',
                    align: 'end'
                },
                title: 'Custom Caret API',
                body: 'Using CaretConfig with END placement',
                asset: (0, i.jsx)('img', {
                    src: F.Z,
                    alt: 'Medium placeholder'
                }),
                badge: 'new',
                actions: [
                    {
                        text: 'Got it',
                        onClick: em
                    }
                ]
            }),
            (0, i.jsx)(v.J2, {
                targetElementRef: ee,
                shouldShow: f,
                onRequestClose: em,
                caretConfig: {
                    position: 'left',
                    align: 'start'
                },
                title: 'Left Side Caret',
                body: 'Caret positioned on the left side at start',
                asset: (0, i.jsx)('img', {
                    src: F.Z,
                    alt: 'Medium placeholder'
                }),
                badge: 'early_access',
                actions: [
                    {
                        text: 'Close',
                        onClick: em
                    }
                ]
            }),
            (0, i.jsx)(v.J2, {
                targetElementRef: et,
                shouldShow: x,
                onRequestClose: em,
                caretConfig: {
                    position: 'bottom',
                    align: 'custom',
                    customOffset: 50
                },
                title: 'Custom Offset',
                body: 'Caret positioned 50px from center with custom offset',
                asset: (0, i.jsx)('img', {
                    src: F.Z,
                    alt: 'Medium placeholder'
                }),
                badge: 'beta',
                actions: [
                    {
                        text: 'Amazing!',
                        onClick: em
                    }
                ]
            }),
            (0, i.jsx)(v.J2, {
                targetElementRef: en,
                shouldShow: j,
                onRequestClose: em,
                position: 'right',
                caretConfig: {
                    position: 'left',
                    align: 'center'
                },
                title: 'Left Center Positioning',
                body: 'Popover appears to the right with caret centered on the left side',
                asset: (0, i.jsx)('img', {
                    src: F.Z,
                    alt: 'Medium placeholder'
                }),
                badge: 'new',
                actions: [
                    {
                        text: 'Perfect!',
                        onClick: em
                    }
                ]
            }),
            (0, i.jsx)(v.J2, {
                targetElementRef: ei,
                shouldShow: C,
                onRequestClose: em,
                caretConfig: {
                    position: 'bottom',
                    align: 'center'
                },
                title: 'Purple Gradient',
                body: 'This popover has a beautiful purple gradient background',
                asset: (0, i.jsx)('img', {
                    src: F.Z,
                    alt: 'Medium placeholder'
                }),
                gradientColor: 'purple',
                badge: 'new',
                actions: [
                    {
                        text: 'Looks Great!',
                        onClick: em
                    }
                ]
            }),
            (0, i.jsx)(v.J2, {
                targetElementRef: er,
                shouldShow: I,
                onRequestClose: em,
                caretConfig: {
                    position: 'bottom',
                    align: 'center'
                },
                title: 'Blue Gradient',
                body: 'This popover showcases the blue gradient option',
                asset: (0, i.jsx)('img', {
                    src: F.Z,
                    alt: 'Medium placeholder'
                }),
                gradientColor: 'blue',
                badge: 'beta',
                actions: [
                    {
                        text: 'Nice!',
                        onClick: em
                    }
                ]
            }),
            (0, i.jsx)(v.J2, {
                targetElementRef: es,
                shouldShow: y,
                onRequestClose: em,
                caretConfig: {
                    position: 'bottom',
                    align: 'center'
                },
                title: 'Nitro Pink Gradient',
                body: 'Experience the premium nitro-pink gradient effect',
                asset: (0, i.jsx)('img', {
                    src: F.Z,
                    alt: 'Medium placeholder'
                }),
                gradientColor: 'nitro-pink',
                textLink: {
                    text: 'Learn about Nitro',
                    link: 'https://discord.com/nitro',
                    external: !0
                },
                actions: [
                    {
                        text: 'Get Nitro',
                        onClick: em
                    }
                ]
            }),
            (0, i.jsx)(v.J2, {
                targetElementRef: ea,
                shouldShow: P,
                onRequestClose: em,
                caretConfig: {
                    position: 'bottom',
                    align: 'center'
                },
                title: 'Voice Filters',
                body: 'Experience enhanced voice quality with our latest filtering technology. Perfect for gaming and streaming.',
                asset: (0, i.jsx)('img', {
                    src: W.Z,
                    alt: 'Voice Filters'
                }),
                badge: 'new',
                gradientColor: 'purple',
                actions: [
                    {
                        text: 'Try it now',
                        onClick: em
                    }
                ]
            }),
            (0, i.jsx)(v.Mb, {
                targetElementRef: el,
                shouldShow: D,
                onRequestClose: em,
                caretConfig: {
                    position: 'bottom',
                    align: 'center'
                },
                title: 'With Video Asset',
                body: 'Click the video to view it in the media viewer!',
                assetUrl: 'https://cdn.discordapp.com/assets/server-subscription-tier-template/upsell.mov',
                badge: 'new',
                gradientColor: 'blue',
                action: {
                    text: 'Learn More',
                    onClick: em
                }
            }),
            (0, i.jsx)(S.e, {
                targetElementRef: eo,
                shouldShow: w,
                onRequestClose: em,
                caretConfig: {
                    position: 'bottom',
                    align: 'center'
                },
                steps: [
                    {
                        title: 'Welcome to Quests!',
                        body: 'Journey to Quest Home in Discover to start earning Orbs.',
                        asset: (0, i.jsx)('img', {
                            src: F.Z,
                            alt: 'Medium placeholder'
                        }),
                        badge: 'new',
                        action: { text: 'Next' },
                        gradientColor: 'blue'
                    },
                    {
                        title: 'Earn Rewards',
                        body: 'Complete quests to earn Orbs and unlock exclusive rewards.',
                        asset: (0, i.jsx)('img', {
                            src: W.Z,
                            alt: 'Quest Rewards'
                        }),
                        action: { text: 'Next' },
                        gradientColor: 'blue'
                    },
                    {
                        title: 'Quest Complete!',
                        body: "You're all set to start your quest adventure. Good luck!",
                        asset: (0, i.jsx)('img', {
                            src: F.Z,
                            alt: 'Medium placeholder'
                        }),
                        action: { text: 'Get Started' },
                        gradientColor: 'blue',
                        textLink: {
                            text: 'Learn More',
                            link: 'https://discord.com/quests',
                            external: !0
                        }
                    }
                ],
                onStepChange: (e) => {}
            }),
            (0, i.jsx)(v.J2, {
                targetElementRef: ec,
                shouldShow: L,
                onRequestClose: em,
                caretConfig: {
                    position: 'bottom',
                    align: 'center'
                },
                title: 'Experience Voice Filters',
                body: 'Enhanced voice quality with our latest filtering technology. Try the expressive button!',
                asset: (0, i.jsx)('img', {
                    src: W.Z,
                    alt: 'Voice Filters'
                }),
                badge: 'new',
                gradientColor: 'nitro-pink',
                actions: [
                    {
                        text: 'Subscribe to Nitro',
                        onClick: em,
                        variant: 'expressive'
                    }
                ]
            }),
            (0, i.jsx)(S.e, {
                targetElementRef: ed,
                shouldShow: M,
                onRequestClose: em,
                caretConfig: {
                    position: 'bottom',
                    align: 'center'
                },
                steps: [
                    {
                        title: 'Discover Features',
                        body: 'Explore amazing new capabilities in Discord.',
                        asset: (0, i.jsx)('img', {
                            src: F.Z,
                            alt: 'Medium placeholder'
                        }),
                        badge: 'new',
                        action: { text: 'Continue' },
                        gradientColor: 'purple'
                    },
                    {
                        title: 'Unlock Potential',
                        body: 'Learn how to make the most of your Discord experience.',
                        asset: (0, i.jsx)('img', {
                            src: W.Z,
                            alt: 'Features'
                        }),
                        action: { text: 'Almost There' },
                        gradientColor: 'blue'
                    },
                    {
                        title: 'Ready to Go!',
                        body: "You're all set! Notice the expressive button animation.",
                        asset: (0, i.jsx)('img', {
                            src: F.Z,
                            alt: 'Medium placeholder'
                        }),
                        action: {
                            text: 'Get Started',
                            variant: 'expressive'
                        },
                        gradientColor: 'nitro-pink',
                        textLink: {
                            text: 'Learn More',
                            link: 'https://discord.com',
                            external: !0
                        }
                    }
                ],
                onStepChange: (e) => {}
            }),
            (0, i.jsx)(v.Mb, {
                targetElementRef: eu,
                shouldShow: G,
                onRequestClose: em,
                caretConfig: {
                    position: 'bottom',
                    align: 'center'
                },
                title: 'Expressive Video Experience',
                body: 'Watch this video with our expressive button design!',
                assetUrl: 'https://cdn.discordapp.com/assets/server-subscription-tier-template/upsell.mov',
                badge: 'new',
                action: {
                    text: 'Experience More',
                    onClick: em,
                    variant: 'expressive'
                }
            }),
            (0, i.jsxs)('div', {
                style: { marginTop: 16 },
                children: [
                    (0, i.jsx)(T.X6q, {
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
                            (0, i.jsx)(T.zxk, {
                                variant: 'primary',
                                text: 'Small Content',
                                buttonRef: Y,
                                onClick: () => {
                                    (em(), t(!0));
                                }
                            }),
                            (0, i.jsx)(T.zxk, {
                                variant: 'primary',
                                text: 'Medium Content',
                                buttonRef: K,
                                onClick: () => {
                                    (em(), s(!0));
                                }
                            }),
                            (0, i.jsx)(T.zxk, {
                                buttonRef: q,
                                onClick: () => {
                                    (em(), l(!0));
                                },
                                text: 'No Asset'
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                style: { marginTop: 16 },
                children: [
                    (0, i.jsx)(T.X6q, {
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
                            (0, i.jsx)(T.zxk, {
                                variant: 'primary',
                                text: 'External Link',
                                buttonRef: X,
                                onClick: () => {
                                    (em(), c(!0));
                                }
                            }),
                            (0, i.jsx)(T.zxk, {
                                variant: 'primary',
                                text: 'Two Actions',
                                buttonRef: J,
                                onClick: () => {
                                    (em(), u(!0));
                                }
                            }),
                            (0, i.jsx)(T.zxk, {
                                buttonRef: Q,
                                onClick: () => {
                                    (em(), p(!0));
                                },
                                text: 'No Actions'
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                style: { marginTop: 16 },
                children: [
                    (0, i.jsx)(T.X6q, {
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
                            (0, i.jsx)(T.zxk, {
                                variant: 'primary',
                                text: 'Custom Caret API',
                                buttonRef: $,
                                onClick: () => {
                                    (em(), h(!0));
                                }
                            }),
                            (0, i.jsx)(T.zxk, {
                                variant: 'primary',
                                text: 'Left Side Caret',
                                buttonRef: ee,
                                onClick: () => {
                                    (em(), b(!0));
                                }
                            }),
                            (0, i.jsx)(T.zxk, {
                                variant: 'primary',
                                text: 'Custom Offset',
                                buttonRef: et,
                                onClick: () => {
                                    (em(), _(!0));
                                }
                            }),
                            (0, i.jsx)(T.zxk, {
                                variant: 'primary',
                                text: 'Left Center',
                                buttonRef: en,
                                onClick: () => {
                                    (em(), E(!0));
                                }
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                style: { marginTop: 16 },
                children: [
                    (0, i.jsx)(T.X6q, {
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
                            (0, i.jsx)(T.zxk, {
                                variant: 'primary',
                                text: 'Purple Gradient',
                                buttonRef: ei,
                                onClick: () => {
                                    (em(), O(!0));
                                }
                            }),
                            (0, i.jsx)(T.zxk, {
                                variant: 'primary',
                                text: 'Blue Gradient',
                                buttonRef: er,
                                onClick: () => {
                                    (em(), N(!0));
                                }
                            }),
                            (0, i.jsx)(T.zxk, {
                                variant: 'primary',
                                text: 'Nitro Pink Gradient',
                                buttonRef: es,
                                onClick: () => {
                                    (em(), A(!0));
                                }
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                style: { marginTop: 16 },
                children: [
                    (0, i.jsx)(T.X6q, {
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
                            (0, i.jsx)(T.zxk, {
                                variant: 'primary',
                                text: 'Voice Filters',
                                buttonRef: ea,
                                onClick: () => {
                                    (em(), R(!0));
                                }
                            }),
                            (0, i.jsx)(T.zxk, {
                                variant: 'primary',
                                text: 'Video Media Viewer',
                                buttonRef: el,
                                onClick: () => {
                                    (em(), Z(!0));
                                }
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                style: { marginTop: 16 },
                children: [
                    (0, i.jsx)(T.X6q, {
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
                        children: (0, i.jsx)(T.zxk, {
                            variant: 'primary',
                            text: 'Multi-Step',
                            buttonRef: eo,
                            onClick: () => {
                                (em(), k(!0));
                            }
                        })
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                style: { marginTop: 16 },
                children: [
                    (0, i.jsx)(T.X6q, {
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
                            (0, i.jsx)(T.zxk, {
                                variant: 'primary',
                                text: 'Expressive Popover',
                                buttonRef: ec,
                                onClick: () => {
                                    (em(), B(!0));
                                }
                            }),
                            (0, i.jsx)(T.zxk, {
                                variant: 'primary',
                                text: 'Expressive Multi-Step',
                                buttonRef: ed,
                                onClick: () => {
                                    (em(), V(!0));
                                }
                            }),
                            (0, i.jsx)(T.zxk, {
                                variant: 'primary',
                                text: 'Expressive Video',
                                buttonRef: eu,
                                onClick: () => {
                                    (em(), z(!0));
                                }
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function ep() {
    let [e, t] = r.useState(!1),
        [n, s] = r.useState(!1),
        [a, l] = r.useState('auto');
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: U.section,
                children: [
                    (0, i.jsx)(T.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Checkboxes'
                    }),
                    (0, i.jsx)(T.XZJ, {
                        value: e,
                        onChange: (e, n) => t(n),
                        children: (0, i.jsx)(T.Text, {
                            variant: 'text-md/medium',
                            children: 'Checkbox input'
                        })
                    }),
                    (0, i.jsx)(T.XZJ, {
                        value: e,
                        onChange: (e, n) => t(n),
                        disabled: !0,
                        children: (0, i.jsx)(T.Text, {
                            variant: 'text-md/medium',
                            children: 'Disabled checkbox'
                        })
                    }),
                    (0, i.jsx)(T.XZJ, {
                        value: e,
                        onChange: (e, n) => t(n),
                        readOnly: !0,
                        children: (0, i.jsx)(T.Text, {
                            variant: 'text-md/medium',
                            children: 'Read-only checkbox'
                        })
                    }),
                    (0, i.jsx)(T.XZJ, {
                        value: e,
                        onChange: (e, n) => t(n),
                        type: T.XZJ.Types.ROW,
                        children: (0, i.jsx)(T.Text, {
                            variant: 'text-md/medium',
                            children: 'Checkbox row'
                        })
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: U.section,
                children: [
                    (0, i.jsx)(T.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Switches'
                    }),
                    (0, i.jsx)(T.j7V, {
                        hideBorder: !0,
                        value: n,
                        onChange: (e) => s(e),
                        children: 'FormSwitch with a label'
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: U.section,
                children: [
                    (0, i.jsx)(T.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Radio Buttons'
                    }),
                    (0, i.jsx)(T.xJW, {
                        children: (0, i.jsx)(T.FXm, {
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
            (0, i.jsxs)('div', {
                className: U.section,
                children: [
                    (0, i.jsx)(T.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Slider'
                    }),
                    (0, i.jsxs)('div', {
                        className: U.slider,
                        children: [
                            (0, i.jsx)(T.Text, {
                                variant: 'text-md/medium',
                                children: 'Standard slider'
                            }),
                            (0, i.jsx)(T.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                defaultValue: 50,
                                markers: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: U.slider,
                        children: [
                            (0, i.jsx)(T.Text, {
                                variant: 'text-md/medium',
                                children: 'Sticky markers'
                            }),
                            (0, i.jsx)(T.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                markers: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
                                stickToMarkers: !0
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: U.slider,
                        children: [
                            (0, i.jsx)(T.Text, {
                                variant: 'text-md/medium',
                                children: 'Non-uniform markers'
                            }),
                            (0, i.jsx)(T.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                markers: [0, 20, 50, 100],
                                equidistant: !1
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: U.slider,
                        children: [
                            (0, i.jsx)(T.Text, {
                                variant: 'text-md/medium',
                                children: 'Non-uniform equidistant markers'
                            }),
                            (0, i.jsx)(T.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                markers: [0, 20, 50, 100],
                                equidistant: !0
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: U.slider,
                        children: [
                            (0, i.jsx)(T.Text, {
                                variant: 'text-md/medium',
                                children: 'No markers'
                            }),
                            (0, i.jsx)(T.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: U.slider,
                        children: [
                            (0, i.jsx)(T.Text, {
                                variant: 'text-md/medium',
                                children: 'Mini slider'
                            }),
                            (0, i.jsx)(T.iRW, {
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
function eg() {
    let [e, t] = r.useState(null),
        [n, s] = r.useState(null),
        [a, l] = r.useState([]),
        [c, d] = r.useState([]),
        [u, m] = r.useState([]);
    return (0, i.jsxs)('div', {
        className: U.section,
        children: [
            (0, i.jsx)(T.X6q, {
                variant: 'heading-xl/semibold',
                children: 'SearchableSelect'
            }),
            (0, i.jsx)(T.VcW, {
                placeholder: 'Single select',
                value: e,
                onChange: (e) => t(e),
                options: o.G
            }),
            (0, i.jsx)(T.VcW, {
                placeholder: 'Single select (clearable)',
                clearable: !0,
                value: n,
                onChange: (e) => s(e),
                options: o.G
            }),
            (0, i.jsx)(T.VcW, {
                placeholder: 'Multi select',
                multi: !0,
                value: a,
                onChange: (e) => l(e),
                options: o.G
            }),
            (0, i.jsx)(T.VcW, {
                placeholder: 'Multi select (clearable)',
                multi: !0,
                clearable: !0,
                value: u,
                onChange: (e) => m(e),
                options: o.G
            }),
            (0, i.jsx)(T.VcW, {
                placeholder: 'Multi select (custom pills)',
                multi: !0,
                value: c,
                onChange: (e) => d(e),
                options: o.G,
                hidePills: !0,
                customPillContainerClassName: U.customPillContainer,
                renderCustomPill: (e) =>
                    (0, i.jsx)('div', {
                        style: {
                            padding: 8,
                            border: '1px solid var(--bg-brand)',
                            borderRadius: 8
                        },
                        children: (0, i.jsx)(T.Text, {
                            variant: 'text-md/bold',
                            children: e.label
                        })
                    })
            })
        ]
    });
}
function eh() {
    let [e, t] = r.useState(''),
        [n, s] = r.useState(''),
        [a, l] = r.useState(''),
        o = (0, A.U)('UserSettingsDesignSystems');
    return (0, i.jsxs)('div', {
        className: U.section,
        children: [
            (0, i.jsx)(T.X6q, {
                variant: 'heading-xl/semibold',
                children: 'TextInput'
            }),
            (0, i.jsx)(T.xJW, {
                title: 'Search',
                children: (0, i.jsxs)(T.Kqy, {
                    gap: 8,
                    children: [
                        (0, i.jsx)(T.E1j, {
                            placeholder: 'Search...',
                            onChange: (e) => l(e),
                            query: a,
                            onClear: () => l('')
                        }),
                        (0, i.jsx)(T.E1j, {
                            size: 'sm',
                            placeholder: 'Search...',
                            onChange: (e) => l(e),
                            query: a,
                            onClear: () => l('')
                        })
                    ]
                })
            }),
            (0, i.jsx)(T.xJW, {
                title: 'Disabled',
                disabled: !0,
                children: (0, i.jsx)(T.oil, {
                    placeholder: 'Disabled',
                    disabled: !0
                })
            }),
            (0, i.jsx)(T.xJW, {
                title: 'Error',
                children: (0, i.jsx)(T.oil, {
                    required: !0,
                    error: 'This must have a value'
                })
            }),
            (0, i.jsx)(T.xJW, {
                title: 'Error',
                children: (0, i.jsx)(T.oil, {
                    defaultValue: 'Not a valid value',
                    error: 'This has an error.'
                })
            }),
            (0, i.jsx)(T.xJW, {
                title: 'minLength',
                children: (0, i.jsx)(T.oil, {
                    minLength: 6,
                    value: e,
                    onChange: t,
                    placeholder: 'Enter at least 6 characters'
                })
            }),
            (0, i.jsx)(T.xJW, {
                title: 'Read only',
                children: (0, i.jsx)(T.oil, {
                    value: 'Read-only, not-editable field',
                    editable: !1
                })
            }),
            (0, i.jsx)(T.xJW, {
                title: 'Input with a label',
                children: (0, i.jsx)(T.oil, {
                    placeholder: 'Real placeholder',
                    value: e,
                    onChange: t
                })
            }),
            o &&
                (0, i.jsx)(T.xJW, {
                    title: 'Leading and Trailing',
                    children: (0, i.jsxs)(T.Kqy, {
                        gap: 16,
                        children: [
                            (0, i.jsx)(T.Wn, {
                                messageType: T.QYI.WARNING,
                                children: 'Leading and trailing accessories are not yet supported in the public API.'
                            }),
                            (0, i.jsxs)(T.Kqy, {
                                children: [
                                    (0, i.jsx)(T.oil, {
                                        leading: (0, i.jsx)(T.qJs, { size: 'sm' }),
                                        placeholder: 'Create Channel',
                                        value: e,
                                        onChange: t
                                    }),
                                    (0, i.jsx)(T.oil, {
                                        trailing: (0, i.jsx)(T.lOy, { size: 'sm' }),
                                        placeholder: 'Send Message',
                                        value: e,
                                        onChange: t
                                    })
                                ]
                            })
                        ]
                    })
                }),
            (0, i.jsx)(T.xJW, {
                title: 'Text area',
                children: (0, i.jsx)(T.Kx8, {
                    placeholder: 'Text area placeholder',
                    showCharacterCount: !0,
                    value: n,
                    onChange: s
                })
            })
        ]
    });
}
function ef(e) {
    let { transitionState: t } = e,
        [n, s] = r.useState(!1),
        [a, l] = r.useState(T.CgR.SMALL),
        [o, c] = r.useState(!1),
        d = n ? U.modalOutlines : '';
    return (0, i.jsxs)(T.Y0X, {
        transitionState: t,
        size: a,
        parentComponent: 'UserSettingsDesignSystem',
        children: [
            (0, i.jsx)(T.xBx, {
                className: d,
                children: (0, i.jsx)(T.X6q, {
                    variant: 'heading-xl/semibold',
                    children: 'Modal'
                })
            }),
            (0, i.jsx)(T.hzk, {
                className: d,
                children: (0, i.jsxs)(T.Kqy, {
                    gap: 16,
                    children: [
                        (0, i.jsx)(T.xJW, {
                            title: 'Modal Size',
                            children: (0, i.jsx)(T.q4e, {
                                value: a,
                                onChange: l,
                                options: Object.entries(T.CgR).map((e) => {
                                    let [t, n] = e;
                                    return {
                                        label: t,
                                        value: n
                                    };
                                })
                            })
                        }),
                        (0, i.jsx)(T.hjN, {
                            title: 'Options',
                            children: (0, i.jsxs)(T.Kqy, {
                                gap: 16,
                                children: [
                                    (0, i.jsx)(T.XZJ, {
                                        value: n,
                                        onChange: (e, t) => s(t),
                                        children: (0, i.jsx)(T.Text, {
                                            variant: 'text-md/medium',
                                            children: 'Show Section Outlines'
                                        })
                                    }),
                                    (0, i.jsx)(T.XZJ, {
                                        value: o,
                                        onChange: (e, t) => c(t),
                                        children: (0, i.jsx)(T.Text, {
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
            (0, i.jsx)(T.mzw, {
                className: d,
                children: (0, i.jsxs)(T.Kqy, {
                    direction: 'horizontal',
                    justify: 'end',
                    gap: 8,
                    children: [
                        o &&
                            (0, i.jsx)(T.zxk, {
                                variant: 'secondary',
                                text: 'Secondary Action'
                            }),
                        (0, i.jsx)(T.zxk, {
                            variant: 'primary',
                            text: 'Close'
                        })
                    ]
                })
            })
        ]
    });
}
function eb(e) {
    let { transitionState: t, onClose: n, modalCount: s = 1 } = e,
        [a, l] = r.useState('replace'),
        o = s < 3;
    return (0, i.jsxs)(T.Y0X, {
        transitionState: t,
        size: 1 === s ? T.CgR.LARGE : 2 === s ? T.CgR.MEDIUM : T.CgR.SMALL,
        parentComponent: 'UserSettingsDesignSystem',
        children: [
            (0, i.jsx)(T.xBx, {
                children: (0, i.jsx)(T.X6q, {
                    variant: 'heading-xl/semibold',
                    children: 'Modal Stacking Demo'
                })
            }),
            (0, i.jsx)(T.hzk, {
                children: (0, i.jsxs)(T.Kqy, {
                    gap: 16,
                    children: [
                        (0, i.jsxs)(T.Text, {
                            variant: 'text-md/medium',
                            children: ['This is modal level ', s, '.']
                        }),
                        o &&
                            (0, i.jsx)(T.xJW, {
                                title: 'Stacking Behavior',
                                children: (0, i.jsx)(T.q4e, {
                                    value: a,
                                    onChange: l,
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
                        (0, i.jsxs)(T.Kqy, {
                            gap: 8,
                            children: [
                                (0, i.jsxs)(T.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-muted',
                                    children: [(0, i.jsx)('strong', { children: 'Replace One:' }), ' The modal directly below is hidden (default behavior)']
                                }),
                                (0, i.jsxs)(T.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-muted',
                                    children: [(0, i.jsx)('strong', { children: 'Replace All:' }), ' All modals below are hidden']
                                }),
                                (0, i.jsxs)(T.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-muted',
                                    children: [(0, i.jsx)('strong', { children: 'Stack:' }), ' The modal directly below remains visible']
                                })
                            ]
                        })
                    ]
                })
            }),
            (0, i.jsx)(T.mzw, {
                children: (0, i.jsxs)(T.Kqy, {
                    direction: 'horizontal',
                    justify: 'end',
                    gap: 8,
                    children: [
                        (0, i.jsx)(T.zxk, {
                            variant: 'secondary',
                            text: 'Close',
                            onClick: n
                        }),
                        o &&
                            (0, i.jsx)(T.zxk, {
                                variant: 'primary',
                                text: 'Open Next Modal',
                                onClick: () => {
                                    let e = s + 1;
                                    (0, T.h7j)((t) => (0, i.jsx)(eb, Y(z({}, t), { modalCount: e })), { stackingBehavior: a });
                                }
                            })
                    ]
                })
            })
        ]
    });
}
function ex(e) {
    let { transitionState: t, onClose: n } = e;
    function r(e) {
        let { children: t } = e;
        return (0, i.jsx)('div', {
            className: U.modalOutlines,
            style: { padding: '24px' },
            children: t
        });
    }
    return (0, i.jsxs)(b.I, {
        transitionState: t,
        onClose: n,
        children: [
            (0, i.jsx)('div', {
                className: U.modalOutlines,
                children: (0, i.jsx)(O.x, {
                    title: 'Demo Modal',
                    subtitle: 'The ModalHeader can have leading and trailing items on either side of the text',
                    leading: (0, i.jsx)(r, {}),
                    trailing: (0, i.jsx)(r, {})
                })
            }),
            (0, i.jsx)('div', {
                className: U.modalOutlines,
                children: (0, i.jsx)(E.f, {
                    controls: (0, i.jsx)(r, { children: 'This ModalBody renders any controls here' }),
                    children: (0, i.jsx)(r, { children: 'This is the main ModalBody. This area scrolls if there is enough content' })
                })
            }),
            (0, i.jsx)('div', {
                className: U.modalOutlines,
                children: (0, i.jsx)(C.m, { children: (0, i.jsx)(r, { children: 'This is the ModalFooter' }) })
            }),
            (0, i.jsx)('div', {
                className: U.modalOutlines,
                children: (0, i.jsx)(j.G, {
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
function e_(e) {
    let { transitionState: t, onClose: n } = e,
        [s, a] = r.useState('md'),
        [l, o] = r.useState('Demo Modal'),
        [c, d] = r.useState('Header body copy'),
        [u, m] = r.useState(!1),
        [p, g] = r.useState(!1),
        [h, f] = r.useState(!1),
        [x, _] = r.useState(!1),
        [v, S] = r.useState(!1);
    return (0, i.jsxs)(b.I, {
        transitionState: t,
        onClose: n,
        size: s,
        children: [
            (0, i.jsx)(O.x, {
                title: l,
                subtitle: c,
                alignCenter: u
            }),
            (0, i.jsx)(E.f, {
                controls: p
                    ? (0, i.jsx)(T.E1j, {
                          placeholder: 'Search',
                          onChange: () => null,
                          query: ''
                      })
                    : void 0,
                children: (0, i.jsxs)(T.Kqy, {
                    gap: 16,
                    children: [
                        (0, i.jsx)(T.xJW, {
                            title: 'Modal Size',
                            children: (0, i.jsx)(T.q4e, {
                                value: s,
                                onChange: a,
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
                        (0, i.jsx)(T.xJW, {
                            title: 'Header Title',
                            children: (0, i.jsx)(T.oil, {
                                onChange: o,
                                defaultValue: l
                            })
                        }),
                        (0, i.jsx)(T.xJW, {
                            title: 'Header body',
                            children: (0, i.jsx)(T.oil, {
                                onChange: d,
                                defaultValue: c
                            })
                        }),
                        (0, i.jsx)(T.xJW, {
                            title: 'Optional Content',
                            children: (0, i.jsxs)(T.Kqy, {
                                gap: 12,
                                children: [
                                    (0, i.jsx)(T.XZJ, {
                                        value: u,
                                        onChange: (e, t) => m(t),
                                        children: (0, i.jsx)(T.Text, {
                                            variant: 'text-md/medium',
                                            children: 'Header Align Center'
                                        })
                                    }),
                                    (0, i.jsx)(T.XZJ, {
                                        value: p,
                                        onChange: (e, t) => g(t),
                                        children: (0, i.jsx)(T.Text, {
                                            variant: 'text-md/medium',
                                            children: 'Show Search Input'
                                        })
                                    }),
                                    (0, i.jsx)(T.XZJ, {
                                        value: h,
                                        onChange: (e, t) => f(t),
                                        children: (0, i.jsx)(T.Text, {
                                            variant: 'text-md/medium',
                                            children: 'Show Preview Content'
                                        })
                                    }),
                                    (0, i.jsx)(T.XZJ, {
                                        value: x,
                                        onChange: (e, t) => _(t),
                                        children: (0, i.jsx)(T.Text, {
                                            variant: 'text-md/medium',
                                            children: 'Show Action Bar Leading Input'
                                        })
                                    }),
                                    (0, i.jsx)(T.XZJ, {
                                        value: v,
                                        onChange: (e, t) => S(t),
                                        children: (0, i.jsx)(T.Text, {
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
                (0, i.jsxs)(C.m, {
                    children: [
                        (0, i.jsx)(T.X6q, {
                            variant: 'heading-lg/semibold',
                            children: 'Celebration Station'
                        }),
                        (0, i.jsx)(T.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-secondary',
                            children: '32 Members \u25CF 19 Online'
                        })
                    ]
                }),
            (0, i.jsx)(j.G, {
                leading: x
                    ? (0, i.jsx)(j.B, {
                          value: !1,
                          onChange: () => {}
                      })
                    : void 0,
                actionsFullWidth: v,
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
function ej(e) {
    let { transitionState: t, onClose: n } = e;
    function s(e) {
        let { text: t } = e,
            [n, s] = r.useState(!1);
        return (0, i.jsx)('div', {
            style: { padding: '8px 0' },
            children: (0, i.jsx)(T.XZJ, {
                value: n,
                onChange: (e, t) => s(t),
                children: (0, i.jsx)(T.Text, {
                    variant: 'text-md/medium',
                    children: t
                })
            })
        });
    }
    return (0, i.jsxs)(_.Modal, {
        transitionState: t,
        onClose: n,
        size: 'md',
        title: 'Invite to server',
        input: (0, i.jsx)(T.E1j, {
            placeholder: 'Search',
            onChange: () => null,
            query: ''
        }),
        preview: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(T.X6q, {
                    variant: 'heading-lg/semibold',
                    children: 'Celebration Station'
                }),
                (0, i.jsx)(T.Text, {
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
                icon: T.kBi,
                iconPosition: 'end',
                onClick: n
            }
        ],
        children: [(0, i.jsx)(s, { text: 'John Doe' }), (0, i.jsx)(s, { text: 'Mark' }), (0, i.jsx)(s, { text: 'KawaiiHermit' }), (0, i.jsx)(s, { text: 'YurBruhGio' }), (0, i.jsx)(s, { text: 'John Doe' }), (0, i.jsx)(s, { text: 'Mark' }), (0, i.jsx)(s, { text: 'KawaiiHermit' }), (0, i.jsx)(s, { text: 'YurBruhGio' }), (0, i.jsx)(s, { text: 'John Doe' }), (0, i.jsx)(s, { text: 'Mark' }), (0, i.jsx)(s, { text: 'KawaiiHermit' }), (0, i.jsx)(s, { text: 'YurBruhGio' }), (0, i.jsx)(s, { text: 'John Doe' }), (0, i.jsx)(s, { text: 'Mark' }), (0, i.jsx)(s, { text: 'KawaiiHermit' }), (0, i.jsx)(s, { text: 'YurBruhGio' })]
    });
}
function eE(e) {
    let { transitionState: t, onClose: n } = e;
    return (0, i.jsx)(_.Modal, {
        transitionState: t,
        onClose: n,
        title: 'Alert Modal',
        subtitle: 'This is an alert',
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
function eC(e) {
    let { transitionState: t, onClose: s } = e,
        [a, l] = r.useState(0),
        o = r.useMemo(
            () =>
                0 === a
                    ? {
                          type: 'image',
                          src: V
                      }
                    : 1 === a
                      ? {
                            type: 'lottie',
                            lottie: () => n.e('94792').then(n.t.bind(n, 972951, 19)),
                            aspectRatio: '6/4'
                        }
                      : 2 === a
                        ? {
                              type: 'rive',
                              rive: d.PerfTestRive
                          }
                        : 3 === a
                          ? {
                                type: 'video',
                                src: G.Z,
                                fallbackImageSrc: V,
                                loop: !0,
                                loopAt: 2.5
                            }
                          : 4 === a
                            ? {
                                  type: 'dynamic',
                                  component: T.AX$.DEMO,
                                  props: { text: 'Dynamic Content' }
                              }
                            : void 0,
            [a]
        );
    return (0, i.jsx)(x.I, {
        transitionState: t,
        onClose: s,
        gradientColor: 'nitro-pink',
        graphic: o,
        badge: 'beta',
        title: 'Expressive Modal',
        subtitle: 'This is an expressive modal with a header image',
        actions: [
            {
                variant: 'secondary',
                text: 'Cancel',
                onClick: s
            },
            {
                variant: 'primary',
                text: 'Submit',
                onClick: s
            }
        ],
        children: (0, i.jsx)(T.xJW, {
            title: 'Graphic Type',
            children: (0, i.jsx)(T.q4e, {
                value: a,
                onChange: l,
                options: [
                    {
                        label: 'Image',
                        value: 0
                    },
                    {
                        label: 'Lottie',
                        value: 1
                    },
                    {
                        label: 'Rive',
                        value: 2
                    },
                    {
                        label: 'Looping Video',
                        value: 3
                    },
                    {
                        label: 'Dynamic Content',
                        value: 4
                    }
                ]
            })
        })
    });
}
function eO(e) {
    let { transitionState: t, onClose: n, modalCount: s = 1 } = e,
        [a, l] = r.useState('replace'),
        o = s < 3;
    return (0, i.jsx)(_.Modal, {
        transitionState: t,
        onClose: n,
        size: 1 === s ? 'md' : 'sm',
        title: 'Mana Modal Stacking Demo',
        subtitle: 'This is modal level '.concat(s, '.'),
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
                              (0, T.h7j)((t) => (0, i.jsx)(eO, Y(z({}, t), { modalCount: e })), { stackingBehavior: a });
                          }
                      }
                  ]
                : [])
        ],
        children: (0, i.jsxs)(T.Kqy, {
            gap: 16,
            children: [
                o &&
                    (0, i.jsx)(T.xJW, {
                        title: 'Stacking Behavior',
                        children: (0, i.jsx)(T.q4e, {
                            value: a,
                            onChange: l,
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
                (0, i.jsxs)(T.Kqy, {
                    gap: 8,
                    children: [
                        (0, i.jsxs)(T.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-muted',
                            children: [(0, i.jsx)('strong', { children: 'Replace One:' }), ' The modal directly below is hidden (default behavior)']
                        }),
                        (0, i.jsxs)(T.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-muted',
                            children: [(0, i.jsx)('strong', { children: 'Replace All:' }), ' All modals below are hidden']
                        }),
                        (0, i.jsxs)(T.Text, {
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
function ev() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: U.section,
                children: [
                    (0, i.jsx)(T.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Modals (Void)'
                    }),
                    (0, i.jsx)(T.zxk, {
                        variant: 'primary',
                        text: 'Open modal',
                        onClick: () => {
                            (0, T.h7j)((e) => (0, i.jsx)(ef, z({}, e)));
                        }
                    }),
                    (0, i.jsx)(T.zxk, {
                        variant: 'primary',
                        text: 'Show Alert',
                        onClick: () => {
                            I.Z.show({
                                title: 'Alert',
                                body: 'This is an alert',
                                confirmText: 'Confirm Text',
                                cancelText: 'Cancel Text'
                            });
                        }
                    }),
                    (0, i.jsx)(T.zxk, {
                        variant: 'primary',
                        text: 'Open modal stacking demo',
                        onClick: () => {
                            (0, T.h7j)((e) => (0, i.jsx)(eb, z({}, e)));
                        }
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: U.section,
                children: [
                    (0, i.jsx)(T.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Modals (Mana)'
                    }),
                    (0, i.jsx)(T.zxk, {
                        variant: 'primary',
                        text: 'Open modal section visualizer',
                        onClick: () => {
                            (0, T.h7j)((e) => (0, i.jsx)(ex, z({}, e)));
                        }
                    }),
                    (0, i.jsx)(T.zxk, {
                        variant: 'primary',
                        text: 'Open demo modal',
                        onClick: () => {
                            (0, T.h7j)((e) => (0, i.jsx)(e_, z({}, e)));
                        }
                    }),
                    (0, i.jsx)(T.zxk, {
                        variant: 'primary',
                        text: 'Open sample invite modal',
                        onClick: () => {
                            (0, T.h7j)((e) => (0, i.jsx)(ej, z({}, e)));
                        }
                    }),
                    (0, i.jsx)(T.zxk, {
                        variant: 'primary',
                        text: 'Open sample alert modal',
                        onClick: () => {
                            (0, T.h7j)((e) => (0, i.jsx)(eE, z({}, e)));
                        }
                    }),
                    (0, i.jsx)(T.zxk, {
                        variant: 'primary',
                        text: 'Open expressive modal',
                        onClick: () => {
                            (0, T.h7j)((e) => (0, i.jsx)(eC, z({}, e)));
                        }
                    }),
                    (0, i.jsx)(T.zxk, {
                        variant: 'primary',
                        text: 'Open Mana modal stacking demo',
                        onClick: () => {
                            (0, T.h7j)((e) => (0, i.jsx)(eO, z({}, e)));
                        }
                    })
                ]
            })
        ]
    });
}
function eS() {
    let e = (0, c.e7)([N.Z], () => N.Z.gradientPreset);
    return (0, i.jsx)(T.f6W, {
        theme: M.BR.DARKER,
        disableAdaptiveTheme: !0,
        children: (t) =>
            (0, i.jsxs)('div', {
                className: a()(t, U.section),
                children: [
                    (0, i.jsx)(T.zxk, {
                        variant: 'secondary',
                        text: 'Button',
                        fullWidth: !0
                    }),
                    (0, i.jsx)(T.f6W, {
                        theme: M.BR.LIGHT,
                        children: (t) =>
                            (0, i.jsxs)('div', {
                                className: a()(t, U.section),
                                children: [
                                    (0, i.jsx)(T.zxk, {
                                        variant: 'secondary',
                                        text: 'Button',
                                        fullWidth: !0
                                    }),
                                    (0, i.jsx)(T.f6W, {
                                        theme: M.BR.DARKER,
                                        children: (e) =>
                                            (0, i.jsx)('div', {
                                                className: a()(e, U.section),
                                                children: (0, i.jsx)(T.zxk, {
                                                    variant: 'secondary',
                                                    text: 'Button',
                                                    fullWidth: !0
                                                })
                                            })
                                    }),
                                    (0, i.jsx)(T.f6W, {
                                        gradient: e,
                                        children: (e) =>
                                            (0, i.jsx)('div', {
                                                className: a()(e, U.section),
                                                children: (0, i.jsx)(T.zxk, {
                                                    variant: 'secondary',
                                                    text: 'Button',
                                                    fullWidth: !0
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
