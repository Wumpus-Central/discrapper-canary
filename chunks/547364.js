n.d(t, { K: () => o });
var r = n(54381);
n(473749);
var i = n(793030);
let a = {
        none: void 0,
        StarIcon: i.r7p,
        FireIcon: i.YqE,
        SparklesIcon: i.T$Z,
        ClockIcon: i.T39,
    },
    o = {
        title: "Badge",
        stories: [
            {
                name: "Badge",
                id: "badge",
                component: function (e) {
                    let { type: t, customText: n, variant: o, iconName: s } = e,
                        l = "custom" === t && null != n && "" !== n ? { text: n } : t,
                        c = null != s && "" !== s && "none" !== s ? a[s] : void 0;
                    return (0, r.jsx)(i.Cts, {
                        type: l,
                        variant: o,
                        icon: c,
                    });
                },
                docs: "https://design.discord.tools/components/web/badge",
                controls: {
                    type: {
                        label: "Type",
                        type: "select",
                        defaultValue: "new",
                        options: [
                            {
                                label: "New",
                                value: "new",
                            },
                            {
                                label: "Beta",
                                value: "beta",
                            },
                            {
                                label: "Early Access",
                                value: "early_access",
                            },
                            {
                                label: "Free Trial",
                                value: "free_trial",
                            },
                            {
                                label: "Custom Text",
                                value: "custom",
                            },
                        ],
                    },
                    customText: {
                        label: "Custom Text",
                        type: "text",
                        defaultValue: "Custom",
                    },
                    variant: {
                        label: "Variant",
                        type: "select",
                        defaultValue: "default",
                        options: [
                            {
                                label: "Default",
                                value: "default",
                            },
                            {
                                label: "Expressive",
                                value: "expressive",
                            },
                        ],
                    },
                    iconName: {
                        label: "Icon",
                        type: "select",
                        defaultValue: "none",
                        options: [
                            {
                                label: "None",
                                value: "none",
                            },
                            {
                                label: "Star",
                                value: "StarIcon",
                            },
                            {
                                label: "Fire",
                                value: "FireIcon",
                            },
                            {
                                label: "Sparkles",
                                value: "SparklesIcon",
                            },
                            {
                                label: "Clock",
                                value: "ClockIcon",
                            },
                        ],
                    },
                },
            },
        ],
    };
