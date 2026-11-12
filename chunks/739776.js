var i = n(855986),
    r = n(73153);
let a = {
        hasAppliedPerk: !1,
        hasVisitedDisplayNameStyles: !1,
        previousPerkValues: {},
        hasRestoredExpiredClientTheme: !1,
    },
    s = a;
class l extends i.Ay.PersistedStore {
    static displayName = "HexagonCampaignPersistedStore";
    static persistKey = "HexagonCampaignPersistedStore";
    static migrations = [
        (e) => ({ ...e, hasVisitedDisplayNameStyles: e?.hasVisitedDisplayNameStyles ?? !1 }),
        (e) => ({ ...e, previousPerkValues: e?.previousPerkValues ?? {} }),
        (e) => ({ ...e, hasRestoredExpiredClientTheme: e?.hasRestoredExpiredClientTheme ?? !1 }),
    ];
    initialize(e) {
        null != e && (s = { ...a, ...e });
    }
    getState() {
        return s;
    }
    get hasAppliedPerk() {
        return s.hasAppliedPerk;
    }
    get hasVisitedDisplayNameStyles() {
        return s.hasVisitedDisplayNameStyles;
    }
    get previousPerkValues() {
        return s.previousPerkValues;
    }
    get hasRestoredExpiredClientTheme() {
        return s.hasRestoredExpiredClientTheme;
    }
}
let o = new l(r.h, {
    HEXAGON_CAMPAIGN_PERK_APPLIED: function () {
        s = { ...s, hasAppliedPerk: !0 };
    },
    HEXAGON_CAMPAIGN_APPLIED_PERKS_CLEARED: function () {
        s = { ...s, hasAppliedPerk: !1 };
    },
    HEXAGON_CAMPAIGN_DISPLAY_NAME_STYLES_VISITED: function () {
        if (s.hasVisitedDisplayNameStyles) return !1;
        s = { ...s, hasVisitedDisplayNameStyles: !0 };
    },
    HEXAGON_CAMPAIGN_PREVIOUS_PERK_VALUES_SAVED: function (e) {
        let { previousPerkValues: t } = e;
        s = { ...s, previousPerkValues: { ...s.previousPerkValues, ...t } };
    },
    HEXAGON_CAMPAIGN_EXPIRED_CLIENT_THEME_RESTORED: function () {
        if (s.hasRestoredExpiredClientTheme) return !1;
        s = { ...s, hasRestoredExpiredClientTheme: !0 };
    },
    LOGOUT: function () {
        s = a;
    },
});
n.d(t, {}, { A: o });
