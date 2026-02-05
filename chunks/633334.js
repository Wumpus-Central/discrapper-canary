n.d(t, { I: () => s }), n(321073);
var i = n(91871),
    l = n.n(i);
function s(e, t, n) {
    if ("" === n) return e;
    let i = n.toLowerCase(),
        s = [];
    for (let a of e) {
        let { id: e, names: r } = t(a);
        if (e === n) return [a];
        r.some((e) => l()(i, e.toLowerCase())) && s.push(a);
    }
    return s;
}
