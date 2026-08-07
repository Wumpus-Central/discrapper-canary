i.d(t, { P: () => m });
var n = i(477900);
i(582128);
var l = i(503698),
    a = i.n(l),
    r = i(297264),
    s = i(866665),
    d = i(408278),
    u = i(22231),
    c = i(241326),
    o = i(451395),
    f = i(189213),
    g = i(192308),
    E = i(925723),
    h = i(983283),
    _ = i(375708),
    I = i(870985);
function m(e) {
    let {
            widget: t,
            guildSpaceMode: i,
            title: l,
            hydration: m,
            onRemove: S,
            onCommitConfig: A,
            dragHandleRef: p,
            disabled: D = !1,
        } = e,
        v = E.m[t.type];
    if (null == v) return null;
    let { View: x, Edit: C } = v,
        T = "edit" === i;
    return (0, n.jsxs)("div", {
        className: a()(I.kL, { [I.Dy]: T }),
        children: [
            T &&
                (0, n.jsxs)("div", {
                    className: I.wx,
                    children: [
                        null != p &&
                            (0, n.jsx)("div", {
                                className: I.BU,
                                children: (0, n.jsx)(o.jV, {
                                    buttonRef: p,
                                    "aria-label":
                                        null == l
                                            ? void 0
                                            : _.intl.formatToPlainString(h.default.NV85DR, { widgetName: l }),
                                }),
                            }),
                        (0, n.jsx)(r.D, {
                            variant: "heading-sm/semibold",
                            color: "text-strong",
                            className: I.DD,
                            children: l,
                        }),
                        (0, n.jsxs)("div", {
                            className: I.o1,
                            children: [
                                null != C &&
                                    null != A &&
                                    null != l &&
                                    (0, n.jsx)(s.m, {
                                        text: _.intl.string(_.t.bt75uw),
                                        children: (0, n.jsx)(d.K, {
                                            variant: "secondary",
                                            size: "sm",
                                            icon: u.R,
                                            "aria-label": _.intl.string(_.t.bt75uw),
                                            disabled: D,
                                            onClick: () =>
                                                (function (e) {
                                                    let { title: t, widget: i, Edit: l, onCommit: a } = e,
                                                        r = (e) =>
                                                            (0, n.jsx)(f.Modal, {
                                                                title: t,
                                                                actions: [],
                                                                ...e,
                                                                children: (0, n.jsx)(l, {
                                                                    widget: i,
                                                                    commit: function (t) {
                                                                        a(t), e.onClose();
                                                                    },
                                                                    cancel: function () {
                                                                        e.onClose();
                                                                    },
                                                                }),
                                                            });
                                                    (0, g.openModalLazy)(() => Promise.resolve(r), {
                                                        modalKey: "guild-space-widget-edit",
                                                    });
                                                })({ title: l, widget: t, Edit: C, onCommit: A }),
                                        }),
                                    }),
                                null != S &&
                                    (0, n.jsx)(s.m, {
                                        text: _.intl.string(_.t.Mm07Yc),
                                        children: (0, n.jsx)(d.K, {
                                            variant: "critical-secondary",
                                            size: "sm",
                                            icon: c.u,
                                            "aria-label":
                                                null == l
                                                    ? _.intl.string(_.t.Mm07Yc)
                                                    : _.intl.formatToPlainString(h.default.hmNYxk, { widgetName: l }),
                                            disabled: D,
                                            onClick: S,
                                        }),
                                    }),
                            ],
                        }),
                    ],
                }),
            (0, n.jsx)("div", {
                className: I.rf,
                children: (0, n.jsx)(x, { widget: t, hydration: m, guildSpaceMode: i }),
            }),
        ],
    });
}
