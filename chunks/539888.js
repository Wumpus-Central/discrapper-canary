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
    x = l(104510),
    g = l(661531),
    A = l(821609),
    p = l(645619),
    v = l(915667),
    j = l(451395),
    E = l(328006),
    _ = l(857909),
    S = l(334840),
    I = l(393750);
let N = [
    { avatar: E.A, topBarWidth: "68%", bottomBarWidths: ["26%", "55%"] },
    { avatar: _.A, topBarWidth: "48%", bottomBarWidths: ["26%", "100%"] },
    { avatar: S.A, topBarWidth: "96%", bottomBarWidths: ["26%", "24%"] },
];
function y(e) {
    let { width: t } = e;
    return (0, n.jsx)("div", { className: I.M0, style: { width: t } });
}
function b(e) {
    let { rank: t, row: l } = e;
    return (0, n.jsxs)("div", {
        className: I.nM,
        children: [
            (0, n.jsx)("div", {
                className: I.Tm,
                "aria-hidden": !0,
                children: (0, n.jsx)(h.E, {
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
                    (0, n.jsx)(y, { width: l.topBarWidth }),
                    (0, n.jsxs)("div", {
                        className: I.O3,
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
function T() {
    return (0, n.jsx)("div", { className: I.kL, children: N.map((e, t) => (0, n.jsx)(b, { rank: t + 1, row: e }, t)) });
}
var C = l(189213),
    D = l(192308),
    w = l(865830),
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
        onEdit: h,
        onRemove: x,
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
                                children: (0, n.jsx)(j.jV, {
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
                            children: (0, n.jsx)(u.K, {
                                variant: "icon-only",
                                size: "sm",
                                icon: c.PencilIcon,
                                "aria-label": G.intl.string(G.t.bt75uw),
                                disabled: a,
                                onClick: h,
                            }),
                        }),
                    null != x &&
                        (0, n.jsx)(o.m, {
                            text: G.intl.string(G.t.Mm07Yc),
                            children: (0, n.jsx)(u.K, {
                                variant: "icon-only",
                                size: "sm",
                                icon: m.TrashIcon,
                                "aria-label":
                                    null == t
                                        ? G.intl.string(G.t.Mm07Yc)
                                        : G.intl.formatToPlainString(R.default.hmNYxk, { widgetName: t }),
                                disabled: a,
                                onClick: x,
                            }),
                        }),
                ],
            }),
        ],
    });
}
function U(e) {
    let { title: t, titleIcon: l, accessory: i } = e;
    return (0, n.jsx)("div", {
        className: M.wx,
        children: (0, n.jsxs)("div", {
            className: M.i8,
            children: [
                null != l && (0, n.jsx)("div", { className: M.gr, children: l }),
                (0, n.jsx)(d.D, { variant: "heading-sm/medium", className: M.DD, children: t }),
                i,
            ],
        }),
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
                        children: null != a ? (0, n.jsx)(a, { alt: "", ariaHidden: !0 }) : (0, n.jsx)(T, {}),
                    }),
                    (0, n.jsxs)(f.B, {
                        align: "center",
                        gap: 8,
                        children: [
                            (0, n.jsx)(h.E, {
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
                                        (0, n.jsx)(x._, {
                                            size: "sm",
                                            color: g.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                        }),
                                        (0, n.jsx)(h.E, {
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
            (0, n.jsx)(A.$, {
                variant: "expressive",
                size: "sm",
                icon: x._,
                text: G.intl.string(G.t["+7XY31"]),
                disabled: null == d,
                loading: null != i && null == d,
                onClick: function () {
                    null != d && (0, v.A)(r, d);
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
            disabled: u = !1,
            lock: c,
        } = e,
        m = w.m[l.type],
        f = i.useCallback(() => {
            m?.Edit != null &&
                null != d &&
                null == c &&
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
                    (0, D.openModalLazy)(() => Promise.resolve(a), { modalKey: "guild-space-widget-edit" });
                })({ widget: l, Edit: m.Edit, onCommit: d });
        }, [l, m, d, c]),
        h = m?.useTitle?.(l, r) ?? l.default_title ?? "";
    if (null == m) return null;
    let { View: x, Edit: g, HeaderAccessory: A, TitleIcon: p } = m,
        v = "edit" === a,
        j = null != g && null != d && null == c,
        E = null != A ? (0, n.jsx)(A, { hydration: r }) : null,
        _ = null != p ? (0, n.jsx)(p, { hydration: r }) : null;
    return (0, n.jsxs)("div", {
        className: M.kL,
        children: [
            v
                ? (0, n.jsx)(L, {
                      title: h,
                      titleIcon: _,
                      accessory: E,
                      disabled: u,
                      dragHandleRef: o,
                      canEdit: j,
                      onEdit: f,
                      onRemove: s,
                  })
                : (0, n.jsx)(U, { title: h, titleIcon: _, accessory: E }),
            (0, n.jsx)("div", {
                className: M.rf,
                children:
                    null != c
                        ? (0, n.jsx)(P, {
                              title: h,
                              boostPrice: c.boostPrice,
                              powerupSkuId: c.powerupSkuId,
                              LockedPreview: m.LockedPreview,
                              guildId: t,
                          })
                        : (0, n.jsx)(x, { widget: l, hydration: r, guildSpaceMode: a, guildId: t }),
            }),
        ],
    });
}
