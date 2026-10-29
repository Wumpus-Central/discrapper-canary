n.d(t, {
    $p: () => g,
    BF: () => N,
    IH: () => p,
    Kr: () => f,
    XF: () => h,
    _R: () => S,
    bD: () => u,
    jr: () => v,
    nb: () => j,
    oL: () => x,
    uO: () => E,
    wj: () => d,
    y7: () => A,
    yQ: () => m,
});
var r = n(889227),
    a = n(149790),
    s = n(935208),
    l = n(105292);
let i = { hour: "numeric", minute: "2-digit", numberingSystem: "latn" },
    c = /^[A-Za-z.\s]+$/,
    o = /\s/g;
function u(e) {
    return null == e || e < 50 ? null : Math.max(1, Math.ceil(100 - e));
}
function d(e) {
    return new Intl.NumberFormat(l.intl.currentLocale, { notation: "compact", compactDisplay: "long" }).format(e);
}
function m(e) {
    return e / 87765;
}
function h(e) {
    if (null == e) return null;
    let t = new Date();
    t.setUTCHours(e, 0, 0, 0);
    let n = new Intl.DateTimeFormat(l.intl.currentLocale, i)
            .formatToParts(t)
            .find((e) => "dayPeriod" === e.type)?.value,
        r = null == n || c.test(n) ? i : { ...i, hourCycle: "h23" },
        a = new Intl.DateTimeFormat(l.intl.currentLocale, r).format(t);
    return { value: a.replace(o, ""), label: a };
}
function x(e) {
    return e?.sidekick != null;
}
function g(e) {
    return x(e) && (e?.users?.length ?? 0) > 0;
}
function f(e) {
    return Math.round(e?.voice?.totalVoiceMinutes ?? 0) > 0;
}
function j(e) {
    return Math.round(e?.messages?.numMessagesSent ?? 0) > 0;
}
function v(e) {
    return (e?.guilds?.guilds.length ?? 0) > 0;
}
function A(e) {
    return Math.round(e?.emojis?.numEmojisSent ?? 0) > 0 && (e?.emojis?.emojis.length ?? 0) > 0;
}
function p(e) {
    return Math.round(e?.games?.totalGamesPlayed ?? 0) > 0 && (e?.games?.games.length ?? 0) > 0;
}
function E(e) {
    return Math.round(e?.games?.totalDaysPlayed ?? 0) > 0;
}
function N(e) {
    let { voice: t, messages: n, guilds: s, emojis: l, games: i, sidekick: c, users: o, power: u } = e;
    return {
        voice: {
            totalVoiceMinutes: t.total_voice_minutes,
            totalVoiceMinutesPercentile: t.total_voice_minutes_percentile,
        },
        messages: { numMessagesSent: n.num_messages_sent, numMessagesSentPercentile: n.num_messages_sent_percentile },
        guilds: {
            guilds: s.guilds.map((e) => ({
                guild: (0, a.yF)(e.guild),
                numMessagesSent: e.num_messages_sent,
                numVoiceMinutes: e.num_voice_minutes,
                numDaysInteracted: e.num_days_interacted,
                numDaysInteractedPercentile: e.num_days_interacted_percentile,
            })),
        },
        emojis: {
            numEmojisSent: l.num_emojis_sent,
            numEmojisSentPercentile: l.num_emojis_sent_percentile,
            emojis: l.emojis,
        },
        games: {
            totalGamesPlayed: i.total_games_played,
            totalGamesPlayedPercentile: i.total_games_played_percentile,
            games: i.games.map((e) => {
                let { game: t, num_sessions: n } = e;
                return { game: C(t), numSessions: n };
            }),
            totalDaysPlayed: i.total_days_played,
            totalDaysPlayedPercentile: i.total_days_played_percentile,
        },
        sidekick:
            null != c
                ? { user: new r.A(c.user), numMessagesSent: c.num_messages_sent, numVoiceMinutes: c.num_voice_minutes }
                : null,
        users: o.map((e) => {
            let { user: t } = e;
            return new r.A(t);
        }),
        power: { powerLevel: u.power_level, powerLevelPercentile: u.power_level_percentile },
    };
}
function S(e) {
    let { voice: t, messages: n, guilds: r, emojis: s, games: l } = e;
    return {
        voice: { peakHourUtc: t.peak_hour_utc },
        messages: { numWordsSent: n.num_words_sent },
        guilds: {
            guildsByMembers: r.guilds_by_members.map((e) => {
                let { guild: t } = e;
                return (0, a.yF)(t);
            }),
        },
        emojis: {
            numEmojisSent: s.num_emojis_sent,
            numReactionsAdded: s.num_reactions_added,
            emojis: s.emojis.map((e) => {
                let { emoji: t } = e;
                return t;
            }),
        },
        games: {
            gamesByPlayers: l.games_by_players.map((e) => {
                let { game: t } = e;
                return C(t);
            }),
            newGamesByPlayers: l.new_games_by_players.map((e) => {
                let { game: t } = e;
                return C(t);
            }),
            indieGamesByPlayers: l.indie_games_by_players.map((e) => {
                let { game: t } = e;
                return C(t);
            }),
            gamesByStreamWatchMinutes: l.games_by_stream_watch_minutes.map((e) => {
                let { game: t } = e;
                return C(t);
            }),
            gamesByCoplayUsers: l.games_by_coplay_users.map((e) => {
                let { game: t } = e;
                return C(t);
            }),
            numUsersPlayedEveryDay: l.num_users_played_every_day,
        },
    };
}
function C(e) {
    return {
        id: s.default.cast(e.id),
        name: e.name,
        iconHash: e.icon_hash ?? void 0,
        bannerHash: e.banner_hash ?? void 0,
        coverImageHash: e.cover_image_hash ?? void 0,
    };
}
