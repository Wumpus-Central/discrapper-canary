r.d(t, { D: () => u });
var n = r(64700),
    i = r(848575),
    o = r(190334),
    a = r(218436);
function u(e) {
    var t = (0, o.u)(),
        r = (0, n.useMemo)(
            function () {
                return new i.P(t.getBackend());
            },
            [t],
        );
    return (
        (0, a.E)(
            function () {
                return (
                    (r.dropTargetOptions = e || null),
                    r.reconnect(),
                    function () {
                        return r.disconnectDropTarget();
                    }
                );
            },
            [e],
        ),
        r
    );
}
