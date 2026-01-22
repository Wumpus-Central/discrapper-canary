n.d(t, {
    K: () => a,
});
var r = n(321733),
    i = n(317374);

function a(e) {
    return function () {
        var t = e.getMonitor(),
            n = e.getRegistry();
        s(t);
        var r = t.getSourceId();
        return (
            null != r && (n.getSource(r, !0).endDrag(t, r), n.unpinSource()),
            {
                type: i.dU,
            }
        );
    };
}

function s(e) {
    (0, r.V)(e.isDragging(), "Cannot call endDrag while not dragging.");
}
