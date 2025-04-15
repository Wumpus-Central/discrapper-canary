r.d(t, { Z: () => a });
var n = r(200651);
r(192379);
var i = r(120356),
    s = r.n(i),
    o = r(481060),
    l = r(813197);
function a(e) {
    var t,
        r,
        { buttonCTA: i, onChange: a, onFileSizeError: c, 'aria-label': h, multiple: v = !1, disabled: u = !1, submitting: f = !1, maxFileSizeBytes: p, filters: d, className: b } = e,
        g = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                i = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        i = {},
                        s = Object.keys(e);
                    for (n = 0; n < s.length; n++) (r = s[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (n = 0; n < s.length; n++) (r = s[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            }
            return i;
        })(e, ['buttonCTA', 'onChange', 'onFileSizeError', 'aria-label', 'multiple', 'disabled', 'submitting', 'maxFileSizeBytes', 'filters', 'className']);
    return (0, n.jsx)(o.tEY, {
        within: !0,
        children: (0, n.jsxs)('div', {
            className: s()(
                (0, o.nYM)(
                    ((t = (function (e) {
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
                    })({}, g)),
                    (r = r =
                        {
                            submitting: f,
                            disabled: u
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                        : (function (e, t) {
                              var r = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var n = Object.getOwnPropertySymbols(e);
                                  r.push.apply(r, n);
                              }
                              return r;
                          })(Object(r)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                          }),
                    t)
                ),
                b
            ),
            style: { width: 'max-content' },
            'aria-disabled': u,
            children: [
                (0, n.jsx)('span', {
                    'aria-hidden': !0,
                    children: i
                }),
                (0, n.jsx)(l.ZP, {
                    tabIndex: 0,
                    onChange: a,
                    onFileSizeError: c,
                    multiple: v,
                    maxFileSizeBytes: p,
                    filters: d,
                    'aria-label': null != h ? h : i,
                    disabled: u
                })
            ]
        })
    });
}
