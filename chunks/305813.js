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
    O = n(981631),
    y = n(228168),
    C = n(698282),
    v = n(388032),
    _ = n(454507);
function S(e) {
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
            P(S({}, t), {
                displayNameStyles: {
                    fontId: n,
                    effectId: l,
                    colors: N
                }
            })
        ),
        D = (0, a.ZP)(),
        E = (0, s.wjy)(D),
        [R, I] = (0, o.useState)(E),
        A = (0, g.ZP)(t.id, null),
        { bannerSrc: L } = (0, h.Z)({
            displayProfile: A,
            size: 413,
            canAnimate: !1
        }),
        B = R ? O.BRd.DARK : O.BRd.LIGHT;
    return (
        ((E && R) || (!E && !R)) && (B = D),
        (0, r.jsxs)('div', {
            className: _.previewSection,
            children: [
                (0, r.jsx)(s.xBx, {
                    'data-migration-pending': !0,
                    separator: !1,
                    className: _.sectionHeader,
                    children: (0, r.jsx)(s.olH, {
                        'data-migration-pending': !0,
                        onClick: T,
                        innerClassName: _.closeButton
                    })
                }),
                (0, r.jsx)(s.f6W, {
                    theme: B,
                    children: (e) =>
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                null != L &&
                                    (0, r.jsx)(b.Z, {
                                        user: w,
                                        displayProfile: A,
                                        themeType: y.lY.MODAL_V2,
                                        className: _.backgroundThemeContainer,
                                        forceUserTheme: !0,
                                        children: (0, r.jsx)('div', {
                                            className: _.bannerBackground,
                                            style: { backgroundImage: 'url('.concat(L, ')') }
                                        })
                                    }),
                                (0, r.jsxs)('div', {
                                    className: i()(_.previewCards, e),
                                    inert: !0,
                                    children: [
                                        (0, r.jsx)(m.Z, {
                                            user: w,
                                            canUsePremiumCustomization: !0,
                                            pendingAvatar: void 0,
                                            disabledInputs: !0,
                                            hideCustomStatus: !0,
                                            hideExampleButton: !0,
                                            containerClassName: _.profile,
                                            interactive: !1
                                        }),
                                        (0, r.jsx)(f.Z, {
                                            author: (0, p.ij)(w, null),
                                            message: (0, d.e5)(
                                                P(
                                                    S(
                                                        {},
                                                        (0, u.ZP)({
                                                            channelId: '1337',
                                                            content: v.intl.string(C.default.h5Cuen)
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
                                            className: _.chatMessage
                                        }),
                                        (0, r.jsx)(c.Z, {
                                            user: w,
                                            nameplate: null,
                                            nameplateData: w.nameplate,
                                            className: _.nameplate
                                        })
                                    ]
                                })
                            ]
                        })
                }),
                (0, r.jsxs)('div', {
                    className: _.themeToggleSection,
                    children: [
                        (0, r.jsxs)(s.Text, {
                            variant: 'text-xs/normal',
                            color: 'text-muted',
                            children: [v.intl.string(C.default.Ccxyj4), (0, r.jsx)('br', {}), v.intl.format(C.default.qOUpJC, { helpArticleLink: x.Z.getArticleURL(O.BhN.FORUMS) })]
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
    return (0, r.jsx)(s.sY7, {
        className: _.themeToggleControl,
        optionClassName: _.themeToggleOption,
        options: [
            {
                name: '',
                tooltip: v.intl.string(v.t.b8Cei4),
                value: O.BRd.DARK,
                icon: s.Z6G
            },
            {
                name: '',
                tooltip: v.intl.string(v.t.K2sFfn),
                value: O.BRd.LIGHT,
                icon: s.chG
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
