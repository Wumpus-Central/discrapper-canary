t.d(n, { q: () => r });
let a = new WeakMap();
function r(e, n) {
    let t = a.get(e);
    t || ((t = new Set(e)), a.set(e, t));
    let r = n;
    for (;;) {
        if (t.has(r)) return r;
        let e = r.lastIndexOf("-");
        if (!~e) return;
        e >= 2 && "-" === r[e - 2] && (e -= 2), (r = r.slice(0, e));
    }
}
