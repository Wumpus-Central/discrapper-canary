"use strict";
n.d(t, { A: () => o });
var r = n(64700),
    i = n(311907),
    s = n(323082),
    a = n(166403);
function o() {
    let e = (0, i.bG)([a.A], () => a.A.hasFetchedSubscriptions());
    return (
        r.useEffect(() => {
            e || (0, s.hP)();
        }, [e]),
        e
    );
}
