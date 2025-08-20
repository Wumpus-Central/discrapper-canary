n.d(t, { Z: () => ei }), n(388685);
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
    _ = n(230711),
    p = n(129861),
    h = n(279837),
    m = n(168107),
    g = n(480916),
    E = n(81643),
    b = n(952306),
    y = n(299206),
    O = n(821795),
    v = n(295474),
    I = n(144114),
    T = n(918505),
    S = n(332473),
    A = n(921801),
    C = n(485341),
    N = n(687158),
    R = n(518950),
    P = n(184325),
    w = n(867176),
    D = n(25990),
    x = n(594174),
    L = n(572004),
    j = n(51144),
    M = n(998502),
    k = n(695346),
    U = n(461877),
    G = n(726985),
    B = n(981631),
    Z = n(815660),
    V = n(801461),
    F = n(388032),
    H = n(378846);
function Y(e, t, n) {
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
function W(e) {
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
                Y(e, t, n[t]);
            });
    }
    return e;
}
function K(e, t) {
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
function z(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : K(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let q = M.ZP.getEnableHardwareAcceleration() ? f.Xo$ : f.qEK;
function X(e) {
    var t, a;
    let { className: s, user: l } = e,
        c = i.useRef(null),
        d = (0, T.o9)(),
        _ = (0, S.b)(),
        p = (0, v.gS)(),
        h = null != (a = null == p || null == (t = p.nick) ? void 0 : t[0]) ? a : null,
        [m, g] = i.useState(!1);
    i.useEffect(() => {
        g(null != c.current && c.current.scrollWidth > c.current.clientWidth);
    }, [l.username]);
    let E = !l.isClaimed(),
        b = (d && !l.hasUniqueUsername() && !l.hasVerifiedEmailOrPhone()) || E,
        y = b ? F.intl.string(F.t["7Ngnys"]) : void 0;
    return (0, r.jsxs)("div", {
        className: o()(H.field, s),
        children: [
            (0, r.jsx)("div", {
                className: H.constrainedRow,
                children: (0, r.jsxs)("div", {
                    className: H.usernameRow,
                    children: [
                        (0, r.jsx)(f.vwX, {
                            className: H.fieldTitle,
                            children: F.intl.string(F.t.qqhR3N),
                        }),
                        (0, r.jsxs)("div", {
                            className: H.usernameInnerRow,
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
                    className: H.pomeloWarning,
                    children: (0, r.jsx)(f.ua7, {
                        text: F.intl.string(F.t.HHC5Z2),
                        children: (e) =>
                            (0, r.jsx)(
                                f.Mgn,
                                z(
                                    W(
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
                    className: H.pomeloWarning,
                    children: (0, r.jsx)(f.ua7, {
                        text: h,
                        "aria-label": !1,
                        children: (e) =>
                            (0, r.jsx)(
                                f.Mgn,
                                z(
                                    W(
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
                        className: H.fieldButton,
                        children: (0, r.jsx)(
                            f.zxk,
                            z(
                                W(
                                    {
                                        variant: "secondary",
                                        size: "sm",
                                        text: m ? F.intl.string(F.t["16kTw8"]) : F.intl.string(F.t.bt75u7),
                                    },
                                    e,
                                ),
                                {
                                    disabled: b,
                                    "aria-label": F.intl.string(F.t["JECa9/"]),
                                    onClick: () =>
                                        (0, f.ZDy)(async () => {
                                            if (_) {
                                                let { default: e } = await n.e("85342").then(n.bind(n, 193049));
                                                return (t) => (0, r.jsx)(e, W({ source: V.Kq.USER_SETTINGS_EDIT }, t));
                                            }
                                            {
                                                let { default: e } = await Promise.all([
                                                    n.e("84956"),
                                                    n.e("42758"),
                                                ]).then(n.bind(n, 2702));
                                                return (t) => (0, r.jsx)(e, W({}, t));
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
function Q(e) {
    var t, n;
    let { user: a, className: s } = e,
        l = (0, v.gS)(),
        c = null != (n = null == l || null == (t = l.nick) ? void 0 : t[0]) ? n : null,
        d = j.ZP.getGlobalName(a),
        _ = i.useRef(null),
        [p, h] = i.useState(!1);
    return (
        i.useEffect(() => {
            h(null != _.current && _.current.scrollWidth > _.current.clientWidth);
        }, [d]),
        (0, r.jsxs)("div", {
            className: o()(H.field, s),
            children: [
                (0, r.jsx)("div", {
                    className: H.constrainedRow,
                    children: (0, r.jsxs)("div", {
                        className: H.usernameRow,
                        children: [
                            (0, r.jsx)(f.vwX, {
                                className: H.fieldTitle,
                                children: F.intl.string(F.t["9AjdkJ"]),
                            }),
                            (0, r.jsx)("div", {
                                className: H.usernameInnerRow,
                                ref: _,
                                children: (0, r.jsx)(f.Text, {
                                    tag: "span",
                                    color: "header-primary",
                                    variant: "text-md/normal",
                                    children: null == d ? F.intl.string(F.t.ep5kjI) : d,
                                }),
                            }),
                        ],
                    }),
                }),
                null != c &&
                    (0, r.jsx)("div", {
                        className: H.pomeloWarning,
                        children: (0, r.jsx)(f.ua7, {
                            text: c,
                            "aria-label": !1,
                            children: (e) =>
                                (0, r.jsx)(
                                    f.Mgn,
                                    z(
                                        W(
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
                    className: H.fieldButton,
                    children: (0, r.jsx)(f.zxk, {
                        variant: "secondary",
                        size: "sm",
                        text: p ? F.intl.string(F.t["16kTw8"]) : F.intl.string(F.t.bt75u7),
                        "aria-label": F.intl.string(F.t.YXeWYG),
                        onClick: en,
                    }),
                }),
            ],
        })
    );
}
function J(e) {
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
                children: s ? F.intl.string(F.t.fgq1go) : F.intl.string(F.t.dcztdX),
            }),
        ],
    });
}
function $(e) {
    let t,
        { className: i, user: a } = e;
    if (a.isClaimed())
        if (null == a.email)
            t = {
                buttonText: F.intl.string(F.t.OYkgVl),
                buttonAriaLabel: F.intl.string(F.t["pvBD+f"]),
                buttonColor: d.zx.Colors.PRIMARY,
                valueMessage: F.intl.string(F.t["8SfTNz"]),
                handleClick: () =>
                    (0, f.ZDy)(async () => {
                        let { default: e } = await n.e("9343").then(n.bind(n, 642298));
                        return (t) => (0, r.jsx)(e, W({}, t));
                    }),
            };
        else {
            let { email: e } = a;
            t = {
                buttonText: F.intl.string(F.t.bt75u7),
                buttonAriaLabel: F.intl.string(F.t["8peUT0"]),
                buttonColor: d.zx.Colors.PRIMARY,
                valueMessage: (0, r.jsx)(J, {
                    text: e,
                    censor: U.E,
                    revealLabel: F.intl.string(F.t["Zvx+yc"]),
                    hideLabel: F.intl.string(F.t.nqTD4e),
                }),
                handleClick: () =>
                    (0, f.ZDy)(async () => {
                        let { default: e } = await n.e("9343").then(n.bind(n, 642298));
                        return (t) => (0, r.jsx)(e, W({}, t));
                    }),
            };
        }
    else
        t = {
            buttonText: F.intl.string(F.t.BleMPD),
            buttonAriaLabel: F.intl.string(F.t.BleMPD),
            buttonColor: d.zx.Colors.BRAND,
            valueMessage: F.intl.string(F.t.qxk9zs),
            handleClick: () => b.Z.openClaimAccountModal(),
        };
    return (0, r.jsxs)("div", {
        className: o()(H.field, i),
        children: [
            (0, r.jsx)("div", {
                className: H.constrainedRow,
                children: (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(f.vwX, {
                            className: H.fieldTitle,
                            children: F.intl.string(F.t.tlZllJ),
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
                className: H.fieldButton,
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
function ee(e) {
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
                return (t) => (0, r.jsx)(e, W({ reason: I.L.USER_SETTINGS_UPDATE }, t));
            },
            { modalKey: Z.M },
        );
    }
    function p() {
        (0, f.h7j)((e) =>
            (0, r.jsx)(
                h.Z,
                z(W({}, e), {
                    title: F.intl.string(F.t["3CTiKi"]),
                    children: a.hasFlag(B.xW$.MFA_SMS) ? F.intl.string(F.t.jrhJys) : void 0,
                    actionText: F.intl.string(F.t.N86XcH),
                    handleSubmit: (e) => I.Z.removePhone(e, I.L.USER_SETTINGS_UPDATE),
                }),
            ),
        );
    }
    return (
        (t = c
            ? (0, r.jsx)(J, {
                  text: s,
                  censor: U.n,
                  revealLabel: F.intl.string(F.t.eY3xlZ),
                  hideLabel: F.intl.string(F.t.jllbv7),
              })
            : F.intl.string(F.t.I5kDqq)),
        (0, r.jsxs)("div", {
            className: o()(H.field, i),
            children: [
                (0, r.jsx)("div", {
                    className: H.constrainedRow,
                    children: (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(f.vwX, {
                                className: H.fieldTitle,
                                children: F.intl.string(F.t.kerONj),
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
                    className: H.fieldButtonList,
                    children: [
                        c && u
                            ? (0, r.jsx)(d.zx, {
                                  className: o()(H.fieldButton, H.removeButton),
                                  size: d.zx.Sizes.SMALL,
                                  look: d.zx.Looks.LINK,
                                  color: d.zx.Colors.PRIMARY,
                                  "aria-label": F.intl.string(F.t.Rpn4Aw),
                                  onClick: p,
                                  children: F.intl.string(F.t.N86XcH),
                              })
                            : null,
                        (0, r.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: H.fieldButton,
                            children: (0, r.jsx)(f.zxk, {
                                variant: "secondary",
                                size: "sm",
                                text: c ? F.intl.string(F.t.bt75u7) : F.intl.string(F.t.OYkgVl),
                                "aria-label": c ? F.intl.string(F.t.YDabSU) : F.intl.string(F.t.SfUuEx),
                                onClick: _,
                            }),
                        }),
                    ],
                }),
            ],
        })
    );
}
function et(e) {
    let { user: t } = e,
        n = (0, y.Z)({
            id: t.id,
            label: F.intl.string(F.t["/AXYnJ"]),
        }),
        a = k.Sb.useSetting(),
        o = i.useRef(null);
    return a && L.wS
        ? (0, r.jsx)(f.yRy, {
              targetElementRef: o,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)(f.v2r, {
                      onClose: t,
                      onSelect: void 0,
                      navId: "copy-id",
                      "aria-label": F.intl.string(F.t.RANhlJ),
                      children: n,
                  });
              },
              children: (e) =>
                  (0, r.jsx)(
                      f.P3F,
                      z(W({}, e), {
                          innerRef: o,
                          className: H.overflowMenuButton,
                          "aria-label": F.intl.string(F.t.DEoVWV),
                          children: (0, r.jsx)(f.xhG, {
                              size: "md",
                              color: "currentColor",
                              className: H.overflowMenuIcon,
                          }),
                      }),
                  ),
          })
        : null;
}
function en() {
    _.Z.setSection(B.oAB.PROFILE_CUSTOMIZATION);
}
function er(e) {
    let { className: t } = e,
        n = (0, E.l6)(),
        a = (0, E.Jm)(),
        s = !n || a,
        l = i.useMemo(
            () => (n ? (a ? F.intl.string(F.t.sK0dmJ) : F.intl.string(F.t.XxRj7e)) : F.intl.string(F.t.UX0OdX)),
            [n, a],
        );
    return (0, r.jsxs)("div", {
        className: o()(H.field, t),
        children: [
            (0, r.jsx)("div", {
                className: H.constrainedRow,
                children: (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(f.vwX, {
                            className: H.fieldTitle,
                            children: F.intl.string(F.t["/52UY2"]),
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
                    className: H.fieldButton,
                    children: (0, r.jsx)(f.zxk, {
                        variant: "secondary",
                        size: "sm",
                        text: a ? F.intl.string(F.t.KPGVWl) : F.intl.string(F.t.yNGjyM),
                        "aria-label": a ? F.intl.string(F.t.KPGVWl) : F.intl.string(F.t.yNGjyM),
                        onClick: () => m.Z.showAgeVerificationGetStartedModal(g.cU.ACCOUNT_AGE_GROUP),
                    }),
                }),
        ],
    });
}
function ei() {
    var e;
    let t = (0, c.e7)([x.default], () => {
            let e = x.default.getCurrentUser();
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
        });
    return (0, r.jsxs)("div", {
        className: H.accountProfileCard,
        children: [
            (0, r.jsx)(w.b, {
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
                className: H.userInfo,
                children: [
                    (0, r.jsx)(q, {
                        className: H.avatar,
                        src: u,
                        avatarDecoration: d,
                        status: a,
                        size: f.EFr.SIZE_80,
                        "aria-label": t.username,
                    }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsxs)("div", {
                                className: H.profileCardUsernameRow,
                                children: [
                                    (0, r.jsx)(p.Z, {
                                        user: t,
                                        className: H.userTag,
                                        discriminatorClass: H.discriminator,
                                        displayNameStylesType: O.F.STATIC,
                                    }),
                                    (0, r.jsx)(et, { user: t }),
                                ],
                            }),
                            (0, r.jsx)(P.Z, {
                                badges: i,
                                className: H.badgeList,
                                badgeClassName: H.badge,
                            }),
                        ],
                    }),
                    (0, r.jsx)(f.zxk, {
                        variant: "primary",
                        size: "sm",
                        text: F.intl.string(F.t["2p2aY2"]),
                        onClick: en,
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: H.background,
                children: [
                    null != s
                        ? (0, r.jsx)(f.Text, {
                              className: H.avatarError,
                              variant: "text-xs/normal",
                              color: "text-danger",
                              children: s,
                          })
                        : null,
                    (0, r.jsxs)("div", {
                        className: H.fieldList,
                        children: [
                            (0, r.jsx)(A.F, {
                                setting: G.s6.ACCOUNT_DISPLAY_NAME,
                                children: (0, r.jsx)(Q, {
                                    className: H.fieldSpacerBottom,
                                    user: t,
                                }),
                            }),
                            (0, r.jsx)(A.F, {
                                setting: G.s6.ACCOUNT_USERNAME,
                                children: (0, r.jsx)(X, { user: t }),
                            }),
                            (0, r.jsx)(A.F, {
                                setting: G.s6.ACCOUNT_EMAIL,
                                children: (0, r.jsx)($, {
                                    className: H.fieldSpacer,
                                    user: t,
                                }),
                            }),
                            (0, r.jsx)(A.F, {
                                setting: G.s6.ACCOUNT_PHONE_NUMBER,
                                children: (0, r.jsx)(ee, {
                                    className: H.fieldSpacer,
                                    user: t,
                                }),
                            }),
                            (0, r.jsx)(A.F, {
                                setting: G.s6.ACCOUNT_AGE_GROUP,
                                children: (0, r.jsx)(er, { className: H.fieldSpacer }),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
