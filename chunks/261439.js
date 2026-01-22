n.d(t, {
    a: () => s,
});
var r = n(627968),
    i = n(158954),
    a = n(67098);
let s = {
    title: "HelpMessage",
    stories: [
        {
            name: "HelpMessage",
            id: "help-message",
            component: function (e) {
                let { text: t } = e;
                return (0, r.jsx)(i.BJc, {
                    gap: 16,
                    children: Object.values(a.Y).map((e) =>
                        (0, r.jsx)(
                            i.D0$,
                            {
                                label: e,
                                children: (0, r.jsx)(
                                    a.p,
                                    {
                                        messageType: e,
                                        children: t,
                                    },
                                    e,
                                ),
                            },
                            e,
                        ),
                    ),
                });
            },
            controls: {
                text: {
                    label: "Text",
                    type: "text",
                    defaultValue: "This is a help message",
                },
            },
        },
    ],
};
