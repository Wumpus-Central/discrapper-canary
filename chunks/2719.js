n.d(t, { Z: () => ee }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(512722),
    o = n.n(l),
    c = n(442837),
    d = n(692547),
    u = n(481060),
    m = n(230711),
    g = n(129861),
    p = n(279837),
    h = n(168107),
    f = n(480916),
    b = n(81643),
    N = n(952306),
    x = n(299206),
    _ = n(295474),
    E = n(144114),
    j = n(918505),
    O = n(332473),
    C = n(921801),
    S = n(485341),
    v = n(687158),
    T = n(518950),
    I = n(184325),
    y = n(867176),
    A = n(25990),
    P = n(594174),
    R = n(572004),
    D = n(51144),
    Z = n(998502),
    w = n(695346),
    k = n(461877),
    W = n(726985),
    L = n(981631),
    B = n(815660),
    M = n(801461),
    U = n(388032),
    V = n(556780);
function G(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function F(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let H = Z.ZP.getEnableHardwareAcceleration() ? u.Xo$ : u.qEK;
function z(e) {
    var t, s;
    let { className: l, user: o } = e,
        c = i.useRef(null),
        m = (0, j.o9)(),
        g = (0, O.b)(),
        p = (0, _.gS)(),
        h = null != (s = null == p || null == (t = p.nick) ? void 0 : t[0]) ? s : null,
        [f, b] = i.useState(!1);
    i.useEffect(() => {
        b(null != c.current && c.current.scrollWidth > c.current.clientWidth);
    }, [o.username]);
    let N = !o.isClaimed(),
        x = (m && !o.isPomelo() && !o.hasVerifiedEmailOrPhone()) || N,
        E = x ? U.NW.string(U.t['7Ngnys']) : void 0;
    return (0, r.jsxs)('div', {
        className: a()(V.field, l),
        children: [
            (0, r.jsx)('div', {
                className: V.constrainedRow,
                children: (0, r.jsxs)('div', {
                    className: V.usernameRow,
                    children: [
                        (0, r.jsx)(u.vwX, {
                            className: V.fieldTitle,
                            children: U.NW.string(U.t.qqhR3N)
                        }),
                        (0, r.jsxs)('div', {
                            className: V.usernameInnerRow,
                            ref: c,
                            children: [
                                (0, r.jsx)(u.Text, {
                                    tag: 'span',
                                    color: 'header-primary',
                                    variant: 'text-md/normal',
                                    children: o.username
                                }),
                                !o.isPomelo() &&
                                    (0, r.jsxs)(u.Text, {
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
                (0, r.jsx)('div', {
                    className: V.pomeloWarning,
                    children: (0, r.jsx)(u.ua7, {
                        text: U.NW.string(U.t.HHC5Z2),
                        children: (e) =>
                            (0, r.jsx)(
                                u.P4T,
                                F(
                                    G(
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
                (0, r.jsx)('div', {
                    className: V.pomeloWarning,
                    children: (0, r.jsx)(u.ua7, {
                        text: h,
                        'aria-label': !1,
                        children: (e) =>
                            (0, r.jsx)(
                                u.P4T,
                                F(
                                    G(
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
            (0, r.jsx)(u.ua7, {
                text: E,
                children: (e) =>
                    (0, r.jsx)(
                        u.zxk,
                        F(G({}, e), {
                            disabled: x,
                            size: u.zxk.Sizes.SMALL,
                            className: V.fieldButton,
                            color: u.zxk.Colors.PRIMARY,
                            'aria-label': U.NW.string(U.t['JECa9/']),
                            onClick: () =>
                                (0, u.ZDy)(async () => {
                                    if (g) {
                                        let { default: e } = await Promise.all([n.e('85342'), n.e('69525')]).then(n.bind(n, 193049));
                                        return (t) => (0, r.jsx)(e, G({ source: M.Kq.USER_SETTINGS_EDIT }, t));
                                    }
                                    {
                                        let { default: e } = await Promise.all([n.e('75492'), n.e('84956'), n.e('42758')]).then(n.bind(n, 2702));
                                        return (t) => (0, r.jsx)(e, G({}, t));
                                    }
                                }),
                            children: f ? U.NW.string(U.t['16kTw8']) : U.NW.string(U.t.bt75u7)
                        })
                    )
            })
        ]
    });
}
function Y(e) {
    var t, n;
    let { user: s, className: l } = e,
        o = (0, _.gS)(),
        c = null != (n = null == o || null == (t = o.nick) ? void 0 : t[0]) ? n : null,
        m = D.ZP.getGlobalName(s),
        g = i.useRef(null),
        [p, h] = i.useState(!1);
    return (
        i.useEffect(() => {
            h(null != g.current && g.current.scrollWidth > g.current.clientWidth);
        }, [m]),
        (0, r.jsxs)('div', {
            className: a()(V.field, l),
            children: [
                (0, r.jsx)('div', {
                    className: V.constrainedRow,
                    children: (0, r.jsxs)('div', {
                        className: V.usernameRow,
                        children: [
                            (0, r.jsx)(u.vwX, {
                                className: V.fieldTitle,
                                children: U.NW.string(U.t['9AjdkJ'])
                            }),
                            (0, r.jsx)('div', {
                                className: V.usernameInnerRow,
                                ref: g,
                                children: (0, r.jsx)(u.Text, {
                                    tag: 'span',
                                    color: 'header-primary',
                                    variant: 'text-md/normal',
                                    children: null == m ? U.NW.string(U.t.ep5kjI) : m
                                })
                            })
                        ]
                    })
                }),
                null != c &&
                    (0, r.jsx)('div', {
                        className: V.pomeloWarning,
                        children: (0, r.jsx)(u.ua7, {
                            text: c,
                            'aria-label': !1,
                            children: (e) =>
                                (0, r.jsx)(
                                    u.P4T,
                                    F(
                                        G(
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
                (0, r.jsx)(u.zxk, {
                    className: V.fieldButton,
                    size: u.zxk.Sizes.SMALL,
                    color: u.zxk.Colors.PRIMARY,
                    'aria-label': U.NW.string(U.t.YXeWYG),
                    onClick: Q,
                    children: p ? U.NW.string(U.t['16kTw8']) : U.NW.string(U.t.bt75u7)
                })
            ]
        })
    );
}
function K(e) {
    let { text: t, censor: n, revealLabel: s, hideLabel: a } = e,
        [l, o] = i.useState(!1),
        c = l ? t : n(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            c,
            (0, r.jsx)(u.zxk, {
                look: u.zxk.Looks.LINK,
                size: u.zxk.Sizes.MIN,
                color: u.zxk.Colors.LINK,
                'aria-label': l ? a : s,
                onClick: () => o(!l),
                children: l ? U.NW.string(U.t.fgq1go) : U.NW.string(U.t.dcztdX)
            })
        ]
    });
}
function q(e) {
    let t,
        { className: i, user: s } = e;
    if (s.isClaimed())
        if (null == s.email)
            t = {
                buttonText: U.NW.string(U.t.OYkgVl),
                buttonAriaLabel: U.NW.string(U.t['pvBD+f']),
                buttonColor: u.zxk.Colors.PRIMARY,
                valueMessage: U.NW.string(U.t['8SfTNz']),
                handleClick: () =>
                    (0, u.ZDy)(async () => {
                        let { default: e } = await Promise.all([n.e('9343'), n.e('39809')]).then(n.bind(n, 642298));
                        return (t) => (0, r.jsx)(e, G({}, t));
                    })
            };
        else {
            let { email: e } = s;
            t = {
                buttonText: U.NW.string(U.t.bt75u7),
                buttonAriaLabel: U.NW.string(U.t['8peUT0']),
                buttonColor: u.zxk.Colors.PRIMARY,
                valueMessage: (0, r.jsx)(K, {
                    text: e,
                    censor: k.E,
                    revealLabel: U.NW.string(U.t['Zvx+yc']),
                    hideLabel: U.NW.string(U.t.nqTD4e)
                }),
                handleClick: () =>
                    (0, u.ZDy)(async () => {
                        let { default: e } = await Promise.all([n.e('9343'), n.e('39809')]).then(n.bind(n, 642298));
                        return (t) => (0, r.jsx)(e, G({}, t));
                    })
            };
        }
    else
        t = {
            buttonText: U.NW.string(U.t.BleMPD),
            buttonAriaLabel: U.NW.string(U.t.BleMPD),
            buttonColor: u.zxk.Colors.BRAND,
            valueMessage: U.NW.string(U.t.qxk9zs),
            handleClick: () => N.Z.openClaimAccountModal()
        };
    return (0, r.jsxs)('div', {
        className: a()(V.field, i),
        children: [
            (0, r.jsx)('div', {
                className: V.constrainedRow,
                children: (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsx)(u.vwX, {
                            className: V.fieldTitle,
                            children: U.NW.string(U.t.tlZllJ)
                        }),
                        (0, r.jsx)('div', {
                            children: (0, r.jsx)(u.Text, {
                                tag: 'span',
                                color: 'header-primary',
                                variant: 'text-md/normal',
                                children: t.valueMessage
                            })
                        })
                    ]
                })
            }),
            (0, r.jsx)(u.zxk, {
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
function X(e) {
    let t,
        { className: i, user: s } = e;
    if (!s.isClaimed()) return null;
    let { phone: l, email: o } = s,
        c = null != l;
    return (
        (t = c
            ? (0, r.jsx)(K, {
                  text: l,
                  censor: k.n,
                  revealLabel: U.NW.string(U.t.eY3xlZ),
                  hideLabel: U.NW.string(U.t.jllbv7)
              })
            : U.NW.string(U.t.I5kDqq)),
        (0, r.jsxs)('div', {
            className: a()(V.field, i),
            children: [
                (0, r.jsx)('div', {
                    className: V.constrainedRow,
                    children: (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(u.vwX, {
                                className: V.fieldTitle,
                                children: U.NW.string(U.t.kerONj)
                            }),
                            (0, r.jsx)('div', {
                                children: (0, r.jsx)(u.Text, {
                                    tag: 'span',
                                    color: 'header-primary',
                                    variant: 'text-md/normal',
                                    children: t
                                })
                            })
                        ]
                    })
                }),
                (0, r.jsxs)('div', {
                    className: V.fieldButtonList,
                    children: [
                        c && null != o
                            ? (0, r.jsx)(u.zxk, {
                                  className: a()(V.fieldButton, V.removeButton),
                                  size: u.zxk.Sizes.SMALL,
                                  look: u.zxk.Looks.LINK,
                                  color: u.zxk.Colors.PRIMARY,
                                  'aria-label': U.NW.string(U.t.Rpn4Aw),
                                  onClick: function () {
                                      (0, u.h7j)((e) =>
                                          (0, r.jsx)(
                                              p.default,
                                              F(G({}, e), {
                                                  title: U.NW.string(U.t['3CTiKi']),
                                                  children: s.hasFlag(L.xW$.MFA_SMS) ? U.NW.string(U.t.jrhJys) : void 0,
                                                  actionText: U.NW.string(U.t.N86XcH),
                                                  handleSubmit: (e) => E.Z.removePhone(e, E.L.USER_SETTINGS_UPDATE)
                                              })
                                          )
                                      );
                                  },
                                  children: U.NW.string(U.t.N86XcH)
                              })
                            : null,
                        (0, r.jsx)(u.zxk, {
                            className: V.fieldButton,
                            size: u.zxk.Sizes.SMALL,
                            color: u.zxk.Colors.PRIMARY,
                            'aria-label': c ? U.NW.string(U.t.YDabSU) : U.NW.string(U.t.SfUuEx),
                            onClick: function () {
                                (0, u.ZDy)(
                                    async () => {
                                        let { default: e } = await Promise.resolve().then(n.bind(n, 607018));
                                        return (t) => (0, r.jsx)(e, G({ reason: E.L.USER_SETTINGS_UPDATE }, t));
                                    },
                                    { modalKey: B.M }
                                );
                            },
                            children: c ? U.NW.string(U.t.bt75u7) : U.NW.string(U.t.OYkgVl)
                        })
                    ]
                })
            ]
        })
    );
}
function J(e) {
    let { user: t } = e,
        n = (0, x.Z)({
            id: t.id,
            label: U.NW.string(U.t['/AXYnJ'])
        });
    return w.Sb.useSetting() && R.wS
        ? (0, r.jsx)(u.yRy, {
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)(u.v2r, {
                      onClose: t,
                      onSelect: void 0,
                      navId: 'copy-id',
                      'aria-label': U.NW.string(U.t.RANhlJ),
                      children: n
                  });
              },
              children: (e) =>
                  (0, r.jsx)(
                      u.P3F,
                      F(G({}, e), {
                          className: V.overflowMenuButton,
                          'aria-label': U.NW.string(U.t.DEoVWV),
                          children: (0, r.jsx)(u.xhG, {
                              size: 'md',
                              color: 'currentColor',
                              className: V.overflowMenuIcon
                          })
                      })
                  )
          })
        : null;
}
function Q() {
    m.Z.setSection(L.oAB.PROFILE_CUSTOMIZATION);
}
function $(e) {
    let { className: t } = e,
        n = (0, b.l6)(),
        s = (0, b.Jm)(),
        l = !n || s,
        o = i.useMemo(() => (n ? (s ? U.NW.string(U.t.dJOmCw) : U.NW.string(U.t['Y0A/1N'])) : U.NW.string(U.t.Qdv3DA)), [n, s]);
    return (0, r.jsxs)('div', {
        className: a()(V.field, t),
        children: [
            (0, r.jsx)('div', {
                className: V.constrainedRow,
                children: (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsx)(u.vwX, {
                            className: V.fieldTitle,
                            children: U.NW.string(U.t['2UzQiY'])
                        }),
                        (0, r.jsx)('div', {
                            children: (0, r.jsx)(u.Text, {
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
                (0, r.jsx)(u.zxk, {
                    className: V.fieldButton,
                    size: u.zxk.Sizes.SMALL,
                    color: u.zxk.Colors.PRIMARY,
                    'aria-label': s ? U.NW.string(U.t['+2/AhI']) : U.NW.string(U.t.wRpUfX),
                    onClick: () => h.Z.showAgeVerificationGetStartedModal(f.cU.ACCOUNT_AGE_GROUP),
                    children: s ? U.NW.string(U.t['+2/AhI']) : U.NW.string(U.t.wRpUfX)
                })
        ]
    });
}
function ee() {
    var e;
    let t = (0, c.e7)([P.default], () => {
            let e = P.default.getCurrentUser();
            return o()(null != e, 'UserSettingsAccountProfileCard: currentUser cannot be undefined'), e;
        }),
        n = (0, v.ZP)(t.id),
        i = (0, S.Z)(n),
        s = w.co.useSetting(),
        a = (0, c.e7)([A.Z], () => A.Z.getErrors()),
        l = null == a || null == (e = a.avatar) ? void 0 : e[0],
        { avatarSrc: d, avatarDecorationSrc: m } = (0, T.Z)({
            user: t,
            size: u.EFr.SIZE_80
        });
    return (0, r.jsxs)('div', {
        className: V.accountProfileCard,
        children: [
            (0, r.jsx)(y.b, {
                user: t,
                displayProfile: n,
                avatarSize: u.EFr.SIZE_80,
                avatarOffsetX: 16,
                avatarOffsetY: -22,
                bannerWidth: 660,
                bannerHeight: 100,
                themePadding: 0
            }),
            (0, r.jsxs)('div', {
                className: V.userInfo,
                children: [
                    (0, r.jsx)(H, {
                        className: V.avatar,
                        src: d,
                        avatarDecoration: m,
                        status: s,
                        size: u.EFr.SIZE_80,
                        'aria-label': t.username
                    }),
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsxs)('div', {
                                className: V.profileCardUsernameRow,
                                children: [
                                    (0, r.jsx)(g.Z, {
                                        user: t,
                                        className: V.userTag,
                                        discriminatorClass: V.discriminator
                                    }),
                                    (0, r.jsx)(J, { user: t })
                                ]
                            }),
                            (0, r.jsx)(I.Z, {
                                badges: i,
                                className: V.badgeList,
                                badgeClassName: V.badge
                            })
                        ]
                    }),
                    (0, r.jsx)(u.zxk, {
                        onClick: Q,
                        size: u.zxk.Sizes.SMALL,
                        children: U.NW.string(U.t['2p2aY2'])
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: V.background,
                children: [
                    null != l
                        ? (0, r.jsx)(u.Text, {
                              className: V.avatarError,
                              variant: 'text-xs/normal',
                              color: 'text-danger',
                              children: l
                          })
                        : null,
                    (0, r.jsxs)('div', {
                        className: V.fieldList,
                        children: [
                            (0, r.jsx)(C.F, {
                                setting: W.s6.ACCOUNT_DISPLAY_NAME,
                                children: (0, r.jsx)(Y, {
                                    className: V.fieldSpacerBottom,
                                    user: t
                                })
                            }),
                            (0, r.jsx)(C.F, {
                                setting: W.s6.ACCOUNT_USERNAME,
                                children: (0, r.jsx)(z, { user: t })
                            }),
                            (0, r.jsx)(C.F, {
                                setting: W.s6.ACCOUNT_EMAIL,
                                children: (0, r.jsx)(q, {
                                    className: V.fieldSpacer,
                                    user: t
                                })
                            }),
                            (0, r.jsx)(C.F, {
                                setting: W.s6.ACCOUNT_PHONE_NUMBER,
                                children: (0, r.jsx)(X, {
                                    className: V.fieldSpacer,
                                    user: t
                                })
                            }),
                            (0, r.jsx)(C.F, {
                                setting: W.s6.ACCOUNT_AGE_GROUP,
                                children: (0, r.jsx)($, { className: V.fieldSpacer })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
