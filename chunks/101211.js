n.d(t, { H: () => u });
var r = n(192379),
    i = n(875256),
    o = n(181034),
    a = n(89540);
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
