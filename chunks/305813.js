n.d(t, { Z: () => T }), n(388685);
var r = n(951288),
    o = n(647438),
    l = n(120356),
    a = n.n(l),
    i = n(442837),
    s = n(481060),
    c = n(410030),
    d = n(22267),
    u = n(786761),
    p = n(3148),
    m = n(739566),
    f = n(753206),
    g = n(678135),
    h = n(643879),
    b = n(687158),
    x = n(28660),
    j = n(502762),
    _ = n(25990),
    S = n(626135),
    C = n(63063),
    O = n(981631),
    v = n(671955),
    y = n(693450),
    P = n(388032),
    k = n(270816);
function N(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function T(e) {
    let { user: t, displayName: n, selectedFontId: l, selectedEffectId: T, selectedColors: R, onClose: L } = e,
        w = (0, c.ZP)(),
        A = (0, s.wjy)(w),
        [I, B] = (0, o.useState)(A),
        M = (0, b.ZP)(t.id, null),
        { bannerSrc: Z } = (0, x.Z)({
            displayProfile: M,
            size: 413,
            canAnimate: !1,
        }),
        G = (0, i.cj)([_.Z], () => _.Z.getAllPending()),
        Y = (0, h.SD)({
            userId: t.id,
            image: G.pendingAvatar,
        }),
        H = I ? O.BRd.DARK : O.BRd.LIGHT;
    ((A && I) || (!A && !I)) && (H = w);
    let z = (0, o.useCallback)(() => {
            S.default.track(O.rMx.DISPLAY_NAME_STYLES_CLOSED), L();
        }, [L]),
        F = (0, o.useCallback)((e) => {
            B(e === O.BRd.DARK), S.default.track(O.rMx.DISPLAY_NAME_STYLES_THEME_TOGGLE, { dark: e === O.BRd.DARK });
        }, []),
        U = (0, o.useMemo)(
            () =>
                E(N({}, (0, m.ij)(t, null)), {
                    nick: n,
                    displayNameStyles: {
                        fontId: l,
                        effectId: T,
                        colors: R,
                    },
                }),
            [t, l, T, R, n],
        );
    return (0, r.jsxs)("div", {
        className: k.previewSection,
        children: [
            (0, r.jsx)(s.xBx, {
                "data-migration-pending": !0,
                separator: !1,
                className: k.sectionHeader,
                children: (0, r.jsx)(s.olH, {
                    "data-migration-pending": !0,
                    onClick: z,
                    innerClassName: k.closeButton,
                }),
            }),
            null != Z &&
                (0, r.jsx)(j.Z, {
                    user: t,
                    displayProfile: M,
                    themeType: v.l.MODAL_V2,
                    className: k.backgroundThemeContainer,
                    forceUserTheme: !0,
                    children: (0, r.jsx)("div", {
                        className: k.bannerBackground,
                        style: { backgroundImage: "url(".concat(Z, ")") },
                    }),
                }),
            (0, r.jsx)(s.f6W, {
                theme: H,
                children: (e) =>
                    (0, r.jsxs)("div", {
                        className: a()(k.previewCards, e),
                        inert: !0,
                        children: [
                            (0, r.jsx)(
                                g.Z,
                                E(N({ user: t }, G), {
                                    pendingAvatar: Y,
                                    pendingGlobalName: n,
                                    pendingDisplayNameStyles: U.displayNameStyles,
                                    canUsePremiumCustomization: !0,
                                    disabledInputs: !0,
                                    hideCustomStatus: !0,
                                    hideBioSection: !0,
                                    containerClassName: k.profile,
                                    interactive: !1,
                                    hideExampleButton: !0,
                                }),
                            ),
                            (0, r.jsx)(f.Z, {
                                author: U,
                                message: (0, u.e5)(
                                    E(
                                        N(
                                            {},
                                            (0, p.ZP)({
                                                channelId: "1337",
                                                content: P.intl.string(y.default.h5Cuen),
                                            }),
                                        ),
                                        {
                                            state: O.yb.SENT,
                                            id: "0",
                                        },
                                    ),
                                ),
                                isGroupStart: !0,
                                hideSimpleEmbedContent: !0,
                                hideGuildTag: !0,
                                className: k.chatMessage,
                            }),
                            (0, r.jsx)(d.Z, {
                                user: t,
                                nameplate: G.pendingNameplate,
                                nameplateData: void 0 === G.pendingNameplate ? t.nameplate : void 0,
                                pendingGlobalName: n,
                                pendingDisplayNameStyles: U.displayNameStyles,
                                isHighlighted: !0,
                                className: k.nameplate,
                            }),
                        ],
                    }),
            }),
            (0, r.jsxs)("div", {
                className: k.themeToggleSection,
                children: [
                    (0, r.jsx)(s.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: P.intl.format(y.default.prQba2, {
                            helpArticleLink: C.Z.getArticleURL(O.BhN.DISPLAY_NAME_STYLES),
                        }),
                    }),
                    (0, r.jsx)(D, {
                        darkPreview: I,
                        onToggleTheme: F,
                    }),
                ],
            }),
        ],
    });
}
function D(e) {
    let { darkPreview: t, onToggleTheme: n } = e,
        o = t ? O.BRd.DARK : O.BRd.LIGHT;
    return (0, r.jsx)(s.sY7, {
        className: k.themeToggleControl,
        optionClassName: k.themeToggleOption,
        options: [
            {
                name: "",
                tooltip: P.intl.string(P.t.b8Cei4),
                value: O.BRd.DARK,
                icon: s.Z6G,
                className: o === O.BRd.DARK ? k.themeToggleOptionSelected : void 0,
            },
            {
                name: "",
                tooltip: P.intl.string(P.t.K2sFfn),
                value: O.BRd.LIGHT,
                icon: s.chG,
                className: o === O.BRd.LIGHT ? k.themeToggleOptionSelected : void 0,
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
