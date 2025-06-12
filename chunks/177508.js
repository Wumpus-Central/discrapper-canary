n.d(t, { Z: () => U }), n(704826), n(35282), n(388685), n(361932), n(187205);
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
    g = n(901919),
    p = n(279570),
    h = n(257465),
    f = n(82659),
    b = n(369585),
    _ = n(530392),
    x = n(37148),
    E = n(481060),
    j = n(240872),
    C = n(514361),
    O = n(705262),
    S = n(526156),
    v = n(706705),
    T = n(726985),
    I = n(981631),
    N = n(231338),
    y = n(426617);
function A(e) {
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
function P(e, t) {
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
function R() {
    return (0, i.jsxs)('div', {
        className: y.root,
        children: [(0, i.jsx)(G, {}), (0, i.jsx)(K, {}), (0, i.jsx)(q, {}), (0, i.jsx)(W, {}), (0, i.jsx)(Y, {}), (0, i.jsx)(z, {}), (0, i.jsx)(H, {}), (0, i.jsx)(et, {}), (0, i.jsx)(D, {}), (0, i.jsx)(en, {})]
    });
}
function D() {
    let e = Object.keys(E.DM8);
    return (0, i.jsxs)('div', {
        className: y.section,
        children: [
            (0, i.jsx)(E.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Notice'
            }),
            (0, i.jsx)(E.Kqy, {
                gap: 16,
                children: e.map((e) =>
                    (0, i.jsx)(
                        E.qXd,
                        {
                            color: E.DM8[e],
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
let Z = ['neutral', 'blue_new', 'blurple', 'green_new', 'red_new', 'teal_new', 'yellow_new', 'orange_new', 'pink', 'purple'],
    w = ['background-surface-highest', 'background-surface-higher', 'background-surface-high', 'background-base-low', 'background-base-lower', 'background-base-lowest'],
    k = ['', 'background-mod-subtle', 'background-mod-normal', 'background-mod-strong'],
    L = ['critical', 'warning', 'positive', 'info'],
    B = ['text-default', 'text-primary', 'text-secondary', 'text-tertiary', 'text-feedback-critical', 'text-feedback-warning', 'text-feedback-positive', 'text-feedback-info', 'premium-nitro-pink-text'];
function M() {
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(E.X6q, {
                variant: 'heading-xl/semibold',
                className: y.heading,
                children: 'Background Colors'
            }),
            w.map((e) =>
                (0, i.jsxs)(
                    'div',
                    {
                        className: y.palette,
                        style: {
                            backgroundColor: 'var(--'.concat(e, ')'),
                            padding: 24
                        },
                        children: [
                            (0, i.jsx)(E.Text, {
                                variant: 'text-md/medium',
                                children: e
                            }),
                            (0, i.jsx)('div', {
                                style: {
                                    display: 'grid',
                                    gap: 8,
                                    gridTemplateColumns: 'repeat(3, 1fr)'
                                },
                                children: k.map((e) =>
                                    (0, i.jsxs)(
                                        'div',
                                        {
                                            className: y.color,
                                            style: {
                                                padding: 16,
                                                background: 'var(--'.concat(e, ')')
                                            },
                                            children: [
                                                (0, i.jsx)(E.Text, {
                                                    variant: 'text-xs/semibold',
                                                    color: 'header-secondary',
                                                    children: e
                                                }),
                                                (0, i.jsx)('hr', { className: y.sectionDivider }),
                                                B.map((e) =>
                                                    (0, i.jsx)(
                                                        E.Text,
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
                            (0, i.jsx)('hr', { className: y.sectionDivider }),
                            (0, i.jsx)('div', {
                                style: {
                                    display: 'grid',
                                    gap: 8,
                                    gridTemplateColumns: 'repeat(3, 1fr)'
                                },
                                children: L.map((e) => {
                                    let t = 'var(--text-feedback-'.concat(e, ')');
                                    return (0, i.jsxs)(
                                        'div',
                                        {
                                            className: y.color,
                                            style: {
                                                padding: 16,
                                                background: 'var(--background-feedback-'.concat(e, ')')
                                            },
                                            children: [
                                                (0, i.jsx)(E.Text, {
                                                    variant: 'text-xs/semibold',
                                                    color: 'header-secondary'
                                                }),
                                                (0, i.jsxs)(E.Kqy, {
                                                    children: [
                                                        (0, i.jsxs)(E.Text, {
                                                            variant: 'text-xs/semibold',
                                                            style: { color: t },
                                                            children: ['background-feedback-', e]
                                                        }),
                                                        (0, i.jsx)(E.Text, {
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
            (0, i.jsx)(E.X6q, {
                variant: 'heading-xl/semibold',
                className: y.heading,
                children: 'Scales'
            }),
            Z.map((e) =>
                (0, i.jsxs)(
                    'div',
                    {
                        className: y.palette,
                        children: [
                            (0, i.jsx)(E.Text, {
                                variant: 'text-lg/semibold',
                                children: e
                            }),
                            (0, i.jsx)('div', {
                                className: y.colors,
                                children: Array.from({ length: 100 }, (t, n) =>
                                    (0, i.jsx)(
                                        'div',
                                        {
                                            className: y.color,
                                            style: { background: 'var(--'.concat(e.replace('_', '-'), '-').concat(n + 1, ')') },
                                            children: (0, i.jsx)(E.f6W, {
                                                theme: n < 50 ? 'light' : 'dark',
                                                children: (t) =>
                                                    (0, i.jsxs)(E.Text, {
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
function U() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(S.Z, {
                parentSetting: T.s6.DESIGN_SYSTEMS,
                settingsSection: I.oAB.DESIGN_SYSTEMS,
                tabs: [
                    {
                        title: 'Components',
                        component: () => (0, i.jsx)(R, {}),
                        setting: T.s6.DESIGN_SYSTEMS_COMPONENTS
                    },
                    {
                        title: 'Colors',
                        component: () => (0, i.jsx)(M, {}),
                        setting: T.s6.DESIGN_SYSTEMS_COLORS
                    },
                    {
                        title: 'Animations',
                        component: () => (0, i.jsx)(v.Z, {}),
                        setting: T.s6.ANIMATION_TESTING
                    }
                ]
            }),
            (0, i.jsx)('div', {
                className: y.themes,
                children: (0, i.jsx)(O.ZP, {
                    type: O.yH.SETTINGS,
                    children: (0, i.jsx)(O.ZP.Basic, { className: y.themeSelectionGroup })
                })
            })
        ]
    });
}
function V(e) {
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
            P(A({}, s), {
                submitting: n ? l : void 0,
                onClick: () => a(!l)
            })
        )
    );
}
function G() {
    let [e, t] = r.useState('md'),
        [n, s] = r.useState('start'),
        [l, o] = r.useState(!0),
        c = ['primary', 'secondary', 'tertiary', 'destructive-primary', 'destructive-secondary', 'active', 'overlay-primary', 'overlay-secondary'],
        p = [...c, 'expressive'].map((t) =>
            (0, i.jsx)(
                V,
                {
                    component: d.z,
                    variant: t,
                    text: ''.concat((0, a.capitalize)(t), ' ').concat(e.toUpperCase()),
                    size: e,
                    icon: 'none' !== n ? E.gw7 : void 0,
                    iconPosition: n,
                    showLoadingAnimation: l
                },
                t + e
            )
        ),
        h = c.map((t) =>
            (0, i.jsx)(
                V,
                {
                    component: m.h,
                    variant: t,
                    icon: E.gw7,
                    size: e,
                    'aria-label': ''.concat(t, ' ').concat(e),
                    showLoadingAnimation: l
                },
                t + e
            )
        ),
        f = ['primary', 'secondary', 'link', 'always-white', 'destructive'].map((e) =>
            (0, i.jsxs)(
                r.Fragment,
                {
                    children: [
                        (0, i.jsx)(g.Q, {
                            variant: e,
                            text: 'Internal link',
                            icon: 'none' !== n ? E.gw7 : void 0,
                            iconPosition: n
                        }),
                        (0, i.jsx)(g.Q, {
                            variant: e,
                            text: 'External link',
                            external: !0
                        })
                    ]
                },
                e
            )
        );
    return (0, i.jsxs)('div', {
        className: y.section,
        children: [
            (0, i.jsx)(E.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Buttons'
            }),
            (0, i.jsxs)(F, {
                title: 'Button Options',
                children: [
                    (0, i.jsx)(E.xJW, {
                        title: 'Button size',
                        children: (0, i.jsx)(E.FXm, {
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
                                },
                                {
                                    value: 'lg',
                                    name: 'Large'
                                }
                            ],
                            value: e
                        })
                    }),
                    (0, i.jsx)(E.xJW, {
                        title: 'Icon position',
                        children: (0, i.jsx)(E.FXm, {
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
                    (0, i.jsx)(E.xJW, {
                        title: 'Loading animation',
                        children: (0, i.jsx)(E.FXm, {
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
            (0, i.jsxs)(E.Kqy, {
                gap: 16,
                padding: { top: 16 },
                children: [
                    (0, i.jsx)(E.X6q, {
                        variant: 'heading-lg/semibold',
                        children: 'Button Groups'
                    }),
                    (0, i.jsx)(E.Text, {
                        variant: 'text-lg/medium',
                        children: 'Horizontal'
                    }),
                    (0, i.jsxs)(E.Kqy, {
                        gap: 16,
                        direction: 'horizontal',
                        children: [
                            (0, i.jsxs)(E.Kqy, {
                                gap: 16,
                                children: [
                                    (0, i.jsxs)(u.h, {
                                        size: e,
                                        children: [
                                            (0, i.jsx)(V, {
                                                component: d.z,
                                                variant: 'secondary',
                                                text: 'Cancel',
                                                showLoadingAnimation: l
                                            }),
                                            (0, i.jsx)(V, {
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
                                            (0, i.jsx)(V, {
                                                component: d.z,
                                                variant: 'primary',
                                                text: 'Submit',
                                                showLoadingAnimation: l
                                            }),
                                            (0, i.jsx)(V, {
                                                component: m.h,
                                                variant: 'secondary',
                                                icon: E.gw7,
                                                'aria-label': 'Clyde',
                                                showLoadingAnimation: l
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, i.jsx)(E.Kqy, {
                                gap: 16,
                                children: (0, i.jsxs)(u.h, {
                                    size: e,
                                    fullWidth: !0,
                                    children: [
                                        (0, i.jsx)(V, {
                                            component: d.z,
                                            variant: 'secondary',
                                            text: 'Cancel',
                                            showLoadingAnimation: l
                                        }),
                                        (0, i.jsx)(V, {
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
                    (0, i.jsx)(E.Text, {
                        variant: 'text-lg/medium',
                        children: 'Vertical'
                    }),
                    (0, i.jsxs)(E.Kqy, {
                        gap: 16,
                        direction: 'horizontal',
                        children: [
                            (0, i.jsx)(E.Kqy, {
                                gap: 16,
                                children: (0, i.jsxs)(u.h, {
                                    direction: 'vertical',
                                    size: e,
                                    children: [
                                        (0, i.jsx)(V, {
                                            component: d.z,
                                            variant: 'secondary',
                                            text: 'Cancel',
                                            showLoadingAnimation: l
                                        }),
                                        (0, i.jsx)(V, {
                                            component: d.z,
                                            variant: 'primary',
                                            text: 'Submit',
                                            showLoadingAnimation: l
                                        })
                                    ]
                                })
                            }),
                            (0, i.jsx)(E.Kqy, {
                                gap: 16,
                                children: (0, i.jsxs)(u.h, {
                                    fullWidth: !0,
                                    direction: 'vertical',
                                    size: e,
                                    children: [
                                        (0, i.jsx)(V, {
                                            component: d.z,
                                            variant: 'secondary',
                                            text: 'Cancel',
                                            showLoadingAnimation: l
                                        }),
                                        (0, i.jsx)(V, {
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
function F(e) {
    let { children: t, title: n } = e,
        [s, a] = r.useState(!1);
    return (0, i.jsxs)(E.Kqy, {
        direction: 'vertical',
        gap: 0,
        padding: 16,
        className: y.floatingControls,
        children: [
            (0, i.jsxs)(E.Kqy, {
                direction: 'horizontal',
                gap: 16,
                align: 'center',
                justify: 'space-between',
                children: [
                    (0, i.jsx)(E.X6q, {
                        variant: 'heading-lg/semibold',
                        children: n
                    }),
                    (0, i.jsx)(p.Q, {
                        icon: s ? E.hic : E.sXD,
                        onClick: () => a(!s),
                        pressed: s,
                        'aria-label': 'Show controls'
                    })
                ]
            }),
            (0, i.jsx)(E.Kqy, {
                gap: 16,
                className: l()(y.floatingControlsContent, { [y.floatingControlsContentHidden]: !s }),
                children: t
            })
        ]
    });
}
function H() {
    let [e, t] = r.useState('1');
    return (0, i.jsxs)('div', {
        className: y.section,
        children: [
            (0, i.jsx)(E.X6q, {
                variant: 'heading-xl/semibold',
                children: 'TabBar'
            }),
            (0, i.jsxs)(E.njP, {
                type: 'top',
                look: 'brand',
                selectedItem: e,
                onItemSelect: (e) => t(e),
                className: y.tabBar,
                children: [
                    (0, i.jsx)(E.njP.Item, {
                        id: '1',
                        children: 'Tab 1'
                    }),
                    (0, i.jsx)(E.njP.Item, {
                        id: '2',
                        children: 'Tab 2'
                    }),
                    (0, i.jsx)(E.njP.Item, {
                        id: '3',
                        children: 'Tab 3'
                    })
                ]
            }),
            (0, i.jsxs)(E.Text, {
                variant: 'text-md/medium',
                children: ['Selected tab: ', e]
            })
        ]
    });
}
function z() {
    let [e, t] = r.useState(1),
        [n, s] = r.useState(!1),
        [l, a] = r.useState(5),
        [o, c] = r.useState(!1),
        d = r.useRef(null);
    return (0, i.jsxs)('div', {
        className: y.section,
        children: [
            (0, i.jsx)(E.X6q, {
                variant: 'heading-xl/semibold',
                children: 'Context Menus'
            }),
            (0, i.jsx)('span', {
                children: (0, i.jsx)(E.yRy, {
                    targetElementRef: d,
                    shouldShow: o,
                    renderPopout: () =>
                        (0, i.jsxs)(E.v2r, {
                            navId: 'demo',
                            'aria-label': 'Demo Actions',
                            onClose: () => null,
                            onSelect: () => null,
                            children: [
                                (0, i.jsxs)(E.kSQ, {
                                    label: 'Basic items',
                                    children: [
                                        (0, i.jsx)(E.sNh, {
                                            id: 'first',
                                            label: 'An option'
                                        }),
                                        (0, i.jsx)(E.sNh, {
                                            id: 'second',
                                            label: 'An option with an icon',
                                            icon: E.kBi
                                        }),
                                        (0, i.jsxs)(E.sNh, {
                                            id: 'item-with-submenu',
                                            label: 'Item with submenu',
                                            children: [
                                                (0, i.jsx)(E.sNh, {
                                                    id: 'subitem-1',
                                                    label: 'Subitem 1'
                                                }),
                                                (0, i.jsx)(E.sNh, {
                                                    id: 'subitem-2',
                                                    label: 'Subitem 2'
                                                }),
                                                (0, i.jsx)(E.sNh, {
                                                    id: 'subitem-3',
                                                    label: 'Subitem 3'
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, i.jsxs)(E.kSQ, {
                                    label: 'Inputs',
                                    children: [
                                        (0, i.jsx)(E.S89, {
                                            id: 'checkable',
                                            label: 'Checkbox',
                                            checked: n,
                                            action: () => s(!n)
                                        }),
                                        (0, i.jsx)(E.k5B, {
                                            id: 'radio-one',
                                            group: 'a-group',
                                            label: 'Radio 1',
                                            action: () => t(1),
                                            checked: 1 === e
                                        }),
                                        (0, i.jsx)(E.k5B, {
                                            id: 'radio-two',
                                            group: 'a-group',
                                            label: 'Radio 2',
                                            action: () => t(2),
                                            checked: 2 === e
                                        }),
                                        (0, i.jsx)(E.k5B, {
                                            id: 'radio-three',
                                            group: 'a-group',
                                            label: 'Radio 3',
                                            action: () => t(3),
                                            checked: 3 === e
                                        }),
                                        (0, i.jsx)(E.II_, {
                                            id: 'slider',
                                            label: 'Slider',
                                            control: (e, t) =>
                                                (0, i.jsx)(E._wy, {
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
                                (0, i.jsx)(E.Clw, {}),
                                (0, i.jsx)(E.sNh, {
                                    id: 'danger',
                                    label: 'A destructive option',
                                    color: 'danger',
                                    icon: E.XHJ
                                })
                            ]
                        }),
                    children: () =>
                        (0, i.jsx)(E.zxk, {
                            buttonRef: d,
                            onClick: () => c(!o),
                            children: 'Toggle context menu'
                        })
                })
            })
        ]
    });
}
function Y() {
    return (0, i.jsxs)('div', {
        className: y.section,
        children: [
            (0, i.jsx)(E.X6q, {
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
                    (0, i.jsx)(E.ua7, {
                        text: "Here's top aligned tooltip text!",
                        position: 'top',
                        children: (e) => (0, i.jsx)(E.zxk, P(A({}, e), { children: 'Tooltip on the top' }))
                    }),
                    (0, i.jsx)(E.ua7, {
                        text: "Here's right aligned tooltip text!",
                        position: 'left',
                        children: (e) => (0, i.jsx)(E.zxk, P(A({}, e), { children: 'Tooltip on the left' }))
                    }),
                    (0, i.jsx)(E.ua7, {
                        text: "Here's bottom aligned tooltip text!",
                        position: 'bottom',
                        children: (e) => (0, i.jsx)(E.zxk, P(A({}, e), { children: 'Tooltip on the bottom' }))
                    }),
                    (0, i.jsx)(E.ua7, {
                        text: "Here's right aligned tooltip text!",
                        position: 'right',
                        children: (e) => (0, i.jsx)(E.zxk, P(A({}, e), { children: 'Tooltip on the right' }))
                    })
                ]
            }),
            (0, i.jsx)('div', {})
        ]
    });
}
function W() {
    let [e, t] = r.useState(!1),
        [n, s] = r.useState(!1),
        [l, a] = r.useState('auto');
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: y.section,
                children: [
                    (0, i.jsx)(E.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Checkboxes'
                    }),
                    (0, i.jsx)(E.XZJ, {
                        value: e,
                        onChange: (e, n) => t(n),
                        children: (0, i.jsx)(E.Text, {
                            variant: 'text-md/medium',
                            children: 'Checkbox input'
                        })
                    }),
                    (0, i.jsx)(E.XZJ, {
                        value: e,
                        onChange: (e, n) => t(n),
                        disabled: !0,
                        children: (0, i.jsx)(E.Text, {
                            variant: 'text-md/medium',
                            children: 'Disabled checkbox'
                        })
                    }),
                    (0, i.jsx)(E.XZJ, {
                        value: e,
                        onChange: (e, n) => t(n),
                        readOnly: !0,
                        children: (0, i.jsx)(E.Text, {
                            variant: 'text-md/medium',
                            children: 'Read-only checkbox'
                        })
                    }),
                    (0, i.jsx)(E.XZJ, {
                        value: e,
                        onChange: (e, n) => t(n),
                        type: E.XZJ.Types.ROW,
                        children: (0, i.jsx)(E.Text, {
                            variant: 'text-md/medium',
                            children: 'Checkbox row'
                        })
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: y.section,
                children: [
                    (0, i.jsx)(E.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Switches'
                    }),
                    (0, i.jsx)(E.j7V, {
                        hideBorder: !0,
                        value: n,
                        onChange: (e) => s(e),
                        children: 'FormSwitch with a label'
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: y.section,
                children: [
                    (0, i.jsx)(E.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Radio Buttons'
                    }),
                    (0, i.jsx)(E.xJW, {
                        children: (0, i.jsx)(E.FXm, {
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
                className: y.section,
                children: [
                    (0, i.jsx)(E.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Slider'
                    }),
                    (0, i.jsxs)('div', {
                        className: y.slider,
                        children: [
                            (0, i.jsx)(E.Text, {
                                variant: 'text-md/medium',
                                children: 'Standard slider'
                            }),
                            (0, i.jsx)(E.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                defaultValue: 50,
                                markers: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: y.slider,
                        children: [
                            (0, i.jsx)(E.Text, {
                                variant: 'text-md/medium',
                                children: 'Sticky markers'
                            }),
                            (0, i.jsx)(E.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                markers: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
                                stickToMarkers: !0
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: y.slider,
                        children: [
                            (0, i.jsx)(E.Text, {
                                variant: 'text-md/medium',
                                children: 'Non-uniform markers'
                            }),
                            (0, i.jsx)(E.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                markers: [0, 20, 50, 100],
                                equidistant: !1
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: y.slider,
                        children: [
                            (0, i.jsx)(E.Text, {
                                variant: 'text-md/medium',
                                children: 'Non-uniform equidistant markers'
                            }),
                            (0, i.jsx)(E.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50,
                                markers: [0, 20, 50, 100],
                                equidistant: !0
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: y.slider,
                        children: [
                            (0, i.jsx)(E.Text, {
                                variant: 'text-md/medium',
                                children: 'No markers'
                            }),
                            (0, i.jsx)(E.iRW, {
                                minValue: 0,
                                maxValue: 100,
                                initialValue: 50
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: y.slider,
                        children: [
                            (0, i.jsx)(E.Text, {
                                variant: 'text-md/medium',
                                children: 'Mini slider'
                            }),
                            (0, i.jsx)(E.iRW, {
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
function K() {
    let [e, t] = r.useState(null),
        [n, s] = r.useState(null),
        [l, a] = r.useState([]),
        [c, d] = r.useState([]),
        [u, m] = r.useState([]);
    return (0, i.jsxs)('div', {
        className: y.searchableSelectExamples,
        children: [
            (0, i.jsx)(E.X6q, {
                variant: 'heading-xl/semibold',
                children: 'SearchableSelect'
            }),
            (0, i.jsx)(E.VcW, {
                placeholder: 'Single select',
                value: e,
                onChange: (e) => t(e),
                options: o.G
            }),
            (0, i.jsx)(E.VcW, {
                placeholder: 'Single select (clearable)',
                clearable: !0,
                value: n,
                onChange: (e) => s(e),
                options: o.G
            }),
            (0, i.jsx)(E.VcW, {
                placeholder: 'Multi select',
                multi: !0,
                value: l,
                onChange: (e) => a(e),
                options: o.G
            }),
            (0, i.jsx)(E.VcW, {
                placeholder: 'Multi select (clearable)',
                multi: !0,
                clearable: !0,
                value: u,
                onChange: (e) => m(e),
                options: o.G
            }),
            (0, i.jsx)(E.VcW, {
                placeholder: 'Multi select (custom pills)',
                multi: !0,
                value: c,
                onChange: (e) => d(e),
                options: o.G,
                hidePills: !0,
                customPillContainerClassName: y.customPillContainer,
                renderCustomPill: (e) =>
                    (0, i.jsx)('div', {
                        style: {
                            padding: 8,
                            border: '1px solid var(--bg-brand)',
                            borderRadius: 8
                        },
                        children: (0, i.jsx)(E.Text, {
                            variant: 'text-md/bold',
                            children: e.label
                        })
                    })
            })
        ]
    });
}
function q() {
    let [e, t] = r.useState(''),
        [n, s] = r.useState(''),
        [l, a] = r.useState('');
    return (0, i.jsxs)('div', {
        className: y.section,
        children: [
            (0, i.jsx)(E.X6q, {
                variant: 'heading-xl/semibold',
                children: 'TextInput'
            }),
            (0, i.jsx)(E.xJW, {
                children: (0, i.jsx)(E.E1j, {
                    size: E.E1j.Sizes.MEDIUM,
                    placeholder: 'Search...',
                    onChange: (e) => a(e),
                    query: l,
                    onClear: () => a('')
                })
            }),
            (0, i.jsx)(E.xJW, {
                title: 'Disabled',
                disabled: !0,
                children: (0, i.jsx)(E.oil, {
                    placeholder: 'Disabled',
                    disabled: !0
                })
            }),
            (0, i.jsx)(E.xJW, {
                title: 'Error',
                children: (0, i.jsx)(E.oil, {
                    required: !0,
                    error: 'This must have a value'
                })
            }),
            (0, i.jsx)(E.xJW, {
                title: 'Error',
                children: (0, i.jsx)(E.oil, {
                    defaultValue: 'Not a valid value',
                    error: 'This has an error.'
                })
            }),
            (0, i.jsx)(E.xJW, {
                title: 'Read only',
                children: (0, i.jsx)(E.oil, {
                    value: 'Read-only, not-editable field',
                    editable: !1
                })
            }),
            (0, i.jsx)(E.xJW, {
                title: 'Input with a label',
                children: (0, i.jsx)(E.oil, {
                    placeholder: 'Real placeholder',
                    value: e,
                    onChange: t
                })
            }),
            (0, i.jsx)(E.xJW, {
                title: 'Text area',
                children: (0, i.jsx)(E.Kx8, {
                    placeholder: 'Text area placeholder',
                    showCharacterCount: !0,
                    value: n,
                    onChange: s
                })
            })
        ]
    });
}
function X(e) {
    let { transitionState: t } = e,
        [n, s] = r.useState(!1),
        [l, a] = r.useState(E.CgR.SMALL),
        [o, c] = r.useState(!1),
        d = n ? y.modalOutlines : '';
    return (0, i.jsxs)(E.Y0X, {
        transitionState: t,
        size: l,
        parentComponent: 'UserSettingsDesignSystem',
        children: [
            (0, i.jsx)(E.xBx, {
                className: d,
                children: (0, i.jsx)(E.X6q, {
                    variant: 'heading-xl/semibold',
                    children: 'Modal'
                })
            }),
            (0, i.jsx)(E.hzk, {
                className: d,
                children: (0, i.jsxs)(E.Kqy, {
                    gap: 16,
                    children: [
                        (0, i.jsx)(E.xJW, {
                            title: 'Modal Size',
                            children: (0, i.jsx)(E.q4e, {
                                value: l,
                                onChange: a,
                                options: Object.entries(E.CgR).map((e) => {
                                    let [t, n] = e;
                                    return {
                                        label: t,
                                        value: n
                                    };
                                })
                            })
                        }),
                        (0, i.jsx)(E.hjN, {
                            title: 'Options',
                            children: (0, i.jsxs)(E.Kqy, {
                                gap: 16,
                                children: [
                                    (0, i.jsx)(E.XZJ, {
                                        value: n,
                                        onChange: (e, t) => s(t),
                                        children: (0, i.jsx)(E.Text, {
                                            variant: 'text-md/medium',
                                            children: 'Show Section Outlines'
                                        })
                                    }),
                                    (0, i.jsx)(E.XZJ, {
                                        value: o,
                                        onChange: (e, t) => c(t),
                                        children: (0, i.jsx)(E.Text, {
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
            (0, i.jsx)(E.mzw, {
                className: d,
                children: (0, i.jsxs)(E.Kqy, {
                    direction: 'horizontal',
                    justify: 'end',
                    gap: 8,
                    children: [
                        o &&
                            (0, i.jsx)(E.zxk, {
                                color: E.zxk.Colors.PRIMARY,
                                look: E.zxk.Looks.FILLED,
                                children: 'Secondary Action'
                            }),
                        (0, i.jsx)(E.zxk, { children: 'Close' })
                    ]
                })
            })
        ]
    });
}
function Q(e) {
    let { transitionState: t, onClose: n } = e;
    function r(e) {
        let { children: t } = e;
        return (0, i.jsx)('div', {
            className: y.modalOutlines,
            style: { padding: '16px' },
            children: t
        });
    }
    return (0, i.jsxs)(h.IX, {
        transitionState: t,
        onClose: n,
        children: [
            (0, i.jsx)('div', {
                className: y.modalOutlines,
                children: (0, i.jsx)(x.x, {
                    title: 'Demo Modal',
                    body: 'The ModalHeader can have leading and trailing items on either side of the text',
                    leading: (0, i.jsx)(r, {}),
                    trailing: (0, i.jsx)(r, {})
                })
            }),
            (0, i.jsx)('div', {
                className: y.modalOutlines,
                children: (0, i.jsx)(_.h, {
                    controls: (0, i.jsx)(r, { children: 'This ModalContent renders any controls here' }),
                    children: (0, i.jsx)(r, { children: 'This is the main ModalContent. This area scrolls if there is enough content' })
                })
            }),
            (0, i.jsx)('div', {
                className: y.modalOutlines,
                children: (0, i.jsx)(_.m, { children: (0, i.jsx)(r, { children: 'This is the ModalFooter' }) })
            }),
            (0, i.jsx)('div', {
                className: y.modalOutlines,
                children: (0, i.jsx)(b.G, {
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
function J(e) {
    let { transitionState: t, onClose: n } = e,
        [s, l] = r.useState('md'),
        [a, o] = r.useState('Demo Modal'),
        [c, d] = r.useState('Header body copy'),
        [u, m] = r.useState(!1),
        [g, p] = r.useState(!1),
        [f, j] = r.useState(!1),
        [C, O] = r.useState(!1),
        [S, v] = r.useState(!1);
    return (0, i.jsxs)(h.IX, {
        transitionState: t,
        onClose: n,
        size: s,
        children: [
            (0, i.jsx)(x.x, {
                title: a,
                body: c,
                alignCenter: u
            }),
            (0, i.jsx)(_.h, {
                controls: g
                    ? (0, i.jsx)(E.E1j, {
                          size: E.E1j.Sizes.MEDIUM,
                          placeholder: 'Search',
                          onChange: () => null,
                          query: ''
                      })
                    : void 0,
                children: (0, i.jsxs)(E.Kqy, {
                    gap: 16,
                    children: [
                        (0, i.jsx)(E.xJW, {
                            title: 'Modal Size',
                            children: (0, i.jsx)(E.q4e, {
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
                        (0, i.jsx)(E.xJW, {
                            title: 'Header Title',
                            children: (0, i.jsx)(E.oil, {
                                onChange: o,
                                defaultValue: a
                            })
                        }),
                        (0, i.jsx)(E.xJW, {
                            title: 'Header body',
                            children: (0, i.jsx)(E.oil, {
                                onChange: d,
                                defaultValue: c
                            })
                        }),
                        (0, i.jsx)(E.xJW, {
                            title: 'Optional Content',
                            children: (0, i.jsxs)(E.Kqy, {
                                gap: 12,
                                children: [
                                    (0, i.jsx)(E.XZJ, {
                                        value: u,
                                        onChange: (e, t) => m(t),
                                        children: (0, i.jsx)(E.Text, {
                                            variant: 'text-md/medium',
                                            children: 'Header Align Center'
                                        })
                                    }),
                                    (0, i.jsx)(E.XZJ, {
                                        value: g,
                                        onChange: (e, t) => p(t),
                                        children: (0, i.jsx)(E.Text, {
                                            variant: 'text-md/medium',
                                            children: 'Show Search Input'
                                        })
                                    }),
                                    (0, i.jsx)(E.XZJ, {
                                        value: f,
                                        onChange: (e, t) => j(t),
                                        children: (0, i.jsx)(E.Text, {
                                            variant: 'text-md/medium',
                                            children: 'Show Preview Content'
                                        })
                                    }),
                                    (0, i.jsx)(E.XZJ, {
                                        value: C,
                                        onChange: (e, t) => O(t),
                                        children: (0, i.jsx)(E.Text, {
                                            variant: 'text-md/medium',
                                            children: 'Show Action Bar Leading Input'
                                        })
                                    }),
                                    (0, i.jsx)(E.XZJ, {
                                        value: S,
                                        onChange: (e, t) => v(t),
                                        children: (0, i.jsx)(E.Text, {
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
                (0, i.jsxs)(_.m, {
                    children: [
                        (0, i.jsx)(E.X6q, {
                            variant: 'heading-lg/semibold',
                            children: 'Celebration Station'
                        }),
                        (0, i.jsx)(E.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-secondary',
                            children: '32 Members \u25CF 19 Online'
                        })
                    ]
                }),
            (0, i.jsx)(b.G, {
                leading: C
                    ? (0, i.jsx)(E.XZJ, {
                          value: !1,
                          onChange: () => {},
                          children: (0, i.jsx)(E.Text, {
                              variant: 'text-sm/normal',
                              children: "Don't show this again?"
                          })
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
function $(e) {
    let { transitionState: t, onClose: n } = e;
    function s(e) {
        let { text: t } = e,
            [n, s] = r.useState(!1);
        return (0, i.jsx)('div', {
            style: { padding: '8px 0' },
            children: (0, i.jsx)(E.XZJ, {
                value: n,
                onChange: (e, t) => s(t),
                children: (0, i.jsx)(E.Text, {
                    variant: 'text-md/medium',
                    children: t
                })
            })
        });
    }
    return (0, i.jsxs)(f.u, {
        transitionState: t,
        onClose: n,
        size: 'md',
        title: 'Invite to server',
        input: (0, i.jsx)(E.E1j, {
            size: E.E1j.Sizes.MEDIUM,
            placeholder: 'Search',
            onChange: () => null,
            query: ''
        }),
        preview: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(E.X6q, {
                    variant: 'heading-lg/semibold',
                    children: 'Celebration Station'
                }),
                (0, i.jsx)(E.Text, {
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
                icon: E.kBi,
                iconPosition: 'end',
                onClick: n
            }
        ],
        children: [(0, i.jsx)(s, { text: 'John Doe' }), (0, i.jsx)(s, { text: 'Mark' }), (0, i.jsx)(s, { text: 'KawaiiHermit' }), (0, i.jsx)(s, { text: 'YurBruhGio' }), (0, i.jsx)(s, { text: 'John Doe' }), (0, i.jsx)(s, { text: 'Mark' }), (0, i.jsx)(s, { text: 'KawaiiHermit' }), (0, i.jsx)(s, { text: 'YurBruhGio' }), (0, i.jsx)(s, { text: 'John Doe' }), (0, i.jsx)(s, { text: 'Mark' }), (0, i.jsx)(s, { text: 'KawaiiHermit' }), (0, i.jsx)(s, { text: 'YurBruhGio' }), (0, i.jsx)(s, { text: 'John Doe' }), (0, i.jsx)(s, { text: 'Mark' }), (0, i.jsx)(s, { text: 'KawaiiHermit' }), (0, i.jsx)(s, { text: 'YurBruhGio' })]
    });
}
function ee(e) {
    let { transitionState: t, onClose: n } = e;
    return (0, i.jsx)(f.u, {
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
                variant: 'destructive-primary',
                text: 'Confirm',
                onClick: n
            }
        ]
    });
}
function et() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: y.section,
                children: [
                    (0, i.jsx)(E.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Modals (Void)'
                    }),
                    (0, i.jsx)(E.zxk, {
                        onClick: () => {
                            (0, E.h7j)((e) => (0, i.jsx)(X, A({}, e)));
                        },
                        children: 'Open modal'
                    }),
                    (0, i.jsx)(E.zxk, {
                        onClick: () => {
                            j.Z.show({
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
                className: y.section,
                children: [
                    (0, i.jsx)(E.X6q, {
                        variant: 'heading-xl/semibold',
                        children: 'Modals (Mana)'
                    }),
                    (0, i.jsx)(E.zxk, {
                        onClick: () => {
                            (0, E.h7j)((e) => (0, i.jsx)(Q, A({}, e)));
                        },
                        children: 'Open modal section visualizer'
                    }),
                    (0, i.jsx)(E.zxk, {
                        onClick: () => {
                            (0, E.h7j)((e) => (0, i.jsx)(J, A({}, e)));
                        },
                        children: 'Open demo modal'
                    }),
                    (0, i.jsx)(E.zxk, {
                        onClick: () => {
                            (0, E.h7j)((e) => (0, i.jsx)($, A({}, e)));
                        },
                        children: 'Open sample invite modal'
                    }),
                    (0, i.jsx)(E.zxk, {
                        onClick: () => {
                            (0, E.h7j)((e) => (0, i.jsx)(ee, A({}, e)));
                        },
                        children: 'Open sample alert modal'
                    })
                ]
            })
        ]
    });
}
function en() {
    let e = (0, c.e7)([C.Z], () => C.Z.gradientPreset);
    return (0, i.jsx)(E.f6W, {
        theme: N.BR.DARKER,
        disableAdaptiveTheme: !0,
        children: (t) =>
            (0, i.jsxs)('div', {
                className: l()(t, y.section),
                children: [
                    (0, i.jsx)(E.zxk, {
                        color: E.zxk.Colors.PRIMARY,
                        look: E.zxk.Looks.FILLED,
                        fullWidth: !0,
                        children: 'Button'
                    }),
                    (0, i.jsx)(E.f6W, {
                        theme: N.BR.LIGHT,
                        children: (t) =>
                            (0, i.jsxs)('div', {
                                className: l()(t, y.section),
                                children: [
                                    (0, i.jsx)(E.zxk, {
                                        color: E.zxk.Colors.PRIMARY,
                                        look: E.zxk.Looks.FILLED,
                                        fullWidth: !0,
                                        children: 'Button'
                                    }),
                                    (0, i.jsx)(E.f6W, {
                                        theme: N.BR.DARKER,
                                        children: (e) =>
                                            (0, i.jsx)('div', {
                                                className: l()(e, y.section),
                                                children: (0, i.jsx)(E.zxk, {
                                                    color: E.zxk.Colors.PRIMARY,
                                                    look: E.zxk.Looks.FILLED,
                                                    fullWidth: !0,
                                                    children: 'Button'
                                                })
                                            })
                                    }),
                                    (0, i.jsx)(E.f6W, {
                                        gradient: e,
                                        children: (e) =>
                                            (0, i.jsx)('div', {
                                                className: l()(e, y.section),
                                                children: (0, i.jsx)(E.zxk, {
                                                    color: E.zxk.Colors.PRIMARY,
                                                    look: E.zxk.Looks.FILLED,
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
