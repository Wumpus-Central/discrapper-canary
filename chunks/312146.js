n.d(t, {
    Ui: function () {
        return a;
    },
    p$: function () {
        return d;
    }
});
var r = n(818083),
    o = n(981631);
let i = (0, r.B)({
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
function a(e) {
    var t;
    let { enabled: n } = i.useExperiment(
        {
            guildId: null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : o.lds,
            location: '96e84c_1'
        },
        { autoTrackExposure: !0 }
    );
    return (null == e ? void 0 : e.id) != null && n;
}
let l = (0, r.B)({
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
function d() {
    let { enabledForUser: e } = l.useExperiment({ location: '96e84c_2' }, { autoTrackExposure: !0 });
    return e;
}
