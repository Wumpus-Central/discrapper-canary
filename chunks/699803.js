"use strict";
n.d(t, { A: () => l }), n(321073);
var r = n(64700),
    i = n(311907),
    a = n(429913),
    s = n(989837),
    o = n(485878);
function l() {
    let e = (0, i.bG)([s.A], () => s.A.initialState(), []),
        t = (0, a.h)(e?.applicationId);
    return r.useMemo(() => {
        if (null == e) return;
        let n = [{ type: o.Wy.HOME }];
        return null != e.applicationId && null != t && n.push({ type: o.Wy.APPLICATION, application: t }), n;
    }, [e, t]);
}
