n.d(t, { Z: () => a });
var r = n(392711),
    i = n(897325);
function o(e) {
    let { theme: t, layoutType: n } = e;
    return (0, i._)(t, n);
}
let a = (0, r.memoize)(o, (e) => {
    let { theme: t, layoutType: n } = e;
    return "".concat(t, ":").concat(n);
});
