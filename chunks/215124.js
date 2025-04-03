n.d(t, { Z: () => m });
var r = n(200651);
n(192379);
var i = n(399606),
    s = n(481060),
    a = n(674180),
    l = n(267101),
    o = n(430824),
    c = n(584825),
    d = n(198139),
    u = n(388032);
function m(e) {
    let { guildId: t, allPeriods: m } = e,
        g = (0, i.e7)([o.Z], () => o.Z.getGuild(t)),
        p = (0, c.qi)(t, { includeSoftDeleted: !0 }),
        h = (0, l.ue)(t, { publishedOnly: !1 }),
        { allowSelfRemoveMonetization: f } = (0, a.gX)(t),
        b = m.filter((e) => {
            var t;
            let n = Object.values(null != (t = e.ppgs) ? t : {})[0];
            return (null == n ? void 0 : n.status) === d.x_.OPEN || (null == n ? void 0 : n.status) === d.x_.PAYOUT_DEFERRED;
        }),
        x = p.length > 0,
        j = h.length > 0,
        N = b.length > 0;
    return null == g
        ? null
        : (0, r.jsxs)('div', {
              children: [
                  (0, r.jsx)(s.R94, {
                      type: s.R94.Types.DESCRIPTION,
                      children: u.NW.format(u.t.fvOn6O, { guildName: g.toString() })
                  }),
                  (0, r.jsx)(s.LZC, { size: 16 }),
                  (0, r.jsx)(s.zxk, {
                      disabled: !f || x || j || N,
                      look: s.zxk.Looks.FILLED,
                      color: s.zxk.Colors.RED,
                      onClick: () => {
                          (0, s.ZDy)(async () => {
                              let { default: e } = await n.e('35282').then(n.bind(n, 157429));
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
                                      (i = i = { guild: g }),
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
                      children: u.NW.string(u.t.FrOFSk)
                  })
              ]
          });
}
