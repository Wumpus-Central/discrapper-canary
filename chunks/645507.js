"use strict";
n.d(t, { A: () => a });
var i = n(403918),
    r = n(375708);
function a(e) {
    let t = null != e && e.size > 0 ? i.P2.filter((t) => !e.has(t.value)) : i.P2;
    if (0 === t.length) return { value: i.W_.ADD_STATUS, label: () => r.intl.string(r.t.Vq4UmS) };
    let n = Math.floor(Math.random() * t.length);
    return t[n];
}
