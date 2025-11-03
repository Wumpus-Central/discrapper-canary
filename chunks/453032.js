n.d(t, {
    aN: () => c,
    qD: () => s,
}),
    n(388685);
var r = n(442837),
    i = n(492435),
    a = n(353926),
    o = n(633289);
function s(e, t) {
    return (0, r.e7)([a.Z, o.Z], () => {
        var n, r;
        return e.system === i.I.LEGACY
            ? null == (n = a.Z.getUserExperimentDescriptor(e.name))
                ? void 0
                : n.bucket
            : null == (r = o.Z.getAssignment(e.kind, t, e.name))
              ? void 0
              : r.variantId;
    });
}
function l(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [a.Z, o.Z],
        [r, s] = n;
    return null == e
        ? null
        : e.system === i.I.LEGACY
          ? r.getLoadedUserExperiment(e.name)
          : s.getServerAssignment(e.kind, t, e.name);
}
function c(e, t) {
    return (0, r.e7)([a.Z, o.Z], () => l(e, t, [a.Z, o.Z]));
}
