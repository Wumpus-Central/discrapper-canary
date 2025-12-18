n.d(t, { Z: () => es }), n(388685);
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
    C = n(485341),
    A = n(687158),
    N = n(518950),
    P = n(184325),
    R = n(867176),
    w = n(355497),
    D = n(25990),
    x = n(594174),
    L = n(572004),
    j = n(51144),
    M = n(998502),
    k = n(128064),
    U = n(695346),
    G = n(313789),
    Z = n(461877),
    F = n(518596),
    B = n(726985),
    V = n(981631),
    H = n(815660),
    Y = n(801461),
    W = n(388032),
    K = n(54497);
function z(e, t, n) {
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
function q(e) {
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
                z(e, t, n[t]);
            });
    }
    return e;
}
function Q(e, t) {
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
            : Q(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let J = M.ZP.getEnableHardwareAcceleration() ? f.Xo$ : f.qEK;
function $() {
    (0, F.openUserSettings)(G.n.PROFILE_PANEL, { section: V.oAB.PROFILE_CUSTOMIZATION });
}
function ee(e) {
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
        I = O ? W.intl.string(W.t["7Ngnyr"]) : void 0;
    return (0, r.jsxs)("div", {
        className: o()(K.field, s),
        children: [
            (0, r.jsx)("div", {
                className: K.constrainedRow,
                children: (0, r.jsxs)("div", {
                    className: K.usernameRow,
                    children: [
                        (0, r.jsx)(f.Text, {
                            variant: "text-md/medium",
                            className: K.fieldTitle,
                            children: W.intl.string(W.t.qqhR3L),
                        }),
                        (0, r.jsxs)("div", {
                            className: K.usernameInnerRow,
                            ref: c,
                            children: [
                                (0, r.jsx)(f.Text, {
                                    tag: "span",
                                    color: "text-strong",
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
                    className: K.pomeloWarning,
                    children: (0, r.jsx)(d.u, {
                        text: W.intl.string(W.t.HHC5Z4),
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
                    className: K.pomeloWarning,
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
                    className: K.fieldButton,
                    children: (0, r.jsx)(f.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: g ? W.intl.string(W.t["16kTw/"]) : W.intl.string(W.t.bt75uw),
                        disabled: O,
                        "aria-label": W.intl.string(W.t.JECa91),
                        onClick: () =>
                            (0, f.ZDy)(async () => {
                                if (_) {
                                    let { default: e } = await n.e("85342").then(n.bind(n, 193049));
                                    return (t) => (0, r.jsx)(e, q({ source: Y.Kq.USER_SETTINGS_EDIT }, t));
                                }
                                {
                                    let { default: e } = await n.e("42758").then(n.bind(n, 2702));
                                    return (t) => (0, r.jsx)(e, q({}, t));
                                }
                            }),
                    }),
                }),
            }),
        ],
    });
}
function et(e) {
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
            className: o()(K.field, s),
            children: [
                (0, r.jsx)("div", {
                    className: K.constrainedRow,
                    children: (0, r.jsxs)("div", {
                        className: K.usernameRow,
                        children: [
                            (0, r.jsx)(f.Text, {
                                variant: "text-md/medium",
                                className: K.fieldTitle,
                                children: W.intl.string(W.t["9AjdkD"]),
                            }),
                            (0, r.jsx)("div", {
                                className: K.usernameInnerRow,
                                ref: _,
                                children: (0, r.jsx)(f.Text, {
                                    tag: "span",
                                    color: "text-strong",
                                    variant: "text-md/normal",
                                    children: null == p ? W.intl.string(W.t.ep5kjK) : p,
                                }),
                            }),
                        ],
                    }),
                }),
                null != c &&
                    (0, r.jsx)("div", {
                        className: K.pomeloWarning,
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
                    className: K.fieldButton,
                    children: (0, r.jsx)(f.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: m ? W.intl.string(W.t["16kTw/"]) : W.intl.string(W.t.bt75uw),
                        "aria-label": W.intl.string(W.t.YXeWYM),
                        onClick: $,
                    }),
                }),
            ],
        })
    );
}
function en(e) {
    let { text: t, censor: n, revealLabel: a, hideLabel: o } = e,
        [s, l] = i.useState(!1),
        c = s ? t : n(t);
    return (0, r.jsxs)("div", {
        className: K.textRevealer,
        children: [
            c,
            (0, r.jsx)(f.Avr, {
                variant: "primary",
                textVariant: "text-sm/medium",
                "aria-label": s ? o : a,
                onClick: () => l(!s),
                text: s ? W.intl.string(W.t.fgq1gs) : W.intl.string(W.t.dcztdU),
            }),
        ],
    });
}
function er(e) {
    let t,
        { className: i, user: a } = e;
    if (a.isClaimed())
        if (null == a.email)
            t = {
                buttonText: W.intl.string(W.t.OYkgVk),
                buttonAriaLabel: W.intl.string(W.t["pvBD+W"]),
                valueMessage: W.intl.string(W.t["8SfTN/"]),
                handleClick: () =>
                    (0, f.ZDy)(async () => {
                        let { default: e } = await n.e("9343").then(n.bind(n, 642298));
                        return (t) => (0, r.jsx)(e, q({}, t));
                    }),
            };
        else {
            let { email: e } = a;
            t = {
                buttonText: W.intl.string(W.t.bt75uw),
                buttonAriaLabel: W.intl.string(W.t["8peUT0"]),
                valueMessage: (0, r.jsx)(en, {
                    text: e,
                    censor: Z.E,
                    revealLabel: W.intl.string(W.t["Zvx+yV"]),
                    hideLabel: W.intl.string(W.t.nqTD4d),
                }),
                handleClick: () =>
                    (0, f.ZDy)(async () => {
                        let { default: e } = await n.e("9343").then(n.bind(n, 642298));
                        return (t) => (0, r.jsx)(e, q({}, t));
                    }),
            };
        }
    else
        t = {
            buttonText: W.intl.string(W.t.BleMPB),
            buttonAriaLabel: W.intl.string(W.t.BleMPB),
            valueMessage: W.intl.string(W.t.qxk9zo),
            handleClick: () => g.Z.openClaimAccountModal(),
        };
    return (0, r.jsxs)("div", {
        className: o()(K.field, i),
        children: [
            (0, r.jsx)("div", {
                className: K.constrainedRow,
                children: (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(f.Text, {
                            variant: "text-md/medium",
                            className: K.fieldTitle,
                            children: W.intl.string(W.t.tlZllC),
                        }),
                        (0, r.jsx)("div", {
                            children: (0, r.jsx)(f.Text, {
                                tag: "span",
                                color: "text-strong",
                                variant: "text-md/normal",
                                children: t.valueMessage,
                            }),
                        }),
                    ],
                }),
            }),
            (0, r.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: K.fieldButton,
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
function ei(e) {
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
                return (t) => (0, r.jsx)(e, q({ reason: O.L.USER_SETTINGS_UPDATE }, t));
            },
            { modalKey: H.M },
        );
    }
    function p() {
        (0, f.h7j)((e) =>
            (0, r.jsx)(
                w.default,
                X(q({}, e), {
                    title: W.intl.string(W.t["3CTiKi"]),
                    children: a.hasFlag(V.xW$.MFA_SMS) ? W.intl.string(W.t.jrhJyo) : void 0,
                    actionText: W.intl.string(W.t.N86XcP),
                    handleSubmit: (e) => O.Z.removePhone(e, O.L.USER_SETTINGS_UPDATE),
                }),
            ),
        );
    }
    return (
        (t = c
            ? (0, r.jsx)(en, {
                  text: s,
                  censor: Z.n,
                  revealLabel: W.intl.string(W.t.eY3xlT),
                  hideLabel: W.intl.string(W.t["jllbv+"]),
              })
            : W.intl.string(W.t.I5kDqj)),
        (0, r.jsxs)("div", {
            className: o()(K.field, i),
            children: [
                (0, r.jsx)("div", {
                    className: K.constrainedRow,
                    children: (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(f.Text, {
                                variant: "text-md/medium",
                                className: K.fieldTitle,
                                children: W.intl.string(W.t.kerONq),
                            }),
                            (0, r.jsx)("div", {
                                children: (0, r.jsx)(f.Text, {
                                    tag: "span",
                                    color: "text-strong",
                                    variant: "text-md/normal",
                                    children: t,
                                }),
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: K.fieldButtonList,
                    children: [
                        c && u
                            ? (0, r.jsx)("div", {
                                  className: o()(K.fieldButton, K.removeButton),
                                  children: (0, r.jsx)(f.Avr, {
                                      textVariant: "text-sm/medium",
                                      variant: "secondary",
                                      text: W.intl.string(W.t.N86XcP),
                                      "aria-label": W.intl.string(W.t.Rpn4A3),
                                      onClick: p,
                                  }),
                              })
                            : null,
                        (0, r.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: K.fieldButton,
                            children: (0, r.jsx)(f.Button, {
                                variant: "secondary",
                                size: "sm",
                                text: c ? W.intl.string(W.t.bt75uw) : W.intl.string(W.t.OYkgVk),
                                "aria-label": c ? W.intl.string(W.t.YDabSe) : W.intl.string(W.t["SfUuE+"]),
                                onClick: d,
                            }),
                        }),
                    ],
                }),
            ],
        })
    );
}
function ea(e) {
    let { user: t } = e,
        n = (0, E.Z)({
            id: t.id,
            label: W.intl.string(W.t["/AXYnE"]),
        }),
        a = U.Sb.useSetting(),
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
                      "aria-label": W.intl.string(W.t.RANhlE),
                      children: n,
                  });
              },
              children: (e) =>
                  (0, r.jsx)(
                      f.P3F,
                      X(q({}, e), {
                          innerRef: o,
                          className: K.overflowMenuButton,
                          "aria-label": W.intl.string(W.t.DEoVWZ),
                          children: (0, r.jsx)(f.xhG, {
                              size: "md",
                              color: "currentColor",
                              className: K.overflowMenuIcon,
                          }),
                      }),
                  ),
          })
        : null;
}
function eo(e) {
    let { className: t } = e,
        n = (0, h.l6)(),
        a = (0, h.Jm)(),
        s = !n || a,
        l = i.useMemo(
            () => (n ? (a ? W.intl.string(W.t.sK0dmH) : W.intl.string(W.t.XxRj7f)) : W.intl.string(W.t.UX0Ode)),
            [n, a],
        );
    return (0, r.jsxs)("div", {
        className: o()(K.field, t),
        children: [
            (0, r.jsx)("div", {
                className: K.constrainedRow,
                children: (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(f.Text, {
                            variant: "text-md/medium",
                            className: K.fieldTitle,
                            children: W.intl.string(W.t["/52UYy"]),
                        }),
                        (0, r.jsx)("div", {
                            children: (0, r.jsx)(f.Text, {
                                tag: "span",
                                color: "text-strong",
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
                    className: K.fieldButton,
                    children: (0, r.jsx)(f.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: a ? W.intl.string(W.t.KPGVWl) : W.intl.string(W.t.yNGjyK),
                        "aria-label": a ? W.intl.string(W.t.KPGVWl) : W.intl.string(W.t.yNGjyK),
                        onClick: () => _.Z.showAgeVerificationGetStartedModal({ entryPoint: m.cU.ACCOUNT_AGE_GROUP }),
                    }),
                }),
        ],
    });
}
function es() {
    var e;
    let t = (0, c.e7)([x.default], () => {
            let e = x.default.getCurrentUser();
            return l()(null != e, "UserSettingsAccountProfileCard: currentUser cannot be undefined"), e;
        }),
        n = (0, A.ZP)(t.id),
        i = (0, C.Z)(n),
        a = U.co.useSetting(),
        o = (0, c.e7)([D.Z], () => D.Z.getErrors()),
        s = null == o || null == (e = o.avatar) ? void 0 : e[0],
        { avatarSrc: u, avatarDecorationSrc: d } = (0, N.Z)({
            userId: null == t ? void 0 : t.id,
            size: f.EFr.SIZE_80,
        }),
        _ = (0, T.Z)(),
        m = (0, k.pY)("UserSettingsAccountProfileCard");
    return (0, r.jsxs)("div", {
        className: K.accountProfileCard,
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
                className: K.userInfo,
                children: [
                    (0, r.jsx)(J, {
                        className: K.avatar,
                        src: u,
                        avatarDecoration: d,
                        status: a,
                        size: f.EFr.SIZE_80,
                        "aria-label": t.username,
                    }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsxs)("div", {
                                className: K.profileCardUsernameRow,
                                children: [
                                    (0, r.jsx)(p.Z, {
                                        user: t,
                                        className: K.userTag,
                                        discriminatorClass: K.discriminator,
                                        displayNameStylesType: b.F.STATIC,
                                    }),
                                    (0, r.jsx)(ea, { user: t }),
                                ],
                            }),
                            (0, r.jsx)(P.Z, {
                                badges: i,
                                className: K.badgeList,
                                badgeClassName: K.badge,
                            }),
                        ],
                    }),
                    (0, r.jsx)(f.Button, {
                        variant: "primary",
                        size: "sm",
                        text: W.intl.string(W.t["2p2aYz"]),
                        onClick: $,
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: K.background,
                children: [
                    null != s
                        ? (0, r.jsx)(f.Text, {
                              className: K.avatarError,
                              variant: "text-xs/normal",
                              color: "text-feedback-critical",
                              children: s,
                          })
                        : null,
                    (0, r.jsxs)("div", {
                        className: K.fieldList,
                        children: [
                            (0, r.jsx)(I.F, {
                                setting: B.s6.ACCOUNT_DISPLAY_NAME,
                                children: (0, r.jsx)(et, {
                                    className: K.fieldSpacerBottom,
                                    user: t,
                                }),
                            }),
                            (0, r.jsx)(I.F, {
                                setting: B.s6.ACCOUNT_USERNAME,
                                children: (0, r.jsx)(ee, { user: t }),
                            }),
                            (0, r.jsx)(I.F, {
                                setting: B.s6.ACCOUNT_EMAIL,
                                children: (0, r.jsx)(er, {
                                    className: K.fieldSpacer,
                                    user: t,
                                }),
                            }),
                            (0, r.jsx)(I.F, {
                                setting: B.s6.ACCOUNT_PHONE_NUMBER,
                                children: (0, r.jsx)(ei, {
                                    className: K.fieldSpacer,
                                    user: t,
                                }),
                            }),
                            m &&
                                (0, r.jsx)(I.F, {
                                    setting: B.s6.ACCOUNT_AGE_GROUP,
                                    children: (0, r.jsx)(eo, { className: K.fieldSpacer }),
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
