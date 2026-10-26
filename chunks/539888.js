l.d(t, { P: () => O });
var n = l(477900),
    i = l(582128),
    s = l(503698),
    a = l.n(s),
    r = l(17928),
    d = l(866665),
    c = l(408278),
    u = l(22231),
    o = l(241326),
    m = l(331322),
    x = l(834730),
    f = l(104510),
    g = l(661531),
    h = l(821609),
    p = l(645619),
    j = l(915667),
    v = l(451395),
    _ = l(49303),
    b = l(328006),
    A = l(857909),
    E = l(334840),
    I = l(393750);
let N = [
    { avatar: b.A, topBarWidth: "68%", bottomBarWidths: ["26%", "55%"] },
    { avatar: A.A, topBarWidth: "48%", bottomBarWidths: ["26%", "100%"] },
    { avatar: E.A, topBarWidth: "96%", bottomBarWidths: ["26%", "24%"] },
];
function C(e) {
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
                    (0, n.jsx)(C, { width: l.topBarWidth }),
                    (0, n.jsxs)("div", {
                        className: I.O3,
                        children: [
                            (0, n.jsx)(C, { width: l.bottomBarWidths[0] }),
                            (0, n.jsx)(C, { width: l.bottomBarWidths[1] }),
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
var k = l(562073),
    T = l(189213),
    w = l(192308),
    R = l(672795),
    D = l(61567),
    L = l(105292),
    M = l(397462);
function U(e) {
    let {
        title: t,
        widgetName: l,
        titleIcon: i,
        accessory: s,
        disabled: r = !1,
        dragHandleRef: m,
        canEdit: x = !1,
        onEdit: f,
        onRemove: g,
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
                                    "aria-label": L.intl.formatToPlainString(D.default.NV85DR, { widgetName: l }),
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
                            text: L.intl.string(L.t.bt75uw),
                            children: (0, n.jsx)(c.K, {
                                variant: "icon-only",
                                size: "sm",
                                icon: u.PencilIcon,
                                "aria-label": L.intl.string(L.t.bt75uw),
                                disabled: r,
                                onClick: f,
                            }),
                        }),
                    null != g &&
                        (0, n.jsx)(d.m, {
                            text: L.intl.string(L.t.Mm07Yc),
                            children: (0, n.jsx)(c.K, {
                                variant: "icon-only",
                                size: "sm",
                                icon: o.TrashIcon,
                                "aria-label":
                                    "" === l
                                        ? L.intl.string(L.t.Mm07Yc)
                                        : L.intl.formatToPlainString(D.default.hmNYxk, { widgetName: l }),
                                disabled: r,
                                onClick: g,
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
function P(e) {
    let { title: t, boostPrice: l, powerupSkuId: i, LockedPreview: s, guildId: a } = e,
        d = (0, r.bG)([p.A], () => (null != i ? p.A.getStateForGuild(a)?.allPowerups[i] : void 0), [a, i]);
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
                        children: null != s ? (0, n.jsx)(s, { alt: "", ariaHidden: !0 }) : (0, n.jsx)(y, {}),
                    }),
                    (0, n.jsxs)(m.B, {
                        align: "center",
                        gap: 8,
                        children: [
                            (0, n.jsx)(x.E, {
                                variant: "text-md/semibold",
                                color: "text-default",
                                children: L.intl.formatToPlainString(D.default.G5zCGV, { widgetName: t }),
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
                                            color: g.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                        }),
                                        (0, n.jsx)(x.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: L.intl.format(D.default["8wD0Un"], { boostPrice: l }),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            (0, n.jsx)(h.$, {
                variant: "expressive",
                size: "sm",
                icon: f._,
                text: L.intl.string(L.t["+7XY31"]),
                disabled: null == d,
                loading: null != i && null == d,
                onClick: function () {
                    null != d && (0, j.A)(a, d);
                },
            }),
        ],
    });
}
function O(e) {
    let {
            guildId: t,
            widget: l,
            guildSpaceMode: s,
            hydration: a,
            onRemove: r,
            onCommitConfig: d,
            dragHandleRef: c,
            disabled: u = !1,
            lock: o,
        } = e,
        m = R.m[l.type],
        x = i.useCallback(() => {
            m?.Edit != null &&
                null != d &&
                null == o &&
                ((0, _.Nv)(t, l.type, l.id),
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
                    (0, w.openModalLazy)(() => Promise.resolve(s), { modalKey: "guild-space-widget-edit" });
                })({ widget: l, Edit: m.Edit, onCommit: d }));
        }, [l, m, d, o, t]);
    if (null == m) return null;
    let { View: f, Edit: g, HeaderAccessory: h, HeaderActions: p, Title: j, TitleIcon: v, ViewHeaderTrailing: b } = m,
        A = "edit" === s,
        E = null != g && null != d && null == o,
        I = null != h ? (0, n.jsx)(h, { hydration: a, guildId: t }) : null,
        N = null != v ? (0, n.jsx)(v, { hydration: a }) : null,
        C = null == o && null != p ? (0, n.jsx)(p, { hydration: a, guildId: t, column: l.position.column }) : null,
        S = l.default_title ?? "",
        y =
            null != j && null == o
                ? (0, n.jsx)(j, { widget: l, hydration: a, guildSpaceMode: s, guildId: t })
                : (0, n.jsx)(k.q, { children: S });
    return (0, n.jsxs)("div", {
        className: M.kL,
        "data-guild-space-widget": "",
        children: [
            A
                ? (0, n.jsx)(U, {
                      title: y,
                      widgetName: S,
                      titleIcon: N,
                      accessory: I,
                      disabled: u,
                      dragHandleRef: c,
                      canEdit: E,
                      onEdit: x,
                      onRemove: r,
                  })
                : (0, n.jsx)(G, {
                      title: y,
                      titleIcon: N,
                      accessory: I,
                      trailing:
                          null != b && null == o
                              ? (0, n.jsx)(b, { widget: l, hydration: a, title: S, guildId: t })
                              : null,
                      actions: C,
                  }),
            (0, n.jsx)("div", {
                className: M.rf,
                children:
                    null != o
                        ? (0, n.jsx)(P, {
                              title: S,
                              boostPrice: o.boostPrice,
                              powerupSkuId: o.powerupSkuId,
                              LockedPreview: m.LockedPreview,
                              guildId: t,
                          })
                        : (0, n.jsx)(f, { widget: l, hydration: a, guildSpaceMode: s, guildId: t }),
            }),
        ],
    });
}
