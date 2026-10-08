n.d(t, { Ay: () => h, GI: () => d, J5: () => a, g_: () => c, jc: () => o, nj: () => u, nl: () => l });
var i = n(839214);
let r = { timeToLiveMs: 5e3, reappearTimeMs: 1e4 },
    s = (0, i.D)(() => r),
    l = 1e4,
    a = 2e4,
    o = 500,
    d = 1e3;
function u(e) {
    s.setState({ timeToLiveMs: e });
}
function c(e) {
    s.setState({ reappearTimeMs: e });
}
let h = s;
