n.d(t, { n: () => v });
var l = n(627968),
    i = n(64700),
    r = n(503698),
    a = n.n(r),
    s = n(830917),
    u = n(662518),
    o = n(990078),
    c = n(397927),
    d = n(59520),
    m = n(626584),
    h = n(424632),
    g = n(726785),
    x = n(80569),
    j = n(818348),
    f = n(985018),
    _ = n(583905);
let b = new m.A("ImageEditor"),
    E = { width: 288, height: 288 },
    v = i.forwardRef(function (e, t) {
        let { file: n, imageUri: r, onUpdate: m, onThrottledEdit: v } = e,
            p = i.useRef({ x: 0, y: 0 }),
            [O, C] = i.useState({ x: 0, y: 0 }),
            y = i.useRef(null),
            [M, w] = i.useState(1),
            [T, R] = i.useState(null),
            [k, D] = i.useState(!1),
            [L, G] = i.useState({ top: 0, bottom: 0, left: 0, right: 0 }),
            [F, H] = i.useState(0),
            [U, W] = i.useState({ x: 0, y: 0 }),
            [z, P] = i.useState(!1),
            { isGIF: J, isWebP: B, isCheckingAnimation: K, isEditableAnimatedImage: $ } = (0, g._)(n),
            Y = (0, u.q)(n.type) && !J && !B,
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
                    let { x: t, y: n } = (0, h.F3)(e.x, e.y, L);
                    (p.current = { x: t, y: n }),
                        (y.current.style.transform = `translate3d(${t}px, ${n}px, 0) rotate(${F}deg) scaleX(${k ? "-1" : "1"})`),
                        C({ x: t, y: n });
                },
                [y, F, L, k],
            );
        i.useEffect(() => {
            null == T || K || G(S(T, M, $));
        }, [T, M, $, K]);
        let et = i.useCallback(
                (e) => {
                    if (null == T) return;
                    let t = S(T, e, $);
                    w(e), G(t), ee(), V?.();
                },
                [T, ee, $, V],
            ),
            en = i.useCallback(() => {
                if (null == y.current || null == T) return;
                let e = (F + 90) % 360,
                    t = T.height,
                    n = T.width,
                    l = S({ width: t, height: n }, M, $);
                H(e), R({ width: t, height: n }), G(l), ee(), V?.();
            }, [T, F, ee, M, $, V]),
            el = i.useCallback(() => {
                null != y.current && (D((e) => !e), ee(), V?.());
            }, [y, ee, V]),
            ei = i.useCallback(() => {
                if (null == T) return {};
                let { height: e, width: t } = A(I(T, F), M);
                return { height: e, width: t, minHeight: e, minWidth: t };
            }, [T, F, M]),
            er = i.useCallback(() => {
                X.current?.moveGrabber(-0.025);
            }, []),
            ea = i.useCallback(() => {
                X.current?.moveGrabber(0.025);
            }, []),
            es = i.useCallback((e) => {
                W({ x: e.clientX - p.current.x, y: e.clientY - p.current.y }), P(!0);
            }, []);
        i.useEffect(() => {
            let e = () => P(!1);
            return window.addEventListener("mouseup", e), () => window.removeEventListener("mouseup", e);
        }, []);
        let eu = i.useCallback(
            (e) => {
                let { x: t, y: n } = p.current;
                z &&
                    (e.clientX !== t || e.clientY !== n) &&
                    (ee({ x: (t = e.clientX - U.x), y: (n = e.clientY - U.y) }), V?.());
            },
            [z, U, ee, V],
        );
        i.useEffect(() => {
            if (z) return window.addEventListener("mousemove", eu), () => window.removeEventListener("mousemove", eu);
        }, [eu, z]);
        let eo = i.useRef(null),
            ec = i.useCallback(async () => {
                let e;
                if (null == y.current || null == T || K) return;
                let t = Date.now(),
                    l = y.current,
                    i = { height: 128, width: 128 },
                    a = null;
                if ((null != eo.current && (eo.current(), (eo.current = null)), $))
                    try {
                        let t = N(
                                {
                                    file: n,
                                    image: l,
                                    cropDimensions: E,
                                    cropOriginCoordinates: p.current,
                                    maxDimensions: i,
                                    imageRotation: F,
                                    resizeWidth: 128,
                                    resizeHeight: 128,
                                },
                                T,
                                M,
                            ),
                            { result: r, cancelFn: a } = await (0, h.ny)(t);
                        (eo.current = a), (e = await r);
                    } catch (e) {
                        b.error("Error cropping animated image", e), (a = x.j.ANIMATED_CROPPING);
                    } finally {
                        eo.current?.(), (eo.current = null);
                    }
                else
                    e = Y
                        ? r
                        : (0, s.iL)({
                              image: l,
                              cropDimensions: E,
                              cropOriginCoordinates: p.current,
                              maxDimensions: i,
                              imageRotation: F,
                          });
                return (
                    m({ imageData: e, imageDataTimestamp: t, error: a, loading: !1 }),
                    () => {
                        eo.current?.(), (eo.current = null);
                    }
                );
            }, [n, F, $, Y, K, m, T, M, r]);
        i.useEffect(() => {
            ec();
        }, [ec, O, F, T, z, M, q, k]);
        let ed = i.useCallback(() => {
                if (null == y.current) return;
                let e = y.current.naturalWidth,
                    t = y.current.naturalHeight;
                R({ width: e, height: t }), H(0), D(!1);
                let n = Math.min(Math.max(e, t) / Math.min(e, t), 4);
                w(n), Q(n), (Z.current += 1), G(S({ width: e, height: t }, n, $)), ee({ x: 0, y: 0 });
            }, [y, $, ee]),
            em = i.useCallback(() => {
                ed();
            }, [ed]);
        return (
            i.useImperativeHandle(t, () => ({ reset: ed })),
            (0, l.jsxs)("div", {
                className: a()(_.j0, { [_.Id]: z }),
                style: { "--custom-image-editor-size": "288px" },
                children: [
                    (0, l.jsxs)("div", {
                        className: _.oW,
                        children: [
                            (0, l.jsx)("img", {
                                onLoad: em,
                                onError: () => {
                                    m({ error: x.j.IMAGE_LOAD, loading: !1 });
                                },
                                style: {
                                    opacity: +(null != T),
                                    transform: `translate3d(${p.current.x}px, ${p.current.y}px, 0) rotate(${F}deg) scaleX(${k ? "-1" : "1"})`,
                                    ...ei(),
                                },
                                className: _.Sl,
                                src: r,
                                crossOrigin: "anonymous",
                                alt: f.intl.string(f.t.EYR1Fa),
                                ref: y,
                                onMouseDown: es,
                                draggable: !1,
                            }),
                            !Y &&
                                !K &&
                                (0, l.jsx)("div", {
                                    className: _.Lw,
                                    style: { opacity: +(null != T), width: E.width, height: E.height },
                                    children: (0, l.jsx)(c.Text, {
                                        className: _.TB,
                                        variant: "text-xs/normal",
                                        color: "text-strong",
                                        children: f.intl.string(f.t.oBPhdN),
                                    }),
                                }),
                        ],
                    }),
                    Y
                        ? (0, l.jsx)("div", {
                              className: _.Nf,
                              children: (0, l.jsx)(c.Text, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: f.intl.string(f.t.AjdEvM),
                              }),
                          })
                        : (0, l.jsxs)("div", {
                              className: _.KE,
                              children: [
                                  (0, l.jsxs)("div", {
                                      className: _.R5,
                                      children: [
                                          (0, l.jsx)(o.m, {
                                              text: f.intl.string(f.t.FEIIO9),
                                              "aria-label": f.intl.string(f.t.FEIIO9),
                                              children: (0, l.jsx)("div", {
                                                  className: _.Q$,
                                                  children: (0, l.jsx)(c.K0, {
                                                      size: "sm",
                                                      variant: "icon-only",
                                                      icon: c.H_z,
                                                      onClick: en,
                                                      "aria-label": f.intl.string(f.t.FEIIO9),
                                                  }),
                                              }),
                                          }),
                                          (0, l.jsx)(o.m, {
                                              text: f.intl.string(f.t["4LRS2p"]),
                                              "aria-label": f.intl.string(f.t["4LRS2p"]),
                                              children: (0, l.jsx)("div", {
                                                  className: _.Q$,
                                                  children: (0, l.jsx)(c.K0, {
                                                      size: "sm",
                                                      variant: "icon-only",
                                                      icon: c.vOF,
                                                      onClick: el,
                                                      "aria-label": f.intl.string(f.t["4LRS2p"]),
                                                  }),
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, l.jsxs)("div", {
                                      className: a()(_.mu, _.R5),
                                      children: [
                                          (0, l.jsx)(o.m, {
                                              text: f.intl.string(f.t.QlArhK),
                                              "aria-label": f.intl.string(f.t.QlArhK),
                                              children: (0, l.jsx)("div", {
                                                  className: _.Q$,
                                                  children: (0, l.jsx)(c.K0, {
                                                      size: "sm",
                                                      variant: "icon-only",
                                                      icon: c.V0_,
                                                      onClick: er,
                                                      "aria-label": f.intl.string(f.t.QlArhK),
                                                  }),
                                              }),
                                          }),
                                          null != q &&
                                              (0, l.jsx)(
                                                  c.Apm,
                                                  {
                                                      ref: X,
                                                      className: _.aw,
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
                                          (0, l.jsx)(o.m, {
                                              text: f.intl.string(f.t.Ch32tT),
                                              "aria-label": f.intl.string(f.t.Ch32tT),
                                              children: (0, l.jsx)("div", {
                                                  className: _.Q$,
                                                  children: (0, l.jsx)(c.K0, {
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
        let { width: n, height: l } = e;
        return t % 180 != 0 ? { width: l, height: n } : { width: n, height: l };
    },
    A = (e, t) => {
        let { width: n, height: l } = e,
            i = 288 * t,
            r = n / l;
        return n > l ? (l = (n = i) / r) : (n = (l = i) * r), { width: n, height: l };
    };
function S(e, t, n) {
    let { width: l, height: i } = A(e, t),
        r = Math.abs(288 - l) / 2,
        a = Math.abs(288 - i) / 2;
    return n && (l < 288 || i < 288)
        ? { top: 0, bottom: 0, left: 0, right: 0 }
        : { top: a, bottom: -a, left: -r, right: r };
}
let N = (e, t, n) => {
    let { height: l, width: i } = A(t, n),
        r = (l = Math.min(l, 288)) / (i = Math.min(i, 288)),
        a = { height: l, width: i },
        s = Math.floor(r < 1 ? 128 * r : 128 / r);
    return { ...e, cropDimensions: a, resizeHeight: r < 1 ? s : 128, resizeWidth: r > 1 ? s : 128 };
};
