i.d(a, { O: () => r });
var s = i(477900);
i(582128);
var t = i(678265);
let n = 2 * Math.PI * 7;
function r(e) {
    let { durationMs: a, isPaused: i = !1 } = e,
        r = {
            animationDuration: `${a}ms`,
            animationPlayState: i ? "paused" : "running",
            strokeDasharray: n,
            "--custom-final-offset": `${n}`,
        };
    return (0, s.jsxs)("svg", {
        className: t._p,
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        "aria-hidden": "true",
        children: [
            (0, s.jsx)("circle", { className: t.RF, cx: 8, cy: 8, r: 7, strokeWidth: 2 }),
            (0, s.jsx)("circle", { className: t.nA, cx: 8, cy: 8, r: 7, strokeWidth: 2, style: r }),
        ],
    });
}
