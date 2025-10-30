n.d(t, { default: () => a }), n(49124);
var i = n(951288);
n(647438);
var l = n(793030),
    o = n(481060),
    r = n(794877);
function a(e) {
    var t;
    let { clip: n, onClose: a, transitionState: s } = e;
    return (0, i.jsx)(l.Modal, {
        transitionState: s,
        onClose: a,
        title: "Clip Debug",
        size: "md",
        actions: [
            {
                text: "Close",
                variant: "secondary",
                onClick: a,
            },
        ],
        children: (0, i.jsxs)(o.C3N, {
            label: "Decision",
            children: [
                null != n.decision &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(o.gNt, {
                                label: "Reason",
                                children: (0, i.jsx)(o.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-secondary",
                                    children: n.decision.reason,
                                }),
                            }),
                            (0, i.jsx)(o.gNt, {
                                label: "Clipping Pressure",
                                layout: "horizontal",
                                children: (0, i.jsx)(o.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-secondary",
                                    children: n.decision.clippingPressure.toFixed(3),
                                }),
                            }),
                            (0, i.jsx)(o.gNt, {
                                label: "Current Threshold",
                                layout: "horizontal",
                                children: (0, i.jsx)(o.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-secondary",
                                    children: n.decision.currentThreshold.toFixed(3),
                                }),
                            }),
                            null != n.decision.effectivePressure &&
                                (0, i.jsx)(o.gNt, {
                                    label: "Effective Pressure",
                                    layout: "horizontal",
                                    children: (0, i.jsx)(o.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-secondary",
                                        children: n.decision.effectivePressure.toFixed(3),
                                    }),
                                }),
                            (0, i.jsx)(o.gNt, {
                                label: "Timestamp",
                                layout: "horizontal",
                                children: (0, i.jsx)(o.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-secondary",
                                    children: new Date(n.decision.timestamp).toLocaleString(),
                                }),
                            }),
                        ],
                    }),
                n.timeline.length > 0 &&
                    (0, i.jsx)(o.C3N, {
                        label: "Timeline",
                        children: (0, i.jsx)("pre", {
                            children: (0, i.jsx)(o.Text, {
                                variant: "code",
                                color: "text-secondary",
                                children: JSON.stringify(n.timeline, null, 2),
                            }),
                        }),
                    }),
                (null == (t = n.decision) ? void 0 : t.emotionHistory) != null &&
                    n.decision.emotionHistory.length > 0 &&
                    (0, i.jsxs)(o.C3N, {
                        label: "Emotion History",
                        children: [
                            (0, i.jsx)(r.Z, { emotionHistory: n.decision.emotionHistory }),
                            (0, i.jsx)("pre", {
                                children: (0, i.jsx)(o.Text, {
                                    variant: "code",
                                    color: "text-secondary",
                                    children: JSON.stringify(n.decision.emotionHistory, null, 2),
                                }),
                            }),
                        ],
                    }),
                null == n.decision &&
                    0 === n.timeline.length &&
                    (0, i.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: "No debug information available for this clip.",
                    }),
            ],
        }),
    });
}
