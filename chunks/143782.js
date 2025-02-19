n.d(t, { default: () => a });
var r = n(200651);
n(192379);
var o = n(153867),
    c = n(468026),
    l = n(933557),
    i = n(388032);
let a = (e) => {
    var { onConfirm: t, channel: n } = e,
        a = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        c = Object.keys(e);
                    for (r = 0; r < c.length; r++) (n = c[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(e);
                for (r = 0; r < c.length; r++) (n = c[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            }
            return o;
        })(e, ['onConfirm', 'channel']);
    let u = (0, l.ZP)(n);
    return null == u
        ? null
        : (0, r.jsx)(
              c.default,
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
                      confirmText: i.NW.string(i.t['cY+Ooa']),
                      secondaryConfirmText: i.NW.string(i.t['JdIQ/f']),
                      title: i.NW.string(i.t['0LZN5O']),
                      cancelText: i.NW.string(i.t['ETE/oK']),
                      onConfirm: t,
                      onConfirmSecondary: () => {
                          o.ZP.updatedUnsyncedSettings({ disableVoiceChannelChangeAlert: !0 }), t();
                      },
                      body: i.NW.format(i.t['vA+uEh'], { channel: u })
                  },
                  a
              )
          );
};
