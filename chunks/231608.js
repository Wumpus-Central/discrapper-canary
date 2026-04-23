n.d(t, { o: () => l });
var i = n(855511),
    s = n(682261);
function l(e) {
    return {
        af_voice_chat: e.voiceChannels.length > 0,
        af_people_count: e.partiedMembers.length,
        af_rich_presence: e.currentActivities.some((e) => {
            let { activity: t } = e;
            return (0, s.A)(t);
        }),
        game_platform: e.currentActivities.length > 0 ? (0, i.A)(e.currentActivities[0].activity) : null,
    };
}
