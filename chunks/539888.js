l.d(t, { P: () => k });
var n = l(477900),
    i = l(582128),
    a = l(503698),
    r = l.n(a),
    s = l(17928),
    d = l(297264),
    o = l(866665),
    u = l(408278),
    c = l(22231),
    m = l(241326),
    f = l(331322),
    h = l(834730),
    x = l(821609),
    g = l(104510),
    A = l(645619),
    p = l(915667),
    v = l(451395),
    j = l(328006),
    E = l(857909),
    S = l(334840),
    _ = l(393750);
let I = [
    { avatar: j.A, topBarWidth: "68%", bottomBarWidths: ["26%", "55%"] },
    { avatar: E.A, topBarWidth: "48%", bottomBarWidths: ["26%", "100%"] },
    { avatar: S.A, topBarWidth: "96%", bottomBarWidths: ["26%", "24%"] },
];
function N(e) {
    let { width: t } = e;
    return (0, n.jsx)("div", { className: _.M0, style: { width: t } });
}
function y(e) {
    let { rank: t, row: l } = e;
    return (0, n.jsxs)("div", {
        className: _.nM,
        children: [
            (0, n.jsx)("div", {
                className: _.Tm,
                "aria-hidden": !0,
                children: (0, n.jsx)(h.E, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    className: _._k,
                    children: t,
                }),
            }),
            (0, n.jsx)("img", { className: _.my, src: l.avatar, alt: "", "aria-hidden": !0 }),
            (0, n.jsxs)("div", {
                className: _.n_,
                "aria-hidden": !0,
                children: [
                    (0, n.jsx)(N, { width: l.topBarWidth }),
                    (0, n.jsxs)("div", {
                        className: _.O3,
                        children: [
                            (0, n.jsx)(N, { width: l.bottomBarWidths[0] }),
                            (0, n.jsx)(N, { width: l.bottomBarWidths[1] }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function b() {
    return (0, n.jsx)("div", { className: _.kL, children: I.map((e, t) => (0, n.jsx)(y, { rank: t + 1, row: e }, t)) });
}
var C = l(189213),
    T = l(192308),
    D = l(865830),
    w = l(61567),
    R = l(375708),
    G = l(397462);
function M(e) {
    let {
        title: t,
        titleIcon: l,
        accessory: i,
        disabled: a = !1,
        dragHandleRef: s,
        canEdit: f = !1,
        onEdit: h,
        onRemove: x,
    } = e;
    return (0, n.jsxs)("div", {
        className: r()(G.wx, { [G.kZ]: null != s }),
        children: [
            (0, n.jsxs)("div", {
                ref: s,
                className: G.T_,
                "data-dnd-name": t,
                children: [
                    null != s &&
                        (0, n.jsx)("div", {
                            className: G.BU,
                            children: (0, n.jsx)(v.jV, {
                                "aria-label": R.intl.formatToPlainString(w.default.NV85DR, { widgetName: t }),
                            }),
                        }),
                    (0, n.jsxs)("div", {
                        className: G.i8,
                        children: [
                            null != l && (0, n.jsx)("div", { className: G.gr, children: l }),
                            (0, n.jsx)(d.D, { variant: "heading-sm/medium", className: G.DD, children: t }),
                            i,
                        ],
                    }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: G.o1,
                children: [
                    f &&
                        (0, n.jsx)(o.m, {
                            text: R.intl.string(R.t.bt75uw),
                            children: (0, n.jsx)(u.K, {
                                variant: "icon-only",
                                size: "sm",
                                icon: c.PencilIcon,
                                "aria-label": R.intl.string(R.t.bt75uw),
                                disabled: a,
                                onClick: h,
                            }),
                        }),
                    null != x &&
                        (0, n.jsx)(o.m, {
                            text: R.intl.string(R.t.Mm07Yc),
                            children: (0, n.jsx)(u.K, {
                                variant: "critical-secondary",
                                size: "sm",
                                icon: m.TrashIcon,
                                "aria-label":
                                    null == t
                                        ? R.intl.string(R.t.Mm07Yc)
                                        : R.intl.formatToPlainString(w.default.hmNYxk, { widgetName: t }),
                                disabled: a,
                                onClick: x,
                            }),
                        }),
                ],
            }),
        ],
    });
}
function L(e) {
    let { title: t, titleIcon: l, accessory: i } = e;
    return (0, n.jsx)("div", {
        className: G.wx,
        children: (0, n.jsxs)("div", {
            className: G.i8,
            children: [
                null != l && (0, n.jsx)("div", { className: G.gr, children: l }),
                (0, n.jsx)(d.D, { variant: "heading-sm/medium", className: G.DD, children: t }),
                i,
            ],
        }),
    });
}
function U(e) {
    let { title: t, boostPrice: l, powerupSkuId: i, LockedPreview: a, guildId: r } = e,
        d = (0, s.bG)([A.A], () => (null != i ? A.A.getStateForGuild(r)?.allPowerups[i] : void 0), [r, i]);
    return (0, n.jsxs)(f.B, {
        className: G.xt,
        align: "center",
        justify: "center",
        gap: 24,
        children: [
            (0, n.jsxs)(f.B, {
                align: "center",
                gap: 12,
                children: [
                    null != a ? (0, n.jsx)(a, { alt: "", ariaHidden: !0 }) : (0, n.jsx)(b, {}),
                    (0, n.jsxs)(f.B, {
                        align: "center",
                        gap: 4,
                        children: [
                            (0, n.jsx)(h.E, {
                                variant: "text-md/semibold",
                                color: "text-default",
                                children: R.intl.formatToPlainString(w.default.G5zCGV, { widgetName: t }),
                            }),
                            null != l &&
                                l > 0 &&
                                (0, n.jsx)(h.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: R.intl.format(w.default["8wD0Un"], { boostPrice: l }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, n.jsx)(x.$, {
                variant: "expressive",
                icon: g._,
                text: R.intl.string(R.t["+7XY31"]),
                disabled: null == d,
                loading: null != i && null == d,
                onClick: function () {
                    null != d && (0, p.A)(r, d);
                },
            }),
        ],
    });
}
function k(e) {
    let {
            guildId: t,
            widget: l,
            guildSpaceMode: a,
            hydration: s,
            onRemove: d,
            onCommitConfig: o,
            dragHandleRef: u,
            disabled: c = !1,
            lock: m,
        } = e,
        f = D.m[l.type],
        h = i.useCallback(() => {
            f?.Edit != null &&
                null != o &&
                null == m &&
                (function (e) {
                    let { widget: t, Edit: l, onCommit: i } = e,
                        a = (e) =>
                            (0, n.jsx)(C.Modal, {
                                title: t.default_title ?? void 0,
                                actions: [],
                                ...e,
                                children: (0, n.jsx)(l, {
                                    widget: t,
                                    commit: function (t) {
                                        (i(t), e.onClose());
                                    },
                                    cancel: function () {
                                        e.onClose();
                                    },
                                }),
                            });
                    (0, T.openModalLazy)(() => Promise.resolve(a), { modalKey: "guild-space-widget-edit" });
                })({ widget: l, Edit: f.Edit, onCommit: o });
        }, [l, f, o, m]),
        x = f?.useTitle?.(l, s) ?? l.default_title ?? "";
    if (null == f) return null;
    let { View: g, Edit: A, HeaderAccessory: p, TitleIcon: v } = f,
        j = "edit" === a,
        E = null != A && null != o && null == m,
        S = null != p ? (0, n.jsx)(p, { hydration: s }) : null,
        _ = null != v ? (0, n.jsx)(v, { hydration: s }) : null;
    return (0, n.jsxs)("div", {
        className: r()(G.kL, { [G.Dy]: j }),
        children: [
            j
                ? (0, n.jsx)(M, {
                      title: x,
                      titleIcon: _,
                      accessory: S,
                      disabled: c,
                      dragHandleRef: u,
                      canEdit: E,
                      onEdit: h,
                      onRemove: d,
                  })
                : (0, n.jsx)(L, { title: x, titleIcon: _, accessory: S }),
            (0, n.jsx)("div", {
                className: G.rf,
                children:
                    null != m
                        ? (0, n.jsx)(U, {
                              title: x,
                              boostPrice: m.boostPrice,
                              powerupSkuId: m.powerupSkuId,
                              LockedPreview: f.LockedPreview,
                              guildId: t,
                          })
                        : (0, n.jsx)(g, { widget: l, hydration: s, guildSpaceMode: a, guildId: t }),
            }),
        ],
    });
}
