n.d(t, { D: () => s, k: () => r }), n(321073);
var a = n(151196),
    i = n(652215);
function l() {
    return {
        colors: Array.from({ length: a.Dp }, () => void 0),
        scales: Array.from({ length: a.Dp }, () => void 0),
        opacities: Array.from({ length: a.Dp }, () => void 0),
    };
}
function s() {
    return {
        [i.NJ8.LIGHT]: l(),
        [i.NJ8.DARK]: { colors: [...a.ji], scales: [...a.eg], opacities: [...a.UH] },
        [i.NJ8.DARKER]: l(),
        [i.NJ8.MIDNIGHT]: l(),
    };
}
function r(e, t) {
    let n = [],
        i = [],
        l = [];
    for (let s = 0; s < a.Dp; s++) {
        let r,
            o,
            d,
            c = t;
        for (; null != c; ) {
            let t = e[c];
            if (((r ??= t.colors[s]), (o ??= t.scales[s]), (d ??= t.opacities[s]), null != r && null != o && null != d))
                break;
            c = a.QN[c];
        }
        n.push(r ?? a.ji[s]), i.push(o ?? a.eg[s]), l.push(d ?? a.UH[s]);
    }
    return { colors: n, scales: i, opacities: l };
}
