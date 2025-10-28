n.d(t, { a: () => a }), n(388685);
var r = n(951288),
    i = n(793030),
    o = n(619307),
    l = n(463208),
    s = n(481060),
    c = n(624315);
function a(e) {
    let { controls: t, props: n, onPropsChange: a } = e,
        u = (e, t) => {
            var r, i;
            a(
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
                (i = i = { [e]: t }),
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
                r),
            );
        },
        d = Object.entries(t);
    return 0 === d.length
        ? null
        : (0, r.jsx)("div", {
              className: c.controlsSection,
              children: (0, r.jsx)(i.Kqy, {
                  gap: 16,
                  children: d.map((e) => {
                      var t;
                      let [c, a] = e,
                          d = null != (t = n[c]) ? t : a.defaultValue;
                      return (0, r.jsxs)(
                          i.gNt,
                          {
                              label: "boolean" === a.type ? void 0 : a.label,
                              children: [
                                  "select" === a.type &&
                                      null != a.options &&
                                      (0, r.jsx)(o.q4, {
                                          value: d,
                                          onChange: (e) => u(c, e),
                                          options: a.options,
                                      }),
                                  "boolean" === a.type &&
                                      (0, r.jsx)(s.Checkbox, {
                                          checked: d,
                                          onChange: (e) => u(c, e),
                                          label: a.label,
                                      }),
                                  "text" === a.type &&
                                      (0, r.jsx)(l.o, {
                                          value: d,
                                          onChange: (e) => u(c, e),
                                      }),
                                  "number" === a.type &&
                                      (0, r.jsx)(l.o, {
                                          type: "number",
                                          value: String(d),
                                          min: a.minValue,
                                          onChange: (e) => u(c, Number(e)),
                                      }),
                              ],
                          },
                          c,
                      );
                  }),
              }),
          });
}
