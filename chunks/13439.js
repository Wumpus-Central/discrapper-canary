n.d(t, { e: () => o });
var r = n(818083),
    i = n(987338);
let l = (0, r.B)({
    kind: "guild",
    id: "2025-11_guild_powerups_mobile",
    commonTriggerPoint: i.$P.CONNECTION_OPEN,
    label: "Guild Powerups Mobile",
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: "Enable Guild Powerups Mobile",
            config: { enabled: !0 },
        },
    ],
});
function o(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return l.useExperiment(
        {
            guildId: e,
            location: t,
        },
        {
            autoTrackExposure: !1,
            disable: n,
        },
    ).enabled;
}
