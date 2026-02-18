a.d(l, { a: () => i });
var t = a(627968),
    o = a(158954),
    n = a(67098);
let i = {
    title: "HelpMessage",
    stories: [
        {
            name: "HelpMessage",
            id: "help-message",
            component: function (e) {
                let { text: l } = e;
                return (0, t.jsx)(o.BJc, {
                    gap: 16,
                    children: Object.values(n.Y).map((e) =>
                        (0, t.jsx)(
                            o.D0$,
                            { label: e, children: (0, t.jsx)(n.p, { messageType: e, children: l }, e) },
                            e,
                        ),
                    ),
                });
            },
            controls: { text: { label: "Text", type: "text", defaultValue: "This is a help message" } },
        },
    ],
};
