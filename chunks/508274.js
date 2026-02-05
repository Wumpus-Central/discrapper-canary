"use strict";
n.d(t, { VN: () => b, fy: () => S, nJ: () => v, sk: () => N });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
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
    g = n(710032);
let E = i.lazy(() => Promise.all([n.e("47950"), n.e("87680")]).then(n.bind(n, 370640))),
    A = 7,
    I = () => Promise.resolve();
function T(e) {
    return null == e ? null : "string" == typeof e ? ((0, u.qt)(e) ? (0, u.LX)(e) : null) : e;
}
function y(e) {
    let {
            color: t,
            isDefault: n = !1,
            isCustom: i = !1,
            isSelected: a = !1,
            disabled: l = !1,
            style: _ = {},
            onClick: p,
            isGradient: m = !1,
            "aria-label": E,
            gradientStart: A,
            gradientEnd: I,
            gradientDegrees: T = 180,
        } = e,
        y = (0, o.rm)(`color-${t}`),
        S = {};
    if (m && null != A && null != I) {
        let e = (0, u.Hl)(A),
            t = (0, u.Hl)(I);
        S = { background: `linear-gradient(${T}deg, ${e}, ${t})` };
    } else S = { backgroundColor: null != t ? (0, u.Hl)(t) : _.backgroundColor };
    let v = m ? A : t,
        C = !1;
    function b() {
        let e = 16,
            t = 16;
        if (((i || n) && ((e = "38%"), (t = "auto")), a))
            return (0, r.jsx)(f.A9s, {
                size: "custom",
                width: e,
                height: t,
                color: C ? d.A.colors.WHITE.css : d.A.colors.BLACK.css,
            });
    }
    return (
        i && !a ? (C = !0) : (i || a) && (C = (0, u.OK)(v ?? h.TGz) > 0.2),
        (0, r.jsx)(c.vN3, {
            offset: -2,
            children: (0, r.jsxs)("button", {
                type: "button",
                className: s()(g.iH, { [g.r9]: l, [g.Ay]: n, [g.Ie]: i, [g.dw]: null == t && !m, [g.hb]: m }),
                disabled: l,
                onClick: () => p?.(m ? { start: A, end: I } : t),
                style: { ..._, ...S },
                "aria-label": E ?? (m ? `Gradient ${A}-${I}` : S.backgroundColor),
                ...y,
                children: [
                    i
                        ? (0, r.jsx)(f.R2l, {
                              size: "custom",
                              className: g.M2,
                              width: 14,
                              height: 14,
                              color: C ? d.A.colors.WHITE.css : d.A.colors.BLACK.css,
                          })
                        : null,
                    b(),
                ],
            }),
        })
    );
}
class S extends i.PureComponent {
    render() {
        let { color: e, onChange: t, value: n, disabled: i, allowBlackCustomColor: a } = this.props;
        return (0, r.jsx)(y, {
            isDefault: !0,
            color: e,
            isSelected: e === n || (0 === n && !a),
            onClick: t,
            disabled: i,
        });
    }
}
class v extends i.PureComponent {
    render() {
        let { customColor: e, value: t, disabled: n, "aria-label": i, presets: a } = this.props;
        return (0, r.jsx)(y, {
            isCustom: !0,
            color: e,
            isSelected: t === e && !a.includes(e),
            disabled: n,
            "aria-label": i,
        });
    }
}
function C(e) {
    let {
            value: t,
            eagerUpdate: n = !1,
            onChange: a,
            onClose: o,
            suggestedColors: l,
            middle: d,
            footer: h,
            showEyeDropper: I,
            wrapperComponentType: y,
            className: S,
        } = e,
        v = (0, p.A)(),
        C = T(t),
        b = C ?? 0,
        N = (0, u.Hl)(b),
        R = (0, u.tf)(b),
        [O, D] = i.useState({ current: b, pending: { hex: N, hsl: R }, input: N });
    i.useEffect(() => {
        if (null == C || C === O.current) return;
        let e = (0, u.Hl)(C),
            t = (0, u.tf)(C);
        D({ current: C, pending: { hex: e, hsl: t }, input: e });
    }, [C, O]),
        i.useEffect(() => o, [o]);
    let L = (e) => {
            let t = "#" === e[0] ? e : `#${e}`;
            if (!(0, u.qt)(t)) return void D((e) => ({ ...e, input: t }));
            let n = (0, u.LX)(t),
                r = (0, u.tf)(n);
            D({ current: n, pending: { hex: t, hsl: r }, input: t }), a(n);
        },
        w = async () => {
            if (null != v)
                try {
                    let { sRGBHex: e } = await v.open();
                    L(e);
                } catch {}
        },
        x = i.useCallback(
            (e) => {
                D((t) => ({ ...t, pending: e, input: e.hex })), n && a((0, u.LX)(e.hex));
            },
            [n, a],
        ),
        P = (e) => {
            a((0, u.LX)(e));
        },
        M = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(i.Suspense, {
                    fallback: null,
                    children: (0, r.jsx)(E, {
                        onChange: x,
                        onChangeComplete: (e) => {
                            let { hex: t } = e;
                            return P(t);
                        },
                        color: O.pending.hsl,
                    }),
                }),
                d,
                (0, r.jsx)(f.ksK, {
                    value: O.input.slice(1),
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
                        className: g.I1,
                        children: l.map((e, t) =>
                            (0, r.jsx)(
                                c.DUT,
                                {
                                    "aria-label": "",
                                    style: { backgroundColor: e },
                                    className: g.db,
                                    onClick: () => L(e),
                                },
                                `${e}-${t}`,
                            ),
                        ),
                    }),
                h,
            ],
        }),
        k = y ?? _.l;
    return (0, r.jsx)(k, { "aria-label": m.intl.string(m.t.WTqQ5e), className: s()(g.zi, S), children: M });
}
let b = i.memo(C);
function N(e) {
    let {
            className: t,
            defaultColor: n,
            customColor: i,
            colors: a,
            value: u,
            secondaryValue: c,
            disabled: d,
            onChange: _,
            renderDefaultButton: f,
            renderCustomButton: p,
            colorContainerClassName: h,
            isGradient: m,
            renderGradientCustomButton: E,
            gradientDegrees: A,
            allowBlackCustomColor: T,
        } = e,
        S = (e) =>
            (0, r.jsx)("div", {
                className: g._D,
                children: m
                    ? e.map((e) =>
                          (0, r.jsx)(
                              y,
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
                          (0, r.jsx)(y, { color: e, isSelected: e === u, onClick: _, disabled: d, isGradient: !1 }, e),
                      ),
            }),
        v = a.slice(0, a.length / 2),
        C = a.slice(a.length / 2, a.length),
        b = (0, l.Ay)({ id: "color-picker", isEnabled: !0, scrollToStart: I, scrollToEnd: I });
    return (0, r.jsx)(o.hD, {
        navigator: b,
        children: (0, r.jsx)(o.PR, {
            children: (e) => {
                let { ref: o, ...l } = e;
                return (0, r.jsxs)("div", {
                    className: s()(g.kL, t, { [g.D7]: m }),
                    ref: o,
                    ...l,
                    children: [
                        !m &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)("div", {
                                        className: s()(g.$R, h),
                                        children: f({
                                            value: u,
                                            color: n,
                                            onChange: _,
                                            disabled: d,
                                            allowBlackCustomColor: T,
                                        }),
                                    }),
                                    (0, r.jsx)("div", {
                                        className: s()(g.BQ, h),
                                        children: p({ value: u, customColor: i, disabled: d, presets: a }),
                                    }),
                                ],
                            }),
                        m &&
                            null != E &&
                            (0, r.jsx)("div", { children: E({ value: u, startColor: n, endColor: n, disabled: d }) }),
                        (0, r.jsxs)("div", { children: [S(v), S(C)] }),
                    ],
                });
            },
        }),
    });
}
