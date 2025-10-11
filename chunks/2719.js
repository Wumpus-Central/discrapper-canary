n.d(t, { Z: () => es }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(512722),
    l = n.n(s),
    c = n(442837),
    u = n(692547),
    d = n(28664),
    f = n(755721),
    _ = n(481060),
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
    C = n(438976),
    N = n(485341),
    R = n(687158),
    P = n(518950),
    w = n(184325),
    D = n(867176),
    L = n(25990),
    x = n(594174),
    M = n(572004),
    j = n(51144),
    k = n(998502),
    U = n(695346),
    G = n(313789),
    B = n(461877),
    Z = n(947889),
    F = n(726985),
    V = n(981631),
    H = n(815660),
    Y = n(801461),
    W = n(388032),
    K = n(378846);
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
function Q(e, t) {
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
let J = k.ZP.getEnableHardwareAcceleration() ? _.Xo$ : _.qEK;
function $() {
    let e = (0, Z.Z)();
    return () => {
        e(G.n.PROFILE_PANEL, { section: V.oAB.PROFILE_CUSTOMIZATION });
    };
}
function ee(e) {
    var t, a;
    let { className: s, user: l } = e,
        c = i.useRef(null),
        f = (0, T.o9)(),
        p = (0, S.b)(),
        h = (0, v.gS)(),
        m = null != (a = null == h || null == (t = h.nick) ? void 0 : t[0]) ? a : null,
        [g, E] = i.useState(!1);
    i.useEffect(() => {
        E(null != c.current && c.current.scrollWidth > c.current.clientWidth);
    }, [l.username]);
    let b = !l.isClaimed(),
        y = (f && !l.hasUniqueUsername() && !l.hasVerifiedEmailOrPhone()) || b,
        O = y ? W.intl.string(W.t["7Ngnys"]) : void 0;
    return (0, r.jsxs)("div", {
        className: o()(K.field, s),
        children: [
            (0, r.jsx)("div", {
                className: K.constrainedRow,
                children: (0, r.jsxs)("div", {
                    className: K.usernameRow,
                    children: [
                        (0, r.jsx)(_.Text, {
                            variant: "text-md/medium",
                            className: K.fieldTitle,
                            children: W.intl.string(W.t.qqhR3N),
                        }),
                        (0, r.jsxs)("div", {
                            className: K.usernameInnerRow,
                            ref: c,
                            children: [
                                (0, r.jsx)(_.Text, {
                                    tag: "span",
                                    color: "header-primary",
                                    variant: "text-md/normal",
                                    children: l.username,
                                }),
                                !l.hasUniqueUsername() &&
                                    (0, r.jsxs)(_.Text, {
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
            p &&
                (0, r.jsx)("div", {
                    className: K.pomeloWarning,
                    children: (0, r.jsx)(d.u, {
                        text: W.intl.string(W.t.HHC5Z2),
                        children: (0, r.jsx)(_.Mgn, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: u.Z.colors.STATUS_WARNING.css,
                        }),
                    }),
                }),
            null != m &&
                (0, r.jsx)("div", {
                    className: K.pomeloWarning,
                    children: (0, r.jsx)(d.u, {
                        __unsupportedReactNodeAsText: m,
                        "aria-label": !1,
                        children: (0, r.jsx)(_.Mgn, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: u.Z.colors.STATUS_WARNING.css,
                        }),
                    }),
                }),
            (0, r.jsx)(d.u, {
                text: O,
                children: (0, r.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: K.fieldButton,
                    children: (0, r.jsx)(_.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: g ? W.intl.string(W.t["16kTw8"]) : W.intl.string(W.t.bt75u7),
                        disabled: y,
                        "aria-label": W.intl.string(W.t["JECa9/"]),
                        onClick: () =>
                            (0, _.ZDy)(async () => {
                                if (p) {
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
        l = (0, v.gS)(),
        c = null != (n = null == l || null == (t = l.nick) ? void 0 : t[0]) ? n : null,
        f = j.ZP.getGlobalName(a),
        p = i.useRef(null),
        [h, m] = i.useState(!1);
    i.useEffect(() => {
        m(null != p.current && p.current.scrollWidth > p.current.clientWidth);
    }, [f]);
    let g = $();
    return (0, r.jsxs)("div", {
        className: o()(K.field, s),
        children: [
            (0, r.jsx)("div", {
                className: K.constrainedRow,
                children: (0, r.jsxs)("div", {
                    className: K.usernameRow,
                    children: [
                        (0, r.jsx)(_.Text, {
                            variant: "text-md/medium",
                            className: K.fieldTitle,
                            children: W.intl.string(W.t["9AjdkJ"]),
                        }),
                        (0, r.jsx)("div", {
                            className: K.usernameInnerRow,
                            ref: p,
                            children: (0, r.jsx)(_.Text, {
                                tag: "span",
                                color: "header-primary",
                                variant: "text-md/normal",
                                children: null == f ? W.intl.string(W.t.ep5kjI) : f,
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
                        children: (0, r.jsx)(_.Mgn, {
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
                children: (0, r.jsx)(_.Button, {
                    variant: "secondary",
                    size: "sm",
                    text: h ? W.intl.string(W.t["16kTw8"]) : W.intl.string(W.t.bt75u7),
                    "aria-label": W.intl.string(W.t.YXeWYG),
                    onClick: g,
                }),
            }),
        ],
    });
}
function en(e) {
    let { text: t, censor: n, revealLabel: a, hideLabel: o } = e,
        [s, l] = i.useState(!1),
        c = s ? t : n(t);
    return (0, r.jsxs)("div", {
        className: K.textRevealer,
        children: [
            c,
            (0, r.jsx)(_.Avr, {
                variant: "primary",
                textVariant: "text-sm/medium",
                "aria-label": s ? o : a,
                onClick: () => l(!s),
                text: s ? W.intl.string(W.t.fgq1go) : W.intl.string(W.t.dcztdX),
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
                buttonText: W.intl.string(W.t.OYkgVl),
                buttonAriaLabel: W.intl.string(W.t["pvBD+f"]),
                buttonColor: f.zx.Colors.PRIMARY,
                valueMessage: W.intl.string(W.t["8SfTNz"]),
                handleClick: () =>
                    (0, _.ZDy)(async () => {
                        let { default: e } = await n.e("9343").then(n.bind(n, 642298));
                        return (t) => (0, r.jsx)(e, q({}, t));
                    }),
            };
        else {
            let { email: e } = a;
            t = {
                buttonText: W.intl.string(W.t.bt75u7),
                buttonAriaLabel: W.intl.string(W.t["8peUT0"]),
                buttonColor: f.zx.Colors.PRIMARY,
                valueMessage: (0, r.jsx)(en, {
                    text: e,
                    censor: B.E,
                    revealLabel: W.intl.string(W.t["Zvx+yc"]),
                    hideLabel: W.intl.string(W.t.nqTD4e),
                }),
                handleClick: () =>
                    (0, _.ZDy)(async () => {
                        let { default: e } = await n.e("9343").then(n.bind(n, 642298));
                        return (t) => (0, r.jsx)(e, q({}, t));
                    }),
            };
        }
    else
        t = {
            buttonText: W.intl.string(W.t.BleMPD),
            buttonAriaLabel: W.intl.string(W.t.BleMPD),
            buttonColor: f.zx.Colors.BRAND,
            valueMessage: W.intl.string(W.t.qxk9zs),
            handleClick: () => b.Z.openClaimAccountModal(),
        };
    return (0, r.jsxs)("div", {
        className: o()(K.field, i),
        children: [
            (0, r.jsx)("div", {
                className: K.constrainedRow,
                children: (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(_.Text, {
                            variant: "text-md/medium",
                            className: K.fieldTitle,
                            children: W.intl.string(W.t.tlZllJ),
                        }),
                        (0, r.jsx)("div", {
                            children: (0, r.jsx)(_.Text, {
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
                className: K.fieldButton,
                children: (0, r.jsx)(_.Button, {
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
        (0, _.ZDy)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 607018));
                return (t) => (0, r.jsx)(e, q({ reason: I.L.USER_SETTINGS_UPDATE }, t));
            },
            { modalKey: H.M },
        );
    }
    function p() {
        (0, _.h7j)((e) =>
            (0, r.jsx)(
                h.Z,
                Q(q({}, e), {
                    title: W.intl.string(W.t["3CTiKi"]),
                    children: a.hasFlag(V.xW$.MFA_SMS) ? W.intl.string(W.t.jrhJys) : void 0,
                    actionText: W.intl.string(W.t.N86XcH),
                    handleSubmit: (e) => I.Z.removePhone(e, I.L.USER_SETTINGS_UPDATE),
                }),
            ),
        );
    }
    return (
        (t = c
            ? (0, r.jsx)(en, {
                  text: s,
                  censor: B.n,
                  revealLabel: W.intl.string(W.t.eY3xlZ),
                  hideLabel: W.intl.string(W.t.jllbv7),
              })
            : W.intl.string(W.t.I5kDqq)),
        (0, r.jsxs)("div", {
            className: o()(K.field, i),
            children: [
                (0, r.jsx)("div", {
                    className: K.constrainedRow,
                    children: (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(_.Text, {
                                variant: "text-md/medium",
                                className: K.fieldTitle,
                                children: W.intl.string(W.t.kerONj),
                            }),
                            (0, r.jsx)("div", {
                                children: (0, r.jsx)(_.Text, {
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
                    className: K.fieldButtonList,
                    children: [
                        c && u
                            ? (0, r.jsx)(f.zx, {
                                  className: o()(K.fieldButton, K.removeButton),
                                  size: f.zx.Sizes.SMALL,
                                  look: f.zx.Looks.LINK,
                                  color: f.zx.Colors.PRIMARY,
                                  "aria-label": W.intl.string(W.t.Rpn4Aw),
                                  onClick: p,
                                  children: W.intl.string(W.t.N86XcH),
                              })
                            : null,
                        (0, r.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: K.fieldButton,
                            children: (0, r.jsx)(_.Button, {
                                variant: "secondary",
                                size: "sm",
                                text: c ? W.intl.string(W.t.bt75u7) : W.intl.string(W.t.OYkgVl),
                                "aria-label": c ? W.intl.string(W.t.YDabSU) : W.intl.string(W.t.SfUuEx),
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
        n = (0, y.Z)({
            id: t.id,
            label: W.intl.string(W.t["/AXYnJ"]),
        }),
        a = U.Sb.useSetting(),
        o = i.useRef(null);
    return a && M.wS
        ? (0, r.jsx)(_.yRy, {
              targetElementRef: o,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)(_.v2r, {
                      onClose: t,
                      onSelect: void 0,
                      navId: "copy-id",
                      "aria-label": W.intl.string(W.t.RANhlJ),
                      children: n,
                  });
              },
              children: (e) =>
                  (0, r.jsx)(
                      _.P3F,
                      Q(q({}, e), {
                          innerRef: o,
                          className: K.overflowMenuButton,
                          "aria-label": W.intl.string(W.t.DEoVWV),
                          children: (0, r.jsx)(_.xhG, {
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
        n = (0, E.l6)(),
        a = (0, E.Jm)(),
        s = !n || a,
        l = i.useMemo(
            () => (n ? (a ? W.intl.string(W.t.sK0dmJ) : W.intl.string(W.t.XxRj7e)) : W.intl.string(W.t.UX0OdX)),
            [n, a],
        );
    return (0, r.jsxs)("div", {
        className: o()(K.field, t),
        children: [
            (0, r.jsx)("div", {
                className: K.constrainedRow,
                children: (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(_.Text, {
                            variant: "text-md/medium",
                            className: K.fieldTitle,
                            children: W.intl.string(W.t["/52UY2"]),
                        }),
                        (0, r.jsx)("div", {
                            children: (0, r.jsx)(_.Text, {
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
                    className: K.fieldButton,
                    children: (0, r.jsx)(_.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: a ? W.intl.string(W.t.KPGVWl) : W.intl.string(W.t.yNGjyM),
                        "aria-label": a ? W.intl.string(W.t.KPGVWl) : W.intl.string(W.t.yNGjyM),
                        onClick: () => m.Z.showAgeVerificationGetStartedModal({ entryPoint: g.cU.ACCOUNT_AGE_GROUP }),
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
        n = (0, R.ZP)(t.id),
        i = (0, N.Z)(n),
        a = U.co.useSetting(),
        o = (0, c.e7)([L.Z], () => L.Z.getErrors()),
        s = null == o || null == (e = o.avatar) ? void 0 : e[0],
        { avatarSrc: u, avatarDecorationSrc: d } = (0, P.Z)({
            userId: null == t ? void 0 : t.id,
            size: _.EFr.SIZE_80,
        }),
        f = $(),
        h = (0, C.Z)();
    return (0, r.jsxs)("div", {
        className: K.accountProfileCard,
        children: [
            (0, r.jsx)(D.b, {
                user: t,
                displayProfile: n,
                avatarSize: _.EFr.SIZE_80,
                avatarOffsetX: 16,
                avatarOffsetY: -22,
                bannerWidth: h ? 696 : 660,
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
                        size: _.EFr.SIZE_80,
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
                                        displayNameStylesType: O.F.STATIC,
                                    }),
                                    (0, r.jsx)(ea, { user: t }),
                                ],
                            }),
                            (0, r.jsx)(w.Z, {
                                badges: i,
                                className: K.badgeList,
                                badgeClassName: K.badge,
                            }),
                        ],
                    }),
                    (0, r.jsx)(_.Button, {
                        variant: "primary",
                        size: "sm",
                        text: W.intl.string(W.t["2p2aY2"]),
                        onClick: f,
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: K.background,
                children: [
                    null != s
                        ? (0, r.jsx)(_.Text, {
                              className: K.avatarError,
                              variant: "text-xs/normal",
                              color: "text-danger",
                              children: s,
                          })
                        : null,
                    (0, r.jsxs)("div", {
                        className: K.fieldList,
                        children: [
                            (0, r.jsx)(A.F, {
                                setting: F.s6.ACCOUNT_DISPLAY_NAME,
                                children: (0, r.jsx)(et, {
                                    className: K.fieldSpacerBottom,
                                    user: t,
                                }),
                            }),
                            (0, r.jsx)(A.F, {
                                setting: F.s6.ACCOUNT_USERNAME,
                                children: (0, r.jsx)(ee, { user: t }),
                            }),
                            (0, r.jsx)(A.F, {
                                setting: F.s6.ACCOUNT_EMAIL,
                                children: (0, r.jsx)(er, {
                                    className: K.fieldSpacer,
                                    user: t,
                                }),
                            }),
                            (0, r.jsx)(A.F, {
                                setting: F.s6.ACCOUNT_PHONE_NUMBER,
                                children: (0, r.jsx)(ei, {
                                    className: K.fieldSpacer,
                                    user: t,
                                }),
                            }),
                            (0, r.jsx)(A.F, {
                                setting: F.s6.ACCOUNT_AGE_GROUP,
                                children: (0, r.jsx)(eo, { className: K.fieldSpacer }),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
