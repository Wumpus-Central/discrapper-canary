function n(e, t, r) {
    var n = r.getRegistry(),
        i = n.addTarget(e, t);
    return [
        i,
        function () {
            return n.removeTarget(i);
        },
    ];
}
function i(e, t, r) {
    var n = r.getRegistry(),
        i = n.addSource(e, t);
    return [
        i,
        function () {
            return n.removeSource(i);
        },
    ];
}
r.d(t, { V: () => i, l: () => n });
