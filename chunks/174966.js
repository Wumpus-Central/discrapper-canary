n.d(e, { A: () => d });
var l = n(627968);
n(64700);
var r = n(311907),
    i = n(397927),
    u = n(931991),
    o = n(698441),
    a = n(508654),
    c = n(652215),
    s = n(985018);
function d(t, e, d) {
    var g;
    let { canManageGuildEvent: y } = (0, u.nr)(null != d ? d : e),
        f = (0, r.bG)([o.Ay], () => o.Ay.getGuildScheduledEvent(t), [t]),
        b = y(f),
        p = null != (0, a.Qs)(null != (g = null == d ? void 0 : d.id) ? g : c.dJq),
        A = null != f && (0, o.Fd)(f);
    return !b || A || p
        ? null
        : (0, l.jsx)(i.Drp, {
              id: s.intl.string(s.t.cK1GGY),
              label: s.intl.string(s.t.cK1GGY),
              action: function () {
                  null != f &&
                      (0, i.mMO)(async () => {
                          let { default: t } = await Promise.all([n.e("77223"), n.e("5784")]).then(n.bind(n, 199226));
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
                                  (r = r = { event: f }),
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
