n.d(t, { B: () => l }), n(539854), n(388685);
var i = n(658722),
    r = n.n(i);
function l(e, t, n) {
    if ("" === n) return e;
    let i = n.toLowerCase(),
        l = [];
    for (let a of e) {
        let { id: e, names: o } = t(a);
        if (e === n) return [a];
        o.some((e) => r()(i, e.toLowerCase())) && l.push(a);
    }
    return l;
}
