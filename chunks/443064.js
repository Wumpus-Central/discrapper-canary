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
    g = n(847599),
    _ = n(36149),
    x = n(521933),
    A = n(50268),
    h = n(922301),
    p = n(81400),
    T = n(557722),
    f = n(207560),
    S = n(836602),
    E = n(591179),
    b = n(262),
    C = n(950191),
    N = n(854627),
    v = n(657331),
    I = n(542535),
    j = n(915614),
    y = n(662758),
    O = n(957565),
    R = n(975571),
    P = n(427262),
    L = n(837921),
    D = n(253932),
    G = n(780964),
    M = n(858897),
    k = n(980429),
    U = n(982363),
    w = n(652215),
    V = n(53516),
    B = n(985018),
    F = n(536242),
    H = n(856647);
let z = L.Ay.getEnableHardwareAcceleration() ? c.JsQ : c.euF;
function Y(e) {
    let t = (0, E.X)("UserSettingsAccountProfileCard");
    return s.useCallback(() => {
        t ? (0, v.openUserProfileModal)({ userId: e }) : (0, M.openUserSettings)(G.X.PROFILE_PANEL);
    }, [t, e]);
}
function X(e) {
    let { className: t, user: l } = e,
        r = s.useRef(null),
        u = (0, p.EC)(),
        m = u?.nick?.[0] ?? null,
        [g, _] = s.useState(!1);
    s.useEffect(() => {
        _(null != r.current && r.current.scrollWidth > r.current.clientWidth);
    }, [l.username]);
    let x = !l.isClaimed(),
        A = x ? B.intl.string(B.t["7Ngnyr"]) : void 0;
    return (0, i.jsxs)("div", {
        className: a()(H.ZZ, t),
        children: [
            (0, i.jsx)("div", {
                className: H.NQ,
                children: (0, i.jsxs)("div", {
                    className: H.Fj,
                    children: [
                        (0, i.jsx)(c.Text, {
                            variant: "text-md/medium",
                            className: H.p9,
                            children: B.intl.string(B.t.qqhR3L),
                        }),
                        (0, i.jsxs)("div", {
                            className: H.HR,
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
                    className: H.a$,
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
                    className: H.pr,
                    children: (0, i.jsx)(c.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: g ? B.intl.string(B.t["16kTw/"]) : B.intl.string(B.t.bt75uw),
                        disabled: x,
                        "aria-label": B.intl.string(B.t.JECa91),
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
function K(e) {
    let { user: t, className: n } = e,
        l = Y(t.id),
        r = (0, p.EC)(),
        u = r?.nick?.[0] ?? null,
        m = P.Ay.getGlobalName(t),
        g = s.useRef(null),
        [_, x] = s.useState(!1);
    return (
        s.useEffect(() => {
            x(null != g.current && g.current.scrollWidth > g.current.clientWidth);
        }, [m]),
        (0, i.jsxs)("div", {
            className: a()(H.ZZ, n),
            children: [
                (0, i.jsx)("div", {
                    className: H.NQ,
                    children: (0, i.jsxs)("div", {
                        className: H.Fj,
                        children: [
                            (0, i.jsx)(c.Text, {
                                variant: "text-md/medium",
                                className: H.p9,
                                children: B.intl.string(B.t["9AjdkD"]),
                            }),
                            (0, i.jsx)("div", {
                                className: H.HR,
                                ref: g,
                                children: (0, i.jsx)(c.Text, {
                                    tag: "span",
                                    color: "text-strong",
                                    variant: "text-md/normal",
                                    children: null == m ? B.intl.string(B.t.ep5kjK) : m,
                                }),
                            }),
                        ],
                    }),
                }),
                null != u &&
                    (0, i.jsx)("div", {
                        className: H.a$,
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
                    className: H.pr,
                    children: (0, i.jsx)(c.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: _ ? B.intl.string(B.t["16kTw/"]) : B.intl.string(B.t.bt75uw),
                        "aria-label": B.intl.string(B.t.YXeWYM),
                        onClick: l,
                    }),
                }),
            ],
        })
    );
}
function W(e) {
    let t,
        { className: s, user: l } = e;
    if (l.isClaimed())
        if (null == l.email)
            t = {
                buttonText: B.intl.string(B.t.OYkgVk),
                buttonAriaLabel: B.intl.string(B.t["pvBD+W"]),
                valueMessage: B.intl.string(B.t["8SfTN/"]),
                handleClick: () =>
                    (0, c.mMO)(async () => {
                        let { default: e } = await Promise.all([n.e("89129"), n.e("6130")]).then(n.bind(n, 354096));
                        return (t) => (0, i.jsx)(e, { ...t });
                    }),
            };
        else {
            let { email: e } = l;
            t = {
                buttonText: B.intl.string(B.t.bt75uw),
                buttonAriaLabel: B.intl.string(B.t["8peUT0"]),
                valueMessage: (0, i.jsx)(U.q, {
                    text: e,
                    censor: k.B,
                    revealLabel: B.intl.string(B.t["Zvx+yV"]),
                    hideLabel: B.intl.string(B.t.nqTD4d),
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
            buttonText: B.intl.string(B.t.BleMPB),
            buttonAriaLabel: B.intl.string(B.t.BleMPB),
            valueMessage: B.intl.string(B.t.qxk9zo),
            handleClick: () => x.A.openClaimAccountModal(),
        };
    return (0, i.jsxs)("div", {
        className: a()(H.ZZ, s),
        children: [
            (0, i.jsx)("div", {
                className: H.NQ,
                children: (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)(c.Text, {
                            variant: "text-md/medium",
                            className: H.p9,
                            children: B.intl.string(B.t.tlZllC),
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
                className: H.pr,
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
            ? (0, i.jsx)(U.q, {
                  text: r,
                  censor: k.D,
                  revealLabel: B.intl.string(B.t.eY3xlT),
                  hideLabel: B.intl.string(B.t["jllbv+"]),
              })
            : B.intl.string(B.t.I5kDqj)),
        (0, i.jsxs)("div", {
            className: a()(H.ZZ, s),
            children: [
                (0, i.jsx)("div", {
                    className: H.NQ,
                    children: (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(c.Text, {
                                variant: "text-md/medium",
                                className: H.p9,
                                children: B.intl.string(B.t.kerONq),
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
                    className: H.PU,
                    children: [
                        d && null != o
                            ? (0, i.jsx)("div", {
                                  className: a()(H.pr, H.DT),
                                  children: (0, i.jsx)(c.QWc, {
                                      textVariant: "text-sm/medium",
                                      variant: "secondary",
                                      text: B.intl.string(B.t.N86XcP),
                                      "aria-label": B.intl.string(B.t.Rpn4A3),
                                      onClick: function () {
                                          (0, c.qfG)((e) =>
                                              (0, i.jsx)(y.default, {
                                                  ...e,
                                                  title: B.intl.string(B.t["3CTiKi"]),
                                                  children: l.hasFlag(w.nhx.MFA_SMS)
                                                      ? B.intl.string(B.t.jrhJyo)
                                                      : void 0,
                                                  actionText: B.intl.string(B.t.N86XcP),
                                                  handleSubmit: (e) => T.A.removePhone(e, T.d.USER_SETTINGS_UPDATE),
                                              }),
                                          );
                                      },
                                  }),
                              })
                            : null,
                        (0, i.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: H.pr,
                            children: (0, i.jsx)(c.Button, {
                                variant: "secondary",
                                size: "sm",
                                text: d ? B.intl.string(B.t.bt75uw) : B.intl.string(B.t.OYkgVk),
                                "aria-label": d ? B.intl.string(B.t.YDabSe) : B.intl.string(B.t["SfUuE+"]),
                                onClick: function () {
                                    (0, c.mMO)(
                                        async () => {
                                            let { default: e } = await Promise.resolve().then(n.bind(n, 615715));
                                            return (t) => (0, i.jsx)(e, { reason: T.d.USER_SETTINGS_UPDATE, ...t });
                                        },
                                        { modalKey: V.V },
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
        n = (0, A.A)({ id: t.id, label: B.intl.string(B.t["/AXYnE"]) }),
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
                      "aria-label": B.intl.string(B.t.RANhlE),
                      children: n,
                  });
              },
              children: (e) =>
                  (0, i.jsx)(c.DUT, {
                      ...e,
                      innerRef: a,
                      className: H.SI,
                      "aria-label": B.intl.string(B.t.DEoVWZ),
                      children: (0, i.jsx)(c.jNK, { size: "md", color: "currentColor", className: H.D$ }),
                  }),
          })
        : null;
}
function Q(e) {
    let { className: t } = e,
        l = (0, _.b8)(),
        r = (0, _.yM)(),
        o = (0, _.Y2)(),
        d = !l || r,
        u = B.intl.string(B.t["9KiIz6"]),
        x = B.intl.string(B.t.DVywUB),
        A = B.intl.string(B.t.lKDPGA),
        h = s.useCallback(() => {
            window.open(R.A.getArticleURL(w.MVz.TIGGER_PAWTECT_LEARN_MORE), "_blank");
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
                        ? B.intl.string(B.t.sK0dmH)
                        : o
                          ? B.intl.format(F.default.WM5adV, { handleOnHelpUrlHook: h })
                          : B.intl.string(B.t.XxRj7f)
                    : A,
            [l, r, o, A, h],
        ),
        f = l && !r && o;
    return (0, i.jsxs)("div", {
        className: a()(H.ZZ, t),
        children: [
            (0, i.jsx)("div", {
                className: H.NQ,
                children: (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)(c.Text, {
                            variant: "text-md/medium",
                            className: H.p9,
                            children: B.intl.string(B.t["/52UYy"]),
                        }),
                        (0, i.jsx)("div", {
                            children: (0, i.jsxs)(c.Text, {
                                tag: "span",
                                color: "text-strong",
                                variant: "text-md/normal",
                                children: [o && l && !r ? `${B.intl.string(B.t.XxRj7f)} • ` : null, T],
                            }),
                        }),
                    ],
                }),
            }),
            f &&
                (0, i.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: H.pr,
                    children: (0, i.jsx)(c.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: B.intl.string(B.t.bt75uw),
                        "aria-label": B.intl.string(B.t.bt75uw),
                        onClick: p,
                    }),
                }),
            d &&
                !f &&
                (0, i.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: H.pr,
                    children: (0, i.jsx)(c.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: r ? u : x,
                        "aria-label": r ? u : x,
                        onClick: () => m.A.showAgeVerificationGetStartedModal({ entryPoint: g.q1.ACCOUNT_AGE_GROUP }),
                    }),
                }),
        ],
    });
}
function J(e) {
    let { currentUser: t } = e,
        n = Y(t.id),
        s = (0, C.Ay)(t.id),
        l = (0, b.A)(s),
        a = D.jP.useSetting(),
        o = (0, r.bG)([S.A], () => S.A.getErrors()),
        d = o?.avatar?.[0],
        { avatarSrc: m, avatarDecorationSrc: g } = (0, N.A)({ userId: t?.id, size: c._3J.SIZE_80 }),
        _ = (0, f.fk)();
    return (0, i.jsxs)("div", {
        className: H.DM,
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
                className: H.eF,
                children: [
                    (0, i.jsx)(z, {
                        className: H.my,
                        src: m,
                        avatarDecoration: g,
                        status: a,
                        size: c._3J.SIZE_80,
                        "aria-label": t.username,
                    }),
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsxs)("div", {
                                className: H.Ib,
                                children: [
                                    (0, i.jsx)(u.A, {
                                        user: t,
                                        className: H.a1,
                                        discriminatorClass: H.D2,
                                        displayNameStylesType: h.G.STATIC,
                                    }),
                                    (0, i.jsx)(q, { user: t }),
                                ],
                            }),
                            (0, i.jsx)(I.A, { badges: l, className: H.C_, badgeClassName: H.qS }),
                        ],
                    }),
                    (0, i.jsx)(c.Button, {
                        variant: "primary",
                        size: "sm",
                        text: B.intl.string(B.t["2p2aYz"]),
                        onClick: n,
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: H.Tp,
                children: [
                    null != d
                        ? (0, i.jsx)(c.Text, {
                              className: H.mx,
                              variant: "text-xs/normal",
                              color: "text-feedback-critical",
                              children: d,
                          })
                        : null,
                    (0, i.jsxs)("div", {
                        className: H.FL,
                        children: [
                            (0, i.jsx)(K, { className: H.mS, user: t }),
                            (0, i.jsx)(X, { user: t }),
                            (0, i.jsx)(W, { className: H.Zr, user: t }),
                            (0, i.jsx)(Z, { className: H.Zr, user: t }),
                            _ && (0, i.jsx)(Q, { className: H.Zr }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
