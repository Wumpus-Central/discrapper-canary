"use strict";
n.d(t, { A: () => a, v: () => r });
var i = n(600975);
let r = "2026-06_guild_rooms",
    a = (0, i.C)({
        kind: "guild",
        id: r,
        label: "Guild Rooms",
        defaultConfig: { enabled: !1, interactionsEnabled: !1, multipleRoomsEnabled: !1, posturesEnabled: !1 },
        treatments: [
            {
                id: 1,
                label: "Enable Guild Rooms in this guild",
                config: { enabled: !0, interactionsEnabled: !0, multipleRoomsEnabled: !1, posturesEnabled: !0 },
            },
            {
                id: 2,
                label: "Enable Guild Rooms without Interactions",
                config: { enabled: !0, interactionsEnabled: !1, multipleRoomsEnabled: !1, posturesEnabled: !0 },
            },
            {
                id: 3,
                label: "Enable Guild Rooms with Room Variants",
                config: { enabled: !0, interactionsEnabled: !0, multipleRoomsEnabled: !0, posturesEnabled: !0 },
            },
            {
                id: 4,
                label: "Enable Guild Rooms without Postures",
                config: { enabled: !0, interactionsEnabled: !0, multipleRoomsEnabled: !1, posturesEnabled: !1 },
            },
        ],
    });
