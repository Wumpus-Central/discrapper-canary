n.d(t, { Z: () => k }), n(388685);
var r = n(255367),
    o = n(73800),
    l = n(120356),
    a = n.n(l),
    i = n(481060),
    s = n(410030),
    c = n(22267),
    d = n(786761),
    u = n(3148),
    f = n(739566),
    p = n(753206),
    m = n(678135),
    g = n(687158),
    h = n(28660),
    b = n(502762),
    x = n(598077),
    j = n(626135),
    S = n(63063),
    _ = n(981631),
    O = n(228168),
    C = n(698282),
    y = n(388032),
    P = n(454507);
function v(e) {
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
function k(e) {
    let { user: t, selectedFontId: n, selectedEffectId: l, selectedColors: k, onClose: T } = e,
        D = new x.Z(
            E(v({}, t), {
                displayNameStyles: {
                    fontId: n,
                    effectId: l,
                    colors: k,
                },
            }),
        ),
        w = (0, s.ZP)(),
        L = (0, i.wjy)(w),
        [I, A] = (0, o.useState)(L),
        R = (0, g.ZP)(t.id, null),
        { bannerSrc: B } = (0, h.Z)({
            displayProfile: R,
            size: 413,
            canAnimate: !1,
        }),
        M = I ? _.BRd.DARK : _.BRd.LIGHT;
    ((L && I) || (!L && !I)) && (M = w);
    let Z = (0, o.useCallback)(() => {
            j.default.track(_.rMx.DISPLAY_NAME_STYLES_CLOSED), T();
        }, [T]),
        Y = (0, o.useCallback)((e) => {
            A(e === _.BRd.DARK), j.default.track(_.rMx.DISPLAY_NAME_STYLES_THEME_TOGGLE, { dark: e === _.BRd.DARK });
        }, []);
    return (0, r.jsxs)("div", {
        className: P.previewSection,
        children: [
            (0, r.jsx)(i.xBx, {
                "data-migration-pending": !0,
                separator: !1,
                className: P.sectionHeader,
                children: (0, r.jsx)(i.olH, {
                    "data-migration-pending": !0,
                    onClick: Z,
                    innerClassName: P.closeButton,
                }),
            }),
            null != B &&
                (0, r.jsx)(b.Z, {
                    user: D,
                    displayProfile: R,
                    themeType: O.lY.MODAL_V2,
                    className: P.backgroundThemeContainer,
                    forceUserTheme: !0,
                    children: (0, r.jsx)("div", {
                        className: P.bannerBackground,
                        style: { backgroundImage: "url(".concat(B, ")") },
                    }),
                }),
            (0, r.jsx)(i.f6W, {
                theme: M,
                children: (e) =>
                    (0, r.jsxs)("div", {
                        className: a()(P.previewCards, e),
                        inert: !0,
                        children: [
                            (0, r.jsx)(m.Z, {
                                user: D,
                                pendingAvatar: void 0,
                                canUsePremiumCustomization: !0,
                                disabledInputs: !0,
                                hideCustomStatus: !0,
                                hideBioSection: !0,
                                containerClassName: P.profile,
                                interactive: !1,
                                hideViewFullProfileButton: !0,
                            }),
                            (0, r.jsx)(p.Z, {
                                author: (0, f.ij)(D, null),
                                message: (0, d.e5)(
                                    E(
                                        v(
                                            {},
                                            (0, u.ZP)({
                                                channelId: "1337",
                                                content: y.intl.string(C.default.h5Cuen),
                                            }),
                                        ),
                                        {
                                            state: _.yb.SENT,
                                            id: "0",
                                        },
                                    ),
                                ),
                                isGroupStart: !0,
                                hideSimpleEmbedContent: !0,
                                hideGuildTag: !0,
                                className: P.chatMessage,
                            }),
                            (0, r.jsx)(c.Z, {
                                user: D,
                                nameplate: null,
                                nameplateData: D.nameplate,
                                className: P.nameplate,
                            }),
                        ],
                    }),
            }),
            (0, r.jsxs)("div", {
                className: P.themeToggleSection,
                children: [
                    (0, r.jsx)(i.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: y.intl.format(C.default.prQba2, {
                            helpArticleLink: S.Z.getArticleURL(_.BhN.DISPLAY_NAME_STYLES),
                        }),
                    }),
                    (0, r.jsx)(N, {
                        darkPreview: I,
                        onToggleTheme: Y,
                    }),
                ],
            }),
        ],
    });
}
function N(e) {
    let { darkPreview: t, onToggleTheme: n } = e;
    return (0, r.jsx)(i.sY7, {
        className: P.themeToggleControl,
        optionClassName: P.themeToggleOption,
        options: [
            {
                name: "",
                tooltip: y.intl.string(y.t.b8Cei4),
                value: _.BRd.DARK,
                icon: i.Z6G,
            },
            {
                name: "",
                tooltip: y.intl.string(y.t.K2sFfn),
                value: _.BRd.LIGHT,
                icon: i.chG,
            },
        ],
        value: t ? _.BRd.DARK : _.BRd.LIGHT,
        onChange: (e) => {
            let { value: t } = e;
            return n(t);
        },
        look: "pill",
    });
}
