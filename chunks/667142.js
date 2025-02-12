n.d(t, {
    Df: () => u,
    S_: () => c,
    V5: () => a,
    VX: () => o,
    ZP: () => h,
    ih: () => s,
    xc: () => d
});
var i = n(972959);
let r = {
        timeToLiveMs: 5000,
        reappearTimeMs: 10000
    },
    l = (0, i.H)(() => r),
    o = 10000,
    a = 20000,
    s = 500,
    d = 1000;
function c(e) {
    l.setState({ timeToLiveMs: e });
}
function u(e) {
    l.setState({ reappearTimeMs: e });
}
let h = l;
