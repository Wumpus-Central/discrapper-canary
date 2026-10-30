(n.d(t, {
    $p: () => I,
    BF: () => C,
    IH: () => S,
    Kr: () => p,
    XF: () => h,
    _R: () => O,
    bD: () => u,
    jr: () => m,
    nb: () => T,
    oL: () => f,
    oW: () => _,
    uO: () => N,
    wj: () => E,
    y7: () => g,
    yQ: () => A,
}),
    n(134528),
    n(947204));
var i = n(889227),
    r = n(149790),
    a = n(935208),
    s = n(240248),
    l = n(105292);
let o = { hour: "numeric", minute: "2-digit", numberingSystem: "latn" },
    d = /^[A-Za-z.\s]+$/,
    c = /\s/g;
function u(e) {
    return null == e || e < 50 ? null : Math.max(1, Math.ceil(100 - e));
}
function _(e) {
    return Array.from((0, s.oN)(e))
        .at(0)
        ?.toLocaleUpperCase(l.intl.currentLocale);
}
function E(e) {
    return new Intl.NumberFormat(l.intl.currentLocale, { notation: "compact", compactDisplay: "long" }).format(e);
}
function A(e) {
    return e / 87765;
}
function h(e) {
    if (null == e) return null;
    let t = new Date();
    t.setUTCHours(e, 0, 0, 0);
    let n = new Intl.DateTimeFormat(l.intl.currentLocale, o)
            .formatToParts(t)
            .find((e) => "dayPeriod" === e.type)?.value,
        i = null == n || d.test(n) ? o : { ...o, hourCycle: "h23" },
        r = new Intl.DateTimeFormat(l.intl.currentLocale, i).format(t);
    return { value: r.replace(c, ""), label: r };
}
function f(e) {
    return e?.sidekick != null;
}
function I(e) {
    return f(e) && (e?.users?.length ?? 0) > 0;
}
function p(e) {
    return Math.round(e?.voice?.totalVoiceMinutes ?? 0) > 0;
}
function T(e) {
    return Math.round(e?.messages?.numMessagesSent ?? 0) > 0;
}
function m(e) {
    return (e?.guilds?.guilds.length ?? 0) > 0;
}
function g(e) {
    return Math.round(e?.emojis?.numEmojisSent ?? 0) > 0 && (e?.emojis?.emojis.length ?? 0) > 0;
}
function S(e) {
    return Math.round(e?.games?.totalGamesPlayed ?? 0) > 0 && (e?.games?.games.length ?? 0) > 0;
}
function N(e) {
    return Math.round(e?.games?.totalDaysPlayed ?? 0) > 0;
}
function C(e) {
    let { voice: t, messages: n, guilds: a, emojis: s, games: l, sidekick: o, users: d, power: c } = e;
    return {
        voice: {
            totalVoiceMinutes: t.total_voice_minutes,
            totalVoiceMinutesPercentile: t.total_voice_minutes_percentile,
        },
        messages: { numMessagesSent: n.num_messages_sent, numMessagesSentPercentile: n.num_messages_sent_percentile },
        guilds: {
            guilds: a.guilds.map((e) => ({
                guild: (0, r.yF)(e.guild),
                numMessagesSent: e.num_messages_sent,
                numVoiceMinutes: e.num_voice_minutes,
                numDaysInteracted: e.num_days_interacted,
                numDaysInteractedPercentile: e.num_days_interacted_percentile,
            })),
        },
        emojis: {
            numEmojisSent: s.num_emojis_sent,
            numEmojisSentPercentile: s.num_emojis_sent_percentile,
            emojis: s.emojis,
        },
        games: {
            totalGamesPlayed: l.total_games_played,
            totalGamesPlayedPercentile: l.total_games_played_percentile,
            games: l.games.map((e) => {
                let { game: t, num_sessions: n } = e;
                return { game: R(t), numSessions: n };
            }),
            totalDaysPlayed: l.total_days_played,
            totalDaysPlayedPercentile: l.total_days_played_percentile,
        },
        sidekick:
            null != o
                ? { user: new i.A(o.user), numMessagesSent: o.num_messages_sent, numVoiceMinutes: o.num_voice_minutes }
                : null,
        users: d.map((e) => {
            let { user: t } = e;
            return new i.A(t);
        }),
        power: { powerLevel: c.power_level, powerLevelPercentile: c.power_level_percentile },
    };
}
function O(e) {
    let { voice: t, messages: n, guilds: i, emojis: a, games: s } = e;
    return {
        voice: { peakHourUtc: t.peak_hour_utc },
        messages: { numWordsSent: n.num_words_sent },
        guilds: {
            guildsByMembers: i.guilds_by_members.map((e) => {
                let { guild: t } = e;
                return (0, r.yF)(t);
            }),
        },
        emojis: {
            numEmojisSent: a.num_emojis_sent,
            numReactionsAdded: a.num_reactions_added,
            emojis: a.emojis.map((e) => {
                let { emoji: t } = e;
                return t;
            }),
        },
        games: {
            gamesByPlayers: s.games_by_players.map((e) => {
                let { game: t } = e;
                return R(t);
            }),
            newGamesByPlayers: s.new_games_by_players.map((e) => {
                let { game: t } = e;
                return R(t);
            }),
            indieGamesByPlayers: s.indie_games_by_players.map((e) => {
                let { game: t } = e;
                return R(t);
            }),
            gamesByStreamWatchMinutes: s.games_by_stream_watch_minutes.map((e) => {
                let { game: t } = e;
                return R(t);
            }),
            gamesByCoplayUsers: s.games_by_coplay_users.map((e) => {
                let { game: t } = e;
                return R(t);
            }),
            numUsersPlayedEveryDay: s.num_users_played_every_day,
        },
    };
}
function R(e) {
    return {
        id: a.default.cast(e.id),
        name: e.name,
        iconHash: e.icon_hash ?? void 0,
        bannerHash: e.banner_hash ?? void 0,
        coverImageHash: e.cover_image_hash ?? void 0,
    };
}
