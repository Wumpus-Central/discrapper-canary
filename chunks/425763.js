n.d(t, { VU: () => l, ef: () => s, ny: () => o });
var i = n(353640),
    a = n(121894);
let r = (0, i.v)((e) => ({ inDndMode: !1 }));
function s(e) {
    (0, a.r)(() => r.setState({ inDndMode: e }));
}
function l() {
    return r((e) => e.inDndMode);
}
function o() {
    return r.getState().inDndMode;
}
