"use strict";
n.d(t, {
    AT: () => r.AT,
    jF: () => s,
    Ay: () => o,
    rD: () => r.rD,
    vB: () => r.vB,
    Vv: () =>
        function e(t, n, i, s) {
            let { length: a } = i,
                o = s,
                l = n;
            if (0 === a) return 0;
            if (null == o) o = l;
            else if (o === l) return l;
            return (l += t === r.vB.UP ? -1 : 1) < 0 || l >= a
                ? e(t, l < 0 ? a : -1, i, o)
                : i[l].type === r.rD.HEADER
                  ? e(t, l, i, o)
                  : l;
        },
    vH: () => a.A,
});
var i = n(978263),
    r = n(926140);
function s(e) {
    return { type: r.rD.HEADER, record: new r.X9(e), score: 0 };
}
var a = n(989133);
let o = i.A;
