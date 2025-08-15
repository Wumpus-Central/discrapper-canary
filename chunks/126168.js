function r(e, t) {
    if (e.length < 2) return [];
    let n = [],
        r = e[0];
    for (let i = 1; i < e.length; i++) {
        let a = e[i];
        n.push(t(r, a)), (r = a);
    }
    return n;
}
n.d(t, { Z: () => r }), n(539854);
