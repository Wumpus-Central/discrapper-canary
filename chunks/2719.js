n.d(t, {
    Z: function () {
        return K;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(512722),
    o = n.n(l),
    c = n(442837),
    d = n(692547),
    u = n(481060),
    m = n(230711),
    g = n(129861),
    h = n(279837),
    p = n(952306),
    x = n(299206),
    f = n(295474),
    _ = n(144114),
    E = n(918505),
    C = n(332473),
    T = n(921801),
    S = n(485341),
    b = n(687158),
    I = n(518950),
    N = n(184325),
    v = n(867176),
    A = n(25990),
    j = n(594174),
    O = n(572004),
    R = n(51144),
    P = n(998502),
    y = n(695346),
    B = n(461877),
    D = n(726985),
    Z = n(981631),
    L = n(815660),
    M = n(801461),
    k = n(388032),
    w = n(205323);
let F = P.ZP.getEnableHardwareAcceleration() ? u.AnimatedAvatar : u.Avatar;
function U(e) {
    var t, s;
    let { className: l, user: o } = e,
        c = r.useRef(null),
        m = (0, E.o9)(),
        g = (0, C.b)(),
        h = (0, f.gS)(),
        p = null !== (s = null == h ? void 0 : null === (t = h.nick) || void 0 === t ? void 0 : t[0]) && void 0 !== s ? s : null,
        [x, _] = r.useState(!1);
    r.useEffect(() => {
        _(null != c.current && c.current.scrollWidth > c.current.clientWidth);
    }, [o.username]);
    let T = !o.isClaimed(),
        S = (m && !o.isPomelo() && !o.hasVerifiedEmailOrPhone()) || T,
        b = S ? k.intl.string(k.t['7Ngnys']) : void 0;
    return (0, i.jsxs)('div', {
        className: a()(w.field, l),
        children: [
            (0, i.jsx)('div', {
                className: w.constrainedRow,
                children: (0, i.jsxs)('div', {
                    className: w.usernameRow,
                    children: [
                        (0, i.jsx)(u.FormTitle, {
                            className: w.fieldTitle,
                            children: k.intl.string(k.t.qqhR3N)
                        }),
                        (0, i.jsxs)('div', {
                            className: w.usernameInnerRow,
                            ref: c,
                            children: [
                                (0, i.jsx)(u.Text, {
                                    tag: 'span',
                                    color: 'header-primary',
                                    variant: 'text-md/normal',
                                    children: o.username
                                }),
                                !o.isPomelo() &&
                                    (0, i.jsxs)(u.Text, {
                                        tag: 'span',
                                        color: 'header-secondary',
                                        variant: 'text-md/normal',
                                        children: ['#', o.discriminator]
                                    })
                            ]
                        })
                    ]
                })
            }),
            g &&
                (0, i.jsx)('div', {
                    className: w.pomeloWarning,
                    children: (0, i.jsx)(u.Tooltip, {
                        text: k.intl.string(k.t.HHC5Z2),
                        children: (e) =>
                            (0, i.jsx)(u.CircleWarningIcon, {
                                size: 'custom',
                                width: 20,
                                height: 20,
                                ...e,
                                color: d.Z.colors.STATUS_WARNING.css
                            })
                    })
                }),
            null != p &&
                (0, i.jsx)('div', {
                    className: w.pomeloWarning,
                    children: (0, i.jsx)(u.Tooltip, {
                        text: p,
                        'aria-label': !1,
                        children: (e) =>
                            (0, i.jsx)(u.CircleWarningIcon, {
                                size: 'custom',
                                width: 20,
                                height: 20,
                                ...e,
                                color: d.Z.colors.STATUS_WARNING.css
                            })
                    })
                }),
            (0, i.jsx)(u.Tooltip, {
                text: b,
                children: (e) =>
                    (0, i.jsx)(u.Button, {
                        ...e,
                        disabled: S,
                        size: u.Button.Sizes.SMALL,
                        className: w.fieldButton,
                        color: u.Button.Colors.PRIMARY,
                        'aria-label': k.intl.string(k.t['JECa9/']),
                        onClick: () =>
                            (0, u.openModalLazy)(async () => {
                                if (g) {
                                    let { default: e } = await Promise.all([n.e('85342'), n.e('55508')]).then(n.bind(n, 193049));
                                    return (t) =>
                                        (0, i.jsx)(e, {
                                            source: M.Kq.USER_SETTINGS_EDIT,
                                            ...t
                                        });
                                }
                                {
                                    let { default: e } = await Promise.all([n.e('75492'), n.e('84956'), n.e('42758')]).then(n.bind(n, 2702));
                                    return (t) => (0, i.jsx)(e, { ...t });
                                }
                            }),
                        children: x ? k.intl.string(k.t['16kTw8']) : k.intl.string(k.t.bt75u7)
                    })
            })
        ]
    });
}
function V(e) {
    var t, n;
    let { user: s, className: l } = e,
        o = (0, f.gS)(),
        c = null !== (n = null == o ? void 0 : null === (t = o.nick) || void 0 === t ? void 0 : t[0]) && void 0 !== n ? n : null,
        m = R.ZP.getGlobalName(s),
        g = r.useRef(null),
        [h, p] = r.useState(!1);
    return (
        r.useEffect(() => {
            p(null != g.current && g.current.scrollWidth > g.current.clientWidth);
        }, [m]),
        (0, i.jsxs)('div', {
            className: a()(w.field, l),
            children: [
                (0, i.jsx)('div', {
                    className: w.constrainedRow,
                    children: (0, i.jsxs)('div', {
                        className: w.usernameRow,
                        children: [
                            (0, i.jsx)(u.FormTitle, {
                                className: w.fieldTitle,
                                children: k.intl.string(k.t['9AjdkJ'])
                            }),
                            (0, i.jsx)('div', {
                                className: w.usernameInnerRow,
                                ref: g,
                                children: (0, i.jsx)(u.Text, {
                                    tag: 'span',
                                    color: 'header-primary',
                                    variant: 'text-md/normal',
                                    children: null == m ? k.intl.string(k.t.ep5kjI) : m
                                })
                            })
                        ]
                    })
                }),
                null != c &&
                    (0, i.jsx)('div', {
                        className: w.pomeloWarning,
                        children: (0, i.jsx)(u.Tooltip, {
                            text: c,
                            'aria-label': !1,
                            children: (e) =>
                                (0, i.jsx)(u.CircleWarningIcon, {
                                    size: 'custom',
                                    width: 20,
                                    height: 20,
                                    ...e,
                                    color: d.Z.colors.STATUS_WARNING.css
                                })
                        })
                    }),
                (0, i.jsx)(u.Button, {
                    className: w.fieldButton,
                    size: u.Button.Sizes.SMALL,
                    color: u.Button.Colors.PRIMARY,
                    'aria-label': k.intl.string(k.t.YXeWYG),
                    onClick: z,
                    children: h ? k.intl.string(k.t['16kTw8']) : k.intl.string(k.t.bt75u7)
                })
            ]
        })
    );
}
function G(e) {
    let { text: t, censor: n, revealLabel: s, hideLabel: a } = e,
        [l, o] = r.useState(!1),
        c = l ? t : n(t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            c,
            (0, i.jsx)(u.Button, {
                look: u.Button.Looks.LINK,
                size: u.Button.Sizes.MIN,
                color: u.Button.Colors.LINK,
                'aria-label': l ? a : s,
                onClick: () => o(!l),
                children: l ? k.intl.string(k.t.fgq1go) : k.intl.string(k.t.dcztdX)
            })
        ]
    });
}
function H(e) {
    let t,
        { className: r, user: s } = e;
    if (s.isClaimed()) {
        if (null == s.email)
            t = {
                buttonText: k.intl.string(k.t.OYkgVl),
                buttonAriaLabel: k.intl.string(k.t['pvBD+f']),
                buttonColor: u.Button.Colors.PRIMARY,
                valueMessage: k.intl.string(k.t['8SfTNz']),
                handleClick: () =>
                    (0, u.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e('9343'), n.e('1861')]).then(n.bind(n, 642298));
                        return (t) => (0, i.jsx)(e, { ...t });
                    })
            };
        else {
            let { email: e } = s;
            t = {
                buttonText: k.intl.string(k.t.bt75u7),
                buttonAriaLabel: k.intl.string(k.t['8peUT0']),
                buttonColor: u.Button.Colors.PRIMARY,
                valueMessage: (0, i.jsx)(G, {
                    text: e,
                    censor: B.E,
                    revealLabel: k.intl.string(k.t['Zvx+yc']),
                    hideLabel: k.intl.string(k.t.nqTD4e)
                }),
                handleClick: () =>
                    (0, u.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e('9343'), n.e('1861')]).then(n.bind(n, 642298));
                        return (t) => (0, i.jsx)(e, { ...t });
                    })
            };
        }
    } else
        t = {
            buttonText: k.intl.string(k.t.BleMPD),
            buttonAriaLabel: k.intl.string(k.t.BleMPD),
            buttonColor: u.Button.Colors.BRAND,
            valueMessage: k.intl.string(k.t.qxk9zs),
            handleClick: () => p.Z.openClaimAccountModal()
        };
    return (0, i.jsxs)('div', {
        className: a()(w.field, r),
        children: [
            (0, i.jsx)('div', {
                className: w.constrainedRow,
                children: (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(u.FormTitle, {
                            className: w.fieldTitle,
                            children: k.intl.string(k.t.tlZllJ)
                        }),
                        (0, i.jsx)('div', {
                            children: (0, i.jsx)(u.Text, {
                                tag: 'span',
                                color: 'header-primary',
                                variant: 'text-md/normal',
                                children: t.valueMessage
                            })
                        })
                    ]
                })
            }),
            (0, i.jsx)(u.Button, {
                className: w.fieldButton,
                size: u.Button.Sizes.SMALL,
                color: u.Button.Colors.PRIMARY,
                'aria-label': t.buttonAriaLabel,
                onClick: t.handleClick,
                children: t.buttonText
            })
        ]
    });
}
function Y(e) {
    let t,
        { className: r, user: s } = e;
    if (!s.isClaimed()) return null;
    let { phone: l, email: o } = s,
        c = null != l;
    return (
        (t = c
            ? (0, i.jsx)(G, {
                  text: l,
                  censor: B.n,
                  revealLabel: k.intl.string(k.t.eY3xlZ),
                  hideLabel: k.intl.string(k.t.jllbv7)
              })
            : k.intl.string(k.t.I5kDqq)),
        (0, i.jsxs)('div', {
            className: a()(w.field, r),
            children: [
                (0, i.jsx)('div', {
                    className: w.constrainedRow,
                    children: (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(u.FormTitle, {
                                className: w.fieldTitle,
                                children: k.intl.string(k.t.kerONj)
                            }),
                            (0, i.jsx)('div', {
                                children: (0, i.jsx)(u.Text, {
                                    tag: 'span',
                                    color: 'header-primary',
                                    variant: 'text-md/normal',
                                    children: t
                                })
                            })
                        ]
                    })
                }),
                (0, i.jsxs)('div', {
                    className: w.fieldButtonList,
                    children: [
                        c && null != o
                            ? (0, i.jsx)(u.Button, {
                                  className: a()(w.fieldButton, w.removeButton),
                                  size: u.Button.Sizes.SMALL,
                                  look: u.Button.Looks.LINK,
                                  color: u.Button.Colors.PRIMARY,
                                  'aria-label': k.intl.string(k.t.Rpn4Aw),
                                  onClick: function () {
                                      (0, u.openModal)((e) =>
                                          (0, i.jsx)(h.default, {
                                              ...e,
                                              title: k.intl.string(k.t['3CTiKi']),
                                              children: s.hasFlag(Z.xW$.MFA_SMS) ? k.intl.string(k.t.jrhJys) : void 0,
                                              actionText: k.intl.string(k.t.N86XcH),
                                              handleSubmit: (e) => _.Z.removePhone(e, _.L.USER_SETTINGS_UPDATE)
                                          })
                                      );
                                  },
                                  children: k.intl.string(k.t.N86XcH)
                              })
                            : null,
                        (0, i.jsx)(u.Button, {
                            className: w.fieldButton,
                            size: u.Button.Sizes.SMALL,
                            color: u.Button.Colors.PRIMARY,
                            'aria-label': c ? k.intl.string(k.t.YDabSU) : k.intl.string(k.t.SfUuEx),
                            onClick: function () {
                                (0, u.openModalLazy)(
                                    async () => {
                                        let { default: e } = await Promise.resolve().then(n.bind(n, 607018));
                                        return (t) =>
                                            (0, i.jsx)(e, {
                                                reason: _.L.USER_SETTINGS_UPDATE,
                                                ...t
                                            });
                                    },
                                    { modalKey: L.M }
                                );
                            },
                            children: c ? k.intl.string(k.t.bt75u7) : k.intl.string(k.t.OYkgVl)
                        })
                    ]
                })
            ]
        })
    );
}
function W(e) {
    let { user: t } = e,
        n = (0, x.Z)({
            id: t.id,
            label: k.intl.string(k.t['/AXYnJ'])
        });
    return y.Sb.useSetting() && O.wS
        ? (0, i.jsx)(u.Popout, {
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, i.jsx)(u.Menu, {
                      onClose: t,
                      onSelect: void 0,
                      navId: 'copy-id',
                      'aria-label': k.intl.string(k.t.RANhlJ),
                      children: n
                  });
              },
              children: (e) =>
                  (0, i.jsx)(u.Clickable, {
                      ...e,
                      className: w.overflowMenuButton,
                      'aria-label': k.intl.string(k.t.DEoVWV),
                      children: (0, i.jsx)(u.MoreHorizontalIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: w.overflowMenuIcon
                      })
                  })
          })
        : null;
}
function z() {
    m.Z.setSection(Z.oAB.PROFILE_CUSTOMIZATION);
}
function K() {
    var e;
    let t = (0, c.e7)([j.default], () => {
            let e = j.default.getCurrentUser();
            return o()(null != e, 'UserSettingsAccountProfileCard: currentUser cannot be undefined'), e;
        }),
        n = (0, b.ZP)(t.id),
        r = (0, S.Z)(n),
        s = y.co.useSetting(),
        a = (0, c.e7)([A.Z], () => A.Z.getErrors()),
        l = null == a ? void 0 : null === (e = a.avatar) || void 0 === e ? void 0 : e[0],
        { avatarSrc: d, avatarDecorationSrc: m } = (0, I.Z)({
            user: t,
            size: u.AvatarSizes.SIZE_80
        });
    return (0, i.jsxs)('div', {
        className: w.accountProfileCard,
        children: [
            (0, i.jsx)(v.b, {
                user: t,
                displayProfile: n,
                avatarSize: u.AvatarSizes.SIZE_80,
                avatarOffsetX: 16,
                avatarOffsetY: -22,
                bannerWidth: 660,
                bannerHeight: 100,
                themePadding: 0
            }),
            (0, i.jsxs)('div', {
                className: w.userInfo,
                children: [
                    (0, i.jsx)(F, {
                        className: w.avatar,
                        src: d,
                        avatarDecoration: m,
                        status: s,
                        size: u.AvatarSizes.SIZE_80,
                        'aria-label': t.username
                    }),
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsxs)('div', {
                                className: w.profileCardUsernameRow,
                                children: [
                                    (0, i.jsx)(g.Z, {
                                        user: t,
                                        className: w.userTag,
                                        discriminatorClass: w.discriminator
                                    }),
                                    (0, i.jsx)(W, { user: t })
                                ]
                            }),
                            (0, i.jsx)(N.Z, {
                                badges: r,
                                className: w.badgeList,
                                badgeClassName: w.badge
                            })
                        ]
                    }),
                    (0, i.jsx)(u.Button, {
                        onClick: z,
                        size: u.Button.Sizes.SMALL,
                        children: k.intl.string(k.t['2p2aY2'])
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: w.background,
                children: [
                    null != l
                        ? (0, i.jsx)(u.Text, {
                              className: w.avatarError,
                              variant: 'text-xs/normal',
                              color: 'text-danger',
                              children: l
                          })
                        : null,
                    (0, i.jsxs)('div', {
                        className: w.fieldList,
                        children: [
                            (0, i.jsx)(T.F, {
                                setting: D.s6.ACCOUNT_DISPLAY_NAME,
                                children: (0, i.jsx)(V, {
                                    className: w.fieldSpacerBottom,
                                    user: t
                                })
                            }),
                            (0, i.jsx)(T.F, {
                                setting: D.s6.ACCOUNT_USERNAME,
                                children: (0, i.jsx)(U, { user: t })
                            }),
                            (0, i.jsx)(T.F, {
                                setting: D.s6.ACCOUNT_EMAIL,
                                children: (0, i.jsx)(H, {
                                    className: w.fieldSpacer,
                                    user: t
                                })
                            }),
                            (0, i.jsx)(T.F, {
                                setting: D.s6.ACCOUNT_PHONE_NUMBER,
                                children: (0, i.jsx)(Y, {
                                    className: w.fieldSpacer,
                                    user: t
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
