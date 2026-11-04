var i = n(855986),
    r = n(164956),
    a = n(652215);
n.d(
    t,
    {},
    {
        A: function (e) {
            return (
                (0, i.bG)([r.A], () => {
                    if (e?.id == null) return !1;
                    let t = r.A.isFullServerPreview(e.id),
                        n = r.A.isOnboardingEnabled(e.id);
                    return t && n;
                }) || e?.features.has(a.GuildFeatures.GUILD_ONBOARDING_HAS_PROMPTS)
            );
        },
        u: function (e) {
            if (null == e) return !1;
            let t = r.A.isFullServerPreview(e.id),
                n = r.A.isOnboardingEnabled(e.id);
            return (t && n) || e.features.has(a.GuildFeatures.GUILD_ONBOARDING_HAS_PROMPTS);
        },
    },
);
