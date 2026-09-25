l.d(t, { P: () => k });
var n = l(477900),
    i = l(582128),
    a = l(503698),
    r = l.n(a),
    s = l(17928),
    d = l(866665),
    o = l(408278),
    c = l(22231),
    u = l(241326),
    m = l(331322),
    f = l(834730),
    x = l(104510),
    h = l(661531),
    g = l(821609),
    j = l(645619),
    p = l(915667),
    v = l(451395),
    A = l(328006),
    E = l(857909),
    _ = l(334840),
    I = l(393750);
let S = [
    { avatar: A.A, topBarWidth: "68%", bottomBarWidths: ["26%", "55%"] },
    { avatar: E.A, topBarWidth: "48%", bottomBarWidths: ["26%", "100%"] },
    { avatar: _.A, topBarWidth: "96%", bottomBarWidths: ["26%", "24%"] },
];
function N(e) {
    let { width: t } = e;
    return (0, n.jsx)("div", { className: I.M0, style: { width: t } });
}
function y(e) {
    let { rank: t, row: l } = e;
    return (0, n.jsxs)("div", {
        className: I.nM,
        children: [
            (0, n.jsx)("div", {
                className: I.Tm,
                "aria-hidden": !0,
                children: (0, n.jsx)(f.E, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    className: I._k,
                    children: t,
                }),
            }),
            (0, n.jsx)("img", { className: I.my, src: l.avatar, alt: "", "aria-hidden": !0 }),
            (0, n.jsxs)("div", {
                className: I.n_,
                "aria-hidden": !0,
                children: [
                    (0, n.jsx)(N, { width: l.topBarWidth }),
                    (0, n.jsxs)("div", {
                        className: I.O3,
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
    return (0, n.jsx)("div", { className: I.kL, children: S.map((e, t) => (0, n.jsx)(y, { rank: t + 1, row: e }, t)) });
}
var C = l(562073),
    T = l(189213),
    D = l(192308),
    w = l(55433),
    R = l(61567),
    M = l(375708),
    G = l(397462);
function L(e) {
    let {
        title: t,
        widgetName: l,
        titleIcon: i,
        accessory: a,
        disabled: s = !1,
        dragHandleRef: m,
        canEdit: f = !1,
        onEdit: x,
        onRemove: h,
    } = e;
    return (0, n.jsxs)("div", {
        className: r()(G.wx, { [G.kZ]: null != m }),
        children: [
            (0, n.jsx)("div", {
                ref: m,
                className: G.T_,
                "data-dnd-name": l,
                children: (0, n.jsxs)("div", {
                    className: G.i8,
                    children: [
                        null != m &&
                            (0, n.jsx)("div", {
                                className: G.BU,
                                children: (0, n.jsx)(v.jV, {
                                    iconSize: "xs",
                                    "aria-label": M.intl.formatToPlainString(R.default.NV85DR, { widgetName: l }),
                                }),
                            }),
                        null != i && (0, n.jsx)("div", { className: G.gr, children: i }),
                        t,
                        a,
                    ],
                }),
            }),
            (0, n.jsxs)("div", {
                className: G.o1,
                children: [
                    f &&
                        (0, n.jsx)(d.m, {
                            text: M.intl.string(M.t.bt75uw),
                            children: (0, n.jsx)(o.K, {
                                variant: "icon-only",
                                size: "sm",
                                icon: c.PencilIcon,
                                "aria-label": M.intl.string(M.t.bt75uw),
                                disabled: s,
                                onClick: x,
                            }),
                        }),
                    null != h &&
                        (0, n.jsx)(d.m, {
                            text: M.intl.string(M.t.Mm07Yc),
                            children: (0, n.jsx)(o.K, {
                                variant: "icon-only",
                                size: "sm",
                                icon: u.TrashIcon,
                                "aria-label":
                                    "" === l
                                        ? M.intl.string(M.t.Mm07Yc)
                                        : M.intl.formatToPlainString(R.default.hmNYxk, { widgetName: l }),
                                disabled: s,
                                onClick: h,
                            }),
                        }),
                ],
            }),
        ],
    });
}
function U(e) {
    let { title: t, titleIcon: l, accessory: i, actions: a } = e;
    return (0, n.jsxs)("div", {
        className: G.wx,
        children: [
            (0, n.jsxs)("div", {
                className: G.i8,
                children: [null != l && (0, n.jsx)("div", { className: G.gr, children: l }), t, i],
            }),
            null != a && (0, n.jsx)("div", { className: G.o1, children: a }),
        ],
    });
}
function P(e) {
    let { title: t, boostPrice: l, powerupSkuId: i, LockedPreview: a, guildId: r } = e,
        d = (0, s.bG)([j.A], () => (null != i ? j.A.getStateForGuild(r)?.allPowerups[i] : void 0), [r, i]);
    return (0, n.jsxs)(m.B, {
        className: G.xt,
        align: "center",
        justify: "center",
        gap: 32,
        children: [
            (0, n.jsxs)(m.B, {
                align: "center",
                gap: 16,
                children: [
                    (0, n.jsx)("div", {
                        className: G.$x,
                        children: null != a ? (0, n.jsx)(a, { alt: "", ariaHidden: !0 }) : (0, n.jsx)(b, {}),
                    }),
                    (0, n.jsxs)(m.B, {
                        align: "center",
                        gap: 8,
                        children: [
                            (0, n.jsx)(f.E, {
                                variant: "text-md/semibold",
                                color: "text-default",
                                children: M.intl.formatToPlainString(R.default.G5zCGV, { widgetName: t }),
                            }),
                            null != l &&
                                l > 0 &&
                                (0, n.jsxs)(m.B, {
                                    direction: "horizontal",
                                    align: "center",
                                    justify: "center",
                                    gap: 4,
                                    children: [
                                        (0, n.jsx)(x._, {
                                            size: "sm",
                                            color: h.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                        }),
                                        (0, n.jsx)(f.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: M.intl.format(R.default["8wD0Un"], { boostPrice: l }),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            (0, n.jsx)(g.$, {
                variant: "expressive",
                size: "sm",
                icon: x._,
                text: M.intl.string(M.t["+7XY31"]),
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
            hydration: r,
            onRemove: s,
            onCommitConfig: d,
            dragHandleRef: o,
            disabled: c = !1,
            lock: u,
        } = e,
        m = w.m[l.type],
        f = i.useCallback(() => {
            m?.Edit != null &&
                null != d &&
                null == u &&
                (function (e) {
                    let { widget: t, Edit: l, onCommit: i } = e,
                        a = (e) =>
                            (0, n.jsx)(T.Modal, {
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
                    (0, D.openModalLazy)(() => Promise.resolve(a), { modalKey: "guild-space-widget-edit" });
                })({ widget: l, Edit: m.Edit, onCommit: d });
        }, [l, m, d, u]);
    if (null == m) return null;
    let { View: x, Edit: h, HeaderAccessory: g, HeaderActions: j, Title: p, TitleIcon: v } = m,
        A = "edit" === a,
        E = null != h && null != d && null == u,
        _ = null != g ? (0, n.jsx)(g, { hydration: r }) : null,
        I = null != v ? (0, n.jsx)(v, { hydration: r }) : null,
        S = null == u && null != j ? (0, n.jsx)(j, { hydration: r, guildId: t }) : null,
        N = l.default_title ?? "",
        y =
            null != p && null == u
                ? (0, n.jsx)(p, { widget: l, hydration: r, guildSpaceMode: a, guildId: t })
                : (0, n.jsx)(C.q, { children: N });
    return (0, n.jsxs)("div", {
        className: G.kL,
        children: [
            A
                ? (0, n.jsx)(L, {
                      title: y,
                      widgetName: N,
                      titleIcon: I,
                      accessory: _,
                      disabled: c,
                      dragHandleRef: o,
                      canEdit: E,
                      onEdit: f,
                      onRemove: s,
                  })
                : (0, n.jsx)(U, { title: y, titleIcon: I, accessory: _, actions: S }),
            (0, n.jsx)("div", {
                className: G.rf,
                children:
                    null != u
                        ? (0, n.jsx)(P, {
                              title: N,
                              boostPrice: u.boostPrice,
                              powerupSkuId: u.powerupSkuId,
                              LockedPreview: m.LockedPreview,
                              guildId: t,
                          })
                        : (0, n.jsx)(x, { widget: l, hydration: r, guildSpaceMode: a, guildId: t }),
            }),
        ],
    });
}
