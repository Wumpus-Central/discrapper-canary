n.d(e, { r: () => o });
var i = n(477900);
n(582128);
var t = n(765671),
    l = n(835517),
    s = n(100853);
function o(a) {
    let { durationMs: e, isPaused: n = !1 } = a,
        { ref: o, width: r } = (0, t.Ay)(),
        u = null != r ? Math.ceil(r * (0, l.A)()) : null,
        d = {
            animationDuration: `${e}ms`,
            animationTimingFunction: null != u ? `steps(${u})` : void 0,
            animationPlayState: n ? "paused" : "running",
        };
    return (0, i.jsx)("div", { ref: o, className: s.p, style: d, "aria-hidden": "true" });
}
