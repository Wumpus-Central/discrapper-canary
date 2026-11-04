s.r(l);
var t,
    a = s(477900),
    n = s(582128),
    r = s(503698),
    i = s.n(r),
    o = s(317097),
    c = s(714385),
    u = s(559106),
    d = s(265872),
    h = s(508274),
    m = s(939249),
    x = s(866665),
    C = s(284059),
    b = s(652215),
    j = s(792996),
    g = s(586428),
    p = s(913248),
    v = (((t = {}).CIRCLE = "circle"), (t.SQUARE = "square"), t);
let f = (e) => {
        let { color: l, disabled: s, variant: t = "circle", ...n } = e,
            r = (0, o.OK)(l ?? b.TGz) > 0.1;
        return (0, a.jsx)("div", {
            ...n,
            className: i()(p.M2, r ? p.xA : p.fQ, { [p.r9]: s, [p.Py]: "circle" === t, [p.qy]: "square" === t }),
            children: (0, a.jsx)("div", {
                className: p.Ol,
                style: { background: (0, o.Hl)(l) },
                children:
                    "circle" === t &&
                    (0, a.jsx)(c.d, { size: "custom", colorClass: r ? p.wW : p.yD, width: 14, height: 14 }),
            }),
        });
    },
    k = (e) => {
        let {
                index: l,
                total: s,
                color: t,
                showPopout: r,
                position: o,
                onRequestClose: c,
                onShowPopout: C,
                onColorChange: b,
                disabled: v,
                updateColorWhileDragging: k,
                variant: N = "circle",
            } = e,
            R = n.useRef(null),
            E =
                s <= 2
                    ? j.intl.string(0 === l ? g.default.apbXbH : g.default.JaVq1b)
                    : j.intl.formatToPlainString(g.default.XdByBm, { number: l + 1 });
        return (0, a.jsx)(u.vN, {
            children: (0, a.jsx)(d.Y, {
                targetElementRef: R,
                renderPopout: () => (0, a.jsx)(h.VN, { onChange: b, value: t, eagerUpdate: k }),
                position: o,
                shouldShow: r,
                onRequestClose: c,
                children: (e) =>
                    (0, a.jsx)("div", {
                        ref: R,
                        className: p.tj,
                        children: (0, a.jsx)(m.D, {
                            ...e,
                            className: i()({ [p.ZT]: "circle" === N, [p.WI]: "square" === N }),
                            onClick: C,
                            "aria-label": E,
                            children: (0, a.jsx)(x.m, {
                                text: E,
                                position: "bottom",
                                children: (0, a.jsx)(f, { color: t ?? 0, disabled: v, variant: N }),
                            }),
                        }),
                    }),
            }),
        });
    };
s.d(
    l,
    {},
    {
        GradientPickerVariants: v,
        default: function (e) {
            let { onCustomPalettePicked: l, ...s } = e,
                {
                    defaultColor: t,
                    colors: r,
                    value: o,
                    onChange: c,
                    disabled: u = !1,
                    customPickerPosition: m = "bottom",
                    gradientColors: g,
                    onChangeGradientColors: v,
                    isGradient: N = !1,
                    gradientButtonClassName: R,
                    gradientSwatchClassName: E,
                    gradientPickerVariant: y = "circle",
                    gradientWidth: w,
                    allowBlackCustomColor: B = !1,
                } = s,
                G = n.useMemo(
                    () => (null != w ? { width: w, ...("100%" === w ? { marginInlineEnd: 0 } : null) } : void 0),
                    [w],
                ),
                q = n.useCallback(
                    (e) => (0 !== e || B) && e !== t && !r.some((l) => l === e) && (B || 0 !== e),
                    [r, t, B],
                ),
                P = n.useRef(null),
                [S, T] = n.useState(() => (q(o) ? o : null)),
                [z, H] = n.useState(() => g ?? [o, b.TGz]),
                [D, V] = n.useState(null);
            n.useEffect(() => {
                (T(q(o) ? o : null), H(g ?? [o, b.TGz]));
            }, [o, q, g]);
            let X = n.useCallback(
                    (e) => {
                        (c?.(e), T(null));
                    },
                    [c, T],
                ),
                A = n.useCallback(
                    (e) => {
                        (c?.(e), T(e));
                    },
                    [c, T],
                ),
                I = n.useCallback(
                    (e, l) => {
                        (H(e), v?.(e, l));
                    },
                    [v],
                ),
                W = n.useRef(null),
                F = null != l,
                J = n.useCallback(() => {
                    let e = W.current;
                    ((W.current = null), null != e && e.hasEdited && l?.(e.colors.slice()));
                }, [l]),
                M = n.useCallback(
                    (e) => {
                        (F &&
                            W.current?.index !== e &&
                            (J(), (W.current = { index: e, colors: z.slice(), hasEdited: !1 })),
                            V(e));
                    },
                    [F, z, J],
                ),
                O = n.useCallback(() => {
                    (J(), V(null));
                }, [J]),
                Q = n.useCallback(
                    (e, l) => {
                        let s = W.current;
                        if (F && s?.index !== e) return;
                        let t = z.map((s, t) => (t === e ? l : s));
                        (null != s && ((s.colors = t), (s.hasEdited = !0)), I(t, !0));
                    },
                    [F, z, I],
                ),
                U = n.useCallback(() => {
                    let e = { background: (0, C.r)(z, 90) },
                        l = z.length;
                    return u
                        ? (0, a.jsxs)("div", {
                              className: p.em,
                              style: G,
                              children: [
                                  (0, a.jsx)("div", { className: i()(p.Ri, E), style: e }),
                                  (0, a.jsx)("div", {
                                      className: p.fX,
                                      children: z.map((e, l) =>
                                          (0, a.jsx)(
                                              "div",
                                              {
                                                  className: p.tj,
                                                  children: (0, a.jsx)(f, {
                                                      color: e ?? b.TGz,
                                                      disabled: u,
                                                      variant: y,
                                                  }),
                                              },
                                              l,
                                          ),
                                      ),
                                  }),
                              ],
                          })
                        : (0, a.jsxs)("div", {
                              className: i()(p.em, R),
                              style: G,
                              children: [
                                  (0, a.jsx)("div", { className: i()(p.Ri, E), style: e }),
                                  (0, a.jsx)("div", {
                                      className: p.fX,
                                      children: z.map((e, s) =>
                                          (0, a.jsx)(
                                              k,
                                              {
                                                  index: s,
                                                  total: l,
                                                  color: e ?? b.TGz,
                                                  showPopout: D === s,
                                                  position: m,
                                                  onRequestClose: O,
                                                  onShowPopout: () => M(s),
                                                  onColorChange: (e) => Q(s, e),
                                                  disabled: u,
                                                  updateColorWhileDragging: F,
                                                  variant: y,
                                              },
                                              s,
                                          ),
                                      ),
                                  }),
                              ],
                          });
                }, [m, u, z, D, F, M, O, Q, R, E, y, G]),
                Y = n.useCallback(() => (0, a.jsx)(h.VN, { onChange: A, value: o }), [A, o]),
                _ = n.useCallback(
                    (e) => {
                        let l = o !== t && (0 !== o || B),
                            s = (0, a.jsx)(h.nJ, {
                                ...e,
                                customColor: e.customColor ?? (l ? o : null),
                                "aria-label": j.intl.string(j.t["FHBa/1"]),
                            });
                        return u
                            ? s
                            : (0, a.jsx)(d.Y, {
                                  targetElementRef: P,
                                  renderPopout: Y,
                                  position: m,
                                  children: (e) =>
                                      (0, a.jsx)(x.m, {
                                          targetElementRef: P,
                                          text: j.intl.string(j.t["FHBa/1"]),
                                          position: "bottom",
                                          children: (0, a.jsx)("div", { ...e, ref: P, children: s }),
                                      }),
                              });
                    },
                    [m, u, Y, o, t, B],
                ),
                K = n.useCallback(
                    (e) => {
                        let l = (0, a.jsx)(h.fy, { ...e });
                        return u
                            ? l
                            : (0, a.jsx)(x.m, {
                                  text: j.intl.string(j.t.bBvAEH),
                                  position: "bottom",
                                  children: (0, a.jsx)("div", { children: l }),
                              });
                    },
                    [u],
                );
            return (0, a.jsx)(h.sk, {
                ...s,
                renderDefaultButton: K,
                renderCustomButton: _,
                renderGradientCustomButton: U,
                isGradient: N,
                customColor: S,
                value: N ? z[0] : o,
                gradientColors: N ? z : void 0,
                onChange: N ? I : X,
            });
        },
    },
);
