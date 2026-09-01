l.d(t, { P: () => w });
var i = l(477900),
    n = l(582128),
    a = l(503698),
    s = l.n(a),
    r = l(297264),
    d = l(866665),
    c = l(408278),
    u = l(22231),
    o = l(241326),
    f = l(331322),
    h = l(834730),
    m = l(821609),
    g = l(104510),
    E = l(451395),
    x = l(328006),
    A = l(857909),
    _ = l(334840),
    p = l(393750);
let v = [
    { avatar: x.A, topBarWidth: "68%", bottomBarWidths: ["26%", "55%"] },
    { avatar: A.A, topBarWidth: "48%", bottomBarWidths: ["26%", "100%"] },
    { avatar: _.A, topBarWidth: "96%", bottomBarWidths: ["26%", "24%"] },
];
function S(e) {
    let { width: t } = e;
    return (0, i.jsx)("div", { className: p.M0, style: { width: t } });
}
function I(e) {
    let { rank: t, row: l } = e;
    return (0, i.jsxs)("div", {
        className: p.nM,
        children: [
            (0, i.jsx)("div", {
                className: p.Tm,
                "aria-hidden": !0,
                children: (0, i.jsx)(h.E, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    className: p._k,
                    children: t,
                }),
            }),
            (0, i.jsx)("img", { className: p.my, src: l.avatar, alt: "", "aria-hidden": !0 }),
            (0, i.jsxs)("div", {
                className: p.n_,
                "aria-hidden": !0,
                children: [
                    (0, i.jsx)(S, { width: l.topBarWidth }),
                    (0, i.jsxs)("div", {
                        className: p.O3,
                        children: [
                            (0, i.jsx)(S, { width: l.bottomBarWidths[0] }),
                            (0, i.jsx)(S, { width: l.bottomBarWidths[1] }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function j() {
    return (0, i.jsx)("div", { className: p.kL, children: v.map((e, t) => (0, i.jsx)(I, { rank: t + 1, row: e }, t)) });
}
var D = l(189213),
    y = l(192308),
    C = l(179105),
    b = l(125075),
    N = l(375708),
    T = l(397462);
function G(e) {
    let { title: t, disabled: l = !1, dragHandleRef: n, canEdit: a = !1, onEdit: s, onRemove: f } = e;
    return (0, i.jsxs)("div", {
        className: T.wx,
        children: [
            null != n &&
                (0, i.jsx)("div", {
                    className: T.BU,
                    children: (0, i.jsx)(E.jV, {
                        buttonRef: n,
                        "aria-label": N.intl.formatToPlainString(b.default.NV85DR, { widgetName: t }),
                    }),
                }),
            (0, i.jsx)(r.D, { variant: "heading-sm/medium", className: T.DD, children: t }),
            (0, i.jsxs)("div", {
                className: T.o1,
                children: [
                    a &&
                        (0, i.jsx)(d.m, {
                            text: N.intl.string(N.t.bt75uw),
                            children: (0, i.jsx)(c.K, {
                                variant: "secondary",
                                size: "sm",
                                icon: u.PencilIcon,
                                "aria-label": N.intl.string(N.t.bt75uw),
                                disabled: l,
                                onClick: s,
                            }),
                        }),
                    null != f &&
                        (0, i.jsx)(d.m, {
                            text: N.intl.string(N.t.Mm07Yc),
                            children: (0, i.jsx)(c.K, {
                                variant: "critical-secondary",
                                size: "sm",
                                icon: o.TrashIcon,
                                "aria-label":
                                    null == t
                                        ? N.intl.string(N.t.Mm07Yc)
                                        : N.intl.formatToPlainString(b.default.hmNYxk, { widgetName: t }),
                                disabled: l,
                                onClick: f,
                            }),
                        }),
                ],
            }),
        ],
    });
}
function R(e) {
    let { title: t } = e;
    return (0, i.jsx)("div", {
        className: T.wx,
        children: (0, i.jsx)(r.D, { variant: "heading-sm/medium", className: T.DD, children: t }),
    });
}
function L(e) {
    let { title: t, boostPrice: l, LockedPreview: n } = e;
    return (0, i.jsxs)(f.B, {
        className: T.xt,
        align: "center",
        justify: "center",
        gap: 24,
        children: [
            (0, i.jsxs)(f.B, {
                align: "center",
                gap: 12,
                children: [
                    null != n ? (0, i.jsx)(n, { alt: "", ariaHidden: !0 }) : (0, i.jsx)(j, {}),
                    (0, i.jsxs)(f.B, {
                        align: "center",
                        gap: 4,
                        children: [
                            (0, i.jsx)(h.E, {
                                variant: "text-md/semibold",
                                color: "text-default",
                                children: N.intl.formatToPlainString(b.default.G5zCGV, { widgetName: t }),
                            }),
                            null != l &&
                                l > 0 &&
                                (0, i.jsx)(h.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: N.intl.format(b.default["8wD0Un"], { boostPrice: l }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(m.$, {
                variant: "expressive",
                icon: g._,
                text: N.intl.string(N.t["+7XY31"]),
                onClick: () => {},
            }),
        ],
    });
}
function w(e) {
    let {
            guildId: t,
            widget: l,
            guildSpaceMode: a,
            hydration: r,
            onRemove: d,
            onCommitConfig: c,
            dragHandleRef: u,
            disabled: o = !1,
            lock: f,
        } = e,
        h = C.m[l.type],
        m = n.useCallback(() => {
            h?.Edit != null &&
                null != c &&
                null == f &&
                (function (e) {
                    let { widget: t, Edit: l, onCommit: n } = e,
                        a = (e) =>
                            (0, i.jsx)(D.Modal, {
                                title: t.default_title ?? void 0,
                                actions: [],
                                ...e,
                                children: (0, i.jsx)(l, {
                                    widget: t,
                                    commit: function (t) {
                                        n(t), e.onClose();
                                    },
                                    cancel: function () {
                                        e.onClose();
                                    },
                                }),
                            });
                    (0, y.openModalLazy)(() => Promise.resolve(a), { modalKey: "guild-space-widget-edit" });
                })({ widget: l, Edit: h.Edit, onCommit: c });
        }, [l, h, c, f]),
        g = h?.useTitle?.(l) ?? l.default_title ?? "";
    if (null == h) return null;
    let { View: E, Edit: x } = h,
        A = "edit" === a,
        _ = null != x && null != c && null == f;
    return (0, i.jsxs)("div", {
        className: s()(T.kL, { [T.Dy]: A }),
        children: [
            A
                ? (0, i.jsx)(G, { title: g, disabled: o, dragHandleRef: u, canEdit: _, onEdit: m, onRemove: d })
                : (0, i.jsx)(R, { title: g }),
            (0, i.jsx)("div", {
                className: T.rf,
                children:
                    null != f
                        ? (0, i.jsx)(L, { title: g, boostPrice: f.boostPrice, LockedPreview: h.LockedPreview })
                        : (0, i.jsx)(E, { widget: l, hydration: r, guildSpaceMode: a, guildId: t }),
            }),
        ],
    });
}
