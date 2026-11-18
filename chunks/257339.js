var r = n(855986),
    d = n(73153),
    a = n(988341);
let s = { seenBadgeIndicatorIds: new Set() };
function i(e) {
    if (s.seenBadgeIndicatorIds.has(e)) return !1;
    s = { ...s, seenBadgeIndicatorIds: new Set([...s.seenBadgeIndicatorIds, e]) };
}
class c extends r.Ay.PersistedStore {
    static displayName = "BadgeDirectorySeenStore";
    static persistKey = "BadgeDirectorySeenStore";
    initialize(e) {
        s = { seenBadgeIndicatorIds: new Set(e?.seenBadgeIndicatorIds ?? []) };
    }
    getState() {
        return { seenBadgeIndicatorIds: Array.from(s.seenBadgeIndicatorIds) };
    }
    getSeenBadgeIndicators() {
        return s.seenBadgeIndicatorIds;
    }
}
let o = new c(d.h, {
    BADGE_DIRECTORY_MARK_BADGE_INDICATOR_SEEN: function (e) {
        let { badgeId: t } = e;
        return i(t);
    },
    BADGE_ACK_SUCCESS: function (e) {
        let { badgeId: t } = e;
        return !!(0, a.HW)(t) && i(t);
    },
});
n.d(t, {}, { A: o });
