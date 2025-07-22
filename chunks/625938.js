(n.d(t, { v: () => Z }), n(388685), n(539854));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(392711),
    s = n.n(o),
    c = n(442837),
    u = n(704215),
    d = n(481060),
    p = n(584973),
    h = n(377171),
    f = n(243778),
    m = n(594174),
    g = n(768581),
    b = n(906605),
    _ = n(106301),
    y = n(833858),
    C = n(866071),
    x = n(223135),
    v = n(981631),
    j = n(921944),
    O = n(231338),
    E = n(388032),
    S = n(786476);
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
let P = (e) => {
        let { style: t, className: n, name: i, icon: l } = e;
        return (0, r.jsx)(d.ua7, {
            text: i,
            children: (e) => {
                var i, o;
                return (0, r.jsx)(
                    'div',
                    ((i = I(
                        {
                            className: a()(n, S.iconWidget),
                            style: t
                        },
                        e
                    )),
                    (o = o = { children: null != l && l }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(o)).forEach(function (e) {
                              Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e));
                          }),
                    i)
                );
            }
        });
    },
    Z = (e) => {
        let { currentStatus: t, channel: l } = e,
            o = i.useRef(_.Z.getRecentCustomStatuses()),
            [Z, T] = i.useState(!1),
            N = (0, y.V)(),
            [A, w] = i.useState(null != t ? t : null),
            R = (0, c.e7)([m.default], () => m.default.getCurrentUser()),
            M = i.useMemo(() => [], []),
            D = i.useRef(null).current;
        i.useEffect(
            () => (
                Z || M.push(u.z.HANG_STATUS_NEW_BADGE),
                () => {
                    Z && (null == D || D(j.L.PRIMARY));
                }
            ),
            [Z, M, D]
        );
        let k = (e, t) => {
                (e.stopPropagation(), (0, b.Zx)(t, !0), T(!0));
            },
            L = (e, t) => {
                (e.stopPropagation(), (0, b._s)(t.status, t.emoji, !0), T(!0));
            },
            U = i.useCallback((e) => {
                (e.stopPropagation(), (0, b.Sc)(!0));
            }, []),
            B = (e) => {
                (e.stopPropagation(),
                    (0, d.ZDy)(async () => {
                        let { default: e } = await n.e('1631').then(n.bind(n, 333541));
                        return (t) => (0, r.jsx)(e, I({}, t));
                    }),
                    T(!0));
            },
            F = i.useCallback((e) => {
                w({
                    type: v.IIU.HANG_STATUS,
                    name: 'Hang Status',
                    state: e
                });
            }, []),
            H = i.useCallback((e) => {
                w({
                    type: v.IIU.HANG_STATUS,
                    name: 'Hang Status',
                    state: O.tN.CUSTOM,
                    details: e.status,
                    emoji: e.emoji
                });
            }, []);
        return (0, r.jsx)(f.ZP, {
            contentTypes: M,
            children: (e) => {
                let { visibleContent: n, markAsDismissed: i } = e;
                return (
                    (D = i),
                    (0, r.jsxs)('div', {
                        className: S.container,
                        children: [
                            n === u.z.HANG_STATUS_NEW_BADGE &&
                                (0, r.jsxs)('div', {
                                    className: S.onboarding,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: S.title,
                                            children: [
                                                (0, r.jsx)(d.Text, {
                                                    variant: 'text-md/semibold',
                                                    color: 'header-primary',
                                                    children: E.intl.string(E.t['8ka8lp'])
                                                }),
                                                (0, r.jsx)(d.IGR, {
                                                    text: E.intl.string(E.t.oW0eUV),
                                                    color: h.Z.BG_BRAND
                                                })
                                            ]
                                        }),
                                        (0, r.jsx)(d.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'text-muted',
                                            className: S.helpText,
                                            children: E.intl.string(E.t.GFo2Gh)
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: S.iconGroup,
                                            children: [
                                                null != R &&
                                                    (0, r.jsxs)('div', {
                                                        className: S.avatarWrapper,
                                                        children: [
                                                            (0, r.jsx)(d.qEK, {
                                                                className: S.avatar,
                                                                size: d.EFr.SIZE_40,
                                                                src: (0, g.ov)(R),
                                                                'aria-hidden': !0
                                                            }),
                                                            (0, r.jsx)('div', { className: S.outline })
                                                        ]
                                                    }),
                                                (0, r.jsx)(x.Z, {
                                                    className: S.statusIcon,
                                                    hangStatusActivity: A
                                                })
                                            ]
                                        })
                                    ]
                                }),
                            (0, r.jsxs)('div', {
                                className: S.options,
                                children: [
                                    (0, r.jsxs)('div', {
                                        className: S.iconsContainer,
                                        children: [
                                            Object.entries(N).map((e) => {
                                                let [n, i] = e;
                                                return (0, r.jsx)(
                                                    d.P3F,
                                                    {
                                                        'aria-label': i.title,
                                                        onMouseEnter: () => F(n),
                                                        onClick: (e) => k(e, n),
                                                        children: (0, r.jsx)(P, {
                                                            className: a()(S.iconWidget, { [S.selectedWidget]: n === (null == t ? void 0 : t.state) }),
                                                            name: i.title,
                                                            icon: (0, r.jsx)('img', {
                                                                src: i.icon,
                                                                alt: '',
                                                                className: S.icon
                                                            }),
                                                            style: n === (null == t ? void 0 : t.state) ? { backgroundColor: null != i.color ? i.color : void 0 } : {}
                                                        })
                                                    },
                                                    n
                                                );
                                            }),
                                            (0, r.jsx)(d.P3F, {
                                                'aria-label': E.intl.string(E.t.S90Fub),
                                                onClick: U,
                                                onMouseEnter: () => w(null),
                                                children: (0, r.jsx)(P, {
                                                    className: S.optionButton,
                                                    name: E.intl.string(E.t.S90Fub),
                                                    icon: (0, r.jsx)(d.t6m, {
                                                        size: 'md',
                                                        color: 'currentColor',
                                                        className: S.editIcon,
                                                        colorClass: S.editIconColor
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    (0, r.jsx)('div', { className: S.divider }),
                                    (0, r.jsxs)('div', {
                                        className: S.iconsContainer,
                                        children: [
                                            o.current.map((e, n) => {
                                                let i = e.status === (null == t ? void 0 : t.details) && s().isEqual(e.emoji, null == t ? void 0 : t.emoji),
                                                    o = null != e.emoji && !(0, C.K)(e.emoji, l);
                                                return (0, r.jsxs)(
                                                    d.P3F,
                                                    {
                                                        'aria-label': e.status,
                                                        onMouseEnter: () => H(e),
                                                        onClick: o ? void 0 : (t) => L(t, e),
                                                        className: S.statusOptionContainer,
                                                        children: [
                                                            (0, r.jsx)(P, {
                                                                className: a()(S.iconWidget, { [S.selectedWidget]: i }),
                                                                name: e.status,
                                                                icon:
                                                                    null != e.emoji
                                                                        ? (0, r.jsx)(p.Z, {
                                                                              className: S.customIcon,
                                                                              emoji: e.emoji,
                                                                              hideTooltip: !0
                                                                          })
                                                                        : null,
                                                                style: i ? { backgroundColor: '#7174B7B3' } : { backgroundColor: '#6466914D' }
                                                            }),
                                                            o
                                                                ? (0, r.jsx)('div', {
                                                                      className: S.emojiLockIconContainer,
                                                                      children: (0, r.jsx)(d.mBM, {
                                                                          size: 'xs',
                                                                          color: 'currentColor',
                                                                          className: S.emojiLockIcon
                                                                      })
                                                                  })
                                                                : null
                                                        ]
                                                    },
                                                    'custom-status-'.concat(n)
                                                );
                                            }),
                                            o.current.length > 0
                                                ? (0, r.jsx)(
                                                      d.P3F,
                                                      {
                                                          'aria-label': null != t ? E.intl.string(E.t.IN2LTk) : E.intl.string(E.t.UDg0qK),
                                                          onClick: B,
                                                          children: (0, r.jsx)(P, {
                                                              className: S.optionButton,
                                                              name: null != t ? E.intl.string(E.t.IN2LTk) : E.intl.string(E.t.UDg0qK),
                                                              icon: (0, r.jsx)(d.vdY, {
                                                                  size: 'custom',
                                                                  color: 'currentColor',
                                                                  width: 20,
                                                                  height: 20,
                                                                  colorClass: S.editIconColor
                                                              })
                                                          })
                                                      },
                                                      'custom-status-edit'
                                                  )
                                                : (0, r.jsxs)(
                                                      d.P3F,
                                                      {
                                                          'aria-label': E.intl.string(E.t.UDg0qK),
                                                          onClick: B,
                                                          className: S.setCustomButton,
                                                          children: [
                                                              (0, r.jsx)(d.vdY, {
                                                                  size: 'xs',
                                                                  color: 'currentColor',
                                                                  className: S.editIcon,
                                                                  colorClass: S.editIconColor
                                                              }),
                                                              (0, r.jsx)(d.Text, {
                                                                  variant: 'text-xs/medium',
                                                                  color: 'interactive-active',
                                                                  children: E.intl.string(E.t.UDg0qK)
                                                              })
                                                          ]
                                                      },
                                                      'custom-status-edit-full'
                                                  )
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                );
            }
        });
    };
