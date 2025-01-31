n.d(t, { s: () => s });
var i = n(573654),
    r = n(778010),
    a = n(964742);
function s(e) {
    return function (t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = n.clientOffset;
        o(t);
        var r = t.slice(0),
            s = e.getMonitor(),
            d = e.getRegistry();
        return (
            l(r, s, d),
            u(r, d, s.getItemType()),
            c(r, s, d),
            {
                type: a.$T,
                payload: {
                    targetIds: r,
                    clientOffset: i || null
                }
            }
        );
    };
}
function o(e) {
    (0, i.k)(Array.isArray(e), 'Expected targetIds to be an array.');
}
function l(e, t, n) {
    (0, i.k)(t.isDragging(), 'Cannot call hover while not dragging.'), (0, i.k)(!t.didDrop(), 'Cannot call hover after drop.');
    for (var r = 0; r < e.length; r++) {
        var a = e[r];
        (0, i.k)(e.lastIndexOf(a) === r, 'Expected targetIds to be unique in the passed array.');
        var s = n.getTarget(a);
        (0, i.k)(s, 'Expected targetIds to be registered.');
    }
}
function u(e, t, n) {
    for (var i = e.length - 1; i >= 0; i--) {
        var a = e[i],
            s = t.getTargetType(a);
        (0, r.s)(s, n) || e.splice(i, 1);
    }
}
function c(e, t, n) {
    e.forEach(function (e) {
        n.getTarget(e).hover(t, e);
    });
}
