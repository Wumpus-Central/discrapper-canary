n.d(t, {
    A: () => s,
});
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    c = n(576705),
    a = n(652215),
    o = n(985018);

function s(e, t) {
    let s = (0, i.bG)([c.A], () => c.A.can(a.xBc.MANAGE_CHANNELS, e), [e]);
    return __OVERLAY__ || !s
        ? null
        : (0, r.jsx)(l.Drp, {
              id: "clone-channel",
              label: o.intl.string(o.t.dEaPc4),
              action: () =>
                  (0, l.mMO)(async () => {
                      let { default: i } = await Promise.all([n.e("72271"), n.e("64233"), n.e("29592")]).then(
                          n.bind(n, 409200),
                      );
                      return (n) => {
                          var l, c;
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
                              (c = c =
                                  {
                                      channelType: e.type,
                                      guildId: t.id,
                                      categoryId: e.parent_id,
                                      cloneChannelId: e.id,
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(c))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, r);
                                        }
                                        return n;
                                    })(Object(c)).forEach(function (e) {
                                        Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(c, e));
                                    }),
                              l),
                          );
                      };
                  }),
          });
}
