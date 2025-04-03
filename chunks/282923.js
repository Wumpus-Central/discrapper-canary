n.d(t, { B: () => l }), n(653041), n(47120);
var r = n(658722),
    i = n.n(r);
function l(e, t, n) {
    if ('' === n) return e;
    let r = n.toLowerCase(),
        l = [];
    for (let o of e) {
        let { id: e, names: a } = t(o);
        if (e === n) return [o];
        a.some((e) => i()(r, e.toLowerCase())) && l.push(o);
    }
    return l;
}
