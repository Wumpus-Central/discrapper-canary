"use strict";
n.d(t, { Ay: () => _, E: () => c, JU: () => u, iM: () => l });
var r = n(64700),
    i = n(927813),
    s = n(905228),
    a = n(790225),
    o = n(346640);
let l = { x: 0, y: 0 },
    u = 3 * i.A.Millis.SECOND,
    c = o.KG[o.$6.DPS];
function d() {
    return { x: 100 * Math.random(), y: 100 * Math.random() };
}
function _(e) {
    let t = (0, r.useRef)(1),
        n = (0, r.useRef)(null),
        [i, o] = (0, r.useState)(d()),
        [_, f] = (0, r.useState)(c),
        p = (0, r.useCallback)(() => (0 === _ ? l : ((t.current = t.current + 1), d())), [_]),
        h = (0, r.useCallback)(() => {
            let r = 1 === _;
            clearInterval(n.current),
                r ? (o(l), e(), t.current === c && (0, a.__)(s.R.FIVE)) : o(p()),
                f(_ - 1),
                r || (clearInterval(n.current), (n.current = setInterval(() => o(p()), u)));
        }, [p, f, _, e]);
    return (
        (0, r.useEffect)(() => ((n.current = setInterval(() => o(p()), u)), () => clearInterval(n.current)), []),
        { targetPosition: i, targetsRemaining: _, handleTargetClick: h }
    );
}
