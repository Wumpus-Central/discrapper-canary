n.d(e, { Z: () => d });
var l = n(200651);
n(192379);
var r = n(442837),
    i = n(481060),
    o = n(357156),
    c = n(924301),
    a = n(554747),
    u = n(981631),
    s = n(388032);
function d(t, e, d) {
    var g;
    let { canManageGuildEvent: f } = (0, o.XJ)(null != d ? d : e),
        b = (0, r.e7)([c.ZP], () => c.ZP.getGuildScheduledEvent(t), [t]),
        p = f(b),
        v = null != (0, a.qY)(null != (g = null == d ? void 0 : d.id) ? g : u.lds),
        h = null != b && (0, c.xt)(b);
    return !p || h || v
        ? null
        : (0, l.jsx)(i.sNh, {
              id: s.intl.string(s.t.cK1GGR),
              label: s.intl.string(s.t.cK1GGR),
              action: function () {
                  null != b &&
                      (0, i.ZDy)(async () => {
                          let { default: t } = await Promise.all([n.e('84722'), n.e('27388')]).then(n.bind(n, 296864));
                          return (e) => {
                              var n, r;
                              return (0, l.jsx)(
                                  t,
                                  ((n = (function (t) {
                                      for (var e = 1; e < arguments.length; e++) {
                                          var n = null != arguments[e] ? arguments[e] : {},
                                              l = Object.keys(n);
                                          'function' == typeof Object.getOwnPropertySymbols &&
                                              (l = l.concat(
                                                  Object.getOwnPropertySymbols(n).filter(function (t) {
                                                      return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                                  })
                                              )),
                                              l.forEach(function (e) {
                                                  var l;
                                                  (l = n[e]),
                                                      e in t
                                                          ? Object.defineProperty(t, e, {
                                                                value: l,
                                                                enumerable: !0,
                                                                configurable: !0,
                                                                writable: !0
                                                            })
                                                          : (t[e] = l);
                                              });
                                      }
                                      return t;
                                  })({}, e)),
                                  (r = r = { event: b }),
                                  Object.getOwnPropertyDescriptors
                                      ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                                      : (function (t, e) {
                                            var n = Object.keys(t);
                                            if (Object.getOwnPropertySymbols) {
                                                var l = Object.getOwnPropertySymbols(t);
                                                n.push.apply(n, l);
                                            }
                                            return n;
                                        })(Object(r)).forEach(function (t) {
                                            Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(r, t));
                                        }),
                                  n)
                              );
                          };
                      });
              }
          });
}
