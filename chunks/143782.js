n.d(e, { default: () => a });
var r = n(200651);
n(192379);
var o = n(153867),
    l = n(468026),
    i = n(933557),
    c = n(388032);
let a = (t) => {
    var { onConfirm: e, channel: n } = t,
        a = (function (t, e) {
            if (null == t) return {};
            var n,
                r,
                o = (function (t, e) {
                    if (null == t) return {};
                    var n,
                        r,
                        o = {},
                        l = Object.keys(t);
                    for (r = 0; r < l.length; r++) (n = l[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
                    return o;
                })(t, e);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(t);
                for (r = 0; r < l.length; r++) (n = l[r]), !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
            }
            return o;
        })(t, ['onConfirm', 'channel']);
    let u = (0, i.ZP)(n);
    return null == u
        ? null
        : (0, r.jsx)(
              l.default,
              (function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                      var n = null != arguments[e] ? arguments[e] : {},
                          r = Object.keys(n);
                      'function' == typeof Object.getOwnPropertySymbols &&
                          (r = r.concat(
                              Object.getOwnPropertySymbols(n).filter(function (t) {
                                  return Object.getOwnPropertyDescriptor(n, t).enumerable;
                              })
                          )),
                          r.forEach(function (e) {
                              var r;
                              (r = n[e]),
                                  e in t
                                      ? Object.defineProperty(t, e, {
                                            value: r,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0
                                        })
                                      : (t[e] = r);
                          });
                  }
                  return t;
              })(
                  {
                      confirmText: c.intl.string(c.t['cY+Ooa']),
                      secondaryConfirmText: c.intl.string(c.t['JdIQ/f']),
                      title: c.intl.string(c.t['0LZN5O']),
                      cancelText: c.intl.string(c.t['ETE/oK']),
                      onConfirm: e,
                      onConfirmSecondary: () => {
                          o.ZP.updatedUnsyncedSettings({ disableVoiceChannelChangeAlert: !0 }), e();
                      },
                      body: c.intl.format(c.t['vA+uEh'], { channel: u })
                  },
                  a
              )
          );
};
