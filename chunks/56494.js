"use strict";
n.d(t, { F: () => l });
var r = n(64700),
    i = n(311907),
    s = n(594061),
    a = n(26909),
    o = n(355097);
function l(e) {
    r.useEffect(() => {
        s.bW.loadIfUncached(o.oD.FRECENCY_AND_FAVORITES_SETTINGS);
    }, []);
    let t = (0, i.bG)([a.Ay], () => a.Ay.getTopCommandsWithoutLoadingLatest());
    return r.useMemo(() => (0, a.RG)(t, e), [t, e]);
}
