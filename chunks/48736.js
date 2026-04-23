a.r(t), a.d(t, { default: () => v });
var l = a(627968),
    n = a(64700),
    s = a(503698),
    r = a.n(s),
    i = a(317097),
    o = a(990078),
    c = a(714385),
    d = a(187322),
    u = a(265872),
    m = a(508274),
    _ = a(939249),
    h = a(652215),
    p = a(985018),
    f = a(853513),
    g = a(895533);
let x = (e) => {
        let { position: t, color: a, disabled: n, ...s } = e,
            o = (0, i.OK)(a ?? h.TGz) > 0.1;
        return (0, l.jsx)("div", {
            ...s,
            className: r()("left" === t ? g.Zv : g.Un, o ? g.xA : g.fQ, { [g.r9]: n }),
            children: (0, l.jsx)("div", {
                className: g.Ol,
                style: { background: (0, i.Hl)(a) },
                children: (0, l.jsx)(c.d, { size: "custom", colorClass: o ? g.wW : g.yD, width: 14, height: 14 }),
            }),
        });
    },
    A = (e) => {
        let {
            isStart: t,
            buttonRef: a,
            color: n,
            showPopout: s,
            position: r,
            onRequestClose: i,
            onShowPopout: c,
            onColorChange: h,
            disabled: A,
        } = e;
        return (0, l.jsx)(d.vN, {
            children: (0, l.jsx)(u.Y, {
                targetElementRef: a,
                renderPopout: () => (0, l.jsx)(m.VN, { onChange: (e) => h(e, t), value: n }),
                position: r,
                shouldShow: s,
                onRequestClose: i,
                children: (e) =>
                    (0, l.jsx)("div", {
                        ref: a,
                        children: (0, l.jsx)(_.D, {
                            ...e,
                            className: g.tj,
                            onClick: c,
                            "data-position": t ? "left" : "right",
                            "aria-label": p.intl.string(t ? f.default.apbXbH : f.default.JaVq1b),
                            children: (0, l.jsx)(o.m, {
                                text: p.intl.string(t ? f.default.apbXbH : f.default.JaVq1b),
                                position: "bottom",
                                children: (0, l.jsx)(x, { position: t ? "left" : "right", color: n ?? 0, disabled: A }),
                            }),
                        }),
                    }),
            }),
        });
    };
function v(e) {
    let {
            defaultColor: t,
            colors: a,
            value: s,
            onChange: c,
            disabled: d = !1,
            customPickerPosition: _ = "bottom",
            secondaryValue: f,
            onChangeGradientColors: v,
            isGradient: N = !1,
            gradientButtonClassName: C,
            allowBlackCustomColor: b = !1,
        } = e,
        S = n.useCallback((e) => (0 !== e || b) && e !== t && !a.some((t) => t === e) && (b || 0 !== e), [a, t, b]),
        E = n.useRef(null),
        j = n.useRef(null),
        y = n.useRef(null),
        [T, I] = n.useState(() => (S(s) ? s : null)),
        [w, D] = n.useState({ start: s, end: f ?? h.TGz }),
        [k, L] = n.useState({ showStart: !1, showEnd: !1 });
    n.useEffect(() => {
        I(S(s) ? s : null), D({ start: s, end: f ?? h.TGz });
    }, [s, S, f]);
    let M = n.useCallback(
            (e) => {
                c?.(e), I(null);
            },
            [c, I],
        ),
        P = n.useCallback(
            (e) => {
                c?.(e), I(e);
            },
            [c, I],
        ),
        R = n.useCallback(
            (e, t) => {
                D({ start: e, end: t }), v?.([e, t]);
            },
            [v],
        ),
        U = n.useCallback((e, t) => {
            L((a) => ({ ...a, [e]: t }));
        }, []),
        G = n.useCallback(() => {
            let e = {
                    background: `linear-gradient(90deg, ${(0, i.Hl)(w.start ?? h.TGz)} 0%, ${(0, i.Hl)(w.end)} 100%)`,
                },
                t = (0, l.jsxs)("div", {
                    className: g.em,
                    children: [
                        (0, l.jsx)("div", { className: g.Ri, style: e }),
                        (0, l.jsx)(x, { position: "left", color: w.start ?? h.TGz, disabled: d }),
                        (0, l.jsx)(x, { position: "right", color: w.end ?? 0, disabled: d }),
                    ],
                });
            return d
                ? t
                : (0, l.jsxs)("div", {
                      className: r()(g.em, C),
                      children: [
                          (0, l.jsx)("div", { className: g.Ri, style: e }),
                          (0, l.jsx)(A, {
                              isStart: !0,
                              buttonRef: j,
                              color: w.start ?? h.TGz,
                              showPopout: k.showStart,
                              position: _,
                              onRequestClose: () => U("showStart", !1),
                              onShowPopout: () => U("showStart", !0),
                              onColorChange: (e) => R(e, w.end),
                              disabled: d,
                          }),
                          (0, l.jsx)(A, {
                              isStart: !1,
                              buttonRef: y,
                              color: w.end ?? 0,
                              showPopout: k.showEnd,
                              position: _,
                              onRequestClose: () => U("showEnd", !1),
                              onShowPopout: () => U("showEnd", !0),
                              onColorChange: (e) => R(w.start ?? h.TGz, e),
                              disabled: d,
                          }),
                      ],
                  });
        }, [_, d, w, k, R, U, C]),
        H = n.useCallback(() => (0, l.jsx)(m.VN, { onChange: P, value: s }), [P, s]),
        O = n.useCallback(
            (e) => {
                let a = s !== t && (0 !== s || b),
                    n = (0, l.jsx)(m.nJ, {
                        ...e,
                        customColor: e.customColor ?? (a ? s : null),
                        "aria-label": p.intl.string(p.t["FHBa/1"]),
                    });
                return d
                    ? n
                    : (0, l.jsx)(u.Y, {
                          targetElementRef: E,
                          renderPopout: H,
                          position: _,
                          children: (e) =>
                              (0, l.jsx)(o.m, {
                                  targetElementRef: E,
                                  text: p.intl.string(p.t["FHBa/1"]),
                                  position: "bottom",
                                  children: (0, l.jsx)("div", { ...e, ref: E, children: n }),
                              }),
                      });
            },
            [_, d, H, s, t, b],
        ),
        Y = n.useCallback(
            (e) => {
                let t = (0, l.jsx)(m.fy, { ...e });
                return d
                    ? t
                    : (0, l.jsx)(o.m, {
                          text: p.intl.string(p.t.bBvAEH),
                          position: "bottom",
                          children: (0, l.jsx)("div", { children: t }),
                      });
            },
            [d],
        );
    return (0, l.jsx)(m.sk, {
        ...e,
        renderDefaultButton: Y,
        renderCustomButton: O,
        renderGradientCustomButton: G,
        isGradient: N,
        customColor: T,
        onChange: N ? R : M,
    });
}
