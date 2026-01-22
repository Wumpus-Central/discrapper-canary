n.d(t, {
    $k: () => l,
    Vf: () => s,
});
var r = n(600975),
    i = n(652215);
let a = (0, r.C)({
    kind: "guild",
    id: "2023-03_guild_media_channel",
    label: "Media Channel",
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: "Enables guild to create a media channel",
            config: { enabled: !0 },
        },
    ],
});
function s(e) {
    var t;
    let { enabled: n } = a.useExperiment(
        {
            guildId: null != (t = null == e ? void 0 : e.id) ? t : i.dJq,
            location: "96e84c_1",
        },
        { autoTrackExposure: !0 },
    );
    return (null == e ? void 0 : e.id) != null && n;
}
let o = (0, r.C)({
    kind: "user",
    id: "2023-04_guild_media_channel_post_preview_embed_users",
    label: "Guild Role Subscription Users",
    defaultConfig: { enabledForUser: !1 },
    treatments: [
        {
            id: 1,
            label: "Enables for users Guild Media Post Preview Embeds",
            config: { enabledForUser: !0 },
        },
    ],
});
function l() {
    let { enabledForUser: e } = o.useExperiment({ location: "96e84c_2" }, { autoTrackExposure: !0 });
    return e;
}
