e.d(n, {
    u: () => o,
    y: () => i,
});
var r = e(647438);
function o(t) {
    return (0, r.useMemo)(
        function () {
            return t.hooks.dragSource();
        },
        [t],
    );
}
function i(t) {
    return (0, r.useMemo)(
        function () {
            return t.hooks.dragPreview();
        },
        [t],
    );
}
