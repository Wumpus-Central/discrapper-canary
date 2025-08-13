n.d(t, { Z: () => E }), n(388685);
var r = n(255367),
    o = n(73800),
    l = n(120356),
    i = n.n(l),
    a = n(481060),
    s = n(410030),
    c = n(22267),
    d = n(786761),
    u = n(3148),
    p = n(739566),
    f = n(753206),
    m = n(678135),
    g = n(687158),
    h = n(28660),
    b = n(502762),
    x = n(598077),
    j = n(626135),
    _ = n(63063),
    S = n(981631),
    C = n(228168),
    O = n(698282),
    y = n(388032),
    P = n(53426);
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
function k(e, t) {
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
function E(e) {
    let { user: t, selectedFontId: n, selectedEffectId: l, selectedColors: E, onClose: N } = e,
        D = new x.Z(
            k(v({}, t), {
                displayNameStyles: {
                    fontId: n,
                    effectId: l,
                    colors: E,
                },
            }),
        ),
        w = (0, s.ZP)(),
        R = (0, a.wjy)(w),
        [A, I] = (0, o.useState)(R),
        L = (0, g.ZP)(t.id, null),
        { bannerSrc: B } = (0, h.Z)({
            displayProfile: L,
            size: 413,
            canAnimate: !1,
        }),
        M = A ? S.BRd.DARK : S.BRd.LIGHT;
    ((R && A) || (!R && !A)) && (M = w);
    let Z = (0, o.useCallback)(() => {
            j.default.track(S.rMx.DISPLAY_NAME_STYLES_CLOSED), N();
        }, [N]),
        G = (0, o.useCallback)((e) => {
            I(e === S.BRd.DARK), j.default.track(S.rMx.DISPLAY_NAME_STYLES_THEME_TOGGLE, { dark: e === S.BRd.DARK });
        }, []);
    return (0, r.jsxs)("div", {
        className: P.previewSection,
        children: [
            (0, r.jsx)(a.xBx, {
                "data-migration-pending": !0,
                separator: !1,
                className: P.sectionHeader,
                children: (0, r.jsx)(a.olH, {
                    "data-migration-pending": !0,
                    onClick: Z,
                    innerClassName: P.closeButton,
                }),
            }),
            null != B &&
                (0, r.jsx)(b.Z, {
                    user: D,
                    displayProfile: L,
                    themeType: C.lY.MODAL_V2,
                    className: P.backgroundThemeContainer,
                    forceUserTheme: !0,
                    children: (0, r.jsx)("div", {
                        className: P.bannerBackground,
                        style: { backgroundImage: "url(".concat(B, ")") },
                    }),
                }),
            (0, r.jsx)(a.f6W, {
                theme: M,
                children: (e) =>
                    (0, r.jsxs)("div", {
                        className: i()(P.previewCards, e),
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
                            (0, r.jsx)(f.Z, {
                                author: (0, p.ij)(D, null),
                                message: (0, d.e5)(
                                    k(
                                        v(
                                            {},
                                            (0, u.ZP)({
                                                channelId: "1337",
                                                content: y.intl.string(O.default.h5Cuen),
                                            }),
                                        ),
                                        {
                                            state: S.yb.SENT,
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
                    (0, r.jsx)(a.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: y.intl.format(O.default.prQba2, {
                            helpArticleLink: _.Z.getArticleURL(S.BhN.DISPLAY_NAME_STYLES),
                        }),
                    }),
                    (0, r.jsx)(T, {
                        darkPreview: A,
                        onToggleTheme: G,
                    }),
                ],
            }),
        ],
    });
}
function T(e) {
    let { darkPreview: t, onToggleTheme: n } = e,
        o = t ? S.BRd.DARK : S.BRd.LIGHT;
    return (0, r.jsx)(a.sY7, {
        className: P.themeToggleControl,
        optionClassName: P.themeToggleOption,
        options: [
            {
                name: "",
                tooltip: y.intl.string(y.t.b8Cei4),
                value: S.BRd.DARK,
                icon: a.Z6G,
                className: o === S.BRd.DARK ? P.themeToggleOptionSelected : void 0,
            },
            {
                name: "",
                tooltip: y.intl.string(y.t.K2sFfn),
                value: S.BRd.LIGHT,
                icon: a.chG,
                className: o === S.BRd.LIGHT ? P.themeToggleOptionSelected : void 0,
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
