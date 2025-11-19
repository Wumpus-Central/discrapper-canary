t.d(n, { Z: () => u });
var r = t(54381);
t(473749);
var i = t(442837),
    l = t(481060),
    o = t(496675),
    c = t(981631),
    a = t(388032);
function u(e, n) {
    let u = (0, i.e7)([o.Z], () => o.Z.can(c.Plq.MANAGE_CHANNELS, e), [e]);
    return __OVERLAY__ || !u
        ? null
        : (0, r.jsx)(l.sNh, {
              id: "clone-channel",
              label: a.intl.string(a.t.dEaPc4),
              action: () =>
                  (0, l.ZDy)(async () => {
                      let { default: i } = await Promise.all([t.e("33285"), t.e("29497"), t.e("75139")]).then(
                          t.bind(t, 241865),
                      );
                      return (t) => {
                          var l, o;
                          return (0, r.jsx)(
                              i,
                              ((l = (function (e) {
                                  for (var n = 1; n < arguments.length; n++) {
                                      var t = null != arguments[n] ? arguments[n] : {},
                                          r = Object.keys(t);
                                      "function" == typeof Object.getOwnPropertySymbols &&
                                          (r = r.concat(
                                              Object.getOwnPropertySymbols(t).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                              }),
                                          )),
                                          r.forEach(function (n) {
                                              var r;
                                              (r = t[n]),
                                                  n in e
                                                      ? Object.defineProperty(e, n, {
                                                            value: r,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0,
                                                        })
                                                      : (e[n] = r);
                                          });
                                  }
                                  return e;
                              })({}, t)),
                              (o = o =
                                  {
                                      channelType: e.type,
                                      guildId: n.id,
                                      categoryId: e.parent_id,
                                      cloneChannelId: e.id,
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o))
                                  : (function (e, n) {
                                        var t = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            t.push.apply(t, r);
                                        }
                                        return t;
                                    })(Object(o)).forEach(function (e) {
                                        Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(o, e));
                                    }),
                              l),
                          );
                      };
                  }),
          });
}
