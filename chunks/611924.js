"use strict";
n.d(t, { P: () => a });
var i = n(64700),
    s = n(311907),
    l = n(49463);
function a(e) {
    let [t, n] = (0, s.yK)([l.A], () => [l.A.getAllUserExperimentDescriptors(), l.A.getGuildExperiments()]);
    i.useEffect(() => {
        e.trigger();
    }, [e, t, n]);
}
