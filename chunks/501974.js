t.d(e, { n: () => r });
let a = new WeakMap();
function r(n) {
    let e = a.get(n);
    return e || ((e = Object.create(null)), a.set(n, e)), e;
}
