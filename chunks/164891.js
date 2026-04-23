"use strict";
n.d(t, { A: () => s });
var r = n(600975),
    i = n(688151);
let s = (0, r.C)({
    kind: "guild",
    id: "2024-12_guild_voice_channel_ringing",
    label: "Guild Voice Ringing",
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: i.$G.VOICE_CALL,
    treatments: [{ id: 1, label: "Allow users to ring each other in Guild Voice Channels", config: { enabled: !0 } }],
});
