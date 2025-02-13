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
let l = {
        timeToLiveMs: 5000,
        reappearTimeMs: 10000
    },
    r = (0, i.H)(() => l),
    o = 10000,
    a = 20000,
    s = 500,
    d = 1000;
function c(e) {
    r.setState({ timeToLiveMs: e });
}
function u(e) {
    r.setState({ reappearTimeMs: e });
}
let h = r;
