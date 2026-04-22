t.d(e, { VN: () => I, fy: () => j, nJ: () => N, sk: () => T });
var a = t(627968),
    n = t(64700),
    r = t(503698),
    l = t.n(r),
    i = t(837381),
    s = t(884362),
    o = t(317097),
    d = t(187322),
    c = t(939249),
    u = t(827734),
    g = t(305866),
    h = t(933832),
    p = t(22231),
    f = t(292666),
    m = t(714385),
    q = t(971745),
    v = t(652215),
    C = t(985018),
    x = t(670989);
let U = n.lazy(() => Promise.all([t.e("47950"), t.e("87680")]).then(t.bind(t, 148259))),
    V = () => Promise.resolve();
function b(A) {
    let {
            color: e,
            isDefault: t = !1,
            isCustom: n = !1,
            isSelected: r = !1,
            disabled: s = !1,
            style: c = {},
            onClick: g,
            isGradient: f = !1,
            "aria-label": m,
            gradientStart: q,
            gradientEnd: C,
            gradientDegrees: U = 180,
        } = A,
        V = (0, i.rm)(`color-${e}`),
        b = {};
    if (f && null != q && null != C) {
        let A = (0, o.Hl)(q),
            e = (0, o.Hl)(C);
        b = { background: `linear-gradient(${U}deg, ${A}, ${e})` };
    } else b = { backgroundColor: null != e ? (0, o.Hl)(e) : c.backgroundColor };
    let j = f ? q : e,
        N = !1;
    return (
        n && !r ? (N = !0) : (n || r) && (N = (0, o.OK)(j ?? v.TGz) > 0.2),
        (0, a.jsx)(d.vN, {
            offset: -2,
            children: (0, a.jsxs)("button", {
                type: "button",
                className: l()(x.iH, { [x.r9]: s, [x.Ay]: t, [x.Ie]: n, [x.dw]: null == e && !f, [x.hb]: f }),
                disabled: s,
                onClick: () => g?.(f ? { start: q, end: C } : e),
                style: { ...c, ...b },
                "aria-label": m ?? (f ? `Gradient ${q}-${C}` : b.backgroundColor),
                ...V,
                children: [
                    n
                        ? (0, a.jsx)(p.R, {
                              size: "custom",
                              className: x.M2,
                              width: 14,
                              height: 14,
                              color: N ? u.A.colors.WHITE.css : u.A.colors.BLACK.css,
                          })
                        : null,
                    (function () {
                        let A = 16,
                            e = 16;
                        if (((n || t) && ((A = "38%"), (e = "auto")), r))
                            return (0, a.jsx)(h.A, {
                                size: "custom",
                                width: A,
                                height: e,
                                color: N ? u.A.colors.WHITE.css : u.A.colors.BLACK.css,
                            });
                    })(),
                ],
            }),
        })
    );
}
class j extends n.PureComponent {
    render() {
        let { color: A, onChange: e, value: t, disabled: n, allowBlackCustomColor: r } = this.props;
        return (0, a.jsx)(b, {
            isDefault: !0,
            color: A,
            isSelected: A === t || (0 === t && !r),
            onClick: e,
            disabled: n,
        });
    }
}
class N extends n.PureComponent {
    render() {
        let { customColor: A, value: e, disabled: t, "aria-label": n, presets: r } = this.props;
        return (0, a.jsx)(b, {
            isCustom: !0,
            color: A,
            isSelected: e === A && !r.includes(A),
            disabled: t,
            "aria-label": n,
        });
    }
}
let I = n.memo(function (A) {
    var e;
    let {
            value: t,
            eagerUpdate: r = !1,
            onChange: i,
            onClose: s,
            suggestedColors: d,
            middle: u,
            footer: h,
            showEyeDropper: p,
            wrapperComponentType: v,
            className: V,
        } = A,
        b = (0, q.A)(),
        j = null == (e = t) ? null : "string" == typeof e ? ((0, o.qt)(e) ? (0, o.LX)(e) : null) : e,
        N = j ?? 0,
        I = (0, o.Hl)(N),
        T = (0, o.tf)(N),
        [F, K] = n.useState({ current: N, pending: { hex: I, hsl: T }, input: I });
    n.useEffect(() => {
        if (null == j || j === F.current) return;
        let A = (0, o.Hl)(j),
            e = (0, o.tf)(j);
        K({ current: j, pending: { hex: A, hsl: e }, input: A });
    }, [j, F]),
        n.useEffect(() => s, [s]);
    let X = (A) => {
            let e = "#" === A[0] ? A : `#${A}`;
            if (!(0, o.qt)(e)) return void K((A) => ({ ...A, input: e }));
            let t = (0, o.LX)(e),
                a = (0, o.tf)(t);
            K({ current: t, pending: { hex: e, hsl: a }, input: e }), i(t);
        },
        P = async () => {
            if (null != b)
                try {
                    let { sRGBHex: A } = await b.open();
                    X(A);
                } catch {}
        },
        W = n.useCallback(
            (A) => {
                K((e) => ({ ...e, pending: A, input: A.hex })), r && i((0, o.LX)(A.hex));
            },
            [r, i],
        ),
        Q = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(n.Suspense, {
                    fallback: null,
                    children: (0, a.jsx)(U, {
                        onChange: W,
                        onChangeComplete: (A) => {
                            let { hex: e } = A;
                            i((0, o.LX)(e));
                        },
                        color: F.pending.hsl,
                    }),
                }),
                u,
                (0, a.jsx)(f.k, {
                    value: F.input.slice(1),
                    onChange: X,
                    maxLength: 6,
                    leading: "#",
                    trailing:
                        p && null != b ? { icon: m.d, onClick: P, "aria-label": C.intl.string(C.t["0dU9Ny"]) } : void 0,
                }),
                null != d &&
                    d.length > 0 &&
                    (0, a.jsx)("div", {
                        className: x.I1,
                        children: d.map((A, e) =>
                            (0, a.jsx)(
                                c.D,
                                {
                                    "aria-label": "",
                                    style: { backgroundColor: A },
                                    className: x.db,
                                    onClick: () => X(A),
                                },
                                `${A}-${e}`,
                            ),
                        ),
                    }),
                h,
            ],
        }),
        Z = v ?? g.l;
    return (0, a.jsx)(Z, { "aria-label": C.intl.string(C.t.WTqQ5e), className: l()(x.zi, V), children: Q });
});
function T(A) {
    let {
            className: e,
            defaultColor: t,
            customColor: n,
            colors: r,
            value: o,
            secondaryValue: d,
            disabled: c,
            onChange: u,
            renderDefaultButton: g,
            renderCustomButton: h,
            colorContainerClassName: p,
            isGradient: f,
            renderGradientCustomButton: m,
            gradientDegrees: q,
            allowBlackCustomColor: v,
        } = A,
        C = (A) =>
            (0, a.jsx)("div", {
                className: x._D,
                children: f
                    ? A.map((A) =>
                          (0, a.jsx)(
                              b,
                              {
                                  gradientStart: A.start,
                                  gradientEnd: A.end,
                                  color: 0,
                                  isSelected: o === A.start && d === A.end,
                                  onClick: () => u(A.start, A.end),
                                  disabled: c,
                                  isGradient: !0,
                                  "aria-label": A.name,
                                  gradientDegrees: q,
                              },
                              `${A.start}-${A.end}`,
                          ),
                      )
                    : A.map((A) =>
                          (0, a.jsx)(b, { color: A, isSelected: A === o, onClick: u, disabled: c, isGradient: !1 }, A),
                      ),
            }),
        U = r.slice(0, r.length / 2),
        j = r.slice(r.length / 2, r.length),
        N = (0, s.Ay)({ id: "color-picker", isEnabled: !0, scrollToStart: V, scrollToEnd: V });
    return (0, a.jsx)(i.hD, {
        navigator: N,
        children: (0, a.jsx)(i.PR, {
            children: (A) => {
                let { ref: i, ...s } = A;
                return (0, a.jsxs)("div", {
                    className: l()(x.kL, e, { [x.D7]: f }),
                    ref: i,
                    ...s,
                    children: [
                        !f &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)("div", {
                                        className: l()(x.$R, p),
                                        children: g({
                                            value: o,
                                            color: t,
                                            onChange: u,
                                            disabled: c,
                                            allowBlackCustomColor: v,
                                        }),
                                    }),
                                    (0, a.jsx)("div", {
                                        className: l()(x.BQ, p),
                                        children: h({ value: o, customColor: n, disabled: c, presets: r }),
                                    }),
                                ],
                            }),
                        f &&
                            null != m &&
                            (0, a.jsx)("div", { children: m({ value: o, startColor: t, endColor: t, disabled: c }) }),
                        (0, a.jsxs)("div", { children: [C(U), C(j)] }),
                    ],
                });
            },
        }),
    });
}
