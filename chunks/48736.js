s.r(l), s.d(l, { default: () => g });
var t = s(627968),
    n = s(64700),
    a = s(503698),
    o = s.n(a),
    i = s(317097),
    r = s(990078),
    d = s(714385),
    u = s(187322),
    c = s(922016),
    m = s(508274),
    h = s(939249),
    x = s(284059),
    j = s(652215),
    b = s(375708),
    C = s(645704),
    p = s(45485);
let f = (e) => {
        let { color: l, disabled: s, ...n } = e,
            a = (0, i.OK)(l ?? j.TGz) > 0.1;
        return (0, t.jsx)("div", {
            ...n,
            className: o()(p.M2, a ? p.xA : p.fQ, { [p.r9]: s }),
            children: (0, t.jsx)("div", {
                className: p.Ol,
                style: { background: (0, i.Hl)(l) },
                children: (0, t.jsx)(d.d, { size: "custom", colorClass: a ? p.wW : p.yD, width: 14, height: 14 }),
            }),
        });
    },
    v = (e) => {
        let {
                index: l,
                total: s,
                color: a,
                showPopout: o,
                position: i,
                onRequestClose: d,
                onShowPopout: x,
                onColorChange: j,
                disabled: v,
            } = e,
            g = n.useRef(null),
            k =
                s <= 2
                    ? b.intl.string(0 === l ? C.default.apbXbH : C.default.JaVq1b)
                    : b.intl.formatToPlainString(C.default.XdByBm, { number: l + 1 });
        return (0, t.jsx)(u.vN, {
            children: (0, t.jsx)(c.Y, {
                targetElementRef: g,
                renderPopout: () => (0, t.jsx)(m.VN, { onChange: j, value: a }),
                position: i,
                shouldShow: o,
                onRequestClose: d,
                children: (e) =>
                    (0, t.jsx)("div", {
                        ref: g,
                        className: p.tj,
                        children: (0, t.jsx)(h.D, {
                            ...e,
                            onClick: x,
                            "aria-label": k,
                            children: (0, t.jsx)(r.m, {
                                text: k,
                                position: "bottom",
                                children: (0, t.jsx)(f, { color: a ?? 0, disabled: v }),
                            }),
                        }),
                    }),
            }),
        });
    };
function g(e) {
    let {
            defaultColor: l,
            colors: s,
            value: a,
            onChange: i,
            disabled: d = !1,
            customPickerPosition: u = "bottom",
            gradientColors: h,
            onChangeGradientColors: C,
            isGradient: g = !1,
            gradientButtonClassName: k,
            gradientWidth: N,
            allowBlackCustomColor: R = !1,
        } = e,
        w = n.useMemo(
            () => (null != N ? { width: N, ...("100%" === N ? { marginInlineEnd: 0 } : null) } : void 0),
            [N],
        ),
        y = n.useCallback((e) => (0 !== e || R) && e !== l && !s.some((l) => l === e) && (R || 0 !== e), [s, l, R]),
        B = n.useRef(null),
        [G, z] = n.useState(() => (y(a) ? a : null)),
        [E, S] = n.useState(() => h ?? [a, j.TGz]),
        [T, H] = n.useState(null);
    n.useEffect(() => {
        z(y(a) ? a : null), S(h ?? [a, j.TGz]);
    }, [a, y, h]);
    let P = n.useCallback(
            (e) => {
                i?.(e), z(null);
            },
            [i, z],
        ),
        X = n.useCallback(
            (e) => {
                i?.(e), z(e);
            },
            [i, z],
        ),
        q = n.useCallback(
            (e) => {
                S(e), C?.(e);
            },
            [C],
        ),
        D = n.useCallback(() => {
            let e = { background: (0, x.r)(E, 90) },
                l = E.length;
            return d
                ? (0, t.jsxs)("div", {
                      className: p.em,
                      style: w,
                      children: [
                          (0, t.jsx)("div", { className: p.Ri, style: e }),
                          (0, t.jsx)("div", {
                              className: p.fX,
                              children: E.map((e, l) =>
                                  (0, t.jsx)(
                                      "div",
                                      { className: p.tj, children: (0, t.jsx)(f, { color: e ?? j.TGz, disabled: d }) },
                                      l,
                                  ),
                              ),
                          }),
                      ],
                  })
                : (0, t.jsxs)("div", {
                      className: o()(p.em, k),
                      style: w,
                      children: [
                          (0, t.jsx)("div", { className: p.Ri, style: e }),
                          (0, t.jsx)("div", {
                              className: p.fX,
                              children: E.map((e, s) =>
                                  (0, t.jsx)(
                                      v,
                                      {
                                          index: s,
                                          total: l,
                                          color: e ?? j.TGz,
                                          showPopout: T === s,
                                          position: u,
                                          onRequestClose: () => H(null),
                                          onShowPopout: () => H(s),
                                          onColorChange: (e) => q(E.map((l, t) => (t === s ? e : l))),
                                          disabled: d,
                                      },
                                      s,
                                  ),
                              ),
                          }),
                      ],
                  });
        }, [u, d, E, T, q, k, w]),
        V = n.useCallback(() => (0, t.jsx)(m.VN, { onChange: X, value: a }), [X, a]),
        A = n.useCallback(
            (e) => {
                let s = a !== l && (0 !== a || R),
                    n = (0, t.jsx)(m.nJ, {
                        ...e,
                        customColor: e.customColor ?? (s ? a : null),
                        "aria-label": b.intl.string(b.t["FHBa/1"]),
                    });
                return d
                    ? n
                    : (0, t.jsx)(c.Y, {
                          targetElementRef: B,
                          renderPopout: V,
                          position: u,
                          children: (e) =>
                              (0, t.jsx)(r.m, {
                                  targetElementRef: B,
                                  text: b.intl.string(b.t["FHBa/1"]),
                                  position: "bottom",
                                  children: (0, t.jsx)("div", { ...e, ref: B, children: n }),
                              }),
                      });
            },
            [u, d, V, a, l, R],
        ),
        F = n.useCallback(
            (e) => {
                let l = (0, t.jsx)(m.fy, { ...e });
                return d
                    ? l
                    : (0, t.jsx)(r.m, {
                          text: b.intl.string(b.t.bBvAEH),
                          position: "bottom",
                          children: (0, t.jsx)("div", { children: l }),
                      });
            },
            [d],
        );
    return (0, t.jsx)(m.sk, {
        ...e,
        renderDefaultButton: F,
        renderCustomButton: A,
        renderGradientCustomButton: D,
        isGradient: g,
        customColor: G,
        value: g ? E[0] : a,
        gradientColors: g ? E : void 0,
        onChange: g ? q : P,
    });
}
