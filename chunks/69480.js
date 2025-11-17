i.d(n, { default: () => o }), i(49124);
var t = i(54381);
i(473749);
var l = i(793030),
    a = i(481060);
function o(e) {
    let { clip: n, onClose: i, transitionState: o } = e;
    return (0, t.jsx)(l.Modal, {
        transitionState: o,
        onClose: i,
        title: "Clip Debug",
        size: "md",
        actions: [
            {
                text: "Close",
                variant: "secondary",
                onClick: i,
            },
        ],
        children: (0, t.jsxs)(a.C3N, {
            label: "Decision",
            children: [
                null != n.decision &&
                    (0, t.jsxs)(t.Fragment, {
                        children: [
                            null != n.decision.reason
                                ? (0, t.jsx)(a.gNt, {
                                      label: "Reason",
                                      children: (0, t.jsx)(a.Text, {
                                          variant: "text-sm/normal",
                                          color: "text-secondary",
                                          children: n.decision.reason,
                                      }),
                                  })
                                : null,
                            (0, t.jsx)(a.gNt, {
                                label: "Timestamp",
                                layout: "horizontal",
                                children: (0, t.jsx)(a.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-secondary",
                                    children: new Date(n.decision.timestamp).toLocaleString(),
                                }),
                            }),
                        ],
                    }),
                n.timeline.length > 0 &&
                    (0, t.jsx)(a.C3N, {
                        label: "Timeline",
                        children: (0, t.jsx)("pre", {
                            children: (0, t.jsx)(a.Text, {
                                variant: "code",
                                color: "text-secondary",
                                children: JSON.stringify(n.timeline, null, 2),
                            }),
                        }),
                    }),
                null == n.decision &&
                    0 === n.timeline.length &&
                    (0, t.jsx)(a.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: "No debug information available for this clip.",
                    }),
            ],
        }),
    });
}
