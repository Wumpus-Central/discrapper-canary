n.d(t, {
    W: () => y,
    u: () => v
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
    d = n(607070),
    u = n(206295),
    p = n(70097),
    m = n(572004),
    f = n(217702),
    h = n(388032),
    g = n(579092);
function _() {
    return (_ =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
function b(e) {
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
function y(e) {
    let { title: t, header: n, info: r, staticBannerSrc: o, videoBannerSrc: v, bannerAspectRatio: y = 0, iconSrc: x, embedUrl: O, actions: E = [] } = e,
        { primaryColor: j, secondaryColor: N } = (0, u.Z)(null != x ? x : o),
        C = 'linear-gradient(45deg, '.concat(j, ', ').concat(N, ')'),
        I = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
        S =
            m.wS && null != O
                ? (0, i.jsx)(c.zxk, {
                      look: c.zxk.Looks.BLANK,
                      size: c.zxk.Sizes.ICON,
                      'aria-label': h.NW.string(h.t.WqhZsr),
                      className: g.linkIcon,
                      onClick: () => {
                          (0, m.JG)(O), (0, c.showToast)((0, c.createToast)(h.NW.string(h.t['L/PwZW']), c.ToastType.SUCCESS));
                      },
                      children: (0, i.jsx)(c.xPt, {
                          size: 'xs',
                          color: 'currentColor'
                      })
                  })
                : null,
        P = null != o,
        T = null != v && !1 === I,
        A = P || T,
        w = 0 === y ? g.bannerAspectRatioBot : g.bannerAspectRatioActivity,
        Z = a.useRef(null),
        k = a.useCallback(() => {
            let e = Z.current;
            null != e && ('hidden' === getComputedStyle(e).visibility ? e.pause() : e.play());
        }, []),
        R = a.useMemo(() => !!T && new URL(v).pathname.endsWith('.gif'), [T, v]);
    return (0, i.jsxs)('div', {
        className: l()(g.embed, { [g.showVideoOnFocus]: T }),
        children: [
            A &&
                (0, i.jsxs)('div', {
                    className: l()(g.bannerWrapper, w),
                    children: [
                        T &&
                            (R
                                ? (0, i.jsx)('div', {
                                      className: g.videoBanner,
                                      style: { backgroundImage: 'url('.concat(v, ')') }
                                  })
                                : (0, i.jsx)(p.Z, {
                                      ref: Z,
                                      src: v,
                                      mediaLayoutType: f.hV.MOSAIC,
                                      loop: !0,
                                      muted: !0,
                                      className: g.videoBanner
                                  })),
                        P &&
                            (0, i.jsx)('div', {
                                className: g.staticBanner,
                                style: { backgroundImage: 'url('.concat(o, ')') },
                                onTransitionEnd: k
                            })
                    ]
                }),
            (0, i.jsxs)('div', {
                className: g.contentContainer,
                style: { background: C },
                children: [
                    null != n &&
                        (0, i.jsxs)('div', {
                            className: g.header,
                            children: [
                                (0, i.jsx)(c.Text, {
                                    variant: 'eyebrow',
                                    color: 'none',
                                    children: n
                                }),
                                S
                            ]
                        }),
                    (0, i.jsxs)('div', {
                        className: g.contentWrapper,
                        children: [
                            null != x &&
                                (0, i.jsx)('div', {
                                    className: g.img,
                                    style: { backgroundImage: 'url('.concat(x, ')') }
                                }),
                            (0, i.jsxs)('div', {
                                className: g.content,
                                children: [
                                    (0, i.jsx)(c.Text, {
                                        variant: 'text-md/semibold',
                                        color: 'none',
                                        lineClamp: 1,
                                        children: t
                                    }),
                                    (0, i.jsx)('div', {
                                        className: g.contentInfo,
                                        children: r
                                    })
                                ]
                            }),
                            null == n && S
                        ]
                    }),
                    E.length > 0 &&
                        (0, i.jsx)('div', {
                            className: g.actionWrapper,
                            children: E.map((e, t) => {
                                let { label: n, onClick: r, disabledReason: a, submitting: o } = e,
                                    l = null != a,
                                    s = 0 === t,
                                    d = {
                                        color: s ? c.zxk.Colors.WHITE : c.zxk.Colors.TRANSPARENT,
                                        className: s ? g.primaryButton : g.alwaysWhiteText,
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
                                                  var t = _(
                                                      {},
                                                      (function (e) {
                                                          if (null == e) throw TypeError('Cannot destructure ' + e);
                                                          return e;
                                                      })(e)
                                                  );
                                                  return (0, i.jsx)(c.zxk, b({}, d, t));
                                              }
                                          },
                                          n
                                      )
                                    : (0, i.jsx)(c.zxk, b({}, d), n);
                            })
                        })
                ]
            })
        ]
    });
}
