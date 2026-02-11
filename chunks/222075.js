"use strict";
n.d(t, { o: () => a });
var r = n(600975),
    i = n(688151);
let a = (0, r.C)({
    id: "2026-02_voice_invite_suggestion_activity",
    kind: "guild",
    label: "Voice Invite Suggestion Activity",
    commonTriggerPoint: i.$G.VOICE_CALL,
    defaultConfig: { showActivityStatus: !1 },
    treatments: [
        { id: 0, label: "Control", config: { showActivityStatus: !1 } },
        { id: 1, label: "Show Activity To Inviter", config: { showActivityStatus: !0 } },
    ],
});
