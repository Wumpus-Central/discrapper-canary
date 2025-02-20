n.d(t, { Z: () => o });
var r = n(740078);
function i(e) {
    var t = new Map(),
        n = new Set(),
        r = [];
    function i(e) {
        n.add(e.name),
            [].concat(e.requires || [], e.requiresIfExists || []).forEach(function (e) {
                if (!n.has(e)) {
                    var r = t.get(e);
                    r && i(r);
                }
            }),
            r.push(e);
    }
    return (
        e.forEach(function (e) {
            t.set(e.name, e);
        }),
        e.forEach(function (e) {
            n.has(e.name) || i(e);
        }),
        r
    );
}
function o(e) {
    var t = i(e);
    return r.xs.reduce(function (e, n) {
        return e.concat(
            t.filter(function (e) {
                return e.phase === n;
            })
        );
    }, []);
}
