n.d(t, { Z: () => m });
var r = n(200651);
n(192379);
var i = n(442837),
    a = n(481060),
    l = n(955415),
    o = n(846587),
    s = n(409059),
    c = n(58346),
    u = n(388032),
    d = n(606966),
    p = n(273254);
function m(e) {
    var t;
    let { code: m } = e,
        f = (0, i.e7)([s.Z], () => s.Z.getGuildTemplate(m));
    if (null == f || f.state === c.Rj.RESOLVING)
        return (0, r.jsxs)(l.Z, {
            children: [(0, r.jsx)(l.Z.Header, { text: u.NW.string(u.t.Xj87YW) }), (0, r.jsx)(l.Z.Body, { resolving: !0 })]
        });
    if (f.state === c.Rj.EXPIRED)
        return (0, r.jsxs)(l.Z, {
            children: [
                (0, r.jsx)(l.Z.Header, { text: u.NW.string(u.t.C7ZRNz) }),
                (0, r.jsxs)(l.Z.Body, {
                    children: [
                        (0, r.jsx)(l.Z.Icon, { expired: !0 }),
                        (0, r.jsx)(l.Z.Info, {
                            expired: !0,
                            title: u.NW.string(u.t.A6MwXF)
                        })
                    ]
                })
            ]
        });
    let h = __OVERLAY__
        ? (0, r.jsx)(l.Z.Button, {
              isDisabled: !0,
              color: l.Z.Button.Colors.PRIMARY,
              children: u.NW.string(u.t.W7NTWl)
          })
        : (0, r.jsx)(l.Z.Button, {
              onClick: () => {
                  (0, a.ZDy)(async () => {
                      let { default: e } = await Promise.all([n.e('10778'), n.e('44044')]).then(n.bind(n, 766775));
                      return (t) => {
                          var n, i;
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
                              (i = i = { guildTemplate: f }),
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
                      };
                  });
              },
              submitting: f.state === c.Rj.ACCEPTING,
              color: l.Z.Button.Colors.GREEN,
              children: u.NW.string(u.t['a3Gl+f'])
          });
    return (0, r.jsxs)(l.Z, {
        children: [
            (0, r.jsx)(l.Z.Header, { text: u.NW.string(u.t.kAvFkJ) }),
            (0, r.jsxs)(l.Z.Body, {
                children: [
                    (0, r.jsxs)('div', {
                        className: p.headerLine,
                        children: [
                            (0, r.jsx)(o.Z, { className: d.icon }),
                            (0, r.jsx)(l.Z.Info, {
                                title: f.name,
                                children: u.NW.format(u.t.cGXXHB, { usageCount: String(null != (t = f.usageCount) ? t : 0) })
                            })
                        ]
                    }),
                    h
                ]
            })
        ]
    });
}
