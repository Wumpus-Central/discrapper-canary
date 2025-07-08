(n.d(t, {
    W: () => O,
    u: () => x
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
    c = n(481060),
    u = n(434650),
    d = n(607070),
    p = n(206295),
    m = n(70097),
    f = n(314897),
    _ = n(572004),
    g = n(914498),
    h = n(217702),
    b = n(388032),
    E = n(383195);
function y() {
    return (y =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
function C(e) {
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
var x = (((r = {})[(r.BOT = 0)] = 'BOT'), (r[(r.ACTIVITY = 1)] = 'ACTIVITY'), r);
function v(e) {
    let { onClick: t, children: n, className: r } = e;
    return null != t
        ? (0, i.jsx)(c.P3F, {
              onClick: t,
              className: r,
              children: n
          })
        : (0, i.jsx)('div', {
              className: r,
              children: n
          });
}
function O(e) {
    var t, n, r, a;
    let { title: x, header: O, footer: j, info: I, staticBannerSrc: S, videoBannerSrc: T, bannerAspectRatio: N = 0, iconSrc: P, embedUrl: A, infoUrl: w, actions: Z = [], trackingConfig: R, onClickContent: k } = e;
    R = {
        id: null != (n = null == (t = R) ? void 0 : t.id) ? n : '0',
        linkType: null != (r = null == t ? void 0 : t.linkType) ? r : g.Un.UNKNOWN,
        referrerId: null != (a = null == t ? void 0 : t.referrerId) ? a : f.default.getId(),
        activityCustomId: null == t ? void 0 : t.activityCustomId,
        onView: null == t ? void 0 : t.onView,
        onLinkCopied: null == t ? void 0 : t.onLinkCopied
    };
    let { primaryColor: L, secondaryColor: D } = (0, p.Z)(null != P ? P : S),
        M = 'linear-gradient(45deg, '.concat(L, ', ').concat(D, ')'),
        U = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
        F = l.useRef(!1),
        B = (0, u.O)(
            (e) => {
                if (!1 === F.current && e) {
                    var t;
                    (null == R || null == (t = R.onView) || t.call(R), (0, g.GF)(R.id, R.linkType, R.referrerId, R.activityCustomId), (F.current = !0));
                }
            },
            void 0
        ),
        G =
            _.wS && null != A
                ? (0, i.jsx)(c.zxk, {
                      look: c.zxk.Looks.BLANK,
                      size: c.zxk.Sizes.ICON,
                      'aria-label': b.intl.string(b.t.WqhZsr),
                      className: E.linkIcon,
                      onClick: () => {
                          ((0, _.JG)(A, () => (0, c.showToast)((0, c.createToast)(b.intl.string(b.t['L/PwZW']), c.ToastType.SUCCESS))), (0, g.Yu)(R.id, R.linkType));
                      },
                      children: (0, i.jsx)(c.xPt, {
                          size: 'xs',
                          color: 'currentColor'
                      })
                  })
                : null,
        H =
            null != w
                ? (0, i.jsx)(c.eee, {
                      'aria-label': b.intl.string(b.t.wuRE8P),
                      className: E.linkIcon,
                      href: w,
                      children: (0, i.jsx)(c.d3s, {
                          size: 'xs',
                          color: c.TVs.colors.APP_MESSAGE_EMBED_SECONDARY_TEXT.css
                      })
                  })
                : null,
        V = null != S,
        z = null != T && !1 === U,
        W = V || z,
        K = 0 === N ? E.bannerAspectRatioBot : E.bannerAspectRatioActivity,
        Y = l.useRef(null),
        X = l.useCallback(() => {
            let e = Y.current;
            null != e && ('hidden' === getComputedStyle(e).visibility ? e.pause() : e.play());
        }, []),
        q = l.useMemo(() => !!z && new URL(T).pathname.endsWith('.gif'), [z, T]),
        Q = l.useMemo(() => {
            if (null != k)
                return (e) => {
                    (k(e), (0, g.KX)(R.id, R.linkType, g.j_.CONTENT, R.referrerId, R.activityCustomId));
                };
        }, [k, R]);
    return (0, i.jsxs)('div', {
        ref: B,
        className: o()(E.embed, { [E.showVideoOnFocus]: z }),
        children: [
            W &&
                (0, i.jsxs)('div', {
                    className: o()(E.bannerWrapper, K),
                    children: [
                        z &&
                            (q
                                ? (0, i.jsx)('div', {
                                      className: E.videoBanner,
                                      style: { backgroundImage: 'url('.concat(T, ')') }
                                  })
                                : (0, i.jsx)(m.Z, {
                                      ref: Y,
                                      src: T,
                                      mediaLayoutType: h.hV.MOSAIC,
                                      loop: !0,
                                      muted: !0,
                                      className: E.videoBanner
                                  })),
                        V &&
                            (0, i.jsx)('div', {
                                className: E.staticBanner,
                                style: { backgroundImage: 'url('.concat(S, ')') },
                                onTransitionEnd: X
                            })
                    ]
                }),
            (0, i.jsxs)('div', {
                style: { background: M },
                children: [
                    (0, i.jsxs)('div', {
                        className: E.contentContainer,
                        children: [
                            null != O &&
                                (0, i.jsxs)('div', {
                                    className: E.header,
                                    children: [
                                        (0, i.jsx)(c.Text, {
                                            variant: 'text-sm/semibold',
                                            color: 'none',
                                            children: O
                                        }),
                                        null != G ? G : H
                                    ]
                                }),
                            (0, i.jsxs)('div', {
                                className: E.contentAndCopyButtonWrapper,
                                children: [
                                    (0, i.jsxs)(v, {
                                        onClick: Q,
                                        className: o()(E.contentWrapper, { [E.contentWrapperClickable]: null != Q }),
                                        children: [
                                            null != P &&
                                                (0, i.jsx)('div', {
                                                    className: E.img,
                                                    style: { backgroundImage: 'url('.concat(P, ')') }
                                                }),
                                            (0, i.jsxs)('div', {
                                                className: E.content,
                                                children: [
                                                    (0, i.jsx)(c.Text, {
                                                        variant: 'text-md/semibold',
                                                        color: 'none',
                                                        lineClamp: 1,
                                                        className: E.contentTitle,
                                                        children: x
                                                    }),
                                                    (0, i.jsx)('div', {
                                                        className: E.contentInfoWrapper,
                                                        children: I
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    null == O && (null != G ? G : H)
                                ]
                            }),
                            Z.length > 0 &&
                                (0, i.jsx)('div', {
                                    className: E.actionWrapper,
                                    children: Z.map((e, t) => {
                                        let { label: n, icon: r, onClick: l, disabledReason: a, submitting: o, trackingArea: s } = e,
                                            u = null != a,
                                            d = 0 === t,
                                            p =
                                                null != r
                                                    ? (0, i.jsxs)(i.Fragment, {
                                                          children: [r, (0, i.jsx)('span', { children: n })]
                                                      })
                                                    : n,
                                            m = {
                                                color: d ? c.zxk.Colors.WHITE : c.zxk.Colors.TRANSPARENT,
                                                className: d ? E.primaryButton : E.alwaysWhiteText,
                                                disabled: u,
                                                submitting: o,
                                                children: p,
                                                onClick(e) {
                                                    (l(e), (0, g.KX)(R.id, R.linkType, s, R.referrerId, R.activityCustomId));
                                                }
                                            };
                                        return u
                                            ? (0, i.jsx)(
                                                  c.ua7,
                                                  {
                                                      text: a,
                                                      children: (e) => {
                                                          var t = y(
                                                              {},
                                                              (function (e) {
                                                                  if (null == e) throw TypeError('Cannot destructure ' + e);
                                                                  return e;
                                                              })(e)
                                                          );
                                                          return (0, i.jsx)(c.zxk, C({}, m, t));
                                                      }
                                                  },
                                                  n
                                              )
                                            : (0, i.jsx)(c.zxk, C({}, m), n);
                                    })
                                })
                        ]
                    }),
                    null != j && j
                ]
            })
        ]
    });
}
