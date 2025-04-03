n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var l = n(442837),
    i = n(481060),
    o = n(357156),
    c = n(924301),
    a = n(554747),
    u = n(981631),
    s = n(388032);
function d(e, t, d) {
    var g;
    let { canManageGuildEvent: f } = (0, o.XJ)(null != d ? d : t),
        b = (0, l.e7)([c.ZP], () => c.ZP.getGuildScheduledEvent(e), [e]),
        p = f(b),
        v = null != (0, a.qY)(null != (g = null == d ? void 0 : d.id) ? g : u.lds),
        h = null != b && (0, c.xt)(b);
    return !p || h || v
        ? null
        : (0, r.jsx)(i.sNh, {
              id: s.NW.string(s.t.cK1GGR),
              label: s.NW.string(s.t.cK1GGR),
              action: function () {
                  null != b &&
                      (0, i.ZDy)(async () => {
                          let { default: e } = await Promise.all([n.e('84722'), n.e('27388')]).then(n.bind(n, 296864));
                          return (t) => {
                              var n, l;
                              return (0, r.jsx)(
                                  e,
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
                                  })({}, t)),
                                  (l = l = { event: b }),
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
                          };
                      });
              }
          });
}
