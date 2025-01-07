r.d(n, {
    Co: function () {
        return L;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(512722),
    c = r.n(u),
    d = r(666912),
    f = r(442837),
    _ = r(622535),
    h = r(481060),
    p = r(607070),
    m = r(134432),
    g = r(314910),
    E = r(506071),
    v = r(453070),
    I = r(373228),
    T = r(378233),
    b = r(388032),
    y = r(739031);
let S = (e) => e.preventDefault(),
    A = 0.7,
    N = 33,
    C = 1.55,
    R = {
        tension: 1100,
        friction: 40
    },
    O = {
        tension: 1600,
        friction: 60
    };
function D(e, n) {
    return s.cloneElement(e, {
        'data-type': 'sticker',
        'data-id': n
    });
}
function L(e) {
    let n = 'description' in e && null != e.description ? ''.concat(e.name, ', ').concat(e.description) : e.name;
    return b.intl.formatToPlainString(b.t.rk6pOz, { stickerName: n });
}
let x = (e) => {
        let { children: n, hasError: r, isLoading: i, maskAsset: s, size: o, withLoadingIndicator: u = !0 } = e,
            c = o >= N;
        return (0, a.jsxs)('div', {
            className: l()(y.assetWrapper, { [y.assetWrapperMasked]: r || s }),
            style: {
                height: o,
                width: o
            },
            children: [
                r
                    ? (0, a.jsxs)('div', {
                          className: y.error,
                          children: [
                              (0, a.jsx)(h.StickerSadIcon, {
                                  size: 'custom',
                                  width: 20,
                                  height: 20,
                                  color: 'currentColor',
                                  className: y.errorIcon
                              }),
                              c &&
                                  (0, a.jsx)(h.Text, {
                                      className: y.errorText,
                                      color: 'header-secondary',
                                      variant: 'text-sm/normal',
                                      children: b.intl.string(b.t.tWYWJy)
                                  })
                          ]
                      })
                    : n,
                u && i && (0, a.jsx)('div', { className: y.loadingIndicator })
            ]
        });
    },
    w = (e) => {
        let { shouldAnimate: n, size: i, sticker: o, fileUri: l, assetData: u, isFocused: d, className: f, maskAsset: _, positionRef: h, withLoadingIndicator: p, onError: g } = e,
            E = s.useRef(null),
            v = s.useRef(null),
            [I, S] = s.useState(!0),
            [A, N] = s.useState(!1),
            C = s.useRef(!1);
        C.current = n && d;
        let R = null == l ? (0, T.Q6)(o) : l;
        return (c()(null != R, 'Unable to determine sticker asset URL. Sticker ID: '.concat(o.id)),
        s.useEffect(() => {
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
                            animationId: o.id,
                            assetUrl: R,
                            assetData: u,
                            onInitialDraw: () => {
                                !n && S(!1);
                            },
                            onError: () => {
                                !n && (S(!1), N(!0), null == g || g());
                            }
                        })),
                        C.current && v.current.setState(!0));
                })(),
                () => {
                    var e;
                    null === (e = v.current) || void 0 === e || e.drop(), (v.current = null), (n = !0);
                }
            );
        }, [R, i, o.id, u, g]),
        s.useEffect(() => {
            var e;
            let r;
            !n && (r = 0), null === (e = v.current) || void 0 === e || e.setState(n && d, r);
        }, [o, n, d]),
        null == R)
            ? null
            : (0, a.jsx)('div', {
                  role: 'img',
                  className: f,
                  'aria-label': A ? b.intl.string(b.t.yEvsKy) : L(o),
                  ref: h,
                  children: (0, a.jsx)(x, {
                      hasError: A,
                      isLoading: I,
                      maskAsset: _,
                      size: i,
                      withLoadingIndicator: p,
                      children: D(
                          (0, a.jsx)('canvas', {
                              className: y.lottieCanvas,
                              ref: E
                          }),
                          o.id
                      )
                  })
              });
    },
    P = (e) => {
        let { shouldAnimate: n, sticker: r, isFocused: i, size: o, className: u, maskAsset: c, positionRef: d, withLoadingIndicator: f, fileUri: h } = e,
            [p, m] = s.useState(!1),
            [g, E] = s.useState(!0),
            [v, I] = s.useState(!1),
            b = s.useRef(null),
            N = s.useRef(null),
            C =
                null != h
                    ? h
                    : (0, T.Q6)(r, {
                          isPreview: !n || !p || !i,
                          size: o
                      }),
            R = s.useCallback(() => {
                E(!1);
            }, []),
            O = s.useCallback(() => {
                I(!0);
            }, []);
        return (s.useEffect(() => {
            if (null != b.current) {
                let { isVisible: e } = b.current;
                m(e);
            }
        }, []),
        s.useLayoutEffect(() => {
            var e;
            (null === (e = N.current) || void 0 === e ? void 0 : e.complete) === !0 && E(!1);
        }, []),
        null == C)
            ? null
            : (0, a.jsx)(_.$, {
                  ref: b,
                  onChange: m,
                  threshold: A,
                  children: (0, a.jsx)('div', {
                      className: l()(u, y.__invalid_pngImageWrapper),
                      ref: d,
                      children: (0, a.jsx)(x, {
                          hasError: v,
                          isLoading: g,
                          maskAsset: c,
                          size: o,
                          withLoadingIndicator: f,
                          children: D(
                              (0, a.jsx)('img', {
                                  className: y.pngImage,
                                  alt: L(r),
                                  src: C,
                                  draggable: !1,
                                  onError: O,
                                  onLoad: R,
                                  onContextMenu: S,
                                  ref: N
                              }),
                              r.id
                          )
                      })
                  })
              });
    },
    M = (e) => {
        let { disableAnimation: n, enlargeScaleFactor: r, enlargeWithName: i, isInteracting: o, positionRef: l, size: u, sticker: c } = e,
            _ = (0, f.e7)([p.Z], () => p.Z.useReducedMotion),
            m = s.useRef(null),
            E = {
                transform: 'scale('.concat(_ ? 1 : 1 / r, ')'),
                opacity: 0
            },
            v = (0, h.useTransition)(o, {
                ref: m,
                from: E,
                enter: {
                    transform: 'scale(1)',
                    opacity: 1
                },
                leave: E,
                config: R
            }),
            I = s.useRef(null),
            T = (0, h.useSpring)(
                {
                    ref: I,
                    transform: o || _ ? 'translateY(0)' : 'translateY(-25px)',
                    opacity: o ? 1 : 0,
                    config: O
                },
                'animate-always'
            );
        return (
            (0, d.useChain)(o ? [m, I] : [I, m], o ? [0, 0.0625] : [0, 0]),
            v(
                (e, s) =>
                    s &&
                    (0, a.jsx)(g.W5, {
                        className: y.positionedLayer,
                        fixed: !0,
                        align: 'center',
                        position: 'center',
                        targetRef: l,
                        children: () =>
                            (0, a.jsxs)('div', {
                                className: y.overlayWrapper,
                                children: [
                                    (0, a.jsx)(d.animated.div, {
                                        className: y.overlayStickerWrapper,
                                        style: e,
                                        children: (0, a.jsx)(k, {
                                            className: y.__invalid_overlaySticker,
                                            disableAnimation: n,
                                            enlargeOnInteraction: !1,
                                            isInteracting: o,
                                            maskAsset: !1,
                                            sticker: c,
                                            size: Math.round(u * r),
                                            withLoadingIndicator: !1
                                        })
                                    }),
                                    i &&
                                        (0, a.jsx)(d.animated.div, {
                                            className: y.overlayLabelWrapper,
                                            style: T,
                                            children: (0, a.jsx)(h.Text, {
                                                variant: 'text-sm/medium',
                                                className: y.overlayLabel,
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
        let { isInteracting: n = !1, disableAnimation: r = !1, enlargeOnInteraction: i = !1, enlargeWithName: o = !0, enlargeScaleFactor: l = C, maskAsset: u = !1, size: c, sticker: d, className: f, withLoadingIndicator: _, assetData: h, fileUri: p, onError: m } = e,
            g = (0, E.n)(),
            T = (0, v.t$)(n) && !r,
            b = s.useRef(null);
        if (null == d) return null;
        let y = d.format_type === I.u3.LOTTIE ? w : P;
        return (0, a.jsxs)(
            s.Fragment,
            {
                children: [
                    (0, a.jsx)(y, {
                        shouldAnimate: T,
                        isFocused: g,
                        size: c,
                        sticker: d,
                        className: f,
                        maskAsset: u,
                        positionRef: b,
                        withLoadingIndicator: _,
                        assetData: h,
                        fileUri: p,
                        onError: m
                    }),
                    i &&
                        (0, a.jsx)(M, {
                            disableAnimation: r,
                            enlargeScaleFactor: l,
                            enlargeWithName: o,
                            isInteracting: n,
                            positionRef: b,
                            size: c,
                            sticker: d
                        })
                ]
            },
            ''.concat(d.id, ',').concat(c)
        );
    };
n.ZP = k;
