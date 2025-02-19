n.d(t, { Z: () => m });
var r = n(200651);
n(192379);
var i = n(442837),
    a = n(481060),
    o = n(955415),
    l = n(846587),
    s = n(409059),
    c = n(58346),
    d = n(388032),
    u = n(763438),
    p = n(217480);
function m(e) {
    var t;
    let { code: m } = e,
        f = (0, i.e7)([s.Z], () => s.Z.getGuildTemplate(m));
    if (null == f || f.state === c.Rj.RESOLVING)
        return (0, r.jsxs)(o.Z, {
            children: [(0, r.jsx)(o.Z.Header, { text: d.NW.string(d.t.Xj87YW) }), (0, r.jsx)(o.Z.Body, { resolving: !0 })]
        });
    if (f.state === c.Rj.EXPIRED)
        return (0, r.jsxs)(o.Z, {
            children: [
                (0, r.jsx)(o.Z.Header, { text: d.NW.string(d.t.C7ZRNz) }),
                (0, r.jsxs)(o.Z.Body, {
                    children: [
                        (0, r.jsx)(o.Z.Icon, { expired: !0 }),
                        (0, r.jsx)(o.Z.Info, {
                            expired: !0,
                            title: d.NW.string(d.t.A6MwXF)
                        })
                    ]
                })
            ]
        });
    let h = __OVERLAY__
        ? (0, r.jsx)(o.Z.Button, {
              isDisabled: !0,
              color: o.Z.Button.Colors.PRIMARY,
              children: d.NW.string(d.t.W7NTWl)
          })
        : (0, r.jsx)(o.Z.Button, {
              onClick: () => {
                  (0, a.ZDy)(async () => {
                      let { default: e } = await Promise.all([n.e('10778'), n.e('82195')]).then(n.bind(n, 766775));
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
              color: o.Z.Button.Colors.GREEN,
              children: d.NW.string(d.t['a3Gl+f'])
          });
    return (0, r.jsxs)(o.Z, {
        children: [
            (0, r.jsx)(o.Z.Header, { text: d.NW.string(d.t.kAvFkJ) }),
            (0, r.jsxs)(o.Z.Body, {
                children: [
                    (0, r.jsxs)('div', {
                        className: p.headerLine,
                        children: [
                            (0, r.jsx)(l.Z, { className: u.icon }),
                            (0, r.jsx)(o.Z.Info, {
                                title: f.name,
                                children: d.NW.format(d.t.cGXXHB, { usageCount: String(null !== (t = f.usageCount) && void 0 !== t ? t : 0) })
                            })
                        ]
                    }),
                    h
                ]
            })
        ]
    });
}
