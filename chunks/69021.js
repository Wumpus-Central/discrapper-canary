r.d(t, { Z: () => b }), r(653041);
var n = r(200651);
r(192379);
var i = r(442837),
    o = r(481060),
    c = r(179658),
    a = r(482215),
    l = r(906467),
    s = r(857192),
    u = r(594174);
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
function b() {
    let {
            layoutDebuggingEnabled: e,
            isStaff: t,
            isDeveloper: r
        } = (0, i.cj)([s.default, u.default, l.Z], () => {
            var e;
            return {
                layoutDebuggingEnabled: s.default.layoutDebuggingEnabled,
                isStaff: (null == (e = u.default.getCurrentUser()) ? void 0 : e.isStaff()) === !0,
                isDeveloper: l.Z.isDeveloper
            };
        }),
        { horizontalSpacing: b, verticalSpacing: g, maxHorizontalSpacing: f, maxVerticalSpacing: j } = (0, a.i)(),
        { setHorizontalSpacing: O, setVerticalSpacing: y } = a.i.getState(),
        h = [];
    return (
        t &&
            r &&
            (h.push(
                (0, n.jsx)(
                    o.S89,
                    {
                        id: 'layout-debugging',
                        label: 'Enable Layout Debugging',
                        checked: e,
                        action: () => {
                            (0, c.y)({ layoutDebuggingEnabled: !e });
                        }
                    },
                    'layout-debugging'
                )
            ),
            e &&
                (h.push(
                    (0, n.jsx)(
                        o.II_,
                        {
                            id: 'horizontal-spacing',
                            label: 'Horizontal Spacing',
                            control: (e, t) =>
                                (0, n.jsx)(
                                    o._wy,
                                    p(d({}, e), {
                                        ref: t,
                                        value: b,
                                        minValue: 0,
                                        maxValue: f,
                                        onChange: (e) => O(e),
                                        renderValue: (e) => ''.concat(Math.round(e), 'px'),
                                        'aria-label': 'Horizontal Spacing'
                                    })
                                )
                        },
                        'horizontal-spacing'
                    )
                ),
                h.push(
                    (0, n.jsx)(
                        o.II_,
                        {
                            id: 'vertical-spacing',
                            label: 'Vertical Spacing',
                            control: (e, t) =>
                                (0, n.jsx)(
                                    o._wy,
                                    p(d({}, e), {
                                        ref: t,
                                        value: g,
                                        minValue: 0,
                                        maxValue: j,
                                        onChange: (e) => y(e),
                                        'aria-label': 'Horizontal Spacing',
                                        renderValue: (e) => ''.concat(Math.round(e), 'px')
                                    })
                                )
                        },
                        'vertical-spacing'
                    )
                ))),
        0 === h.length ? null : h
    );
}
