n.d(t, {
    _: () => u,
    u: () => c
});
var r = n(305325),
    i = n(63568),
    o = n(246364),
    a = n(937111),
    s = n(703656),
    l = n(981631);
let c = (e) => {
        var t, n, r, o;
        return (0, i.K2)(e.id, 'invite') ? (null == (t = e.features) ? void 0 : t.includes(l.oNc.MEMBER_VERIFICATION_GATE_ENABLED)) && (null == (n = e.features) ? void 0 : n.includes(l.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) : (null == (r = e.features) ? void 0 : r.includes(l.oNc.MEMBER_VERIFICATION_GATE_ENABLED)) && !(null == (o = e.features) ? void 0 : o.includes(l.oNc.PREVIEW_ENABLED));
    },
    u = (e) => {
        let t = a.Z.getRequest(e);
        null != t && t.applicationStatus !== o.wB.STARTED ? (0, s.uL)(l.Z5c.GUILD_MEMBER_VERIFICATION(e)) : (0, r.hk)(e);
    };
