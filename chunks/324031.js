a.d(t, { playgroundConfig: () => ee });
var l = a(477900),
    s = a(582128),
    n = a(503698),
    r = a.n(n),
    i = a(834730),
    d = a(872188),
    o = a(450284);
let u = {
    title: "Server Hub Publishing",
    stories: [
        {
            name: "Draft notice (publish)",
            id: "guild-space-draft-notice",
            docs: "The admin-only bar shown while a hub is unpublished; members can't reach a draft hub at all. Publishing is what reveals the tab to the rest of the server, and it unmounts the notice \u2014 the success case swaps in a placeholder because the real page stops rendering it. Success also fires a screen-reader announcement, since a bar disappearing is otherwise silent. No control triggers a real request.",
            component: function (e) {
                let { width: t, outcome: a } = e,
                    [n, u] = s.useState(!1),
                    [c, _] = s.useState(a);
                c !== a && (_(a), u(!1));
                let m = s.useCallback(() => {
                    switch (a) {
                        case "success":
                            return (u(!0), Promise.resolve());
                        case "failure":
                            return Promise.reject(Error("story"));
                        case "pending":
                            return new Promise(() => {});
                    }
                }, [a]);
                return (0, l.jsx)("div", {
                    className: r()(o.frame, o[t]),
                    children: n
                        ? (0, l.jsx)(i.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children:
                                  "Published \u2014 the real notice unmounts here, and the tab appears for members.",
                          })
                        : (0, l.jsx)(d.A, { onPublish: m }),
                });
            },
            controls: {
                width: {
                    label: "Page width",
                    type: "select",
                    defaultValue: "wide",
                    options: [
                        { label: "Wide (1100px)", value: "wide" },
                        { label: "Narrow (320px, reflow floor)", value: "narrow" },
                    ],
                },
                outcome: {
                    label: "Publish outcome",
                    type: "select",
                    defaultValue: "success",
                    options: [
                        { label: "Succeeds (notice unmounts)", value: "success" },
                        { label: "Fails (inline error, role=alert)", value: "failure" },
                        { label: "Never settles (holds loading state)", value: "pending" },
                    ],
                },
            },
        },
    ],
};
a(321073);
var c = a(855986),
    _ = a(331322),
    m = a(994500),
    p = a(711014),
    g = a(287809),
    h = a(927813),
    b = a(427262),
    x = a(593673),
    y = a(518782),
    A = a(100335),
    f = a(904109),
    v = a(282435);
let S = [...v.sx.slice(0, 2), "1442738138211553383", ...v.sx.slice(2, 9)],
    E = [
        { days: 7, totalSeconds: 7 * h.A.Seconds.DAY - 60, gameIndexes: [0, 1, 2, 3, 4, 5, 6, 7] },
        { days: 7, totalSeconds: 32 * h.A.Seconds.HOUR + 2400, gameIndexes: [1, 2, 3, 4, 5, 6, 8] },
        { days: 5, totalSeconds: 26 * h.A.Seconds.HOUR + 3e3, gameIndexes: [0, 2, 4, 6, 8, 9] },
        { days: 4, totalSeconds: 21 * h.A.Seconds.HOUR, gameIndexes: [1, 3, 5, 7, 9] },
        { days: 3, totalSeconds: 14 * h.A.Seconds.HOUR, gameIndexes: [0, 1, 2, 3, 4] },
        { days: 2, totalSeconds: 9 * h.A.Seconds.HOUR + 2880, gameIndexes: [2, 4, 6, 8] },
        { days: 2, totalSeconds: 8 * h.A.Seconds.HOUR + 720, gameIndexes: [0, 3, 5, 9] },
        { days: 1, totalSeconds: 7 * h.A.Seconds.HOUR + 2280, gameIndexes: [1, 4, 7] },
        { days: 1, totalSeconds: 6 * h.A.Seconds.HOUR + 720, gameIndexes: [0, 2, 8] },
        { days: 1, totalSeconds: 5 * h.A.Seconds.HOUR + 1140, gameIndexes: [3, 6] },
        { days: 1, totalSeconds: 4 * h.A.Seconds.HOUR + 3420, gameIndexes: [1, 9] },
        { days: 1, totalSeconds: 4 * h.A.Seconds.HOUR + 2760, gameIndexes: [0, 5] },
        { days: 1, totalSeconds: 3 * h.A.Seconds.HOUR + 2100, gameIndexes: [4] },
        { days: 1, totalSeconds: 2 * h.A.Seconds.HOUR + 3060, gameIndexes: [7] },
        { days: 1, totalSeconds: +h.A.Seconds.HOUR + 1320, gameIndexes: [2] },
        { days: 1, totalSeconds: 3480, gameIndexes: [5] },
        { days: 1, totalSeconds: 2820, gameIndexes: [8] },
        { days: 1, totalSeconds: 2160, gameIndexes: [0] },
        { days: 1, totalSeconds: 1440, gameIndexes: [6] },
        { days: 1, totalSeconds: 660, gameIndexes: [9] },
    ];
function w(e, t, a, l) {
    let s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
    return {
        id: e,
        type: t,
        default_title: null,
        position: { column: a, order: l },
        config: { type: t, ...s },
        requires_hydration: t === x.a.LEADERBOARD,
        locked: !1,
    };
}
var I = a(546184);
let D = w("leaderboard", x.a.LEADERBOARD, 0, 0),
    k = {
        winningStat: y.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED,
        winningStreak: 1,
        winningValue: 40 * h.A.Millis.HOUR + 33 * h.A.Millis.MINUTE,
    },
    R = { ...k, winningStreak: 3 },
    j = { currentLeaderStat: y.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED };
function G(e) {
    let { label: t, className: a, children: s } = e;
    return (0, l.jsxs)("div", {
        className: r()(I.Gt, a),
        children: [(0, l.jsx)(i.E, { variant: "body-xs/medium", color: "text-muted", children: t }), s],
    });
}
let N = {
    name: "Gaming Leaderboard",
    id: "guild-space-gaming-leaderboard",
    component: function (e) {
        let t,
            a,
            { state: n, stat: r, currentUserPlacement: d } = e,
            o = (0, c.bG)([g.default], () => g.default.getCurrentUser()?.id),
            u = (0, c.bG)([p.Ay], () => p.Ay.getFlattenedGuildIds()[0]),
            x =
                ((t = (0, c.yK)([m.A], () => m.A.getFriendIDs())),
                s.useMemo(
                    () =>
                        t
                            .flatMap((e) => {
                                let t = g.default.getUser(e);
                                return null == t ? [] : [{ id: e, name: b.Ay.getName(t) }];
                            })
                            .sort((e, t) => e.name.localeCompare(t.name))
                            .slice(0, 30)
                            .map((e) => {
                                let { id: t } = e;
                                return t;
                            }),
                    [t],
                ));
        if (null == u || 0 === x.length)
            return (0, l.jsx)(i.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                children: "Waiting for the client to load a guild and your friends list\u2026",
            });
        let v = (function (e) {
                let {
                        memberIds: t,
                        gameIds: a = S,
                        stat: l = y.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED,
                        entryCount: s = E.length,
                        ended: n = !1,
                    } = e,
                    r = 0 === t.length ? [] : E.slice(0, s),
                    i = Math.floor(Date.now() / 1e3),
                    d = (i - (n ? 8 : 3) * h.A.Seconds.DAY) * h.A.Millis.SECOND,
                    o = Math.floor(d / h.A.Millis.DAY) * h.A.Millis.DAY;
                return {
                    stat: l,
                    week_start_ts: d / h.A.Millis.SECOND,
                    next_stat: y.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED,
                    computed_at: new Date((i - h.A.Seconds.DAY) * 1e3).toISOString(),
                    day_pt: new Date(o + 6 * !!n * h.A.Millis.DAY).toISOString(),
                    entries: r.map((e, s) => ({
                        user_id: t[s % t.length],
                        value: (function (e, t) {
                            switch (t) {
                                case y.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
                                    return e.days;
                                case y.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
                                    return e.gameIndexes.length;
                                default:
                                    return 1e3 * e.totalSeconds;
                            }
                        })(e, l),
                        rank: s + 1,
                        application_ids: e.gameIndexes.flatMap((e) => a[e % a.length] ?? []).slice(0, 3),
                        application_count: e.gameIndexes.length,
                        time_played_seconds: e.totalSeconds,
                    })),
                };
            })({ memberIds: x, stat: r, entryCount: "empty" === n ? 2 : 20, ended: "ended" === n }),
            w = "on-podium" === d ? 2 : 12,
            N = "absent" !== d && "outside-list" !== d && null != o,
            M = { ...v, entries: N ? v.entries.map((e) => (e.rank === w ? { ...e, user_id: o } : e)) : v.entries };
        ("outside-list" === d &&
            null != o &&
            M.entries.push({
                user_id: o,
                value: v.entries[v.entries.length - 1].value,
                rank: 25,
                application_ids: v.entries[v.entries.length - 1].application_ids,
                application_count: v.entries[v.entries.length - 1].application_count,
                time_played_seconds: v.entries[v.entries.length - 1].time_played_seconds,
            }),
            (a =
                "loading" === n
                    ? { status: "loading" }
                    : "error" === n
                      ? { status: "error" }
                      : { status: "success", data: M }));
        let P = (0, l.jsx)(f.P, { guildId: u, widget: D, guildSpaceMode: "view", hydration: a });
        return (0, l.jsxs)("div", {
            className: I.Zp,
            children: [
                (0, l.jsx)(G, { label: "Narrow column (380px)", className: I.sc, children: P }),
                (0, l.jsx)(G, { label: "Wide column (685px)", className: I.U, children: P }),
                null != o
                    ? (0, l.jsx)(G, {
                          label: "Badges",
                          children: (0, l.jsxs)(_.B, {
                              gap: 16,
                              children: [
                                  (0, l.jsxs)(_.B, {
                                      direction: "horizontal",
                                      align: "center",
                                      gap: 8,
                                      children: [
                                          (0, l.jsx)(i.E, { variant: "body-sm/normal", children: "Winner" }),
                                          (0, l.jsx)(A.J, { guildId: u, userId: o, winnerData: k, leaderData: null }),
                                      ],
                                  }),
                                  (0, l.jsxs)(_.B, {
                                      direction: "horizontal",
                                      align: "center",
                                      gap: 8,
                                      children: [
                                          (0, l.jsx)(i.E, {
                                              variant: "body-sm/normal",
                                              children: "Winner on a streak",
                                          }),
                                          (0, l.jsx)(A.J, { guildId: u, userId: o, winnerData: R, leaderData: null }),
                                      ],
                                  }),
                                  (0, l.jsxs)(_.B, {
                                      direction: "horizontal",
                                      align: "center",
                                      gap: 8,
                                      children: [
                                          (0, l.jsx)(i.E, { variant: "body-sm/normal", children: "Current leader" }),
                                          (0, l.jsx)(A.J, { guildId: u, userId: o, winnerData: null, leaderData: j }),
                                      ],
                                  }),
                              ],
                          }),
                      })
                    : null,
            ],
        });
    },
    controls: {
        state: {
            label: "State",
            type: "select",
            defaultValue: "active",
            options: [
                { label: "Week in progress", value: "active" },
                { label: "Week ended", value: "ended" },
                { label: "Not enough data (2 members)", value: "empty" },
                { label: "Loading", value: "loading" },
                { label: "Error", value: "error" },
            ],
        },
        stat: {
            label: "Stat",
            type: "select",
            defaultValue: y.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED,
            options: [
                { label: "Most Game Days", value: y.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED },
                { label: "Most Game Time", value: y.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED },
                { label: "Most Unique Games", value: y.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED },
            ],
        },
        currentUserPlacement: {
            label: "Your placement",
            type: "select",
            defaultValue: "off-podium",
            options: [
                { label: "Outside the top three (rank 12)", value: "off-podium" },
                { label: "Inside the top three (rank 2)", value: "on-podium" },
                { label: "Outside the list (rank 25)", value: "outside-list" },
                { label: "Not in the standings", value: "absent" },
            ],
        },
    },
};
a(347661);
let M = v.sx.slice(0, 5),
    P = [8, 6, 5, 4, 3];
function U(e) {
    let { memberIds: t, gameIds: a = M, entryCount: l = P.length, totalUsers: s = 42, totalGames: n = 89 } = e,
        r = (0 === t.length ? [] : P.slice(0, l)).map((e, l) => ({
            application_id: a[l % a.length],
            total_users: e,
            user_ids: t.slice(0, 5),
        }));
    return {
        games: r,
        user_ids: 0 === r.length ? [] : t.slice(0, 6),
        total_users: 0 === r.length ? 0 : s,
        total_games: 0 === r.length ? 0 : n,
    };
}
let L = w("popular-games", x.a.POPULAR_GAMES, 0, 0);
function O(e) {
    let { label: t, className: a, children: s } = e;
    return (0, l.jsxs)("div", {
        className: `${I.Gt} ${a}`,
        children: [(0, l.jsx)(i.E, { variant: "body-xs/medium", color: "text-muted", children: t }), s],
    });
}
let C = {
    title: "Server Hub Popular Games",
    stories: [
        {
            name: "Popular Games",
            id: "guild-space-popular-games",
            component: function (e) {
                let t,
                    a,
                    { state: n } = e,
                    r = (0, c.bG)([p.Ay], () => p.Ay.getFlattenedGuildIds()[0]),
                    d =
                        ((t = (0, c.yK)([m.A], () => m.A.getFriendIDs())),
                        s.useMemo(
                            () =>
                                t
                                    .flatMap((e) => {
                                        let t = g.default.getUser(e);
                                        return null == t ? [] : [{ id: e, name: b.Ay.getName(t) }];
                                    })
                                    .sort((e, t) => e.name.localeCompare(t.name))
                                    .slice(0, 12)
                                    .map((e) => {
                                        let { id: t } = e;
                                        return t;
                                    }),
                            [t],
                        ));
                if (null == r || 0 === d.length)
                    return (0, l.jsx)(i.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        children: "Waiting for the client to load a guild and your friends list\u2026",
                    });
                a =
                    "few" === n
                        ? U({ memberIds: d, entryCount: 2, totalUsers: 6, totalGames: 2 })
                        : "empty" === n
                          ? U({ memberIds: d, entryCount: 2, totalUsers: 2 })
                          : U({ memberIds: d, entryCount: 5 });
                let o = (0, l.jsx)(f.P, {
                    guildId: r,
                    widget: L,
                    guildSpaceMode: "view",
                    hydration:
                        "loading" === n
                            ? { status: "loading" }
                            : "error" === n
                              ? { status: "error" }
                              : { status: "success", data: a },
                });
                return (0, l.jsxs)("div", {
                    className: I.Zp,
                    children: [
                        (0, l.jsx)(O, { label: "Narrow column (380px)", className: I.sc, children: o }),
                        (0, l.jsx)(O, { label: "Wide column (685px)", className: I.U, children: o }),
                    ],
                });
            },
            controls: {
                state: {
                    label: "State",
                    type: "select",
                    defaultValue: "populated",
                    options: [
                        { label: "Populated (5 games)", value: "populated" },
                        { label: "Few games (2)", value: "few" },
                        { label: "Not enough data (2 members)", value: "empty" },
                        { label: "Loading", value: "loading" },
                        { label: "Error", value: "error" },
                    ],
                },
            },
        },
    ],
};
var T = a(343508);
let H = [32, 21, 15, 14, 9],
    B = [3, 2, 0, 3, 1],
    Y = w("popular-music", x.a.POPULAR_MUSIC, 0, 0),
    W = ["1330000000000000101", "1330000000000000102", "1330000000000000103"],
    q = {
        ranked_songs: [
            {
                track_external_id: "2plbrEY59IikOBgBGLjaoe",
                track_title: "Creature In The Black Night",
                artist_external_id: "1vCWHaC5f2uS3yhpwWbIA6",
                artist_name: "Dayseeker",
                cover_art_hash: "ab67616d0000b273d2e5f0b0e0b0a0c0d0e0f001",
                plays: 21,
                unique_listeners: 8,
                plays_change_percent: 2,
                facepile_user_ids: W,
            },
            {
                track_external_id: "4eCwFoinvpIQi1kBEoAzQO",
                track_title: "New Genesis",
                artist_external_id: "6mEQK9m2krja6X1cfsAjfl",
                artist_name: "Ado",
                cover_art_hash: "ab67616d0000b273d2e5f0b0e0b0a0c0d0e0f002",
                plays: 17,
                unique_listeners: 6,
                plays_change_percent: -4,
                facepile_user_ids: W,
            },
            {
                track_external_id: "1BxfuPKGuaTgP7aM0Bbdwr",
                track_title: "Cruel Summer",
                artist_external_id: "06HL4z0CvFAxyc27GXpf02",
                artist_name: "Taylor Swift",
                cover_art_hash: "ab67616d0000b273d2e5f0b0e0b0a0c0d0e0f003",
                plays: 14,
                unique_listeners: 5,
                facepile_user_ids: W,
            },
            {
                track_external_id: "0V3wPSX9ygBnCm8psDIegu",
                track_title: "Anti-Hero",
                artist_external_id: "06HL4z0CvFAxyc27GXpf02",
                artist_name: "Taylor Swift",
                cover_art_hash: "ab67616d0000b273d2e5f0b0e0b0a0c0d0e0f004",
                plays: 11,
                unique_listeners: 5,
                facepile_user_ids: null,
            },
            {
                track_external_id: "3n3Ppam7vgaVa1iaRUc9Lp",
                track_title: "Mr. Brightside",
                artist_external_id: "0C0XlULifJtAgn6ZNCW2eu",
                artist_name: "The Killers",
                cover_art_hash: "ab67616d0000b273d2e5f0b0e0b0a0c0d0e0f005",
                plays: 9,
                unique_listeners: 4,
                facepile_user_ids: W,
            },
            {
                track_external_id: "2takcwOaAZWiXQijPHIx7B",
                track_title: null,
                artist_external_id: null,
                artist_name: null,
                cover_art_hash: null,
                plays: 6,
                unique_listeners: 2,
                facepile_user_ids: null,
            },
        ],
        ranked_artists: [
            {
                artist_external_id: "1vCWHaC5f2uS3yhpwWbIA6",
                artist_name: "Dayseeker",
                artist_image_hash: "ab6761610000e5ebd2e5f0b0e0b0a0c0d0e0f001",
                plays: 38,
                unique_listeners: 11,
            },
            {
                artist_external_id: "06HL4z0CvFAxyc27GXpf02",
                artist_name: "Taylor Swift",
                artist_image_hash: "ab6761610000e5ebd2e5f0b0e0b0a0c0d0e0f002",
                plays: 25,
                unique_listeners: 9,
            },
            {
                artist_external_id: "6mEQK9m2krja6X1cfsAjfl",
                artist_name: "Ado",
                artist_image_hash: null,
                plays: 17,
                unique_listeners: 6,
            },
            {
                artist_external_id: "0C0XlULifJtAgn6ZNCW2eu",
                artist_name: "The Killers",
                artist_image_hash: "ab6761610000e5ebd2e5f0b0e0b0a0c0d0e0f004",
                plays: 9,
                unique_listeners: 4,
            },
            {
                artist_external_id: "4gzpq5DPGxSnKTe4SA8HAU",
                artist_name: null,
                artist_image_hash: null,
                plays: 5,
                unique_listeners: 2,
            },
        ],
        top_listeners: [],
        plays_total: 1204,
        distinct_listeners: 14,
        distinct_songs: 482,
        distinct_artists: 6,
        listening_time_ms: 7704e4,
        plays_trend_pct: 0.02,
        computed_at: null,
    },
    F = {
        plays_total: 0,
        distinct_listeners: 0,
        distinct_songs: 0,
        distinct_artists: 0,
        listening_time_ms: 0,
        plays_trend_pct: null,
    },
    V = {
        ranked_songs: q.ranked_songs.map((e) => ({
            track_external_id: e.track_external_id,
            track_title: null,
            artist_external_id: null,
            artist_name: null,
            cover_art_hash: null,
            plays: e.plays,
            unique_listeners: e.unique_listeners,
        })),
        ranked_artists: q.ranked_artists.map((e) => ({
            artist_external_id: e.artist_external_id,
            artist_name: null,
            plays: e.plays,
            unique_listeners: e.unique_listeners,
        })),
        top_listeners: [],
        ...F,
        computed_at: null,
    },
    K = { ranked_songs: [], ranked_artists: [], top_listeners: [], ...F, computed_at: null },
    X = [
        {
            artist_external_id: "1vCWHaC5f2uS3yhpwWbIA6",
            artist_name: "Dayseeker",
            artist_image_hash: "ab6761610000e5ebd2e5f0b0e0b0a0c0d0e0f001",
        },
        {
            artist_external_id: "06HL4z0CvFAxyc27GXpf02",
            artist_name: "Taylor Swift",
            artist_image_hash: "ab6761610000e5ebd2e5f0b0e0b0a0c0d0e0f002",
        },
        { artist_external_id: "6mEQK9m2krja6X1cfsAjfl", artist_name: "Ado", artist_image_hash: null },
    ];
function z(e, t, a) {
    return {
        ...e,
        top_listeners: t.map((e, t) => {
            let l;
            return a
                ? ((l = q.ranked_songs[t % q.ranked_songs.length]),
                  {
                      user_id: e,
                      plays: H[t] ?? 1,
                      latest_track_external_id: 3 === t ? null : l.track_external_id,
                      latest_track_title: 3 === t ? null : l.track_title,
                      latest_artist_name: 3 === t ? null : l.artist_name,
                      latest_cover_art_hash: 3 === t ? null : l.cover_art_hash,
                      artists: X.slice(0, B[t] ?? 0),
                      artist_count: 0 === t ? 5 : null,
                  })
                : {
                      user_id: e,
                      plays: H[t] ?? 1,
                      latest_track_external_id: null,
                      latest_track_title: null,
                      latest_artist_name: null,
                      latest_cover_art_hash: null,
                      artists: [],
                  };
        }),
    };
}
function Q(e) {
    let { label: t, className: a, children: s } = e;
    return (0, l.jsxs)("div", {
        className: `${T.Gt} ${a}`,
        children: [(0, l.jsx)(i.E, { variant: "body-xs/medium", color: "text-muted", children: t }), s],
    });
}
function $(e) {
    let { label: t, className: a, children: s } = e;
    return (0, l.jsxs)("div", {
        className: `${I.Gt} ${a}`,
        children: [(0, l.jsx)(i.E, { variant: "body-xs/medium", color: "text-muted", children: t }), s],
    });
}
function Z(e) {
    let { mode: t, hydration: a, type: n, initialConfig: r, successData: i } = e,
        [d, o] = s.useState(r),
        u = (0, l.jsx)(f.P, {
            guildId: "widget-slot-story-guild",
            widget: { id: "1", type: n, config: d },
            guildSpaceMode: t,
            hydration: (function (e, t) {
                switch (e) {
                    case "none":
                        return;
                    case "success":
                        return { status: "success", data: t };
                    default:
                        return { status: e };
                }
            })(a, i),
            onRemove: () => {},
            onCommitConfig: o,
        });
    return (0, l.jsxs)("div", {
        className: I.Zp,
        children: [
            (0, l.jsx)($, { label: "Narrow column (380px)", className: I.sc, children: u }),
            (0, l.jsx)($, { label: "Wide column (685px)", className: I.U, children: u }),
        ],
    });
}
let J = {
        text: "Drop in, say hi, and check the pinned posts for the rules and event schedule.",
        image_hash: "some_hash",
    },
    ee = {
        playgroundBaseUrl: "guild-space",
        collections: [
            {
                id: "guild-space",
                name: "Server Hub",
                groups: [
                    u,
                    {
                        title: "Server Hub Widget Framework",
                        stories: [
                            {
                                name: "WidgetSlot + ImageText",
                                id: "guild-space-widget-slot-image-text",
                                docs: "ImageText reference widget (no hydration) across view/edit and each mock hydration state. In edit mode the pencil opens the framework-owned Edit modal; Save commits config through onCommitConfig, Cancel/close discards.",
                                component: function (e) {
                                    return (0, l.jsx)(Z, {
                                        ...e,
                                        type: x.a.IMAGE_TEXT,
                                        title: "Image + Text",
                                        initialConfig: J,
                                        successData: void 0,
                                    });
                                },
                                controls: {
                                    mode: {
                                        label: "Mode",
                                        type: "select",
                                        defaultValue: "view",
                                        options: [
                                            { label: "View", value: "view" },
                                            { label: "Edit", value: "edit" },
                                        ],
                                    },
                                    hydration: {
                                        label: "Hydration",
                                        type: "select",
                                        defaultValue: "none",
                                        options: [
                                            { label: "None (no hydration)", value: "none" },
                                            { label: "Idle", value: "idle" },
                                            { label: "Loading", value: "loading" },
                                            { label: "Success", value: "success" },
                                            { label: "Error", value: "error" },
                                        ],
                                    },
                                },
                            },
                        ],
                    },
                    { title: "Server Hub Gaming Leaderboard", stories: [N] },
                    {
                        title: "Server Hub Popular Music",
                        stories: [
                            {
                                name: "Popular Music",
                                id: "guild-space-popular-music",
                                docs: "Shows the Popular Music widget at wide, narrow, and minimum widths across populated, minimal, empty, loading, and error states.",
                                component: function (e) {
                                    let t,
                                        a,
                                        { state: n, mode: r, viewerPlacement: i } = e,
                                        d = (0, c.bG)([p.Ay], () => p.Ay.getFlattenedGuildIds()[0]),
                                        o = (function (e, t) {
                                            switch (e) {
                                                case "populated":
                                                    return { status: "success", data: z(q, t, !0) };
                                                case "minimal":
                                                    return { status: "success", data: z(V, t, !1) };
                                                case "empty":
                                                    return { status: "success", data: K };
                                                case "loading":
                                                    return { status: "loading" };
                                                case "error":
                                                    return { status: "error" };
                                            }
                                        })(
                                            n,
                                            ((t = (0, c.bG)([g.default], () => g.default.getCurrentUser()?.id)),
                                            (a = (0, c.yK)([m.A], () => m.A.getFriendIDs())),
                                            s.useMemo(() => {
                                                let e = a.filter((e) => null != g.default.getUser(e)).slice(0, 5);
                                                return ("listed" === i && null != t && e.splice(1, 1, t), e);
                                            }, [a, t, i])),
                                        );
                                    function u(e) {
                                        return (0, l.jsx)(
                                            f.P,
                                            {
                                                guildId: d ?? "popular-music-story-guild",
                                                widget: { ...Y, id: `${Y.id}-${e}` },
                                                guildSpaceMode: r,
                                                hydration: o,
                                                onRemove: () => {},
                                            },
                                            e,
                                        );
                                    }
                                    return (0, l.jsxs)("div", {
                                        className: T.Zp,
                                        children: [
                                            (0, l.jsx)(Q, {
                                                label: "Wide column (685px)",
                                                className: T.U,
                                                children: u("wide"),
                                            }),
                                            (0, l.jsx)(Q, {
                                                label: "Narrow column (380px)",
                                                className: T.sc,
                                                children: u("narrow"),
                                            }),
                                            (0, l.jsx)(Q, {
                                                label: "Minimum width (320px)",
                                                className: T.Bp,
                                                children: u("minimum"),
                                            }),
                                        ],
                                    });
                                },
                                controls: {
                                    state: {
                                        label: "State",
                                        type: "select",
                                        defaultValue: "populated",
                                        options: [
                                            { label: "Populated", value: "populated" },
                                            { label: "Minimal", value: "minimal" },
                                            { label: "Empty", value: "empty" },
                                            { label: "Loading", value: "loading" },
                                            { label: "Error", value: "error" },
                                        ],
                                    },
                                    mode: {
                                        label: "Mode",
                                        type: "select",
                                        defaultValue: "view",
                                        options: [
                                            { label: "View", value: "view" },
                                            { label: "Edit", value: "edit" },
                                        ],
                                    },
                                    viewerPlacement: {
                                        label: "Your placement",
                                        type: "select",
                                        defaultValue: "unlisted",
                                        options: [
                                            { label: "Outside the top listeners", value: "unlisted" },
                                            { label: "In the top listeners (rank 2)", value: "listed" },
                                        ],
                                    },
                                },
                            },
                        ],
                    },
                    C,
                ],
                tags: [
                    "Server Hub",
                    "Widgets",
                    "GuildSpace",
                    "Publish",
                    "Leaderboard",
                    "Popular Music",
                    "Popular Games",
                ],
            },
        ],
    };
