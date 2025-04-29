n.d(t, { Z: () => _ }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(866442),
    o = n(481060),
    c = n(393238),
    u = n(44315),
    d = n(663993),
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
let x = (0, d.Un)({
    createPromise: () => n.e('4848').then(n.bind(n, 797967)),
    webpackId: 797967
});
function b(e) {
    let t = (0, a.Bd)(e) > 0.25;
    return (0, u.Lq)(t ? m.Ilk.WHITE_500 : m.Ilk.PRIMARY_530);
}
function j(e) {
    let { value: t, onChange: n, disabled: l = !1 } = e,
        [c, u] = i.useState(t);
    function d() {
        n(c);
    }
    function x(e) {
        n(e), u(e);
    }
    let j = t === m.p6O,
        _ = j ? c : t,
        v = (0, r.jsx)(o.dz2, {
            size: 'custom',
            width: 32,
            height: 24,
            color: b(t)
        }),
        O = (0, o.arW)({
            orientation: 'horizontal',
            isDisabled: l
        }),
        { ref: C } = O,
        y = (function (e, t) {
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
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(O, ['ref']),
        N = (0, o.xUy)({
            isSelected: j,
            label: g.intl.formatToPlainString(g.t.ZC69mJ, { colorHex: (0, a.Rf)(m.p6O) })
        }),
        I = (0, o.xUy)({
            isSelected: !j,
            label: g.intl.formatToPlainString(g.t['3kiLZW'], { colorHex: (0, a.Rf)(t) })
        });
    return (0, r.jsxs)(
        'div',
        f(
            h(
                {
                    className: p.buttonsContainer,
                    'aria-label': g.intl.string(g.t.FJjrIy),
                    ref: C
                },
                y
            ),
            {
                children: [
                    (0, r.jsx)('div', {
                        className: s()(p.colorSwatch, { [p.disabled]: l }),
                        children: (0, r.jsxs)(
                            o.P3F,
                            f(
                                h(
                                    {
                                        onClick: l
                                            ? void 0
                                            : function () {
                                                  n(m.p6O);
                                              },
                                        'aria-disabled': l
                                    },
                                    N
                                ),
                                {
                                    children: [
                                        (0, r.jsx)('div', {
                                            className: p.swatch,
                                            style: { backgroundColor: (0, a.Rf)(m.p6O) },
                                            children: j ? v : null
                                        }),
                                        (0, r.jsx)(o.Text, {
                                            className: p.swatchDescription,
                                            color: 'header-secondary',
                                            variant: 'text-xs/normal',
                                            'aria-hidden': !0,
                                            children: g.intl.string(g.t.Mcfzam)
                                        })
                                    ]
                                }
                            )
                        )
                    }),
                    (0, r.jsxs)('div', {
                        className: s()(p.colorSwatch, { [p.disabled]: l }),
                        children: [
                            (0, r.jsxs)(
                                o.P3F,
                                f(
                                    h(
                                        {
                                            onClick: l ? void 0 : d,
                                            'aria-disabled': l
                                        },
                                        I
                                    ),
                                    {
                                        children: [
                                            (0, r.jsx)('div', {
                                                className: s()(p.customSwatch, { [p.defaultSwatch]: _ === m.p6O }),
                                                style: { '--custom-color': (0, a.Rf)(_) },
                                                children: j ? null : v
                                            }),
                                            (0, r.jsx)(o.Text, {
                                                className: p.swatchDescription,
                                                color: 'header-secondary',
                                                variant: 'text-xs/normal',
                                                'aria-hidden': !0,
                                                children: g.intl.string(g.t['2ArXy8'])
                                            })
                                        ]
                                    }
                                )
                            ),
                            !l &&
                                (0, r.jsx)(o.yRy, {
                                    onRequestOpen: d,
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
                                                'aria-label': g.intl.string(g.t.Qp04hI),
                                                children: (0, r.jsx)(o.ilE, {
                                                    size: 'custom',
                                                    className: p.dropperIcon,
                                                    width: 14,
                                                    height: 14,
                                                    color: b(_)
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
function _(e) {
    let t,
        { value: n, onChange: i, disabled: l = !1 } = e,
        { ref: s, width: a } = (0, c.ZP)();
    return (
        (t =
            null == a || a < 440
                ? (0, r.jsx)(j, {
                      value: n,
                      onChange: i,
                      disabled: l
                  })
                : (0, r.jsx)(x, {
                      defaultColor: m.p6O,
                      colors: m.pmI,
                      value: n,
                      onChange: i,
                      disabled: l
                  })),
        (0, r.jsx)('div', {
            ref: s,
            children: t
        })
    );
}
