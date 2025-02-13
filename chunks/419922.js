n.d(t, {
    Co: () => O,
    ZP: () => M
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(512722),
    l = n.n(o),
    u = n(642128),
    c = n(442837),
    d = n(622535),
    f = n(481060),
    _ = n(607070),
    p = n(134432),
    h = n(314910),
    m = n(506071),
    g = n(453070),
    E = n(373228),
    v = n(378233),
    y = n(388032),
    I = n(236269);
let T = (e) => e.preventDefault(),
    b = 0.7,
    S = 33,
    A = 1.55,
    N = {
        tension: 1100,
        friction: 40
    },
    C = {
        tension: 1600,
        friction: 60
    };
function R(e, t) {
    return r.cloneElement(e, {
        'data-type': 'sticker',
        'data-id': t
    });
}
function O(e) {
    let t = 'description' in e && null != e.description ? ''.concat(e.name, ', ').concat(e.description) : e.name;
    return y.intl.formatToPlainString(y.t.rk6pOz, { stickerName: t });
}
let D = (e) => {
        let { children: t, hasError: n, isLoading: r, maskAsset: a, size: o, withLoadingIndicator: l = !0 } = e,
            u = o >= S;
        return (0, i.jsxs)('div', {
            className: s()(I.assetWrapper, { [I.assetWrapperMasked]: n || a }),
            style: {
                height: o,
                width: o
            },
            children: [
                n
                    ? (0, i.jsxs)('div', {
                          className: I.error,
                          children: [
                              (0, i.jsx)(f.r8p, {
                                  size: 'custom',
                                  width: 20,
                                  height: 20,
                                  color: 'currentColor',
                                  className: I.errorIcon
                              }),
                              u &&
                                  (0, i.jsx)(f.Text, {
                                      className: I.errorText,
                                      color: 'header-secondary',
                                      variant: 'text-sm/normal',
                                      children: y.intl.string(y.t.tWYWJy)
                                  })
                          ]
                      })
                    : t,
                l && r && (0, i.jsx)('div', { className: I.loadingIndicator })
            ]
        });
    },
    L = (e) => {
        let { shouldAnimate: t, size: a, sticker: s, fileUri: o, assetData: u, isFocused: c, className: d, maskAsset: f, positionRef: _, withLoadingIndicator: h, onError: m } = e,
            g = r.useRef(null),
            E = r.useRef(null),
            [T, b] = r.useState(!0),
            [S, A] = r.useState(!1),
            N = r.useRef(!1);
        N.current = t && c;
        let C = null == o ? (0, v.Q6)(s) : o;
        return (l()(null != C, 'Unable to determine sticker asset URL. Sticker ID: '.concat(s.id)),
        r.useEffect(() => {
            if (null == g.current || null == C) return;
            let e = Math.min(2, (0, p.x_)());
            (g.current.width = a * e), (g.current.height = a * e);
            let t = !1;
            return (
                (async () => {
                    let { default: e } = await n.e('21617').then(n.bind(n, 186952));
                    null != g.current &&
                        ((E.current = new e({
                            canvas: g.current,
                            animationId: s.id,
                            assetUrl: C,
                            assetData: u,
                            onInitialDraw: () => {
                                t || b(!1);
                            },
                            onError: () => {
                                t || (b(!1), A(!0), null == m || m());
                            }
                        })),
                        N.current && E.current.setState(!0));
                })(),
                () => {
                    var e;
                    null === (e = E.current) || void 0 === e || e.drop(), (E.current = null), (t = !0);
                }
            );
        }, [C, a, s.id, u, m]),
        r.useEffect(() => {
            var e;
            let n;
            t || (n = 0), null === (e = E.current) || void 0 === e || e.setState(t && c, n);
        }, [s, t, c]),
        null == C)
            ? null
            : (0, i.jsx)('div', {
                  role: 'img',
                  className: d,
                  'aria-label': S ? y.intl.string(y.t.yEvsKy) : O(s),
                  ref: _,
                  children: (0, i.jsx)(D, {
                      hasError: S,
                      isLoading: T,
                      maskAsset: f,
                      size: a,
                      withLoadingIndicator: h,
                      children: R(
                          (0, i.jsx)('canvas', {
                              className: I.lottieCanvas,
                              ref: g
                          }),
                          s.id
                      )
                  })
              });
    },
    x = (e) => {
        let { shouldAnimate: t, sticker: n, isFocused: a, size: o, className: l, maskAsset: u, positionRef: c, withLoadingIndicator: f, fileUri: _ } = e,
            [p, h] = r.useState(!1),
            [m, g] = r.useState(!0),
            [E, y] = r.useState(!1),
            S = r.useRef(null),
            A = r.useRef(null),
            N =
                null != _
                    ? _
                    : (0, v.Q6)(n, {
                          isPreview: !t || !p || !a,
                          size: o
                      }),
            C = r.useCallback(() => {
                g(!1);
            }, []),
            L = r.useCallback(() => {
                y(!0);
            }, []);
        return (r.useEffect(() => {
            if (null != S.current) {
                let { isVisible: e } = S.current;
                h(e);
            }
        }, []),
        r.useLayoutEffect(() => {
            var e;
            (null === (e = A.current) || void 0 === e ? void 0 : e.complete) === !0 && g(!1);
        }, []),
        null == N)
            ? null
            : (0, i.jsx)(d.$, {
                  ref: S,
                  onChange: h,
                  threshold: b,
                  children: (0, i.jsx)('div', {
                      className: s()(l, I.__invalid_pngImageWrapper),
                      ref: c,
                      children: (0, i.jsx)(D, {
                          hasError: E,
                          isLoading: m,
                          maskAsset: u,
                          size: o,
                          withLoadingIndicator: f,
                          children: R(
                              (0, i.jsx)('img', {
                                  className: I.pngImage,
                                  alt: O(n),
                                  src: N,
                                  draggable: !1,
                                  onError: L,
                                  onLoad: C,
                                  onContextMenu: T,
                                  ref: A
                              }),
                              n.id
                          )
                      })
                  })
              });
    },
    P = (e) => {
        let { disableAnimation: t, enlargeScaleFactor: n, enlargeWithName: a, isInteracting: s, positionRef: o, size: l, sticker: d } = e,
            p = (0, c.e7)([_.Z], () => _.Z.useReducedMotion),
            m = r.useRef(null),
            g = {
                transform: 'scale('.concat(p ? 1 : 1 / n, ')'),
                opacity: 0
            },
            E = (0, f.Yzy)(s, {
                ref: m,
                from: g,
                enter: {
                    transform: 'scale(1)',
                    opacity: 1
                },
                leave: g,
                config: N
            }),
            v = r.useRef(null),
            y = (0, f.q_F)(
                {
                    ref: v,
                    transform: s || p ? 'translateY(0)' : 'translateY(-25px)',
                    opacity: s ? 1 : 0,
                    config: C
                },
                'animate-always'
            );
        return (
            (0, u.useChain)(s ? [m, v] : [v, m], s ? [0, 0.0625] : [0, 0]),
            E(
                (e, r) =>
                    r &&
                    (0, i.jsx)(h.W5, {
                        className: I.positionedLayer,
                        fixed: !0,
                        align: 'center',
                        position: 'center',
                        targetRef: o,
                        children: () =>
                            (0, i.jsxs)('div', {
                                className: I.overlayWrapper,
                                children: [
                                    (0, i.jsx)(u.animated.div, {
                                        className: I.overlayStickerWrapper,
                                        style: e,
                                        children: (0, i.jsx)(w, {
                                            className: I.__invalid_overlaySticker,
                                            disableAnimation: t,
                                            enlargeOnInteraction: !1,
                                            isInteracting: s,
                                            maskAsset: !1,
                                            sticker: d,
                                            size: Math.round(l * n),
                                            withLoadingIndicator: !1
                                        })
                                    }),
                                    a &&
                                        (0, i.jsx)(u.animated.div, {
                                            className: I.overlayLabelWrapper,
                                            style: y,
                                            children: (0, i.jsx)(f.Text, {
                                                variant: 'text-sm/medium',
                                                className: I.overlayLabel,
                                                children: d.name
                                            })
                                        })
                                ]
                            })
                    })
            )
        );
    },
    w = (e) => {
        let { isInteracting: t = !1, disableAnimation: n = !1, enlargeOnInteraction: a = !1, enlargeWithName: s = !0, enlargeScaleFactor: o = A, maskAsset: l = !1, size: u, sticker: c, className: d, withLoadingIndicator: f, assetData: _, fileUri: p, onError: h } = e,
            v = (0, m.n)(),
            y = (0, g.t$)(t) && !n,
            I = r.useRef(null);
        if (null == c) return null;
        let T = c.format_type === E.u3.LOTTIE ? L : x;
        return (0, i.jsxs)(
            r.Fragment,
            {
                children: [
                    (0, i.jsx)(T, {
                        shouldAnimate: y,
                        isFocused: v,
                        size: u,
                        sticker: c,
                        className: d,
                        maskAsset: l,
                        positionRef: I,
                        withLoadingIndicator: f,
                        assetData: _,
                        fileUri: p,
                        onError: h
                    }),
                    a &&
                        (0, i.jsx)(P, {
                            disableAnimation: n,
                            enlargeScaleFactor: o,
                            enlargeWithName: s,
                            isInteracting: t,
                            positionRef: I,
                            size: u,
                            sticker: c
                        })
                ]
            },
            ''.concat(c.id, ',').concat(u)
        );
    },
    M = w;
