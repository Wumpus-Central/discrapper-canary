t.d(e, { p: () => l });
var n = t(570140),
    r = t(752048),
    s = t(165630);
function l() {
    n.Z.dispatch({ type: "CHECKPOINT_FETCH_START" });
    try {
        let { sidekicks: i, guilds: e } = {
            sidekicks: r.Z.getUserAffinities()
                .slice(0, 3)
                .map((i) => ({
                    userId: i.otherUserId,
                    numMessagesSent: 39240,
                    numMinutesInVoice: 324,
                })),
            guilds: s.Z.affinities.slice(0, 3).map((i) => ({
                guildId: i.guildId,
                numMessagesSent: 3284,
                numMinutesListening: 42324,
                numMinutesSpeaking: 424,
            })),
        };
        n.Z.dispatch({
            type: "CHECKPOINT_FETCH_SUCCESS",
            data: {
                messages: {
                    numMessagesSent: 420,
                    numMessagesSentPercentile: 69,
                },
                voice: {
                    numMinutesInVoice: 42069,
                    numMinutesInVoicePercentile: 69.42,
                },
                guilds: {
                    guilds: e,
                    numGuildsJoined: 342,
                },
                sidekicks: i,
            },
        });
    } catch (i) {
        n.Z.dispatch({ type: "CHECKPOINT_FETCH_FAILED" });
    }
}
