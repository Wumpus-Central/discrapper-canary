n.d(t, { Z: () => u }), n(301563);
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(857395),
    l = n(739566),
    o = n(834129),
    s = n(388032);
function c(e) {
    let { children: t, messageReference: n, guildName: l } = e;
    if (null == n) return (0, r.jsx)(i.eee, { children: t });
    let { guild_id: o, channel_id: s, message_id: c } = n;
    return null == o
        ? (0, r.jsx)(i.eee, { children: t })
        : (0, r.jsx)(a.Z, {
              guildId: o,
              channelId: s,
              messageId: c,
              name: l,
              children: (e) => {
                  var n, a;
                  let { 'aria-controls': l, 'aria-expanded': o } = e,
                      s = (function (e, t) {
                          if (null == e) return {};
                          var n,
                              r,
                              i = (function (e, t) {
                                  if (null == e) return {};
                                  var n,
                                      r,
                                      i = {},
                                      a = Object.keys(e);
                                  for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                  return i;
                              })(e, t);
                          if (Object.getOwnPropertySymbols) {
                              var a = Object.getOwnPropertySymbols(e);
                              for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
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
                      (a = a = { children: t }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a))
                          : (function (e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, r);
                                }
                                return n;
                            })(Object(a)).forEach(function (e) {
                                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e));
                            }),
                      n)
                  );
              }
          });
}
function u(e) {
    let { usernameHook: t, message: i, compact: a } = e,
        { content: u, timestamp: d, messageReference: p } = i,
        m = (0, l.ZP)(i),
        f = t(m),
        h = (null != u ? u : '').split(' ').slice(0, -1).join(' '),
        g = s.NW.format(s.t['47CZc3'], {
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
        compact: a,
        children: g
    });
}
