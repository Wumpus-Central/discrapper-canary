t.d(r, { s: () => o });
var e = t(73800);
function o(n) {
    return (0, e.useMemo)(
        function () {
            return n.hooks.dropTarget();
        },
        [n]
    );
}
