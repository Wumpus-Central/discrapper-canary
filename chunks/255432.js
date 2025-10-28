n.d(t, { a: () => u }), n(388685);
var r = n(951288),
    l = n(793030),
    o = n(619307),
    a = n(463208),
    i = n(481060),
    c = n(624315);
function u(e) {
    let { controls: t, props: n, onPropsChange: u } = e,
        s = (e, t) => {
            var r, l;
            u(
                ((r = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, n)),
                (l = l = { [e]: t }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(l)).forEach(function (e) {
                          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e));
                      }),
                r),
            );
        },
        d = Object.entries(t);
    return 0 === d.length
        ? null
        : (0, r.jsx)("div", {
              className: c.controlsSection,
              children: (0, r.jsx)(l.Kqy, {
                  gap: 16,
                  children: d.map((e) => {
                      var t;
                      let [c, u] = e,
                          d = null != (t = n[c]) ? t : u.defaultValue;
                      return (0, r.jsxs)(
                          l.gNt,
                          {
                              label: "boolean" === u.type ? void 0 : u.label,
                              children: [
                                  "select" === u.type &&
                                      null != u.options &&
                                      (0, r.jsx)(o.q4, {
                                          value: d,
                                          onChange: (e) => s(c, e),
                                          options: u.options,
                                      }),
                                  "boolean" === u.type &&
                                      (0, r.jsx)(i.Checkbox, {
                                          checked: d,
                                          onChange: (e) => s(c, e),
                                          label: u.label,
                                      }),
                                  "text" === u.type &&
                                      (0, r.jsx)(a.o, {
                                          value: d,
                                          onChange: (e) => s(c, e),
                                      }),
                                  "number" === u.type &&
                                      (0, r.jsx)(a.o, {
                                          type: "number",
                                          value: String(d),
                                          min: u.minValue,
                                          onChange: (e) => s(c, Number(e)),
                                      }),
                              ],
                          },
                          c,
                      );
                  }),
              }),
          });
}
