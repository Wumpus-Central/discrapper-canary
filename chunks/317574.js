i.d(t, { P: () => A });
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
    m = i(521810),
    x = i(494210),
    E = i(375708),
    v = i(397462);
function I(e) {
    let { title: t, disabled: i = !1, dragHandleRef: l, canEdit: a = !1, onEdit: r, onRemove: g } = e;
    return (0, n.jsxs)("div", {
        className: v.wx,
        children: [
            null != l &&
                (0, n.jsx)("div", {
                    className: v.BU,
                    children: (0, n.jsx)(f.jV, {
                        buttonRef: l,
                        "aria-label": E.intl.formatToPlainString(x.default.NV85DR, { widgetName: t }),
                    }),
                }),
            (0, n.jsx)(s.D, { variant: "heading-sm/medium", className: v.DD, children: t }),
            (0, n.jsxs)("div", {
                className: v.o1,
                children: [
                    a &&
                        (0, n.jsx)(c.m, {
                            text: E.intl.string(E.t.bt75uw),
                            children: (0, n.jsx)(d.K, {
                                variant: "secondary",
                                size: "sm",
                                icon: u.PencilIcon,
                                "aria-label": E.intl.string(E.t.bt75uw),
                                disabled: i,
                                onClick: r,
                            }),
                        }),
                    null != g &&
                        (0, n.jsx)(c.m, {
                            text: E.intl.string(E.t.Mm07Yc),
                            children: (0, n.jsx)(d.K, {
                                variant: "critical-secondary",
                                size: "sm",
                                icon: o.TrashIcon,
                                "aria-label":
                                    null == t
                                        ? E.intl.string(E.t.Mm07Yc)
                                        : E.intl.formatToPlainString(x.default.hmNYxk, { widgetName: t }),
                                disabled: i,
                                onClick: g,
                            }),
                        }),
                ],
            }),
        ],
    });
}
function p(e) {
    let { title: t } = e;
    return (0, n.jsx)("div", {
        className: v.wx,
        children: (0, n.jsx)(s.D, { variant: "heading-sm/medium", className: v.DD, children: t }),
    });
}
function A(e) {
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
        x = o?.useTitle?.(t) ?? t.default_title ?? "";
    if (null == o) return null;
    let { View: E, Edit: A } = o,
        _ = "edit" === i,
        C = null != A && null != c;
    return (0, n.jsxs)("div", {
        className: r()(v.kL, { [v.Dy]: _ }),
        children: [
            _
                ? (0, n.jsx)(I, { title: x, disabled: u, dragHandleRef: d, canEdit: C, onEdit: f, onRemove: s })
                : (0, n.jsx)(p, { title: x }),
            (0, n.jsx)("div", {
                className: v.rf,
                children: (0, n.jsx)(E, { widget: t, hydration: a, guildSpaceMode: i }),
            }),
        ],
    });
}
