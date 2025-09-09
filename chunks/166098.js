t.d(n, { Z: () => c });
var r,
    i = t(442837),
    a = t(570140);
function l(e, n, t) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[n] = t),
        e
    );
}
let o = {};
class s extends (r = i.ZP.Store) {
    getLocationStateForPingUrl(e) {
        if (null != e) return o[e];
    }
}
l(s, "displayName", "PortkeyLocationStore");
let c = new s(a.Z, {
    LOGOUT: function () {
        o = {};
    },
    PORTKEY_LOCATION_PING_STATE_UPDATE: function (e) {
        var n, t;
        let { pingUrl: r, state: i } = e;
        (n = (function (e) {
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
                        l(e, n, t[n]);
                    });
            }
            return e;
        })({}, o)),
            (t = t = { [r]: i }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
                : (function (e, n) {
                      var t = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          t.push.apply(t, r);
                      }
                      return t;
                  })(Object(t)).forEach(function (e) {
                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
                  }),
            (o = n);
    },
});
