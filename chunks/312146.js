n.d(t, {
    Ui: () => o,
    p$: () => c
});
var a = n(818083),
    i = n(981631);
let r = (0, a.B)({
    kind: 'guild',
    id: '2023-03_guild_media_channel',
    label: 'Media Channel',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enables guild to create a media channel',
            config: { enabled: !0 }
        }
    ]
});
function o(e) {
    var t;
    let { enabled: n } = r.useExperiment(
        {
            guildId: null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : i.lds,
            location: '96e84c_1'
        },
        { autoTrackExposure: !0 }
    );
    return (null == e ? void 0 : e.id) != null && n;
}
let l = (0, a.B)({
    kind: 'user',
    id: '2023-04_guild_media_channel_post_preview_embed_users',
    label: 'Guild Role Subscription Users',
    defaultConfig: { enabledForUser: !1 },
    treatments: [
        {
            id: 1,
            label: 'Enables for users Guild Media Post Preview Embeds',
            config: { enabledForUser: !0 }
        }
    ]
});
function c() {
    let { enabledForUser: e } = l.useExperiment({ location: '96e84c_2' }, { autoTrackExposure: !0 });
    return e;
}
