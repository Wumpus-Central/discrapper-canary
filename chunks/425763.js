e.d(t, { VU: () => u, ef: () => r, ny: () => c });
var d = e(353640),
    i = e(121894);
let o = (0, d.v)((n) => ({ inDndMode: !1 }));
function r(n) {
    (0, i.r)(() => o.setState({ inDndMode: n }));
}
function u() {
    return o((n) => n.inDndMode);
}
function c() {
    return o.getState().inDndMode;
}
