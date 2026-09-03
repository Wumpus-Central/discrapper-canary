n.d(t, { W8: () => o, mf: () => d, vJ: () => s });
var i = n(17928),
    r = n(600975),
    a = n(696451);
let s = "2026-06_guild_rooms",
    l = (0, r.C)({
        kind: "guild",
        id: s,
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
            {
                id: 5,
                label: "Enable Guild Rooms with Room 2 Default and Selector",
                config: { enabled: !0, interactionsEnabled: !0, multipleRoomsEnabled: !0, posturesEnabled: !0 },
            },
        ],
    });
function o(e, t) {
    var n;
    return l.getCurrentConfig(e, {
        autoTrackExposure: !0,
        ...t,
        disable: (t?.disable ?? !1) || !(null != (n = e.guildId) && !a.Ay.isCurrentUserGuest(n)),
    });
}
function d(e, t) {
    let n = (0, i.bG)([a.Ay], () => null != e.guildId && !a.Ay.isCurrentUserGuest(e.guildId), [e.guildId]);
    return l.useExperiment(e, { autoTrackExposure: !0, ...t, disable: (t?.disable ?? !1) || !n });
}
