n.d(e, { Z: () => d });
var l = n(54381);
n(473749);
var r = n(442837),
    i = n(481060),
    u = n(357156),
    o = n(924301),
    c = n(554747),
    a = n(981631),
    s = n(388032);
function d(t, e, d) {
    var g;
    let { canManageGuildEvent: f } = (0, u.XJ)(null != d ? d : e),
        b = (0, r.e7)([o.ZP], () => o.ZP.getGuildScheduledEvent(t), [t]),
        v = f(b),
        E = null != (0, c.qY)(null != (g = null == d ? void 0 : d.id) ? g : a.lds),
        p = null != b && (0, o.xt)(b);
    return !v || p || E
        ? null
        : (0, l.jsx)(i.sNh, {
              id: s.intl.string(s.t.cK1GGY),
              label: s.intl.string(s.t.cK1GGY),
              action: function () {
                  null != b &&
                      (0, i.ZDy)(async () => {
                          let { default: t } = await Promise.all([n.e("84722"), n.e("48221")]).then(n.bind(n, 296864));
                          return (e) => {
                              var n, r;
                              return (0, l.jsx)(
                                  t,
                                  ((n = (function (t) {
                                      for (var e = 1; e < arguments.length; e++) {
                                          var n = null != arguments[e] ? arguments[e] : {},
                                              l = Object.keys(n);
                                          "function" == typeof Object.getOwnPropertySymbols &&
                                              (l = l.concat(
                                                  Object.getOwnPropertySymbols(n).filter(function (t) {
                                                      return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                                  }),
                                              )),
                                              l.forEach(function (e) {
                                                  var l;
                                                  (l = n[e]),
                                                      e in t
                                                          ? Object.defineProperty(t, e, {
                                                                value: l,
                                                                enumerable: !0,
                                                                configurable: !0,
                                                                writable: !0,
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
                                  n),
                              );
                          };
                      });
              },
          });
}
