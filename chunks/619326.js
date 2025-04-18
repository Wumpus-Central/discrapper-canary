n.d(t, { Z: () => N }), n(388685);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(866442),
    o = n(481060),
    c = n(393238),
    d = n(44315),
    u = n(663993),
    m = n(981631),
    g = n(388032),
    p = n(499650);
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
let x = (0, u.Un)({
    createPromise: () => n.e('4848').then(n.bind(n, 797967)),
    webpackId: 797967
});
function b(e) {
    let t = (0, a.Bd)(e) > 0.25;
    return (0, d.Lq)(t ? m.Ilk.WHITE_500 : m.Ilk.PRIMARY_530);
}
function j(e) {
    let { value: t, onChange: n, disabled: s = !1 } = e,
        [c, d] = i.useState(t);
    function u() {
        n(c);
    }
    function x(e) {
        n(e), d(e);
    }
    let j = t === m.p6O,
        N = j ? c : t,
        _ = (0, r.jsx)(o.dz2, {
            size: 'custom',
            width: 32,
            height: 24,
            color: b(t)
        }),
        v = (0, o.arW)({
            orientation: 'horizontal',
            isDisabled: s
        }),
        { ref: O } = v,
        C = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        s = Object.keys(e);
                    for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(v, ['ref']),
        y = (0, o.xUy)({
            isSelected: j,
            label: g.NW.formatToPlainString(g.t.ZC69mJ, { colorHex: (0, a.Rf)(m.p6O) })
        }),
        I = (0, o.xUy)({
            isSelected: !j,
            label: g.NW.formatToPlainString(g.t['3kiLZW'], { colorHex: (0, a.Rf)(t) })
        });
    return (0, r.jsxs)(
        'div',
        f(
            h(
                {
                    className: p.buttonsContainer,
                    'aria-label': g.NW.string(g.t.FJjrIy),
                    ref: O
                },
                C
            ),
            {
                children: [
                    (0, r.jsx)('div', {
                        className: l()(p.colorSwatch, { [p.disabled]: s }),
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
                                    y
                                ),
                                {
                                    children: [
                                        (0, r.jsx)('div', {
                                            className: p.swatch,
                                            style: { backgroundColor: (0, a.Rf)(m.p6O) },
                                            children: j ? _ : null
                                        }),
                                        (0, r.jsx)(o.Text, {
                                            className: p.swatchDescription,
                                            color: 'header-secondary',
                                            variant: 'text-xs/normal',
                                            'aria-hidden': !0,
                                            children: g.NW.string(g.t.Mcfzam)
                                        })
                                    ]
                                }
                            )
                        )
                    }),
                    (0, r.jsxs)('div', {
                        className: l()(p.colorSwatch, { [p.disabled]: s }),
                        children: [
                            (0, r.jsxs)(
                                o.P3F,
                                f(
                                    h(
                                        {
                                            onClick: s ? void 0 : u,
                                            'aria-disabled': s
                                        },
                                        I
                                    ),
                                    {
                                        children: [
                                            (0, r.jsx)('div', {
                                                className: l()(p.customSwatch, { [p.defaultSwatch]: N === m.p6O }),
                                                style: { '--custom-color': (0, a.Rf)(N) },
                                                children: j ? null : _
                                            }),
                                            (0, r.jsx)(o.Text, {
                                                className: p.swatchDescription,
                                                color: 'header-secondary',
                                                variant: 'text-xs/normal',
                                                'aria-hidden': !0,
                                                children: g.NW.string(g.t['2ArXy8'])
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
                                                onChange: x
                                            })
                                        ),
                                    children: (e) =>
                                        (0, r.jsx)(
                                            o.P3F,
                                            f(h({}, e), {
                                                className: p.dropperIconButton,
                                                'aria-label': g.NW.string(g.t.Qp04hI),
                                                children: (0, r.jsx)(o.ilE, {
                                                    size: 'custom',
                                                    className: p.dropperIcon,
                                                    width: 14,
                                                    height: 14,
                                                    color: b(N)
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
        { ref: l, width: a } = (0, c.ZP)();
    return (
        (t =
            null == a || a < 440
                ? (0, r.jsx)(j, {
                      value: n,
                      onChange: i,
                      disabled: s
                  })
                : (0, r.jsx)(x, {
                      defaultColor: m.p6O,
                      colors: m.pmI,
                      value: n,
                      onChange: i,
                      disabled: s
                  })),
        (0, r.jsx)('div', {
            ref: l,
            children: t
        })
    );
}
