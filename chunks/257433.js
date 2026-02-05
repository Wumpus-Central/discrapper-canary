"use strict";
n.d(t, { Fm: () => u, iN: () => o });
var r = n(311907),
    i = n(102609),
    a = n(49463),
    s = n(217222);
function o(e, t) {
    return (0, r.bG)([a.A, s.A], () =>
        e.system === i.l5.LEGACY
            ? a.A.getUserExperimentDescriptor(e.name)?.bucket
            : s.A.getAssignment(e.kind, t, e.name)?.variantId,
    );
}
function l(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [a.A, s.A],
        [r, o] = n;
    return null == e
        ? null
        : e.system === i.l5.LEGACY
          ? r.getLoadedUserExperiment(e.name)
          : o.getServerAssignment(e.kind, t, e.name);
}
function u(e, t) {
    return (0, r.bG)([a.A, s.A], () => l(e, t, [a.A, s.A]));
}
