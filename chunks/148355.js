"use strict";
n.d(t, { A: () => k, h: () => b });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(284009),
    o = n.n(r),
    c = n(123924),
    u = n(17928),
    d = n(230109),
    h = n(395899),
    m = n(834730),
    p = n(866323),
    f = n(717421),
    g = n(775602),
    x = n(776231),
    C = n(750506),
    A = n(218394),
    E = n(256449),
    I = n(194004),
    y = n(68935),
    v = n(985018),
    S = n(554896);
let N = (e) => e.preventDefault(),
    j = { tension: 1100, friction: 40 },
    _ = { tension: 1600, friction: 60 };
function T(e, t) {
    return i.cloneElement(e, {
        "data-type": "sticker",
        "data-id": t.id,
        "data-name": t.name,
        "data-format-type": t.format_type,
    });
}
function b(e) {
    let t = "description" in e && null != e.description ? `${e.name}, ${e.description}` : e.name;
    return v.intl.formatToPlainString(v.t.rk6pOw, { stickerName: t });
}
let R = (e) => {
        let { children: t, hasError: n, isLoading: i, maskAsset: s, size: r, withLoadingIndicator: o = !0 } = e,
            c = r >= 33;
        return (0, l.jsxs)("div", {
            className: a()(S.c6, { [S.v2]: n || s }),
            style: { height: r, width: r },
            children: [
                n
                    ? (0, l.jsxs)("div", {
                          className: S.z3,
                          children: [
                              (0, l.jsx)(h.d, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                                  className: S.ik,
                              }),
                              c &&
                                  (0, l.jsx)(m.E, {
                                      className: S.kc,
                                      color: "text-default",
                                      variant: "text-sm/normal",
                                      children: v.intl.string(v.t["tWYWJ+"]),
                                  }),
                          ],
                      })
                    : t,
                o && i && (0, l.jsx)("div", { className: S.Mz }),
            ],
        });
    },
    O = (e) => {
        let {
                shouldAnimate: t,
                size: s,
                sticker: a,
                fileUri: r,
                assetData: c,
                isFocused: u,
                className: d,
                maskAsset: h,
                positionRef: m,
                withLoadingIndicator: p,
                onError: f,
            } = e,
            g = i.useRef(null),
            C = i.useRef(null),
            [A, E] = i.useState(!0),
            [I, N] = i.useState(!1),
            j = i.useRef(!1);
        j.current = t && u;
        let _ = null == r ? (0, y.zg)(a) : r;
        return (o()(null != _, `Unable to determine sticker asset URL. Sticker ID: ${a.id}`),
        i.useEffect(() => {
            if (null == g.current || null == _) return;
            let e = Math.min(2, (0, x.mZ)());
            (g.current.width = s * e), (g.current.height = s * e);
            let t = !1;
            return (
                (async () => {
                    let { default: e } = await Promise.all([n.e("70716"), n.e("9330")]).then(n.bind(n, 140521));
                    null != g.current &&
                        ((C.current = new e({
                            canvas: g.current,
                            animationId: a.id,
                            assetUrl: _,
                            assetData: c,
                            onInitialDraw: () => {
                                t || E(!1);
                            },
                            onError: () => {
                                t || (E(!1), N(!0), f?.());
                            },
                        })),
                        j.current && C.current.setState(!0));
                })(),
                () => {
                    C.current?.drop(), (C.current = null), (t = !0);
                }
            );
        }, [_, s, a.id, c, f]),
        i.useEffect(() => {
            let e;
            t || (e = 0), C.current?.setState(t && u, e);
        }, [a, t, u]),
        null == _)
            ? null
            : (0, l.jsx)("div", {
                  role: "img",
                  className: d,
                  "aria-label": I ? v.intl.string(v.t.yEvsK9) : b(a),
                  ref: m,
                  children: (0, l.jsx)(R, {
                      hasError: I,
                      isLoading: A,
                      maskAsset: h,
                      size: s,
                      withLoadingIndicator: p,
                      children: T((0, l.jsx)("canvas", { className: S.ex, ref: g }), a),
                  }),
              });
    },
    L = (e) => {
        let {
                shouldAnimate: t,
                sticker: n,
                isFocused: s,
                size: r,
                className: o,
                maskAsset: c,
                positionRef: u,
                withLoadingIndicator: h,
                fileUri: m,
            } = e,
            [p, f] = i.useState(!1),
            [g, x] = i.useState(!0),
            [C, A] = i.useState(!1),
            E = i.useRef(null),
            I = i.useRef(null),
            v = m ?? (0, y.zg)(n, { isPreview: !t || !p || !s, size: r }),
            j = i.useCallback(() => {
                x(!1);
            }, []),
            _ = i.useCallback(() => {
                A(!0);
            }, []);
        return (i.useEffect(() => {
            if (null != E.current) {
                let { isVisible: e } = E.current;
                f(e);
            }
        }, []),
        i.useLayoutEffect(() => {
            I.current?.complete === !0 && x(!1);
        }, []),
        null == v)
            ? null
            : (0, l.jsx)(d.L, {
                  innerRef: u,
                  ref: E,
                  onChange: f,
                  threshold: 0.7,
                  children: (0, l.jsx)("div", {
                      className: a()(o, S.__invalid_pngImageWrapper),
                      ref: u,
                      children: (0, l.jsx)(R, {
                          hasError: C,
                          isLoading: g,
                          maskAsset: c,
                          size: r,
                          withLoadingIndicator: h,
                          children: T(
                              (0, l.jsx)("img", {
                                  className: S.r3,
                                  alt: b(n),
                                  src: v,
                                  draggable: !1,
                                  onError: _,
                                  onLoad: j,
                                  onContextMenu: N,
                                  ref: I,
                              }),
                              n,
                          ),
                      }),
                  }),
              });
    },
    w = (e) => {
        let {
                disableAnimation: t,
                enlargeScaleFactor: n,
                enlargeWithName: s,
                isInteracting: a,
                positionRef: r,
                size: o,
                sticker: d,
            } = e,
            h = (0, u.bG)([g.A], () => g.A.useReducedMotion),
            x = i.useRef(null),
            A = { transform: `scale(${h ? 1 : 1 / n})`, opacity: 0 },
            E = (0, p.p)(a, { ref: x, from: A, enter: { transform: "scale(1)", opacity: 1 }, leave: A, config: j }),
            I = i.useRef(null),
            y = (0, f.z)(
                { ref: I, transform: a || h ? "translateY(0)" : "translateY(-25px)", opacity: +!!a, config: _ },
                "animate-always",
            );
        return (
            (0, c.useChain)(a ? [x, I] : [I, x], a ? [0, 0.0625] : [0, 0]),
            E(
                (e, i) =>
                    i &&
                    (0, l.jsx)(C.nE, {
                        className: S.O2,
                        fixed: !0,
                        align: "center",
                        position: "center",
                        targetRef: r,
                        children: () =>
                            (0, l.jsxs)("div", {
                                className: S._7,
                                children: [
                                    (0, l.jsx)(c.animated.div, {
                                        className: S.tm,
                                        style: e,
                                        children: (0, l.jsx)(M, {
                                            className: S.__invalid_overlaySticker,
                                            disableAnimation: t,
                                            enlargeOnInteraction: !1,
                                            isInteracting: a,
                                            maskAsset: !1,
                                            sticker: d,
                                            size: Math.round(o * n),
                                            withLoadingIndicator: !1,
                                        }),
                                    }),
                                    s &&
                                        (0, l.jsx)(c.animated.div, {
                                            className: S.av,
                                            style: y,
                                            children: (0, l.jsx)(m.E, {
                                                variant: "text-sm/medium",
                                                className: S.FZ,
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
                enlargeOnInteraction: s = !1,
                enlargeWithName: a = !0,
                enlargeScaleFactor: r = 1.55,
                maskAsset: o = !1,
                size: c,
                sticker: u,
                className: d,
                withLoadingIndicator: h,
                assetData: m,
                fileUri: p,
                onError: f,
            } = e,
            g = (0, A.j)(),
            x = (0, E.Th)(t) && !n,
            C = i.useRef(null);
        if (null == u) return null;
        let y = u.format_type === I.TG.LOTTIE ? O : L;
        return (0, l.jsxs)(
            i.Fragment,
            {
                children: [
                    (0, l.jsx)(y, {
                        shouldAnimate: x,
                        isFocused: g,
                        size: c,
                        sticker: u,
                        className: d,
                        maskAsset: o,
                        positionRef: C,
                        withLoadingIndicator: h,
                        assetData: m,
                        fileUri: p,
                        onError: f,
                    }),
                    s &&
                        (0, l.jsx)(w, {
                            disableAnimation: n,
                            enlargeScaleFactor: r,
                            enlargeWithName: a,
                            isInteracting: t,
                            positionRef: C,
                            size: c,
                            sticker: u,
                        }),
                ],
            },
            `${u.id},${c}`,
        );
    },
    k = M;
