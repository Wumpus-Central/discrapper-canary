n.d(e, { r: () => u });
var i = n(477900);
n(582128);
var t = n(503698),
    l = n.n(t),
    s = n(765671),
    o = n(835517),
    r = n(100853);
function u(a) {
    let { durationMs: e, isPaused: n = !1, className: t } = a,
        { ref: u, width: d } = (0, s.Ay)(),
        c = null != d ? Math.ceil(d * (0, o.A)()) : null,
        m = {
            animationDuration: `${e}ms`,
            animationTimingFunction: null != c ? `steps(${c})` : void 0,
            animationPlayState: n ? "paused" : "running",
        };
    return (0, i.jsx)("div", {
        ref: u,
        className: l()(r.p4, t),
        "aria-hidden": "true",
        children: (0, i.jsx)("div", { className: r.q3, style: m }),
    });
}
