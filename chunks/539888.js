l.d(t, { P: () => B });
var i = l(477900),
    n = l(582128),
    a = l(503698),
    s = l.n(a),
    r = l(17928),
    c = l(297264),
    d = l(866665),
    u = l(408278),
    o = l(22231),
    f = l(241326),
    h = l(331322),
    g = l(834730),
    m = l(821609),
    x = l(104510),
    E = l(645619),
    A = l(915667),
    p = l(451395),
    v = l(328006),
    I = l(857909),
    j = l(334840),
    S = l(393750);
let _ = [
    { avatar: v.A, topBarWidth: "68%", bottomBarWidths: ["26%", "55%"] },
    { avatar: I.A, topBarWidth: "48%", bottomBarWidths: ["26%", "100%"] },
    { avatar: j.A, topBarWidth: "96%", bottomBarWidths: ["26%", "24%"] },
];
function C(e) {
    let { width: t } = e;
    return (0, i.jsx)("div", { className: S.M0, style: { width: t } });
}
function y(e) {
    let { rank: t, row: l } = e;
    return (0, i.jsxs)("div", {
        className: S.nM,
        children: [
            (0, i.jsx)("div", {
                className: S.Tm,
                "aria-hidden": !0,
                children: (0, i.jsx)(g.E, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    className: S._k,
                    children: t,
                }),
            }),
            (0, i.jsx)("img", { className: S.my, src: l.avatar, alt: "", "aria-hidden": !0 }),
            (0, i.jsxs)("div", {
                className: S.n_,
                "aria-hidden": !0,
                children: [
                    (0, i.jsx)(C, { width: l.topBarWidth }),
                    (0, i.jsxs)("div", {
                        className: S.O3,
                        children: [
                            (0, i.jsx)(C, { width: l.bottomBarWidths[0] }),
                            (0, i.jsx)(C, { width: l.bottomBarWidths[1] }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function b() {
    return (0, i.jsx)("div", { className: S.kL, children: _.map((e, t) => (0, i.jsx)(y, { rank: t + 1, row: e }, t)) });
}
var N = l(189213),
    T = l(192308),
    D = l(179105),
    w = l(61567),
    G = l(375708),
    k = l(397462);
function L(e) {
    let {
        title: t,
        titleIcon: l,
        accessory: n,
        disabled: a = !1,
        dragHandleRef: s,
        canEdit: r = !1,
        onEdit: h,
        onRemove: g,
    } = e;
    return (0, i.jsxs)("div", {
        className: k.wx,
        children: [
            null != s &&
                (0, i.jsx)("div", {
                    className: k.BU,
                    children: (0, i.jsx)(p.jV, {
                        buttonRef: s,
                        "aria-label": G.intl.formatToPlainString(w.default.NV85DR, { widgetName: t }),
                    }),
                }),
            (0, i.jsxs)("div", {
                className: k.i8,
                children: [
                    null != l && (0, i.jsx)("div", { className: k.gr, children: l }),
                    (0, i.jsx)(c.D, { variant: "heading-sm/medium", className: k.DD, children: t }),
                    n,
                ],
            }),
            (0, i.jsxs)("div", {
                className: k.o1,
                children: [
                    r &&
                        (0, i.jsx)(d.m, {
                            text: G.intl.string(G.t.bt75uw),
                            children: (0, i.jsx)(u.K, {
                                variant: "secondary",
                                size: "sm",
                                icon: o.PencilIcon,
                                "aria-label": G.intl.string(G.t.bt75uw),
                                disabled: a,
                                onClick: h,
                            }),
                        }),
                    null != g &&
                        (0, i.jsx)(d.m, {
                            text: G.intl.string(G.t.Mm07Yc),
                            children: (0, i.jsx)(u.K, {
                                variant: "critical-secondary",
                                size: "sm",
                                icon: f.TrashIcon,
                                "aria-label":
                                    null == t
                                        ? G.intl.string(G.t.Mm07Yc)
                                        : G.intl.formatToPlainString(w.default.hmNYxk, { widgetName: t }),
                                disabled: a,
                                onClick: g,
                            }),
                        }),
                ],
            }),
        ],
    });
}
function R(e) {
    let { title: t, titleIcon: l, accessory: n } = e;
    return (0, i.jsx)("div", {
        className: k.wx,
        children: (0, i.jsxs)("div", {
            className: k.i8,
            children: [
                null != l && (0, i.jsx)("div", { className: k.gr, children: l }),
                (0, i.jsx)(c.D, { variant: "heading-sm/medium", className: k.DD, children: t }),
                n,
            ],
        }),
    });
}
function U(e) {
    let { title: t, boostPrice: l, powerupSkuId: n, LockedPreview: a, guildId: s } = e,
        c = (0, r.bG)([E.A], () => (null != n ? E.A.getStateForGuild(s)?.allPowerups[n] : void 0), [s, n]);
    return (0, i.jsxs)(h.B, {
        className: k.xt,
        align: "center",
        justify: "center",
        gap: 24,
        children: [
            (0, i.jsxs)(h.B, {
                align: "center",
                gap: 12,
                children: [
                    null != a ? (0, i.jsx)(a, { alt: "", ariaHidden: !0 }) : (0, i.jsx)(b, {}),
                    (0, i.jsxs)(h.B, {
                        align: "center",
                        gap: 4,
                        children: [
                            (0, i.jsx)(g.E, {
                                variant: "text-md/semibold",
                                color: "text-default",
                                children: G.intl.formatToPlainString(w.default.G5zCGV, { widgetName: t }),
                            }),
                            null != l &&
                                l > 0 &&
                                (0, i.jsx)(g.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: G.intl.format(w.default["8wD0Un"], { boostPrice: l }),
                                }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(m.$, {
                variant: "expressive",
                icon: x._,
                text: G.intl.string(G.t["+7XY31"]),
                disabled: null == c,
                loading: null != n && null == c,
                onClick: function () {
                    null != c && (0, A.A)(s, c);
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
            onRemove: c,
            onCommitConfig: d,
            dragHandleRef: u,
            disabled: o = !1,
            lock: f,
        } = e,
        h = D.m[l.type],
        g = n.useCallback(() => {
            h?.Edit != null &&
                null != d &&
                null == f &&
                (function (e) {
                    let { widget: t, Edit: l, onCommit: n } = e,
                        a = (e) =>
                            (0, i.jsx)(N.Modal, {
                                title: t.default_title ?? void 0,
                                actions: [],
                                ...e,
                                children: (0, i.jsx)(l, {
                                    widget: t,
                                    commit: function (t) {
                                        (n(t), e.onClose());
                                    },
                                    cancel: function () {
                                        e.onClose();
                                    },
                                }),
                            });
                    (0, T.openModalLazy)(() => Promise.resolve(a), { modalKey: "guild-space-widget-edit" });
                })({ widget: l, Edit: h.Edit, onCommit: d });
        }, [l, h, d, f]),
        m = h?.useTitle?.(l, r) ?? l.default_title ?? "";
    if (null == h) return null;
    let { View: x, Edit: E, HeaderAccessory: A, TitleIcon: p } = h,
        v = "edit" === a,
        I = null != E && null != d && null == f,
        j = null != A ? (0, i.jsx)(A, { hydration: r }) : null,
        S = null != p ? (0, i.jsx)(p, { hydration: r }) : null;
    return (0, i.jsxs)("div", {
        className: s()(k.kL, { [k.Dy]: v }),
        children: [
            v
                ? (0, i.jsx)(L, {
                      title: m,
                      titleIcon: S,
                      accessory: j,
                      disabled: o,
                      dragHandleRef: u,
                      canEdit: I,
                      onEdit: g,
                      onRemove: c,
                  })
                : (0, i.jsx)(R, { title: m, titleIcon: S, accessory: j }),
            (0, i.jsx)("div", {
                className: k.rf,
                children:
                    null != f
                        ? (0, i.jsx)(U, {
                              title: m,
                              boostPrice: f.boostPrice,
                              powerupSkuId: f.powerupSkuId,
                              LockedPreview: h.LockedPreview,
                              guildId: t,
                          })
                        : (0, i.jsx)(x, { widget: l, hydration: r, guildSpaceMode: a, guildId: t }),
            }),
        ],
    });
}
