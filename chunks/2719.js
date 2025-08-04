(n.d(t, { Z: () => et }), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(512722),
    o = n.n(l),
    c = n(442837),
    d = n(692547),
    u = n(755721),
    m = n(481060),
    p = n(230711),
    g = n(129861),
    h = n(279837),
    f = n(168107),
    b = n(480916),
    x = n(81643),
    _ = n(952306),
    j = n(299206),
    E = n(295474),
    C = n(144114),
    O = n(918505),
    v = n(332473),
    S = n(921801),
    T = n(485341),
    I = n(687158),
    N = n(518950),
    y = n(184325),
    A = n(867176),
    P = n(25990),
    R = n(594174),
    D = n(572004),
    Z = n(51144),
    w = n(998502),
    k = n(695346),
    L = n(461877),
    B = n(726985),
    M = n(981631),
    U = n(815660),
    V = n(801461),
    G = n(388032),
    F = n(556780);
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
function W(e, t) {
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
let z = w.ZP.getEnableHardwareAcceleration() ? m.Xo$ : m.qEK;
function Y(e) {
    var t, s;
    let { className: l, user: o } = e,
        c = r.useRef(null),
        u = (0, O.o9)(),
        p = (0, v.b)(),
        g = (0, E.gS)(),
        h = null != (s = null == g || null == (t = g.nick) ? void 0 : t[0]) ? s : null,
        [f, b] = r.useState(!1);
    r.useEffect(() => {
        b(null != c.current && c.current.scrollWidth > c.current.clientWidth);
    }, [o.username]);
    let x = !o.isClaimed(),
        _ = (u && !o.hasUniqueUsername() && !o.hasVerifiedEmailOrPhone()) || x,
        j = _ ? G.intl.string(G.t['7Ngnys']) : void 0;
    return (0, i.jsxs)('div', {
        className: a()(F.field, l),
        children: [
            (0, i.jsx)('div', {
                className: F.constrainedRow,
                children: (0, i.jsxs)('div', {
                    className: F.usernameRow,
                    children: [
                        (0, i.jsx)(m.vwX, {
                            className: F.fieldTitle,
                            children: G.intl.string(G.t.qqhR3N)
                        }),
                        (0, i.jsxs)('div', {
                            className: F.usernameInnerRow,
                            ref: c,
                            children: [
                                (0, i.jsx)(m.Text, {
                                    tag: 'span',
                                    color: 'header-primary',
                                    variant: 'text-md/normal',
                                    children: o.username
                                }),
                                !o.hasUniqueUsername() &&
                                    (0, i.jsxs)(m.Text, {
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
            p &&
                (0, i.jsx)('div', {
                    className: F.pomeloWarning,
                    children: (0, i.jsx)(m.ua7, {
                        text: G.intl.string(G.t.HHC5Z2),
                        children: (e) =>
                            (0, i.jsx)(
                                m.Mgn,
                                W(
                                    H(
                                        {
                                            size: 'custom',
                                            width: 20,
                                            height: 20
                                        },
                                        e
                                    ),
                                    { color: d.Z.colors.STATUS_WARNING.css }
                                )
                            )
                    })
                }),
            null != h &&
                (0, i.jsx)('div', {
                    className: F.pomeloWarning,
                    children: (0, i.jsx)(m.ua7, {
                        text: h,
                        'aria-label': !1,
                        children: (e) =>
                            (0, i.jsx)(
                                m.Mgn,
                                W(
                                    H(
                                        {
                                            size: 'custom',
                                            width: 20,
                                            height: 20
                                        },
                                        e
                                    ),
                                    { color: d.Z.colors.STATUS_WARNING.css }
                                )
                            )
                    })
                }),
            (0, i.jsx)(m.ua7, {
                text: j,
                children: (e) =>
                    (0, i.jsx)('div', {
                        'data-button-hoisted-classname-wrapper': !0,
                        className: F.fieldButton,
                        children: (0, i.jsx)(
                            m.zxk,
                            W(
                                H(
                                    {
                                        variant: 'secondary',
                                        size: 'sm',
                                        text: f ? G.intl.string(G.t['16kTw8']) : G.intl.string(G.t.bt75u7)
                                    },
                                    e
                                ),
                                {
                                    disabled: _,
                                    'aria-label': G.intl.string(G.t['JECa9/']),
                                    onClick: () =>
                                        (0, m.ZDy)(async () => {
                                            if (p) {
                                                let { default: e } = await n.e('85342').then(n.bind(n, 193049));
                                                return (t) => (0, i.jsx)(e, H({ source: V.Kq.USER_SETTINGS_EDIT }, t));
                                            }
                                            {
                                                let { default: e } = await Promise.all([n.e('84956'), n.e('42758')]).then(n.bind(n, 2702));
                                                return (t) => (0, i.jsx)(e, H({}, t));
                                            }
                                        })
                                }
                            )
                        )
                    })
            })
        ]
    });
}
function K(e) {
    var t, n;
    let { user: s, className: l } = e,
        o = (0, E.gS)(),
        c = null != (n = null == o || null == (t = o.nick) ? void 0 : t[0]) ? n : null,
        u = Z.ZP.getGlobalName(s),
        p = r.useRef(null),
        [g, h] = r.useState(!1);
    return (
        r.useEffect(() => {
            h(null != p.current && p.current.scrollWidth > p.current.clientWidth);
        }, [u]),
        (0, i.jsxs)('div', {
            className: a()(F.field, l),
            children: [
                (0, i.jsx)('div', {
                    className: F.constrainedRow,
                    children: (0, i.jsxs)('div', {
                        className: F.usernameRow,
                        children: [
                            (0, i.jsx)(m.vwX, {
                                className: F.fieldTitle,
                                children: G.intl.string(G.t['9AjdkJ'])
                            }),
                            (0, i.jsx)('div', {
                                className: F.usernameInnerRow,
                                ref: p,
                                children: (0, i.jsx)(m.Text, {
                                    tag: 'span',
                                    color: 'header-primary',
                                    variant: 'text-md/normal',
                                    children: null == u ? G.intl.string(G.t.ep5kjI) : u
                                })
                            })
                        ]
                    })
                }),
                null != c &&
                    (0, i.jsx)('div', {
                        className: F.pomeloWarning,
                        children: (0, i.jsx)(m.ua7, {
                            text: c,
                            'aria-label': !1,
                            children: (e) =>
                                (0, i.jsx)(
                                    m.Mgn,
                                    W(
                                        H(
                                            {
                                                size: 'custom',
                                                width: 20,
                                                height: 20
                                            },
                                            e
                                        ),
                                        { color: d.Z.colors.STATUS_WARNING.css }
                                    )
                                )
                        })
                    }),
                (0, i.jsx)('div', {
                    'data-button-hoisted-classname-wrapper': !0,
                    className: F.fieldButton,
                    children: (0, i.jsx)(m.zxk, {
                        variant: 'secondary',
                        size: 'sm',
                        text: g ? G.intl.string(G.t['16kTw8']) : G.intl.string(G.t.bt75u7),
                        'aria-label': G.intl.string(G.t.YXeWYG),
                        onClick: $
                    })
                })
            ]
        })
    );
}
function q(e) {
    let { text: t, censor: n, revealLabel: s, hideLabel: a } = e,
        [l, o] = r.useState(!1),
        c = l ? t : n(t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            c,
            (0, i.jsx)(u.zx, {
                look: u.zx.Looks.LINK,
                size: u.zx.Sizes.MIN,
                color: u.zx.Colors.LINK,
                'aria-label': l ? a : s,
                onClick: () => o(!l),
                children: l ? G.intl.string(G.t.fgq1go) : G.intl.string(G.t.dcztdX)
            })
        ]
    });
}
function X(e) {
    let t,
        { className: r, user: s } = e;
    if (s.isClaimed())
        if (null == s.email)
            t = {
                buttonText: G.intl.string(G.t.OYkgVl),
                buttonAriaLabel: G.intl.string(G.t['pvBD+f']),
                buttonColor: u.zx.Colors.PRIMARY,
                valueMessage: G.intl.string(G.t['8SfTNz']),
                handleClick: () =>
                    (0, m.ZDy)(async () => {
                        let { default: e } = await Promise.all([n.e('9343'), n.e('39809')]).then(n.bind(n, 642298));
                        return (t) => (0, i.jsx)(e, H({}, t));
                    })
            };
        else {
            let { email: e } = s;
            t = {
                buttonText: G.intl.string(G.t.bt75u7),
                buttonAriaLabel: G.intl.string(G.t['8peUT0']),
                buttonColor: u.zx.Colors.PRIMARY,
                valueMessage: (0, i.jsx)(q, {
                    text: e,
                    censor: L.E,
                    revealLabel: G.intl.string(G.t['Zvx+yc']),
                    hideLabel: G.intl.string(G.t.nqTD4e)
                }),
                handleClick: () =>
                    (0, m.ZDy)(async () => {
                        let { default: e } = await Promise.all([n.e('9343'), n.e('39809')]).then(n.bind(n, 642298));
                        return (t) => (0, i.jsx)(e, H({}, t));
                    })
            };
        }
    else
        t = {
            buttonText: G.intl.string(G.t.BleMPD),
            buttonAriaLabel: G.intl.string(G.t.BleMPD),
            buttonColor: u.zx.Colors.BRAND,
            valueMessage: G.intl.string(G.t.qxk9zs),
            handleClick: () => _.Z.openClaimAccountModal()
        };
    return (0, i.jsxs)('div', {
        className: a()(F.field, r),
        children: [
            (0, i.jsx)('div', {
                className: F.constrainedRow,
                children: (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(m.vwX, {
                            className: F.fieldTitle,
                            children: G.intl.string(G.t.tlZllJ)
                        }),
                        (0, i.jsx)('div', {
                            children: (0, i.jsx)(m.Text, {
                                tag: 'span',
                                color: 'header-primary',
                                variant: 'text-md/normal',
                                children: t.valueMessage
                            })
                        })
                    ]
                })
            }),
            (0, i.jsx)('div', {
                'data-button-hoisted-classname-wrapper': !0,
                className: F.fieldButton,
                children: (0, i.jsx)(m.zxk, {
                    variant: 'secondary',
                    size: 'sm',
                    text: t.buttonText,
                    'aria-label': t.buttonAriaLabel,
                    onClick: t.handleClick
                })
            })
        ]
    });
}
function J(e) {
    let t,
        { className: r, user: s } = e;
    if (!s.isClaimed()) return null;
    let { phone: l, email: o } = s,
        c = null != l;
    return (
        (t = c
            ? (0, i.jsx)(q, {
                  text: l,
                  censor: L.n,
                  revealLabel: G.intl.string(G.t.eY3xlZ),
                  hideLabel: G.intl.string(G.t.jllbv7)
              })
            : G.intl.string(G.t.I5kDqq)),
        (0, i.jsxs)('div', {
            className: a()(F.field, r),
            children: [
                (0, i.jsx)('div', {
                    className: F.constrainedRow,
                    children: (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(m.vwX, {
                                className: F.fieldTitle,
                                children: G.intl.string(G.t.kerONj)
                            }),
                            (0, i.jsx)('div', {
                                children: (0, i.jsx)(m.Text, {
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
                    className: F.fieldButtonList,
                    children: [
                        c && null != o
                            ? (0, i.jsx)(u.zx, {
                                  className: a()(F.fieldButton, F.removeButton),
                                  size: u.zx.Sizes.SMALL,
                                  look: u.zx.Looks.LINK,
                                  color: u.zx.Colors.PRIMARY,
                                  'aria-label': G.intl.string(G.t.Rpn4Aw),
                                  onClick: function () {
                                      (0, m.h7j)((e) =>
                                          (0, i.jsx)(
                                              h.Z,
                                              W(H({}, e), {
                                                  title: G.intl.string(G.t['3CTiKi']),
                                                  children: s.hasFlag(M.xW$.MFA_SMS) ? G.intl.string(G.t.jrhJys) : void 0,
                                                  actionText: G.intl.string(G.t.N86XcH),
                                                  handleSubmit: (e) => C.Z.removePhone(e, C.L.USER_SETTINGS_UPDATE)
                                              })
                                          )
                                      );
                                  },
                                  children: G.intl.string(G.t.N86XcH)
                              })
                            : null,
                        (0, i.jsx)('div', {
                            'data-button-hoisted-classname-wrapper': !0,
                            className: F.fieldButton,
                            children: (0, i.jsx)(m.zxk, {
                                variant: 'secondary',
                                size: 'sm',
                                text: c ? G.intl.string(G.t.bt75u7) : G.intl.string(G.t.OYkgVl),
                                'aria-label': c ? G.intl.string(G.t.YDabSU) : G.intl.string(G.t.SfUuEx),
                                onClick: function () {
                                    (0, m.ZDy)(
                                        async () => {
                                            let { default: e } = await Promise.resolve().then(n.bind(n, 607018));
                                            return (t) => (0, i.jsx)(e, H({ reason: C.L.USER_SETTINGS_UPDATE }, t));
                                        },
                                        { modalKey: U.M }
                                    );
                                }
                            })
                        })
                    ]
                })
            ]
        })
    );
}
function Q(e) {
    let { user: t } = e,
        n = (0, j.Z)({
            id: t.id,
            label: G.intl.string(G.t['/AXYnJ'])
        }),
        s = k.Sb.useSetting(),
        a = r.useRef(null);
    return s && D.wS
        ? (0, i.jsx)(m.yRy, {
              targetElementRef: a,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, i.jsx)(m.v2r, {
                      onClose: t,
                      onSelect: void 0,
                      navId: 'copy-id',
                      'aria-label': G.intl.string(G.t.RANhlJ),
                      children: n
                  });
              },
              children: (e) =>
                  (0, i.jsx)(
                      m.P3F,
                      W(H({}, e), {
                          innerRef: a,
                          className: F.overflowMenuButton,
                          'aria-label': G.intl.string(G.t.DEoVWV),
                          children: (0, i.jsx)(m.xhG, {
                              size: 'md',
                              color: 'currentColor',
                              className: F.overflowMenuIcon
                          })
                      })
                  )
          })
        : null;
}
function $() {
    p.Z.setSection(M.oAB.PROFILE_CUSTOMIZATION);
}
function ee(e) {
    let { className: t } = e,
        n = (0, x.l6)(),
        s = (0, x.Jm)(),
        l = !n || s,
        o = r.useMemo(() => (n ? (s ? G.intl.string(G.t.sK0dmJ) : G.intl.string(G.t.XxRj7e)) : G.intl.string(G.t.UX0OdX)), [n, s]);
    return (0, i.jsxs)('div', {
        className: a()(F.field, t),
        children: [
            (0, i.jsx)('div', {
                className: F.constrainedRow,
                children: (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(m.vwX, {
                            className: F.fieldTitle,
                            children: G.intl.string(G.t['/52UY2'])
                        }),
                        (0, i.jsx)('div', {
                            children: (0, i.jsx)(m.Text, {
                                tag: 'span',
                                color: 'header-primary',
                                variant: 'text-md/normal',
                                children: o
                            })
                        })
                    ]
                })
            }),
            l &&
                (0, i.jsx)('div', {
                    'data-button-hoisted-classname-wrapper': !0,
                    className: F.fieldButton,
                    children: (0, i.jsx)(m.zxk, {
                        variant: 'secondary',
                        size: 'sm',
                        text: s ? G.intl.string(G.t.KPGVWl) : G.intl.string(G.t.yNGjyM),
                        'aria-label': s ? G.intl.string(G.t.KPGVWl) : G.intl.string(G.t.yNGjyM),
                        onClick: () => f.Z.showAgeVerificationGetStartedModal(b.cU.ACCOUNT_AGE_GROUP)
                    })
                })
        ]
    });
}
function et() {
    var e;
    let t = (0, c.e7)([R.default], () => {
            let e = R.default.getCurrentUser();
            return (o()(null != e, 'UserSettingsAccountProfileCard: currentUser cannot be undefined'), e);
        }),
        n = (0, I.ZP)(t.id),
        r = (0, T.Z)(n),
        s = k.co.useSetting(),
        a = (0, c.e7)([P.Z], () => P.Z.getErrors()),
        l = null == a || null == (e = a.avatar) ? void 0 : e[0],
        { avatarSrc: d, avatarDecorationSrc: u } = (0, N.Z)({
            userId: null == t ? void 0 : t.id,
            size: m.EFr.SIZE_80
        });
    return (0, i.jsxs)('div', {
        className: F.accountProfileCard,
        children: [
            (0, i.jsx)(A.b, {
                user: t,
                displayProfile: n,
                avatarSize: m.EFr.SIZE_80,
                avatarOffsetX: 16,
                avatarOffsetY: -22,
                bannerWidth: 660,
                bannerHeight: 100,
                themePadding: 0
            }),
            (0, i.jsxs)('div', {
                className: F.userInfo,
                children: [
                    (0, i.jsx)(z, {
                        className: F.avatar,
                        src: d,
                        avatarDecoration: u,
                        status: s,
                        size: m.EFr.SIZE_80,
                        'aria-label': t.username
                    }),
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsxs)('div', {
                                className: F.profileCardUsernameRow,
                                children: [
                                    (0, i.jsx)(g.Z, {
                                        user: t,
                                        className: F.userTag,
                                        discriminatorClass: F.discriminator
                                    }),
                                    (0, i.jsx)(Q, { user: t })
                                ]
                            }),
                            (0, i.jsx)(y.Z, {
                                badges: r,
                                className: F.badgeList,
                                badgeClassName: F.badge
                            })
                        ]
                    }),
                    (0, i.jsx)(m.zxk, {
                        variant: 'primary',
                        size: 'sm',
                        text: G.intl.string(G.t['2p2aY2']),
                        onClick: $
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: F.background,
                children: [
                    null != l
                        ? (0, i.jsx)(m.Text, {
                              className: F.avatarError,
                              variant: 'text-xs/normal',
                              color: 'text-danger',
                              children: l
                          })
                        : null,
                    (0, i.jsxs)('div', {
                        className: F.fieldList,
                        children: [
                            (0, i.jsx)(S.F, {
                                setting: B.s6.ACCOUNT_DISPLAY_NAME,
                                children: (0, i.jsx)(K, {
                                    className: F.fieldSpacerBottom,
                                    user: t
                                })
                            }),
                            (0, i.jsx)(S.F, {
                                setting: B.s6.ACCOUNT_USERNAME,
                                children: (0, i.jsx)(Y, { user: t })
                            }),
                            (0, i.jsx)(S.F, {
                                setting: B.s6.ACCOUNT_EMAIL,
                                children: (0, i.jsx)(X, {
                                    className: F.fieldSpacer,
                                    user: t
                                })
                            }),
                            (0, i.jsx)(S.F, {
                                setting: B.s6.ACCOUNT_PHONE_NUMBER,
                                children: (0, i.jsx)(J, {
                                    className: F.fieldSpacer,
                                    user: t
                                })
                            }),
                            (0, i.jsx)(S.F, {
                                setting: B.s6.ACCOUNT_AGE_GROUP,
                                children: (0, i.jsx)(ee, { className: F.fieldSpacer })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
