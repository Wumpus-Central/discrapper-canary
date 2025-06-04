n.d(t, { Z: () => s });
var r = n(668757),
    i = n(626135),
    o = n(981631);
class a {
    static isBlockedDomain(e) {
        let t = (0, r.X6)() ? (0, r.PJ)(e) : null;
        return '' !== t && null !== t && i.default.track(o.rMx.LINK_SECURITY_CHECK_BLOCKED, { blocked_domain: t }), t;
    }
}
let s = a;
