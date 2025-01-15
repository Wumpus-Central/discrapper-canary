o.d(r, {
    Ui: function () {
        return n;
    },
    p$: function () {
        return i;
    }
});
var a = o(818083),
    d = o(981631);
let t = (0, a.B)({
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
function n(e) {
    var r;
    let { enabled: o } = t.useExperiment(
        {
            guildId: null !== (r = null == e ? void 0 : e.id) && void 0 !== r ? r : d.lds,
            location: '96e84c_1'
        },
        { autoTrackExposure: !0 }
    );
    return (null == e ? void 0 : e.id) != null && o;
}
let c = (0, a.B)({
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
function i() {
    let { enabledForUser: e } = c.useExperiment({ location: '96e84c_2' }, { autoTrackExposure: !0 });
    return e;
}
