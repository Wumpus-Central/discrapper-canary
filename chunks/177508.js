n.d(t, { Z: () => G }), n(704826), n(35282), n(388685), n(361932), n(187205);
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
    g = n(179538),
    p = n(279570),
    h = n(257465),
    f = n(667202),
    b = n(82659),
    _ = n(369585),
    x = n(530392),
    E = n(37148),
    j = n(481060),
    C = n(240872),
    O = n(514361),
    S = n(705262),
    v = n(526156),
    T = n(706705),
    I = n(726985),
    N = n(981631),
    y = n(231338),
    A = n(426617),
    P = n(177475);
function R(e) {
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
function D(e, t) {
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
function Z() {
    return (0, i.jsxs)('div', {
        className: A.root,
        children: [(0, i.jsx)(H, {}), (0, i.jsx)(X, {}), (0, i.jsx)(Q, {}), (0, i.jsx)(q, {}), (0, i.jsx)(K, {}), (0, i.jsx)(W, {}), (0, i.jsx)(Y, {}), (0, i.jsx)(er, {}), (0, i.jsx)(w, {}), (0, i.jsx)(es, {})]
    });
}
function w() {
    let e = Object.keys(j.DM8);
    return (0, i.jsxs)('div', {
        className: A.section,
        children: [
            (0, i.jsx)(j.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Notice'
            }),
            (0, i.jsx)(j.Kqy, {
                gap: 16,
                children: e.map((e) =>
                    (0, i.jsx)(
                        j.qXd,
                        {
                            color: j.DM8[e],
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
let k = ['neutral', 'blue_new', 'blurple', 'green_new', 'red_new', 'teal_new', 'yellow_new', 'orange_new', 'pink', 'purple'],
    L = ['background-surface-highest', 'background-surface-higher', 'background-surface-high', 'background-base-low', 'background-base-lower', 'background-base-lowest'],
    B = ['', 'background-mod-subtle', 'background-mod-normal', 'background-mod-strong'],
    M = ['critical', 'warning', 'positive', 'info'],
    U = ['text-default', 'text-primary', 'text-secondary', 'text-tertiary', 'text-feedback-critical', 'text-feedback-warning', 'text-feedback-positive', 'text-feedback-info', 'premium-nitro-pink-text'];
function V() {
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(j.X6q, {
                variant: 'heading-xl/semibold',
                className: A.heading,
                children: 'Background Colors'
            }),
            L.map((e) =>
                (0, i.jsxs)(
                    'div',
                    {
                        className: A.palette,
                        style: {
                            backgroundColor: 'var(--'.concat(e, ')'),
                            padding: 24
                        },
                        children: [
                            (0, i.jsx)(j.Text, {
                                variant: 'text-md/medium',
                                children: e
                            }),
                            (0, i.jsx)('div', {
                                style: {
                                    display: 'grid',
                                    gap: 8,
                                    gridTemplateColumns: 'repeat(3, 1fr)'
                                },
                                children: B.map((e) =>
                                    (0, i.jsxs)(
                                        'div',
                                        {
                                            className: A.color,
                                            style: {
                                                padding: 16,
                                                background: 'var(--'.concat(e, ')')
                                            },
                                            children: [
                                                (0, i.jsx)(j.Text, {
                                                    variant: 'text-xs/semibold',
                                                    color: 'header-secondary',
                                                    children: e
                                                }),
                                                (0, i.jsx)('hr', { className: A.sectionDivider }),
                                                U.map((e) =>
                                                    (0, i.jsx)(
                                                        j.Text,
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
                            (0, i.jsx)('hr', { className: A.sectionDivider }),
                            (0, i.jsx)('div', {
                                style: {
                                    display: 'grid',
                                    gap: 8,
                                    gridTemplateColumns: 'repeat(3, 1fr)'
                                },
                                children: M.map((e) => {
                                    let t = 'var(--text-feedback-'.concat(e, ')');
                                    return (0, i.jsxs)(
                                        'div',
                                        {
                                            className: A.color,
                                            style: {
                                                padding: 16,
                                                background: 'var(--background-feedback-'.concat(e, ')')
                                            },
                                            children: [
                                                (0, i.jsx)(j.Text, {
                                                    variant: 'text-xs/semibold',
                                                    color: 'header-secondary'
                                                }),
                                                (0, i.jsxs)(j.Kqy, {
                                                    children: [
                                                        (0, i.jsxs)(j.Text, {
                                                            variant: 'text-xs/semibold',
                                                            style: { color: t },
                                                            children: ['background-feedback-', e]
                                                        }),
                                                        (0, i.jsx)(j.Text, {
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
            (0, i.jsx)(j.X6q, {
                variant: 'heading-xl/semibold',
                className: A.heading,
                children: 'Scales'
            }),
            k.map((e) =>
                (0, i.jsxs)(
                    'div',
                    {
                        className: A.palette,
                        children: [
                            (0, i.jsx)(j.Text, {
                                variant: 'text-lg/semibold',
                                children: e
                            }),
                            (0, i.jsx)('div', {
                                className: A.colors,
                                children: Array.from({ length: 100 }, (t, n) =>
                                    (0, i.jsx)(
                                        'div',
                                        {
                                            className: A.color,
                                            style: { background: 'var(--'.concat(e.replace('_', '-'), '-').concat(n + 1, ')') },
                                            children: (0, i.jsx)(j.f6W, {
                                                theme: n < 50 ? 'light' : 'dark',
                                                children: (t) =>
                                                    (0, i.jsxs)(j.Text, {
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
function G() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(v.Z, {
                parentSetting: I.s6.DESIGN_SYSTEMS,
                settingsSection: N.oAB.DESIGN_SYSTEMS,
                tabs: [
                    {
                        title: 'Components',
                        component: () => (0, i.jsx)(Z, {}),
                        setting: I.s6.DESIGN_SYSTEMS_COMPONENTS
                    },
                    {
                        title: 'Colors',
                        component: () => (0, i.jsx)(V, {}),
                        setting: I.s6.DESIGN_SYSTEMS_COLORS
                    },
                    {
                        title: 'Animations',
                        component: () => (0, i.jsx)(T.Z, {}),
                        setting: I.s6.ANIMATION_TESTING
                    }
                ]
            }),
            (0, i.jsx)('div', {
                className: A.themes,
                children: (0, i.jsx)(S.ZP, {
                    type: S.yH.SETTINGS,
                    children: (0, i.jsx)(S.ZP.Basic, { className: A.themeSelectionGroup })
                })
            })
        ]
    });
}
function F(e) {
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
                    for (i = 0; i < s.length; i++) (n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (i = 0; i < s.length; i++) (n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
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
            D(R({}, s), {
                loading: n ? l : void 0,
                onClick: () => a(!l)
            })
        )
    );
}
function H() {
    let [e, t] = r.useState('md'),
        [n, s] = r.useState('start'),
        [l, o] = r.useState(!0),
        c = ['primary', 'secondary', 'critical-primary', 'critical-secondary', 'active', 'overlay-primary', 'overlay-secondary'],
        p = [...c, 'expressive'].map((t) =>
            (0, i.jsx)(
                F,
                {
                    component: d.z,
                    variant: t,
                    text: ''.concat((0, a.capitalize)(t), ' ').concat(e.toUpperCase()),
                    size: e,
                    icon: 'none' !== n ? j.gw7 : void 0,
                    iconPosition: n,
                    showLoadingAnimation: l
                },
                t + e
            )
        ),
        h = [...c, 'tertiary'].map((t) =>
            (0, i.jsx)(
                F,
                {
                    component: m.h,
                    variant: t,
                    icon: j.gw7,
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
                    children: (0, i.jsx)(g.A, {
                        variant: e,
                        text: 'Text button'
                    })
                },
                e
            )
        );
    return (0, i.jsxs)('div', {
        className: A.section,
        children: [
            (0, i.jsx)(j.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Buttons'
            }),
            (0, i.jsxs)(z, {
                title: 'Button Options',
                children: [
                    (0, i.jsx)(j.xJW, {
                        title: 'Button size',
                        children: (0, i.jsx)(j.FXm, {
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
                    (0, i.jsx)(j.xJW, {
                        title: 'Icon position',
                        children: (0, i.jsx)(j.FXm, {
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
                    (0, i.jsx)(j.xJW, {
                        title: 'Loading animation',
                        children: (0, i.jsx)(j.FXm, {
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
                children: [f, p, h]
            }),
            (0, i.jsxs)(j.Kqy, {
                gap: 16,
                padding: { top: 16 },
                children: [
                    (0, i.jsx)(j.X6q, {
                        variant: 'heading-lg/semibold',
                        children: 'Button Groups'
                    }),
                    (0, i.jsx)(j.Text, {
                        variant: 'text-lg/medium',
                        children: 'Horizontal'
                    }),
                    (0, i.jsxs)(j.Kqy, {
                        gap: 16,
                        direction: 'horizontal',
                        children: [
                            (0, i.jsxs)(j.Kqy, {
                                gap: 16,
                                children: [
                                    (0, i.jsxs)(u.h, {
                                        size: e,
                                        children: [
                                            (0, i.jsx)(F, {
                                                component: d.z,
                                                variant: 'secondary',
                                                text: 'Cancel',
                                                showLoadingAnimation: l
                                            }),
                                            (0, i.jsx)(F, {
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
                                            (0, i.jsx)(F, {
                                                component: d.z,
                                                variant: 'primary',
                                                text: 'Submit',
                                                showLoadingAnimation: l
                                            }),
                                            (0, i.jsx)(F, {
                                                component: m.h,
                                                variant: 'secondary',
                                                icon: j.gw7,
                                                'aria-label': 'Clyde',
                                                showLoadingAnimation: l
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, i.jsx)(j.Kqy, {
                                gap: 16,
                                children: (0, i.jsxs)(u.h, {
                                    size: e,
                                    fullWidth: !0,
                                    children: [
                                        (0, i.jsx)(F, {
                                            component: d.z,
                                            variant: 'secondary',
                                            text: 'Cancel',
                                            showLoadingAnimation: l
                                        }),
                                        (0, i.jsx)(F, {
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
                    (0, i.jsx)(j.Text, {
                        variant: 'text-lg/medium',
                        children: 'Vertical'
                    }),
                    (0, i.jsxs)(j.Kqy, {
                        gap: 16,
                        direction: 'horizontal',
                        children: [
                            (0, i.jsx)(j.Kqy, {
                                gap: 16,
                                children: (0, i.jsxs)(u.h, {
                                    direction: 'vertical',
                                    size: e,
                                    children: [
                                        (0, i.jsx)(F, {
                                            component: d.z,
                                            variant: 'secondary',
                                            text: 'Cancel',
                                            showLoadingAnimation: l
                                        }),
                                        (0, i.jsx)(F, {
                                            component: d.z,
                                            variant: 'primary',
                                            text: 'Submit',
                                            showLoadingAnimation: l
                                        })
                                    ]
                                })
                            }),
                            (0, i.jsx)(j.Kqy, {
                                gap: 16,
                                children: (0, i.jsxs)(u.h, {
                                    fullWidth: !0,
                                    direction: 'vertical',
                                    size: e,
                                    children: [
                                        (0, i.jsx)(F, {
                                            component: d.z,
                                            variant: 'secondary',
                                            text: 'Cancel',
                                            showLoadingAnimation: l
                                        }),
                                        (0, i.jsx)(F, {
                                            component: d.z,
                                            variant: 'primary',
                                            text: 'Submit',
                                            showLoadingAnimation: l
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function z(e) {
    let { children: t, title: n } = e,
        [s, a] = r.useState(!1);
    return (0, i.jsxs)(j.Kqy, {
        direction: 'vertical',
        gap: 0,
        padding: 16,
        className: A.floatingControls,
        children: [
            (0, i.jsxs)(j.Kqy, {
                direction: 'horizontal',
                gap: 16,
                align: 'center',
                justify: 'space-between',
                children: [
                    (0, i.jsx)(j.X6q, {
                        variant: 'heading-lg/semibold',
                        children: n
                    }),
                    (0, i.jsx)(p.Q, {
                        icon: s ? j.hic : j.sXD,
                        onClick: () => a(!s),
                        pressed: s,
                        'aria-label': 'Show controls'
                    })
                ]
            }),
            (0, i.jsx)(j.Kqy, {
                gap: 16,
                className: l()(A.floatingControlsContent, { [A.floatingControlsContentHidden]: !s }),
                children: t
            })
        ]
    });
}
function Y() {
    let [e, t] = r.useState('1');
    return (0, i.jsxs)('div', {
        className: A.section,
        children: [
            (0, i.jsx)(j.X6q, {
                variant: 'heading-xl/semibold',
                children: 'TabBar'
            }),
            (0, i.jsxs)(j.njP, {
                type: 'top',
                look: 'brand',
                selectedItem: e,
                onItemSelect: (e) => t(e),
                className: A.tabBar,
                children: [
                    (0, i.jsx)(j.njP.Item, {
                        id: '1',
                        children: 'Tab 1'
                    }),
                    (0, i.jsx)(j.njP.Item, {
                        id: '2',
                        children: 'Tab 2'
                    }),
                    (0, i.jsx)(j.njP.Item, {
                        id: '3',
                        children: 'Tab 3'
                    })
                ]
            }),
            (0, i.jsxs)(j.Text, {
                variant: 'text-md/medium',
                children: ['Selected tab: ', e]
            })
        ]
    });
}
function W() {
    let [e, t] = r.useState(1),
        [n, s] = r.useState(!1),
        [l, a] = r.useState(5),
        [o, c] = r.useState(!1),
        d = r.useRef(null);
    return (0, i.jsxs)('div', {
        className: A.section,
        children: [
            (0, i.jsx)(j.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Context Menus'
            }),
            (0, i.jsx)('span', {
                children: (0, i.jsx)(j.yRy, {
                    targetElementRef: d,
                    shouldShow: o,
                    renderPopout: () =>
                        (0, i.jsxs)(j.v2r, {
                            navId: 'demo',
                            'aria-label': 'Demo Actions',
                            onClose: () => null,
                            onSelect: () => null,
                            children: [
                                (0, i.jsxs)(j.kSQ, {
                                    label: 'Basic items',
                                    children: [
                                        (0, i.jsx)(j.sNh, {
                                            id: 'first',
                                            label: 'An option'
                                        }),
                                        (0, i.jsx)(j.sNh, {
                                            id: 'second',
                                            label: 'An option with an icon',
                                            icon: j.kBi
                                        }),
                                        (0, i.jsxs)(j.sNh, {
                                            id: 'item-with-submenu',
                                            label: 'Item with submenu',
                                            children: [
                                                (0, i.jsx)(j.sNh, {
                                                    id: 'subitem-1',
                                                    label: 'Subitem 1'
                                                }),
                                                (0, i.jsx)(j.sNh, {
                                                    id: 'subitem-2',
                                                    label: 'Subitem 2'
                                                }),
                                                (0, i.jsx)(j.sNh, {
                                                    id: 'subitem-3',
                                                    label: 'Subitem 3'
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, i.jsxs)(j.kSQ, {
                                    label: 'Inputs',
                                    children: [
                                        (0, i.jsx)(j.S89, {
                                            id: 'checkable',
                                            label: 'Checkbox',
                                            checked: n,
                                            action: () => s(!n)
                                        }),
                                        (0, i.jsx)(j.k5B, {
                                            id: 'radio-one',
                                            group: 'a-group',
                                            label: 'Radio 1',
                                            action: () => t(1),
                                            checked: 1 === e
                                        }),
                                        (0, i.jsx)(j.k5B, {
                                            id: 'radio-two',
                                            group: 'a-group',
                                            label: 'Radio 2',
                                            action: () => t(2),
                                            checked: 2 === e
                                        }),
                                        (0, i.jsx)(j.k5B, {
                                            id: 'radio-three',
                                            group: 'a-group',
                                            label: 'Radio 3',
                                            action: () => t(3),
                                            checked: 3 === e
                                        }),
                                        (0, i.jsx)(j.II_, {
                                            id: 'slider',
                                            label: 'Slider',
                                            control: (e, t) =>
                                                (0, i.jsx)(j._wy, {
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
                                (0, i.jsx)(j.Clw, {}),
                                (0, i.jsx)(j.sNh, {
                                    id: 'danger',
                                    label: 'A destructive option',
                                    color: 'danger',
                                    icon: j.XHJ
                                })
                            ]
                        }),
                    children: () =>
                        (0, i.jsx)(j.zxk, {
                            buttonRef: d,
                            onClick: () => c(!o),
                            children: 'Toggle context menu'
                        })
                })
            })
        ]
    });
}
function K() {
    return (0, i.jsxs)('div', {
        className: A.section,
        children: [
            (0, i.jsx)(j.X6q, {
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
                    (0, i.jsx)(j.ua7, {
                        text: "Here's top aligned tooltip text!",
                        position: 'top',
                        children: (e) => (0, i.jsx)(j.zxk, D(R({}, e), { children: 'Tooltip on the top' }))
                    }),
                    (0, i.jsx)(j.ua7, {
                        text: "Here's right aligned tooltip text!",
                        position: 'left',
                        children: (e) => (0, i.jsx)(j.zxk, D(R({}, e), { children: 'Tooltip on the left' }))
                    }),
                    (0, i.jsx)(j.ua7, {
                        text: "Here's bottom aligned tooltip text!",
                        position: 'bottom',
                        children: (e) => (0, i.jsx)(j.zxk, D(R({}, e), { children: 'Tooltip on the bottom' }))
                    }),
                    (0, i.jsx)(j.ua7, {
                        text: "Here's right aligned tooltip text!",
                        position: 'right',
                        children: (e) => (0, i.jsx)(j.zxk, D(R({}, e), { children: 'Tooltip on the right' }))
                    })
                ]
            }),
            (0, i.jsx)('div', {})
        ]
    });
}
function q() {
    let [e, t] = r.useState(!1),
        [n, s] = r.useState(!1),
        [l, a] = r.useState('auto');
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: A.section,
                children: [
                    (0, i.jsx)(j.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Checkboxes'
                    }),
                    (0, i.jsx)(j.XZJ, {
                        value: e,
                        onChange: (e, n) => t(n),
                        children: (0, i.jsx)(j.Text, {
                            variant: 'text-md/medium',
                            children: 'Checkbox input'
                        })
                    }),
                    (0, i.jsx)(j.XZJ, {
                        value: e,
                        onChange: (e, n) => t(n),
                        disabled: !0,
                        children: (0, i.jsx)(j.Text, {
                            variant: 'text-md/medium',
                            children: 'Disabled checkbox'
                        })
                    }),
                    (0, i.jsx)(j.XZJ, {
                        value: e,
                        onChange: (e, n) => t(n),
                        readOnly: !0,
                        children: (0, i.jsx)(j.Text, {
                            variant: 'text-md/medium',
                            children: 'Read-only checkbox'
                        })
                    }),
                    (0, i.jsx)(j.XZJ, {
                        value: e,
                        onChange: (e, n) => t(n),
                        type: j.XZJ.Types.ROW,
                        children: (0, i.jsx)(j.Text, {
                            variant: 'text-md/medium',
                            children: 'Checkbox row'
                        })
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: A.section,
                children: [
                    (0, i.jsx)(j.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Switches'
                    }),
                    (0, i.jsx)(j.j7V, {
                        hideBorder: !0,
                        value: n,
                        onChange: (e) => s(e),
                        children: 'FormSwitch with a label'
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: A.section,
                children: [
                    (0, i.jsx)(j.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Radio Buttons'
                    }),
                    (0, i.jsx)(j.xJW, {
                        children: (0, i.jsx)(j.FXm, {
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
                className: A.section,
                children: [
                    (0, i.jsx)(j.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Slider'
                    }),
                    (0, i.jsxs)('div', {
                        className: A.slider,
                        children: [
                            (0, i.jsx)(j.Text, {
                                variant: 'text-md/medium',
                                children: 'Standard slider'
                            }),
                            (0, i.jsx)(j.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                defaultValue: 50,
                                markers: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: A.slider,
                        children: [
                            (0, i.jsx)(j.Text, {
                                variant: 'text-md/medium',
                                children: 'Sticky markers'
                            }),
                            (0, i.jsx)(j.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                markers: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
                                stickToMarkers: !0
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: A.slider,
                        children: [
                            (0, i.jsx)(j.Text, {
                                variant: 'text-md/medium',
                                children: 'Non-uniform markers'
                            }),
                            (0, i.jsx)(j.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                markers: [0, 20, 50, 100],
                                equidistant: !1
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: A.slider,
                        children: [
                            (0, i.jsx)(j.Text, {
                                variant: 'text-md/medium',
                                children: 'Non-uniform equidistant markers'
                            }),
                            (0, i.jsx)(j.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                markers: [0, 20, 50, 100],
                                equidistant: !0
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: A.slider,
                        children: [
                            (0, i.jsx)(j.Text, {
                                variant: 'text-md/medium',
                                children: 'No markers'
                            }),
                            (0, i.jsx)(j.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: A.slider,
                        children: [
                            (0, i.jsx)(j.Text, {
                                variant: 'text-md/medium',
                                children: 'Mini slider'
                            }),
                            (0, i.jsx)(j.iRW, {
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
function X() {
    let [e, t] = r.useState(null),
        [n, s] = r.useState(null),
        [l, a] = r.useState([]),
        [c, d] = r.useState([]),
        [u, m] = r.useState([]);
    return (0, i.jsxs)('div', {
        className: A.searchableSelectExamples,
        children: [
            (0, i.jsx)(j.X6q, {
                variant: 'heading-xl/semibold',
                children: 'SearchableSelect'
            }),
            (0, i.jsx)(j.VcW, {
                placeholder: 'Single select',
                value: e,
                onChange: (e) => t(e),
                options: o.G
            }),
            (0, i.jsx)(j.VcW, {
                placeholder: 'Single select (clearable)',
                clearable: !0,
                value: n,
                onChange: (e) => s(e),
                options: o.G
            }),
            (0, i.jsx)(j.VcW, {
                placeholder: 'Multi select',
                multi: !0,
                value: l,
                onChange: (e) => a(e),
                options: o.G
            }),
            (0, i.jsx)(j.VcW, {
                placeholder: 'Multi select (clearable)',
                multi: !0,
                clearable: !0,
                value: u,
                onChange: (e) => m(e),
                options: o.G
            }),
            (0, i.jsx)(j.VcW, {
                placeholder: 'Multi select (custom pills)',
                multi: !0,
                value: c,
                onChange: (e) => d(e),
                options: o.G,
                hidePills: !0,
                customPillContainerClassName: A.customPillContainer,
                renderCustomPill: (e) =>
                    (0, i.jsx)('div', {
                        style: {
                            padding: 8,
                            border: '1px solid var(--bg-brand)',
                            borderRadius: 8
                        },
                        children: (0, i.jsx)(j.Text, {
                            variant: 'text-md/bold',
                            children: e.label
                        })
                    })
            })
        ]
    });
}
function Q() {
    let [e, t] = r.useState(''),
        [n, s] = r.useState(''),
        [l, a] = r.useState('');
    return (0, i.jsxs)('div', {
        className: A.section,
        children: [
            (0, i.jsx)(j.X6q, {
                variant: 'heading-xl/semibold',
                children: 'TextInput'
            }),
            (0, i.jsx)(j.xJW, {
                children: (0, i.jsx)(j.E1j, {
                    size: j.E1j.Sizes.MEDIUM,
                    placeholder: 'Search...',
                    onChange: (e) => a(e),
                    query: l,
                    onClear: () => a('')
                })
            }),
            (0, i.jsx)(j.xJW, {
                title: 'Disabled',
                disabled: !0,
                children: (0, i.jsx)(j.oil, {
                    placeholder: 'Disabled',
                    disabled: !0
                })
            }),
            (0, i.jsx)(j.xJW, {
                title: 'Error',
                children: (0, i.jsx)(j.oil, {
                    required: !0,
                    error: 'This must have a value'
                })
            }),
            (0, i.jsx)(j.xJW, {
                title: 'Error',
                children: (0, i.jsx)(j.oil, {
                    defaultValue: 'Not a valid value',
                    error: 'This has an error.'
                })
            }),
            (0, i.jsx)(j.xJW, {
                title: 'Read only',
                children: (0, i.jsx)(j.oil, {
                    value: 'Read-only, not-editable field',
                    editable: !1
                })
            }),
            (0, i.jsx)(j.xJW, {
                title: 'Input with a label',
                children: (0, i.jsx)(j.oil, {
                    placeholder: 'Real placeholder',
                    value: e,
                    onChange: t
                })
            }),
            (0, i.jsx)(j.xJW, {
                title: 'Text area',
                children: (0, i.jsx)(j.Kx8, {
                    placeholder: 'Text area placeholder',
                    showCharacterCount: !0,
                    value: n,
                    onChange: s
                })
            })
        ]
    });
}
function J(e) {
    let { transitionState: t } = e,
        [n, s] = r.useState(!1),
        [l, a] = r.useState(j.CgR.SMALL),
        [o, c] = r.useState(!1),
        d = n ? A.modalOutlines : '';
    return (0, i.jsxs)(j.Y0X, {
        transitionState: t,
        size: l,
        parentComponent: 'UserSettingsDesignSystem',
        children: [
            (0, i.jsx)(j.xBx, {
                className: d,
                children: (0, i.jsx)(j.X6q, {
                    variant: 'heading-xl/semibold',
                    children: 'Modal'
                })
            }),
            (0, i.jsx)(j.hzk, {
                className: d,
                children: (0, i.jsxs)(j.Kqy, {
                    gap: 16,
                    children: [
                        (0, i.jsx)(j.xJW, {
                            title: 'Modal Size',
                            children: (0, i.jsx)(j.q4e, {
                                value: l,
                                onChange: a,
                                options: Object.entries(j.CgR).map((e) => {
                                    let [t, n] = e;
                                    return {
                                        label: t,
                                        value: n
                                    };
                                })
                            })
                        }),
                        (0, i.jsx)(j.hjN, {
                            title: 'Options',
                            children: (0, i.jsxs)(j.Kqy, {
                                gap: 16,
                                children: [
                                    (0, i.jsx)(j.XZJ, {
                                        value: n,
                                        onChange: (e, t) => s(t),
                                        children: (0, i.jsx)(j.Text, {
                                            variant: 'text-md/medium',
                                            children: 'Show Section Outlines'
                                        })
                                    }),
                                    (0, i.jsx)(j.XZJ, {
                                        value: o,
                                        onChange: (e, t) => c(t),
                                        children: (0, i.jsx)(j.Text, {
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
            (0, i.jsx)(j.mzw, {
                className: d,
                children: (0, i.jsxs)(j.Kqy, {
                    direction: 'horizontal',
                    justify: 'end',
                    gap: 8,
                    children: [
                        o &&
                            (0, i.jsx)(j.zxk, {
                                color: j.zxk.Colors.PRIMARY,
                                look: j.zxk.Looks.FILLED,
                                children: 'Secondary Action'
                            }),
                        (0, i.jsx)(j.zxk, { children: 'Close' })
                    ]
                })
            })
        ]
    });
}
function $(e) {
    let { transitionState: t, onClose: n } = e;
    function r(e) {
        let { children: t } = e;
        return (0, i.jsx)('div', {
            className: A.modalOutlines,
            style: { padding: '24px' },
            children: t
        });
    }
    return (0, i.jsxs)(h.IX, {
        transitionState: t,
        onClose: n,
        children: [
            (0, i.jsx)('div', {
                className: A.modalOutlines,
                children: (0, i.jsx)(E.x, {
                    title: 'Demo Modal',
                    body: 'The ModalHeader can have leading and trailing items on either side of the text',
                    leading: (0, i.jsx)(r, {}),
                    trailing: (0, i.jsx)(r, {})
                })
            }),
            (0, i.jsx)('div', {
                className: A.modalOutlines,
                children: (0, i.jsx)(x.h, {
                    controls: (0, i.jsx)(r, { children: 'This ModalContent renders any controls here' }),
                    children: (0, i.jsx)(r, { children: 'This is the main ModalContent. This area scrolls if there is enough content' })
                })
            }),
            (0, i.jsx)('div', {
                className: A.modalOutlines,
                children: (0, i.jsx)(x.m, { children: (0, i.jsx)(r, { children: 'This is the ModalFooter' }) })
            }),
            (0, i.jsx)('div', {
                className: A.modalOutlines,
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
function ee(e) {
    let { transitionState: t, onClose: n } = e,
        [s, l] = r.useState('md'),
        [a, o] = r.useState('Demo Modal'),
        [c, d] = r.useState('Header body copy'),
        [u, m] = r.useState(!1),
        [g, p] = r.useState(!1),
        [f, b] = r.useState(!1),
        [C, O] = r.useState(!1),
        [S, v] = r.useState(!1);
    return (0, i.jsxs)(h.IX, {
        transitionState: t,
        onClose: n,
        size: s,
        children: [
            (0, i.jsx)(E.x, {
                title: a,
                body: c,
                alignCenter: u
            }),
            (0, i.jsx)(x.h, {
                controls: g
                    ? (0, i.jsx)(j.E1j, {
                          size: j.E1j.Sizes.MEDIUM,
                          placeholder: 'Search',
                          onChange: () => null,
                          query: ''
                      })
                    : void 0,
                children: (0, i.jsxs)(j.Kqy, {
                    gap: 16,
                    children: [
                        (0, i.jsx)(j.xJW, {
                            title: 'Modal Size',
                            children: (0, i.jsx)(j.q4e, {
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
                        (0, i.jsx)(j.xJW, {
                            title: 'Header Title',
                            children: (0, i.jsx)(j.oil, {
                                onChange: o,
                                defaultValue: a
                            })
                        }),
                        (0, i.jsx)(j.xJW, {
                            title: 'Header body',
                            children: (0, i.jsx)(j.oil, {
                                onChange: d,
                                defaultValue: c
                            })
                        }),
                        (0, i.jsx)(j.xJW, {
                            title: 'Optional Content',
                            children: (0, i.jsxs)(j.Kqy, {
                                gap: 12,
                                children: [
                                    (0, i.jsx)(j.XZJ, {
                                        value: u,
                                        onChange: (e, t) => m(t),
                                        children: (0, i.jsx)(j.Text, {
                                            variant: 'text-md/medium',
                                            children: 'Header Align Center'
                                        })
                                    }),
                                    (0, i.jsx)(j.XZJ, {
                                        value: g,
                                        onChange: (e, t) => p(t),
                                        children: (0, i.jsx)(j.Text, {
                                            variant: 'text-md/medium',
                                            children: 'Show Search Input'
                                        })
                                    }),
                                    (0, i.jsx)(j.XZJ, {
                                        value: f,
                                        onChange: (e, t) => b(t),
                                        children: (0, i.jsx)(j.Text, {
                                            variant: 'text-md/medium',
                                            children: 'Show Preview Content'
                                        })
                                    }),
                                    (0, i.jsx)(j.XZJ, {
                                        value: C,
                                        onChange: (e, t) => O(t),
                                        children: (0, i.jsx)(j.Text, {
                                            variant: 'text-md/medium',
                                            children: 'Show Action Bar Leading Input'
                                        })
                                    }),
                                    (0, i.jsx)(j.XZJ, {
                                        value: S,
                                        onChange: (e, t) => v(t),
                                        children: (0, i.jsx)(j.Text, {
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
            f &&
                (0, i.jsxs)(x.m, {
                    children: [
                        (0, i.jsx)(j.X6q, {
                            variant: 'heading-lg/semibold',
                            children: 'Celebration Station'
                        }),
                        (0, i.jsx)(j.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-secondary',
                            children: '32 Members \u25CF 19 Online'
                        })
                    ]
                }),
            (0, i.jsx)(_.G, {
                leading: C
                    ? (0, i.jsx)(_.B, {
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
function et(e) {
    let { transitionState: t, onClose: n } = e;
    function s(e) {
        let { text: t } = e,
            [n, s] = r.useState(!1);
        return (0, i.jsx)('div', {
            style: { padding: '8px 0' },
            children: (0, i.jsx)(j.XZJ, {
                value: n,
                onChange: (e, t) => s(t),
                children: (0, i.jsx)(j.Text, {
                    variant: 'text-md/medium',
                    children: t
                })
            })
        });
    }
    return (0, i.jsxs)(b.u, {
        transitionState: t,
        onClose: n,
        size: 'md',
        title: 'Invite to server',
        input: (0, i.jsx)(j.E1j, {
            size: j.E1j.Sizes.MEDIUM,
            placeholder: 'Search',
            onChange: () => null,
            query: ''
        }),
        preview: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(j.X6q, {
                    variant: 'heading-lg/semibold',
                    children: 'Celebration Station'
                }),
                (0, i.jsx)(j.Text, {
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
                icon: j.kBi,
                iconPosition: 'end',
                onClick: n
            }
        ],
        children: [(0, i.jsx)(s, { text: 'John Doe' }), (0, i.jsx)(s, { text: 'Mark' }), (0, i.jsx)(s, { text: 'KawaiiHermit' }), (0, i.jsx)(s, { text: 'YurBruhGio' }), (0, i.jsx)(s, { text: 'John Doe' }), (0, i.jsx)(s, { text: 'Mark' }), (0, i.jsx)(s, { text: 'KawaiiHermit' }), (0, i.jsx)(s, { text: 'YurBruhGio' }), (0, i.jsx)(s, { text: 'John Doe' }), (0, i.jsx)(s, { text: 'Mark' }), (0, i.jsx)(s, { text: 'KawaiiHermit' }), (0, i.jsx)(s, { text: 'YurBruhGio' }), (0, i.jsx)(s, { text: 'John Doe' }), (0, i.jsx)(s, { text: 'Mark' }), (0, i.jsx)(s, { text: 'KawaiiHermit' }), (0, i.jsx)(s, { text: 'YurBruhGio' })]
    });
}
function en(e) {
    let { transitionState: t, onClose: n } = e;
    return (0, i.jsx)(b.u, {
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
function ei(e) {
    let { transitionState: t, onClose: n } = e;
    return (0, i.jsx)(f.I, {
        transitionState: t,
        onClose: n,
        image: P,
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
function er() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: A.section,
                children: [
                    (0, i.jsx)(j.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Modals (Void)'
                    }),
                    (0, i.jsx)(j.zxk, {
                        onClick: () => {
                            (0, j.h7j)((e) => (0, i.jsx)(J, R({}, e)));
                        },
                        children: 'Open modal'
                    }),
                    (0, i.jsx)(j.zxk, {
                        onClick: () => {
                            C.Z.show({
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
                className: A.section,
                children: [
                    (0, i.jsx)(j.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Modals (Mana)'
                    }),
                    (0, i.jsx)(j.zxk, {
                        onClick: () => {
                            (0, j.h7j)((e) => (0, i.jsx)($, R({}, e)));
                        },
                        children: 'Open modal section visualizer'
                    }),
                    (0, i.jsx)(j.zxk, {
                        onClick: () => {
                            (0, j.h7j)((e) => (0, i.jsx)(ee, R({}, e)));
                        },
                        children: 'Open demo modal'
                    }),
                    (0, i.jsx)(j.zxk, {
                        onClick: () => {
                            (0, j.h7j)((e) => (0, i.jsx)(et, R({}, e)));
                        },
                        children: 'Open sample invite modal'
                    }),
                    (0, i.jsx)(j.zxk, {
                        onClick: () => {
                            (0, j.h7j)((e) => (0, i.jsx)(en, R({}, e)));
                        },
                        children: 'Open sample alert modal'
                    }),
                    (0, i.jsx)(j.zxk, {
                        onClick: () => {
                            (0, j.h7j)((e) => (0, i.jsx)(ei, R({}, e)));
                        },
                        children: 'Open expressive modal'
                    })
                ]
            })
        ]
    });
}
function es() {
    let e = (0, c.e7)([O.Z], () => O.Z.gradientPreset);
    return (0, i.jsx)(j.f6W, {
        theme: y.BR.DARKER,
        disableAdaptiveTheme: !0,
        children: (t) =>
            (0, i.jsxs)('div', {
                className: l()(t, A.section),
                children: [
                    (0, i.jsx)(j.zxk, {
                        color: j.zxk.Colors.PRIMARY,
                        look: j.zxk.Looks.FILLED,
                        fullWidth: !0,
                        children: 'Button'
                    }),
                    (0, i.jsx)(j.f6W, {
                        theme: y.BR.LIGHT,
                        children: (t) =>
                            (0, i.jsxs)('div', {
                                className: l()(t, A.section),
                                children: [
                                    (0, i.jsx)(j.zxk, {
                                        color: j.zxk.Colors.PRIMARY,
                                        look: j.zxk.Looks.FILLED,
                                        fullWidth: !0,
                                        children: 'Button'
                                    }),
                                    (0, i.jsx)(j.f6W, {
                                        theme: y.BR.DARKER,
                                        children: (e) =>
                                            (0, i.jsx)('div', {
                                                className: l()(e, A.section),
                                                children: (0, i.jsx)(j.zxk, {
                                                    color: j.zxk.Colors.PRIMARY,
                                                    look: j.zxk.Looks.FILLED,
                                                    fullWidth: !0,
                                                    children: 'Button'
                                                })
                                            })
                                    }),
                                    (0, i.jsx)(j.f6W, {
                                        gradient: e,
                                        children: (e) =>
                                            (0, i.jsx)('div', {
                                                className: l()(e, A.section),
                                                children: (0, i.jsx)(j.zxk, {
                                                    color: j.zxk.Colors.PRIMARY,
                                                    look: j.zxk.Looks.FILLED,
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
