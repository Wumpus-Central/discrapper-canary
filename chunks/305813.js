(n.d(t, { Z: () => N }), n(388685));
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
    j = n(598077),
    x = n(63063),
    O = n(981631),
    y = n(228168),
    C = n(698282),
    _ = n(388032),
    S = n(454507);
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function P(e, t) {
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
function N(e) {
    let { user: t, selectedFontId: n, selectedEffectId: l, selectedColors: N, onClose: T } = e,
        w = new j.Z(
            P(v({}, t), {
                displayNameStyles: {
                    fontId: n,
                    effectId: l,
                    colors: N
                }
            })
        ),
        E = (0, s.ZP)(),
        D = (0, a.wjy)(E),
        [R, I] = (0, o.useState)(D),
        A = (0, g.ZP)(t.id, null),
        { bannerSrc: L } = (0, h.Z)({
            displayProfile: A,
            size: 413,
            canAnimate: !1
        }),
        B = R ? O.BRd.DARK : O.BRd.LIGHT;
    return (
        ((D && R) || (!D && !R)) && (B = E),
        (0, r.jsxs)('div', {
            className: S.previewSection,
            children: [
                (0, r.jsx)(a.xBx, {
                    'data-migration-pending': !0,
                    separator: !1,
                    className: S.sectionHeader,
                    children: (0, r.jsx)(a.olH, {
                        'data-migration-pending': !0,
                        onClick: T,
                        innerClassName: S.closeButton
                    })
                }),
                null != L &&
                    (0, r.jsx)(b.Z, {
                        user: w,
                        displayProfile: A,
                        themeType: y.lY.MODAL_V2,
                        className: S.backgroundThemeContainer,
                        forceUserTheme: !0,
                        children: (0, r.jsx)('div', {
                            className: S.bannerBackground,
                            style: { backgroundImage: 'url('.concat(L, ')') }
                        })
                    }),
                (0, r.jsx)(a.f6W, {
                    theme: B,
                    children: (e) =>
                        (0, r.jsxs)('div', {
                            className: i()(S.previewCards, e),
                            inert: !0,
                            children: [
                                (0, r.jsx)(m.Z, {
                                    user: w,
                                    canUsePremiumCustomization: !0,
                                    pendingAvatar: void 0,
                                    disabledInputs: !0,
                                    hideCustomStatus: !0,
                                    hideExampleButton: !0,
                                    containerClassName: S.profile,
                                    interactive: !1
                                }),
                                (0, r.jsx)(f.Z, {
                                    author: (0, p.ij)(w, null),
                                    message: (0, d.e5)(
                                        P(
                                            v(
                                                {},
                                                (0, u.ZP)({
                                                    channelId: '1337',
                                                    content: _.intl.string(C.default.h5Cuen)
                                                })
                                            ),
                                            {
                                                state: O.yb.SENT,
                                                id: '0'
                                            }
                                        )
                                    ),
                                    isGroupStart: !0,
                                    hideSimpleEmbedContent: !0,
                                    hideGuildTag: !0,
                                    className: S.chatMessage
                                }),
                                (0, r.jsx)(c.Z, {
                                    user: w,
                                    nameplate: null,
                                    nameplateData: w.nameplate,
                                    className: S.nameplate
                                })
                            ]
                        })
                }),
                (0, r.jsxs)('div', {
                    className: S.themeToggleSection,
                    children: [
                        (0, r.jsx)(a.Text, {
                            variant: 'text-xs/normal',
                            color: 'text-muted',
                            children: _.intl.format(C.default.prQba2, { helpArticleLink: x.Z.getArticleURL(O.BhN.DISPLAY_NAME_STYLES) })
                        }),
                        (0, r.jsx)(k, {
                            darkPreview: R,
                            onToggleTheme: (e) => I(e === O.BRd.DARK)
                        })
                    ]
                })
            ]
        })
    );
}
function k(e) {
    let { darkPreview: t, onToggleTheme: n } = e;
    return (0, r.jsx)(a.sY7, {
        className: S.themeToggleControl,
        optionClassName: S.themeToggleOption,
        options: [
            {
                name: '',
                tooltip: _.intl.string(_.t.b8Cei4),
                value: O.BRd.DARK,
                icon: a.Z6G
            },
            {
                name: '',
                tooltip: _.intl.string(_.t.K2sFfn),
                value: O.BRd.LIGHT,
                icon: a.chG
            }
        ],
        value: t ? O.BRd.DARK : O.BRd.LIGHT,
        onChange: (e) => {
            let { value: t } = e;
            return n(t);
        },
        look: 'pill'
    });
}
