t.d(n, { AG: () => i, my: () => a, uJ: () => r });
let l = RegExp("^dev://devtools/([-\\w._0-9]+)(/([-\\w._0-9]+))?$", "i");
function a(e) {
    return l.test(e);
}
function i(e) {
    let n = e.match(l);
    return null == n || null == n[1] ? null : n[1];
}
function r(e) {
    let n = e.match(l);
    return null == n ? null : (n[3] ?? null);
}
