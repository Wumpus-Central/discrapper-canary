l.d(t, { g: () => n });
var a = l(627968);
l(64700);
var r = l(706992);
let n = {
    name: "NarrowContent",
    id: "narrow-content",
    component: (e) => {
        let { padding: t } = e;
        return (0, a.jsx)("div", {
            style: { background: "#5865f2", width: "100%" },
            children: (0, a.jsx)(r.A, {
                padding: t,
                children: (0, a.jsx)("div", {
                    style: { background: "white", color: "#000", padding: 16, fontWeight: "bold" },
                    children: "Content constrained to 1080px, centered",
                }),
            }),
        });
    },
    controls: { padding: { label: "Padding", type: "number", defaultValue: 32, minValue: 0 } },
};
