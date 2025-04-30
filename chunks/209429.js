r.d(e, { d: () => a });
var n = r(353386),
    i = r(307988),
    o = r(90620);
function a(...t) {
    let e = { ...t[0] };
    for (let r = 1; r < t.length; r++) {
        let a = t[r];
        for (let t in a) {
            let r = e[t],
                u = a[t];
            'function' == typeof r && 'function' == typeof u && 'o' === t[0] && 'n' === t[1] && t.charCodeAt(2) >= 65 && 90 >= t.charCodeAt(2) ? (e[t] = (0, n.t)(r, u)) : ('className' === t || 'UNSAFE_className' === t) && 'string' == typeof r && 'string' == typeof u ? (e[t] = (0, o.Z)(r, u)) : 'id' === t && r && u ? (e.id = (0, i.ur)(r, u)) : (e[t] = void 0 !== u ? u : r);
        }
    }
    return e;
}
