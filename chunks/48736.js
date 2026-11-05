s.r(l);
var t,
    a = s(477900),
    r = s(582128),
    n = s(503698),
    i = s.n(n),
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
    p = s(586428),
    g = s(913248),
    v = (((t = {}).CIRCLE = "circle"), (t.SQUARE = "square"), t);
let f = (e) => {
        let { color: l, disabled: s, variant: t = "circle", ...r } = e,
            n = (0, o.OK)(l ?? b.TGz) > 0.1;
        return (0, a.jsx)("div", {
            ...r,
            className: i()(g.M2, n ? g.xA : g.fQ, { [g.r9]: s, [g.Py]: "circle" === t, [g.qy]: "square" === t }),
            children: (0, a.jsx)("div", {
                className: g.Ol,
                style: { background: (0, o.Hl)(l) },
                children:
                    "circle" === t &&
                    (0, a.jsx)(c.EyeDropperIcon, {
                        size: "custom",
                        colorClass: n ? g.wW : g.yD,
                        width: 14,
                        height: 14,
                    }),
            }),
        });
    },
    k = (e) => {
        let {
                index: l,
                total: s,
                color: t,
                showPopout: n,
                position: o,
                onRequestClose: c,
                onShowPopout: C,
                onColorChange: b,
                disabled: v,
                updateColorWhileDragging: k,
                variant: N = "circle",
            } = e,
            E = r.useRef(null),
            R =
                s <= 2
                    ? j.intl.string(0 === l ? p.default.apbXbH : p.default.JaVq1b)
                    : j.intl.formatToPlainString(p.default.XdByBm, { number: l + 1 });
        return (0, a.jsx)(u.vN, {
            children: (0, a.jsx)(d.Y, {
                targetElementRef: E,
                renderPopout: () => (0, a.jsx)(h.VN, { onChange: b, value: t, eagerUpdate: k }),
                position: o,
                shouldShow: n,
                onRequestClose: c,
                children: (e) =>
                    (0, a.jsx)("div", {
                        ref: E,
                        className: g.tj,
                        children: (0, a.jsx)(m.D, {
                            ...e,
                            className: i()({ [g.ZT]: "circle" === N, [g.WI]: "square" === N }),
                            onClick: C,
                            "aria-label": R,
                            children: (0, a.jsx)(x.m, {
                                text: R,
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
                    colors: n,
                    value: o,
                    onChange: c,
                    disabled: u = !1,
                    customPickerPosition: m = "bottom",
                    gradientColors: p,
                    onChangeGradientColors: v,
                    isGradient: N = !1,
                    gradientButtonClassName: E,
                    gradientSwatchClassName: R,
                    gradientPickerVariant: y = "circle",
                    gradientWidth: w,
                    allowBlackCustomColor: B = !1,
                } = s,
                G = r.useMemo(
                    () => (null != w ? { width: w, ...("100%" === w ? { marginInlineEnd: 0 } : null) } : void 0),
                    [w],
                ),
                q = r.useCallback(
                    (e) => (0 !== e || B) && e !== t && !n.some((l) => l === e) && (B || 0 !== e),
                    [n, t, B],
                ),
                P = r.useRef(null),
                [S, T] = r.useState(() => (q(o) ? o : null)),
                [z, D] = r.useState(() => p ?? [o, b.TGz]),
                [H, I] = r.useState(null);
            r.useEffect(() => {
                (T(q(o) ? o : null), D(p ?? [o, b.TGz]));
            }, [o, q, p]);
            let V = r.useCallback(
                    (e) => {
                        (c?.(e), T(null));
                    },
                    [c, T],
                ),
                X = r.useCallback(
                    (e) => {
                        (c?.(e), T(e));
                    },
                    [c, T],
                ),
                A = r.useCallback(
                    (e, l) => {
                        (D(e), v?.(e, l));
                    },
                    [v],
                ),
                W = r.useRef(null),
                F = null != l,
                J = r.useCallback(() => {
                    let e = W.current;
                    ((W.current = null), null != e && e.hasEdited && l?.(e.colors.slice()));
                }, [l]),
                M = r.useCallback(
                    (e) => {
                        (F &&
                            W.current?.index !== e &&
                            (J(), (W.current = { index: e, colors: z.slice(), hasEdited: !1 })),
                            I(e));
                    },
                    [F, z, J],
                ),
                O = r.useCallback(() => {
                    (J(), I(null));
                }, [J]),
                Q = r.useCallback(
                    (e, l) => {
                        let s = W.current;
                        if (F && s?.index !== e) return;
                        let t = z.map((s, t) => (t === e ? l : s));
                        (null != s && ((s.colors = t), (s.hasEdited = !0)), A(t, !0));
                    },
                    [F, z, A],
                ),
                U = r.useCallback(() => {
                    let e = { background: (0, C.r)(z, 90) },
                        l = z.length;
                    return u
                        ? (0, a.jsxs)("div", {
                              className: g.em,
                              style: G,
                              children: [
                                  (0, a.jsx)("div", { className: i()(g.Ri, R), style: e }),
                                  (0, a.jsx)("div", {
                                      className: g.fX,
                                      children: z.map((e, l) =>
                                          (0, a.jsx)(
                                              "div",
                                              {
                                                  className: g.tj,
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
                              className: i()(g.em, E),
                              style: G,
                              children: [
                                  (0, a.jsx)("div", { className: i()(g.Ri, R), style: e }),
                                  (0, a.jsx)("div", {
                                      className: g.fX,
                                      children: z.map((e, s) =>
                                          (0, a.jsx)(
                                              k,
                                              {
                                                  index: s,
                                                  total: l,
                                                  color: e ?? b.TGz,
                                                  showPopout: H === s,
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
                }, [m, u, z, H, F, M, O, Q, E, R, y, G]),
                Y = r.useCallback(() => (0, a.jsx)(h.VN, { onChange: X, value: o }), [X, o]),
                _ = r.useCallback(
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
                K = r.useCallback(
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
                onChange: N ? A : V,
            });
        },
    },
);
