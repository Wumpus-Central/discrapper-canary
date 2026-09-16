l.d(t, { P: () => B });
var n = l(477900),
    i = l(582128),
    a = l(503698),
    s = l.n(a),
    r = l(17928),
    d = l(297264),
    c = l(866665),
    u = l(408278),
    o = l(22231),
    f = l(241326),
    h = l(331322),
    m = l(834730),
    x = l(821609),
    g = l(104510),
    E = l(645619),
    v = l(915667),
    A = l(451395),
    p = l(328006),
    j = l(857909),
    I = l(334840),
    _ = l(393750);
let S = [
    { avatar: p.A, topBarWidth: "68%", bottomBarWidths: ["26%", "55%"] },
    { avatar: j.A, topBarWidth: "48%", bottomBarWidths: ["26%", "100%"] },
    { avatar: I.A, topBarWidth: "96%", bottomBarWidths: ["26%", "24%"] },
];
function b(e) {
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
                children: (0, n.jsx)(m.E, {
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
                    (0, n.jsx)(b, { width: l.topBarWidth }),
                    (0, n.jsxs)("div", {
                        className: _.O3,
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
function C() {
    return (0, n.jsx)("div", { className: _.kL, children: S.map((e, t) => (0, n.jsx)(y, { rank: t + 1, row: e }, t)) });
}
var N = l(189213),
    T = l(192308),
    D = l(590632),
    w = l(61567),
    G = l(375708),
    k = l(397462);
function L(e) {
    let {
        title: t,
        titleIcon: l,
        accessory: i,
        disabled: a = !1,
        dragHandleRef: s,
        canEdit: r = !1,
        onEdit: h,
        onRemove: m,
    } = e;
    return (0, n.jsxs)("div", {
        className: k.wx,
        children: [
            null != s &&
                (0, n.jsx)("div", {
                    className: k.BU,
                    children: (0, n.jsx)(A.jV, {
                        buttonRef: s,
                        "aria-label": G.intl.formatToPlainString(w.default.NV85DR, { widgetName: t }),
                    }),
                }),
            (0, n.jsxs)("div", {
                className: k.i8,
                children: [
                    null != l && (0, n.jsx)("div", { className: k.gr, children: l }),
                    (0, n.jsx)(d.D, { variant: "heading-sm/medium", className: k.DD, children: t }),
                    i,
                ],
            }),
            (0, n.jsxs)("div", {
                className: k.o1,
                children: [
                    r &&
                        (0, n.jsx)(c.m, {
                            text: G.intl.string(G.t.bt75uw),
                            children: (0, n.jsx)(u.K, {
                                variant: "secondary",
                                size: "sm",
                                icon: o.PencilIcon,
                                "aria-label": G.intl.string(G.t.bt75uw),
                                disabled: a,
                                onClick: h,
                            }),
                        }),
                    null != m &&
                        (0, n.jsx)(c.m, {
                            text: G.intl.string(G.t.Mm07Yc),
                            children: (0, n.jsx)(u.K, {
                                variant: "critical-secondary",
                                size: "sm",
                                icon: f.TrashIcon,
                                "aria-label":
                                    null == t
                                        ? G.intl.string(G.t.Mm07Yc)
                                        : G.intl.formatToPlainString(w.default.hmNYxk, { widgetName: t }),
                                disabled: a,
                                onClick: m,
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
        className: k.wx,
        children: (0, n.jsxs)("div", {
            className: k.i8,
            children: [
                null != l && (0, n.jsx)("div", { className: k.gr, children: l }),
                (0, n.jsx)(d.D, { variant: "heading-sm/medium", className: k.DD, children: t }),
                i,
            ],
        }),
    });
}
function R(e) {
    let { title: t, boostPrice: l, powerupSkuId: i, LockedPreview: a, guildId: s } = e,
        d = (0, r.bG)([E.A], () => (null != i ? E.A.getStateForGuild(s)?.allPowerups[i] : void 0), [s, i]);
    return (0, n.jsxs)(h.B, {
        className: k.xt,
        align: "center",
        justify: "center",
        gap: 24,
        children: [
            (0, n.jsxs)(h.B, {
                align: "center",
                gap: 12,
                children: [
                    null != a ? (0, n.jsx)(a, { alt: "", ariaHidden: !0 }) : (0, n.jsx)(C, {}),
                    (0, n.jsxs)(h.B, {
                        align: "center",
                        gap: 4,
                        children: [
                            (0, n.jsx)(m.E, {
                                variant: "text-md/semibold",
                                color: "text-default",
                                children: G.intl.formatToPlainString(w.default.G5zCGV, { widgetName: t }),
                            }),
                            null != l &&
                                l > 0 &&
                                (0, n.jsx)(m.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: G.intl.format(w.default["8wD0Un"], { boostPrice: l }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, n.jsx)(x.$, {
                variant: "expressive",
                icon: g._,
                text: G.intl.string(G.t["+7XY31"]),
                disabled: null == d,
                loading: null != i && null == d,
                onClick: function () {
                    null != d && (0, v.A)(s, d);
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
        h = D.m[l.type],
        m = i.useCallback(() => {
            h?.Edit != null &&
                null != c &&
                null == f &&
                (function (e) {
                    let { widget: t, Edit: l, onCommit: i } = e,
                        a = (e) =>
                            (0, n.jsx)(N.Modal, {
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
                })({ widget: l, Edit: h.Edit, onCommit: c });
        }, [l, h, c, f]),
        x = h?.useTitle?.(l, r) ?? l.default_title ?? "";
    if (null == h) return null;
    let { View: g, Edit: E, HeaderAccessory: v, TitleIcon: A } = h,
        p = "edit" === a,
        j = null != E && null != c && null == f,
        I = null != v ? (0, n.jsx)(v, { hydration: r }) : null,
        _ = null != A ? (0, n.jsx)(A, { hydration: r }) : null;
    return (0, n.jsxs)("div", {
        className: s()(k.kL, { [k.Dy]: p }),
        children: [
            p
                ? (0, n.jsx)(L, {
                      title: x,
                      titleIcon: _,
                      accessory: I,
                      disabled: o,
                      dragHandleRef: u,
                      canEdit: j,
                      onEdit: m,
                      onRemove: d,
                  })
                : (0, n.jsx)(U, { title: x, titleIcon: _, accessory: I }),
            (0, n.jsx)("div", {
                className: k.rf,
                children:
                    null != f
                        ? (0, n.jsx)(R, {
                              title: x,
                              boostPrice: f.boostPrice,
                              powerupSkuId: f.powerupSkuId,
                              LockedPreview: h.LockedPreview,
                              guildId: t,
                          })
                        : (0, n.jsx)(g, { widget: l, hydration: r, guildSpaceMode: a, guildId: t }),
            }),
        ],
    });
}
