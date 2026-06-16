"use strict";
n.d(t, { A: () => o });
var i = n(64700),
    r = n(17928),
    s = n(753390),
    a = n(166403);
function o() {
    let e = (0, r.bG)([a.A], () => a.A.hasFetchedSubscriptions());
    return (
        i.useEffect(() => {
            e || (0, s.hP)();
        }, [e]),
        e
    );
}
