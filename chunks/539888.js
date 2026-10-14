n.d(t, { P: () => P });
var l = n(477900),
    i = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(17928),
    d = n(866665),
    c = n(408278),
    o = n(22231),
    u = n(241326),
    m = n(331322),
    x = n(834730),
    h = n(104510),
    f = n(661531),
    g = n(821609),
    j = n(645619),
    p = n(915667),
    v = n(451395),
    _ = n(328006),
    A = n(857909),
    E = n(334840),
    N = n(393750);
let b = [
    { avatar: _.A, topBarWidth: "68%", bottomBarWidths: ["26%", "55%"] },
    { avatar: A.A, topBarWidth: "48%", bottomBarWidths: ["26%", "100%"] },
    { avatar: E.A, topBarWidth: "96%", bottomBarWidths: ["26%", "24%"] },
];
function I(e) {
    let { width: t } = e;
    return (0, l.jsx)("div", { className: N.M0, style: { width: t } });
}
function S(e) {
    let { rank: t, row: n } = e;
    return (0, l.jsxs)("div", {
        className: N.nM,
        children: [
            (0, l.jsx)("div", {
                className: N.Tm,
                "aria-hidden": !0,
                children: (0, l.jsx)(x.E, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    className: N._k,
                    children: t,
                }),
            }),
            (0, l.jsx)("img", { className: N.my, src: n.avatar, alt: "", "aria-hidden": !0 }),
            (0, l.jsxs)("div", {
                className: N.n_,
                "aria-hidden": !0,
                children: [
                    (0, l.jsx)(I, { width: n.topBarWidth }),
                    (0, l.jsxs)("div", {
                        className: N.O3,
                        children: [
                            (0, l.jsx)(I, { width: n.bottomBarWidths[0] }),
                            (0, l.jsx)(I, { width: n.bottomBarWidths[1] }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function C() {
    return (0, l.jsx)("div", { className: N.kL, children: b.map((e, t) => (0, l.jsx)(S, { rank: t + 1, row: e }, t)) });
}
var y = n(562073),
    T = n(189213),
    R = n(192308),
    k = n(645449),
    D = n(61567),
    w = n(660183),
    L = n(397462);
function M(e) {
    let {
        title: t,
        widgetName: n,
        titleIcon: i,
        accessory: a,
        disabled: r = !1,
        dragHandleRef: m,
        canEdit: x = !1,
        onEdit: h,
        onRemove: f,
    } = e;
    return (0, l.jsxs)("div", {
        className: s()(L.wx, { [L.kZ]: null != m }),
        children: [
            (0, l.jsx)("div", {
                ref: m,
                className: L.T_,
                "data-dnd-name": n,
                children: (0, l.jsxs)("div", {
                    className: L.i8,
                    children: [
                        null != m &&
                            (0, l.jsx)("div", {
                                className: L.BU,
                                children: (0, l.jsx)(v.jV, {
                                    iconSize: "xs",
                                    "aria-label": w.intl.formatToPlainString(D.default.NV85DR, { widgetName: n }),
                                }),
                            }),
                        null != i && (0, l.jsx)("div", { className: L.gr, children: i }),
                        t,
                        a,
                    ],
                }),
            }),
            (0, l.jsxs)("div", {
                className: L.o1,
                children: [
                    x &&
                        (0, l.jsx)(d.m, {
                            text: w.intl.string(w.t.bt75uw),
                            children: (0, l.jsx)(c.K, {
                                variant: "icon-only",
                                size: "sm",
                                icon: o.PencilIcon,
                                "aria-label": w.intl.string(w.t.bt75uw),
                                disabled: r,
                                onClick: h,
                            }),
                        }),
                    null != f &&
                        (0, l.jsx)(d.m, {
                            text: w.intl.string(w.t.Mm07Yc),
                            children: (0, l.jsx)(c.K, {
                                variant: "icon-only",
                                size: "sm",
                                icon: u.TrashIcon,
                                "aria-label":
                                    "" === n
                                        ? w.intl.string(w.t.Mm07Yc)
                                        : w.intl.formatToPlainString(D.default.hmNYxk, { widgetName: n }),
                                disabled: r,
                                onClick: f,
                            }),
                        }),
                ],
            }),
        ],
    });
}
function G(e) {
    let { title: t, titleIcon: n, accessory: i, trailing: a, actions: s } = e;
    return (0, l.jsxs)("div", {
        className: L.wx,
        children: [
            (0, l.jsxs)("div", {
                className: L.i8,
                children: [null != n && (0, l.jsx)("div", { className: L.gr, children: n }), t, i],
            }),
            (null != a || null != s) &&
                (0, l.jsxs)("div", {
                    className: L.Bo,
                    children: [
                        null != a && (0, l.jsx)("div", { className: L.o5, children: a }),
                        null != s && (0, l.jsx)("div", { className: L.o1, children: s }),
                    ],
                }),
        ],
    });
}
function U(e) {
    let { title: t, boostPrice: n, powerupSkuId: i, LockedPreview: a, guildId: s } = e,
        d = (0, r.bG)([j.A], () => (null != i ? j.A.getStateForGuild(s)?.allPowerups[i] : void 0), [s, i]);
    return (0, l.jsxs)(m.B, {
        className: L.xt,
        align: "center",
        justify: "center",
        gap: 32,
        children: [
            (0, l.jsxs)(m.B, {
                align: "center",
                gap: 16,
                children: [
                    (0, l.jsx)("div", {
                        className: L.$x,
                        children: null != a ? (0, l.jsx)(a, { alt: "", ariaHidden: !0 }) : (0, l.jsx)(C, {}),
                    }),
                    (0, l.jsxs)(m.B, {
                        align: "center",
                        gap: 8,
                        children: [
                            (0, l.jsx)(x.E, {
                                variant: "text-md/semibold",
                                color: "text-default",
                                children: w.intl.formatToPlainString(D.default.G5zCGV, { widgetName: t }),
                            }),
                            null != n &&
                                n > 0 &&
                                (0, l.jsxs)(m.B, {
                                    direction: "horizontal",
                                    align: "center",
                                    justify: "center",
                                    gap: 4,
                                    children: [
                                        (0, l.jsx)(h._, {
                                            size: "sm",
                                            color: f.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                        }),
                                        (0, l.jsx)(x.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: w.intl.format(D.default["8wD0Un"], { boostPrice: n }),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)(g.$, {
                variant: "expressive",
                size: "sm",
                icon: h._,
                text: w.intl.string(w.t["+7XY31"]),
                disabled: null == d,
                loading: null != i && null == d,
                onClick: function () {
                    null != d && (0, p.A)(s, d);
                },
            }),
        ],
    });
}
function P(e) {
    let {
            guildId: t,
            widget: n,
            guildSpaceMode: a,
            hydration: s,
            onRemove: r,
            onCommitConfig: d,
            dragHandleRef: c,
            disabled: o = !1,
            lock: u,
        } = e,
        m = k.m[n.type],
        x = i.useCallback(() => {
            m?.Edit != null &&
                null != d &&
                null == u &&
                (function (e) {
                    let { widget: t, Edit: n, onCommit: i } = e,
                        a = (e) =>
                            (0, l.jsx)(T.a, {
                                title: t.default_title ?? void 0,
                                actions: [],
                                ...e,
                                children: (0, l.jsx)(n, {
                                    widget: t,
                                    commit: function (t) {
                                        (i(t), e.onClose());
                                    },
                                    cancel: function () {
                                        e.onClose();
                                    },
                                }),
                            });
                    (0, R.openModalLazy)(() => Promise.resolve(a), { modalKey: "guild-space-widget-edit" });
                })({ widget: n, Edit: m.Edit, onCommit: d });
        }, [n, m, d, u]);
    if (null == m) return null;
    let { View: h, Edit: f, HeaderAccessory: g, HeaderActions: j, Title: p, TitleIcon: v, ViewHeaderTrailing: _ } = m,
        A = "edit" === a,
        E = null != f && null != d && null == u,
        N = null != g ? (0, l.jsx)(g, { hydration: s, guildId: t }) : null,
        b = null != v ? (0, l.jsx)(v, { hydration: s }) : null,
        I = null == u && null != j ? (0, l.jsx)(j, { hydration: s, guildId: t, column: n.position.column }) : null,
        S = n.default_title ?? "",
        C =
            null != p && null == u
                ? (0, l.jsx)(p, { widget: n, hydration: s, guildSpaceMode: a, guildId: t })
                : (0, l.jsx)(y.q, { children: S });
    return (0, l.jsxs)("div", {
        className: L.kL,
        "data-guild-space-widget": "",
        children: [
            A
                ? (0, l.jsx)(M, {
                      title: C,
                      widgetName: S,
                      titleIcon: b,
                      accessory: N,
                      disabled: o,
                      dragHandleRef: c,
                      canEdit: E,
                      onEdit: x,
                      onRemove: r,
                  })
                : (0, l.jsx)(G, {
                      title: C,
                      titleIcon: b,
                      accessory: N,
                      trailing: null != _ && null == u ? (0, l.jsx)(_, { widget: n, hydration: s, title: S }) : null,
                      actions: I,
                  }),
            (0, l.jsx)("div", {
                className: L.rf,
                children:
                    null != u
                        ? (0, l.jsx)(U, {
                              title: S,
                              boostPrice: u.boostPrice,
                              powerupSkuId: u.powerupSkuId,
                              LockedPreview: m.LockedPreview,
                              guildId: t,
                          })
                        : (0, l.jsx)(h, { widget: n, hydration: s, guildSpaceMode: a, guildId: t }),
            }),
        ],
    });
}
