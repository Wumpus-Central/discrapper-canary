n.d(t, { Z: () => s });
var i = n(255367);
n(73800);
var r = n(481060),
    l = n(991621),
    a = n(629710),
    o = n(388032);
function s(e, t) {
    let s = (0, a.rb)(e),
        c =
            null != t &&
            (0, a.g4)(
                {
                    type: l.l.GenericMedia,
                    media: t
                },
                s
            );
    return null != t && c
        ? (0, i.jsx)(
              r.sNh,
              {
                  id: 'report-image-false-positive',
                  label: o.intl.string(o.t.ZH7P2t),
                  action: () => {
                      (0, r.ZDy)(async () => {
                          let { default: r } = await n(788679);
                          return (n) =>
                              (0, i.jsx)(
                                  r,
                                  (function (e) {
                                      for (var t = 1; t < arguments.length; t++) {
                                          var n = null != arguments[t] ? arguments[t] : {},
                                              i = Object.keys(n);
                                          'function' == typeof Object.getOwnPropertySymbols &&
                                              (i = i.concat(
                                                  Object.getOwnPropertySymbols(n).filter(function (e) {
                                                      return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                  })
                                              )),
                                              i.forEach(function (t) {
                                                  var i;
                                                  (i = n[t]),
                                                      t in e
                                                          ? Object.defineProperty(e, t, {
                                                                value: i,
                                                                enumerable: !0,
                                                                configurable: !0,
                                                                writable: !0
                                                            })
                                                          : (e[t] = i);
                                              });
                                      }
                                      return e;
                                  })(
                                      {
                                          channelId: e.channel_id,
                                          messageId: e.id,
                                          mediaItemUrl: t.url
                                      },
                                      n
                                  )
                              );
                      });
                  },
                  icon: r.fFY
              },
              'report-image-false-positive'
          )
        : null;
}
