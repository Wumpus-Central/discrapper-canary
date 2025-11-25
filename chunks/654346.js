n.d(t, { De: () => d });
var r = n(54381);
n(473749);
var i = n(186318),
    a = n(427730),
    o = n(938151),
    s = n(10326),
    l = n(388032);
let c = {
        name: "Cancellation Flow",
        component: () => (0, r.jsx)(i.k, {}),
        id: "cancellation-flow",
        controls: {},
    },
    u = {
        name: "Expressive Progress",
        component: a.Z,
        id: "expressive-progress",
        controls: {},
    },
    d = {
        title: "Nitro Components",
        stories: [
            c,
            u,
            {
                name: "Interactive H Scroll",
                component: o.Z,
                id: "interactive-h-scroll",
                controls: {},
            },
            {
                name: "Premium Tooltip",
                component: s.Z,
                id: "premium-tooltip",
                controls: {
                    title: {
                        label: "Title",
                        type: "text",
                        defaultValue: l.intl.string(l.t.lG6a5x).toUpperCase(),
                    },
                    body: {
                        label: "Body",
                        type: "text",
                        defaultValue: "This is an example of a premium tooltip (poptip?) with customizable content.",
                    },
                    showGraphic: {
                        label: "Show Graphic",
                        type: "boolean",
                        defaultValue: !0,
                    },
                    showActions: {
                        label: "Show Actions",
                        type: "boolean",
                        defaultValue: !1,
                    },
                    badgeId: {
                        label: "Badge",
                        type: "select",
                        defaultValue: "gold",
                        options: [
                            {
                                label: "Bronze (1 Month)",
                                value: "bronze",
                            },
                            {
                                label: "Silver (3 Month)",
                                value: "silver",
                            },
                            {
                                label: "Gold (6 Month)",
                                value: "gold",
                            },
                            {
                                label: "Platinum (12 Month)",
                                value: "platinum",
                            },
                            {
                                label: "Diamond (24 Month)",
                                value: "diamond",
                            },
                            {
                                label: "Emerald (36 Month)",
                                value: "emerald",
                            },
                            {
                                label: "Ruby (60 Month)",
                                value: "ruby",
                            },
                            {
                                label: "Opal (72 Month)",
                                value: "opal",
                            },
                        ],
                    },
                    gradientColor: {
                        label: "Gradient Color",
                        type: "select",
                        defaultValue: "gold",
                        options: [
                            {
                                label: "Nitro Pink",
                                value: "nitro-pink",
                            },
                            {
                                label: "Nitro Green",
                                value: "nitro-green",
                            },
                            {
                                label: "Green",
                                value: "green",
                            },
                            {
                                label: "Purple",
                                value: "purple",
                            },
                            {
                                label: "Bronze (1 Month)",
                                value: "bronze",
                            },
                            {
                                label: "Silver (3 Month)",
                                value: "silver",
                            },
                            {
                                label: "Gold (6 Month)",
                                value: "gold",
                            },
                            {
                                label: "Platinum (12 Month)",
                                value: "platinum",
                            },
                            {
                                label: "Diamond (24 Month)",
                                value: "diamond",
                            },
                            {
                                label: "Emerald (36 Month)",
                                value: "emerald",
                            },
                            {
                                label: "Ruby (60 Month)",
                                value: "ruby",
                            },
                            {
                                label: "Opal (72 Month)",
                                value: "opal",
                            },
                        ],
                    },
                    size: {
                        label: "Size",
                        type: "select",
                        defaultValue: "lg",
                        options: [
                            {
                                label: "Small",
                                value: "sm",
                            },
                            {
                                label: "Medium",
                                value: "md",
                            },
                            {
                                label: "Large",
                                value: "lg",
                            },
                            {
                                label: "Video",
                                value: "video",
                            },
                        ],
                    },
                    showProgress: {
                        label: "Show Progress",
                        type: "boolean",
                        defaultValue: !0,
                    },
                    progressCircleText: {
                        label: "Progress Text",
                        type: "text",
                        defaultValue: "15",
                    },
                    progressCirclePercent: {
                        label: "Progress Percent",
                        type: "number",
                        defaultValue: 50,
                    },
                    progressCircleUrgency: {
                        label: "Progress Urgency",
                        type: "select",
                        defaultValue: "warning",
                        options: [
                            {
                                label: "Warning",
                                value: "warning",
                            },
                            {
                                label: "Critical",
                                value: "critical",
                            },
                        ],
                    },
                    delay: {
                        label: "Delay (ms)",
                        type: "number",
                        defaultValue: 300,
                    },
                    estimatedTooltipHeight: {
                        label: "Estimated Tooltip Height (px)",
                        type: "number",
                        defaultValue: 300,
                    },
                },
            },
        ],
    };
