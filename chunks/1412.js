e.d(n, { Y: () => u });
var r = e(647438),
    o = e(344669),
    i = e(338972),
    a = e(219384);
function u(t, n) {
    var e = (0, i.N)(),
        u = (0, r.useMemo)(
            function () {
                return new o.x(e.getBackend());
            },
            [e],
        );
    return (
        (0, a.L)(
            function () {
                return (
                    (u.dragSourceOptions = t || null),
                    u.reconnect(),
                    function () {
                        return u.disconnectDragSource();
                    }
                );
            },
            [u, t],
        ),
        (0, a.L)(
            function () {
                return (
                    (u.dragPreviewOptions = n || null),
                    u.reconnect(),
                    function () {
                        return u.disconnectDragPreview();
                    }
                );
            },
            [u, n],
        ),
        u
    );
}
