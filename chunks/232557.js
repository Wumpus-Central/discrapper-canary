(a.r(t), a.d(t, { playgroundConfig: () => C, guildSpaceCollection: () => U }));
var l = a(477900),
    s = a(582128),
    n = a(503698),
    r = a.n(n),
    o = a(834730),
    i = a(872188),
    d = a(450284);
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
                    [c, m] = s.useState(a);
                c !== a && (m(a), u(!1));
                let h = s.useCallback(() => {
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
                    className: r()(d.frame, d[t]),
                    children: n
                        ? (0, l.jsx)(o.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  "Published \u2014 the real notice unmounts here, and the tab appears for members.",
                          })
                        : (0, l.jsx)(i.A, { onPublish: h }),
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
var c = a(228366),
    m = a(593673),
    h = a(518782),
    p = a(529609);
let g = 0;
function _(e, t, a, l) {
    let s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
    return {
        id: e,
        type: t,
        default_title: null,
        position: { column: a, order: l },
        config: { type: t, ...s },
        requires_hydration: t === m.a.LEADERBOARD,
        locked: !1,
    };
}
var b = a(81253);
let v = [
        _("left-2", m.a.LEADERBOARD, 0, 1, { heading: "Top chatters this week" }),
        _("right-1", m.a.LEADERBOARD, 1, 0, { heading: "Top boosters" }),
        _("left-1", m.a.IMAGE_TEXT, 0, 0, {
            title: "Welcome to the server",
            body: "Drop in, say hi, and check the pinned posts for the rules and event schedule.",
            imageUrl: "https://placehold.co/640x180",
            imageAlt: "Server banner placeholder",
        }),
        _("right-2", m.a.IMAGE_TEXT, 1, 1, { title: "Events", body: "Game night every Friday." }),
    ],
    y = v
        .filter((e) => {
            let { requires_hydration: t } = e;
            return t;
        })
        .map((e) => {
            let { id: t } = e;
            return t;
        }),
    A = {
        stat: h.R.GAMING_LEADERBOARD_STAT_HOURS_PLAYED,
        week_start_ts: 1756512e3,
        next_stat: h.R.GAMING_LEADERBOARD_STAT_DAYS_PLAYED,
        previous_winner: "2",
        streak_count: 3,
        entries: [
            { user_id: "1", name: "wumpus", value: 4821, rank: 1, application_ids: ["1"], time_played_seconds: 8400 },
            {
                user_id: "2",
                name: "clyde",
                value: 3960,
                rank: 2,
                application_ids: ["1", "2"],
                time_played_seconds: 6200,
            },
            { user_id: "3", name: "nelly", value: 2715, rank: 3, application_ids: ["2"], time_played_seconds: 4100 },
        ],
    },
    f = {
        title: "Server Hub Page",
        stories: [
            {
                name: "Server Hub grid (view mode)",
                id: "guild-space-grid",
                docs: "Read-only hub layout. Widgets are placed by position.column then position.order (the mock set is deliberately out of array order). Wide renders 2fr/1fr; narrow collapses to one column with the left column first. The hydration control drives the real GuildSpaceHydrationStore: ImageText never hydrates, the leaderboards do.",
                component: function (e) {
                    let t,
                        { width: a, hydration: n } = e,
                        o =
                            ((t = `guild-space-story-${n}`),
                            s.useEffect(() => {
                                let e = g++;
                                if (
                                    (c.h.dispatch({
                                        type: "GUILD_SPACE_HYDRATE_START",
                                        guildId: t,
                                        requestId: e,
                                        widgetIds: y,
                                    }),
                                    "loading" !== n)
                                ) {
                                    if ("error" === n)
                                        return void c.h.dispatch({
                                            type: "GUILD_SPACE_HYDRATE_FAILURE",
                                            guildId: t,
                                            requestId: e,
                                            retryable: !1,
                                        });
                                    c.h.dispatch({
                                        type: "GUILD_SPACE_HYDRATE_SUCCESS",
                                        guildId: t,
                                        requestId: e,
                                        widgets: y.map((e) => ({
                                            id: e,
                                            data: "success" === n ? { type: m.a.LEADERBOARD, ...A } : null,
                                        })),
                                    });
                                }
                            }, [t, n]),
                            t);
                    return (0, l.jsx)("div", {
                        className: r()(b.frame, b[a]),
                        children: (0, l.jsx)(p.A, { canEdit: !0, guildId: o, widgets: v }),
                    });
                },
                controls: {
                    width: {
                        label: "Page width",
                        type: "select",
                        defaultValue: "wide",
                        options: [
                            { label: "Wide (1100px, two columns)", value: "wide" },
                            { label: "Narrow (600px, collapsed)", value: "narrow" },
                        ],
                    },
                    hydration: {
                        label: "Hydration",
                        type: "select",
                        defaultValue: "success",
                        options: [
                            { label: "Success", value: "success" },
                            { label: "Loading", value: "loading" },
                            {
                                label: "Transient failure (holds loading; re-select to spend attempts)",
                                value: "retrying",
                            },
                            { label: "Error (non-retryable)", value: "error" },
                        ],
                    },
                },
            },
        ],
    };
var E = a(17928),
    S = a(994500),
    w = a(711014),
    x = a(287809),
    D = a(427262),
    R = a(539888);
let I = a(282435).sx.slice(0, 10),
    T = [
        { days: 7, totalSeconds: 137700, gameIndexes: [0, 1, 2, 3, 4, 5, 6, 7] },
        { days: 7, totalSeconds: 117600, gameIndexes: [1, 2, 3, 4, 5, 6, 8] },
        { days: 5, totalSeconds: 96600, gameIndexes: [0, 2, 4, 6, 8, 9] },
        { days: 4, totalSeconds: 76200, gameIndexes: [1, 3, 5, 7, 9] },
        { days: 3, totalSeconds: 52500, gameIndexes: [0, 1, 2, 3, 4] },
        { days: 2, totalSeconds: 35280, gameIndexes: [2, 4, 6, 8] },
        { days: 2, totalSeconds: 29520, gameIndexes: [0, 3, 5, 9] },
        { days: 1, totalSeconds: 27480, gameIndexes: [1, 4, 7] },
        { days: 1, totalSeconds: 22320, gameIndexes: [0, 2, 8] },
        { days: 1, totalSeconds: 19140, gameIndexes: [3, 6] },
        { days: 1, totalSeconds: 17820, gameIndexes: [1, 9] },
        { days: 1, totalSeconds: 17160, gameIndexes: [0, 5] },
        { days: 1, totalSeconds: 12900, gameIndexes: [4] },
        { days: 1, totalSeconds: 10260, gameIndexes: [7] },
        { days: 1, totalSeconds: 4920, gameIndexes: [2] },
    ];
var L = a(546184);
let G = _("leaderboard", m.a.LEADERBOARD, 0, 0);
function k(e) {
    let { label: t, className: a, children: s } = e;
    return (0, l.jsxs)("div", {
        className: `${L.Gt} ${a}`,
        children: [(0, l.jsx)(o.E, { variant: "text-xs/medium", color: "text-muted", children: t }), s],
    });
}
let N = {
    name: "Gaming Leaderboard",
    id: "guild-space-gaming-leaderboard",
    docs: 'Mock standings for the Gaming Leaderboard widget, fed from `makeLeaderboardStoryData` so the widget can be driven without a backend. Names, avatars and role colors resolve for real once the dev client has subscribed to the story guild; every other field on an entry is invented. The controls select data rather than a rendering: State picks whether the competition week is still running, has closed, or has too few members to rank, plus the two hydration failure modes. Stat picks which metric the standings are ordered by. "Your placement" decides which rank the signed-in viewer occupies, which is what gives the "you" row something to point at.',
    component: function (e) {
        let t,
            { state: a, stat: n, currentUserPlacement: r } = e,
            i = (0, E.bG)([x.default], () => x.default.getCurrentUser()?.id),
            d = (0, E.bG)([w.Ay], () => w.Ay.getFlattenedGuildIds()[0]),
            u =
                ((t = (0, E.yK)([S.A], () => S.A.getFriendIDs())),
                s.useMemo(
                    () =>
                        t
                            .flatMap((e) => {
                                let t = x.default.getUser(e);
                                return null == t ? [] : [{ id: e, name: D.Ay.getName(t) }];
                            })
                            .sort((e, t) => e.name.localeCompare(t.name))
                            .slice(0, 20)
                            .map((e) => {
                                let { id: t } = e;
                                return t;
                            }),
                    [t],
                ));
        if (null == d || 0 === u.length)
            return (0, l.jsx)(o.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: "Waiting for the client to load a guild and your friends list\u2026",
            });
        let c = (function (e) {
                let {
                        memberIds: t,
                        gameIds: a = I,
                        stat: l = h.R.GAMING_LEADERBOARD_STAT_DAYS_PLAYED,
                        entryCount: s = T.length,
                        ended: n = !1,
                    } = e,
                    r = 0 === t.length ? [] : T.slice(0, s);
                return {
                    stat: l,
                    week_start_ts: Math.floor(Date.now() / 1e3) - (n ? 8 : 3) * 86400,
                    next_stat: h.R.GAMING_LEADERBOARD_STAT_HOURS_PLAYED,
                    previous_winner: t[0],
                    streak_count: 3,
                    entries: r.map((e, s) => {
                        let n;
                        return {
                            user_id: (n = t[s % t.length]),
                            name: n,
                            value: (function (e, t) {
                                switch (t) {
                                    case h.R.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
                                        return e.days;
                                    case h.R.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
                                        return e.gameIndexes.length;
                                    default:
                                        return e.totalSeconds;
                                }
                            })(e, l),
                            rank: s + 1,
                            application_ids: e.gameIndexes.flatMap((e) => a[e % a.length] ?? []),
                            time_played_seconds: e.totalSeconds,
                        };
                    }),
                };
            })({ memberIds: u, stat: n, entryCount: "empty" === a ? 2 : void 0, ended: "ended" === a }),
            m = "on-podium" === r ? 2 : 12,
            p = {
                ...c,
                entries:
                    "absent" !== r && null != i
                        ? c.entries.map((e) => (e.rank === m ? { ...e, user_id: i } : e))
                        : c.entries,
            },
            g = (0, l.jsx)(R.P, {
                guildId: d,
                widget: G,
                guildSpaceMode: "view",
                hydration:
                    "loading" === a
                        ? { status: "loading" }
                        : "error" === a
                          ? { status: "error" }
                          : { status: "success", data: p },
            });
        return (0, l.jsxs)("div", {
            className: L.Zp,
            children: [
                (0, l.jsx)(k, { label: "Narrow column (380px)", className: L.sc, children: g }),
                (0, l.jsx)(k, { label: "Wide column (685px)", className: L.U, children: g }),
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
            defaultValue: h.R.GAMING_LEADERBOARD_STAT_DAYS_PLAYED,
            options: [
                { label: "Most Game Days", value: h.R.GAMING_LEADERBOARD_STAT_DAYS_PLAYED },
                { label: "Most Game Time", value: h.R.GAMING_LEADERBOARD_STAT_HOURS_PLAYED },
                { label: "Most Unique Games", value: h.R.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED },
            ],
        },
        currentUserPlacement: {
            label: "Your placement",
            type: "select",
            defaultValue: "off-podium",
            options: [
                { label: "Outside the top three (rank 12)", value: "off-podium" },
                { label: "Inside the top three (rank 2)", value: "on-podium" },
                { label: "Not in the standings", value: "absent" },
            ],
        },
    },
};
function P(e) {
    let { label: t, className: a, children: s } = e;
    return (0, l.jsxs)("div", {
        className: `${L.Gt} ${a}`,
        children: [(0, l.jsx)(o.E, { variant: "text-xs/medium", color: "text-muted", children: t }), s],
    });
}
function M(e) {
    let { mode: t, hydration: a, type: n, initialConfig: r, successData: o } = e,
        [i, d] = s.useState(r),
        u = (0, l.jsx)(R.P, {
            guildId: "widget-slot-story-guild",
            widget: { id: "1", type: n, config: i },
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
            })(a, o),
            onRemove: () => {},
            onCommitConfig: d,
        });
    return (0, l.jsxs)("div", {
        className: L.Zp,
        children: [
            (0, l.jsx)(P, { label: "Narrow column (380px)", className: L.sc, children: u }),
            (0, l.jsx)(P, { label: "Wide column (685px)", className: L.U, children: u }),
        ],
    });
}
let j = {
        text: "Drop in, say hi, and check the pinned posts for the rules and event schedule.",
        image_hash: "some_hash",
    },
    O = {},
    Y = {
        stat: h.R.GAMING_LEADERBOARD_STAT_HOURS_PLAYED,
        week_start_ts: 1756512e3,
        next_stat: h.R.GAMING_LEADERBOARD_STAT_DAYS_PLAYED,
        previous_winner: "2",
        streak_count: 3,
        entries: [
            { user_id: "1", name: "wumpus", value: 4821, rank: 1, application_ids: ["1"], time_played_seconds: 8400 },
            {
                user_id: "2",
                name: "clyde",
                value: 3960,
                rank: 2,
                application_ids: ["1", "2"],
                time_played_seconds: 6200,
            },
            { user_id: "3", name: "nelly", value: 2715, rank: 3, application_ids: ["2"], time_played_seconds: 4100 },
            {
                user_id: "4",
                name: "a_very_long_username_that_truncates",
                value: 1204,
                rank: 4,
                application_ids: ["2"],
                time_played_seconds: 2900,
            },
        ],
    },
    U = {
        id: "guild-space",
        name: "Server Hub",
        groups: [
            f,
            u,
            {
                title: "Server Hub Widget Framework",
                stories: [
                    {
                        name: "WidgetSlot + ImageText",
                        id: "guild-space-widget-slot-image-text",
                        docs: "ImageText reference widget (no hydration) across view/edit and each mock hydration state. In edit mode the pencil opens the framework-owned Edit modal; Save commits config through onCommitConfig, Cancel/close discards.",
                        component: function (e) {
                            return (0, l.jsx)(M, {
                                ...e,
                                type: m.a.IMAGE_TEXT,
                                title: "Image + Text",
                                initialConfig: j,
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
                    {
                        name: "WidgetSlot + Leaderboard",
                        id: "guild-space-widget-slot-leaderboard",
                        docs: "Leaderboard reference widget (hydrated) rendering content from the mock data prop on success, and the widget-owned loading/error states otherwise. The pencil opens the framework-owned Edit modal for its config.",
                        component: function (e) {
                            return (0, l.jsx)(M, {
                                ...e,
                                type: m.a.LEADERBOARD,
                                title: "Leaderboard",
                                initialConfig: O,
                                successData: Y,
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
                                defaultValue: "success",
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
        ],
        tags: ["Server Hub", "Widgets", "GuildSpace", "Publish", "Leaderboard"],
    },
    C = { playgroundBaseUrl: "guild-space", collections: [U] };
