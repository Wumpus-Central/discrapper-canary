a.d(e, {
    $e: () => E,
    aF: () => c,
    lW: () => s,
    nZ: () => i,
    s3: () => u,
    wi: () => l
});
var r = a(899517),
    n = a(833873),
    _ = a(356442),
    o = a(307854);
function i() {
    let t = (0, _.c)();
    return (0, n.G)(t).getCurrentScope();
}
function c() {
    let t = (0, _.c)();
    return (0, n.G)(t).getIsolationScope();
}
function s() {
    return (0, r.Y)('globalScope', () => new o.s());
}
function E(...t) {
    let e = (0, _.c)(),
        a = (0, n.G)(e);
    if (2 === t.length) {
        let [e, r] = t;
        return e ? a.withSetScope(e, r) : a.withScope(r);
    }
    return a.withScope(t[0]);
}
function l(...t) {
    let e = (0, _.c)(),
        a = (0, n.G)(e);
    if (2 === t.length) {
        let [e, r] = t;
        return e ? a.withSetIsolationScope(e, r) : a.withIsolationScope(r);
    }
    return a.withIsolationScope(t[0]);
}
function u() {
    return i().getClient();
}
