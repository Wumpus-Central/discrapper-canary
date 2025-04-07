s.d(t, { Z: () => a });
var r = s(200651);
s(192379);
var n = s(120356),
    i = s.n(n),
    o = s(481060),
    l = s(813197);
function a(e) {
    var t,
        s,
        { buttonCTA: n, onChange: a, onFileSizeError: c, 'aria-label': u, multiple: d = !1, disabled: p = !1, submitting: f = !1, maxFileSizeBytes: b, filters: g, className: O } = e,
        x = (function (e, t) {
            if (null == e) return {};
            var s,
                r,
                n = (function (e, t) {
                    if (null == e) return {};
                    var s,
                        r,
                        n = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (s = i[r]), t.indexOf(s) >= 0 || (n[s] = e[s]);
                    return n;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) (s = i[r]), !(t.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(e, s) && (n[s] = e[s]);
            }
            return n;
        })(e, ['buttonCTA', 'onChange', 'onFileSizeError', 'aria-label', 'multiple', 'disabled', 'submitting', 'maxFileSizeBytes', 'filters', 'className']);
    return (0, r.jsx)(o.tEY, {
        within: !0,
        children: (0, r.jsxs)('div', {
            className: i()(
                (0, o.nYM)(
                    ((t = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var s = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(s);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(s).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(s, e).enumerable;
                                    })
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    (r = s[t]),
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
                    })({}, x)),
                    (s = s =
                        {
                            submitting: f,
                            disabled: p
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
                        : (function (e, t) {
                              var s = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  s.push.apply(s, r);
                              }
                              return s;
                          })(Object(s)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(s, e));
                          }),
                    t)
                ),
                O
            ),
            style: { width: 'max-content' },
            'aria-disabled': p,
            children: [
                (0, r.jsx)('span', {
                    'aria-hidden': !0,
                    children: n
                }),
                (0, r.jsx)(l.ZP, {
                    tabIndex: 0,
                    onChange: a,
                    onFileSizeError: c,
                    multiple: d,
                    maxFileSizeBytes: b,
                    filters: g,
                    'aria-label': null != u ? u : n,
                    disabled: p
                })
            ]
        })
    });
}
