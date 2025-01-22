r.d(n, {
    F: function () {
        return o;
    }
});
var i = r(573654),
    a = r(964742);
function o(e) {
    return function () {
        var n = e.getMonitor(),
            r = e.getRegistry();
        s(n);
        var i = n.getSourceId();
        return null != i && (r.getSource(i, !0).endDrag(n, i), r.unpinSource()), { type: a.Bs };
    };
}
function s(e) {
    (0, i.k)(e.isDragging(), 'Cannot call endDrag while not dragging.');
}
