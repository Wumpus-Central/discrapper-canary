n.d(t, { Z: () => o });
var r = n(512722),
    i = n.n(r);
function o(e, t) {
    if ((i()(e.length >= t, 'Waveform smaller than samples'), e.length === t)) return e;
    let n = e.length / t,
        r = [],
        o = 0;
    for (; r.length < t; ) {
        let t = Math.round((r.length + 1) * n),
            i = 0,
            a = 0;
        for (let n = o; n < t && n < e.length; n++) (i += e[n]), a++;
        (r[r.length] = i / a), (o = t);
    }
    return r;
}
