"use strict";
n.d(t, { P: () => s });
var i = n(64700),
    r = n(17928),
    a = n(736056);
function s(e) {
    let [t, n] = (0, r.yK)([a.A], () => [a.A.getAllUserExperimentDescriptors(), a.A.getGuildExperiments()]);
    i.useEffect(() => {
        e.trigger();
    }, [e, t, n]);
}
