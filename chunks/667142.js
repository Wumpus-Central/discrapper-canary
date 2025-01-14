n.d(t, {
    Df: function () {
        return d;
    },
    S_: function () {
        return u;
    },
    V5: function () {
        return a;
    },
    VX: function () {
        return o;
    },
    ih: function () {
        return s;
    },
    xc: function () {
        return c;
    }
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
    c = 1000;
function u(e) {
    r.setState({ timeToLiveMs: e });
}
function d(e) {
    r.setState({ reappearTimeMs: e });
}
t.ZP = r;
