e.d(n, { H: () => u });
var r = e(473749),
    o = e(734540),
    i = e(7128),
    a = e(689023);
function u(t) {
    var n = (0, i.N)(),
        e = (0, r.useMemo)(
            function () {
                return new o.Y(n.getBackend());
            },
            [n],
        );
    return (
        (0, a.L)(
            function () {
                return (
                    (e.dropTargetOptions = t || null),
                    e.reconnect(),
                    function () {
                        return e.disconnectDropTarget();
                    }
                );
            },
            [t],
        ),
        e
    );
}
