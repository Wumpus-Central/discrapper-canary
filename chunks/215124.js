n.d(t, { Z: () => g });
var r = n(54381);
n(473749);
var i = n(399606),
    l = n(481060),
    a = n(674180),
    s = n(267101),
    o = n(430824),
    c = n(584825),
    d = n(198139),
    u = n(388032);
function g(e) {
    let { guildId: t, allPeriods: g } = e,
        m = (0, i.e7)([o.Z], () => o.Z.getGuild(t)),
        p = (0, c.qi)(t, { includeSoftDeleted: !0 }),
        f = (0, s.ue)(t, { publishedOnly: !1 }),
        { allowSelfRemoveMonetization: h } = (0, a.gX)(t),
        b = g.filter((e) => {
            var t;
            let n = Object.values(null != (t = e.ppgs) ? t : {})[0];
            return (
                (null == n ? void 0 : n.status) === d.x_.OPEN ||
                (null == n ? void 0 : n.status) === d.x_.PAYOUT_DEFERRED
            );
        }),
        x = p.length > 0,
        j = f.length > 0,
        _ = b.length > 0;
    return null == m
        ? null
        : (0, r.jsxs)("div", {
              children: [
                  (0, r.jsx)(l.Text, {
                      variant: "text-sm/normal",
                      children: u.intl.format(u.t.fvOn6J, { guildName: m.name }),
                  }),
                  (0, r.jsx)(l.LZC, { size: 16 }),
                  (0, r.jsx)(l.Button, {
                      variant: "critical-primary",
                      text: u.intl.string(u.t.FrOFSo),
                      disabled: !h || x || j || _,
                      onClick: () => {
                          (0, l.ZDy)(async () => {
                              let { default: e } = await n.e("35282").then(n.bind(n, 157429));
                              return (t) => {
                                  var n, i;
                                  return (0, r.jsx)(
                                      e,
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
                                      })({}, t)),
                                      (i = i = { guild: m }),
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
                              };
                          });
                      },
                  }),
              ],
          });
}
