n.d(t, { Y: () => u });
var r = n(192379),
    i = n(148843),
    o = n(181034),
    a = n(89540);
function u(e, t) {
    var n = (0, o.N)(),
        u = (0, r.useMemo)(
            function () {
                return new i.x(n.getBackend());
            },
            [n]
        );
    return (
        (0, a.L)(
            function () {
                return (
                    (u.dragSourceOptions = e || null),
                    u.reconnect(),
                    function () {
                        return u.disconnectDragSource();
                    }
                );
            },
            [u, e]
        ),
        (0, a.L)(
            function () {
                return (
                    (u.dragPreviewOptions = t || null),
                    u.reconnect(),
                    function () {
                        return u.disconnectDragPreview();
                    }
                );
            },
            [u, t]
        ),
        u
    );
}
