r.d(t, { u: () => i });
var n = r(64700);
function i(e) {
    return (0, n.useMemo)(
        function () {
            return e.hooks.dropTarget();
        },
        [e],
    );
}
