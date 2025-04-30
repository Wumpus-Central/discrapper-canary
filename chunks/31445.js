n.d(t, {
    Z: () => o,
    t: () => s
});
var r = n(442837),
    i = n(160404),
    a = n(981631);
function o(e) {
    return (
        (0, r.e7)([i.Z], () => {
            if ((null == e ? void 0 : e.id) == null) return !1;
            let t = i.Z.isFullServerPreview(e.id),
                n = i.Z.isOnboardingEnabled(e.id);
            return t && n;
        }) || (null == e ? void 0 : e.hasFeature(a.oNc.GUILD_ONBOARDING_HAS_PROMPTS))
    );
}
function s(e) {
    if (null == e) return !1;
    let t = i.Z.isFullServerPreview(e.id),
        n = i.Z.isOnboardingEnabled(e.id);
    return (t && n) || e.hasFeature(a.oNc.GUILD_ONBOARDING_HAS_PROMPTS);
}
