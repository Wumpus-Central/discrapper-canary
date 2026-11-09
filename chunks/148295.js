var r,
    i =
        588245 != a.j
            ? (((r = {})[(r.DEFAULT = 0)] = "DEFAULT"),
              (r[(r.NO_PERSONAL_DATA = 1)] = "NO_PERSONAL_DATA"),
              (r[(r.ZERO_DATA = 2)] = "ZERO_DATA"),
              r)
            : null;
let s = { voice: { totalVoiceMinutes: 54423, totalVoiceMinutesPercentile: 92 } },
    n = {
        voice: { totalVoiceMinutes: 0, totalVoiceMinutesPercentile: 0 },
        messages: { numMessagesSent: 0, numMessagesSentPercentile: 0 },
        guilds: { guilds: [] },
        emojis: { numEmojisSent: 0, numEmojisSentPercentile: 0, emojis: [] },
        games: {
            totalGamesPlayed: 0,
            totalGamesPlayedPercentile: 0,
            games: [],
            totalDaysPlayed: 0,
            totalDaysPlayedPercentile: 0,
        },
        sidekick: null,
        users: [],
        power: { powerLevel: 0, powerLevelPercentile: 0 },
    };
a.d(
    t,
    {},
    {
        S: i,
        g: function (e) {
            switch (e) {
                case 0:
                    return s;
                case 1:
                    return null;
                case 2:
                    return n;
            }
        },
    },
);
