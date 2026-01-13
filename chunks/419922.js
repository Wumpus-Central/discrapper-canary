n.d(t, {
    C: () => P,
    Z: () => j,
}),
    n(953529),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(512722),
    l = n.n(s),
    c = n(620389),
    u = n(442837),
    d = n(622535),
    f = n(481060),
    p = n(607070),
    _ = n(134432),
    m = n(314910),
    h = n(506071),
    g = n(453070),
    E = n(373228),
    b = n(378233),
    y = n(388032),
    O = n(431618);
let v = (e) => e.preventDefault(),
    S = 0.7,
    I = 33,
    T = 1.55,
    C = {
        tension: 1100,
        friction: 40,
    },
    A = {
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
function P(e) {
    let t = "description" in e && null != e.description ? "".concat(e.name, ", ").concat(e.description) : e.name;
    return y.intl.formatToPlainString(y.t.rk6pOw, { stickerName: t });
}
let R = (e) => {
        let { children: t, hasError: n, isLoading: i, maskAsset: a, size: s, withLoadingIndicator: l = !0 } = e,
            c = s >= I;
        return (0, r.jsxs)("div", {
            className: o()(O.assetWrapper, { [O.assetWrapperMasked]: n || a }),
            style: {
                height: s,
                width: s,
            },
            children: [
                n
                    ? (0, r.jsxs)("div", {
                          className: O.error,
                          children: [
                              (0, r.jsx)(f.r8p, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                                  className: O.errorIcon,
                              }),
                              c &&
                                  (0, r.jsx)(f.Text, {
                                      className: O.errorText,
                                      color: "text-default",
                                      variant: "text-sm/normal",
                                      children: y.intl.string(y.t["tWYWJ+"]),
                                  }),
                          ],
                      })
                    : t,
                l && i && (0, r.jsx)("div", { className: O.loadingIndicator }),
            ],
        });
    },
    w = (e) => {
        let {
                shouldAnimate: t,
                size: a,
                sticker: o,
                fileUri: s,
                assetData: c,
                isFocused: u,
                className: d,
                maskAsset: f,
                positionRef: p,
                withLoadingIndicator: m,
                onError: h,
            } = e,
            g = i.useRef(null),
            E = i.useRef(null),
            [v, S] = i.useState(!0),
            [I, T] = i.useState(!1),
            C = i.useRef(!1);
        C.current = t && u;
        let A = null == s ? (0, b.Q6)(o) : s;
        return (l()(null != A, "Unable to determine sticker asset URL. Sticker ID: ".concat(o.id)),
        i.useEffect(() => {
            if (null == g.current || null == A) return;
            let e = Math.min(2, (0, _.x_)());
            (g.current.width = a * e), (g.current.height = a * e);
            let t = !1;
            return (
                (async () => {
                    let { default: e } = await n.e("21617").then(n.bind(n, 186952));
                    null != g.current &&
                        ((E.current = new e({
                            canvas: g.current,
                            animationId: o.id,
                            assetUrl: A,
                            assetData: c,
                            onInitialDraw: () => {
                                t || S(!1);
                            },
                            onError: () => {
                                t || (S(!1), T(!0), null == h || h());
                            },
                        })),
                        C.current && E.current.setState(!0));
                })(),
                () => {
                    var e;
                    null == (e = E.current) || e.drop(), (E.current = null), (t = !0);
                }
            );
        }, [A, a, o.id, c, h]),
        i.useEffect(() => {
            var e;
            let n;
            t || (n = 0), null == (e = E.current) || e.setState(t && u, n);
        }, [o, t, u]),
        null == A)
            ? null
            : (0, r.jsx)("div", {
                  role: "img",
                  className: d,
                  "aria-label": I ? y.intl.string(y.t.yEvsK9) : P(o),
                  ref: p,
                  children: (0, r.jsx)(R, {
                      hasError: I,
                      isLoading: v,
                      maskAsset: f,
                      size: a,
                      withLoadingIndicator: m,
                      children: N(
                          (0, r.jsx)("canvas", {
                              className: O.lottieCanvas,
                              ref: g,
                          }),
                          o,
                      ),
                  }),
              });
    },
    D = (e) => {
        let {
                shouldAnimate: t,
                sticker: n,
                isFocused: a,
                size: s,
                className: l,
                maskAsset: c,
                positionRef: u,
                withLoadingIndicator: f,
                fileUri: p,
            } = e,
            [_, m] = i.useState(!1),
            [h, g] = i.useState(!0),
            [E, y] = i.useState(!1),
            I = i.useRef(null),
            T = i.useRef(null),
            C =
                null != p
                    ? p
                    : (0, b.Q6)(n, {
                          isPreview: !t || !_ || !a,
                          size: s,
                      }),
            A = i.useCallback(() => {
                g(!1);
            }, []),
            w = i.useCallback(() => {
                y(!0);
            }, []);
        return (i.useEffect(() => {
            if (null != I.current) {
                let { isVisible: e } = I.current;
                m(e);
            }
        }, []),
        i.useLayoutEffect(() => {
            var e;
            (null == (e = T.current) ? void 0 : e.complete) === !0 && g(!1);
        }, []),
        null == C)
            ? null
            : (0, r.jsx)(d.$, {
                  innerRef: u,
                  ref: I,
                  onChange: m,
                  threshold: S,
                  children: (0, r.jsx)("div", {
                      className: o()(l, O.__invalid_pngImageWrapper),
                      ref: u,
                      children: (0, r.jsx)(R, {
                          hasError: E,
                          isLoading: h,
                          maskAsset: c,
                          size: s,
                          withLoadingIndicator: f,
                          children: N(
                              (0, r.jsx)("img", {
                                  className: O.pngImage,
                                  alt: P(n),
                                  src: C,
                                  draggable: !1,
                                  onError: w,
                                  onLoad: A,
                                  onContextMenu: v,
                                  ref: T,
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
                isInteracting: o,
                positionRef: s,
                size: l,
                sticker: d,
            } = e,
            _ = (0, u.e7)([p.Z], () => p.Z.useReducedMotion),
            h = i.useRef(null),
            g = {
                transform: "scale(".concat(_ ? 1 : 1 / n, ")"),
                opacity: 0,
            },
            E = (0, f.Yzy)(o, {
                ref: h,
                from: g,
                enter: {
                    transform: "scale(1)",
                    opacity: 1,
                },
                leave: g,
                config: C,
            }),
            b = i.useRef(null),
            y = (0, f.q_F)(
                {
                    ref: b,
                    transform: o || _ ? "translateY(0)" : "translateY(-25px)",
                    opacity: +!!o,
                    config: A,
                },
                "animate-always",
            );
        return (
            (0, c.useChain)(o ? [h, b] : [b, h], o ? [0, 0.0625] : [0, 0]),
            E(
                (e, i) =>
                    i &&
                    (0, r.jsx)(m.W5, {
                        className: O.positionedLayer,
                        fixed: !0,
                        align: "center",
                        position: "center",
                        targetRef: s,
                        children: () =>
                            (0, r.jsxs)("div", {
                                className: O.overlayWrapper,
                                children: [
                                    (0, r.jsx)(c.animated.div, {
                                        className: O.overlayStickerWrapper,
                                        style: e,
                                        children: (0, r.jsx)(L, {
                                            className: O.__invalid_overlaySticker,
                                            disableAnimation: t,
                                            enlargeOnInteraction: !1,
                                            isInteracting: o,
                                            maskAsset: !1,
                                            sticker: d,
                                            size: Math.round(l * n),
                                            withLoadingIndicator: !1,
                                        }),
                                    }),
                                    a &&
                                        (0, r.jsx)(c.animated.div, {
                                            className: O.overlayLabelWrapper,
                                            style: y,
                                            children: (0, r.jsx)(f.Text, {
                                                variant: "text-sm/medium",
                                                className: O.overlayLabel,
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
                enlargeWithName: o = !0,
                enlargeScaleFactor: s = T,
                maskAsset: l = !1,
                size: c,
                sticker: u,
                className: d,
                withLoadingIndicator: f,
                assetData: p,
                fileUri: _,
                onError: m,
            } = e,
            b = (0, h.n)(),
            y = (0, g.t$)(t) && !n,
            O = i.useRef(null);
        if (null == u) return null;
        let v = u.format_type === E.u3.LOTTIE ? w : D;
        return (0, r.jsxs)(
            i.Fragment,
            {
                children: [
                    (0, r.jsx)(v, {
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
                        onError: m,
                    }),
                    a &&
                        (0, r.jsx)(x, {
                            disableAnimation: n,
                            enlargeScaleFactor: s,
                            enlargeWithName: o,
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
