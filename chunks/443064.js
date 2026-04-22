n.d(t, { A: () => eo });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(827734),
    d = n(990078),
    u = n(97808),
    c = n(834730),
    g = n(695366),
    m = n(821609),
    _ = n(192308),
    A = n(123292),
    h = n(265872),
    p = n(861672),
    x = n(939249),
    E = n(365199),
    T = n(778712),
    S = n(297413),
    f = n(935649),
    b = n(847599),
    C = n(36149),
    v = n(521933),
    N = n(50268),
    I = n(922301),
    y = n(81400),
    j = n(557722),
    O = n(207560),
    R = n(836602),
    L = n(591179),
    D = n(262),
    P = n(950191),
    G = n(854627),
    M = n(657331),
    U = n(542535),
    k = n(915614),
    w = n(662758),
    V = n(957565),
    B = n(975571),
    F = n(427262),
    z = n(837921),
    H = n(253932),
    Y = n(780964),
    X = n(858897),
    K = n(980429),
    W = n(982363),
    Z = n(652215),
    q = n(53516),
    Q = n(985018),
    J = n(516761),
    $ = n(475543);
let ee = z.Ay.getEnableHardwareAcceleration() ? u.Js : u.eu;
function et(e) {
    let t = (0, L.X)("UserSettingsAccountProfileCard");
    return s.useCallback(() => {
        t ? (0, M.openUserProfileModal)({ userId: e }) : (0, X.openUserSettings)(Y.X.PROFILE_PANEL);
    }, [t, e]);
}
function en(e) {
    let { className: t, user: l } = e,
        r = s.useRef(null),
        u = (0, y.EC)(),
        A = u?.nick?.[0] ?? null,
        [h, p] = s.useState(!1);
    s.useEffect(() => {
        p(null != r.current && r.current.scrollWidth > r.current.clientWidth);
    }, [l.username]);
    let x = !l.isClaimed(),
        E = x ? Q.intl.string(Q.t["7Ngnyr"]) : void 0;
    return (0, i.jsxs)("div", {
        className: a()($.ZZ, t),
        children: [
            (0, i.jsx)("div", {
                className: $.NQ,
                children: (0, i.jsxs)("div", {
                    className: $.Fj,
                    children: [
                        (0, i.jsx)(c.E, {
                            variant: "text-md/medium",
                            className: $.p9,
                            children: Q.intl.string(Q.t.qqhR3L),
                        }),
                        (0, i.jsxs)("div", {
                            className: $.HR,
                            ref: r,
                            children: [
                                (0, i.jsx)(c.E, {
                                    tag: "span",
                                    color: "text-strong",
                                    variant: "text-md/normal",
                                    children: l.username,
                                }),
                                !l.hasUniqueUsername() &&
                                    (0, i.jsxs)(c.E, {
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
            null != A &&
                (0, i.jsx)("div", {
                    className: $.a$,
                    children: (0, i.jsx)(d.m, {
                        __unsupportedReactNodeAsText: A,
                        "aria-label": !1,
                        children: (0, i.jsx)(g.E, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: o.A.colors.STATUS_WARNING.css,
                        }),
                    }),
                }),
            (0, i.jsx)(d.m, {
                text: E,
                children: (0, i.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: $.pr,
                    children: (0, i.jsx)(m.$, {
                        variant: "secondary",
                        size: "sm",
                        text: h ? Q.intl.string(Q.t["16kTw/"]) : Q.intl.string(Q.t.bt75uw),
                        disabled: x,
                        "aria-label": Q.intl.string(Q.t.JECa91),
                        onClick: () =>
                            (0, _.openModalLazy)(async () => {
                                let { default: e } = await n.e("13161").then(n.bind(n, 331632));
                                return (t) => (0, i.jsx)(e, { ...t });
                            }),
                    }),
                }),
            }),
        ],
    });
}
function ei(e) {
    let { user: t, className: n } = e,
        l = et(t.id),
        r = (0, y.EC)(),
        u = r?.nick?.[0] ?? null,
        _ = F.Ay.getGlobalName(t),
        A = s.useRef(null),
        [h, p] = s.useState(!1);
    return (
        s.useEffect(() => {
            p(null != A.current && A.current.scrollWidth > A.current.clientWidth);
        }, [_]),
        (0, i.jsxs)("div", {
            className: a()($.ZZ, n),
            children: [
                (0, i.jsx)("div", {
                    className: $.NQ,
                    children: (0, i.jsxs)("div", {
                        className: $.Fj,
                        children: [
                            (0, i.jsx)(c.E, {
                                variant: "text-md/medium",
                                className: $.p9,
                                children: Q.intl.string(Q.t["9AjdkD"]),
                            }),
                            (0, i.jsx)("div", {
                                className: $.HR,
                                ref: A,
                                children: (0, i.jsx)(c.E, {
                                    tag: "span",
                                    color: "text-strong",
                                    variant: "text-md/normal",
                                    children: null == _ ? Q.intl.string(Q.t.ep5kjK) : _,
                                }),
                            }),
                        ],
                    }),
                }),
                null != u &&
                    (0, i.jsx)("div", {
                        className: $.a$,
                        children: (0, i.jsx)(d.m, {
                            __unsupportedReactNodeAsText: u,
                            "aria-label": !1,
                            children: (0, i.jsx)(g.E, {
                                size: "custom",
                                width: 20,
                                height: 20,
                                color: o.A.colors.STATUS_WARNING.css,
                            }),
                        }),
                    }),
                (0, i.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: $.pr,
                    children: (0, i.jsx)(m.$, {
                        variant: "secondary",
                        size: "sm",
                        text: h ? Q.intl.string(Q.t["16kTw/"]) : Q.intl.string(Q.t.bt75uw),
                        "aria-label": Q.intl.string(Q.t.YXeWYM),
                        onClick: l,
                    }),
                }),
            ],
        })
    );
}
function es(e) {
    let t,
        { className: s, user: l } = e;
    if (l.isClaimed())
        if (null == l.email)
            t = {
                buttonText: Q.intl.string(Q.t.OYkgVk),
                buttonAriaLabel: Q.intl.string(Q.t["pvBD+W"]),
                valueMessage: Q.intl.string(Q.t["8SfTN/"]),
                handleClick: () =>
                    (0, _.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e("89129"), n.e("28450")]).then(n.bind(n, 354096));
                        return (t) => (0, i.jsx)(e, { ...t });
                    }),
            };
        else {
            let { email: e } = l;
            t = {
                buttonText: Q.intl.string(Q.t.bt75uw),
                buttonAriaLabel: Q.intl.string(Q.t["8peUT0"]),
                valueMessage: (0, i.jsx)(W.q, {
                    text: e,
                    censor: K.B,
                    revealLabel: Q.intl.string(Q.t["Zvx+yV"]),
                    hideLabel: Q.intl.string(Q.t.nqTD4d),
                }),
                handleClick: () =>
                    (0, _.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e("89129"), n.e("28450")]).then(n.bind(n, 354096));
                        return (t) => (0, i.jsx)(e, { ...t });
                    }),
            };
        }
    else
        t = {
            buttonText: Q.intl.string(Q.t.BleMPB),
            buttonAriaLabel: Q.intl.string(Q.t.BleMPB),
            valueMessage: Q.intl.string(Q.t.qxk9zo),
            handleClick: () => v.A.openClaimAccountModal(),
        };
    return (0, i.jsxs)("div", {
        className: a()($.ZZ, s),
        children: [
            (0, i.jsx)("div", {
                className: $.NQ,
                children: (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)(c.E, {
                            variant: "text-md/medium",
                            className: $.p9,
                            children: Q.intl.string(Q.t.tlZllC),
                        }),
                        (0, i.jsx)("div", {
                            children: (0, i.jsx)(c.E, {
                                tag: "span",
                                color: "text-strong",
                                variant: "text-md/normal",
                                children: t.valueMessage,
                            }),
                        }),
                    ],
                }),
            }),
            (0, i.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: $.pr,
                children: (0, i.jsx)(m.$, {
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
function el(e) {
    let t,
        { className: s, user: l } = e;
    if (!l.isClaimed()) return null;
    let { phone: r, email: o } = l,
        d = null != r;
    return (
        (t = d
            ? (0, i.jsx)(W.q, {
                  text: r,
                  censor: K.D,
                  revealLabel: Q.intl.string(Q.t.eY3xlT),
                  hideLabel: Q.intl.string(Q.t["jllbv+"]),
              })
            : Q.intl.string(Q.t.I5kDqj)),
        (0, i.jsxs)("div", {
            className: a()($.ZZ, s),
            children: [
                (0, i.jsx)("div", {
                    className: $.NQ,
                    children: (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(c.E, {
                                variant: "text-md/medium",
                                className: $.p9,
                                children: Q.intl.string(Q.t.kerONq),
                            }),
                            (0, i.jsx)("div", {
                                children: (0, i.jsx)(c.E, {
                                    tag: "span",
                                    color: "text-strong",
                                    variant: "text-md/normal",
                                    children: t,
                                }),
                            }),
                        ],
                    }),
                }),
                (0, i.jsxs)("div", {
                    className: $.PU,
                    children: [
                        d && null != o
                            ? (0, i.jsx)("div", {
                                  className: a()($.pr, $.DT),
                                  children: (0, i.jsx)(A.Q, {
                                      textVariant: "text-sm/medium",
                                      variant: "secondary",
                                      text: Q.intl.string(Q.t.N86XcP),
                                      "aria-label": Q.intl.string(Q.t.Rpn4A3),
                                      onClick: function () {
                                          (0, _.openModal)((e) =>
                                              (0, i.jsx)(w.default, {
                                                  ...e,
                                                  title: Q.intl.string(Q.t["3CTiKi"]),
                                                  children: l.hasFlag(Z.nhx.MFA_SMS)
                                                      ? Q.intl.string(Q.t.jrhJyo)
                                                      : void 0,
                                                  actionText: Q.intl.string(Q.t.N86XcP),
                                                  handleSubmit: (e) => j.A.removePhone(e, j.d.USER_SETTINGS_UPDATE),
                                              }),
                                          );
                                      },
                                  }),
                              })
                            : null,
                        (0, i.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: $.pr,
                            children: (0, i.jsx)(m.$, {
                                variant: "secondary",
                                size: "sm",
                                text: d ? Q.intl.string(Q.t.bt75uw) : Q.intl.string(Q.t.OYkgVk),
                                "aria-label": d ? Q.intl.string(Q.t.YDabSe) : Q.intl.string(Q.t["SfUuE+"]),
                                onClick: function () {
                                    (0, _.openModalLazy)(
                                        async () => {
                                            let { default: e } = await Promise.resolve().then(n.bind(n, 615715));
                                            return (t) => (0, i.jsx)(e, { reason: j.d.USER_SETTINGS_UPDATE, ...t });
                                        },
                                        { modalKey: q.V },
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
function ea(e) {
    let { user: t } = e,
        n = (0, N.A)({ id: t.id, label: Q.intl.string(Q.t["/AXYnE"]) }),
        l = H.Q_.useSetting(),
        a = s.useRef(null);
    return l && V.p5
        ? (0, i.jsx)(h.Y, {
              targetElementRef: a,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, i.jsx)(p.W, {
                      "data-menu-migrated": !0,
                      onClose: t,
                      onSelect: void 0,
                      navId: "copy-id",
                      "aria-label": Q.intl.string(Q.t.RANhlE),
                      children: n,
                  });
              },
              children: (e) =>
                  (0, i.jsx)(x.D, {
                      ...e,
                      innerRef: a,
                      className: $.SI,
                      "aria-label": Q.intl.string(Q.t.DEoVWZ),
                      children: (0, i.jsx)(E.j, { size: "md", color: "currentColor", className: $.D$ }),
                  }),
          })
        : null;
}
function er(e) {
    let { className: t } = e,
        l = (0, C.b8)(),
        r = (0, C.yM)(),
        o = (0, C.Y2)(),
        d = !l || r,
        u = Q.intl.string(Q.t["9KiIz6"]),
        g = Q.intl.string(Q.t.DVywUB),
        A = Q.intl.string(Q.t.lKDPGA),
        h = s.useCallback(() => {
            window.open(B.A.getArticleURL(Z.MVz.TIGGER_PAWTECT_LEARN_MORE), "_blank");
        }, []),
        p = s.useCallback(() => {
            (0, _.openModalLazy)(async () => {
                let { default: e } = await n.e("45361").then(n.bind(n, 151080));
                return (t) => (0, i.jsx)(e, { ...t });
            });
        }, []),
        x = s.useMemo(
            () =>
                l
                    ? r
                        ? Q.intl.string(Q.t.sK0dmH)
                        : o
                          ? Q.intl.format(J.default.WM5adV, { handleOnHelpUrlHook: h })
                          : Q.intl.string(Q.t.XxRj7f)
                    : A,
            [l, r, o, A, h],
        ),
        E = l && !r && o;
    return (0, i.jsxs)("div", {
        className: a()($.ZZ, t),
        children: [
            (0, i.jsx)("div", {
                className: $.NQ,
                children: (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)(c.E, {
                            variant: "text-md/medium",
                            className: $.p9,
                            children: Q.intl.string(Q.t["/52UYy"]),
                        }),
                        (0, i.jsx)("div", {
                            children: (0, i.jsxs)(c.E, {
                                tag: "span",
                                color: "text-strong",
                                variant: "text-md/normal",
                                children: [o && l && !r ? `${Q.intl.string(Q.t.XxRj7f)} • ` : null, x],
                            }),
                        }),
                    ],
                }),
            }),
            E &&
                (0, i.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: $.pr,
                    children: (0, i.jsx)(m.$, {
                        variant: "secondary",
                        size: "sm",
                        text: Q.intl.string(Q.t.bt75uw),
                        "aria-label": Q.intl.string(Q.t.bt75uw),
                        onClick: p,
                    }),
                }),
            d &&
                !E &&
                (0, i.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: $.pr,
                    children: (0, i.jsx)(m.$, {
                        variant: "secondary",
                        size: "sm",
                        text: r ? u : g,
                        "aria-label": r ? u : g,
                        onClick: () => f.A.showAgeVerificationGetStartedModal({ entryPoint: b.q1.ACCOUNT_AGE_GROUP }),
                    }),
                }),
        ],
    });
}
function eo(e) {
    let { currentUser: t } = e,
        n = et(t.id),
        s = (0, P.Ay)(t.id),
        l = (0, D.A)(s),
        a = H.jP.useSetting(),
        o = (0, r.bG)([R.A], () => R.A.getErrors()),
        d = o?.avatar?.[0],
        { avatarSrc: u, avatarDecorationSrc: g } = (0, G.A)({ userId: t?.id, size: T._3.SIZE_80 }),
        _ = (0, O.fk)();
    return (0, i.jsxs)("div", {
        className: $.DM,
        children: [
            (0, i.jsx)(k.o, {
                user: t,
                displayProfile: s,
                avatarSize: T._3.SIZE_80,
                avatarOffsetX: 16,
                avatarOffsetY: -22,
                bannerWidth: 696,
                bannerHeight: 100,
                themePadding: 0,
            }),
            (0, i.jsxs)("div", {
                className: $.eF,
                children: [
                    (0, i.jsx)(ee, {
                        className: $.my,
                        src: u,
                        avatarDecoration: g,
                        status: a,
                        size: T._3.SIZE_80,
                        "aria-label": t.username,
                    }),
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsxs)("div", {
                                className: $.Ib,
                                children: [
                                    (0, i.jsx)(S.A, {
                                        user: t,
                                        className: $.a1,
                                        discriminatorClass: $.D2,
                                        displayNameStylesType: I.G.STATIC,
                                    }),
                                    (0, i.jsx)(ea, { user: t }),
                                ],
                            }),
                            (0, i.jsx)(U.A, { badges: l, className: $.C_, badgeClassName: $.qS }),
                        ],
                    }),
                    (0, i.jsx)(m.$, { variant: "primary", size: "sm", text: Q.intl.string(Q.t["2p2aYz"]), onClick: n }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: $.Tp,
                children: [
                    null != d
                        ? (0, i.jsx)(c.E, {
                              className: $.mx,
                              variant: "text-xs/normal",
                              color: "text-feedback-critical",
                              children: d,
                          })
                        : null,
                    (0, i.jsxs)("div", {
                        className: $.FL,
                        children: [
                            (0, i.jsx)(ei, { className: $.mS, user: t }),
                            (0, i.jsx)(en, { user: t }),
                            (0, i.jsx)(es, { className: $.Zr, user: t }),
                            (0, i.jsx)(el, { className: $.Zr, user: t }),
                            _ && (0, i.jsx)(er, { className: $.Zr }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
