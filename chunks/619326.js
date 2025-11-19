n.d(t, { Z: () => v }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(866442),
    o = n(755721),
    c = n(481060),
    d = n(393238),
    u = n(44315),
    g = n(663993),
    m = n(981631),
    p = n(388032),
    f = n(318616);
function h(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let x = (0, g.Un)({
    createPromise: () => n.e("4848").then(n.bind(n, 797967)),
    webpackId: 797967,
});
function j(e) {
    let t = (0, s.Bd)(e) > 0.25;
    return (0, u.Lq)(t ? m.Ilk.WHITE_500 : m.Ilk.PRIMARY_530);
}
function _(e) {
    let { value: t, onChange: n, disabled: l = !1 } = e,
        d = i.useRef(null),
        [u, g] = i.useState(t);
    function x() {
        n(u);
    }
    function _(e) {
        n(e), g(e);
    }
    let v = t === m.p6O,
        O = v ? u : t,
        C = (0, r.jsx)(c.dz2, {
            size: "custom",
            width: 32,
            height: 24,
            color: j(t),
        }),
        y = (0, o.Jb)({
            orientation: "horizontal",
            isDisabled: l,
        }),
        { ref: N } = y,
        E = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(y, ["ref"]),
        I = (0, o.jm)({
            isSelected: v,
            label: p.intl.formatToPlainString(p.t.ZC69mL, { colorHex: m.Pbq }),
        }),
        S = (0, o.jm)({
            isSelected: !v,
            label: p.intl.formatToPlainString(p.t["3kiLZZ"], { colorHex: (0, s.Rf)(t) }),
        });
    return (0, r.jsxs)(
        "div",
        b(
            h(
                {
                    className: f.buttonsContainer,
                    "aria-label": p.intl.string(p.t["FJjrI/"]),
                    ref: N,
                },
                E,
            ),
            {
                children: [
                    (0, r.jsx)("div", {
                        className: a()(f.colorSwatch, { [f.disabled]: l }),
                        children: (0, r.jsxs)(
                            c.P3F,
                            b(
                                h(
                                    {
                                        onClick: l
                                            ? void 0
                                            : function () {
                                                  n(m.p6O);
                                              },
                                        "aria-disabled": l,
                                    },
                                    I,
                                ),
                                {
                                    children: [
                                        (0, r.jsx)("div", {
                                            className: f.swatch,
                                            style: { backgroundColor: m.Pbq },
                                            children: v ? C : null,
                                        }),
                                        (0, r.jsx)(c.Text, {
                                            className: f.swatchDescription,
                                            color: "header-secondary",
                                            variant: "text-xs/normal",
                                            "aria-hidden": !0,
                                            children: p.intl.string(p.t.Mcfzar),
                                        }),
                                    ],
                                },
                            ),
                        ),
                    }),
                    (0, r.jsxs)("div", {
                        className: a()(f.colorSwatch, { [f.disabled]: l }),
                        children: [
                            (0, r.jsxs)(
                                c.P3F,
                                b(
                                    h(
                                        {
                                            onClick: l ? void 0 : x,
                                            "aria-disabled": l,
                                        },
                                        S,
                                    ),
                                    {
                                        children: [
                                            (0, r.jsx)("div", {
                                                className: a()(f.customSwatch, { [f.defaultSwatch]: O === m.p6O }),
                                                style: { "--custom-color": (0, s.Rf)(O) },
                                                children: v ? null : C,
                                            }),
                                            (0, r.jsx)(c.Text, {
                                                className: f.swatchDescription,
                                                color: "header-secondary",
                                                variant: "text-xs/normal",
                                                "aria-hidden": !0,
                                                children: p.intl.string(p.t["2ArXy1"]),
                                            }),
                                        ],
                                    },
                                ),
                            ),
                            !l &&
                                (0, r.jsx)(c.yRy, {
                                    targetElementRef: d,
                                    onRequestOpen: x,
                                    renderPopout: (e) =>
                                        (0, r.jsx)(
                                            c.Z$W,
                                            b(h({}, e), {
                                                value: t,
                                                onChange: _,
                                            }),
                                        ),
                                    children: (e) =>
                                        (0, r.jsx)(
                                            c.P3F,
                                            b(h({}, e), {
                                                innerRef: d,
                                                className: f.dropperIconButton,
                                                "aria-label": p.intl.string(p.t.Qp04hK),
                                                children: (0, r.jsx)(c.ilE, {
                                                    size: "custom",
                                                    className: f.dropperIcon,
                                                    width: 14,
                                                    height: 14,
                                                    color: j(O),
                                                }),
                                            }),
                                        ),
                                }),
                        ],
                    }),
                ],
            },
        ),
    );
}
function v(e) {
    let t,
        { value: n, onChange: i, disabled: l = !1 } = e,
        { ref: a, width: s } = (0, d.ZP)();
    return (
        (t =
            null == s || s < 440
                ? (0, r.jsx)(_, {
                      value: n,
                      onChange: i,
                      disabled: l,
                  })
                : (0, r.jsx)(x, {
                      defaultColor: m.p6O,
                      colors: m.pmI,
                      value: n,
                      onChange: i,
                      disabled: l,
                  })),
        (0, r.jsx)("div", {
            ref: a,
            children: t,
        })
    );
}
