n.d(t, { D: () => r, k: () => o }), n(321073);
var a = n(151196),
    i = n(652215);
function s() {
    return {
        colors: Array.from({ length: a.Dp }, () => void 0),
        scales: Array.from({ length: a.Dp }, () => void 0),
        opacities: Array.from({ length: a.Dp }, () => void 0),
    };
}
function l() {
    return { colors: [...a.ji], scales: [...a.eg], opacities: [...a.UH] };
}
function r() {
    return { [i.NJ8.LIGHT]: l(), [i.NJ8.DARK]: l(), [i.NJ8.DARKER]: s(), [i.NJ8.MIDNIGHT]: s() };
}
function o(e, t) {
    let n = [],
        i = [],
        s = [];
    for (let l = 0; l < a.Dp; l++) {
        let r,
            o,
            d,
            c = t;
        for (; null != c; ) {
            let t = e[c];
            if (((r ??= t.colors[l]), (o ??= t.scales[l]), (d ??= t.opacities[l]), null != r && null != o && null != d))
                break;
            c = a.QN[c];
        }
        n.push(r ?? a.ji[l]), i.push(o ?? a.eg[l]), s.push(d ?? a.UH[l]);
    }
    return { colors: n, scales: i, opacities: s };
}
