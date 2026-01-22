n.d(t, {
    Ay: () => c,
    E8: () => o,
}),
    n(638769),
    n(321073),
    n(264879),
    n(896048);
var r = n(735438),
    i = n.n(r);
let a = new (n(626584).A)("DragAndDropUtils");

function s(e) {
    let { oldOrdering: t, newOrdering: n, idGetter: r, existingPositionGetter: i, ascending: s = !0 } = e,
        o = n.length;
    if (t.length !== o) return a.warn("Arrays are not of the same length!", t, n), [];
    let l = t.map(r).sort().join(":"),
        c = n.map(r).sort().join(":");
    if (l !== c) return a.warn("Object IDs in the old ordering and the new ordering are not the same.", l, c), [];
    let u = {};
    for (let e = 0; e < o; e++) u[r(t[e])] = i(t[e]);
    let d = [];
    for (let e = 0; e < o; e++) {
        let t = r(n[e]),
            a = u[t],
            l = s ? e : o - 1 - e;
        (a !== l || i(n[e]) !== l) &&
            d.push({
                id: t,
                position: l,
            });
    }
    return s || d.reverse(), d;
}

function o(e, t, n) {
    let r = e[t],
        i = [...e];
    return i.splice(t, 1), i.splice(n, 0, r), i;
}

function l(e) {
    let {
        objectArray: t,
        fromPosition: n,
        toPosition: r,
        idGetter: a,
        existingPositionGetter: l,
        ascending: c = !0,
    } = e;
    Array.isArray(t) || (t = i().values(t));
    let u = o(t, n, r);
    return s({
        oldOrdering: t,
        newOrdering: u,
        idGetter: a,
        existingPositionGetter: l,
        ascending: c,
    });
}
let c = {
    moveItemFromTo: o,
    calculatePositionDeltas: s,
    getPositionUpdates: l,
};
