n.d(t, {
    C4: () => o,
    RF: () => a,
    yV: () => s
});
var r = n(352981),
    i = n(732845);
function a(e, t) {
    let { enabled: n } = i.x.useExperiment({ location: t }),
        a = (0, r.y)(e, t);
    return n && a;
}
function o(e, t) {
    let { enabled: n } = i.x.getCurrentConfig({ location: t }),
        a = (0, r.p)(e, t);
    return n && a;
}
function s(e) {
    let { enabled: t } = i.a.useExperiment({ location: e });
    return t;
}
