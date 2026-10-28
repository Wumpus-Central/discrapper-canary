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
    j = s(25525),
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
            gradientWidth: E,
            allowBlackCustomColor: w = !1,
        } = s,
        y = n.useMemo(
            () => (null != E ? { width: E, ...("100%" === E ? { marginInlineEnd: 0 } : null) } : void 0),
            [E],
        ),
        B = n.useCallback((e) => (0 !== e || w) && e !== a && !o.some((l) => l === e) && (w || 0 !== e), [o, a, w]),
        G = n.useRef(null),
        [z, S] = n.useState(() => (B(i) ? i : null)),
        [T, H] = n.useState(() => k ?? [i, C.TGz]),
        [P, D] = n.useState(null);
    n.useEffect(() => {
        (S(B(i) ? i : null), H(k ?? [i, C.TGz]));
    }, [i, B, k]);
    let X = n.useCallback(
            (e) => {
                (u?.(e), S(null));
            },
            [u, S],
        ),
        q = n.useCallback(
            (e) => {
                (u?.(e), S(e));
            },
            [u, S],
        ),
        V = n.useCallback(
            (e, l) => {
                (H(e), v?.(e, l));
            },
            [v],
        ),
        A = n.useRef(null),
        F = null != l,
        J = n.useCallback(() => {
            let e = A.current;
            ((A.current = null), null != e && e.hasEdited && l?.(e.colors.slice()));
        }, [l]),
        M = n.useCallback(
            (e) => {
                (F && A.current?.index !== e && (J(), (A.current = { index: e, colors: T.slice(), hasEdited: !1 })),
                    D(e));
            },
            [F, T, J],
        ),
        O = n.useCallback(() => {
            (J(), D(null));
        }, [J]),
        W = n.useCallback(
            (e, l) => {
                let s = A.current;
                if (F && s?.index !== e) return;
                let t = T.map((s, t) => (t === e ? l : s));
                (null != s && ((s.colors = t), (s.hasEdited = !0)), V(t, !0));
            },
            [F, T, V],
        ),
        Y = n.useCallback(() => {
            let e = { background: (0, x.r)(T, 90) },
                l = T.length;
            return h
                ? (0, t.jsxs)("div", {
                      className: g.em,
                      style: y,
                      children: [
                          (0, t.jsx)("div", { className: g.Ri, style: e }),
                          (0, t.jsx)("div", {
                              className: g.fX,
                              children: T.map((e, l) =>
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
                      style: y,
                      children: [
                          (0, t.jsx)("div", { className: g.Ri, style: e }),
                          (0, t.jsx)("div", {
                              className: g.fX,
                              children: T.map((e, s) =>
                                  (0, t.jsx)(
                                      f,
                                      {
                                          index: s,
                                          total: l,
                                          color: e ?? C.TGz,
                                          showPopout: P === s,
                                          position: j,
                                          onRequestClose: O,
                                          onShowPopout: () => M(s),
                                          onColorChange: (e) => W(s, e),
                                          disabled: h,
                                          updateColorWhileDragging: F,
                                      },
                                      s,
                                  ),
                              ),
                          }),
                      ],
                  });
        }, [j, h, T, P, F, M, O, W, R, y]),
        _ = n.useCallback(() => (0, t.jsx)(c.VN, { onChange: q, value: i }), [q, i]),
        I = n.useCallback(
            (e) => {
                let l = i !== a && (0 !== i || w),
                    s = (0, t.jsx)(c.nJ, {
                        ...e,
                        customColor: e.customColor ?? (l ? i : null),
                        "aria-label": b.intl.string(b.t["FHBa/1"]),
                    });
                return h
                    ? s
                    : (0, t.jsx)(d.Y, {
                          targetElementRef: G,
                          renderPopout: _,
                          position: j,
                          children: (e) =>
                              (0, t.jsx)(m.m, {
                                  targetElementRef: G,
                                  text: b.intl.string(b.t["FHBa/1"]),
                                  position: "bottom",
                                  children: (0, t.jsx)("div", { ...e, ref: G, children: s }),
                              }),
                      });
            },
            [j, h, _, i, a, w],
        ),
        K = n.useCallback(
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
        renderDefaultButton: K,
        renderCustomButton: I,
        renderGradientCustomButton: Y,
        isGradient: N,
        customColor: z,
        value: N ? T[0] : i,
        gradientColors: N ? T : void 0,
        onChange: N ? V : X,
    });
}
