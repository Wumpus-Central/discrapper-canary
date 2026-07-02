"use strict";
n.d(t, { A: () => x, h: () => b });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(284009),
    l = n.n(o),
    u = n(580929),
    d = n(17928),
    c = n(269115),
    _ = n(395899),
    h = n(834730),
    f = n(866323),
    E = n(717421),
    p = n(775602),
    m = n(776231),
    g = n(750506),
    A = n(218394),
    I = n(256449),
    T = n(194004),
    S = n(68935),
    N = n(375708),
    C = n(554896);
function y(e) {
    return e.preventDefault();
}
let v = { tension: 1100, friction: 40 },
    R = { tension: 1600, friction: 60 };
function O(e, t) {
    return r.cloneElement(e, {
        "data-type": "sticker",
        "data-id": t.id,
        "data-name": t.name,
        "data-format-type": t.format_type,
    });
}
function b(e) {
    let t = "description" in e && null != e.description ? `${e.name}, ${e.description}` : e.name;
    return N.intl.formatToPlainString(N.t.rk6pOw, { stickerName: t });
}
let L = (e) => {
    let { children: t, hasError: n, isLoading: r, maskAsset: s, size: o, withLoadingIndicator: l = !0 } = e,
        u = o >= 33;
    return (0, i.jsxs)("div", {
        className: a()(C.c6, { [C.v2]: n || s }),
        style: { height: o, width: o },
        children: [
            n
                ? (0, i.jsxs)("div", {
                      className: C.z3,
                      children: [
                          (0, i.jsx)(_.d, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: C.ik,
                          }),
                          u &&
                              (0, i.jsx)(h.E, {
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
};
function D(e) {
    let {
            shouldAnimate: t,
            size: s,
            sticker: a,
            fileUri: o,
            assetData: u,
            isFocused: d,
            className: c,
            maskAsset: _,
            positionRef: h,
            withLoadingIndicator: f,
            onError: E,
        } = e,
        p = r.useRef(null),
        g = r.useRef(null),
        [A, I] = r.useState(!0),
        [T, y] = r.useState(!1),
        v = r.useRef(!1);
    v.current = t && d;
    let R = null == o ? (0, S.zg)(a) : o;
    return (l()(null != R, `Unable to determine sticker asset URL. Sticker ID: ${a.id}`),
    r.useEffect(() => {
        if (null == p.current || null == R) return;
        let e = Math.min(2, (0, m.mZ)());
        (p.current.width = s * e), (p.current.height = s * e);
        let t = !1;
        return (
            (async () => {
                let { default: e } = await Promise.all([n.e("70716"), n.e("9330")]).then(n.bind(n, 140521));
                null != p.current &&
                    ((g.current = new e({
                        canvas: p.current,
                        animationId: a.id,
                        assetUrl: R,
                        assetData: u,
                        onInitialDraw: () => {
                            t || I(!1);
                        },
                        onError: () => {
                            t || (I(!1), y(!0), E?.());
                        },
                    })),
                    v.current && g.current.setState(!0));
            })(),
            () => {
                g.current?.drop(), (g.current = null), (t = !0);
            }
        );
    }, [R, s, a.id, u, E]),
    r.useEffect(() => {
        let e;
        t || (e = 0), g.current?.setState(t && d, e);
    }, [a, t, d]),
    null == R)
        ? null
        : (0, i.jsx)("div", {
              role: "img",
              className: c,
              "aria-label": T ? N.intl.string(N.t.yEvsK9) : b(a),
              ref: h,
              children: (0, i.jsx)(L, {
                  hasError: T,
                  isLoading: A,
                  maskAsset: _,
                  size: s,
                  withLoadingIndicator: f,
                  children: O((0, i.jsx)("canvas", { className: C.ex, ref: p }), a),
              }),
          });
}
let P = (e) => {
        let {
                shouldAnimate: t,
                sticker: n,
                isFocused: s,
                size: o,
                className: l,
                maskAsset: u,
                positionRef: d,
                withLoadingIndicator: _,
                fileUri: h,
            } = e,
            [f, E] = r.useState(!1),
            [p, m] = r.useState(!0),
            [g, A] = r.useState(!1),
            I = r.useRef(null),
            T = r.useRef(null),
            N = h ?? (0, S.zg)(n, { isPreview: !t || !f || !s, size: o }),
            v = r.useCallback(() => {
                m(!1);
            }, []),
            R = r.useCallback(() => {
                A(!0);
            }, []);
        return (r.useEffect(() => {
            if (null != I.current) {
                let { isVisible: e } = I.current;
                E(e);
            }
        }, []),
        r.useLayoutEffect(() => {
            T.current?.complete === !0 && m(!1);
        }, []),
        null == N)
            ? null
            : (0, i.jsx)(c.L, {
                  innerRef: d,
                  ref: I,
                  onChange: E,
                  threshold: 0.7,
                  children: (0, i.jsx)("div", {
                      className: a()(l, C.__invalid_pngImageWrapper),
                      ref: d,
                      children: (0, i.jsx)(L, {
                          hasError: g,
                          isLoading: p,
                          maskAsset: u,
                          size: o,
                          withLoadingIndicator: _,
                          children: O(
                              (0, i.jsx)("img", {
                                  className: C.r3,
                                  alt: b(n),
                                  src: N,
                                  draggable: !1,
                                  onError: R,
                                  onLoad: v,
                                  onContextMenu: y,
                                  ref: T,
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
                positionRef: o,
                size: l,
                sticker: c,
            } = e,
            _ = (0, d.bG)([p.Ay], () => p.Ay.useReducedMotion),
            m = r.useRef(null),
            A = { transform: `scale(${_ ? 1 : 1 / n})`, opacity: 0 },
            I = (0, f.p)(a, { ref: m, from: A, enter: { transform: "scale(1)", opacity: 1 }, leave: A, config: v }),
            T = r.useRef(null),
            S = (0, E.z)(
                { ref: T, transform: a || _ ? "translateY(0)" : "translateY(-25px)", opacity: +!!a, config: R },
                "animate-always",
            );
        return (
            (0, u.useChain)(a ? [m, T] : [T, m], a ? [0, 0.0625] : [0, 0]),
            I(
                (e, r) =>
                    r &&
                    (0, i.jsx)(g.nE, {
                        className: C.O2,
                        fixed: !0,
                        align: "center",
                        position: "center",
                        targetRef: o,
                        children: () =>
                            (0, i.jsxs)("div", {
                                className: C._7,
                                children: [
                                    (0, i.jsx)(u.animated.div, {
                                        className: C.tm,
                                        style: e,
                                        children: (0, i.jsx)(M, {
                                            className: C.__invalid_overlaySticker,
                                            disableAnimation: t,
                                            enlargeOnInteraction: !1,
                                            isInteracting: a,
                                            maskAsset: !1,
                                            sticker: c,
                                            size: Math.round(l * n),
                                            withLoadingIndicator: !1,
                                        }),
                                    }),
                                    s &&
                                        (0, i.jsx)(u.animated.div, {
                                            className: C.av,
                                            style: S,
                                            children: (0, i.jsx)(h.E, {
                                                variant: "text-sm/medium",
                                                className: C.FZ,
                                                children: c.name,
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
                enlargeScaleFactor: o = 1.55,
                maskAsset: l = !1,
                size: u,
                sticker: d,
                className: c,
                withLoadingIndicator: _,
                assetData: h,
                fileUri: f,
                onError: E,
            } = e,
            p = (0, A.j)(),
            m = (0, I.Th)(t) && !n,
            g = r.useRef(null);
        if (null == d) return null;
        let S = d.format_type === T.TG.LOTTIE ? D : P;
        return (0, i.jsxs)(
            r.Fragment,
            {
                children: [
                    (0, i.jsx)(S, {
                        shouldAnimate: m,
                        isFocused: p,
                        size: u,
                        sticker: d,
                        className: c,
                        maskAsset: l,
                        positionRef: g,
                        withLoadingIndicator: _,
                        assetData: h,
                        fileUri: f,
                        onError: E,
                    }),
                    s &&
                        (0, i.jsx)(w, {
                            disableAnimation: n,
                            enlargeScaleFactor: o,
                            enlargeWithName: a,
                            isInteracting: t,
                            positionRef: g,
                            size: u,
                            sticker: d,
                        }),
                ],
            },
            `${d.id},${u}`,
        );
    },
    x = M;
