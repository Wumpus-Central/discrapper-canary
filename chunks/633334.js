n.d(t, {
    I: () => l,
}),
    n(321073),
    n(896048);
var i = n(91871),
    r = n.n(i);

function l(e, t, n) {
    if ("" === n) return e;
    let i = n.toLowerCase(),
        l = [];
    for (let a of e) {
        let { id: e, names: s } = t(a);
        if (e === n) return [a];
        s.some((e) => r()(i, e.toLowerCase())) && l.push(a);
    }
    return l;
}
