"use strict";
n.d(t, { A: () => O, h: () => T });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(284009),
    o = n.n(r),
    c = n(419354),
    u = n(17928),
    d = n(230109),
    h = n(395899),
    m = n(834730),
    p = n(866323),
    f = n(717421),
    g = n(775602),
    _ = n(776231),
    x = n(750506),
    C = n(218394),
    A = n(256449),
    E = n(194004),
    I = n(68935),
    v = n(985018),
    y = n(554896);
let b = (e) => e.preventDefault(),
    S = { tension: 1100, friction: 40 },
    N = { tension: 1600, friction: 60 };
function j(e, t) {
    return i.cloneElement(e, {
        "data-type": "sticker",
        "data-id": t.id,
        "data-name": t.name,
        "data-format-type": t.format_type,
    });
}
function T(e) {
    let t = "description" in e && null != e.description ? `${e.name}, ${e.description}` : e.name;
    return v.intl.formatToPlainString(v.t.rk6pOw, { stickerName: t });
}
let w = (e) => {
        let { children: t, hasError: n, isLoading: i, maskAsset: s, size: r, withLoadingIndicator: o = !0 } = e,
            c = r >= 33;
        return (0, l.jsxs)("div", {
            className: a()(y.c6, { [y.v2]: n || s }),
            style: { height: r, width: r },
            children: [
                n
                    ? (0, l.jsxs)("div", {
                          className: y.z3,
                          children: [
                              (0, l.jsx)(h.d, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                                  className: y.ik,
                              }),
                              c &&
                                  (0, l.jsx)(m.E, {
                                      className: y.kc,
                                      color: "text-default",
                                      variant: "text-sm/normal",
                                      children: v.intl.string(v.t["tWYWJ+"]),
                                  }),
                          ],
                      })
                    : t,
                o && i && (0, l.jsx)("div", { className: y.Mz }),
            ],
        });
    },
    R = (e) => {
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
            x = i.useRef(null),
            [C, A] = i.useState(!0),
            [E, b] = i.useState(!1),
            S = i.useRef(!1);
        S.current = t && u;
        let N = null == r ? (0, I.zg)(a) : r;
        return (o()(null != N, `Unable to determine sticker asset URL. Sticker ID: ${a.id}`),
        i.useEffect(() => {
            if (null == g.current || null == N) return;
            let e = Math.min(2, (0, _.mZ)());
            (g.current.width = s * e), (g.current.height = s * e);
            let t = !1;
            return (
                (async () => {
                    let { default: e } = await n.e("8940").then(n.bind(n, 207463));
                    null != g.current &&
                        ((x.current = new e({
                            canvas: g.current,
                            animationId: a.id,
                            assetUrl: N,
                            assetData: c,
                            onInitialDraw: () => {
                                t || A(!1);
                            },
                            onError: () => {
                                t || (A(!1), b(!0), f?.());
                            },
                        })),
                        S.current && x.current.setState(!0));
                })(),
                () => {
                    x.current?.drop(), (x.current = null), (t = !0);
                }
            );
        }, [N, s, a.id, c, f]),
        i.useEffect(() => {
            let e;
            t || (e = 0), x.current?.setState(t && u, e);
        }, [a, t, u]),
        null == N)
            ? null
            : (0, l.jsx)("div", {
                  role: "img",
                  className: d,
                  "aria-label": E ? v.intl.string(v.t.yEvsK9) : T(a),
                  ref: m,
                  children: (0, l.jsx)(w, {
                      hasError: E,
                      isLoading: C,
                      maskAsset: h,
                      size: s,
                      withLoadingIndicator: p,
                      children: j((0, l.jsx)("canvas", { className: y.ex, ref: g }), a),
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
            [g, _] = i.useState(!0),
            [x, C] = i.useState(!1),
            A = i.useRef(null),
            E = i.useRef(null),
            v = m ?? (0, I.zg)(n, { isPreview: !t || !p || !s, size: r }),
            S = i.useCallback(() => {
                _(!1);
            }, []),
            N = i.useCallback(() => {
                C(!0);
            }, []);
        return (i.useEffect(() => {
            if (null != A.current) {
                let { isVisible: e } = A.current;
                f(e);
            }
        }, []),
        i.useLayoutEffect(() => {
            E.current?.complete === !0 && _(!1);
        }, []),
        null == v)
            ? null
            : (0, l.jsx)(d.L, {
                  innerRef: u,
                  ref: A,
                  onChange: f,
                  threshold: 0.7,
                  children: (0, l.jsx)("div", {
                      className: a()(o, y.__invalid_pngImageWrapper),
                      ref: u,
                      children: (0, l.jsx)(w, {
                          hasError: x,
                          isLoading: g,
                          maskAsset: c,
                          size: r,
                          withLoadingIndicator: h,
                          children: j(
                              (0, l.jsx)("img", {
                                  className: y.r3,
                                  alt: T(n),
                                  src: v,
                                  draggable: !1,
                                  onError: N,
                                  onLoad: S,
                                  onContextMenu: b,
                                  ref: E,
                              }),
                              n,
                          ),
                      }),
                  }),
              });
    },
    k = (e) => {
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
            _ = i.useRef(null),
            C = { transform: `scale(${h ? 1 : 1 / n})`, opacity: 0 },
            A = (0, p.p)(a, { ref: _, from: C, enter: { transform: "scale(1)", opacity: 1 }, leave: C, config: S }),
            E = i.useRef(null),
            I = (0, f.z)(
                { ref: E, transform: a || h ? "translateY(0)" : "translateY(-25px)", opacity: +!!a, config: N },
                "animate-always",
            );
        return (
            (0, c.useChain)(a ? [_, E] : [E, _], a ? [0, 0.0625] : [0, 0]),
            A(
                (e, i) =>
                    i &&
                    (0, l.jsx)(x.nE, {
                        className: y.O2,
                        fixed: !0,
                        align: "center",
                        position: "center",
                        targetRef: r,
                        children: () =>
                            (0, l.jsxs)("div", {
                                className: y._7,
                                children: [
                                    (0, l.jsx)(c.animated.div, {
                                        className: y.tm,
                                        style: e,
                                        children: (0, l.jsx)(M, {
                                            className: y.__invalid_overlaySticker,
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
                                            className: y.av,
                                            style: I,
                                            children: (0, l.jsx)(m.E, {
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
            g = (0, C.j)(),
            _ = (0, A.Th)(t) && !n,
            x = i.useRef(null);
        if (null == u) return null;
        let I = u.format_type === E.TG.LOTTIE ? R : L;
        return (0, l.jsxs)(
            i.Fragment,
            {
                children: [
                    (0, l.jsx)(I, {
                        shouldAnimate: _,
                        isFocused: g,
                        size: c,
                        sticker: u,
                        className: d,
                        maskAsset: o,
                        positionRef: x,
                        withLoadingIndicator: h,
                        assetData: m,
                        fileUri: p,
                        onError: f,
                    }),
                    s &&
                        (0, l.jsx)(k, {
                            disableAnimation: n,
                            enlargeScaleFactor: r,
                            enlargeWithName: a,
                            isInteracting: t,
                            positionRef: x,
                            size: c,
                            sticker: u,
                        }),
                ],
            },
            `${u.id},${c}`,
        );
    },
    O = M;
