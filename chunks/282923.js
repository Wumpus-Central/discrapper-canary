(n.d(t, { B: () => l }), n(539854), n(388685));
var i = n(658722),
    r = n.n(i);
function l(e, t, n) {
    if ('' === n) return e;
    let i = n.toLowerCase(),
        l = [];
    for (let o of e) {
        let { id: e, names: a } = t(o);
        if (e === n) return [o];
        a.some((e) => r()(i, e.toLowerCase())) && l.push(o);
    }
    return l;
}
