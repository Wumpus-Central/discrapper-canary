(n.d(t, { Z: () => en }), n(704826), n(35282), n(388685), n(361932), n(187205));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(392711),
    o = n(971809),
    c = n(442837),
    d = n(680018),
    u = n(374415),
    m = n(861066),
    p = n(780842),
    g = n(179538),
    h = n(279570),
    f = n(257465),
    b = n(667202),
    x = n(82659),
    _ = n(369585),
    j = n(103866),
    E = n(213734),
    O = n(37148),
    C = n(907862),
    v = n(466590),
    S = n(481060),
    T = n(240872),
    N = n(514361),
    I = n(705262),
    y = n(581612),
    A = n(580747),
    P = n(526156),
    R = n(799071),
    D = n(554042),
    Z = n(706705),
    w = n(726985),
    k = n(981631),
    L = n(231338),
    B = n(426617),
    M = n(177475),
    U = n(691739),
    V = n(453707),
    G = n(241539),
    F = n(715720);
function H(e) {
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
function z(e, t) {
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
function W() {
    return (0, i.jsxs)('div', {
        className: B.root,
        children: [(0, i.jsx)(Y, {}), (0, i.jsx)(er, {}), (0, i.jsx)(em, {}), (0, i.jsx)(ep, {}), (0, i.jsx)(eu, {}), (0, i.jsx)(ec, {}), (0, i.jsx)(ed, {}), (0, i.jsx)(eo, {}), (0, i.jsx)(el, {}), (0, i.jsx)(eO, {}), (0, i.jsx)(K, {}), (0, i.jsx)(eC, {})]
    });
}
function Y() {
    let e = (0, A.Z)('highlight_mana_components');
    return (0, i.jsx)(S.hjN, {
        title: 'Design System Controls',
        children: (0, i.jsx)(S.xJW, {
            children: (0, i.jsx)(S.j7V, {
                value: e,
                onChange: (e) => (0, y.Z)('highlight_mana_components', e),
                note: 'Highlights all mana components marked with data-mana-component',
                hideBorder: !0,
                children: 'Highlight Mana Components'
            })
        })
    });
}
function K() {
    let e = Object.keys(S.DM8);
    return (0, i.jsxs)('div', {
        className: B.section,
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
let q = ['neutral', 'blue_new', 'blurple', 'green_new', 'red_new', 'teal_new', 'yellow_new', 'orange_new', 'pink', 'purple'],
    X = ['background-surface-highest', 'background-surface-higher', 'background-surface-high', 'background-base-low', 'background-base-lower', 'background-base-lowest'],
    J = ['background-gradient-lowest', 'background-gradient-lower', 'background-gradient-low', 'background-gradient-high', 'background-gradient-higher', 'background-gradient-highest'],
    Q = ['', 'background-mod-subtle', 'background-mod-normal', 'background-mod-strong'],
    $ = ['critical', 'warning', 'positive', 'info'],
    ee = ['text-default', 'text-primary', 'text-secondary', 'text-tertiary', 'text-feedback-critical', 'text-feedback-warning', 'text-feedback-positive', 'text-feedback-info', 'premium-nitro-pink-text'];
function et() {
    let e = (0, c.e7)([N.Z], () => N.Z.gradientPreset);
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(S.X6q, {
                variant: 'heading-xl/semibold',
                className: B.heading,
                children: 'Background Colors'
            }),
            X.map((e) =>
                (0, i.jsxs)(
                    'div',
                    {
                        className: B.palette,
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
                                children: Q.map((e) =>
                                    (0, i.jsxs)(
                                        'div',
                                        {
                                            className: B.color,
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
                                                (0, i.jsx)('hr', { className: B.sectionDivider }),
                                                ee.map((e) =>
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
                            (0, i.jsx)('hr', { className: B.sectionDivider }),
                            (0, i.jsx)('div', {
                                style: {
                                    display: 'grid',
                                    gap: 8,
                                    gridTemplateColumns: 'repeat(3, 1fr)'
                                },
                                children: $.map((e) => {
                                    let t = 'var(--text-feedback-'.concat(e, ')');
                                    return (0, i.jsxs)(
                                        'div',
                                        {
                                            className: B.color,
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
            null !== e &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(S.X6q, {
                            variant: 'heading-xl/semibold',
                            className: B.heading,
                            children: 'Gradient Background Colors'
                        }),
                        (0, i.jsx)('div', {
                            className: 'custom-theme-background',
                            style: {
                                display: 'grid',
                                gridTemplateColumns: 'repeat(6, 1fr)',
                                transform: 'translateZ(0)'
                            },
                            children: J.map((e) =>
                                (0, i.jsx)(
                                    'div',
                                    {
                                        className: B.palette,
                                        style: {
                                            background: 'var(--'.concat(e, ')'),
                                            height: 400
                                        },
                                        children: (0, i.jsx)(S.Text, {
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
            (0, i.jsx)(S.X6q, {
                variant: 'heading-xl/semibold',
                className: B.heading,
                children: 'Scales'
            }),
            q.map((e) =>
                (0, i.jsxs)(
                    'div',
                    {
                        className: B.palette,
                        children: [
                            (0, i.jsx)(S.Text, {
                                variant: 'text-lg/semibold',
                                children: e
                            }),
                            (0, i.jsx)('div', {
                                className: B.colors,
                                children: Array.from({ length: 100 }, (t, n) =>
                                    (0, i.jsx)(
                                        'div',
                                        {
                                            className: B.color,
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
function en() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(P.Z, {
                parentSetting: w.s6.DESIGN_SYSTEMS,
                settingsSection: k.oAB.DESIGN_SYSTEMS,
                tabs: [
                    {
                        title: 'Components',
                        component: () => (0, i.jsx)(W, {}),
                        setting: w.s6.DESIGN_SYSTEMS_COMPONENTS
                    },
                    {
                        title: 'Colors',
                        component: () => (0, i.jsx)(et, {}),
                        setting: w.s6.DESIGN_SYSTEMS_COLORS
                    },
                    {
                        title: 'Animations',
                        component: () => (0, i.jsx)(Z.Z, {}),
                        setting: w.s6.ANIMATION_TESTING
                    },
                    {
                        title: 'Text Playground',
                        component: () => (0, i.jsx)(D.Z, {}),
                        setting: w.s6.TEXT_PLAYGROUND
                    },
                    {
                        title: 'Text Componnts',
                        component: () => (0, i.jsx)(R.Z, {}),
                        setting: w.s6.TEXT_COMPONENTS
                    }
                ]
            }),
            (0, i.jsx)('div', {
                className: B.themes,
                children: (0, i.jsx)(I.ZP, {
                    type: I.yH.SETTINGS,
                    children: (0, i.jsx)(I.ZP.Basic, { className: B.themeSelectionGroup })
                })
            })
        ]
    });
}
function ei(e) {
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
            z(H({}, s), {
                loading: n ? a : void 0,
                onClick: () => l(!a)
            })
        )
    );
}
function er() {
    let [e, t] = r.useState('md'),
        [n, s] = r.useState('start'),
        [a, o] = r.useState(!0),
        c = ['primary', 'secondary', 'critical-primary', 'critical-secondary', 'active', 'overlay-primary', 'overlay-secondary'],
        p = [...c, 'expressive'].map((t) =>
            (0, i.jsx)(
                ei,
                {
                    component: d.z,
                    variant: t,
                    text: ''.concat((0, l.capitalize)(t), ' ').concat(e.toUpperCase()),
                    size: e,
                    icon: 'none' !== n ? S.gw7 : void 0,
                    iconPosition: n,
                    showLoadingAnimation: a
                },
                t + e
            )
        ),
        h = [...c, 'icon-only'].map((t) =>
            (0, i.jsx)(
                ei,
                {
                    component: m.h,
                    variant: t,
                    icon: S.gw7,
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
                    children: (0, i.jsx)(g.A, {
                        variant: e,
                        text: 'Text button'
                    })
                },
                e
            )
        );
    return (0, i.jsxs)('div', {
        className: B.section,
        children: [
            (0, i.jsx)(S.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Buttons'
            }),
            (0, i.jsxs)(ea, {
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
                children: [f, p, h]
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
                                            (0, i.jsx)(ei, {
                                                component: d.z,
                                                variant: 'secondary',
                                                text: 'Cancel',
                                                showLoadingAnimation: a
                                            }),
                                            (0, i.jsx)(ei, {
                                                component: d.z,
                                                variant: 'primary',
                                                text: 'Submit',
                                                showLoadingAnimation: a
                                            })
                                        ]
                                    }),
                                    (0, i.jsxs)(u.h, {
                                        size: e,
                                        children: [
                                            (0, i.jsx)(ei, {
                                                component: d.z,
                                                variant: 'primary',
                                                text: 'Submit',
                                                showLoadingAnimation: a
                                            }),
                                            (0, i.jsx)(ei, {
                                                component: m.h,
                                                variant: 'secondary',
                                                icon: S.gw7,
                                                'aria-label': 'Clyde',
                                                showLoadingAnimation: a
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
                                        (0, i.jsx)(ei, {
                                            component: d.z,
                                            variant: 'secondary',
                                            text: 'Cancel',
                                            showLoadingAnimation: a
                                        }),
                                        (0, i.jsx)(ei, {
                                            component: d.z,
                                            variant: 'primary',
                                            text: 'Submit',
                                            showLoadingAnimation: a
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
                                        (0, i.jsx)(ei, {
                                            component: d.z,
                                            variant: 'secondary',
                                            text: 'Cancel',
                                            showLoadingAnimation: a
                                        }),
                                        (0, i.jsx)(ei, {
                                            component: d.z,
                                            variant: 'primary',
                                            text: 'Submit',
                                            showLoadingAnimation: a
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
                                        (0, i.jsx)(ei, {
                                            component: d.z,
                                            variant: 'secondary',
                                            text: 'Cancel',
                                            showLoadingAnimation: a
                                        }),
                                        (0, i.jsx)(ei, {
                                            component: d.z,
                                            variant: 'primary',
                                            text: 'Submit',
                                            showLoadingAnimation: a
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    (0, i.jsx)(es, { buttonSize: e })
                ]
            })
        ]
    });
}
function es(e) {
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
                            className: B.video,
                            'data-luminance': e,
                            children: (0, i.jsx)(p.J, {
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
function ea(e) {
    let { children: t, title: n } = e,
        [s, l] = r.useState(!1);
    return (0, i.jsxs)(S.Kqy, {
        direction: 'vertical',
        gap: 0,
        padding: 16,
        className: B.floatingControls,
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
                        onClick: () => l(!s),
                        pressed: s,
                        'aria-label': 'Show controls'
                    })
                ]
            }),
            (0, i.jsx)(S.Kqy, {
                gap: 16,
                className: a()(B.floatingControlsContent, { [B.floatingControlsContentHidden]: !s }),
                children: t
            })
        ]
    });
}
function el() {
    let [e, t] = r.useState('1');
    return (0, i.jsxs)('div', {
        className: B.section,
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
                className: B.tabBar,
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
function eo() {
    let [e, t] = r.useState(1),
        [n, s] = r.useState(!1),
        [a, l] = r.useState(5),
        [o, c] = r.useState(!1),
        d = r.useRef(null);
    return (0, i.jsxs)('div', {
        className: B.section,
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
                                                    value: a,
                                                    minValue: 0,
                                                    maxValue: 100,
                                                    onChange: (e) => l(e),
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
function ec() {
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
        className: B.section,
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
                        children: (e) =>
                            (0, i.jsx)(
                                S.zxk,
                                H(
                                    {
                                        variant: 'primary',
                                        text: 'Tooltip on the top'
                                    },
                                    e
                                )
                            )
                    }),
                    (0, i.jsx)(S.ua7, {
                        color: e,
                        text: "Here's right aligned tooltip text!",
                        position: 'left',
                        children: (e) =>
                            (0, i.jsx)(
                                S.zxk,
                                H(
                                    {
                                        variant: 'primary',
                                        text: 'Tooltip on the left'
                                    },
                                    e
                                )
                            )
                    }),
                    (0, i.jsx)(S.ua7, {
                        color: e,
                        text: "Here's bottom aligned tooltip text!",
                        position: 'bottom',
                        children: (e) =>
                            (0, i.jsx)(
                                S.zxk,
                                H(
                                    {
                                        variant: 'primary',
                                        text: 'Tooltip on the bottom'
                                    },
                                    e
                                )
                            )
                    }),
                    (0, i.jsx)(S.ua7, {
                        color: e,
                        text: "Here's right aligned tooltip text!",
                        position: 'right',
                        children: (e) =>
                            (0, i.jsx)(
                                S.zxk,
                                H(
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
function ed() {
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
        [O, T] = r.useState(!1),
        [N, I] = r.useState(!1),
        [y, A] = r.useState(!1),
        [P, R] = r.useState(!1),
        [D, Z] = r.useState(!1),
        [w, k] = r.useState(!1),
        [L, M] = r.useState(!1),
        [U, H] = r.useState(!1),
        [z, W] = r.useState(!1),
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
            (t(!1), s(!1), l(!1), c(!1), u(!1), p(!1), h(!1), b(!1), _(!1), E(!1), T(!1), I(!1), A(!1), R(!1), Z(!1), k(!1), M(!1), H(!1), W(!1));
        }, []);
    return (0, i.jsxs)('div', {
        className: B.section,
        children: [
            (0, i.jsx)(S.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Popovers'
            }),
            (0, i.jsx)(C.J2, {
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
                    src: G.Z,
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
            (0, i.jsx)(C.J2, {
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
                    src: V.Z,
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
            (0, i.jsx)(C.J2, {
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
            (0, i.jsx)(C.J2, {
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
                    src: V.Z,
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
            (0, i.jsx)(C.J2, {
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
                    src: V.Z,
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
            (0, i.jsx)(C.J2, {
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
                    src: V.Z,
                    alt: 'Medium placeholder'
                }),
                badge: 'new'
            }),
            (0, i.jsx)(C.J2, {
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
                    src: V.Z,
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
            (0, i.jsx)(C.J2, {
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
                    src: V.Z,
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
            (0, i.jsx)(C.J2, {
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
                    src: V.Z,
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
            (0, i.jsx)(C.J2, {
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
                    src: V.Z,
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
            (0, i.jsx)(C.J2, {
                targetElementRef: ei,
                shouldShow: O,
                onRequestClose: em,
                caretConfig: {
                    position: 'bottom',
                    align: 'center'
                },
                title: 'Purple Gradient',
                body: 'This popover has a beautiful purple gradient background',
                asset: (0, i.jsx)('img', {
                    src: V.Z,
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
            (0, i.jsx)(C.J2, {
                targetElementRef: er,
                shouldShow: N,
                onRequestClose: em,
                caretConfig: {
                    position: 'bottom',
                    align: 'center'
                },
                title: 'Blue Gradient',
                body: 'This popover showcases the blue gradient option',
                asset: (0, i.jsx)('img', {
                    src: V.Z,
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
            (0, i.jsx)(C.J2, {
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
                    src: V.Z,
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
            (0, i.jsx)(C.J2, {
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
                    src: F.Z,
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
            (0, i.jsx)(C.Mb, {
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
            (0, i.jsx)(v.e, {
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
                            src: V.Z,
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
                            src: F.Z,
                            alt: 'Quest Rewards'
                        }),
                        action: { text: 'Next' },
                        gradientColor: 'blue'
                    },
                    {
                        title: 'Quest Complete!',
                        body: "You're all set to start your quest adventure. Good luck!",
                        asset: (0, i.jsx)('img', {
                            src: V.Z,
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
            (0, i.jsx)(C.J2, {
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
                    src: F.Z,
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
            (0, i.jsx)(v.e, {
                targetElementRef: ed,
                shouldShow: U,
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
                            src: V.Z,
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
                            src: F.Z,
                            alt: 'Features'
                        }),
                        action: { text: 'Almost There' },
                        gradientColor: 'blue'
                    },
                    {
                        title: 'Ready to Go!',
                        body: "You're all set! Notice the expressive button animation.",
                        asset: (0, i.jsx)('img', {
                            src: V.Z,
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
            (0, i.jsx)(C.Mb, {
                targetElementRef: eu,
                shouldShow: z,
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
                                variant: 'primary',
                                text: 'Small Content',
                                buttonRef: Y,
                                onClick: () => {
                                    (em(), t(!0));
                                }
                            }),
                            (0, i.jsx)(S.zxk, {
                                variant: 'primary',
                                text: 'Medium Content',
                                buttonRef: K,
                                onClick: () => {
                                    (em(), s(!0));
                                }
                            }),
                            (0, i.jsx)(S.zxk, {
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
                                variant: 'primary',
                                text: 'External Link',
                                buttonRef: X,
                                onClick: () => {
                                    (em(), c(!0));
                                }
                            }),
                            (0, i.jsx)(S.zxk, {
                                variant: 'primary',
                                text: 'Two Actions',
                                buttonRef: J,
                                onClick: () => {
                                    (em(), u(!0));
                                }
                            }),
                            (0, i.jsx)(S.zxk, {
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
                                variant: 'primary',
                                text: 'Custom Caret API',
                                buttonRef: $,
                                onClick: () => {
                                    (em(), h(!0));
                                }
                            }),
                            (0, i.jsx)(S.zxk, {
                                variant: 'primary',
                                text: 'Left Side Caret',
                                buttonRef: ee,
                                onClick: () => {
                                    (em(), b(!0));
                                }
                            }),
                            (0, i.jsx)(S.zxk, {
                                variant: 'primary',
                                text: 'Custom Offset',
                                buttonRef: et,
                                onClick: () => {
                                    (em(), _(!0));
                                }
                            }),
                            (0, i.jsx)(S.zxk, {
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
                                variant: 'primary',
                                text: 'Purple Gradient',
                                buttonRef: ei,
                                onClick: () => {
                                    (em(), T(!0));
                                }
                            }),
                            (0, i.jsx)(S.zxk, {
                                variant: 'primary',
                                text: 'Blue Gradient',
                                buttonRef: er,
                                onClick: () => {
                                    (em(), I(!0));
                                }
                            }),
                            (0, i.jsx)(S.zxk, {
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
                                variant: 'primary',
                                text: 'Voice Filters',
                                buttonRef: ea,
                                onClick: () => {
                                    (em(), R(!0));
                                }
                            }),
                            (0, i.jsx)(S.zxk, {
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
                                variant: 'primary',
                                text: 'Expressive Popover',
                                buttonRef: ec,
                                onClick: () => {
                                    (em(), M(!0));
                                }
                            }),
                            (0, i.jsx)(S.zxk, {
                                variant: 'primary',
                                text: 'Expressive Multi-Step',
                                buttonRef: ed,
                                onClick: () => {
                                    (em(), H(!0));
                                }
                            }),
                            (0, i.jsx)(S.zxk, {
                                variant: 'primary',
                                text: 'Expressive Video',
                                buttonRef: eu,
                                onClick: () => {
                                    (em(), W(!0));
                                }
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function eu() {
    let [e, t] = r.useState(!1),
        [n, s] = r.useState(!1),
        [a, l] = r.useState('auto');
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: B.section,
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
                className: B.section,
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
                className: B.section,
                children: [
                    (0, i.jsx)(S.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Radio Buttons'
                    }),
                    (0, i.jsx)(S.xJW, {
                        children: (0, i.jsx)(S.FXm, {
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
                className: B.section,
                children: [
                    (0, i.jsx)(S.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Slider'
                    }),
                    (0, i.jsxs)('div', {
                        className: B.slider,
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
                        className: B.slider,
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
                        className: B.slider,
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
                        className: B.slider,
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
                        className: B.slider,
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
                        className: B.slider,
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
function em() {
    let [e, t] = r.useState(null),
        [n, s] = r.useState(null),
        [a, l] = r.useState([]),
        [c, d] = r.useState([]),
        [u, m] = r.useState([]);
    return (0, i.jsxs)('div', {
        className: B.searchableSelectExamples,
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
                value: a,
                onChange: (e) => l(e),
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
                customPillContainerClassName: B.customPillContainer,
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
function ep() {
    let [e, t] = r.useState(''),
        [n, s] = r.useState(''),
        [a, l] = r.useState('');
    return (0, i.jsxs)('div', {
        className: B.section,
        children: [
            (0, i.jsx)(S.X6q, {
                variant: 'heading-xl/semibold',
                children: 'TextInput'
            }),
            (0, i.jsx)(S.xJW, {
                children: (0, i.jsx)(S.E1j, {
                    size: S.E1j.Sizes.MEDIUM,
                    placeholder: 'Search...',
                    onChange: (e) => l(e),
                    query: a,
                    onClear: () => l('')
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
function eg(e) {
    let { transitionState: t } = e,
        [n, s] = r.useState(!1),
        [a, l] = r.useState(S.CgR.SMALL),
        [o, c] = r.useState(!1),
        d = n ? B.modalOutlines : '';
    return (0, i.jsxs)(S.Y0X, {
        transitionState: t,
        size: a,
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
                                value: a,
                                onChange: l,
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
                                variant: 'secondary',
                                text: 'Secondary Action'
                            }),
                        (0, i.jsx)(S.zxk, {
                            variant: 'primary',
                            text: 'Close'
                        })
                    ]
                })
            })
        ]
    });
}
function eh(e) {
    let { transitionState: t, onClose: n, modalCount: s = 1 } = e,
        [a, l] = r.useState('replace'),
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
                            variant: 'secondary',
                            text: 'Close',
                            onClick: n
                        }),
                        o &&
                            (0, i.jsx)(S.zxk, {
                                variant: 'primary',
                                text: 'Open Next Modal',
                                onClick: () => {
                                    let e = s + 1;
                                    (0, S.h7j)((t) => (0, i.jsx)(eh, z(H({}, t), { modalCount: e })), { stackingBehavior: a });
                                }
                            })
                    ]
                })
            })
        ]
    });
}
function ef(e) {
    let { transitionState: t, onClose: n } = e;
    function r(e) {
        let { children: t } = e;
        return (0, i.jsx)('div', {
            className: B.modalOutlines,
            style: { padding: '24px' },
            children: t
        });
    }
    return (0, i.jsxs)(f.I, {
        transitionState: t,
        onClose: n,
        children: [
            (0, i.jsx)('div', {
                className: B.modalOutlines,
                children: (0, i.jsx)(O.x, {
                    title: 'Demo Modal',
                    subtitle: 'The ModalHeader can have leading and trailing items on either side of the text',
                    leading: (0, i.jsx)(r, {}),
                    trailing: (0, i.jsx)(r, {})
                })
            }),
            (0, i.jsx)('div', {
                className: B.modalOutlines,
                children: (0, i.jsx)(j.f, {
                    controls: (0, i.jsx)(r, { children: 'This ModalBody renders any controls here' }),
                    children: (0, i.jsx)(r, { children: 'This is the main ModalBody. This area scrolls if there is enough content' })
                })
            }),
            (0, i.jsx)('div', {
                className: B.modalOutlines,
                children: (0, i.jsx)(E.m, { children: (0, i.jsx)(r, { children: 'This is the ModalFooter' }) })
            }),
            (0, i.jsx)('div', {
                className: B.modalOutlines,
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
function eb(e) {
    let { transitionState: t, onClose: n } = e,
        [s, a] = r.useState('md'),
        [l, o] = r.useState('Demo Modal'),
        [c, d] = r.useState('Header body copy'),
        [u, m] = r.useState(!1),
        [p, g] = r.useState(!1),
        [h, b] = r.useState(!1),
        [x, C] = r.useState(!1),
        [v, T] = r.useState(!1);
    return (0, i.jsxs)(f.I, {
        transitionState: t,
        onClose: n,
        size: s,
        children: [
            (0, i.jsx)(O.x, {
                title: l,
                subtitle: c,
                alignCenter: u
            }),
            (0, i.jsx)(j.f, {
                controls: p
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
                        (0, i.jsx)(S.xJW, {
                            title: 'Header Title',
                            children: (0, i.jsx)(S.oil, {
                                onChange: o,
                                defaultValue: l
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
                                        value: p,
                                        onChange: (e, t) => g(t),
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
                                        value: v,
                                        onChange: (e, t) => T(t),
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
function ex(e) {
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
    return (0, i.jsxs)(x.Modal, {
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
function e_(e) {
    let { transitionState: t, onClose: n } = e;
    return (0, i.jsx)(x.Modal, {
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
function ej(e) {
    let { transitionState: t, onClose: s } = e,
        [a, l] = r.useState(0),
        o = r.useMemo(
            () =>
                0 === a
                    ? { src: M }
                    : 1 === a
                      ? { lottie: () => n.e('94792').then(n.t.bind(n, 972951, 19)) }
                      : 2 === a
                        ? {
                              type: S.AX$.LOOPING_VIDEO,
                              props: {
                                  src: U.Z,
                                  loopAt: 2.5
                              }
                          }
                        : void 0,
            [a]
        );
    return (0, i.jsx)(b.I, {
        transitionState: t,
        onClose: s,
        graphic: o,
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
        children: (0, i.jsx)(S.xJW, {
            title: 'Graphic Type',
            children: (0, i.jsx)(S.q4e, {
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
                        label: 'Looping Video',
                        value: 2
                    }
                ]
            })
        })
    });
}
function eE(e) {
    let { transitionState: t, onClose: n, modalCount: s = 1 } = e,
        [a, l] = r.useState('replace'),
        o = s < 3;
    return (0, i.jsx)(x.Modal, {
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
                              (0, S.h7j)((t) => (0, i.jsx)(eE, z(H({}, t), { modalCount: e })), { stackingBehavior: a });
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
function eO() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: B.section,
                children: [
                    (0, i.jsx)(S.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Modals (Void)'
                    }),
                    (0, i.jsx)(S.zxk, {
                        variant: 'primary',
                        text: 'Open modal',
                        onClick: () => {
                            (0, S.h7j)((e) => (0, i.jsx)(eg, H({}, e)));
                        }
                    }),
                    (0, i.jsx)(S.zxk, {
                        variant: 'primary',
                        text: 'Show Alert',
                        onClick: () => {
                            T.Z.show({
                                title: 'Alert',
                                body: 'This is an alert',
                                confirmText: 'Confirm Text',
                                cancelText: 'Cancel Text'
                            });
                        }
                    }),
                    (0, i.jsx)(S.zxk, {
                        variant: 'primary',
                        text: 'Open modal stacking demo',
                        onClick: () => {
                            (0, S.h7j)((e) => (0, i.jsx)(eh, H({}, e)));
                        }
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: B.section,
                children: [
                    (0, i.jsx)(S.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Modals (Mana)'
                    }),
                    (0, i.jsx)(S.zxk, {
                        variant: 'primary',
                        text: 'Open modal section visualizer',
                        onClick: () => {
                            (0, S.h7j)((e) => (0, i.jsx)(ef, H({}, e)));
                        }
                    }),
                    (0, i.jsx)(S.zxk, {
                        variant: 'primary',
                        text: 'Open demo modal',
                        onClick: () => {
                            (0, S.h7j)((e) => (0, i.jsx)(eb, H({}, e)));
                        }
                    }),
                    (0, i.jsx)(S.zxk, {
                        variant: 'primary',
                        text: 'Open sample invite modal',
                        onClick: () => {
                            (0, S.h7j)((e) => (0, i.jsx)(ex, H({}, e)));
                        }
                    }),
                    (0, i.jsx)(S.zxk, {
                        variant: 'primary',
                        text: 'Open sample alert modal',
                        onClick: () => {
                            (0, S.h7j)((e) => (0, i.jsx)(e_, H({}, e)));
                        }
                    }),
                    (0, i.jsx)(S.zxk, {
                        variant: 'primary',
                        text: 'Open expressive modal',
                        onClick: () => {
                            (0, S.h7j)((e) => (0, i.jsx)(ej, H({}, e)));
                        }
                    }),
                    (0, i.jsx)(S.zxk, {
                        variant: 'primary',
                        text: 'Open Mana modal stacking demo',
                        onClick: () => {
                            (0, S.h7j)((e) => (0, i.jsx)(eE, H({}, e)));
                        }
                    })
                ]
            })
        ]
    });
}
function eC() {
    let e = (0, c.e7)([N.Z], () => N.Z.gradientPreset);
    return (0, i.jsx)(S.f6W, {
        theme: L.BR.DARKER,
        disableAdaptiveTheme: !0,
        children: (t) =>
            (0, i.jsxs)('div', {
                className: a()(t, B.section),
                children: [
                    (0, i.jsx)(S.zxk, {
                        variant: 'secondary',
                        text: 'Button',
                        fullWidth: !0
                    }),
                    (0, i.jsx)(S.f6W, {
                        theme: L.BR.LIGHT,
                        children: (t) =>
                            (0, i.jsxs)('div', {
                                className: a()(t, B.section),
                                children: [
                                    (0, i.jsx)(S.zxk, {
                                        variant: 'secondary',
                                        text: 'Button',
                                        fullWidth: !0
                                    }),
                                    (0, i.jsx)(S.f6W, {
                                        theme: L.BR.DARKER,
                                        children: (e) =>
                                            (0, i.jsx)('div', {
                                                className: a()(e, B.section),
                                                children: (0, i.jsx)(S.zxk, {
                                                    variant: 'secondary',
                                                    text: 'Button',
                                                    fullWidth: !0
                                                })
                                            })
                                    }),
                                    (0, i.jsx)(S.f6W, {
                                        gradient: e,
                                        children: (e) =>
                                            (0, i.jsx)('div', {
                                                className: a()(e, B.section),
                                                children: (0, i.jsx)(S.zxk, {
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
