n.d(t, {
    Co: () => R,
    ZP: () => M
}),
    n(266796),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(512722),
    l = n.n(s),
    c = n(642128),
    u = n(442837),
    d = n(622535),
    f = n(481060),
    p = n(607070),
    _ = n(134432),
    h = n(314910),
    m = n(506071),
    g = n(453070),
    E = n(373228),
    v = n(378233),
    b = n(388032),
    y = n(820961);
let O = (e) => e.preventDefault(),
    S = 0.7,
    I = 33,
    T = 1.55,
    N = {
        tension: 1100,
        friction: 40
    },
    A = {
        tension: 1600,
        friction: 60
    };
function C(e, t) {
    return i.cloneElement(e, {
        'data-type': 'sticker',
        'data-id': t
    });
}
function R(e) {
    let t = 'description' in e && null != e.description ? ''.concat(e.name, ', ').concat(e.description) : e.name;
    return b.NW.formatToPlainString(b.t.rk6pOz, { stickerName: t });
}
let P = (e) => {
        let { children: t, hasError: n, isLoading: i, maskAsset: o, size: s, withLoadingIndicator: l = !0 } = e,
            c = s >= I;
        return (0, r.jsxs)('div', {
            className: a()(y.assetWrapper, { [y.assetWrapperMasked]: n || o }),
            style: {
                height: s,
                width: s
            },
            children: [
                n
                    ? (0, r.jsxs)('div', {
                          className: y.error,
                          children: [
                              (0, r.jsx)(f.r8p, {
                                  size: 'custom',
                                  width: 20,
                                  height: 20,
                                  color: 'currentColor',
                                  className: y.errorIcon
                              }),
                              c &&
                                  (0, r.jsx)(f.Text, {
                                      className: y.errorText,
                                      color: 'header-secondary',
                                      variant: 'text-sm/normal',
                                      children: b.NW.string(b.t.tWYWJy)
                                  })
                          ]
                      })
                    : t,
                l && i && (0, r.jsx)('div', { className: y.loadingIndicator })
            ]
        });
    },
    w = (e) => {
        let { shouldAnimate: t, size: o, sticker: a, fileUri: s, assetData: c, isFocused: u, className: d, maskAsset: f, positionRef: p, withLoadingIndicator: h, onError: m } = e,
            g = i.useRef(null),
            E = i.useRef(null),
            [O, S] = i.useState(!0),
            [I, T] = i.useState(!1),
            N = i.useRef(!1);
        N.current = t && u;
        let A = null == s ? (0, v.Q6)(a) : s;
        return (l()(null != A, 'Unable to determine sticker asset URL. Sticker ID: '.concat(a.id)),
        i.useEffect(() => {
            if (null == g.current || null == A) return;
            let e = Math.min(2, (0, _.x_)());
            (g.current.width = o * e), (g.current.height = o * e);
            let t = !1;
            return (
                (async () => {
                    let { default: e } = await n.e('21617').then(n.bind(n, 186952));
                    null != g.current &&
                        ((E.current = new e({
                            canvas: g.current,
                            animationId: a.id,
                            assetUrl: A,
                            assetData: c,
                            onInitialDraw: () => {
                                t || S(!1);
                            },
                            onError: () => {
                                t || (S(!1), T(!0), null == m || m());
                            }
                        })),
                        N.current && E.current.setState(!0));
                })(),
                () => {
                    var e;
                    null === (e = E.current) || void 0 === e || e.drop(), (E.current = null), (t = !0);
                }
            );
        }, [A, o, a.id, c, m]),
        i.useEffect(() => {
            var e;
            let n;
            t || (n = 0), null === (e = E.current) || void 0 === e || e.setState(t && u, n);
        }, [a, t, u]),
        null == A)
            ? null
            : (0, r.jsx)('div', {
                  role: 'img',
                  className: d,
                  'aria-label': I ? b.NW.string(b.t.yEvsKy) : R(a),
                  ref: p,
                  children: (0, r.jsx)(P, {
                      hasError: I,
                      isLoading: O,
                      maskAsset: f,
                      size: o,
                      withLoadingIndicator: h,
                      children: C(
                          (0, r.jsx)('canvas', {
                              className: y.lottieCanvas,
                              ref: g
                          }),
                          a.id
                      )
                  })
              });
    },
    D = (e) => {
        let { shouldAnimate: t, sticker: n, isFocused: o, size: s, className: l, maskAsset: c, positionRef: u, withLoadingIndicator: f, fileUri: p } = e,
            [_, h] = i.useState(!1),
            [m, g] = i.useState(!0),
            [E, b] = i.useState(!1),
            I = i.useRef(null),
            T = i.useRef(null),
            N =
                null != p
                    ? p
                    : (0, v.Q6)(n, {
                          isPreview: !t || !_ || !o,
                          size: s
                      }),
            A = i.useCallback(() => {
                g(!1);
            }, []),
            w = i.useCallback(() => {
                b(!0);
            }, []);
        return (i.useEffect(() => {
            if (null != I.current) {
                let { isVisible: e } = I.current;
                h(e);
            }
        }, []),
        i.useLayoutEffect(() => {
            var e;
            (null === (e = T.current) || void 0 === e ? void 0 : e.complete) === !0 && g(!1);
        }, []),
        null == N)
            ? null
            : (0, r.jsx)(d.$, {
                  ref: I,
                  onChange: h,
                  threshold: S,
                  children: (0, r.jsx)('div', {
                      className: a()(l, y.__invalid_pngImageWrapper),
                      ref: u,
                      children: (0, r.jsx)(P, {
                          hasError: E,
                          isLoading: m,
                          maskAsset: c,
                          size: s,
                          withLoadingIndicator: f,
                          children: C(
                              (0, r.jsx)('img', {
                                  className: y.pngImage,
                                  alt: R(n),
                                  src: N,
                                  draggable: !1,
                                  onError: w,
                                  onLoad: A,
                                  onContextMenu: O,
                                  ref: T
                              }),
                              n.id
                          )
                      })
                  })
              });
    },
    x = (e) => {
        let { disableAnimation: t, enlargeScaleFactor: n, enlargeWithName: o, isInteracting: a, positionRef: s, size: l, sticker: d } = e,
            _ = (0, u.e7)([p.Z], () => p.Z.useReducedMotion),
            m = i.useRef(null),
            g = {
                transform: 'scale('.concat(_ ? 1 : 1 / n, ')'),
                opacity: 0
            },
            E = (0, f.Yzy)(a, {
                ref: m,
                from: g,
                enter: {
                    transform: 'scale(1)',
                    opacity: 1
                },
                leave: g,
                config: N
            }),
            v = i.useRef(null),
            b = (0, f.q_F)(
                {
                    ref: v,
                    transform: a || _ ? 'translateY(0)' : 'translateY(-25px)',
                    opacity: +!!a,
                    config: A
                },
                'animate-always'
            );
        return (
            (0, c.useChain)(a ? [m, v] : [v, m], a ? [0, 0.0625] : [0, 0]),
            E(
                (e, i) =>
                    i &&
                    (0, r.jsx)(h.W5, {
                        className: y.positionedLayer,
                        fixed: !0,
                        align: 'center',
                        position: 'center',
                        targetRef: s,
                        children: () =>
                            (0, r.jsxs)('div', {
                                className: y.overlayWrapper,
                                children: [
                                    (0, r.jsx)(c.animated.div, {
                                        className: y.overlayStickerWrapper,
                                        style: e,
                                        children: (0, r.jsx)(L, {
                                            className: y.__invalid_overlaySticker,
                                            disableAnimation: t,
                                            enlargeOnInteraction: !1,
                                            isInteracting: a,
                                            maskAsset: !1,
                                            sticker: d,
                                            size: Math.round(l * n),
                                            withLoadingIndicator: !1
                                        })
                                    }),
                                    o &&
                                        (0, r.jsx)(c.animated.div, {
                                            className: y.overlayLabelWrapper,
                                            style: b,
                                            children: (0, r.jsx)(f.Text, {
                                                variant: 'text-sm/medium',
                                                className: y.overlayLabel,
                                                children: d.name
                                            })
                                        })
                                ]
                            })
                    })
            )
        );
    },
    L = (e) => {
        let { isInteracting: t = !1, disableAnimation: n = !1, enlargeOnInteraction: o = !1, enlargeWithName: a = !0, enlargeScaleFactor: s = T, maskAsset: l = !1, size: c, sticker: u, className: d, withLoadingIndicator: f, assetData: p, fileUri: _, onError: h } = e,
            v = (0, m.n)(),
            b = (0, g.t$)(t) && !n,
            y = i.useRef(null);
        if (null == u) return null;
        let O = u.format_type === E.u3.LOTTIE ? w : D;
        return (0, r.jsxs)(
            i.Fragment,
            {
                children: [
                    (0, r.jsx)(O, {
                        shouldAnimate: b,
                        isFocused: v,
                        size: c,
                        sticker: u,
                        className: d,
                        maskAsset: l,
                        positionRef: y,
                        withLoadingIndicator: f,
                        assetData: p,
                        fileUri: _,
                        onError: h
                    }),
                    o &&
                        (0, r.jsx)(x, {
                            disableAnimation: n,
                            enlargeScaleFactor: s,
                            enlargeWithName: a,
                            isInteracting: t,
                            positionRef: y,
                            size: c,
                            sticker: u
                        })
                ]
            },
            ''.concat(u.id, ',').concat(c)
        );
    },
    M = L;
