n.d(t, { Z: () => u }), n(35282);
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(857395),
    a = n(739566),
    o = n(834129),
    s = n(388032);
function c(e) {
    let { children: t, messageReference: n, guildName: a } = e;
    if (null == n) return (0, r.jsx)(i.eee, { children: t });
    let { guild_id: o } = n;
    return null == o
        ? (0, r.jsx)(i.eee, { children: t })
        : (0, r.jsx)(l.Z, {
              guildId: o,
              name: a,
              children: (e) => {
                  var n, l;
                  let { 'aria-controls': a, 'aria-expanded': o } = e,
                      s = (function (e, t) {
                          if (null == e) return {};
                          var n,
                              r,
                              i = (function (e, t) {
                                  if (null == e) return {};
                                  var n,
                                      r,
                                      i = {},
                                      l = Object.keys(e);
                                  for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                  return i;
                              })(e, t);
                          if (Object.getOwnPropertySymbols) {
                              var l = Object.getOwnPropertySymbols(e);
                              for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                          }
                          return i;
                      })(e, ['aria-controls', 'aria-expanded']);
                  return (0, r.jsx)(
                      i.eee,
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
                      })({}, s)),
                      (l = l = { children: t }),
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
              }
          });
}
function u(e) {
    let { usernameHook: t, message: i, compact: l } = e,
        { content: u, timestamp: d, messageReference: p } = i,
        m = (0, a.ZP)(i),
        f = t(m),
        h = (null != u ? u : '').split(' ').slice(0, -1).join(' '),
        g = s.intl.format(s.t['47CZc3'], {
            username: m.nick,
            usernameHook: f,
            webhookName: u,
            webhookNameHook: (e, t) =>
                (0, r.jsx)(
                    c,
                    {
                        messageReference: p,
                        guildName: h,
                        children: e
                    },
                    t
                )
        });
    return (0, r.jsx)(o.Z, {
        icon: n(570111),
        timestamp: d,
        compact: l,
        children: g
    });
}
