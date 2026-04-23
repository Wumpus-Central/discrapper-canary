"use strict";
n.d(t, { K: () => s });
var r = n(321733),
    i = n(317374);
function s(e) {
    return function () {
        var t,
            n = e.getMonitor(),
            s = e.getRegistry();
        (t = n), (0, r.V)(t.isDragging(), "Cannot call endDrag while not dragging.");
        var a = n.getSourceId();
        return null != a && (s.getSource(a, !0).endDrag(n, a), s.unpinSource()), { type: i.dU };
    };
}
