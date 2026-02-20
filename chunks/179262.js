"use strict";
a.d(t, { A: () => i });
var l = a(64700),
    r = a(311907),
    n = a(602823),
    s = a(16667);
let i = (e) => {
    let [t, a, i] = (0, r.yK)([s.A], () => [s.A.getCollection(e), s.A.isFetching(e), s.A.getApiError(e)]),
        o = null == t && !a && null == i;
    return (
        (0, l.useEffect)(() => {
            o && (0, n.y)(e);
        }, [o, e]),
        { collection: t, isFetching: a, apiError: i }
    );
};
