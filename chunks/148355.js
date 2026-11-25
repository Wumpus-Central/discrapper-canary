var l = n(477900),
    i = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(284009),
    o = n.n(a),
    u = n(156150),
    c = n(855986),
    d = n(831259),
    h = n(395899),
    m = n(834730),
    f = n(866323),
    p = n(717421),
    g = n(775602),
    x = n(776231),
    E = n(750506),
    y = n(218394),
    S = n(256449),
    A = n(832628),
    C = n(378058),
    I = n(792996),
    b = n(193833);
function v(e) {
    return e.preventDefault();
}
let N = { tension: 1100, friction: 40 },
    j = { tension: 1600, friction: 60 };
function T(e, t) {
    return i.cloneElement(e, {
        "data-type": "sticker",
        "data-id": t.id,
        "data-name": t.name,
        "data-format-type": t.format_type,
    });
}
function k(e) {
    let t = "description" in e && null != e.description ? `${e.name}, ${e.description}` : e.name;
    return I.intl.formatToPlainString(I.t.rk6pOw, { stickerName: t });
}
function _(e) {
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
                          (0, l.jsx)(h.StickerSadIcon, {
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
                                  variant: "body-sm/normal",
                                  children: I.intl.string(I.t["tWYWJ+"]),
                              }),
                      ],
                  })
                : t,
            o && i && (0, l.jsx)("div", { className: b.Mz }),
        ],
    });
}
function O(e) {
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
        [y, S] = i.useState(!0),
        [A, v] = i.useState(!1),
        N = i.useRef(!1);
    N.current = t && c;
    let j = null == a ? (0, C.zg)(s) : a;
    return (o()(null != j, `Unable to determine sticker asset URL. Sticker ID: ${s.id}`),
    i.useEffect(() => {
        if (null == g.current || null == j) return;
        let e = Math.min(2, (0, x.mZ)());
        ((g.current.width = r * e), (g.current.height = r * e));
        let t = !1;
        return (
            !(async function () {
                if (null == j) return;
                let { default: e } = await Promise.all([n.e(570716), n.e(709330)]).then(n.bind(n, 140521));
                null != g.current &&
                    ((E.current = new e({
                        canvas: g.current,
                        animationId: s.id,
                        assetUrl: j,
                        assetData: u,
                        onInitialDraw: () => {
                            t || S(!1);
                        },
                        onError: () => {
                            t || (S(!1), v(!0), p?.());
                        },
                    })),
                    N.current && E.current.setState(!0));
            })(),
            () => {
                (E.current?.drop(), (E.current = null), (t = !0));
            }
        );
    }, [j, r, s.id, u, p]),
    i.useEffect(() => {
        let e;
        (t || (e = 0), E.current?.setState(t && c, e));
    }, [s, t, c]),
    null == j)
        ? null
        : (0, l.jsx)("div", {
              role: "img",
              className: d,
              "aria-label": A ? I.intl.string(I.t.yEvsK9) : k(s),
              ref: m,
              children: (0, l.jsx)(_, {
                  hasError: A,
                  isLoading: y,
                  maskAsset: h,
                  size: r,
                  withLoadingIndicator: f,
                  children: T((0, l.jsx)("canvas", { className: b.ex, ref: g }), s),
              }),
          });
}
let R = (e) => {
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
            [E, y] = i.useState(!1),
            S = i.useRef(null),
            A = i.useRef(null),
            I = m ?? (0, C.zg)(n, { isPreview: !t || !f || !r, size: a }),
            N = i.useCallback(() => {
                x(!1);
            }, []),
            j = i.useCallback(() => {
                y(!0);
            }, []);
        return (i.useEffect(() => {
            if (null != S.current) {
                let { isVisible: e } = S.current;
                p(e);
            }
        }, []),
        i.useLayoutEffect(() => {
            A.current?.complete === !0 && x(!1);
        }, []),
        null == I)
            ? null
            : (0, l.jsx)(d.L, {
                  innerRef: c,
                  ref: S,
                  onChange: p,
                  threshold: 0.7,
                  children: (0, l.jsx)("div", {
                      className: s()(o, b.__invalid_pngImageWrapper),
                      ref: c,
                      children: (0, l.jsx)(_, {
                          hasError: E,
                          isLoading: g,
                          maskAsset: u,
                          size: a,
                          withLoadingIndicator: h,
                          children: T(
                              (0, l.jsx)("img", {
                                  className: b.r3,
                                  alt: k(n),
                                  src: I,
                                  draggable: !1,
                                  onError: j,
                                  onLoad: N,
                                  onContextMenu: v,
                                  ref: A,
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
                enlargeWithName: r,
                isInteracting: s,
                positionRef: a,
                size: o,
                sticker: d,
            } = e,
            h = (0, c.bG)([g.Ay], () => g.Ay.useReducedMotion),
            x = i.useRef(null),
            y = { transform: `scale(${h ? 1 : 1 / n})`, opacity: 0 },
            S = (0, f.p)(s, { ref: x, from: y, enter: { transform: "scale(1)", opacity: 1 }, leave: y, config: N }),
            A = i.useRef(null),
            C = (0, p.z)(
                { ref: A, transform: s || h ? "translateY(0)" : "translateY(-25px)", opacity: +!!s, config: j },
                "animate-always",
            );
        return (
            (0, u.useChain)(s ? [x, A] : [A, x], s ? [0, 0.0625] : [0, 0]),
            S(
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
                                        children: (0, l.jsx)(M, {
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
                                            style: C,
                                            children: (0, l.jsx)(m.E, {
                                                variant: "body-sm/medium",
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
function M(e) {
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
        g = (0, y.j)(),
        x = (0, S.Th)(t) && !n,
        E = i.useRef(null);
    if (null == c) return null;
    let C = c.format_type === A.TG.LOTTIE ? O : R;
    return (0, l.jsxs)(
        i.Fragment,
        {
            children: [
                (0, l.jsx)(C, {
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
                    (0, l.jsx)(w, {
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
n.d(t, {}, { A: M, h: k });
