n.d(t, { Z: () => ea }), n(388685);
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
    A = n(485341),
    C = n(687158),
    N = n(518950),
    R = n(184325),
    P = n(867176),
    w = n(25990),
    D = n(594174),
    x = n(572004),
    L = n(51144),
    j = n(998502),
    M = n(695346),
    k = n(313789),
    U = n(461877),
    G = n(947889),
    B = n(726985),
    Z = n(981631),
    F = n(815660),
    V = n(801461),
    H = n(388032),
    Y = n(378846);
function W(e, t, n) {
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
function K(e) {
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
                W(e, t, n[t]);
            });
    }
    return e;
}
function z(e, t) {
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
function q(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : z(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let X = j.ZP.getEnableHardwareAcceleration() ? f.Xo$ : f.qEK;
function Q() {
    let e = (0, G.Z)();
    return () => {
        e(k.n.PROFILE_PANEL, { section: Z.oAB.PROFILE_CUSTOMIZATION });
    };
}
function J(e) {
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
        y = b ? H.intl.string(H.t["7Ngnys"]) : void 0;
    return (0, r.jsxs)("div", {
        className: o()(Y.field, s),
        children: [
            (0, r.jsx)("div", {
                className: Y.constrainedRow,
                children: (0, r.jsxs)("div", {
                    className: Y.usernameRow,
                    children: [
                        (0, r.jsx)(f.vwX, {
                            className: Y.fieldTitle,
                            children: H.intl.string(H.t.qqhR3N),
                        }),
                        (0, r.jsxs)("div", {
                            className: Y.usernameInnerRow,
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
                    className: Y.pomeloWarning,
                    children: (0, r.jsx)(f.ua7, {
                        text: H.intl.string(H.t.HHC5Z2),
                        children: (e) =>
                            (0, r.jsx)(
                                f.Mgn,
                                q(
                                    K(
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
                    className: Y.pomeloWarning,
                    children: (0, r.jsx)(f.ua7, {
                        text: h,
                        "aria-label": !1,
                        children: (e) =>
                            (0, r.jsx)(
                                f.Mgn,
                                q(
                                    K(
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
                        className: Y.fieldButton,
                        children: (0, r.jsx)(
                            f.zxk,
                            q(
                                K(
                                    {
                                        variant: "secondary",
                                        size: "sm",
                                        text: m ? H.intl.string(H.t["16kTw8"]) : H.intl.string(H.t.bt75u7),
                                    },
                                    e,
                                ),
                                {
                                    disabled: b,
                                    "aria-label": H.intl.string(H.t["JECa9/"]),
                                    onClick: () =>
                                        (0, f.ZDy)(async () => {
                                            if (_) {
                                                let { default: e } = await n.e("85342").then(n.bind(n, 193049));
                                                return (t) => (0, r.jsx)(e, K({ source: V.Kq.USER_SETTINGS_EDIT }, t));
                                            }
                                            {
                                                let { default: e } = await Promise.all([
                                                    n.e("84956"),
                                                    n.e("42758"),
                                                ]).then(n.bind(n, 2702));
                                                return (t) => (0, r.jsx)(e, K({}, t));
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
function $(e) {
    var t, n;
    let { user: a, className: s } = e,
        l = (0, O.gS)(),
        c = null != (n = null == l || null == (t = l.nick) ? void 0 : t[0]) ? n : null,
        d = L.ZP.getGlobalName(a),
        _ = i.useRef(null),
        [p, h] = i.useState(!1);
    i.useEffect(() => {
        h(null != _.current && _.current.scrollWidth > _.current.clientWidth);
    }, [d]);
    let m = Q();
    return (0, r.jsxs)("div", {
        className: o()(Y.field, s),
        children: [
            (0, r.jsx)("div", {
                className: Y.constrainedRow,
                children: (0, r.jsxs)("div", {
                    className: Y.usernameRow,
                    children: [
                        (0, r.jsx)(f.vwX, {
                            className: Y.fieldTitle,
                            children: H.intl.string(H.t["9AjdkJ"]),
                        }),
                        (0, r.jsx)("div", {
                            className: Y.usernameInnerRow,
                            ref: _,
                            children: (0, r.jsx)(f.Text, {
                                tag: "span",
                                color: "header-primary",
                                variant: "text-md/normal",
                                children: null == d ? H.intl.string(H.t.ep5kjI) : d,
                            }),
                        }),
                    ],
                }),
            }),
            null != c &&
                (0, r.jsx)("div", {
                    className: Y.pomeloWarning,
                    children: (0, r.jsx)(f.ua7, {
                        text: c,
                        "aria-label": !1,
                        children: (e) =>
                            (0, r.jsx)(
                                f.Mgn,
                                q(
                                    K(
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
                className: Y.fieldButton,
                children: (0, r.jsx)(f.zxk, {
                    variant: "secondary",
                    size: "sm",
                    text: p ? H.intl.string(H.t["16kTw8"]) : H.intl.string(H.t.bt75u7),
                    "aria-label": H.intl.string(H.t.YXeWYG),
                    onClick: m,
                }),
            }),
        ],
    });
}
function ee(e) {
    let { text: t, censor: n, revealLabel: a, hideLabel: o } = e,
        [s, l] = i.useState(!1),
        c = s ? t : n(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            c,
            (0, r.jsx)(d.zx, {
                look: d.zx.Looks.LINK,
                size: d.zx.Sizes.MIN,
                color: d.zx.Colors.LINK,
                "aria-label": s ? o : a,
                onClick: () => l(!s),
                children: s ? H.intl.string(H.t.fgq1go) : H.intl.string(H.t.dcztdX),
            }),
        ],
    });
}
function et(e) {
    let t,
        { className: i, user: a } = e;
    if (a.isClaimed())
        if (null == a.email)
            t = {
                buttonText: H.intl.string(H.t.OYkgVl),
                buttonAriaLabel: H.intl.string(H.t["pvBD+f"]),
                buttonColor: d.zx.Colors.PRIMARY,
                valueMessage: H.intl.string(H.t["8SfTNz"]),
                handleClick: () =>
                    (0, f.ZDy)(async () => {
                        let { default: e } = await n.e("9343").then(n.bind(n, 642298));
                        return (t) => (0, r.jsx)(e, K({}, t));
                    }),
            };
        else {
            let { email: e } = a;
            t = {
                buttonText: H.intl.string(H.t.bt75u7),
                buttonAriaLabel: H.intl.string(H.t["8peUT0"]),
                buttonColor: d.zx.Colors.PRIMARY,
                valueMessage: (0, r.jsx)(ee, {
                    text: e,
                    censor: U.E,
                    revealLabel: H.intl.string(H.t["Zvx+yc"]),
                    hideLabel: H.intl.string(H.t.nqTD4e),
                }),
                handleClick: () =>
                    (0, f.ZDy)(async () => {
                        let { default: e } = await n.e("9343").then(n.bind(n, 642298));
                        return (t) => (0, r.jsx)(e, K({}, t));
                    }),
            };
        }
    else
        t = {
            buttonText: H.intl.string(H.t.BleMPD),
            buttonAriaLabel: H.intl.string(H.t.BleMPD),
            buttonColor: d.zx.Colors.BRAND,
            valueMessage: H.intl.string(H.t.qxk9zs),
            handleClick: () => E.Z.openClaimAccountModal(),
        };
    return (0, r.jsxs)("div", {
        className: o()(Y.field, i),
        children: [
            (0, r.jsx)("div", {
                className: Y.constrainedRow,
                children: (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(f.vwX, {
                            className: Y.fieldTitle,
                            children: H.intl.string(H.t.tlZllJ),
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
                className: Y.fieldButton,
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
function en(e) {
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
                return (t) => (0, r.jsx)(e, K({ reason: v.L.USER_SETTINGS_UPDATE }, t));
            },
            { modalKey: F.M },
        );
    }
    function h() {
        (0, f.h7j)((e) =>
            (0, r.jsx)(
                p.Z,
                q(K({}, e), {
                    title: H.intl.string(H.t["3CTiKi"]),
                    children: a.hasFlag(Z.xW$.MFA_SMS) ? H.intl.string(H.t.jrhJys) : void 0,
                    actionText: H.intl.string(H.t.N86XcH),
                    handleSubmit: (e) => v.Z.removePhone(e, v.L.USER_SETTINGS_UPDATE),
                }),
            ),
        );
    }
    return (
        (t = c
            ? (0, r.jsx)(ee, {
                  text: s,
                  censor: U.n,
                  revealLabel: H.intl.string(H.t.eY3xlZ),
                  hideLabel: H.intl.string(H.t.jllbv7),
              })
            : H.intl.string(H.t.I5kDqq)),
        (0, r.jsxs)("div", {
            className: o()(Y.field, i),
            children: [
                (0, r.jsx)("div", {
                    className: Y.constrainedRow,
                    children: (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(f.vwX, {
                                className: Y.fieldTitle,
                                children: H.intl.string(H.t.kerONj),
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
                    className: Y.fieldButtonList,
                    children: [
                        c && u
                            ? (0, r.jsx)(d.zx, {
                                  className: o()(Y.fieldButton, Y.removeButton),
                                  size: d.zx.Sizes.SMALL,
                                  look: d.zx.Looks.LINK,
                                  color: d.zx.Colors.PRIMARY,
                                  "aria-label": H.intl.string(H.t.Rpn4Aw),
                                  onClick: h,
                                  children: H.intl.string(H.t.N86XcH),
                              })
                            : null,
                        (0, r.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: Y.fieldButton,
                            children: (0, r.jsx)(f.zxk, {
                                variant: "secondary",
                                size: "sm",
                                text: c ? H.intl.string(H.t.bt75u7) : H.intl.string(H.t.OYkgVl),
                                "aria-label": c ? H.intl.string(H.t.YDabSU) : H.intl.string(H.t.SfUuEx),
                                onClick: _,
                            }),
                        }),
                    ],
                }),
            ],
        })
    );
}
function er(e) {
    let { user: t } = e,
        n = (0, b.Z)({
            id: t.id,
            label: H.intl.string(H.t["/AXYnJ"]),
        }),
        a = M.Sb.useSetting(),
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
                      "aria-label": H.intl.string(H.t.RANhlJ),
                      children: n,
                  });
              },
              children: (e) =>
                  (0, r.jsx)(
                      f.P3F,
                      q(K({}, e), {
                          innerRef: o,
                          className: Y.overflowMenuButton,
                          "aria-label": H.intl.string(H.t.DEoVWV),
                          children: (0, r.jsx)(f.xhG, {
                              size: "md",
                              color: "currentColor",
                              className: Y.overflowMenuIcon,
                          }),
                      }),
                  ),
          })
        : null;
}
function ei(e) {
    let { className: t } = e,
        n = (0, g.l6)(),
        a = (0, g.Jm)(),
        s = !n || a,
        l = i.useMemo(
            () => (n ? (a ? H.intl.string(H.t.sK0dmJ) : H.intl.string(H.t.XxRj7e)) : H.intl.string(H.t.UX0OdX)),
            [n, a],
        );
    return (0, r.jsxs)("div", {
        className: o()(Y.field, t),
        children: [
            (0, r.jsx)("div", {
                className: Y.constrainedRow,
                children: (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(f.vwX, {
                            className: Y.fieldTitle,
                            children: H.intl.string(H.t["/52UY2"]),
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
                    className: Y.fieldButton,
                    children: (0, r.jsx)(f.zxk, {
                        variant: "secondary",
                        size: "sm",
                        text: a ? H.intl.string(H.t.KPGVWl) : H.intl.string(H.t.yNGjyM),
                        "aria-label": a ? H.intl.string(H.t.KPGVWl) : H.intl.string(H.t.yNGjyM),
                        onClick: () => h.Z.showAgeVerificationGetStartedModal({ entryPoint: m.cU.ACCOUNT_AGE_GROUP }),
                    }),
                }),
        ],
    });
}
function ea() {
    var e;
    let t = (0, c.e7)([D.default], () => {
            let e = D.default.getCurrentUser();
            return l()(null != e, "UserSettingsAccountProfileCard: currentUser cannot be undefined"), e;
        }),
        n = (0, C.ZP)(t.id),
        i = (0, A.Z)(n),
        a = M.co.useSetting(),
        o = (0, c.e7)([w.Z], () => w.Z.getErrors()),
        s = null == o || null == (e = o.avatar) ? void 0 : e[0],
        { avatarSrc: u, avatarDecorationSrc: d } = (0, N.Z)({
            userId: null == t ? void 0 : t.id,
            size: f.EFr.SIZE_80,
        }),
        p = Q();
    return (0, r.jsxs)("div", {
        className: Y.accountProfileCard,
        children: [
            (0, r.jsx)(P.b, {
                user: t,
                displayProfile: n,
                avatarSize: f.EFr.SIZE_80,
                avatarOffsetX: 16,
                avatarOffsetY: -22,
                bannerWidth: 660,
                bannerHeight: 100,
                themePadding: 0,
            }),
            (0, r.jsxs)("div", {
                className: Y.userInfo,
                children: [
                    (0, r.jsx)(X, {
                        className: Y.avatar,
                        src: u,
                        avatarDecoration: d,
                        status: a,
                        size: f.EFr.SIZE_80,
                        "aria-label": t.username,
                    }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsxs)("div", {
                                className: Y.profileCardUsernameRow,
                                children: [
                                    (0, r.jsx)(_.Z, {
                                        user: t,
                                        className: Y.userTag,
                                        discriminatorClass: Y.discriminator,
                                        displayNameStylesType: y.F.STATIC,
                                    }),
                                    (0, r.jsx)(er, { user: t }),
                                ],
                            }),
                            (0, r.jsx)(R.Z, {
                                badges: i,
                                className: Y.badgeList,
                                badgeClassName: Y.badge,
                            }),
                        ],
                    }),
                    (0, r.jsx)(f.zxk, {
                        variant: "primary",
                        size: "sm",
                        text: H.intl.string(H.t["2p2aY2"]),
                        onClick: p,
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: Y.background,
                children: [
                    null != s
                        ? (0, r.jsx)(f.Text, {
                              className: Y.avatarError,
                              variant: "text-xs/normal",
                              color: "text-danger",
                              children: s,
                          })
                        : null,
                    (0, r.jsxs)("div", {
                        className: Y.fieldList,
                        children: [
                            (0, r.jsx)(S.F, {
                                setting: B.s6.ACCOUNT_DISPLAY_NAME,
                                children: (0, r.jsx)($, {
                                    className: Y.fieldSpacerBottom,
                                    user: t,
                                }),
                            }),
                            (0, r.jsx)(S.F, {
                                setting: B.s6.ACCOUNT_USERNAME,
                                children: (0, r.jsx)(J, { user: t }),
                            }),
                            (0, r.jsx)(S.F, {
                                setting: B.s6.ACCOUNT_EMAIL,
                                children: (0, r.jsx)(et, {
                                    className: Y.fieldSpacer,
                                    user: t,
                                }),
                            }),
                            (0, r.jsx)(S.F, {
                                setting: B.s6.ACCOUNT_PHONE_NUMBER,
                                children: (0, r.jsx)(en, {
                                    className: Y.fieldSpacer,
                                    user: t,
                                }),
                            }),
                            (0, r.jsx)(S.F, {
                                setting: B.s6.ACCOUNT_AGE_GROUP,
                                children: (0, r.jsx)(ei, { className: Y.fieldSpacer }),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
