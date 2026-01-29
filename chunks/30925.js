l.d(t, {
    A: () => I,
}),
    l(896048);
var n = l(627968),
    r = l(64700),
    s = l(503698),
    a = l.n(s),
    o = l(311907),
    i = l(397927),
    c = l(736653),
    d = l(833336),
    u = l(141468),
    m = l(963852),
    p = l(763754),
    f = l(20851),
    g = l(369496),
    _ = l(550111),
    x = l(919395),
    b = l(287070),
    h = l(101058),
    j = l(836602),
    v = l(950191),
    N = l(686189),
    A = l(946356),
    C = l(954571),
    S = l(975571),
    y = l(652215),
    O = l(996988),
    E = l(927961),
    T = l(985018),
    P = l(635249);

function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var l = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(l);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(l).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(l, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = l[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}

function w(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var l = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      l.push.apply(l, n);
                  }
                  return l;
              })(Object(t)).forEach(function (l) {
                  Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(t, l));
              }),
        e
    );
}

function I(e) {
    let {
            user: t,
            guild: l,
            displayName: s,
            selectedFontId: I,
            selectedEffectId: k,
            selectedColors: R,
            onClose: G,
        } = e,
        z = (0, c.Ay)(),
        M = (0, i.Mwr)(z),
        [H, U] = (0, r.useState)(M),
        Y = (0, v.Ay)(t.id, null),
        { bannerSrc: B } = (0, N.A)({
            displayProfile: Y,
            size: 413,
            canAnimate: !1,
        }),
        J = (0, o.cf)([j.A, d.A], () => (null == l ? j.A.getPendingChanges() : d.A.getAllPending())),
        F = (0, h.V7)({
            userId: t.id,
            image: J.pendingAvatar,
        }),
        { userNameplate: V, guildNameplate: K, pendingNameplate: q } = (0, x.rv)(t, null == l ? void 0 : l.id),
        X = null != K ? (0, g.WK)(K) : void 0;
    H && !M ? (z = y.NJ8.DARK) : !H && M && (z = y.NJ8.LIGHT);
    let Q = (0, r.useCallback)(() => {
            C.default.track(y.HAw.DISPLAY_NAME_STYLES_CLOSED), G();
        }, [G]),
        Z = (0, r.useCallback)((e) => {
            U(e === y.NJ8.DARK),
                C.default.track(y.HAw.DISPLAY_NAME_STYLES_THEME_TOGGLE, {
                    dark: e === y.NJ8.DARK,
                });
        }, []),
        W = (0, r.useMemo)(
            () =>
                w(D({}, (0, p.FT)(t, null)), {
                    nick: s,
                    displayNameStyles: {
                        fontId: I,
                        effectId: k,
                        colors: R,
                    },
                }),
            [t, I, k, R, s],
        );
    return (0, n.jsxs)("div", {
        className: P._l,
        children: [
            (0, n.jsx)(i.rQ0, {
                "data-migration-pending": !0,
                separator: !1,
                className: P.bV,
                children: (0, n.jsx)(i.s_y, {
                    "data-migration-pending": !0,
                    onClick: Q,
                    innerClassName: P.b,
                }),
            }),
            null != B &&
                (0, n.jsx)(A.A, {
                    user: t,
                    displayProfile: Y,
                    themeType: O.d.MODAL_V2,
                    className: P.LX,
                    forceUserTheme: !0,
                    children: (0, n.jsx)("div", {
                        className: P.b8,
                        style: {
                            backgroundImage: "url(".concat(B, ")"),
                        },
                    }),
                }),
            (0, n.jsx)(i.NPJ, {
                theme: z,
                children: (e) =>
                    (0, n.jsxs)("div", {
                        className: a()(P.cq, e),
                        inert: !0,
                        children: [
                            (0, n.jsx)(
                                b.A,
                                w(
                                    D(
                                        {
                                            user: t,
                                            guild: l,
                                        },
                                        J,
                                    ),
                                    {
                                        pendingAvatar: F,
                                        pendingGlobalName: s,
                                        pendingDisplayNameStyles: W.displayNameStyles,
                                        canUsePremiumCustomization: !0,
                                        disabledInputs: !0,
                                        hideCustomStatus: !0,
                                        hideBioSection: !0,
                                        containerClassName: P.ME,
                                        interactive: !1,
                                        hideExampleButton: !0,
                                    },
                                ),
                            ),
                            (0, n.jsx)(f.A, {
                                author: W,
                                message: (0, u.rh)(
                                    w(
                                        D(
                                            {},
                                            (0, m.Ay)({
                                                channelId: "1337",
                                                content: T.intl.string(E.default.h5Cuej),
                                            }),
                                        ),
                                        {
                                            state: y.cmJ.SENT,
                                            id: "0",
                                        },
                                    ),
                                ),
                                isGroupStart: !0,
                                hideSimpleEmbedContent: !0,
                                hideGuildTag: !0,
                                className: P.OT,
                                previewGuildId: null == l ? void 0 : l.id,
                            }),
                            (0, n.jsx)(_.A, {
                                user: t,
                                guildId: null == l ? void 0 : l.id,
                                nameplate: q,
                                nameplateData: null == q ? (null != X ? X : V) : void 0,
                                pendingGlobalName: s,
                                pendingDisplayNameStyles: W.displayNameStyles,
                                isHighlighted: !0,
                                className: P.qF,
                            }),
                        ],
                    }),
            }),
            (0, n.jsxs)("div", {
                className: P.dI,
                children: [
                    (0, n.jsx)(i.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: T.intl.format(E.default.prQba8, {
                            helpArticleLink: S.A.getArticleURL(y.MVz.DISPLAY_NAME_STYLES),
                        }),
                    }),
                    (0, n.jsx)(L, {
                        darkPreview: H,
                        onToggleTheme: Z,
                    }),
                ],
            }),
        ],
    });
}

function L(e) {
    let { darkPreview: t, onToggleTheme: l } = e,
        r = t ? y.NJ8.DARK : y.NJ8.LIGHT;
    return (0, n.jsx)(i.IzF, {
        className: P.xr,
        optionClassName: P.$C,
        options: [
            {
                name: "",
                tooltip: T.intl.string(T.t.b8Cei3),
                value: y.NJ8.DARK,
                icon: i.Zve,
                className: r === y.NJ8.DARK ? P.iB : void 0,
            },
            {
                name: "",
                tooltip: T.intl.string(T.t.K2sFfo),
                value: y.NJ8.LIGHT,
                icon: i.FVN,
                className: r === y.NJ8.LIGHT ? P.iB : void 0,
            },
        ],
        value: r,
        onChange: (e) => {
            let { value: t } = e;
            return l(t);
        },
        look: "pill",
    });
}
