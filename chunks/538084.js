n.d(t, {
    default: () => d,
    k: () => u,
}),
    n(388685);
var i = n(54381),
    r = n(473749),
    l = n(793030),
    a = n(481060),
    o = n(45251),
    s = n(353077),
    c = n(388032);
let u = "SCHEDULED_MESSAGE_CREATE_MODAL_KEY";
function d(e) {
    let { channel: t, transitionState: n, onClose: d, defaultValue: p } = e,
        [h, f] = r.useState(p);
    return (0, i.jsx)(l.Modal, {
        transitionState: n,
        size: "md",
        title: c.intl.string(c.t["3+ii4F"]),
        onClose: d,
        actions: [
            {
                variant: "secondary",
                text: c.intl.string(c.t["ETE/oC"]),
                onClick: d,
            },
            {
                variant: "primary",
                text: c.intl.string(c.t.iQ1SwX),
                onClick: () => {
                    (0, o._e)({
                        channelId: t.id,
                        scheduledTimestamp: h.toISOString(),
                    }),
                        (0, a.Mr3)(u);
                },
            },
        ],
        children: (0, i.jsx)(s.Z, {
            defaultValue: p,
            onChange: f,
        }),
    });
}
