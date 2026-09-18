a.d(t, { J: () => n, s: () => c });
var d = a(228366);
function c(e) {
    let { displayNameStyles: t, avatar: a } = e;
    d.h.dispatch({ type: "WOW_MOMENT_CONFIRMATION_SET_NAMEPLATE_PREVIEW_OVERRIDES", displayNameStyles: t, avatar: a });
}
function n() {
    d.h.dispatch({ type: "WOW_MOMENT_CONFIRMATION_CLEAR_NAMEPLATE_PREVIEW_OVERRIDES" });
}
