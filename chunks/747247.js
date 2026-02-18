a.d(l, { t: () => i });
var t = a(627968);
a(64700);
var o = a(158954);
let n = { none: void 0, StarIcon: o.Gg5, FireIcon: o.Y3C, SparklesIcon: o.BZI, ClockIcon: o.O4 },
    i = {
        title: "Badge",
        stories: [
            {
                name: "Badge",
                id: "badge",
                component: function (e) {
                    let { type: l, customText: a, variant: i, iconName: s } = e,
                        r = null != s && "" !== s && "none" !== s ? n[s] : void 0;
                    return (0, t.jsx)(o.Exy, {
                        type: "custom" === l && null != a && "" !== a ? { text: a } : l,
                        variant: i,
                        icon: r,
                    });
                },
                docs: "https://design.discord.tools/components/web/badge",
                controls: {
                    type: {
                        label: "Type",
                        type: "select",
                        defaultValue: "new",
                        options: [
                            { label: "New", value: "new" },
                            { label: "Beta", value: "beta" },
                            { label: "Early Access", value: "early_access" },
                            { label: "Free Trial", value: "free_trial" },
                            { label: "Custom Text", value: "custom" },
                        ],
                    },
                    customText: { label: "Custom Text", type: "text", defaultValue: "Custom" },
                    variant: {
                        label: "Variant",
                        type: "select",
                        defaultValue: "default",
                        options: [
                            { label: "Default", value: "default" },
                            { label: "Brand", value: "brand" },
                            { label: "Expressive", value: "expressive" },
                        ],
                    },
                    iconName: {
                        label: "Icon",
                        type: "select",
                        defaultValue: "none",
                        options: [
                            { label: "None", value: "none" },
                            { label: "Star", value: "StarIcon" },
                            { label: "Fire", value: "FireIcon" },
                            { label: "Sparkles", value: "SparklesIcon" },
                            { label: "Clock", value: "ClockIcon" },
                        ],
                    },
                },
            },
        ],
    };
