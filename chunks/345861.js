n.d(t, { Z: () => a });
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    o = n(481060),
    l = n(813197);
function a(e) {
    var t,
        n,
        { buttonCTA: i, onChange: a, onFileSizeError: c, 'aria-label': u, multiple: d = !1, disabled: f = !1, submitting: p = !1, maxFileSizeBytes: g, filters: b, className: m } = e,
        h = (function (e, t) {
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
        })(e, ['buttonCTA', 'onChange', 'onFileSizeError', 'aria-label', 'multiple', 'disabled', 'submitting', 'maxFileSizeBytes', 'filters', 'className']);
    return (0, r.jsx)(o.tEY, {
        within: !0,
        children: (0, r.jsxs)('div', {
            className: s()(
                (0, o.nYM)(
                    ((t = (function (e) {
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
                    })({}, h)),
                    (n = n =
                        {
                            submitting: p,
                            disabled: f
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(n)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                          }),
                    t)
                ),
                m
            ),
            style: { width: 'max-content' },
            'aria-disabled': f,
            children: [
                (0, r.jsx)('span', {
                    'aria-hidden': !0,
                    children: i
                }),
                (0, r.jsx)(l.ZP, {
                    tabIndex: 0,
                    onChange: a,
                    onFileSizeError: c,
                    multiple: d,
                    maxFileSizeBytes: g,
                    filters: b,
                    'aria-label': null != u ? u : i,
                    disabled: f
                })
            ]
        })
    });
}
