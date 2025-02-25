n.d(t, {
    W: () => x,
    u: () => y
}),
    n(315314),
    n(309749),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120);
var r,
    i = n(200651),
    a = n(192379),
    o = n(120356),
    l = n.n(o),
    s = n(442837),
    c = n(481060),
    d = n(434650),
    u = n(607070),
    p = n(206295),
    m = n(70097),
    f = n(572004),
    h = n(217702),
    g = n(388032),
    _ = n(579092);
function b() {
    return (b =
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
var y = (((r = {})[(r.BOT = 0)] = 'BOT'), (r[(r.ACTIVITY = 1)] = 'ACTIVITY'), r);
function x(e) {
    let { title: t, header: n, info: r, staticBannerSrc: o, videoBannerSrc: y, bannerAspectRatio: x = 0, iconSrc: O, embedUrl: E, actions: j = [], onView: N, onLinkCopied: C } = e,
        { primaryColor: I, secondaryColor: S } = (0, p.Z)(null != O ? O : o),
        P = 'linear-gradient(45deg, '.concat(I, ', ').concat(S, ')'),
        T = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        A = a.useRef(!1),
        w = (0, d.O)(
            (e) => {
                null != N && !1 === A.current && e && (N(), (A.current = !0));
            },
            void 0,
            null != N
        ),
        Z =
            f.wS && null != E
                ? (0, i.jsx)(c.zxk, {
                      look: c.zxk.Looks.BLANK,
                      size: c.zxk.Sizes.ICON,
                      'aria-label': g.NW.string(g.t.WqhZsr),
                      className: _.linkIcon,
                      onClick: () => {
                          (0, f.JG)(E), (0, c.showToast)((0, c.createToast)(g.NW.string(g.t['L/PwZW']), c.ToastType.SUCCESS)), null == C || C();
                      },
                      children: (0, i.jsx)(c.xPt, {
                          size: 'xs',
                          color: 'currentColor'
                      })
                  })
                : null,
        k = null != o,
        R = null != y && !1 === T,
        L = k || R,
        D = 0 === x ? _.bannerAspectRatioBot : _.bannerAspectRatioActivity,
        M = a.useRef(null),
        W = a.useCallback(() => {
            let e = M.current;
            null != e && ('hidden' === getComputedStyle(e).visibility ? e.pause() : e.play());
        }, []),
        F = a.useMemo(() => !!R && new URL(y).pathname.endsWith('.gif'), [R, y]);
    return (0, i.jsxs)('div', {
        ref: w,
        className: l()(_.embed, { [_.showVideoOnFocus]: R }),
        children: [
            L &&
                (0, i.jsxs)('div', {
                    className: l()(_.bannerWrapper, D),
                    children: [
                        R &&
                            (F
                                ? (0, i.jsx)('div', {
                                      className: _.videoBanner,
                                      style: { backgroundImage: 'url('.concat(y, ')') }
                                  })
                                : (0, i.jsx)(m.Z, {
                                      ref: M,
                                      src: y,
                                      mediaLayoutType: h.hV.MOSAIC,
                                      loop: !0,
                                      muted: !0,
                                      className: _.videoBanner
                                  })),
                        k &&
                            (0, i.jsx)('div', {
                                className: _.staticBanner,
                                style: { backgroundImage: 'url('.concat(o, ')') },
                                onTransitionEnd: W
                            })
                    ]
                }),
            (0, i.jsxs)('div', {
                className: _.contentContainer,
                style: { background: P },
                children: [
                    null != n &&
                        (0, i.jsxs)('div', {
                            className: _.header,
                            children: [
                                (0, i.jsx)(c.Text, {
                                    variant: 'eyebrow',
                                    color: 'none',
                                    children: n
                                }),
                                Z
                            ]
                        }),
                    (0, i.jsxs)('div', {
                        className: _.contentWrapper,
                        children: [
                            null != O &&
                                (0, i.jsx)('div', {
                                    className: _.img,
                                    style: { backgroundImage: 'url('.concat(O, ')') }
                                }),
                            (0, i.jsxs)('div', {
                                className: _.content,
                                children: [
                                    (0, i.jsx)(c.Text, {
                                        variant: 'text-md/semibold',
                                        color: 'none',
                                        lineClamp: 1,
                                        children: t
                                    }),
                                    r
                                ]
                            }),
                            null == n && Z
                        ]
                    }),
                    j.length > 0 &&
                        (0, i.jsx)('div', {
                            className: _.actionWrapper,
                            children: j.map((e, t) => {
                                let { label: n, onClick: r, disabledReason: a, submitting: o } = e,
                                    l = null != a,
                                    s = 0 === t,
                                    d = {
                                        color: s ? c.zxk.Colors.WHITE : c.zxk.Colors.TRANSPARENT,
                                        className: s ? _.primaryButton : _.alwaysWhiteText,
                                        onClick: r,
                                        disabled: l,
                                        submitting: o,
                                        children: n
                                    };
                                return l
                                    ? (0, i.jsx)(
                                          c.ua7,
                                          {
                                              text: a,
                                              children: (e) => {
                                                  var t = b(
                                                      {},
                                                      (function (e) {
                                                          if (null == e) throw TypeError('Cannot destructure ' + e);
                                                          return e;
                                                      })(e)
                                                  );
                                                  return (0, i.jsx)(c.zxk, v({}, d, t));
                                              }
                                          },
                                          n
                                      )
                                    : (0, i.jsx)(c.zxk, v({}, d), n);
                            })
                        })
                ]
            })
        ]
    });
}
