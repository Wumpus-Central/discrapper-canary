"use strict";
n.r(t), n.d(t, { default: () => v });
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(317097),
    o = n(990078),
    c = n(714385),
    d = n(187322),
    u = n(922016),
    p = n(508274),
    _ = n(939249),
    f = n(652215),
    h = n(985018),
    m = n(853513),
    g = n(895533);
let A = (e) => {
        let { position: t, color: n, disabled: a, ...r } = e,
            o = (0, s.OK)(n ?? f.TGz) > 0.1;
        return (0, i.jsx)("div", {
            ...r,
            className: l()("left" === t ? g.Zv : g.Un, o ? g.xA : g.fQ, { [g.r9]: a }),
            children: (0, i.jsx)("div", {
                className: g.Ol,
                style: { background: (0, s.Hl)(n) },
                children: (0, i.jsx)(c.d, { size: "custom", colorClass: o ? g.wW : g.yD, width: 14, height: 14 }),
            }),
        });
    },
    b = (e) => {
        let {
            isStart: t,
            buttonRef: n,
            color: a,
            showPopout: r,
            position: l,
            onRequestClose: s,
            onShowPopout: c,
            onColorChange: f,
            disabled: b,
        } = e;
        return (0, i.jsx)(d.vN, {
            children: (0, i.jsx)(u.Y, {
                targetElementRef: n,
                renderPopout: () => (0, i.jsx)(p.VN, { onChange: (e) => f(e, t), value: a }),
                position: l,
                shouldShow: r,
                onRequestClose: s,
                children: (e) =>
                    (0, i.jsx)("div", {
                        ref: n,
                        children: (0, i.jsx)(_.D, {
                            ...e,
                            className: g.tj,
                            onClick: c,
                            "data-position": t ? "left" : "right",
                            "aria-label": h.intl.string(t ? m.default.apbXbH : m.default.JaVq1b),
                            children: (0, i.jsx)(o.m, {
                                text: h.intl.string(t ? m.default.apbXbH : m.default.JaVq1b),
                                position: "bottom",
                                children: (0, i.jsx)(A, { position: t ? "left" : "right", color: a ?? 0, disabled: b }),
                            }),
                        }),
                    }),
            }),
        });
    };
function v(e) {
    let {
            defaultColor: t,
            colors: n,
            value: r,
            onChange: c,
            disabled: d = !1,
            customPickerPosition: _ = "bottom",
            secondaryValue: m,
            onChangeGradientColors: v,
            isGradient: y = !1,
            gradientButtonClassName: x,
            allowBlackCustomColor: E = !1,
        } = e,
        C = a.useCallback((e) => (0 !== e || E) && e !== t && !n.some((t) => t === e) && (E || 0 !== e), [n, t, E]),
        I = a.useRef(null),
        S = a.useRef(null),
        N = a.useRef(null),
        [T, w] = a.useState(() => (C(r) ? r : null)),
        [L, j] = a.useState({ start: r, end: m ?? f.TGz }),
        [R, k] = a.useState({ showStart: !1, showEnd: !1 });
    a.useEffect(() => {
        w(C(r) ? r : null), j({ start: r, end: m ?? f.TGz });
    }, [r, C, m]);
    let D = a.useCallback(
            (e) => {
                c?.(e), w(null);
            },
            [c, w],
        ),
        P = a.useCallback(
            (e) => {
                c?.(e), w(e);
            },
            [c, w],
        ),
        M = a.useCallback(
            (e, t) => {
                j({ start: e, end: t }), v?.([e, t]);
            },
            [v],
        ),
        O = a.useCallback((e, t) => {
            k((n) => ({ ...n, [e]: t }));
        }, []),
        F = a.useCallback(() => {
            let e = {
                    background: `linear-gradient(90deg, ${(0, s.Hl)(L.start ?? f.TGz)} 0%, ${(0, s.Hl)(L.end)} 100%)`,
                },
                t = (0, i.jsxs)("div", {
                    className: g.em,
                    children: [
                        (0, i.jsx)("div", { className: g.Ri, style: e }),
                        (0, i.jsx)(A, { position: "left", color: L.start ?? f.TGz, disabled: d }),
                        (0, i.jsx)(A, { position: "right", color: L.end ?? 0, disabled: d }),
                    ],
                });
            return d
                ? t
                : (0, i.jsxs)("div", {
                      className: l()(g.em, x),
                      children: [
                          (0, i.jsx)("div", { className: g.Ri, style: e }),
                          (0, i.jsx)(b, {
                              isStart: !0,
                              buttonRef: S,
                              color: L.start ?? f.TGz,
                              showPopout: R.showStart,
                              position: _,
                              onRequestClose: () => O("showStart", !1),
                              onShowPopout: () => O("showStart", !0),
                              onColorChange: (e) => M(e, L.end),
                              disabled: d,
                          }),
                          (0, i.jsx)(b, {
                              isStart: !1,
                              buttonRef: N,
                              color: L.end ?? 0,
                              showPopout: R.showEnd,
                              position: _,
                              onRequestClose: () => O("showEnd", !1),
                              onShowPopout: () => O("showEnd", !0),
                              onColorChange: (e) => M(L.start ?? f.TGz, e),
                              disabled: d,
                          }),
                      ],
                  });
        }, [_, d, L, R, M, O, x]),
        U = a.useCallback(() => (0, i.jsx)(p.VN, { onChange: P, value: r }), [P, r]),
        G = a.useCallback(
            (e) => {
                let n = r !== t && (0 !== r || E),
                    a = (0, i.jsx)(p.nJ, {
                        ...e,
                        customColor: e.customColor ?? (n ? r : null),
                        "aria-label": h.intl.string(h.t["FHBa/1"]),
                    });
                return d
                    ? a
                    : (0, i.jsx)(u.Y, {
                          targetElementRef: I,
                          renderPopout: U,
                          position: _,
                          children: (e) =>
                              (0, i.jsx)(o.m, {
                                  targetElementRef: I,
                                  text: h.intl.string(h.t["FHBa/1"]),
                                  position: "bottom",
                                  children: (0, i.jsx)("div", { ...e, ref: I, children: a }),
                              }),
                      });
            },
            [_, d, U, r, t, E],
        ),
        B = a.useCallback(
            (e) => {
                let t = (0, i.jsx)(p.fy, { ...e });
                return d
                    ? t
                    : (0, i.jsx)(o.m, {
                          text: h.intl.string(h.t.bBvAEH),
                          position: "bottom",
                          children: (0, i.jsx)("div", { children: t }),
                      });
            },
            [d],
        );
    return (0, i.jsx)(p.sk, {
        ...e,
        renderDefaultButton: B,
        renderCustomButton: G,
        renderGradientCustomButton: F,
        isGradient: y,
        customColor: T,
        onChange: y ? M : D,
    });
}
