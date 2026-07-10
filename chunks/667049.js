"use strict";
n.d(t, { A: () => l });
var i = n(17928),
    r = n(280450),
    a = n(543572),
    s = n(61881);
function l(e) {
    let t = (0, i.bG)([r.default], () => {
            let t = r.default.getId();
            return null != e && t === e;
        }, [e]),
        n = (0, i.bG)([s.A], () => s.A.getPendingWidgets()),
        l = (0, i.yK)([a.A], () => {
            if (null == e) return [];
            let t = a.A.getUserProfile(e);
            return t?.widgets ?? [];
        }, [e]);
    return t && null !== n ? n : l;
}
