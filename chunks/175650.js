"use strict";
n.d(t, { LD: () => s, ok: () => i });
var r = n(600975);
(0, r.C)({
    kind: "guild",
    id: "2022-01_guild_role_subscription_trials",
    label: "Guild Role Subscription Trials",
    defaultConfig: { enableRoleSubscriptionTrialsForGuild: !1 },
    treatments: [
        {
            id: 1,
            label: "Enables guild to create Guild Role Subscription Trials",
            config: { enableRoleSubscriptionTrialsForGuild: !0 },
        },
    ],
});
let i = (0, r.C)({
        kind: "guild",
        id: "2023-03_server_subscriptions_tier_templates",
        label: "Server Subscriptions Tier Templates",
        defaultConfig: { enabled: !1, showCreatorPortalLink: !1 },
        treatments: [
            { id: 1, label: "299 basic tier + no link", config: { enabled: !0, showCreatorPortalLink: !1 } },
            { id: 2, label: "399 basic tier + no link", config: { enabled: !0, showCreatorPortalLink: !1 } },
            { id: 3, label: "399 basic tier + link", config: { enabled: !0, showCreatorPortalLink: !0 } },
        ],
    }),
    s = (0, r.C)({
        kind: "user",
        id: "2023-04_server_subscriptions_tier_templates_user",
        label: "Server Subscriptions Tier Templates",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enable tier templates for user", config: { enabled: !0 } }],
    });
