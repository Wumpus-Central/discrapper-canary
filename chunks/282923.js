n.d(t, { B: () => a }), n(653041), n(47120);
var i = n(658722),
    l = n.n(i);
function a(e, t, n) {
    if ('' === n) return e;
    let i = n.toLowerCase(),
        a = [];
    for (let r of e) {
        let { id: e, names: s } = t(r);
        if (e === n) return [r];
        s.some((e) => l()(i, e.toLowerCase())) && a.push(r);
    }
    return a;
}
