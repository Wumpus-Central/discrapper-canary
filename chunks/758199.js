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
    let { title: x, header: O, info: j, staticBannerSrc: I, videoBannerSrc: S, bannerAspectRatio: T = 0, iconSrc: N, embedUrl: P, infoUrl: A, actions: w = [], trackingConfig: Z, onClickContent: R } = e;
    Z = {
        id: null != (n = null == (t = Z) ? void 0 : t.id) ? n : '0',
        linkType: null != (r = null == t ? void 0 : t.linkType) ? r : g.Un.UNKNOWN,
        referrerId: null != (a = null == t ? void 0 : t.referrerId) ? a : f.default.getId(),
        activityCustomId: null == t ? void 0 : t.activityCustomId,
        onView: null == t ? void 0 : t.onView,
        onLinkCopied: null == t ? void 0 : t.onLinkCopied
    };
    let { primaryColor: k, secondaryColor: L } = (0, p.Z)(null != N ? N : I),
        D = 'linear-gradient(45deg, '.concat(k, ', ').concat(L, ')'),
        M = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
        U = l.useRef(!1),
        F = (0, u.O)(
            (e) => {
                if (!1 === U.current && e) {
                    var t;
                    (null == Z || null == (t = Z.onView) || t.call(Z), (0, g.GF)(Z.id, Z.linkType, Z.referrerId, Z.activityCustomId), (U.current = !0));
                }
            },
            void 0
        ),
        B =
            _.wS && null != P
                ? (0, i.jsx)(c.zxk, {
                      look: c.zxk.Looks.BLANK,
                      size: c.zxk.Sizes.ICON,
                      'aria-label': b.intl.string(b.t.WqhZsr),
                      className: E.linkIcon,
                      onClick: () => {
                          ((0, _.JG)(P, () => (0, c.showToast)((0, c.createToast)(b.intl.string(b.t['L/PwZW']), c.ToastType.SUCCESS))), (0, g.Yu)(Z.id, Z.linkType));
                      },
                      children: (0, i.jsx)(c.xPt, {
                          size: 'xs',
                          color: 'currentColor'
                      })
                  })
                : null,
        G =
            null != A
                ? (0, i.jsx)(c.eee, {
                      'aria-label': b.intl.string(b.t.wuRE8P),
                      className: E.linkIcon,
                      href: A,
                      children: (0, i.jsx)(c.d3s, {
                          size: 'xs',
                          color: c.TVs.colors.APP_MESSAGE_EMBED_SECONDARY_TEXT.css
                      })
                  })
                : null,
        H = null != I,
        V = null != S && !1 === M,
        z = H || V,
        W = 0 === T ? E.bannerAspectRatioBot : E.bannerAspectRatioActivity,
        K = l.useRef(null),
        Y = l.useCallback(() => {
            let e = K.current;
            null != e && ('hidden' === getComputedStyle(e).visibility ? e.pause() : e.play());
        }, []),
        X = l.useMemo(() => !!V && new URL(S).pathname.endsWith('.gif'), [V, S]),
        q = l.useMemo(() => {
            if (null != R)
                return (e) => {
                    (R(e), (0, g.KX)(Z.id, Z.linkType, g.j_.CONTENT, Z.referrerId, Z.activityCustomId));
                };
        }, [R, Z]);
    return (0, i.jsxs)('div', {
        ref: F,
        className: o()(E.embed, { [E.showVideoOnFocus]: V }),
        children: [
            z &&
                (0, i.jsxs)('div', {
                    className: o()(E.bannerWrapper, W),
                    children: [
                        V &&
                            (X
                                ? (0, i.jsx)('div', {
                                      className: E.videoBanner,
                                      style: { backgroundImage: 'url('.concat(S, ')') }
                                  })
                                : (0, i.jsx)(m.Z, {
                                      ref: K,
                                      src: S,
                                      mediaLayoutType: h.hV.MOSAIC,
                                      loop: !0,
                                      muted: !0,
                                      className: E.videoBanner
                                  })),
                        H &&
                            (0, i.jsx)('div', {
                                className: E.staticBanner,
                                style: { backgroundImage: 'url('.concat(I, ')') },
                                onTransitionEnd: Y
                            })
                    ]
                }),
            (0, i.jsxs)('div', {
                className: E.contentContainer,
                style: { background: D },
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
                                null != B ? B : G
                            ]
                        }),
                    (0, i.jsxs)('div', {
                        className: E.contentAndCopyButtonWrapper,
                        children: [
                            (0, i.jsxs)(v, {
                                onClick: q,
                                className: o()(E.contentWrapper, { [E.contentWrapperClickable]: null != q }),
                                children: [
                                    null != N &&
                                        (0, i.jsx)('div', {
                                            className: E.img,
                                            style: { backgroundImage: 'url('.concat(N, ')') }
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
                                                children: j
                                            })
                                        ]
                                    })
                                ]
                            }),
                            null == O && (null != B ? B : G)
                        ]
                    }),
                    w.length > 0 &&
                        (0, i.jsx)('div', {
                            className: E.actionWrapper,
                            children: w.map((e, t) => {
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
                                            (l(e), (0, g.KX)(Z.id, Z.linkType, s, Z.referrerId, Z.activityCustomId));
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
            })
        ]
    });
}
