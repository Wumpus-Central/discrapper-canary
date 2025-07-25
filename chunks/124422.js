e.d(n, { Z: () => d });
var l = e(255367);
e(73800);
var i = e(442837),
    r = e(481060),
    o = e(357156),
    a = e(924301),
    c = e(554747),
    u = e(981631),
    s = e(388032);
function d(t, n, d) {
    var g;
    let { canManageGuildEvent: f } = (0, o.XJ)(null != d ? d : n),
        b = (0, i.e7)([a.ZP], () => a.ZP.getGuildScheduledEvent(t), [t]),
        p = f(b),
        v = null != (0, c.qY)(null != (g = null == d ? void 0 : d.id) ? g : u.lds),
        h = null != b && (0, a.xt)(b);
    return !p || h || v
        ? null
        : (0, l.jsx)(r.sNh, {
              id: s.intl.string(s.t.cK1GGR),
              label: s.intl.string(s.t.cK1GGR),
              action: function () {
                  null != b &&
                      (0, r.ZDy)(async () => {
                          let { default: t } = await Promise.all([e.e('84722'), e.e('27388')]).then(e.bind(e, 296864));
                          return (n) => {
                              var e, i;
                              return (0, l.jsx)(
                                  t,
                                  ((e = (function (t) {
                                      for (var n = 1; n < arguments.length; n++) {
                                          var e = null != arguments[n] ? arguments[n] : {},
                                              l = Object.keys(e);
                                          ('function' == typeof Object.getOwnPropertySymbols &&
                                              (l = l.concat(
                                                  Object.getOwnPropertySymbols(e).filter(function (t) {
                                                      return Object.getOwnPropertyDescriptor(e, t).enumerable;
                                                  })
                                              )),
                                              l.forEach(function (n) {
                                                  var l;
                                                  ((l = e[n]),
                                                      n in t
                                                          ? Object.defineProperty(t, n, {
                                                                value: l,
                                                                enumerable: !0,
                                                                configurable: !0,
                                                                writable: !0
                                                            })
                                                          : (t[n] = l));
                                              }));
                                      }
                                      return t;
                                  })({}, n)),
                                  (i = i = { event: b }),
                                  Object.getOwnPropertyDescriptors
                                      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
                                      : (function (t, n) {
                                            var e = Object.keys(t);
                                            if (Object.getOwnPropertySymbols) {
                                                var l = Object.getOwnPropertySymbols(t);
                                                e.push.apply(e, l);
                                            }
                                            return e;
                                        })(Object(i)).forEach(function (t) {
                                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
                                        }),
                                  e)
                              );
                          };
                      });
              }
          });
}
