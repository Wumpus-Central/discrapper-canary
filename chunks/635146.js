n.d(t, {
    Px: () => c,
    hv: () => u,
});
var r = n(473749),
    i = n(251052),
    a = n(213305),
    o = n(219855);
let s = {
        mass: 1,
        tension: 1000,
        friction: 48,
    },
    l = {
        mass: 1,
        tension: 1200,
        friction: 80,
    },
    c = s;
function u(e, t) {
    let n = e === o.D.ENTERING || e === o.D.ENTERED,
        { reducedMotion: c } = r.useContext(a.S),
        u = n || c.enabled || "subtle" === t ? "scale(1)" : "scale(0.9)";
    return (0, i.q)(
        {
            opacity: +!!n,
            transform: u,
            config: n ? s : l,
            delay: 64 * !!n,
        },
        "animate-always",
    );
}
