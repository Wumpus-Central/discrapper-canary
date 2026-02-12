"use strict";
n.d(t, { A: () => k, h: () => D });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(284009),
    l = n.n(o),
    u = n(40153),
    c = n(311907),
    d = n(230109),
    _ = n(397927),
    f = n(775602),
    h = n(776231),
    p = n(750506),
    g = n(218394),
    E = n(256449),
    A = n(842086),
    I = n(378058),
    T = n(985018),
    y = n(259843);
let S = (e) => e.preventDefault(),
    v = 0.7,
    C = 33,
    b = 1.55,
    N = { tension: 1100, friction: 40 },
    R = { tension: 1600, friction: 60 };
function O(e, t) {
    return i.cloneElement(e, {
        "data-type": "sticker",
        "data-id": t.id,
        "data-name": t.name,
        "data-format-type": t.format_type,
    });
}
function D(e) {
    let t = "description" in e && null != e.description ? `${e.name}, ${e.description}` : e.name;
    return T.intl.formatToPlainString(T.t.rk6pOw, { stickerName: t });
}
let L = (e) => {
        let { children: t, hasError: n, isLoading: i, maskAsset: a, size: o, withLoadingIndicator: l = !0 } = e,
            u = o >= C;
        return (0, r.jsxs)("div", {
            className: s()(y.c6, { [y.v2]: n || a }),
            style: { height: o, width: o },
            children: [
                n
                    ? (0, r.jsxs)("div", {
                          className: y.z3,
                          children: [
                              (0, r.jsx)(_.d4M, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                                  className: y.ik,
                              }),
                              u &&
                                  (0, r.jsx)(_.Text, {
                                      className: y.kc,
                                      color: "text-default",
                                      variant: "text-sm/normal",
                                      children: T.intl.string(T.t["tWYWJ+"]),
                                  }),
                          ],
                      })
                    : t,
                l && i && (0, r.jsx)("div", { className: y.Mz }),
            ],
        });
    },
    w = (e) => {
        let {
                shouldAnimate: t,
                size: a,
                sticker: s,
                fileUri: o,
                assetData: u,
                isFocused: c,
                className: d,
                maskAsset: _,
                positionRef: f,
                withLoadingIndicator: p,
                onError: g,
            } = e,
            E = i.useRef(null),
            A = i.useRef(null),
            [S, v] = i.useState(!0),
            [C, b] = i.useState(!1),
            N = i.useRef(!1);
        N.current = t && c;
        let R = null == o ? (0, I.zg)(s) : o;
        return (l()(null != R, `Unable to determine sticker asset URL. Sticker ID: ${s.id}`),
        i.useEffect(() => {
            if (null == E.current || null == R) return;
            let e = Math.min(2, (0, h.mZ)());
            (E.current.width = a * e), (E.current.height = a * e);
            let t = !1;
            return (
                (async () => {
                    let { default: e } = await n.e("9330").then(n.bind(n, 140521));
                    null != E.current &&
                        ((A.current = new e({
                            canvas: E.current,
                            animationId: s.id,
                            assetUrl: R,
                            assetData: u,
                            onInitialDraw: () => {
                                t || v(!1);
                            },
                            onError: () => {
                                t || (v(!1), b(!0), g?.());
                            },
                        })),
                        N.current && A.current.setState(!0));
                })(),
                () => {
                    A.current?.drop(), (A.current = null), (t = !0);
                }
            );
        }, [R, a, s.id, u, g]),
        i.useEffect(() => {
            let e;
            t || (e = 0), A.current?.setState(t && c, e);
        }, [s, t, c]),
        null == R)
            ? null
            : (0, r.jsx)("div", {
                  role: "img",
                  className: d,
                  "aria-label": C ? T.intl.string(T.t.yEvsK9) : D(s),
                  ref: f,
                  children: (0, r.jsx)(L, {
                      hasError: C,
                      isLoading: S,
                      maskAsset: _,
                      size: a,
                      withLoadingIndicator: p,
                      children: O((0, r.jsx)("canvas", { className: y.ex, ref: E }), s),
                  }),
              });
    },
    x = (e) => {
        let {
                shouldAnimate: t,
                sticker: n,
                isFocused: a,
                size: o,
                className: l,
                maskAsset: u,
                positionRef: c,
                withLoadingIndicator: _,
                fileUri: f,
            } = e,
            [h, p] = i.useState(!1),
            [g, E] = i.useState(!0),
            [A, T] = i.useState(!1),
            C = i.useRef(null),
            b = i.useRef(null),
            N = f ?? (0, I.zg)(n, { isPreview: !t || !h || !a, size: o }),
            R = i.useCallback(() => {
                E(!1);
            }, []),
            w = i.useCallback(() => {
                T(!0);
            }, []);
        return (i.useEffect(() => {
            if (null != C.current) {
                let { isVisible: e } = C.current;
                p(e);
            }
        }, []),
        i.useLayoutEffect(() => {
            b.current?.complete === !0 && E(!1);
        }, []),
        null == N)
            ? null
            : (0, r.jsx)(d.L, {
                  innerRef: c,
                  ref: C,
                  onChange: p,
                  threshold: v,
                  children: (0, r.jsx)("div", {
                      className: s()(l, y.__invalid_pngImageWrapper),
                      ref: c,
                      children: (0, r.jsx)(L, {
                          hasError: A,
                          isLoading: g,
                          maskAsset: u,
                          size: o,
                          withLoadingIndicator: _,
                          children: O(
                              (0, r.jsx)("img", {
                                  className: y.r3,
                                  alt: D(n),
                                  src: N,
                                  draggable: !1,
                                  onError: w,
                                  onLoad: R,
                                  onContextMenu: S,
                                  ref: b,
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
                enlargeWithName: a,
                isInteracting: s,
                positionRef: o,
                size: l,
                sticker: d,
            } = e,
            h = (0, c.bG)([f.A], () => f.A.useReducedMotion),
            g = i.useRef(null),
            E = { transform: `scale(${h ? 1 : 1 / n})`, opacity: 0 },
            A = (0, _.pnh)(s, { ref: g, from: E, enter: { transform: "scale(1)", opacity: 1 }, leave: E, config: N }),
            I = i.useRef(null),
            T = (0, _.zhh)(
                { ref: I, transform: s || h ? "translateY(0)" : "translateY(-25px)", opacity: +!!s, config: R },
                "animate-always",
            );
        return (
            (0, u.useChain)(s ? [g, I] : [I, g], s ? [0, 0.0625] : [0, 0]),
            A(
                (e, i) =>
                    i &&
                    (0, r.jsx)(p.nE, {
                        className: y.O2,
                        fixed: !0,
                        align: "center",
                        position: "center",
                        targetRef: o,
                        children: () =>
                            (0, r.jsxs)("div", {
                                className: y._7,
                                children: [
                                    (0, r.jsx)(u.animated.div, {
                                        className: y.tm,
                                        style: e,
                                        children: (0, r.jsx)(M, {
                                            className: y.__invalid_overlaySticker,
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
                                        (0, r.jsx)(u.animated.div, {
                                            className: y.av,
                                            style: T,
                                            children: (0, r.jsx)(_.Text, {
                                                variant: "text-sm/medium",
                                                className: y.FZ,
                                                children: d.name,
                                            }),
                                        }),
                                ],
                            }),
                    }),
            )
        );
    },
    M = (e) => {
        let {
                isInteracting: t = !1,
                disableAnimation: n = !1,
                enlargeOnInteraction: a = !1,
                enlargeWithName: s = !0,
                enlargeScaleFactor: o = b,
                maskAsset: l = !1,
                size: u,
                sticker: c,
                className: d,
                withLoadingIndicator: _,
                assetData: f,
                fileUri: h,
                onError: p,
            } = e,
            I = (0, g.j)(),
            T = (0, E.Th)(t) && !n,
            y = i.useRef(null);
        if (null == c) return null;
        let S = c.format_type === A.TG.LOTTIE ? w : x;
        return (0, r.jsxs)(
            i.Fragment,
            {
                children: [
                    (0, r.jsx)(S, {
                        shouldAnimate: T,
                        isFocused: I,
                        size: u,
                        sticker: c,
                        className: d,
                        maskAsset: l,
                        positionRef: y,
                        withLoadingIndicator: _,
                        assetData: f,
                        fileUri: h,
                        onError: p,
                    }),
                    a &&
                        (0, r.jsx)(P, {
                            disableAnimation: n,
                            enlargeScaleFactor: o,
                            enlargeWithName: s,
                            isInteracting: t,
                            positionRef: y,
                            size: u,
                            sticker: c,
                        }),
                ],
            },
            `${c.id},${u}`,
        );
    },
    k = M;
