"use strict";
n.d(t, { A: () => a, u: () => o });
var i = n(17928),
    r = n(164956),
    s = n(652215);
function a(e) {
    return (
        (0, i.bG)([r.A], () => {
            if (e?.id == null) return !1;
            let t = r.A.isFullServerPreview(e.id),
                n = r.A.isOnboardingEnabled(e.id);
            return t && n;
        }) || e?.features.has(s.GuildFeatures.GUILD_ONBOARDING_HAS_PROMPTS)
    );
}
function o(e) {
    if (null == e) return !1;
    let t = r.A.isFullServerPreview(e.id),
        n = r.A.isOnboardingEnabled(e.id);
    return (t && n) || e.features.has(s.GuildFeatures.GUILD_ONBOARDING_HAS_PROMPTS);
}
