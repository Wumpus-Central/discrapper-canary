n.d(t, { H: () => u });
var r = n(73800),
    i = n(373425),
    o = n(74463),
    a = n(541568);
function u(e) {
    var t = (0, o.N)(),
        n = (0, r.useMemo)(
            function () {
                return new i.Y(t.getBackend());
            },
            [t]
        );
    return (
        (0, a.L)(
            function () {
                return (
                    (n.dropTargetOptions = e || null),
                    n.reconnect(),
                    function () {
                        return n.disconnectDropTarget();
                    }
                );
            },
            [e]
        ),
        n
    );
}
