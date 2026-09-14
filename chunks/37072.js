(a.r(t), a.d(t, { playgroundConfig: () => H, guildSpaceCollection: () => U }));
var l = a(477900),
    r = a(582128),
    s = a(503698),
    n = a.n(s),
    i = a(834730),
    o = a(872188),
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
                    [s, u] = r.useState(!1),
                    [c, m] = r.useState(a);
                c !== a && (m(a), u(!1));
                let h = r.useCallback(() => {
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
                    className: n()(d.frame, d[t]),
                    children: s
                        ? (0, l.jsx)(i.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  "Published \u2014 the real notice unmounts here, and the tab appears for members.",
                          })
                        : (0, l.jsx)(o.A, { onPublish: h }),
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
function v(e, t, a, l) {
    let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
    return {
        id: e,
        type: t,
        default_title: null,
        position: { column: a, order: l },
        config: { type: t, ...r },
        requires_hydration: t === m.a.LEADERBOARD,
        locked: !1,
    };
}
var b = a(81253);
let _ = [
        v("left-2", m.a.LEADERBOARD, 0, 1, { heading: "Top chatters this week" }),
        v("right-1", m.a.LEADERBOARD, 1, 0, { heading: "Top boosters" }),
        v("left-1", m.a.IMAGE_TEXT, 0, 0, {
            title: "Welcome to the server",
            body: "Drop in, say hi, and check the pinned posts for the rules and event schedule.",
            imageUrl: "https://placehold.co/640x180",
            imageAlt: "Server banner placeholder",
        }),
        v("right-2", m.a.IMAGE_TEXT, 1, 1, { title: "Events", body: "Game night every Friday." }),
    ],
    f = _.filter((e) => {
        let { requires_hydration: t } = e;
        return t;
    }).map((e) => {
        let { id: t } = e;
        return t;
    }),
    y = {
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
    x = {
        title: "Server Hub Page",
        stories: [
            {
                name: "Server Hub grid (view mode)",
                id: "guild-space-grid",
                docs: "Read-only hub layout. Widgets are placed by position.column then position.order (the mock set is deliberately out of array order). Wide renders 2fr/1fr; narrow collapses to one column with the left column first. The hydration control drives the real GuildSpaceHydrationStore: ImageText never hydrates, the leaderboards do.",
                component: function (e) {
                    let t,
                        { width: a, hydration: s } = e,
                        i =
                            ((t = `guild-space-story-${s}`),
                            r.useEffect(() => {
                                let e = g++;
                                if (
                                    (c.h.dispatch({
                                        type: "GUILD_SPACE_HYDRATE_START",
                                        guildId: t,
                                        requestId: e,
                                        widgetIds: f,
                                    }),
                                    "loading" !== s)
                                ) {
                                    if ("error" === s)
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
                                        widgets: f.map((e) => ({
                                            id: e,
                                            data: "success" === s ? { type: m.a.LEADERBOARD, ...y } : null,
                                        })),
                                    });
                                }
                            }, [t, s]),
                            t);
                    return (0, l.jsx)("div", {
                        className: n()(b.frame, b[a]),
                        children: (0, l.jsx)(p.A, { canEdit: !0, guildId: i, widgets: _ }),
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
var w = a(17928),
    E = a(287809),
    A = a(539888),
    S = a(845021);
let D = "leaderboard-fixture-guild",
    R = [
        "wumpus",
        "clyde",
        "nelly",
        "gigi",
        "arcadia",
        "bramble",
        "pixelpanda",
        "quasar",
        "ravenwing",
        "sundrop",
        "thistle",
        "umbra",
        "vellum",
        "wisp",
        "xenon",
        "yarrow",
        "zephyr",
        "aurora",
        "basalt",
        "cinder",
        "dahlia",
        "ember",
    ];
function j(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return {
        stat: h.R.GAMING_LEADERBOARD_STAT_HOURS_PLAYED,
        week_start_ts: 0,
        entries: e,
        next_stat: h.R.GAMING_LEADERBOARD_STAT_DAYS_PLAYED,
        previous_winner: "1",
        streak_count: 1,
        ...t,
    };
}
let T = j([]);
var N = a(546184);
let k = v("leaderboard", m.a.LEADERBOARD, 0, 0);
function L(e) {
    let { children: t } = e;
    return (0, l.jsx)("div", { className: `${N.Gt} ${N.U}`, children: t });
}
function P(e) {
    let { label: t, className: a, children: r } = e;
    return (0, l.jsxs)("div", {
        className: `${N.Gt} ${a}`,
        children: [(0, l.jsx)(i.E, { variant: "text-xs/medium", color: "text-muted", children: t }), r],
    });
}
function I(e) {
    let { mode: t, hydration: a, type: s, initialConfig: n, successData: i } = e,
        [o, d] = r.useState(n),
        u = (0, l.jsx)(A.P, {
            guildId: "widget-slot-story-guild",
            widget: { id: "1", type: s, config: o },
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
            onCommitConfig: d,
        });
    return (0, l.jsxs)("div", {
        className: N.Zp,
        children: [
            (0, l.jsx)(P, { label: "Narrow column (380px)", className: N.sc, children: u }),
            (0, l.jsx)(P, { label: "Wide column (685px)", className: N.U, children: u }),
        ],
    });
}
let M = {
        text: "Drop in, say hi, and check the pinned posts for the rules and event schedule.",
        image_hash: "some_hash",
    },
    G = {},
    C = {
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
            x,
            u,
            {
                title: "Server Hub Widget Framework",
                stories: [
                    {
                        name: "WidgetSlot + ImageText",
                        id: "guild-space-widget-slot-image-text",
                        docs: "ImageText reference widget (no hydration) across view/edit and each mock hydration state. In edit mode the pencil opens the framework-owned Edit modal; Save commits config through onCommitConfig, Cancel/close discards.",
                        component: function (e) {
                            return (0, l.jsx)(I, {
                                ...e,
                                type: m.a.IMAGE_TEXT,
                                title: "Image + Text",
                                initialConfig: M,
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
                            return (0, l.jsx)(I, {
                                ...e,
                                type: m.a.LEADERBOARD,
                                title: "Leaderboard",
                                initialConfig: G,
                                successData: C,
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
            {
                title: "Server Hub Leaderboard",
                stories: [
                    {
                        name: "Rows",
                        id: "guild-space-leaderboard-rows",
                        component: function (e) {
                            let t,
                                { rowCount: a, viewerPlace: s } = e,
                                n =
                                    ((t = (0, w.bG)([E.default], () => E.default.getCurrentUser()?.id)),
                                    r.useMemo(() => {
                                        let e = Math.min(S.c, Math.max(1, Math.round(a))),
                                            l = Math.min(e, Math.max(1, Math.round(s))),
                                            r = Array.from({ length: e }, (e, t) =>
                                                (function (e) {
                                                    let { rank: t, ...a } = e;
                                                    return {
                                                        user_id: String(t),
                                                        name: R[(t - 1) % R.length],
                                                        value: Math.max(1, 500 - 20 * t),
                                                        rank: t,
                                                        application_ids: ["1"],
                                                        time_played_seconds: Math.max(600, 4e4 - 1500 * t),
                                                        ...a,
                                                    };
                                                })({ rank: t + 1, application_ids: ["1", "2"].slice(0, (t % 2) + 1) }),
                                            );
                                        return (null != t && (r[l - 1] = { ...r[l - 1], user_id: t }), j(r));
                                    }, [t, a, s]));
                            return (0, l.jsx)("div", {
                                className: N.Zp,
                                children: (0, l.jsx)(L, {
                                    children: (0, l.jsx)(A.P, {
                                        guildId: D,
                                        widget: k,
                                        guildSpaceMode: "view",
                                        hydration: { status: "success", data: n },
                                    }),
                                }),
                            });
                        },
                        controls: {
                            rowCount: { label: "Total rows [1, 20]", type: "number", defaultValue: 20 },
                            viewerPlace: { label: "Viewer ranking [1, rowCount]", type: "number", defaultValue: 1 },
                        },
                    },
                    {
                        name: "Empty leaderboard",
                        id: "guild-space-leaderboard-empty-fixture",
                        component: function () {
                            return (0, l.jsx)("div", {
                                className: N.Zp,
                                children: (0, l.jsx)(L, {
                                    children: (0, l.jsx)(A.P, {
                                        guildId: D,
                                        widget: k,
                                        guildSpaceMode: "view",
                                        hydration: { status: "success", data: T },
                                    }),
                                }),
                            });
                        },
                    },
                ],
            },
        ],
        tags: ["Server Hub", "Widgets", "GuildSpace", "Publish"],
    },
    H = { playgroundBaseUrl: "guild-space", collections: [U] };
