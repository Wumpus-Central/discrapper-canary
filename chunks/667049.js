"use strict";
n.d(t, { A: () => o });
var i = n(17928),
    r = n(495544),
    s = n(841595),
    a = n(61881);
function o(e) {
    let t = (0, i.bG)([r.default], () => {
            let t = r.default.getId();
            return null != e && t === e;
        }, [e]),
        n = (0, i.bG)([a.A], () => a.A.getPendingWidgets()),
        o = (0, i.yK)([s.A], () => {
            if (null == e) return [];
            let t = s.A.getUserProfile(e);
            return t?.widgets ?? [];
        }, [e]);
    return t && null !== n ? n : o;
}
