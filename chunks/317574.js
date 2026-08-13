i.d(e, { P: () => y });
var n = i(477900),
    l = i(582128),
    a = i(503698),
    r = i.n(a),
    s = i(297264),
    d = i(866665),
    c = i(408278),
    u = i(22231),
    o = i(241326),
    g = i(451395),
    m = i(189213),
    f = i(192308),
    h = i(487692),
    x = i(983283),
    v = i(375708),
    E = i(870985);
function j(t) {
    let { title: e, disabled: i = !1, dragHandleRef: l, canEdit: a = !1, onEdit: r, onRemove: m } = t;
    return (0, n.jsxs)("div", {
        className: E.wx,
        children: [
            null != l &&
                (0, n.jsx)("div", {
                    className: E.BU,
                    children: (0, n.jsx)(g.jV, {
                        buttonRef: l,
                        "aria-label": v.intl.formatToPlainString(x.default.NV85DR, { widgetName: e }),
                    }),
                }),
            (0, n.jsx)(s.D, { variant: "heading-sm/medium", className: E.DD, children: e }),
            (0, n.jsxs)("div", {
                className: E.o1,
                children: [
                    a &&
                        (0, n.jsx)(d.m, {
                            text: v.intl.string(v.t.bt75uw),
                            children: (0, n.jsx)(c.K, {
                                variant: "secondary",
                                size: "sm",
                                icon: u.R,
                                "aria-label": v.intl.string(v.t.bt75uw),
                                disabled: i,
                                onClick: r,
                            }),
                        }),
                    null != m &&
                        (0, n.jsx)(d.m, {
                            text: v.intl.string(v.t.Mm07Yc),
                            children: (0, n.jsx)(c.K, {
                                variant: "critical-secondary",
                                size: "sm",
                                icon: o.u,
                                "aria-label":
                                    null == e
                                        ? v.intl.string(v.t.Mm07Yc)
                                        : v.intl.formatToPlainString(x.default.hmNYxk, { widgetName: e }),
                                disabled: i,
                                onClick: m,
                            }),
                        }),
                ],
            }),
        ],
    });
}
function p(t) {
    let { title: e } = t;
    return (0, n.jsx)("div", {
        className: E.wx,
        children: (0, n.jsx)(s.D, { variant: "heading-sm/medium", className: E.DD, children: e }),
    });
}
function y(t) {
    let {
            widget: e,
            guildSpaceMode: i,
            hydration: a,
            onRemove: s,
            onCommitConfig: d,
            dragHandleRef: c,
            disabled: u = !1,
        } = t,
        o = h.m[e.type],
        g = l.useCallback(() => {
            o?.Edit != null &&
                null != d &&
                (function (t) {
                    let { widget: e, Edit: i, onCommit: l } = t,
                        a = (t) =>
                            (0, n.jsx)(m.Modal, {
                                title: e.default_title ?? void 0,
                                actions: [],
                                ...t,
                                children: (0, n.jsx)(i, {
                                    widget: e,
                                    commit: function (e) {
                                        l(e), t.onClose();
                                    },
                                    cancel: function () {
                                        t.onClose();
                                    },
                                }),
                            });
                    (0, f.openModalLazy)(() => Promise.resolve(a), { modalKey: "guild-space-widget-edit" });
                })({ widget: e, Edit: o.Edit, onCommit: d });
        }, [e, o, d]),
        x = o?.useTitle?.(e) ?? e.default_title ?? "";
    if (null == o) return null;
    let { View: v, Edit: y } = o,
        I = "edit" === i,
        _ = null != y && null != d;
    return (0, n.jsxs)("div", {
        className: r()(E.kL, { [E.Dy]: I }),
        children: [
            I
                ? (0, n.jsx)(j, { title: x, disabled: u, dragHandleRef: c, canEdit: _, onEdit: g, onRemove: s })
                : (0, n.jsx)(p, { title: x }),
            (0, n.jsx)("div", {
                className: E.rf,
                children: (0, n.jsx)(v, { widget: e, hydration: a, guildSpaceMode: i }),
            }),
        ],
    });
}
