n.d(t, { Z: () => a });
var i = n(512722),
    r = n.n(i);
function a(e, t) {
    if ((r()(e.length >= t, 'Waveform smaller than samples'), e.length === t)) return e;
    let n = e.length / t,
        i = [],
        a = 0;
    for (; i.length < t; ) {
        let t = Math.round((i.length + 1) * n),
            r = 0,
            s = 0;
        for (let n = a; n < t && n < e.length; n++) (r += e[n]), s++;
        (i[i.length] = r / s), (a = t);
    }
    return i;
}
