n.d(t, {
    VN: () => D,
    fy: () => R,
    nJ: () => w,
    sk: () => x,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(837381),
    l = n(884362),
    c = n(317097),
    u = n(158954),
    d = n(827734),
    f = n(305866),
    p = n(397927),
    _ = n(971745),
    h = n(652215),
    m = n(985018),
    g = n(710032);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function A(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = v(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let S = i.lazy(() => Promise.all([n.e("47950"), n.e("87680")]).then(n.bind(n, 370640))),
    I = 7,
    T = () => Promise.resolve();
function C(e) {
    return null == e ? null : "string" == typeof e ? ((0, c.qt)(e) ? (0, c.LX)(e) : null) : e;
}
function N(e) {
    let {
            color: t,
            isDefault: n = !1,
            isCustom: i = !1,
            isSelected: a = !1,
            disabled: l = !1,
            style: f = {},
            onClick: _,
            isGradient: m = !1,
            "aria-label": E,
            gradientStart: y,
            gradientEnd: A,
            gradientDegrees: v = 180,
        } = e,
        S = (0, o.rm)("color-".concat(t)),
        I = {};
    if (m && null != y && null != A) {
        let e = (0, c.Hl)(y),
            t = (0, c.Hl)(A);
        I = { background: "linear-gradient(".concat(v, "deg, ").concat(e, ", ").concat(t, ")") };
    } else I = { backgroundColor: null != t ? (0, c.Hl)(t) : f.backgroundColor };
    let T = m ? y : t,
        C = !1;
    function N() {
        let e = 16,
            t = 16;
        if (((i || n) && ((e = "38%"), (t = "auto")), a))
            return (0, r.jsx)(p.A9s, {
                size: "custom",
                width: e,
                height: t,
                color: C ? d.A.colors.WHITE.css : d.A.colors.BLACK.css,
            });
    }
    return (
        i && !a ? (C = !0) : (i || a) && (C = (0, c.OK)(null != T ? T : h.TGz) > 0.2),
        (0, r.jsx)(u.vN3, {
            offset: -2,
            children: (0, r.jsxs)(
                "button",
                O(
                    b(
                        {
                            type: "button",
                            className: s()(g.iH, {
                                [g.r9]: l,
                                [g.Ay]: n,
                                [g.Ie]: i,
                                [g.dw]: null == t && !m,
                                [g.hb]: m,
                            }),
                            disabled: l,
                            onClick: () =>
                                null == _
                                    ? void 0
                                    : _(
                                          m
                                              ? {
                                                    start: y,
                                                    end: A,
                                                }
                                              : t,
                                      ),
                            style: b({}, f, I),
                            "aria-label": null != E ? E : m ? "Gradient ".concat(y, "-").concat(A) : I.backgroundColor,
                        },
                        S,
                    ),
                    {
                        children: [
                            i
                                ? (0, r.jsx)(p.R2l, {
                                      size: "custom",
                                      className: g.M2,
                                      width: 14,
                                      height: 14,
                                      color: C ? d.A.colors.WHITE.css : d.A.colors.BLACK.css,
                                  })
                                : null,
                            N(),
                        ],
                    },
                ),
            ),
        })
    );
}
class R extends i.PureComponent {
    render() {
        let { color: e, onChange: t, value: n, disabled: i, allowBlackCustomColor: a } = this.props;
        return (0, r.jsx)(N, {
            isDefault: !0,
            color: e,
            isSelected: e === n || (0 === n && !a),
            onClick: t,
            disabled: i,
        });
    }
}
class w extends i.PureComponent {
    render() {
        let { customColor: e, value: t, disabled: n, "aria-label": i, presets: a } = this.props;
        return (0, r.jsx)(N, {
            isCustom: !0,
            color: e,
            isSelected: t === e && !a.includes(e),
            disabled: n,
            "aria-label": i,
        });
    }
}
function P(e) {
    let {
            value: t,
            eagerUpdate: n = !1,
            onChange: a,
            onClose: o,
            suggestedColors: l,
            middle: d,
            footer: h,
            showEyeDropper: E,
            wrapperComponentType: y,
            className: A,
        } = e,
        v = (0, _.A)(),
        T = C(t),
        N = null != T ? T : 0,
        R = (0, c.Hl)(N),
        w = (0, c.tf)(N),
        [P, D] = i.useState({
            current: N,
            pending: {
                hex: R,
                hsl: w,
            },
            input: R,
        });
    i.useEffect(() => {
        if (null == T || T === P.current) return;
        let e = (0, c.Hl)(T),
            t = (0, c.tf)(T);
        D({
            current: T,
            pending: {
                hex: e,
                hsl: t,
            },
            input: e,
        });
    }, [T, P]),
        i.useEffect(() => o, [o]);
    let x = (e) => {
            let t = "#" === e[0] ? e : "#".concat(e);
            if (!(0, c.qt)(t)) return void D((e) => O(b({}, e), { input: t }));
            let n = (0, c.LX)(t),
                r = (0, c.tf)(n);
            D({
                current: n,
                pending: {
                    hex: t,
                    hsl: r,
                },
                input: t,
            }),
                a(n);
        },
        L = async () => {
            if (null != v)
                try {
                    let { sRGBHex: e } = await v.open();
                    x(e);
                } catch (e) {}
        },
        j = i.useCallback(
            (e) => {
                D((t) =>
                    O(b({}, t), {
                        pending: e,
                        input: e.hex,
                    }),
                ),
                    n && a((0, c.LX)(e.hex));
            },
            [n, a],
        ),
        M = (e) => {
            a((0, c.LX)(e));
        },
        k = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(i.Suspense, {
                    fallback: null,
                    children: (0, r.jsx)(S, {
                        onChange: j,
                        onChangeComplete: (e) => {
                            let { hex: t } = e;
                            return M(t);
                        },
                        color: P.pending.hsl,
                    }),
                }),
                d,
                (0, r.jsx)(p.ksK, {
                    value: P.input.slice(1),
                    onChange: x,
                    maxLength: I - 1,
                    leading: "#",
                    trailing:
                        E && null != v
                            ? {
                                  icon: p.dDg,
                                  onClick: L,
                                  "aria-label": m.intl.string(m.t["0dU9Ny"]),
                              }
                            : void 0,
                }),
                null != l &&
                    l.length > 0 &&
                    (0, r.jsx)("div", {
                        className: g.I1,
                        children: l.map((e, t) =>
                            (0, r.jsx)(
                                u.DUT,
                                {
                                    "aria-label": "",
                                    style: { backgroundColor: e },
                                    className: g.db,
                                    onClick: () => x(e),
                                },
                                "".concat(e, "-").concat(t),
                            ),
                        ),
                    }),
                h,
            ],
        }),
        U = null != y ? y : f.l;
    return (0, r.jsx)(U, {
        "aria-label": m.intl.string(m.t.WTqQ5e),
        className: s()(g.zi, A),
        children: k,
    });
}
let D = i.memo(P);
function x(e) {
    let {
            className: t,
            defaultColor: n,
            customColor: i,
            colors: a,
            value: c,
            secondaryValue: u,
            disabled: d,
            onChange: f,
            renderDefaultButton: p,
            renderCustomButton: _,
            colorContainerClassName: h,
            isGradient: m,
            renderGradientCustomButton: E,
            gradientDegrees: y,
            allowBlackCustomColor: v,
        } = e,
        S = (e) =>
            (0, r.jsx)("div", {
                className: g._D,
                children: m
                    ? e.map((e) =>
                          (0, r.jsx)(
                              N,
                              {
                                  gradientStart: e.start,
                                  gradientEnd: e.end,
                                  color: 0,
                                  isSelected: c === e.start && u === e.end,
                                  onClick: () => f(e.start, e.end),
                                  disabled: d,
                                  isGradient: !0,
                                  "aria-label": e.name,
                                  gradientDegrees: y,
                              },
                              "".concat(e.start, "-").concat(e.end),
                          ),
                      )
                    : e.map((e) =>
                          (0, r.jsx)(
                              N,
                              {
                                  color: e,
                                  isSelected: e === c,
                                  onClick: f,
                                  disabled: d,
                                  isGradient: !1,
                              },
                              e,
                          ),
                      ),
            }),
        I = a.slice(0, a.length / 2),
        C = a.slice(a.length / 2, a.length),
        R = (0, l.Ay)({
            id: "color-picker",
            isEnabled: !0,
            scrollToStart: T,
            scrollToEnd: T,
        });
    return (0, r.jsx)(o.hD, {
        navigator: R,
        children: (0, r.jsx)(o.PR, {
            children: (e) => {
                let { ref: o } = e,
                    l = A(e, ["ref"]);
                return (0, r.jsxs)(
                    "div",
                    O(
                        b(
                            {
                                className: s()(g.kL, t, { [g.D7]: m }),
                                ref: o,
                            },
                            l,
                        ),
                        {
                            children: [
                                !m &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)("div", {
                                                className: s()(g.$R, h),
                                                children: p({
                                                    value: c,
                                                    color: n,
                                                    onChange: f,
                                                    disabled: d,
                                                    allowBlackCustomColor: v,
                                                }),
                                            }),
                                            (0, r.jsx)("div", {
                                                className: s()(g.BQ, h),
                                                children: _({
                                                    value: c,
                                                    customColor: i,
                                                    disabled: d,
                                                    presets: a,
                                                }),
                                            }),
                                        ],
                                    }),
                                m &&
                                    null != E &&
                                    (0, r.jsx)("div", {
                                        children: E({
                                            value: c,
                                            startColor: n,
                                            endColor: n,
                                            disabled: d,
                                        }),
                                    }),
                                (0, r.jsxs)("div", {
                                    children: [S(I), S(C)],
                                }),
                            ],
                        },
                    ),
                );
            },
        }),
    });
}
