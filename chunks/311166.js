n.d(t, { Z: () => o });
var r = n(200651);
n(192379);
var l = n(481060),
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
                r,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            }
            return l;
        })(e, ['isSlideReady']);
    return (0, r.jsxs)('div', {
        className: s.__invalid_slideContainer,
        children: [
            (0, r.jsxs)('div', {
                className: s.header,
                children: [
                    (0, r.jsx)(l.X6q, {
                        variant: 'heading-xl/semibold',
                        children: a.NW.string(a.t.GG6vbm)
                    }),
                    (0, r.jsx)(l.Text, {
                        color: 'header-secondary',
                        className: s.text,
                        variant: 'text-sm/normal',
                        children: a.NW.string(a.t.q5lgwc)
                    })
                ]
            }),
            (0, r.jsx)(
                i.Z,
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
                })({}, c)),
                (n = n = { canSetFocus: o }),
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
            )
        ]
    });
}
