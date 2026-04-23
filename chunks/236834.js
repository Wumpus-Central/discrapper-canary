"use strict";
n.d(t, { A: () => c });
var r = n(64700),
    i = n(311907),
    s = n(427157),
    a = n(994500),
    o = n(816733),
    l = n(378135),
    u = n(788868);
function c() {
    let e = (0, l.k)(u.Dw),
        t = (0, i.bG)([o.A], () => o.A.getReferrer(e?.trial_id)),
        n = (0, i.bG)([a.A], () => null == t || a.A.isBlockedOrIgnored(t.id));
    return r.useMemo(() => (n || null == t ? null : new s.A(t)), [t, n]);
}
