a.d(t, { C: () => n });
var l = a(627968);
a(64700);
var r = a(724560);
let n = {
    name: "FullBleedContent",
    id: "full-bleed-content",
    component: (e) => {
        let { padding: t } = e;
        return (0, l.jsx)("div", {
            style: { background: "#5865f2", width: "100%" },
            children: (0, l.jsx)(r.A, {
                padding: t,
                children: (0, l.jsx)("div", {
                    style: { background: "white", color: "#000", padding: 16, fontWeight: "bold" },
                    children: "Full-width content",
                }),
            }),
        });
    },
    controls: { padding: { label: "Padding", type: "number", defaultValue: 0, minValue: 0 } },
};
