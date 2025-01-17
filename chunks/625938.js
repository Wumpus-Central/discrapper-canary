n.d(t, {
    y: function () {
        return N;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(392711),
    o = n.n(s),
    c = n(442837),
    d = n(704215),
    u = n(481060),
    h = n(788307),
    p = n(605236),
    m = n(594174),
    f = n(768581),
    g = n(906605),
    C = n(106301),
    x = n(833858),
    v = n(866071),
    _ = n(223135),
    I = n(981631),
    E = n(231338),
    b = n(388032),
    Z = n(304066);
let S = (e) => {
        let { style: t, className: n, name: l, icon: r } = e;
        return (0, i.jsx)(u.Tooltip, {
            text: l,
            children: (e) =>
                (0, i.jsx)('div', {
                    className: a()(n, Z.iconWidget),
                    style: t,
                    ...e,
                    children: null != r && r
                })
        });
    },
    N = (e) => {
        let { currentStatus: t, channel: r } = e,
            s = l.useRef(C.Z.getRecentCustomStatuses()),
            N = l.useRef((0, p.un)(d.z.HANG_STATUS_NEW_BADGE)).current,
            T = (0, x.V)(),
            [j, A] = l.useState(null != t ? t : null),
            y = (0, c.e7)([m.default], () => m.default.getCurrentUser()),
            P = () => {
                !N && (0, p.EW)(d.z.HANG_STATUS_NEW_BADGE);
            },
            M = (e, t) => {
                e.stopPropagation(), (0, g.Zx)(t, !0), P();
            },
            R = (e, t) => {
                e.stopPropagation(), (0, g._s)(t.status, t.emoji, !0), P();
            },
            L = l.useCallback((e) => {
                e.stopPropagation(), (0, g.Sc)(!0);
            }, []),
            k = (e) => {
                e.stopPropagation(),
                    (0, u.openModalLazy)(async () => {
                        let { default: e } = await n.e('1631').then(n.bind(n, 333541));
                        return (t) => (0, i.jsx)(e, { ...t });
                    }),
                    P();
            },
            O = l.useCallback((e) => {
                A({
                    type: I.IIU.HANG_STATUS,
                    name: 'Hang Status',
                    state: e
                });
            }, []),
            D = l.useCallback((e) => {
                A({
                    type: I.IIU.HANG_STATUS,
                    name: 'Hang Status',
                    state: E.tN.CUSTOM,
                    details: e.status,
                    emoji: e.emoji
                });
            }, []);
        return (0, i.jsxs)('div', {
            className: Z.popout,
            children: [
                !N &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)('div', { className: Z.popoutBackground }),
                            (0, i.jsxs)('div', {
                                className: Z.onboarding,
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: Z.title,
                                        children: [
                                            (0, i.jsx)(u.Text, {
                                                variant: 'text-md/semibold',
                                                color: 'header-primary',
                                                children: b.intl.string(b.t['8ka8lp'])
                                            }),
                                            (0, i.jsx)(u.TextBadge, {
                                                text: b.intl.string(b.t.oW0eUV),
                                                disableColor: !0,
                                                className: Z.newBadge
                                            })
                                        ]
                                    }),
                                    (0, i.jsx)(u.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'text-muted',
                                        className: Z.helpText,
                                        children: b.intl.string(b.t.GFo2Gh)
                                    }),
                                    (0, i.jsxs)('div', {
                                        className: Z.iconGroup,
                                        children: [
                                            null != y &&
                                                (0, i.jsxs)('div', {
                                                    className: Z.avatarWrapper,
                                                    children: [
                                                        (0, i.jsx)(u.Avatar, {
                                                            className: Z.avatar,
                                                            size: u.AvatarSizes.SIZE_40,
                                                            src: (0, f.ov)(y),
                                                            'aria-hidden': !0
                                                        }),
                                                        (0, i.jsx)('div', { className: Z.outline })
                                                    ]
                                                }),
                                            (0, i.jsx)(_.Z, {
                                                className: Z.statusIcon,
                                                hangStatusActivity: j
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                (0, i.jsxs)('div', {
                    className: Z.options,
                    children: [
                        (0, i.jsxs)('div', {
                            className: Z.iconsContainer,
                            children: [
                                Object.entries(T).map((e) => {
                                    let [n, l] = e;
                                    return (0, i.jsx)(
                                        u.Clickable,
                                        {
                                            'aria-label': l.title,
                                            onMouseEnter: () => O(n),
                                            onClick: (e) => M(e, n),
                                            children: (0, i.jsx)(S, {
                                                className: a()(Z.iconWidget, { [Z.selectedWidget]: n === (null == t ? void 0 : t.state) }),
                                                name: l.title,
                                                icon: (0, i.jsx)('img', {
                                                    src: l.icon,
                                                    alt: '',
                                                    className: Z.icon
                                                }),
                                                style: n === (null == t ? void 0 : t.state) ? { backgroundColor: null != l.color ? l.color : void 0 } : {}
                                            })
                                        },
                                        n
                                    );
                                }),
                                (0, i.jsx)(u.Clickable, {
                                    'aria-label': b.intl.string(b.t.S90Fub),
                                    onClick: L,
                                    onMouseEnter: () => A(null),
                                    children: (0, i.jsx)(S, {
                                        className: Z.optionButton,
                                        name: b.intl.string(b.t.S90Fub),
                                        icon: (0, i.jsx)(u.DenyIcon, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: Z.editIcon,
                                            colorClass: Z.editIconColor
                                        })
                                    })
                                })
                            ]
                        }),
                        (0, i.jsx)('div', { className: Z.divider }),
                        (0, i.jsxs)('div', {
                            className: Z.iconsContainer,
                            children: [
                                s.current.map((e, n) => {
                                    let l = e.status === (null == t ? void 0 : t.details) && o().isEqual(e.emoji, null == t ? void 0 : t.emoji),
                                        s = null != e.emoji && !(0, v.K)(e.emoji, r);
                                    return (0, i.jsxs)(
                                        u.Clickable,
                                        {
                                            'aria-label': e.status,
                                            onMouseEnter: () => D(e),
                                            onClick: s ? void 0 : (t) => R(t, e),
                                            className: Z.statusOptionContainer,
                                            children: [
                                                (0, i.jsx)(S, {
                                                    className: a()(Z.iconWidget, { [Z.selectedWidget]: l }),
                                                    name: e.status,
                                                    icon:
                                                        null != e.emoji
                                                            ? (0, i.jsx)(h.Iv, {
                                                                  className: Z.customIcon,
                                                                  emoji: e.emoji,
                                                                  hideTooltip: !0
                                                              })
                                                            : null,
                                                    style: l ? { backgroundColor: '#7174B7B3' } : { backgroundColor: '#6466914D' }
                                                }),
                                                s
                                                    ? (0, i.jsx)('div', {
                                                          className: Z.emojiLockIconContainer,
                                                          children: (0, i.jsx)(u.LockIcon, {
                                                              size: 'xs',
                                                              color: 'currentColor',
                                                              className: Z.emojiLockIcon
                                                          })
                                                      })
                                                    : null
                                            ]
                                        },
                                        'custom-status-'.concat(n)
                                    );
                                }),
                                s.current.length > 0
                                    ? (0, i.jsx)(
                                          u.Clickable,
                                          {
                                              'aria-label': null != t ? b.intl.string(b.t.IN2LTk) : b.intl.string(b.t.UDg0qK),
                                              onClick: k,
                                              children: (0, i.jsx)(S, {
                                                  className: Z.optionButton,
                                                  name: null != t ? b.intl.string(b.t.IN2LTk) : b.intl.string(b.t.UDg0qK),
                                                  icon: (0, i.jsx)(u.PencilIcon, {
                                                      size: 'custom',
                                                      color: 'currentColor',
                                                      width: 20,
                                                      height: 20,
                                                      colorClass: Z.editIconColor
                                                  })
                                              })
                                          },
                                          'custom-status-edit'
                                      )
                                    : (0, i.jsxs)(
                                          u.Clickable,
                                          {
                                              'aria-label': b.intl.string(b.t.UDg0qK),
                                              onClick: k,
                                              className: Z.setCustomButton,
                                              children: [
                                                  (0, i.jsx)(u.PencilIcon, {
                                                      size: 'xs',
                                                      color: 'currentColor',
                                                      className: Z.editIcon,
                                                      colorClass: Z.editIconColor
                                                  }),
                                                  (0, i.jsx)(u.Text, {
                                                      variant: 'text-xs/medium',
                                                      color: 'interactive-active',
                                                      children: b.intl.string(b.t.UDg0qK)
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
        });
    };
