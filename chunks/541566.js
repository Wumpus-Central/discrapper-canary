n.d(t, { Z: () => h });
var r,
    i = n(442837),
    l = n(570140),
    a = n(267642),
    o = n(981631);
function s(e, t, n) {
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
function c(e) {
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
                s(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let d = {};
d = {
    lastDismissedGracePeriods: {},
    isVisible: {}
};
class p extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        null != e && (d = e);
    }
    getLastDismissedGracePeriodForGuild(e) {
        return null != d.lastDismissedGracePeriods[e] ? d.lastDismissedGracePeriods[e] : null;
    }
    isVisible(e) {
        return null != e && null != d.isVisible[e] && d.isVisible[e];
    }
    getState() {
        return d;
    }
}
s(p, 'displayName', 'GuildBoostingGracePeriodNoticeStore'),
    s(p, 'persistKey', 'PremiumGuildGracePeriodNoticeStore'),
    s(p, 'migrations', [
        (e) =>
            u(c({}, e), {
                lastDismissedGracePeriods: null != e ? c({}, e.lastDismissedGracePeriods) : {},
                isVisible: {}
            })
    ]);
let h = new p(l.Z, {
    GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function (e) {
        let { guildId: t, appliedBoosts: n } = e,
            r = null != d.lastDismissedGracePeriods[t] ? d.lastDismissedGracePeriods[t] : null,
            i = null != r && Date.now() - r <= o.Dge,
            l = null != n && !i && (0, a.Vx)(n, t);
        d = u(c({}, d), { isVisible: u(c({}, d.isVisible), { [t]: l }) });
    },
    BOOSTED_GUILD_GRACE_PERIOD_NOTICE_DISMISS: function (e) {
        let t = e.guildId;
        d = u(c({}, d), {
            lastDismissedGracePeriods: u(c({}, d.lastDismissedGracePeriods), { [t]: Date.now() }),
            isVisible: u(c({}, d.isVisible), { [t]: !1 })
        });
    }
});
