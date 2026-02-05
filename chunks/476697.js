"use strict";
n.d(t, { A: () => a });
var r = n(874124),
    i = n(753070);
function a(e, t, n) {
    let a = i.yw[e];
    if (null == a) return null;
    for (let i of a) if ((0, r.A)(e, i.resolution, i.fps, t, n)) return [i.resolution, i.fps];
    return null;
}
