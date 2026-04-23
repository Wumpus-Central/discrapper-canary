n.d(t, { A: () => a });
var l = n(627968);
function a(e) {
    let { rating: t, strokeColor: n } = e,
        a = 2 * Math.PI * 16,
        i = Math.min(Math.max(t, 0), 100) / 100,
        r = i * a;
    return (0, l.jsx)("svg", {
        width: 30,
        height: 30,
        viewBox: "0 0 36 36",
        style: { transform: `rotate(${((1 - i) * 360) / 2}deg)` },
        children: (0, l.jsx)("circle", {
            r: 16,
            cx: 18,
            cy: 18,
            fill: "none",
            stroke: n,
            strokeWidth: 2.4,
            strokeDasharray: `${r} ${a - r}`,
        }),
    });
}
