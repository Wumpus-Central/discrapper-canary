n.d(t, {
    A: () => s,
    u: () => o,
});
var r = n(311907),
    i = n(164956),
    a = n(652215);

function s(e) {
    return (
        (0, r.bG)([i.A], () => {
            if ((null == e ? void 0 : e.id) == null) return !1;
            let t = i.A.isFullServerPreview(e.id),
                n = i.A.isOnboardingEnabled(e.id);
            return t && n;
        }) || (null == e ? void 0 : e.features.has(a.GuildFeatures.GUILD_ONBOARDING_HAS_PROMPTS))
    );
}

function o(e) {
    if (null == e) return !1;
    let t = i.A.isFullServerPreview(e.id),
        n = i.A.isOnboardingEnabled(e.id);
    return (t && n) || e.features.has(a.GuildFeatures.GUILD_ONBOARDING_HAS_PROMPTS);
}
