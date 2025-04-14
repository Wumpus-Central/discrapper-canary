n.d(t, {
    _: () => c,
    u: () => l
});
var r = n(305325),
    i = n(246364),
    o = n(937111),
    a = n(703656),
    s = n(981631);
let l = (e) => {
        var t, n;
        return (null == (t = e.features) ? void 0 : t.includes(s.oNc.MEMBER_VERIFICATION_GATE_ENABLED)) && (null == (n = e.features) ? void 0 : n.includes(s.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL));
    },
    c = (e) => {
        let t = o.Z.getRequest(e);
        null != t && t.applicationStatus !== i.wB.STARTED ? (0, a.uL)(s.Z5c.GUILD_MEMBER_VERIFICATION(e)) : (0, r.hk)(e);
    };
