n.d(t, { A: () => P, h: () => k });
var l = n(477900),
    i = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(284009),
    o = n.n(a),
    u = n(202091),
    c = n(17928),
    d = n(269115),
    h = n(395899),
    m = n(834730),
    p = n(866323),
    f = n(717421),
    g = n(775602),
    x = n(776231),
    S = n(750506),
    E = n(218394),
    y = n(256449),
    C = n(194004),
    A = n(378058),
    b = n(375708),
    I = n(193833);
function v(e) {
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
function k(e) {
    let t = "description" in e && null != e.description ? `${e.name}, ${e.description}` : e.name;
    return b.intl.formatToPlainString(b.t.rk6pOw, { stickerName: t });
}
function _(e) {
    let { children: t, hasError: n, isLoading: i, maskAsset: r, size: a, withLoadingIndicator: o = !0 } = e,
        u = a >= 33;
    return (0, l.jsxs)("div", {
        className: s()(I.c6, { [I.v2]: n || r }),
        style: { height: a, width: a },
        children: [
            n
                ? (0, l.jsxs)("div", {
                      className: I.z3,
                      children: [
                          (0, l.jsx)(h.d, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: I.ik,
                          }),
                          u &&
                              (0, l.jsx)(m.E, {
                                  className: I.kc,
                                  color: "text-default",
                                  variant: "text-sm/normal",
                                  children: b.intl.string(b.t["tWYWJ+"]),
                              }),
                      ],
                  })
                : t,
            o && i && (0, l.jsx)("div", { className: I.Mz }),
        ],
    });
}
function R(e) {
    let {
            shouldAnimate: t,
            size: r,
            sticker: s,
            fileUri: a,
            assetData: u,
            isFocused: c,
            className: d,
            maskAsset: h,
            positionRef: m,
            withLoadingIndicator: p,
            onError: f,
        } = e,
        g = i.useRef(null),
        S = i.useRef(null),
        [E, y] = i.useState(!0),
        [C, v] = i.useState(!1),
        N = i.useRef(!1);
    N.current = t && c;
    let T = null == a ? (0, A.zg)(s) : a;
    return (o()(null != T, `Unable to determine sticker asset URL. Sticker ID: ${s.id}`),
    i.useEffect(() => {
        if (null == g.current || null == T) return;
        let e = Math.min(2, (0, x.mZ)());
        ((g.current.width = r * e), (g.current.height = r * e));
        let t = !1;
        return (
            (async function () {
                if (null == T) return;
                let { default: e } = await Promise.all([n.e("570716"), n.e("709330")]).then(n.bind(n, 140521));
                null != g.current &&
                    ((S.current = new e({
                        canvas: g.current,
                        animationId: s.id,
                        assetUrl: T,
                        assetData: u,
                        onInitialDraw: () => {
                            t || y(!1);
                        },
                        onError: () => {
                            t || (y(!1), v(!0), f?.());
                        },
                    })),
                    N.current && S.current.setState(!0));
            })(),
            () => {
                (S.current?.drop(), (S.current = null), (t = !0));
            }
        );
    }, [T, r, s.id, u, f]),
    i.useEffect(() => {
        let e;
        (t || (e = 0), S.current?.setState(t && c, e));
    }, [s, t, c]),
    null == T)
        ? null
        : (0, l.jsx)("div", {
              role: "img",
              className: d,
              "aria-label": C ? b.intl.string(b.t.yEvsK9) : k(s),
              ref: m,
              children: (0, l.jsx)(_, {
                  hasError: C,
                  isLoading: E,
                  maskAsset: h,
                  size: r,
                  withLoadingIndicator: p,
                  children: j((0, l.jsx)("canvas", { className: I.ex, ref: g }), s),
              }),
          });
}
let w = (e) => {
        let {
                shouldAnimate: t,
                sticker: n,
                isFocused: r,
                size: a,
                className: o,
                maskAsset: u,
                positionRef: c,
                withLoadingIndicator: h,
                fileUri: m,
            } = e,
            [p, f] = i.useState(!1),
            [g, x] = i.useState(!0),
            [S, E] = i.useState(!1),
            y = i.useRef(null),
            C = i.useRef(null),
            b = m ?? (0, A.zg)(n, { isPreview: !t || !p || !r, size: a }),
            N = i.useCallback(() => {
                x(!1);
            }, []),
            T = i.useCallback(() => {
                E(!0);
            }, []);
        return (i.useEffect(() => {
            if (null != y.current) {
                let { isVisible: e } = y.current;
                f(e);
            }
        }, []),
        i.useLayoutEffect(() => {
            C.current?.complete === !0 && x(!1);
        }, []),
        null == b)
            ? null
            : (0, l.jsx)(d.L, {
                  innerRef: c,
                  ref: y,
                  onChange: f,
                  threshold: 0.7,
                  children: (0, l.jsx)("div", {
                      className: s()(o, I.__invalid_pngImageWrapper),
                      ref: c,
                      children: (0, l.jsx)(_, {
                          hasError: S,
                          isLoading: g,
                          maskAsset: u,
                          size: a,
                          withLoadingIndicator: h,
                          children: j(
                              (0, l.jsx)("img", {
                                  className: I.r3,
                                  alt: k(n),
                                  src: b,
                                  draggable: !1,
                                  onError: T,
                                  onLoad: N,
                                  onContextMenu: v,
                                  ref: C,
                              }),
                              n,
                          ),
                      }),
                  }),
              });
    },
    O = (e) => {
        let {
                disableAnimation: t,
                enlargeScaleFactor: n,
                enlargeWithName: r,
                isInteracting: s,
                positionRef: a,
                size: o,
                sticker: d,
            } = e,
            h = (0, c.bG)([g.Ay], () => g.Ay.useReducedMotion),
            x = i.useRef(null),
            E = { transform: `scale(${h ? 1 : 1 / n})`, opacity: 0 },
            y = (0, p.p)(s, { ref: x, from: E, enter: { transform: "scale(1)", opacity: 1 }, leave: E, config: N }),
            C = i.useRef(null),
            A = (0, f.z)(
                { ref: C, transform: s || h ? "translateY(0)" : "translateY(-25px)", opacity: +!!s, config: T },
                "animate-always",
            );
        return (
            (0, u.useChain)(s ? [x, C] : [C, x], s ? [0, 0.0625] : [0, 0]),
            y(
                (e, i) =>
                    i &&
                    (0, l.jsx)(S.nE, {
                        className: I.O2,
                        fixed: !0,
                        align: "center",
                        position: "center",
                        targetRef: a,
                        children: () =>
                            (0, l.jsxs)("div", {
                                className: I._7,
                                children: [
                                    (0, l.jsx)(u.animated.div, {
                                        className: I.tm,
                                        style: e,
                                        children: (0, l.jsx)(L, {
                                            className: I.__invalid_overlaySticker,
                                            disableAnimation: t,
                                            enlargeOnInteraction: !1,
                                            isInteracting: s,
                                            maskAsset: !1,
                                            sticker: d,
                                            size: Math.round(o * n),
                                            withLoadingIndicator: !1,
                                        }),
                                    }),
                                    r &&
                                        (0, l.jsx)(u.animated.div, {
                                            className: I.av,
                                            style: A,
                                            children: (0, l.jsx)(m.E, {
                                                variant: "text-sm/medium",
                                                className: I.FZ,
                                                children: d.name,
                                            }),
                                        }),
                                ],
                            }),
                    }),
            )
        );
    };
function L(e) {
    let {
            isInteracting: t = !1,
            disableAnimation: n = !1,
            enlargeOnInteraction: r = !1,
            enlargeWithName: s = !0,
            enlargeScaleFactor: a = 1.55,
            maskAsset: o = !1,
            size: u,
            sticker: c,
            className: d,
            withLoadingIndicator: h,
            assetData: m,
            fileUri: p,
            onError: f,
        } = e,
        g = (0, E.j)(),
        x = (0, y.Th)(t) && !n,
        S = i.useRef(null);
    if (null == c) return null;
    let A = c.format_type === C.TG.LOTTIE ? R : w;
    return (0, l.jsxs)(
        i.Fragment,
        {
            children: [
                (0, l.jsx)(A, {
                    shouldAnimate: x,
                    isFocused: g,
                    size: u,
                    sticker: c,
                    className: d,
                    maskAsset: o,
                    positionRef: S,
                    withLoadingIndicator: h,
                    assetData: m,
                    fileUri: p,
                    onError: f,
                }),
                r &&
                    (0, l.jsx)(O, {
                        disableAnimation: n,
                        enlargeScaleFactor: a,
                        enlargeWithName: s,
                        isInteracting: t,
                        positionRef: S,
                        size: u,
                        sticker: c,
                    }),
            ],
        },
        `${c.id},${u}`,
    );
}
let P = L;
