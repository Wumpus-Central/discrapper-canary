n.d(t, { Z: () => X }), n(47120);
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
    h = n(952306),
    f = n(299206),
    N = n(295474),
    x = n(144114),
    b = n(918505),
    _ = n(332473),
    E = n(921801),
    j = n(485341),
    C = n(687158),
    O = n(518950),
    v = n(184325),
    S = n(867176),
    T = n(25990),
    I = n(594174),
    y = n(572004),
    A = n(51144),
    P = n(998502),
    R = n(695346),
    D = n(461877),
    Z = n(726985),
    w = n(981631),
    k = n(815660),
    W = n(801461),
    L = n(388032),
    B = n(803843);
function M(e) {
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
function U(e, t) {
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
let V = P.ZP.getEnableHardwareAcceleration() ? u.Xo$ : u.qEK;
function G(e) {
    var t, s;
    let { className: l, user: o } = e,
        c = i.useRef(null),
        m = (0, b.o9)(),
        g = (0, _.b)(),
        p = (0, N.gS)(),
        h = null !== (s = null == p ? void 0 : null === (t = p.nick) || void 0 === t ? void 0 : t[0]) && void 0 !== s ? s : null,
        [f, x] = i.useState(!1);
    i.useEffect(() => {
        x(null != c.current && c.current.scrollWidth > c.current.clientWidth);
    }, [o.username]);
    let E = !o.isClaimed(),
        j = (m && !o.isPomelo() && !o.hasVerifiedEmailOrPhone()) || E,
        C = j ? L.NW.string(L.t['7Ngnys']) : void 0;
    return (0, r.jsxs)('div', {
        className: a()(B.field, l),
        children: [
            (0, r.jsx)('div', {
                className: B.constrainedRow,
                children: (0, r.jsxs)('div', {
                    className: B.usernameRow,
                    children: [
                        (0, r.jsx)(u.vwX, {
                            className: B.fieldTitle,
                            children: L.NW.string(L.t.qqhR3N)
                        }),
                        (0, r.jsxs)('div', {
                            className: B.usernameInnerRow,
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
                    className: B.pomeloWarning,
                    children: (0, r.jsx)(u.ua7, {
                        text: L.NW.string(L.t.HHC5Z2),
                        children: (e) =>
                            (0, r.jsx)(
                                u.P4T,
                                U(
                                    M(
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
                    className: B.pomeloWarning,
                    children: (0, r.jsx)(u.ua7, {
                        text: h,
                        'aria-label': !1,
                        children: (e) =>
                            (0, r.jsx)(
                                u.P4T,
                                U(
                                    M(
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
                text: C,
                children: (e) =>
                    (0, r.jsx)(
                        u.zxk,
                        U(M({}, e), {
                            disabled: j,
                            size: u.zxk.Sizes.SMALL,
                            className: B.fieldButton,
                            color: u.zxk.Colors.PRIMARY,
                            'aria-label': L.NW.string(L.t['JECa9/']),
                            onClick: () =>
                                (0, u.ZDy)(async () => {
                                    if (g) {
                                        let { default: e } = await Promise.all([n.e('85342'), n.e('33612')]).then(n.bind(n, 193049));
                                        return (t) => (0, r.jsx)(e, M({ source: W.Kq.USER_SETTINGS_EDIT }, t));
                                    }
                                    {
                                        let { default: e } = await Promise.all([n.e('75492'), n.e('84956'), n.e('42758')]).then(n.bind(n, 2702));
                                        return (t) => (0, r.jsx)(e, M({}, t));
                                    }
                                }),
                            children: f ? L.NW.string(L.t['16kTw8']) : L.NW.string(L.t.bt75u7)
                        })
                    )
            })
        ]
    });
}
function F(e) {
    var t, n;
    let { user: s, className: l } = e,
        o = (0, N.gS)(),
        c = null !== (n = null == o ? void 0 : null === (t = o.nick) || void 0 === t ? void 0 : t[0]) && void 0 !== n ? n : null,
        m = A.ZP.getGlobalName(s),
        g = i.useRef(null),
        [p, h] = i.useState(!1);
    return (
        i.useEffect(() => {
            h(null != g.current && g.current.scrollWidth > g.current.clientWidth);
        }, [m]),
        (0, r.jsxs)('div', {
            className: a()(B.field, l),
            children: [
                (0, r.jsx)('div', {
                    className: B.constrainedRow,
                    children: (0, r.jsxs)('div', {
                        className: B.usernameRow,
                        children: [
                            (0, r.jsx)(u.vwX, {
                                className: B.fieldTitle,
                                children: L.NW.string(L.t['9AjdkJ'])
                            }),
                            (0, r.jsx)('div', {
                                className: B.usernameInnerRow,
                                ref: g,
                                children: (0, r.jsx)(u.Text, {
                                    tag: 'span',
                                    color: 'header-primary',
                                    variant: 'text-md/normal',
                                    children: null == m ? L.NW.string(L.t.ep5kjI) : m
                                })
                            })
                        ]
                    })
                }),
                null != c &&
                    (0, r.jsx)('div', {
                        className: B.pomeloWarning,
                        children: (0, r.jsx)(u.ua7, {
                            text: c,
                            'aria-label': !1,
                            children: (e) =>
                                (0, r.jsx)(
                                    u.P4T,
                                    U(
                                        M(
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
                    className: B.fieldButton,
                    size: u.zxk.Sizes.SMALL,
                    color: u.zxk.Colors.PRIMARY,
                    'aria-label': L.NW.string(L.t.YXeWYG),
                    onClick: q,
                    children: p ? L.NW.string(L.t['16kTw8']) : L.NW.string(L.t.bt75u7)
                })
            ]
        })
    );
}
function H(e) {
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
                children: l ? L.NW.string(L.t.fgq1go) : L.NW.string(L.t.dcztdX)
            })
        ]
    });
}
function z(e) {
    let t,
        { className: i, user: s } = e;
    if (s.isClaimed()) {
        if (null == s.email)
            t = {
                buttonText: L.NW.string(L.t.OYkgVl),
                buttonAriaLabel: L.NW.string(L.t['pvBD+f']),
                buttonColor: u.zxk.Colors.PRIMARY,
                valueMessage: L.NW.string(L.t['8SfTNz']),
                handleClick: () =>
                    (0, u.ZDy)(async () => {
                        let { default: e } = await Promise.all([n.e('9343'), n.e('8850')]).then(n.bind(n, 642298));
                        return (t) => (0, r.jsx)(e, M({}, t));
                    })
            };
        else {
            let { email: e } = s;
            t = {
                buttonText: L.NW.string(L.t.bt75u7),
                buttonAriaLabel: L.NW.string(L.t['8peUT0']),
                buttonColor: u.zxk.Colors.PRIMARY,
                valueMessage: (0, r.jsx)(H, {
                    text: e,
                    censor: D.E,
                    revealLabel: L.NW.string(L.t['Zvx+yc']),
                    hideLabel: L.NW.string(L.t.nqTD4e)
                }),
                handleClick: () =>
                    (0, u.ZDy)(async () => {
                        let { default: e } = await Promise.all([n.e('9343'), n.e('8850')]).then(n.bind(n, 642298));
                        return (t) => (0, r.jsx)(e, M({}, t));
                    })
            };
        }
    } else
        t = {
            buttonText: L.NW.string(L.t.BleMPD),
            buttonAriaLabel: L.NW.string(L.t.BleMPD),
            buttonColor: u.zxk.Colors.BRAND,
            valueMessage: L.NW.string(L.t.qxk9zs),
            handleClick: () => h.Z.openClaimAccountModal()
        };
    return (0, r.jsxs)('div', {
        className: a()(B.field, i),
        children: [
            (0, r.jsx)('div', {
                className: B.constrainedRow,
                children: (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsx)(u.vwX, {
                            className: B.fieldTitle,
                            children: L.NW.string(L.t.tlZllJ)
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
                className: B.fieldButton,
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
        { className: i, user: s } = e;
    if (!s.isClaimed()) return null;
    let { phone: l, email: o } = s,
        c = null != l;
    return (
        (t = c
            ? (0, r.jsx)(H, {
                  text: l,
                  censor: D.n,
                  revealLabel: L.NW.string(L.t.eY3xlZ),
                  hideLabel: L.NW.string(L.t.jllbv7)
              })
            : L.NW.string(L.t.I5kDqq)),
        (0, r.jsxs)('div', {
            className: a()(B.field, i),
            children: [
                (0, r.jsx)('div', {
                    className: B.constrainedRow,
                    children: (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(u.vwX, {
                                className: B.fieldTitle,
                                children: L.NW.string(L.t.kerONj)
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
                    className: B.fieldButtonList,
                    children: [
                        c && null != o
                            ? (0, r.jsx)(u.zxk, {
                                  className: a()(B.fieldButton, B.removeButton),
                                  size: u.zxk.Sizes.SMALL,
                                  look: u.zxk.Looks.LINK,
                                  color: u.zxk.Colors.PRIMARY,
                                  'aria-label': L.NW.string(L.t.Rpn4Aw),
                                  onClick: function () {
                                      (0, u.h7j)((e) =>
                                          (0, r.jsx)(
                                              p.default,
                                              U(M({}, e), {
                                                  title: L.NW.string(L.t['3CTiKi']),
                                                  children: s.hasFlag(w.xW$.MFA_SMS) ? L.NW.string(L.t.jrhJys) : void 0,
                                                  actionText: L.NW.string(L.t.N86XcH),
                                                  handleSubmit: (e) => x.Z.removePhone(e, x.L.USER_SETTINGS_UPDATE)
                                              })
                                          )
                                      );
                                  },
                                  children: L.NW.string(L.t.N86XcH)
                              })
                            : null,
                        (0, r.jsx)(u.zxk, {
                            className: B.fieldButton,
                            size: u.zxk.Sizes.SMALL,
                            color: u.zxk.Colors.PRIMARY,
                            'aria-label': c ? L.NW.string(L.t.YDabSU) : L.NW.string(L.t.SfUuEx),
                            onClick: function () {
                                (0, u.ZDy)(
                                    async () => {
                                        let { default: e } = await Promise.resolve().then(n.bind(n, 607018));
                                        return (t) => (0, r.jsx)(e, M({ reason: x.L.USER_SETTINGS_UPDATE }, t));
                                    },
                                    { modalKey: k.M }
                                );
                            },
                            children: c ? L.NW.string(L.t.bt75u7) : L.NW.string(L.t.OYkgVl)
                        })
                    ]
                })
            ]
        })
    );
}
function K(e) {
    let { user: t } = e,
        n = (0, f.Z)({
            id: t.id,
            label: L.NW.string(L.t['/AXYnJ'])
        });
    return R.Sb.useSetting() && y.wS
        ? (0, r.jsx)(u.yRy, {
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)(u.v2r, {
                      onClose: t,
                      onSelect: void 0,
                      navId: 'copy-id',
                      'aria-label': L.NW.string(L.t.RANhlJ),
                      children: n
                  });
              },
              children: (e) =>
                  (0, r.jsx)(
                      u.P3F,
                      U(M({}, e), {
                          className: B.overflowMenuButton,
                          'aria-label': L.NW.string(L.t.DEoVWV),
                          children: (0, r.jsx)(u.xhG, {
                              size: 'md',
                              color: 'currentColor',
                              className: B.overflowMenuIcon
                          })
                      })
                  )
          })
        : null;
}
function q() {
    m.Z.setSection(w.oAB.PROFILE_CUSTOMIZATION);
}
function X() {
    var e;
    let t = (0, c.e7)([I.default], () => {
            let e = I.default.getCurrentUser();
            return o()(null != e, 'UserSettingsAccountProfileCard: currentUser cannot be undefined'), e;
        }),
        n = (0, C.ZP)(t.id),
        i = (0, j.Z)(n),
        s = R.co.useSetting(),
        a = (0, c.e7)([T.Z], () => T.Z.getErrors()),
        l = null == a ? void 0 : null === (e = a.avatar) || void 0 === e ? void 0 : e[0],
        { avatarSrc: d, avatarDecorationSrc: m } = (0, O.Z)({
            user: t,
            size: u.EFr.SIZE_80
        });
    return (0, r.jsxs)('div', {
        className: B.accountProfileCard,
        children: [
            (0, r.jsx)(S.b, {
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
                className: B.userInfo,
                children: [
                    (0, r.jsx)(V, {
                        className: B.avatar,
                        src: d,
                        avatarDecoration: m,
                        status: s,
                        size: u.EFr.SIZE_80,
                        'aria-label': t.username
                    }),
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsxs)('div', {
                                className: B.profileCardUsernameRow,
                                children: [
                                    (0, r.jsx)(g.Z, {
                                        user: t,
                                        className: B.userTag,
                                        discriminatorClass: B.discriminator
                                    }),
                                    (0, r.jsx)(K, { user: t })
                                ]
                            }),
                            (0, r.jsx)(v.Z, {
                                badges: i,
                                className: B.badgeList,
                                badgeClassName: B.badge
                            })
                        ]
                    }),
                    (0, r.jsx)(u.zxk, {
                        onClick: q,
                        size: u.zxk.Sizes.SMALL,
                        children: L.NW.string(L.t['2p2aY2'])
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: B.background,
                children: [
                    null != l
                        ? (0, r.jsx)(u.Text, {
                              className: B.avatarError,
                              variant: 'text-xs/normal',
                              color: 'text-danger',
                              children: l
                          })
                        : null,
                    (0, r.jsxs)('div', {
                        className: B.fieldList,
                        children: [
                            (0, r.jsx)(E.F, {
                                setting: Z.s6.ACCOUNT_DISPLAY_NAME,
                                children: (0, r.jsx)(F, {
                                    className: B.fieldSpacerBottom,
                                    user: t
                                })
                            }),
                            (0, r.jsx)(E.F, {
                                setting: Z.s6.ACCOUNT_USERNAME,
                                children: (0, r.jsx)(G, { user: t })
                            }),
                            (0, r.jsx)(E.F, {
                                setting: Z.s6.ACCOUNT_EMAIL,
                                children: (0, r.jsx)(z, {
                                    className: B.fieldSpacer,
                                    user: t
                                })
                            }),
                            (0, r.jsx)(E.F, {
                                setting: Z.s6.ACCOUNT_PHONE_NUMBER,
                                children: (0, r.jsx)(Y, {
                                    className: B.fieldSpacer,
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
