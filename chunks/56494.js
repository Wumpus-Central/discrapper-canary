"use strict";
n.d(t, { F: () => l });
var i = n(64700),
    r = n(17928),
    s = n(594061),
    a = n(26909),
    o = n(355097);
function l(e) {
    i.useEffect(() => {
        s.bW.loadIfUncached(o.oD.FRECENCY_AND_FAVORITES_SETTINGS);
    }, []);
    let t = (0, r.bG)([a.Ay], () => a.Ay.getTopCommandsWithoutLoadingLatest());
    return i.useMemo(() => (0, a.RG)(t, e), [t, e]);
}
