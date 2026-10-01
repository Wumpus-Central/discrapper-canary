t.d(n, { n: () => r });
let i = new WeakMap();
function r(e) {
    let n = i.get(e);
    return (n || ((n = Object.create(null)), i.set(e, n)), n);
}
