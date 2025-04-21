n.d(t, {
    W: () => O,
    u: () => v
}),
    n(190126),
    n(368063),
    n(65234),
    n(111804),
    n(490233),
    n(97749),
    n(388685);
var r,
    i = n(200651),
    l = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    c = n(481060),
    u = n(434650),
    d = n(607070),
    p = n(206295),
    m = n(70097),
    f = n(314897),
    h = n(572004),
    g = n(914498),
    _ = n(217702),
    b = n(388032),
    x = n(383195);
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
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
var v = (((r = {})[(r.BOT = 0)] = 'BOT'), (r[(r.ACTIVITY = 1)] = 'ACTIVITY'), r);
function O(e) {
    var t, n, r, a;
    let { title: v, header: O, info: j, staticBannerSrc: C, videoBannerSrc: S, bannerAspectRatio: I = 0, iconSrc: N, embedUrl: T, actions: P = [], trackingConfig: A } = e;
    A = {
        id: null != (n = null == (t = A) ? void 0 : t.id) ? n : '0',
        linkType: null != (r = null == t ? void 0 : t.linkType) ? r : g.Un.UNKNOWN,
        referrerId: null != (a = null == t ? void 0 : t.referrerId) ? a : f.default.getId(),
        activityCustomId: null == t ? void 0 : t.activityCustomId,
        onView: null == t ? void 0 : t.onView,
        onLinkCopied: null == t ? void 0 : t.onLinkCopied
    };
    let { primaryColor: w, secondaryColor: Z } = (0, p.Z)(null != N ? N : C),
        R = 'linear-gradient(45deg, '.concat(w, ', ').concat(Z, ')'),
        k = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
        D = l.useRef(!1),
        L = (0, u.O)(
            (e) => {
                if (!1 === D.current && e) {
                    var t;
                    null == A || null == (t = A.onView) || t.call(A), (0, g.GF)(A.id, A.linkType, A.referrerId, A.activityCustomId), (D.current = !0);
                }
            },
            void 0
        ),
        M =
            h.wS && null != T
                ? (0, i.jsx)(c.zxk, {
                      look: c.zxk.Looks.BLANK,
                      size: c.zxk.Sizes.ICON,
                      'aria-label': b.intl.string(b.t.WqhZsr),
                      className: x.linkIcon,
                      onClick: () => {
                          (0, h.JG)(T, () => (0, c.showToast)((0, c.createToast)(b.intl.string(b.t['L/PwZW']), c.ToastType.SUCCESS))), (0, g.Yu)(A.id, A.linkType);
                      },
                      children: (0, i.jsx)(c.xPt, {
                          size: 'xs',
                          color: 'currentColor'
                      })
                  })
                : null,
        U = null != C,
        F = null != S && !1 === k,
        B = U || F,
        G = 0 === I ? x.bannerAspectRatioBot : x.bannerAspectRatioActivity,
        H = l.useRef(null),
        V = l.useCallback(() => {
            let e = H.current;
            null != e && ('hidden' === getComputedStyle(e).visibility ? e.pause() : e.play());
        }, []),
        z = l.useMemo(() => !!F && new URL(S).pathname.endsWith('.gif'), [F, S]);
    return (0, i.jsxs)('div', {
        ref: L,
        className: o()(x.embed, { [x.showVideoOnFocus]: F }),
        children: [
            B &&
                (0, i.jsxs)('div', {
                    className: o()(x.bannerWrapper, G),
                    children: [
                        F &&
                            (z
                                ? (0, i.jsx)('div', {
                                      className: x.videoBanner,
                                      style: { backgroundImage: 'url('.concat(S, ')') }
                                  })
                                : (0, i.jsx)(m.Z, {
                                      ref: H,
                                      src: S,
                                      mediaLayoutType: _.hV.MOSAIC,
                                      loop: !0,
                                      muted: !0,
                                      className: x.videoBanner
                                  })),
                        U &&
                            (0, i.jsx)('div', {
                                className: x.staticBanner,
                                style: { backgroundImage: 'url('.concat(C, ')') },
                                onTransitionEnd: V
                            })
                    ]
                }),
            (0, i.jsxs)('div', {
                className: x.contentContainer,
                style: { background: R },
                children: [
                    null != O &&
                        (0, i.jsxs)('div', {
                            className: x.header,
                            children: [
                                (0, i.jsx)(c.Text, {
                                    variant: 'eyebrow',
                                    color: 'none',
                                    children: O
                                }),
                                M
                            ]
                        }),
                    (0, i.jsxs)('div', {
                        className: x.contentWrapper,
                        children: [
                            null != N &&
                                (0, i.jsx)('div', {
                                    className: x.img,
                                    style: { backgroundImage: 'url('.concat(N, ')') }
                                }),
                            (0, i.jsxs)('div', {
                                className: x.content,
                                children: [
                                    (0, i.jsx)(c.Text, {
                                        variant: 'text-md/semibold',
                                        color: 'none',
                                        lineClamp: 1,
                                        children: v
                                    }),
                                    j
                                ]
                            }),
                            null == O && M
                        ]
                    }),
                    P.length > 0 &&
                        (0, i.jsx)('div', {
                            className: x.actionWrapper,
                            children: P.map((e, t) => {
                                let { label: n, onClick: r, disabledReason: l, submitting: a, trackingArea: o } = e,
                                    s = null != l,
                                    u = 0 === t,
                                    d = {
                                        color: u ? c.zxk.Colors.WHITE : c.zxk.Colors.TRANSPARENT,
                                        className: u ? x.primaryButton : x.alwaysWhiteText,
                                        disabled: s,
                                        submitting: a,
                                        children: n,
                                        onClick(e) {
                                            r(e), (0, g.KX)(A.id, A.linkType, o, A.referrerId, A.activityCustomId);
                                        }
                                    };
                                return s
                                    ? (0, i.jsx)(
                                          c.ua7,
                                          {
                                              text: l,
                                              children: (e) => {
                                                  var t = y(
                                                      {},
                                                      (function (e) {
                                                          if (null == e) throw TypeError('Cannot destructure ' + e);
                                                          return e;
                                                      })(e)
                                                  );
                                                  return (0, i.jsx)(c.zxk, E({}, d, t));
                                              }
                                          },
                                          n
                                      )
                                    : (0, i.jsx)(c.zxk, E({}, d), n);
                            })
                        })
                ]
            })
        ]
    });
}
