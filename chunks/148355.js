"use strict";
n.d(t, { A: () => x, h: () => b });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(284009),
    l = n.n(o),
    u = n(773690),
    c = n(311907),
    d = n(230109),
    _ = n(397927),
    f = n(775602),
    p = n(776231),
    h = n(750506),
    m = n(218394),
    E = n(256449),
    g = n(842086),
    A = n(378058),
    I = n(985018),
    T = n(473760);
let S = (e) => e.preventDefault(),
    y = 0.7,
    v = 33,
    N = 1.55,
    C = { tension: 1100, friction: 40 },
    R = { tension: 1600, friction: 60 };
function O(e, t) {
    return i.cloneElement(e, {
        "data-type": "sticker",
        "data-id": t.id,
        "data-name": t.name,
        "data-format-type": t.format_type,
    });
}
function b(e) {
    let t = "description" in e && null != e.description ? `${e.name}, ${e.description}` : e.name;
    return I.intl.formatToPlainString(I.t.rk6pOw, { stickerName: t });
}
let D = (e) => {
        let { children: t, hasError: n, isLoading: i, maskAsset: s, size: o, withLoadingIndicator: l = !0 } = e,
            u = o >= v;
        return (0, r.jsxs)("div", {
            className: a()(T.c6, { [T.v2]: n || s }),
            style: { height: o, width: o },
            children: [
                n
                    ? (0, r.jsxs)("div", {
                          className: T.z3,
                          children: [
                              (0, r.jsx)(_.d4M, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                                  className: T.ik,
                              }),
                              u &&
                                  (0, r.jsx)(_.Text, {
                                      className: T.kc,
                                      color: "text-default",
                                      variant: "text-sm/normal",
                                      children: I.intl.string(I.t["tWYWJ+"]),
                                  }),
                          ],
                      })
                    : t,
                l && i && (0, r.jsx)("div", { className: T.Mz }),
            ],
        });
    },
    L = (e) => {
        let {
                shouldAnimate: t,
                size: s,
                sticker: a,
                fileUri: o,
                assetData: u,
                isFocused: c,
                className: d,
                maskAsset: _,
                positionRef: f,
                withLoadingIndicator: h,
                onError: m,
            } = e,
            E = i.useRef(null),
            g = i.useRef(null),
            [S, y] = i.useState(!0),
            [v, N] = i.useState(!1),
            C = i.useRef(!1);
        C.current = t && c;
        let R = null == o ? (0, A.zg)(a) : o;
        return (l()(null != R, `Unable to determine sticker asset URL. Sticker ID: ${a.id}`),
        i.useEffect(() => {
            if (null == E.current || null == R) return;
            let e = Math.min(2, (0, p.mZ)());
            (E.current.width = s * e), (E.current.height = s * e);
            let t = !1;
            return (
                (async () => {
                    let { default: e } = await n.e("9330").then(n.bind(n, 140521));
                    null != E.current &&
                        ((g.current = new e({
                            canvas: E.current,
                            animationId: a.id,
                            assetUrl: R,
                            assetData: u,
                            onInitialDraw: () => {
                                t || y(!1);
                            },
                            onError: () => {
                                t || (y(!1), N(!0), m?.());
                            },
                        })),
                        C.current && g.current.setState(!0));
                })(),
                () => {
                    g.current?.drop(), (g.current = null), (t = !0);
                }
            );
        }, [R, s, a.id, u, m]),
        i.useEffect(() => {
            let e;
            t || (e = 0), g.current?.setState(t && c, e);
        }, [a, t, c]),
        null == R)
            ? null
            : (0, r.jsx)("div", {
                  role: "img",
                  className: d,
                  "aria-label": v ? I.intl.string(I.t.yEvsK9) : b(a),
                  ref: f,
                  children: (0, r.jsx)(D, {
                      hasError: v,
                      isLoading: S,
                      maskAsset: _,
                      size: s,
                      withLoadingIndicator: h,
                      children: O((0, r.jsx)("canvas", { className: T.ex, ref: E }), a),
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
                maskAsset: u,
                positionRef: c,
                withLoadingIndicator: _,
                fileUri: f,
            } = e,
            [p, h] = i.useState(!1),
            [m, E] = i.useState(!0),
            [g, I] = i.useState(!1),
            v = i.useRef(null),
            N = i.useRef(null),
            C = f ?? (0, A.zg)(n, { isPreview: !t || !p || !s, size: o }),
            R = i.useCallback(() => {
                E(!1);
            }, []),
            L = i.useCallback(() => {
                I(!0);
            }, []);
        return (i.useEffect(() => {
            if (null != v.current) {
                let { isVisible: e } = v.current;
                h(e);
            }
        }, []),
        i.useLayoutEffect(() => {
            N.current?.complete === !0 && E(!1);
        }, []),
        null == C)
            ? null
            : (0, r.jsx)(d.L, {
                  innerRef: c,
                  ref: v,
                  onChange: h,
                  threshold: y,
                  children: (0, r.jsx)("div", {
                      className: a()(l, T.__invalid_pngImageWrapper),
                      ref: c,
                      children: (0, r.jsx)(D, {
                          hasError: g,
                          isLoading: m,
                          maskAsset: u,
                          size: o,
                          withLoadingIndicator: _,
                          children: O(
                              (0, r.jsx)("img", {
                                  className: T.r3,
                                  alt: b(n),
                                  src: C,
                                  draggable: !1,
                                  onError: L,
                                  onLoad: R,
                                  onContextMenu: S,
                                  ref: N,
                              }),
                              n,
                          ),
                      }),
                  }),
              });
    },
    M = (e) => {
        let {
                disableAnimation: t,
                enlargeScaleFactor: n,
                enlargeWithName: s,
                isInteracting: a,
                positionRef: o,
                size: l,
                sticker: d,
            } = e,
            p = (0, c.bG)([f.A], () => f.A.useReducedMotion),
            m = i.useRef(null),
            E = { transform: `scale(${p ? 1 : 1 / n})`, opacity: 0 },
            g = (0, _.pnh)(a, { ref: m, from: E, enter: { transform: "scale(1)", opacity: 1 }, leave: E, config: C }),
            A = i.useRef(null),
            I = (0, _.zhh)(
                { ref: A, transform: a || p ? "translateY(0)" : "translateY(-25px)", opacity: +!!a, config: R },
                "animate-always",
            );
        return (
            (0, u.useChain)(a ? [m, A] : [A, m], a ? [0, 0.0625] : [0, 0]),
            g(
                (e, i) =>
                    i &&
                    (0, r.jsx)(h.nE, {
                        className: T.O2,
                        fixed: !0,
                        align: "center",
                        position: "center",
                        targetRef: o,
                        children: () =>
                            (0, r.jsxs)("div", {
                                className: T._7,
                                children: [
                                    (0, r.jsx)(u.animated.div, {
                                        className: T.tm,
                                        style: e,
                                        children: (0, r.jsx)(P, {
                                            className: T.__invalid_overlaySticker,
                                            disableAnimation: t,
                                            enlargeOnInteraction: !1,
                                            isInteracting: a,
                                            maskAsset: !1,
                                            sticker: d,
                                            size: Math.round(l * n),
                                            withLoadingIndicator: !1,
                                        }),
                                    }),
                                    s &&
                                        (0, r.jsx)(u.animated.div, {
                                            className: T.av,
                                            style: I,
                                            children: (0, r.jsx)(_.Text, {
                                                variant: "text-sm/medium",
                                                className: T.FZ,
                                                children: d.name,
                                            }),
                                        }),
                                ],
                            }),
                    }),
            )
        );
    },
    P = (e) => {
        let {
                isInteracting: t = !1,
                disableAnimation: n = !1,
                enlargeOnInteraction: s = !1,
                enlargeWithName: a = !0,
                enlargeScaleFactor: o = N,
                maskAsset: l = !1,
                size: u,
                sticker: c,
                className: d,
                withLoadingIndicator: _,
                assetData: f,
                fileUri: p,
                onError: h,
            } = e,
            A = (0, m.j)(),
            I = (0, E.Th)(t) && !n,
            T = i.useRef(null);
        if (null == c) return null;
        let S = c.format_type === g.TG.LOTTIE ? L : w;
        return (0, r.jsxs)(
            i.Fragment,
            {
                children: [
                    (0, r.jsx)(S, {
                        shouldAnimate: I,
                        isFocused: A,
                        size: u,
                        sticker: c,
                        className: d,
                        maskAsset: l,
                        positionRef: T,
                        withLoadingIndicator: _,
                        assetData: f,
                        fileUri: p,
                        onError: h,
                    }),
                    s &&
                        (0, r.jsx)(M, {
                            disableAnimation: n,
                            enlargeScaleFactor: o,
                            enlargeWithName: a,
                            isInteracting: t,
                            positionRef: T,
                            size: u,
                            sticker: c,
                        }),
                ],
            },
            `${c.id},${u}`,
        );
    },
    x = P;
