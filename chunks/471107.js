"use strict";
n.d(t, { G: () => u });
var r = n(64700),
    i = n(311907),
    s = n(451988),
    a = n(775602),
    o = n(927813);
function l(e) {
    return Math.floor(e / o.A.Millis.SECOND) * o.A.Millis.SECOND;
}
function u() {
    let { hovered: e, isAppFocused: t = !0 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [n, u] = r.useState(() => l(Date.now())),
        c = (0, i.bG)([a.A], () => a.A.useReducedMotion),
        d = !t || (c && !e),
        _ = d ? 15 * o.A.Millis.SECOND : o.A.Millis.SECOND;
    return (
        r.useEffect(() => {
            let e = new s.IX();
            return (
                e.start(_, () => {
                    u(l(Date.now()));
                }),
                () => e.stop()
            );
        }, [_]),
        { now: n, slowTickMode: d }
    );
}
