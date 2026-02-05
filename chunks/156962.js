"use strict";
n.d(t, { A: () => a });
var r = n(284009),
    i = n.n(r);
function a(e, t) {
    if ((i()(e.length >= t, "Waveform smaller than samples"), e.length === t)) return e;
    let n = e.length / t,
        r = [],
        a = 0;
    for (; r.length < t; ) {
        let t = Math.round((r.length + 1) * n),
            i = 0,
            s = 0;
        for (let n = a; n < t && n < e.length; n++) (i += e[n]), s++;
        (r[r.length] = i / s), (a = t);
    }
    return r;
}
