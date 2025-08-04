(n.d(t, { Z: () => N }), n(388685));
var r = n(255367),
    o = n(73800),
    l = n(120356),
    i = n.n(l),
    s = n(481060),
    a = n(410030),
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
    y = n(981631),
    O = n(228168),
    v = n(698282),
    S = n(388032),
    C = n(454507);
function _(e) {
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
            P(_({}, t), {
                displayNameStyles: {
                    fontId: n,
                    effectId: l,
                    colors: N
                }
            })
        ),
        E = (0, a.ZP)(),
        D = (0, s.wjy)(E),
        [R, I] = (0, o.useState)(D),
        A = (0, g.ZP)(t.id, null),
        { bannerSrc: L } = (0, h.Z)({
            displayProfile: A,
            size: 413,
            canAnimate: !1
        }),
        B = R ? y.BRd.DARK : y.BRd.LIGHT;
    return (
        ((D && R) || (!D && !R)) && (B = E),
        (0, r.jsxs)('div', {
            className: C.previewSection,
            children: [
                (0, r.jsx)(s.xBx, {
                    'data-migration-pending': !0,
                    separator: !1,
                    className: C.sectionHeader,
                    children: (0, r.jsx)(s.olH, {
                        'data-migration-pending': !0,
                        onClick: T,
                        innerClassName: C.closeButton
                    })
                }),
                null != L &&
                    (0, r.jsx)(b.Z, {
                        user: w,
                        displayProfile: A,
                        themeType: O.lY.MODAL_V2,
                        className: C.backgroundThemeContainer,
                        forceUserTheme: !0,
                        children: (0, r.jsx)('div', {
                            className: C.bannerBackground,
                            style: { backgroundImage: 'url('.concat(L, ')') }
                        })
                    }),
                (0, r.jsx)(s.f6W, {
                    theme: B,
                    children: (e) =>
                        (0, r.jsxs)('div', {
                            className: i()(C.previewCards, e),
                            inert: !0,
                            children: [
                                (0, r.jsx)(m.Z, {
                                    user: w,
                                    canUsePremiumCustomization: !0,
                                    pendingAvatar: void 0,
                                    disabledInputs: !0,
                                    hideCustomStatus: !0,
                                    hideExampleButton: !0,
                                    containerClassName: C.profile,
                                    interactive: !1
                                }),
                                (0, r.jsx)(f.Z, {
                                    author: (0, p.ij)(w, null),
                                    message: (0, d.e5)(
                                        P(
                                            _(
                                                {},
                                                (0, u.ZP)({
                                                    channelId: '1337',
                                                    content: S.intl.string(v.default.h5Cuen)
                                                })
                                            ),
                                            {
                                                state: y.yb.SENT,
                                                id: '0'
                                            }
                                        )
                                    ),
                                    isGroupStart: !0,
                                    hideSimpleEmbedContent: !0,
                                    hideGuildTag: !0,
                                    className: C.chatMessage
                                }),
                                (0, r.jsx)(c.Z, {
                                    user: w,
                                    nameplate: null,
                                    nameplateData: w.nameplate,
                                    className: C.nameplate
                                })
                            ]
                        })
                }),
                (0, r.jsxs)('div', {
                    className: C.themeToggleSection,
                    children: [
                        (0, r.jsx)(s.Text, {
                            variant: 'text-xs/normal',
                            color: 'text-muted',
                            children: S.intl.format(v.default.prQba2, { helpArticleLink: x.Z.getArticleURL(y.BhN.DISPLAY_NAME_STYLES) })
                        }),
                        (0, r.jsx)(k, {
                            darkPreview: R,
                            onToggleTheme: (e) => I(e === y.BRd.DARK)
                        })
                    ]
                })
            ]
        })
    );
}
function k(e) {
    let { darkPreview: t, onToggleTheme: n } = e;
    return (0, r.jsx)(s.sY7, {
        className: C.themeToggleControl,
        optionClassName: C.themeToggleOption,
        options: [
            {
                name: '',
                tooltip: S.intl.string(S.t.b8Cei4),
                value: y.BRd.DARK,
                icon: s.Z6G
            },
            {
                name: '',
                tooltip: S.intl.string(S.t.K2sFfn),
                value: y.BRd.LIGHT,
                icon: s.chG
            }
        ],
        value: t ? y.BRd.DARK : y.BRd.LIGHT,
        onChange: (e) => {
            let { value: t } = e;
            return n(t);
        },
        look: 'pill'
    });
}
