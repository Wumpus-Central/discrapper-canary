n.d(t, { s: () => a });
var r = n(573654),
    i = n(778010),
    o = n(964742);
function a(e) {
    return function (t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            r = n.clientOffset;
        s(t);
        var i = t.slice(0),
            a = e.getMonitor(),
            d = e.getRegistry();
        return (
            l(i, a, d),
            c(i, d, a.getItemType()),
            u(i, a, d),
            {
                type: o.$T,
                payload: {
                    targetIds: i,
                    clientOffset: r || null
                }
            }
        );
    };
}
function s(e) {
    (0, r.k)(Array.isArray(e), 'Expected targetIds to be an array.');
}
function l(e, t, n) {
    (0, r.k)(t.isDragging(), 'Cannot call hover while not dragging.'), (0, r.k)(!t.didDrop(), 'Cannot call hover after drop.');
    for (var i = 0; i < e.length; i++) {
        var o = e[i];
        (0, r.k)(e.lastIndexOf(o) === i, 'Expected targetIds to be unique in the passed array.');
        var a = n.getTarget(o);
        (0, r.k)(a, 'Expected targetIds to be registered.');
    }
}
function c(e, t, n) {
    for (var r = e.length - 1; r >= 0; r--) {
        var o = e[r],
            a = t.getTargetType(o);
        (0, i.s)(a, n) || e.splice(r, 1);
    }
}
function u(e, t, n) {
    e.forEach(function (e) {
        n.getTarget(e).hover(t, e);
    });
}
