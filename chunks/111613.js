"use strict";
n.d(t, { Ay: () => l, E8: () => o }), n(321073);
var r = n(735438),
    i = n.n(r);
let s = new (n(626584).A)("DragAndDropUtils");
function a(e) {
    let { oldOrdering: t, newOrdering: n, idGetter: r, existingPositionGetter: i, ascending: a = !0 } = e,
        o = n.length;
    if (t.length !== o) return s.warn("Arrays are not of the same length!", t, n), [];
    let l = t.map(r).sort().join(":"),
        u = n.map(r).sort().join(":");
    if (l !== u) return s.warn("Object IDs in the old ordering and the new ordering are not the same.", l, u), [];
    let d = {};
    for (let e = 0; e < o; e++) d[r(t[e])] = i(t[e]);
    let c = [];
    for (let e = 0; e < o; e++) {
        let t = r(n[e]),
            s = d[t],
            l = a ? e : o - 1 - e;
        (s !== l || i(n[e]) !== l) && c.push({ id: t, position: l });
    }
    return a || c.reverse(), c;
}
function o(e, t, n) {
    let r = e[t],
        i = [...e];
    return i.splice(t, 1), i.splice(n, 0, r), i;
}
let l = {
    moveItemFromTo: o,
    calculatePositionDeltas: a,
    getPositionUpdates: function (e) {
        let {
            objectArray: t,
            fromPosition: n,
            toPosition: r,
            idGetter: s,
            existingPositionGetter: l,
            ascending: u = !0,
        } = e;
        Array.isArray(t) || (t = i().values(t));
        let d = o(t, n, r);
        return a({ oldOrdering: t, newOrdering: d, idGetter: s, existingPositionGetter: l, ascending: u });
    },
};
