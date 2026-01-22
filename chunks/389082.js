n.d(t, {
    A: () => y,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(317097),
    c = n(827734),
    o = n(421380),
    d = n(397927),
    u = n(765671),
    f = n(268218),
    g = n(652215),
    b = n(985018),
    m = n(637900);

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

function x(e, t) {
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
let h = (0, f.Fe)({
    createPromise: () => n.e("66147").then(n.bind(n, 48736)),
    webpackId: 48736,
});

function j(e) {
    return (0, a.OK)(e) > 0.25 ? c.A.unsafe_rawColors.WHITE.css : c.A.unsafe_rawColors.PRIMARY_530.css;
}

function O(e) {
    let { value: t, onChange: n, disabled: l = !1 } = e,
        c = i.useRef(null),
        [u, f] = i.useState(t);

    function h() {
        n(u);
    }

    function O(e) {
        n(e), f(e);
    }
    let y = t === g.TGz,
        v = y ? u : t,
        A = (0, r.jsx)(d.A9s, {
            size: "custom",
            width: 32,
            height: 24,
            color: j(t),
        }),
        E = (0, o._u)({
            orientation: "horizontal",
            isDisabled: l,
        }),
        { ref: N } = E,
        _ = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i,
                l = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
                    (r = n[i]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                return l;
            }
            if (
                ((l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.getOwnPropertyNames(e);
                    for (r = 0; r < l.length; r++)
                        (n = l[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                    return i;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                    (r = n[i]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            return l;
        })(E, ["ref"]),
        S = (0, o.Gx)({
            isSelected: y,
            label: b.intl.formatToPlainString(b.t.ZC69mL, {
                colorHex: g.TpD,
            }),
        }),
        T = (0, o.Gx)({
            isSelected: !y,
            label: b.intl.formatToPlainString(b.t["3kiLZZ"], {
                colorHex: (0, a.Hl)(t),
            }),
        });
    return (0, r.jsxs)(
        "div",
        x(
            p(
                {
                    className: m.NC,
                    "aria-label": b.intl.string(b.t["FJjrI/"]),
                    ref: N,
                },
                _,
            ),
            {
                children: [
                    (0, r.jsx)("div", {
                        className: s()(m.oP, {
                            [m.r9]: l,
                        }),
                        children: (0, r.jsxs)(
                            d.DUT,
                            x(
                                p(
                                    {
                                        onClick: l
                                            ? void 0
                                            : function () {
                                                  n(g.TGz);
                                              },
                                        "aria-disabled": l,
                                    },
                                    S,
                                ),
                                {
                                    children: [
                                        (0, r.jsx)("div", {
                                            className: m.nf,
                                            style: {
                                                backgroundColor: g.TpD,
                                            },
                                            children: y ? A : null,
                                        }),
                                        (0, r.jsx)(d.Text, {
                                            className: m.br,
                                            color: "text-default",
                                            variant: "text-xs/normal",
                                            "aria-hidden": !0,
                                            children: b.intl.string(b.t.Mcfzar),
                                        }),
                                    ],
                                },
                            ),
                        ),
                    }),
                    (0, r.jsxs)("div", {
                        className: s()(m.oP, {
                            [m.r9]: l,
                        }),
                        children: [
                            (0, r.jsxs)(
                                d.DUT,
                                x(
                                    p(
                                        {
                                            onClick: l ? void 0 : h,
                                            "aria-disabled": l,
                                        },
                                        T,
                                    ),
                                    {
                                        children: [
                                            (0, r.jsx)("div", {
                                                className: s()(m.yB, {
                                                    [m.MU]: v === g.TGz,
                                                }),
                                                style: {
                                                    "--custom-color": (0, a.Hl)(v),
                                                },
                                                children: y ? null : A,
                                            }),
                                            (0, r.jsx)(d.Text, {
                                                className: m.br,
                                                color: "text-default",
                                                variant: "text-xs/normal",
                                                "aria-hidden": !0,
                                                children: b.intl.string(b.t["2ArXy1"]),
                                            }),
                                        ],
                                    },
                                ),
                            ),
                            !l &&
                                (0, r.jsx)(d.YNO, {
                                    targetElementRef: c,
                                    onRequestOpen: h,
                                    renderPopout: (e) =>
                                        (0, r.jsx)(
                                            d.VNw,
                                            x(p({}, e), {
                                                value: t,
                                                onChange: O,
                                            }),
                                        ),
                                    children: (e) =>
                                        (0, r.jsx)(
                                            d.DUT,
                                            x(p({}, e), {
                                                innerRef: c,
                                                className: m.MC,
                                                "aria-label": b.intl.string(b.t.Qp04hK),
                                                children: (0, r.jsx)(d.dDg, {
                                                    size: "custom",
                                                    className: m.cE,
                                                    width: 14,
                                                    height: 14,
                                                    color: j(v),
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

function y(e) {
    let t,
        { value: n, onChange: i, disabled: l = !1 } = e,
        { ref: s, width: a } = (0, u.Ay)();
    return (
        (t =
            null == a || a < 440
                ? (0, r.jsx)(O, {
                      value: n,
                      onChange: i,
                      disabled: l,
                  })
                : (0, r.jsx)(h, {
                      defaultColor: g.TGz,
                      colors: g._tK,
                      value: n,
                      onChange: i,
                      disabled: l,
                  })),
        (0, r.jsx)("div", {
            ref: s,
            children: t,
        })
    );
}
