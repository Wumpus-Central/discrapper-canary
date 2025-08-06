n.d(t, {
    a: () => l,
    q: () => s
});
var r = n(442837),
    i = n(492435),
    o = n(353926),
    a = n(633289);
function s(e, t) {
    return (0, r.e7)([o.Z, a.Z], () => {
        var n, r;
        return e.system === i.I.LEGACY ? (null == (n = o.Z.getUserExperimentDescriptor(e.name)) ? void 0 : n.bucket) : null == (r = a.Z.getAssignment(e.kind, t, e.name)) ? void 0 : r.variantId;
    });
}
function l(e, t) {
    return (0, r.e7)([o.Z, a.Z], () => (null == e ? null : e.system === i.I.LEGACY ? o.Z.getLoadedUserExperiment(e.name) : a.Z.getServerAssignment(e.kind, t, e.name)));
}
