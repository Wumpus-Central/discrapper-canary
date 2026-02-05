s.r(t), s.d(t, { default: () => b });
var n = s(627968),
    a = s(64700),
    r = s(503698),
    l = s.n(r),
    i = s(317097),
    o = s(990078),
    d = s(397927),
    c = s(652215),
    u = s(985018),
    m = s(333354),
    _ = s(873790);
let x = (e) => {
        let { position: t, color: s, disabled: a, ...r } = e,
            o = (0, i.OK)(s ?? c.TGz) > 0.1;
        return (0, n.jsx)("div", {
            ...r,
            className: l()("left" === t ? _.Zv : _.Un, o ? _.xA : _.fQ, { [_.r9]: a }),
            children: (0, n.jsx)("div", {
                className: _.Ol,
                style: { background: (0, i.Hl)(s) },
                children: (0, n.jsx)(d.dDg, { size: "custom", colorClass: o ? _.wW : _.yD, width: 14, height: 14 }),
            }),
        });
    },
    g = (e) => {
        let {
            isStart: t,
            buttonRef: s,
            color: a,
            showPopout: r,
            position: l,
            onRequestClose: i,
            onShowPopout: c,
            onColorChange: g,
            disabled: b,
        } = e;
        return (0, n.jsx)(d.vN3, {
            children: (0, n.jsx)(d.YNO, {
                targetElementRef: s,
                renderPopout: () => (0, n.jsx)(d.VNw, { onChange: (e) => g(e, t), value: a }),
                position: l,
                shouldShow: r,
                onRequestClose: i,
                children: (e) =>
                    (0, n.jsx)("div", {
                        ref: s,
                        children: (0, n.jsx)(d.DUT, {
                            ...e,
                            className: _.tj,
                            onClick: c,
                            "data-position": t ? "left" : "right",
                            "aria-label": u.intl.string(t ? m.default.apbXbH : m.default.JaVq1b),
                            children: (0, n.jsx)(o.m, {
                                text: u.intl.string(t ? m.default.apbXbH : m.default.JaVq1b),
                                position: "bottom",
                                children: (0, n.jsx)(x, { position: t ? "left" : "right", color: a ?? 0, disabled: b }),
                            }),
                        }),
                    }),
            }),
        });
    };
function b(e) {
    let {
            defaultColor: t,
            colors: s,
            value: r,
            onChange: m,
            disabled: b = !1,
            customPickerPosition: h = "bottom",
            secondaryValue: f,
            onChangeGradientColors: p,
            isGradient: j = !1,
            gradientButtonClassName: k,
            allowBlackCustomColor: C = !1,
        } = e,
        v = a.useCallback((e) => (0 !== e || C) && e !== t && !s.some((t) => t === e) && (C || 0 !== e), [s, t, C]),
        N = a.useRef(null),
        S = a.useRef(null),
        A = a.useRef(null),
        [I, w] = a.useState(() => (v(r) ? r : null)),
        [y, T] = a.useState({ start: r, end: f ?? c.TGz }),
        [E, O] = a.useState({ showStart: !1, showEnd: !1 });
    a.useEffect(() => {
        w(v(r) ? r : null), T({ start: r, end: f ?? c.TGz });
    }, [r, v, f]);
    let D = a.useCallback(
            (e) => {
                m?.(e), w(null);
            },
            [m, w],
        ),
        P = a.useCallback(
            (e) => {
                m?.(e), w(e);
            },
            [m, w],
        ),
        R = a.useCallback(
            (e, t) => {
                T({ start: e, end: t }), p?.([e, t]);
            },
            [p],
        ),
        G = a.useCallback((e, t) => {
            O((s) => ({ ...s, [e]: t }));
        }, []),
        B = a.useCallback(() => {
            let e = {
                    background: `linear-gradient(90deg, ${(0, i.Hl)(y.start ?? c.TGz)} 0%, ${(0, i.Hl)(y.end)} 100%)`,
                },
                t = (0, n.jsxs)("div", {
                    className: _.em,
                    children: [
                        (0, n.jsx)("div", { className: _.Ri, style: e }),
                        (0, n.jsx)(x, { position: "left", color: y.start ?? c.TGz, disabled: b }),
                        (0, n.jsx)(x, { position: "right", color: y.end ?? 0, disabled: b }),
                    ],
                });
            return b
                ? t
                : (0, n.jsxs)("div", {
                      className: l()(_.em, k),
                      children: [
                          (0, n.jsx)("div", { className: _.Ri, style: e }),
                          (0, n.jsx)(g, {
                              isStart: !0,
                              buttonRef: S,
                              color: y.start ?? c.TGz,
                              showPopout: E.showStart,
                              position: h,
                              onRequestClose: () => G("showStart", !1),
                              onShowPopout: () => G("showStart", !0),
                              onColorChange: (e) => R(e, y.end),
                              disabled: b,
                          }),
                          (0, n.jsx)(g, {
                              isStart: !1,
                              buttonRef: A,
                              color: y.end ?? 0,
                              showPopout: E.showEnd,
                              position: h,
                              onRequestClose: () => G("showEnd", !1),
                              onShowPopout: () => G("showEnd", !0),
                              onColorChange: (e) => R(y.start ?? c.TGz, e),
                              disabled: b,
                          }),
                      ],
                  });
        }, [h, b, y, E, R, G, k]),
        L = a.useCallback(() => (0, n.jsx)(d.VNw, { onChange: P, value: r }), [P, r]),
        U = a.useCallback(
            (e) => {
                let s = r !== t && (0 !== r || C),
                    a = (0, n.jsx)(d.nJu, {
                        ...e,
                        customColor: e.customColor ?? (s ? r : null),
                        "aria-label": u.intl.string(u.t["FHBa/1"]),
                    });
                return b
                    ? a
                    : (0, n.jsx)(d.YNO, {
                          targetElementRef: N,
                          renderPopout: L,
                          position: h,
                          children: (e) =>
                              (0, n.jsx)(o.m, {
                                  targetElementRef: N,
                                  text: u.intl.string(u.t["FHBa/1"]),
                                  position: "bottom",
                                  children: (0, n.jsx)("div", { ...e, ref: N, children: a }),
                              }),
                      });
            },
            [h, b, L, r, t, C],
        ),
        M = a.useCallback(
            (e) => {
                let t = (0, n.jsx)(d.fyo, { ...e });
                return b
                    ? t
                    : (0, n.jsx)(o.m, {
                          text: u.intl.string(u.t.bBvAEH),
                          position: "bottom",
                          children: (0, n.jsx)("div", { children: t }),
                      });
            },
            [b],
        );
    return (0, n.jsx)(d.skP, {
        ...e,
        renderDefaultButton: M,
        renderCustomButton: U,
        renderGradientCustomButton: B,
        isGradient: j,
        customColor: I,
        onChange: j ? R : D,
    });
}
