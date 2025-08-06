n.d(t, { a: () => u }), n(388685);
var r = n(255367);
n(73800);
var i = n(481060),
    o = n(142489);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function s(e) {
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
                a(e, t, n[t]);
            });
    }
    return e;
}
function l(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
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
    let { controls: t, props: n, onPropsChange: a } = e,
        l = (e, t) => {
            a(c(s({}, n), { [e]: t }));
        },
        u = Object.entries(t);
    return 0 === u.length
        ? null
        : (0, r.jsx)("div", {
              className: o.controlsSection,
              children: (0, r.jsx)(i.Kqy, {
                  gap: 16,
                  children: u.map((e) => {
                      var t;
                      let [o, a] = e,
                          s = null != (t = n[o]) ? t : a.defaultValue;
                      return (0, r.jsxs)(
                          i.xJW,
                          {
                              title: "boolean" === a.type ? void 0 : a.label,
                              children: [
                                  "select" === a.type &&
                                      null != a.options &&
                                      (0, r.jsx)(i.q4e, {
                                          value: s,
                                          onChange: (e) => l(o, e),
                                          options: a.options,
                                      }),
                                  "boolean" === a.type &&
                                      (0, r.jsx)(i.XZJ, {
                                          value: s,
                                          onChange: (e, t) => l(o, t),
                                          children: (0, r.jsx)(i.Text, {
                                              variant: "text-md/medium",
                                              children: a.label,
                                          }),
                                      }),
                                  "text" === a.type &&
                                      (0, r.jsx)(i.oil, {
                                          value: s,
                                          onChange: (e) => l(o, e),
                                      }),
                                  "number" === a.type &&
                                      (0, r.jsx)(i.oil, {
                                          type: "number",
                                          value: String(s),
                                          onChange: (e) => l(o, Number(e)),
                                      }),
                              ],
                          },
                          o,
                      );
                  }),
              }),
          });
}
