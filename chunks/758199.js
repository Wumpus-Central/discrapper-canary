(n.d(t, {
    W: () => j,
    u: () => C
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
    h = n(572004),
    _ = n(914498),
    b = n(217702),
    E = n(388032),
    x = n(383195);
function v() {
    return (v =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
function y(e) {
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
var C = (((r = {})[(r.BOT = 0)] = 'BOT'), (r[(r.ACTIVITY = 1)] = 'ACTIVITY'), r);
function O(e) {
    let { onClick: t, children: n, className: r } = e;
    return null != t
        ? (0, i.jsx)(u.P3F, {
              onClick: t,
              className: o()({ [x.cursorPointer]: null != t }, r),
              children: n
          })
        : (0, i.jsx)('div', {
              className: r,
              children: n
          });
}
function j(e) {
    var t, n, r, a;
    let { title: C, header: j, footer: I, info: S, staticBannerSrc: T, videoBannerSrc: N, bannerAspectRatio: P = 0, iconSrc: A, embedUrl: w, infoUrl: Z, actions: R = [], trackingConfig: k, onClickContent: L, onClickBanner: D } = e;
    k = {
        id: null != (n = null == (t = k) ? void 0 : t.id) ? n : '0',
        linkType: null != (r = null == t ? void 0 : t.linkType) ? r : _.Un.UNKNOWN,
        referrerId: null != (a = null == t ? void 0 : t.referrerId) ? a : g.default.getId(),
        activityCustomId: null == t ? void 0 : t.activityCustomId,
        onView: null == t ? void 0 : t.onView,
        onLinkCopied: null == t ? void 0 : t.onLinkCopied
    };
    let { primaryColor: M, secondaryColor: U } = (0, m.Z)(null != A ? A : T),
        F = 'linear-gradient(45deg, '.concat(M, ', ').concat(U, ')'),
        B = (0, s.e7)([p.Z], () => p.Z.useReducedMotion),
        G = l.useRef(!1),
        H = (0, d.O)(
            (e) => {
                if (!1 === G.current && e) {
                    var t;
                    (null == k || null == (t = k.onView) || t.call(k), (0, _.GF)(k.id, k.linkType, k.referrerId, k.activityCustomId), (G.current = !0));
                }
            },
            void 0
        ),
        V =
            h.wS && null != w
                ? (0, i.jsx)(c.zx, {
                      look: c.zx.Looks.BLANK,
                      size: c.zx.Sizes.ICON,
                      'aria-label': E.intl.string(E.t.WqhZsr),
                      className: x.linkIcon,
                      onClick: () => {
                          ((0, h.JG)(w, () => (0, u.showToast)((0, u.createToast)(E.intl.string(E.t['L/PwZW']), u.ToastType.SUCCESS))), (0, _.Yu)(k.id, k.linkType));
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
                      className: x.linkIcon,
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
        X = 0 === P ? x.bannerAspectRatioBot : x.bannerAspectRatioActivity,
        q = l.useRef(null),
        Q = l.useCallback(() => {
            let e = q.current;
            null != e && ('hidden' === getComputedStyle(e).visibility ? e.pause() : e.play());
        }, []),
        J = l.useMemo(() => !!K && new URL(N).pathname.endsWith('.gif'), [K, N]),
        $ = l.useMemo(() => {
            if (null != L)
                return (e) => {
                    (L(e), (0, _.KX)(k.id, k.linkType, _.j_.CONTENT, k.referrerId, k.activityCustomId));
                };
        }, [L, k]),
        ee = l.useMemo(() => {
            if (null != D)
                return (e) => {
                    (D(e), (0, _.KX)(k.id, k.linkType, _.j_.BANNER, k.referrerId, k.activityCustomId));
                };
        }, [D, k]);
    return (0, i.jsxs)('div', {
        ref: H,
        className: x.embed,
        children: [
            Y &&
                (0, i.jsxs)(O, {
                    onClick: ee,
                    className: o()(x.bannerWrapper, X, { [x.showVideoOnFocus]: K }),
                    children: [
                        K &&
                            (J
                                ? (0, i.jsx)('div', {
                                      className: x.videoBanner,
                                      style: { backgroundImage: 'url('.concat(N, ')') }
                                  })
                                : (0, i.jsx)(f.Z, {
                                      ref: q,
                                      src: N,
                                      mediaLayoutType: b.hV.MOSAIC,
                                      loop: !0,
                                      muted: !0,
                                      className: x.videoBanner
                                  })),
                        W &&
                            (0, i.jsx)('div', {
                                className: x.staticBanner,
                                style: { backgroundImage: 'url('.concat(T, ')') },
                                onTransitionEnd: Q
                            })
                    ]
                }),
            (0, i.jsxs)('div', {
                style: { background: F },
                children: [
                    (0, i.jsxs)('div', {
                        className: x.contentContainer,
                        children: [
                            null != j &&
                                (0, i.jsxs)('div', {
                                    className: x.header,
                                    children: [
                                        (0, i.jsx)(u.Text, {
                                            variant: 'text-sm/semibold',
                                            color: 'none',
                                            children: j
                                        }),
                                        null != V ? V : z
                                    ]
                                }),
                            (0, i.jsxs)('div', {
                                className: x.contentAndCopyButtonWrapper,
                                children: [
                                    (0, i.jsxs)(O, {
                                        onClick: $,
                                        className: o()(x.contentWrapper, { [x.contentWrapperClickable]: null != $ }),
                                        children: [
                                            null != A &&
                                                (0, i.jsx)('div', {
                                                    className: x.img,
                                                    style: { backgroundImage: 'url('.concat(A, ')') }
                                                }),
                                            (0, i.jsxs)('div', {
                                                className: x.content,
                                                children: [
                                                    (0, i.jsx)(u.Text, {
                                                        variant: 'text-md/semibold',
                                                        color: 'none',
                                                        lineClamp: 1,
                                                        className: x.contentTitle,
                                                        children: C
                                                    }),
                                                    (0, i.jsx)('div', {
                                                        className: x.contentInfoWrapper,
                                                        children: S
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    null == j && (null != V ? V : z)
                                ]
                            }),
                            R.length > 0 &&
                                (0, i.jsx)('div', {
                                    className: x.actionWrapper,
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
                                                className: p ? x.primaryButton : x.alwaysWhiteText,
                                                disabled: d,
                                                submitting: o,
                                                children: m,
                                                onClick(e) {
                                                    (l(e), (0, _.KX)(k.id, k.linkType, s, k.referrerId, k.activityCustomId));
                                                }
                                            };
                                        return d
                                            ? (0, i.jsx)(
                                                  u.ua7,
                                                  {
                                                      text: a,
                                                      children: (e) => {
                                                          var t = v(
                                                              {},
                                                              (function (e) {
                                                                  if (null == e) throw TypeError('Cannot destructure ' + e);
                                                                  return e;
                                                              })(e)
                                                          );
                                                          return (0, i.jsx)(c.zx, y({}, f, t));
                                                      }
                                                  },
                                                  n
                                              )
                                            : (0, i.jsx)(c.zx, y({}, f), n);
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
