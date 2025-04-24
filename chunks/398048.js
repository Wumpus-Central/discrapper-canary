n.d(t, { Z: () => s });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    o = n(496675),
    c = n(981631),
    a = n(388032);
function s(e, t) {
    let s = (0, i.e7)([o.Z], () => o.Z.can(c.Plq.MANAGE_CHANNELS, e), [e]);
    return __OVERLAY__ || !s
        ? null
        : (0, r.jsx)(l.sNh, {
              id: 'clone-channel',
              label: a.intl.string(a.t.dEaPc3),
              action: () =>
                  (0, l.ZDy)(async () => {
                      let { default: i } = await Promise.all([n.e('7590'), n.e('45094'), n.e('7911')]).then(n.bind(n, 218613));
                      return (n) => {
                          var l, o;
                          return (0, r.jsx)(
                              i,
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
                              (o = o =
                                  {
                                      channelType: e.type,
                                      guildId: t.id,
                                      categoryId: e.parent_id,
                                      cloneChannelId: e.id
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, r);
                                        }
                                        return n;
                                    })(Object(o)).forEach(function (e) {
                                        Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(o, e));
                                    }),
                              l)
                          );
                      };
                  })
          });
}
