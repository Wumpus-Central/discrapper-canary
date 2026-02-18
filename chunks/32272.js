a.d(l, { V: () => r });
var t = a(627968),
    o = a(64700),
    n = a(508382),
    i = a(158954),
    s = a(868249);
let r = {
    title: "FloatingLayer",
    stories: [
        {
            name: "FloatingLayer",
            id: "popover-layer",
            component: function (e) {
                let {
                        placement: l,
                        spacing: a,
                        autoFlip: r,
                        autoShift: d,
                        strategy: u,
                        portal: c,
                        blockPointerEvents: b,
                    } = e,
                    [p, m] = o.useState(!1);
                return (0, t.jsx)(n.Ow, {
                    open: p,
                    onOpenChange: m,
                    placement: l,
                    spacing: a,
                    autoFlip: r,
                    autoShift: d,
                    strategy: u,
                    portal: c,
                    blockPointerEvents: b,
                    renderLayer: () =>
                        (0, t.jsx)("div", {
                            className: s.q,
                            children: (0, t.jsx)(i.EYj, {
                                variant: "text-sm/medium",
                                children: "FloatingLayer Content",
                            }),
                        }),
                    children: (e) => {
                        let { ref: l, props: a } = e;
                        return (0, t.jsx)(i.$nd, {
                            variant: "primary",
                            text: "Target Element",
                            onClick: () => m(!p),
                            ...a,
                            buttonRef: l,
                        });
                    },
                });
            },
            controls: {
                placement: {
                    label: "Placement",
                    type: "select",
                    defaultValue: "bottom",
                    options: [
                        { label: "Top", value: "top" },
                        { label: "Top Start", value: "top-start" },
                        { label: "Top End", value: "top-end" },
                        { label: "Bottom", value: "bottom" },
                        { label: "Bottom Start", value: "bottom-start" },
                        { label: "Bottom End", value: "bottom-end" },
                        { label: "Left", value: "left" },
                        { label: "Left Start", value: "left-start" },
                        { label: "Left End", value: "left-end" },
                        { label: "Right", value: "right" },
                        { label: "Right Start", value: "right-start" },
                        { label: "Right End", value: "right-end" },
                    ],
                },
                spacing: { label: "Spacing (px)", type: "number", defaultValue: 8 },
                autoFlip: { label: "Auto Flip", type: "boolean", defaultValue: !0 },
                autoShift: { label: "Auto Shift", type: "boolean", defaultValue: !0 },
                strategy: {
                    label: "Strategy",
                    type: "select",
                    defaultValue: "fixed",
                    options: [
                        { label: "Fixed", value: "fixed" },
                        { label: "Absolute", value: "absolute" },
                    ],
                },
                portal: { label: "Portal", type: "boolean", defaultValue: !0 },
                blockPointerEvents: { label: "Block Pointer Events", type: "boolean", defaultValue: !1 },
            },
        },
    ],
};
