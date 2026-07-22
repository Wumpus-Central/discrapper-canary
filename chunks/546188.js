l.r(t), l.d(t, { playgroundConfig: () => R, guildSpaceCollection: () => _ });
var a,
    i = l(627968),
    s = l(64700),
    n = l(834730),
    r =
        (((a = {}).LEADERBOARD = "leaderboard"),
        (a.WHITEBOARD = "whiteboard"),
        (a.POPULAR_MUSIC = "popular_music"),
        (a.IMAGE_TEXT = "image_text"),
        (a.LIVE_ACTIVITY = "live_activity"),
        a),
    o = l(503698),
    c = l.n(o),
    d = l(297264),
    u = l(866665),
    m = l(408278),
    x = l(22231),
    g = l(241326),
    h = l(451395),
    v = l(292666),
    p = l(821609),
    b = l(289873),
    j = l(738188),
    y = l(375708),
    f = l(308991);
function N() {
    return (0, i.jsx)("div", {
        className: f.w,
        children: (0, i.jsx)(b.y, { type: b.y.Type.SPINNING_CIRCLE, "aria-label": y.intl.string(y.t.ZTNur7) }),
    });
}
function E() {
    return (0, i.jsxs)("div", {
        className: f.w,
        role: "alert",
        children: [
            (0, i.jsx)(j.i, { size: "md", color: "text-feedback-critical", "aria-hidden": !0 }),
            (0, i.jsx)(n.E, { variant: "text-sm/normal", color: "text-muted", children: y.intl.string(y.t.F8FvUy) }),
        ],
    });
}
var k = l(172465);
function w(e) {
    return { title: e.title ?? "", body: e.body ?? "", imageUrl: e.imageUrl ?? "", imageAlt: e.imageAlt ?? "" };
}
let C = {
    [r.IMAGE_TEXT]: {
        View: function (e) {
            let { config: t, hydration: l } = e;
            if (l?.status === "idle" || l?.status === "loading") return (0, i.jsx)(N, {});
            if (l?.status === "error") return (0, i.jsx)(E, {});
            let { title: a, body: s, imageUrl: r, imageAlt: o } = w(t);
            return (0, i.jsxs)("div", {
                className: k.Up,
                children: [
                    "" !== r && "" !== o && (0, i.jsx)("img", { className: k.Sl, src: r, alt: o }),
                    (0, i.jsxs)("div", {
                        className: k.Qq,
                        children: [
                            "" !== a &&
                                (0, i.jsx)(d.D, { variant: "heading-md/semibold", color: "text-strong", children: a }),
                            "" !== s &&
                                (0, i.jsx)(n.E, { variant: "text-sm/normal", color: "text-muted", children: s }),
                        ],
                    }),
                ],
            });
        },
        Edit: function (e) {
            let { config: t, commit: l, cancel: a } = e,
                [n, r] = s.useState(() => w(t)),
                o = s.useCallback((e, t) => r((l) => ({ ...l, [e]: t })), []);
            return (0, i.jsxs)("div", {
                className: k.hc,
                children: [
                    (0, i.jsx)(v.k, { label: "Title", value: n.title, onChange: (e) => o("title", e) }),
                    (0, i.jsx)(v.k, { label: "Body", value: n.body, onChange: (e) => o("body", e) }),
                    (0, i.jsx)(v.k, { label: "Image URL", value: n.imageUrl, onChange: (e) => o("imageUrl", e) }),
                    (0, i.jsx)(v.k, { label: "Image alt text", value: n.imageAlt, onChange: (e) => o("imageAlt", e) }),
                    (0, i.jsxs)("div", {
                        className: k.KA,
                        children: [
                            (0, i.jsx)(p.$, { variant: "secondary", text: y.intl.string(y.t["ETE/oC"]), onClick: a }),
                            (0, i.jsx)(p.$, {
                                variant: "primary",
                                text: y.intl.string(y.t["R3BPH+"]),
                                onClick: () => l(n),
                            }),
                        ],
                    }),
                ],
            });
        },
    },
};
var I = l(870985);
function T(e) {
    let { type: t, config: l, guildSpaceMode: a, title: s, hydration: n, onRemove: r, onEdit: o, dragHandleRef: v } = e,
        p = C[t];
    if (null == p) return null;
    let { View: b, Edit: j } = p,
        f = "edit" === a;
    return (0, i.jsxs)("div", {
        className: c()(I.kL, { [I.Dy]: f }),
        children: [
            f &&
                (0, i.jsxs)("div", {
                    className: I.wx,
                    children: [
                        (0, i.jsx)("div", { className: I.BU, children: (0, i.jsx)(h.jV, { buttonRef: v }) }),
                        (0, i.jsx)(d.D, {
                            variant: "heading-sm/semibold",
                            color: "text-strong",
                            className: I.DD,
                            children: s,
                        }),
                        (0, i.jsxs)("div", {
                            className: I.o1,
                            children: [
                                null != j &&
                                    null != o &&
                                    (0, i.jsx)(u.m, {
                                        text: y.intl.string(y.t.bt75uw),
                                        children: (0, i.jsx)(m.K, {
                                            variant: "secondary",
                                            size: "sm",
                                            icon: x.R,
                                            "aria-label": y.intl.string(y.t.bt75uw),
                                            onClick: o,
                                        }),
                                    }),
                                null != r &&
                                    (0, i.jsx)(u.m, {
                                        text: y.intl.string(y.t.Mm07Yc),
                                        children: (0, i.jsx)(m.K, {
                                            variant: "critical-secondary",
                                            size: "sm",
                                            icon: g.u,
                                            "aria-label": y.intl.string(y.t.Mm07Yc),
                                            onClick: r,
                                        }),
                                    }),
                            ],
                        }),
                    ],
                }),
            (0, i.jsx)("div", {
                className: I.rf,
                children: (0, i.jsx)(b, { config: l, hydration: n, guildSpaceMode: a }),
            }),
        ],
    });
}
var S = l(992915);
let A = {
    title: "Welcome to the server",
    body: "Drop in, say hi, and check the pinned posts for the rules and event schedule.",
    imageUrl: "https://placehold.co/320x180",
    imageAlt: "Server banner placeholder",
};
function U(e) {
    let { label: t, className: l, children: a } = e;
    return (0, i.jsxs)("div", {
        className: `${S.Gt} ${l}`,
        children: [(0, i.jsx)(n.E, { variant: "text-xs/medium", color: "text-muted", children: t }), a],
    });
}
let _ = {
        id: "guild-space",
        name: "Server Hub",
        groups: [
            {
                title: "Server Hub Widget Framework",
                stories: [
                    {
                        name: "WidgetSlot + ImageText",
                        id: "guild-space-widget-slot",
                        docs: "Server Hub WidgetSlot rendering the ImageText reference widget across view/edit modes and each mock hydration state. The framework renders from props only: no fetching, no store.",
                        component: function (e) {
                            let { mode: t, hydration: l } = e,
                                a = (0, i.jsx)(T, {
                                    type: r.IMAGE_TEXT,
                                    config: A,
                                    guildSpaceMode: t,
                                    title: "Image + Text",
                                    hydration: (function (e) {
                                        switch (e) {
                                            case "none":
                                                return;
                                            case "success":
                                                return { status: "success", data: void 0 };
                                            default:
                                                return { status: e };
                                        }
                                    })(l),
                                    onRemove: () => {},
                                    onEdit: () => {},
                                });
                            return (0, i.jsxs)("div", {
                                className: S.Zp,
                                children: [
                                    (0, i.jsx)(U, { label: "Narrow column (380px)", className: S.sc, children: a }),
                                    (0, i.jsx)(U, { label: "Wide column (685px)", className: S.U, children: a }),
                                ],
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
        ],
        tags: ["Server Hub", "Widgets", "GuildSpace"],
    },
    R = { playgroundBaseUrl: "guild-space", collections: [_] };
