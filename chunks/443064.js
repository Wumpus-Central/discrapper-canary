n.d(t, { A: () => J });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(827734),
    d = n(990078),
    c = n(397927),
    u = n(297413),
    m = n(935649),
    _ = n(847599),
    g = n(36149),
    x = n(521933),
    A = n(50268),
    h = n(922301),
    p = n(81400),
    f = n(557722),
    T = n(207560),
    S = n(836602),
    E = n(591179),
    b = n(262),
    C = n(950191),
    v = n(854627),
    N = n(657331),
    I = n(542535),
    j = n(915614),
    y = n(662758),
    O = n(957565),
    R = n(975571),
    L = n(427262),
    P = n(837921),
    D = n(253932),
    G = n(780964),
    M = n(192501),
    U = n(840065),
    k = n(652215),
    w = n(53516),
    V = n(985018),
    B = n(536242),
    F = n(856647);
let H = P.Ay.getEnableHardwareAcceleration() ? c.JsQ : c.euF;
function z(e) {
    let t = (0, E.X)("UserSettingsAccountProfileCard");
    return s.useCallback(() => {
        t ? (0, N.openUserProfileModal)({ userId: e }) : (0, U.openUserSettings)(G.X.PROFILE_PANEL);
    }, [t, e]);
}
function Y(e) {
    let { className: t, user: l } = e,
        r = s.useRef(null),
        u = (0, p.EC)(),
        m = u?.nick?.[0] ?? null,
        [_, g] = s.useState(!1);
    s.useEffect(() => {
        g(null != r.current && r.current.scrollWidth > r.current.clientWidth);
    }, [l.username]);
    let x = !l.isClaimed(),
        A = x ? V.intl.string(V.t["7Ngnyr"]) : void 0;
    return (0, i.jsxs)("div", {
        className: a()(F.ZZ, t),
        children: [
            (0, i.jsx)("div", {
                className: F.NQ,
                children: (0, i.jsxs)("div", {
                    className: F.Fj,
                    children: [
                        (0, i.jsx)(c.Text, {
                            variant: "text-md/medium",
                            className: F.p9,
                            children: V.intl.string(V.t.qqhR3L),
                        }),
                        (0, i.jsxs)("div", {
                            className: F.HR,
                            ref: r,
                            children: [
                                (0, i.jsx)(c.Text, {
                                    tag: "span",
                                    color: "text-strong",
                                    variant: "text-md/normal",
                                    children: l.username,
                                }),
                                !l.hasUniqueUsername() &&
                                    (0, i.jsxs)(c.Text, {
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
            null != m &&
                (0, i.jsx)("div", {
                    className: F.a$,
                    children: (0, i.jsx)(d.m, {
                        __unsupportedReactNodeAsText: m,
                        "aria-label": !1,
                        children: (0, i.jsx)(c.EpV, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: o.A.colors.STATUS_WARNING.css,
                        }),
                    }),
                }),
            (0, i.jsx)(d.m, {
                text: A,
                children: (0, i.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: F.pr,
                    children: (0, i.jsx)(c.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: _ ? V.intl.string(V.t["16kTw/"]) : V.intl.string(V.t.bt75uw),
                        disabled: x,
                        "aria-label": V.intl.string(V.t.JECa91),
                        onClick: () =>
                            (0, c.mMO)(async () => {
                                let { default: e } = await n.e("13161").then(n.bind(n, 331632));
                                return (t) => (0, i.jsx)(e, { ...t });
                            }),
                    }),
                }),
            }),
        ],
    });
}
function X(e) {
    let { user: t, className: n } = e,
        l = z(t.id),
        r = (0, p.EC)(),
        u = r?.nick?.[0] ?? null,
        m = L.Ay.getGlobalName(t),
        _ = s.useRef(null),
        [g, x] = s.useState(!1);
    return (
        s.useEffect(() => {
            x(null != _.current && _.current.scrollWidth > _.current.clientWidth);
        }, [m]),
        (0, i.jsxs)("div", {
            className: a()(F.ZZ, n),
            children: [
                (0, i.jsx)("div", {
                    className: F.NQ,
                    children: (0, i.jsxs)("div", {
                        className: F.Fj,
                        children: [
                            (0, i.jsx)(c.Text, {
                                variant: "text-md/medium",
                                className: F.p9,
                                children: V.intl.string(V.t["9AjdkD"]),
                            }),
                            (0, i.jsx)("div", {
                                className: F.HR,
                                ref: _,
                                children: (0, i.jsx)(c.Text, {
                                    tag: "span",
                                    color: "text-strong",
                                    variant: "text-md/normal",
                                    children: null == m ? V.intl.string(V.t.ep5kjK) : m,
                                }),
                            }),
                        ],
                    }),
                }),
                null != u &&
                    (0, i.jsx)("div", {
                        className: F.a$,
                        children: (0, i.jsx)(d.m, {
                            __unsupportedReactNodeAsText: u,
                            "aria-label": !1,
                            children: (0, i.jsx)(c.EpV, {
                                size: "custom",
                                width: 20,
                                height: 20,
                                color: o.A.colors.STATUS_WARNING.css,
                            }),
                        }),
                    }),
                (0, i.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: F.pr,
                    children: (0, i.jsx)(c.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: g ? V.intl.string(V.t["16kTw/"]) : V.intl.string(V.t.bt75uw),
                        "aria-label": V.intl.string(V.t.YXeWYM),
                        onClick: l,
                    }),
                }),
            ],
        })
    );
}
function K(e) {
    let { text: t, censor: n, revealLabel: l, hideLabel: a } = e,
        [r, o] = s.useState(!1),
        d = r ? t : n(t);
    return (0, i.jsxs)("div", {
        className: F.c1,
        children: [
            d,
            (0, i.jsx)(c.QWc, {
                variant: "primary",
                textVariant: "text-sm/medium",
                "aria-label": r ? a : l,
                onClick: () => o(!r),
                text: r ? V.intl.string(V.t.fgq1gs) : V.intl.string(V.t.dcztdU),
            }),
        ],
    });
}
function W(e) {
    let t,
        { className: s, user: l } = e;
    if (l.isClaimed())
        if (null == l.email)
            t = {
                buttonText: V.intl.string(V.t.OYkgVk),
                buttonAriaLabel: V.intl.string(V.t["pvBD+W"]),
                valueMessage: V.intl.string(V.t["8SfTN/"]),
                handleClick: () =>
                    (0, c.mMO)(async () => {
                        let { default: e } = await Promise.all([n.e("89129"), n.e("6130")]).then(n.bind(n, 354096));
                        return (t) => (0, i.jsx)(e, { ...t });
                    }),
            };
        else {
            let { email: e } = l;
            t = {
                buttonText: V.intl.string(V.t.bt75uw),
                buttonAriaLabel: V.intl.string(V.t["8peUT0"]),
                valueMessage: (0, i.jsx)(K, {
                    text: e,
                    censor: M.B,
                    revealLabel: V.intl.string(V.t["Zvx+yV"]),
                    hideLabel: V.intl.string(V.t.nqTD4d),
                }),
                handleClick: () =>
                    (0, c.mMO)(async () => {
                        let { default: e } = await Promise.all([n.e("89129"), n.e("6130")]).then(n.bind(n, 354096));
                        return (t) => (0, i.jsx)(e, { ...t });
                    }),
            };
        }
    else
        t = {
            buttonText: V.intl.string(V.t.BleMPB),
            buttonAriaLabel: V.intl.string(V.t.BleMPB),
            valueMessage: V.intl.string(V.t.qxk9zo),
            handleClick: () => x.A.openClaimAccountModal(),
        };
    return (0, i.jsxs)("div", {
        className: a()(F.ZZ, s),
        children: [
            (0, i.jsx)("div", {
                className: F.NQ,
                children: (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)(c.Text, {
                            variant: "text-md/medium",
                            className: F.p9,
                            children: V.intl.string(V.t.tlZllC),
                        }),
                        (0, i.jsx)("div", {
                            children: (0, i.jsx)(c.Text, {
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
                className: F.pr,
                children: (0, i.jsx)(c.Button, {
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
function Z(e) {
    let t,
        { className: s, user: l } = e;
    if (!l.isClaimed()) return null;
    let { phone: r, email: o } = l,
        d = null != r;
    return (
        (t = d
            ? (0, i.jsx)(K, {
                  text: r,
                  censor: M.D,
                  revealLabel: V.intl.string(V.t.eY3xlT),
                  hideLabel: V.intl.string(V.t["jllbv+"]),
              })
            : V.intl.string(V.t.I5kDqj)),
        (0, i.jsxs)("div", {
            className: a()(F.ZZ, s),
            children: [
                (0, i.jsx)("div", {
                    className: F.NQ,
                    children: (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(c.Text, {
                                variant: "text-md/medium",
                                className: F.p9,
                                children: V.intl.string(V.t.kerONq),
                            }),
                            (0, i.jsx)("div", {
                                children: (0, i.jsx)(c.Text, {
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
                    className: F.PU,
                    children: [
                        d && null != o
                            ? (0, i.jsx)("div", {
                                  className: a()(F.pr, F.DT),
                                  children: (0, i.jsx)(c.QWc, {
                                      textVariant: "text-sm/medium",
                                      variant: "secondary",
                                      text: V.intl.string(V.t.N86XcP),
                                      "aria-label": V.intl.string(V.t.Rpn4A3),
                                      onClick: function () {
                                          (0, c.qfG)((e) =>
                                              (0, i.jsx)(y.default, {
                                                  ...e,
                                                  title: V.intl.string(V.t["3CTiKi"]),
                                                  children: l.hasFlag(k.nhx.MFA_SMS)
                                                      ? V.intl.string(V.t.jrhJyo)
                                                      : void 0,
                                                  actionText: V.intl.string(V.t.N86XcP),
                                                  handleSubmit: (e) => f.A.removePhone(e, f.d.USER_SETTINGS_UPDATE),
                                              }),
                                          );
                                      },
                                  }),
                              })
                            : null,
                        (0, i.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: F.pr,
                            children: (0, i.jsx)(c.Button, {
                                variant: "secondary",
                                size: "sm",
                                text: d ? V.intl.string(V.t.bt75uw) : V.intl.string(V.t.OYkgVk),
                                "aria-label": d ? V.intl.string(V.t.YDabSe) : V.intl.string(V.t["SfUuE+"]),
                                onClick: function () {
                                    (0, c.mMO)(
                                        async () => {
                                            let { default: e } = await Promise.resolve().then(n.bind(n, 615715));
                                            return (t) => (0, i.jsx)(e, { reason: f.d.USER_SETTINGS_UPDATE, ...t });
                                        },
                                        { modalKey: w.V },
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
function q(e) {
    let { user: t } = e,
        n = (0, A.A)({ id: t.id, label: V.intl.string(V.t["/AXYnE"]) }),
        l = D.Q_.useSetting(),
        a = s.useRef(null);
    return l && O.p5
        ? (0, i.jsx)(c.YNO, {
              targetElementRef: a,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, i.jsx)(c.W1t, {
                      "data-menu-migrated": !0,
                      onClose: t,
                      onSelect: void 0,
                      navId: "copy-id",
                      "aria-label": V.intl.string(V.t.RANhlE),
                      children: n,
                  });
              },
              children: (e) =>
                  (0, i.jsx)(c.DUT, {
                      ...e,
                      innerRef: a,
                      className: F.SI,
                      "aria-label": V.intl.string(V.t.DEoVWZ),
                      children: (0, i.jsx)(c.jNK, { size: "md", color: "currentColor", className: F.D$ }),
                  }),
          })
        : null;
}
function Q(e) {
    let { className: t } = e,
        l = (0, g.b8)(),
        r = (0, g.yM)(),
        o = (0, g.Y2)(),
        d = !l || r,
        u = V.intl.string(V.t["9KiIz6"]),
        x = V.intl.string(V.t.DVywUB),
        A = V.intl.string(V.t.lKDPGA),
        h = s.useCallback(() => {
            window.open(R.A.getArticleURL(k.MVz.TIGGER_PAWTECT_LEARN_MORE), "_blank");
        }, []),
        p = s.useCallback(() => {
            (0, c.mMO)(async () => {
                let { default: e } = await n.e("45361").then(n.bind(n, 151080));
                return (t) => (0, i.jsx)(e, { ...t });
            });
        }, []),
        f = s.useMemo(
            () =>
                l
                    ? r
                        ? V.intl.string(V.t.sK0dmH)
                        : o
                          ? V.intl.format(B.default.WM5adV, { handleOnHelpUrlHook: h })
                          : V.intl.string(V.t.XxRj7f)
                    : A,
            [l, r, o, A, h],
        ),
        T = l && !r && o;
    return (0, i.jsxs)("div", {
        className: a()(F.ZZ, t),
        children: [
            (0, i.jsx)("div", {
                className: F.NQ,
                children: (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)(c.Text, {
                            variant: "text-md/medium",
                            className: F.p9,
                            children: V.intl.string(V.t["/52UYy"]),
                        }),
                        (0, i.jsx)("div", {
                            children: (0, i.jsxs)(c.Text, {
                                tag: "span",
                                color: "text-strong",
                                variant: "text-md/normal",
                                children: [o && l && !r ? `${V.intl.string(V.t.XxRj7f)} • ` : null, f],
                            }),
                        }),
                    ],
                }),
            }),
            T &&
                (0, i.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: F.pr,
                    children: (0, i.jsx)(c.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: V.intl.string(V.t.bt75uw),
                        "aria-label": V.intl.string(V.t.bt75uw),
                        onClick: p,
                    }),
                }),
            d &&
                !T &&
                (0, i.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: F.pr,
                    children: (0, i.jsx)(c.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: r ? u : x,
                        "aria-label": r ? u : x,
                        onClick: () => m.A.showAgeVerificationGetStartedModal({ entryPoint: _.q1.ACCOUNT_AGE_GROUP }),
                    }),
                }),
        ],
    });
}
function J(e) {
    let { currentUser: t } = e,
        n = z(t.id),
        s = (0, C.Ay)(t.id),
        l = (0, b.A)(s),
        a = D.jP.useSetting(),
        o = (0, r.bG)([S.A], () => S.A.getErrors()),
        d = o?.avatar?.[0],
        { avatarSrc: m, avatarDecorationSrc: _ } = (0, v.A)({ userId: t?.id, size: c._3J.SIZE_80 }),
        g = (0, T.fk)();
    return (0, i.jsxs)("div", {
        className: F.DM,
        children: [
            (0, i.jsx)(j.o, {
                user: t,
                displayProfile: s,
                avatarSize: c._3J.SIZE_80,
                avatarOffsetX: 16,
                avatarOffsetY: -22,
                bannerWidth: 696,
                bannerHeight: 100,
                themePadding: 0,
            }),
            (0, i.jsxs)("div", {
                className: F.eF,
                children: [
                    (0, i.jsx)(H, {
                        className: F.my,
                        src: m,
                        avatarDecoration: _,
                        status: a,
                        size: c._3J.SIZE_80,
                        "aria-label": t.username,
                    }),
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsxs)("div", {
                                className: F.Ib,
                                children: [
                                    (0, i.jsx)(u.A, {
                                        user: t,
                                        className: F.a1,
                                        discriminatorClass: F.D2,
                                        displayNameStylesType: h.G.STATIC,
                                    }),
                                    (0, i.jsx)(q, { user: t }),
                                ],
                            }),
                            (0, i.jsx)(I.A, { badges: l, className: F.C_, badgeClassName: F.qS }),
                        ],
                    }),
                    (0, i.jsx)(c.Button, {
                        variant: "primary",
                        size: "sm",
                        text: V.intl.string(V.t["2p2aYz"]),
                        onClick: n,
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: F.Tp,
                children: [
                    null != d
                        ? (0, i.jsx)(c.Text, {
                              className: F.mx,
                              variant: "text-xs/normal",
                              color: "text-feedback-critical",
                              children: d,
                          })
                        : null,
                    (0, i.jsxs)("div", {
                        className: F.FL,
                        children: [
                            (0, i.jsx)(X, { className: F.mS, user: t }),
                            (0, i.jsx)(Y, { user: t }),
                            (0, i.jsx)(W, { className: F.Zr, user: t }),
                            (0, i.jsx)(Z, { className: F.Zr, user: t }),
                            g && (0, i.jsx)(Q, { className: F.Zr }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
