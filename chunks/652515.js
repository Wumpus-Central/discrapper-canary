n.d(t, {
    C4: () => s,
    RF: () => a,
    yV: () => o
});
var i = n(352981),
    r = n(732845);
function a(e, t) {
    let { enabled: n } = r.x.useExperiment({ location: t }),
        a = (0, i.y)(e, t);
    return n && a;
}
function s(e, t) {
    let { enabled: n } = r.x.getCurrentConfig({ location: t }),
        a = (0, i.p)(e, t);
    return n && a;
}
function o(e) {
    let { enabled: t } = r.a.useExperiment({ location: e });
    return t;
}
