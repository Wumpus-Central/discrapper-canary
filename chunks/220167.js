n.d(t, { A: () => c });
var r = n(627968);
n(64700);
var l = n(397927),
    i = n(930125),
    o = n(282108),
    a = n(985018);
function c(e, t) {
    let c = (0, o.Fg)(e),
        s =
            null != t &&
            (0, o.qo)(
                {
                    type: i.D.GenericMedia,
                    media: t,
                },
                c,
            );
    return null != t && s
        ? (0, r.jsx)(
              l.Drp,
              {
                  id: "report-image-false-positive",
                  label: a.intl.string(a.t.ZH7P2h),
                  action: () => {
                      (0, l.mMO)(async () => {
                          let { default: l } = await n(652442);
                          return (n) =>
                              (0, r.jsx)(
                                  l,
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
                  icon: l.DAq,
              },
              "report-image-false-positive",
          )
        : null;
}
