r.d(t, { _: () => o, f: () => i });
var n = r(64700);
function i(e) {
    return (0, n.useMemo)(
        function () {
            return e.hooks.dragSource();
        },
        [e],
    );
}
function o(e) {
    return (0, n.useMemo)(
        function () {
            return e.hooks.dragPreview();
        },
        [e],
    );
}
