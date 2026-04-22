"use strict";
a.r(t), a.d(t, { default: () => x });
var l = a(627968),
    i = a(64700),
    r = a(503698),
    n = a.n(r),
    s = a(317097),
    o = a(990078),
    d = a(714385),
    c = a(187322),
    u = a(265872),
    _ = a(508274),
    h = a(939249),
    m = a(652215),
    p = a(985018),
    g = a(645704),
    f = a(45485);
let b = (e) => {
        let { position: t, color: a, disabled: i, ...r } = e,
            o = (0, s.OK)(a ?? m.TGz) > 0.1;
        return (0, l.jsx)("div", {
            ...r,
            className: n()("left" === t ? f.Zv : f.Un, o ? f.xA : f.fQ, { [f.r9]: i }),
            children: (0, l.jsx)("div", {
                className: f.Ol,
                style: { background: (0, s.Hl)(a) },
                children: (0, l.jsx)(d.d, { size: "custom", colorClass: o ? f.wW : f.yD, width: 14, height: 14 }),
            }),
        });
    },
    A = (e) => {
        let {
            isStart: t,
            buttonRef: a,
            color: i,
            showPopout: r,
            position: n,
            onRequestClose: s,
            onShowPopout: d,
            onColorChange: m,
            disabled: A,
        } = e;
        return (0, l.jsx)(c.vN, {
            children: (0, l.jsx)(u.Y, {
                targetElementRef: a,
                renderPopout: () => (0, l.jsx)(_.VN, { onChange: (e) => m(e, t), value: i }),
                position: n,
                shouldShow: r,
                onRequestClose: s,
                children: (e) =>
                    (0, l.jsx)("div", {
                        ref: a,
                        children: (0, l.jsx)(h.D, {
                            ...e,
                            className: f.tj,
                            onClick: d,
                            "data-position": t ? "left" : "right",
                            "aria-label": p.intl.string(t ? g.default.apbXbH : g.default.JaVq1b),
                            children: (0, l.jsx)(o.m, {
                                text: p.intl.string(t ? g.default.apbXbH : g.default.JaVq1b),
                                position: "bottom",
                                children: (0, l.jsx)(b, { position: t ? "left" : "right", color: i ?? 0, disabled: A }),
                            }),
                        }),
                    }),
            }),
        });
    };
function x(e) {
    let {
            defaultColor: t,
            colors: a,
            value: r,
            onChange: d,
            disabled: c = !1,
            customPickerPosition: h = "bottom",
            secondaryValue: g,
            onChangeGradientColors: x,
            isGradient: v = !1,
            gradientButtonClassName: C,
            allowBlackCustomColor: E = !1,
        } = e,
        y = i.useCallback((e) => (0 !== e || E) && e !== t && !a.some((t) => t === e) && (E || 0 !== e), [a, t, E]),
        I = i.useRef(null),
        N = i.useRef(null),
        S = i.useRef(null),
        [T, w] = i.useState(() => (y(r) ? r : null)),
        [j, R] = i.useState({ start: r, end: g ?? m.TGz }),
        [L, k] = i.useState({ showStart: !1, showEnd: !1 });
    i.useEffect(() => {
        w(y(r) ? r : null), R({ start: r, end: g ?? m.TGz });
    }, [r, y, g]);
    let M = i.useCallback(
            (e) => {
                d?.(e), w(null);
            },
            [d, w],
        ),
        P = i.useCallback(
            (e) => {
                d?.(e), w(e);
            },
            [d, w],
        ),
        O = i.useCallback(
            (e, t) => {
                R({ start: e, end: t }), x?.([e, t]);
            },
            [x],
        ),
        D = i.useCallback((e, t) => {
            k((a) => ({ ...a, [e]: t }));
        }, []),
        U = i.useCallback(() => {
            let e = {
                    background: `linear-gradient(90deg, ${(0, s.Hl)(j.start ?? m.TGz)} 0%, ${(0, s.Hl)(j.end)} 100%)`,
                },
                t = (0, l.jsxs)("div", {
                    className: f.em,
                    children: [
                        (0, l.jsx)("div", { className: f.Ri, style: e }),
                        (0, l.jsx)(b, { position: "left", color: j.start ?? m.TGz, disabled: c }),
                        (0, l.jsx)(b, { position: "right", color: j.end ?? 0, disabled: c }),
                    ],
                });
            return c
                ? t
                : (0, l.jsxs)("div", {
                      className: n()(f.em, C),
                      children: [
                          (0, l.jsx)("div", { className: f.Ri, style: e }),
                          (0, l.jsx)(A, {
                              isStart: !0,
                              buttonRef: N,
                              color: j.start ?? m.TGz,
                              showPopout: L.showStart,
                              position: h,
                              onRequestClose: () => D("showStart", !1),
                              onShowPopout: () => D("showStart", !0),
                              onColorChange: (e) => O(e, j.end),
                              disabled: c,
                          }),
                          (0, l.jsx)(A, {
                              isStart: !1,
                              buttonRef: S,
                              color: j.end ?? 0,
                              showPopout: L.showEnd,
                              position: h,
                              onRequestClose: () => D("showEnd", !1),
                              onShowPopout: () => D("showEnd", !0),
                              onColorChange: (e) => O(j.start ?? m.TGz, e),
                              disabled: c,
                          }),
                      ],
                  });
        }, [h, c, j, L, O, D, C]),
        B = i.useCallback(() => (0, l.jsx)(_.VN, { onChange: P, value: r }), [P, r]),
        F = i.useCallback(
            (e) => {
                let a = r !== t && (0 !== r || E),
                    i = (0, l.jsx)(_.nJ, {
                        ...e,
                        customColor: e.customColor ?? (a ? r : null),
                        "aria-label": p.intl.string(p.t["FHBa/1"]),
                    });
                return c
                    ? i
                    : (0, l.jsx)(u.Y, {
                          targetElementRef: I,
                          renderPopout: B,
                          position: h,
                          children: (e) =>
                              (0, l.jsx)(o.m, {
                                  targetElementRef: I,
                                  text: p.intl.string(p.t["FHBa/1"]),
                                  position: "bottom",
                                  children: (0, l.jsx)("div", { ...e, ref: I, children: i }),
                              }),
                      });
            },
            [h, c, B, r, t, E],
        ),
        G = i.useCallback(
            (e) => {
                let t = (0, l.jsx)(_.fy, { ...e });
                return c
                    ? t
                    : (0, l.jsx)(o.m, {
                          text: p.intl.string(p.t.bBvAEH),
                          position: "bottom",
                          children: (0, l.jsx)("div", { children: t }),
                      });
            },
            [c],
        );
    return (0, l.jsx)(_.sk, {
        ...e,
        renderDefaultButton: G,
        renderCustomButton: F,
        renderGradientCustomButton: U,
        isGradient: v,
        customColor: T,
        onChange: v ? O : M,
    });
}
