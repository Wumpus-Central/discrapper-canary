"use strict";
n.d(t, { A: () => x, h: () => b });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(284009),
    l = n.n(o),
    u = n(419354),
    c = n(311907),
    d = n(230109),
    _ = n(395899),
    f = n(834730),
    p = n(866323),
    h = n(717421),
    E = n(775602),
    m = n(776231),
    g = n(750506),
    A = n(218394),
    I = n(256449),
    T = n(842086),
    S = n(378058),
    y = n(985018),
    N = n(554896);
let v = (e) => e.preventDefault(),
    C = { tension: 1100, friction: 40 },
    O = { tension: 1600, friction: 60 };
function R(e, t) {
    return i.cloneElement(e, {
        "data-type": "sticker",
        "data-id": t.id,
        "data-name": t.name,
        "data-format-type": t.format_type,
    });
}
function b(e) {
    let t = "description" in e && null != e.description ? `${e.name}, ${e.description}` : e.name;
    return y.intl.formatToPlainString(y.t.rk6pOw, { stickerName: t });
}
let D = (e) => {
        let { children: t, hasError: n, isLoading: i, maskAsset: s, size: o, withLoadingIndicator: l = !0 } = e,
            u = o >= 33;
        return (0, r.jsxs)("div", {
            className: a()(N.c6, { [N.v2]: n || s }),
            style: { height: o, width: o },
            children: [
                n
                    ? (0, r.jsxs)("div", {
                          className: N.z3,
                          children: [
                              (0, r.jsx)(_.d, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                                  className: N.ik,
                              }),
                              u &&
                                  (0, r.jsx)(f.E, {
                                      className: N.kc,
                                      color: "text-default",
                                      variant: "text-sm/normal",
                                      children: y.intl.string(y.t["tWYWJ+"]),
                                  }),
                          ],
                      })
                    : t,
                l && i && (0, r.jsx)("div", { className: N.Mz }),
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
                withLoadingIndicator: p,
                onError: h,
            } = e,
            E = i.useRef(null),
            g = i.useRef(null),
            [A, I] = i.useState(!0),
            [T, v] = i.useState(!1),
            C = i.useRef(!1);
        C.current = t && c;
        let O = null == o ? (0, S.zg)(a) : o;
        return (l()(null != O, `Unable to determine sticker asset URL. Sticker ID: ${a.id}`),
        i.useEffect(() => {
            if (null == E.current || null == O) return;
            let e = Math.min(2, (0, m.mZ)());
            (E.current.width = s * e), (E.current.height = s * e);
            let t = !1;
            return (
                (async () => {
                    let { default: e } = await n.e("9330").then(n.bind(n, 140521));
                    null != E.current &&
                        ((g.current = new e({
                            canvas: E.current,
                            animationId: a.id,
                            assetUrl: O,
                            assetData: u,
                            onInitialDraw: () => {
                                t || I(!1);
                            },
                            onError: () => {
                                t || (I(!1), v(!0), h?.());
                            },
                        })),
                        C.current && g.current.setState(!0));
                })(),
                () => {
                    g.current?.drop(), (g.current = null), (t = !0);
                }
            );
        }, [O, s, a.id, u, h]),
        i.useEffect(() => {
            let e;
            t || (e = 0), g.current?.setState(t && c, e);
        }, [a, t, c]),
        null == O)
            ? null
            : (0, r.jsx)("div", {
                  role: "img",
                  className: d,
                  "aria-label": T ? y.intl.string(y.t.yEvsK9) : b(a),
                  ref: f,
                  children: (0, r.jsx)(D, {
                      hasError: T,
                      isLoading: A,
                      maskAsset: _,
                      size: s,
                      withLoadingIndicator: p,
                      children: R((0, r.jsx)("canvas", { className: N.ex, ref: E }), a),
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
            [E, m] = i.useState(!0),
            [g, A] = i.useState(!1),
            I = i.useRef(null),
            T = i.useRef(null),
            y = f ?? (0, S.zg)(n, { isPreview: !t || !p || !s, size: o }),
            C = i.useCallback(() => {
                m(!1);
            }, []),
            O = i.useCallback(() => {
                A(!0);
            }, []);
        return (i.useEffect(() => {
            if (null != I.current) {
                let { isVisible: e } = I.current;
                h(e);
            }
        }, []),
        i.useLayoutEffect(() => {
            T.current?.complete === !0 && m(!1);
        }, []),
        null == y)
            ? null
            : (0, r.jsx)(d.L, {
                  innerRef: c,
                  ref: I,
                  onChange: h,
                  threshold: 0.7,
                  children: (0, r.jsx)("div", {
                      className: a()(l, N.__invalid_pngImageWrapper),
                      ref: c,
                      children: (0, r.jsx)(D, {
                          hasError: g,
                          isLoading: E,
                          maskAsset: u,
                          size: o,
                          withLoadingIndicator: _,
                          children: R(
                              (0, r.jsx)("img", {
                                  className: N.r3,
                                  alt: b(n),
                                  src: y,
                                  draggable: !1,
                                  onError: O,
                                  onLoad: C,
                                  onContextMenu: v,
                                  ref: T,
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
            _ = (0, c.bG)([E.A], () => E.A.useReducedMotion),
            m = i.useRef(null),
            A = { transform: `scale(${_ ? 1 : 1 / n})`, opacity: 0 },
            I = (0, p.p)(a, { ref: m, from: A, enter: { transform: "scale(1)", opacity: 1 }, leave: A, config: C }),
            T = i.useRef(null),
            S = (0, h.z)(
                { ref: T, transform: a || _ ? "translateY(0)" : "translateY(-25px)", opacity: +!!a, config: O },
                "animate-always",
            );
        return (
            (0, u.useChain)(a ? [m, T] : [T, m], a ? [0, 0.0625] : [0, 0]),
            I(
                (e, i) =>
                    i &&
                    (0, r.jsx)(g.nE, {
                        className: N.O2,
                        fixed: !0,
                        align: "center",
                        position: "center",
                        targetRef: o,
                        children: () =>
                            (0, r.jsxs)("div", {
                                className: N._7,
                                children: [
                                    (0, r.jsx)(u.animated.div, {
                                        className: N.tm,
                                        style: e,
                                        children: (0, r.jsx)(P, {
                                            className: N.__invalid_overlaySticker,
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
                                            className: N.av,
                                            style: S,
                                            children: (0, r.jsx)(f.E, {
                                                variant: "text-sm/medium",
                                                className: N.FZ,
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
                enlargeScaleFactor: o = 1.55,
                maskAsset: l = !1,
                size: u,
                sticker: c,
                className: d,
                withLoadingIndicator: _,
                assetData: f,
                fileUri: p,
                onError: h,
            } = e,
            E = (0, A.j)(),
            m = (0, I.Th)(t) && !n,
            g = i.useRef(null);
        if (null == c) return null;
        let S = c.format_type === T.TG.LOTTIE ? L : w;
        return (0, r.jsxs)(
            i.Fragment,
            {
                children: [
                    (0, r.jsx)(S, {
                        shouldAnimate: m,
                        isFocused: E,
                        size: u,
                        sticker: c,
                        className: d,
                        maskAsset: l,
                        positionRef: g,
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
                            positionRef: g,
                            size: u,
                            sticker: c,
                        }),
                ],
            },
            `${c.id},${u}`,
        );
    },
    x = P;
