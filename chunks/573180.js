e.d(n, { Y: () => u });
var r = e(473749),
    o = e(305765),
    i = e(7128),
    a = e(689023);
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
