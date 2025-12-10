n.d(t, { Z: () => u });
var r,
    i = n(442837),
    l = n(570140),
    o = n(959517);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let s = {};
class c extends (r = i.ZP.Store) {
    getOptions(e) {
        return s[e];
    }
}
a(c, "displayName", "SendMessageOptionsStore");
let u = new c(l.Z, {
    MESSAGE_CREATE: function (e) {
        let { message: t, sendMessageOptions: n } = e;
        if (null != n) {
            var r, i, l;
            s[t.id] =
                ((i = (function (e) {
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
                                a(e, t, n[t]);
                            });
                    }
                    return e;
                })({}, n)),
                (l = l = { location: null != (r = n.location) ? r : o.dy.OTHER }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(l)).forEach(function (e) {
                          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                      }),
                i);
        }
        null != t.nonce && t.nonce in s && delete s[t.nonce];
    },
});
