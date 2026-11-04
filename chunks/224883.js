var l = n(477900);
n(582128);
var t = n(189213),
    o = n(270003),
    s = n(452027),
    a = n(834730);
n.d(
    i,
    {},
    {
        default: function (e) {
            let { clip: i, onClose: n, transitionState: r } = e;
            return (0, l.jsx)(t.a, {
                transitionState: r,
                onClose: n,
                title: "Clip Debug",
                size: "md",
                actions: [{ text: "Close", variant: "secondary", onClick: n }],
                children: (0, l.jsxs)(o.n, {
                    label: "Decision",
                    children: [
                        null != i.decision &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    null != i.decision.reason
                                        ? (0, l.jsx)(s.D, {
                                              label: "Reason",
                                              children: (0, l.jsx)(a.E, {
                                                  variant: "body-sm/normal",
                                                  color: "text-subtle",
                                                  children: i.decision.reason,
                                              }),
                                          })
                                        : null,
                                    (0, l.jsx)(s.D, {
                                        label: "Timestamp",
                                        layout: "horizontal",
                                        children: (0, l.jsx)(a.E, {
                                            variant: "body-sm/normal",
                                            color: "text-subtle",
                                            children: new Date(i.decision.timestamp).toLocaleString(),
                                        }),
                                    }),
                                ],
                            }),
                        i.timeline.length > 0 &&
                            (0, l.jsx)(o.n, {
                                label: "Timeline",
                                children: (0, l.jsx)("pre", {
                                    children: (0, l.jsx)(a.E, {
                                        variant: "mono-md/bold",
                                        color: "text-subtle",
                                        children: JSON.stringify(i.timeline, null, 2),
                                    }),
                                }),
                            }),
                        null == i.decision &&
                            0 === i.timeline.length &&
                            (0, l.jsx)(a.E, {
                                variant: "body-sm/normal",
                                color: "text-muted",
                                children: "No debug information available for this clip.",
                            }),
                    ],
                }),
            });
        },
    },
);
