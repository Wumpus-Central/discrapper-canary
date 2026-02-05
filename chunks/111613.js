"use strict";
n.d(t, { Ay: () => u, E8: () => o }), n(321073);
var r = n(735438),
    i = n.n(r);
let a = new (n(626584).A)("DragAndDropUtils");
function s(e) {
    let { oldOrdering: t, newOrdering: n, idGetter: r, existingPositionGetter: i, ascending: s = !0 } = e,
        o = n.length;
    if (t.length !== o) return a.warn("Arrays are not of the same length!", t, n), [];
    let l = t.map(r).sort().join(":"),
        u = n.map(r).sort().join(":");
    if (l !== u) return a.warn("Object IDs in the old ordering and the new ordering are not the same.", l, u), [];
    let c = {};
    for (let e = 0; e < o; e++) c[r(t[e])] = i(t[e]);
    let d = [];
    for (let e = 0; e < o; e++) {
        let t = r(n[e]),
            a = c[t],
            l = s ? e : o - 1 - e;
        (a !== l || i(n[e]) !== l) && d.push({ id: t, position: l });
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
        ascending: u = !0,
    } = e;
    Array.isArray(t) || (t = i().values(t));
    let c = o(t, n, r);
    return s({ oldOrdering: t, newOrdering: c, idGetter: a, existingPositionGetter: l, ascending: u });
}
let u = { moveItemFromTo: o, calculatePositionDeltas: s, getPositionUpdates: l };
