n.d(t, { Z: () => a });
var i = n(740078);
function r(e) {
    var t = new Map(),
        n = new Set(),
        i = [];
    function r(e) {
        n.add(e.name),
            [].concat(e.requires || [], e.requiresIfExists || []).forEach(function (e) {
                if (!n.has(e)) {
                    var i = t.get(e);
                    i && r(i);
                }
            }),
            i.push(e);
    }
    return (
        e.forEach(function (e) {
            t.set(e.name, e);
        }),
        e.forEach(function (e) {
            n.has(e.name) || r(e);
        }),
        i
    );
}
function a(e) {
    var t = r(e);
    return i.xs.reduce(function (e, n) {
        return e.concat(
            t.filter(function (e) {
                return e.phase === n;
            })
        );
    }, []);
}
