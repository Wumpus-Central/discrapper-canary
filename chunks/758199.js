(n.d(t, {
    W: () => j,
    u: () => O
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
    g = n(314897),
    _ = n(572004),
    h = n(914498),
    b = n(217702),
    E = n(388032),
    C = n(383195);
function x() {
    return (x =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
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
var O = (((r = {})[(r.BOT = 0)] = 'BOT'), (r[(r.ACTIVITY = 1)] = 'ACTIVITY'), r);
function y(e) {
    let { onClick: t, children: n, className: r } = e;
    return null != t
        ? (0, i.jsx)(u.P3F, {
              onClick: t,
              className: o()({ [C.cursorPointer]: null != t }, r),
              children: n
          })
        : (0, i.jsx)('div', {
              className: r,
              children: n
          });
}
function j(e) {
    var t, n, r, a;
    let { title: O, header: j, footer: I, info: S, staticBannerSrc: T, videoBannerSrc: N, bannerAspectRatio: P = 0, iconSrc: A, embedUrl: w, infoUrl: Z, actions: R = [], trackingConfig: L, onClickContent: D, onClickBanner: k } = e;
    L = {
        id: null != (n = null == (t = L) ? void 0 : t.id) ? n : '0',
        linkType: null != (r = null == t ? void 0 : t.linkType) ? r : h.Un.UNKNOWN,
        referrerId: null != (a = null == t ? void 0 : t.referrerId) ? a : g.default.getId(),
        activityCustomId: null == t ? void 0 : t.activityCustomId,
        onView: null == t ? void 0 : t.onView,
        onLinkCopied: null == t ? void 0 : t.onLinkCopied
    };
    let { primaryColor: M, secondaryColor: U } = (0, m.Z)(null != A ? A : T),
        F = 'linear-gradient(45deg, '.concat(M, ', ').concat(U, ')'),
        B = (0, s.e7)([p.Z], () => p.Z.useReducedMotion),
        G = l.useRef(!1),
        V = (0, d.O)(
            (e) => {
                if (!1 === G.current && e) {
                    var t;
                    (null == L || null == (t = L.onView) || t.call(L), (0, h.GF)(L.id, L.linkType, L.referrerId, L.activityCustomId), (G.current = !0));
                }
            },
            void 0
        ),
        H =
            _.wS && null != w
                ? (0, i.jsx)(c.zx, {
                      look: c.zx.Looks.BLANK,
                      size: c.zx.Sizes.ICON,
                      'aria-label': E.intl.string(E.t.WqhZsr),
                      className: C.linkIcon,
                      onClick: () => {
                          ((0, _.JG)(w, () => (0, u.showToast)((0, u.createToast)(E.intl.string(E.t['L/PwZW']), u.ToastType.SUCCESS))), (0, h.Yu)(L.id, L.linkType));
                      },
                      children: (0, i.jsx)(u.xPt, {
                          size: 'xs',
                          color: 'currentColor'
                      })
                  })
                : null,
        z =
            null != Z
                ? (0, i.jsx)(u.eee, {
                      'aria-label': E.intl.string(E.t.wuRE8P),
                      className: C.linkIcon,
                      href: Z,
                      children: (0, i.jsx)(u.d3s, {
                          size: 'xs',
                          color: u.TVs.colors.APP_MESSAGE_EMBED_SECONDARY_TEXT.css
                      })
                  })
                : null,
        W = null != T,
        K = null != N && !1 === B,
        Y = W || K,
        X = 0 === P ? C.bannerAspectRatioBot : C.bannerAspectRatioActivity,
        q = l.useRef(null),
        Q = l.useCallback(() => {
            let e = q.current;
            null != e && ('hidden' === getComputedStyle(e).visibility ? e.pause() : e.play());
        }, []),
        J = l.useMemo(() => !!K && new URL(N).pathname.endsWith('.gif'), [K, N]),
        $ = l.useMemo(() => {
            if (null != D)
                return (e) => {
                    (D(e), (0, h.KX)(L.id, L.linkType, h.j_.CONTENT, L.referrerId, L.activityCustomId));
                };
        }, [D, L]),
        ee = l.useMemo(() => {
            if (null != k)
                return (e) => {
                    (k(e), (0, h.KX)(L.id, L.linkType, h.j_.BANNER, L.referrerId, L.activityCustomId));
                };
        }, [k, L]);
    return (0, i.jsxs)('div', {
        ref: V,
        className: C.embed,
        children: [
            Y &&
                (0, i.jsxs)(y, {
                    onClick: ee,
                    className: o()(C.bannerWrapper, X, { [C.showVideoOnFocus]: K }),
                    children: [
                        K &&
                            (J
                                ? (0, i.jsx)('div', {
                                      className: C.videoBanner,
                                      style: { backgroundImage: 'url('.concat(N, ')') }
                                  })
                                : (0, i.jsx)(f.Z, {
                                      ref: q,
                                      src: N,
                                      mediaLayoutType: b.hV.MOSAIC,
                                      loop: !0,
                                      muted: !0,
                                      className: C.videoBanner
                                  })),
                        W &&
                            (0, i.jsx)('div', {
                                className: C.staticBanner,
                                style: { backgroundImage: 'url('.concat(T, ')') },
                                onTransitionEnd: Q
                            })
                    ]
                }),
            (0, i.jsxs)('div', {
                style: { background: F },
                children: [
                    (0, i.jsxs)('div', {
                        className: C.contentContainer,
                        children: [
                            null != j &&
                                (0, i.jsxs)('div', {
                                    className: C.header,
                                    children: [
                                        (0, i.jsx)(u.Text, {
                                            variant: 'text-sm/semibold',
                                            color: 'none',
                                            children: j
                                        }),
                                        null != H ? H : z
                                    ]
                                }),
                            (0, i.jsxs)('div', {
                                className: C.contentAndCopyButtonWrapper,
                                children: [
                                    (0, i.jsxs)(y, {
                                        onClick: $,
                                        className: o()(C.contentWrapper, { [C.contentWrapperClickable]: null != $ }),
                                        children: [
                                            null != A &&
                                                (0, i.jsx)('div', {
                                                    className: C.img,
                                                    style: { backgroundImage: 'url('.concat(A, ')') }
                                                }),
                                            (0, i.jsxs)('div', {
                                                className: C.content,
                                                children: [
                                                    (0, i.jsx)(u.Text, {
                                                        variant: 'text-md/semibold',
                                                        color: 'none',
                                                        lineClamp: 1,
                                                        className: C.contentTitle,
                                                        children: O
                                                    }),
                                                    (0, i.jsx)('div', {
                                                        className: C.contentInfoWrapper,
                                                        children: S
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    null == j && (null != H ? H : z)
                                ]
                            }),
                            R.length > 0 &&
                                (0, i.jsx)('div', {
                                    className: C.actionWrapper,
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
                                                className: p ? C.primaryButton : C.alwaysWhiteText,
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
                                                          var t = x(
                                                              {},
                                                              (function (e) {
                                                                  if (null == e) throw TypeError('Cannot destructure ' + e);
                                                                  return e;
                                                              })(e)
                                                          );
                                                          return (0, i.jsx)(c.zx, v({}, f, t));
                                                      }
                                                  },
                                                  n
                                              )
                                            : (0, i.jsx)(c.zx, v({}, f), n);
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
