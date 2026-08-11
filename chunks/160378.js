a.r(t), a.d(t, { playgroundConfig: () => N, guildSpaceCollection: () => j });
var l = a(477900),
    s = a(582128),
    r = a(503698),
    i = a.n(r),
    o = a(834730),
    n = a(872188),
    d = a(737837);
let c = {
    title: "Server Hub Publishing",
    stories: [
        {
            name: "Draft notice (publish)",
            id: "guild-space-draft-notice",
            docs: "The admin-only bar shown while a hub is unpublished; members can't reach a draft hub at all. Publishing is what reveals the tab to the rest of the server, and it unmounts the notice \u2014 the success case swaps in a placeholder because the real page stops rendering it. Success also fires a screen-reader announcement, since a bar disappearing is otherwise silent. No control triggers a real request.",
            component: function (e) {
                let { width: t, outcome: a } = e,
                    [r, c] = s.useState(!1),
                    [u, h] = s.useState(a);
                u !== a && (h(a), c(!1));
                let p = s.useCallback(() => {
                    switch (a) {
                        case "success":
                            return c(!0), Promise.resolve();
                        case "failure":
                            return Promise.reject(Error("story"));
                        case "pending":
                            return new Promise(() => {});
                    }
                }, [a]);
                return (0, l.jsx)("div", {
                    className: i()(d.frame, d[t]),
                    children: r
                        ? (0, l.jsx)(o.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  "Published \u2014 the real notice unmounts here, and the tab appears for members.",
                          })
                        : (0, l.jsx)(n.A, { onPublish: p }),
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
var u = a(17928),
    h = a(228366),
    p = a(88592),
    m = a(593673),
    g = a(236053),
    b = a(8074);
let f = 0;
function v(e, t, a, l) {
    let s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
    return {
        id: e,
        type: t,
        default_title: null,
        position: { column: a, order: l },
        config: { type: t, ...s },
        requires_hydration: t === m.a.LEADERBOARD,
    };
}
var w = a(86294);
let y = "guild-space-editor-story",
    E = {
        guild_id: y,
        header: { custom_banner_hash: null },
        widgets: [
            v("left-1", m.a.IMAGE_TEXT, 0, 0, {
                title: "Welcome to the server",
                body: "Drop in, say hi, and check the pinned posts for the rules and event schedule.",
            }),
            v("left-2", m.a.LEADERBOARD, 0, 1, { heading: "Top chatters this week" }),
            v("left-3", m.a.IMAGE_TEXT, 0, 2, { title: "Events", body: "Game night every Friday." }),
            v("right-1", m.a.LEADERBOARD, 1, 0, { heading: "Top boosters" }),
        ],
    },
    S = {
        entries: [
            { id: "1", name: "wumpus", score: 4821 },
            { id: "2", name: "clyde", score: 3960 },
        ],
    },
    A = {
        title: "Server Hub Editor",
        stories: [
            {
                name: "Server Hub grid (edit mode)",
                id: "guild-space-editor-grid",
                docs: "Edit-mode layout over a seeded draft. Drag a widget by its handle (or focus the handle and press Ctrl/Cmd+D, then arrow keys and Space) to reorder within a column or move it across columns; the dashed strip at the end of each column appends, and is the only way into a column once it is empty. The pencil opens the widget editor and Save writes into the draft store; the trash removes from the draft. Widget names come from guildSpaceWidgetTitles, untranslated placeholders standing in for the catalog the host does not fetch yet. Save/Cancel of the whole hub is page chrome and is deliberately not in this story, since it would issue a real PUT.",
                component: function (e) {
                    let { width: t } = e;
                    s.useEffect(() => {
                        h.h.dispatch({ type: "GUILD_SPACE_EDIT_START", guildId: y, space: E });
                        let e = f++,
                            t = E.widgets
                                .filter((e) => {
                                    let { requires_hydration: t } = e;
                                    return t;
                                })
                                .map((e) => {
                                    let { id: t } = e;
                                    return t;
                                });
                        return (
                            h.h.dispatch({ type: "GUILD_SPACE_HYDRATE_START", guildId: y, requestId: e, widgetIds: t }),
                            h.h.dispatch({
                                type: "GUILD_SPACE_HYDRATE_SUCCESS",
                                guildId: y,
                                requestId: e,
                                widgets: t.map((e) => ({ id: e, data: { type: m.a.LEADERBOARD, ...S } })),
                            }),
                            () => {
                                h.h.dispatch({ type: "GUILD_SPACE_EDIT_CANCEL", guildId: y });
                            }
                        );
                    }, []);
                    let a = (0, u.bG)([p.A], () => p.A.getDraft(y));
                    return null == a
                        ? null
                        : (0, l.jsx)("div", {
                              className: i()(w.frame, w[t]),
                              children: (0, l.jsx)(b.A, { guildId: y, widgets: a.widgets, widgetTitles: g.W }),
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
var T = a(529609);
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
    D = _.filter((e) => {
        let { requires_hydration: t } = e;
        return t;
    }).map((e) => {
        let { id: t } = e;
        return t;
    }),
    x = {
        entries: [
            { id: "1", name: "wumpus", score: 4821 },
            { id: "2", name: "clyde", score: 3960 },
            { id: "3", name: "nelly", score: 2715 },
        ],
    },
    I = {
        title: "Server Hub Page",
        stories: [
            {
                name: "Server Hub grid (view mode)",
                id: "guild-space-grid",
                docs: "Read-only hub layout. Widgets are placed by position.column then position.order (the mock set is deliberately out of array order). Wide renders 2fr/1fr; narrow collapses to one column with the left column first. The hydration control drives the real GuildSpaceHydrationStore: ImageText never hydrates, the leaderboards do.",
                component: function (e) {
                    let t,
                        { width: a, hydration: r } = e,
                        o =
                            ((t = `guild-space-story-${r}`),
                            s.useEffect(() => {
                                let e = f++;
                                if (
                                    (h.h.dispatch({
                                        type: "GUILD_SPACE_HYDRATE_START",
                                        guildId: t,
                                        requestId: e,
                                        widgetIds: D,
                                    }),
                                    "loading" !== r)
                                ) {
                                    if ("error" === r)
                                        return void h.h.dispatch({
                                            type: "GUILD_SPACE_HYDRATE_FAILURE",
                                            guildId: t,
                                            requestId: e,
                                            retryable: !1,
                                        });
                                    h.h.dispatch({
                                        type: "GUILD_SPACE_HYDRATE_SUCCESS",
                                        guildId: t,
                                        requestId: e,
                                        widgets: D.map((e) => ({
                                            id: e,
                                            data: "success" === r ? { type: m.a.LEADERBOARD, ...x } : null,
                                        })),
                                    });
                                }
                            }, [t, r]),
                            t);
                    return (0, l.jsx)("div", {
                        className: i()(w.frame, w[a]),
                        children: (0, l.jsx)(T.A, { guildId: o, widgets: _ }),
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
var C = a(317574),
    R = a(992915);
function L(e) {
    let { label: t, className: a, children: s } = e;
    return (0, l.jsxs)("div", {
        className: `${R.Gt} ${a}`,
        children: [(0, l.jsx)(o.E, { variant: "text-xs/medium", color: "text-muted", children: t }), s],
    });
}
function P(e) {
    let { mode: t, hydration: a, type: r, title: i, initialConfig: o, successData: n } = e,
        [d, c] = s.useState(o),
        u = (0, l.jsx)(C.P, {
            widget: { id: "1", type: r, config: d },
            guildSpaceMode: t,
            title: i,
            hydration: (function (e, t) {
                switch (e) {
                    case "none":
                        return;
                    case "success":
                        return { status: "success", data: t };
                    default:
                        return { status: e };
                }
            })(a, n),
            onRemove: () => {},
            onCommitConfig: c,
        });
    return (0, l.jsxs)("div", {
        className: R.Zp,
        children: [
            (0, l.jsx)(L, { label: "Narrow column (380px)", className: R.sc, children: u }),
            (0, l.jsx)(L, { label: "Wide column (685px)", className: R.U, children: u }),
        ],
    });
}
let k = {
        text: "Drop in, say hi, and check the pinned posts for the rules and event schedule.",
        image_hash: "some_hash",
    },
    G = { heading: "Top chatters this week" },
    H = {
        entries: [
            { id: "1", name: "wumpus", score: 4821 },
            { id: "2", name: "clyde", score: 3960 },
            { id: "3", name: "nelly", score: 2715 },
            { id: "4", name: "a_very_long_username_that_truncates", score: 1204 },
        ],
    },
    j = {
        id: "guild-space",
        name: "Server Hub",
        groups: [
            I,
            A,
            c,
            {
                title: "Server Hub Widget Framework",
                stories: [
                    {
                        name: "WidgetSlot + ImageText",
                        id: "guild-space-widget-slot-image-text",
                        docs: "ImageText reference widget (no hydration) across view/edit and each mock hydration state. In edit mode the pencil opens the framework-owned Edit modal; Save commits config through onCommitConfig, Cancel/close discards.",
                        component: function (e) {
                            return (0, l.jsx)(P, {
                                ...e,
                                type: m.a.IMAGE_TEXT,
                                title: "Image + Text",
                                initialConfig: k,
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
                            return (0, l.jsx)(P, {
                                ...e,
                                type: m.a.LEADERBOARD,
                                title: "Leaderboard",
                                initialConfig: G,
                                successData: H,
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
        tags: ["Server Hub", "Widgets", "GuildSpace", "Publish"],
    },
    N = { playgroundBaseUrl: "guild-space", collections: [j] };
