"use strict";
n.d(t, { A: () => o });
var r = n(306173),
    i = n(954571),
    a = n(652215);
class s {
    static isBlockedDomain(e) {
        let t = (0, r.xd)() ? (0, r.tR)(e) : null;
        return "" !== t && null !== t && i.default.track(a.HAw.LINK_SECURITY_CHECK_BLOCKED, { blocked_domain: t }), t;
    }
}
let o = s;
