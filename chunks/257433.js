"use strict";
n.d(t, { Fm: () => o, iN: () => a });
var i = n(311907),
    l = n(102609),
    s = n(49463),
    r = n(217222);
function a(e, t) {
    return (0, i.bG)([s.A, r.A], () =>
        e.system === l.l5.LEGACY
            ? s.A.getUserExperimentDescriptor(e.name)?.bucket
            : r.A.getAssignment(e.kind, t, e.name)?.variantId,
    );
}
function o(e, t) {
    return (0, i.bG)([s.A, r.A], () =>
        (function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [s.A, r.A],
                [i, a] = n;
            return null == e
                ? null
                : e.system === l.l5.LEGACY
                  ? i.getLoadedUserExperiment(e.name)
                  : a.getServerAssignment(e.kind, t, e.name);
        })(e, t, [s.A, r.A]),
    );
}
