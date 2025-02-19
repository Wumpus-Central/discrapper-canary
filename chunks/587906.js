n.d(t, { Z: () => u });
var r = n(200651),
    o = n(657707),
    i = n(481060),
    l = n(626135),
    s = n(981631),
    a = n(388032);
function u(e) {
    let { className: t, onClick: n } = e,
        u = (e) => {
            l.default.track(s.rMx.MEDIA_VIEWER_AFFORDANCE_CLICKED), n(e);
        };
    return (0, r.jsx)(i.ua7, {
        text: a.NW.string(a.t.rTQZY2),
        children: (e) => {
            var n, l;
            return (0, r.jsx)(
                i.P3F,
                ((n = (function (e) {
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
                })({}, e)),
                (l = l =
                    {
                        className: t,
                        focusProps: { offset: 2 },
                        onClick: u,
                        'aria-label': a.NW.string(a.t.rTQZY2),
                        children: (0, r.jsx)(o.bJT, {
                            size: 'custom',
                            color: 'currentColor',
                            width: 20,
                            height: 20
                        })
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(l)).forEach(function (e) {
                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                      }),
                n)
            );
        }
    });
}
