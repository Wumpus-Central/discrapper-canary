n.d(t, { $k: () => o, Vf: () => r });
var i = n(600975),
    l = n(652215);
let a = (0, i.C)({
    kind: "guild",
    id: "2023-03_guild_media_channel",
    label: "Media Channel",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enables guild to create a media channel", config: { enabled: !0 } }],
});
function r(e) {
    let { enabled: t } = a.useExperiment({ guildId: e?.id ?? l.dJq, location: "96e84c_1" }, { autoTrackExposure: !0 });
    return e?.id != null && t;
}
let s = (0, i.C)({
    kind: "user",
    id: "2023-04_guild_media_channel_post_preview_embed_users",
    label: "Guild Role Subscription Users",
    defaultConfig: { enabledForUser: !1 },
    treatments: [{ id: 1, label: "Enables for users Guild Media Post Preview Embeds", config: { enabledForUser: !0 } }],
});
function o() {
    let { enabledForUser: e } = s.useExperiment({ location: "96e84c_2" }, { autoTrackExposure: !0 });
    return e;
}
