t.d(n, { Fm: () => s, iN: () => o });
var l = t(17928),
    a = t(102609),
    r = t(736056),
    i = t(710195);
function o(e, n) {
    return (0, l.bG)([r.A, i.A], () =>
        e.system === a.l5.LEGACY
            ? r.A.getUserExperimentDescriptor(e.name)?.bucket
            : i.A.getAssignment(e.kind, n, e.name)?.variantId,
    );
}
function s(e, n) {
    return (0, l.bG)([r.A, i.A], () =>
        (function (e, n) {
            let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [r.A, i.A],
                [l, o] = t;
            return null == e
                ? null
                : e.system === a.l5.LEGACY
                  ? l.getLoadedUserExperiment(e.name)
                  : o.getServerAssignment(e.kind, n, e.name);
        })(e, n, [r.A, i.A]),
    );
}
