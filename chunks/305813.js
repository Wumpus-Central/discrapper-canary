n.d(t, { Z: () => E }), n(388685);
var o = n(951288),
    l = n(647438),
    r = n(120356),
    a = n.n(r),
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
    x = n(687158),
    _ = n(28660),
    b = n(502762),
    S = n(25990),
    j = n(626135),
    C = n(63063),
    v = n(981631),
    P = n(671955),
    N = n(693450),
    k = n(388032),
    y = n(270816);
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            o = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            o.forEach(function (t) {
                var o;
                (o = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: o,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = o);
            });
    }
    return e;
}
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var o = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, o);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e) {
    let { user: t, displayName: n, selectedFontId: r, selectedEffectId: E, selectedColors: R, onClose: L } = e,
        A = (0, c.ZP)(),
        I = (0, s.wjy)(A),
        [w, B] = (0, l.useState)(I),
        M = (0, x.ZP)(t.id, null),
        { bannerSrc: Z } = (0, _.Z)({
            displayProfile: M,
            size: 413,
            canAnimate: !1,
        }),
        G = (0, i.cj)([S.Z], () => S.Z.getAllPending()),
        Y = (0, h.SD)({
            userId: t.id,
            image: G.pendingAvatar,
        }),
        H = w ? v.BRd.DARK : v.BRd.LIGHT;
    ((I && w) || (!I && !w)) && (H = A);
    let z = (0, l.useCallback)(() => {
            j.default.track(v.rMx.DISPLAY_NAME_STYLES_CLOSED), L();
        }, [L]),
        F = (0, l.useCallback)((e) => {
            B(e === v.BRd.DARK), j.default.track(v.rMx.DISPLAY_NAME_STYLES_THEME_TOGGLE, { dark: e === v.BRd.DARK });
        }, []),
        U = (0, l.useMemo)(
            () =>
                T(O({}, (0, m.ij)(t, null)), {
                    nick: n,
                    displayNameStyles: {
                        fontId: r,
                        effectId: E,
                        colors: R,
                    },
                }),
            [t, r, E, R, n],
        );
    return (0, o.jsxs)("div", {
        className: y.previewSection,
        children: [
            (0, o.jsx)(s.xBx, {
                "data-migration-pending": !0,
                separator: !1,
                className: y.sectionHeader,
                children: (0, o.jsx)(s.olH, {
                    "data-migration-pending": !0,
                    onClick: z,
                    innerClassName: y.closeButton,
                }),
            }),
            null != Z &&
                (0, o.jsx)(b.Z, {
                    user: t,
                    displayProfile: M,
                    themeType: P.l.MODAL_V2,
                    className: y.backgroundThemeContainer,
                    forceUserTheme: !0,
                    children: (0, o.jsx)("div", {
                        className: y.bannerBackground,
                        style: { backgroundImage: "url(".concat(Z, ")") },
                    }),
                }),
            (0, o.jsx)(s.f6W, {
                theme: H,
                children: (e) =>
                    (0, o.jsxs)("div", {
                        className: a()(y.previewCards, e),
                        inert: !0,
                        children: [
                            (0, o.jsx)(
                                g.Z,
                                T(O({ user: t }, G), {
                                    pendingAvatar: Y,
                                    pendingGlobalName: n,
                                    pendingDisplayNameStyles: U.displayNameStyles,
                                    canUsePremiumCustomization: !0,
                                    disabledInputs: !0,
                                    hideCustomStatus: !0,
                                    hideBioSection: !0,
                                    containerClassName: y.profile,
                                    interactive: !1,
                                    hideExampleButton: !0,
                                }),
                            ),
                            (0, o.jsx)(f.Z, {
                                author: U,
                                message: (0, u.e5)(
                                    T(
                                        O(
                                            {},
                                            (0, p.ZP)({
                                                channelId: "1337",
                                                content: k.intl.string(N.default.h5Cuen),
                                            }),
                                        ),
                                        {
                                            state: v.yb.SENT,
                                            id: "0",
                                        },
                                    ),
                                ),
                                isGroupStart: !0,
                                hideSimpleEmbedContent: !0,
                                hideGuildTag: !0,
                                className: y.chatMessage,
                            }),
                            (0, o.jsx)(d.Z, {
                                user: t,
                                nameplate: G.pendingNameplate,
                                nameplateData: void 0 === G.pendingNameplate ? t.nameplate : void 0,
                                pendingGlobalName: n,
                                pendingDisplayNameStyles: U.displayNameStyles,
                                isHighlighted: !0,
                                className: y.nameplate,
                            }),
                        ],
                    }),
            }),
            (0, o.jsxs)("div", {
                className: y.themeToggleSection,
                children: [
                    (0, o.jsx)(s.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: k.intl.format(N.default.prQba2, {
                            helpArticleLink: C.Z.getArticleURL(v.BhN.DISPLAY_NAME_STYLES),
                        }),
                    }),
                    (0, o.jsx)(D, {
                        darkPreview: w,
                        onToggleTheme: F,
                    }),
                ],
            }),
        ],
    });
}
function D(e) {
    let { darkPreview: t, onToggleTheme: n } = e,
        l = t ? v.BRd.DARK : v.BRd.LIGHT;
    return (0, o.jsx)(s.sY7, {
        className: y.themeToggleControl,
        optionClassName: y.themeToggleOption,
        options: [
            {
                name: "",
                tooltip: k.intl.string(k.t.b8Cei4),
                value: v.BRd.DARK,
                icon: s.Z6G,
                className: l === v.BRd.DARK ? y.themeToggleOptionSelected : void 0,
            },
            {
                name: "",
                tooltip: k.intl.string(k.t.K2sFfn),
                value: v.BRd.LIGHT,
                icon: s.chG,
                className: l === v.BRd.LIGHT ? y.themeToggleOptionSelected : void 0,
            },
        ],
        value: l,
        onChange: (e) => {
            let { value: t } = e;
            return n(t);
        },
        look: "pill",
    });
}
