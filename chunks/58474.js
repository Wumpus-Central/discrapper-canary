a.r(t), a.d(t, { playgroundConfig: () => W, guildSpaceCollection: () => H });
var l,
    i = a(627968),
    n = a(64700),
    s = a(834730),
    r =
        (((l = {}).LEADERBOARD = "leaderboard"),
        (l.WHITEBOARD = "whiteboard"),
        (l.POPULAR_MUSIC = "popular_music"),
        (l.IMAGE_TEXT = "image_text"),
        (l.LIVE_ACTIVITY = "live_activity"),
        l),
    o = a(503698),
    d = a.n(o),
    c = a(297264),
    u = a(866665),
    m = a(408278),
    g = a(22231),
    x = a(241326),
    h = a(451395),
    v = a(189213),
    p = a(192308),
    j = a(292666),
    b = a(821609),
    f = a(289873),
    y = a(738188),
    w = a(375708),
    E = a(308991);
function C() {
    return (0, i.jsx)("div", {
        className: E.w,
        children: (0, i.jsx)(f.y, { type: f.y.Type.SPINNING_CIRCLE, "aria-label": w.intl.string(w.t.ZTNur7) }),
    });
}
function N() {
    return (0, i.jsxs)("div", {
        className: E.w,
        role: "alert",
        children: [
            (0, i.jsx)(y.i, { size: "md", color: "text-feedback-critical", "aria-hidden": !0 }),
            (0, i.jsx)(s.E, { variant: "text-sm/normal", color: "text-muted", children: w.intl.string(w.t.F8FvUy) }),
        ],
    });
}
var k = a(172465);
function A(e) {
    return { title: e.title ?? "", body: e.body ?? "", imageUrl: e.imageUrl ?? "", imageAlt: e.imageAlt ?? "" };
}
var S = a(101464);
function T(e) {
    return { heading: e.heading ?? "" };
}
let I = {
    [r.IMAGE_TEXT]: {
        View: function (e) {
            let { config: t, hydration: a } = e;
            if (a?.status === "idle" || a?.status === "loading") return (0, i.jsx)(C, {});
            if (a?.status === "error") return (0, i.jsx)(N, {});
            let { title: l, body: n, imageUrl: r, imageAlt: o } = A(t);
            return (0, i.jsxs)("div", {
                className: k.Up,
                children: [
                    "" !== r && "" !== o && (0, i.jsx)("img", { className: k.Sl, src: r, alt: o }),
                    (0, i.jsxs)("div", {
                        className: k.Qq,
                        children: [
                            "" !== l &&
                                (0, i.jsx)(c.D, { variant: "heading-md/semibold", color: "text-strong", children: l }),
                            "" !== n &&
                                (0, i.jsx)(s.E, { variant: "text-sm/normal", color: "text-muted", children: n }),
                        ],
                    }),
                ],
            });
        },
        Edit: function (e) {
            let { config: t, commit: a, cancel: l } = e,
                [s, r] = n.useState(() => A(t)),
                o = n.useCallback((e, t) => r((a) => ({ ...a, [e]: t })), []);
            return (0, i.jsxs)("div", {
                className: k.hc,
                children: [
                    (0, i.jsx)(j.k, { label: "Title", value: s.title, onChange: (e) => o("title", e) }),
                    (0, i.jsx)(j.k, { label: "Body", value: s.body, onChange: (e) => o("body", e) }),
                    (0, i.jsx)(j.k, { label: "Image URL", value: s.imageUrl, onChange: (e) => o("imageUrl", e) }),
                    (0, i.jsx)(j.k, { label: "Image alt text", value: s.imageAlt, onChange: (e) => o("imageAlt", e) }),
                    (0, i.jsxs)("div", {
                        className: k.KA,
                        children: [
                            (0, i.jsx)(b.$, { variant: "secondary", text: w.intl.string(w.t["ETE/oC"]), onClick: l }),
                            (0, i.jsx)(b.$, {
                                variant: "primary",
                                text: w.intl.string(w.t["R3BPH+"]),
                                onClick: () => a(s),
                            }),
                        ],
                    }),
                ],
            });
        },
    },
    [r.LEADERBOARD]: {
        View: function (e) {
            var t;
            let a,
                { config: l, hydration: n } = e;
            if (null == n || "idle" === n.status || "loading" === n.status) return (0, i.jsx)(C, {});
            if ("error" === n.status) return (0, i.jsx)(N, {});
            let { heading: r } = T(l),
                { entries: o } =
                    ((t = n.data),
                    {
                        entries: (Array.isArray((a = t?.entries)) ? a : []).filter(
                            (e) => null != e && Number.isFinite(e.score),
                        ),
                    });
            return (0, i.jsxs)("div", {
                className: S.Up,
                children: [
                    "" !== r && (0, i.jsx)(c.D, { variant: "heading-md/semibold", color: "text-strong", children: r }),
                    (0, i.jsx)("ol", {
                        className: S.p_,
                        children: o.map((e, t) =>
                            (0, i.jsxs)(
                                "li",
                                {
                                    className: S.nM,
                                    children: [
                                        (0, i.jsx)(s.E, {
                                            variant: "text-sm/medium",
                                            color: "text-muted",
                                            className: S.Tm,
                                            children: t + 1,
                                        }),
                                        (0, i.jsx)(s.E, {
                                            variant: "text-sm/normal",
                                            color: "text-strong",
                                            className: S.UU,
                                            children: e.name,
                                        }),
                                        (0, i.jsx)(s.E, {
                                            variant: "text-sm/medium",
                                            color: "text-muted",
                                            children: e.score.toLocaleString(),
                                        }),
                                    ],
                                },
                                e.id,
                            ),
                        ),
                    }),
                ],
            });
        },
        Edit: function (e) {
            let { config: t, commit: a, cancel: l } = e,
                [s, r] = n.useState(() => T(t));
            return (0, i.jsxs)("div", {
                className: S.hc,
                children: [
                    (0, i.jsx)(j.k, { label: "Heading", value: s.heading, onChange: (e) => r({ heading: e }) }),
                    (0, i.jsxs)("div", {
                        className: S.KA,
                        children: [
                            (0, i.jsx)(b.$, { variant: "secondary", text: w.intl.string(w.t["ETE/oC"]), onClick: l }),
                            (0, i.jsx)(b.$, {
                                variant: "primary",
                                text: w.intl.string(w.t["R3BPH+"]),
                                onClick: () => a(s),
                            }),
                        ],
                    }),
                ],
            });
        },
    },
};
var _ = a(870985);
function D(e) {
    let {
            type: t,
            config: a,
            guildSpaceMode: l,
            title: n,
            hydration: s,
            onRemove: r,
            onCommitConfig: o,
            dragHandleRef: j,
        } = e,
        b = I[t];
    if (null == b) return null;
    let { View: f, Edit: y } = b,
        E = "edit" === l;
    return (0, i.jsxs)("div", {
        className: d()(_.kL, { [_.Dy]: E }),
        children: [
            E &&
                (0, i.jsxs)("div", {
                    className: _.wx,
                    children: [
                        (0, i.jsx)("div", { className: _.BU, children: (0, i.jsx)(h.jV, { buttonRef: j }) }),
                        (0, i.jsx)(c.D, {
                            variant: "heading-sm/semibold",
                            color: "text-strong",
                            className: _.DD,
                            children: n,
                        }),
                        (0, i.jsxs)("div", {
                            className: _.o1,
                            children: [
                                null != y &&
                                    null != o &&
                                    (0, i.jsx)(u.m, {
                                        text: w.intl.string(w.t.bt75uw),
                                        children: (0, i.jsx)(m.K, {
                                            variant: "secondary",
                                            size: "sm",
                                            icon: g.R,
                                            "aria-label": w.intl.string(w.t.bt75uw),
                                            onClick: () =>
                                                (function (e) {
                                                    let { title: t, config: a, Edit: l, onCommit: n } = e,
                                                        s = (e) =>
                                                            (0, i.jsx)(v.Modal, {
                                                                title: t,
                                                                actions: [],
                                                                ...e,
                                                                children: (0, i.jsx)(l, {
                                                                    config: a,
                                                                    commit: function (t) {
                                                                        n(t), e.onClose();
                                                                    },
                                                                    cancel: function () {
                                                                        e.onClose();
                                                                    },
                                                                }),
                                                            });
                                                    (0, p.openModalLazy)(() => Promise.resolve(s), {
                                                        modalKey: "guild-space-widget-edit",
                                                    });
                                                })({ title: n, config: a, Edit: y, onCommit: o }),
                                        }),
                                    }),
                                null != r &&
                                    (0, i.jsx)(u.m, {
                                        text: w.intl.string(w.t.Mm07Yc),
                                        children: (0, i.jsx)(m.K, {
                                            variant: "critical-secondary",
                                            size: "sm",
                                            icon: x.u,
                                            "aria-label": w.intl.string(w.t.Mm07Yc),
                                            onClick: r,
                                        }),
                                    }),
                            ],
                        }),
                    ],
                }),
            (0, i.jsx)("div", {
                className: _.rf,
                children: (0, i.jsx)(f, { config: a, hydration: s, guildSpaceMode: l }),
            }),
        ],
    });
}
var U = a(992915);
function L(e) {
    let { label: t, className: a, children: l } = e;
    return (0, i.jsxs)("div", {
        className: `${U.Gt} ${a}`,
        children: [(0, i.jsx)(s.E, { variant: "text-xs/medium", color: "text-muted", children: t }), l],
    });
}
function R(e) {
    let { mode: t, hydration: a, type: l, title: s, initialConfig: r, successData: o } = e,
        [d, c] = n.useState(r),
        u = (0, i.jsx)(D, {
            type: l,
            config: d,
            guildSpaceMode: t,
            title: s,
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
            onCommitConfig: c,
        });
    return (0, i.jsxs)("div", {
        className: U.Zp,
        children: [
            (0, i.jsx)(L, { label: "Narrow column (380px)", className: U.sc, children: u }),
            (0, i.jsx)(L, { label: "Wide column (685px)", className: U.U, children: u }),
        ],
    });
}
let M = {
        title: "Welcome to the server",
        body: "Drop in, say hi, and check the pinned posts for the rules and event schedule.",
        imageUrl: "https://placehold.co/320x180",
        imageAlt: "Server banner placeholder",
    },
    V = { heading: "Top chatters this week" },
    B = {
        entries: [
            { id: "1", name: "wumpus", score: 4821 },
            { id: "2", name: "clyde", score: 3960 },
            { id: "3", name: "nelly", score: 2715 },
            { id: "4", name: "a_very_long_username_that_truncates", score: 1204 },
        ],
    },
    H = {
        id: "guild-space",
        name: "Server Hub",
        groups: [
            {
                title: "Server Hub Widget Framework",
                stories: [
                    {
                        name: "WidgetSlot + ImageText",
                        id: "guild-space-widget-slot-image-text",
                        docs: "ImageText reference widget (no hydration) across view/edit and each mock hydration state. In edit mode the pencil opens the framework-owned Edit modal; Save commits config through onCommitConfig, Cancel/close discards.",
                        component: function (e) {
                            return (0, i.jsx)(R, {
                                ...e,
                                type: r.IMAGE_TEXT,
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
                            return (0, i.jsx)(R, {
                                ...e,
                                type: r.LEADERBOARD,
                                title: "Leaderboard",
                                initialConfig: V,
                                successData: B,
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
    W = { playgroundBaseUrl: "guild-space", collections: [H] };
