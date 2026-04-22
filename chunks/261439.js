a.d(l, { a: () => r });
var t = a(627968),
    n = a(331322),
    o = a(452027),
    i = a(512950);
let r = {
    title: "HelpMessage",
    stories: [
        {
            name: "HelpMessage",
            id: "help-message",
            component: function (e) {
                let { text: l } = e;
                return (0, t.jsx)(n.B, {
                    gap: 16,
                    children: Object.values(i.Y).map((e) =>
                        (0, t.jsx)(o.D, { label: e, children: (0, t.jsx)(i.p, { messageType: e, children: l }, e) }, e),
                    ),
                });
            },
            controls: { text: { label: "Text", type: "text", defaultValue: "This is a help message" } },
        },
    ],
};
