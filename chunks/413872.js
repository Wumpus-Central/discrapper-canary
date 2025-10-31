n.d(t, { t: () => a });
var r = n(951288);
n(647438);
var i = n(225779);
let a = {
    title: "Notice",
    stories: [
        {
            id: "notice",
            name: "Notice",
            component: function (e) {
                let { color: t, message: n } = e,
                    a = {
                        BRAND: i.DM.BRAND,
                        INFO: i.DM.INFO,
                        WARNING: i.DM.WARNING,
                        DANGER: i.DM.DANGER,
                        DEFAULT: i.DM.DEFAULT,
                        NEUTRAL: i.DM.NEUTRAL,
                    };
                return (0, r.jsx)(i.qX, {
                    color: a[t],
                    children: n,
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
