i.d(t, { P: () => W });
var n = i(477900),
    l = i(582128),
    r = i(503698),
    s = i.n(r),
    a = i(297264),
    d = i(866665),
    c = i(408278),
    o = i(22231),
    u = i(241326),
    f = i(451395),
    g = i(189213),
    m = i(192308),
    h = i(593673),
    E = i(834730),
    x = i(292666),
    I = i(821609),
    v = i(289873),
    p = i(738188),
    _ = i(375708),
    A = i(308991);
function j() {
    return (0, n.jsx)("div", {
        className: A.w,
        children: (0, n.jsx)(v.y, { type: v.y.Type.SPINNING_CIRCLE, "aria-label": _.intl.string(_.t.ZTNur7) }),
    });
}
function y() {
    return (0, n.jsxs)("div", {
        className: A.w,
        role: "alert",
        children: [
            (0, n.jsx)(p.i, { size: "md", color: "text-feedback-critical", "aria-hidden": !0 }),
            (0, n.jsx)(E.E, { variant: "text-sm/normal", color: "text-muted", children: _.intl.string(_.t.F8FvUy) }),
        ],
    });
}
var C = i(101464);
function R(e) {
    return { heading: e.heading ?? "" };
}
var S = i(17928),
    D = i(967198),
    T = i(488428),
    N = i(597098),
    b = i(486020),
    w = i(652215),
    G = i(34250);
let L = {
    [h.a.IMAGE_TEXT]: {
        View: function (e) {
            let { widget: t } = e,
                { text: i, image_hash: l } = t.config,
                r = (0, S.bG)([D.A], () => D.A.getGuildId());
            return (0, n.jsxs)("div", {
                className: G.k,
                children: [
                    null != l &&
                        null != r &&
                        (0, n.jsx)("img", {
                            className: G.S,
                            src: (function (e, t, i) {
                                let n = b.QB ? "webp" : "jpg",
                                    { CDN_HOST: l, API_ENDPOINT: r } = window.GLOBAL_ENV,
                                    s = w.Rsh.GUILD_SPACE_IMAGE_TEXT_WIDGET_IMAGE(e, t, i, n),
                                    a = null != l ? `https://${l}${s}` : location.protocol + r + s,
                                    d = { size: (0, N.kr)(500 * (0, N.mZ)()) };
                                return "jpg" === n && (d.quality = "lossless"), (a += `?${T.stringify(d)}`);
                            })(r, t.id, l),
                            alt: "",
                        }),
                    null != i && (0, n.jsx)(E.E, { variant: "text-sm/normal", color: "text-default", children: i }),
                ],
            });
        },
    },
    [h.a.LEADERBOARD]: {
        View: function (e) {
            var t;
            let i,
                { widget: l, hydration: r } = e;
            if (null == r || "idle" === r.status || "loading" === r.status) return (0, n.jsx)(j, {});
            if ("error" === r.status) return (0, n.jsx)(y, {});
            let { heading: s } = R(l.config),
                { entries: d } =
                    ((t = r.data),
                    {
                        entries: (Array.isArray((i = t?.entries)) ? i : []).filter(
                            (e) => null != e && Number.isFinite(e.score),
                        ),
                    });
            return (0, n.jsxs)("div", {
                className: C.Up,
                children: [
                    "" !== s && (0, n.jsx)(a.D, { variant: "heading-md/semibold", color: "text-strong", children: s }),
                    (0, n.jsx)("ol", {
                        className: C.p_,
                        children: d.map((e, t) =>
                            (0, n.jsxs)(
                                "li",
                                {
                                    className: C.nM,
                                    children: [
                                        (0, n.jsx)(E.E, {
                                            variant: "text-sm/medium",
                                            color: "text-muted",
                                            className: C.Tm,
                                            children: t + 1,
                                        }),
                                        (0, n.jsx)(E.E, {
                                            variant: "text-sm/normal",
                                            color: "text-strong",
                                            className: C.UU,
                                            children: e.name,
                                        }),
                                        (0, n.jsx)(E.E, {
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
            let { config: t, commit: i, cancel: r } = e,
                [s, a] = l.useState(() => R(t));
            return (0, n.jsxs)("div", {
                className: C.hc,
                children: [
                    (0, n.jsx)(x.k, { label: "Heading", value: s.heading, onChange: (e) => a({ heading: e }) }),
                    (0, n.jsxs)("div", {
                        className: C.KA,
                        children: [
                            (0, n.jsx)(I.$, { variant: "secondary", text: _.intl.string(_.t["ETE/oC"]), onClick: r }),
                            (0, n.jsx)(I.$, {
                                variant: "primary",
                                text: _.intl.string(_.t["R3BPH+"]),
                                onClick: () => i(s),
                            }),
                        ],
                    }),
                ],
            });
        },
    },
};
var U = i(870985);
function W(e) {
    let { widget: t, guildSpaceMode: i, title: l, hydration: r, onRemove: h, onCommitConfig: E, dragHandleRef: x } = e,
        I = L[t.type];
    if (null == I) return null;
    let { View: v, Edit: p } = I,
        A = "edit" === i;
    return (0, n.jsxs)("div", {
        className: s()(U.kL, { [U.Dy]: A }),
        children: [
            A &&
                (0, n.jsxs)("div", {
                    className: U.wx,
                    children: [
                        (0, n.jsx)("div", { className: U.BU, children: (0, n.jsx)(f.jV, { buttonRef: x }) }),
                        (0, n.jsx)(a.D, {
                            variant: "heading-sm/semibold",
                            color: "text-strong",
                            className: U.DD,
                            children: l,
                        }),
                        (0, n.jsxs)("div", {
                            className: U.o1,
                            children: [
                                null != p &&
                                    null != E &&
                                    null != l &&
                                    (0, n.jsx)(d.m, {
                                        text: _.intl.string(_.t.bt75uw),
                                        children: (0, n.jsx)(c.K, {
                                            variant: "secondary",
                                            size: "sm",
                                            icon: o.R,
                                            "aria-label": _.intl.string(_.t.bt75uw),
                                            onClick: () =>
                                                (function (e) {
                                                    let { title: t, config: i, Edit: l, onCommit: r } = e,
                                                        s = (e) =>
                                                            (0, n.jsx)(g.Modal, {
                                                                title: t,
                                                                actions: [],
                                                                ...e,
                                                                children: (0, n.jsx)(l, {
                                                                    config: i,
                                                                    commit: function (t) {
                                                                        r(t), e.onClose();
                                                                    },
                                                                    cancel: function () {
                                                                        e.onClose();
                                                                    },
                                                                }),
                                                            });
                                                    (0, m.openModalLazy)(() => Promise.resolve(s), {
                                                        modalKey: "guild-space-widget-edit",
                                                    });
                                                })({ title: l, config: t.config, Edit: p, onCommit: E }),
                                        }),
                                    }),
                                null != h &&
                                    (0, n.jsx)(d.m, {
                                        text: _.intl.string(_.t.Mm07Yc),
                                        children: (0, n.jsx)(c.K, {
                                            variant: "critical-secondary",
                                            size: "sm",
                                            icon: u.u,
                                            "aria-label": _.intl.string(_.t.Mm07Yc),
                                            onClick: h,
                                        }),
                                    }),
                            ],
                        }),
                    ],
                }),
            (0, n.jsx)("div", {
                className: U.rf,
                children: (0, n.jsx)(v, { widget: t, hydration: r, guildSpaceMode: i }),
            }),
        ],
    });
}
