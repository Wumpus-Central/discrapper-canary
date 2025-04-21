n.d(t, { Z: () => o });
var l = n(200651);
n(192379);
var r = n(481060),
    i = n(195367),
    a = n(388032),
    s = n(367612);
function o(e) {
    var t,
        n,
        { isSlideReady: o } = e,
        c = (function (e, t) {
            if (null == e) return {};
            var n,
                l,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        l,
                        r = {},
                        i = Object.keys(e);
                    for (l = 0; l < i.length; l++) (n = i[l]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (l = 0; l < i.length; l++) (n = i[l]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ['isSlideReady']);
    return (0, l.jsxs)('div', {
        className: s.__invalid_slideContainer,
        children: [
            (0, l.jsxs)('div', {
                className: s.header,
                children: [
                    (0, l.jsx)(r.X6q, {
                        variant: 'heading-xl/semibold',
                        children: a.intl.string(a.t.GG6vbm)
                    }),
                    (0, l.jsx)(r.Text, {
                        color: 'header-secondary',
                        className: s.text,
                        variant: 'text-sm/normal',
                        children: a.intl.string(a.t.q5lgwc)
                    })
                ]
            }),
            (0, l.jsx)(
                i.Z,
                ((t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            l = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (l = l.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            l.forEach(function (t) {
                                var l;
                                (l = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: l,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = l);
                            });
                    }
                    return e;
                })({}, c)),
                (n = n = { canSetFocus: o }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var l = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, l);
                          }
                          return n;
                      })(Object(n)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      }),
                t)
            )
        ]
    });
}
