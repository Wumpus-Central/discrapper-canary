l.d(t, { G: () => u });
var n = l(582128),
    a = l(17928),
    s = l(451988),
    i = l(775602),
    r = l(927813);
function o(e) {
    return Math.floor(e / r.A.Millis.SECOND) * r.A.Millis.SECOND;
}
function u() {
    let { hovered: e, isAppFocused: t = !0 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [l, u] = n.useState(() => o(Date.now())),
        c = (0, a.bG)([i.Ay], () => i.Ay.useReducedMotion),
        m = !t || (c && !e),
        d = m ? 15 * r.A.Millis.SECOND : r.A.Millis.SECOND;
    return (
        n.useEffect(() => {
            let e = new s.IX();
            return (
                e.start(d, () => {
                    u(o(Date.now()));
                }),
                () => e.stop()
            );
        }, [d]),
        { now: l, slowTickMode: m }
    );
}
