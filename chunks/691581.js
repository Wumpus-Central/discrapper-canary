"use strict";
n.d(t, { N: () => s });
var r = n(127960),
    i = n(839006);
function s(e, t, n) {
    let s;
    (0, i.V1)(-1 === e.indexOf("-u-"), "Expected locale to not have a Unicode locale extension");
    let a = "-u";
    for (let e of t) a += `-${e}`;
    for (let e of n) {
        let { key: t, value: n } = e;
        (a += `-${t}`), "" !== n && (a += `-${n}`);
    }
    if ("-u" === a) return (0, r.t)(e);
    let o = e.indexOf("-x-");
    return (s = -1 === o ? e + a : e.slice(0, o) + a + e.slice(o)), (0, r.t)(s);
}
