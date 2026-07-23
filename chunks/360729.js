"use strict";
n.d(t, { A: () => i });
let i = (0, n(600975).C)({
    kind: "guild",
    id: "2026-06_guild_rooms",
    label: "Guild Rooms",
    defaultConfig: { enabled: !1, experimental: !1, interactionsEnabled: !1 },
    treatments: [
        {
            id: 1,
            label: "Enable Guild Rooms in this guild",
            config: { enabled: !0, experimental: !1, interactionsEnabled: !0 },
        },
        {
            id: 2,
            label: "Enable Guild Rooms in this guild",
            config: { enabled: !0, experimental: !0, interactionsEnabled: !0 },
        },
        {
            id: 3,
            label: "Enable Guild Rooms without Interactions",
            config: { enabled: !0, experimental: !0, interactionsEnabled: !1 },
        },
    ],
});
