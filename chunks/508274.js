n.d(l, { VN: () => S, fy: () => $, nJ: () => L, sk: () => T });
var t = n(627968),
    s = n(64700),
    r = n(503698),
    i = n.n(r),
    a = n(837381),
    o = n(887129),
    c = n(741918),
    d = n(317097),
    u = n(187322),
    h = n(939249),
    g = n(661531),
    p = n(305866),
    m = n(933832),
    x = n(22231),
    b = n(292666),
    j = n(714385),
    f = n(971745),
    k = n(284059),
    C = n(652215),
    v = n(375708),
    I = n(670989);
let N = s.lazy(() =>
        Promise.all([n.e("63241"), n.e("22687"), n.e("46859"), n.e("85787"), n.e("87680")]).then(n.bind(n, 148259)),
    ),
    y = () => Promise.resolve();
function A(e) {
    let {
            color: l,
            listItemId: n,
            isDefault: s = !1,
            isCustom: r = !1,
            isSelected: o = !1,
            disabled: c = !1,
            style: h = {},
            onClick: p,
            isGradient: b = !1,
            "aria-label": j,
            gradientColors: f,
            gradientDegrees: N = 180,
        } = e,
        y = (0, a.rm)(n ?? `color-${l}`),
        A = {};
    A =
        b && null != f && f.length > 0
            ? { background: (0, k.r)(f, N) }
            : { backgroundColor: null != l ? (0, d.Hl)(l) : h.backgroundColor };
    let $ = b ? f?.[0] : l,
        L = !1;
    return (
        r && !o ? (L = !0) : (r || o) && (L = (0, d.OK)($ ?? C.TGz) > 0.2),
        (0, t.jsx)(u.vN, {
            offset: -2,
            children: (0, t.jsxs)("button", {
                type: "button",
                className: i()(I.iH, { [I.r9]: c, [I.Ay]: s, [I.Ie]: r, [I.dw]: null == l && !b, [I.hb]: b }),
                disabled: c,
                onClick: () => p?.(b ? f : l),
                style: { ...h, ...A },
                "aria-label": j ?? (b ? v.intl.string(v.t.XpWmJz) : A.backgroundColor),
                ...y,
                children: [
                    r
                        ? (0, t.jsx)(x.R, {
                              size: "custom",
                              className: I.M2,
                              width: 14,
                              height: 14,
                              color: L ? g.A.colors.WHITE.css : g.A.colors.BLACK.css,
                          })
                        : null,
                    (function () {
                        let e = 16,
                            l = 16;
                        if (((r || s) && ((e = "38%"), (l = "auto")), o))
                            return (0, t.jsx)(m.A, {
                                size: "custom",
                                width: e,
                                height: l,
                                color: L ? g.A.colors.WHITE.css : g.A.colors.BLACK.css,
                            });
                    })(),
                ],
            }),
        })
    );
}
class $ extends s.PureComponent {
    render() {
        let { color: e, onChange: l, value: n, disabled: s, allowBlackCustomColor: r } = this.props;
        return (0, t.jsx)(A, {
            isDefault: !0,
            listItemId: "default",
            color: e,
            isSelected: e === n || (0 === n && !r),
            onClick: l,
            disabled: s,
        });
    }
}
class L extends s.PureComponent {
    render() {
        let { customColor: e, value: l, disabled: n, "aria-label": s, presets: r } = this.props;
        return (0, t.jsx)(A, {
            isCustom: !0,
            listItemId: "custom",
            color: e,
            isSelected: l === e && !r.includes(e),
            disabled: n,
            "aria-label": s,
        });
    }
}
let S = s.memo(function (e) {
    var l;
    let {
            value: n,
            eagerUpdate: r = !1,
            onChange: a,
            onClose: o,
            suggestedColors: c,
            middle: u,
            footer: g,
            showEyeDropper: m,
            wrapperComponentType: x,
            className: k,
        } = e,
        C = (0, f.A)(),
        y = null == (l = n) ? null : "string" == typeof l ? ((0, d.qt)(l) ? (0, d.LX)(l) : null) : l,
        A = y ?? 0,
        $ = (0, d.Hl)(A),
        L = (0, d.tf)(A),
        [S, T] = s.useState({ current: A, pending: { hex: $, hsl: L }, input: $ });
    function H(e) {
        let l = "#" === e[0] ? e : `#${e}`;
        if (!(0, d.qt)(l)) return void T((e) => ({ ...e, input: l }));
        let n = (0, d.LX)(l),
            t = (0, d.tf)(n);
        T({ current: n, pending: { hex: l, hsl: t }, input: l }), a(n);
    }
    s.useEffect(() => {
        if (null == y || y === S.current) return;
        let e = (0, d.Hl)(y),
            l = (0, d.tf)(y);
        T({ current: y, pending: { hex: e, hsl: l }, input: e });
    }, [y, S]),
        s.useEffect(() => o, [o]);
    let z = async () => {
            if (null != C)
                try {
                    let { sRGBHex: e } = await C.open();
                    H(e);
                } catch {}
        },
        w = s.useCallback(
            (e) => {
                T((l) => ({ ...l, pending: e, input: e.hex })), r && a((0, d.LX)(e.hex));
            },
            [r, a],
        ),
        D = (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsx)(s.Suspense, {
                    fallback: null,
                    children: (0, t.jsx)(N, {
                        onChange: w,
                        onChangeComplete: (e) => {
                            let { hex: l } = e;
                            a((0, d.LX)(l));
                        },
                        color: S.pending.hsl,
                    }),
                }),
                u,
                (0, t.jsx)(b.k, {
                    value: S.input.slice(1),
                    onChange: H,
                    maxLength: 6,
                    leading: "#",
                    trailing:
                        m && null != C ? { icon: j.d, onClick: z, "aria-label": v.intl.string(v.t["0dU9Ny"]) } : void 0,
                }),
                null != c &&
                    c.length > 0 &&
                    (0, t.jsx)("div", {
                        className: I.I1,
                        children: c.map((e, l) =>
                            (0, t.jsx)(
                                h.D,
                                {
                                    "aria-label": v.intl.formatToPlainString(v.t.XFIqyk, { hex: e }),
                                    style: { backgroundColor: e },
                                    className: I.db,
                                    onClick: () => H(e),
                                },
                                `${e}-${l}`,
                            ),
                        ),
                    }),
                g,
            ],
        }),
        E = x ?? p.l;
    return (0, t.jsx)(E, { "aria-label": v.intl.string(v.t.WTqQ5e), className: i()(I.zi, k), children: D });
});
function T(e) {
    let {
            className: l,
            defaultColor: n,
            customColor: s,
            colors: r,
            value: d,
            gradientColors: u,
            disabled: h,
            onChange: g,
            renderDefaultButton: p,
            renderCustomButton: m,
            colorContainerClassName: x,
            isGradient: b,
            renderGradientCustomButton: j,
            gradientDegrees: f,
            gradientWidth: k,
            allowBlackCustomColor: C,
        } = e,
        v = "100%" === k,
        N = (e) =>
            (0, t.jsx)("div", {
                className: I._D,
                children: b
                    ? e.map((e) => {
                          let l = e.colors.join("-"),
                              n = u?.join("-") === l;
                          return (0, t.jsx)(
                              A,
                              {
                                  listItemId: `gradient-${l}`,
                                  gradientColors: e.colors,
                                  color: 0,
                                  isSelected: n,
                                  onClick: () => g(e.colors),
                                  disabled: h,
                                  isGradient: !0,
                                  "aria-label": e.name,
                                  gradientDegrees: f,
                              },
                              l,
                          );
                      })
                    : e.map((e) =>
                          (0, t.jsx)(
                              A,
                              {
                                  listItemId: `preset-${e}`,
                                  color: e,
                                  isSelected: e === d,
                                  onClick: g,
                                  disabled: h,
                                  isGradient: !1,
                              },
                              e,
                          ),
                      ),
            }),
        $ = r.slice(0, r.length / 2),
        L = r.slice(r.length / 2, r.length),
        S = (0, o.Ay)({
            id: "color-picker",
            isEnabled: !0,
            orientation: c.Gl.HORIZONTAL,
            scrollToStart: y,
            scrollToEnd: y,
        });
    return (0, t.jsx)(a.hD, {
        navigator: S,
        children: (0, t.jsx)(a.PR, {
            children: (e) => {
                let { ref: a, ...o } = e;
                return (0, t.jsxs)("div", {
                    className: i()(I.kL, l, { [I.D7]: b, [I.Sk]: b && v }),
                    ref: a,
                    ...o,
                    children: [
                        !b &&
                            (0, t.jsxs)(t.Fragment, {
                                children: [
                                    (0, t.jsx)("div", {
                                        className: i()(I.$R, x),
                                        children: p({
                                            value: d,
                                            color: n,
                                            onChange: g,
                                            disabled: h,
                                            allowBlackCustomColor: C,
                                        }),
                                    }),
                                    (0, t.jsx)("div", {
                                        className: i()(I.BQ, x),
                                        children: m({ value: d, customColor: s, disabled: h, presets: r }),
                                    }),
                                ],
                            }),
                        b && null != j && (0, t.jsx)("div", { children: j() }),
                        (0, t.jsxs)("div", { children: [N($), N(L)] }),
                    ],
                });
            },
        }),
    });
}
