"use strict";
n.d(t, { G: () => u });
var l = n(582128),
    i = n(17928),
    s = n(451988),
    r = n(775602),
    a = n(927813);
function o(e) {
    return Math.floor(e / a.A.Millis.SECOND) * a.A.Millis.SECOND;
}
function u() {
    let { hovered: e, isAppFocused: t = !0 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        [n, u] = l.useState(() => o(Date.now())),
        c = (0, i.bG)([r.Ay], () => r.Ay.useReducedMotion),
        d = !t || (c && !e),
        h = d ? 15 * a.A.Millis.SECOND : a.A.Millis.SECOND;
    return (
        l.useEffect(() => {
            let e = new s.IX();
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
