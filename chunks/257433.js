"use strict";
n.d(t, { Fm: () => l, iN: () => o });
var i = n(17928),
    r = n(102609),
    s = n(736056),
    a = n(710195);
function o(e, t) {
    return (0, i.bG)([s.A, a.A], () =>
        e.system === r.l5.LEGACY
            ? s.A.getUserExperimentDescriptor(e.name)?.bucket
            : a.A.getAssignment(e.kind, t, e.name)?.variantId,
    );
}
function l(e, t) {
    return (0, i.bG)([s.A, a.A], () =>
        (function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [s.A, a.A],
                [i, o] = n;
            return null == e
                ? null
                : e.system === r.l5.LEGACY
                  ? i.getLoadedUserExperiment(e.name)
                  : o.getServerAssignment(e.kind, t, e.name);
        })(e, t, [s.A, a.A]),
    );
}
