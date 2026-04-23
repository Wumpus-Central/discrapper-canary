"use strict";
n.d(t, { A: () => a, u: () => o });
var r = n(311907),
    i = n(164956),
    s = n(652215);
function a(e) {
    return (
        (0, r.bG)([i.A], () => {
            if (e?.id == null) return !1;
            let t = i.A.isFullServerPreview(e.id),
                n = i.A.isOnboardingEnabled(e.id);
            return t && n;
        }) || e?.features.has(s.GuildFeatures.GUILD_ONBOARDING_HAS_PROMPTS)
    );
}
function o(e) {
    if (null == e) return !1;
    let t = i.A.isFullServerPreview(e.id),
        n = i.A.isOnboardingEnabled(e.id);
    return (t && n) || e.features.has(s.GuildFeatures.GUILD_ONBOARDING_HAS_PROMPTS);
}
