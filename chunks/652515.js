r.d(n, {
    C4: function () {
        return s;
    },
    RF: function () {
        return o;
    },
    yV: function () {
        return l;
    }
});
var i = r(352981),
    a = r(732845);
function o(e, n) {
    let { enabled: r } = a.x.useExperiment({ location: n }),
        o = (0, i.y)(e, n);
    return r && o;
}
function s(e, n) {
    let { enabled: r } = a.x.getCurrentConfig({ location: n }),
        o = (0, i.p)(e, n);
    return r && o;
}
function l(e) {
    let { enabled: n } = a.a.useExperiment({ location: e });
    return n;
}
