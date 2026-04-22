l.d(i, { default: () => r });
var n = l(627968);
l(64700);
var t = l(189213),
    s = l(270003),
    a = l(452027),
    o = l(834730);
function r(e) {
    let { clip: i, onClose: l, transitionState: r } = e;
    return (0, n.jsx)(t.Modal, {
        transitionState: r,
        onClose: l,
        title: "Clip Debug",
        size: "md",
        actions: [{ text: "Close", variant: "secondary", onClick: l }],
        children: (0, n.jsxs)(s.n, {
            label: "Decision",
            children: [
                null != i.decision &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            null != i.decision.reason
                                ? (0, n.jsx)(a.D, {
                                      label: "Reason",
                                      children: (0, n.jsx)(o.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          children: i.decision.reason,
                                      }),
                                  })
                                : null,
                            (0, n.jsx)(a.D, {
                                label: "Timestamp",
                                layout: "horizontal",
                                children: (0, n.jsx)(o.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: new Date(i.decision.timestamp).toLocaleString(),
                                }),
                            }),
                        ],
                    }),
                i.timeline.length > 0 &&
                    (0, n.jsx)(s.n, {
                        label: "Timeline",
                        children: (0, n.jsx)("pre", {
                            children: (0, n.jsx)(o.E, {
                                variant: "code",
                                color: "text-subtle",
                                children: JSON.stringify(i.timeline, null, 2),
                            }),
                        }),
                    }),
                null == i.decision &&
                    0 === i.timeline.length &&
                    (0, n.jsx)(o.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: "No debug information available for this clip.",
                    }),
            ],
        }),
    });
}
