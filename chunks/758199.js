(n.d(t, {
    W: () => j,
    u: () => v
}),
    n(190126),
    n(368063),
    n(65234),
    n(111804),
    n(490233),
    n(97749),
    n(388685));
var r,
    i = n(255367),
    l = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    c = n(755721),
    u = n(481060),
    d = n(434650),
    p = n(607070),
    m = n(206295),
    f = n(70097),
    _ = n(314897),
    g = n(572004),
    h = n(914498),
    b = n(217702),
    E = n(388032),
    y = n(383195);
function C() {
    return (C =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
function x(e) {
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
var v = (((r = {})[(r.BOT = 0)] = 'BOT'), (r[(r.ACTIVITY = 1)] = 'ACTIVITY'), r);
function O(e) {
    let { onClick: t, children: n, className: r } = e;
    return null != t
        ? (0, i.jsx)(u.P3F, {
              onClick: t,
              className: r,
              children: n
          })
        : (0, i.jsx)('div', {
              className: r,
              children: n
          });
}
function j(e) {
    var t, n, r, a;
    let { title: v, header: j, footer: I, info: S, staticBannerSrc: T, videoBannerSrc: N, bannerAspectRatio: P = 0, iconSrc: A, embedUrl: w, infoUrl: Z, actions: R = [], trackingConfig: L, onClickContent: D } = e;
    L = {
        id: null != (n = null == (t = L) ? void 0 : t.id) ? n : '0',
        linkType: null != (r = null == t ? void 0 : t.linkType) ? r : h.Un.UNKNOWN,
        referrerId: null != (a = null == t ? void 0 : t.referrerId) ? a : _.default.getId(),
        activityCustomId: null == t ? void 0 : t.activityCustomId,
        onView: null == t ? void 0 : t.onView,
        onLinkCopied: null == t ? void 0 : t.onLinkCopied
    };
    let { primaryColor: M, secondaryColor: k } = (0, m.Z)(null != A ? A : T),
        U = 'linear-gradient(45deg, '.concat(M, ', ').concat(k, ')'),
        F = (0, s.e7)([p.Z], () => p.Z.useReducedMotion),
        B = l.useRef(!1),
        G = (0, d.O)(
            (e) => {
                if (!1 === B.current && e) {
                    var t;
                    (null == L || null == (t = L.onView) || t.call(L), (0, h.GF)(L.id, L.linkType, L.referrerId, L.activityCustomId), (B.current = !0));
                }
            },
            void 0
        ),
        H =
            g.wS && null != w
                ? (0, i.jsx)(c.zx, {
                      look: c.zx.Looks.BLANK,
                      size: c.zx.Sizes.ICON,
                      'aria-label': E.intl.string(E.t.WqhZsr),
                      className: y.linkIcon,
                      onClick: () => {
                          ((0, g.JG)(w, () => (0, u.showToast)((0, u.createToast)(E.intl.string(E.t['L/PwZW']), u.ToastType.SUCCESS))), (0, h.Yu)(L.id, L.linkType));
                      },
                      children: (0, i.jsx)(u.xPt, {
                          size: 'xs',
                          color: 'currentColor'
                      })
                  })
                : null,
        V =
            null != Z
                ? (0, i.jsx)(u.eee, {
                      'aria-label': E.intl.string(E.t.wuRE8P),
                      className: y.linkIcon,
                      href: Z,
                      children: (0, i.jsx)(u.d3s, {
                          size: 'xs',
                          color: u.TVs.colors.APP_MESSAGE_EMBED_SECONDARY_TEXT.css
                      })
                  })
                : null,
        z = null != T,
        W = null != N && !1 === F,
        K = z || W,
        Y = 0 === P ? y.bannerAspectRatioBot : y.bannerAspectRatioActivity,
        X = l.useRef(null),
        q = l.useCallback(() => {
            let e = X.current;
            null != e && ('hidden' === getComputedStyle(e).visibility ? e.pause() : e.play());
        }, []),
        Q = l.useMemo(() => !!W && new URL(N).pathname.endsWith('.gif'), [W, N]),
        J = l.useMemo(() => {
            if (null != D)
                return (e) => {
                    (D(e), (0, h.KX)(L.id, L.linkType, h.j_.CONTENT, L.referrerId, L.activityCustomId));
                };
        }, [D, L]);
    return (0, i.jsxs)('div', {
        ref: G,
        className: o()(y.embed, { [y.showVideoOnFocus]: W }),
        children: [
            K &&
                (0, i.jsxs)('div', {
                    className: o()(y.bannerWrapper, Y),
                    children: [
                        W &&
                            (Q
                                ? (0, i.jsx)('div', {
                                      className: y.videoBanner,
                                      style: { backgroundImage: 'url('.concat(N, ')') }
                                  })
                                : (0, i.jsx)(f.Z, {
                                      ref: X,
                                      src: N,
                                      mediaLayoutType: b.hV.MOSAIC,
                                      loop: !0,
                                      muted: !0,
                                      className: y.videoBanner
                                  })),
                        z &&
                            (0, i.jsx)('div', {
                                className: y.staticBanner,
                                style: { backgroundImage: 'url('.concat(T, ')') },
                                onTransitionEnd: q
                            })
                    ]
                }),
            (0, i.jsxs)('div', {
                style: { background: U },
                children: [
                    (0, i.jsxs)('div', {
                        className: y.contentContainer,
                        children: [
                            null != j &&
                                (0, i.jsxs)('div', {
                                    className: y.header,
                                    children: [
                                        (0, i.jsx)(u.Text, {
                                            variant: 'text-sm/semibold',
                                            color: 'none',
                                            children: j
                                        }),
                                        null != H ? H : V
                                    ]
                                }),
                            (0, i.jsxs)('div', {
                                className: y.contentAndCopyButtonWrapper,
                                children: [
                                    (0, i.jsxs)(O, {
                                        onClick: J,
                                        className: o()(y.contentWrapper, { [y.contentWrapperClickable]: null != J }),
                                        children: [
                                            null != A &&
                                                (0, i.jsx)('div', {
                                                    className: y.img,
                                                    style: { backgroundImage: 'url('.concat(A, ')') }
                                                }),
                                            (0, i.jsxs)('div', {
                                                className: y.content,
                                                children: [
                                                    (0, i.jsx)(u.Text, {
                                                        variant: 'text-md/semibold',
                                                        color: 'none',
                                                        lineClamp: 1,
                                                        className: y.contentTitle,
                                                        children: v
                                                    }),
                                                    (0, i.jsx)('div', {
                                                        className: y.contentInfoWrapper,
                                                        children: S
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    null == j && (null != H ? H : V)
                                ]
                            }),
                            R.length > 0 &&
                                (0, i.jsx)('div', {
                                    className: y.actionWrapper,
                                    children: R.map((e, t) => {
                                        let { label: n, icon: r, onClick: l, disabledReason: a, submitting: o, trackingArea: s } = e,
                                            d = null != a,
                                            p = 0 === t,
                                            m =
                                                null != r
                                                    ? (0, i.jsxs)(i.Fragment, {
                                                          children: [r, (0, i.jsx)('span', { children: n })]
                                                      })
                                                    : n,
                                            f = {
                                                color: p ? c.zx.Colors.WHITE : c.zx.Colors.TRANSPARENT,
                                                className: p ? y.primaryButton : y.alwaysWhiteText,
                                                disabled: d,
                                                submitting: o,
                                                children: m,
                                                onClick(e) {
                                                    (l(e), (0, h.KX)(L.id, L.linkType, s, L.referrerId, L.activityCustomId));
                                                }
                                            };
                                        return d
                                            ? (0, i.jsx)(
                                                  u.ua7,
                                                  {
                                                      text: a,
                                                      children: (e) => {
                                                          var t = C(
                                                              {},
                                                              (function (e) {
                                                                  if (null == e) throw TypeError('Cannot destructure ' + e);
                                                                  return e;
                                                              })(e)
                                                          );
                                                          return (0, i.jsx)(c.zx, x({}, f, t));
                                                      }
                                                  },
                                                  n
                                              )
                                            : (0, i.jsx)(c.zx, x({}, f), n);
                                    })
                                })
                        ]
                    }),
                    null != I && I
                ]
            })
        ]
    });
}
