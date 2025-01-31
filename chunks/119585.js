function i(e) {
    let t = !1,
        n = [];
    for (let i = 0; i < e.length; i++) {
        let r = e.charAt(i);
        '_' == r ? (t = !0) : /\d/.test(r) ? (n.push(r), (t = !0)) : t ? (n.push(r.toUpperCase()), (t = !1)) : 0 == i ? n.push(r.toLowerCase()) : n.push(r);
    }
    return n.join('');
}
n.d(t, { c: () => i });
