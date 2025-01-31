n.d(t, {
    Df: () => u,
    S_: () => d,
    V5: () => l,
    VX: () => a,
    ZP: () => h,
    ih: () => s,
    xc: () => c
});
var i = n(972959);
let r = {
        timeToLiveMs: 5000,
        reappearTimeMs: 10000
    },
    o = (0, i.H)(() => r),
    a = 10000,
    l = 20000,
    s = 500,
    c = 1000;
function d(e) {
    o.setState({ timeToLiveMs: e });
}
function u(e) {
    o.setState({ reappearTimeMs: e });
}
let h = o;
