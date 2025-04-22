n.d(t, { Z: () => ee }), n(388685);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(512722),
    o = n.n(a),
    c = n(442837),
    d = n(692547),
    u = n(481060),
    m = n(230711),
    g = n(129861),
    p = n(279837),
    h = n(168107),
    f = n(480916),
    b = n(81643),
    _ = n(952306),
    x = n(299206),
    E = n(295474),
    j = n(144114),
    C = n(918505),
    O = n(332473),
    S = n(921801),
    v = n(485341),
    T = n(687158),
    I = n(518950),
    N = n(184325),
    y = n(867176),
    A = n(25990),
    P = n(594174),
    R = n(572004),
    D = n(51144),
    Z = n(998502),
    w = n(695346),
    k = n(461877),
    L = n(726985),
    B = n(981631),
    M = n(815660),
    U = n(801461),
    V = n(388032),
    G = n(556780);
function F(e) {
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
function H(e, t) {
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
let z = Z.ZP.getEnableHardwareAcceleration() ? u.Xo$ : u.qEK;
function W(e) {
    var t, s;
    let { className: a, user: o } = e,
        c = r.useRef(null),
        m = (0, C.o9)(),
        g = (0, O.b)(),
        p = (0, E.gS)(),
        h = null != (s = null == p || null == (t = p.nick) ? void 0 : t[0]) ? s : null,
        [f, b] = r.useState(!1);
    r.useEffect(() => {
        b(null != c.current && c.current.scrollWidth > c.current.clientWidth);
    }, [o.username]);
    let _ = !o.isClaimed(),
        x = (m && !o.isPomelo() && !o.hasVerifiedEmailOrPhone()) || _,
        j = x ? V.intl.string(V.t['7Ngnys']) : void 0;
    return (0, i.jsxs)('div', {
        className: l()(G.field, a),
        children: [
            (0, i.jsx)('div', {
                className: G.constrainedRow,
                children: (0, i.jsxs)('div', {
                    className: G.usernameRow,
                    children: [
                        (0, i.jsx)(u.vwX, {
                            className: G.fieldTitle,
                            children: V.intl.string(V.t.qqhR3N)
                        }),
                        (0, i.jsxs)('div', {
                            className: G.usernameInnerRow,
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
                    className: G.pomeloWarning,
                    children: (0, i.jsx)(u.ua7, {
                        text: V.intl.string(V.t.HHC5Z2),
                        children: (e) =>
                            (0, i.jsx)(
                                u.P4T,
                                H(
                                    F(
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
                    className: G.pomeloWarning,
                    children: (0, i.jsx)(u.ua7, {
                        text: h,
                        'aria-label': !1,
                        children: (e) =>
                            (0, i.jsx)(
                                u.P4T,
                                H(
                                    F(
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
            (0, i.jsx)(u.ua7, {
                text: j,
                children: (e) =>
                    (0, i.jsx)(
                        u.zxk,
                        H(F({}, e), {
                            disabled: x,
                            size: u.zxk.Sizes.SMALL,
                            className: G.fieldButton,
                            color: u.zxk.Colors.PRIMARY,
                            'aria-label': V.intl.string(V.t['JECa9/']),
                            onClick: () =>
                                (0, u.ZDy)(async () => {
                                    if (g) {
                                        let { default: e } = await Promise.all([n.e('85342'), n.e('69525')]).then(n.bind(n, 193049));
                                        return (t) => (0, i.jsx)(e, F({ source: U.Kq.USER_SETTINGS_EDIT }, t));
                                    }
                                    {
                                        let { default: e } = await Promise.all([n.e('75492'), n.e('84956'), n.e('42758')]).then(n.bind(n, 2702));
                                        return (t) => (0, i.jsx)(e, F({}, t));
                                    }
                                }),
                            children: f ? V.intl.string(V.t['16kTw8']) : V.intl.string(V.t.bt75u7)
                        })
                    )
            })
        ]
    });
}
function Y(e) {
    var t, n;
    let { user: s, className: a } = e,
        o = (0, E.gS)(),
        c = null != (n = null == o || null == (t = o.nick) ? void 0 : t[0]) ? n : null,
        m = D.ZP.getGlobalName(s),
        g = r.useRef(null),
        [p, h] = r.useState(!1);
    return (
        r.useEffect(() => {
            h(null != g.current && g.current.scrollWidth > g.current.clientWidth);
        }, [m]),
        (0, i.jsxs)('div', {
            className: l()(G.field, a),
            children: [
                (0, i.jsx)('div', {
                    className: G.constrainedRow,
                    children: (0, i.jsxs)('div', {
                        className: G.usernameRow,
                        children: [
                            (0, i.jsx)(u.vwX, {
                                className: G.fieldTitle,
                                children: V.intl.string(V.t['9AjdkJ'])
                            }),
                            (0, i.jsx)('div', {
                                className: G.usernameInnerRow,
                                ref: g,
                                children: (0, i.jsx)(u.Text, {
                                    tag: 'span',
                                    color: 'header-primary',
                                    variant: 'text-md/normal',
                                    children: null == m ? V.intl.string(V.t.ep5kjI) : m
                                })
                            })
                        ]
                    })
                }),
                null != c &&
                    (0, i.jsx)('div', {
                        className: G.pomeloWarning,
                        children: (0, i.jsx)(u.ua7, {
                            text: c,
                            'aria-label': !1,
                            children: (e) =>
                                (0, i.jsx)(
                                    u.P4T,
                                    H(
                                        F(
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
                (0, i.jsx)(u.zxk, {
                    className: G.fieldButton,
                    size: u.zxk.Sizes.SMALL,
                    color: u.zxk.Colors.PRIMARY,
                    'aria-label': V.intl.string(V.t.YXeWYG),
                    onClick: J,
                    children: p ? V.intl.string(V.t['16kTw8']) : V.intl.string(V.t.bt75u7)
                })
            ]
        })
    );
}
function K(e) {
    let { text: t, censor: n, revealLabel: s, hideLabel: l } = e,
        [a, o] = r.useState(!1),
        c = a ? t : n(t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            c,
            (0, i.jsx)(u.zxk, {
                look: u.zxk.Looks.LINK,
                size: u.zxk.Sizes.MIN,
                color: u.zxk.Colors.LINK,
                'aria-label': a ? l : s,
                onClick: () => o(!a),
                children: a ? V.intl.string(V.t.fgq1go) : V.intl.string(V.t.dcztdX)
            })
        ]
    });
}
function q(e) {
    let t,
        { className: r, user: s } = e;
    if (s.isClaimed())
        if (null == s.email)
            t = {
                buttonText: V.intl.string(V.t.OYkgVl),
                buttonAriaLabel: V.intl.string(V.t['pvBD+f']),
                buttonColor: u.zxk.Colors.PRIMARY,
                valueMessage: V.intl.string(V.t['8SfTNz']),
                handleClick: () =>
                    (0, u.ZDy)(async () => {
                        let { default: e } = await Promise.all([n.e('9343'), n.e('39809')]).then(n.bind(n, 642298));
                        return (t) => (0, i.jsx)(e, F({}, t));
                    })
            };
        else {
            let { email: e } = s;
            t = {
                buttonText: V.intl.string(V.t.bt75u7),
                buttonAriaLabel: V.intl.string(V.t['8peUT0']),
                buttonColor: u.zxk.Colors.PRIMARY,
                valueMessage: (0, i.jsx)(K, {
                    text: e,
                    censor: k.E,
                    revealLabel: V.intl.string(V.t['Zvx+yc']),
                    hideLabel: V.intl.string(V.t.nqTD4e)
                }),
                handleClick: () =>
                    (0, u.ZDy)(async () => {
                        let { default: e } = await Promise.all([n.e('9343'), n.e('39809')]).then(n.bind(n, 642298));
                        return (t) => (0, i.jsx)(e, F({}, t));
                    })
            };
        }
    else
        t = {
            buttonText: V.intl.string(V.t.BleMPD),
            buttonAriaLabel: V.intl.string(V.t.BleMPD),
            buttonColor: u.zxk.Colors.BRAND,
            valueMessage: V.intl.string(V.t.qxk9zs),
            handleClick: () => _.Z.openClaimAccountModal()
        };
    return (0, i.jsxs)('div', {
        className: l()(G.field, r),
        children: [
            (0, i.jsx)('div', {
                className: G.constrainedRow,
                children: (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(u.vwX, {
                            className: G.fieldTitle,
                            children: V.intl.string(V.t.tlZllJ)
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
                className: G.fieldButton,
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
        { className: r, user: s } = e;
    if (!s.isClaimed()) return null;
    let { phone: a, email: o } = s,
        c = null != a;
    return (
        (t = c
            ? (0, i.jsx)(K, {
                  text: a,
                  censor: k.n,
                  revealLabel: V.intl.string(V.t.eY3xlZ),
                  hideLabel: V.intl.string(V.t.jllbv7)
              })
            : V.intl.string(V.t.I5kDqq)),
        (0, i.jsxs)('div', {
            className: l()(G.field, r),
            children: [
                (0, i.jsx)('div', {
                    className: G.constrainedRow,
                    children: (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(u.vwX, {
                                className: G.fieldTitle,
                                children: V.intl.string(V.t.kerONj)
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
                    className: G.fieldButtonList,
                    children: [
                        c && null != o
                            ? (0, i.jsx)(u.zxk, {
                                  className: l()(G.fieldButton, G.removeButton),
                                  size: u.zxk.Sizes.SMALL,
                                  look: u.zxk.Looks.LINK,
                                  color: u.zxk.Colors.PRIMARY,
                                  'aria-label': V.intl.string(V.t.Rpn4Aw),
                                  onClick: function () {
                                      (0, u.h7j)((e) =>
                                          (0, i.jsx)(
                                              p.Z,
                                              H(F({}, e), {
                                                  title: V.intl.string(V.t['3CTiKi']),
                                                  children: s.hasFlag(B.xW$.MFA_SMS) ? V.intl.string(V.t.jrhJys) : void 0,
                                                  actionText: V.intl.string(V.t.N86XcH),
                                                  handleSubmit: (e) => j.Z.removePhone(e, j.L.USER_SETTINGS_UPDATE)
                                              })
                                          )
                                      );
                                  },
                                  children: V.intl.string(V.t.N86XcH)
                              })
                            : null,
                        (0, i.jsx)(u.zxk, {
                            className: G.fieldButton,
                            size: u.zxk.Sizes.SMALL,
                            color: u.zxk.Colors.PRIMARY,
                            'aria-label': c ? V.intl.string(V.t.YDabSU) : V.intl.string(V.t.SfUuEx),
                            onClick: function () {
                                (0, u.ZDy)(
                                    async () => {
                                        let { default: e } = await Promise.resolve().then(n.bind(n, 607018));
                                        return (t) => (0, i.jsx)(e, F({ reason: j.L.USER_SETTINGS_UPDATE }, t));
                                    },
                                    { modalKey: M.M }
                                );
                            },
                            children: c ? V.intl.string(V.t.bt75u7) : V.intl.string(V.t.OYkgVl)
                        })
                    ]
                })
            ]
        })
    );
}
function Q(e) {
    let { user: t } = e,
        n = (0, x.Z)({
            id: t.id,
            label: V.intl.string(V.t['/AXYnJ'])
        });
    return w.Sb.useSetting() && R.wS
        ? (0, i.jsx)(u.yRy, {
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, i.jsx)(u.v2r, {
                      onClose: t,
                      onSelect: void 0,
                      navId: 'copy-id',
                      'aria-label': V.intl.string(V.t.RANhlJ),
                      children: n
                  });
              },
              children: (e) =>
                  (0, i.jsx)(
                      u.P3F,
                      H(F({}, e), {
                          className: G.overflowMenuButton,
                          'aria-label': V.intl.string(V.t.DEoVWV),
                          children: (0, i.jsx)(u.xhG, {
                              size: 'md',
                              color: 'currentColor',
                              className: G.overflowMenuIcon
                          })
                      })
                  )
          })
        : null;
}
function J() {
    m.Z.setSection(B.oAB.PROFILE_CUSTOMIZATION);
}
function $(e) {
    let { className: t } = e,
        n = (0, b.l6)(),
        s = (0, b.Jm)(),
        a = !n || s,
        o = r.useMemo(() => (n ? (s ? V.intl.string(V.t.dJOmCw) : V.intl.string(V.t['Y0A/1N'])) : V.intl.string(V.t.Qdv3DA)), [n, s]);
    return (0, i.jsxs)('div', {
        className: l()(G.field, t),
        children: [
            (0, i.jsx)('div', {
                className: G.constrainedRow,
                children: (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(u.vwX, {
                            className: G.fieldTitle,
                            children: V.intl.string(V.t['2UzQiY'])
                        }),
                        (0, i.jsx)('div', {
                            children: (0, i.jsx)(u.Text, {
                                tag: 'span',
                                color: 'header-primary',
                                variant: 'text-md/normal',
                                children: o
                            })
                        })
                    ]
                })
            }),
            a &&
                (0, i.jsx)(u.zxk, {
                    className: G.fieldButton,
                    size: u.zxk.Sizes.SMALL,
                    color: u.zxk.Colors.PRIMARY,
                    'aria-label': s ? V.intl.string(V.t['+2/AhI']) : V.intl.string(V.t.wRpUfX),
                    onClick: () => h.Z.showAgeVerificationGetStartedModal(f.cU.ACCOUNT_AGE_GROUP),
                    children: s ? V.intl.string(V.t['+2/AhI']) : V.intl.string(V.t.wRpUfX)
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
        n = (0, T.ZP)(t.id),
        r = (0, v.Z)(n),
        s = w.co.useSetting(),
        l = (0, c.e7)([A.Z], () => A.Z.getErrors()),
        a = null == l || null == (e = l.avatar) ? void 0 : e[0],
        { avatarSrc: d, avatarDecorationSrc: m } = (0, I.Z)({
            user: t,
            size: u.EFr.SIZE_80
        });
    return (0, i.jsxs)('div', {
        className: G.accountProfileCard,
        children: [
            (0, i.jsx)(y.b, {
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
                className: G.userInfo,
                children: [
                    (0, i.jsx)(z, {
                        className: G.avatar,
                        src: d,
                        avatarDecoration: m,
                        status: s,
                        size: u.EFr.SIZE_80,
                        'aria-label': t.username
                    }),
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsxs)('div', {
                                className: G.profileCardUsernameRow,
                                children: [
                                    (0, i.jsx)(g.Z, {
                                        user: t,
                                        className: G.userTag,
                                        discriminatorClass: G.discriminator
                                    }),
                                    (0, i.jsx)(Q, { user: t })
                                ]
                            }),
                            (0, i.jsx)(N.Z, {
                                badges: r,
                                className: G.badgeList,
                                badgeClassName: G.badge
                            })
                        ]
                    }),
                    (0, i.jsx)(u.zxk, {
                        onClick: J,
                        size: u.zxk.Sizes.SMALL,
                        children: V.intl.string(V.t['2p2aY2'])
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: G.background,
                children: [
                    null != a
                        ? (0, i.jsx)(u.Text, {
                              className: G.avatarError,
                              variant: 'text-xs/normal',
                              color: 'text-danger',
                              children: a
                          })
                        : null,
                    (0, i.jsxs)('div', {
                        className: G.fieldList,
                        children: [
                            (0, i.jsx)(S.F, {
                                setting: L.s6.ACCOUNT_DISPLAY_NAME,
                                children: (0, i.jsx)(Y, {
                                    className: G.fieldSpacerBottom,
                                    user: t
                                })
                            }),
                            (0, i.jsx)(S.F, {
                                setting: L.s6.ACCOUNT_USERNAME,
                                children: (0, i.jsx)(W, { user: t })
                            }),
                            (0, i.jsx)(S.F, {
                                setting: L.s6.ACCOUNT_EMAIL,
                                children: (0, i.jsx)(q, {
                                    className: G.fieldSpacer,
                                    user: t
                                })
                            }),
                            (0, i.jsx)(S.F, {
                                setting: L.s6.ACCOUNT_PHONE_NUMBER,
                                children: (0, i.jsx)(X, {
                                    className: G.fieldSpacer,
                                    user: t
                                })
                            }),
                            (0, i.jsx)(S.F, {
                                setting: L.s6.ACCOUNT_AGE_GROUP,
                                children: (0, i.jsx)($, { className: G.fieldSpacer })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
