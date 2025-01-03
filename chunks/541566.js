var i,
    r = n(442837),
    l = n(570140),
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
let c = {};
c = {
    lastDismissedGracePeriods: {},
    isVisible: {}
};
class d extends (i = r.ZP.PersistedStore) {
    initialize(e) {
        null != e && (c = e);
    }
    getLastDismissedGracePeriodForGuild(e) {
        return null != c.lastDismissedGracePeriods[e] ? c.lastDismissedGracePeriods[e] : null;
    }
    isVisible(e) {
        return null != e && null != c.isVisible[e] && c.isVisible[e];
    }
    getState() {
        return c;
    }
}
o(d, 'displayName', 'GuildBoostingGracePeriodNoticeStore'),
    o(d, 'persistKey', 'PremiumGuildGracePeriodNoticeStore'),
    o(d, 'migrations', [
        (e) => ({
            ...e,
            lastDismissedGracePeriods: null != e ? { ...e.lastDismissedGracePeriods } : {},
            isVisible: {}
        })
    ]),
    (t.Z = new d(l.Z, {
        GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function (e) {
            let { guildId: t, appliedBoosts: n } = e,
                i = null != c.lastDismissedGracePeriods[t] ? c.lastDismissedGracePeriods[t] : null,
                r = null != i && Date.now() - i <= s.Dge,
                l = null != n && !r && (0, a.Vx)(n, t);
            c = {
                ...c,
                isVisible: {
                    ...c.isVisible,
                    [t]: l
                }
            };
        },
        BOOSTED_GUILD_GRACE_PERIOD_NOTICE_DISMISS: function (e) {
            let t = e.guildId;
            c = {
                ...c,
                lastDismissedGracePeriods: {
                    ...c.lastDismissedGracePeriods,
                    [t]: Date.now()
                },
                isVisible: {
                    ...c.isVisible,
                    [t]: !1
                }
            };
        }
    }));
