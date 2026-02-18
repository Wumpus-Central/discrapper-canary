a.d(l, { t: () => u });
var t = a(627968),
    o = a(64700),
    n = a(397927),
    i = a(342494),
    s = a(217838),
    r = a(972687),
    d = a(89608);
let u = {
    title: "Popover",
    stories: [
        {
            name: "Popover",
            id: "popover",
            docs: "https://design.discord.tools/components/web/popover",
            component: function (e) {
                let {
                        showAsset: l,
                        showActions: a,
                        showTextLink: d,
                        caretAlign: u,
                        alignmentStrategy: c,
                        align: b,
                        size: p,
                        position: m,
                        ...x
                    } = e,
                    [v, h] = o.useState(!1),
                    y = o.useRef(null);
                return (0, t.jsxs)("div", {
                    style: { display: "flex", justifyContent: "center", alignItems: "center", minHeight: "400px" },
                    children: [
                        (0, t.jsx)(
                            i.AM,
                            {
                                ...x,
                                position: m,
                                size: p,
                                align: b,
                                alignmentStrategy: c,
                                targetElementRef: y,
                                shouldShow: v,
                                onRequestClose: () => h(!1),
                                graphic: l ? { type: "image", src: "sm" === p ? r.A : s.A } : void 0,
                                caretConfig: { align: u },
                                actions: a ? [{ text: "Close", onClick: () => h(!1) }] : void 0,
                                textLink: d
                                    ? { text: "Learn More", link: "https://discord.com", external: !0 }
                                    : void 0,
                            },
                            m,
                        ),
                        (0, t.jsx)(n.Button, {
                            variant: "primary",
                            text: "Toggle Popover",
                            buttonRef: y,
                            onClick: () => h(!v),
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
                let { showActions: l, ...a } = e,
                    [s, r] = o.useState(!1),
                    d = o.useRef(null);
                return (0, t.jsxs)("div", {
                    children: [
                        (0, t.jsx)(
                            i.HZ,
                            {
                                ...a,
                                targetElementRef: d,
                                shouldShow: s,
                                onRequestClose: () => r(!1),
                                title: "Video Popover Demo",
                                body: "Click the video to view it in the media viewer!",
                                assetUrl:
                                    "https://cdn.discordapp.com/assets/server-subscription-tier-template/upsell.mov",
                                badge: "new",
                                action: l ? { text: "Learn More", onClick: () => r(!1) } : void 0,
                            },
                            a.position,
                        ),
                        (0, t.jsx)(n.Button, {
                            variant: "primary",
                            text: "Show Video Popover",
                            buttonRef: d,
                            onClick: () => r(!s),
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
                let { showExpressive: l, ...a } = e,
                    [r, u] = o.useState(!1),
                    c = o.useRef(null),
                    b = [
                        {
                            title: "Welcome to the Feature!",
                            body: "This is the first step of our multi-step introduction.",
                            asset: (0, t.jsx)("img", { src: s.A, alt: "Step 1" }),
                            badge: "new",
                            action: { text: "Next" },
                            gradientColor: "blue",
                        },
                        {
                            title: "Learn the Benefits",
                            body: "Here are the amazing benefits you can enjoy with this feature.",
                            asset: (0, t.jsx)("img", { src: d.A, alt: "Step 2" }),
                            action: { text: "Continue" },
                            gradientColor: "purple",
                        },
                        {
                            title: "Get Started!",
                            body: "You're all set to begin using this awesome feature.",
                            asset: (0, t.jsx)("img", { src: s.A, alt: "Step 3" }),
                            action: { text: "Get Started", variant: l ? "expressive" : void 0 },
                            gradientColor: "nitro-pink",
                            textLink: { text: "Learn More", link: "https://discord.com", external: !0 },
                        },
                    ];
                return (0, t.jsxs)("div", {
                    children: [
                        (0, t.jsx)(
                            i.pu,
                            {
                                ...a,
                                targetElementRef: c,
                                shouldShow: r,
                                onRequestClose: () => u(!1),
                                steps: b,
                                caretConfig: { align: "center" },
                                onStepChange: () => {},
                            },
                            a.position,
                        ),
                        (0, t.jsx)(n.Button, {
                            variant: "primary",
                            text: "Show Multi-Step",
                            buttonRef: c,
                            onClick: () => u(!r),
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
