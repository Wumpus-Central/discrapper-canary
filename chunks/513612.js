e.d(n, {
    u: () => o,
    y: () => i,
});
var r = e(473749);
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
