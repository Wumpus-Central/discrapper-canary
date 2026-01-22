l.d(t, {
    A: () => P,
}),
    l(896048);
var n = l(627968),
    a = l(64700),
    s = l(503698),
    r = l.n(s),
    i = l(311907),
    o = l(397927),
    c = l(736653),
    d = l(833336),
    u = l(141468),
    f = l(963852),
    m = l(763754),
    b = l(20851),
    p = l(369496),
    x = l(550111),
    g = l(919395),
    j = l(287070),
    h = l(101058),
    v = l(950191),
    N = l(686189),
    A = l(946356),
    y = l(752319),
    _ = l(954571),
    S = l(975571),
    O = l(652215),
    C = l(996988),
    E = l(927961),
    T = l(985018),
    w = l(635249);

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

function I(e, t) {
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

function P(e) {
    let {
            user: t,
            guild: l,
            displayName: s,
            selectedFontId: P,
            selectedEffectId: k,
            selectedColors: R,
            onClose: G,
        } = e,
        z = (0, c.Ay)(),
        M = (0, o.Mwr)(z),
        [U, H] = (0, a.useState)(M),
        Y = (0, v.Ay)(t.id, null),
        { bannerSrc: J } = (0, N.A)({
            displayProfile: Y,
            size: 413,
            canAnimate: !1,
        }),
        F = (0, i.cf)([y.A, d.A], () => (null == l ? y.A.getAllPending() : d.A.getAllPending())),
        B = (0, h.V7)({
            userId: t.id,
            image: F.pendingAvatar,
        }),
        { userNameplate: V, guildNameplate: K, pendingNameplate: q } = (0, g.rv)(t, null == l ? void 0 : l.id),
        X = null != K ? (0, p.WK)(K) : void 0;
    U && !M ? (z = O.NJ8.DARK) : !U && M && (z = O.NJ8.LIGHT);
    let Q = (0, a.useCallback)(() => {
            _.default.track(O.HAw.DISPLAY_NAME_STYLES_CLOSED), G();
        }, [G]),
        Z = (0, a.useCallback)((e) => {
            H(e === O.NJ8.DARK),
                _.default.track(O.HAw.DISPLAY_NAME_STYLES_THEME_TOGGLE, {
                    dark: e === O.NJ8.DARK,
                });
        }, []),
        W = (0, a.useMemo)(
            () =>
                I(D({}, (0, m.FT)(t, null)), {
                    nick: s,
                    displayNameStyles: {
                        fontId: P,
                        effectId: k,
                        colors: R,
                    },
                }),
            [t, P, k, R, s],
        );
    return (0, n.jsxs)("div", {
        className: w._l,
        children: [
            (0, n.jsx)(o.rQ0, {
                "data-migration-pending": !0,
                separator: !1,
                className: w.bV,
                children: (0, n.jsx)(o.s_y, {
                    "data-migration-pending": !0,
                    onClick: Q,
                    innerClassName: w.b,
                }),
            }),
            null != J &&
                (0, n.jsx)(A.A, {
                    user: t,
                    displayProfile: Y,
                    themeType: C.d.MODAL_V2,
                    className: w.LX,
                    forceUserTheme: !0,
                    children: (0, n.jsx)("div", {
                        className: w.b8,
                        style: {
                            backgroundImage: "url(".concat(J, ")"),
                        },
                    }),
                }),
            (0, n.jsx)(o.NPJ, {
                theme: z,
                children: (e) =>
                    (0, n.jsxs)("div", {
                        className: r()(w.cq, e),
                        inert: !0,
                        children: [
                            (0, n.jsx)(
                                j.A,
                                I(
                                    D(
                                        {
                                            user: t,
                                            guild: l,
                                        },
                                        F,
                                    ),
                                    {
                                        pendingAvatar: B,
                                        pendingGlobalName: s,
                                        pendingDisplayNameStyles: W.displayNameStyles,
                                        canUsePremiumCustomization: !0,
                                        disabledInputs: !0,
                                        hideCustomStatus: !0,
                                        hideBioSection: !0,
                                        containerClassName: w.ME,
                                        interactive: !1,
                                        hideExampleButton: !0,
                                    },
                                ),
                            ),
                            (0, n.jsx)(b.A, {
                                author: W,
                                message: (0, u.rh)(
                                    I(
                                        D(
                                            {},
                                            (0, f.Ay)({
                                                channelId: "1337",
                                                content: T.intl.string(E.default.h5Cuej),
                                            }),
                                        ),
                                        {
                                            state: O.cmJ.SENT,
                                            id: "0",
                                        },
                                    ),
                                ),
                                isGroupStart: !0,
                                hideSimpleEmbedContent: !0,
                                hideGuildTag: !0,
                                className: w.OT,
                                previewGuildId: null == l ? void 0 : l.id,
                            }),
                            (0, n.jsx)(x.A, {
                                user: t,
                                guildId: null == l ? void 0 : l.id,
                                nameplate: q,
                                nameplateData: null == q ? (null != X ? X : V) : void 0,
                                pendingGlobalName: s,
                                pendingDisplayNameStyles: W.displayNameStyles,
                                isHighlighted: !0,
                                className: w.qF,
                            }),
                        ],
                    }),
            }),
            (0, n.jsxs)("div", {
                className: w.dI,
                children: [
                    (0, n.jsx)(o.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: T.intl.format(E.default.prQba8, {
                            helpArticleLink: S.A.getArticleURL(O.MVz.DISPLAY_NAME_STYLES),
                        }),
                    }),
                    (0, n.jsx)(L, {
                        darkPreview: U,
                        onToggleTheme: Z,
                    }),
                ],
            }),
        ],
    });
}

function L(e) {
    let { darkPreview: t, onToggleTheme: l } = e,
        a = t ? O.NJ8.DARK : O.NJ8.LIGHT;
    return (0, n.jsx)(o.IzF, {
        className: w.xr,
        optionClassName: w.$C,
        options: [
            {
                name: "",
                tooltip: T.intl.string(T.t.b8Cei3),
                value: O.NJ8.DARK,
                icon: o.Zve,
                className: a === O.NJ8.DARK ? w.iB : void 0,
            },
            {
                name: "",
                tooltip: T.intl.string(T.t.K2sFfo),
                value: O.NJ8.LIGHT,
                icon: o.FVN,
                className: a === O.NJ8.LIGHT ? w.iB : void 0,
            },
        ],
        value: a,
        onChange: (e) => {
            let { value: t } = e;
            return l(t);
        },
        look: "pill",
    });
}
