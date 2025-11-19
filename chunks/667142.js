n.d(t, {
    Df: () => d,
    S_: () => u,
    V5: () => a,
    VX: () => o,
    ZP: () => h,
    ih: () => s,
    xc: () => c,
});
var i = n(972959);
let r = {
        timeToLiveMs: 5000,
        reappearTimeMs: 10000,
    },
    l = (0, i.H)(() => r),
    o = 10000,
    a = 20000,
    s = 500,
    c = 1000;
function u(e) {
    l.setState({ timeToLiveMs: e });
}
function d(e) {
    l.setState({ reappearTimeMs: e });
}
let h = l;
