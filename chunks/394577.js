"use strict";
n.d(t, { A: () => a });
var r = n(600975),
    i = n(688151);
let a = (0, r.C)({
    id: "2026-02_expand_voice_invite_suggestions",
    kind: "guild",
    label: "Expand Voice Invite Suggestions",
    commonTriggerPoint: i.$G.VOICE_CALL,
    defaultConfig: { totalSuggestions: 5 },
    treatments: [
        { id: 0, label: "Control", config: { totalSuggestions: 5 } },
        { id: 1, label: "More Suggestions (10)", config: { totalSuggestions: 10 } },
    ],
});
