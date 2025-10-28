t.d(l, { t: () => o });
var a = t(951288);
t(647438);
var n = t(225779);
let o = {
    title: "Notice",
    stories: [
        {
            id: "notice",
            name: "Notice",
            component: function (e) {
                let { color: l, message: t } = e,
                    o = {
                        BRAND: n.DM.BRAND,
                        INFO: n.DM.INFO,
                        WARNING: n.DM.WARNING,
                        DANGER: n.DM.DANGER,
                        DEFAULT: n.DM.DEFAULT,
                        NEUTRAL: n.DM.NEUTRAL,
                    };
                return (0, a.jsx)(n.qX, {
                    color: o[l],
                    children: t,
                });
            },
            controls: {
                color: {
                    type: "select",
                    label: "Color",
                    defaultValue: "BRAND",
                    options: [
                        {
                            label: "Brand",
                            value: "BRAND",
                        },
                        {
                            label: "Info",
                            value: "INFO",
                        },
                        {
                            label: "Warning",
                            value: "WARNING",
                        },
                        {
                            label: "Danger",
                            value: "DANGER",
                        },
                        {
                            label: "Default",
                            value: "DEFAULT",
                        },
                        {
                            label: "Neutral",
                            value: "NEUTRAL",
                        },
                    ],
                },
                message: {
                    type: "text",
                    label: "Message",
                    defaultValue: "This is a notice message with important information.",
                },
            },
        },
    ],
};
