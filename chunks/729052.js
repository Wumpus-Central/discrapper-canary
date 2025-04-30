n.d(t, {
    p2: () => s,
    vS: () => l
});
var r = n(818083),
    i = n(981631);
let o = (0, r.B)({
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
    a = (0, r.B)({
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
function s(e) {
    var t;
    let { voiceChannelActivityNotifsEnabled: n } = a.useExperiment(
            {
                location: 'useVoiceActivityNotificationSettingsExperiment',
                guildId: null != (t = null == e ? void 0 : e.getGuildId()) ? t : i.lds
            },
            {
                disable: (null == e ? void 0 : e.type) !== i.d4z.GUILD_VOICE,
                autoTrackExposure: !1
            }
        ),
        { enabled: r } = o.useExperiment(
            { location: 'useVoiceActivityNotificationSettingsExperiment' },
            {
                disable: (null == e ? void 0 : e.type) !== i.d4z.GUILD_VOICE || !n,
                autoTrackExposure: !0
            }
        );
    return (null == e ? void 0 : e.type) === i.d4z.GUILD_VOICE && n && r;
}
function l(e) {
    var t;
    let { voiceChannelActivityNotifsEnabled: n } = a.getCurrentConfig({
        guildId: null != (t = null == e ? void 0 : e.getGuildId()) ? t : i.lds,
        location: 'hasVoiceChannelActivityNotifsEnabled'
    });
    return n;
}
