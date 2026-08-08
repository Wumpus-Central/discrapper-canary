"use strict";
n.d(t, { k: () => l });
var i = n(582128),
    r = n(17928),
    a = n(594061),
    s = n(617617);
function l() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return (
        i.useEffect(() => {
            e && a.bW.loadIfNecessary();
        }, [e]),
        (0, r.bG)([s.A], () => s.A.frecencyWithoutFetchingLatest)
    );
}
