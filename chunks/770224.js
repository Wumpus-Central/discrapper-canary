i.d(t, { P: () => U });
var n = i(477900),
    s = i(582128),
    l = i(503698),
    r = i.n(l),
    a = i(297264),
    d = i(866665),
    c = i(408278),
    o = i(22231),
    u = i(241326),
    f = i(451395),
    g = i(189213),
    m = i(192308),
    h = i(593673),
    x = i(834730),
    E = i(292666),
    v = i(821609),
    I = i(289873),
    p = i(738188),
    _ = i(375708),
    j = i(308991);
function A() {
    return (0, n.jsx)("div", {
        className: j.w,
        children: (0, n.jsx)(I.y, { type: I.y.Type.SPINNING_CIRCLE, "aria-label": _.intl.string(_.t.ZTNur7) }),
    });
}
function y() {
    return (0, n.jsxs)("div", {
        className: j.w,
        role: "alert",
        children: [
            (0, n.jsx)(p.i, { size: "md", color: "text-feedback-critical", "aria-hidden": !0 }),
            (0, n.jsx)(x.E, { variant: "text-sm/normal", color: "text-muted", children: _.intl.string(_.t.F8FvUy) }),
        ],
    });
}
var C = i(101464);
function D(e) {
    return { heading: e.heading ?? "" };
}
var R = i(17928),
    S = i(967198),
    N = i(488428),
    b = i(597098),
    T = i(486020),
    w = i(652215),
    k = i(34250);
let L = {
    [h.a.IMAGE_TEXT]: {
        View: function (e) {
            let { config: t } = e,
                { text: i, image_hash: s } = t,
                l = (0, R.bG)([S.A], () => S.A.getGuildId());
            return (0, n.jsxs)("div", {
                className: k.k,
                children: [
                    null != s &&
                        null != l &&
                        (0, n.jsx)("img", {
                            className: k.S,
                            src: (function (e, t) {
                                let i = T.QB ? "webp" : "jpg",
                                    { CDN_HOST: n, API_ENDPOINT: s } = window.GLOBAL_ENV,
                                    l = `/guild-space/${e}/image-text-widget/${t}.${i}`,
                                    r =
                                        null != n
                                            ? `https://${n}${l}`
                                            : location.protocol +
                                              s +
                                              w.Rsh.GUILD_SPACE_IMAGE_TEXT_WIDGET_IMAGE(e, t, i),
                                    a = { size: (0, b.kr)(500 * (0, b.mZ)()) };
                                return "jpg" === i && (a.quality = "lossless"), (r += `?${N.stringify(a)}`);
                            })(l, s),
                            alt: "",
                        }),
                    null != i && (0, n.jsx)(x.E, { variant: "text-sm/normal", color: "text-default", children: i }),
                ],
            });
        },
    },
    [h.a.LEADERBOARD]: {
        View: function (e) {
            var t;
            let i,
                { config: s, hydration: l } = e;
            if (null == l || "idle" === l.status || "loading" === l.status) return (0, n.jsx)(A, {});
            if ("error" === l.status) return (0, n.jsx)(y, {});
            let { heading: r } = D(s),
                { entries: d } =
                    ((t = l.data),
                    {
                        entries: (Array.isArray((i = t?.entries)) ? i : []).filter(
                            (e) => null != e && Number.isFinite(e.score),
                        ),
                    });
            return (0, n.jsxs)("div", {
                className: C.Up,
                children: [
                    "" !== r && (0, n.jsx)(a.D, { variant: "heading-md/semibold", color: "text-strong", children: r }),
                    (0, n.jsx)("ol", {
                        className: C.p_,
                        children: d.map((e, t) =>
                            (0, n.jsxs)(
                                "li",
                                {
                                    className: C.nM,
                                    children: [
                                        (0, n.jsx)(x.E, {
                                            variant: "text-sm/medium",
                                            color: "text-muted",
                                            className: C.Tm,
                                            children: t + 1,
                                        }),
                                        (0, n.jsx)(x.E, {
                                            variant: "text-sm/normal",
                                            color: "text-strong",
                                            className: C.UU,
                                            children: e.name,
                                        }),
                                        (0, n.jsx)(x.E, {
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
            let { config: t, commit: i, cancel: l } = e,
                [r, a] = s.useState(() => D(t));
            return (0, n.jsxs)("div", {
                className: C.hc,
                children: [
                    (0, n.jsx)(E.k, { label: "Heading", value: r.heading, onChange: (e) => a({ heading: e }) }),
                    (0, n.jsxs)("div", {
                        className: C.KA,
                        children: [
                            (0, n.jsx)(v.$, { variant: "secondary", text: _.intl.string(_.t["ETE/oC"]), onClick: l }),
                            (0, n.jsx)(v.$, {
                                variant: "primary",
                                text: _.intl.string(_.t["R3BPH+"]),
                                onClick: () => i(r),
                            }),
                        ],
                    }),
                ],
            });
        },
    },
};
var G = i(870985);
function U(e) {
    let {
            type: t,
            config: i,
            guildSpaceMode: s,
            title: l,
            hydration: h,
            onRemove: x,
            onCommitConfig: E,
            dragHandleRef: v,
        } = e,
        I = L[t];
    if (null == I) return null;
    let { View: p, Edit: j } = I,
        A = "edit" === s;
    return (0, n.jsxs)("div", {
        className: r()(G.kL, { [G.Dy]: A }),
        children: [
            A &&
                (0, n.jsxs)("div", {
                    className: G.wx,
                    children: [
                        (0, n.jsx)("div", { className: G.BU, children: (0, n.jsx)(f.jV, { buttonRef: v }) }),
                        (0, n.jsx)(a.D, {
                            variant: "heading-sm/semibold",
                            color: "text-strong",
                            className: G.DD,
                            children: l,
                        }),
                        (0, n.jsxs)("div", {
                            className: G.o1,
                            children: [
                                null != j &&
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
                                                    let { title: t, config: i, Edit: s, onCommit: l } = e,
                                                        r = (e) =>
                                                            (0, n.jsx)(g.Modal, {
                                                                title: t,
                                                                actions: [],
                                                                ...e,
                                                                children: (0, n.jsx)(s, {
                                                                    config: i,
                                                                    commit: function (t) {
                                                                        l(t), e.onClose();
                                                                    },
                                                                    cancel: function () {
                                                                        e.onClose();
                                                                    },
                                                                }),
                                                            });
                                                    (0, m.openModalLazy)(() => Promise.resolve(r), {
                                                        modalKey: "guild-space-widget-edit",
                                                    });
                                                })({ title: l, config: i, Edit: j, onCommit: E }),
                                        }),
                                    }),
                                null != x &&
                                    (0, n.jsx)(d.m, {
                                        text: _.intl.string(_.t.Mm07Yc),
                                        children: (0, n.jsx)(c.K, {
                                            variant: "critical-secondary",
                                            size: "sm",
                                            icon: u.u,
                                            "aria-label": _.intl.string(_.t.Mm07Yc),
                                            onClick: x,
                                        }),
                                    }),
                            ],
                        }),
                    ],
                }),
            (0, n.jsx)("div", {
                className: G.rf,
                children: (0, n.jsx)(p, { config: i, hydration: h, guildSpaceMode: s }),
            }),
        ],
    });
}
