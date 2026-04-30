"use strict";
n.d(t, { A: () => s });
var i = n(600975),
    r = n(688151);
let s = (0, i.C)({
    kind: "guild",
    id: "2024-12_guild_voice_channel_ringing",
    label: "Guild Voice Ringing",
    defaultConfig: { enabled: !1 },
    commonTriggerPoint: r.$G.VOICE_CALL,
    treatments: [{ id: 1, label: "Allow users to ring each other in Guild Voice Channels", config: { enabled: !0 } }],
});
