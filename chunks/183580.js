t.d(e, { q: () => r });
let a = new WeakMap();
function r(n, e) {
    let t = a.get(n);
    t || ((t = new Set(n)), a.set(n, t));
    let r = e;
    for (;;) {
        if (t.has(r)) return r;
        let n = r.lastIndexOf("-");
        if (!~n) return;
        n >= 2 && "-" === r[n - 2] && (n -= 2), (r = r.slice(0, n));
    }
}
