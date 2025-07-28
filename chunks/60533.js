n.d(t, { Z: () => u });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(481060),
    a = n(90815),
    s = n(601964),
    o = n(594174),
    c = n(388032),
    d = n(675968);
function u(e) {
    let { guild: t } = e,
        n = (0, i.e7)([o.default], () => {
            let e = o.default.getCurrentUser();
            return (0, s.eM)(t, e);
        }),
        u = () => {
            (0, a.q)(t.id, { demonetized: !0 });
        };
    return (0, r.jsxs)(l.Kqy, {
        gap: 24,
        className: d.container,
        children: [
            (0, r.jsx)(l.X6q, {
                variant: 'heading-lg/semibold',
                color: 'header-primary',
                children: c.intl.string(c.t.Ms33Dg)
            }),
            (0, r.jsx)(l.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: c.intl.string(c.t.xK7oiY)
            }),
            (0, r.jsx)(l.ua7, {
                text: c.intl.string(c.t.VAIHXV),
                shouldShow: !n,
                children: (e) => {
                    var t, i;
                    return (0, r.jsx)(
                        'div',
                        ((t = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                ('function' == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    r.forEach(function (t) {
                                        var r;
                                        ((r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = r));
                                    }));
                            }
                            return e;
                        })({}, e)),
                        (i = i =
                            {
                                children: (0, r.jsx)(l.zxk, {
                                    variant: 'primary',
                                    text: c.intl.string(c.t.ZXeJbW),
                                    disabled: !n,
                                    onClick: u
                                })
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(i)).forEach(function (e) {
                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                              }),
                        t)
                    );
                }
            })
        ]
    });
}
