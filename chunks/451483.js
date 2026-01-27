n.d(t, {
    A: () => d,
}),
    n(747238);
var r = n(627968),
    i = n(64700),
    l = n(397927),
    a = n(517905),
    s = n(763754),
    o = n(888675),
    c = n(985018);

function u(e) {
    let { children: t, messageReference: n, guildName: s } = e,
        o = i.useRef(null);
    if (null == n)
        return (0, r.jsx)(l.MzZ, {
            children: t,
        });
    let { guild_id: c } = n;
    return null == c
        ? (0, r.jsx)(l.MzZ, {
              children: t,
          })
        : (0, r.jsx)(a.A, {
              guildId: c,
              name: s,
              targetElementRef: o,
              children: (e) => {
                  var n, i;
                  let { "aria-controls": a, "aria-expanded": s } = e,
                      c = (function (e, t) {
                          if (null == e) return {};
                          var n,
                              r,
                              i,
                              l = {};
                          if ("u" > typeof Reflect && Reflect.ownKeys) {
                              for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
                                  (r = n[i]),
                                      !(t.indexOf(r) >= 0) &&
                                          Object.prototype.propertyIsEnumerable.call(e, r) &&
                                          (l[r] = e[r]);
                              return l;
                          }
                          if (
                              ((l = (function (e, t) {
                                  if (null == e) return {};
                                  var n,
                                      r,
                                      i = {},
                                      l = Object.getOwnPropertyNames(e);
                                  for (r = 0; r < l.length; r++)
                                      (n = l[r]),
                                          !(t.indexOf(n) >= 0) &&
                                              Object.prototype.propertyIsEnumerable.call(e, n) &&
                                              (i[n] = e[n]);
                                  return i;
                              })(e, t)),
                              Object.getOwnPropertySymbols)
                          )
                              for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                                  (r = n[i]),
                                      !(t.indexOf(r) >= 0) &&
                                          Object.prototype.propertyIsEnumerable.call(e, r) &&
                                          (l[r] = e[r]);
                          return l;
                      })(e, ["aria-controls", "aria-expanded"]);
                  return (0, r.jsx)(
                      l.MzZ,
                      ((n = (function (e) {
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
                      })({}, c)),
                      (i = i =
                          {
                              ref: o,
                              children: t,
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
                      n),
                  );
              },
          });
}

function d(e) {
    let { usernameHook: t, message: i, compact: l } = e,
        { content: a, timestamp: d, messageReference: p } = i,
        m = (0, s.Ay)(i),
        f = t(m),
        g = (null != a ? a : "").split(" ").slice(0, -1).join(" "),
        h = c.intl.format(c.t["47CZc2"], {
            username: m.nick,
            usernameHook: f,
            webhookName: a,
            webhookNameHook: (e, t) =>
                (0, r.jsx)(
                    u,
                    {
                        messageReference: p,
                        guildName: g,
                        children: e,
                    },
                    t,
                ),
        });
    return (0, r.jsx)(o.A, {
        icon: n(394803),
        timestamp: d,
        compact: l,
        children: h,
    });
}
