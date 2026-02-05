"use strict";
n.d(t, { A: () => o });
var r = n(64700),
    i = n(27867),
    a = n(405269),
    s = n(396583);
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3,
        n = arguments.length > 2 ? arguments[2] : void 0,
        o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = (0, a.Tf)(Date.now(), e),
        u = (0, i.A)(),
        c = (0, r.useCallback)(() => {
            let t = (0, a.Tf)(Date.now(), e);
            (0 === t.days && 0 === t.hours && 0 === t.minutes && 0 === t.seconds) || o || (u(), n?.());
        }, [e, o, u, n]);
    return (0, s.A)(c, o ? null : t), l;
}
