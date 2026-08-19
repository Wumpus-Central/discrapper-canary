"use strict";
n.d(t, { A: () => k, h: () => b });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(284009),
    o = n.n(a),
    u = n(53466),
    c = n(17928),
    d = n(269115),
    h = n(395899),
    m = n(834730),
    f = n(866323),
    p = n(717421),
    g = n(775602),
    x = n(776231),
    A = n(750506),
    E = n(218394),
    C = n(256449),
    I = n(194004),
    y = n(68935),
    S = n(375708),
    v = n(11224);
function _(e) {
    return e.preventDefault();
}
let N = { tension: 1100, friction: 40 },
    T = { tension: 1600, friction: 60 };
function j(e, t) {
    return i.cloneElement(e, {
        "data-type": "sticker",
        "data-id": t.id,
        "data-name": t.name,
        "data-format-type": t.format_type,
    });
}
function b(e) {
    let t = "description" in e && null != e.description ? `${e.name}, ${e.description}` : e.name;
    return S.intl.formatToPlainString(S.t.rk6pOw, { stickerName: t });
}
function R(e) {
    let { children: t, hasError: n, isLoading: i, maskAsset: s, size: a, withLoadingIndicator: o = !0 } = e,
        u = a >= 33;
    return (0, l.jsxs)("div", {
        className: r()(v.c6, { [v.v2]: n || s }),
        style: { height: a, width: a },
        children: [
            n
                ? (0, l.jsxs)("div", {
                      className: v.z3,
                      children: [
                          (0, l.jsx)(h.d, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: v.ik,
                          }),
                          u &&
                              (0, l.jsx)(m.E, {
                                  className: v.kc,
                                  color: "text-default",
                                  variant: "text-sm/normal",
                                  children: S.intl.string(S.t["tWYWJ+"]),
                              }),
                      ],
                  })
                : t,
            o && i && (0, l.jsx)("div", { className: v.Mz }),
        ],
    });
}
function L(e) {
    let {
            shouldAnimate: t,
            size: s,
            sticker: r,
            fileUri: a,
            assetData: u,
            isFocused: c,
            className: d,
            maskAsset: h,
            positionRef: m,
            withLoadingIndicator: f,
            onError: p,
        } = e,
        g = i.useRef(null),
        A = i.useRef(null),
        [E, C] = i.useState(!0),
        [I, _] = i.useState(!1),
        N = i.useRef(!1);
    N.current = t && c;
    let T = null == a ? (0, y.zg)(r) : a;
    return (o()(null != T, `Unable to determine sticker asset URL. Sticker ID: ${r.id}`),
    i.useEffect(() => {
        if (null == g.current || null == T) return;
        let e = Math.min(2, (0, x.mZ)());
        (g.current.width = s * e), (g.current.height = s * e);
        let t = !1;
        return (
            (async function () {
                if (null == T) return;
                let { default: e } = await Promise.all([n.e("570716"), n.e("709330")]).then(n.bind(n, 140521));
                null != g.current &&
                    ((A.current = new e({
                        canvas: g.current,
                        animationId: r.id,
                        assetUrl: T,
                        assetData: u,
                        onInitialDraw: () => {
                            t || C(!1);
                        },
                        onError: () => {
                            t || (C(!1), _(!0), p?.());
                        },
                    })),
                    N.current && A.current.setState(!0));
            })(),
            () => {
                A.current?.drop(), (A.current = null), (t = !0);
            }
        );
    }, [T, s, r.id, u, p]),
    i.useEffect(() => {
        let e;
        t || (e = 0), A.current?.setState(t && c, e);
    }, [r, t, c]),
    null == T)
        ? null
        : (0, l.jsx)("div", {
              role: "img",
              className: d,
              "aria-label": I ? S.intl.string(S.t.yEvsK9) : b(r),
              ref: m,
              children: (0, l.jsx)(R, {
                  hasError: I,
                  isLoading: E,
                  maskAsset: h,
                  size: s,
                  withLoadingIndicator: f,
                  children: j((0, l.jsx)("canvas", { className: v.ex, ref: g }), r),
              }),
          });
}
let O = (e) => {
        let {
                shouldAnimate: t,
                sticker: n,
                isFocused: s,
                size: a,
                className: o,
                maskAsset: u,
                positionRef: c,
                withLoadingIndicator: h,
                fileUri: m,
            } = e,
            [f, p] = i.useState(!1),
            [g, x] = i.useState(!0),
            [A, E] = i.useState(!1),
            C = i.useRef(null),
            I = i.useRef(null),
            S = m ?? (0, y.zg)(n, { isPreview: !t || !f || !s, size: a }),
            N = i.useCallback(() => {
                x(!1);
            }, []),
            T = i.useCallback(() => {
                E(!0);
            }, []);
        return (i.useEffect(() => {
            if (null != C.current) {
                let { isVisible: e } = C.current;
                p(e);
            }
        }, []),
        i.useLayoutEffect(() => {
            I.current?.complete === !0 && x(!1);
        }, []),
        null == S)
            ? null
            : (0, l.jsx)(d.L, {
                  innerRef: c,
                  ref: C,
                  onChange: p,
                  threshold: 0.7,
                  children: (0, l.jsx)("div", {
                      className: r()(o, v.__invalid_pngImageWrapper),
                      ref: c,
                      children: (0, l.jsx)(R, {
                          hasError: A,
                          isLoading: g,
                          maskAsset: u,
                          size: a,
                          withLoadingIndicator: h,
                          children: j(
                              (0, l.jsx)("img", {
                                  className: v.r3,
                                  alt: b(n),
                                  src: S,
                                  draggable: !1,
                                  onError: T,
                                  onLoad: N,
                                  onContextMenu: _,
                                  ref: I,
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
            h = (0, c.bG)([g.Ay], () => g.Ay.useReducedMotion),
            x = i.useRef(null),
            E = { transform: `scale(${h ? 1 : 1 / n})`, opacity: 0 },
            C = (0, f.p)(r, { ref: x, from: E, enter: { transform: "scale(1)", opacity: 1 }, leave: E, config: N }),
            I = i.useRef(null),
            y = (0, p.z)(
                { ref: I, transform: r || h ? "translateY(0)" : "translateY(-25px)", opacity: +!!r, config: T },
                "animate-always",
            );
        return (
            (0, u.useChain)(r ? [x, I] : [I, x], r ? [0, 0.0625] : [0, 0]),
            C(
                (e, i) =>
                    i &&
                    (0, l.jsx)(A.nE, {
                        className: v.O2,
                        fixed: !0,
                        align: "center",
                        position: "center",
                        targetRef: a,
                        children: () =>
                            (0, l.jsxs)("div", {
                                className: v._7,
                                children: [
                                    (0, l.jsx)(u.animated.div, {
                                        className: v.tm,
                                        style: e,
                                        children: (0, l.jsx)(w, {
                                            className: v.__invalid_overlaySticker,
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
                                        (0, l.jsx)(u.animated.div, {
                                            className: v.av,
                                            style: y,
                                            children: (0, l.jsx)(m.E, {
                                                variant: "text-sm/medium",
                                                className: v.FZ,
                                                children: d.name,
                                            }),
                                        }),
                                ],
                            }),
                    }),
            )
        );
    };
function w(e) {
    let {
            isInteracting: t = !1,
            disableAnimation: n = !1,
            enlargeOnInteraction: s = !1,
            enlargeWithName: r = !0,
            enlargeScaleFactor: a = 1.55,
            maskAsset: o = !1,
            size: u,
            sticker: c,
            className: d,
            withLoadingIndicator: h,
            assetData: m,
            fileUri: f,
            onError: p,
        } = e,
        g = (0, E.j)(),
        x = (0, C.Th)(t) && !n,
        A = i.useRef(null);
    if (null == c) return null;
    let y = c.format_type === I.TG.LOTTIE ? L : O;
    return (0, l.jsxs)(
        i.Fragment,
        {
            children: [
                (0, l.jsx)(y, {
                    shouldAnimate: x,
                    isFocused: g,
                    size: u,
                    sticker: c,
                    className: d,
                    maskAsset: o,
                    positionRef: A,
                    withLoadingIndicator: h,
                    assetData: m,
                    fileUri: f,
                    onError: p,
                }),
                s &&
                    (0, l.jsx)(M, {
                        disableAnimation: n,
                        enlargeScaleFactor: a,
                        enlargeWithName: r,
                        isInteracting: t,
                        positionRef: A,
                        size: u,
                        sticker: c,
                    }),
            ],
        },
        `${c.id},${u}`,
    );
}
let k = w;
