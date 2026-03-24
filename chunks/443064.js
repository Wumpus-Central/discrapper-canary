n.d(t, { A: () => q });
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
    E = n(262),
    b = n(950191),
    C = n(854627),
    v = n(542535),
    N = n(915614),
    I = n(662758),
    j = n(957565),
    y = n(975571),
    O = n(427262),
    R = n(837921),
    L = n(253932),
    P = n(780964),
    D = n(192501),
    G = n(840065),
    M = n(652215),
    U = n(53516),
    k = n(985018),
    w = n(536242),
    V = n(609290);
let B = R.Ay.getEnableHardwareAcceleration() ? c.JsQ : c.euF;
function F() {
    (0, G.openUserSettings)(P.X.PROFILE_PANEL);
}
function H(e) {
    let { className: t, user: l } = e,
        r = s.useRef(null),
        u = (0, p.EC)(),
        m = u?.nick?.[0] ?? null,
        [_, g] = s.useState(!1);
    s.useEffect(() => {
        g(null != r.current && r.current.scrollWidth > r.current.clientWidth);
    }, [l.username]);
    let x = !l.isClaimed(),
        A = x ? k.intl.string(k.t["7Ngnyr"]) : void 0;
    return (0, i.jsxs)("div", {
        className: a()(V.ZZ, t),
        children: [
            (0, i.jsx)("div", {
                className: V.NQ,
                children: (0, i.jsxs)("div", {
                    className: V.Fj,
                    children: [
                        (0, i.jsx)(c.Text, {
                            variant: "text-md/medium",
                            className: V.p9,
                            children: k.intl.string(k.t.qqhR3L),
                        }),
                        (0, i.jsxs)("div", {
                            className: V.HR,
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
                    className: V.a$,
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
                    className: V.pr,
                    children: (0, i.jsx)(c.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: _ ? k.intl.string(k.t["16kTw/"]) : k.intl.string(k.t.bt75uw),
                        disabled: x,
                        "aria-label": k.intl.string(k.t.JECa91),
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
        m = s.useRef(null),
        [_, g] = s.useState(!1);
    return (
        s.useEffect(() => {
            g(null != m.current && m.current.scrollWidth > m.current.clientWidth);
        }, [u]),
        (0, i.jsxs)("div", {
            className: a()(V.ZZ, n),
            children: [
                (0, i.jsx)("div", {
                    className: V.NQ,
                    children: (0, i.jsxs)("div", {
                        className: V.Fj,
                        children: [
                            (0, i.jsx)(c.Text, {
                                variant: "text-md/medium",
                                className: V.p9,
                                children: k.intl.string(k.t["9AjdkD"]),
                            }),
                            (0, i.jsx)("div", {
                                className: V.HR,
                                ref: m,
                                children: (0, i.jsx)(c.Text, {
                                    tag: "span",
                                    color: "text-strong",
                                    variant: "text-md/normal",
                                    children: null == u ? k.intl.string(k.t.ep5kjK) : u,
                                }),
                            }),
                        ],
                    }),
                }),
                null != r &&
                    (0, i.jsx)("div", {
                        className: V.a$,
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
                    className: V.pr,
                    children: (0, i.jsx)(c.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: _ ? k.intl.string(k.t["16kTw/"]) : k.intl.string(k.t.bt75uw),
                        "aria-label": k.intl.string(k.t.YXeWYM),
                        onClick: F,
                    }),
                }),
            ],
        })
    );
}
function Y(e) {
    let { text: t, censor: n, revealLabel: l, hideLabel: a } = e,
        [r, o] = s.useState(!1),
        d = r ? t : n(t);
    return (0, i.jsxs)("div", {
        className: V.c1,
        children: [
            d,
            (0, i.jsx)(c.QWc, {
                variant: "primary",
                textVariant: "text-sm/medium",
                "aria-label": r ? a : l,
                onClick: () => o(!r),
                text: r ? k.intl.string(k.t.fgq1gs) : k.intl.string(k.t.dcztdU),
            }),
        ],
    });
}
function X(e) {
    let t,
        { className: s, user: l } = e;
    if (l.isClaimed())
        if (null == l.email)
            t = {
                buttonText: k.intl.string(k.t.OYkgVk),
                buttonAriaLabel: k.intl.string(k.t["pvBD+W"]),
                valueMessage: k.intl.string(k.t["8SfTN/"]),
                handleClick: () =>
                    (0, c.mMO)(async () => {
                        let { default: e } = await Promise.all([n.e("89129"), n.e("75283")]).then(n.bind(n, 354096));
                        return (t) => (0, i.jsx)(e, { ...t });
                    }),
            };
        else {
            let { email: e } = l;
            t = {
                buttonText: k.intl.string(k.t.bt75uw),
                buttonAriaLabel: k.intl.string(k.t["8peUT0"]),
                valueMessage: (0, i.jsx)(Y, {
                    text: e,
                    censor: D.B,
                    revealLabel: k.intl.string(k.t["Zvx+yV"]),
                    hideLabel: k.intl.string(k.t.nqTD4d),
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
            buttonText: k.intl.string(k.t.BleMPB),
            buttonAriaLabel: k.intl.string(k.t.BleMPB),
            valueMessage: k.intl.string(k.t.qxk9zo),
            handleClick: () => x.A.openClaimAccountModal(),
        };
    return (0, i.jsxs)("div", {
        className: a()(V.ZZ, s),
        children: [
            (0, i.jsx)("div", {
                className: V.NQ,
                children: (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)(c.Text, {
                            variant: "text-md/medium",
                            className: V.p9,
                            children: k.intl.string(k.t.tlZllC),
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
                className: V.pr,
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
            ? (0, i.jsx)(Y, {
                  text: r,
                  censor: D.D,
                  revealLabel: k.intl.string(k.t.eY3xlT),
                  hideLabel: k.intl.string(k.t["jllbv+"]),
              })
            : k.intl.string(k.t.I5kDqj)),
        (0, i.jsxs)("div", {
            className: a()(V.ZZ, s),
            children: [
                (0, i.jsx)("div", {
                    className: V.NQ,
                    children: (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(c.Text, {
                                variant: "text-md/medium",
                                className: V.p9,
                                children: k.intl.string(k.t.kerONq),
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
                    className: V.PU,
                    children: [
                        d && null != o
                            ? (0, i.jsx)("div", {
                                  className: a()(V.pr, V.DT),
                                  children: (0, i.jsx)(c.QWc, {
                                      textVariant: "text-sm/medium",
                                      variant: "secondary",
                                      text: k.intl.string(k.t.N86XcP),
                                      "aria-label": k.intl.string(k.t.Rpn4A3),
                                      onClick: function () {
                                          (0, c.qfG)((e) =>
                                              (0, i.jsx)(I.default, {
                                                  ...e,
                                                  title: k.intl.string(k.t["3CTiKi"]),
                                                  children: l.hasFlag(M.nhx.MFA_SMS)
                                                      ? k.intl.string(k.t.jrhJyo)
                                                      : void 0,
                                                  actionText: k.intl.string(k.t.N86XcP),
                                                  handleSubmit: (e) => f.A.removePhone(e, f.d.USER_SETTINGS_UPDATE),
                                              }),
                                          );
                                      },
                                  }),
                              })
                            : null,
                        (0, i.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: V.pr,
                            children: (0, i.jsx)(c.Button, {
                                variant: "secondary",
                                size: "sm",
                                text: d ? k.intl.string(k.t.bt75uw) : k.intl.string(k.t.OYkgVk),
                                "aria-label": d ? k.intl.string(k.t.YDabSe) : k.intl.string(k.t["SfUuE+"]),
                                onClick: function () {
                                    (0, c.mMO)(
                                        async () => {
                                            let { default: e } = await Promise.resolve().then(n.bind(n, 615715));
                                            return (t) => (0, i.jsx)(e, { reason: f.d.USER_SETTINGS_UPDATE, ...t });
                                        },
                                        { modalKey: U.V },
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
function W(e) {
    let { user: t } = e,
        n = (0, A.A)({ id: t.id, label: k.intl.string(k.t["/AXYnE"]) }),
        l = L.Q_.useSetting(),
        a = s.useRef(null);
    return l && j.p5
        ? (0, i.jsx)(c.YNO, {
              targetElementRef: a,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, i.jsx)(c.W1t, {
                      "data-menu-migrated": !0,
                      onClose: t,
                      onSelect: void 0,
                      navId: "copy-id",
                      "aria-label": k.intl.string(k.t.RANhlE),
                      children: n,
                  });
              },
              children: (e) =>
                  (0, i.jsx)(c.DUT, {
                      ...e,
                      innerRef: a,
                      className: V.SI,
                      "aria-label": k.intl.string(k.t.DEoVWZ),
                      children: (0, i.jsx)(c.jNK, { size: "md", color: "currentColor", className: V.D$ }),
                  }),
          })
        : null;
}
function Z(e) {
    let { className: t } = e,
        l = (0, g.b8)(),
        r = (0, g.yM)(),
        o = (0, g.Y2)(),
        d = !l || r,
        u = k.intl.string(k.t["9KiIz6"]),
        x = k.intl.string(k.t.DVywUB),
        A = k.intl.string(k.t.lKDPGA),
        h = s.useCallback(() => {
            window.open(y.A.getArticleURL(M.MVz.TIGGER_PAWTECT_LEARN_MORE), "_blank");
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
                        ? k.intl.string(k.t.sK0dmH)
                        : o
                          ? k.intl.format(w.default.WM5adV, { handleOnHelpUrlHook: h })
                          : k.intl.string(k.t.XxRj7f)
                    : A,
            [l, r, o, A, h],
        ),
        T = l && !r && o;
    return (0, i.jsxs)("div", {
        className: a()(V.ZZ, t),
        children: [
            (0, i.jsx)("div", {
                className: V.NQ,
                children: (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)(c.Text, {
                            variant: "text-md/medium",
                            className: V.p9,
                            children: k.intl.string(k.t["/52UYy"]),
                        }),
                        (0, i.jsx)("div", {
                            children: (0, i.jsxs)(c.Text, {
                                tag: "span",
                                color: "text-strong",
                                variant: "text-md/normal",
                                children: [o && l && !r ? `${k.intl.string(k.t.XxRj7f)} • ` : null, f],
                            }),
                        }),
                    ],
                }),
            }),
            T &&
                (0, i.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: V.pr,
                    children: (0, i.jsx)(c.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: k.intl.string(k.t.bt75uw),
                        "aria-label": k.intl.string(k.t.bt75uw),
                        onClick: p,
                    }),
                }),
            d &&
                !T &&
                (0, i.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: V.pr,
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
function q(e) {
    let { currentUser: t } = e,
        n = (0, b.Ay)(t.id),
        s = (0, E.A)(n),
        l = L.jP.useSetting(),
        a = (0, r.bG)([S.A], () => S.A.getErrors()),
        o = a?.avatar?.[0],
        { avatarSrc: d, avatarDecorationSrc: m } = (0, C.A)({ userId: t?.id, size: c._3J.SIZE_80 }),
        _ = (0, T.fk)();
    return (0, i.jsxs)("div", {
        className: V.DM,
        children: [
            (0, i.jsx)(N.o, {
                user: t,
                displayProfile: n,
                avatarSize: c._3J.SIZE_80,
                avatarOffsetX: 16,
                avatarOffsetY: -22,
                bannerWidth: 696,
                bannerHeight: 100,
                themePadding: 0,
            }),
            (0, i.jsxs)("div", {
                className: V.eF,
                children: [
                    (0, i.jsx)(B, {
                        className: V.my,
                        src: d,
                        avatarDecoration: m,
                        status: l,
                        size: c._3J.SIZE_80,
                        "aria-label": t.username,
                    }),
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsxs)("div", {
                                className: V.Ib,
                                children: [
                                    (0, i.jsx)(u.A, {
                                        user: t,
                                        className: V.a1,
                                        discriminatorClass: V.D2,
                                        displayNameStylesType: h.G.STATIC,
                                    }),
                                    (0, i.jsx)(W, { user: t }),
                                ],
                            }),
                            (0, i.jsx)(v.A, { badges: s, className: V.C_, badgeClassName: V.qS }),
                        ],
                    }),
                    (0, i.jsx)(c.Button, {
                        variant: "primary",
                        size: "sm",
                        text: k.intl.string(k.t["2p2aYz"]),
                        onClick: F,
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: V.Tp,
                children: [
                    null != o
                        ? (0, i.jsx)(c.Text, {
                              className: V.mx,
                              variant: "text-xs/normal",
                              color: "text-feedback-critical",
                              children: o,
                          })
                        : null,
                    (0, i.jsxs)("div", {
                        className: V.FL,
                        children: [
                            (0, i.jsx)(z, { className: V.mS, user: t }),
                            (0, i.jsx)(H, { user: t }),
                            (0, i.jsx)(X, { className: V.Zr, user: t }),
                            (0, i.jsx)(K, { className: V.Zr, user: t }),
                            _ && (0, i.jsx)(Z, { className: V.Zr }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
