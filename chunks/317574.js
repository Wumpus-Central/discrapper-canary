i.d(t, { P: () => S });
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
    E = i(192308),
    _ = i(992622),
    g = i(983283),
    I = i(375708),
    h = i(870985);
function S(e) {
    let {
            widget: t,
            guildSpaceMode: i,
            title: l,
            hydration: S,
            onRemove: m,
            onCommitConfig: A,
            dragHandleRef: D,
            disabled: p = !1,
        } = e,
        v = _.m[t.type];
    if (null == v) return null;
    let { View: T, Edit: C } = v,
        y = "edit" === i;
    return (0, n.jsxs)("div", {
        className: a()(h.kL, { [h.Dy]: y }),
        children: [
            y &&
                (0, n.jsxs)("div", {
                    className: h.wx,
                    children: [
                        null != D &&
                            (0, n.jsx)("div", {
                                className: h.BU,
                                children: (0, n.jsx)(o.jV, {
                                    buttonRef: D,
                                    "aria-label":
                                        null == l
                                            ? void 0
                                            : I.intl.formatToPlainString(g.default.NV85DR, { widgetName: l }),
                                }),
                            }),
                        (0, n.jsx)(r.D, {
                            variant: "heading-sm/semibold",
                            color: "text-strong",
                            className: h.DD,
                            children: l,
                        }),
                        (0, n.jsxs)("div", {
                            className: h.o1,
                            children: [
                                null != C &&
                                    null != A &&
                                    null != l &&
                                    (0, n.jsx)(s.m, {
                                        text: I.intl.string(I.t.bt75uw),
                                        children: (0, n.jsx)(d.K, {
                                            variant: "secondary",
                                            size: "sm",
                                            icon: u.R,
                                            "aria-label": I.intl.string(I.t.bt75uw),
                                            disabled: p,
                                            onClick: () =>
                                                (function (e) {
                                                    let { title: t, config: i, Edit: l, onCommit: a } = e,
                                                        r = (e) =>
                                                            (0, n.jsx)(f.Modal, {
                                                                title: t,
                                                                actions: [],
                                                                ...e,
                                                                children: (0, n.jsx)(l, {
                                                                    config: i,
                                                                    commit: function (t) {
                                                                        a(t), e.onClose();
                                                                    },
                                                                    cancel: function () {
                                                                        e.onClose();
                                                                    },
                                                                }),
                                                            });
                                                    (0, E.openModalLazy)(() => Promise.resolve(r), {
                                                        modalKey: "guild-space-widget-edit",
                                                    });
                                                })({ title: l, config: t.config, Edit: C, onCommit: A }),
                                        }),
                                    }),
                                null != m &&
                                    (0, n.jsx)(s.m, {
                                        text: I.intl.string(I.t.Mm07Yc),
                                        children: (0, n.jsx)(d.K, {
                                            variant: "critical-secondary",
                                            size: "sm",
                                            icon: c.u,
                                            "aria-label":
                                                null == l
                                                    ? I.intl.string(I.t.Mm07Yc)
                                                    : I.intl.formatToPlainString(g.default.hmNYxk, { widgetName: l }),
                                            disabled: p,
                                            onClick: m,
                                        }),
                                    }),
                            ],
                        }),
                    ],
                }),
            (0, n.jsx)("div", {
                className: h.rf,
                children: (0, n.jsx)(T, { widget: t, hydration: S, guildSpaceMode: i }),
            }),
        ],
    });
}
