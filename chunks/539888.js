i.d(e, { P: () => L });
var n = i(477900),
    l = i(582128),
    a = i(503698),
    r = i.n(a),
    s = i(297264),
    c = i(866665),
    d = i(408278),
    u = i(22231),
    o = i(241326),
    f = i(331322),
    h = i(834730),
    g = i(821609),
    m = i(104510),
    x = i(451395),
    E = i(328006),
    v = i(857909),
    p = i(334840),
    A = i(393750);
let S = [
    { avatar: E.A, topBarWidth: "68%", bottomBarWidths: ["26%", "55%"] },
    { avatar: v.A, topBarWidth: "48%", bottomBarWidths: ["26%", "100%"] },
    { avatar: p.A, topBarWidth: "96%", bottomBarWidths: ["26%", "24%"] },
];
function I(t) {
    let { width: e } = t;
    return (0, n.jsx)("div", { className: A.M0, style: { width: e } });
}
function j(t) {
    let { rank: e, row: i } = t;
    return (0, n.jsxs)("div", {
        className: A.nM,
        children: [
            (0, n.jsx)("div", {
                className: A.Tm,
                "aria-hidden": !0,
                children: (0, n.jsx)(h.E, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    className: A._k,
                    children: e,
                }),
            }),
            (0, n.jsx)("img", { className: A.my, src: i.avatar, alt: "", "aria-hidden": !0 }),
            (0, n.jsxs)("div", {
                className: A.n_,
                "aria-hidden": !0,
                children: [
                    (0, n.jsx)(I, { width: i.topBarWidth }),
                    (0, n.jsxs)("div", {
                        className: A.O3,
                        children: [
                            (0, n.jsx)(I, { width: i.bottomBarWidths[0] }),
                            (0, n.jsx)(I, { width: i.bottomBarWidths[1] }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function _() {
    return (0, n.jsx)("div", { className: A.kL, children: S.map((t, e) => (0, n.jsx)(j, { rank: e + 1, row: t }, e)) });
}
var C = i(189213),
    y = i(192308),
    b = i(233084),
    N = i(125075),
    T = i(375708),
    D = i(397462);
function w(t) {
    let { title: e, disabled: i = !1, dragHandleRef: l, canEdit: a = !1, onEdit: r, onRemove: f } = t;
    return (0, n.jsxs)("div", {
        className: D.wx,
        children: [
            null != l &&
                (0, n.jsx)("div", {
                    className: D.BU,
                    children: (0, n.jsx)(x.jV, {
                        buttonRef: l,
                        "aria-label": T.intl.formatToPlainString(N.default.NV85DR, { widgetName: e }),
                    }),
                }),
            (0, n.jsx)(s.D, { variant: "heading-sm/medium", className: D.DD, children: e }),
            (0, n.jsxs)("div", {
                className: D.o1,
                children: [
                    a &&
                        (0, n.jsx)(c.m, {
                            text: T.intl.string(T.t.bt75uw),
                            children: (0, n.jsx)(d.K, {
                                variant: "secondary",
                                size: "sm",
                                icon: u.PencilIcon,
                                "aria-label": T.intl.string(T.t.bt75uw),
                                disabled: i,
                                onClick: r,
                            }),
                        }),
                    null != f &&
                        (0, n.jsx)(c.m, {
                            text: T.intl.string(T.t.Mm07Yc),
                            children: (0, n.jsx)(d.K, {
                                variant: "critical-secondary",
                                size: "sm",
                                icon: o.TrashIcon,
                                "aria-label":
                                    null == e
                                        ? T.intl.string(T.t.Mm07Yc)
                                        : T.intl.formatToPlainString(N.default.hmNYxk, { widgetName: e }),
                                disabled: i,
                                onClick: f,
                            }),
                        }),
                ],
            }),
        ],
    });
}
function G(t) {
    let { title: e } = t;
    return (0, n.jsx)("div", {
        className: D.wx,
        children: (0, n.jsx)(s.D, { variant: "heading-sm/medium", className: D.DD, children: e }),
    });
}
function k(t) {
    let { title: e, boostPrice: i, LockedPreview: l } = t;
    return (0, n.jsxs)(f.B, {
        className: D.xt,
        align: "center",
        justify: "center",
        gap: 24,
        children: [
            (0, n.jsxs)(f.B, {
                align: "center",
                gap: 12,
                children: [
                    null != l ? (0, n.jsx)(l, { alt: "", ariaHidden: !0 }) : (0, n.jsx)(_, {}),
                    (0, n.jsxs)(f.B, {
                        align: "center",
                        gap: 4,
                        children: [
                            (0, n.jsx)(h.E, {
                                variant: "text-md/semibold",
                                color: "text-default",
                                children: T.intl.formatToPlainString(N.default.G5zCGV, { widgetName: e }),
                            }),
                            null != i &&
                                i > 0 &&
                                (0, n.jsx)(h.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: T.intl.format(N.default["8wD0Un"], { boostPrice: i }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, n.jsx)(g.$, {
                variant: "expressive",
                icon: m._,
                text: T.intl.string(T.t["+7XY31"]),
                onClick: () => {},
            }),
        ],
    });
}
function L(t) {
    let {
            widget: e,
            guildSpaceMode: i,
            hydration: a,
            onRemove: s,
            onCommitConfig: c,
            dragHandleRef: d,
            disabled: u = !1,
            lock: o,
        } = t,
        f = b.m[e.type],
        h = l.useCallback(() => {
            f?.Edit != null &&
                null != c &&
                null == o &&
                (function (t) {
                    let { widget: e, Edit: i, onCommit: l } = t,
                        a = (t) =>
                            (0, n.jsx)(C.Modal, {
                                title: e.default_title ?? void 0,
                                actions: [],
                                ...t,
                                children: (0, n.jsx)(i, {
                                    widget: e,
                                    commit: function (e) {
                                        l(e), t.onClose();
                                    },
                                    cancel: function () {
                                        t.onClose();
                                    },
                                }),
                            });
                    (0, y.openModalLazy)(() => Promise.resolve(a), { modalKey: "guild-space-widget-edit" });
                })({ widget: e, Edit: f.Edit, onCommit: c });
        }, [e, f, c, o]),
        g = f?.useTitle?.(e) ?? e.default_title ?? "";
    if (null == f) return null;
    let { View: m, Edit: x } = f,
        E = "edit" === i,
        v = null != x && null != c && null == o;
    return (0, n.jsxs)("div", {
        className: r()(D.kL, { [D.Dy]: E }),
        children: [
            E
                ? (0, n.jsx)(w, { title: g, disabled: u, dragHandleRef: d, canEdit: v, onEdit: h, onRemove: s })
                : (0, n.jsx)(G, { title: g }),
            (0, n.jsx)("div", {
                className: D.rf,
                children:
                    null != o
                        ? (0, n.jsx)(k, { title: g, boostPrice: o.boostPrice, LockedPreview: f.LockedPreview })
                        : (0, n.jsx)(m, { widget: e, hydration: a, guildSpaceMode: i }),
            }),
        ],
    });
}
