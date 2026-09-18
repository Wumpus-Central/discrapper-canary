n.d(t, { A: () => l });
var i = n(17928),
    r = n(228366);
let a = { isDisplayingWowMomentConfirmation: !1, isAnimated: !1, nameplatePreviewOverrides: null };
class s extends i.Ay.Store {
    static displayName = "WowMomentConfirmationStore";
    getState() {
        return a;
    }
    get isDisplayingWowMomentConfirmation() {
        return a.isDisplayingWowMomentConfirmation;
    }
    get isAnimated() {
        return a.isAnimated;
    }
    get nameplatePreviewOverrides() {
        return a.nameplatePreviewOverrides;
    }
}
let l = new s(r.h, {
    LOGOUT: function () {
        a = { isDisplayingWowMomentConfirmation: !1, isAnimated: !1, nameplatePreviewOverrides: null };
    },
    WOW_MOMENT_CONFIRMATION_SET_IS_DISPLAYING_WOW_MOMENT_CONFIRMATION: function (e) {
        let { value: t, isAnimated: n } = e;
        ((a.isDisplayingWowMomentConfirmation = t), (a.isAnimated = n));
    },
    WOW_MOMENT_CONFIRMATION_SET_NAMEPLATE_PREVIEW_OVERRIDES: function (e) {
        let { displayNameStyles: t, avatar: n } = e;
        a = { ...a, nameplatePreviewOverrides: { displayNameStyles: t, avatar: n } };
    },
    WOW_MOMENT_CONFIRMATION_CLEAR_NAMEPLATE_PREVIEW_OVERRIDES: function () {
        if (null == a.nameplatePreviewOverrides) return !1;
        a = { ...a, nameplatePreviewOverrides: null };
    },
});
