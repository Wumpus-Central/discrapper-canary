n.d(t, { Z: () => c });
var r,
    i = n(442837),
    l = n(570140);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let a = {};
class s extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        null != e && (a = e);
    }
    getState() {
        return a;
    }
    getCountForGuild(e) {
        return a[e];
    }
}
o(s, 'displayName', 'GuildBoostingProgressBarPersistedStore'), o(s, 'persistKey', 'PremiumGuildProgressBarPersistedStore');
let c = new s(l.Z, {
    APPLIED_GUILD_BOOST_COUNT_UPDATE: (e) => {
        var t, n;
        let { guildId: r, premiumCount: i } = e;
        (t = (function (e) {
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
                        o(e, t, n[t]);
                    });
            }
            return e;
        })({}, a)),
            (n = n = { [r]: i }),
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
            (a = t);
    }
});
