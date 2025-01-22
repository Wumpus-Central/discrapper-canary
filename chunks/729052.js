r.d(n, {
    p2: function () {
        return l;
    },
    vS: function () {
        return u;
    }
});
var i = r(818083),
    a = r(981631);
let o = (0, i.B)({
        kind: 'user',
        id: '2023-11_voice_activity_notification_user',
        label: 'Voice Activity Notifications for User',
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: 'Voice Activity Notifications are enabled for user',
                config: { enabled: !0 }
            },
            {
                id: 2,
                label: 'Control for AA test. Voice Activity Notifications are NOT enabled for user.',
                config: { enabled: !1 }
            }
        ]
    }),
    s = (0, i.B)({
        kind: 'guild',
        id: '2023-11_voice_activity_notification_guild',
        label: 'General Voice Channel Notifications for Guild',
        defaultConfig: { voiceChannelActivityNotifsEnabled: !1 },
        treatments: [
            {
                id: 2,
                label: 'Deadchat notifs disabled, voice channel activity notifs enabled',
                config: { voiceChannelActivityNotifsEnabled: !0 }
            }
        ]
    });
function l(e) {
    var n;
    let { voiceChannelActivityNotifsEnabled: r } = s.useExperiment(
            {
                location: 'useVoiceActivityNotificationSettingsExperiment',
                guildId: null !== (n = null == e ? void 0 : e.getGuildId()) && void 0 !== n ? n : a.lds
            },
            {
                disable: (null == e ? void 0 : e.type) !== a.d4z.GUILD_VOICE,
                autoTrackExposure: !1
            }
        ),
        { enabled: i } = o.useExperiment(
            { location: 'useVoiceActivityNotificationSettingsExperiment' },
            {
                disable: (null == e ? void 0 : e.type) !== a.d4z.GUILD_VOICE || !r,
                autoTrackExposure: !0
            }
        );
    return (null == e ? void 0 : e.type) === a.d4z.GUILD_VOICE && r && i;
}
function u(e) {
    var n;
    let { voiceChannelActivityNotifsEnabled: r } = s.getCurrentConfig({
        guildId: null !== (n = null == e ? void 0 : e.getGuildId()) && void 0 !== n ? n : a.lds,
        location: 'hasVoiceChannelActivityNotifsEnabled'
    });
    return r;
}
