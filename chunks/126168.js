function i(e, t) {
    if (e.length < 2) return [];
    let n = [],
        i = e[0];
    for (let r = 1; r < e.length; r++) {
        let a = e[r];
        n.push(t(i, a)), (i = a);
    }
    return n;
}
n.d(t, { Z: () => i }), n(653041);
