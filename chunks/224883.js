i.d(t, { default: () => a });
var l = i(627968);
i(64700);
var n = i(158954),
    s = i(397927);
function a(e) {
    let { clip: t, onClose: i, transitionState: a } = e;
    return (0, l.jsx)(n.Modal, {
        transitionState: a,
        onClose: i,
        title: "Clip Debug",
        size: "md",
        actions: [{ text: "Close", variant: "secondary", onClick: i }],
        children: (0, l.jsxs)(s.nVY, {
            label: "Decision",
            children: [
                null != t.decision &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            null != t.decision.reason
                                ? (0, l.jsx)(s.D0$, {
                                      label: "Reason",
                                      children: (0, l.jsx)(s.Text, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          children: t.decision.reason,
                                      }),
                                  })
                                : null,
                            (0, l.jsx)(s.D0$, {
                                label: "Timestamp",
                                layout: "horizontal",
                                children: (0, l.jsx)(s.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: new Date(t.decision.timestamp).toLocaleString(),
                                }),
                            }),
                        ],
                    }),
                t.timeline.length > 0 &&
                    (0, l.jsx)(s.nVY, {
                        label: "Timeline",
                        children: (0, l.jsx)("pre", {
                            children: (0, l.jsx)(s.Text, {
                                variant: "code",
                                color: "text-subtle",
                                children: JSON.stringify(t.timeline, null, 2),
                            }),
                        }),
                    }),
                null == t.decision &&
                    0 === t.timeline.length &&
                    (0, l.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: "No debug information available for this clip.",
                    }),
            ],
        }),
    });
}
