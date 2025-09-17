t.d(n, { default: () => s });
var r = t(951288);
t(647438);
var o = t(153867),
    i = t(468026),
    l = t(493773),
    c = t(933557),
    a = t(626135),
    u = t(981631),
    f = t(388032);
let s = (e) => {
    var { onConfirm: n, channel: t } = e,
        s = (function (e, n) {
            if (null == e) return {};
            var t,
                r,
                o = (function (e, n) {
                    if (null == e) return {};
                    var t,
                        r,
                        o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (t = i[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
                    return o;
                })(e, n);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                    (t = i[r]),
                        !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]);
            }
            return o;
        })(e, ["onConfirm", "channel"]);
    let b = (0, c.ZP)(t);
    return ((0, l.ZP)(() => {
        a.default.track(u.rMx.OPEN_MODAL, {
            type: "Voice channel change confirmation",
            channel_id: t.id,
        });
    }),
    null == b)
        ? null
        : (0, r.jsx)(
              i.default,
              (function (e) {
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
              })(
                  {
                      confirmText: f.intl.string(f.t["cY+Ooa"]),
                      secondaryConfirmText: f.intl.string(f.t["JdIQ/f"]),
                      title: f.intl.string(f.t["0LZN5O"]),
                      cancelText: f.intl.string(f.t["ETE/oK"]),
                      onConfirm: n,
                      onConfirmSecondary: () => {
                          o.ZP.updatedUnsyncedSettings({ disableVoiceChannelChangeAlert: !0 });
                      },
                      body: f.intl.format(f.t["vA+uEh"], { channel: b }),
                  },
                  s,
              ),
          );
};
