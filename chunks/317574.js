i.d(t, { P: () => I });
var n = i(477900),
    l = i(582128),
    a = i(503698),
    r = i.n(a),
    s = i(297264),
    c = i(866665),
    d = i(408278),
    u = i(22231),
    o = i(241326),
    f = i(451395),
    g = i(189213),
    h = i(192308),
    m = i(403632),
    E = i(125075),
    x = i(375708),
    p = i(397462);
function A(e) {
    let { title: t, disabled: i = !1, dragHandleRef: l, canEdit: a = !1, onEdit: r, onRemove: g } = e;
    return (0, n.jsxs)("div", {
        className: p.wx,
        children: [
            null != l &&
                (0, n.jsx)("div", {
                    className: p.BU,
                    children: (0, n.jsx)(f.jV, {
                        buttonRef: l,
                        "aria-label": x.intl.formatToPlainString(E.default.NV85DR, { widgetName: t }),
                    }),
                }),
            (0, n.jsx)(s.D, { variant: "heading-sm/medium", className: p.DD, children: t }),
            (0, n.jsxs)("div", {
                className: p.o1,
                children: [
                    a &&
                        (0, n.jsx)(c.m, {
                            text: x.intl.string(x.t.bt75uw),
                            children: (0, n.jsx)(d.K, {
                                variant: "secondary",
                                size: "sm",
                                icon: u.PencilIcon,
                                "aria-label": x.intl.string(x.t.bt75uw),
                                disabled: i,
                                onClick: r,
                            }),
                        }),
                    null != g &&
                        (0, n.jsx)(c.m, {
                            text: x.intl.string(x.t.Mm07Yc),
                            children: (0, n.jsx)(d.K, {
                                variant: "critical-secondary",
                                size: "sm",
                                icon: o.TrashIcon,
                                "aria-label":
                                    null == t
                                        ? x.intl.string(x.t.Mm07Yc)
                                        : x.intl.formatToPlainString(E.default.hmNYxk, { widgetName: t }),
                                disabled: i,
                                onClick: g,
                            }),
                        }),
                ],
            }),
        ],
    });
}
function v(e) {
    let { title: t } = e;
    return (0, n.jsx)("div", {
        className: p.wx,
        children: (0, n.jsx)(s.D, { variant: "heading-sm/medium", className: p.DD, children: t }),
    });
}
function I(e) {
    let {
            widget: t,
            guildSpaceMode: i,
            hydration: a,
            onRemove: s,
            onCommitConfig: c,
            dragHandleRef: d,
            disabled: u = !1,
        } = e,
        o = m.m[t.type],
        f = l.useCallback(() => {
            o?.Edit != null &&
                null != c &&
                (function (e) {
                    let { widget: t, Edit: i, onCommit: l } = e,
                        a = (e) =>
                            (0, n.jsx)(g.Modal, {
                                title: t.default_title ?? void 0,
                                actions: [],
                                ...e,
                                children: (0, n.jsx)(i, {
                                    widget: t,
                                    commit: function (t) {
                                        l(t), e.onClose();
                                    },
                                    cancel: function () {
                                        e.onClose();
                                    },
                                }),
                            });
                    (0, h.openModalLazy)(() => Promise.resolve(a), { modalKey: "guild-space-widget-edit" });
                })({ widget: t, Edit: o.Edit, onCommit: c });
        }, [t, o, c]),
        E = o?.useTitle?.(t) ?? t.default_title ?? "";
    if (null == o) return null;
    let { View: x, Edit: I } = o,
        S = "edit" === i,
        C = null != I && null != c;
    return (0, n.jsxs)("div", {
        className: r()(p.kL, { [p.Dy]: S }),
        children: [
            S
                ? (0, n.jsx)(A, { title: E, disabled: u, dragHandleRef: d, canEdit: C, onEdit: f, onRemove: s })
                : (0, n.jsx)(v, { title: E }),
            (0, n.jsx)("div", {
                className: p.rf,
                children: (0, n.jsx)(x, { widget: t, hydration: a, guildSpaceMode: i }),
            }),
        ],
    });
}
