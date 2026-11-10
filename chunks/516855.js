var t = n(855986),
    i = n(73153);
let d = { seenFontIds: new Set(), seenEffectIds: new Set(), newFontsBadgeDismissed: !1, newEffectsBadgeDismissed: !1 };
class E extends t.Ay.PersistedStore {
    static displayName = "DisplayNameStylesSeenStore";
    static persistKey = "DisplayNameStylesSeenStore";
    static migrations = [(e) => ({ ...e, newFontsBadgeDismissed: !1, newEffectsBadgeDismissed: !1 })];
    initialize(e) {
        d = {
            seenFontIds: new Set(e?.seenFontIds ?? []),
            seenEffectIds: new Set(e?.seenEffectIds ?? []),
            newFontsBadgeDismissed: e?.newFontsBadgeDismissed ?? !1,
            newEffectsBadgeDismissed: e?.newEffectsBadgeDismissed ?? !1,
        };
    }
    getState() {
        return {
            seenFontIds: Array.from(d.seenFontIds),
            seenEffectIds: Array.from(d.seenEffectIds),
            newFontsBadgeDismissed: d.newFontsBadgeDismissed,
            newEffectsBadgeDismissed: d.newEffectsBadgeDismissed,
        };
    }
    getSeenFonts() {
        return d.seenFontIds;
    }
    getSeenEffects() {
        return d.seenEffectIds;
    }
    getNewFontsBadgeDismissed() {
        return d.newFontsBadgeDismissed;
    }
    getNewEffectsBadgeDismissed() {
        return d.newEffectsBadgeDismissed;
    }
}
let a = new E(i.h, {
    DISPLAY_NAME_STYLES_MARK_FONT_SEEN: function (e) {
        let { fontId: s } = e;
        if (d.seenFontIds.has(s)) return !1;
        d = { ...d, seenFontIds: new Set([...d.seenFontIds, s]) };
    },
    DISPLAY_NAME_STYLES_MARK_EFFECT_SEEN: function (e) {
        let { effectId: s } = e;
        if (d.seenEffectIds.has(s)) return !1;
        d = { ...d, seenEffectIds: new Set([...d.seenEffectIds, s]) };
    },
    DISPLAY_NAME_STYLES_MARK_NEW_FONTS_BADGE_DISMISSED: function () {
        if (d.newFontsBadgeDismissed) return !1;
        d = { ...d, newFontsBadgeDismissed: !0 };
    },
    DISPLAY_NAME_STYLES_MARK_NEW_EFFECTS_BADGE_DISMISSED: function () {
        if (d.newEffectsBadgeDismissed) return !1;
        d = { ...d, newEffectsBadgeDismissed: !0 };
    },
});
n.d(s, {}, { A: a });
