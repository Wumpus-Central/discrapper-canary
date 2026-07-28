a.r(t), a.d(t, { playgroundConfig: () => z, guildSpaceCollection: () => P });
var i,
    l = a(477900),
    n = a(582128),
    s = a(834730),
    r =
        (((i = {}).LEADERBOARD = "leaderboard"),
        (i.WHITEBOARD = "whiteboard"),
        (i.POPULAR_MUSIC = "popular_music"),
        (i.IMAGE_TEXT = "image_text"),
        (i.LIVE_ACTIVITY = "live_activity"),
        i),
    o = a(503698),
    d = a.n(o),
    c = a(297264),
    u = a(866665),
    m = a(408278),
    h = a(22231),
    g = a(241326),
    x = a(451395),
    v = a(189213),
    p = a(192308),
    f = a(292666),
    j = a(821609),
    b = a(289873),
    y = a(738188),
    w = a(375708),
    E = a(308991);
function N() {
    return (0, l.jsx)("div", {
        className: E.w,
        children: (0, l.jsx)(b.y, { type: b.y.Type.SPINNING_CIRCLE, "aria-label": w.intl.string(w.t.ZTNur7) }),
    });
}
function _() {
    return (0, l.jsxs)("div", {
        className: E.w,
        role: "alert",
        children: [
            (0, l.jsx)(y.i, { size: "md", color: "text-feedback-critical", "aria-hidden": !0 }),
            (0, l.jsx)(s.E, { variant: "text-sm/normal", color: "text-muted", children: w.intl.string(w.t.F8FvUy) }),
        ],
    });
}
var C = a(101464);
function I(e) {
    return { heading: e.heading ?? "" };
}
var A = a(17928),
    T = a(967198),
    k = a(488428),
    S = a(597098),
    D = a(486020),
    L = a(652215),
    M = a(34250);
let R = {
    [r.IMAGE_TEXT]: {
        View: function (e) {
            let { config: t } = e,
                { text: a, image_hash: i } = t,
                n = (0, A.bG)([T.A], () => T.A.getGuildId());
            return (0, l.jsxs)("div", {
                className: M.k,
                children: [
                    null != i &&
                        null != n &&
                        (0, l.jsx)("img", {
                            className: M.S,
                            src: (function (e, t) {
                                let a = D.QB ? "webp" : "jpg",
                                    { CDN_HOST: i, API_ENDPOINT: l } = window.GLOBAL_ENV,
                                    n = `/guild-space/${e}/image-text-widget/${t}.${a}`,
                                    s =
                                        null != i
                                            ? `https://${i}${n}`
                                            : location.protocol +
                                              l +
                                              L.Rsh.GUILD_SPACE_IMAGE_TEXT_WIDGET_IMAGE(e, t, a),
                                    r = { size: (0, S.kr)(500 * (0, S.mZ)()) };
                                return "jpg" === a && (r.quality = "lossless"), (s += `?${k.stringify(r)}`);
                            })(n, i),
                            alt: "",
                        }),
                    null != a && (0, l.jsx)(s.E, { variant: "text-sm/normal", color: "text-default", children: a }),
                ],
            });
        },
    },
    [r.LEADERBOARD]: {
        View: function (e) {
            var t;
            let a,
                { config: i, hydration: n } = e;
            if (null == n || "idle" === n.status || "loading" === n.status) return (0, l.jsx)(N, {});
            if ("error" === n.status) return (0, l.jsx)(_, {});
            let { heading: r } = I(i),
                { entries: o } =
                    ((t = n.data),
                    {
                        entries: (Array.isArray((a = t?.entries)) ? a : []).filter(
                            (e) => null != e && Number.isFinite(e.score),
                        ),
                    });
            return (0, l.jsxs)("div", {
                className: C.Up,
                children: [
                    "" !== r && (0, l.jsx)(c.D, { variant: "heading-md/semibold", color: "text-strong", children: r }),
                    (0, l.jsx)("ol", {
                        className: C.p_,
                        children: o.map((e, t) =>
                            (0, l.jsxs)(
                                "li",
                                {
                                    className: C.nM,
                                    children: [
                                        (0, l.jsx)(s.E, {
                                            variant: "text-sm/medium",
                                            color: "text-muted",
                                            className: C.Tm,
                                            children: t + 1,
                                        }),
                                        (0, l.jsx)(s.E, {
                                            variant: "text-sm/normal",
                                            color: "text-strong",
                                            className: C.UU,
                                            children: e.name,
                                        }),
                                        (0, l.jsx)(s.E, {
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
            let { config: t, commit: a, cancel: i } = e,
                [s, r] = n.useState(() => I(t));
            return (0, l.jsxs)("div", {
                className: C.hc,
                children: [
                    (0, l.jsx)(f.k, { label: "Heading", value: s.heading, onChange: (e) => r({ heading: e }) }),
                    (0, l.jsxs)("div", {
                        className: C.KA,
                        children: [
                            (0, l.jsx)(j.$, { variant: "secondary", text: w.intl.string(w.t["ETE/oC"]), onClick: i }),
                            (0, l.jsx)(j.$, {
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
var G = a(870985);
function V(e) {
    let {
            type: t,
            config: a,
            guildSpaceMode: i,
            title: n,
            hydration: s,
            onRemove: r,
            onCommitConfig: o,
            dragHandleRef: f,
        } = e,
        j = R[t];
    if (null == j) return null;
    let { View: b, Edit: y } = j,
        E = "edit" === i;
    return (0, l.jsxs)("div", {
        className: d()(G.kL, { [G.Dy]: E }),
        children: [
            E &&
                (0, l.jsxs)("div", {
                    className: G.wx,
                    children: [
                        (0, l.jsx)("div", { className: G.BU, children: (0, l.jsx)(x.jV, { buttonRef: f }) }),
                        (0, l.jsx)(c.D, {
                            variant: "heading-sm/semibold",
                            color: "text-strong",
                            className: G.DD,
                            children: n,
                        }),
                        (0, l.jsxs)("div", {
                            className: G.o1,
                            children: [
                                null != y &&
                                    null != o &&
                                    (0, l.jsx)(u.m, {
                                        text: w.intl.string(w.t.bt75uw),
                                        children: (0, l.jsx)(m.K, {
                                            variant: "secondary",
                                            size: "sm",
                                            icon: h.R,
                                            "aria-label": w.intl.string(w.t.bt75uw),
                                            onClick: () =>
                                                (function (e) {
                                                    let { title: t, config: a, Edit: i, onCommit: n } = e,
                                                        s = (e) =>
                                                            (0, l.jsx)(v.Modal, {
                                                                title: t,
                                                                actions: [],
                                                                ...e,
                                                                children: (0, l.jsx)(i, {
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
                                    (0, l.jsx)(u.m, {
                                        text: w.intl.string(w.t.Mm07Yc),
                                        children: (0, l.jsx)(m.K, {
                                            variant: "critical-secondary",
                                            size: "sm",
                                            icon: g.u,
                                            "aria-label": w.intl.string(w.t.Mm07Yc),
                                            onClick: r,
                                        }),
                                    }),
                            ],
                        }),
                    ],
                }),
            (0, l.jsx)("div", {
                className: G.rf,
                children: (0, l.jsx)(b, { config: a, hydration: s, guildSpaceMode: i }),
            }),
        ],
    });
}
var U = a(992915);
function $(e) {
    let { label: t, className: a, children: i } = e;
    return (0, l.jsxs)("div", {
        className: `${U.Gt} ${a}`,
        children: [(0, l.jsx)(s.E, { variant: "text-xs/medium", color: "text-muted", children: t }), i],
    });
}
function B(e) {
    let { mode: t, hydration: a, type: i, title: s, initialConfig: r, successData: o } = e,
        [d, c] = n.useState(r),
        u = (0, l.jsx)(V, {
            type: i,
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
    return (0, l.jsxs)("div", {
        className: U.Zp,
        children: [
            (0, l.jsx)($, { label: "Narrow column (380px)", className: U.sc, children: u }),
            (0, l.jsx)($, { label: "Wide column (685px)", className: U.U, children: u }),
        ],
    });
}
let H = {
        text: "Drop in, say hi, and check the pinned posts for the rules and event schedule.",
        image_hash: "some_hash",
    },
    W = { heading: "Top chatters this week" },
    O = {
        entries: [
            { id: "1", name: "wumpus", score: 4821 },
            { id: "2", name: "clyde", score: 3960 },
            { id: "3", name: "nelly", score: 2715 },
            { id: "4", name: "a_very_long_username_that_truncates", score: 1204 },
        ],
    },
    P = {
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
                            return (0, l.jsx)(B, {
                                ...e,
                                type: r.IMAGE_TEXT,
                                title: "Image + Text",
                                initialConfig: H,
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
                            return (0, l.jsx)(B, {
                                ...e,
                                type: r.LEADERBOARD,
                                title: "Leaderboard",
                                initialConfig: W,
                                successData: O,
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
    z = { playgroundBaseUrl: "guild-space", collections: [P] };
