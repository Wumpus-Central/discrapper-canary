l.d(t, { n: () => v });
var n = l(627968),
    i = l(64700),
    r = l(503698),
    a = l.n(r),
    s = l(830917),
    u = l(662518),
    o = l(990078),
    c = l(397927),
    d = l(59520),
    m = l(626584),
    h = l(424632),
    g = l(726785),
    x = l(80569),
    j = l(818348),
    f = l(985018),
    b = l(411735);
let _ = new m.A("ImageEditor"),
    E = { width: 288, height: 288 },
    v = i.forwardRef(function (e, t) {
        let { file: l, imageUri: r, onUpdate: m, onThrottledEdit: v } = e,
            p = i.useRef({ x: 0, y: 0 }),
            [O, C] = i.useState({ x: 0, y: 0 }),
            y = i.useRef(null),
            [w, M] = i.useState(1),
            [T, R] = i.useState(null),
            [k, D] = i.useState(!1),
            [L, G] = i.useState({ top: 0, bottom: 0, left: 0, right: 0 }),
            [F, H] = i.useState(0),
            [z, U] = i.useState({ x: 0, y: 0 }),
            [W, P] = i.useState(!1),
            { isGIF: J, isWebP: B, isCheckingAnimation: K, isEditableAnimatedImage: $ } = (0, g._)(l),
            Y = (0, u.q)(l.type) && !J && !B,
            [q, Q] = i.useState(null),
            V = (0, d.I)(v ?? j.tE, 500),
            X = i.useRef(null),
            Z = i.useRef(0),
            ee = i.useCallback(
                function () {
                    let e =
                        arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : { x: p.current.x, y: p.current.y };
                    if (null == y.current) return;
                    let { x: t, y: l } = (0, h.F3)(e.x, e.y, L);
                    (p.current = { x: t, y: l }),
                        (y.current.style.transform = `translate3d(${t}px, ${l}px, 0) rotate(${F}deg) scaleX(${k ? "-1" : "1"})`),
                        C({ x: t, y: l });
                },
                [y, F, L, k],
            );
        i.useEffect(() => {
            null == T || K || G(S(T, w, $));
        }, [T, w, $, K]);
        let et = i.useCallback(
                (e) => {
                    if (null == T) return;
                    let t = S(T, e, $);
                    M(e), G(t), ee(), V?.();
                },
                [T, ee, $, V],
            ),
            el = i.useCallback(() => {
                if (null == y.current || null == T) return;
                let e = (F + 90) % 360,
                    t = T.height,
                    l = T.width,
                    n = S({ width: t, height: l }, w, $);
                H(e), R({ width: t, height: l }), G(n), ee(), V?.();
            }, [T, F, ee, w, $, V]),
            en = i.useCallback(() => {
                null != y.current && (D((e) => !e), ee(), V?.());
            }, [y, ee, V]),
            ei = i.useCallback(() => {
                if (null == T) return {};
                let { height: e, width: t } = A(I(T, F), w);
                return { height: e, width: t, minHeight: e, minWidth: t };
            }, [T, F, w]),
            er = i.useCallback(() => {
                X.current?.moveGrabber(-0.025);
            }, []),
            ea = i.useCallback(() => {
                X.current?.moveGrabber(0.025);
            }, []),
            es = i.useCallback((e) => {
                U({ x: e.clientX - p.current.x, y: e.clientY - p.current.y }), P(!0);
            }, []);
        i.useEffect(() => {
            let e = () => P(!1);
            return window.addEventListener("mouseup", e), () => window.removeEventListener("mouseup", e);
        }, []);
        let eu = i.useCallback(
            (e) => {
                let { x: t, y: l } = p.current;
                W &&
                    (e.clientX !== t || e.clientY !== l) &&
                    (ee({ x: (t = e.clientX - z.x), y: (l = e.clientY - z.y) }), V?.());
            },
            [W, z, ee, V],
        );
        i.useEffect(() => {
            if (W) return window.addEventListener("mousemove", eu), () => window.removeEventListener("mousemove", eu);
        }, [eu, W]);
        let eo = i.useRef(null),
            ec = i.useCallback(async () => {
                let e;
                if (null == y.current || null == T || K) return;
                let t = Date.now(),
                    n = y.current,
                    i = { height: 128, width: 128 },
                    a = null;
                if ((null != eo.current && (eo.current(), (eo.current = null)), $))
                    try {
                        let t = N(
                                {
                                    file: l,
                                    image: n,
                                    cropDimensions: E,
                                    cropOriginCoordinates: p.current,
                                    maxDimensions: i,
                                    imageRotation: F,
                                    flipHorizontal: k,
                                    resizeWidth: 128,
                                    resizeHeight: 128,
                                },
                                T,
                                w,
                            ),
                            { result: r, cancelFn: a } = await (0, h.ny)(t);
                        (eo.current = a), (e = await r);
                    } catch (e) {
                        _.error("Error cropping animated image", e), (a = x.j.ANIMATED_CROPPING);
                    } finally {
                        eo.current?.(), (eo.current = null);
                    }
                else
                    e = Y
                        ? r
                        : (0, s.iL)({
                              image: n,
                              cropDimensions: E,
                              cropOriginCoordinates: p.current,
                              maxDimensions: i,
                              imageRotation: F,
                              flipHorizontal: k,
                          });
                return (
                    m({ imageData: e, imageDataTimestamp: t, error: a, loading: !1 }),
                    () => {
                        eo.current?.(), (eo.current = null);
                    }
                );
            }, [l, F, $, Y, K, m, T, w, r, k]);
        i.useEffect(() => {
            W || ec();
        }, [ec, O, F, T, W, w, q, k]);
        let ed = i.useCallback(() => {
                if (null == y.current) return;
                let e = y.current.naturalWidth,
                    t = y.current.naturalHeight;
                R({ width: e, height: t }), H(0), D(!1);
                let l = Math.min(Math.max(e, t) / Math.min(e, t), 4);
                M(l), Q(l), (Z.current += 1), G(S({ width: e, height: t }, l, $)), ee({ x: 0, y: 0 });
            }, [y, $, ee]),
            em = i.useCallback(() => {
                ed();
            }, [ed]);
        return (
            i.useImperativeHandle(t, () => ({ reset: ed })),
            (0, n.jsxs)("div", {
                className: a()(b.j0, { [b.Id]: W }),
                style: { "--custom-image-editor-size": "288px" },
                children: [
                    (0, n.jsxs)("div", {
                        className: b.oW,
                        children: [
                            (0, n.jsx)("img", {
                                onLoad: em,
                                onError: () => {
                                    m({ error: x.j.IMAGE_LOAD, loading: !1 });
                                },
                                style: {
                                    opacity: +(null != T),
                                    transform: `translate3d(${p.current.x}px, ${p.current.y}px, 0) rotate(${F}deg) scaleX(${k ? "-1" : "1"})`,
                                    ...ei(),
                                },
                                className: b.Sl,
                                src: r,
                                crossOrigin: "anonymous",
                                alt: f.intl.string(f.t.EYR1Fa),
                                ref: y,
                                onMouseDown: es,
                                draggable: !1,
                            }),
                            !Y &&
                                !K &&
                                (0, n.jsx)("div", {
                                    className: b.Lw,
                                    style: { opacity: +(null != T), width: E.width, height: E.height },
                                    children: (0, n.jsx)(c.Text, {
                                        className: b.TB,
                                        variant: "text-xs/normal",
                                        color: "text-strong",
                                        children: f.intl.string(f.t.oBPhdN),
                                    }),
                                }),
                        ],
                    }),
                    Y
                        ? (0, n.jsx)("div", {
                              className: b.Nf,
                              children: (0, n.jsx)(c.Text, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: f.intl.string(f.t.AjdEvM),
                              }),
                          })
                        : (0, n.jsxs)("div", {
                              className: b.KE,
                              children: [
                                  (0, n.jsxs)("div", {
                                      className: b.R5,
                                      children: [
                                          (0, n.jsx)(o.m, {
                                              text: f.intl.string(f.t.FEIIO9),
                                              "aria-label": f.intl.string(f.t.FEIIO9),
                                              children: (0, n.jsx)("div", {
                                                  className: b.Q$,
                                                  children: (0, n.jsx)(c.K0, {
                                                      size: "sm",
                                                      variant: "icon-only",
                                                      icon: c.H_z,
                                                      onClick: el,
                                                      "aria-label": f.intl.string(f.t.FEIIO9),
                                                  }),
                                              }),
                                          }),
                                          (0, n.jsx)(o.m, {
                                              text: f.intl.string(f.t["4LRS2p"]),
                                              "aria-label": f.intl.string(f.t["4LRS2p"]),
                                              children: (0, n.jsx)("div", {
                                                  className: b.Q$,
                                                  children: (0, n.jsx)(c.K0, {
                                                      size: "sm",
                                                      variant: "icon-only",
                                                      icon: c.vOF,
                                                      onClick: en,
                                                      "aria-label": f.intl.string(f.t["4LRS2p"]),
                                                  }),
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, n.jsxs)("div", {
                                      className: a()(b.mu, b.R5),
                                      children: [
                                          (0, n.jsx)(o.m, {
                                              text: f.intl.string(f.t.QlArhK),
                                              "aria-label": f.intl.string(f.t.QlArhK),
                                              children: (0, n.jsx)("div", {
                                                  className: b.Q$,
                                                  children: (0, n.jsx)(c.K0, {
                                                      size: "sm",
                                                      variant: "icon-only",
                                                      icon: c.V0_,
                                                      onClick: er,
                                                      "aria-label": f.intl.string(f.t.QlArhK),
                                                  }),
                                              }),
                                          }),
                                          null != q &&
                                              (0, n.jsx)(
                                                  c.Apm,
                                                  {
                                                      ref: X,
                                                      className: b.aw,
                                                      initialValue: q,
                                                      minValue: 1,
                                                      maxValue: 4,
                                                      keyboardStep: 0.025,
                                                      asValueChanges: et,
                                                      equidistant: !0,
                                                      hideBubble: !0,
                                                      "aria-label": f.intl.string(f.t["2hPcVJ"]),
                                                  },
                                                  Z.current,
                                              ),
                                          (0, n.jsx)(o.m, {
                                              text: f.intl.string(f.t.Ch32tT),
                                              "aria-label": f.intl.string(f.t.Ch32tT),
                                              children: (0, n.jsx)("div", {
                                                  className: b.Q$,
                                                  children: (0, n.jsx)(c.K0, {
                                                      size: "sm",
                                                      variant: "icon-only",
                                                      icon: c.r1u,
                                                      onClick: ea,
                                                      "aria-label": f.intl.string(f.t.Ch32tT),
                                                  }),
                                              }),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                ],
            })
        );
    }),
    I = (e, t) => {
        let { width: l, height: n } = e;
        return t % 180 != 0 ? { width: n, height: l } : { width: l, height: n };
    },
    A = (e, t) => {
        let { width: l, height: n } = e,
            i = 288 * t,
            r = l / n;
        return l > n ? (n = (l = i) / r) : (l = (n = i) * r), { width: l, height: n };
    };
function S(e, t, l) {
    let { width: n, height: i } = A(e, t),
        r = Math.abs(288 - n) / 2,
        a = Math.abs(288 - i) / 2;
    return l && (n < 288 || i < 288)
        ? { top: 0, bottom: 0, left: 0, right: 0 }
        : { top: a, bottom: -a, left: -r, right: r };
}
let N = (e, t, l) => {
    let { height: n, width: i } = A(t, l),
        r = (n = Math.min(n, 288)) / (i = Math.min(i, 288)),
        a = { height: n, width: i },
        s = Math.floor(r < 1 ? 128 * r : 128 / r);
    return { ...e, cropDimensions: a, resizeHeight: r < 1 ? s : 128, resizeWidth: r > 1 ? s : 128 };
};
