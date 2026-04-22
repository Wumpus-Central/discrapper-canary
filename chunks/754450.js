"use strict";
n.d(t, { A: () => a });
var r = n(306173),
    i = n(954571),
    s = n(652215);
let a = class {
    static isBlockedDomain(e) {
        let t = (0, r.xd)() ? (0, r.tR)(e) : null;
        return "" !== t && null !== t && i.default.track(s.HAw.LINK_SECURITY_CHECK_BLOCKED, { blocked_domain: t }), t;
    }
};
