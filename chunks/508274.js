"use strict";
n.d(t, { VN: () => C, fy: () => y, nJ: () => v, sk: () => R });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(837381),
    l = n(884362),
    u = n(317097),
    c = n(158954),
    d = n(827734),
    _ = n(305866),
    f = n(397927),
    p = n(971745),
    h = n(652215),
    m = n(985018),
    E = n(39610);
let g = i.lazy(() => Promise.all([n.e("47950"), n.e("87680")]).then(n.bind(n, 148259))),
    A = 7,
    I = () => Promise.resolve();
function T(e) {
    return null == e ? null : "string" == typeof e ? ((0, u.qt)(e) ? (0, u.LX)(e) : null) : e;
}
function S(e) {
    let {
            color: t,
            isDefault: n = !1,
            isCustom: i = !1,
            isSelected: s = !1,
            disabled: l = !1,
            style: _ = {},
            onClick: p,
            isGradient: m = !1,
            "aria-label": g,
            gradientStart: A,
            gradientEnd: I,
            gradientDegrees: T = 180,
        } = e,
        S = (0, o.rm)(`color-${t}`),
        y = {};
    if (m && null != A && null != I) {
        let e = (0, u.Hl)(A),
            t = (0, u.Hl)(I);
        y = { background: `linear-gradient(${T}deg, ${e}, ${t})` };
    } else y = { backgroundColor: null != t ? (0, u.Hl)(t) : _.backgroundColor };
    let v = m ? A : t,
        N = !1;
    function C() {
        let e = 16,
            t = 16;
        if (((i || n) && ((e = "38%"), (t = "auto")), s))
            return (0, r.jsx)(f.A9s, {
                size: "custom",
                width: e,
                height: t,
                color: N ? d.A.colors.WHITE.css : d.A.colors.BLACK.css,
            });
    }
    return (
        i && !s ? (N = !0) : (i || s) && (N = (0, u.OK)(v ?? h.TGz) > 0.2),
        (0, r.jsx)(c.vN3, {
            offset: -2,
            children: (0, r.jsxs)("button", {
                type: "button",
                className: a()(E.iH, { [E.r9]: l, [E.Ay]: n, [E.Ie]: i, [E.dw]: null == t && !m, [E.hb]: m }),
                disabled: l,
                onClick: () => p?.(m ? { start: A, end: I } : t),
                style: { ..._, ...y },
                "aria-label": g ?? (m ? `Gradient ${A}-${I}` : y.backgroundColor),
                ...S,
                children: [
                    i
                        ? (0, r.jsx)(f.R2l, {
                              size: "custom",
                              className: E.M2,
                              width: 14,
                              height: 14,
                              color: N ? d.A.colors.WHITE.css : d.A.colors.BLACK.css,
                          })
                        : null,
                    C(),
                ],
            }),
        })
    );
}
class y extends i.PureComponent {
    render() {
        let { color: e, onChange: t, value: n, disabled: i, allowBlackCustomColor: s } = this.props;
        return (0, r.jsx)(S, {
            isDefault: !0,
            color: e,
            isSelected: e === n || (0 === n && !s),
            onClick: t,
            disabled: i,
        });
    }
}
class v extends i.PureComponent {
    render() {
        let { customColor: e, value: t, disabled: n, "aria-label": i, presets: s } = this.props;
        return (0, r.jsx)(S, {
            isCustom: !0,
            color: e,
            isSelected: t === e && !s.includes(e),
            disabled: n,
            "aria-label": i,
        });
    }
}
function N(e) {
    let {
            value: t,
            eagerUpdate: n = !1,
            onChange: s,
            onClose: o,
            suggestedColors: l,
            middle: d,
            footer: h,
            showEyeDropper: I,
            wrapperComponentType: S,
            className: y,
        } = e,
        v = (0, p.A)(),
        N = T(t),
        C = N ?? 0,
        R = (0, u.Hl)(C),
        O = (0, u.tf)(C),
        [b, D] = i.useState({ current: C, pending: { hex: R, hsl: O }, input: R });
    i.useEffect(() => {
        if (null == N || N === b.current) return;
        let e = (0, u.Hl)(N),
            t = (0, u.tf)(N);
        D({ current: N, pending: { hex: e, hsl: t }, input: e });
    }, [N, b]),
        i.useEffect(() => o, [o]);
    let L = (e) => {
            let t = "#" === e[0] ? e : `#${e}`;
            if (!(0, u.qt)(t)) return void D((e) => ({ ...e, input: t }));
            let n = (0, u.LX)(t),
                r = (0, u.tf)(n);
            D({ current: n, pending: { hex: t, hsl: r }, input: t }), s(n);
        },
        w = async () => {
            if (null != v)
                try {
                    let { sRGBHex: e } = await v.open();
                    L(e);
                } catch {}
        },
        M = i.useCallback(
            (e) => {
                D((t) => ({ ...t, pending: e, input: e.hex })), n && s((0, u.LX)(e.hex));
            },
            [n, s],
        ),
        x = (e) => {
            s((0, u.LX)(e));
        },
        P = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(i.Suspense, {
                    fallback: null,
                    children: (0, r.jsx)(g, {
                        onChange: M,
                        onChangeComplete: (e) => {
                            let { hex: t } = e;
                            return x(t);
                        },
                        color: b.pending.hsl,
                    }),
                }),
                d,
                (0, r.jsx)(f.ksK, {
                    value: b.input.slice(1),
                    onChange: L,
                    maxLength: A - 1,
                    leading: "#",
                    trailing:
                        I && null != v
                            ? { icon: f.dDg, onClick: w, "aria-label": m.intl.string(m.t["0dU9Ny"]) }
                            : void 0,
                }),
                null != l &&
                    l.length > 0 &&
                    (0, r.jsx)("div", {
                        className: E.I1,
                        children: l.map((e, t) =>
                            (0, r.jsx)(
                                c.DUT,
                                {
                                    "aria-label": "",
                                    style: { backgroundColor: e },
                                    className: E.db,
                                    onClick: () => L(e),
                                },
                                `${e}-${t}`,
                            ),
                        ),
                    }),
                h,
            ],
        }),
        k = S ?? _.l;
    return (0, r.jsx)(k, { "aria-label": m.intl.string(m.t.WTqQ5e), className: a()(E.zi, y), children: P });
}
let C = i.memo(N);
function R(e) {
    let {
            className: t,
            defaultColor: n,
            customColor: i,
            colors: s,
            value: u,
            secondaryValue: c,
            disabled: d,
            onChange: _,
            renderDefaultButton: f,
            renderCustomButton: p,
            colorContainerClassName: h,
            isGradient: m,
            renderGradientCustomButton: g,
            gradientDegrees: A,
            allowBlackCustomColor: T,
        } = e,
        y = (e) =>
            (0, r.jsx)("div", {
                className: E._D,
                children: m
                    ? e.map((e) =>
                          (0, r.jsx)(
                              S,
                              {
                                  gradientStart: e.start,
                                  gradientEnd: e.end,
                                  color: 0,
                                  isSelected: u === e.start && c === e.end,
                                  onClick: () => _(e.start, e.end),
                                  disabled: d,
                                  isGradient: !0,
                                  "aria-label": e.name,
                                  gradientDegrees: A,
                              },
                              `${e.start}-${e.end}`,
                          ),
                      )
                    : e.map((e) =>
                          (0, r.jsx)(S, { color: e, isSelected: e === u, onClick: _, disabled: d, isGradient: !1 }, e),
                      ),
            }),
        v = s.slice(0, s.length / 2),
        N = s.slice(s.length / 2, s.length),
        C = (0, l.Ay)({ id: "color-picker", isEnabled: !0, scrollToStart: I, scrollToEnd: I });
    return (0, r.jsx)(o.hD, {
        navigator: C,
        children: (0, r.jsx)(o.PR, {
            children: (e) => {
                let { ref: o, ...l } = e;
                return (0, r.jsxs)("div", {
                    className: a()(E.kL, t, { [E.D7]: m }),
                    ref: o,
                    ...l,
                    children: [
                        !m &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)("div", {
                                        className: a()(E.$R, h),
                                        children: f({
                                            value: u,
                                            color: n,
                                            onChange: _,
                                            disabled: d,
                                            allowBlackCustomColor: T,
                                        }),
                                    }),
                                    (0, r.jsx)("div", {
                                        className: a()(E.BQ, h),
                                        children: p({ value: u, customColor: i, disabled: d, presets: s }),
                                    }),
                                ],
                            }),
                        m &&
                            null != g &&
                            (0, r.jsx)("div", { children: g({ value: u, startColor: n, endColor: n, disabled: d }) }),
                        (0, r.jsxs)("div", { children: [y(v), y(N)] }),
                    ],
                });
            },
        }),
    });
}
