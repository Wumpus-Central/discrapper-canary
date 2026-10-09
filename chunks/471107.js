n.d(t, { G: () => u });
var r = n(582128),
    i = n(17928),
    a = n(451988),
    l = n(775602),
    s = n(927813);
function o(e) {
    return Math.floor(e / s.A.Millis.SECOND) * s.A.Millis.SECOND;
}
function u() {
    let { hovered: e, isAppFocused: t = !0 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [n, u] = r.useState(() => o(Date.now())),
        c = (0, i.bG)([l.Ay], () => l.Ay.useReducedMotion),
        d = !t || (c && !e),
        h = d ? 15 * s.A.Millis.SECOND : s.A.Millis.SECOND;
    return (
        r.useEffect(() => {
            let e = new a.IX();
            return (
                e.start(h, () => {
                    u(o(Date.now()));
                }),
                () => e.stop()
            );
        }, [h]),
        { now: n, slowTickMode: d }
    );
}
