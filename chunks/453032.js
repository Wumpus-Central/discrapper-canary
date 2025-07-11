n.d(t, {
    a: () => l,
    q: () => s
});
var r = n(442837),
    i = n(492435),
    a = n(353926),
    o = n(633289);
function s(e, t) {
    return (0, r.e7)([a.Z, o.Z], () => {
        var n, r;
        return e.system === i.I.LEGACY ? (null == (n = a.Z.getUserExperimentDescriptor(e.name)) ? void 0 : n.bucket) : null == (r = o.Z.getAssignment(e.kind, t, e.name)) ? void 0 : r.variantId;
    });
}
function l(e, t) {
    return (0, r.e7)([a.Z, o.Z], () => (null == e ? null : e.system === i.I.LEGACY ? a.Z.getLoadedUserExperiment(e.name) : o.Z.getServerAssignment(e.kind, t, e.name)));
}
