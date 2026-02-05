"use strict";
n.d(t, { o: () => a });
var r = n(600975),
    i = n(688151);
let a = (0, r.C)({
    kind: "user",
    id: "2025-06_game_presence_negative_test",
    label: "Game Presence Negative Test",
    defaultConfig: { filterGamePresence: !1, filterRichPresence: !1 },
    commonTriggerPoint: i.$G.CONNECTION_OPEN,
    treatments: [
        { id: 0, label: "Control", config: { filterGamePresence: !1, filterRichPresence: !1 } },
        {
            id: 1,
            label: "No Gaming Presence (Rich or Game Detection)",
            config: { filterGamePresence: !0, filterRichPresence: !0 },
        },
        {
            id: 2,
            label: "Game Presence but NO Rich Presence",
            config: { filterGamePresence: !1, filterRichPresence: !0 },
        },
    ],
});
