n.d(t, { Z: () => A }), n(388685);
var l = n(54381),
    o = n(473749),
    r = n(120356),
    a = n.n(r),
    i = n(442837),
    s = n(481060),
    c = n(410030),
    d = n(778825),
    u = n(786761),
    f = n(3148),
    p = n(739566),
    m = n(753206),
    g = n(4242),
    h = n(566697),
    b = n(150039),
    x = n(678135),
    S = n(643879),
    j = n(687158),
    C = n(28660),
    v = n(502762),
    P = n(25990),
    N = n(626135),
    O = n(63063),
    k = n(981631),
    T = n(671955),
    y = n(143525),
    _ = n(388032),
    E = n(836832);
function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function A(e) {
    let {
            user: t,
            guild: n,
            displayName: r,
            selectedFontId: A,
            selectedEffectId: L,
            selectedColors: w,
            onClose: B,
        } = e,
        Z = (0, c.ZP)(),
        M = (0, s.wjy)(Z),
        [G, H] = (0, o.useState)(M),
        Y = (0, j.ZP)(t.id, null),
        { bannerSrc: z } = (0, C.Z)({
            displayProfile: Y,
            size: 413,
            canAnimate: !1,
        }),
        F = (0, i.cj)([P.Z, d.Z], () => (null == n ? P.Z.getAllPending() : d.Z.getAllPending())),
        U = (0, S.SD)({
            userId: t.id,
            image: F.pendingAvatar,
        }),
        { userNameplate: q, guildNameplate: K, pendingNameplate: X } = (0, b.Zx)(t, null == n ? void 0 : n.id),
        V = null != K ? (0, g.Pb)(K) : void 0;
    G && !M ? (Z = k.BRd.DARK) : !G && M && (Z = k.BRd.LIGHT);
    let W = (0, o.useCallback)(() => {
            N.default.track(k.rMx.DISPLAY_NAME_STYLES_CLOSED), B();
        }, [B]),
        $ = (0, o.useCallback)((e) => {
            H(e === k.BRd.DARK), N.default.track(k.rMx.DISPLAY_NAME_STYLES_THEME_TOGGLE, { dark: e === k.BRd.DARK });
        }, []),
        J = (0, o.useMemo)(
            () =>
                R(D({}, (0, p.ij)(t, null)), {
                    nick: r,
                    displayNameStyles: {
                        fontId: A,
                        effectId: L,
                        colors: w,
                    },
                }),
            [t, A, L, w, r],
        );
    return (0, l.jsxs)("div", {
        className: E.previewSection,
        children: [
            (0, l.jsx)(s.xBx, {
                "data-migration-pending": !0,
                separator: !1,
                className: E.sectionHeader,
                children: (0, l.jsx)(s.olH, {
                    "data-migration-pending": !0,
                    onClick: W,
                    innerClassName: E.closeButton,
                }),
            }),
            null != z &&
                (0, l.jsx)(v.Z, {
                    user: t,
                    displayProfile: Y,
                    themeType: T.l.MODAL_V2,
                    className: E.backgroundThemeContainer,
                    forceUserTheme: !0,
                    children: (0, l.jsx)("div", {
                        className: E.bannerBackground,
                        style: { backgroundImage: "url(".concat(z, ")") },
                    }),
                }),
            (0, l.jsx)(s.f6W, {
                theme: Z,
                children: (e) =>
                    (0, l.jsxs)("div", {
                        className: a()(E.previewCards, e),
                        inert: !0,
                        children: [
                            (0, l.jsx)(
                                x.Z,
                                R(
                                    D(
                                        {
                                            user: t,
                                            guild: n,
                                        },
                                        F,
                                    ),
                                    {
                                        pendingAvatar: U,
                                        pendingGlobalName: r,
                                        pendingDisplayNameStyles: J.displayNameStyles,
                                        canUsePremiumCustomization: !0,
                                        disabledInputs: !0,
                                        hideCustomStatus: !0,
                                        hideBioSection: !0,
                                        containerClassName: E.profile,
                                        interactive: !1,
                                        hideExampleButton: !0,
                                    },
                                ),
                            ),
                            (0, l.jsx)(m.Z, {
                                author: J,
                                message: (0, u.e5)(
                                    R(
                                        D(
                                            {},
                                            (0, f.ZP)({
                                                channelId: "1337",
                                                content: _.intl.string(y.default.h5Cuej),
                                            }),
                                        ),
                                        {
                                            state: k.yb.SENT,
                                            id: "0",
                                        },
                                    ),
                                ),
                                isGroupStart: !0,
                                hideSimpleEmbedContent: !0,
                                hideGuildTag: !0,
                                className: E.chatMessage,
                                previewGuildId: null == n ? void 0 : n.id,
                            }),
                            (0, l.jsx)(h.Z, {
                                user: t,
                                guildId: null == n ? void 0 : n.id,
                                nameplate: X,
                                nameplateData: null == X ? (null != V ? V : q) : void 0,
                                pendingGlobalName: r,
                                pendingDisplayNameStyles: J.displayNameStyles,
                                isHighlighted: !0,
                                className: E.nameplate,
                            }),
                        ],
                    }),
            }),
            (0, l.jsxs)("div", {
                className: E.themeToggleSection,
                children: [
                    (0, l.jsx)(s.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: _.intl.format(y.default.prQba8, {
                            helpArticleLink: O.Z.getArticleURL(k.BhN.DISPLAY_NAME_STYLES),
                        }),
                    }),
                    (0, l.jsx)(I, {
                        darkPreview: G,
                        onToggleTheme: $,
                    }),
                ],
            }),
        ],
    });
}
function I(e) {
    let { darkPreview: t, onToggleTheme: n } = e,
        o = t ? k.BRd.DARK : k.BRd.LIGHT;
    return (0, l.jsx)(s.sY7, {
        className: E.themeToggleControl,
        optionClassName: E.themeToggleOption,
        options: [
            {
                name: "",
                tooltip: _.intl.string(_.t.b8Cei3),
                value: k.BRd.DARK,
                icon: s.Z6G,
                className: o === k.BRd.DARK ? E.themeToggleOptionSelected : void 0,
            },
            {
                name: "",
                tooltip: _.intl.string(_.t.K2sFfo),
                value: k.BRd.LIGHT,
                icon: s.chG,
                className: o === k.BRd.LIGHT ? E.themeToggleOptionSelected : void 0,
            },
        ],
        value: o,
        onChange: (e) => {
            let { value: t } = e;
            return n(t);
        },
        look: "pill",
    });
}
