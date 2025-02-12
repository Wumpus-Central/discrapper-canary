n.d(t, { Z: () => K }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(120356),
    r = n.n(l),
    a = n(512722),
    o = n.n(a),
    c = n(442837),
    d = n(692547),
    u = n(481060),
    h = n(230711),
    m = n(129861),
    g = n(279837),
    x = n(952306),
    _ = n(299206),
    p = n(295474),
    E = n(144114),
    C = n(918505),
    f = n(332473),
    N = n(921801),
    I = n(485341),
    T = n(687158),
    S = n(518950),
    j = n(184325),
    v = n(867176),
    b = n(25990),
    A = n(594174),
    O = n(572004),
    R = n(51144),
    D = n(998502),
    P = n(695346),
    y = n(461877),
    Z = n(726985),
    L = n(981631),
    k = n(815660),
    B = n(801461),
    M = n(388032),
    V = n(424021);
let w = D.ZP.getEnableHardwareAcceleration() ? u.Xo$ : u.qEK;
function U(e) {
    var t, l;
    let { className: a, user: o } = e,
        c = s.useRef(null),
        h = (0, C.o9)(),
        m = (0, f.b)(),
        g = (0, p.gS)(),
        x = null !== (l = null == g ? void 0 : null === (t = g.nick) || void 0 === t ? void 0 : t[0]) && void 0 !== l ? l : null,
        [_, E] = s.useState(!1);
    s.useEffect(() => {
        E(null != c.current && c.current.scrollWidth > c.current.clientWidth);
    }, [o.username]);
    let N = !o.isClaimed(),
        I = (h && !o.isPomelo() && !o.hasVerifiedEmailOrPhone()) || N,
        T = I ? M.intl.string(M.t['7Ngnys']) : void 0;
    return (0, i.jsxs)('div', {
        className: r()(V.field, a),
        children: [
            (0, i.jsx)('div', {
                className: V.constrainedRow,
                children: (0, i.jsxs)('div', {
                    className: V.usernameRow,
                    children: [
                        (0, i.jsx)(u.vwX, {
                            className: V.fieldTitle,
                            children: M.intl.string(M.t.qqhR3N)
                        }),
                        (0, i.jsxs)('div', {
                            className: V.usernameInnerRow,
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
            m &&
                (0, i.jsx)('div', {
                    className: V.pomeloWarning,
                    children: (0, i.jsx)(u.ua7, {
                        text: M.intl.string(M.t.HHC5Z2),
                        children: (e) =>
                            (0, i.jsx)(u.P4T, {
                                size: 'custom',
                                width: 20,
                                height: 20,
                                ...e,
                                color: d.Z.colors.STATUS_WARNING.css
                            })
                    })
                }),
            null != x &&
                (0, i.jsx)('div', {
                    className: V.pomeloWarning,
                    children: (0, i.jsx)(u.ua7, {
                        text: x,
                        'aria-label': !1,
                        children: (e) =>
                            (0, i.jsx)(u.P4T, {
                                size: 'custom',
                                width: 20,
                                height: 20,
                                ...e,
                                color: d.Z.colors.STATUS_WARNING.css
                            })
                    })
                }),
            (0, i.jsx)(u.ua7, {
                text: T,
                children: (e) =>
                    (0, i.jsx)(u.zxk, {
                        ...e,
                        disabled: I,
                        size: u.zxk.Sizes.SMALL,
                        className: V.fieldButton,
                        color: u.zxk.Colors.PRIMARY,
                        'aria-label': M.intl.string(M.t['JECa9/']),
                        onClick: () =>
                            (0, u.ZDy)(async () => {
                                if (m) {
                                    let { default: e } = await Promise.all([n.e('85342'), n.e('26633')]).then(n.bind(n, 193049));
                                    return (t) =>
                                        (0, i.jsx)(e, {
                                            source: B.Kq.USER_SETTINGS_EDIT,
                                            ...t
                                        });
                                }
                                {
                                    let { default: e } = await Promise.all([n.e('75492'), n.e('84956'), n.e('42758')]).then(n.bind(n, 2702));
                                    return (t) => (0, i.jsx)(e, { ...t });
                                }
                            }),
                        children: _ ? M.intl.string(M.t['16kTw8']) : M.intl.string(M.t.bt75u7)
                    })
            })
        ]
    });
}
function G(e) {
    var t, n;
    let { user: l, className: a } = e,
        o = (0, p.gS)(),
        c = null !== (n = null == o ? void 0 : null === (t = o.nick) || void 0 === t ? void 0 : t[0]) && void 0 !== n ? n : null,
        h = R.ZP.getGlobalName(l),
        m = s.useRef(null),
        [g, x] = s.useState(!1);
    return (
        s.useEffect(() => {
            x(null != m.current && m.current.scrollWidth > m.current.clientWidth);
        }, [h]),
        (0, i.jsxs)('div', {
            className: r()(V.field, a),
            children: [
                (0, i.jsx)('div', {
                    className: V.constrainedRow,
                    children: (0, i.jsxs)('div', {
                        className: V.usernameRow,
                        children: [
                            (0, i.jsx)(u.vwX, {
                                className: V.fieldTitle,
                                children: M.intl.string(M.t['9AjdkJ'])
                            }),
                            (0, i.jsx)('div', {
                                className: V.usernameInnerRow,
                                ref: m,
                                children: (0, i.jsx)(u.Text, {
                                    tag: 'span',
                                    color: 'header-primary',
                                    variant: 'text-md/normal',
                                    children: null == h ? M.intl.string(M.t.ep5kjI) : h
                                })
                            })
                        ]
                    })
                }),
                null != c &&
                    (0, i.jsx)('div', {
                        className: V.pomeloWarning,
                        children: (0, i.jsx)(u.ua7, {
                            text: c,
                            'aria-label': !1,
                            children: (e) =>
                                (0, i.jsx)(u.P4T, {
                                    size: 'custom',
                                    width: 20,
                                    height: 20,
                                    ...e,
                                    color: d.Z.colors.STATUS_WARNING.css
                                })
                        })
                    }),
                (0, i.jsx)(u.zxk, {
                    className: V.fieldButton,
                    size: u.zxk.Sizes.SMALL,
                    color: u.zxk.Colors.PRIMARY,
                    'aria-label': M.intl.string(M.t.YXeWYG),
                    onClick: W,
                    children: g ? M.intl.string(M.t['16kTw8']) : M.intl.string(M.t.bt75u7)
                })
            ]
        })
    );
}
function F(e) {
    let { text: t, censor: n, revealLabel: l, hideLabel: r } = e,
        [a, o] = s.useState(!1),
        c = a ? t : n(t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            c,
            (0, i.jsx)(u.zxk, {
                look: u.zxk.Looks.LINK,
                size: u.zxk.Sizes.MIN,
                color: u.zxk.Colors.LINK,
                'aria-label': a ? r : l,
                onClick: () => o(!a),
                children: a ? M.intl.string(M.t.fgq1go) : M.intl.string(M.t.dcztdX)
            })
        ]
    });
}
function z(e) {
    let t,
        { className: s, user: l } = e;
    if (l.isClaimed()) {
        if (null == l.email)
            t = {
                buttonText: M.intl.string(M.t.OYkgVl),
                buttonAriaLabel: M.intl.string(M.t['pvBD+f']),
                buttonColor: u.zxk.Colors.PRIMARY,
                valueMessage: M.intl.string(M.t['8SfTNz']),
                handleClick: () =>
                    (0, u.ZDy)(async () => {
                        let { default: e } = await Promise.all([n.e('9343'), n.e('58409')]).then(n.bind(n, 642298));
                        return (t) => (0, i.jsx)(e, { ...t });
                    })
            };
        else {
            let { email: e } = l;
            t = {
                buttonText: M.intl.string(M.t.bt75u7),
                buttonAriaLabel: M.intl.string(M.t['8peUT0']),
                buttonColor: u.zxk.Colors.PRIMARY,
                valueMessage: (0, i.jsx)(F, {
                    text: e,
                    censor: y.E,
                    revealLabel: M.intl.string(M.t['Zvx+yc']),
                    hideLabel: M.intl.string(M.t.nqTD4e)
                }),
                handleClick: () =>
                    (0, u.ZDy)(async () => {
                        let { default: e } = await Promise.all([n.e('9343'), n.e('58409')]).then(n.bind(n, 642298));
                        return (t) => (0, i.jsx)(e, { ...t });
                    })
            };
        }
    } else
        t = {
            buttonText: M.intl.string(M.t.BleMPD),
            buttonAriaLabel: M.intl.string(M.t.BleMPD),
            buttonColor: u.zxk.Colors.BRAND,
            valueMessage: M.intl.string(M.t.qxk9zs),
            handleClick: () => x.Z.openClaimAccountModal()
        };
    return (0, i.jsxs)('div', {
        className: r()(V.field, s),
        children: [
            (0, i.jsx)('div', {
                className: V.constrainedRow,
                children: (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(u.vwX, {
                            className: V.fieldTitle,
                            children: M.intl.string(M.t.tlZllJ)
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
            (0, i.jsx)(u.zxk, {
                className: V.fieldButton,
                size: u.zxk.Sizes.SMALL,
                color: u.zxk.Colors.PRIMARY,
                'aria-label': t.buttonAriaLabel,
                onClick: t.handleClick,
                children: t.buttonText
            })
        ]
    });
}
function Y(e) {
    let t,
        { className: s, user: l } = e;
    if (!l.isClaimed()) return null;
    let { phone: a, email: o } = l,
        c = null != a;
    return (
        (t = c
            ? (0, i.jsx)(F, {
                  text: a,
                  censor: y.n,
                  revealLabel: M.intl.string(M.t.eY3xlZ),
                  hideLabel: M.intl.string(M.t.jllbv7)
              })
            : M.intl.string(M.t.I5kDqq)),
        (0, i.jsxs)('div', {
            className: r()(V.field, s),
            children: [
                (0, i.jsx)('div', {
                    className: V.constrainedRow,
                    children: (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(u.vwX, {
                                className: V.fieldTitle,
                                children: M.intl.string(M.t.kerONj)
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
                    className: V.fieldButtonList,
                    children: [
                        c && null != o
                            ? (0, i.jsx)(u.zxk, {
                                  className: r()(V.fieldButton, V.removeButton),
                                  size: u.zxk.Sizes.SMALL,
                                  look: u.zxk.Looks.LINK,
                                  color: u.zxk.Colors.PRIMARY,
                                  'aria-label': M.intl.string(M.t.Rpn4Aw),
                                  onClick: function () {
                                      (0, u.h7j)((e) =>
                                          (0, i.jsx)(g.default, {
                                              ...e,
                                              title: M.intl.string(M.t['3CTiKi']),
                                              children: l.hasFlag(L.xW$.MFA_SMS) ? M.intl.string(M.t.jrhJys) : void 0,
                                              actionText: M.intl.string(M.t.N86XcH),
                                              handleSubmit: (e) => E.Z.removePhone(e, E.L.USER_SETTINGS_UPDATE)
                                          })
                                      );
                                  },
                                  children: M.intl.string(M.t.N86XcH)
                              })
                            : null,
                        (0, i.jsx)(u.zxk, {
                            className: V.fieldButton,
                            size: u.zxk.Sizes.SMALL,
                            color: u.zxk.Colors.PRIMARY,
                            'aria-label': c ? M.intl.string(M.t.YDabSU) : M.intl.string(M.t.SfUuEx),
                            onClick: function () {
                                (0, u.ZDy)(
                                    async () => {
                                        let { default: e } = await Promise.resolve().then(n.bind(n, 607018));
                                        return (t) =>
                                            (0, i.jsx)(e, {
                                                reason: E.L.USER_SETTINGS_UPDATE,
                                                ...t
                                            });
                                    },
                                    { modalKey: k.M }
                                );
                            },
                            children: c ? M.intl.string(M.t.bt75u7) : M.intl.string(M.t.OYkgVl)
                        })
                    ]
                })
            ]
        })
    );
}
function H(e) {
    let { user: t } = e,
        n = (0, _.Z)({
            id: t.id,
            label: M.intl.string(M.t['/AXYnJ'])
        });
    return P.Sb.useSetting() && O.wS
        ? (0, i.jsx)(u.yRy, {
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, i.jsx)(u.v2r, {
                      onClose: t,
                      onSelect: void 0,
                      navId: 'copy-id',
                      'aria-label': M.intl.string(M.t.RANhlJ),
                      children: n
                  });
              },
              children: (e) =>
                  (0, i.jsx)(u.P3F, {
                      ...e,
                      className: V.overflowMenuButton,
                      'aria-label': M.intl.string(M.t.DEoVWV),
                      children: (0, i.jsx)(u.xhG, {
                          size: 'md',
                          color: 'currentColor',
                          className: V.overflowMenuIcon
                      })
                  })
          })
        : null;
}
function W() {
    h.Z.setSection(L.oAB.PROFILE_CUSTOMIZATION);
}
function K() {
    var e;
    let t = (0, c.e7)([A.default], () => {
            let e = A.default.getCurrentUser();
            return o()(null != e, 'UserSettingsAccountProfileCard: currentUser cannot be undefined'), e;
        }),
        n = (0, T.ZP)(t.id),
        s = (0, I.Z)(n),
        l = P.co.useSetting(),
        r = (0, c.e7)([b.Z], () => b.Z.getErrors()),
        a = null == r ? void 0 : null === (e = r.avatar) || void 0 === e ? void 0 : e[0],
        { avatarSrc: d, avatarDecorationSrc: h } = (0, S.Z)({
            user: t,
            size: u.EFr.SIZE_80
        });
    return (0, i.jsxs)('div', {
        className: V.accountProfileCard,
        children: [
            (0, i.jsx)(v.b, {
                user: t,
                displayProfile: n,
                avatarSize: u.EFr.SIZE_80,
                avatarOffsetX: 16,
                avatarOffsetY: -22,
                bannerWidth: 660,
                bannerHeight: 100,
                themePadding: 0
            }),
            (0, i.jsxs)('div', {
                className: V.userInfo,
                children: [
                    (0, i.jsx)(w, {
                        className: V.avatar,
                        src: d,
                        avatarDecoration: h,
                        status: l,
                        size: u.EFr.SIZE_80,
                        'aria-label': t.username
                    }),
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsxs)('div', {
                                className: V.profileCardUsernameRow,
                                children: [
                                    (0, i.jsx)(m.Z, {
                                        user: t,
                                        className: V.userTag,
                                        discriminatorClass: V.discriminator
                                    }),
                                    (0, i.jsx)(H, { user: t })
                                ]
                            }),
                            (0, i.jsx)(j.Z, {
                                badges: s,
                                className: V.badgeList,
                                badgeClassName: V.badge
                            })
                        ]
                    }),
                    (0, i.jsx)(u.zxk, {
                        onClick: W,
                        size: u.zxk.Sizes.SMALL,
                        children: M.intl.string(M.t['2p2aY2'])
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: V.background,
                children: [
                    null != a
                        ? (0, i.jsx)(u.Text, {
                              className: V.avatarError,
                              variant: 'text-xs/normal',
                              color: 'text-danger',
                              children: a
                          })
                        : null,
                    (0, i.jsxs)('div', {
                        className: V.fieldList,
                        children: [
                            (0, i.jsx)(N.F, {
                                setting: Z.s6.ACCOUNT_DISPLAY_NAME,
                                children: (0, i.jsx)(G, {
                                    className: V.fieldSpacerBottom,
                                    user: t
                                })
                            }),
                            (0, i.jsx)(N.F, {
                                setting: Z.s6.ACCOUNT_USERNAME,
                                children: (0, i.jsx)(U, { user: t })
                            }),
                            (0, i.jsx)(N.F, {
                                setting: Z.s6.ACCOUNT_EMAIL,
                                children: (0, i.jsx)(z, {
                                    className: V.fieldSpacer,
                                    user: t
                                })
                            }),
                            (0, i.jsx)(N.F, {
                                setting: Z.s6.ACCOUNT_PHONE_NUMBER,
                                children: (0, i.jsx)(Y, {
                                    className: V.fieldSpacer,
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
