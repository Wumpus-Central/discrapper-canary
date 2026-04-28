"use strict";
n.d(t, { Fm: () => o, iN: () => r });
var l = n(17928),
    i = n(102609),
    s = n(736056),
    a = n(710195);
function r(e, t) {
    return (0, l.bG)([s.A, a.A], () =>
        e.system === i.l5.LEGACY
            ? s.A.getUserExperimentDescriptor(e.name)?.bucket
            : a.A.getAssignment(e.kind, t, e.name)?.variantId,
    );
}
function o(e, t) {
    return (0, l.bG)([s.A, a.A], () =>
        (function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [s.A, a.A],
                [l, r] = n;
            return null == e
                ? null
                : e.system === i.l5.LEGACY
                  ? l.getLoadedUserExperiment(e.name)
                  : r.getServerAssignment(e.kind, t, e.name);
        })(e, t, [s.A, a.A]),
    );
}
