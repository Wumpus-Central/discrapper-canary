n.d(t, { Fm: () => o, iN: () => a });
var l = n(17928),
    i = n(102609),
    s = n(736056),
    r = n(710195);
function a(e, t) {
    return (0, l.bG)([s.A, r.A], () =>
        e.system === i.l5.LEGACY
            ? s.A.getUserExperimentDescriptor(e.name)?.bucket
            : r.A.getAssignment(e.kind, t, e.name)?.variantId,
    );
}
function o(e, t) {
    return (0, l.bG)([s.A, r.A], () =>
        (function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [s.A, r.A],
                [l, a] = n;
            return null == e
                ? null
                : e.system === i.l5.LEGACY
                  ? l.getLoadedUserExperiment(e.name)
                  : a.getServerAssignment(e.kind, t, e.name);
        })(e, t, [s.A, r.A]),
    );
}
