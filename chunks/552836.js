n.d(t, { A: () => c });
var r,
    l = n(311907),
    i = n(73153);
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
class o extends (r = l.Ay.PersistedStore) {
    initialize(e) {
        null != e && (s = e);
    }
    getState() {
        return s;
    }
    getCountForGuild(e) {
        return s[e];
    }
}
a(o, "displayName", "GuildBoostingProgressBarPersistedStore"),
    a(o, "persistKey", "PremiumGuildProgressBarPersistedStore");
let c = new o(i.h, {
    APPLIED_GUILD_BOOST_COUNT_UPDATE: (e) => {
        var t, n;
        let { guildId: r, premiumCount: l } = e;
        (t = (function (e) {
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
        })({}, s)),
            (n = n = { [r]: l }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            (s = t);
    },
    APPLIED_GUILD_BOOST_COUNT_RESET: function () {
        s = {};
    },
});
