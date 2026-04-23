"use strict";
n.d(t, { G: () => d });
var i = n(64700),
    r = n(17928),
    s = n(451988),
    a = n(775602),
    o = n(927813);
function l(e) {
    return Math.floor(e / o.A.Millis.SECOND) * o.A.Millis.SECOND;
}
function d() {
    let { hovered: e, isAppFocused: t = !0 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [n, d] = i.useState(() => l(Date.now())),
        _ = (0, r.bG)([a.A], () => a.A.useReducedMotion),
        u = !t || (_ && !e),
        c = u ? 15 * o.A.Millis.SECOND : o.A.Millis.SECOND;
    return (
        i.useEffect(() => {
            let e = new s.IX();
            return (
                e.start(c, () => {
                    d(l(Date.now()));
                }),
                () => e.stop()
            );
        }, [c]),
        { now: n, slowTickMode: u }
    );
}
