"use strict";
n.d(t, { A: () => M, h: () => O });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(284009),
    l = n.n(o),
    u = n(563495),
    c = n(311907),
    d = n(230109),
    _ = n(397927),
    f = n(775602),
    p = n(776231),
    h = n(750506),
    m = n(218394),
    g = n(256449),
    E = n(842086),
    A = n(378058),
    I = n(985018),
    T = n(259843);
let y = (e) => e.preventDefault(),
    S = 0.7,
    v = 33,
    C = 1.55,
    b = { tension: 1100, friction: 40 },
    N = { tension: 1600, friction: 60 };
function R(e, t) {
    return i.cloneElement(e, {
        "data-type": "sticker",
        "data-id": t.id,
        "data-name": t.name,
        "data-format-type": t.format_type,
    });
}
function O(e) {
    let t = "description" in e && null != e.description ? `${e.name}, ${e.description}` : e.name;
    return I.intl.formatToPlainString(I.t.rk6pOw, { stickerName: t });
}
let D = (e) => {
        let { children: t, hasError: n, isLoading: i, maskAsset: a, size: o, withLoadingIndicator: l = !0 } = e,
            u = o >= v;
        return (0, r.jsxs)("div", {
            className: s()(T.c6, { [T.v2]: n || a }),
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
                size: a,
                sticker: s,
                fileUri: o,
                assetData: u,
                isFocused: c,
                className: d,
                maskAsset: _,
                positionRef: f,
                withLoadingIndicator: h,
                onError: m,
            } = e,
            g = i.useRef(null),
            E = i.useRef(null),
            [y, S] = i.useState(!0),
            [v, C] = i.useState(!1),
            b = i.useRef(!1);
        b.current = t && c;
        let N = null == o ? (0, A.zg)(s) : o;
        return (l()(null != N, `Unable to determine sticker asset URL. Sticker ID: ${s.id}`),
        i.useEffect(() => {
            if (null == g.current || null == N) return;
            let e = Math.min(2, (0, p.mZ)());
            (g.current.width = a * e), (g.current.height = a * e);
            let t = !1;
            return (
                (async () => {
                    let { default: e } = await n.e("9330").then(n.bind(n, 140521));
                    null != g.current &&
                        ((E.current = new e({
                            canvas: g.current,
                            animationId: s.id,
                            assetUrl: N,
                            assetData: u,
                            onInitialDraw: () => {
                                t || S(!1);
                            },
                            onError: () => {
                                t || (S(!1), C(!0), m?.());
                            },
                        })),
                        b.current && E.current.setState(!0));
                })(),
                () => {
                    E.current?.drop(), (E.current = null), (t = !0);
                }
            );
        }, [N, a, s.id, u, m]),
        i.useEffect(() => {
            let e;
            t || (e = 0), E.current?.setState(t && c, e);
        }, [s, t, c]),
        null == N)
            ? null
            : (0, r.jsx)("div", {
                  role: "img",
                  className: d,
                  "aria-label": v ? I.intl.string(I.t.yEvsK9) : O(s),
                  ref: f,
                  children: (0, r.jsx)(D, {
                      hasError: v,
                      isLoading: y,
                      maskAsset: _,
                      size: a,
                      withLoadingIndicator: h,
                      children: R((0, r.jsx)("canvas", { className: T.ex, ref: g }), s),
                  }),
              });
    },
    w = (e) => {
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
            [p, h] = i.useState(!1),
            [m, g] = i.useState(!0),
            [E, I] = i.useState(!1),
            v = i.useRef(null),
            C = i.useRef(null),
            b = f ?? (0, A.zg)(n, { isPreview: !t || !p || !a, size: o }),
            N = i.useCallback(() => {
                g(!1);
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
            C.current?.complete === !0 && g(!1);
        }, []),
        null == b)
            ? null
            : (0, r.jsx)(d.L, {
                  innerRef: c,
                  ref: v,
                  onChange: h,
                  threshold: S,
                  children: (0, r.jsx)("div", {
                      className: s()(l, T.__invalid_pngImageWrapper),
                      ref: c,
                      children: (0, r.jsx)(D, {
                          hasError: E,
                          isLoading: m,
                          maskAsset: u,
                          size: o,
                          withLoadingIndicator: _,
                          children: R(
                              (0, r.jsx)("img", {
                                  className: T.r3,
                                  alt: O(n),
                                  src: b,
                                  draggable: !1,
                                  onError: L,
                                  onLoad: N,
                                  onContextMenu: y,
                                  ref: C,
                              }),
                              n,
                          ),
                      }),
                  }),
              });
    },
    x = (e) => {
        let {
                disableAnimation: t,
                enlargeScaleFactor: n,
                enlargeWithName: a,
                isInteracting: s,
                positionRef: o,
                size: l,
                sticker: d,
            } = e,
            p = (0, c.bG)([f.A], () => f.A.useReducedMotion),
            m = i.useRef(null),
            g = { transform: `scale(${p ? 1 : 1 / n})`, opacity: 0 },
            E = (0, _.pnh)(s, { ref: m, from: g, enter: { transform: "scale(1)", opacity: 1 }, leave: g, config: b }),
            A = i.useRef(null),
            I = (0, _.zhh)(
                { ref: A, transform: s || p ? "translateY(0)" : "translateY(-25px)", opacity: +!!s, config: N },
                "animate-always",
            );
        return (
            (0, u.useChain)(s ? [m, A] : [A, m], s ? [0, 0.0625] : [0, 0]),
            E(
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
                                            isInteracting: s,
                                            maskAsset: !1,
                                            sticker: d,
                                            size: Math.round(l * n),
                                            withLoadingIndicator: !1,
                                        }),
                                    }),
                                    a &&
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
                enlargeOnInteraction: a = !1,
                enlargeWithName: s = !0,
                enlargeScaleFactor: o = C,
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
            I = (0, g.Th)(t) && !n,
            T = i.useRef(null);
        if (null == c) return null;
        let y = c.format_type === E.TG.LOTTIE ? L : w;
        return (0, r.jsxs)(
            i.Fragment,
            {
                children: [
                    (0, r.jsx)(y, {
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
                    a &&
                        (0, r.jsx)(x, {
                            disableAnimation: n,
                            enlargeScaleFactor: o,
                            enlargeWithName: s,
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
    M = P;
