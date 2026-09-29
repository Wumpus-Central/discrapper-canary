l.d(t, { P: () => U });
var n = l(477900),
    i = l(582128),
    a = l(503698),
    s = l.n(a),
    r = l(17928),
    d = l(866665),
    o = l(408278),
    c = l(22231),
    u = l(241326),
    m = l(331322),
    x = l(834730),
    f = l(104510),
    h = l(661531),
    g = l(821609),
    p = l(645619),
    j = l(915667),
    v = l(451395),
    A = l(328006),
    E = l(857909),
    _ = l(334840),
    I = l(393750);
let N = [
    { avatar: A.A, topBarWidth: "68%", bottomBarWidths: ["26%", "55%"] },
    { avatar: E.A, topBarWidth: "48%", bottomBarWidths: ["26%", "100%"] },
    { avatar: _.A, topBarWidth: "96%", bottomBarWidths: ["26%", "24%"] },
];
function b(e) {
    let { width: t } = e;
    return (0, n.jsx)("div", { className: I.M0, style: { width: t } });
}
function S(e) {
    let { rank: t, row: l } = e;
    return (0, n.jsxs)("div", {
        className: I.nM,
        children: [
            (0, n.jsx)("div", {
                className: I.Tm,
                "aria-hidden": !0,
                children: (0, n.jsx)(x.E, {
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
                    (0, n.jsx)(b, { width: l.topBarWidth }),
                    (0, n.jsxs)("div", {
                        className: I.O3,
                        children: [
                            (0, n.jsx)(b, { width: l.bottomBarWidths[0] }),
                            (0, n.jsx)(b, { width: l.bottomBarWidths[1] }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function y() {
    return (0, n.jsx)("div", { className: I.kL, children: N.map((e, t) => (0, n.jsx)(S, { rank: t + 1, row: e }, t)) });
}
var T = l(562073),
    C = l(189213),
    w = l(192308),
    D = l(195872),
    R = l(104129),
    L = l(375708),
    M = l(397462);
function k(e) {
    let {
        title: t,
        widgetName: l,
        titleIcon: i,
        accessory: a,
        disabled: r = !1,
        dragHandleRef: m,
        canEdit: x = !1,
        onEdit: f,
        onRemove: h,
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
                                children: (0, n.jsx)(v.jV, {
                                    iconSize: "xs",
                                    "aria-label": L.intl.formatToPlainString(R.default.NV85DR, { widgetName: l }),
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
                            text: L.intl.string(L.t.bt75uw),
                            children: (0, n.jsx)(o.K, {
                                variant: "icon-only",
                                size: "sm",
                                icon: c.PencilIcon,
                                "aria-label": L.intl.string(L.t.bt75uw),
                                disabled: r,
                                onClick: f,
                            }),
                        }),
                    null != h &&
                        (0, n.jsx)(d.m, {
                            text: L.intl.string(L.t.Mm07Yc),
                            children: (0, n.jsx)(o.K, {
                                variant: "icon-only",
                                size: "sm",
                                icon: u.TrashIcon,
                                "aria-label":
                                    "" === l
                                        ? L.intl.string(L.t.Mm07Yc)
                                        : L.intl.formatToPlainString(R.default.hmNYxk, { widgetName: l }),
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
function P(e) {
    let { title: t, boostPrice: l, powerupSkuId: i, LockedPreview: a, guildId: s } = e,
        d = (0, r.bG)([p.A], () => (null != i ? p.A.getStateForGuild(s)?.allPowerups[i] : void 0), [s, i]);
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
                        children: null != a ? (0, n.jsx)(a, { alt: "", ariaHidden: !0 }) : (0, n.jsx)(y, {}),
                    }),
                    (0, n.jsxs)(m.B, {
                        align: "center",
                        gap: 8,
                        children: [
                            (0, n.jsx)(x.E, {
                                variant: "text-md/semibold",
                                color: "text-default",
                                children: L.intl.formatToPlainString(R.default.G5zCGV, { widgetName: t }),
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
                                            children: L.intl.format(R.default["8wD0Un"], { boostPrice: l }),
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
                text: L.intl.string(L.t["+7XY31"]),
                disabled: null == d,
                loading: null != i && null == d,
                onClick: function () {
                    null != d && (0, j.A)(s, d);
                },
            }),
        ],
    });
}
function U(e) {
    let {
            guildId: t,
            widget: l,
            guildSpaceMode: a,
            hydration: s,
            onRemove: r,
            onCommitConfig: d,
            dragHandleRef: o,
            disabled: c = !1,
            lock: u,
        } = e,
        m = D.m[l.type],
        x = i.useCallback(() => {
            m?.Edit != null &&
                null != d &&
                null == u &&
                (function (e) {
                    let { widget: t, Edit: l, onCommit: i } = e,
                        a = (e) =>
                            (0, n.jsx)(C.a, {
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
                    (0, w.openModalLazy)(() => Promise.resolve(a), { modalKey: "guild-space-widget-edit" });
                })({ widget: l, Edit: m.Edit, onCommit: d });
        }, [l, m, d, u]);
    if (null == m) return null;
    let { View: f, Edit: h, HeaderAccessory: g, HeaderActions: p, Title: j, TitleIcon: v, ViewHeaderTrailing: A } = m,
        E = "edit" === a,
        _ = null != h && null != d && null == u,
        I = null != g ? (0, n.jsx)(g, { hydration: s }) : null,
        N = null != v ? (0, n.jsx)(v, { hydration: s }) : null,
        b = null == u && null != p ? (0, n.jsx)(p, { hydration: s, guildId: t }) : null,
        S = l.default_title ?? "",
        y =
            null != j && null == u
                ? (0, n.jsx)(j, { widget: l, hydration: s, guildSpaceMode: a, guildId: t })
                : (0, n.jsx)(T.q, { children: S });
    return (0, n.jsxs)("div", {
        className: M.kL,
        children: [
            E
                ? (0, n.jsx)(k, {
                      title: y,
                      widgetName: S,
                      titleIcon: N,
                      accessory: I,
                      disabled: c,
                      dragHandleRef: o,
                      canEdit: _,
                      onEdit: x,
                      onRemove: r,
                  })
                : (0, n.jsx)(G, {
                      title: y,
                      titleIcon: N,
                      accessory: I,
                      trailing: null != A && null == u ? (0, n.jsx)(A, { widget: l, hydration: s, title: S }) : null,
                      actions: b,
                  }),
            (0, n.jsx)("div", {
                className: M.rf,
                children:
                    null != u
                        ? (0, n.jsx)(P, {
                              title: S,
                              boostPrice: u.boostPrice,
                              powerupSkuId: u.powerupSkuId,
                              LockedPreview: m.LockedPreview,
                              guildId: t,
                          })
                        : (0, n.jsx)(f, { widget: l, hydration: s, guildSpaceMode: a, guildId: t }),
            }),
        ],
    });
}
