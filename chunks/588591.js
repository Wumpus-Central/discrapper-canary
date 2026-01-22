l.d(t, { A: () => u });
var r,
    n = l(311907),
    s = l(73153);
function i(e, t, l) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: l,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = l),
        e
    );
}
let a = {},
    d = [];
function c() {
    a = {};
}
class o extends (r = n.Ay.Store) {
    getRegionStateForPingUrl(e) {
        if (null != e) return a[e];
    }
    getRegionState() {
        return a;
    }
    getRegions() {
        return d;
    }
}
i(o, "displayName", "GameServerRegionStore");
let u = new o(s.h, {
    LOGOUT: c,
    GAME_SERVER_REGION_PING_STATE_UPDATE: function (e) {
        var t, l;
        let { pingUrl: r, state: n } = e;
        (t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var l = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(l);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(l).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(l, e).enumerable;
                        }),
                    )),
                    r.forEach(function (t) {
                        i(e, t, l[t]);
                    });
            }
            return e;
        })({}, a)),
            (l = l = { [r]: n }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l))
                : (function (e, t) {
                      var l = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          l.push.apply(l, r);
                      }
                      return l;
                  })(Object(l)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e));
                  }),
            (a = t);
    },
    GAME_SERVER_REGION_PING_STATE_RESET: c,
    GAME_SERVER_FETCH_REGIONS_SUCCESS: function (e) {
        let { regions: t } = e;
        d = t;
    },
});
