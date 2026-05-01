n.d(t, { A: () => s, u: () => l });
var i = n(17928),
    a = n(164956),
    r = n(652215);
function s(e) {
    return (
        (0, i.bG)([a.A], () => {
            if (e?.id == null) return !1;
            let t = a.A.isFullServerPreview(e.id),
                n = a.A.isOnboardingEnabled(e.id);
            return t && n;
        }) || e?.features.has(r.GuildFeatures.GUILD_ONBOARDING_HAS_PROMPTS)
    );
}
function l(e) {
    if (null == e) return !1;
    let t = a.A.isFullServerPreview(e.id),
        n = a.A.isOnboardingEnabled(e.id);
    return (t && n) || e.features.has(r.GuildFeatures.GUILD_ONBOARDING_HAS_PROMPTS);
}
