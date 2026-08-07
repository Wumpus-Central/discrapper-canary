a.r(t), a.d(t, { playgroundConfig: () => H, guildSpaceCollection: () => k });
var l = a(477900),
    i = a(582128),
    o = a(503698),
    r = a.n(o),
    d = a(17928),
    s = a(228366),
    n = a(88592),
    c = a(593673),
    u = a(236053),
    h = a(8074);
let p = 0;
function g(e, t, a, l) {
    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
    return {
        id: e,
        type: t,
        default_title: null,
        position: { column: a, order: l },
        config: { type: t, ...i },
        requires_hydration: t === c.a.LEADERBOARD,
    };
}
var m = a(86294);
let y = "guild-space-editor-story",
    v = {
        guild_id: y,
        header: { custom_banner_hash: null },
        widgets: [
            g("left-1", c.a.IMAGE_TEXT, 0, 0, {
                title: "Welcome to the server",
                body: "Drop in, say hi, and check the pinned posts for the rules and event schedule.",
            }),
            g("left-2", c.a.LEADERBOARD, 0, 1, { heading: "Top chatters this week" }),
            g("left-3", c.a.IMAGE_TEXT, 0, 2, { title: "Events", body: "Game night every Friday." }),
            g("right-1", c.a.LEADERBOARD, 1, 0, { heading: "Top boosters" }),
        ],
    },
    f = {
        entries: [
            { id: "1", name: "wumpus", score: 4821 },
            { id: "2", name: "clyde", score: 3960 },
        ],
    },
    w = {
        title: "Server Hub Editor",
        stories: [
            {
                name: "Server Hub grid (edit mode)",
                id: "guild-space-editor-grid",
                docs: "Edit-mode layout over a seeded draft. Drag a widget by its handle (or focus the handle and press Ctrl/Cmd+D, then arrow keys and Space) to reorder within a column or move it across columns; the dashed strip at the end of each column appends, and is the only way into a column once it is empty. The pencil opens the widget editor and Save writes into the draft store; the trash removes from the draft. Widget names come from guildSpaceWidgetTitles, untranslated placeholders standing in for the catalog the host does not fetch yet. Save/Cancel of the whole hub is page chrome and is deliberately not in this story, since it would issue a real PUT.",
                component: function (e) {
                    let { width: t } = e;
                    i.useEffect(() => {
                        s.h.dispatch({ type: "GUILD_SPACE_EDIT_START", guildId: y, space: v });
                        let e = p++,
                            t = v.widgets
                                .filter((e) => {
                                    let { requires_hydration: t } = e;
                                    return t;
                                })
                                .map((e) => {
                                    let { id: t } = e;
                                    return t;
                                });
                        return (
                            s.h.dispatch({ type: "GUILD_SPACE_HYDRATE_START", guildId: y, requestId: e, widgetIds: t }),
                            s.h.dispatch({
                                type: "GUILD_SPACE_HYDRATE_SUCCESS",
                                guildId: y,
                                requestId: e,
                                widgets: t.map((e) => ({ id: e, data: { type: c.a.LEADERBOARD, ...f } })),
                            }),
                            () => {
                                s.h.dispatch({ type: "GUILD_SPACE_EDIT_CANCEL", guildId: y });
                            }
                        );
                    }, []);
                    let a = (0, d.bG)([n.A], () => n.A.getDraft(y));
                    return null == a
                        ? null
                        : (0, l.jsx)("div", {
                              className: r()(m.frame, m[t]),
                              children: (0, l.jsx)(h.A, { guildId: y, widgets: a.widgets, widgetTitles: u.W }),
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
                },
            },
        ],
    };
var b = a(529609);
let E = [
        g("left-2", c.a.LEADERBOARD, 0, 1, { heading: "Top chatters this week" }),
        g("right-1", c.a.LEADERBOARD, 1, 0, { heading: "Top boosters" }),
        g("left-1", c.a.IMAGE_TEXT, 0, 0, {
            title: "Welcome to the server",
            body: "Drop in, say hi, and check the pinned posts for the rules and event schedule.",
            imageUrl: "https://placehold.co/640x180",
            imageAlt: "Server banner placeholder",
        }),
        g("right-2", c.a.IMAGE_TEXT, 1, 1, { title: "Events", body: "Game night every Friday." }),
    ],
    A = E.filter((e) => {
        let { requires_hydration: t } = e;
        return t;
    }).map((e) => {
        let { id: t } = e;
        return t;
    }),
    S = {
        entries: [
            { id: "1", name: "wumpus", score: 4821 },
            { id: "2", name: "clyde", score: 3960 },
            { id: "3", name: "nelly", score: 2715 },
        ],
    },
    _ = {
        title: "Server Hub Page",
        stories: [
            {
                name: "Server Hub grid (view mode)",
                id: "guild-space-grid",
                docs: "Read-only hub layout. Widgets are placed by position.column then position.order (the mock set is deliberately out of array order). Wide renders 2fr/1fr; narrow collapses to one column with the left column first. The hydration control drives the real GuildSpaceHydrationStore: ImageText never hydrates, the leaderboards do.",
                component: function (e) {
                    let t,
                        { width: a, hydration: o } = e,
                        d =
                            ((t = `guild-space-story-${o}`),
                            i.useEffect(() => {
                                let e = p++;
                                if (
                                    (s.h.dispatch({
                                        type: "GUILD_SPACE_HYDRATE_START",
                                        guildId: t,
                                        requestId: e,
                                        widgetIds: A,
                                    }),
                                    "loading" !== o)
                                ) {
                                    if ("error" === o)
                                        return void s.h.dispatch({
                                            type: "GUILD_SPACE_HYDRATE_FAILURE",
                                            guildId: t,
                                            requestId: e,
                                            retryable: !1,
                                        });
                                    s.h.dispatch({
                                        type: "GUILD_SPACE_HYDRATE_SUCCESS",
                                        guildId: t,
                                        requestId: e,
                                        widgets: A.map((e) => ({
                                            id: e,
                                            data: "success" === o ? { type: c.a.LEADERBOARD, ...S } : null,
                                        })),
                                    });
                                }
                            }, [t, o]),
                            t);
                    return (0, l.jsx)("div", {
                        className: r()(m.frame, m[a]),
                        children: (0, l.jsx)(b.A, { guildId: d, widgets: E }),
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
var T = a(834730),
    D = a(317574),
    I = a(992915);
function x(e) {
    let { label: t, className: a, children: i } = e;
    return (0, l.jsxs)("div", {
        className: `${I.Gt} ${a}`,
        children: [(0, l.jsx)(T.E, { variant: "text-xs/medium", color: "text-muted", children: t }), i],
    });
}
function C(e) {
    let { mode: t, hydration: a, type: o, title: r, initialConfig: d, successData: s } = e,
        [n, c] = i.useState(d),
        u = (0, l.jsx)(D.P, {
            widget: { id: "1", type: o, config: n },
            guildSpaceMode: t,
            title: r,
            hydration: (function (e, t) {
                switch (e) {
                    case "none":
                        return;
                    case "success":
                        return { status: "success", data: t };
                    default:
                        return { status: e };
                }
            })(a, s),
            onRemove: () => {},
            onCommitConfig: c,
        });
    return (0, l.jsxs)("div", {
        className: I.Zp,
        children: [
            (0, l.jsx)(x, { label: "Narrow column (380px)", className: I.sc, children: u }),
            (0, l.jsx)(x, { label: "Wide column (685px)", className: I.U, children: u }),
        ],
    });
}
let R = {
        text: "Drop in, say hi, and check the pinned posts for the rules and event schedule.",
        image_hash: "some_hash",
    },
    L = { heading: "Top chatters this week" },
    G = {
        entries: [
            { id: "1", name: "wumpus", score: 4821 },
            { id: "2", name: "clyde", score: 3960 },
            { id: "3", name: "nelly", score: 2715 },
            { id: "4", name: "a_very_long_username_that_truncates", score: 1204 },
        ],
    },
    k = {
        id: "guild-space",
        name: "Server Hub",
        groups: [
            _,
            w,
            {
                title: "Server Hub Widget Framework",
                stories: [
                    {
                        name: "WidgetSlot + ImageText",
                        id: "guild-space-widget-slot-image-text",
                        docs: "ImageText reference widget (no hydration) across view/edit and each mock hydration state. In edit mode the pencil opens the framework-owned Edit modal; Save commits config through onCommitConfig, Cancel/close discards.",
                        component: function (e) {
                            return (0, l.jsx)(C, {
                                ...e,
                                type: c.a.IMAGE_TEXT,
                                title: "Image + Text",
                                initialConfig: R,
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
                            return (0, l.jsx)(C, {
                                ...e,
                                type: c.a.LEADERBOARD,
                                title: "Leaderboard",
                                initialConfig: L,
                                successData: G,
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
        ],
        tags: ["Server Hub", "Widgets", "GuildSpace"],
    },
    H = { playgroundBaseUrl: "guild-space", collections: [k] };
