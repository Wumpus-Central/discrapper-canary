t.d(n, { n: () => r });
let a = new WeakMap();
function r(e) {
    let n = a.get(e);
    return n || ((n = Object.create(null)), a.set(e, n)), n;
}
