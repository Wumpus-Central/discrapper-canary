n.d(t, { Z: () => el }), n(388685);
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
    h = n(480916),
    m = n(81643),
    g = n(952306),
    E = n(299206),
    b = n(821795),
    y = n(295474),
    O = n(144114),
    v = n(918505),
    S = n(332473),
    I = n(980945),
    T = n(921801),
    C = n(438976),
    A = n(485341),
    N = n(687158),
    P = n(518950),
    w = n(184325),
    R = n(867176),
    D = n(355497),
    x = n(25990),
    L = n(594174),
    j = n(572004),
    M = n(51144),
    k = n(998502),
    U = n(312870),
    G = n(695346),
    Z = n(313789),
    F = n(461877),
    B = n(518596),
    V = n(726985),
    H = n(981631),
    Y = n(815660),
    W = n(801461),
    K = n(388032),
    z = n(54497);
function q(e, t, n) {
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
function Q(e) {
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
                q(e, t, n[t]);
            });
    }
    return e;
}
function X(e, t) {
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
function J(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : X(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let $ = k.ZP.getEnableHardwareAcceleration() ? f.Xo$ : f.qEK;
function ee() {
    (0, B.openUserSettings)(Z.n.PROFILE_PANEL, { section: H.oAB.PROFILE_CUSTOMIZATION });
}
function et(e) {
    var t, a;
    let { className: s, user: l } = e,
        c = i.useRef(null),
        p = (0, v.o9)(),
        _ = (0, S.b)(),
        h = (0, y.gS)(),
        m = null != (a = null == h || null == (t = h.nick) ? void 0 : t[0]) ? a : null,
        [g, E] = i.useState(!1);
    i.useEffect(() => {
        E(null != c.current && c.current.scrollWidth > c.current.clientWidth);
    }, [l.username]);
    let b = !l.isClaimed(),
        O = (p && !l.hasUniqueUsername() && !l.hasVerifiedEmailOrPhone()) || b,
        I = O ? K.intl.string(K.t["7Ngnyr"]) : void 0;
    return (0, r.jsxs)("div", {
        className: o()(z.field, s),
        children: [
            (0, r.jsx)("div", {
                className: z.constrainedRow,
                children: (0, r.jsxs)("div", {
                    className: z.usernameRow,
                    children: [
                        (0, r.jsx)(f.Text, {
                            variant: "text-md/medium",
                            className: z.fieldTitle,
                            children: K.intl.string(K.t.qqhR3L),
                        }),
                        (0, r.jsxs)("div", {
                            className: z.usernameInnerRow,
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
                    className: z.pomeloWarning,
                    children: (0, r.jsx)(d.u, {
                        text: K.intl.string(K.t.HHC5Z4),
                        children: (0, r.jsx)(f.Mgn, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: u.Z.colors.STATUS_WARNING.css,
                        }),
                    }),
                }),
            null != m &&
                (0, r.jsx)("div", {
                    className: z.pomeloWarning,
                    children: (0, r.jsx)(d.u, {
                        __unsupportedReactNodeAsText: m,
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
                    className: z.fieldButton,
                    children: (0, r.jsx)(f.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: g ? K.intl.string(K.t["16kTw/"]) : K.intl.string(K.t.bt75uw),
                        disabled: O,
                        "aria-label": K.intl.string(K.t.JECa91),
                        onClick: () =>
                            (0, f.ZDy)(async () => {
                                if (_) {
                                    let { default: e } = await n.e("85342").then(n.bind(n, 193049));
                                    return (t) => (0, r.jsx)(e, Q({ source: W.Kq.USER_SETTINGS_EDIT }, t));
                                }
                                {
                                    let { default: e } = await n.e("42758").then(n.bind(n, 2702));
                                    return (t) => (0, r.jsx)(e, Q({}, t));
                                }
                            }),
                    }),
                }),
            }),
        ],
    });
}
function en(e) {
    var t, n;
    let { user: a, className: s } = e,
        l = (0, y.gS)(),
        c = null != (n = null == l || null == (t = l.nick) ? void 0 : t[0]) ? n : null,
        p = M.ZP.getGlobalName(a),
        _ = i.useRef(null),
        [h, m] = i.useState(!1);
    return (
        i.useEffect(() => {
            m(null != _.current && _.current.scrollWidth > _.current.clientWidth);
        }, [p]),
        (0, r.jsxs)("div", {
            className: o()(z.field, s),
            children: [
                (0, r.jsx)("div", {
                    className: z.constrainedRow,
                    children: (0, r.jsxs)("div", {
                        className: z.usernameRow,
                        children: [
                            (0, r.jsx)(f.Text, {
                                variant: "text-md/medium",
                                className: z.fieldTitle,
                                children: K.intl.string(K.t["9AjdkD"]),
                            }),
                            (0, r.jsx)("div", {
                                className: z.usernameInnerRow,
                                ref: _,
                                children: (0, r.jsx)(f.Text, {
                                    tag: "span",
                                    color: "text-strong",
                                    variant: "text-md/normal",
                                    children: null == p ? K.intl.string(K.t.ep5kjK) : p,
                                }),
                            }),
                        ],
                    }),
                }),
                null != c &&
                    (0, r.jsx)("div", {
                        className: z.pomeloWarning,
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
                    className: z.fieldButton,
                    children: (0, r.jsx)(f.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: h ? K.intl.string(K.t["16kTw/"]) : K.intl.string(K.t.bt75uw),
                        "aria-label": K.intl.string(K.t.YXeWYM),
                        onClick: ee,
                    }),
                }),
            ],
        })
    );
}
function er(e) {
    let { text: t, censor: n, revealLabel: a, hideLabel: o } = e,
        [s, l] = i.useState(!1),
        c = s ? t : n(t);
    return (0, r.jsxs)("div", {
        className: z.textRevealer,
        children: [
            c,
            (0, r.jsx)(f.Avr, {
                variant: "primary",
                textVariant: "text-sm/medium",
                "aria-label": s ? o : a,
                onClick: () => l(!s),
                text: s ? K.intl.string(K.t.fgq1gs) : K.intl.string(K.t.dcztdU),
            }),
        ],
    });
}
function ei(e) {
    let t,
        { className: i, user: a } = e;
    if (a.isClaimed())
        if (null == a.email)
            t = {
                buttonText: K.intl.string(K.t.OYkgVk),
                buttonAriaLabel: K.intl.string(K.t["pvBD+W"]),
                valueMessage: K.intl.string(K.t["8SfTN/"]),
                handleClick: () =>
                    (0, f.ZDy)(async () => {
                        let { default: e } = await n.e("9343").then(n.bind(n, 642298));
                        return (t) => (0, r.jsx)(e, Q({}, t));
                    }),
            };
        else {
            let { email: e } = a;
            t = {
                buttonText: K.intl.string(K.t.bt75uw),
                buttonAriaLabel: K.intl.string(K.t["8peUT0"]),
                valueMessage: (0, r.jsx)(er, {
                    text: e,
                    censor: F.E,
                    revealLabel: K.intl.string(K.t["Zvx+yV"]),
                    hideLabel: K.intl.string(K.t.nqTD4d),
                }),
                handleClick: () =>
                    (0, f.ZDy)(async () => {
                        let { default: e } = await n.e("9343").then(n.bind(n, 642298));
                        return (t) => (0, r.jsx)(e, Q({}, t));
                    }),
            };
        }
    else
        t = {
            buttonText: K.intl.string(K.t.BleMPB),
            buttonAriaLabel: K.intl.string(K.t.BleMPB),
            valueMessage: K.intl.string(K.t.qxk9zo),
            handleClick: () => g.Z.openClaimAccountModal(),
        };
    return (0, r.jsxs)("div", {
        className: o()(z.field, i),
        children: [
            (0, r.jsx)("div", {
                className: z.constrainedRow,
                children: (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(f.Text, {
                            variant: "text-md/medium",
                            className: z.fieldTitle,
                            children: K.intl.string(K.t.tlZllC),
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
                className: z.fieldButton,
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
function ea(e) {
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
                return (t) => (0, r.jsx)(e, Q({ reason: O.L.USER_SETTINGS_UPDATE }, t));
            },
            { modalKey: Y.M },
        );
    }
    function p() {
        (0, f.h7j)((e) =>
            (0, r.jsx)(
                D.default,
                J(Q({}, e), {
                    title: K.intl.string(K.t["3CTiKi"]),
                    children: a.hasFlag(H.xW$.MFA_SMS) ? K.intl.string(K.t.jrhJyo) : void 0,
                    actionText: K.intl.string(K.t.N86XcP),
                    handleSubmit: (e) => O.Z.removePhone(e, O.L.USER_SETTINGS_UPDATE),
                }),
            ),
        );
    }
    return (
        (t = c
            ? (0, r.jsx)(er, {
                  text: s,
                  censor: F.n,
                  revealLabel: K.intl.string(K.t.eY3xlT),
                  hideLabel: K.intl.string(K.t["jllbv+"]),
              })
            : K.intl.string(K.t.I5kDqj)),
        (0, r.jsxs)("div", {
            className: o()(z.field, i),
            children: [
                (0, r.jsx)("div", {
                    className: z.constrainedRow,
                    children: (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(f.Text, {
                                variant: "text-md/medium",
                                className: z.fieldTitle,
                                children: K.intl.string(K.t.kerONq),
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
                    className: z.fieldButtonList,
                    children: [
                        c && u
                            ? (0, r.jsx)("div", {
                                  className: o()(z.fieldButton, z.removeButton),
                                  children: (0, r.jsx)(f.Avr, {
                                      textVariant: "text-sm/medium",
                                      variant: "secondary",
                                      text: K.intl.string(K.t.N86XcP),
                                      "aria-label": K.intl.string(K.t.Rpn4A3),
                                      onClick: p,
                                  }),
                              })
                            : null,
                        (0, r.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: z.fieldButton,
                            children: (0, r.jsx)(f.Button, {
                                variant: "secondary",
                                size: "sm",
                                text: c ? K.intl.string(K.t.bt75uw) : K.intl.string(K.t.OYkgVk),
                                "aria-label": c ? K.intl.string(K.t.YDabSe) : K.intl.string(K.t["SfUuE+"]),
                                onClick: d,
                            }),
                        }),
                    ],
                }),
            ],
        })
    );
}
function eo(e) {
    let { user: t } = e,
        n = (0, E.Z)({
            id: t.id,
            label: K.intl.string(K.t["/AXYnE"]),
        }),
        a = G.Sb.useSetting(),
        o = i.useRef(null);
    return a && j.wS
        ? (0, r.jsx)(f.yRy, {
              targetElementRef: o,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)(f.v2r, {
                      onClose: t,
                      onSelect: void 0,
                      navId: "copy-id",
                      "aria-label": K.intl.string(K.t.RANhlE),
                      children: n,
                  });
              },
              children: (e) =>
                  (0, r.jsx)(
                      f.P3F,
                      J(Q({}, e), {
                          innerRef: o,
                          className: z.overflowMenuButton,
                          "aria-label": K.intl.string(K.t.DEoVWZ),
                          children: (0, r.jsx)(f.xhG, {
                              size: "md",
                              color: "currentColor",
                              className: z.overflowMenuIcon,
                          }),
                      }),
                  ),
          })
        : null;
}
function es(e) {
    let { className: t } = e,
        n = (0, m.l6)(),
        a = (0, m.Jm)(),
        s = !n || a,
        l = i.useMemo(
            () => (n ? (a ? K.intl.string(K.t.sK0dmH) : K.intl.string(K.t.XxRj7f)) : K.intl.string(K.t.UX0Ode)),
            [n, a],
        );
    return (0, r.jsxs)("div", {
        className: o()(z.field, t),
        children: [
            (0, r.jsx)("div", {
                className: z.constrainedRow,
                children: (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(f.Text, {
                            variant: "text-md/medium",
                            className: z.fieldTitle,
                            children: K.intl.string(K.t["/52UYy"]),
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
                    className: z.fieldButton,
                    children: (0, r.jsx)(f.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: a ? K.intl.string(K.t.KPGVWl) : K.intl.string(K.t.yNGjyK),
                        "aria-label": a ? K.intl.string(K.t.KPGVWl) : K.intl.string(K.t.yNGjyK),
                        onClick: () => _.Z.showAgeVerificationGetStartedModal({ entryPoint: h.cU.ACCOUNT_AGE_GROUP }),
                    }),
                }),
        ],
    });
}
function el() {
    var e;
    let t = (0, c.e7)([L.default], () => {
            let e = L.default.getCurrentUser();
            return l()(null != e, "UserSettingsAccountProfileCard: currentUser cannot be undefined"), e;
        }),
        n = (0, N.ZP)(t.id),
        i = (0, A.Z)(n),
        a = G.co.useSetting(),
        o = (0, c.e7)([x.Z], () => x.Z.getErrors()),
        s = null == o || null == (e = o.avatar) ? void 0 : e[0],
        { avatarSrc: u, avatarDecorationSrc: d } = (0, P.Z)({
            userId: null == t ? void 0 : t.id,
            size: f.EFr.SIZE_80,
        }),
        _ = (0, C.Z)(),
        h = (0, I.nj)(),
        m = (0, U.s)("UserSettingsAccountProfileCard"),
        g = h || m;
    return (0, r.jsxs)("div", {
        className: z.accountProfileCard,
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
                className: z.userInfo,
                children: [
                    (0, r.jsx)($, {
                        className: z.avatar,
                        src: u,
                        avatarDecoration: d,
                        status: a,
                        size: f.EFr.SIZE_80,
                        "aria-label": t.username,
                    }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsxs)("div", {
                                className: z.profileCardUsernameRow,
                                children: [
                                    (0, r.jsx)(p.Z, {
                                        user: t,
                                        className: z.userTag,
                                        discriminatorClass: z.discriminator,
                                        displayNameStylesType: b.F.STATIC,
                                    }),
                                    (0, r.jsx)(eo, { user: t }),
                                ],
                            }),
                            (0, r.jsx)(w.Z, {
                                badges: i,
                                className: z.badgeList,
                                badgeClassName: z.badge,
                            }),
                        ],
                    }),
                    (0, r.jsx)(f.Button, {
                        variant: "primary",
                        size: "sm",
                        text: K.intl.string(K.t["2p2aYz"]),
                        onClick: ee,
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: z.background,
                children: [
                    null != s
                        ? (0, r.jsx)(f.Text, {
                              className: z.avatarError,
                              variant: "text-xs/normal",
                              color: "text-feedback-critical",
                              children: s,
                          })
                        : null,
                    (0, r.jsxs)("div", {
                        className: z.fieldList,
                        children: [
                            (0, r.jsx)(T.F, {
                                setting: V.s6.ACCOUNT_DISPLAY_NAME,
                                children: (0, r.jsx)(en, {
                                    className: z.fieldSpacerBottom,
                                    user: t,
                                }),
                            }),
                            (0, r.jsx)(T.F, {
                                setting: V.s6.ACCOUNT_USERNAME,
                                children: (0, r.jsx)(et, { user: t }),
                            }),
                            (0, r.jsx)(T.F, {
                                setting: V.s6.ACCOUNT_EMAIL,
                                children: (0, r.jsx)(ei, {
                                    className: z.fieldSpacer,
                                    user: t,
                                }),
                            }),
                            (0, r.jsx)(T.F, {
                                setting: V.s6.ACCOUNT_PHONE_NUMBER,
                                children: (0, r.jsx)(ea, {
                                    className: z.fieldSpacer,
                                    user: t,
                                }),
                            }),
                            g &&
                                (0, r.jsx)(T.F, {
                                    setting: V.s6.ACCOUNT_AGE_GROUP,
                                    children: (0, r.jsx)(es, { className: z.fieldSpacer }),
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
