"use strict";
n.d(t, { A: () => _ });
var i = n(64700),
    r = n(17928),
    s = n(889227),
    a = n(994500),
    o = n(354670),
    l = n(378135),
    d = n(788868);
function _() {
    let e = (0, l.k)(d.Dw),
        t = (0, r.bG)([o.A], () => o.A.getReferrer(e?.trial_id)),
        n = (0, r.bG)([a.A], () => null == t || a.A.isBlockedOrIgnored(t.id));
    return i.useMemo(() => (n || null == t ? null : new s.A(t)), [t, n]);
}
