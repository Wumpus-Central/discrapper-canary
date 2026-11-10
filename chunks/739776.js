var a = i(855986),
    t = i(73153);
let r = { hasAppliedPerk: !1, hasVisitedDisplayNameStyles: !1, previousPerkValues: {} },
    p = r;
class l extends a.Ay.PersistedStore {
    static displayName = "HexagonCampaignPersistedStore";
    static persistKey = "HexagonCampaignPersistedStore";
    static migrations = [
        (e) => ({ ...e, hasVisitedDisplayNameStyles: e?.hasVisitedDisplayNameStyles ?? !1 }),
        (e) => ({ ...e, previousPerkValues: e?.previousPerkValues ?? {} }),
    ];
    initialize(e) {
        null != e && (p = { ...r, ...e });
    }
    getState() {
        return p;
    }
    get hasAppliedPerk() {
        return p.hasAppliedPerk;
    }
    get hasVisitedDisplayNameStyles() {
        return p.hasVisitedDisplayNameStyles;
    }
    get previousPerkValues() {
        return p.previousPerkValues;
    }
}
let u = new l(t.h, {
    HEXAGON_CAMPAIGN_PERK_APPLIED: function () {
        p = { ...p, hasAppliedPerk: !0 };
    },
    HEXAGON_CAMPAIGN_APPLIED_PERKS_CLEARED: function () {
        p = { ...p, hasAppliedPerk: !1 };
    },
    HEXAGON_CAMPAIGN_DISPLAY_NAME_STYLES_VISITED: function () {
        if (p.hasVisitedDisplayNameStyles) return !1;
        p = { ...p, hasVisitedDisplayNameStyles: !0 };
    },
    HEXAGON_CAMPAIGN_PREVIOUS_PERK_VALUES_SAVED: function (e) {
        let { previousPerkValues: s } = e;
        p = { ...p, previousPerkValues: { ...p.previousPerkValues, ...s } };
    },
    LOGOUT: function () {
        p = r;
    },
});
i.d(s, {}, { A: u });
