l.d(t, { P: () => P });
var n = l(477900),
    i = l(582128),
    a = l(503698),
    s = l.n(a),
    r = l(17928),
    d = l(866665),
    c = l(408278),
    o = l(22231),
    u = l(241326),
    m = l(331322),
    x = l(834730),
    h = l(104510),
    f = l(661531),
    g = l(821609),
    j = l(645619),
    v = l(915667),
    p = l(451395),
    _ = l(328006),
    N = l(857909),
    A = l(334840),
    E = l(393750);
let b = [
    { avatar: _.A, topBarWidth: "68%", bottomBarWidths: ["26%", "55%"] },
    { avatar: N.A, topBarWidth: "48%", bottomBarWidths: ["26%", "100%"] },
    { avatar: A.A, topBarWidth: "96%", bottomBarWidths: ["26%", "24%"] },
];
function I(e) {
    let { width: t } = e;
    return (0, n.jsx)("div", { className: E.M0, style: { width: t } });
}
function S(e) {
    let { rank: t, row: l } = e;
    return (0, n.jsxs)("div", {
        className: E.nM,
        children: [
            (0, n.jsx)("div", {
                className: E.Tm,
                "aria-hidden": !0,
                children: (0, n.jsx)(x.E, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    className: E._k,
                    children: t,
                }),
            }),
            (0, n.jsx)("img", { className: E.my, src: l.avatar, alt: "", "aria-hidden": !0 }),
            (0, n.jsxs)("div", {
                className: E.n_,
                "aria-hidden": !0,
                children: [
                    (0, n.jsx)(I, { width: l.topBarWidth }),
                    (0, n.jsxs)("div", {
                        className: E.O3,
                        children: [
                            (0, n.jsx)(I, { width: l.bottomBarWidths[0] }),
                            (0, n.jsx)(I, { width: l.bottomBarWidths[1] }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function C() {
    return (0, n.jsx)("div", { className: E.kL, children: b.map((e, t) => (0, n.jsx)(S, { rank: t + 1, row: e }, t)) });
}
var y = l(562073),
    T = l(189213),
    k = l(192308),
    R = l(502901),
    w = l(61567),
    D = l(375708),
    M = l(397462);
function L(e) {
    let {
        title: t,
        widgetName: l,
        titleIcon: i,
        accessory: a,
        disabled: r = !1,
        dragHandleRef: m,
        canEdit: x = !1,
        onEdit: h,
        onRemove: f,
    } = e;
    return (0, n.jsxs)("div", {
        className: s()(M.wx, { [M.kZ]: null != m }),
        children: [
            (0, n.jsx)("div", {
                ref: m,
                className: M.T_,
                "data-dnd-name": l,
                children: (0, n.jsxs)("div", {
                    className: M.i8,
                    children: [
                        null != m &&
                            (0, n.jsx)("div", {
                                className: M.BU,
                                children: (0, n.jsx)(p.jV, {
                                    iconSize: "xs",
                                    "aria-label": D.intl.formatToPlainString(w.default.NV85DR, { widgetName: l }),
                                }),
                            }),
                        null != i && (0, n.jsx)("div", { className: M.gr, children: i }),
                        t,
                        a,
                    ],
                }),
            }),
            (0, n.jsxs)("div", {
                className: M.o1,
                children: [
                    x &&
                        (0, n.jsx)(d.m, {
                            text: D.intl.string(D.t.bt75uw),
                            children: (0, n.jsx)(c.K, {
                                variant: "icon-only",
                                size: "sm",
                                icon: o.PencilIcon,
                                "aria-label": D.intl.string(D.t.bt75uw),
                                disabled: r,
                                onClick: h,
                            }),
                        }),
                    null != f &&
                        (0, n.jsx)(d.m, {
                            text: D.intl.string(D.t.Mm07Yc),
                            children: (0, n.jsx)(c.K, {
                                variant: "icon-only",
                                size: "sm",
                                icon: u.TrashIcon,
                                "aria-label":
                                    "" === l
                                        ? D.intl.string(D.t.Mm07Yc)
                                        : D.intl.formatToPlainString(w.default.hmNYxk, { widgetName: l }),
                                disabled: r,
                                onClick: f,
                            }),
                        }),
                ],
            }),
        ],
    });
}
function U(e) {
    let { title: t, titleIcon: l, accessory: i, trailing: a, actions: s } = e;
    return (0, n.jsxs)("div", {
        className: M.wx,
        children: [
            (0, n.jsxs)("div", {
                className: M.i8,
                children: [null != l && (0, n.jsx)("div", { className: M.gr, children: l }), t, i],
            }),
            (null != a || null != s) &&
                (0, n.jsxs)("div", {
                    className: M.Bo,
                    children: [
                        null != a && (0, n.jsx)("div", { className: M.o5, children: a }),
                        null != s && (0, n.jsx)("div", { className: M.o1, children: s }),
                    ],
                }),
        ],
    });
}
function G(e) {
    let { title: t, boostPrice: l, powerupSkuId: i, LockedPreview: a, guildId: s } = e,
        d = (0, r.bG)([j.A], () => (null != i ? j.A.getStateForGuild(s)?.allPowerups[i] : void 0), [s, i]);
    return (0, n.jsxs)(m.B, {
        className: M.xt,
        align: "center",
        justify: "center",
        gap: 32,
        children: [
            (0, n.jsxs)(m.B, {
                align: "center",
                gap: 16,
                children: [
                    (0, n.jsx)("div", {
                        className: M.$x,
                        children: null != a ? (0, n.jsx)(a, { alt: "", ariaHidden: !0 }) : (0, n.jsx)(C, {}),
                    }),
                    (0, n.jsxs)(m.B, {
                        align: "center",
                        gap: 8,
                        children: [
                            (0, n.jsx)(x.E, {
                                variant: "text-md/semibold",
                                color: "text-default",
                                children: D.intl.formatToPlainString(w.default.G5zCGV, { widgetName: t }),
                            }),
                            null != l &&
                                l > 0 &&
                                (0, n.jsxs)(m.B, {
                                    direction: "horizontal",
                                    align: "center",
                                    justify: "center",
                                    gap: 4,
                                    children: [
                                        (0, n.jsx)(h._, {
                                            size: "sm",
                                            color: f.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                        }),
                                        (0, n.jsx)(x.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: D.intl.format(w.default["8wD0Un"], { boostPrice: l }),
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
                icon: h._,
                text: D.intl.string(D.t["+7XY31"]),
                disabled: null == d,
                loading: null != i && null == d,
                onClick: function () {
                    null != d && (0, v.A)(s, d);
                },
            }),
        ],
    });
}
function P(e) {
    let {
            guildId: t,
            widget: l,
            guildSpaceMode: a,
            hydration: s,
            onRemove: r,
            onCommitConfig: d,
            dragHandleRef: c,
            disabled: o = !1,
            lock: u,
        } = e,
        m = R.m[l.type],
        x = i.useCallback(() => {
            m?.Edit != null &&
                null != d &&
                null == u &&
                (function (e) {
                    let { widget: t, Edit: l, onCommit: i } = e,
                        a = (e) =>
                            (0, n.jsx)(T.a, {
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
                    (0, k.openModalLazy)(() => Promise.resolve(a), { modalKey: "guild-space-widget-edit" });
                })({ widget: l, Edit: m.Edit, onCommit: d });
        }, [l, m, d, u]);
    if (null == m) return null;
    let { View: h, Edit: f, HeaderAccessory: g, HeaderActions: j, Title: v, TitleIcon: p, ViewHeaderTrailing: _ } = m,
        N = "edit" === a,
        A = null != f && null != d && null == u,
        E = null != g ? (0, n.jsx)(g, { hydration: s }) : null,
        b = null != p ? (0, n.jsx)(p, { hydration: s }) : null,
        I = null == u && null != j ? (0, n.jsx)(j, { hydration: s, guildId: t }) : null,
        S = l.default_title ?? "",
        C =
            null != v && null == u
                ? (0, n.jsx)(v, { widget: l, hydration: s, guildSpaceMode: a, guildId: t })
                : (0, n.jsx)(y.q, { children: S });
    return (0, n.jsxs)("div", {
        className: M.kL,
        "data-guild-space-widget": "",
        children: [
            N
                ? (0, n.jsx)(L, {
                      title: C,
                      widgetName: S,
                      titleIcon: b,
                      accessory: E,
                      disabled: o,
                      dragHandleRef: c,
                      canEdit: A,
                      onEdit: x,
                      onRemove: r,
                  })
                : (0, n.jsx)(U, {
                      title: C,
                      titleIcon: b,
                      accessory: E,
                      trailing: null != _ && null == u ? (0, n.jsx)(_, { widget: l, hydration: s, title: S }) : null,
                      actions: I,
                  }),
            (0, n.jsx)("div", {
                className: M.rf,
                children:
                    null != u
                        ? (0, n.jsx)(G, {
                              title: S,
                              boostPrice: u.boostPrice,
                              powerupSkuId: u.powerupSkuId,
                              LockedPreview: m.LockedPreview,
                              guildId: t,
                          })
                        : (0, n.jsx)(h, { widget: l, hydration: s, guildSpaceMode: a, guildId: t }),
            }),
        ],
    });
}
