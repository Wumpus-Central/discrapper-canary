n.d(t, {
    KU: () => s,
    rm: () => o,
});
var r = n(924251),
    i = n(628227);

function a() {
    let e = (0, i.E)();
    return (0, r.h)(e).getCurrentScope();
}

function o() {
    let e = (0, i.E)();
    return (0, r.h)(e).getIsolationScope();
}

function s() {
    return a().getClient();
}
