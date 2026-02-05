"use strict";
n.d(t, { V: () => l });
var r = n(627968),
    i = n(64700),
    a = n(508382),
    s = n(158954),
    o = n(868249);
let l = {
    title: "FloatingLayer",
    stories: [
        {
            name: "FloatingLayer",
            id: "popover-layer",
            component: function (e) {
                let {
                        placement: t,
                        spacing: n,
                        autoFlip: l,
                        autoShift: u,
                        strategy: c,
                        portal: d,
                        blockPointerEvents: _,
                    } = e,
                    [f, p] = i.useState(!1);
                return (0, r.jsx)(a.Ow, {
                    open: f,
                    onOpenChange: p,
                    placement: t,
                    spacing: n,
                    autoFlip: l,
                    autoShift: u,
                    strategy: c,
                    portal: d,
                    blockPointerEvents: _,
                    renderLayer: () =>
                        (0, r.jsx)("div", {
                            className: o.q,
                            children: (0, r.jsx)(s.EYj, {
                                variant: "text-sm/medium",
                                children: "FloatingLayer Content",
                            }),
                        }),
                    children: (e) => {
                        let { ref: t, props: n } = e;
                        return (0, r.jsx)(s.$nd, {
                            variant: "primary",
                            text: "Target Element",
                            onClick: () => p(!f),
                            ...n,
                            buttonRef: t,
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
