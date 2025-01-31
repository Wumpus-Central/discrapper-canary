n.d(t, {
    Z: () => s,
    t: () => o
});
var i = n(442837),
    r = n(160404),
    a = n(981631);
function s(e) {
    return (
        (0, i.e7)([r.Z], () => {
            if ((null == e ? void 0 : e.id) == null) return !1;
            let t = r.Z.isFullServerPreview(e.id),
                n = r.Z.isOnboardingEnabled(e.id);
            return t && n;
        }) || (null == e ? void 0 : e.hasFeature(a.oNc.GUILD_ONBOARDING_HAS_PROMPTS))
    );
}
function o(e) {
    if (null == e) return !1;
    let t = r.Z.isFullServerPreview(e.id),
        n = r.Z.isOnboardingEnabled(e.id);
    return (t && n) || e.hasFeature(a.oNc.GUILD_ONBOARDING_HAS_PROMPTS);
}
