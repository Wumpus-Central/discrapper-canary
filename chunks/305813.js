(n.d(t, { Z: () => N }), n(388685));
var o = n(255367),
    r = n(73800),
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
    C = n(698282),
    S = n(388032),
    v = n(454507);
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            o = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            o.forEach(function (t) {
                var o;
                ((o = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: o,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = o));
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
        [R, I] = (0, r.useState)(D),
        A = (0, g.ZP)(t.id, null),
        { bannerSrc: L } = (0, h.Z)({
            displayProfile: A,
            size: 413,
            canAnimate: !1
        }),
        B = R ? y.BRd.DARK : y.BRd.LIGHT;
    return (
        ((D && R) || (!D && !R)) && (B = E),
        (0, o.jsxs)('div', {
            className: v.previewSection,
            children: [
                (0, o.jsx)(s.xBx, {
                    'data-migration-pending': !0,
                    separator: !1,
                    className: v.sectionHeader,
                    children: (0, o.jsx)(s.olH, {
                        'data-migration-pending': !0,
                        onClick: T,
                        innerClassName: v.closeButton
                    })
                }),
                null != L &&
                    (0, o.jsx)(b.Z, {
                        user: w,
                        displayProfile: A,
                        themeType: O.lY.MODAL_V2,
                        className: v.backgroundThemeContainer,
                        forceUserTheme: !0,
                        children: (0, o.jsx)('div', {
                            className: v.bannerBackground,
                            style: { backgroundImage: 'url('.concat(L, ')') }
                        })
                    }),
                (0, o.jsx)(s.f6W, {
                    theme: B,
                    children: (e) =>
                        (0, o.jsxs)('div', {
                            className: i()(v.previewCards, e),
                            inert: !0,
                            children: [
                                (0, o.jsx)(m.Z, {
                                    user: w,
                                    canUsePremiumCustomization: !0,
                                    pendingAvatar: void 0,
                                    disabledInputs: !0,
                                    hideCustomStatus: !0,
                                    hideExampleButton: !0,
                                    containerClassName: v.profile,
                                    interactive: !1
                                }),
                                (0, o.jsx)(f.Z, {
                                    author: (0, p.ij)(w, null),
                                    message: (0, d.e5)(
                                        P(
                                            _(
                                                {},
                                                (0, u.ZP)({
                                                    channelId: '1337',
                                                    content: S.intl.string(C.default.h5Cuen)
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
                                    className: v.chatMessage
                                }),
                                (0, o.jsx)(c.Z, {
                                    user: w,
                                    nameplate: null,
                                    nameplateData: w.nameplate,
                                    className: v.nameplate
                                })
                            ]
                        })
                }),
                (0, o.jsxs)('div', {
                    className: v.themeToggleSection,
                    children: [
                        (0, o.jsx)(s.Text, {
                            variant: 'text-xs/normal',
                            color: 'text-muted',
                            children: S.intl.format(C.default.prQba2, { helpArticleLink: x.Z.getArticleURL(y.BhN.DISPLAY_NAME_STYLES) })
                        }),
                        (0, o.jsx)(k, {
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
    return (0, o.jsx)(s.sY7, {
        className: v.themeToggleControl,
        optionClassName: v.themeToggleOption,
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
