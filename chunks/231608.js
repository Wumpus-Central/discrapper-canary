n.d(t, { o: () => l });
var r = n(855511),
    i = n(682261);
function l(e) {
    return {
        af_voice_chat: e.voiceChannels.length > 0,
        af_people_count: e.partiedMembers.length,
        af_rich_presence: e.currentActivities.some((e) => {
            let { activity: t } = e;
            return (0, i.A)(t);
        }),
        game_platform: e.currentActivities.length > 0 ? (0, r.A)(e.currentActivities[0].activity) : null,
    };
}
