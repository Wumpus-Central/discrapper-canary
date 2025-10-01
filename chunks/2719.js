n.d(t, { Z: () => eo }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(512722),
    l = n.n(s),
    c = n(442837),
    u = n(692547),
    d = n(755721),
    f = n(481060),
    _ = n(129861),
    p = n(279837),
    h = n(168107),
    m = n(480916),
    g = n(81643),
    E = n(952306),
    b = n(299206),
    y = n(821795),
    O = n(295474),
    v = n(144114),
    I = n(918505),
    T = n(332473),
    S = n(921801),
    A = n(438976),
    C = n(485341),
    N = n(687158),
    R = n(518950),
    P = n(184325),
    w = n(867176),
    D = n(25990),
    L = n(594174),
    x = n(572004),
    j = n(51144),
    M = n(998502),
    k = n(695346),
    U = n(313789),
    G = n(461877),
    B = n(947889),
    Z = n(726985),
    F = n(981631),
    V = n(815660),
    H = n(801461),
    Y = n(388032),
    W = n(538271);
function K(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function z(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                K(e, t, n[t]);
            });
    }
    return e;
}
function q(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function X(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : q(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let Q = M.ZP.getEnableHardwareAcceleration() ? f.Xo$ : f.qEK;
function J() {
    let e = (0, B.Z)();
    return () => {
        e(U.n.PROFILE_PANEL, { section: F.oAB.PROFILE_CUSTOMIZATION });
    };
}
function $(e) {
    var t, a;
    let { className: s, user: l } = e,
        c = i.useRef(null),
        d = (0, I.o9)(),
        _ = (0, T.b)(),
        p = (0, O.gS)(),
        h = null != (a = null == p || null == (t = p.nick) ? void 0 : t[0]) ? a : null,
        [m, g] = i.useState(!1);
    i.useEffect(() => {
        g(null != c.current && c.current.scrollWidth > c.current.clientWidth);
    }, [l.username]);
    let E = !l.isClaimed(),
        b = (d && !l.hasUniqueUsername() && !l.hasVerifiedEmailOrPhone()) || E,
        y = b ? Y.intl.string(Y.t["7Ngnys"]) : void 0;
    return (0, r.jsxs)("div", {
        className: o()(W.field, s),
        children: [
            (0, r.jsx)("div", {
                className: W.constrainedRow,
                children: (0, r.jsxs)("div", {
                    className: W.usernameRow,
                    children: [
                        (0, r.jsx)(f.vwX, {
                            className: W.fieldTitle,
                            children: Y.intl.string(Y.t.qqhR3N),
                        }),
                        (0, r.jsxs)("div", {
                            className: W.usernameInnerRow,
                            ref: c,
                            children: [
                                (0, r.jsx)(f.Text, {
                                    tag: "span",
                                    color: "header-primary",
                                    variant: "text-md/normal",
                                    children: l.username,
                                }),
                                !l.hasUniqueUsername() &&
                                    (0, r.jsxs)(f.Text, {
                                        tag: "span",
                                        color: "header-secondary",
                                        variant: "text-md/normal",
                                        children: ["#", l.discriminator],
                                    }),
                            ],
                        }),
                    ],
                }),
            }),
            _ &&
                (0, r.jsx)("div", {
                    className: W.pomeloWarning,
                    children: (0, r.jsx)(f.ua7, {
                        text: Y.intl.string(Y.t.HHC5Z2),
                        children: (e) =>
                            (0, r.jsx)(
                                f.Mgn,
                                X(
                                    z(
                                        {
                                            size: "custom",
                                            width: 20,
                                            height: 20,
                                        },
                                        e,
                                    ),
                                    { color: u.Z.colors.STATUS_WARNING.css },
                                ),
                            ),
                    }),
                }),
            null != h &&
                (0, r.jsx)("div", {
                    className: W.pomeloWarning,
                    children: (0, r.jsx)(f.ua7, {
                        text: h,
                        "aria-label": !1,
                        children: (e) =>
                            (0, r.jsx)(
                                f.Mgn,
                                X(
                                    z(
                                        {
                                            size: "custom",
                                            width: 20,
                                            height: 20,
                                        },
                                        e,
                                    ),
                                    { color: u.Z.colors.STATUS_WARNING.css },
                                ),
                            ),
                    }),
                }),
            (0, r.jsx)(f.ua7, {
                text: y,
                children: (e) =>
                    (0, r.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: W.fieldButton,
                        children: (0, r.jsx)(
                            f.zxk,
                            X(
                                z(
                                    {
                                        variant: "secondary",
                                        size: "sm",
                                        text: m ? Y.intl.string(Y.t["16kTw8"]) : Y.intl.string(Y.t.bt75u7),
                                    },
                                    e,
                                ),
                                {
                                    disabled: b,
                                    "aria-label": Y.intl.string(Y.t["JECa9/"]),
                                    onClick: () =>
                                        (0, f.ZDy)(async () => {
                                            if (_) {
                                                let { default: e } = await n.e("85342").then(n.bind(n, 193049));
                                                return (t) => (0, r.jsx)(e, z({ source: H.Kq.USER_SETTINGS_EDIT }, t));
                                            }
                                            {
                                                let { default: e } = await n.e("42758").then(n.bind(n, 2702));
                                                return (t) => (0, r.jsx)(e, z({}, t));
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
function ee(e) {
    var t, n;
    let { user: a, className: s } = e,
        l = (0, O.gS)(),
        c = null != (n = null == l || null == (t = l.nick) ? void 0 : t[0]) ? n : null,
        d = j.ZP.getGlobalName(a),
        _ = i.useRef(null),
        [p, h] = i.useState(!1);
    i.useEffect(() => {
        h(null != _.current && _.current.scrollWidth > _.current.clientWidth);
    }, [d]);
    let m = J();
    return (0, r.jsxs)("div", {
        className: o()(W.field, s),
        children: [
            (0, r.jsx)("div", {
                className: W.constrainedRow,
                children: (0, r.jsxs)("div", {
                    className: W.usernameRow,
                    children: [
                        (0, r.jsx)(f.vwX, {
                            className: W.fieldTitle,
                            children: Y.intl.string(Y.t["9AjdkJ"]),
                        }),
                        (0, r.jsx)("div", {
                            className: W.usernameInnerRow,
                            ref: _,
                            children: (0, r.jsx)(f.Text, {
                                tag: "span",
                                color: "header-primary",
                                variant: "text-md/normal",
                                children: null == d ? Y.intl.string(Y.t.ep5kjI) : d,
                            }),
                        }),
                    ],
                }),
            }),
            null != c &&
                (0, r.jsx)("div", {
                    className: W.pomeloWarning,
                    children: (0, r.jsx)(f.ua7, {
                        text: c,
                        "aria-label": !1,
                        children: (e) =>
                            (0, r.jsx)(
                                f.Mgn,
                                X(
                                    z(
                                        {
                                            size: "custom",
                                            width: 20,
                                            height: 20,
                                        },
                                        e,
                                    ),
                                    { color: u.Z.colors.STATUS_WARNING.css },
                                ),
                            ),
                    }),
                }),
            (0, r.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: W.fieldButton,
                children: (0, r.jsx)(f.zxk, {
                    variant: "secondary",
                    size: "sm",
                    text: p ? Y.intl.string(Y.t["16kTw8"]) : Y.intl.string(Y.t.bt75u7),
                    "aria-label": Y.intl.string(Y.t.YXeWYG),
                    onClick: m,
                }),
            }),
        ],
    });
}
function et(e) {
    let { text: t, censor: n, revealLabel: a, hideLabel: o } = e,
        [s, l] = i.useState(!1),
        c = s ? t : n(t);
    return (0, r.jsxs)("div", {
        className: W.textRevealer,
        children: [
            c,
            (0, r.jsx)(f.Avr, {
                variant: "primary",
                textVariant: "text-sm/medium",
                "aria-label": s ? o : a,
                onClick: () => l(!s),
                text: s ? Y.intl.string(Y.t.fgq1go) : Y.intl.string(Y.t.dcztdX),
            }),
        ],
    });
}
function en(e) {
    let t,
        { className: i, user: a } = e;
    if (a.isClaimed())
        if (null == a.email)
            t = {
                buttonText: Y.intl.string(Y.t.OYkgVl),
                buttonAriaLabel: Y.intl.string(Y.t["pvBD+f"]),
                buttonColor: d.zx.Colors.PRIMARY,
                valueMessage: Y.intl.string(Y.t["8SfTNz"]),
                handleClick: () =>
                    (0, f.ZDy)(async () => {
                        let { default: e } = await n.e("9343").then(n.bind(n, 642298));
                        return (t) => (0, r.jsx)(e, z({}, t));
                    }),
            };
        else {
            let { email: e } = a;
            t = {
                buttonText: Y.intl.string(Y.t.bt75u7),
                buttonAriaLabel: Y.intl.string(Y.t["8peUT0"]),
                buttonColor: d.zx.Colors.PRIMARY,
                valueMessage: (0, r.jsx)(et, {
                    text: e,
                    censor: G.E,
                    revealLabel: Y.intl.string(Y.t["Zvx+yc"]),
                    hideLabel: Y.intl.string(Y.t.nqTD4e),
                }),
                handleClick: () =>
                    (0, f.ZDy)(async () => {
                        let { default: e } = await n.e("9343").then(n.bind(n, 642298));
                        return (t) => (0, r.jsx)(e, z({}, t));
                    }),
            };
        }
    else
        t = {
            buttonText: Y.intl.string(Y.t.BleMPD),
            buttonAriaLabel: Y.intl.string(Y.t.BleMPD),
            buttonColor: d.zx.Colors.BRAND,
            valueMessage: Y.intl.string(Y.t.qxk9zs),
            handleClick: () => E.Z.openClaimAccountModal(),
        };
    return (0, r.jsxs)("div", {
        className: o()(W.field, i),
        children: [
            (0, r.jsx)("div", {
                className: W.constrainedRow,
                children: (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(f.vwX, {
                            className: W.fieldTitle,
                            children: Y.intl.string(Y.t.tlZllJ),
                        }),
                        (0, r.jsx)("div", {
                            children: (0, r.jsx)(f.Text, {
                                tag: "span",
                                color: "header-primary",
                                variant: "text-md/normal",
                                children: t.valueMessage,
                            }),
                        }),
                    ],
                }),
            }),
            (0, r.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: W.fieldButton,
                children: (0, r.jsx)(f.zxk, {
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
function er(e) {
    let t,
        { className: i, user: a } = e;
    if (!a.isClaimed()) return null;
    let { phone: s, email: l } = a,
        c = null != s,
        u = null != l;
    function _() {
        (0, f.ZDy)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 607018));
                return (t) => (0, r.jsx)(e, z({ reason: v.L.USER_SETTINGS_UPDATE }, t));
            },
            { modalKey: V.M },
        );
    }
    function h() {
        (0, f.h7j)((e) =>
            (0, r.jsx)(
                p.Z,
                X(z({}, e), {
                    title: Y.intl.string(Y.t["3CTiKi"]),
                    children: a.hasFlag(F.xW$.MFA_SMS) ? Y.intl.string(Y.t.jrhJys) : void 0,
                    actionText: Y.intl.string(Y.t.N86XcH),
                    handleSubmit: (e) => v.Z.removePhone(e, v.L.USER_SETTINGS_UPDATE),
                }),
            ),
        );
    }
    return (
        (t = c
            ? (0, r.jsx)(et, {
                  text: s,
                  censor: G.n,
                  revealLabel: Y.intl.string(Y.t.eY3xlZ),
                  hideLabel: Y.intl.string(Y.t.jllbv7),
              })
            : Y.intl.string(Y.t.I5kDqq)),
        (0, r.jsxs)("div", {
            className: o()(W.field, i),
            children: [
                (0, r.jsx)("div", {
                    className: W.constrainedRow,
                    children: (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(f.vwX, {
                                className: W.fieldTitle,
                                children: Y.intl.string(Y.t.kerONj),
                            }),
                            (0, r.jsx)("div", {
                                children: (0, r.jsx)(f.Text, {
                                    tag: "span",
                                    color: "header-primary",
                                    variant: "text-md/normal",
                                    children: t,
                                }),
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: W.fieldButtonList,
                    children: [
                        c && u
                            ? (0, r.jsx)(d.zx, {
                                  className: o()(W.fieldButton, W.removeButton),
                                  size: d.zx.Sizes.SMALL,
                                  look: d.zx.Looks.LINK,
                                  color: d.zx.Colors.PRIMARY,
                                  "aria-label": Y.intl.string(Y.t.Rpn4Aw),
                                  onClick: h,
                                  children: Y.intl.string(Y.t.N86XcH),
                              })
                            : null,
                        (0, r.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: W.fieldButton,
                            children: (0, r.jsx)(f.zxk, {
                                variant: "secondary",
                                size: "sm",
                                text: c ? Y.intl.string(Y.t.bt75u7) : Y.intl.string(Y.t.OYkgVl),
                                "aria-label": c ? Y.intl.string(Y.t.YDabSU) : Y.intl.string(Y.t.SfUuEx),
                                onClick: _,
                            }),
                        }),
                    ],
                }),
            ],
        })
    );
}
function ei(e) {
    let { user: t } = e,
        n = (0, b.Z)({
            id: t.id,
            label: Y.intl.string(Y.t["/AXYnJ"]),
        }),
        a = k.Sb.useSetting(),
        o = i.useRef(null);
    return a && x.wS
        ? (0, r.jsx)(f.yRy, {
              targetElementRef: o,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)(f.v2r, {
                      onClose: t,
                      onSelect: void 0,
                      navId: "copy-id",
                      "aria-label": Y.intl.string(Y.t.RANhlJ),
                      children: n,
                  });
              },
              children: (e) =>
                  (0, r.jsx)(
                      f.P3F,
                      X(z({}, e), {
                          innerRef: o,
                          className: W.overflowMenuButton,
                          "aria-label": Y.intl.string(Y.t.DEoVWV),
                          children: (0, r.jsx)(f.xhG, {
                              size: "md",
                              color: "currentColor",
                              className: W.overflowMenuIcon,
                          }),
                      }),
                  ),
          })
        : null;
}
function ea(e) {
    let { className: t } = e,
        n = (0, g.l6)(),
        a = (0, g.Jm)(),
        s = !n || a,
        l = i.useMemo(
            () => (n ? (a ? Y.intl.string(Y.t.sK0dmJ) : Y.intl.string(Y.t.XxRj7e)) : Y.intl.string(Y.t.UX0OdX)),
            [n, a],
        );
    return (0, r.jsxs)("div", {
        className: o()(W.field, t),
        children: [
            (0, r.jsx)("div", {
                className: W.constrainedRow,
                children: (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(f.vwX, {
                            className: W.fieldTitle,
                            children: Y.intl.string(Y.t["/52UY2"]),
                        }),
                        (0, r.jsx)("div", {
                            children: (0, r.jsx)(f.Text, {
                                tag: "span",
                                color: "header-primary",
                                variant: "text-md/normal",
                                children: l,
                            }),
                        }),
                    ],
                }),
            }),
            s &&
                (0, r.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: W.fieldButton,
                    children: (0, r.jsx)(f.zxk, {
                        variant: "secondary",
                        size: "sm",
                        text: a ? Y.intl.string(Y.t.KPGVWl) : Y.intl.string(Y.t.yNGjyM),
                        "aria-label": a ? Y.intl.string(Y.t.KPGVWl) : Y.intl.string(Y.t.yNGjyM),
                        onClick: () => h.Z.showAgeVerificationGetStartedModal({ entryPoint: m.cU.ACCOUNT_AGE_GROUP }),
                    }),
                }),
        ],
    });
}
function eo() {
    var e;
    let t = (0, c.e7)([L.default], () => {
            let e = L.default.getCurrentUser();
            return l()(null != e, "UserSettingsAccountProfileCard: currentUser cannot be undefined"), e;
        }),
        n = (0, N.ZP)(t.id),
        i = (0, C.Z)(n),
        a = k.co.useSetting(),
        o = (0, c.e7)([D.Z], () => D.Z.getErrors()),
        s = null == o || null == (e = o.avatar) ? void 0 : e[0],
        { avatarSrc: u, avatarDecorationSrc: d } = (0, R.Z)({
            userId: null == t ? void 0 : t.id,
            size: f.EFr.SIZE_80,
        }),
        p = J(),
        h = (0, A.Z)();
    return (0, r.jsxs)("div", {
        className: W.accountProfileCard,
        children: [
            (0, r.jsx)(w.b, {
                user: t,
                displayProfile: n,
                avatarSize: f.EFr.SIZE_80,
                avatarOffsetX: 16,
                avatarOffsetY: -22,
                bannerWidth: h ? 696 : 660,
                bannerHeight: 100,
                themePadding: 0,
            }),
            (0, r.jsxs)("div", {
                className: W.userInfo,
                children: [
                    (0, r.jsx)(Q, {
                        className: W.avatar,
                        src: u,
                        avatarDecoration: d,
                        status: a,
                        size: f.EFr.SIZE_80,
                        "aria-label": t.username,
                    }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsxs)("div", {
                                className: W.profileCardUsernameRow,
                                children: [
                                    (0, r.jsx)(_.Z, {
                                        user: t,
                                        className: W.userTag,
                                        discriminatorClass: W.discriminator,
                                        displayNameStylesType: y.F.STATIC,
                                    }),
                                    (0, r.jsx)(ei, { user: t }),
                                ],
                            }),
                            (0, r.jsx)(P.Z, {
                                badges: i,
                                className: W.badgeList,
                                badgeClassName: W.badge,
                            }),
                        ],
                    }),
                    (0, r.jsx)(f.zxk, {
                        variant: "primary",
                        size: "sm",
                        text: Y.intl.string(Y.t["2p2aY2"]),
                        onClick: p,
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: W.background,
                children: [
                    null != s
                        ? (0, r.jsx)(f.Text, {
                              className: W.avatarError,
                              variant: "text-xs/normal",
                              color: "text-danger",
                              children: s,
                          })
                        : null,
                    (0, r.jsxs)("div", {
                        className: W.fieldList,
                        children: [
                            (0, r.jsx)(S.F, {
                                setting: Z.s6.ACCOUNT_DISPLAY_NAME,
                                children: (0, r.jsx)(ee, {
                                    className: W.fieldSpacerBottom,
                                    user: t,
                                }),
                            }),
                            (0, r.jsx)(S.F, {
                                setting: Z.s6.ACCOUNT_USERNAME,
                                children: (0, r.jsx)($, { user: t }),
                            }),
                            (0, r.jsx)(S.F, {
                                setting: Z.s6.ACCOUNT_EMAIL,
                                children: (0, r.jsx)(en, {
                                    className: W.fieldSpacer,
                                    user: t,
                                }),
                            }),
                            (0, r.jsx)(S.F, {
                                setting: Z.s6.ACCOUNT_PHONE_NUMBER,
                                children: (0, r.jsx)(er, {
                                    className: W.fieldSpacer,
                                    user: t,
                                }),
                            }),
                            (0, r.jsx)(S.F, {
                                setting: Z.s6.ACCOUNT_AGE_GROUP,
                                children: (0, r.jsx)(ea, { className: W.fieldSpacer }),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
