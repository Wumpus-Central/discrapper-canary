n.d(t, { Z: () => en }), n(388685);
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
    E = n(821795),
    C = n(295474),
    O = n(144114),
    v = n(918505),
    S = n(332473),
    T = n(921801),
    N = n(485341),
    I = n(687158),
    y = n(518950),
    A = n(184325),
    P = n(867176),
    R = n(25990),
    D = n(594174),
    Z = n(572004),
    w = n(51144),
    k = n(998502),
    L = n(695346),
    B = n(461877),
    M = n(726985),
    U = n(981631),
    V = n(815660),
    G = n(801461),
    F = n(388032),
    H = n(378846);
function z(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
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
let Y = k.ZP.getEnableHardwareAcceleration() ? m.Xo$ : m.qEK;
function K(e) {
    var t, s;
    let { className: l, user: o } = e,
        c = r.useRef(null),
        u = (0, v.o9)(),
        p = (0, S.b)(),
        g = (0, C.gS)(),
        h = null != (s = null == g || null == (t = g.nick) ? void 0 : t[0]) ? s : null,
        [f, b] = r.useState(!1);
    r.useEffect(() => {
        b(null != c.current && c.current.scrollWidth > c.current.clientWidth);
    }, [o.username]);
    let x = !o.isClaimed(),
        _ = (u && !o.hasUniqueUsername() && !o.hasVerifiedEmailOrPhone()) || x,
        j = _ ? F.intl.string(F.t["7Ngnys"]) : void 0;
    return (0, i.jsxs)("div", {
        className: a()(H.field, l),
        children: [
            (0, i.jsx)("div", {
                className: H.constrainedRow,
                children: (0, i.jsxs)("div", {
                    className: H.usernameRow,
                    children: [
                        (0, i.jsx)(m.vwX, {
                            className: H.fieldTitle,
                            children: F.intl.string(F.t.qqhR3N),
                        }),
                        (0, i.jsxs)("div", {
                            className: H.usernameInnerRow,
                            ref: c,
                            children: [
                                (0, i.jsx)(m.Text, {
                                    tag: "span",
                                    color: "header-primary",
                                    variant: "text-md/normal",
                                    children: o.username,
                                }),
                                !o.hasUniqueUsername() &&
                                    (0, i.jsxs)(m.Text, {
                                        tag: "span",
                                        color: "header-secondary",
                                        variant: "text-md/normal",
                                        children: ["#", o.discriminator],
                                    }),
                            ],
                        }),
                    ],
                }),
            }),
            p &&
                (0, i.jsx)("div", {
                    className: H.pomeloWarning,
                    children: (0, i.jsx)(m.ua7, {
                        text: F.intl.string(F.t.HHC5Z2),
                        children: (e) =>
                            (0, i.jsx)(
                                m.Mgn,
                                W(
                                    z(
                                        {
                                            size: "custom",
                                            width: 20,
                                            height: 20,
                                        },
                                        e,
                                    ),
                                    { color: d.Z.colors.STATUS_WARNING.css },
                                ),
                            ),
                    }),
                }),
            null != h &&
                (0, i.jsx)("div", {
                    className: H.pomeloWarning,
                    children: (0, i.jsx)(m.ua7, {
                        text: h,
                        "aria-label": !1,
                        children: (e) =>
                            (0, i.jsx)(
                                m.Mgn,
                                W(
                                    z(
                                        {
                                            size: "custom",
                                            width: 20,
                                            height: 20,
                                        },
                                        e,
                                    ),
                                    { color: d.Z.colors.STATUS_WARNING.css },
                                ),
                            ),
                    }),
                }),
            (0, i.jsx)(m.ua7, {
                text: j,
                children: (e) =>
                    (0, i.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: H.fieldButton,
                        children: (0, i.jsx)(
                            m.zxk,
                            W(
                                z(
                                    {
                                        variant: "secondary",
                                        size: "sm",
                                        text: f ? F.intl.string(F.t["16kTw8"]) : F.intl.string(F.t.bt75u7),
                                    },
                                    e,
                                ),
                                {
                                    disabled: _,
                                    "aria-label": F.intl.string(F.t["JECa9/"]),
                                    onClick: () =>
                                        (0, m.ZDy)(async () => {
                                            if (p) {
                                                let { default: e } = await n.e("85342").then(n.bind(n, 193049));
                                                return (t) => (0, i.jsx)(e, z({ source: G.Kq.USER_SETTINGS_EDIT }, t));
                                            }
                                            {
                                                let { default: e } = await Promise.all([
                                                    n.e("84956"),
                                                    n.e("42758"),
                                                ]).then(n.bind(n, 2702));
                                                return (t) => (0, i.jsx)(e, z({}, t));
                                            }
                                        }),
                                },
                            ),
                        ),
                    }),
            }),
        ],
    });
}
function q(e) {
    var t, n;
    let { user: s, className: l } = e,
        o = (0, C.gS)(),
        c = null != (n = null == o || null == (t = o.nick) ? void 0 : t[0]) ? n : null,
        u = w.ZP.getGlobalName(s),
        p = r.useRef(null),
        [g, h] = r.useState(!1);
    return (
        r.useEffect(() => {
            h(null != p.current && p.current.scrollWidth > p.current.clientWidth);
        }, [u]),
        (0, i.jsxs)("div", {
            className: a()(H.field, l),
            children: [
                (0, i.jsx)("div", {
                    className: H.constrainedRow,
                    children: (0, i.jsxs)("div", {
                        className: H.usernameRow,
                        children: [
                            (0, i.jsx)(m.vwX, {
                                className: H.fieldTitle,
                                children: F.intl.string(F.t["9AjdkJ"]),
                            }),
                            (0, i.jsx)("div", {
                                className: H.usernameInnerRow,
                                ref: p,
                                children: (0, i.jsx)(m.Text, {
                                    tag: "span",
                                    color: "header-primary",
                                    variant: "text-md/normal",
                                    children: null == u ? F.intl.string(F.t.ep5kjI) : u,
                                }),
                            }),
                        ],
                    }),
                }),
                null != c &&
                    (0, i.jsx)("div", {
                        className: H.pomeloWarning,
                        children: (0, i.jsx)(m.ua7, {
                            text: c,
                            "aria-label": !1,
                            children: (e) =>
                                (0, i.jsx)(
                                    m.Mgn,
                                    W(
                                        z(
                                            {
                                                size: "custom",
                                                width: 20,
                                                height: 20,
                                            },
                                            e,
                                        ),
                                        { color: d.Z.colors.STATUS_WARNING.css },
                                    ),
                                ),
                        }),
                    }),
                (0, i.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: H.fieldButton,
                    children: (0, i.jsx)(m.zxk, {
                        variant: "secondary",
                        size: "sm",
                        text: g ? F.intl.string(F.t["16kTw8"]) : F.intl.string(F.t.bt75u7),
                        "aria-label": F.intl.string(F.t.YXeWYG),
                        onClick: ee,
                    }),
                }),
            ],
        })
    );
}
function X(e) {
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
                "aria-label": l ? a : s,
                onClick: () => o(!l),
                children: l ? F.intl.string(F.t.fgq1go) : F.intl.string(F.t.dcztdX),
            }),
        ],
    });
}
function J(e) {
    let t,
        { className: r, user: s } = e;
    if (s.isClaimed())
        if (null == s.email)
            t = {
                buttonText: F.intl.string(F.t.OYkgVl),
                buttonAriaLabel: F.intl.string(F.t["pvBD+f"]),
                buttonColor: u.zx.Colors.PRIMARY,
                valueMessage: F.intl.string(F.t["8SfTNz"]),
                handleClick: () =>
                    (0, m.ZDy)(async () => {
                        let { default: e } = await Promise.all([n.e("9343"), n.e("28175")]).then(n.bind(n, 642298));
                        return (t) => (0, i.jsx)(e, z({}, t));
                    }),
            };
        else {
            let { email: e } = s;
            t = {
                buttonText: F.intl.string(F.t.bt75u7),
                buttonAriaLabel: F.intl.string(F.t["8peUT0"]),
                buttonColor: u.zx.Colors.PRIMARY,
                valueMessage: (0, i.jsx)(X, {
                    text: e,
                    censor: B.E,
                    revealLabel: F.intl.string(F.t["Zvx+yc"]),
                    hideLabel: F.intl.string(F.t.nqTD4e),
                }),
                handleClick: () =>
                    (0, m.ZDy)(async () => {
                        let { default: e } = await Promise.all([n.e("9343"), n.e("28175")]).then(n.bind(n, 642298));
                        return (t) => (0, i.jsx)(e, z({}, t));
                    }),
            };
        }
    else
        t = {
            buttonText: F.intl.string(F.t.BleMPD),
            buttonAriaLabel: F.intl.string(F.t.BleMPD),
            buttonColor: u.zx.Colors.BRAND,
            valueMessage: F.intl.string(F.t.qxk9zs),
            handleClick: () => _.Z.openClaimAccountModal(),
        };
    return (0, i.jsxs)("div", {
        className: a()(H.field, r),
        children: [
            (0, i.jsx)("div", {
                className: H.constrainedRow,
                children: (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)(m.vwX, {
                            className: H.fieldTitle,
                            children: F.intl.string(F.t.tlZllJ),
                        }),
                        (0, i.jsx)("div", {
                            children: (0, i.jsx)(m.Text, {
                                tag: "span",
                                color: "header-primary",
                                variant: "text-md/normal",
                                children: t.valueMessage,
                            }),
                        }),
                    ],
                }),
            }),
            (0, i.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: H.fieldButton,
                children: (0, i.jsx)(m.zxk, {
                    variant: "secondary",
                    size: "sm",
                    text: t.buttonText,
                    "aria-label": t.buttonAriaLabel,
                    onClick: t.handleClick,
                }),
            }),
        ],
    });
}
function Q(e) {
    let t,
        { className: r, user: s } = e;
    if (!s.isClaimed()) return null;
    let { phone: l, email: o } = s,
        c = null != l;
    return (
        (t = c
            ? (0, i.jsx)(X, {
                  text: l,
                  censor: B.n,
                  revealLabel: F.intl.string(F.t.eY3xlZ),
                  hideLabel: F.intl.string(F.t.jllbv7),
              })
            : F.intl.string(F.t.I5kDqq)),
        (0, i.jsxs)("div", {
            className: a()(H.field, r),
            children: [
                (0, i.jsx)("div", {
                    className: H.constrainedRow,
                    children: (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(m.vwX, {
                                className: H.fieldTitle,
                                children: F.intl.string(F.t.kerONj),
                            }),
                            (0, i.jsx)("div", {
                                children: (0, i.jsx)(m.Text, {
                                    tag: "span",
                                    color: "header-primary",
                                    variant: "text-md/normal",
                                    children: t,
                                }),
                            }),
                        ],
                    }),
                }),
                (0, i.jsxs)("div", {
                    className: H.fieldButtonList,
                    children: [
                        c && null != o
                            ? (0, i.jsx)(u.zx, {
                                  className: a()(H.fieldButton, H.removeButton),
                                  size: u.zx.Sizes.SMALL,
                                  look: u.zx.Looks.LINK,
                                  color: u.zx.Colors.PRIMARY,
                                  "aria-label": F.intl.string(F.t.Rpn4Aw),
                                  onClick: function () {
                                      (0, m.h7j)((e) =>
                                          (0, i.jsx)(
                                              h.Z,
                                              W(z({}, e), {
                                                  title: F.intl.string(F.t["3CTiKi"]),
                                                  children: s.hasFlag(U.xW$.MFA_SMS)
                                                      ? F.intl.string(F.t.jrhJys)
                                                      : void 0,
                                                  actionText: F.intl.string(F.t.N86XcH),
                                                  handleSubmit: (e) => O.Z.removePhone(e, O.L.USER_SETTINGS_UPDATE),
                                              }),
                                          ),
                                      );
                                  },
                                  children: F.intl.string(F.t.N86XcH),
                              })
                            : null,
                        (0, i.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: H.fieldButton,
                            children: (0, i.jsx)(m.zxk, {
                                variant: "secondary",
                                size: "sm",
                                text: c ? F.intl.string(F.t.bt75u7) : F.intl.string(F.t.OYkgVl),
                                "aria-label": c ? F.intl.string(F.t.YDabSU) : F.intl.string(F.t.SfUuEx),
                                onClick: function () {
                                    (0, m.ZDy)(
                                        async () => {
                                            let { default: e } = await Promise.resolve().then(n.bind(n, 607018));
                                            return (t) => (0, i.jsx)(e, z({ reason: O.L.USER_SETTINGS_UPDATE }, t));
                                        },
                                        { modalKey: V.M },
                                    );
                                },
                            }),
                        }),
                    ],
                }),
            ],
        })
    );
}
function $(e) {
    let { user: t } = e,
        n = (0, j.Z)({
            id: t.id,
            label: F.intl.string(F.t["/AXYnJ"]),
        }),
        s = L.Sb.useSetting(),
        a = r.useRef(null);
    return s && Z.wS
        ? (0, i.jsx)(m.yRy, {
              targetElementRef: a,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, i.jsx)(m.v2r, {
                      onClose: t,
                      onSelect: void 0,
                      navId: "copy-id",
                      "aria-label": F.intl.string(F.t.RANhlJ),
                      children: n,
                  });
              },
              children: (e) =>
                  (0, i.jsx)(
                      m.P3F,
                      W(z({}, e), {
                          innerRef: a,
                          className: H.overflowMenuButton,
                          "aria-label": F.intl.string(F.t.DEoVWV),
                          children: (0, i.jsx)(m.xhG, {
                              size: "md",
                              color: "currentColor",
                              className: H.overflowMenuIcon,
                          }),
                      }),
                  ),
          })
        : null;
}
function ee() {
    p.Z.setSection(U.oAB.PROFILE_CUSTOMIZATION);
}
function et(e) {
    let { className: t } = e,
        n = (0, x.l6)(),
        s = (0, x.Jm)(),
        l = !n || s,
        o = r.useMemo(
            () => (n ? (s ? F.intl.string(F.t.sK0dmJ) : F.intl.string(F.t.XxRj7e)) : F.intl.string(F.t.UX0OdX)),
            [n, s],
        );
    return (0, i.jsxs)("div", {
        className: a()(H.field, t),
        children: [
            (0, i.jsx)("div", {
                className: H.constrainedRow,
                children: (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)(m.vwX, {
                            className: H.fieldTitle,
                            children: F.intl.string(F.t["/52UY2"]),
                        }),
                        (0, i.jsx)("div", {
                            children: (0, i.jsx)(m.Text, {
                                tag: "span",
                                color: "header-primary",
                                variant: "text-md/normal",
                                children: o,
                            }),
                        }),
                    ],
                }),
            }),
            l &&
                (0, i.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: H.fieldButton,
                    children: (0, i.jsx)(m.zxk, {
                        variant: "secondary",
                        size: "sm",
                        text: s ? F.intl.string(F.t.KPGVWl) : F.intl.string(F.t.yNGjyM),
                        "aria-label": s ? F.intl.string(F.t.KPGVWl) : F.intl.string(F.t.yNGjyM),
                        onClick: () => f.Z.showAgeVerificationGetStartedModal(b.cU.ACCOUNT_AGE_GROUP),
                    }),
                }),
        ],
    });
}
function en() {
    var e;
    let t = (0, c.e7)([D.default], () => {
            let e = D.default.getCurrentUser();
            return o()(null != e, "UserSettingsAccountProfileCard: currentUser cannot be undefined"), e;
        }),
        n = (0, I.ZP)(t.id),
        r = (0, N.Z)(n),
        s = L.co.useSetting(),
        a = (0, c.e7)([R.Z], () => R.Z.getErrors()),
        l = null == a || null == (e = a.avatar) ? void 0 : e[0],
        { avatarSrc: d, avatarDecorationSrc: u } = (0, y.Z)({
            userId: null == t ? void 0 : t.id,
            size: m.EFr.SIZE_80,
        });
    return (0, i.jsxs)("div", {
        className: H.accountProfileCard,
        children: [
            (0, i.jsx)(P.b, {
                user: t,
                displayProfile: n,
                avatarSize: m.EFr.SIZE_80,
                avatarOffsetX: 16,
                avatarOffsetY: -22,
                bannerWidth: 660,
                bannerHeight: 100,
                themePadding: 0,
            }),
            (0, i.jsxs)("div", {
                className: H.userInfo,
                children: [
                    (0, i.jsx)(Y, {
                        className: H.avatar,
                        src: d,
                        avatarDecoration: u,
                        status: s,
                        size: m.EFr.SIZE_80,
                        "aria-label": t.username,
                    }),
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsxs)("div", {
                                className: H.profileCardUsernameRow,
                                children: [
                                    (0, i.jsx)(g.Z, {
                                        user: t,
                                        className: H.userTag,
                                        discriminatorClass: H.discriminator,
                                        displayNameStylesType: E.F.STATIC,
                                    }),
                                    (0, i.jsx)($, { user: t }),
                                ],
                            }),
                            (0, i.jsx)(A.Z, {
                                badges: r,
                                className: H.badgeList,
                                badgeClassName: H.badge,
                            }),
                        ],
                    }),
                    (0, i.jsx)(m.zxk, {
                        variant: "primary",
                        size: "sm",
                        text: F.intl.string(F.t["2p2aY2"]),
                        onClick: ee,
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: H.background,
                children: [
                    null != l
                        ? (0, i.jsx)(m.Text, {
                              className: H.avatarError,
                              variant: "text-xs/normal",
                              color: "text-danger",
                              children: l,
                          })
                        : null,
                    (0, i.jsxs)("div", {
                        className: H.fieldList,
                        children: [
                            (0, i.jsx)(T.F, {
                                setting: M.s6.ACCOUNT_DISPLAY_NAME,
                                children: (0, i.jsx)(q, {
                                    className: H.fieldSpacerBottom,
                                    user: t,
                                }),
                            }),
                            (0, i.jsx)(T.F, {
                                setting: M.s6.ACCOUNT_USERNAME,
                                children: (0, i.jsx)(K, { user: t }),
                            }),
                            (0, i.jsx)(T.F, {
                                setting: M.s6.ACCOUNT_EMAIL,
                                children: (0, i.jsx)(J, {
                                    className: H.fieldSpacer,
                                    user: t,
                                }),
                            }),
                            (0, i.jsx)(T.F, {
                                setting: M.s6.ACCOUNT_PHONE_NUMBER,
                                children: (0, i.jsx)(Q, {
                                    className: H.fieldSpacer,
                                    user: t,
                                }),
                            }),
                            (0, i.jsx)(T.F, {
                                setting: M.s6.ACCOUNT_AGE_GROUP,
                                children: (0, i.jsx)(et, { className: H.fieldSpacer }),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
