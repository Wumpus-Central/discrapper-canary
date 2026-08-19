"use strict";
n.d(t, { Ay: () => o, E8: () => l }), n(321073);
var i = n(435558),
    r = n.n(i);
let a = new (n(626584).A)("DragAndDropUtils");
function s(e) {
    let { oldOrdering: t, newOrdering: n, idGetter: i, existingPositionGetter: r, ascending: s = !0 } = e,
        l = n.length;
    if (t.length !== l) return a.warn("Arrays are not of the same length!", t, n), [];
    let o = t.map(i).sort().join(":"),
        d = n.map(i).sort().join(":");
    if (o !== d) return a.warn("Object IDs in the old ordering and the new ordering are not the same.", o, d), [];
    let c = {};
    for (let e = 0; e < l; e++) c[i(t[e])] = r(t[e]);
    let u = [];
    for (let e = 0; e < l; e++) {
        let t = i(n[e]),
            a = c[t],
            o = s ? e : l - 1 - e;
        (a !== o || r(n[e]) !== o) && u.push({ id: t, position: o });
    }
    return s || u.reverse(), u;
}
function l(e, t, n) {
    let i = e[t],
        r = [...e];
    return r.splice(t, 1), r.splice(n, 0, i), r;
}
let o = {
    moveItemFromTo: l,
    calculatePositionDeltas: s,
    getPositionUpdates: function (e) {
        let {
            objectArray: t,
            fromPosition: n,
            toPosition: i,
            idGetter: a,
            existingPositionGetter: o,
            ascending: d = !0,
        } = e;
        Array.isArray(t) || (t = r().values(t));
        let c = l(t, n, i);
        return s({ oldOrdering: t, newOrdering: c, idGetter: a, existingPositionGetter: o, ascending: d });
    },
};
