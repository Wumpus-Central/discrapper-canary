l.d(t, { A: () => s });
var a = l(627968),
    n = l(397927),
    r = l(486164),
    i = l(557464);
let s = () => {
    let e = {
        title: "Sample Tooltip",
        body: "This is only to be for navigation items inside of the DM view",
        asset: { src: i.A, type: "image", aspectRatio: "1/1" },
    };
    return (0, a.jsx)("div", {
        children: (0, a.jsx)(r.A, {
            ...e,
            children: (0, a.jsx)("div", {
                style: { background: "pink", borderRadius: 8, padding: 12, display: "inline-block" },
                children: (0, a.jsx)(n.Text, { variant: "text-md/bold", children: "Hover Me!" }),
            }),
        }),
    });
};
