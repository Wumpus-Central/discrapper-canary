"use strict";
n.d(t, { G: () => d });
var i = n(582128),
    r = n(17928),
    a = n(451988),
    s = n(775602),
    l = n(927813);
function o(e) {
    return Math.floor(e / l.A.Millis.SECOND) * l.A.Millis.SECOND;
}
function d() {
    let { hovered: e, isAppFocused: t = !0 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [n, d] = i.useState(() => o(Date.now())),
        c = (0, r.bG)([s.Ay], () => s.Ay.useReducedMotion),
        u = !t || (c && !e),
        _ = u ? 15 * l.A.Millis.SECOND : l.A.Millis.SECOND;
    return (
        i.useEffect(() => {
            let e = new a.IX();
            return (
                e.start(_, () => {
                    d(o(Date.now()));
                }),
                () => e.stop()
            );
        }, [_]),
        { now: n, slowTickMode: u }
    );
}
