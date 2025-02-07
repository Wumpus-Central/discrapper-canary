n.d(t, {
    _: () => c,
    u: () => u
});
var i = n(305325),
    r = n(63568),
    a = n(246364),
    s = n(937111),
    o = n(703656),
    l = n(981631);
let u = (e) => {
        var t, n, i, a;
        return (0, r.K2)(e.id, 'invite') ? (null === (t = e.features) || void 0 === t ? void 0 : t.includes(l.oNc.MEMBER_VERIFICATION_GATE_ENABLED)) && (null === (n = e.features) || void 0 === n ? void 0 : n.includes(l.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) : (null === (i = e.features) || void 0 === i ? void 0 : i.includes(l.oNc.MEMBER_VERIFICATION_GATE_ENABLED)) && !(null === (a = e.features) || void 0 === a ? void 0 : a.includes(l.oNc.PREVIEW_ENABLED));
    },
    c = (e) => {
        let t = s.Z.getRequest(e);
        null != t && t.applicationStatus !== a.wB.STARTED ? (0, o.uL)(l.Z5c.GUILD_MEMBER_VERIFICATION(e)) : (0, i.hk)(e);
    };
