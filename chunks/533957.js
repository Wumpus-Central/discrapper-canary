n.d(t, {
    A: () => u,
});
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    a = n(576705),
    c = n(652215),
    o = n(985018);

function u(e, t) {
    let u = (0, i.bG)([a.A], () => a.A.can(c.xBc.MANAGE_CHANNELS, e), [e]);
    return __OVERLAY__ || !u
        ? null
        : (0, r.jsx)(l.Drp, {
              id: "clone-channel",
              label: o.intl.string(o.t.dEaPc4),
              action: () =>
                  (0, l.mMO)(async () => {
                      let { default: i } = await Promise.all([n.e("72271"), n.e("64233"), n.e("7211")]).then(
                          n.bind(n, 409200),
                      );
                      return (n) => {
                          var l, a;
                          return (0, r.jsx)(
                              i,
                              ((l = (function (e) {
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
                              })({}, n)),
                              (a = a =
                                  {
                                      channelType: e.type,
                                      guildId: t.id,
                                      categoryId: e.parent_id,
                                      cloneChannelId: e.id,
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, r);
                                        }
                                        return n;
                                    })(Object(a)).forEach(function (e) {
                                        Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e));
                                    }),
                              l),
                          );
                      };
                  }),
          });
}
