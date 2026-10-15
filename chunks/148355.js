n.d(t, { A: () => M, h: () => _ });
var l = n(477900),
    i = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(284009),
    o = n.n(a),
    u = n(308941),
    c = n(17928),
    d = n(269115),
    h = n(395899),
    m = n(834730),
    f = n(866323),
    p = n(717421),
    g = n(775602),
    x = n(776231),
    E = n(750506),
    S = n(218394),
    y = n(256449),
    C = n(194004),
    A = n(378058),
    I = n(105292),
    b = n(193833);
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
function _(e) {
    let t = "description" in e && null != e.description ? `${e.name}, ${e.description}` : e.name;
    return I.intl.formatToPlainString(I.t.rk6pOw, { stickerName: t });
}
function k(e) {
    let { children: t, hasError: n, isLoading: i, maskAsset: r, size: a, withLoadingIndicator: o = !0 } = e,
        u = a >= 33;
    return (0, l.jsxs)("div", {
        className: s()(b.c6, { [b.v2]: n || r }),
        style: { height: a, width: a },
        children: [
            n
                ? (0, l.jsxs)("div", {
                      className: b.z3,
                      children: [
                          (0, l.jsx)(h.d, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: b.ik,
                          }),
                          u &&
                              (0, l.jsx)(m.E, {
                                  className: b.kc,
                                  color: "text-default",
                                  variant: "text-sm/normal",
                                  children: I.intl.string(I.t["tWYWJ+"]),
                              }),
                      ],
                  })
                : t,
            o && i && (0, l.jsx)("div", { className: b.Mz }),
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
            withLoadingIndicator: f,
            onError: p,
        } = e,
        g = i.useRef(null),
        E = i.useRef(null),
        [S, y] = i.useState(!0),
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
                    ((E.current = new e({
                        canvas: g.current,
                        animationId: s.id,
                        assetUrl: T,
                        assetData: u,
                        onInitialDraw: () => {
                            t || y(!1);
                        },
                        onError: () => {
                            t || (y(!1), v(!0), p?.());
                        },
                    })),
                    N.current && E.current.setState(!0));
            })(),
            () => {
                (E.current?.drop(), (E.current = null), (t = !0));
            }
        );
    }, [T, r, s.id, u, p]),
    i.useEffect(() => {
        let e;
        (t || (e = 0), E.current?.setState(t && c, e));
    }, [s, t, c]),
    null == T)
        ? null
        : (0, l.jsx)("div", {
              role: "img",
              className: d,
              "aria-label": C ? I.intl.string(I.t.yEvsK9) : _(s),
              ref: m,
              children: (0, l.jsx)(k, {
                  hasError: C,
                  isLoading: S,
                  maskAsset: h,
                  size: r,
                  withLoadingIndicator: f,
                  children: j((0, l.jsx)("canvas", { className: b.ex, ref: g }), s),
              }),
          });
}
let O = (e) => {
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
            [f, p] = i.useState(!1),
            [g, x] = i.useState(!0),
            [E, S] = i.useState(!1),
            y = i.useRef(null),
            C = i.useRef(null),
            I = m ?? (0, A.zg)(n, { isPreview: !t || !f || !r, size: a }),
            N = i.useCallback(() => {
                x(!1);
            }, []),
            T = i.useCallback(() => {
                S(!0);
            }, []);
        return (i.useEffect(() => {
            if (null != y.current) {
                let { isVisible: e } = y.current;
                p(e);
            }
        }, []),
        i.useLayoutEffect(() => {
            C.current?.complete === !0 && x(!1);
        }, []),
        null == I)
            ? null
            : (0, l.jsx)(d.L, {
                  innerRef: c,
                  ref: y,
                  onChange: p,
                  threshold: 0.7,
                  children: (0, l.jsx)("div", {
                      className: s()(o, b.__invalid_pngImageWrapper),
                      ref: c,
                      children: (0, l.jsx)(k, {
                          hasError: E,
                          isLoading: g,
                          maskAsset: u,
                          size: a,
                          withLoadingIndicator: h,
                          children: j(
                              (0, l.jsx)("img", {
                                  className: b.r3,
                                  alt: _(n),
                                  src: I,
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
    L = (e) => {
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
            S = { transform: `scale(${h ? 1 : 1 / n})`, opacity: 0 },
            y = (0, f.p)(s, { ref: x, from: S, enter: { transform: "scale(1)", opacity: 1 }, leave: S, config: N }),
            C = i.useRef(null),
            A = (0, p.z)(
                { ref: C, transform: s || h ? "translateY(0)" : "translateY(-25px)", opacity: +!!s, config: T },
                "animate-always",
            );
        return (
            (0, u.useChain)(s ? [x, C] : [C, x], s ? [0, 0.0625] : [0, 0]),
            y(
                (e, i) =>
                    i &&
                    (0, l.jsx)(E.nE, {
                        className: b.O2,
                        fixed: !0,
                        align: "center",
                        position: "center",
                        targetRef: a,
                        children: () =>
                            (0, l.jsxs)("div", {
                                className: b._7,
                                children: [
                                    (0, l.jsx)(u.animated.div, {
                                        className: b.tm,
                                        style: e,
                                        children: (0, l.jsx)(w, {
                                            className: b.__invalid_overlaySticker,
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
                                            className: b.av,
                                            style: A,
                                            children: (0, l.jsx)(m.E, {
                                                variant: "text-sm/medium",
                                                className: b.FZ,
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
            enlargeOnInteraction: r = !1,
            enlargeWithName: s = !0,
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
        g = (0, S.j)(),
        x = (0, y.Th)(t) && !n,
        E = i.useRef(null);
    if (null == c) return null;
    let A = c.format_type === C.TG.LOTTIE ? R : O;
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
                    positionRef: E,
                    withLoadingIndicator: h,
                    assetData: m,
                    fileUri: f,
                    onError: p,
                }),
                r &&
                    (0, l.jsx)(L, {
                        disableAnimation: n,
                        enlargeScaleFactor: a,
                        enlargeWithName: s,
                        isInteracting: t,
                        positionRef: E,
                        size: u,
                        sticker: c,
                    }),
            ],
        },
        `${c.id},${u}`,
    );
}
let M = w;
