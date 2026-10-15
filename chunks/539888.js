l.d(t, { P: () => P });
var n = l(477900),
    i = l(582128),
    s = l(503698),
    a = l.n(s),
    r = l(17928),
    d = l(866665),
    c = l(408278),
    o = l(22231),
    u = l(241326),
    m = l(331322),
    x = l(834730),
    f = l(104510),
    h = l(661531),
    g = l(821609),
    j = l(645619),
    p = l(915667),
    v = l(451395),
    _ = l(328006),
    A = l(857909),
    b = l(334840),
    N = l(393750);
let E = [
    { avatar: _.A, topBarWidth: "68%", bottomBarWidths: ["26%", "55%"] },
    { avatar: A.A, topBarWidth: "48%", bottomBarWidths: ["26%", "100%"] },
    { avatar: b.A, topBarWidth: "96%", bottomBarWidths: ["26%", "24%"] },
];
function I(e) {
    let { width: t } = e;
    return (0, n.jsx)("div", { className: N.M0, style: { width: t } });
}
function S(e) {
    let { rank: t, row: l } = e;
    return (0, n.jsxs)("div", {
        className: N.nM,
        children: [
            (0, n.jsx)("div", {
                className: N.Tm,
                "aria-hidden": !0,
                children: (0, n.jsx)(x.E, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    className: N._k,
                    children: t,
                }),
            }),
            (0, n.jsx)("img", { className: N.my, src: l.avatar, alt: "", "aria-hidden": !0 }),
            (0, n.jsxs)("div", {
                className: N.n_,
                "aria-hidden": !0,
                children: [
                    (0, n.jsx)(I, { width: l.topBarWidth }),
                    (0, n.jsxs)("div", {
                        className: N.O3,
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
    return (0, n.jsx)("div", { className: N.kL, children: E.map((e, t) => (0, n.jsx)(S, { rank: t + 1, row: e }, t)) });
}
var y = l(562073),
    T = l(189213),
    k = l(192308),
    R = l(987476),
    D = l(104129),
    w = l(105292),
    M = l(397462);
function L(e) {
    let {
        title: t,
        widgetName: l,
        titleIcon: i,
        accessory: s,
        disabled: r = !1,
        dragHandleRef: m,
        canEdit: x = !1,
        onEdit: f,
        onRemove: h,
    } = e;
    return (0, n.jsxs)("div", {
        className: a()(M.wx, { [M.kZ]: null != m }),
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
                                children: (0, n.jsx)(v.jV, {
                                    iconSize: "xs",
                                    "aria-label": w.intl.formatToPlainString(D.default.NV85DR, { widgetName: l }),
                                }),
                            }),
                        null != i && (0, n.jsx)("div", { className: M.gr, children: i }),
                        t,
                        s,
                    ],
                }),
            }),
            (0, n.jsxs)("div", {
                className: M.o1,
                children: [
                    x &&
                        (0, n.jsx)(d.m, {
                            text: w.intl.string(w.t.bt75uw),
                            children: (0, n.jsx)(c.K, {
                                variant: "icon-only",
                                size: "sm",
                                icon: o.PencilIcon,
                                "aria-label": w.intl.string(w.t.bt75uw),
                                disabled: r,
                                onClick: f,
                            }),
                        }),
                    null != h &&
                        (0, n.jsx)(d.m, {
                            text: w.intl.string(w.t.Mm07Yc),
                            children: (0, n.jsx)(c.K, {
                                variant: "icon-only",
                                size: "sm",
                                icon: u.TrashIcon,
                                "aria-label":
                                    "" === l
                                        ? w.intl.string(w.t.Mm07Yc)
                                        : w.intl.formatToPlainString(D.default.hmNYxk, { widgetName: l }),
                                disabled: r,
                                onClick: h,
                            }),
                        }),
                ],
            }),
        ],
    });
}
function G(e) {
    let { title: t, titleIcon: l, accessory: i, trailing: s, actions: a } = e;
    return (0, n.jsxs)("div", {
        className: M.wx,
        children: [
            (0, n.jsxs)("div", {
                className: M.i8,
                children: [null != l && (0, n.jsx)("div", { className: M.gr, children: l }), t, i],
            }),
            (null != s || null != a) &&
                (0, n.jsxs)("div", {
                    className: M.Bo,
                    children: [
                        null != s && (0, n.jsx)("div", { className: M.o5, children: s }),
                        null != a && (0, n.jsx)("div", { className: M.o1, children: a }),
                    ],
                }),
        ],
    });
}
function U(e) {
    let { title: t, boostPrice: l, powerupSkuId: i, LockedPreview: s, guildId: a } = e,
        d = (0, r.bG)([j.A], () => (null != i ? j.A.getStateForGuild(a)?.allPowerups[i] : void 0), [a, i]);
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
                        children: null != s ? (0, n.jsx)(s, { alt: "", ariaHidden: !0 }) : (0, n.jsx)(C, {}),
                    }),
                    (0, n.jsxs)(m.B, {
                        align: "center",
                        gap: 8,
                        children: [
                            (0, n.jsx)(x.E, {
                                variant: "text-md/semibold",
                                color: "text-default",
                                children: w.intl.formatToPlainString(D.default.G5zCGV, { widgetName: t }),
                            }),
                            null != l &&
                                l > 0 &&
                                (0, n.jsxs)(m.B, {
                                    direction: "horizontal",
                                    align: "center",
                                    justify: "center",
                                    gap: 4,
                                    children: [
                                        (0, n.jsx)(f._, {
                                            size: "sm",
                                            color: h.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                        }),
                                        (0, n.jsx)(x.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: w.intl.format(D.default["8wD0Un"], { boostPrice: l }),
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
                icon: f._,
                text: w.intl.string(w.t["+7XY31"]),
                disabled: null == d,
                loading: null != i && null == d,
                onClick: function () {
                    null != d && (0, p.A)(a, d);
                },
            }),
        ],
    });
}
function P(e) {
    let {
            guildId: t,
            widget: l,
            guildSpaceMode: s,
            hydration: a,
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
                        s = (e) =>
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
                    (0, k.openModalLazy)(() => Promise.resolve(s), { modalKey: "guild-space-widget-edit" });
                })({ widget: l, Edit: m.Edit, onCommit: d });
        }, [l, m, d, u]);
    if (null == m) return null;
    let { View: f, Edit: h, HeaderAccessory: g, HeaderActions: j, Title: p, TitleIcon: v, ViewHeaderTrailing: _ } = m,
        A = "edit" === s,
        b = null != h && null != d && null == u,
        N = null != g ? (0, n.jsx)(g, { hydration: a, guildId: t }) : null,
        E = null != v ? (0, n.jsx)(v, { hydration: a }) : null,
        I = null == u && null != j ? (0, n.jsx)(j, { hydration: a, guildId: t, column: l.position.column }) : null,
        S = l.default_title ?? "",
        C =
            null != p && null == u
                ? (0, n.jsx)(p, { widget: l, hydration: a, guildSpaceMode: s, guildId: t })
                : (0, n.jsx)(y.q, { children: S });
    return (0, n.jsxs)("div", {
        className: M.kL,
        "data-guild-space-widget": "",
        children: [
            A
                ? (0, n.jsx)(L, {
                      title: C,
                      widgetName: S,
                      titleIcon: E,
                      accessory: N,
                      disabled: o,
                      dragHandleRef: c,
                      canEdit: b,
                      onEdit: x,
                      onRemove: r,
                  })
                : (0, n.jsx)(G, {
                      title: C,
                      titleIcon: E,
                      accessory: N,
                      trailing: null != _ && null == u ? (0, n.jsx)(_, { widget: l, hydration: a, title: S }) : null,
                      actions: I,
                  }),
            (0, n.jsx)("div", {
                className: M.rf,
                children:
                    null != u
                        ? (0, n.jsx)(U, {
                              title: S,
                              boostPrice: u.boostPrice,
                              powerupSkuId: u.powerupSkuId,
                              LockedPreview: m.LockedPreview,
                              guildId: t,
                          })
                        : (0, n.jsx)(f, { widget: l, hydration: a, guildSpaceMode: s, guildId: t }),
            }),
        ],
    });
}
