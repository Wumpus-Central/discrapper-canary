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
    _ = n(935649),
    m = n(847599),
    g = n(36149),
    A = n(521933),
    h = n(50268),
    x = n(922301),
    p = n(81400),
    T = n(557722),
    E = n(207560),
    S = n(790114),
    C = n(836602),
    f = n(262),
    b = n(950191),
    N = n(854627),
    I = n(542535),
    v = n(915614),
    j = n(662758),
    y = n(957565),
    R = n(975571),
    O = n(427262),
    P = n(837921),
    D = n(253932),
    L = n(780964),
    G = n(192501),
    M = n(840065),
    U = n(652215),
    k = n(53516),
    V = n(985018),
    w = n(536242),
    B = n(609290);
let H = P.Ay.getEnableHardwareAcceleration() ? c.JsQ : c.euF;
function F() {
    (0, M.openUserSettings)(L.X.PROFILE_PANEL);
}
function Y(e) {
    let { className: t, user: l } = e,
        r = s.useRef(null),
        u = (0, p.EC)(),
        _ = u?.nick?.[0] ?? null,
        [m, g] = s.useState(!1);
    s.useEffect(() => {
        g(null != r.current && r.current.scrollWidth > r.current.clientWidth);
    }, [l.username]);
    let A = !l.isClaimed(),
        h = A ? V.intl.string(V.t["7Ngnyr"]) : void 0;
    return (0, i.jsxs)("div", {
        className: a()(B.ZZ, t),
        children: [
            (0, i.jsx)("div", {
                className: B.NQ,
                children: (0, i.jsxs)("div", {
                    className: B.Fj,
                    children: [
                        (0, i.jsx)(c.Text, {
                            variant: "text-md/medium",
                            className: B.p9,
                            children: V.intl.string(V.t.qqhR3L),
                        }),
                        (0, i.jsxs)("div", {
                            className: B.HR,
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
            null != _ &&
                (0, i.jsx)("div", {
                    className: B.a$,
                    children: (0, i.jsx)(d.m, {
                        __unsupportedReactNodeAsText: _,
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
                text: h,
                children: (0, i.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: B.pr,
                    children: (0, i.jsx)(c.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: m ? V.intl.string(V.t["16kTw/"]) : V.intl.string(V.t.bt75uw),
                        disabled: A,
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
function z(e) {
    let { user: t, className: n } = e,
        l = (0, p.EC)(),
        r = l?.nick?.[0] ?? null,
        u = O.Ay.getGlobalName(t),
        _ = s.useRef(null),
        [m, g] = s.useState(!1);
    return (
        s.useEffect(() => {
            g(null != _.current && _.current.scrollWidth > _.current.clientWidth);
        }, [u]),
        (0, i.jsxs)("div", {
            className: a()(B.ZZ, n),
            children: [
                (0, i.jsx)("div", {
                    className: B.NQ,
                    children: (0, i.jsxs)("div", {
                        className: B.Fj,
                        children: [
                            (0, i.jsx)(c.Text, {
                                variant: "text-md/medium",
                                className: B.p9,
                                children: V.intl.string(V.t["9AjdkD"]),
                            }),
                            (0, i.jsx)("div", {
                                className: B.HR,
                                ref: _,
                                children: (0, i.jsx)(c.Text, {
                                    tag: "span",
                                    color: "text-strong",
                                    variant: "text-md/normal",
                                    children: null == u ? V.intl.string(V.t.ep5kjK) : u,
                                }),
                            }),
                        ],
                    }),
                }),
                null != r &&
                    (0, i.jsx)("div", {
                        className: B.a$,
                        children: (0, i.jsx)(d.m, {
                            __unsupportedReactNodeAsText: r,
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
                    className: B.pr,
                    children: (0, i.jsx)(c.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: m ? V.intl.string(V.t["16kTw/"]) : V.intl.string(V.t.bt75uw),
                        "aria-label": V.intl.string(V.t.YXeWYM),
                        onClick: F,
                    }),
                }),
            ],
        })
    );
}
function X(e) {
    let { text: t, censor: n, revealLabel: l, hideLabel: a } = e,
        [r, o] = s.useState(!1),
        d = r ? t : n(t);
    return (0, i.jsxs)("div", {
        className: B.c1,
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
                        let { default: e } = await Promise.all([n.e("89129"), n.e("75283")]).then(n.bind(n, 354096));
                        return (t) => (0, i.jsx)(e, { ...t });
                    }),
            };
        else {
            let { email: e } = l;
            t = {
                buttonText: V.intl.string(V.t.bt75uw),
                buttonAriaLabel: V.intl.string(V.t["8peUT0"]),
                valueMessage: (0, i.jsx)(X, {
                    text: e,
                    censor: G.B,
                    revealLabel: V.intl.string(V.t["Zvx+yV"]),
                    hideLabel: V.intl.string(V.t.nqTD4d),
                }),
                handleClick: () =>
                    (0, c.mMO)(async () => {
                        let { default: e } = await Promise.all([n.e("89129"), n.e("75283")]).then(n.bind(n, 354096));
                        return (t) => (0, i.jsx)(e, { ...t });
                    }),
            };
        }
    else
        t = {
            buttonText: V.intl.string(V.t.BleMPB),
            buttonAriaLabel: V.intl.string(V.t.BleMPB),
            valueMessage: V.intl.string(V.t.qxk9zo),
            handleClick: () => A.A.openClaimAccountModal(),
        };
    return (0, i.jsxs)("div", {
        className: a()(B.ZZ, s),
        children: [
            (0, i.jsx)("div", {
                className: B.NQ,
                children: (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)(c.Text, {
                            variant: "text-md/medium",
                            className: B.p9,
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
                className: B.pr,
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
function K(e) {
    let t,
        { className: s, user: l } = e;
    if (!l.isClaimed()) return null;
    let { phone: r, email: o } = l,
        d = null != r;
    return (
        (t = d
            ? (0, i.jsx)(X, {
                  text: r,
                  censor: G.D,
                  revealLabel: V.intl.string(V.t.eY3xlT),
                  hideLabel: V.intl.string(V.t["jllbv+"]),
              })
            : V.intl.string(V.t.I5kDqj)),
        (0, i.jsxs)("div", {
            className: a()(B.ZZ, s),
            children: [
                (0, i.jsx)("div", {
                    className: B.NQ,
                    children: (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(c.Text, {
                                variant: "text-md/medium",
                                className: B.p9,
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
                    className: B.PU,
                    children: [
                        d && null != o
                            ? (0, i.jsx)("div", {
                                  className: a()(B.pr, B.DT),
                                  children: (0, i.jsx)(c.QWc, {
                                      textVariant: "text-sm/medium",
                                      variant: "secondary",
                                      text: V.intl.string(V.t.N86XcP),
                                      "aria-label": V.intl.string(V.t.Rpn4A3),
                                      onClick: function () {
                                          (0, c.qfG)((e) =>
                                              (0, i.jsx)(j.default, {
                                                  ...e,
                                                  title: V.intl.string(V.t["3CTiKi"]),
                                                  children: l.hasFlag(U.nhx.MFA_SMS)
                                                      ? V.intl.string(V.t.jrhJyo)
                                                      : void 0,
                                                  actionText: V.intl.string(V.t.N86XcP),
                                                  handleSubmit: (e) => T.A.removePhone(e, T.d.USER_SETTINGS_UPDATE),
                                              }),
                                          );
                                      },
                                  }),
                              })
                            : null,
                        (0, i.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: B.pr,
                            children: (0, i.jsx)(c.Button, {
                                variant: "secondary",
                                size: "sm",
                                text: d ? V.intl.string(V.t.bt75uw) : V.intl.string(V.t.OYkgVk),
                                "aria-label": d ? V.intl.string(V.t.YDabSe) : V.intl.string(V.t["SfUuE+"]),
                                onClick: function () {
                                    (0, c.mMO)(
                                        async () => {
                                            let { default: e } = await Promise.resolve().then(n.bind(n, 615715));
                                            return (t) => (0, i.jsx)(e, { reason: T.d.USER_SETTINGS_UPDATE, ...t });
                                        },
                                        { modalKey: k.V },
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
function Z(e) {
    let { user: t } = e,
        n = (0, h.A)({ id: t.id, label: V.intl.string(V.t["/AXYnE"]) }),
        l = D.Q_.useSetting(),
        a = s.useRef(null);
    return l && y.p5
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
                      className: B.SI,
                      "aria-label": V.intl.string(V.t.DEoVWZ),
                      children: (0, i.jsx)(c.jNK, { size: "md", color: "currentColor", className: B.D$ }),
                  }),
          })
        : null;
}
function q(e) {
    let { className: t } = e,
        l = (0, g.b8)(),
        r = (0, g.yM)(),
        o = (0, g.Y2)(),
        d = !l || r,
        u = V.intl.string(V.t["9KiIz6"]),
        A = V.intl.string(V.t.DVywUB),
        h = V.intl.string(V.t.lKDPGA),
        x = s.useCallback(() => {
            window.open(R.A.getArticleURL(U.MVz.TIGGER_PAWTECT_LEARN_MORE), "_blank");
        }, []),
        p = s.useCallback(() => {
            (0, c.mMO)(async () => {
                let { default: e } = await n.e("45361").then(n.bind(n, 151080));
                return (t) => (0, i.jsx)(e, { ...t });
            });
        }, []),
        T = s.useMemo(
            () =>
                l
                    ? r
                        ? V.intl.string(V.t.sK0dmH)
                        : o
                          ? V.intl.format(w.default.WM5adV, { handleOnHelpUrlHook: x })
                          : V.intl.string(V.t.XxRj7f)
                    : h,
            [l, r, o, h, x],
        ),
        E = l && !r && o;
    return (0, i.jsxs)("div", {
        className: a()(B.ZZ, t),
        children: [
            (0, i.jsx)("div", {
                className: B.NQ,
                children: (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)(c.Text, {
                            variant: "text-md/medium",
                            className: B.p9,
                            children: V.intl.string(V.t["/52UYy"]),
                        }),
                        (0, i.jsx)("div", {
                            children: (0, i.jsxs)(c.Text, {
                                tag: "span",
                                color: "text-strong",
                                variant: "text-md/normal",
                                children: [o && l && !r ? `${V.intl.string(V.t.XxRj7f)} • ` : null, T],
                            }),
                        }),
                    ],
                }),
            }),
            E &&
                (0, i.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: B.pr,
                    children: (0, i.jsx)(c.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: V.intl.string(V.t.bt75uw),
                        "aria-label": V.intl.string(V.t.bt75uw),
                        onClick: p,
                    }),
                }),
            d &&
                !E &&
                (0, i.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: B.pr,
                    children: (0, i.jsx)(c.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: r ? u : A,
                        "aria-label": r ? u : A,
                        onClick: () => _.A.showAgeVerificationGetStartedModal({ entryPoint: m.q1.ACCOUNT_AGE_GROUP }),
                    }),
                }),
        ],
    });
}
function J(e) {
    let { currentUser: t } = e,
        n = (0, b.Ay)(t.id),
        s = (0, f.A)(n),
        l = D.jP.useSetting(),
        a = (0, r.bG)([C.A], () => C.A.getErrors()),
        o = a?.avatar?.[0],
        { avatarSrc: d, avatarDecorationSrc: _ } = (0, N.A)({ userId: t?.id, size: c._3J.SIZE_80 }),
        m = (0, S.A)(),
        g = (0, E.fk)();
    return (0, i.jsxs)("div", {
        className: B.DM,
        children: [
            (0, i.jsx)(v.o, {
                user: t,
                displayProfile: n,
                avatarSize: c._3J.SIZE_80,
                avatarOffsetX: 16,
                avatarOffsetY: -22,
                bannerWidth: m ? 696 : 660,
                bannerHeight: 100,
                themePadding: 0,
            }),
            (0, i.jsxs)("div", {
                className: B.eF,
                children: [
                    (0, i.jsx)(H, {
                        className: B.my,
                        src: d,
                        avatarDecoration: _,
                        status: l,
                        size: c._3J.SIZE_80,
                        "aria-label": t.username,
                    }),
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsxs)("div", {
                                className: B.Ib,
                                children: [
                                    (0, i.jsx)(u.A, {
                                        user: t,
                                        className: B.a1,
                                        discriminatorClass: B.D2,
                                        displayNameStylesType: x.G.STATIC,
                                    }),
                                    (0, i.jsx)(Z, { user: t }),
                                ],
                            }),
                            (0, i.jsx)(I.A, { badges: s, className: B.C_, badgeClassName: B.qS }),
                        ],
                    }),
                    (0, i.jsx)(c.Button, {
                        variant: "primary",
                        size: "sm",
                        text: V.intl.string(V.t["2p2aYz"]),
                        onClick: F,
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: B.Tp,
                children: [
                    null != o
                        ? (0, i.jsx)(c.Text, {
                              className: B.mx,
                              variant: "text-xs/normal",
                              color: "text-feedback-critical",
                              children: o,
                          })
                        : null,
                    (0, i.jsxs)("div", {
                        className: B.FL,
                        children: [
                            (0, i.jsx)(z, { className: B.mS, user: t }),
                            (0, i.jsx)(Y, { user: t }),
                            (0, i.jsx)(W, { className: B.Zr, user: t }),
                            (0, i.jsx)(K, { className: B.Zr, user: t }),
                            g && (0, i.jsx)(q, { className: B.Zr }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
