t.d(n, { Fm: () => s, iN: () => o });
var l = t(17928),
    a = t(102609),
    i = t(736056),
    r = t(710195);
function o(e, n) {
    return (0, l.bG)([i.A, r.A], () =>
        e.system === a.l5.LEGACY
            ? i.A.getUserExperimentDescriptor(e.name)?.bucket
            : r.A.getAssignment(e.kind, n, e.name)?.variantId,
    );
}
function s(e, n) {
    return (0, l.bG)([i.A, r.A], () =>
        (function (e, n) {
            let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [i.A, r.A],
                [l, o] = t;
            return null == e
                ? null
                : e.system === a.l5.LEGACY
                  ? l.getLoadedUserExperiment(e.name)
                  : o.getServerAssignment(e.kind, n, e.name);
        })(e, n, [i.A, r.A]),
    );
}
