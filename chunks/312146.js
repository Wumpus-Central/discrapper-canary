l.d(t, {
    Ui: () => i,
    p$: () => o
});
var n = l(818083),
    r = l(981631);
let a = (0, n.B)({
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
function i(e) {
    var t;
    let { enabled: l } = a.useExperiment(
        {
            guildId: null != (t = null == e ? void 0 : e.id) ? t : r.lds,
            location: '96e84c_1'
        },
        { autoTrackExposure: !0 }
    );
    return (null == e ? void 0 : e.id) != null && l;
}
let s = (0, n.B)({
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
function o() {
    let { enabledForUser: e } = s.useExperiment({ location: '96e84c_2' }, { autoTrackExposure: !0 });
    return e;
}
