n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var c = n(442837),
    o = n(481060),
    l = n(496675),
    a = n(981631),
    i = n(388032);
function u(e, t) {
    let u = (0, c.e7)([l.Z], () => l.Z.can(a.Plq.MANAGE_CHANNELS, e), [e]);
    return __OVERLAY__ || !u
        ? null
        : (0, r.jsx)(o.sNh, {
              id: 'clone-channel',
              label: i.NW.string(i.t.dEaPc3),
              action: () =>
                  (0, o.ZDy)(async () => {
                      let { default: c } = await Promise.all([n.e('7590'), n.e('45094'), n.e('7911')]).then(n.bind(n, 218613));
                      return (n) => {
                          var o, l;
                          return (0, r.jsx)(
                              c,
                              ((o = (function (e) {
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
                              (l = l =
                                  {
                                      channelType: e.type,
                                      guildId: t.id,
                                      categoryId: e.parent_id,
                                      cloneChannelId: e.id
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(l))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, r);
                                        }
                                        return n;
                                    })(Object(l)).forEach(function (e) {
                                        Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(l, e));
                                    }),
                              o)
                          );
                      };
                  })
          });
}
