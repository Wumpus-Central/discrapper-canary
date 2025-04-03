n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var l = n(442837),
    i = n(481060),
    a = n(430824),
    o = n(594174),
    u = n(388032);
function c(e, t) {
    let c = (0, l.e7)([o.default], () => o.default.getCurrentUser()),
        s = (0, l.e7)([a.Z], () => a.Z.getGuild(t));
    return null == s || null == c || e.id === s.ownerId || e.bot || !s.isOwnerWithRequiredMfaLevel(c)
        ? null
        : (0, r.jsx)(i.sNh, {
              id: 'transfer-ownership',
              color: 'danger',
              label: u.NW.string(u.t.Z5s7PD),
              action: () =>
                  (0, i.ZDy)(async () => {
                      let { default: t } = await n.e('8653').then(n.bind(n, 928090));
                      return (n) => {
                          var l, i;
                          return (0, r.jsx)(
                              t,
                              ((l = (function (e) {
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
                              })({}, n)),
                              (i = i =
                                  {
                                      guild: s,
                                      fromUser: c,
                                      toUser: e
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, r);
                                        }
                                        return n;
                                    })(Object(i)).forEach(function (e) {
                                        Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e));
                                    }),
                              l)
                          );
                      };
                  })
          });
}
