"use strict";
n.d(t, { p: () => a });
var r = n(321733),
    i = n(294292),
    s = n(317374);
function a(e) {
    return function (t) {
        var n,
            a,
            o,
            l,
            u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            c = u.clientOffset;
        (n = t), (0, r.V)(Array.isArray(n), "Expected targetIds to be an array.");
        var d = t.slice(0),
            _ = e.getMonitor(),
            f = e.getRegistry();
        return (
            (function (e, t, n) {
                (0, r.V)(t.isDragging(), "Cannot call hover while not dragging."),
                    (0, r.V)(!t.didDrop(), "Cannot call hover after drop.");
                for (var i = 0; i < e.length; i++) {
                    var s = e[i];
                    (0, r.V)(e.lastIndexOf(s) === i, "Expected targetIds to be unique in the passed array.");
                    var a = n.getTarget(s);
                    (0, r.V)(a, "Expected targetIds to be registered.");
                }
            })(d, _, f),
            (function (e, t, n) {
                for (var r = e.length - 1; r >= 0; r--) {
                    var s = e[r],
                        a = t.getTargetType(s);
                    (0, i.k)(a, n) || e.splice(r, 1);
                }
            })(d, f, _.getItemType()),
            (a = d),
            (o = _),
            (l = f),
            a.forEach(function (e) {
                l.getTarget(e).hover(o, e);
            }),
            { type: s.l6, payload: { targetIds: d, clientOffset: c || null } }
        );
    };
}
