n.d(t, {
    A: () => c,
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(930125),
    a = n(282108),
    o = n(985018);

function c(e, t) {
    let c = (0, a.Fg)(e),
        s =
            null != t &&
            (0, a.qo)(
                {
                    type: l.D.GenericMedia,
                    media: t,
                },
                c,
            );
    return null != t && s
        ? (0, r.jsx)(
              i.Drp,
              {
                  id: "report-image-false-positive",
                  label: o.intl.string(o.t.ZH7P2h),
                  action: () => {
                      (0, i.mMO)(async () => {
                          let { default: i } = await n(652442);
                          return (n) =>
                              (0, r.jsx)(
                                  i,
                                  (function (e) {
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
                                  })(
                                      {
                                          channelId: e.channel_id,
                                          messageId: e.id,
                                          mediaItemUrl: t.url,
                                      },
                                      n,
                                  ),
                              );
                      });
                  },
                  leadingAccessory: {
                      type: "icon",
                      icon: i.DAq,
                  },
                  icon: i.DAq,
              },
              "report-image-false-positive",
          )
        : null;
}
