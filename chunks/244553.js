"use strict";
n.d(t, { p: () => s });
var r = n(321733),
    i = n(294292),
    a = n(317374);
function s(e) {
    return function (t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            r = n.clientOffset;
        o(t);
        var i = t.slice(0),
            s = e.getMonitor(),
            d = e.getRegistry();
        return (
            l(i, s, d),
            u(i, d, s.getItemType()),
            c(i, s, d),
            { type: a.l6, payload: { targetIds: i, clientOffset: r || null } }
        );
    };
}
function o(e) {
    (0, r.V)(Array.isArray(e), "Expected targetIds to be an array.");
}
function l(e, t, n) {
    (0, r.V)(t.isDragging(), "Cannot call hover while not dragging."),
        (0, r.V)(!t.didDrop(), "Cannot call hover after drop.");
    for (var i = 0; i < e.length; i++) {
        var a = e[i];
        (0, r.V)(e.lastIndexOf(a) === i, "Expected targetIds to be unique in the passed array.");
        var s = n.getTarget(a);
        (0, r.V)(s, "Expected targetIds to be registered.");
    }
}
function u(e, t, n) {
    for (var r = e.length - 1; r >= 0; r--) {
        var a = e[r],
            s = t.getTargetType(a);
        (0, i.k)(s, n) || e.splice(r, 1);
    }
}
function c(e, t, n) {
    e.forEach(function (e) {
        n.getTarget(e).hover(t, e);
    });
}
