t.d(r, {
    u: () => o,
    y: () => i
});
var e = t(73800);
function o(n) {
    return (0, e.useMemo)(
        function () {
            return n.hooks.dragSource();
        },
        [n]
    );
}
function i(n) {
    return (0, e.useMemo)(
        function () {
            return n.hooks.dragPreview();
        },
        [n]
    );
}
