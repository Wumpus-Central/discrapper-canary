a.d(t, { D: () => s, k: () => r }), a(321073);
var n = a(151196),
    l = a(652215);
function i() {
    return {
        colors: Array.from({ length: n.Dp }, () => void 0),
        scales: Array.from({ length: n.Dp }, () => void 0),
        opacities: Array.from({ length: n.Dp }, () => void 0),
    };
}
function s() {
    return {
        [l.NJ8.LIGHT]: i(),
        [l.NJ8.DARK]: { colors: [...n.ji], scales: [...n.eg], opacities: [...n.UH] },
        [l.NJ8.DARKER]: i(),
        [l.NJ8.MIDNIGHT]: i(),
    };
}
function r(e, t) {
    let a = [],
        l = [],
        i = [];
    for (let s = 0; s < n.Dp; s++) {
        let r,
            o,
            d,
            c = t;
        for (; null != c; ) {
            let t = e[c];
            if (((r ??= t.colors[s]), (o ??= t.scales[s]), (d ??= t.opacities[s]), null != r && null != o && null != d))
                break;
            c = n.QN[c];
        }
        a.push(r ?? n.ji[s]), l.push(o ?? n.eg[s]), i.push(d ?? n.UH[s]);
    }
    return { colors: a, scales: l, opacities: i };
}
