n.d(t, { Z: () => O }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(866442),
    o = n(692547),
    c = n(755721),
    d = n(481060),
    u = n(393238),
    g = n(663993),
    f = n(981631),
    m = n(388032),
    b = n(612450);
function p(e) {
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
function h(e, t) {
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
    return (0, s.Bd)(e) > 0.25 ? o.Z.unsafe_rawColors.WHITE.css : o.Z.unsafe_rawColors.PRIMARY_530.css;
}
function v(e) {
    let { value: t, onChange: n, disabled: l = !1 } = e,
        o = i.useRef(null),
        [u, g] = i.useState(t);
    function x() {
        n(u);
    }
    function v(e) {
        n(e), g(e);
    }
    let O = t === f.p6O,
        C = O ? u : t,
        y = (0, r.jsx)(d.dz2, {
            size: "custom",
            width: 32,
            height: 24,
            color: j(t),
        }),
        N = (0, c.Jb)({
            orientation: "horizontal",
            isDisabled: l,
        }),
        { ref: E } = N,
        I = (function (e, t) {
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
        })(N, ["ref"]),
        S = (0, c.jm)({
            isSelected: O,
            label: m.intl.formatToPlainString(m.t.ZC69mL, { colorHex: f.Pbq }),
        }),
        _ = (0, c.jm)({
            isSelected: !O,
            label: m.intl.formatToPlainString(m.t["3kiLZZ"], { colorHex: (0, s.Rf)(t) }),
        });
    return (0, r.jsxs)(
        "div",
        h(
            p(
                {
                    className: b.buttonsContainer,
                    "aria-label": m.intl.string(m.t["FJjrI/"]),
                    ref: E,
                },
                I,
            ),
            {
                children: [
                    (0, r.jsx)("div", {
                        className: a()(b.colorSwatch, { [b.disabled]: l }),
                        children: (0, r.jsxs)(
                            d.P3F,
                            h(
                                p(
                                    {
                                        onClick: l
                                            ? void 0
                                            : function () {
                                                  n(f.p6O);
                                              },
                                        "aria-disabled": l,
                                    },
                                    S,
                                ),
                                {
                                    children: [
                                        (0, r.jsx)("div", {
                                            className: b.swatch,
                                            style: { backgroundColor: f.Pbq },
                                            children: O ? y : null,
                                        }),
                                        (0, r.jsx)(d.Text, {
                                            className: b.swatchDescription,
                                            color: "text-default",
                                            variant: "text-xs/normal",
                                            "aria-hidden": !0,
                                            children: m.intl.string(m.t.Mcfzar),
                                        }),
                                    ],
                                },
                            ),
                        ),
                    }),
                    (0, r.jsxs)("div", {
                        className: a()(b.colorSwatch, { [b.disabled]: l }),
                        children: [
                            (0, r.jsxs)(
                                d.P3F,
                                h(
                                    p(
                                        {
                                            onClick: l ? void 0 : x,
                                            "aria-disabled": l,
                                        },
                                        _,
                                    ),
                                    {
                                        children: [
                                            (0, r.jsx)("div", {
                                                className: a()(b.customSwatch, { [b.defaultSwatch]: C === f.p6O }),
                                                style: { "--custom-color": (0, s.Rf)(C) },
                                                children: O ? null : y,
                                            }),
                                            (0, r.jsx)(d.Text, {
                                                className: b.swatchDescription,
                                                color: "text-default",
                                                variant: "text-xs/normal",
                                                "aria-hidden": !0,
                                                children: m.intl.string(m.t["2ArXy1"]),
                                            }),
                                        ],
                                    },
                                ),
                            ),
                            !l &&
                                (0, r.jsx)(d.yRy, {
                                    targetElementRef: o,
                                    onRequestOpen: x,
                                    renderPopout: (e) =>
                                        (0, r.jsx)(
                                            d.Z$W,
                                            h(p({}, e), {
                                                value: t,
                                                onChange: v,
                                            }),
                                        ),
                                    children: (e) =>
                                        (0, r.jsx)(
                                            d.P3F,
                                            h(p({}, e), {
                                                innerRef: o,
                                                className: b.dropperIconButton,
                                                "aria-label": m.intl.string(m.t.Qp04hK),
                                                children: (0, r.jsx)(d.ilE, {
                                                    size: "custom",
                                                    className: b.dropperIcon,
                                                    width: 14,
                                                    height: 14,
                                                    color: j(C),
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
function O(e) {
    let t,
        { value: n, onChange: i, disabled: l = !1 } = e,
        { ref: a, width: s } = (0, u.ZP)();
    return (
        (t =
            null == s || s < 440
                ? (0, r.jsx)(v, {
                      value: n,
                      onChange: i,
                      disabled: l,
                  })
                : (0, r.jsx)(x, {
                      defaultColor: f.p6O,
                      colors: f.pmI,
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
