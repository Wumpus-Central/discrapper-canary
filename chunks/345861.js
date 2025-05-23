t.d(n, { Z: () => c });
var r = t(255367);
t(73800);
var a = t(120356),
    i = t.n(a),
    o = t(481060),
    l = t(813197);
function c(e) {
    var n,
        t,
        { buttonCTA: a, onChange: c, onFileSizeError: s, 'aria-label': d, multiple: u = !1, disabled: _ = !1, submitting: b = !1, maxFileSizeBytes: p, filters: f, className: h } = e,
        m = (function (e, n) {
            if (null == e) return {};
            var t,
                r,
                a = (function (e, n) {
                    if (null == e) return {};
                    var t,
                        r,
                        a = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (t = i[r]), n.indexOf(t) >= 0 || (a[t] = e[t]);
                    return a;
                })(e, n);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) (t = i[r]), !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (a[t] = e[t]);
            }
            return a;
        })(e, ['buttonCTA', 'onChange', 'onFileSizeError', 'aria-label', 'multiple', 'disabled', 'submitting', 'maxFileSizeBytes', 'filters', 'className']);
    return (0, r.jsx)(o.tEY, {
        within: !0,
        children: (0, r.jsxs)('div', {
            className: i()(
                (0, o.nYM)(
                    ((n = (function (e) {
                        for (var n = 1; n < arguments.length; n++) {
                            var t = null != arguments[n] ? arguments[n] : {},
                                r = Object.keys(t);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(t).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                    })
                                )),
                                r.forEach(function (n) {
                                    var r;
                                    (r = t[n]),
                                        n in e
                                            ? Object.defineProperty(e, n, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[n] = r);
                                });
                        }
                        return e;
                    })({}, m)),
                    (t = t =
                        {
                            submitting: b,
                            disabled: _
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
                        : (function (e, n) {
                              var t = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  t.push.apply(t, r);
                              }
                              return t;
                          })(Object(t)).forEach(function (e) {
                              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
                          }),
                    n)
                ),
                h
            ),
            style: { width: 'max-content' },
            'aria-disabled': _,
            children: [
                (0, r.jsx)('span', {
                    'aria-hidden': !0,
                    children: a
                }),
                (0, r.jsx)(l.ZP, {
                    tabIndex: 0,
                    onChange: c,
                    onFileSizeError: s,
                    multiple: u,
                    maxFileSizeBytes: p,
                    filters: f,
                    'aria-label': null != d ? d : a,
                    disabled: _
                })
            ]
        })
    });
}
