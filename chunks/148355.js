"use strict";
n.d(t, { A: () => O, h: () => j });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(284009),
    o = n.n(a),
    c = n(517738),
    u = n(311907),
    d = n(230109),
    h = n(395899),
    m = n(834730),
    p = n(866323),
    f = n(717421),
    g = n(775602),
    _ = n(776231),
    x = n(750506),
    A = n(218394),
    C = n(256449),
    E = n(842086),
    I = n(378058),
    v = n(985018),
    y = n(554896);
let S = (e) => e.preventDefault(),
    b = { tension: 1100, friction: 40 },
    N = { tension: 1600, friction: 60 };
function T(e, t) {
    return l.cloneElement(e, {
        "data-type": "sticker",
        "data-id": t.id,
        "data-name": t.name,
        "data-format-type": t.format_type,
    });
}
function j(e) {
    let t = "description" in e && null != e.description ? `${e.name}, ${e.description}` : e.name;
    return v.intl.formatToPlainString(v.t.rk6pOw, { stickerName: t });
}
let R = (e) => {
        let { children: t, hasError: n, isLoading: l, maskAsset: s, size: a, withLoadingIndicator: o = !0 } = e,
            c = a >= 33;
        return (0, i.jsxs)("div", {
            className: r()(y.c6, { [y.v2]: n || s }),
            style: { height: a, width: a },
            children: [
                n
                    ? (0, i.jsxs)("div", {
                          className: y.z3,
                          children: [
                              (0, i.jsx)(h.d, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                                  className: y.ik,
                              }),
                              c &&
                                  (0, i.jsx)(m.E, {
                                      className: y.kc,
                                      color: "text-default",
                                      variant: "text-sm/normal",
                                      children: v.intl.string(v.t["tWYWJ+"]),
                                  }),
                          ],
                      })
                    : t,
                o && l && (0, i.jsx)("div", { className: y.Mz }),
            ],
        });
    },
    w = (e) => {
        let {
                shouldAnimate: t,
                size: s,
                sticker: r,
                fileUri: a,
                assetData: c,
                isFocused: u,
                className: d,
                maskAsset: h,
                positionRef: m,
                withLoadingIndicator: p,
                onError: f,
            } = e,
            g = l.useRef(null),
            x = l.useRef(null),
            [A, C] = l.useState(!0),
            [E, S] = l.useState(!1),
            b = l.useRef(!1);
        b.current = t && u;
        let N = null == a ? (0, I.zg)(r) : a;
        return (o()(null != N, `Unable to determine sticker asset URL. Sticker ID: ${r.id}`),
        l.useEffect(() => {
            if (null == g.current || null == N) return;
            let e = Math.min(2, (0, _.mZ)());
            (g.current.width = s * e), (g.current.height = s * e);
            let t = !1;
            return (
                (async () => {
                    let { default: e } = await n.e("9330").then(n.bind(n, 140521));
                    null != g.current &&
                        ((x.current = new e({
                            canvas: g.current,
                            animationId: r.id,
                            assetUrl: N,
                            assetData: c,
                            onInitialDraw: () => {
                                t || C(!1);
                            },
                            onError: () => {
                                t || (C(!1), S(!0), f?.());
                            },
                        })),
                        b.current && x.current.setState(!0));
                })(),
                () => {
                    x.current?.drop(), (x.current = null), (t = !0);
                }
            );
        }, [N, s, r.id, c, f]),
        l.useEffect(() => {
            let e;
            t || (e = 0), x.current?.setState(t && u, e);
        }, [r, t, u]),
        null == N)
            ? null
            : (0, i.jsx)("div", {
                  role: "img",
                  className: d,
                  "aria-label": E ? v.intl.string(v.t.yEvsK9) : j(r),
                  ref: m,
                  children: (0, i.jsx)(R, {
                      hasError: E,
                      isLoading: A,
                      maskAsset: h,
                      size: s,
                      withLoadingIndicator: p,
                      children: T((0, i.jsx)("canvas", { className: y.ex, ref: g }), r),
                  }),
              });
    },
    L = (e) => {
        let {
                shouldAnimate: t,
                sticker: n,
                isFocused: s,
                size: a,
                className: o,
                maskAsset: c,
                positionRef: u,
                withLoadingIndicator: h,
                fileUri: m,
            } = e,
            [p, f] = l.useState(!1),
            [g, _] = l.useState(!0),
            [x, A] = l.useState(!1),
            C = l.useRef(null),
            E = l.useRef(null),
            v = m ?? (0, I.zg)(n, { isPreview: !t || !p || !s, size: a }),
            b = l.useCallback(() => {
                _(!1);
            }, []),
            N = l.useCallback(() => {
                A(!0);
            }, []);
        return (l.useEffect(() => {
            if (null != C.current) {
                let { isVisible: e } = C.current;
                f(e);
            }
        }, []),
        l.useLayoutEffect(() => {
            E.current?.complete === !0 && _(!1);
        }, []),
        null == v)
            ? null
            : (0, i.jsx)(d.L, {
                  innerRef: u,
                  ref: C,
                  onChange: f,
                  threshold: 0.7,
                  children: (0, i.jsx)("div", {
                      className: r()(o, y.__invalid_pngImageWrapper),
                      ref: u,
                      children: (0, i.jsx)(R, {
                          hasError: x,
                          isLoading: g,
                          maskAsset: c,
                          size: a,
                          withLoadingIndicator: h,
                          children: T(
                              (0, i.jsx)("img", {
                                  className: y.r3,
                                  alt: j(n),
                                  src: v,
                                  draggable: !1,
                                  onError: N,
                                  onLoad: b,
                                  onContextMenu: S,
                                  ref: E,
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
                isInteracting: r,
                positionRef: a,
                size: o,
                sticker: d,
            } = e,
            h = (0, u.bG)([g.A], () => g.A.useReducedMotion),
            _ = l.useRef(null),
            A = { transform: `scale(${h ? 1 : 1 / n})`, opacity: 0 },
            C = (0, p.p)(r, { ref: _, from: A, enter: { transform: "scale(1)", opacity: 1 }, leave: A, config: b }),
            E = l.useRef(null),
            I = (0, f.z)(
                { ref: E, transform: r || h ? "translateY(0)" : "translateY(-25px)", opacity: +!!r, config: N },
                "animate-always",
            );
        return (
            (0, c.useChain)(r ? [_, E] : [E, _], r ? [0, 0.0625] : [0, 0]),
            C(
                (e, l) =>
                    l &&
                    (0, i.jsx)(x.nE, {
                        className: y.O2,
                        fixed: !0,
                        align: "center",
                        position: "center",
                        targetRef: a,
                        children: () =>
                            (0, i.jsxs)("div", {
                                className: y._7,
                                children: [
                                    (0, i.jsx)(c.animated.div, {
                                        className: y.tm,
                                        style: e,
                                        children: (0, i.jsx)(k, {
                                            className: y.__invalid_overlaySticker,
                                            disableAnimation: t,
                                            enlargeOnInteraction: !1,
                                            isInteracting: r,
                                            maskAsset: !1,
                                            sticker: d,
                                            size: Math.round(o * n),
                                            withLoadingIndicator: !1,
                                        }),
                                    }),
                                    s &&
                                        (0, i.jsx)(c.animated.div, {
                                            className: y.av,
                                            style: I,
                                            children: (0, i.jsx)(m.E, {
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
    k = (e) => {
        let {
                isInteracting: t = !1,
                disableAnimation: n = !1,
                enlargeOnInteraction: s = !1,
                enlargeWithName: r = !0,
                enlargeScaleFactor: a = 1.55,
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
            _ = (0, C.Th)(t) && !n,
            x = l.useRef(null);
        if (null == u) return null;
        let I = u.format_type === E.TG.LOTTIE ? w : L;
        return (0, i.jsxs)(
            l.Fragment,
            {
                children: [
                    (0, i.jsx)(I, {
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
                        (0, i.jsx)(M, {
                            disableAnimation: n,
                            enlargeScaleFactor: a,
                            enlargeWithName: r,
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
    O = k;
