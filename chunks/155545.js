n.d(t, { A: () => r });
var i = n(627968);
n(64700);
var a = n(953727);
function r(e) {
    let { width: t = 12, height: n = 12, color: r = "currentColor", foreground: s, ...l } = e;
    return (0, i.jsx)("svg", {
        ...(0, a.A)(l),
        width: t,
        height: n,
        viewBox: "0 0 12 12",
        children: (0, i.jsx)("rect", {
            width: "9",
            height: "9",
            x: "1.5",
            y: "1.5",
            fill: "none",
            stroke: r,
            className: s,
        }),
    });
}
