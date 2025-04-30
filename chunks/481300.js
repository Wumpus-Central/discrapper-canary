n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var r = n(481060),
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
        ? (0, i.jsx)(
              r.sNh,
              {
                  id: 'report-image-false-positive',
                  label: a.intl.string(a.t.ZH7P2t),
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
