n.d(l, { VN: () => T, fy: () => A, nJ: () => L, sk: () => S });
var t = n(477900),
    i = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(837381),
    o = n(887129),
    c = n(741918),
    d = n(317097),
    u = n(933832),
    h = n(559106),
    g = n(22231),
    m = n(95477),
    p = n(714385),
    x = n(939249),
    b = n(661531),
    f = n(305866),
    j = n(971745),
    k = n(284059),
    C = n(652215),
    v = n(105292),
    I = n(374190);
let N = i.lazy(() =>
        Promise.all([n.e("577162"), n.e("869047"), n.e("593279"), n.e("936920"), n.e("787680")]).then(
            n.bind(n, 148259),
        ),
    ),
    y = () => Promise.resolve();
function $(e) {
    let {
            color: l,
            listItemId: n,
            isDefault: i = !1,
            isCustom: r = !1,
            isSelected: o = !1,
            disabled: c = !1,
            style: m = {},
            onClick: p,
            isGradient: x = !1,
            "aria-label": f,
            gradientColors: j,
            gradientDegrees: N = 180,
        } = e,
        y = (0, a.rm)(n ?? `color-${l}`),
        $ = {};
    $ =
        x && null != j && j.length > 0
            ? { background: (0, k.r)(j, N) }
            : { backgroundColor: null != l ? (0, d.Hl)(l) : m.backgroundColor };
    let A = x ? j?.[0] : l,
        L = !1;
    return (
        r && !o ? (L = !0) : (r || o) && (L = (0, d.OK)(A ?? C.TGz) > 0.2),
        (0, t.jsx)(h.vN, {
            offset: -2,
            children: (0, t.jsxs)("button", {
                type: "button",
                className: s()(I.iH, e.className, {
                    [I.r9]: c,
                    [I.Ay]: i,
                    [I.Ie]: r,
                    [I.dw]: null == l && !x,
                    [I.hb]: x,
                }),
                disabled: c,
                onClick: () => p?.(x ? j : l),
                style: { ...m, ...$ },
                "aria-label": f ?? (x ? v.intl.string(v.t.XpWmJz) : $.backgroundColor),
                ...y,
                role: null != e["aria-selected"] ? "option" : y.role,
                "aria-selected": e["aria-selected"],
                children: [
                    r
                        ? (0, t.jsx)(g.PencilIcon, {
                              size: "custom",
                              className: I.M2,
                              width: 14,
                              height: 14,
                              color: L ? b.A.colors.WHITE.css : b.A.colors.BLACK.css,
                          })
                        : null,
                    (function () {
                        let e = 16,
                            l = 16;
                        if (((r || i) && ((e = "38%"), (l = "auto")), o))
                            return (0, t.jsx)(u.CheckmarkLargeIcon, {
                                size: "custom",
                                width: e,
                                height: l,
                                color: L ? b.A.colors.WHITE.css : b.A.colors.BLACK.css,
                            });
                    })(),
                ],
            }),
        })
    );
}
class A extends i.PureComponent {
    render() {
        let { color: e, onChange: l, value: n, disabled: i, allowBlackCustomColor: r } = this.props;
        return (0, t.jsx)($, {
            isDefault: !0,
            listItemId: "default",
            color: e,
            isSelected: e === n || (0 === n && !r),
            onClick: l,
            disabled: i,
        });
    }
}
class L extends i.PureComponent {
    render() {
        let { customColor: e, value: l, disabled: n, "aria-label": i, presets: r } = this.props;
        return (0, t.jsx)($, {
            isCustom: !0,
            listItemId: "custom",
            color: e,
            isSelected: l === e && !r.includes(e),
            disabled: n,
            "aria-label": i,
        });
    }
}
let T = i.memo(function (e) {
    var l;
    let {
            value: n,
            eagerUpdate: r = !1,
            onChange: a,
            onClose: o,
            suggestedColors: c,
            middle: u,
            footer: h,
            showEyeDropper: g,
            wrapperComponentType: b,
            className: k,
        } = e,
        C = (0, j.A)(),
        y = null == (l = n) ? null : "string" == typeof l ? ((0, d.qt)(l) ? (0, d.LX)(l) : null) : l,
        $ = y ?? 0,
        A = (0, d.Hl)($),
        L = (0, d.tf)($),
        [T, S] = i.useState({ current: $, pending: { hex: A, hsl: L }, input: A });
    function z(e) {
        let l = "#" === e[0] ? e : `#${e}`;
        if (!(0, d.qt)(l)) return void S((e) => ({ ...e, input: l }));
        let n = (0, d.LX)(l),
            t = (0, d.tf)(n);
        (S({ current: n, pending: { hex: l, hsl: t }, input: l }), a(n));
    }
    async function H() {
        if (null != C)
            try {
                let { sRGBHex: e } = await C.open();
                z(e);
            } catch {}
    }
    (i.useEffect(() => {
        if (null == y || y === T.current) return;
        let e = (0, d.Hl)(y),
            l = (0, d.tf)(y);
        S({ current: y, pending: { hex: e, hsl: l }, input: e });
    }, [y, T]),
        i.useEffect(() => o, [o]));
    let P = i.useCallback(
            (e) => {
                (S((l) => ({ ...l, pending: e, input: e.hex })), r && a((0, d.LX)(e.hex)));
            },
            [r, a],
        ),
        w = (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsx)(i.Suspense, {
                    fallback: null,
                    children: (0, t.jsx)(N, {
                        onChange: P,
                        onChangeComplete: (e) => {
                            let { hex: l } = e;
                            a((0, d.LX)(l));
                        },
                        color: T.pending.hsl,
                    }),
                }),
                u,
                (0, t.jsx)(m.k, {
                    value: T.input.slice(1),
                    onChange: z,
                    maxLength: 6,
                    leading: "#",
                    trailing:
                        g && null != C ? { icon: p.d, onClick: H, "aria-label": v.intl.string(v.t["0dU9Ny"]) } : void 0,
                }),
                null != c &&
                    c.length > 0 &&
                    (0, t.jsx)("div", {
                        className: I.I1,
                        children: c.map((e, l) =>
                            (0, t.jsx)(
                                x.D,
                                {
                                    "aria-label": v.intl.formatToPlainString(v.t.XFIqyk, { hex: e }),
                                    style: { backgroundColor: e },
                                    className: I.db,
                                    onClick: () => z(e),
                                },
                                `${e}-${l}`,
                            ),
                        ),
                    }),
                h,
            ],
        }),
        D = b ?? f.l;
    return (0, t.jsx)(D, { "aria-label": v.intl.string(v.t.WTqQ5e), className: s()(I.zi, k), children: w });
});
function S(e) {
    let {
            className: l,
            defaultColor: n,
            customColor: i,
            colors: r,
            value: d,
            gradientColors: u,
            disabled: h,
            onChange: g,
            renderDefaultButton: m,
            renderCustomButton: p,
            colorContainerClassName: x,
            isGradient: b,
            renderGradientCustomButton: f,
            gradientDegrees: j,
            gradientWidth: k,
            allowBlackCustomColor: C,
            shouldRenderSingleRow: N = !1,
            swatchClassName: A,
        } = e,
        L = "100%" === k;
    function T(e) {
        return (0, t.jsx)("div", {
            className: s()(I._D, { [I.l$]: N }),
            role: N ? "listbox" : void 0,
            "aria-label": N ? v.intl.string(v.t.WTqQ5e) : void 0,
            "aria-orientation": N ? "horizontal" : void 0,
            children: b
                ? e.map((e) => {
                      let l = e.colors.join("-"),
                          n = u?.join("-") === l;
                      return (0, t.jsx)(
                          $,
                          {
                              listItemId: `gradient-${l}`,
                              gradientColors: e.colors,
                              color: 0,
                              isSelected: n,
                              className: A,
                              "aria-selected": N ? n : void 0,
                              onClick: () => g(e.colors),
                              disabled: h,
                              isGradient: !0,
                              "aria-label": e.name,
                              gradientDegrees: j,
                          },
                          l,
                      );
                  })
                : e.map((e) =>
                      (0, t.jsx)(
                          $,
                          {
                              listItemId: `preset-${e}`,
                              color: e,
                              isSelected: e === d,
                              className: A,
                              "aria-selected": N ? e === d : void 0,
                              onClick: g,
                              disabled: h,
                              isGradient: !1,
                          },
                          e,
                      ),
                  ),
        });
    }
    let S = r.slice(0, r.length / 2),
        z = r.slice(r.length / 2, r.length),
        H = (0, o.Ay)({
            id: "color-picker",
            isEnabled: !0,
            orientation: c.Gl.HORIZONTAL,
            scrollToStart: y,
            scrollToEnd: y,
        });
    return (0, t.jsx)(a.hD, {
        navigator: H,
        children: (0, t.jsx)(a.PR, {
            children: (e) => {
                let { ref: a, ...o } = e;
                return (0, t.jsxs)("div", {
                    className: s()(I.kL, l, { [I.D7]: b, [I.Sk]: b && L }),
                    ref: a,
                    ...o,
                    role: N ? "group" : o.role,
                    "aria-orientation": N ? void 0 : o["aria-orientation"],
                    children: [
                        !b &&
                            (0, t.jsxs)(t.Fragment, {
                                children: [
                                    (0, t.jsx)("div", {
                                        className: s()(I.$R, x),
                                        children: m({
                                            value: d,
                                            color: n,
                                            onChange: g,
                                            disabled: h,
                                            allowBlackCustomColor: C,
                                        }),
                                    }),
                                    (0, t.jsx)("div", {
                                        className: s()(I.BQ, x),
                                        children: p({ value: d, customColor: i, disabled: h, presets: r }),
                                    }),
                                ],
                            }),
                        b && null != f && (0, t.jsx)("div", { children: f() }),
                        (0, t.jsxs)("div", { children: [T(N ? r : S), !N && T(z)] }),
                    ],
                });
            },
        }),
    });
}
