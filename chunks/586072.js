n.d(t, {
    AC: () => a,
    IW: () => s,
    aC: () => l,
    bT: () => i,
    z: () => o
});
var r = n(818083);
let i = (0, r.B)({
        kind: 'user',
        id: '2022-04_creator_monetization_country_allowlist',
        label: 'Creator Monetization Available in Country',
        defaultConfig: { isUserEligibleForCreatorMonetization: !1 },
        treatments: [
            {
                id: 1,
                label: 'Enables users to view Creator Monetization entrypoints',
                config: { isUserEligibleForCreatorMonetization: !0 }
            }
        ]
    }),
    o = (0, r.B)({
        kind: 'guild',
        id: '2022-09_creator_monetization_raven',
        label: 'Creator Monetization Onboarding v2',
        defaultConfig: { enableFastMonetizationOnboardingForGuild: !1 },
        treatments: [
            {
                id: 1,
                label: 'Enables guild to create Guild Role Subscriptions quickly',
                config: { enableFastMonetizationOnboardingForGuild: !0 }
            }
        ]
    }),
    a = (0, r.B)({
        kind: 'user',
        id: '2022-09_creator_monetization_raven_users',
        label: 'Creator Monetization Onboarding v2 Users',
        defaultConfig: { enableFastMonetizationOnboardingForUser: !1 },
        treatments: [
            {
                id: 1,
                label: 'Enables users to create Guild Role Subscriptions quickly',
                config: { enableFastMonetizationOnboardingForUser: !0 }
            }
        ]
    }),
    s = (0, r.B)({
        kind: 'guild',
        id: '2022-11_creator_monetization_onboarding_waitlist',
        label: 'Creator Monetization Onboarding Waitlist',
        defaultConfig: { enableWaitlist: !1 },
        treatments: [
            {
                id: 1,
                label: 'Enables Guilds to (possibly) see the waitlist',
                config: { enableWaitlist: !0 }
            }
        ]
    }),
    l = (0, r.B)({
        kind: 'user',
        id: '2023-01_creator_monetization_nag_activate_users',
        label: 'Creator Monetization Nag Activate Users',
        defaultConfig: { enableCreatorMonetizationNagActivateForUser: !1 },
        treatments: [
            {
                id: 1,
                label: 'Enables users to see nag bar to activate server subscriptions',
                config: { enableCreatorMonetizationNagActivateForUser: !0 }
            }
        ]
    });
