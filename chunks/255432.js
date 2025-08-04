(n.d(t, { a: () => u }), n(388685));
var r = n(255367);
n(73800);
var i = n(481060),
    a = n(142489);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function s(e) {
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
                o(e, t, n[t]);
            }));
    }
    return e;
}
function l(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function u(e) {
    let { controls: t, props: n, onPropsChange: o } = e,
        l = (e, t) => {
            o(c(s({}, n), { [e]: t }));
        },
        u = Object.entries(t);
    return 0 === u.length
        ? null
        : (0, r.jsx)('div', {
              className: a.controlsSection,
              children: (0, r.jsx)(i.Kqy, {
                  gap: 16,
                  children: u.map((e) => {
                      var t;
                      let [a, o] = e,
                          s = null != (t = n[a]) ? t : o.defaultValue;
                      return (0, r.jsxs)(
                          i.xJW,
                          {
                              title: o.label,
                              children: [
                                  'select' === o.type &&
                                      null != o.options &&
                                      (0, r.jsx)(i.q4e, {
                                          value: s,
                                          onChange: (e) => l(a, e),
                                          options: o.options
                                      }),
                                  'boolean' === o.type &&
                                      (0, r.jsx)(i.XZJ, {
                                          value: s,
                                          onChange: (e, t) => l(a, t),
                                          children: (0, r.jsx)(i.Text, {
                                              variant: 'text-md/medium',
                                              children: o.label
                                          })
                                      }),
                                  'text' === o.type &&
                                      (0, r.jsx)(i.oil, {
                                          value: s,
                                          onChange: (e) => l(a, e)
                                      }),
                                  'number' === o.type &&
                                      (0, r.jsx)(i.oil, {
                                          type: 'number',
                                          value: String(s),
                                          onChange: (e) => l(a, Number(e))
                                      })
                              ]
                          },
                          a
                      );
                  })
              })
          });
}
