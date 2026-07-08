function a(e, n, t) {
    var a = t.getRegistry(),
        r = a.addTarget(e, n);
    return [
        r,
        function () {
            return a.removeTarget(r);
        },
    ];
}
function r(e, n, t) {
    var a = t.getRegistry(),
        r = a.addSource(e, n);
    return [
        r,
        function () {
            return a.removeSource(r);
        },
    ];
}
t.d(n, { V: () => r, l: () => a });
