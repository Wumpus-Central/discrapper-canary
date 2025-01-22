r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(740078);
function a(e) {
    var n = new Map(),
        r = new Set(),
        i = [];
    function a(e) {
        r.add(e.name),
            [].concat(e.requires || [], e.requiresIfExists || []).forEach(function (e) {
                if (!r.has(e)) {
                    var i = n.get(e);
                    i && a(i);
                }
            }),
            i.push(e);
    }
    return (
        e.forEach(function (e) {
            n.set(e.name, e);
        }),
        e.forEach(function (e) {
            !r.has(e.name) && a(e);
        }),
        i
    );
}
function o(e) {
    var n = a(e);
    return i.xs.reduce(function (e, r) {
        return e.concat(
            n.filter(function (e) {
                return e.phase === r;
            })
        );
    }, []);
}
