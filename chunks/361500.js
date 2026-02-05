"use strict";
n.d(t, { t: () => c });
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(342494),
    o = n(217838),
    l = n(972687),
    u = n(89608);
let c = {
    title: "Popover",
    stories: [
        {
            name: "Popover",
            id: "popover",
            docs: "https://design.discord.tools/components/web/popover",
            component: function (e) {
                let {
                        showAsset: t,
                        showActions: n,
                        showTextLink: u,
                        caretAlign: c,
                        alignmentStrategy: d,
                        align: _,
                        size: f,
                        position: p,
                        ...h
                    } = e,
                    [m, g] = i.useState(!1),
                    E = i.useRef(null);
                return (0, r.jsxs)("div", {
                    style: { display: "flex", justifyContent: "center", alignItems: "center", minHeight: "400px" },
                    children: [
                        (0, r.jsx)(
                            s.AM,
                            {
                                ...h,
                                position: p,
                                size: f,
                                align: _,
                                alignmentStrategy: d,
                                targetElementRef: E,
                                shouldShow: m,
                                onRequestClose: () => g(!1),
                                graphic: t ? { type: "image", src: "sm" === f ? l.A : o.A } : void 0,
                                caretConfig: { align: c },
                                actions: n ? [{ text: "Close", onClick: () => g(!1) }] : void 0,
                                textLink: u
                                    ? { text: "Learn More", link: "https://discord.com", external: !0 }
                                    : void 0,
                            },
                            p,
                        ),
                        (0, r.jsx)(a.Button, {
                            variant: "primary",
                            text: "Toggle Popover",
                            buttonRef: E,
                            onClick: () => g(!m),
                        }),
                    ],
                });
            },
            controls: {
                title: { label: "Title", type: "text", defaultValue: "Sample Popover" },
                body: {
                    label: "Body Text",
                    type: "text",
                    defaultValue: "This is a sample popover with customizable properties.",
                },
                position: {
                    label: "Position",
                    type: "select",
                    defaultValue: "top",
                    options: [
                        { label: "Top", value: "top" },
                        { label: "Bottom", value: "bottom" },
                        { label: "Left", value: "left" },
                        { label: "Right", value: "right" },
                    ],
                },
                size: {
                    label: "Size",
                    type: "select",
                    defaultValue: "md",
                    options: [
                        { label: "Small", value: "sm" },
                        { label: "Medium", value: "md" },
                    ],
                },
                badge: {
                    label: "Badge",
                    type: "select",
                    defaultValue: "new",
                    options: [
                        { label: "None", value: void 0 },
                        { label: "New", value: "new" },
                        { label: "Beta", value: "beta" },
                        { label: "Early Access", value: "early_access" },
                    ],
                },
                gradientColor: {
                    label: "Gradient Color",
                    type: "select",
                    defaultValue: void 0,
                    options: [
                        { label: "None", value: void 0 },
                        { label: "Purple", value: "purple" },
                        { label: "Blue", value: "blue" },
                        { label: "Nitro Pink", value: "nitro-pink" },
                    ],
                },
                caretAlign: {
                    label: "Caret Align",
                    type: "select",
                    defaultValue: "center",
                    options: [
                        { label: "Center", value: "center" },
                        { label: "Start", value: "start" },
                        { label: "End", value: "end" },
                    ],
                },
                alignmentStrategy: {
                    label: "Alignment Strategy",
                    type: "select",
                    defaultValue: "trigger-center",
                    options: [
                        { label: "Trigger Center (caret points at trigger)", value: "trigger-center" },
                        { label: "Edge (popover edge aligns with trigger)", value: "edge" },
                    ],
                },
                align: {
                    label: 'Align (only applies with "edge" strategy)',
                    type: "select",
                    defaultValue: void 0,
                    options: [
                        { label: "None", value: void 0 },
                        { label: "Top", value: "top" },
                        { label: "Center", value: "center" },
                        { label: "Bottom", value: "bottom" },
                        { label: "Left", value: "left" },
                        { label: "Right", value: "right" },
                    ],
                },
                showAsset: { label: "Show Asset", type: "boolean", defaultValue: !0 },
                showActions: { label: "Show Actions", type: "boolean", defaultValue: !0 },
                showTextLink: { label: "Show Text Link", type: "boolean", defaultValue: !1 },
            },
        },
        {
            name: "VideoPopover",
            id: "video-popover",
            docs: "https://design.discord.tools/components/web/popover",
            component: function (e) {
                let { showActions: t, ...n } = e,
                    [o, l] = i.useState(!1),
                    u = i.useRef(null);
                return (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(
                            s.HZ,
                            {
                                ...n,
                                targetElementRef: u,
                                shouldShow: o,
                                onRequestClose: () => l(!1),
                                title: "Video Popover Demo",
                                body: "Click the video to view it in the media viewer!",
                                assetUrl:
                                    "https://cdn.discordapp.com/assets/server-subscription-tier-template/upsell.mov",
                                badge: "new",
                                action: t ? { text: "Learn More", onClick: () => l(!1) } : void 0,
                            },
                            n.position,
                        ),
                        (0, r.jsx)(a.Button, {
                            variant: "primary",
                            text: "Show Video Popover",
                            buttonRef: u,
                            onClick: () => l(!o),
                        }),
                    ],
                });
            },
            controls: { showActions: { label: "Show Actions", type: "boolean", defaultValue: !0 } },
        },
        {
            name: "MultiStepPopover",
            id: "multi-step-popover",
            docs: "https://design.discord.tools/components/web/popover",
            component: function (e) {
                let { showExpressive: t, ...n } = e,
                    [l, c] = i.useState(!1),
                    d = i.useRef(null),
                    _ = [
                        {
                            title: "Welcome to the Feature!",
                            body: "This is the first step of our multi-step introduction.",
                            asset: (0, r.jsx)("img", { src: o.A, alt: "Step 1" }),
                            badge: "new",
                            action: { text: "Next" },
                            gradientColor: "blue",
                        },
                        {
                            title: "Learn the Benefits",
                            body: "Here are the amazing benefits you can enjoy with this feature.",
                            asset: (0, r.jsx)("img", { src: u.A, alt: "Step 2" }),
                            action: { text: "Continue" },
                            gradientColor: "purple",
                        },
                        {
                            title: "Get Started!",
                            body: "You're all set to begin using this awesome feature.",
                            asset: (0, r.jsx)("img", { src: o.A, alt: "Step 3" }),
                            action: { text: "Get Started", variant: t ? "expressive" : void 0 },
                            gradientColor: "nitro-pink",
                            textLink: { text: "Learn More", link: "https://discord.com", external: !0 },
                        },
                    ];
                return (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(
                            s.pu,
                            {
                                ...n,
                                targetElementRef: d,
                                shouldShow: l,
                                onRequestClose: () => c(!1),
                                steps: _,
                                caretConfig: { align: "center" },
                                onStepChange: () => {},
                            },
                            n.position,
                        ),
                        (0, r.jsx)(a.Button, {
                            variant: "primary",
                            text: "Show Multi-Step",
                            buttonRef: d,
                            onClick: () => c(!l),
                        }),
                    ],
                });
            },
            controls: {
                showExpressive: { label: "Show Expressive Button", type: "boolean", defaultValue: !1 },
                size: {
                    label: "Size",
                    type: "select",
                    defaultValue: "md",
                    options: [
                        { label: "Small", value: "sm" },
                        { label: "Medium", value: "md" },
                    ],
                },
            },
        },
    ],
};
