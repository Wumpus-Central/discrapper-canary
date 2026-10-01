t.d(n, { AG: () => a, my: () => r, uJ: () => i });
let l = RegExp("^dev://devtools/([-\\w._0-9]+)(/([-\\w._0-9]+))?$", "i");
function r(e) {
    return l.test(e);
}
function a(e) {
    let n = e.match(l);
    return null == n || null == n[1] ? null : n[1];
}
function i(e) {
    let n = e.match(l);
    return null == n ? null : (n[3] ?? null);
}
