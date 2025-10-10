e.d(i, { p2: () => r });
var n = e(818083),
    l = e(981631);
let s = (0, n.B)({
        kind: "user",
        id: "2023-11_voice_activity_notification_user",
        label: "Voice Activity Notifications for User",
        defaultConfig: { enabled: !1 },
        treatments: [
            {
                id: 1,
                label: "Voice Activity Notifications are enabled for user",
                config: { enabled: !0 },
            },
            {
                id: 2,
                label: "Control for AA test. Voice Activity Notifications are NOT enabled for user.",
                config: { enabled: !1 },
            },
        ],
    }),
    a = (0, n.B)({
        kind: "guild",
        id: "2023-11_voice_activity_notification_guild",
        label: "General Voice Channel Notifications for Guild",
        defaultConfig: { voiceChannelActivityNotifsEnabled: !1 },
        treatments: [
            {
                id: 2,
                label: "Deadchat notifs disabled, voice channel activity notifs enabled",
                config: { voiceChannelActivityNotifsEnabled: !0 },
            },
        ],
    });
function r(t) {
    var i;
    let { voiceChannelActivityNotifsEnabled: e } = a.useExperiment(
            {
                location: "useVoiceActivityNotificationSettingsExperiment",
                guildId: null != (i = null == t ? void 0 : t.getGuildId()) ? i : l.lds,
            },
            {
                disable: (null == t ? void 0 : t.type) !== l.d4z.GUILD_VOICE,
                autoTrackExposure: !1,
            },
        ),
        { enabled: n } = s.useExperiment(
            { location: "useVoiceActivityNotificationSettingsExperiment" },
            {
                disable: (null == t ? void 0 : t.type) !== l.d4z.GUILD_VOICE || !e,
                autoTrackExposure: !0,
            },
        );
    return (null == t ? void 0 : t.type) === l.d4z.GUILD_VOICE && e && n;
}
