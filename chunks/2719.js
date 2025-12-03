n.d(t, { Z: () => eo }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(512722),
    l = n.n(s),
    c = n(442837),
    u = n(692547),
    d = n(28664),
    f = n(481060),
    p = n(129861),
    _ = n(168107),
    m = n(480916),
    h = n(81643),
    g = n(952306),
    E = n(299206),
    b = n(821795),
    y = n(295474),
    O = n(144114),
    v = n(918505),
    S = n(332473),
    I = n(921801),
    T = n(438976),
    A = n(485341),
    C = n(687158),
    N = n(518950),
    P = n(184325),
    R = n(867176),
    w = n(355497),
    D = n(25990),
    x = n(594174),
    L = n(572004),
    j = n(51144),
    M = n(998502),
    k = n(695346),
    U = n(313789),
    G = n(461877),
    Z = n(518596),
    B = n(726985),
    F = n(981631),
    V = n(815660),
    H = n(801461),
    Y = n(388032),
    W = n(378846);
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
    (0, Z.openUserSettings)(U.n.PROFILE_PANEL, { section: F.oAB.PROFILE_CUSTOMIZATION });
}
function $(e) {
    var t, a;
    let { className: s, user: l } = e,
        c = i.useRef(null),
        p = (0, v.o9)(),
        _ = (0, S.b)(),
        m = (0, y.gS)(),
        h = null != (a = null == m || null == (t = m.nick) ? void 0 : t[0]) ? a : null,
        [g, E] = i.useState(!1);
    i.useEffect(() => {
        E(null != c.current && c.current.scrollWidth > c.current.clientWidth);
    }, [l.username]);
    let b = !l.isClaimed(),
        O = (p && !l.hasUniqueUsername() && !l.hasVerifiedEmailOrPhone()) || b,
        I = O ? Y.intl.string(Y.t["7Ngnyr"]) : void 0;
    return (0, r.jsxs)("div", {
        className: o()(W.field, s),
        children: [
            (0, r.jsx)("div", {
                className: W.constrainedRow,
                children: (0, r.jsxs)("div", {
                    className: W.usernameRow,
                    children: [
                        (0, r.jsx)(f.Text, {
                            variant: "text-md/medium",
                            className: W.fieldTitle,
                            children: Y.intl.string(Y.t.qqhR3L),
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
                                        color: "text-default",
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
                    children: (0, r.jsx)(d.u, {
                        text: Y.intl.string(Y.t.HHC5Z4),
                        children: (0, r.jsx)(f.Mgn, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: u.Z.colors.STATUS_WARNING.css,
                        }),
                    }),
                }),
            null != h &&
                (0, r.jsx)("div", {
                    className: W.pomeloWarning,
                    children: (0, r.jsx)(d.u, {
                        __unsupportedReactNodeAsText: h,
                        "aria-label": !1,
                        children: (0, r.jsx)(f.Mgn, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: u.Z.colors.STATUS_WARNING.css,
                        }),
                    }),
                }),
            (0, r.jsx)(d.u, {
                text: I,
                children: (0, r.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: W.fieldButton,
                    children: (0, r.jsx)(f.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: g ? Y.intl.string(Y.t["16kTw/"]) : Y.intl.string(Y.t.bt75uw),
                        disabled: O,
                        "aria-label": Y.intl.string(Y.t.JECa91),
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
                    }),
                }),
            }),
        ],
    });
}
function ee(e) {
    var t, n;
    let { user: a, className: s } = e,
        l = (0, y.gS)(),
        c = null != (n = null == l || null == (t = l.nick) ? void 0 : t[0]) ? n : null,
        p = j.ZP.getGlobalName(a),
        _ = i.useRef(null),
        [m, h] = i.useState(!1);
    return (
        i.useEffect(() => {
            h(null != _.current && _.current.scrollWidth > _.current.clientWidth);
        }, [p]),
        (0, r.jsxs)("div", {
            className: o()(W.field, s),
            children: [
                (0, r.jsx)("div", {
                    className: W.constrainedRow,
                    children: (0, r.jsxs)("div", {
                        className: W.usernameRow,
                        children: [
                            (0, r.jsx)(f.Text, {
                                variant: "text-md/medium",
                                className: W.fieldTitle,
                                children: Y.intl.string(Y.t["9AjdkD"]),
                            }),
                            (0, r.jsx)("div", {
                                className: W.usernameInnerRow,
                                ref: _,
                                children: (0, r.jsx)(f.Text, {
                                    tag: "span",
                                    color: "header-primary",
                                    variant: "text-md/normal",
                                    children: null == p ? Y.intl.string(Y.t.ep5kjK) : p,
                                }),
                            }),
                        ],
                    }),
                }),
                null != c &&
                    (0, r.jsx)("div", {
                        className: W.pomeloWarning,
                        children: (0, r.jsx)(d.u, {
                            __unsupportedReactNodeAsText: c,
                            "aria-label": !1,
                            children: (0, r.jsx)(f.Mgn, {
                                size: "custom",
                                width: 20,
                                height: 20,
                                color: u.Z.colors.STATUS_WARNING.css,
                            }),
                        }),
                    }),
                (0, r.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: W.fieldButton,
                    children: (0, r.jsx)(f.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: m ? Y.intl.string(Y.t["16kTw/"]) : Y.intl.string(Y.t.bt75uw),
                        "aria-label": Y.intl.string(Y.t.YXeWYM),
                        onClick: J,
                    }),
                }),
            ],
        })
    );
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
                text: s ? Y.intl.string(Y.t.fgq1gs) : Y.intl.string(Y.t.dcztdU),
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
                buttonText: Y.intl.string(Y.t.OYkgVk),
                buttonAriaLabel: Y.intl.string(Y.t["pvBD+W"]),
                valueMessage: Y.intl.string(Y.t["8SfTN/"]),
                handleClick: () =>
                    (0, f.ZDy)(async () => {
                        let { default: e } = await n.e("9343").then(n.bind(n, 642298));
                        return (t) => (0, r.jsx)(e, z({}, t));
                    }),
            };
        else {
            let { email: e } = a;
            t = {
                buttonText: Y.intl.string(Y.t.bt75uw),
                buttonAriaLabel: Y.intl.string(Y.t["8peUT0"]),
                valueMessage: (0, r.jsx)(et, {
                    text: e,
                    censor: G.E,
                    revealLabel: Y.intl.string(Y.t["Zvx+yV"]),
                    hideLabel: Y.intl.string(Y.t.nqTD4d),
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
            buttonText: Y.intl.string(Y.t.BleMPB),
            buttonAriaLabel: Y.intl.string(Y.t.BleMPB),
            valueMessage: Y.intl.string(Y.t.qxk9zo),
            handleClick: () => g.Z.openClaimAccountModal(),
        };
    return (0, r.jsxs)("div", {
        className: o()(W.field, i),
        children: [
            (0, r.jsx)("div", {
                className: W.constrainedRow,
                children: (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(f.Text, {
                            variant: "text-md/medium",
                            className: W.fieldTitle,
                            children: Y.intl.string(Y.t.tlZllC),
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
                children: (0, r.jsx)(f.Button, {
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
    function d() {
        (0, f.ZDy)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 607018));
                return (t) => (0, r.jsx)(e, z({ reason: O.L.USER_SETTINGS_UPDATE }, t));
            },
            { modalKey: V.M },
        );
    }
    function p() {
        (0, f.h7j)((e) =>
            (0, r.jsx)(
                w.Z,
                X(z({}, e), {
                    title: Y.intl.string(Y.t["3CTiKi"]),
                    children: a.hasFlag(F.xW$.MFA_SMS) ? Y.intl.string(Y.t.jrhJyo) : void 0,
                    actionText: Y.intl.string(Y.t.N86XcP),
                    handleSubmit: (e) => O.Z.removePhone(e, O.L.USER_SETTINGS_UPDATE),
                }),
            ),
        );
    }
    return (
        (t = c
            ? (0, r.jsx)(et, {
                  text: s,
                  censor: G.n,
                  revealLabel: Y.intl.string(Y.t.eY3xlT),
                  hideLabel: Y.intl.string(Y.t["jllbv+"]),
              })
            : Y.intl.string(Y.t.I5kDqj)),
        (0, r.jsxs)("div", {
            className: o()(W.field, i),
            children: [
                (0, r.jsx)("div", {
                    className: W.constrainedRow,
                    children: (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(f.Text, {
                                variant: "text-md/medium",
                                className: W.fieldTitle,
                                children: Y.intl.string(Y.t.kerONq),
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
                            ? (0, r.jsx)("div", {
                                  className: o()(W.fieldButton, W.removeButton),
                                  children: (0, r.jsx)(f.Avr, {
                                      textVariant: "text-sm/medium",
                                      variant: "secondary",
                                      text: Y.intl.string(Y.t.N86XcP),
                                      "aria-label": Y.intl.string(Y.t.Rpn4A3),
                                      onClick: p,
                                  }),
                              })
                            : null,
                        (0, r.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: W.fieldButton,
                            children: (0, r.jsx)(f.Button, {
                                variant: "secondary",
                                size: "sm",
                                text: c ? Y.intl.string(Y.t.bt75uw) : Y.intl.string(Y.t.OYkgVk),
                                "aria-label": c ? Y.intl.string(Y.t.YDabSe) : Y.intl.string(Y.t["SfUuE+"]),
                                onClick: d,
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
        n = (0, E.Z)({
            id: t.id,
            label: Y.intl.string(Y.t["/AXYnE"]),
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
                      "aria-label": Y.intl.string(Y.t.RANhlE),
                      children: n,
                  });
              },
              children: (e) =>
                  (0, r.jsx)(
                      f.P3F,
                      X(z({}, e), {
                          innerRef: o,
                          className: W.overflowMenuButton,
                          "aria-label": Y.intl.string(Y.t.DEoVWZ),
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
        n = (0, h.l6)(),
        a = (0, h.Jm)(),
        s = !n || a,
        l = i.useMemo(
            () => (n ? (a ? Y.intl.string(Y.t.sK0dmH) : Y.intl.string(Y.t.XxRj7f)) : Y.intl.string(Y.t.UX0Ode)),
            [n, a],
        );
    return (0, r.jsxs)("div", {
        className: o()(W.field, t),
        children: [
            (0, r.jsx)("div", {
                className: W.constrainedRow,
                children: (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(f.Text, {
                            variant: "text-md/medium",
                            className: W.fieldTitle,
                            children: Y.intl.string(Y.t["/52UYy"]),
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
                    children: (0, r.jsx)(f.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: a ? Y.intl.string(Y.t.KPGVWl) : Y.intl.string(Y.t.yNGjyK),
                        "aria-label": a ? Y.intl.string(Y.t.KPGVWl) : Y.intl.string(Y.t.yNGjyK),
                        onClick: () => _.Z.showAgeVerificationGetStartedModal({ entryPoint: m.cU.ACCOUNT_AGE_GROUP }),
                    }),
                }),
        ],
    });
}
function eo() {
    var e;
    let t = (0, c.e7)([x.default], () => {
            let e = x.default.getCurrentUser();
            return l()(null != e, "UserSettingsAccountProfileCard: currentUser cannot be undefined"), e;
        }),
        n = (0, C.ZP)(t.id),
        i = (0, A.Z)(n),
        a = k.co.useSetting(),
        o = (0, c.e7)([D.Z], () => D.Z.getErrors()),
        s = null == o || null == (e = o.avatar) ? void 0 : e[0],
        { avatarSrc: u, avatarDecorationSrc: d } = (0, N.Z)({
            userId: null == t ? void 0 : t.id,
            size: f.EFr.SIZE_80,
        }),
        _ = (0, T.Z)();
    return (0, r.jsxs)("div", {
        className: W.accountProfileCard,
        children: [
            (0, r.jsx)(R.b, {
                user: t,
                displayProfile: n,
                avatarSize: f.EFr.SIZE_80,
                avatarOffsetX: 16,
                avatarOffsetY: -22,
                bannerWidth: _ ? 696 : 660,
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
                                    (0, r.jsx)(p.Z, {
                                        user: t,
                                        className: W.userTag,
                                        discriminatorClass: W.discriminator,
                                        displayNameStylesType: b.F.STATIC,
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
                    (0, r.jsx)(f.Button, {
                        variant: "primary",
                        size: "sm",
                        text: Y.intl.string(Y.t["2p2aYz"]),
                        onClick: J,
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
                              color: "text-feedback-critical",
                              children: s,
                          })
                        : null,
                    (0, r.jsxs)("div", {
                        className: W.fieldList,
                        children: [
                            (0, r.jsx)(I.F, {
                                setting: B.s6.ACCOUNT_DISPLAY_NAME,
                                children: (0, r.jsx)(ee, {
                                    className: W.fieldSpacerBottom,
                                    user: t,
                                }),
                            }),
                            (0, r.jsx)(I.F, {
                                setting: B.s6.ACCOUNT_USERNAME,
                                children: (0, r.jsx)($, { user: t }),
                            }),
                            (0, r.jsx)(I.F, {
                                setting: B.s6.ACCOUNT_EMAIL,
                                children: (0, r.jsx)(en, {
                                    className: W.fieldSpacer,
                                    user: t,
                                }),
                            }),
                            (0, r.jsx)(I.F, {
                                setting: B.s6.ACCOUNT_PHONE_NUMBER,
                                children: (0, r.jsx)(er, {
                                    className: W.fieldSpacer,
                                    user: t,
                                }),
                            }),
                            (0, r.jsx)(I.F, {
                                setting: B.s6.ACCOUNT_AGE_GROUP,
                                children: (0, r.jsx)(ea, { className: W.fieldSpacer }),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
