r.d(n, {
    s: function () {
        return s;
    }
});
var i = r(573654),
    a = r(778010),
    o = r(964742);
function s(e) {
    return function (n) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = r.clientOffset;
        l(n);
        var a = n.slice(0),
            s = e.getMonitor(),
            f = e.getRegistry();
        return (
            u(a, s, f),
            c(a, f, s.getItemType()),
            d(a, s, f),
            {
                type: o.$T,
                payload: {
                    targetIds: a,
                    clientOffset: i || null
                }
            }
        );
    };
}
function l(e) {
    (0, i.k)(Array.isArray(e), 'Expected targetIds to be an array.');
}
function u(e, n, r) {
    (0, i.k)(n.isDragging(), 'Cannot call hover while not dragging.'), (0, i.k)(!n.didDrop(), 'Cannot call hover after drop.');
    for (var a = 0; a < e.length; a++) {
        var o = e[a];
        (0, i.k)(e.lastIndexOf(o) === a, 'Expected targetIds to be unique in the passed array.');
        var s = r.getTarget(o);
        (0, i.k)(s, 'Expected targetIds to be registered.');
    }
}
function c(e, n, r) {
    for (var i = e.length - 1; i >= 0; i--) {
        var o = e[i],
            s = n.getTargetType(o);
        !(0, a.s)(s, r) && e.splice(i, 1);
    }
}
function d(e, n, r) {
    e.forEach(function (e) {
        r.getTarget(e).hover(n, e);
    });
}
