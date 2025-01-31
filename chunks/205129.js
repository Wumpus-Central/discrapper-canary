n.d(t, { y: () => r });
var i = n(603113),
    l = n(122810);
function r(e) {
    return {
        af_voice_chat: e.voiceChannels.length > 0,
        af_people_count: e.partiedMembers.length,
        af_rich_presence: e.currentActivities.some((e) => {
            let { activity: t } = e;
            return (0, l.Z)(t);
        }),
        game_platform: e.currentActivities.length > 0 ? (0, i.Z)(e.currentActivities[0].activity) : null
    };
}
