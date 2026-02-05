"use strict";
n.d(t, { A: () => l });
var r = n(64700),
    i = n(417597),
    a = n(594061),
    s = n(796774),
    o = n(209932);
function l() {
    return {
        fetching: (0, i.bG)([o.A], () => o.A.isFetchingAnySounds()),
        maybeFetchData: r.useCallback(() => {
            s.E7(), a.bW.loadIfNecessary();
        }, []),
    };
}
