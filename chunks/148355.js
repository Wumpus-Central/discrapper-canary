"use strict";
n.d(t, { A: () => w, h: () => y });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(284009),
    o = n.n(l),
    d = n(53466),
    c = n(17928),
    u = n(269115),
    _ = n(395899),
    E = n(834730),
    A = n(866323),
    h = n(717421),
    I = n(775602),
    f = n(597098),
    p = n(750506),
    T = n(218394),
    m = n(256449),
    g = n(194004),
    S = n(68935),
    N = n(375708),
    C = n(11224);
function R(e) {
    return e.preventDefault();
}
let O = { tension: 1100, friction: 40 },
    L = { tension: 1600, friction: 60 };
function D(e, t) {
    return r.cloneElement(e, {
        "data-type": "sticker",
        "data-id": t.id,
        "data-name": t.name,
        "data-format-type": t.format_type,
    });
}
function y(e) {
    let t = "description" in e && null != e.description ? `${e.name}, ${e.description}` : e.name;
    return N.intl.formatToPlainString(N.t.rk6pOw, { stickerName: t });
}
function v(e) {
    let { children: t, hasError: n, isLoading: r, maskAsset: a, size: l, withLoadingIndicator: o = !0 } = e,
        d = l >= 33;
    return (0, i.jsxs)("div", {
        className: s()(C.c6, { [C.v2]: n || a }),
        style: { height: l, width: l },
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
            o && r && (0, i.jsx)("div", { className: C.Mz }),
        ],
    });
}
function b(e) {
    let {
            shouldAnimate: t,
            size: a,
            sticker: s,
            fileUri: l,
            assetData: d,
            isFocused: c,
            className: u,
            maskAsset: _,
            positionRef: E,
            withLoadingIndicator: A,
            onError: h,
        } = e,
        I = r.useRef(null),
        p = r.useRef(null),
        [T, m] = r.useState(!0),
        [g, R] = r.useState(!1),
        O = r.useRef(!1);
    O.current = t && c;
    let L = null == l ? (0, S.zg)(s) : l;
    return (o()(null != L, `Unable to determine sticker asset URL. Sticker ID: ${s.id}`),
    r.useEffect(() => {
        if (null == I.current || null == L) return;
        let e = Math.min(2, (0, f.mZ)());
        (I.current.width = a * e), (I.current.height = a * e);
        let t = !1;
        return (
            (async function () {
                if (null == L) return;
                let { default: e } = await Promise.all([n.e("70716"), n.e("9330")]).then(n.bind(n, 140521));
                null != I.current &&
                    ((p.current = new e({
                        canvas: I.current,
                        animationId: s.id,
                        assetUrl: L,
                        assetData: d,
                        onInitialDraw: () => {
                            t || m(!1);
                        },
                        onError: () => {
                            t || (m(!1), R(!0), h?.());
                        },
                    })),
                    O.current && p.current.setState(!0));
            })(),
            () => {
                p.current?.drop(), (p.current = null), (t = !0);
            }
        );
    }, [L, a, s.id, d, h]),
    r.useEffect(() => {
        let e;
        t || (e = 0), p.current?.setState(t && c, e);
    }, [s, t, c]),
    null == L)
        ? null
        : (0, i.jsx)("div", {
              role: "img",
              className: u,
              "aria-label": g ? N.intl.string(N.t.yEvsK9) : y(s),
              ref: E,
              children: (0, i.jsx)(v, {
                  hasError: g,
                  isLoading: T,
                  maskAsset: _,
                  size: a,
                  withLoadingIndicator: A,
                  children: D((0, i.jsx)("canvas", { className: C.ex, ref: I }), s),
              }),
          });
}
let M = (e) => {
        let {
                shouldAnimate: t,
                sticker: n,
                isFocused: a,
                size: l,
                className: o,
                maskAsset: d,
                positionRef: c,
                withLoadingIndicator: _,
                fileUri: E,
            } = e,
            [A, h] = r.useState(!1),
            [I, f] = r.useState(!0),
            [p, T] = r.useState(!1),
            m = r.useRef(null),
            g = r.useRef(null),
            N = E ?? (0, S.zg)(n, { isPreview: !t || !A || !a, size: l }),
            O = r.useCallback(() => {
                f(!1);
            }, []),
            L = r.useCallback(() => {
                T(!0);
            }, []);
        return (r.useEffect(() => {
            if (null != m.current) {
                let { isVisible: e } = m.current;
                h(e);
            }
        }, []),
        r.useLayoutEffect(() => {
            g.current?.complete === !0 && f(!1);
        }, []),
        null == N)
            ? null
            : (0, i.jsx)(u.L, {
                  innerRef: c,
                  ref: m,
                  onChange: h,
                  threshold: 0.7,
                  children: (0, i.jsx)("div", {
                      className: s()(o, C.__invalid_pngImageWrapper),
                      ref: c,
                      children: (0, i.jsx)(v, {
                          hasError: p,
                          isLoading: I,
                          maskAsset: d,
                          size: l,
                          withLoadingIndicator: _,
                          children: D(
                              (0, i.jsx)("img", {
                                  className: C.r3,
                                  alt: y(n),
                                  src: N,
                                  draggable: !1,
                                  onError: L,
                                  onLoad: O,
                                  onContextMenu: R,
                                  ref: g,
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
                positionRef: l,
                size: o,
                sticker: u,
            } = e,
            _ = (0, c.bG)([I.Ay], () => I.Ay.useReducedMotion),
            f = r.useRef(null),
            T = { transform: `scale(${_ ? 1 : 1 / n})`, opacity: 0 },
            m = (0, A.p)(s, { ref: f, from: T, enter: { transform: "scale(1)", opacity: 1 }, leave: T, config: O }),
            g = r.useRef(null),
            S = (0, h.z)(
                { ref: g, transform: s || _ ? "translateY(0)" : "translateY(-25px)", opacity: +!!s, config: L },
                "animate-always",
            );
        return (
            (0, d.useChain)(s ? [f, g] : [g, f], s ? [0, 0.0625] : [0, 0]),
            m(
                (e, r) =>
                    r &&
                    (0, i.jsx)(p.nE, {
                        className: C.O2,
                        fixed: !0,
                        align: "center",
                        position: "center",
                        targetRef: l,
                        children: () =>
                            (0, i.jsxs)("div", {
                                className: C._7,
                                children: [
                                    (0, i.jsx)(d.animated.div, {
                                        className: C.tm,
                                        style: e,
                                        children: (0, i.jsx)(U, {
                                            className: C.__invalid_overlaySticker,
                                            disableAnimation: t,
                                            enlargeOnInteraction: !1,
                                            isInteracting: s,
                                            maskAsset: !1,
                                            sticker: u,
                                            size: Math.round(o * n),
                                            withLoadingIndicator: !1,
                                        }),
                                    }),
                                    a &&
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
    };
function U(e) {
    let {
            isInteracting: t = !1,
            disableAnimation: n = !1,
            enlargeOnInteraction: a = !1,
            enlargeWithName: s = !0,
            enlargeScaleFactor: l = 1.55,
            maskAsset: o = !1,
            size: d,
            sticker: c,
            className: u,
            withLoadingIndicator: _,
            assetData: E,
            fileUri: A,
            onError: h,
        } = e,
        I = (0, T.j)(),
        f = (0, m.Th)(t) && !n,
        p = r.useRef(null);
    if (null == c) return null;
    let S = c.format_type === g.TG.LOTTIE ? b : M;
    return (0, i.jsxs)(
        r.Fragment,
        {
            children: [
                (0, i.jsx)(S, {
                    shouldAnimate: f,
                    isFocused: I,
                    size: d,
                    sticker: c,
                    className: u,
                    maskAsset: o,
                    positionRef: p,
                    withLoadingIndicator: _,
                    assetData: E,
                    fileUri: A,
                    onError: h,
                }),
                a &&
                    (0, i.jsx)(P, {
                        disableAnimation: n,
                        enlargeScaleFactor: l,
                        enlargeWithName: s,
                        isInteracting: t,
                        positionRef: p,
                        size: d,
                        sticker: c,
                    }),
            ],
        },
        `${c.id},${d}`,
    );
}
let w = U;
