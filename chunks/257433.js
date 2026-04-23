"use strict";
n.d(t, { Fm: () => l, iN: () => o });
var r = n(311907),
    i = n(102609),
    s = n(49463),
    a = n(217222);
function o(e, t) {
    return (0, r.bG)([s.A, a.A], () =>
        e.system === i.l5.LEGACY
            ? s.A.getUserExperimentDescriptor(e.name)?.bucket
            : a.A.getAssignment(e.kind, t, e.name)?.variantId,
    );
}
function l(e, t) {
    return (0, r.bG)([s.A, a.A], () =>
        (function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [s.A, a.A],
                [r, o] = n;
            return null == e
                ? null
                : e.system === i.l5.LEGACY
                  ? r.getLoadedUserExperiment(e.name)
                  : o.getServerAssignment(e.kind, t, e.name);
        })(e, t, [s.A, a.A]),
    );
}
