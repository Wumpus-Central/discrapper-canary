n.d(t, {
    A: () => j,
    h: () => R,
}),
    n(228524),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(284009),
    l = n.n(o),
    c = n(108531),
    u = n(311907),
    d = n(230109),
    f = n(397927),
    p = n(775602),
    _ = n(776231),
    h = n(750506),
    m = n(218394),
    g = n(256449),
    E = n(842086),
    b = n(378058),
    y = n(985018),
    O = n(259843);
let A = (e) => e.preventDefault(),
    v = 0.7,
    S = 33,
    I = 1.55,
    T = {
        tension: 1100,
        friction: 40,
    },
    C = {
        tension: 1600,
        friction: 60,
    };

function N(e, t) {
    return i.cloneElement(e, {
        "data-type": "sticker",
        "data-id": t.id,
        "data-name": t.name,
        "data-format-type": t.format_type,
    });
}

function R(e) {
    let t = "description" in e && null != e.description ? "".concat(e.name, ", ").concat(e.description) : e.name;
    return y.intl.formatToPlainString(y.t.rk6pOw, {
        stickerName: t,
    });
}
let w = (e) => {
        let { children: t, hasError: n, isLoading: i, maskAsset: a, size: o, withLoadingIndicator: l = !0 } = e,
            c = o >= S;
        return (0, r.jsxs)("div", {
            className: s()(O.c6, {
                [O.v2]: n || a,
            }),
            style: {
                height: o,
                width: o,
            },
            children: [
                n
                    ? (0, r.jsxs)("div", {
                          className: O.z3,
                          children: [
                              (0, r.jsx)(f.d4M, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                                  className: O.ik,
                              }),
                              c &&
                                  (0, r.jsx)(f.Text, {
                                      className: O.kc,
                                      color: "text-default",
                                      variant: "text-sm/normal",
                                      children: y.intl.string(y.t["tWYWJ+"]),
                                  }),
                          ],
                      })
                    : t,
                l &&
                    i &&
                    (0, r.jsx)("div", {
                        className: O.Mz,
                    }),
            ],
        });
    },
    P = (e) => {
        let {
                shouldAnimate: t,
                size: a,
                sticker: s,
                fileUri: o,
                assetData: c,
                isFocused: u,
                className: d,
                maskAsset: f,
                positionRef: p,
                withLoadingIndicator: h,
                onError: m,
            } = e,
            g = i.useRef(null),
            E = i.useRef(null),
            [A, v] = i.useState(!0),
            [S, I] = i.useState(!1),
            T = i.useRef(!1);
        T.current = t && u;
        let C = null == o ? (0, b.zg)(s) : o;
        return (l()(null != C, "Unable to determine sticker asset URL. Sticker ID: ".concat(s.id)),
        i.useEffect(() => {
            if (null == g.current || null == C) return;
            let e = Math.min(2, (0, _.mZ)());
            (g.current.width = a * e), (g.current.height = a * e);
            let t = !1;
            return (
                (async () => {
                    let { default: e } = await n.e("9330").then(n.bind(n, 140521));
                    null != g.current &&
                        ((E.current = new e({
                            canvas: g.current,
                            animationId: s.id,
                            assetUrl: C,
                            assetData: c,
                            onInitialDraw: () => {
                                t || v(!1);
                            },
                            onError: () => {
                                t || (v(!1), I(!0), null == m || m());
                            },
                        })),
                        T.current && E.current.setState(!0));
                })(),
                () => {
                    var e;
                    null == (e = E.current) || e.drop(), (E.current = null), (t = !0);
                }
            );
        }, [C, a, s.id, c, m]),
        i.useEffect(() => {
            var e;
            let n;
            t || (n = 0), null == (e = E.current) || e.setState(t && u, n);
        }, [s, t, u]),
        null == C)
            ? null
            : (0, r.jsx)("div", {
                  role: "img",
                  className: d,
                  "aria-label": S ? y.intl.string(y.t.yEvsK9) : R(s),
                  ref: p,
                  children: (0, r.jsx)(w, {
                      hasError: S,
                      isLoading: A,
                      maskAsset: f,
                      size: a,
                      withLoadingIndicator: h,
                      children: N(
                          (0, r.jsx)("canvas", {
                              className: O.ex,
                              ref: g,
                          }),
                          s,
                      ),
                  }),
              });
    },
    D = (e) => {
        let {
                shouldAnimate: t,
                sticker: n,
                isFocused: a,
                size: o,
                className: l,
                maskAsset: c,
                positionRef: u,
                withLoadingIndicator: f,
                fileUri: p,
            } = e,
            [_, h] = i.useState(!1),
            [m, g] = i.useState(!0),
            [E, y] = i.useState(!1),
            S = i.useRef(null),
            I = i.useRef(null),
            T =
                null != p
                    ? p
                    : (0, b.zg)(n, {
                          isPreview: !t || !_ || !a,
                          size: o,
                      }),
            C = i.useCallback(() => {
                g(!1);
            }, []),
            P = i.useCallback(() => {
                y(!0);
            }, []);
        return (i.useEffect(() => {
            if (null != S.current) {
                let { isVisible: e } = S.current;
                h(e);
            }
        }, []),
        i.useLayoutEffect(() => {
            var e;
            (null == (e = I.current) ? void 0 : e.complete) === !0 && g(!1);
        }, []),
        null == T)
            ? null
            : (0, r.jsx)(d.L, {
                  innerRef: u,
                  ref: S,
                  onChange: h,
                  threshold: v,
                  children: (0, r.jsx)("div", {
                      className: s()(l, O.__invalid_pngImageWrapper),
                      ref: u,
                      children: (0, r.jsx)(w, {
                          hasError: E,
                          isLoading: m,
                          maskAsset: c,
                          size: o,
                          withLoadingIndicator: f,
                          children: N(
                              (0, r.jsx)("img", {
                                  className: O.r3,
                                  alt: R(n),
                                  src: T,
                                  draggable: !1,
                                  onError: P,
                                  onLoad: C,
                                  onContextMenu: A,
                                  ref: I,
                              }),
                              n,
                          ),
                      }),
                  }),
              });
    },
    x = (e) => {
        let {
                disableAnimation: t,
                enlargeScaleFactor: n,
                enlargeWithName: a,
                isInteracting: s,
                positionRef: o,
                size: l,
                sticker: d,
            } = e,
            _ = (0, u.bG)([p.A], () => p.A.useReducedMotion),
            m = i.useRef(null),
            g = {
                transform: "scale(".concat(_ ? 1 : 1 / n, ")"),
                opacity: 0,
            },
            E = (0, f.pnh)(s, {
                ref: m,
                from: g,
                enter: {
                    transform: "scale(1)",
                    opacity: 1,
                },
                leave: g,
                config: T,
            }),
            b = i.useRef(null),
            y = (0, f.zhh)(
                {
                    ref: b,
                    transform: s || _ ? "translateY(0)" : "translateY(-25px)",
                    opacity: +!!s,
                    config: C,
                },
                "animate-always",
            );
        return (
            (0, c.useChain)(s ? [m, b] : [b, m], s ? [0, 0.0625] : [0, 0]),
            E(
                (e, i) =>
                    i &&
                    (0, r.jsx)(h.nE, {
                        className: O.O2,
                        fixed: !0,
                        align: "center",
                        position: "center",
                        targetRef: o,
                        children: () =>
                            (0, r.jsxs)("div", {
                                className: O._7,
                                children: [
                                    (0, r.jsx)(c.animated.div, {
                                        className: O.tm,
                                        style: e,
                                        children: (0, r.jsx)(L, {
                                            className: O.__invalid_overlaySticker,
                                            disableAnimation: t,
                                            enlargeOnInteraction: !1,
                                            isInteracting: s,
                                            maskAsset: !1,
                                            sticker: d,
                                            size: Math.round(l * n),
                                            withLoadingIndicator: !1,
                                        }),
                                    }),
                                    a &&
                                        (0, r.jsx)(c.animated.div, {
                                            className: O.av,
                                            style: y,
                                            children: (0, r.jsx)(f.Text, {
                                                variant: "text-sm/medium",
                                                className: O.FZ,
                                                children: d.name,
                                            }),
                                        }),
                                ],
                            }),
                    }),
            )
        );
    },
    L = (e) => {
        let {
                isInteracting: t = !1,
                disableAnimation: n = !1,
                enlargeOnInteraction: a = !1,
                enlargeWithName: s = !0,
                enlargeScaleFactor: o = I,
                maskAsset: l = !1,
                size: c,
                sticker: u,
                className: d,
                withLoadingIndicator: f,
                assetData: p,
                fileUri: _,
                onError: h,
            } = e,
            b = (0, m.j)(),
            y = (0, g.Th)(t) && !n,
            O = i.useRef(null);
        if (null == u) return null;
        let A = u.format_type === E.TG.LOTTIE ? P : D;
        return (0, r.jsxs)(
            i.Fragment,
            {
                children: [
                    (0, r.jsx)(A, {
                        shouldAnimate: y,
                        isFocused: b,
                        size: c,
                        sticker: u,
                        className: d,
                        maskAsset: l,
                        positionRef: O,
                        withLoadingIndicator: f,
                        assetData: p,
                        fileUri: _,
                        onError: h,
                    }),
                    a &&
                        (0, r.jsx)(x, {
                            disableAnimation: n,
                            enlargeScaleFactor: o,
                            enlargeWithName: s,
                            isInteracting: t,
                            positionRef: O,
                            size: c,
                            sticker: u,
                        }),
                ],
            },
            "".concat(u.id, ",").concat(c),
        );
    },
    j = L;
