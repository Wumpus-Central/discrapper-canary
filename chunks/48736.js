(s.r(l), s.d(l, { default: () => k }));
var t = s(477900),
    n = s(582128),
    a = s(503698),
    r = s.n(a),
    o = s(317097),
    i = s(714385),
    u = s(559106),
    d = s(265872),
    c = s(508274),
    h = s(939249),
    m = s(866665),
    x = s(284059),
    C = s(652215),
    b = s(105292),
    j = s(959456),
    g = s(913248);
let p = (e) => {
        let { color: l, disabled: s, ...n } = e,
            a = (0, o.OK)(l ?? C.TGz) > 0.1;
        return (0, t.jsx)("div", {
            ...n,
            className: r()(g.M2, a ? g.xA : g.fQ, { [g.r9]: s }),
            children: (0, t.jsx)("div", {
                className: g.Ol,
                style: { background: (0, o.Hl)(l) },
                children: (0, t.jsx)(i.d, { size: "custom", colorClass: a ? g.wW : g.yD, width: 14, height: 14 }),
            }),
        });
    },
    f = (e) => {
        let {
                index: l,
                total: s,
                color: a,
                showPopout: r,
                position: o,
                onRequestClose: i,
                onShowPopout: x,
                onColorChange: C,
                disabled: f,
                updateColorWhileDragging: k,
            } = e,
            v = n.useRef(null),
            N =
                s <= 2
                    ? b.intl.string(0 === l ? j.default.apbXbH : j.default.JaVq1b)
                    : b.intl.formatToPlainString(j.default.XdByBm, { number: l + 1 });
        return (0, t.jsx)(u.vN, {
            children: (0, t.jsx)(d.Y, {
                targetElementRef: v,
                renderPopout: () => (0, t.jsx)(c.VN, { onChange: C, value: a, eagerUpdate: k }),
                position: o,
                shouldShow: r,
                onRequestClose: i,
                children: (e) =>
                    (0, t.jsx)("div", {
                        ref: v,
                        className: g.tj,
                        children: (0, t.jsx)(h.D, {
                            ...e,
                            onClick: x,
                            "aria-label": N,
                            children: (0, t.jsx)(m.m, {
                                text: N,
                                position: "bottom",
                                children: (0, t.jsx)(p, { color: a ?? 0, disabled: f }),
                            }),
                        }),
                    }),
            }),
        });
    };
function k(e) {
    let { onCustomPalettePicked: l, ...s } = e,
        {
            defaultColor: a,
            colors: o,
            value: i,
            onChange: u,
            disabled: h = !1,
            customPickerPosition: j = "bottom",
            gradientColors: k,
            onChangeGradientColors: v,
            isGradient: N = !1,
            gradientButtonClassName: R,
            gradientSwatchClassName: E,
            gradientWidth: w,
            allowBlackCustomColor: y = !1,
        } = s,
        B = n.useMemo(
            () => (null != w ? { width: w, ...("100%" === w ? { marginInlineEnd: 0 } : null) } : void 0),
            [w],
        ),
        G = n.useCallback((e) => (0 !== e || y) && e !== a && !o.some((l) => l === e) && (y || 0 !== e), [o, a, y]),
        z = n.useRef(null),
        [S, T] = n.useState(() => (G(i) ? i : null)),
        [H, P] = n.useState(() => k ?? [i, C.TGz]),
        [D, X] = n.useState(null);
    n.useEffect(() => {
        (T(G(i) ? i : null), P(k ?? [i, C.TGz]));
    }, [i, G, k]);
    let q = n.useCallback(
            (e) => {
                (u?.(e), T(null));
            },
            [u, T],
        ),
        V = n.useCallback(
            (e) => {
                (u?.(e), T(e));
            },
            [u, T],
        ),
        A = n.useCallback(
            (e, l) => {
                (P(e), v?.(e, l));
            },
            [v],
        ),
        F = n.useRef(null),
        J = null != l,
        M = n.useCallback(() => {
            let e = F.current;
            ((F.current = null), null != e && e.hasEdited && l?.(e.colors.slice()));
        }, [l]),
        O = n.useCallback(
            (e) => {
                (J && F.current?.index !== e && (M(), (F.current = { index: e, colors: H.slice(), hasEdited: !1 })),
                    X(e));
            },
            [J, H, M],
        ),
        W = n.useCallback(() => {
            (M(), X(null));
        }, [M]),
        Y = n.useCallback(
            (e, l) => {
                let s = F.current;
                if (J && s?.index !== e) return;
                let t = H.map((s, t) => (t === e ? l : s));
                (null != s && ((s.colors = t), (s.hasEdited = !0)), A(t, !0));
            },
            [J, H, A],
        ),
        _ = n.useCallback(() => {
            let e = { background: (0, x.r)(H, 90) },
                l = H.length;
            return h
                ? (0, t.jsxs)("div", {
                      className: g.em,
                      style: B,
                      children: [
                          (0, t.jsx)("div", { className: r()(g.Ri, E), style: e }),
                          (0, t.jsx)("div", {
                              className: g.fX,
                              children: H.map((e, l) =>
                                  (0, t.jsx)(
                                      "div",
                                      { className: g.tj, children: (0, t.jsx)(p, { color: e ?? C.TGz, disabled: h }) },
                                      l,
                                  ),
                              ),
                          }),
                      ],
                  })
                : (0, t.jsxs)("div", {
                      className: r()(g.em, R),
                      style: B,
                      children: [
                          (0, t.jsx)("div", { className: r()(g.Ri, E), style: e }),
                          (0, t.jsx)("div", {
                              className: g.fX,
                              children: H.map((e, s) =>
                                  (0, t.jsx)(
                                      f,
                                      {
                                          index: s,
                                          total: l,
                                          color: e ?? C.TGz,
                                          showPopout: D === s,
                                          position: j,
                                          onRequestClose: W,
                                          onShowPopout: () => O(s),
                                          onColorChange: (e) => Y(s, e),
                                          disabled: h,
                                          updateColorWhileDragging: J,
                                      },
                                      s,
                                  ),
                              ),
                          }),
                      ],
                  });
        }, [j, h, H, D, J, O, W, Y, R, E, B]),
        I = n.useCallback(() => (0, t.jsx)(c.VN, { onChange: V, value: i }), [V, i]),
        K = n.useCallback(
            (e) => {
                let l = i !== a && (0 !== i || y),
                    s = (0, t.jsx)(c.nJ, {
                        ...e,
                        customColor: e.customColor ?? (l ? i : null),
                        "aria-label": b.intl.string(b.t["FHBa/1"]),
                    });
                return h
                    ? s
                    : (0, t.jsx)(d.Y, {
                          targetElementRef: z,
                          renderPopout: I,
                          position: j,
                          children: (e) =>
                              (0, t.jsx)(m.m, {
                                  targetElementRef: z,
                                  text: b.intl.string(b.t["FHBa/1"]),
                                  position: "bottom",
                                  children: (0, t.jsx)("div", { ...e, ref: z, children: s }),
                              }),
                      });
            },
            [j, h, I, i, a, y],
        ),
        Q = n.useCallback(
            (e) => {
                let l = (0, t.jsx)(c.fy, { ...e });
                return h
                    ? l
                    : (0, t.jsx)(m.m, {
                          text: b.intl.string(b.t.bBvAEH),
                          position: "bottom",
                          children: (0, t.jsx)("div", { children: l }),
                      });
            },
            [h],
        );
    return (0, t.jsx)(c.sk, {
        ...s,
        renderDefaultButton: Q,
        renderCustomButton: K,
        renderGradientCustomButton: _,
        isGradient: N,
        customColor: S,
        value: N ? H[0] : i,
        gradientColors: N ? H : void 0,
        onChange: N ? A : q,
    });
}
