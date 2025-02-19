n.d(t, { Z: () => N }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(866442),
    o = n(481060),
    c = n(393238),
    d = n(44315),
    u = n(663993),
    m = n(981631),
    p = n(388032),
    g = n(906689);
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function f(e, t) {
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
let b = (0, u.Un)({
    createPromise: () => n.e('4848').then(n.bind(n, 336231)),
    webpackId: 336231
});
function x(e) {
    let t = (0, l.Bd)(e) > 0.25;
    return (0, d.Lq)(t ? m.Ilk.WHITE_500 : m.Ilk.PRIMARY_530);
}
function j(e) {
    let { value: t, onChange: n, disabled: s = !1 } = e,
        [c, d] = i.useState(t);
    function u() {
        n(c);
    }
    function b(e) {
        n(e), d(e);
    }
    let j = t === m.p6O,
        N = j ? c : t,
        v = (0, r.jsx)(o.dz2, {
            size: 'custom',
            width: 32,
            height: 24,
            color: x(t)
        }),
        _ = (0, o.arW)({
            orientation: 'horizontal',
            isDisabled: s
        }),
        O = (0, o.xUy)({
            isSelected: j,
            label: p.NW.formatToPlainString(p.t.ZC69mJ, { colorHex: (0, l.Rf)(m.p6O) })
        }),
        y = (0, o.xUy)({
            isSelected: !j,
            label: p.NW.formatToPlainString(p.t['3kiLZW'], { colorHex: (0, l.Rf)(t) })
        });
    return (0, r.jsxs)(
        'div',
        f(
            h(
                {
                    className: g.buttonsContainer,
                    'aria-label': p.NW.string(p.t.FJjrIy)
                },
                _
            ),
            {
                children: [
                    (0, r.jsx)('div', {
                        className: a()(g.colorSwatch, { [g.disabled]: s }),
                        children: (0, r.jsxs)(
                            o.P3F,
                            f(
                                h(
                                    {
                                        onClick: s
                                            ? void 0
                                            : function () {
                                                  n(m.p6O);
                                              },
                                        'aria-disabled': s
                                    },
                                    O
                                ),
                                {
                                    children: [
                                        (0, r.jsx)('div', {
                                            className: g.swatch,
                                            style: { backgroundColor: (0, l.Rf)(m.p6O) },
                                            children: j ? v : null
                                        }),
                                        (0, r.jsx)(o.Text, {
                                            className: g.swatchDescription,
                                            color: 'header-secondary',
                                            variant: 'text-xs/normal',
                                            'aria-hidden': !0,
                                            children: p.NW.string(p.t.Mcfzam)
                                        })
                                    ]
                                }
                            )
                        )
                    }),
                    (0, r.jsxs)('div', {
                        className: a()(g.colorSwatch, { [g.disabled]: s }),
                        children: [
                            (0, r.jsxs)(
                                o.P3F,
                                f(
                                    h(
                                        {
                                            onClick: s ? void 0 : u,
                                            'aria-disabled': s
                                        },
                                        y
                                    ),
                                    {
                                        children: [
                                            (0, r.jsx)('div', {
                                                className: a()(g.customSwatch, { [g.defaultSwatch]: N === m.p6O }),
                                                style: { '--custom-color': (0, l.Rf)(N) },
                                                children: j ? null : v
                                            }),
                                            (0, r.jsx)(o.Text, {
                                                className: g.swatchDescription,
                                                color: 'header-secondary',
                                                variant: 'text-xs/normal',
                                                'aria-hidden': !0,
                                                children: p.NW.string(p.t['2ArXy8'])
                                            })
                                        ]
                                    }
                                )
                            ),
                            !s &&
                                (0, r.jsx)(o.yRy, {
                                    onRequestOpen: u,
                                    renderPopout: (e) =>
                                        (0, r.jsx)(
                                            o.Z$W,
                                            f(h({}, e), {
                                                value: t,
                                                onChange: b
                                            })
                                        ),
                                    children: (e) =>
                                        (0, r.jsx)(
                                            o.P3F,
                                            f(h({}, e), {
                                                className: g.dropperIconButton,
                                                'aria-label': p.NW.string(p.t.Qp04hI),
                                                children: (0, r.jsx)(o.ilE, {
                                                    size: 'custom',
                                                    className: g.dropperIcon,
                                                    width: 14,
                                                    height: 14,
                                                    color: x(N)
                                                })
                                            })
                                        )
                                })
                        ]
                    })
                ]
            }
        )
    );
}
function N(e) {
    let t,
        { value: n, onChange: i, disabled: s = !1 } = e,
        { ref: a, width: l } = (0, c.Z)();
    return (
        (t =
            null == l || l < 440
                ? (0, r.jsx)(j, {
                      value: n,
                      onChange: i,
                      disabled: s
                  })
                : (0, r.jsx)(b, {
                      defaultColor: m.p6O,
                      colors: m.pmI,
                      value: n,
                      onChange: i,
                      disabled: s
                  })),
        (0, r.jsx)('div', {
            ref: a,
            children: t
        })
    );
}
