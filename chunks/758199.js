n.d(t, {
    W: () => C,
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
    h = n(572004),
    g = n(914498),
    _ = n(217702),
    b = n(388032),
    x = n(383195);
function E() {
    return (E =
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
function C(e) {
    var t, n, r, a;
    let { title: v, header: C, info: O, staticBannerSrc: j, videoBannerSrc: S, bannerAspectRatio: I = 0, iconSrc: T, embedUrl: N, infoUrl: P, actions: A = [], trackingConfig: w } = e;
    w = {
        id: null != (n = null == (t = w) ? void 0 : t.id) ? n : '0',
        linkType: null != (r = null == t ? void 0 : t.linkType) ? r : g.Un.UNKNOWN,
        referrerId: null != (a = null == t ? void 0 : t.referrerId) ? a : f.default.getId(),
        activityCustomId: null == t ? void 0 : t.activityCustomId,
        onView: null == t ? void 0 : t.onView,
        onLinkCopied: null == t ? void 0 : t.onLinkCopied
    };
    let { primaryColor: Z, secondaryColor: R } = (0, p.Z)(null != T ? T : j),
        k = 'linear-gradient(45deg, '.concat(Z, ', ').concat(R, ')'),
        L = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
        D = l.useRef(!1),
        M = (0, u.O)(
            (e) => {
                if (!1 === D.current && e) {
                    var t;
                    null == w || null == (t = w.onView) || t.call(w), (0, g.GF)(w.id, w.linkType, w.referrerId, w.activityCustomId), (D.current = !0);
                }
            },
            void 0
        ),
        U =
            h.wS && null != N
                ? (0, i.jsx)(c.zxk, {
                      look: c.zxk.Looks.BLANK,
                      size: c.zxk.Sizes.ICON,
                      'aria-label': b.intl.string(b.t.WqhZsr),
                      className: x.linkIcon,
                      onClick: () => {
                          (0, h.JG)(N, () => (0, c.showToast)((0, c.createToast)(b.intl.string(b.t['L/PwZW']), c.ToastType.SUCCESS))), (0, g.Yu)(w.id, w.linkType);
                      },
                      children: (0, i.jsx)(c.xPt, {
                          size: 'xs',
                          color: 'currentColor'
                      })
                  })
                : null,
        F =
            null != P
                ? (0, i.jsx)(c.eee, {
                      'aria-label': b.intl.string(b.t.wuRE8P),
                      className: x.linkIcon,
                      href: P,
                      children: (0, i.jsx)(c.d3s, {
                          size: 'xs',
                          color: c.TVs.colors.APP_MESSAGE_EMBED_SECONDARY_TEXT.css
                      })
                  })
                : null,
        B = null != j,
        G = null != S && !1 === L,
        H = B || G,
        V = 0 === I ? x.bannerAspectRatioBot : x.bannerAspectRatioActivity,
        z = l.useRef(null),
        W = l.useCallback(() => {
            let e = z.current;
            null != e && ('hidden' === getComputedStyle(e).visibility ? e.pause() : e.play());
        }, []),
        K = l.useMemo(() => !!G && new URL(S).pathname.endsWith('.gif'), [G, S]);
    return (0, i.jsxs)('div', {
        ref: M,
        className: o()(x.embed, { [x.showVideoOnFocus]: G }),
        children: [
            H &&
                (0, i.jsxs)('div', {
                    className: o()(x.bannerWrapper, V),
                    children: [
                        G &&
                            (K
                                ? (0, i.jsx)('div', {
                                      className: x.videoBanner,
                                      style: { backgroundImage: 'url('.concat(S, ')') }
                                  })
                                : (0, i.jsx)(m.Z, {
                                      ref: z,
                                      src: S,
                                      mediaLayoutType: _.hV.MOSAIC,
                                      loop: !0,
                                      muted: !0,
                                      className: x.videoBanner
                                  })),
                        B &&
                            (0, i.jsx)('div', {
                                className: x.staticBanner,
                                style: { backgroundImage: 'url('.concat(j, ')') },
                                onTransitionEnd: W
                            })
                    ]
                }),
            (0, i.jsxs)('div', {
                className: x.contentContainer,
                style: { background: k },
                children: [
                    null != C &&
                        (0, i.jsxs)('div', {
                            className: x.header,
                            children: [
                                (0, i.jsx)(c.Text, {
                                    variant: 'text-sm/semibold',
                                    color: 'none',
                                    children: C
                                }),
                                null != U ? U : F
                            ]
                        }),
                    (0, i.jsxs)('div', {
                        className: x.contentWrapper,
                        children: [
                            null != T &&
                                (0, i.jsx)('div', {
                                    className: x.img,
                                    style: { backgroundImage: 'url('.concat(T, ')') }
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
                                    (0, i.jsx)('div', {
                                        className: x.contentInfoWrapper,
                                        children: O
                                    })
                                ]
                            }),
                            null == C && (null != U ? U : F)
                        ]
                    }),
                    A.length > 0 &&
                        (0, i.jsx)('div', {
                            className: x.actionWrapper,
                            children: A.map((e, t) => {
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
                                        className: d ? x.primaryButton : x.alwaysWhiteText,
                                        disabled: u,
                                        submitting: o,
                                        children: p,
                                        onClick(e) {
                                            l(e), (0, g.KX)(w.id, w.linkType, s, w.referrerId, w.activityCustomId);
                                        }
                                    };
                                return u
                                    ? (0, i.jsx)(
                                          c.ua7,
                                          {
                                              text: a,
                                              children: (e) => {
                                                  var t = E(
                                                      {},
                                                      (function (e) {
                                                          if (null == e) throw TypeError('Cannot destructure ' + e);
                                                          return e;
                                                      })(e)
                                                  );
                                                  return (0, i.jsx)(c.zxk, y({}, m, t));
                                              }
                                          },
                                          n
                                      )
                                    : (0, i.jsx)(c.zxk, y({}, m), n);
                            })
                        })
                ]
            })
        ]
    });
}
