"use strict";
n.d(t, { A: () => M, h: () => D });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(284009),
    l = n.n(o),
    d = n(419354),
    _ = n(17928),
    u = n(230109),
    c = n(395899),
    E = n(834730),
    h = n(866323),
    m = n(717421),
    f = n(775602),
    g = n(776231),
    p = n(750506),
    A = n(218394),
    I = n(256449),
    T = n(194004),
    S = n(68935),
    N = n(985018),
    C = n(554896);
let R = (e) => e.preventDefault(),
    O = { tension: 1100, friction: 40 },
    y = { tension: 1600, friction: 60 };
function v(e, t) {
    return r.cloneElement(e, {
        "data-type": "sticker",
        "data-id": t.id,
        "data-name": t.name,
        "data-format-type": t.format_type,
    });
}
function D(e) {
    let t = "description" in e && null != e.description ? `${e.name}, ${e.description}` : e.name;
    return N.intl.formatToPlainString(N.t.rk6pOw, { stickerName: t });
}
let L = (e) => {
        let { children: t, hasError: n, isLoading: r, maskAsset: s, size: o, withLoadingIndicator: l = !0 } = e,
            d = o >= 33;
        return (0, i.jsxs)("div", {
            className: a()(C.c6, { [C.v2]: n || s }),
            style: { height: o, width: o },
            children: [
                n
                    ? (0, i.jsxs)("div", {
                          className: C.z3,
                          children: [
                              (0, i.jsx)(c.d, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                                  className: C.ik,
                              }),
                              d &&
                                  (0, i.jsx)(E.E, {
                                      className: C.kc,
                                      color: "text-default",
                                      variant: "text-sm/normal",
                                      children: N.intl.string(N.t["tWYWJ+"]),
                                  }),
                          ],
                      })
                    : t,
                l && r && (0, i.jsx)("div", { className: C.Mz }),
            ],
        });
    },
    b = (e) => {
        let {
                shouldAnimate: t,
                size: s,
                sticker: a,
                fileUri: o,
                assetData: d,
                isFocused: _,
                className: u,
                maskAsset: c,
                positionRef: E,
                withLoadingIndicator: h,
                onError: m,
            } = e,
            f = r.useRef(null),
            p = r.useRef(null),
            [A, I] = r.useState(!0),
            [T, R] = r.useState(!1),
            O = r.useRef(!1);
        O.current = t && _;
        let y = null == o ? (0, S.zg)(a) : o;
        return (l()(null != y, `Unable to determine sticker asset URL. Sticker ID: ${a.id}`),
        r.useEffect(() => {
            if (null == f.current || null == y) return;
            let e = Math.min(2, (0, g.mZ)());
            (f.current.width = s * e), (f.current.height = s * e);
            let t = !1;
            return (
                (async () => {
                    let { default: e } = await n.e("8940").then(n.bind(n, 207463));
                    null != f.current &&
                        ((p.current = new e({
                            canvas: f.current,
                            animationId: a.id,
                            assetUrl: y,
                            assetData: d,
                            onInitialDraw: () => {
                                t || I(!1);
                            },
                            onError: () => {
                                t || (I(!1), R(!0), m?.());
                            },
                        })),
                        O.current && p.current.setState(!0));
                })(),
                () => {
                    p.current?.drop(), (p.current = null), (t = !0);
                }
            );
        }, [y, s, a.id, d, m]),
        r.useEffect(() => {
            let e;
            t || (e = 0), p.current?.setState(t && _, e);
        }, [a, t, _]),
        null == y)
            ? null
            : (0, i.jsx)("div", {
                  role: "img",
                  className: u,
                  "aria-label": T ? N.intl.string(N.t.yEvsK9) : D(a),
                  ref: E,
                  children: (0, i.jsx)(L, {
                      hasError: T,
                      isLoading: A,
                      maskAsset: c,
                      size: s,
                      withLoadingIndicator: h,
                      children: v((0, i.jsx)("canvas", { className: C.ex, ref: f }), a),
                  }),
              });
    },
    w = (e) => {
        let {
                shouldAnimate: t,
                sticker: n,
                isFocused: s,
                size: o,
                className: l,
                maskAsset: d,
                positionRef: _,
                withLoadingIndicator: c,
                fileUri: E,
            } = e,
            [h, m] = r.useState(!1),
            [f, g] = r.useState(!0),
            [p, A] = r.useState(!1),
            I = r.useRef(null),
            T = r.useRef(null),
            N = E ?? (0, S.zg)(n, { isPreview: !t || !h || !s, size: o }),
            O = r.useCallback(() => {
                g(!1);
            }, []),
            y = r.useCallback(() => {
                A(!0);
            }, []);
        return (r.useEffect(() => {
            if (null != I.current) {
                let { isVisible: e } = I.current;
                m(e);
            }
        }, []),
        r.useLayoutEffect(() => {
            T.current?.complete === !0 && g(!1);
        }, []),
        null == N)
            ? null
            : (0, i.jsx)(u.L, {
                  innerRef: _,
                  ref: I,
                  onChange: m,
                  threshold: 0.7,
                  children: (0, i.jsx)("div", {
                      className: a()(l, C.__invalid_pngImageWrapper),
                      ref: _,
                      children: (0, i.jsx)(L, {
                          hasError: p,
                          isLoading: f,
                          maskAsset: d,
                          size: o,
                          withLoadingIndicator: c,
                          children: v(
                              (0, i.jsx)("img", {
                                  className: C.r3,
                                  alt: D(n),
                                  src: N,
                                  draggable: !1,
                                  onError: y,
                                  onLoad: O,
                                  onContextMenu: R,
                                  ref: T,
                              }),
                              n,
                          ),
                      }),
                  }),
              });
    },
    P = (e) => {
        let {
                disableAnimation: t,
                enlargeScaleFactor: n,
                enlargeWithName: s,
                isInteracting: a,
                positionRef: o,
                size: l,
                sticker: u,
            } = e,
            c = (0, _.bG)([f.A], () => f.A.useReducedMotion),
            g = r.useRef(null),
            A = { transform: `scale(${c ? 1 : 1 / n})`, opacity: 0 },
            I = (0, h.p)(a, { ref: g, from: A, enter: { transform: "scale(1)", opacity: 1 }, leave: A, config: O }),
            T = r.useRef(null),
            S = (0, m.z)(
                { ref: T, transform: a || c ? "translateY(0)" : "translateY(-25px)", opacity: +!!a, config: y },
                "animate-always",
            );
        return (
            (0, d.useChain)(a ? [g, T] : [T, g], a ? [0, 0.0625] : [0, 0]),
            I(
                (e, r) =>
                    r &&
                    (0, i.jsx)(p.nE, {
                        className: C.O2,
                        fixed: !0,
                        align: "center",
                        position: "center",
                        targetRef: o,
                        children: () =>
                            (0, i.jsxs)("div", {
                                className: C._7,
                                children: [
                                    (0, i.jsx)(d.animated.div, {
                                        className: C.tm,
                                        style: e,
                                        children: (0, i.jsx)(k, {
                                            className: C.__invalid_overlaySticker,
                                            disableAnimation: t,
                                            enlargeOnInteraction: !1,
                                            isInteracting: a,
                                            maskAsset: !1,
                                            sticker: u,
                                            size: Math.round(l * n),
                                            withLoadingIndicator: !1,
                                        }),
                                    }),
                                    s &&
                                        (0, i.jsx)(d.animated.div, {
                                            className: C.av,
                                            style: S,
                                            children: (0, i.jsx)(E.E, {
                                                variant: "text-sm/medium",
                                                className: C.FZ,
                                                children: u.name,
                                            }),
                                        }),
                                ],
                            }),
                    }),
            )
        );
    },
    k = (e) => {
        let {
                isInteracting: t = !1,
                disableAnimation: n = !1,
                enlargeOnInteraction: s = !1,
                enlargeWithName: a = !0,
                enlargeScaleFactor: o = 1.55,
                maskAsset: l = !1,
                size: d,
                sticker: _,
                className: u,
                withLoadingIndicator: c,
                assetData: E,
                fileUri: h,
                onError: m,
            } = e,
            f = (0, A.j)(),
            g = (0, I.Th)(t) && !n,
            p = r.useRef(null);
        if (null == _) return null;
        let S = _.format_type === T.TG.LOTTIE ? b : w;
        return (0, i.jsxs)(
            r.Fragment,
            {
                children: [
                    (0, i.jsx)(S, {
                        shouldAnimate: g,
                        isFocused: f,
                        size: d,
                        sticker: _,
                        className: u,
                        maskAsset: l,
                        positionRef: p,
                        withLoadingIndicator: c,
                        assetData: E,
                        fileUri: h,
                        onError: m,
                    }),
                    s &&
                        (0, i.jsx)(P, {
                            disableAnimation: n,
                            enlargeScaleFactor: o,
                            enlargeWithName: a,
                            isInteracting: t,
                            positionRef: p,
                            size: d,
                            sticker: _,
                        }),
                ],
            },
            `${_.id},${d}`,
        );
    },
    M = k;
