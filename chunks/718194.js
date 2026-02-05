e.d(i, { YK: () => a });
var n = e(600975),
    r = e(652215);
let l = (0, n.C)({
        kind: "user",
        id: "2023-11_voice_activity_notification_user",
        label: "Voice Activity Notifications for User",
        defaultConfig: { enabled: !1 },
        treatments: [
            { id: 1, label: "Voice Activity Notifications are enabled for user", config: { enabled: !0 } },
            {
                id: 2,
                label: "Control for AA test. Voice Activity Notifications are NOT enabled for user.",
                config: { enabled: !1 },
            },
        ],
    }),
    s = (0, n.C)({
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
function a(t) {
    let { voiceChannelActivityNotifsEnabled: i } = s.useExperiment(
            { location: "useVoiceActivityNotificationSettingsExperiment", guildId: t?.getGuildId() ?? r.dJq },
            { disable: t?.type !== r.rbe.GUILD_VOICE, autoTrackExposure: !1 },
        ),
        { enabled: e } = l.useExperiment(
            { location: "useVoiceActivityNotificationSettingsExperiment" },
            { disable: t?.type !== r.rbe.GUILD_VOICE || !i, autoTrackExposure: !0 },
        );
    return t?.type === r.rbe.GUILD_VOICE && i && e;
}
