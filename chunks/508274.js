"use strict";
n.d(t, { VN: () => T, fy: () => S, nJ: () => N, sk: () => w });
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(837381),
    o = n(887129),
    c = n(741918),
    d = n(317097),
    u = n(187322),
    p = n(939249),
    _ = n(661531),
    f = n(305866),
    m = n(933832),
    h = n(22231),
    g = n(292666),
    A = n(714385),
    b = n(971745),
    v = n(652215),
    y = n(985018),
    x = n(670989);
let E = a.lazy(() => Promise.all([n.e("20038"), n.e("87680")]).then(n.bind(n, 148259))),
    I = () => Promise.resolve();
function C(e) {
    let {
            color: t,
            listItemId: n,
            isDefault: a = !1,
            isCustom: r = !1,
            isSelected: o = !1,
            disabled: c = !1,
            style: p = {},
            onClick: f,
            isGradient: g = !1,
            "aria-label": A,
            gradientStart: b,
            gradientEnd: y,
            gradientDegrees: E = 180,
        } = e,
        I = (0, s.rm)(n ?? `color-${t}`),
        C = {};
    if (g && null != b && null != y) {
        let e = (0, d.Hl)(b),
            t = (0, d.Hl)(y);
        C = { background: `linear-gradient(${E}deg, ${e}, ${t})` };
    } else C = { backgroundColor: null != t ? (0, d.Hl)(t) : p.backgroundColor };
    let S = g ? b : t,
        N = !1;
    return (
        r && !o ? (N = !0) : (r || o) && (N = (0, d.OK)(S ?? v.TGz) > 0.2),
        (0, i.jsx)(u.vN, {
            offset: -2,
            children: (0, i.jsxs)("button", {
                type: "button",
                className: l()(x.iH, { [x.r9]: c, [x.Ay]: a, [x.Ie]: r, [x.dw]: null == t && !g, [x.hb]: g }),
                disabled: c,
                onClick: () => f?.(g ? { start: b, end: y } : t),
                style: { ...p, ...C },
                "aria-label": A ?? (g ? `Gradient ${b}-${y}` : C.backgroundColor),
                ...I,
                children: [
                    r
                        ? (0, i.jsx)(h.R, {
                              size: "custom",
                              className: x.M2,
                              width: 14,
                              height: 14,
                              color: N ? _.A.colors.WHITE.css : _.A.colors.BLACK.css,
                          })
                        : null,
                    (function () {
                        let e = 16,
                            t = 16;
                        if (((r || a) && ((e = "38%"), (t = "auto")), o))
                            return (0, i.jsx)(m.A, {
                                size: "custom",
                                width: e,
                                height: t,
                                color: N ? _.A.colors.WHITE.css : _.A.colors.BLACK.css,
                            });
                    })(),
                ],
            }),
        })
    );
}
class S extends a.PureComponent {
    render() {
        let { color: e, onChange: t, value: n, disabled: a, allowBlackCustomColor: r } = this.props;
        return (0, i.jsx)(C, {
            isDefault: !0,
            listItemId: "default",
            color: e,
            isSelected: e === n || (0 === n && !r),
            onClick: t,
            disabled: a,
        });
    }
}
class N extends a.PureComponent {
    render() {
        let { customColor: e, value: t, disabled: n, "aria-label": a, presets: r } = this.props;
        return (0, i.jsx)(C, {
            isCustom: !0,
            listItemId: "custom",
            color: e,
            isSelected: t === e && !r.includes(e),
            disabled: n,
            "aria-label": a,
        });
    }
}
let T = a.memo(function (e) {
    var t;
    let {
            value: n,
            eagerUpdate: r = !1,
            onChange: s,
            onClose: o,
            suggestedColors: c,
            middle: u,
            footer: _,
            showEyeDropper: m,
            wrapperComponentType: h,
            className: v,
        } = e,
        I = (0, b.A)(),
        C = null == (t = n) ? null : "string" == typeof t ? ((0, d.qt)(t) ? (0, d.LX)(t) : null) : t,
        S = C ?? 0,
        N = (0, d.Hl)(S),
        T = (0, d.tf)(S),
        [w, L] = a.useState({ current: S, pending: { hex: N, hsl: T }, input: N });
    a.useEffect(() => {
        if (null == C || C === w.current) return;
        let e = (0, d.Hl)(C),
            t = (0, d.tf)(C);
        L({ current: C, pending: { hex: e, hsl: t }, input: e });
    }, [C, w]),
        a.useEffect(() => o, [o]);
    let j = (e) => {
            let t = "#" === e[0] ? e : `#${e}`;
            if (!(0, d.qt)(t)) return void L((e) => ({ ...e, input: t }));
            let n = (0, d.LX)(t),
                i = (0, d.tf)(n);
            L({ current: n, pending: { hex: t, hsl: i }, input: t }), s(n);
        },
        R = async () => {
            if (null != I)
                try {
                    let { sRGBHex: e } = await I.open();
                    j(e);
                } catch {}
        },
        k = a.useCallback(
            (e) => {
                L((t) => ({ ...t, pending: e, input: e.hex })), r && s((0, d.LX)(e.hex));
            },
            [r, s],
        ),
        D = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(a.Suspense, {
                    fallback: null,
                    children: (0, i.jsx)(E, {
                        onChange: k,
                        onChangeComplete: (e) => {
                            let { hex: t } = e;
                            s((0, d.LX)(t));
                        },
                        color: w.pending.hsl,
                    }),
                }),
                u,
                (0, i.jsx)(g.k, {
                    value: w.input.slice(1),
                    onChange: j,
                    maxLength: 6,
                    leading: "#",
                    trailing:
                        m && null != I ? { icon: A.d, onClick: R, "aria-label": y.intl.string(y.t["0dU9Ny"]) } : void 0,
                }),
                null != c &&
                    c.length > 0 &&
                    (0, i.jsx)("div", {
                        className: x.I1,
                        children: c.map((e, t) =>
                            (0, i.jsx)(
                                p.D,
                                {
                                    "aria-label": "",
                                    style: { backgroundColor: e },
                                    className: x.db,
                                    onClick: () => j(e),
                                },
                                `${e}-${t}`,
                            ),
                        ),
                    }),
                _,
            ],
        }),
        P = h ?? f.l;
    return (0, i.jsx)(P, { "aria-label": y.intl.string(y.t.WTqQ5e), className: l()(x.zi, v), children: D });
});
function w(e) {
    let {
            className: t,
            defaultColor: n,
            customColor: a,
            colors: r,
            value: d,
            secondaryValue: u,
            disabled: p,
            onChange: _,
            renderDefaultButton: f,
            renderCustomButton: m,
            colorContainerClassName: h,
            isGradient: g,
            renderGradientCustomButton: A,
            gradientDegrees: b,
            allowBlackCustomColor: v,
        } = e,
        y = (e) =>
            (0, i.jsx)("div", {
                className: x._D,
                children: g
                    ? e.map((e) =>
                          (0, i.jsx)(
                              C,
                              {
                                  listItemId: `gradient-${e.start}-${e.end}`,
                                  gradientStart: e.start,
                                  gradientEnd: e.end,
                                  color: 0,
                                  isSelected: d === e.start && u === e.end,
                                  onClick: () => _(e.start, e.end),
                                  disabled: p,
                                  isGradient: !0,
                                  "aria-label": e.name,
                                  gradientDegrees: b,
                              },
                              `${e.start}-${e.end}`,
                          ),
                      )
                    : e.map((e) =>
                          (0, i.jsx)(
                              C,
                              {
                                  listItemId: `preset-${e}`,
                                  color: e,
                                  isSelected: e === d,
                                  onClick: _,
                                  disabled: p,
                                  isGradient: !1,
                              },
                              e,
                          ),
                      ),
            }),
        E = r.slice(0, r.length / 2),
        S = r.slice(r.length / 2, r.length),
        N = (0, o.Ay)({
            id: "color-picker",
            isEnabled: !0,
            orientation: c.Gl.HORIZONTAL,
            scrollToStart: I,
            scrollToEnd: I,
        });
    return (0, i.jsx)(s.hD, {
        navigator: N,
        children: (0, i.jsx)(s.PR, {
            children: (e) => {
                let { ref: s, ...o } = e;
                return (0, i.jsxs)("div", {
                    className: l()(x.kL, t, { [x.D7]: g }),
                    ref: s,
                    ...o,
                    children: [
                        !g &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)("div", {
                                        className: l()(x.$R, h),
                                        children: f({
                                            value: d,
                                            color: n,
                                            onChange: _,
                                            disabled: p,
                                            allowBlackCustomColor: v,
                                        }),
                                    }),
                                    (0, i.jsx)("div", {
                                        className: l()(x.BQ, h),
                                        children: m({ value: d, customColor: a, disabled: p, presets: r }),
                                    }),
                                ],
                            }),
                        g &&
                            null != A &&
                            (0, i.jsx)("div", { children: A({ value: d, startColor: n, endColor: n, disabled: p }) }),
                        (0, i.jsxs)("div", { children: [y(E), y(S)] }),
                    ],
                });
            },
        }),
    });
}
