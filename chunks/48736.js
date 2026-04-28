s.r(e), s.d(e, { default: () => g });
var l = s(627968),
    o = s(64700),
    n = s(503698),
    a = s.n(n),
    r = s(317097),
    i = s(990078),
    d = s(714385),
    u = s(187322),
    c = s(922016),
    h = s(508274),
    b = s(939249),
    x = s(652215),
    j = s(985018),
    C = s(853513),
    m = s(895533);
let p = (t) => {
        let { position: e, color: s, disabled: o, ...n } = t,
            i = (0, r.OK)(s ?? x.TGz) > 0.1;
        return (0, l.jsx)("div", {
            ...n,
            className: a()("left" === e ? m.Zv : m.Un, i ? m.xA : m.fQ, { [m.r9]: o }),
            children: (0, l.jsx)("div", {
                className: m.Ol,
                style: { background: (0, r.Hl)(s) },
                children: (0, l.jsx)(d.d, { size: "custom", colorClass: i ? m.wW : m.yD, width: 14, height: 14 }),
            }),
        });
    },
    f = (t) => {
        let {
            isStart: e,
            buttonRef: s,
            color: o,
            showPopout: n,
            position: a,
            onRequestClose: r,
            onShowPopout: d,
            onColorChange: x,
            disabled: f,
        } = t;
        return (0, l.jsx)(u.vN, {
            children: (0, l.jsx)(c.Y, {
                targetElementRef: s,
                renderPopout: () => (0, l.jsx)(h.VN, { onChange: (t) => x(t, e), value: o }),
                position: a,
                shouldShow: n,
                onRequestClose: r,
                children: (t) =>
                    (0, l.jsx)("div", {
                        ref: s,
                        children: (0, l.jsx)(b.D, {
                            ...t,
                            className: m.tj,
                            onClick: d,
                            "data-position": e ? "left" : "right",
                            "aria-label": j.intl.string(e ? C.default.apbXbH : C.default.JaVq1b),
                            children: (0, l.jsx)(i.m, {
                                text: j.intl.string(e ? C.default.apbXbH : C.default.JaVq1b),
                                position: "bottom",
                                children: (0, l.jsx)(p, { position: e ? "left" : "right", color: o ?? 0, disabled: f }),
                            }),
                        }),
                    }),
            }),
        });
    };
function g(t) {
    let {
            defaultColor: e,
            colors: s,
            value: n,
            onChange: d,
            disabled: u = !1,
            customPickerPosition: b = "bottom",
            secondaryValue: C,
            onChangeGradientColors: g,
            isGradient: k = !1,
            gradientButtonClassName: w,
            allowBlackCustomColor: v = !1,
        } = t,
        R = o.useCallback((t) => (0 !== t || v) && t !== e && !s.some((e) => e === t) && (v || 0 !== t), [s, e, v]),
        S = o.useRef(null),
        N = o.useRef(null),
        E = o.useRef(null),
        [G, z] = o.useState(() => (R(n) ? n : null)),
        [H, T] = o.useState({ start: n, end: C ?? x.TGz }),
        [B, P] = o.useState({ showStart: !1, showEnd: !1 });
    o.useEffect(() => {
        z(R(n) ? n : null), T({ start: n, end: C ?? x.TGz });
    }, [n, R, C]);
    let q = o.useCallback(
            (t) => {
                d?.(t), z(null);
            },
            [d, z],
        ),
        y = o.useCallback(
            (t) => {
                d?.(t), z(t);
            },
            [d, z],
        ),
        V = o.useCallback(
            (t, e) => {
                T({ start: t, end: e }), g?.([t, e]);
            },
            [g],
        ),
        D = o.useCallback((t, e) => {
            P((s) => ({ ...s, [t]: e }));
        }, []),
        J = o.useCallback(() => {
            let t = {
                    background: `linear-gradient(90deg, ${(0, r.Hl)(H.start ?? x.TGz)} 0%, ${(0, r.Hl)(H.end)} 100%)`,
                },
                e = (0, l.jsxs)("div", {
                    className: m.em,
                    children: [
                        (0, l.jsx)("div", { className: m.Ri, style: t }),
                        (0, l.jsx)(p, { position: "left", color: H.start ?? x.TGz, disabled: u }),
                        (0, l.jsx)(p, { position: "right", color: H.end ?? 0, disabled: u }),
                    ],
                });
            return u
                ? e
                : (0, l.jsxs)("div", {
                      className: a()(m.em, w),
                      children: [
                          (0, l.jsx)("div", { className: m.Ri, style: t }),
                          (0, l.jsx)(f, {
                              isStart: !0,
                              buttonRef: N,
                              color: H.start ?? x.TGz,
                              showPopout: B.showStart,
                              position: b,
                              onRequestClose: () => D("showStart", !1),
                              onShowPopout: () => D("showStart", !0),
                              onColorChange: (t) => V(t, H.end),
                              disabled: u,
                          }),
                          (0, l.jsx)(f, {
                              isStart: !1,
                              buttonRef: E,
                              color: H.end ?? 0,
                              showPopout: B.showEnd,
                              position: b,
                              onRequestClose: () => D("showEnd", !1),
                              onShowPopout: () => D("showEnd", !0),
                              onColorChange: (t) => V(H.start ?? x.TGz, t),
                              disabled: u,
                          }),
                      ],
                  });
        }, [b, u, H, B, V, D, w]),
        A = o.useCallback(() => (0, l.jsx)(h.VN, { onChange: y, value: n }), [y, n]),
        F = o.useCallback(
            (t) => {
                let s = n !== e && (0 !== n || v),
                    o = (0, l.jsx)(h.nJ, {
                        ...t,
                        customColor: t.customColor ?? (s ? n : null),
                        "aria-label": j.intl.string(j.t["FHBa/1"]),
                    });
                return u
                    ? o
                    : (0, l.jsx)(c.Y, {
                          targetElementRef: S,
                          renderPopout: A,
                          position: b,
                          children: (t) =>
                              (0, l.jsx)(i.m, {
                                  targetElementRef: S,
                                  text: j.intl.string(j.t["FHBa/1"]),
                                  position: "bottom",
                                  children: (0, l.jsx)("div", { ...t, ref: S, children: o }),
                              }),
                      });
            },
            [b, u, A, n, e, v],
        ),
        O = o.useCallback(
            (t) => {
                let e = (0, l.jsx)(h.fy, { ...t });
                return u
                    ? e
                    : (0, l.jsx)(i.m, {
                          text: j.intl.string(j.t.bBvAEH),
                          position: "bottom",
                          children: (0, l.jsx)("div", { children: e }),
                      });
            },
            [u],
        );
    return (0, l.jsx)(h.sk, {
        ...t,
        renderDefaultButton: O,
        renderCustomButton: F,
        renderGradientCustomButton: J,
        isGradient: k,
        customColor: G,
        onChange: k ? V : q,
    });
}
