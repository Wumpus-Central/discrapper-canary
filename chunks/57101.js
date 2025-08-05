n.d(t, { Z: () => o });
var r = n(392711),
    i = n(897325);
function a(e) {
    let { theme: t, layoutType: n } = e;
    return (0, i._)(t, n);
}
let o = (0, r.memoize)(a, (e) => {
    let { theme: t, layoutType: n } = e;
    return ''.concat(t, ':').concat(n);
});
