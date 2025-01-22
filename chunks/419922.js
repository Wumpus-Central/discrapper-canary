r.d(n, {
    Co: function () {
        return x;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(512722),
    c = r.n(u),
    d = r(642128),
    f = r(442837),
    p = r(622535),
    h = r(481060),
    _ = r(607070),
    m = r(134432),
    g = r(314910),
    E = r(506071),
    v = r(453070),
    y = r(373228),
    b = r(378233),
    I = r(388032),
    T = r(739031);
let S = (e) => e.preventDefault(),
    A = 0.7,
    C = 33,
    N = 1.55,
    R = {
        tension: 1100,
        friction: 40
    },
    O = {
        tension: 1600,
        friction: 60
    };
function D(e, n) {
    return o.cloneElement(e, {
        'data-type': 'sticker',
        'data-id': n
    });
}
function x(e) {
    let n = 'description' in e && null != e.description ? ''.concat(e.name, ', ').concat(e.description) : e.name;
    return I.intl.formatToPlainString(I.t.rk6pOz, { stickerName: n });
}
let L = (e) => {
        let { children: n, hasError: r, isLoading: i, maskAsset: o, size: s, withLoadingIndicator: u = !0 } = e,
            c = s >= C;
        return (0, a.jsxs)('div', {
            className: l()(T.assetWrapper, { [T.assetWrapperMasked]: r || o }),
            style: {
                height: s,
                width: s
            },
            children: [
                r
                    ? (0, a.jsxs)('div', {
                          className: T.error,
                          children: [
                              (0, a.jsx)(h.StickerSadIcon, {
                                  size: 'custom',
                                  width: 20,
                                  height: 20,
                                  color: 'currentColor',
                                  className: T.errorIcon
                              }),
                              c &&
                                  (0, a.jsx)(h.Text, {
                                      className: T.errorText,
                                      color: 'header-secondary',
                                      variant: 'text-sm/normal',
                                      children: I.intl.string(I.t.tWYWJy)
                                  })
                          ]
                      })
                    : n,
                u && i && (0, a.jsx)('div', { className: T.loadingIndicator })
            ]
        });
    },
    w = (e) => {
        let { shouldAnimate: n, size: i, sticker: s, fileUri: l, assetData: u, isFocused: d, className: f, maskAsset: p, positionRef: h, withLoadingIndicator: _, onError: g } = e,
            E = o.useRef(null),
            v = o.useRef(null),
            [y, S] = o.useState(!0),
            [A, C] = o.useState(!1),
            N = o.useRef(!1);
        N.current = n && d;
        let R = null == l ? (0, b.Q6)(s) : l;
        return (c()(null != R, 'Unable to determine sticker asset URL. Sticker ID: '.concat(s.id)),
        o.useEffect(() => {
            if (null == E.current || null == R) return;
            let e = Math.min(2, (0, m.x_)());
            (E.current.width = i * e), (E.current.height = i * e);
            let n = !1;
            return (
                (async () => {
                    let { default: e } = await r.e('21617').then(r.bind(r, 186952));
                    null != E.current &&
                        ((v.current = new e({
                            canvas: E.current,
                            animationId: s.id,
                            assetUrl: R,
                            assetData: u,
                            onInitialDraw: () => {
                                !n && S(!1);
                            },
                            onError: () => {
                                !n && (S(!1), C(!0), null == g || g());
                            }
                        })),
                        N.current && v.current.setState(!0));
                })(),
                () => {
                    var e;
                    null === (e = v.current) || void 0 === e || e.drop(), (v.current = null), (n = !0);
                }
            );
        }, [R, i, s.id, u, g]),
        o.useEffect(() => {
            var e;
            let r;
            !n && (r = 0), null === (e = v.current) || void 0 === e || e.setState(n && d, r);
        }, [s, n, d]),
        null == R)
            ? null
            : (0, a.jsx)('div', {
                  role: 'img',
                  className: f,
                  'aria-label': A ? I.intl.string(I.t.yEvsKy) : x(s),
                  ref: h,
                  children: (0, a.jsx)(L, {
                      hasError: A,
                      isLoading: y,
                      maskAsset: p,
                      size: i,
                      withLoadingIndicator: _,
                      children: D(
                          (0, a.jsx)('canvas', {
                              className: T.lottieCanvas,
                              ref: E
                          }),
                          s.id
                      )
                  })
              });
    },
    P = (e) => {
        let { shouldAnimate: n, sticker: r, isFocused: i, size: s, className: u, maskAsset: c, positionRef: d, withLoadingIndicator: f, fileUri: h } = e,
            [_, m] = o.useState(!1),
            [g, E] = o.useState(!0),
            [v, y] = o.useState(!1),
            I = o.useRef(null),
            C = o.useRef(null),
            N =
                null != h
                    ? h
                    : (0, b.Q6)(r, {
                          isPreview: !n || !_ || !i,
                          size: s
                      }),
            R = o.useCallback(() => {
                E(!1);
            }, []),
            O = o.useCallback(() => {
                y(!0);
            }, []);
        return (o.useEffect(() => {
            if (null != I.current) {
                let { isVisible: e } = I.current;
                m(e);
            }
        }, []),
        o.useLayoutEffect(() => {
            var e;
            (null === (e = C.current) || void 0 === e ? void 0 : e.complete) === !0 && E(!1);
        }, []),
        null == N)
            ? null
            : (0, a.jsx)(p.$, {
                  ref: I,
                  onChange: m,
                  threshold: A,
                  children: (0, a.jsx)('div', {
                      className: l()(u, T.__invalid_pngImageWrapper),
                      ref: d,
                      children: (0, a.jsx)(L, {
                          hasError: v,
                          isLoading: g,
                          maskAsset: c,
                          size: s,
                          withLoadingIndicator: f,
                          children: D(
                              (0, a.jsx)('img', {
                                  className: T.pngImage,
                                  alt: x(r),
                                  src: N,
                                  draggable: !1,
                                  onError: O,
                                  onLoad: R,
                                  onContextMenu: S,
                                  ref: C
                              }),
                              r.id
                          )
                      })
                  })
              });
    },
    M = (e) => {
        let { disableAnimation: n, enlargeScaleFactor: r, enlargeWithName: i, isInteracting: s, positionRef: l, size: u, sticker: c } = e,
            p = (0, f.e7)([_.Z], () => _.Z.useReducedMotion),
            m = o.useRef(null),
            E = {
                transform: 'scale('.concat(p ? 1 : 1 / r, ')'),
                opacity: 0
            },
            v = (0, h.useTransition)(s, {
                ref: m,
                from: E,
                enter: {
                    transform: 'scale(1)',
                    opacity: 1
                },
                leave: E,
                config: R
            }),
            y = o.useRef(null),
            b = (0, h.useSpring)(
                {
                    ref: y,
                    transform: s || p ? 'translateY(0)' : 'translateY(-25px)',
                    opacity: s ? 1 : 0,
                    config: O
                },
                'animate-always'
            );
        return (
            (0, d.useChain)(s ? [m, y] : [y, m], s ? [0, 0.0625] : [0, 0]),
            v(
                (e, o) =>
                    o &&
                    (0, a.jsx)(g.W5, {
                        className: T.positionedLayer,
                        fixed: !0,
                        align: 'center',
                        position: 'center',
                        targetRef: l,
                        children: () =>
                            (0, a.jsxs)('div', {
                                className: T.overlayWrapper,
                                children: [
                                    (0, a.jsx)(d.animated.div, {
                                        className: T.overlayStickerWrapper,
                                        style: e,
                                        children: (0, a.jsx)(k, {
                                            className: T.__invalid_overlaySticker,
                                            disableAnimation: n,
                                            enlargeOnInteraction: !1,
                                            isInteracting: s,
                                            maskAsset: !1,
                                            sticker: c,
                                            size: Math.round(u * r),
                                            withLoadingIndicator: !1
                                        })
                                    }),
                                    i &&
                                        (0, a.jsx)(d.animated.div, {
                                            className: T.overlayLabelWrapper,
                                            style: b,
                                            children: (0, a.jsx)(h.Text, {
                                                variant: 'text-sm/medium',
                                                className: T.overlayLabel,
                                                children: c.name
                                            })
                                        })
                                ]
                            })
                    })
            )
        );
    },
    k = (e) => {
        let { isInteracting: n = !1, disableAnimation: r = !1, enlargeOnInteraction: i = !1, enlargeWithName: s = !0, enlargeScaleFactor: l = N, maskAsset: u = !1, size: c, sticker: d, className: f, withLoadingIndicator: p, assetData: h, fileUri: _, onError: m } = e,
            g = (0, E.n)(),
            b = (0, v.t$)(n) && !r,
            I = o.useRef(null);
        if (null == d) return null;
        let T = d.format_type === y.u3.LOTTIE ? w : P;
        return (0, a.jsxs)(
            o.Fragment,
            {
                children: [
                    (0, a.jsx)(T, {
                        shouldAnimate: b,
                        isFocused: g,
                        size: c,
                        sticker: d,
                        className: f,
                        maskAsset: u,
                        positionRef: I,
                        withLoadingIndicator: p,
                        assetData: h,
                        fileUri: _,
                        onError: m
                    }),
                    i &&
                        (0, a.jsx)(M, {
                            disableAnimation: r,
                            enlargeScaleFactor: l,
                            enlargeWithName: s,
                            isInteracting: n,
                            positionRef: I,
                            size: c,
                            sticker: d
                        })
                ]
            },
            ''.concat(d.id, ',').concat(c)
        );
    };
n.ZP = k;
