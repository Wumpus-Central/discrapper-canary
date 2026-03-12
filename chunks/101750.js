"use strict";
n.d(t, { E: () => i });
let l = (0, n(600975).C)({
    kind: "user",
    id: "2023-10_social_proofing_message_nitro_badge",
    label: "Social Proofing Message Nitro Badge",
    defaultConfig: { enabled: !1, hideNitroBadgeWhenRoleBadgePresent: !1 },
    treatments: [
        {
            id: 1,
            label: "Prefer BOTH nitro badge AND role icon(s)",
            config: { enabled: !0, hideNitroBadgeWhenRoleBadgePresent: !1 },
        },
        {
            id: 2,
            label: "Prefer role icon(s) over nitro badge if both are present",
            config: { enabled: !0, hideNitroBadgeWhenRoleBadgePresent: !0 },
        },
    ],
});
function i(e, t) {
    let n = l.getCurrentConfig({ location: t }, { autoTrackExposure: !0 });
    return n.enabled && (!n.hideNitroBadgeWhenRoleBadgePresent || (n.hideNitroBadgeWhenRoleBadgePresent && !e));
}
