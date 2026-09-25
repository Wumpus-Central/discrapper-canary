n.d(i, { default: () => o });
var l = n(477900);
n(582128);
var t = n(189213),
    s = n(270003),
    a = n(452027),
    r = n(834730);
function o(e) {
    let { clip: i, onClose: n, transitionState: o } = e;
    return (0, l.jsx)(t.a, {
        transitionState: o,
        onClose: n,
        title: "Clip Debug",
        size: "md",
        actions: [{ text: "Close", variant: "secondary", onClick: n }],
        children: (0, l.jsxs)(s.n, {
            label: "Decision",
            children: [
                null != i.decision &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            null != i.decision.reason
                                ? (0, l.jsx)(a.D, {
                                      label: "Reason",
                                      children: (0, l.jsx)(r.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          children: i.decision.reason,
                                      }),
                                  })
                                : null,
                            (0, l.jsx)(a.D, {
                                label: "Timestamp",
                                layout: "horizontal",
                                children: (0, l.jsx)(r.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: new Date(i.decision.timestamp).toLocaleString(),
                                }),
                            }),
                        ],
                    }),
                i.timeline.length > 0 &&
                    (0, l.jsx)(s.n, {
                        label: "Timeline",
                        children: (0, l.jsx)("pre", {
                            children: (0, l.jsx)(r.E, {
                                variant: "code",
                                color: "text-subtle",
                                children: JSON.stringify(i.timeline, null, 2),
                            }),
                        }),
                    }),
                null == i.decision &&
                    0 === i.timeline.length &&
                    (0, l.jsx)(r.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: "No debug information available for this clip.",
                    }),
            ],
        }),
    });
}
