t.d(e, { N: () => i });
var a = t(127960),
    r = t(839006);
function i(n, e, t) {
    let i;
    (0, r.V1)(-1 === n.indexOf("-u-"), "Expected locale to not have a Unicode locale extension");
    let s = "-u";
    for (let n of e) s += `-${n}`;
    for (let n of t) {
        let { key: e, value: t } = n;
        (s += `-${e}`), "" !== t && (s += `-${t}`);
    }
    if ("-u" === s) return (0, a.t)(n);
    let u = n.indexOf("-x-");
    return (i = -1 === u ? n + s : n.slice(0, u) + s + n.slice(u)), (0, a.t)(i);
}
