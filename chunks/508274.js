"use strict";
n.d(t, { VN: () => N, fy: () => I, nJ: () => S, sk: () => T });
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(837381),
    o = n(887129),
    c = n(317097),
    d = n(187322),
    u = n(939249),
    p = n(661531),
    _ = n(305866),
    f = n(933832),
    h = n(22231),
    m = n(292666),
    g = n(714385),
    A = n(971745),
    b = n(652215),
    v = n(985018),
    y = n(670989);
let x = a.lazy(() => Promise.all([n.e("20038"), n.e("87680")]).then(n.bind(n, 148259))),
    E = () => Promise.resolve();
function C(e) {
    let {
            color: t,
            isDefault: n = !1,
            isCustom: a = !1,
            isSelected: r = !1,
            disabled: o = !1,
            style: u = {},
            onClick: _,
            isGradient: m = !1,
            "aria-label": g,
            gradientStart: A,
            gradientEnd: v,
            gradientDegrees: x = 180,
        } = e,
        E = (0, s.rm)(`color-${t}`),
        C = {};
    if (m && null != A && null != v) {
        let e = (0, c.Hl)(A),
            t = (0, c.Hl)(v);
        C = { background: `linear-gradient(${x}deg, ${e}, ${t})` };
    } else C = { backgroundColor: null != t ? (0, c.Hl)(t) : u.backgroundColor };
    let I = m ? A : t,
        S = !1;
    return (
        a && !r ? (S = !0) : (a || r) && (S = (0, c.OK)(I ?? b.TGz) > 0.2),
        (0, i.jsx)(d.vN, {
            offset: -2,
            children: (0, i.jsxs)("button", {
                type: "button",
                className: l()(y.iH, { [y.r9]: o, [y.Ay]: n, [y.Ie]: a, [y.dw]: null == t && !m, [y.hb]: m }),
                disabled: o,
                onClick: () => _?.(m ? { start: A, end: v } : t),
                style: { ...u, ...C },
                "aria-label": g ?? (m ? `Gradient ${A}-${v}` : C.backgroundColor),
                ...E,
                children: [
                    a
                        ? (0, i.jsx)(h.R, {
                              size: "custom",
                              className: y.M2,
                              width: 14,
                              height: 14,
                              color: S ? p.A.colors.WHITE.css : p.A.colors.BLACK.css,
                          })
                        : null,
                    (function () {
                        let e = 16,
                            t = 16;
                        if (((a || n) && ((e = "38%"), (t = "auto")), r))
                            return (0, i.jsx)(f.A, {
                                size: "custom",
                                width: e,
                                height: t,
                                color: S ? p.A.colors.WHITE.css : p.A.colors.BLACK.css,
                            });
                    })(),
                ],
            }),
        })
    );
}
class I extends a.PureComponent {
    render() {
        let { color: e, onChange: t, value: n, disabled: a, allowBlackCustomColor: r } = this.props;
        return (0, i.jsx)(C, {
            isDefault: !0,
            color: e,
            isSelected: e === n || (0 === n && !r),
            onClick: t,
            disabled: a,
        });
    }
}
class S extends a.PureComponent {
    render() {
        let { customColor: e, value: t, disabled: n, "aria-label": a, presets: r } = this.props;
        return (0, i.jsx)(C, {
            isCustom: !0,
            color: e,
            isSelected: t === e && !r.includes(e),
            disabled: n,
            "aria-label": a,
        });
    }
}
let N = a.memo(function (e) {
    var t;
    let {
            value: n,
            eagerUpdate: r = !1,
            onChange: s,
            onClose: o,
            suggestedColors: d,
            middle: p,
            footer: f,
            showEyeDropper: h,
            wrapperComponentType: b,
            className: E,
        } = e,
        C = (0, A.A)(),
        I = null == (t = n) ? null : "string" == typeof t ? ((0, c.qt)(t) ? (0, c.LX)(t) : null) : t,
        S = I ?? 0,
        N = (0, c.Hl)(S),
        T = (0, c.tf)(S),
        [w, L] = a.useState({ current: S, pending: { hex: N, hsl: T }, input: N });
    a.useEffect(() => {
        if (null == I || I === w.current) return;
        let e = (0, c.Hl)(I),
            t = (0, c.tf)(I);
        L({ current: I, pending: { hex: e, hsl: t }, input: e });
    }, [I, w]),
        a.useEffect(() => o, [o]);
    let j = (e) => {
            let t = "#" === e[0] ? e : `#${e}`;
            if (!(0, c.qt)(t)) return void L((e) => ({ ...e, input: t }));
            let n = (0, c.LX)(t),
                i = (0, c.tf)(n);
            L({ current: n, pending: { hex: t, hsl: i }, input: t }), s(n);
        },
        R = async () => {
            if (null != C)
                try {
                    let { sRGBHex: e } = await C.open();
                    j(e);
                } catch {}
        },
        k = a.useCallback(
            (e) => {
                L((t) => ({ ...t, pending: e, input: e.hex })), r && s((0, c.LX)(e.hex));
            },
            [r, s],
        ),
        D = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(a.Suspense, {
                    fallback: null,
                    children: (0, i.jsx)(x, {
                        onChange: k,
                        onChangeComplete: (e) => {
                            let { hex: t } = e;
                            s((0, c.LX)(t));
                        },
                        color: w.pending.hsl,
                    }),
                }),
                p,
                (0, i.jsx)(m.k, {
                    value: w.input.slice(1),
                    onChange: j,
                    maxLength: 6,
                    leading: "#",
                    trailing:
                        h && null != C ? { icon: g.d, onClick: R, "aria-label": v.intl.string(v.t["0dU9Ny"]) } : void 0,
                }),
                null != d &&
                    d.length > 0 &&
                    (0, i.jsx)("div", {
                        className: y.I1,
                        children: d.map((e, t) =>
                            (0, i.jsx)(
                                u.D,
                                {
                                    "aria-label": "",
                                    style: { backgroundColor: e },
                                    className: y.db,
                                    onClick: () => j(e),
                                },
                                `${e}-${t}`,
                            ),
                        ),
                    }),
                f,
            ],
        }),
        P = b ?? _.l;
    return (0, i.jsx)(P, { "aria-label": v.intl.string(v.t.WTqQ5e), className: l()(y.zi, E), children: D });
});
function T(e) {
    let {
            className: t,
            defaultColor: n,
            customColor: a,
            colors: r,
            value: c,
            secondaryValue: d,
            disabled: u,
            onChange: p,
            renderDefaultButton: _,
            renderCustomButton: f,
            colorContainerClassName: h,
            isGradient: m,
            renderGradientCustomButton: g,
            gradientDegrees: A,
            allowBlackCustomColor: b,
        } = e,
        v = (e) =>
            (0, i.jsx)("div", {
                className: y._D,
                children: m
                    ? e.map((e) =>
                          (0, i.jsx)(
                              C,
                              {
                                  gradientStart: e.start,
                                  gradientEnd: e.end,
                                  color: 0,
                                  isSelected: c === e.start && d === e.end,
                                  onClick: () => p(e.start, e.end),
                                  disabled: u,
                                  isGradient: !0,
                                  "aria-label": e.name,
                                  gradientDegrees: A,
                              },
                              `${e.start}-${e.end}`,
                          ),
                      )
                    : e.map((e) =>
                          (0, i.jsx)(C, { color: e, isSelected: e === c, onClick: p, disabled: u, isGradient: !1 }, e),
                      ),
            }),
        x = r.slice(0, r.length / 2),
        I = r.slice(r.length / 2, r.length),
        S = (0, o.Ay)({ id: "color-picker", isEnabled: !0, scrollToStart: E, scrollToEnd: E });
    return (0, i.jsx)(s.hD, {
        navigator: S,
        children: (0, i.jsx)(s.PR, {
            children: (e) => {
                let { ref: s, ...o } = e;
                return (0, i.jsxs)("div", {
                    className: l()(y.kL, t, { [y.D7]: m }),
                    ref: s,
                    ...o,
                    children: [
                        !m &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)("div", {
                                        className: l()(y.$R, h),
                                        children: _({
                                            value: c,
                                            color: n,
                                            onChange: p,
                                            disabled: u,
                                            allowBlackCustomColor: b,
                                        }),
                                    }),
                                    (0, i.jsx)("div", {
                                        className: l()(y.BQ, h),
                                        children: f({ value: c, customColor: a, disabled: u, presets: r }),
                                    }),
                                ],
                            }),
                        m &&
                            null != g &&
                            (0, i.jsx)("div", { children: g({ value: c, startColor: n, endColor: n, disabled: u }) }),
                        (0, i.jsxs)("div", { children: [v(x), v(I)] }),
                    ],
                });
            },
        }),
    });
}
