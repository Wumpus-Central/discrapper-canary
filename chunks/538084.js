n.d(t, {
    default: () => h,
    k: () => p,
}),
    n(388685);
var i = n(951288),
    r = n(647438),
    l = n(913527),
    a = n.n(l),
    o = n(793030),
    s = n(481060),
    c = n(45251),
    u = n(388032),
    d = n(206536);
let p = "SCHEDULED_MESSAGE_CREATE_MODAL_KEY";
function h(e) {
    let { channel: t, transitionState: n, onClose: l, prefilledTime: h } = e,
        f = a()(),
        m = a()().add(365, "days"),
        [g, b] = r.useState(null != h ? a()(h.substring(0, 200)) : f);
    return (0, i.jsx)(o.Modal, {
        transitionState: n,
        size: "md",
        title: u.intl.string(u.t["3+ii4F"]),
        onClose: l,
        actions: [
            {
                variant: "secondary",
                text: u.intl.string(u.t["ETE/oC"]),
                onClick: l,
            },
            {
                variant: "primary",
                text: u.intl.string(u.t.iQ1SwX),
                onClick: () => {
                    (0, c._e)({
                        channelId: t.id,
                        scheduledTimestamp: g.toISOString(),
                    }),
                        (0, s.Mr3)(p);
                },
            },
        ],
        children: (0, i.jsxs)("div", {
            className: d.doubleInput,
            children: [
                (0, i.jsx)("div", {
                    className: d.column,
                    children: (0, i.jsx)(s.Wrb, {
                        required: !0,
                        label: u.intl.string(u.t.pSZKvM),
                        value: g,
                        onSelect: (e) => {
                            b(e);
                        },
                        minDate: f,
                        maxDate: m,
                        disabled: !1,
                    }),
                }),
                (0, i.jsx)("div", {
                    className: d.column,
                    children: (0, i.jsx)(s.MGJ, {
                        label: u.intl.string(u.t.GOmEb8),
                        required: !0,
                        value: g,
                        onChange: (e) => {
                            e.isValid() && b(e);
                        },
                        hideValue: !1,
                        disabled: !1,
                    }),
                }),
            ],
        }),
    });
}
