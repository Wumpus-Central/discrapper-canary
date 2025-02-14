n.d(t, { Z: () => u });
var i,
    l = n(442837),
    r = n(570140),
    a = n(267642),
    s = n(981631);
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
let d = {};
d = {
    lastDismissedGracePeriods: {},
    isVisible: {}
};
class c extends (i = l.ZP.PersistedStore) {
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
o(c, 'displayName', 'GuildBoostingGracePeriodNoticeStore'),
    o(c, 'persistKey', 'PremiumGuildGracePeriodNoticeStore'),
    o(c, 'migrations', [
        (e) => ({
            ...e,
            lastDismissedGracePeriods: null != e ? { ...e.lastDismissedGracePeriods } : {},
            isVisible: {}
        })
    ]);
let u = new c(r.Z, {
    GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function (e) {
        let { guildId: t, appliedBoosts: n } = e,
            i = null != d.lastDismissedGracePeriods[t] ? d.lastDismissedGracePeriods[t] : null,
            l = null != i && Date.now() - i <= s.Dge,
            r = null != n && !l && (0, a.Vx)(n, t);
        d = {
            ...d,
            isVisible: {
                ...d.isVisible,
                [t]: r
            }
        };
    },
    BOOSTED_GUILD_GRACE_PERIOD_NOTICE_DISMISS: function (e) {
        let t = e.guildId;
        d = {
            ...d,
            lastDismissedGracePeriods: {
                ...d.lastDismissedGracePeriods,
                [t]: Date.now()
            },
            isVisible: {
                ...d.isVisible,
                [t]: !1
            }
        };
    }
});
