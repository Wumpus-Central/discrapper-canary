l.d(t, { P: () => k });
var n = l(477900),
    i = l(582128),
    a = l(503698),
    r = l.n(a),
    s = l(17928),
    d = l(297264),
    o = l(866665),
    c = l(408278),
    u = l(22231),
    m = l(241326),
    f = l(331322),
    x = l(834730),
    h = l(104510),
    g = l(661531),
    j = l(821609),
    p = l(645619),
    A = l(915667),
    v = l(451395),
    E = l(328006),
    _ = l(857909),
    I = l(334840),
    N = l(393750);
let S = [
    { avatar: E.A, topBarWidth: "68%", bottomBarWidths: ["26%", "55%"] },
    { avatar: _.A, topBarWidth: "48%", bottomBarWidths: ["26%", "100%"] },
    { avatar: I.A, topBarWidth: "96%", bottomBarWidths: ["26%", "24%"] },
];
function y(e) {
    let { width: t } = e;
    return (0, n.jsx)("div", { className: N.M0, style: { width: t } });
}
function b(e) {
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
                    (0, n.jsx)(y, { width: l.topBarWidth }),
                    (0, n.jsxs)("div", {
                        className: N.O3,
                        children: [
                            (0, n.jsx)(y, { width: l.bottomBarWidths[0] }),
                            (0, n.jsx)(y, { width: l.bottomBarWidths[1] }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function C() {
    return (0, n.jsx)("div", { className: N.kL, children: S.map((e, t) => (0, n.jsx)(b, { rank: t + 1, row: e }, t)) });
}
var T = l(189213),
    D = l(192308),
    w = l(380210),
    R = l(61567),
    G = l(375708),
    M = l(397462);
function L(e) {
    let {
        title: t,
        titleIcon: l,
        accessory: i,
        disabled: a = !1,
        dragHandleRef: s,
        canEdit: f = !1,
        onEdit: x,
        onRemove: h,
    } = e;
    return (0, n.jsxs)("div", {
        className: r()(M.wx, { [M.kZ]: null != s }),
        children: [
            (0, n.jsx)("div", {
                ref: s,
                className: M.T_,
                "data-dnd-name": t,
                children: (0, n.jsxs)("div", {
                    className: M.i8,
                    children: [
                        null != s &&
                            (0, n.jsx)("div", {
                                className: M.BU,
                                children: (0, n.jsx)(v.jV, {
                                    iconSize: "xs",
                                    "aria-label": G.intl.formatToPlainString(R.default.NV85DR, { widgetName: t }),
                                }),
                            }),
                        null != l && (0, n.jsx)("div", { className: M.gr, children: l }),
                        (0, n.jsx)(d.D, { variant: "heading-sm/medium", className: M.DD, children: t }),
                        i,
                    ],
                }),
            }),
            (0, n.jsxs)("div", {
                className: M.o1,
                children: [
                    f &&
                        (0, n.jsx)(o.m, {
                            text: G.intl.string(G.t.bt75uw),
                            children: (0, n.jsx)(c.K, {
                                variant: "icon-only",
                                size: "sm",
                                icon: u.PencilIcon,
                                "aria-label": G.intl.string(G.t.bt75uw),
                                disabled: a,
                                onClick: x,
                            }),
                        }),
                    null != h &&
                        (0, n.jsx)(o.m, {
                            text: G.intl.string(G.t.Mm07Yc),
                            children: (0, n.jsx)(c.K, {
                                variant: "icon-only",
                                size: "sm",
                                icon: m.TrashIcon,
                                "aria-label":
                                    null == t
                                        ? G.intl.string(G.t.Mm07Yc)
                                        : G.intl.formatToPlainString(R.default.hmNYxk, { widgetName: t }),
                                disabled: a,
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
        className: M.wx,
        children: [
            (0, n.jsxs)("div", {
                className: M.i8,
                children: [
                    null != l && (0, n.jsx)("div", { className: M.gr, children: l }),
                    (0, n.jsx)(d.D, { variant: "heading-sm/medium", className: M.DD, children: t }),
                    i,
                ],
            }),
            null != a && (0, n.jsx)("div", { className: M.o1, children: a }),
        ],
    });
}
function P(e) {
    let { title: t, boostPrice: l, powerupSkuId: i, LockedPreview: a, guildId: r } = e,
        d = (0, s.bG)([p.A], () => (null != i ? p.A.getStateForGuild(r)?.allPowerups[i] : void 0), [r, i]);
    return (0, n.jsxs)(f.B, {
        className: M.xt,
        align: "center",
        justify: "center",
        gap: 32,
        children: [
            (0, n.jsxs)(f.B, {
                align: "center",
                gap: 16,
                children: [
                    (0, n.jsx)("div", {
                        className: M.$x,
                        children: null != a ? (0, n.jsx)(a, { alt: "", ariaHidden: !0 }) : (0, n.jsx)(C, {}),
                    }),
                    (0, n.jsxs)(f.B, {
                        align: "center",
                        gap: 8,
                        children: [
                            (0, n.jsx)(x.E, {
                                variant: "text-md/semibold",
                                color: "text-default",
                                children: G.intl.formatToPlainString(R.default.G5zCGV, { widgetName: t }),
                            }),
                            null != l &&
                                l > 0 &&
                                (0, n.jsxs)(f.B, {
                                    direction: "horizontal",
                                    align: "center",
                                    justify: "center",
                                    gap: 4,
                                    children: [
                                        (0, n.jsx)(h._, {
                                            size: "sm",
                                            color: g.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                        }),
                                        (0, n.jsx)(x.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: G.intl.format(R.default["8wD0Un"], { boostPrice: l }),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
            (0, n.jsx)(j.$, {
                variant: "expressive",
                size: "sm",
                icon: h._,
                text: G.intl.string(G.t["+7XY31"]),
                disabled: null == d,
                loading: null != i && null == d,
                onClick: function () {
                    null != d && (0, A.A)(r, d);
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
        }, [l, m, d, u]),
        x = m?.useTitle?.(l, r) ?? l.default_title ?? "";
    if (null == m) return null;
    let { View: h, Edit: g, HeaderAccessory: j, HeaderActions: p, TitleIcon: A } = m,
        v = "edit" === a,
        E = null != g && null != d && null == u,
        _ = null != j ? (0, n.jsx)(j, { hydration: r }) : null,
        I = null != A ? (0, n.jsx)(A, { hydration: r }) : null,
        N = null == u && null != p ? (0, n.jsx)(p, { hydration: r, guildId: t }) : null;
    return (0, n.jsxs)("div", {
        className: M.kL,
        children: [
            v
                ? (0, n.jsx)(L, {
                      title: x,
                      titleIcon: I,
                      accessory: _,
                      disabled: c,
                      dragHandleRef: o,
                      canEdit: E,
                      onEdit: f,
                      onRemove: s,
                  })
                : (0, n.jsx)(U, { title: x, titleIcon: I, accessory: _, actions: N }),
            (0, n.jsx)("div", {
                className: M.rf,
                children:
                    null != u
                        ? (0, n.jsx)(P, {
                              title: x,
                              boostPrice: u.boostPrice,
                              powerupSkuId: u.powerupSkuId,
                              LockedPreview: m.LockedPreview,
                              guildId: t,
                          })
                        : (0, n.jsx)(h, { widget: l, hydration: r, guildSpaceMode: a, guildId: t }),
            }),
        ],
    });
}
