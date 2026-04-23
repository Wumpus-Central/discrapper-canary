"use strict";
n.d(t, { A: () => o });
var i = n(64700),
    r = n(27867),
    s = n(58703),
    a = n(396583);
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3,
        n = arguments.length > 2 ? arguments[2] : void 0,
        o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = (0, s.Tf)(Date.now(), e),
        d = (0, r.A)(),
        _ = (0, i.useCallback)(() => {
            let t = (0, s.Tf)(Date.now(), e);
            (0 === t.days && 0 === t.hours && 0 === t.minutes && 0 === t.seconds) || o || (d(), n?.());
        }, [e, o, d, n]);
    return (0, a.A)(_, o ? null : t), l;
}
