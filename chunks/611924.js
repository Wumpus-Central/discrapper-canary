"use strict";
n.d(t, { P: () => a });
var i = n(64700),
    r = n(17928),
    s = n(736056);
function a(e) {
    let [t, n] = (0, r.yK)([s.A], () => [s.A.getAllUserExperimentDescriptors(), s.A.getGuildExperiments()]);
    i.useEffect(() => {
        e.trigger();
    }, [e, t, n]);
}
