n.d(t, { Z: () => o });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(247206),
    a = n(388032);
function o(e, t) {
    return null != t &&
        (0, l.KP)(
            {
                type: l.lJ.GenericMedia,
                media: t
            },
            (0, l.HH)(e)
        )
        ? (0, r.jsx)(
              i.sNh,
              {
                  id: 'report-image-false-positive',
                  label: a.NW.string(a.t.ZH7P2t),
                  action: () => {
                      (0, i.ZDy)(async () => {
                          let { default: i } = await n(788679);
                          return (n) =>
                              (0, r.jsx)(
                                  i,
                                  (function (e) {
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
                  icon: i.fFY
              },
              'report-image-false-positive'
          )
        : null;
}
