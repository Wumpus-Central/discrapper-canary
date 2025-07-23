(n.d(t, { Z: () => d }), n(35282));
var r = n(255367),
    i = n(73800),
    l = n(481060),
    a = n(857395),
    o = n(739566),
    s = n(834129),
    c = n(388032);
function u(e) {
    let { children: t, messageReference: n, guildName: o } = e,
        s = i.useRef(null);
    if (null == n) return (0, r.jsx)(l.eee, { children: t });
    let { guild_id: c } = n;
    return null == c
        ? (0, r.jsx)(l.eee, { children: t })
        : (0, r.jsx)(a.Z, {
              guildId: c,
              name: o,
              targetElementRef: s,
              children: (e) => {
                  var n, i;
                  let { 'aria-controls': a, 'aria-expanded': o } = e,
                      c = (function (e, t) {
                          if (null == e) return {};
                          var n,
                              r,
                              i = (function (e, t) {
                                  if (null == e) return {};
                                  var n,
                                      r,
                                      i = {},
                                      l = Object.keys(e);
                                  for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                                  return i;
                              })(e, t);
                          if (Object.getOwnPropertySymbols) {
                              var l = Object.getOwnPropertySymbols(e);
                              for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
                          }
                          return i;
                      })(e, ['aria-controls', 'aria-expanded']);
                  return (0, r.jsx)(
                      l.eee,
                      ((n = (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = null != arguments[t] ? arguments[t] : {},
                                  r = Object.keys(n);
                              ('function' == typeof Object.getOwnPropertySymbols &&
                                  (r = r.concat(
                                      Object.getOwnPropertySymbols(n).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                      })
                                  )),
                                  r.forEach(function (t) {
                                      var r;
                                      ((r = n[t]),
                                          t in e
                                              ? Object.defineProperty(e, t, {
                                                    value: r,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0
                                                })
                                              : (e[t] = r));
                                  }));
                          }
                          return e;
                      })({}, c)),
                      (i = i =
                          {
                              ref: s,
                              children: t
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                          : (function (e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, r);
                                }
                                return n;
                            })(Object(i)).forEach(function (e) {
                                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                            }),
                      n)
                  );
              }
          });
}
function d(e) {
    let { usernameHook: t, message: i, compact: l } = e,
        { content: a, timestamp: d, messageReference: p } = i,
        m = (0, o.ZP)(i),
        f = t(m),
        h = (null != a ? a : '').split(' ').slice(0, -1).join(' '),
        g = c.intl.format(c.t['47CZc3'], {
            username: m.nick,
            usernameHook: f,
            webhookName: a,
            webhookNameHook: (e, t) =>
                (0, r.jsx)(
                    u,
                    {
                        messageReference: p,
                        guildName: h,
                        children: e
                    },
                    t
                )
        });
    return (0, r.jsx)(s.Z, {
        icon: n(570111),
        timestamp: d,
        compact: l,
        children: g
    });
}
