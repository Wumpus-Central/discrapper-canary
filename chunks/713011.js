n.d(t, { F: () => a });
var r = n(573654),
    i = n(964742);
function a(e) {
    return function () {
        var t = e.getMonitor(),
            n = e.getRegistry();
        o(t);
        var r = t.getSourceId();
        return null != r && (n.getSource(r, !0).endDrag(t, r), n.unpinSource()), { type: i.Bs };
    };
}
function o(e) {
    (0, r.k)(e.isDragging(), 'Cannot call endDrag while not dragging.');
}
