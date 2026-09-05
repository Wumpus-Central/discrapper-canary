l.d(t, { P: () => B });
var i = l(477900),
    n = l(582128),
    a = l(503698),
    s = l.n(a),
    r = l(17928),
    d = l(297264),
    c = l(866665),
    u = l(408278),
    o = l(22231),
    f = l(241326),
    h = l(331322),
    g = l(834730),
    m = l(821609),
    E = l(104510),
    x = l(645619),
    A = l(915667),
    p = l(451395),
    _ = l(328006),
    v = l(857909),
    S = l(334840),
    I = l(393750);
let j = [
    { avatar: _.A, topBarWidth: "68%", bottomBarWidths: ["26%", "55%"] },
    { avatar: v.A, topBarWidth: "48%", bottomBarWidths: ["26%", "100%"] },
    { avatar: S.A, topBarWidth: "96%", bottomBarWidths: ["26%", "24%"] },
];
function D(e) {
    let { width: t } = e;
    return (0, i.jsx)("div", { className: I.M0, style: { width: t } });
}
function b(e) {
    let { rank: t, row: l } = e;
    return (0, i.jsxs)("div", {
        className: I.nM,
        children: [
            (0, i.jsx)("div", {
                className: I.Tm,
                "aria-hidden": !0,
                children: (0, i.jsx)(g.E, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    className: I._k,
                    children: t,
                }),
            }),
            (0, i.jsx)("img", { className: I.my, src: l.avatar, alt: "", "aria-hidden": !0 }),
            (0, i.jsxs)("div", {
                className: I.n_,
                "aria-hidden": !0,
                children: [
                    (0, i.jsx)(D, { width: l.topBarWidth }),
                    (0, i.jsxs)("div", {
                        className: I.O3,
                        children: [
                            (0, i.jsx)(D, { width: l.bottomBarWidths[0] }),
                            (0, i.jsx)(D, { width: l.bottomBarWidths[1] }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function y() {
    return (0, i.jsx)("div", { className: I.kL, children: j.map((e, t) => (0, i.jsx)(b, { rank: t + 1, row: e }, t)) });
}
var C = l(189213),
    N = l(192308),
    T = l(179105),
    G = l(104129),
    w = l(375708),
    R = l(397462);
function L(e) {
    let { title: t, disabled: l = !1, dragHandleRef: n, canEdit: a = !1, onEdit: s, onRemove: r } = e;
    return (0, i.jsxs)("div", {
        className: R.wx,
        children: [
            null != n &&
                (0, i.jsx)("div", {
                    className: R.BU,
                    children: (0, i.jsx)(p.jV, {
                        buttonRef: n,
                        "aria-label": w.intl.formatToPlainString(G.default.NV85DR, { widgetName: t }),
                    }),
                }),
            (0, i.jsx)(d.D, { variant: "heading-sm/medium", className: R.DD, children: t }),
            (0, i.jsxs)("div", {
                className: R.o1,
                children: [
                    a &&
                        (0, i.jsx)(c.m, {
                            text: w.intl.string(w.t.bt75uw),
                            children: (0, i.jsx)(u.K, {
                                variant: "secondary",
                                size: "sm",
                                icon: o.PencilIcon,
                                "aria-label": w.intl.string(w.t.bt75uw),
                                disabled: l,
                                onClick: s,
                            }),
                        }),
                    null != r &&
                        (0, i.jsx)(c.m, {
                            text: w.intl.string(w.t.Mm07Yc),
                            children: (0, i.jsx)(u.K, {
                                variant: "critical-secondary",
                                size: "sm",
                                icon: f.TrashIcon,
                                "aria-label":
                                    null == t
                                        ? w.intl.string(w.t.Mm07Yc)
                                        : w.intl.formatToPlainString(G.default.hmNYxk, { widgetName: t }),
                                disabled: l,
                                onClick: r,
                            }),
                        }),
                ],
            }),
        ],
    });
}
function U(e) {
    let { title: t } = e;
    return (0, i.jsx)("div", {
        className: R.wx,
        children: (0, i.jsx)(d.D, { variant: "heading-sm/medium", className: R.DD, children: t }),
    });
}
function k(e) {
    let { title: t, boostPrice: l, powerupSkuId: n, LockedPreview: a, guildId: s } = e,
        d = (0, r.bG)([x.A], () => (null != n ? x.A.getStateForGuild(s)?.allPowerups[n] : void 0), [s, n]);
    return (0, i.jsxs)(h.B, {
        className: R.xt,
        align: "center",
        justify: "center",
        gap: 24,
        children: [
            (0, i.jsxs)(h.B, {
                align: "center",
                gap: 12,
                children: [
                    null != a ? (0, i.jsx)(a, { alt: "", ariaHidden: !0 }) : (0, i.jsx)(y, {}),
                    (0, i.jsxs)(h.B, {
                        align: "center",
                        gap: 4,
                        children: [
                            (0, i.jsx)(g.E, {
                                variant: "text-md/semibold",
                                color: "text-default",
                                children: w.intl.formatToPlainString(G.default.G5zCGV, { widgetName: t }),
                            }),
                            null != l &&
                                l > 0 &&
                                (0, i.jsx)(g.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: w.intl.format(G.default["8wD0Un"], { boostPrice: l }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(m.$, {
                variant: "expressive",
                icon: E._,
                text: w.intl.string(w.t["+7XY31"]),
                disabled: null == d,
                loading: null != n && null == d,
                onClick: function () {
                    null != d && (0, A.A)(s, d);
                },
            }),
        ],
    });
}
function B(e) {
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
        h = T.m[l.type],
        g = n.useCallback(() => {
            h?.Edit != null &&
                null != c &&
                null == f &&
                (function (e) {
                    let { widget: t, Edit: l, onCommit: n } = e,
                        a = (e) =>
                            (0, i.jsx)(C.Modal, {
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
                    (0, N.openModalLazy)(() => Promise.resolve(a), { modalKey: "guild-space-widget-edit" });
                })({ widget: l, Edit: h.Edit, onCommit: c });
        }, [l, h, c, f]),
        m = h?.useTitle?.(l) ?? l.default_title ?? "";
    if (null == h) return null;
    let { View: E, Edit: x } = h,
        A = "edit" === a,
        p = null != x && null != c && null == f;
    return (0, i.jsxs)("div", {
        className: s()(R.kL, { [R.Dy]: A }),
        children: [
            A
                ? (0, i.jsx)(L, { title: m, disabled: o, dragHandleRef: u, canEdit: p, onEdit: g, onRemove: d })
                : (0, i.jsx)(U, { title: m }),
            (0, i.jsx)("div", {
                className: R.rf,
                children:
                    null != f
                        ? (0, i.jsx)(k, {
                              title: m,
                              boostPrice: f.boostPrice,
                              powerupSkuId: f.powerupSkuId,
                              LockedPreview: h.LockedPreview,
                              guildId: t,
                          })
                        : (0, i.jsx)(E, { widget: l, hydration: r, guildSpaceMode: a, guildId: t }),
            }),
        ],
    });
}
