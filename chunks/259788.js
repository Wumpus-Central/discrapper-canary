n.d(t, {
    Ay: () => p,
    GI: () => c,
    J5: () => o,
    g_: () => d,
    jc: () => s,
    nj: () => u,
    nl: () => a,
});
var i = n(839214);
let r = {
        timeToLiveMs: 5e3,
        reappearTimeMs: 1e4,
    },
    l = (0, i.D)(() => r),
    a = 1e4,
    o = 2e4,
    s = 500,
    c = 1e3;

function u(e) {
    l.setState({
        timeToLiveMs: e,
    });
}

function d(e) {
    l.setState({
        reappearTimeMs: e,
    });
}
let p = l;
