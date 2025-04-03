n.d(t, { Z: () => u }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(481060),
    a = n(273504),
    l = n(981631),
    o = n(388032),
    c = n(957270),
    d = n(282338);
function u(e) {
    let { rule: t, onChangeRule: n } = e,
        [u, m] = i.useState(t.name);
    return (0, r.jsxs)(s.xJW, {
        children: [
            (0, r.jsx)(s.Text, {
                className: d.triggerHeader,
                variant: 'text-sm/semibold',
                children: o.NW.string(o.t.WVAHxM)
            }),
            (0, r.jsx)(s.oil, {
                className: c.ruleNameInput,
                onChange: (e) => {
                    var r, i;
                    m(e),
                        n(
                            ((r = (function (e) {
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
                            })({}, t)),
                            (i = i = { name: e }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(i)).forEach(function (e) {
                                      Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e));
                                  }),
                            r)
                        );
                },
                onClick: (e) => e.stopPropagation(),
                onKeyPress: (e) => {
                    e.which === l.yXg.SPACE && e.stopPropagation();
                },
                placeholder: o.NW.string(o.t['5AO43N']),
                maxLength: a.OU,
                value: u
            })
        ]
    });
}
