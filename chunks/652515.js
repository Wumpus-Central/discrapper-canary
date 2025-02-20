n.d(t, {
    C4: () => a,
    RF: () => o,
    yV: () => s
});
var r = n(352981),
    i = n(732845);
function o(e, t) {
    let { enabled: n } = i.x.useExperiment({ location: t }),
        o = (0, r.y)(e, t);
    return n && o;
}
function a(e, t) {
    let { enabled: n } = i.x.getCurrentConfig({ location: t }),
        o = (0, r.p)(e, t);
    return n && o;
}
function s(e) {
    let { enabled: t } = i.a.useExperiment({ location: e });
    return t;
}
