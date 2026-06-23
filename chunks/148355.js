"use strict";
n.d(t, { A: () => x, h: () => b });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(284009),
    l = n.n(o),
    u = n(308186),
    c = n(17928),
    d = n(269115),
    _ = n(395899),
    h = n(834730),
    f = n(866323),
    p = n(717421),
    E = n(775602),
    m = n(776231),
    g = n(750506),
    A = n(218394),
    I = n(256449),
    T = n(194004),
    S = n(68935),
    y = n(375708),
    C = n(554896);
function N(e) {
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
    return y.intl.formatToPlainString(y.t.rk6pOw, { stickerName: t });
}
let D = (e) => {
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
                                  children: y.intl.string(y.t["tWYWJ+"]),
                              }),
                      ],
                  })
                : t,
            l && r && (0, i.jsx)("div", { className: C.Mz }),
        ],
    });
};
function L(e) {
    let {
            shouldAnimate: t,
            size: s,
            sticker: a,
            fileUri: o,
            assetData: u,
            isFocused: c,
            className: d,
            maskAsset: _,
            positionRef: h,
            withLoadingIndicator: f,
            onError: p,
        } = e,
        E = r.useRef(null),
        g = r.useRef(null),
        [A, I] = r.useState(!0),
        [T, N] = r.useState(!1),
        v = r.useRef(!1);
    v.current = t && c;
    let R = null == o ? (0, S.zg)(a) : o;
    return (l()(null != R, `Unable to determine sticker asset URL. Sticker ID: ${a.id}`),
    r.useEffect(() => {
        if (null == E.current || null == R) return;
        let e = Math.min(2, (0, m.mZ)());
        (E.current.width = s * e), (E.current.height = s * e);
        let t = !1;
        return (
            (async () => {
                let { default: e } = await Promise.all([n.e("70716"), n.e("9330")]).then(n.bind(n, 140521));
                null != E.current &&
                    ((g.current = new e({
                        canvas: E.current,
                        animationId: a.id,
                        assetUrl: R,
                        assetData: u,
                        onInitialDraw: () => {
                            t || I(!1);
                        },
                        onError: () => {
                            t || (I(!1), N(!0), p?.());
                        },
                    })),
                    v.current && g.current.setState(!0));
            })(),
            () => {
                g.current?.drop(), (g.current = null), (t = !0);
            }
        );
    }, [R, s, a.id, u, p]),
    r.useEffect(() => {
        let e;
        t || (e = 0), g.current?.setState(t && c, e);
    }, [a, t, c]),
    null == R)
        ? null
        : (0, i.jsx)("div", {
              role: "img",
              className: d,
              "aria-label": T ? y.intl.string(y.t.yEvsK9) : b(a),
              ref: h,
              children: (0, i.jsx)(D, {
                  hasError: T,
                  isLoading: A,
                  maskAsset: _,
                  size: s,
                  withLoadingIndicator: f,
                  children: O((0, i.jsx)("canvas", { className: C.ex, ref: E }), a),
              }),
          });
}
let w = (e) => {
        let {
                shouldAnimate: t,
                sticker: n,
                isFocused: s,
                size: o,
                className: l,
                maskAsset: u,
                positionRef: c,
                withLoadingIndicator: _,
                fileUri: h,
            } = e,
            [f, p] = r.useState(!1),
            [E, m] = r.useState(!0),
            [g, A] = r.useState(!1),
            I = r.useRef(null),
            T = r.useRef(null),
            y = h ?? (0, S.zg)(n, { isPreview: !t || !f || !s, size: o }),
            v = r.useCallback(() => {
                m(!1);
            }, []),
            R = r.useCallback(() => {
                A(!0);
            }, []);
        return (r.useEffect(() => {
            if (null != I.current) {
                let { isVisible: e } = I.current;
                p(e);
            }
        }, []),
        r.useLayoutEffect(() => {
            T.current?.complete === !0 && m(!1);
        }, []),
        null == y)
            ? null
            : (0, i.jsx)(d.L, {
                  innerRef: c,
                  ref: I,
                  onChange: p,
                  threshold: 0.7,
                  children: (0, i.jsx)("div", {
                      className: a()(l, C.__invalid_pngImageWrapper),
                      ref: c,
                      children: (0, i.jsx)(D, {
                          hasError: g,
                          isLoading: E,
                          maskAsset: u,
                          size: o,
                          withLoadingIndicator: _,
                          children: O(
                              (0, i.jsx)("img", {
                                  className: C.r3,
                                  alt: b(n),
                                  src: y,
                                  draggable: !1,
                                  onError: R,
                                  onLoad: v,
                                  onContextMenu: N,
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
            _ = (0, c.bG)([E.Ay], () => E.Ay.useReducedMotion),
            m = r.useRef(null),
            A = { transform: `scale(${_ ? 1 : 1 / n})`, opacity: 0 },
            I = (0, f.p)(a, { ref: m, from: A, enter: { transform: "scale(1)", opacity: 1 }, leave: A, config: v }),
            T = r.useRef(null),
            S = (0, p.z)(
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
                                        children: (0, i.jsx)(P, {
                                            className: C.__invalid_overlaySticker,
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
                                        (0, i.jsx)(u.animated.div, {
                                            className: C.av,
                                            style: S,
                                            children: (0, i.jsx)(h.E, {
                                                variant: "text-sm/medium",
                                                className: C.FZ,
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
                assetData: h,
                fileUri: f,
                onError: p,
            } = e,
            E = (0, A.j)(),
            m = (0, I.Th)(t) && !n,
            g = r.useRef(null);
        if (null == c) return null;
        let S = c.format_type === T.TG.LOTTIE ? L : w;
        return (0, i.jsxs)(
            r.Fragment,
            {
                children: [
                    (0, i.jsx)(S, {
                        shouldAnimate: m,
                        isFocused: E,
                        size: u,
                        sticker: c,
                        className: d,
                        maskAsset: l,
                        positionRef: g,
                        withLoadingIndicator: _,
                        assetData: h,
                        fileUri: f,
                        onError: p,
                    }),
                    s &&
                        (0, i.jsx)(M, {
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
