t.d(l, { VN: () => H, fy: () => y, nJ: () => A, sk: () => L });
var n = t(627968),
    s = t(64700),
    r = t(503698),
    i = t.n(r),
    a = t(837381),
    o = t(887129),
    d = t(741918),
    c = t(317097),
    u = t(187322),
    h = t(939249),
    g = t(661531),
    p = t(305866),
    m = t(933832),
    x = t(22231),
    b = t(292666),
    f = t(714385),
    j = t(971745),
    C = t(652215),
    k = t(375708),
    v = t(670989);
let $ = s.lazy(() => Promise.all([t.e("63241"), t.e("22687"), t.e("20038"), t.e("87680")]).then(t.bind(t, 148259))),
    I = () => Promise.resolve();
function N(e) {
    let {
            color: l,
            listItemId: t,
            isDefault: s = !1,
            isCustom: r = !1,
            isSelected: o = !1,
            disabled: d = !1,
            style: h = {},
            onClick: p,
            isGradient: b = !1,
            "aria-label": f,
            gradientStart: j,
            gradientEnd: k,
            gradientDegrees: $ = 180,
        } = e,
        I = (0, a.rm)(t ?? `color-${l}`),
        N = {};
    if (b && null != j && null != k) {
        let e = (0, c.Hl)(j),
            l = (0, c.Hl)(k);
        N = { background: `linear-gradient(${$}deg, ${e}, ${l})` };
    } else N = { backgroundColor: null != l ? (0, c.Hl)(l) : h.backgroundColor };
    let y = b ? j : l,
        A = !1;
    return (
        r && !o ? (A = !0) : (r || o) && (A = (0, c.OK)(y ?? C.TGz) > 0.2),
        (0, n.jsx)(u.vN, {
            offset: -2,
            children: (0, n.jsxs)("button", {
                type: "button",
                className: i()(v.iH, { [v.r9]: d, [v.Ay]: s, [v.Ie]: r, [v.dw]: null == l && !b, [v.hb]: b }),
                disabled: d,
                onClick: () => p?.(b ? { start: j, end: k } : l),
                style: { ...h, ...N },
                "aria-label": f ?? (b ? `Gradient ${j}-${k}` : N.backgroundColor),
                ...I,
                children: [
                    r
                        ? (0, n.jsx)(x.R, {
                              size: "custom",
                              className: v.M2,
                              width: 14,
                              height: 14,
                              color: A ? g.A.colors.WHITE.css : g.A.colors.BLACK.css,
                          })
                        : null,
                    (function () {
                        let e = 16,
                            l = 16;
                        if (((r || s) && ((e = "38%"), (l = "auto")), o))
                            return (0, n.jsx)(m.A, {
                                size: "custom",
                                width: e,
                                height: l,
                                color: A ? g.A.colors.WHITE.css : g.A.colors.BLACK.css,
                            });
                    })(),
                ],
            }),
        })
    );
}
class y extends s.PureComponent {
    render() {
        let { color: e, onChange: l, value: t, disabled: s, allowBlackCustomColor: r } = this.props;
        return (0, n.jsx)(N, {
            isDefault: !0,
            listItemId: "default",
            color: e,
            isSelected: e === t || (0 === t && !r),
            onClick: l,
            disabled: s,
        });
    }
}
class A extends s.PureComponent {
    render() {
        let { customColor: e, value: l, disabled: t, "aria-label": s, presets: r } = this.props;
        return (0, n.jsx)(N, {
            isCustom: !0,
            listItemId: "custom",
            color: e,
            isSelected: l === e && !r.includes(e),
            disabled: t,
            "aria-label": s,
        });
    }
}
let H = s.memo(function (e) {
    var l;
    let {
            value: t,
            eagerUpdate: r = !1,
            onChange: a,
            onClose: o,
            suggestedColors: d,
            middle: u,
            footer: g,
            showEyeDropper: m,
            wrapperComponentType: x,
            className: C,
        } = e,
        I = (0, j.A)(),
        N = null == (l = t) ? null : "string" == typeof l ? ((0, c.qt)(l) ? (0, c.LX)(l) : null) : l,
        y = N ?? 0,
        A = (0, c.Hl)(y),
        H = (0, c.tf)(y),
        [L, S] = s.useState({ current: y, pending: { hex: A, hsl: H }, input: A });
    s.useEffect(() => {
        if (null == N || N === L.current) return;
        let e = (0, c.Hl)(N),
            l = (0, c.tf)(N);
        S({ current: N, pending: { hex: e, hsl: l }, input: e });
    }, [N, L]),
        s.useEffect(() => o, [o]);
    let T = (e) => {
            let l = "#" === e[0] ? e : `#${e}`;
            if (!(0, c.qt)(l)) return void S((e) => ({ ...e, input: l }));
            let t = (0, c.LX)(l),
                n = (0, c.tf)(t);
            S({ current: t, pending: { hex: l, hsl: n }, input: l }), a(t);
        },
        E = async () => {
            if (null != I)
                try {
                    let { sRGBHex: e } = await I.open();
                    T(e);
                } catch {}
        },
        w = s.useCallback(
            (e) => {
                S((l) => ({ ...l, pending: e, input: e.hex })), r && a((0, c.LX)(e.hex));
            },
            [r, a],
        ),
        D = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(s.Suspense, {
                    fallback: null,
                    children: (0, n.jsx)($, {
                        onChange: w,
                        onChangeComplete: (e) => {
                            let { hex: l } = e;
                            a((0, c.LX)(l));
                        },
                        color: L.pending.hsl,
                    }),
                }),
                u,
                (0, n.jsx)(b.k, {
                    value: L.input.slice(1),
                    onChange: T,
                    maxLength: 6,
                    leading: "#",
                    trailing:
                        m && null != I ? { icon: f.d, onClick: E, "aria-label": k.intl.string(k.t["0dU9Ny"]) } : void 0,
                }),
                null != d &&
                    d.length > 0 &&
                    (0, n.jsx)("div", {
                        className: v.I1,
                        children: d.map((e, l) =>
                            (0, n.jsx)(
                                h.D,
                                {
                                    "aria-label": k.intl.formatToPlainString(k.t.XFIqyk, { hex: e }),
                                    style: { backgroundColor: e },
                                    className: v.db,
                                    onClick: () => T(e),
                                },
                                `${e}-${l}`,
                            ),
                        ),
                    }),
                g,
            ],
        }),
        P = x ?? p.l;
    return (0, n.jsx)(P, { "aria-label": k.intl.string(k.t.WTqQ5e), className: i()(v.zi, C), children: D });
});
function L(e) {
    let {
            className: l,
            defaultColor: t,
            customColor: s,
            colors: r,
            value: c,
            secondaryValue: u,
            disabled: h,
            onChange: g,
            renderDefaultButton: p,
            renderCustomButton: m,
            colorContainerClassName: x,
            isGradient: b,
            renderGradientCustomButton: f,
            gradientDegrees: j,
            allowBlackCustomColor: C,
        } = e,
        k = (e) =>
            (0, n.jsx)("div", {
                className: v._D,
                children: b
                    ? e.map((e) =>
                          (0, n.jsx)(
                              N,
                              {
                                  listItemId: `gradient-${e.start}-${e.end}`,
                                  gradientStart: e.start,
                                  gradientEnd: e.end,
                                  color: 0,
                                  isSelected: c === e.start && u === e.end,
                                  onClick: () => g(e.start, e.end),
                                  disabled: h,
                                  isGradient: !0,
                                  "aria-label": e.name,
                                  gradientDegrees: j,
                              },
                              `${e.start}-${e.end}`,
                          ),
                      )
                    : e.map((e) =>
                          (0, n.jsx)(
                              N,
                              {
                                  listItemId: `preset-${e}`,
                                  color: e,
                                  isSelected: e === c,
                                  onClick: g,
                                  disabled: h,
                                  isGradient: !1,
                              },
                              e,
                          ),
                      ),
            }),
        $ = r.slice(0, r.length / 2),
        y = r.slice(r.length / 2, r.length),
        A = (0, o.Ay)({
            id: "color-picker",
            isEnabled: !0,
            orientation: d.Gl.HORIZONTAL,
            scrollToStart: I,
            scrollToEnd: I,
        });
    return (0, n.jsx)(a.hD, {
        navigator: A,
        children: (0, n.jsx)(a.PR, {
            children: (e) => {
                let { ref: a, ...o } = e;
                return (0, n.jsxs)("div", {
                    className: i()(v.kL, l, { [v.D7]: b }),
                    ref: a,
                    ...o,
                    children: [
                        !b &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)("div", {
                                        className: i()(v.$R, x),
                                        children: p({
                                            value: c,
                                            color: t,
                                            onChange: g,
                                            disabled: h,
                                            allowBlackCustomColor: C,
                                        }),
                                    }),
                                    (0, n.jsx)("div", {
                                        className: i()(v.BQ, x),
                                        children: m({ value: c, customColor: s, disabled: h, presets: r }),
                                    }),
                                ],
                            }),
                        b &&
                            null != f &&
                            (0, n.jsx)("div", { children: f({ value: c, startColor: t, endColor: t, disabled: h }) }),
                        (0, n.jsxs)("div", { children: [k($), k(y)] }),
                    ],
                });
            },
        }),
    });
}
