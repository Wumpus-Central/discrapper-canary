t.d(r, { H: () => a });
var e = t(73800),
    o = t(373425),
    i = t(74463),
    u = t(541568);
function a(n) {
    var r = (0, i.N)(),
        t = (0, e.useMemo)(
            function () {
                return new o.Y(r.getBackend());
            },
            [r],
        );
    return (
        (0, u.L)(
            function () {
                return (
                    (t.dropTargetOptions = n || null),
                    t.reconnect(),
                    function () {
                        return t.disconnectDropTarget();
                    }
                );
            },
            [n],
        ),
        t
    );
}
