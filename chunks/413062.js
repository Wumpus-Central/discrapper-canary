n.d(t, { H: () => u });
var r = n(647438),
    i = n(892385),
    o = n(520062),
    a = n(43591);
function u(e) {
    var t = (0, o.N)(),
        n = (0, r.useMemo)(
            function () {
                return new i.Y(t.getBackend());
            },
            [t],
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
            [e],
        ),
        n
    );
}
