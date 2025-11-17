n.d(t, { Z: () => s });
var l = n(54381);
n(473749);
var r = n(442837),
    i = n(481060),
    a = n(601964),
    o = n(430824),
    u = n(594174),
    c = n(388032);
function s(e, t) {
    let s = (0, r.e7)([u.default], () => u.default.getCurrentUser()),
        d = (0, r.e7)([o.Z], () => o.Z.getGuild(t));
    return null == d || null == s || e.id === d.ownerId || e.bot || !(0, a.yn)(d, s)
        ? null
        : (0, l.jsx)(i.sNh, {
              id: "transfer-ownership",
              color: "danger",
              label: c.intl.string(c.t.Z5s7PM),
              action: () =>
                  (0, i.ZDy)(async () => {
                      let { default: t } = await n.e("95055").then(n.bind(n, 372355));
                      return (n) => {
                          var r, i;
                          return (0, l.jsx)(
                              t,
                              ((r = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {},
                                          l = Object.keys(n);
                                      "function" == typeof Object.getOwnPropertySymbols &&
                                          (l = l.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                              }),
                                          )),
                                          l.forEach(function (t) {
                                              var l;
                                              (l = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: l,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0,
                                                        })
                                                      : (e[t] = l);
                                          });
                                  }
                                  return e;
                              })({}, n)),
                              (i = i =
                                  {
                                      guild: d,
                                      fromUser: s,
                                      toUser: e,
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var l = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, l);
                                        }
                                        return n;
                                    })(Object(i)).forEach(function (e) {
                                        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e));
                                    }),
                              r),
                          );
                      };
                  }),
          });
}
