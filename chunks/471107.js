"use strict";
n.d(t, { G: () => c });
var l = n(64700),
    i = n(17928),
    s = n(451988),
    a = n(775602),
    r = n(927813);
function o(e) {
    return Math.floor(e / r.A.Millis.SECOND) * r.A.Millis.SECOND;
}
function c() {
    let { hovered: e, isAppFocused: t = !0 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [n, c] = l.useState(() => o(Date.now())),
        u = (0, i.bG)([a.A], () => a.A.useReducedMotion),
        d = !t || (u && !e),
        h = d ? 15 * r.A.Millis.SECOND : r.A.Millis.SECOND;
    return (
        l.useEffect(() => {
            let e = new s.IX();
            return (
                e.start(h, () => {
                    c(o(Date.now()));
                }),
                () => e.stop()
            );
        }, [h]),
        { now: n, slowTickMode: d }
    );
}
