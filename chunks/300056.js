a.d(t, { a: () => o });
var l = a(627968);
a(64700);
var r = a(397927),
    n = a(287944);
let o = {
    name: "Tooltip",
    id: "cms-tooltip",
    component: (e) =>
        (0, l.jsx)(n.A, {
            ...e,
            children: (0, l.jsx)("div", {
                style: { width: 300, background: "pink", borderRadius: 8, padding: 12 },
                children: (0, l.jsx)(r.Text, { variant: "text-lg/semibold", children: "Hover me." }),
            }),
        }),
    controls: {
        text: { type: "text", label: "Content", defaultValue: "Hello, world!" },
        position: {
            type: "select",
            label: "Position",
            defaultValue: "top",
            options: [
                { label: "top", value: "top" },
                { label: "left", value: "left" },
                { label: "right", value: "right" },
                { label: "bottom", value: "bottom" },
            ],
        },
    },
};
